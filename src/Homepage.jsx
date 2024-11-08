import MotoristasSlider from "./MotoristasSlider";
import { useState } from "react";
import Header from "./Header";
import Item from "./Item";
import Carousel from "./Carousel";
import PriceDisplay from "./PriceDisplay/PriceDisplay";
import Devices from "./Devices/Devices.jsx"
import Faqs from "./Faqs/Faqs.jsx"

import "../old/public/styles/build/styles.css"
import "../old/public/styles/build/common.css";

export default function HomePage() {
    const [numMotoristas, setNumMotoristas] = useState(7);
    return (
        <>
            <Header />

            <main className="sideindented">
                <section id="landing">
                    <div className="promotion">
                        14 DIAS GRÁTIS
                    </div>
                    <div className="title">
                        Simplifique a gestão da sua frota TVDE
                    </div>
                    <div className="subtitle">
                        Agrupe todas as plataformas e torne tudo muito mais simples
                    </div>
                    <div className="email_and_submit">
                        <input type="email" name="submit_email" className="landingemail" placeholder="Endereço de e-mail" />
                        <a href="public/signin.html" className="bigbutton bigbutton-animated">
                            <span className="comecar"> Começar </span>
                            <img src="./public/assets/seta_direita.png" alt="right arrow" />
                        </a>
                    </div>
                </section>

            </main>

            <section className="detalhes_plataforma sideindented">
                <div className="detalhes_container">
                    <div className="detalhes">
                        <div className="sectionheader">
                            Plataforma Unificada
                        </div>
                        <div className="sectiontitle">
                            Uma plataforma totalmente integrada
                        </div>
                        <div className="sectiontext">
                            <span className="brand_mentioned">QOOV</span> é um software de controlo de fortas TVDE que permite fazer
                            a sua gestão de forma totalmente integrada.
                            Nós juntamos, num único lugar, tudo aquilo que necessita para gerir a sua frota da melhor maneira.
                        </div>
                        <a href="public/signin.html" className="bigbutton bigbutton-animated">
                            Comece a gerir a sua frota com a QOOV
                        </a>
                    </div>
                    <img className="stackedlogin" src="./public/assets/imagem_iniciar_sessao.png" alt="login images" />
                </div>


                <div id="actionitemlist">
                    <Item src="icon_target.jpeg" title="Centralizar o seu negócio">
                        Todas as plataformas (Uber, Bolt, Via Verde e mais) reunidas num único lugar
                    </Item>
                    <Item src="icon_calculator.jpeg" title="Calcular instantaneamente o seu lucro">
                        Insira todas as suas despesas (manutençoes, leasing/renting, combustível e mais)
                    </Item>
                    <Item src="icon_coin.jpeg" title="Faturação geral">
                        Agrupe a faturação de ambas as plataformas (Uber e Bolt) e controle tudo simultaneamente
                    </Item>
                    <Item src="icon_plus.jpeg" title="Apurar o vencimento dos seus motoristas">
                        Saiba o que pagar ao seu motorista para qualquer intervalo de tempo
                    </Item>
                    <Item src="icon_star.jpeg" title="Comparar os seus motoristas">
                        Compare os ganhos e os gastos dos seus motoristas
                    </Item>
                    <Item src="icon_chat.jpeg" title="Comunicar diretamente com os seus motoristas">
                        Envie relatórios para os seus motoritsas de forma instantânea
                    </Item>
                </div>
            </section>


            <section className="company_stats">
                <div className="statheader">
                    <div className="stattitle">
                        Dedique o seu tempo ao que realmente importa
                    </div>
                    <div className="statsubtitle">
                        Com a <span className="highlight_brand">QOOV</span> deixa de perder tempo com os morosos processos de
                        control da sua frota
                    </div>
                </div>

                <div className="statsrow">
                    <div className="stats">
                        <div className="statnumber">
                            25 <span className="smaller">mil</span>
                        </div>
                        <div className="statcaption">
                            motoristas são controlados diariamente na <span className="highlight_brand">QOOV</span>
                        </div>
                    </div>

                    <div className="stats">
                        <div className="statnumber">
                            5 <span className="smaller">mil</span>
                        </div>
                        <div className="statcaption">
                            frotas estão registadas na <span className="highlight_brand">QOOV</span>
                        </div>
                    </div>


                </div>
                <footer>
                    Powered by Qoov
                </footer>


                {/* <div className="carousel"> */}
                <Carousel />
                {/* <ul className="opinions carousel__list" data-offset="0">
                        <li className="opinion carousel__item" data-pos="-1">
                            <h1 className="opiniontitle">Empresa XPTO</h1>
                            <p className="opiniontext">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo
                                laoreet sit amet cursus..”
                            </p>
                            <div className="opinionauthor">
                                <div className="profile_pic">FM</div>
                                <div className="author_container">
                                    <div className="author_name">Francisco Martins</div>
                                    <div className="author_role">Diretor Geral</div>
                                </div>
                            </div>
                        </li>
                        <li className="opinion carousel__item" data-pos="0">
                            <h1 className="opiniontitle">Empresa XPTO</h1>
                            <p className="opiniontext">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo
                                laoreet sit amet cursus..”
                            </p>
                            <div className="opinionauthor">
                                <div className="profile_pic">FM</div>
                                <div className="author_container">
                                    <div className="author_name">Francisco Martins</div>
                                    <div className="author_role">Diretor Geral</div>
                                </div>
                            </div>
                        </li>
                        <li className="opinion carousel__item" data-pos="1">
                            <h1 className="opiniontitle">Empresa XPTO</h1>
                            <p className="opiniontext">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo
                                laoreet sit amet cursus..”
                            </p>
                            <div className="opinionauthor">
                                <div className="profile_pic">FM</div>
                                <div className="author_container">
                                    <div className="author_name">Francisco Martins</div>
                                    <div className="author_role">Diretor Geral</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> */}

            </section>



            <section className="pricing sideindented">
                <div className="detalhes">
                    <div className="sectionheader">
                        Pricing
                    </div>
                    <div className="sectiontitle">
                        Uma <span className="highlight_brand"> única solução </span> <br />para todas as empresas
                    </div>
                    <div className="sectiontext">
                        Na <span className="highlight_brand">QOOV</span> existe um plano adquado à gestão da sua frota. Analise
                        e experimente durante 14 dias sem qualquer compromisso. Ficou satisfeito?
                        Subscreva o plano e cancele quando quiser sem qualquer custo adicional.
                        Além de diversas funcionalidades, garantimos atualizações gratuitas e automáticas.
                    </div>


                    <div className="slider_and_show">
                        <div className="slider_container sectiontext">
                            <p>Quanto maior a frota, maior a poupança. <br />Quantos <span
                                className="highlight_brand">motoristas</span>
                                tem a sua frota?</p>
                            <MotoristasSlider initial_value={7} onValueChange={setNumMotoristas} />

                        </div>

                        <PriceDisplay num_motoristas={numMotoristas} />

                    </div>
                </div>
            </section>


            <section className="ambiente">
                <div className="sectionheader">
                    Ambiente responsivo
                </div>
                <div className="sectiontitle">
                    Controle a frota em qualquer lugar
                </div>
                <Devices />

                <a href="./public/signin.html" className="bigbutton bigbutton-animated">
                    Começar
                </a>
            </section>

            {/* <section className="expo_devices">
                <img src="./public/assets/phone_blurred.png" alt="" />
                <img src="./public/assets/computer_highlighted.png" alt="" />
                <img src="./public/assets/tablet_blurred.png" alt="" />
            </section> */}

            <section id="faqs">
                <Faqs />
            </section>

            <footer>

            </footer>
        </>

    )

}

