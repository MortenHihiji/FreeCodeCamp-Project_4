import mongoose, { Schema, Document } from 'mongoose';
import isEmail from 'validator/lib/isEmail';

interface IMessage extends Document {
  text: {
    type: String;
    require: boolean;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
  unread: {
    type: boolean;
    default: boolean;
  };
}

const MessageSchema = new Schema(
  {
    text: { type: String, required: Boolean },
    dialog: { type: Schema.Types.ObjectId, ref: 'dialog', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    unread: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const MessageModel = mongoose.model<IMessage>('message', MessageSchema);

export default MessageModel;
