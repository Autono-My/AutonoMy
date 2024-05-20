export default function Card(props) {
  return (
    <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% rounded-[2rem] p-1">
      <div className="bg-black/[.30] flex flex-col justify-center items-center text-center font-poppins-extrabold rounded-[calc(2rem-0.25rem)] w-[24.8rem] h-fit gap-3 py-5">
        <img src={props.icone} alt="" className="size-10" />
        <p className="text-[1rem] text-white ">{props.texto}</p>
      </div>
    </div>
  );
}
