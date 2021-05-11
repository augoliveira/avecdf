import styled from 'styled-components';
import Link from 'next/link';





const Navbar = () => {
  return (
    <>
    <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">contat@avecdf.com.br</a>
        <i class="bi bi-phone-fill phone-icon"></i> (61) 3321-0075
      </div>
      <a class="social-links d-none d-md-block">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a></a>
      </div>
  </section>

  
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      
      
     <a href="index.html" class="logo"><img src="/img/avec-df-logo2.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">Sobre-nós</a></li>
          <li><a class="nav-link scrollto" href="#services">Notícias</a></li>
          <li class="dropdown"><a href="#"><span>Paginas</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Sobre-Nós</a></li>
              <li><a href="#">Notícias</a></li>
              <li><a href="#">Links</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contato</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  
  </>

  

  );
}

export default Navbar;
