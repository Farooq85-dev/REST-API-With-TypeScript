import { model, Schema } from "mongoose";

const PcSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 0,
  },
});

export const Pc = model("Pc", PcSchema);
