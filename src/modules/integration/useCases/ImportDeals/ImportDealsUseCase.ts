import { PipedriveProvider } from "../../services/dealProvider/PipedriveProvider";
import { DealRepository } from "../../infra/mongoose/repositories/DealRepository";
import { CreateOrderUseCase } from "../CreateOrder/CreateOrderUseCase";

class ImportDealsUseCase {
  async execute(): Promise<void> {
    const pipeDrive = new PipedriveProvider();
    const dealRepository = new DealRepository();
    const createOrderUseCase = new CreateOrderUseCase();

    const deals = await pipeDrive.importDeals({ status: "won" });

    for (const deal of deals) {
      await dealRepository.findByDealIdOrCreate({
        dealId: deal.id,
        customer: deal.customer,
        date: deal.date,
        value: deal.value,
      });
    }

    await createOrderUseCase.execute();
  }
}
export { ImportDealsUseCase };
