import { Schema, model } from "mongoose";

interface Summary {
  date: Date;
  total: number;
}

const SummarySchema = new Schema<Summary>({
  date: { type: "date", required: true },
  total: { type: "number", required: true },
});

const SummaryModel = model<Summary>("Summary", SummarySchema);

export { SummaryModel, Summary };
