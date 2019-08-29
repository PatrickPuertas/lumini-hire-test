import React from 'react';
//import '../../img';

class Main extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <header className="section header header-v6 p-0" id="main">
                        <div className="shape-wrapper">
                            <img src="img/v6/header/bg-shape.svg" className="main-background img-responsive" alt="" />
                            <div className="shape shape-background shape-top center-xy"></div>
                            <div className="shape shape-background shape-right"></div>
                        </div>
                        <div className="container overflow-hidden">
                            <div className="row gap-y">
                                <div className="col-md-7">
                                    <p className="regular small text-uppercase color-7">innovative solutions for the demanding customer</p>
                                    <h1 className="extra-bold display-md-3 font-md">CompIAnce
							<span className="d-block light">Smart business</span>
                                    </h1>
                                    <p className="lead">Ajudamos sua empresa a alcançar seus objetivos com ferramentas de Analytics e Inteligência Artifical.</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-shape-wrapper">
                            <div data-aos="fade-left" data-aos-delay="300">
                                <img src="img/v6/header/main-shape.svg" className="img-responsive main-shape" alt="" />
                                <img src="img/v6/header/anim-1.svg" className="anim anim-1 floating" alt="" />
                                <img src="img/v6/header/anim-1.svg" className="anim anim-2 floating" alt="" />
                                <img src="img/v6/header/anim-1.svg" className="anim anim-3 floating" alt="" />
                            </div>
                        </div>
                    </header>
                    <section id="pricing">
                        <div class="container">
                            <div class="section-heading text-center">
                                <h2 class="mb-2">Preços Simples e Acessíveis</h2>
                                <p class="lead color-2">Veja as oportunidades de planos e preços.</p>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mt-5">
                                    <div class="card text-center">
                                        <div class="pricing card-header bg-6-gradient d-flex align-items-center flex-column">
                                            <h4>Personal</h4>
                                            <div class="pricing-value">
                                                <span class="price bold">0.99</span>
                                            </div>
                                            <p>Plano individual, trazendo o essencial para o profissional da sua empresa.</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item strike-through">Ferramentas de Análise de Inidicadores (KPIs)</li>
                                            <li class="list-group-item strike-through">Equipe de Analistas de Negócios</li>
                                            <li class="list-group-item strike-through">Conteúdos voltados para o Conhecimento e Desenvolvimento das suas Habilidades</li>
                                            <li class="list-group-item">Acesso as Ferramentas de Analytics e AI Voltadas a sua Necessidade</li>
                                            <li class="list-group-item">Suporte Técnico 24/7</li>
                                        </ul>
                                        <div class="card-body">
                                            <a class="btn btn-outline-2">Compre agora</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-5">
                                    <div class="card text-center">
                                        <div class="pricing card-header bg-3-gradient color-1 d-flex align-items-center flex-column">
                                            <h4>Business</h4>
                                            <div class="pricing-value">
                                                <span class="price bold">29.99</span>
                                            </div>
                                            <p>Para empresas de pequeno/médio porte que desejam permanecer competitivas no mercado e crescer com a tecnologia.</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                        <li class="list-group-item strike-through">Ferramentas de Análise de Inidicadores (KPIs)</li>
                                            <li class="list-group-item strike-through">Equipe de Analistas de Negócios</li>
                                            <li class="list-group-item">Conteúdos voltados para o Conhecimento e Desenvolvimento das suas Habilidades</li>
                                            <li class="list-group-item">Acesso as Ferramentas de Analytics e AI Voltadas a sua Necessidade</li>
                                            <li class="list-group-item">Suporte Técnico 24/7</li>
                                        </ul>
                                        <div class="card-body">
                                            <a class="btn btn-accent">Compre agora</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-5">
                                    <div class="card text-center">
                                        <div class="pricing card-header bg-6-gradient d-flex align-items-center flex-column">
                                            <h4>Enterprise</h4>
                                            <div class="pricing-value">
                                                <span class="price bold">99.99</span>
                                            </div>
                                            <p>Tudo o que você pode obter de uma solução profissional para manter seus negócios a caminho do sucesso.</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Ferramentas de Análise de Inidicadores (KPIs)</li>
                                            <li class="list-group-item">Equipe de Analistas de Negócios</li>
                                            <li class="list-group-item">Conteúdos voltados para o Conhecimento e Desenvolvimento das suas Habilidades</li>
                                            <li class="list-group-item">Acesso as Ferramentas de Analytics e AI Voltadas a sua Necessidade</li>
                                            <li class="list-group-item">Suporte Técnico 24/7</li>
                                        </ul>
                                        <div class="card-body">
                                            <a class="btn btn-outline-2">Compre agora</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section features-carousel b-b" id="about">
                        <div className="container pt-12">
                        <div class="section-heading text-center">
                                <h2 class="mb-2">Nossos Objetivos e Metas</h2>
                                <p class="lead color-2">Tudo aquilo que acreditamos e podemos te oferecer!</p>
                            </div>
                            <div className="swiper-container" data-sw-show-items="4" data-sw-autoplay="3500" data-sw-loop="true" data-sw-nav-arrows=".features-nav" data-sw-breakpoints='{"1024": {"slidesPerView": 4,"spaceBetween": 40},"992": {"slidesPerView": 3,"spaceBetween": 30},"768": {"slidesPerView": 2,"spaceBetween": 30},"576": {"slidesPerView": 1,"spaceBetween": 10}}'>
                                <div className="swiper-wrapper px-1">
                                    <div className="swiper-slide px-2 px-sm-1 py--4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body">
                                                <div className="rounded-circle bg-6 p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                                                    <img src="img/v6/icons/chat.svg" className="img-responsive" alt="" />
                                                </div>
                                                <h4 className="mt-4">Chat<br />
                                                    <span className="bold">24/7</span>
                                                </h4>
                                                <p>Acesso 24/7 ao Nosso Chat Ao Vivo com uma Equipe para te Auxiliar.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide px-2 px-sm-1 py--4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body">
                                                <div className="rounded-circle bg-6 p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                                                    <img src="img/v6/icons/strategy.svg" className="img-responsive" alt="" />
                                                </div>
                                                <h4 className="mt-4">Design<br />
                                                    <span className="bold">Strategy</span>
                                                </h4>
                                                <p>Trabalhamos direto com sua equipe/empresa para saber qual o melhor plano e estratégia que <span className="bold">VOCÊ</span> deve adotar.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide px-2 px-sm-1 py--4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body">
                                                <div className="rounded-circle bg-6 p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                                                    <img src="img/v6/icons/money.svg" className="img-responsive" alt="" />
                                                </div>
                                                <h4 className="mt-4">Preços<br />
                                                    <span className="bold">Competitivos</span>
                                                </h4>
                                                <p>Nossos Preços são os mais Competitivos do Mercado, trazendo o melhor conteúdo e auxílio pelo melhor preço.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide px-2 px-sm-1 py--4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body">
                                                <div className="rounded-circle bg-6 p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                                                    <img src="img/v6/icons/user.svg" className="img-responsive" alt="" />
                                                </div>
                                                <h4 className="mt-4">Business<br />
                                                    <span className="bold">Brain</span>
                                                </h4>
                                                <p>Ajudamos a Mudar as <span className="bold">Estratégias de Negócio</span> da sua Empresa, colocando nossos melhores Consultores em Analytics e AI para o auxílio dessa mudança.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide px-2 px-sm-1 py--4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body">
                                                <div className="rounded-circle bg-6 p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                                                    <img src="img/v6/icons/worldwide.svg" className="img-responsive" alt="" />
                                                </div>
                                                <h4 className="mt-4">Suporte<br />
                                                    <span className="bold">Global</span>
                                                </h4>
                                                <p>Colocamos nossas Equipes para o Auxílio e Melhor Atendimento em qualquer Língua e Local do Globo Terrestre.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide px-2 px-sm-1 py--4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body">
                                                <div className="rounded-circle bg-6 p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                                                    <img src="img/v6/icons/like.svg" className="img-responsive" alt="" />
                                                </div>
                                                <h4 className="mt-4">Segurança das<br />
                                                    <span className="bold">Informações</span>
                                                </h4>
                                                <p>Utilizamos uma <span className="bold">Dupla autenticação</span>, melhorando e deixando segura as Informações da sua empresa no nosso Sistema.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide px-2 px-sm-1 py--4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body">
                                                <div className="rounded-circle bg-6 p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                                                    <img src="img/v6/icons/graph.svg" className="img-responsive" alt="" />
                                                </div>
                                                <h4 className="mt-4">Insights<br />
                                                    <span className="bold">Estatísticos</span>
                                                </h4>
                                                <p>Trazemos Insights com base Estatística para o melhor Aproveitamento das Estratégias propostas, através de Analytics e AI.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accent features-nav features-nav-next">
                                    <span className="text-uppercase small">Próximo</span>
                                    <i className="features-nav-icon"></i>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section" id="whyChoose">
                        <div className="container">
                            <div className="row gap-y align-items-center">
                                <div className="col-md-6">
                                    <div className="section-heading">
                                        <p className="color-2 small text-uppercase">Alguns Porques</p>
                                        <h2 className="bold">Porque Escolher a CompIAnce?</h2>
                                    </div>
                                    <p className="regular">Já estamos presentes nas Maiores empresas do Mercado mostrando NOSSO VALOR e VISÃO, sendo uma das mais reconhecidas no ramo de Planejamento Estratégico trazedo Soluções em Analytics e AI.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="animate-bars">
                                        <ul className="progress-bars whyus-progress-bars"></ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row gap-y pt-5">
                                <div className="col-6 col-md-3">
                                    <i className="pe pe-7s-plugin accent font-md mr-2"></i>
                                    <span className="counter bold color-5 font-md">73</span>
                                    <p className="color-2 m-0">Ferramentas</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <i className="pe pe-7s-cloud-download accent font-md mr-2"></i>
                                    <span className="counter bold color-5 font-md">65524</span>
                                    <p className="color-2 m-0">Downloads</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <i className="pe pe-7s-tools accent font-md mr-2"></i>
                                    <span className="counter bold color-5 font-md">171</span>
                                    <p className="color-2 m-0">Desenvolvedores</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <i className="pe pe-7s-medal accent font-md mr-2"></i>
                                    <span className="counter bold color-5 font-md">12</span>
                                    <p className="color-2 m-0">Prêmios</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section gradient gradient-34 color-1">
                        <div className="container text-center pb-7 pb-md-0">
                            <div className="section-heading p-4">
                                <h2 className="bold">Entre em Contato</h2>
                                <p className="lead">Fale Conosco e Ajudaremos na melhor Solução para sua Empresa.</p>
                            </div>
                        </div>
                    </section>
                    <section className="section mt-9n">
                        <div className="container">
                            <div className="row gap-y">
                                <div className="col-md-6 mt-4">
                                    <div className="rounded media bg-1 shadow-lg p-4">
                                        <i className="shadow far fa-paper-plane gradient gradient-43 color-1 rounded-circle fa-2x mr-3 p-3" data-aos="zoom-in"></i>
                                        <div className="media-body">
                                            <h5 className="bold text-capitalize">Fácil de Integrar</h5>
                                            <p className="color-2 mb-0">Nossos Produtos são fáceis de Integrar com sua Empresa.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="rounded media bg-1 shadow-lg p-4">
                                        <i className="shadow far fa-heart gradient gradient-43 color-1 rounded-circle fa-2x mr-3 p-3" data-aos="zoom-in"></i>
                                        <div className="media-body">
                                            <h5 className="bold text-capitalize">Solução Perfeita para VOCÊ</h5>
                                            <p className="color-2 mb-0">Temos uma Equipe de Consultores Especialistas para te auxiliar na Melhor Escolha.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section singl-testimonial">
                        <div className="container pt-4 bring-to-front">
                            <div className="swiper-container pb-0 pb-lg-8" data-sw-nav-arrows=".reviews-nav">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="row gap-y align-items-center">
                                            <div className="col-lg-6">
                                                <figure className="testimonial-img ml-md-auto">
                                                    <img src="img/v6/reviews/1.jpg" className="img-responsive rounded shadow-lg" alt="..." />
                                                </figure>
                                            </div>
                                            <div className="col-lg-6 ml-md-auto">
                                                <div className="user-review text-center italic bg-3 color-1 rounded shadow-lg py-5 px-4 px-lg-6">
                                                    <blockquote className="regular py-4">Com certeza a melhor escolha que fiz em 2019, ultrapassou todas as minhas expectativas.</blockquote>
                                                    <div className="author mt-4">
                                                        <p className="small">
                                                            <span className="bold color-5">Francisco Dalglish,</span> Analista de Recursos Humanos na Lumini IT Solutions</p>
                                                        <img src="img/v6/reviews/signature.svg" className="img-responsive signature mx-auto" alt="..." />
                                                    </div>
                                                    <div className="shape-wrapper" data-aos="fade-up">
                                                        <svg className="svg-review-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#8B41EB"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#DC92FF"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#A45AFF"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="row gap-y align-items-center">
                                            <div className="col-lg-6">
                                                <figure className="testimonial-img ml-md-auto">
                                                    <img src="img/v6/reviews/2.jpg" className="img-responsive rounded shadow-lg" alt="..." />
                                                </figure>
                                            </div>
                                            <div className="col-lg-6 ml-md-auto">
                                                <div className="user-review text-center italic bg-3 color-1 rounded shadow-lg py-5 px-4 px-lg-6">
                                                    <blockquote className="regular py-4">Conseguiu auxiliar a Lumini com as melhores ferramentas, mostrando KPIs e vários outros indicadores dos nossos projetos!</blockquote>
                                                    <div className="author mt-4">
                                                        <p className="small">
                                                            <span className="bold color-5">Thiago Lombardi Terra,</span> Head of Business Development na Lumini IT Solutions</p>
                                                        <img src="img/v6/reviews/signature.svg" className="img-responsive signature mx-auto" alt="..." />
                                                    </div>
                                                    <div className="shape-wrapper" data-aos="fade-up">
                                                        <svg className="svg-review-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#8B41EB"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#DC92FF"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#A45AFF"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="row gap-y align-items-center">
                                            <div className="col-lg-6">
                                                <figure className="testimonial-img ml-md-auto">
                                                    <img src="img/v6/reviews/3.jpg" className="img-responsive rounded shadow-lg" alt="..." />
                                                </figure>
                                            </div>
                                            <div className="col-lg-6 ml-md-auto">
                                                <div className="user-review text-center italic bg-3 color-1 rounded shadow-lg py-5 px-4 px-lg-6">
                                                    <blockquote className="regular py-4">Auxiliou com grande destreza todos os pontos acordados, desde a melhor qualidade de Software até a melhor Consultoria dos processos internos de criação de Software.</blockquote>
                                                    <div className="author mt-4">
                                                        <p className="small">
                                                            <span className="bold color-5">Elton (Schivei) Costa,</span> Leader of Software Development at Lumini IT Solutions</p>
                                                        <img src="img/v6/reviews/signature.svg" className="img-responsive signature mx-auto" alt="..." />
                                                    </div>
                                                    <div className="shape-wrapper" data-aos="fade-up">
                                                        <svg className="svg-review-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#8B41EB"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#DC92FF"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#A45AFF"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="row gap-y align-items-center">
                                            <div className="col-lg-6">
                                                <figure className="testimonial-img ml-md-auto">
                                                    <img src="img/v6/reviews/4.jpg" className="img-responsive rounded shadow-lg" alt="..." />
                                                </figure>
                                            </div>
                                            <div className="col-lg-6 ml-md-auto">
                                                <div className="user-review text-center italic bg-3 color-1 rounded shadow-lg py-5 px-4 px-lg-6">
                                                    <blockquote className="regular py-4">Com certeza foi a melhor escolha que já fiz como CEO da Lumini, hoje consigo visualizar todos os indicadores da minha empresa e consegui escalar meu negócio com muita agilidade.</blockquote>
                                                    <div className="author mt-4">
                                                        <p className="small">
                                                            <span className="bold color-5">Fernanda Presidio,</span> CEO and Founder at Lumini IT Solutions. Conselheira de Governança - IBGC.</p>
                                                        <img src="img/v6/reviews/signature.svg" className="img-responsive signature mx-auto" alt="..." />
                                                    </div>
                                                    <div className="shape-wrapper" data-aos="fade-up">
                                                        <svg className="svg-review-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#8B41EB"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#DC92FF"></path>
                                                        </svg>
                                                        <svg className="svg-review-bottom back left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                            <path d="M95,0 Q90,90 0,100 L100,100 100,0 Z" fill="#A45AFF"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-navigation">
                                    <div className="reviews-nav reviews-nav-prev btn btn-6 btn-rounded shadow-box shadow-hover">
                                        <span className="text-uppercase small">Anterior</span>
                                        <i className="reviews-nav-icon fas fa-long-arrow-alt-left"></i>
                                    </div>
                                    <div className="reviews-nav reviews-nav-next btn btn-6 btn-rounded shadow-box shadow-hover">
                                        <span className="text-uppercase small">Próximo</span>
                                        <i className="reviews-nav-icon fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Main;