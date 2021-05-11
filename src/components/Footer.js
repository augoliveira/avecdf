import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    
     <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
            <a href="https://balaiodacriacao.com.br/" class="logo"> <img src="/img/avec-df-logo2.png" alt="" class="img-fluid"/></a>
              <p>
              SBS Quadra 02 Bloco Q Edifício João S. Saad 15/1503 <br/>
                Brasilia-DF<br/><br/>
                <strong>Atendimento:</strong> 61) 3321-0075<br/>
                <strong>Email:</strong> contato@avecdf.com.br<br/>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Links Úteis</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Sobre-nós</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Notícias</a></li>
              
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Parceiros</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="https://dtv.org.br/">Site oficial da TV Digital Brasileira</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.gov.br/mcti/pt-br">Ministério das Comunicações</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.gov.br/anatel/pt-br/">ANATEL - Agência Nacional de Telecomunicações</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="http://www.abra.inf.br/">Associação Brasileira Radiodifusores</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        © Copyright <strong>Avec</strong>. Todos Direitos Reservados
      </div>
      <div class="credits">
       
      Projetado por <a href="https://balaiodacriacao.com.br/">Balaio da criação</a><a href="https://balaiodacriacao.com.br/" class="logo"> <img src="/img/icon.png" alt="" class="img-fluid"/></a>
      </div>
    </div>
    </div>
    </div>
  </footer>

    
    
  );
};

export default Footer;
