export default function Devs(props) {
  return (
    <>
     <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% rounded-[1.5rem] p-1 min-w-[400px]">
      <div className="bg-black/[.30] rounded-[calc(1.5rem-0.25rem)] flex items-center pr-32 py-4 w-full">
        <div>
        <img className="mx-4 size-20" src={props.foto} alt="" />
        </div>
        <div>
          <p className="text-white border-0">{props.nome}</p>
          <p className="text-cyan-400">{props.cargo}</p>
          <p className="text-white">{props.funcao}</p>
        </div>
      </div>
      </div>
    </>
  );
}
