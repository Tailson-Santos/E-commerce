import { useContext } from "react";
import { AppContext } from "../../../app/providers/AppContext";

export function SelectFrete() {
  const { frete, setFrete } = useContext(AppContext);

  const fretes = [
    { prazo: "1", valor: 30 },
    { prazo: "5", valor: 15 },
    { prazo: "7", valor: 10 },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">Escolha o frete</h2>

      {fretes.map((item) => (
        <label key={item.prazo}>
          <input
            type="radio"
            name="frete"
            checked={frete === item.valor}
            onChange={() => setFrete(item.valor)}
          />

          <span className="ml-2">
            {item.prazo} Dia(s) - R$ {item.valor.toFixed(2)}
          </span>
        </label>
      ))}
    </div>
  );
}