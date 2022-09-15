import mongoose from 'mongoose';
import { BaseModel } from '.';

export interface User extends BaseModel {
  name: string;
  email: string;
  password: string;
}

export interface ExistingUser extends User {
  id: string;
}

export enum CUSTOM_VALIDATION {
  DUPLICATED = 'DUPLICATED',
}

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const User = mongoose.model<User>('User', schema);
