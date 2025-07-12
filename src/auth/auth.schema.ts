import { Schema, Document } from 'mongoose';

export interface AuthInterface extends Document {
  email: string;
  password: string;
  username?: string;
}

export const AuthSchema = new Schema<AuthInterface>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String },
  },
  {
    timestamps: true,
  },
);
