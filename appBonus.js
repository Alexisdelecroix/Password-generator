const string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}()!%éèâ#:";

function generatePassword(event) {
  event.preventDefault();
  // On récupére la valeur de l'utilisateur
  let lengthInput = document.getElementById("length").value;

  // Si lengthInput est défini alors on utilise la valeur de l'utilisateur sinon length prend 12 par défaut
  let length = lengthInput ? lengthInput : 12;
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * string.length);
    password += string[index];
  }
  document.getElementById("resultMdp").value = password;
}
