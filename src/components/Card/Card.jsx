export default function Card(props) {
  return (
    <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% rounded-[2rem] p-1">
      <div className="bg-black/[.30] flex flex-col justify-center items-center text-center font-poppins-extrabold rounded-[calc(2rem-0.25rem)] px-10 py-8 gap-2">
        <img src={props.icone} alt="" className="size-14" />
        <p className="text-xl w-80 text-white ">{props.texto}</p>
      </div>
    </div>
  );
}
