console.log("Testando o webpack");
import Head from "next/head";
import styled from "styled-components";


import styles from "../styles/Home.module.scss";



export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1>Associação</h1>
          <h2>dos Veiculos de Comunicação do Distrito Federal(AVEC)</h2>
          <a href="#about" class="btn-get-started scrollto">
            Contato
          </a>
        </div>
      </section>
      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
              <img src="/img/about.jpg" class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h3>
                A Associação dos Veículos de Comunicação do Distrito Federal
                (Avec)
              </h3>
              <p class="fst-italic">
                é uma entidade sem fins lucrativos, com sede em Brasília/DF,e
                atuação em todo o Distrito Federal e Entorno.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i>
                  Reúne empresas de rádio, televisão e jornal para a promoção e
                  a defesa igualitária dos seus ideais e interesses, mormente os
                  relativos à liberdade de comunicação, de informação, de
                  criação artística, de expressão do pensamento, de
                  independênciae liberdade jornalística.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" class="why-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up">
              <div class="box">
                <span>
                  <span
                    class="iconify"
                    data-icon="bx:bx-paper-plane"
                    data-inline="false"
                  ></span>
                </span>
                <h4>MISSÃO</h4>
                <p>
                  A missão da Avec estende-se ao combate à pirataria, à defesa
                  da propriedade privada dos meios de comunicação dentro do
                  regime da livre e leal concorrência, dos valores sociais e
                  éticos da família, da Soberania Nacional e dos interesses
                  superiores da Nação.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div class="box">
                <span>
                  <span
                    class="iconify"
                    data-icon="bx:bx-receipt"
                    data-inline="false"
                  ></span>
                </span>
                <h4>OBJETIVO</h4>
                <p>
                  Assegurar os seguintes princípios: a defesa e manutenção da
                  liberdade de expressão, combater o fornecimento de serviços
                  análogos ou similares aos da radiodifusão aberta ou fechada
                  por quaisquer empresas que não estejam organizadas e
                  credenciadas especificamente para exercer serviços de
                  radiodifusão ou de comunicação social; incentivar pesquisa
                  tecnológica; representar os associados em todos os foros
                  parlamentares, civis ou judiciais.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="box">
                <span>
                  <span
                    class="iconify"
                    data-icon="bx:bx-store"
                    data-inline="false"
                  ></span>
                </span>
                <h4> Fundação</h4>
                <p>
                  Somos uma associação criada para reunir os esforços e o
                  trabalho de empresas de rádio, televisão e jornal e entidades
                  ligadas à radiodifusão com o intuito de promover e defender a
                  liberdade de comunicação e informação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="clients" class="clients">
        <div class="container" data-aos="zoom-in">
          <div class="row d-flex align-items-center">
            <div class="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-1.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-2.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-3.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-4.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-5.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-6.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <span>Notícias</span>
            <h2>Notícias</h2>
          </div>

          <div class="row">
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href="">Avisos</a>
                </h4>
                <h2>
                  <span>70 Anos da TV Brasileira</span>
                </h2>
                <p>
                  No dia 18 de setembro de 1950, Assis Chateaubriand – fundador
                  da TV Tupi -, dava o sinal verde para a primeira transmissão
                  audiovisual aberta da história do Brasil. Hoje, 70 anos depois
                  desse grande marco
                </p>
                <div class="btn-wrap">
                  <a href="http://avecdf/70-anos-da-tv-brasileira/" class="btn-buy">Saiba Mais</a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4>
                  <a href="">AVISOS</a>
                </h4>
                <h2>
                  <span>Nota de Repúdio</span>
                </h2>
                <p>
                  As associações que representam os radiodifusores, Abert e Abratel,
                  publicaram em conjunto uma “nota de repúdio”
                  contra a que consideram “inadmissível” medida cautelar da Anatel
                  que proibiu a Fox de oferecer programação linear diretamente ao
                </p>
                <div class="btn-wrap">
                  <a href="http://avecdf/70-anos-da-tv-brasileira/" class="btn-buy">Saiba Mais</a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-arch"></i>
                </div>
                <h4>
                  <a href="">NOTÍCIAS</a>
                </h4>
                <h2>AIR propõe criação de organizações de defesa da liberdade publicitária</h2>
                <p>
                  O valor da publicidade na liberdade de expressão foi destacado pelo presidente do CONAR 
                  (Conselho de Autorregulamentação Publicitária), João Luiz Faria Netto, durante reunião do Conselho Diretor da AIR 
                  (Associação Internacional de Radiodifusão), na quarta-feira
                </p>
                <div class="btn-wrap">
                  <a href="http://avecdf/70-anos-da-tv-brasileira/" class="btn-buy">Saiba Mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-in">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                <img src="/img/antena.png" class="img-fluid" alt="" />
              </div>
              <div
                class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                data-aos="fade-right"
              >
                <h3>Fale com nossa equipe</h3>
                <p>
                  {" "}
                  A Associação dos Veículos de Comunicação do Distrito Federal
                  (Avec) é uma entidade sem fins lucrativos, com sede em
                  Brasília/DF, e atuação em todo o Distrito Federal e Entorno.
                  Reúne empresas de rádio, televisão e jornal para a promoção e
                  a defesa igualitária dos seus ideais e interesses, mormente os
                  relativos à liberdade de comunicação, de informação, de
                  criação artística, de expressão do pensamento, de
                  independência e liberdade jornalística.
                </p>
                <a class="cta-btn" href="#">
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact">
        <div class="container">

          <div class="section-title">
            <span>Contato</span>
            <h2>Contato</h2>
            <p>Nossa equipe esta a disposição para esclarecer qualquer duvida! Fale conosco através de um de nossos canais de comunicação.</p>
          </div>

          <div class="row" data-aos="fade-up">
            <div class="col-lg-6">
              <div class="info-box mb-4">
                <i class="bx bx-map"></i>
                <h3>Nosso Endereço</h3>
                <p>SBS Quadra 02 Bloco Q Edifício João S. Saad 15/1503 | Brasília/DF</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Nosso Email</h3>
                <p>contato@avecdf.com.br</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Nosso Tel:</h3>
                <p>(61) 3321-0075</p>
              </div>
            </div>

          </div>

          <div class="row" data-aos="fade-up">

            <div class="col-lg-6 ">

            </div>

            <div class="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Seu Nome" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Seu Email" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Assunto" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Menssagen" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Carregando</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Sua mensagem foi enviada. Obrigada!</div>
                </div>
                <div class="text-center"><button type="submit">Enviar mensagem</button></div>
              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
