import bcrypt from "bcrypt";
import {
  getModelForClass,
  prop,
  index,
  modelOptions,
  pre,
} from "@typegoose/typegoose";

@pre<CitizenClass>("save", function () {
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
})
@modelOptions({
  schemaOptions: {
    minimize: false,
    collection: "citizens",
    toJSON: {
      transform: (doc, ret, opts) => {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  },
})
export class CitizenClass {
  @prop({ required: true, unique: true })
  public username!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ required: true })
  public name!: string;

  @prop({})
  public gender!: string;

  @prop({})
  public weight!: number;

  @prop({})
  public height!: number;

  @prop({})
  public medicines!: string[];

  @prop({})
  public diseases!: string[];

  public comparePassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}

const CitizenModel = getModelForClass(CitizenClass);

export default CitizenModel;
