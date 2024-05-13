import { Link } from "react-router-dom";
import AutonoMyLogo from "../../assets/images/autonomy-logo.svg";

export default function Header() {
  return (
    <header className="bg-white/[.95] flex justify-between items-center max-w-full py-5 px-20 after:content[''] after:object-bottom after:absolute after:w-full after:h-1 after:bg-black after:px-0 after:py-0 after:left-0 after:top-[5.5rem] after:bg-gradient-to-r from-rosa from-0% via-roxo via-40% to-ciano to-100%">
      <img
        src={AutonoMyLogo}
        type="svg"
        alt="logo AutonoMy"
        className="max-w-60 mr-5"
      />
      <nav>
        <ul className="flex text-xl gap-10 font-poppins-semibold text-cinza">
          <li>
            <Link>Quem somos?</Link>
          </li>
          <li>
            <Link>Plataforma</Link>
          </li>
          <li>
            <Link>Funcionalidades</Link>
          </li>
          <li>
            <Link>Planos</Link>
          </li>
        </ul>
      </nav>
      <div className="gap-2.5 py-2.5 px-5 flex text-xl font-poppins-semibold">
        <button type="button">
          <Link>Login</Link>
        </button>
        <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% h-8 w-0.5"></div>
        <button type="button">
          <Link>Cadastro</Link>
        </button>
      </div>
    </header>
  );
}
