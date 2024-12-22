function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let minuto = data.getMinutes();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;

  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "Images/Manha.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = "Images/Tarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    // Boa noite
    img.src = "Images/Noite.jpg";
    document.body.style.background = "#302E26";
  }
}
