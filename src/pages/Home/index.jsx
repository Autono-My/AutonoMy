// Import Funções
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Card1 from "../../components/Card/Card1";
import Card2 from "../../components/Card/Card2";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

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
import Correct from "../../assets/icons/Correct.svg";
import Wrong from "../../assets/icons/Wrong.svg";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* First section */}
        <section>
          <div className="bg-white/[.85] flex flex-row justify-between font-poppins-extrabold px-20 py-36">
            <div className="flex flex-col justify-start items-start gap-2.5">
              <div className="size-fit  leading-[4.5rem]">
                <h2 className="text-[3.6rem]">Controle,</h2>
                <h2 className="text-[3.6rem]">Gestão,</h2>
                <h2 className="text-[4.5rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">
                  Autonomia.
                </h2>
              </div>
              <p className="font-poppins-semibold text-pretty mb-3 text-cinza">
                Vendas, datas, preços?
                <br />
                Dificuldades em gerenciar seu negócio autonômo?
                <br />
                Nós podemos te ajudar!
              </p>
              <div className="group size-full place-content-center place-items-center flex justify-center pr-10">
                <div className="bg-gradient-to-r from-rosa from-0% via-roxo via-40% to-ciano to-100% w-fit rounded-2xl py-1 px-1 transition-all duration-200 ease-linear group-hover:p-[0.5rem] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                  <button
                    type="button"
                    className="bg-white/[.85] py-[.5rem] px-32 rounded-[calc(1rem-0.25rem)] w-fit transition-all duration-200 ease-linear group-hover:bg-transparent group-hover:text-white group-hover:text-xl"
                  >
                    Conheça Já!
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <img src={Grafico} alt="Gráfico" className="max-w-xl" />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="h-[780px]">
          {/* Cards de cima */}
          <div
            id="plataforma"
            className="w-screen h-full bg-black/[.80] flex flex-col justify-center items-center font-poppins-extrabold gap-10"
          >
            <div>
              <h2 className="size-fit text-[3rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text ">
                Dê uma olhada na plataforma!
              </h2>
            </div>
            <div className="w-[81rem] flex flex-row justify-center gap-10">
              <Card
                icone={Task}
                texto="Gerencie seu negócio de forma simples"
              />
              <Card icone={Pin} texto="Tenha acesso a diversas ferramentas" />
              <Card icone={Screen} texto="Todas as métricas que você precisa" />
            </div>

            {/* Cards debaixo */}
            {/* Primeiro card */}
            <div className="flex flex-row justify-center items-center h-[27rem] w-[81rem] gap-10">
              <div className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% rounded-[2rem] h-full w-[7rem] p-1">
                <div className="h-full w-full bg-black/[.30] rounded-[calc(2rem-0.25rem)] flex flex-col items-center justify-center gap-14">
                  <a href="#">
                    <img src={Linkedin} alt="" className="size-12" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" className="size-12" />
                  </a>
                  <a href="#">
                    <img src={Youtube} alt="" className="size-12" />
                  </a>
                </div>
              </div>
              {/* Segundo card */}
              <div className="w-[65%] h-full bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% rounded-[2rem] p-1 flex flex-row">
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
        <section className="h-[780px]">
          <div className="w-screen h-full bg-white/[.85] flex flex-col justify-center items-center font-poppins-extrabold gap-10">
            <div>
              <h2 className="size-fit text-[3rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text ">
                Principais funcionalidades!
              </h2>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <Card1
                icone={Calendar}
                iconeRGB={CalendarRGB}
                titulo="Calendário inteligente"
                desc="Datas, vendas e prazos importantes, nós te avisamos!"
              />
              <Card1
                icone={Graph}
                iconeRGB={GraphRGB}
                titulo="Métricas e desempenho"
                desc="Acompanhe seu progresso, gastos, vendas e lucro!"
              />
              <Card1
                icone={Calculator}
                iconeRGB={CalculatorRGB}
                titulo="Calculadora de custos"
                desc="Calcule seus gastos e precifique melhor os seus serviços e/ou seu negócio!"
              />
            </div>
            <div className="flex flex-col justify-center items-center font-poppins-semibold">
              <h2 className="w-screen text-[2.25rem] text-center font-poppins-extrabold">
                Reunimos tudo que você precisa em um só lugar
                <span className="bg-gradient-to-b from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">
                  !
                </span>
              </h2>
              <p>
                Cansado de usar diversas ferramentas diferentes para um
                proposito?
              </p>
              <p>Deixa que a gente resolve isso pra você!</p>
              <div className="flex flex-row gap-1">
                <p>Todas as ferramentas que você precisa estao disponíveis</p>
                <Link>
                  <p className="bg-gradient-to-b from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text font-poppins-extrabold ">
                    aqui!
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[780px]">
          <div className="w-screen h-full bg-black/[.80] flex flex-col justify-center items-center font-poppins-extrabold gap-10">
            <div>
              <h2 className="size-fit text-[3rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text ">
                Planos por assinatura!
              </h2>
            </div>
            <div className="flex flex-row gap-16">
              <Card2
                plano="Gratuito"
                valor="0,00"
                data={"Vitalício"}
                icone1={Correct}
                icone2={Wrong}
                icone3={Wrong}
                icone4={Wrong}
              />
              <Card2
                plano="Premium"
                valor="59,99"
                data={"Mensal"}
                icone1={Correct}
                icone2={Correct}
                icone3={Correct}
                icone4={Wrong}
              />
              <Card2
                plano="Premium vitalício"
                valor="699,99"
                data={"Vitalício"}
                icone1={Correct}
                icone2={Correct}
                icone3={Correct}
                icone4={Correct}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
