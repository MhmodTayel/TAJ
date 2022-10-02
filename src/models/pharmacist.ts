import bcrypt from "bcrypt";

import {
  getModelForClass,
  prop,
  index,
  modelOptions,
  pre,
} from "@typegoose/typegoose";

@pre<PharmacistClass>("save", function () {
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
})
@modelOptions({
  schemaOptions: {
    minimize: false,
    collection: "pharmacists",
    toJSON: {
      transform: (doc, ret, opts) => {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  },
})
export class PharmacistClass {
  @prop({ required: true })
  public username!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public graduationYear!: string;

  @prop({ required: true })
  public age!: string;

  @prop({ required: true })
  public faculty!: string;

  @prop({ required: true })
  public university!: string;

  @prop({})
  public lastYearGrade!: number;

  @prop({})
  public photo!: string;

  public comparePassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}

const PharmacistModel = getModelForClass(PharmacistClass);

export default PharmacistModel;
