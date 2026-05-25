import { Logo } from './Logo'
import { Nav } from './Nav'
import { Filtro } from './Filtro'

export function Header() {
  return (
    <header className='flex justify-between items-center p-2 bg-[var(--color-light)]'>
      <Logo />
      <Filtro className='' />
      <Nav />
    </header>
  )
}