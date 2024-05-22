import { Link } from "react-router-dom";
import AutonoMyFooter from "../../assets/images/AutonoMy-Logo-Footer.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-black flex flex-col items-center justify-center">
        <div className="my-6">
          <img className="py-2 px-80" src={AutonoMyFooter} alt="Logo" />
          <div className="w-full bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% p-[1px]"></div>
        </div>
        <nav className="text-xl font-poppins-semibold text-white relative mb-6">
          <ul className="flex gap-10">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link>Funcionalidades</Link>
            </li>
            <li>
              <Link>Planos</Link>
            </li>
            <li>
              <Link to="/quemsomos">Quem somos?</Link>
            </li>
            <li>
              <Link>Atendimento</Link>
            </li>
            <li>
              <Link>SAC</Link>
            </li>
          </ul>
        </nav>
        <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% w-full"> 
          <div className="bg-black/[.30] w-full">
            <p className="flex justify-center text-white font-poppins-regular py-3 ">© AutonoMy | todos os direitos reservados | 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
