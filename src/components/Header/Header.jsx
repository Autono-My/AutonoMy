import { Link } from "react-router-dom";
import AutonoMyLogo from "../../assets/images/autonomy-logo1.svg";
import AutonoMyLogo2 from "../../assets/images/autonomy-logo2.png";

export default function Header() {
  return (
    <header className="bg-white/[.95] flex justify-between items-center max-w-full py-5 first:pl-6 after:content[''] after:object-bottom after:absolute after:w-full after:h-1 after:bg-black after:px-0 after:py-0 after:left-0 after:top-[5.5rem] after:bg-gradient-to-r from-rosa from-0% via-roxo via-40% to-ciano to-100%">
      <div className="w-[80px]">
        <Link to="" className="absolute">
          <img
            src={AutonoMyLogo2}
            type="png"
            alt="logoAutonoMy"
            className="h-[5rem] -translate-y-10"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex text-xl gap-16 font-poppins-semibold text-cinza hover:*:bg-gradient-to-r from-rosa from-0% via-roxo via-40% to-ciano to-100% *:transition-all *:duration-300 *:ease-in-out hover:*:text-transparent hover:*:bg-clip-text">
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
        <button type="button ">
          <Link to="/login" className="hover:bg-gradient-to-r from-rosa from-0% via-roxo via-40% to-ciano to-100% transition-all duration-300 ease-in-out hover:text-transparent hover:bg-clip-text">Login</Link>
        </button>
        <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% h-8 w-1"></div>
        <button type="button">
          <Link to="/cadastro" className="hover:bg-gradient-to-r from-rosa from-0% via-roxo via-40% to-ciano to-100% transition-all duration-300 ease-in-out hover:text-transparent hover:bg-clip-text">Cadastro</Link>
        </button>
      </div>
    </header>
  );
}
