import { Summary } from "../../infra/mongoose/entities/Summary";
import { SummaryRepository } from "../../infra/mongoose/repositories/SummaryRepository";

class ListSummaryUseCase {
  async execute(): Promise<Summary[]> {
    const summaryRepository = new SummaryRepository();

    const summaries = await summaryRepository.list();

    return summaries;
  }
}
export { ListSummaryUseCase };
