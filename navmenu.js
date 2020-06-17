document.getElementById('insert-nav-here').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">
    <img src="/assets/images/logo-light.svg" class="img-fluid" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"  data-toggle="collapse" data-target="#navbarSupportedContent">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item active"  data-toggle="collapse" data-target="#navbarSupportedContent">
        <a class="nav-link" href="#agency">Agência</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#portfolio" data-toggle="collapse" data-target="#navbarSupportedContent">Portfólio</a>
    </li>
    <li class="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent">
      <a class="nav-link" href="#">Trabalhe Conosco</a>
    </li>
    <li class="nav-item dropdown" >
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Saiba Mais
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown"  data-toggle="collapse" data-target="#navbarSupportedContent">
        <a class="dropdown-item" href="#">Tailor Made Marketing</a>
        <a class="dropdown-item" href="#">Saiba mais sobre a Fole</a>
        <a class="dropdown-item" href="#">Nosso time</a>
      </div>
    </li>
    <li class="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
      <a href="#footer" class="nav-link">Contato</a>
    </li>
  </ul>
</div>
</nav>
`