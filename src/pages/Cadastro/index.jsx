import AutonoMyLogo from "../../assets/images/autonomy-logo.svg";
import Computadores from "../../assets/images/Computer.svg";
import Google from "../../assets/icons/Google.svg"
import { Link } from "react-router-dom"

export default function Cadastro(){
return(
  <div className="bg-login size-full flex font-poppins-regular">
  <div className="bg-white flex flex-col py-[7.5rem] px-[9rem] rounded-r-[3.75rem] gap-20">
    <img src={AutonoMyLogo} alt="Logo"/>
    <form method="post" action="#" className="flex flex-col">
      <label>Usuário</label>
      <div className="w-[23.5rem] h-[3.25rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% flex justify-center items-center rounded-[1.25rem]">
        <input
          type="text"
          className="p-2 rounded-[calc(1.25rem-0.25rem)] bg-white w-[23rem] h-[2.75rem]"
          required
        />
      </div>
      <label>Email</label>
      <div className="w-[23.5rem] h-[3.25rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% flex justify-center items-center rounded-[1.25rem]">
        <input
          type="text"
          className="p-2 rounded-[calc(1.25rem-0.25rem)] bg-white w-[23rem] h-[2.75rem]"
          required
        />
      </div>
      <label>Senha</label>
      <div className="w-[23.5rem] h-[3.25rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% flex justify-center items-center rounded-[1.25rem]">
        <input
          type="password"
          className="p-2 rounded-[calc(1.25rem-0.25rem)] bg-white w-[23rem] h-[2.75rem]"
          required
        />
      </div>
      <label>Confirmar Senha</label>
      <div className="w-[23.5rem] h-[3.25rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% flex justify-center items-center rounded-[1.25rem]">
        <input
          type="password"
          className="p-2 rounded-[calc(1.25rem-0.25rem)] bg-white w-[23rem] h-[2.75rem]"
          required
        />
      </div>
      <div className="flex justify-between text-gray-500	color: rgb(107 114 128); text-sm mt-3 mb-5">
        <a href="#">Recuperar senha</a>
        <Link to="/login">Login</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% bg-no-repeat p-1 rounded-[1.25rem]">
          <button className="w-[23rem] h-[2.75rem] text-white font-poppins-semibold">
            Cadastro
          </button>
        </div>
        <p>Ou</p>
        <div className="bg-black bg-no-repeat p-1 rounded-[1.25rem]">
          <button className="w-[23rem] h-[2.75rem] text-white font-poppins-semibold bg-white rounded-[calc(1.25rem-0.25rem)] flex justify-center items-center"><img src={Google} alt="" className="w-[1.75rem]"/></button>
          </div>
      </div>
    </form>
  </div>
  <div className="flex justify-center items-center p-20">
    <img
      src={Computadores}
      alt="Imagem de mulher com computador"
      className="w-[37.5rem]"
    />
  </div>
</div>
)
}