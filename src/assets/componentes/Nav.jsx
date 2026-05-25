import { useState } from 'react'

export function Nav() {

  const [aberto, setAberto] = useState(false)

  return (
    <nav className="relative">

      {/* BOTÃO HAMBÚRGUER */}
      <button
        onClick={() => setAberto(!aberto)}
        className="md:hidden"
      >
        <span className="material-symbols-outlined text-3xl">
          menu
        </span>
      </button>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-5">

        <a href="">
          <span className="material-symbols-outlined">
            person
          </span>
        </a>

        <a href="" className="relative">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>

          <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-white text-xs px-1">
            0
          </span>
        </a>

      </div>

      {/* MENU MOBILE */}
      {
        aberto && (
          <div className="absolute right-0 top-12 flex flex-col bg-white shadow-lg p-4 rounded gap-4 md:hidden">

<a href="">
          <span className="material-symbols-outlined">
            person
          </span>
        </a>

        <a href="" className="relative">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>

          <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-white text-xs px-1">
            0
          </span>
        </a>

          </div>
        )
      }

    </nav>
  )
}