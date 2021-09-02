import { Request, Response } from "express";

import { ImportDealsUseCase } from "./ImportDealsUseCase";

class ImportDealsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const importDealsUsecase = new ImportDealsUseCase();
    await importDealsUsecase.execute();

    return response.json({ success: true, message: "Deals imported." });
  }
}

export { ImportDealsController };
