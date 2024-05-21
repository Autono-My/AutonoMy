// Componentes
import Header from "../../components/Header/Header";
import Devs from "../../components/Card/Devs";
import Card3 from "../../components/Card/Card3";

// Imagens
import Guilherme from "../../assets/images/Guilherme.svg";
import Computer from "../../assets/images/ComputerCS.svg";

// Icones
import Graphic from "../../assets/icons/Graphic.svg";
import Mission from "../../assets/icons/Mission.svg";

export default function QuemSomos() {
  return (
    <>
      <Header />
      <main>
        {/* Primeira Section */}
        <section>
          <div className="bg-white/[.90] flex flex-row justify-between font-poppins-extrabold px-16 py-16">
            <div className="flex flex-col justify-start items-start gap-2.5 text-[3rem]">
              <h2 className="px-5 py-5">
                Como a Autono
                <span className="bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">My</span> surgiu?
              </h2>
              <p className="leading-10 text-[1.4rem] font-poppins-semibold text-pretty px-5 py-6">A <span className="text-[1.4rem] font-poppins-extrabold">Autono<span className="text-[1.4rem] bg-purple-900 text-transparent bg-clip-text">My</span>
                </span> surgiu com o desejo de ajudar e auxiliar trabalhadores
                autônomos. Com essa ideia em mente desenvolvemos uma plataforma
                que junta todas as ferramentas necessárias para administrar e
                gerenciar seu negócio em um só lugar.
              </p>
            </div>
            <img src={Computer} alt="Image" />
          </div>
        </section>

        {/* Segunda Section */}
        <section>
          <div className="w-screen h-full bg-black/[.90] flex flex-col justify-center items-center font-poppins-extrabold gap-10 py-20">
            <h2 className="size-fit text-[3rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">
              Quem Somos nós?
            </h2>

            <div className="flex grid grid-rows-3 grid-flow-col gap-8">
              <Devs
                foto={Guilherme}
                nome="Guilherme Rocha"
                cargo="Product Owner"
                funcao="FullStack"
              />
              <Devs
                foto={Guilherme}
                nome="Kauã Oraboni"
                cargo="Scrum Master"
                funcao="UI & UX e BD"
              />
              <Devs
                foto={Guilherme}
                nome="Ryan Almeida"
                cargo="Financeiro"
                funcao="FullStack"
              />
              <Devs
                foto={Guilherme}
                nome="Maria Eduarda"
                cargo="Developer"
                funcao="Front-End"
              />
              <Devs
                foto={Guilherme}
                nome="Kauan Anderson"
                cargo="Developer"
                funcao="FullStack"
              />
              <Devs
                foto={Guilherme}
                nome="Adaylson Arcanjo"
                cargo="Developer"
                funcao="Back-End"
              />
            </div>
          </div>
        </section>

        {/* Terceira Section */}
        <section>
          <div className="bg-white/[.90] flex flex-row grid justify-items-center font-poppins-extrabold px-16 py-20 flex flex-col flex flex-col space-y-10 ">
            <div>
            <h2 className="flex size-fit text-[3rem] bg-gradient-to-br from-rosa from-0% via-roxo via-40% to-ciano to-100% text-transparent bg-clip-text">
              Missão, Visão e Valores
            </h2>
            </div>
            <div className="">
              <Card3
                icone={Mission}
                titulo="Missão"
                texto="Ajudar e auxiliar os profissionais autônomos no conhecimento e gerenciamento do seu negócio"
              />
            </div>
            <div>
              <Card3 icone={Graphic} 
              titulo="Visão"
              texto="Ser uma plataforma completa com todas as funcionalidades que um
              autônomo precisa para gerenciar seu negócio."/>
             
            </div>
            <div>
              <Card3 icone={Graphic}
              titulo="Valores" 
              texto="Ser um espaço acolhedor independente de gênero, deficiência, raça, etnia, origem, religião, condição econômica ou outros."/>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
