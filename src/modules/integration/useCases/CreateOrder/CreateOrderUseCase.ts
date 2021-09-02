import { DealRepository } from "../../infra/mongoose/repositories/DealRepository";
import { BlingProvider } from "../../services/orderProvider/BlingProvider";
import { SummaryRepository } from "../../infra/mongoose/repositories/SummaryRepository";

class CreateOrderUseCase {
  async execute(): Promise<void> {
    const dealRepository = new DealRepository();
    const blingProvider = new BlingProvider();
    const summaryRepository = new SummaryRepository();

    const deals = await dealRepository.listDealWithoutOrder();

    if (deals) {
      for (const deal of deals) {
        const orderId = await blingProvider.createOrder({
          customer: deal.customer,
          value: deal.value,
        });

        if (orderId > 0) {
          await dealRepository.updateOrderId(deal.dealId, orderId);

          await summaryRepository.createOrUpdate({
            date: deal.date,
            value: deal.value,
          });
        }
      }
    }
  }
}
export { CreateOrderUseCase };
