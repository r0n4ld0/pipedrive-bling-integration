interface IParamsProvider {
  status?: "all_not_deleted" | "open" | "won" | "lost" | "deleted";
  limit?: number;
}

interface IDeal {
  id: number;
  date: Date;
  value: number;
  customer: string;
}

interface IDealProvider {
  importDeals(params: IParamsProvider): Promise<IDeal[]>;
}

export { IDealProvider, IParamsProvider, IDeal };
