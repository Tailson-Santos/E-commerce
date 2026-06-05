import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[var(--color-muted)] border-t">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-8
          flex
          flex-col
          md:flex-row
          justify-between
          gap-8
        "
      >
        {/* Marca */}
        <div>
          <h2 className="text-xl font-bold">
            FakeStore
          </h2>

          <p className="text-gray-600 mt-2 max-w-sm">
            Projeto desenvolvido com React,
            Context API e consumo de API.
          </p>

          <div className="flex gap-4 mt-4 text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-semibold mb-3">
            Navegação
          </h3>

          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="hover:text-green-700"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/carrinho"
                className="hover:text-green-700"
              >
                Carrinho
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-green-700"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold mb-3">
            Contato
          </h3>

          <p>contato@fakestore.com</p>
          <p>(71) 99999-9999</p>
        </div>
      </div>

      <div
        className="
          border-t
          text-center
          py-4
          text-sm
          text-gray-600
        "
      >
        © {new Date().getFullYear()} FakeStore —
        Desenvolvido com React.
      </div>
    </footer>
  );
}