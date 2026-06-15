import { useContext } from "react";

import { AppContext } from "../../../app/providers/AppContext";
import { Card } from "./Card";

export function ListaProdutos() {
  const { produtos } = useContext(AppContext);

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        p-5
      "
    >
      {produtos.map((produto) => (
        <Card key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
