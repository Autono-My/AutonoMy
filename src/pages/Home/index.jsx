// Import Funções
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Card1 from "../../components/Card/Card1";

// Import Icones / Imagens
import Grafico from "../../assets/images/graph.png";
import Task from "../../assets/icons/Task.svg";
import Pin from "../../assets/icons/Pin.svg";
import Screen from "../../assets/icons/Screen.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Calculator from "../../assets/icons/Calculator.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import Graph from "../../assets/icons/Graph.svg";
import GraphRGB from "../../assets/icons/GraphGradiente.svg";
import CalendarRGB from "../../assets/icons/CalendarGradiente.svg";
import CalculatorRGB from "../../assets/icons/CalculatorGradiente.svg";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* First section */}
        <section>
          <div className="bg-white/[.90] flex flex-row justify-between font-poppins-extrabold px-20 py-36">
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

        {/* Second Section */}
        <section>
          {/* Cards de cima */}
          <div className="px-20 py-28 w-screen bg-black/[.90] flex flex-col justify-center items-center font-poppins-extrabold gap-10">
            <div>
              <h2 className="size-fit text-[4rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text ">
                Conheça a plataforma!
              </h2>
            </div>
            <div className="w-screen flex flex-row justify-center gap-10">
              <Card
                icone={Task}
                texto="Gerencie seu negocio de forma simples e intuitiva"
              />
              <Card icone={Pin} texto="Tenha acesso a diversas ferramentas" />
              <Card icone={Screen} texto="Todas as metricas que voce precisa" />
            </div>

            {/* Cards debaixo */}
            {/* Primeiro card */}
            <div className="flex flex-row justify-center items-center h-[35rem] w-[81rem] gap-4">
              <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% rounded-[2rem] h-full w-[7rem] p-1">
                <div className="h-full w-full bg-black/[.30] rounded-[calc(2rem-0.25rem)] flex flex-col items-center justify-center gap-6">
                  <a href="#">
                    <img src={Linkedin} alt="" className="size-14" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" className="size-14" />
                  </a>
                  <a href="#">
                    <img src={Youtube} alt="" className="size-14" />
                  </a>
                </div>
              </div>
              {/* Segundo card */}
              <div className="w-full h-full bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% rounded-[2rem] p-1 flex flex-row">
                <div className="w-full bg-black/[.30] rounded-[calc(2rem-0.25rem)] flex flex-col items-center justify-center gap-2">
                  <a href="#">
                    <img src={Youtube} alt="" className="size-20" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section>
          <div className="px-20 py-28 w-screen bg-white/[.90] flex flex-col justify-center items-center font-poppins-extrabold gap-16">
            <div>
              <h2 className="size-fit text-[4rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text ">
                Principais funcionalidades!
              </h2>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <Card1 icone={Calendar} iconeRGB={CalendarRGB} titulo="Calendario inteligente" desc="Datas, vendas e prazos importantes, nos te avisamos!"/>
              <Card1 icone={Graph} iconeRGB={GraphRGB} titulo="Metricas e desempenho" desc="Acompanhe seu progresso, gastos, vendas e lucro!"/>
              <Card1 icone={Calculator} iconeRGB={CalculatorRGB} titulo="Calculadora de custos" desc="Calcule seus gastos e precifique melhor os seus serviços e/ou seu negocio!"/>
            </div>
            <div>
              <h2 className="w-screen text-[2.25rem] text-center">
                Reunimos tudo que voce precisa em um so lugar<span className="bg-gradient-to-b from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">!</span>
              </h2>
              <p className="text-center font-poppins-regular mt-4 text-lg">Cansado de usar diversas ferramentas diferentes somente para um proposito? <br />
              Deixa que a gente resolve isso pra voce! <br />
              Todas as ferramentas que voce precisa estao disponiveis <span className="bg-gradient-to-b from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">aqui!</span></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
