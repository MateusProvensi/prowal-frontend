import { useState } from "react";

import { ROUTES } from "../../../routes/routes";

interface SideBarItemOptions {
  title: string;
  icon: string;
  url: string;
  onClick?(): void;
}

interface SideBarGroupOptions {
  title: string;
  itens: SideBarItemOptions[];
}

type SideBarOptions = SideBarGroupOptions[];

export function useSideBar() {
  const groupsSideBar: SideBarOptions = [
    {
      title: "",
      itens: [{ title: "Dashboard", icon: "dashboard", url: ROUTES.HOME }],
    },

    {
      title: "Cadastros",
      itens: [
        { title: "Accounts", icon: "accounts", url: ROUTES.ACCOUNTS },
        {
          title: "Credit Cards",
          icon: "creditCards",
          url: ROUTES.CREDIT_CARDS,
        },
        { title: "Categories", icon: "categories", url: ROUTES.CATEGORIES },
      ],
    },

    {
      title: "Movements",
      itens: [
        {
          title: "Transactions",
          icon: "transactions",
          url: ROUTES.TRANSACTIONS,
        },
        {
          title: "Credit Card Transactions",
          icon: "creditCardTransactions",
          url: ROUTES.CREDIT_CARD_TRANSACTIONS,
        },
      ],
    },

    {
      title: "",
      itens: [{ title: "Sair", icon: "exit", url: ROUTES.LOGIN }],
    },
  ];

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleChangeOpenSideBar() {
    setIsSideBarOpen((prevValue) => !prevValue);
  }

  return { groupsSideBar, handleChangeOpenSideBar, isSideBarOpen };
}
