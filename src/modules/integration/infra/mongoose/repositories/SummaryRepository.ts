import {
  ISummaryRepository,
  ICreateSummaryDTO,
} from "../../../repositories/ISummaryRepository";

import { SummaryModel, Summary } from "../entities/Summary";

class SummaryRepository implements ISummaryRepository {
  private repository;

  constructor() {
    this.repository = SummaryModel;
  }

  async list(): Promise<Summary[]> {
    const summaries = await this.repository.find({}, "date total");

    return summaries;
  }

  async createOrUpdate({ date, value }: ICreateSummaryDTO): Promise<void> {
    const dateParsed = new Date(date.setUTCHours(0, 0, 0, 0));

    const summary = await this.repository.findOneAndUpdate(
      { date: dateParsed },
      { $inc: { total: value } }
    );

    if (!summary) {
      await this.repository.create({ date: dateParsed, total: value });
    }
  }
}

export { SummaryRepository };
