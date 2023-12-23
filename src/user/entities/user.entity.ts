import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { UserPackage } from 'src/packages/entities/user_packages.entity';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ default: false })
  is_admin: boolean;

  @Prop({ default: 'inactive' })
  status: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'UserPackage' }], // Use UserPackage type here
    default: [],
  })
  userPackages: Types.ObjectId[];

  @Prop({ type: String, default: null })
  father: string | null;

  @Prop({ type: String, default: null })
  grandfather: string | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
