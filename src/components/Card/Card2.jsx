export default function Card2(props) {
  return (
    <>
    {/* codigo bugado, animacao nao funciona */}
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
      </div>
    </>
  )
}