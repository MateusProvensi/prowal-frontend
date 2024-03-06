import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SideBarWithContent } from "../view/components/SideBarWithContent";
import { Accounts } from "../view/pages/Accounts";
import { Categories } from "../view/pages/Categories";
import { CreditCards } from "../view/pages/CreditCards";
import { CreditCardsTransactions } from "../view/pages/CreditCardsTransactions";
import { Home } from "../view/pages/Home";
import { Transactions } from "../view/pages/Transactions";

import { ROUTES } from "./routes";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<SideBarWithContent />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ACCOUNTS} element={<Accounts />} />
            <Route path={ROUTES.CREDIT_CARDS} element={<CreditCards />} />
            <Route path={ROUTES.CATEGORIES} element={<Categories />} />
            <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
            <Route
              path={ROUTES.CREDIT_CARD_TRANSACTIONS}
              element={<CreditCardsTransactions />}
            />
          </Route>
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
