import { parse } from "js2xmlparser";
import { blingApi } from "../../../../config/bling";
import { IOrderProvider, ICreateOrderDTO } from "./IOrderProvider";

class BlingProvider implements IOrderProvider {
  async createOrder({ customer, value }: ICreateOrderDTO): Promise<number> {
    const order = {
      cliente: {
        nome: customer,
      },
      itens: [
        {
          item: {
            codigo: "001",
            descricao: "Pipedrive",
            un: "Un",
            qtde: 1,
            vlr_unit: value,
          },
        },
      ],
    };

    const response = await blingApi.post("/pedido/json", null, {
      params: { xml: parse("pedido", order) },
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    if (response.data.retorno.pedidos[0]) {
      const { idPedido } = response.data.retorno.pedidos[0].pedido;
      return idPedido;
    }

    return 0;
  }
}

export { BlingProvider };
