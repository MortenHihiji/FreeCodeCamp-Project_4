import mongoose, { Schema, Document } from 'mongoose';
import isEmail from 'validator/lib/isEmail';

interface IDialog extends Document {
  partner: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
  author: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
  lastMessage: {
    type: Schema.Types.ObjectId;
    ref: string;
  };
}

const DialogSchema = new Schema(
  {
    partner: { type: Schema.Types.ObjectId, ref: 'user' },
    author: { type: Schema.Types.ObjectId, ref: 'user' },
    lastMessage: { type: Schema.Types.ObjectId, ref: 'message' },
  },
  {
    timestamps: true,
  },
);

const DialogModel = mongoose.model<IDialog>('dialog', DialogSchema);

export default DialogModel;
