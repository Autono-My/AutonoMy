export default function Card3(props) {
  return (
    // Card usado na section 3: missão visão e valores
    <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% bg-clip-text p-1">
    <div className="bg-white rounded-[2rem] py-8 px-4 border-4 border-rosa">
      <div className="flex flex-row justify-start items-center font-poppins-extrabold rounded-[calc(2rem-0.25rem)]  gap-4 w-[1000px]">
        <div className="">
          <img src={props.icone} alt="Icone" className="size-20" />
        </div>

        <div>
          <h2 className="text-[2rem] text-black font-poppins-extrabold bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">{props.titulo}</h2>
          <p className="text-[1.5rem] text-black font-poppins-regular">{props.texto}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
