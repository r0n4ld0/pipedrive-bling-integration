import { Schema, model } from "mongoose";

interface Deal {
  dealId: number;
  date: Date;
  value: number;
  customer: string;
  orderId: number;
}

const DealSchema = new Schema<Deal>({
  dealId: { type: "number", required: true },
  date: { type: "date", required: true },
  value: { type: "number", required: true },
  customer: { type: "string", required: true },
  orderId: { type: "number", required: false },
});

const DealModel = model<Deal>('Deal', DealSchema);

export { DealModel, Deal };
