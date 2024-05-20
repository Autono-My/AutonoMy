import { useState } from "react"

export default function Card1(props) {
  const [imagem, imagemAtualizada] = useState(props.icone);
  const imagemRGB = props.iconeRGB
  const imagemPR = props.icone

  return (
    <div onMouseEnter={() => imagemAtualizada(imagemRGB)} onMouseLeave={() => imagemAtualizada(imagemPR)} className="group transition-all ease-in-out duration-1000 p-1 bg-white drop-shadow-[0_10px_4px_rgba(0,0,0,0.25)] rounded-[1rem] hover:p-1 hover:bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100%">
      <div className="flex flex-col gap-4 justify-center items-center bg-white w-64 h-[20rem] rounded-[calc(1rem-0.25rem)] transition-all ease-in-out duration-300 hover:w-96">
        <img src={imagem} />
        <p className="hidden text-center w-3/4 group-hover:block"><span className="text-2xl bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">{props.titulo}</span> <br />
        {props.desc}</p>
      </div>
    </div>
  )
}