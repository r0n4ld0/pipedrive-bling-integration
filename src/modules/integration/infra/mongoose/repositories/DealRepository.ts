import {
  ICreateDealDTO,
  IDealRepository,
} from "../../../repositories/IDealRepository";

import { DealModel, Deal } from "../entities/Deal";

class DealRepository implements IDealRepository {
  private repository;

  constructor() {
    this.repository = DealModel;
  }

  async findByDealIdOrCreate({
    dealId,
    customer,
    date,
    value,
    orderId = 0,
  }: ICreateDealDTO): Promise<Deal | null> {
    const deal = await this.repository.findOne({ dealId });

    return (
      deal || this.repository.create({ dealId, customer, date, value, orderId })
    );
  }

  async listDealWithoutOrder(): Promise<Deal[] | null> {
    const deals = await this.repository.find({ orderId: 0 });

    return deals;
  }

  async updateOrderId(dealId: number, orderId: number): Promise<void> {
    await this.repository.findOneAndUpdate({ dealId }, { orderId });
  }
}

export { DealRepository };
