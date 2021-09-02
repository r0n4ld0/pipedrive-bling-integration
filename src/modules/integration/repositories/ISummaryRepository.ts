import { Summary } from "../infra/mongoose/entities/Summary";

interface ICreateSummaryDTO {
  date: Date;
  value: number;
}


interface ISummaryRepository {
  createOrUpdate(data: ICreateSummaryDTO): Promise<void>;
  list(): Promise<Summary[]>;
}

export { ISummaryRepository, ICreateSummaryDTO };
