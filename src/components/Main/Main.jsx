import Grafico from "../../assets/images/graph.png";

export default function Main() {
  return (
    <main>
      <section>
        <div className="bg-white/[.90] flex flex-row justify-between font-poppins-extrabold px-20 py-28">
          <div className="flex flex-col justify-center items-start gap-2.5">
            <div>
              <h2 className="size-fit text-[4rem] leading-[3.7rem] mb-2 ">
                Controle,
              </h2>
              <h2 className="size-fit text-[4rem] leading-[3.7rem] mb-2 ">
                Gestão,
              </h2>
              <h2 className="size-fit text-[4rem] leading-[3.7rem] mb-2  bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">
                Autonomia.
              </h2>
            </div>
            <p className="font-poppins-semibold text-pretty mb-3 text-cinza">
              Vendas, datas, preços?
              <br />
              Dificuldades em gerenciar seu negócio <br />
              autonômo?
              <br />
              Nós podemos te ajudar!
            </p>
            <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% max-w-fit rounded-2xl py-1 px-1">
              <button
                type="button"
                className="bg-white/[.90] py-[.5rem] px-6 rounded-[calc(1rem-0.25rem)] min-full"
              >
                Conheça Já!
              </button>
            </div>
          </div>
          <div className="">
            <img src={Grafico} alt="Gráfico" className="max-w-xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
