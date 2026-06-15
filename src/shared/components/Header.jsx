import { Filtro } from "../../features/produtos/components/Filtro";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header
      className="
        sticky
        top-0
        w-full
        flex
        justify-between
        items-center
        p-2
        bg-[var(--color-muted)]
        z-50
      "
    >
      <Logo />
      <Filtro />
      <Nav />
    </header>
  );
}
