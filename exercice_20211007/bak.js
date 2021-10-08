let menu = document.getElementById("menu");
let sticky = menu.offsetTop;
window.onscroll = function() { navs() };

function navs() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}

// formulaire de contact envoyer message

function envoyer() {
  let noms = "sabrina";
  let prenoms = "hajar";
  let mail = "mail@gmail.com";
  let messages = bonjour;

  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (
    nom == noms &&
    prenom == prenoms &&
    email == mail &&
    message == messages
  ) {
    alert("message envoyer");
    return true;
  } else if (nom == "" && prenom == "" && email == "" && messages == "") {
    alert("champsVide");
    return false;
  } else {
    alert("erreur de saisie");
    return false;
  }
}