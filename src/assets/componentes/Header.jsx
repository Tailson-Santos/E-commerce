import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Filtro } from "./Filtro";

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