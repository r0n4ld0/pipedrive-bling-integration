import { Request, Response } from "express";

import { CreateOrderUseCase } from "./CreateOrderUseCase";

class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createOrder = new CreateOrderUseCase();
    await createOrder.execute();
    return response.send();
  }
}

export { CreateOrderController };
