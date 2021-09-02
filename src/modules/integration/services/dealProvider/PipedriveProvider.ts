import { pipedriveApi } from "../../../../config/pipedrive";
import { IParamsProvider, IDealProvider, IDeal } from "./IDealProvider";

interface IResponseDeal {
  id: number;
  won_time: Date;
  person_name: string;
  value: number;
}

class PipedriveProvider implements IDealProvider {
  async importDeals({
    status = "all_not_deleted",
    limit = 100,
  }: IParamsProvider): Promise<IDeal[]> {
    const { data: result } = await pipedriveApi.get("/deals", {
      params: { status, limit },
    });

    const deals: IDeal[] = [];

    result.data.forEach(
      ({ id, won_time, person_name, value }: IResponseDeal) => {
        deals.push({
          id,
          date: new Date(won_time),
          customer: person_name,
          value: value,
        });
      }
    );

    return deals;
  }
}

export { PipedriveProvider };
