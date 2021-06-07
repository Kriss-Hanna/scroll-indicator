window.addEventListener("scroll", remplir);

function remplir(){
  let windScroll = document.documentElement.scrollTop;

  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrolled = (windScroll / height) * 100;

  document.getElementById("myBar").style.width = scrolled +"%"
}