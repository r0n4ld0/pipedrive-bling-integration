import { Request, Response } from "express";

import { ListSummaryUseCase } from "./ListSummaryUseCase";

class ListSummaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSummaryUseCase = new ListSummaryUseCase();

    const listSummary = await listSummaryUseCase.execute();

    return response.json(listSummary);
  }
}

export { ListSummaryController };
