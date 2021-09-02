interface ICreateOrderDTO {
  customer: string;
  value: number;
}

interface IOrderProvider {
  createOrder(data: ICreateOrderDTO): Promise<number>;
}

export { IOrderProvider, ICreateOrderDTO };
