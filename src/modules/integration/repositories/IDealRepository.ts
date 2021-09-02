import { Deal } from "../infra/mongoose/entities/Deal";

interface ICreateDealDTO {
  dealId: number;
  date: Date;
  value: number;
  customer: string;
  orderId?: number;
}

interface IDealRepository {
  findByDealIdOrCreate(data: ICreateDealDTO): Promise<Deal | null>;
  listDealWithoutOrder(): Promise<Deal[] | null>;
  updateOrderId(dealId: number, orderId: number): Promise<void>;
}

export { IDealRepository, ICreateDealDTO };
