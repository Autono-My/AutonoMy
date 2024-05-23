export default function Card2(props) {
  return (
    <>
      <div class="w-full px-4 mb-8 lg:mb-0 mx-auto max-w-[380px]">
        <div class="max-w-sm lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-gray-100 rounded-3xl">
          <div class="text-center mb-6">
            <h5 class="text-2xl font-semibold text-gray-800 mb-3">{props.plano}</h5>
            <span class="block text-5xl font-bold text-gray-800 mb-3">R${props.valor}</span>
            <span class="block text-gray-600 font-medium mb-6">
              {props.data}
            </span>
            <a
              href="#"
              class="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-gray-50 bg-gray-200 font-semibold rounded-full overflow-hidden transition duration-200"
            >
              <div class="absolute top-0 right-full w-full h-full bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span class="relative">Escolher plano</span>
            </a>
          </div>
          <ul>
            <li class="flex mb-4 items-center">
            <img className="size-[2rem]" src={props.icone1} alt="icone" />
              <span class="ml-2 text-gray-800">Unlimited Features</span>
            </li>
            <li class="flex mb-4 items-center">
            <img className="size-[2rem]" src={props.icone2} alt="icone" />
              <span class="ml-2 text-gray-800">Enhanced Security</span>
            </li>
            <li class="flex mb-4 items-center">
            <img className="size-[2rem]" src={props.icone3} alt="icone" />
              <span class="ml-2 text-gray-800">Priority Support</span>
            </li>
            <li class="flex mb-4 items-center">
              <img className="size-[2rem]" src={props.icone4} alt="icone" />
              <span class="ml-2 text-gray-800">Exclusive Access</span>
            </li>
          </ul>
        </div>
      </div>

      {/* codigo bugado, animacao nao funciona
      <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% drop-shadow-[0_10px_4px_rgba(0,0,0,0.25)] rounded-[1rem] p-1 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] w-[254px] transition duration-700 ease-in-out text-center hover:w-96 ">
        <div className="flex flex-col gap-6 bg-black/90 w-full h-full p-3 transition duration-700 ease-in-out rounded-[calc(1rem-0.25rem)]">
          <h2 className="text-2xl text-white">{props.plano}</h2>
          <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% p-1 rounded-2xl">
            <p className="text-black p-3 bg-white rounded-2xl">R$<span className="text-5xl bg-gradient-to-b from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">{props.valor}</span></p>
          </div>
          <div>
            <button className="py-3 px-10 bg-white rounded-xl transition duration-300 ease-in-out">Assine já</button>
          </div>
          <div className="">
            <p className="flex items-center gap-1 text-white mr-2"><img className="size-[2rem]" src={props.icone1} alt="" />Ferramentas basicas</p>
            <p className="flex items-center gap-1 text-white mr-2"><img className="size-[2rem]" src={props.icone2} alt="" />Sistema de métricas</p>
            <p className="flex items-center gap-1 text-white mr-2"><img className="size-[2rem]" src={props.icone3} alt="" />Sem anúncios </p>
            <p className="flex items-center gap-1 text-white mr-2"><img className="size-[2rem]" src={props.icone4} alt="" />Vitalício</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
