import { Router } from "express";

import { ImportDealsController } from "../../../modules/integration/useCases/ImportDeals/ImportDealsController";
import { ListSummaryController } from "../../../modules/integration/useCases/ListSummary/ListSummaryController";

const routes = Router();

const importDealsController = new ImportDealsController();

const listSummaryController = new ListSummaryController();

routes.post("/import", importDealsController.handle);
routes.get("/summary", listSummaryController.handle);

export { routes };
