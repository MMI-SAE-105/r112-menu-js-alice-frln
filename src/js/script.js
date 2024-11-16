// On cible les éléments à modifier
const toggle =document.querySelector(".menu-btn");
const nav = document.querySelector(".menu")
const bodyElement = document.body;

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.

toggle.addEventListener("click", () => {
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  nav.ariaHidden = isOpen
toggle.ariaExpanded = isClosed
console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
if( toggle.ariaExpanded == "true")
{
  bodyElement.classList.add("noscroll");
}
else
{
  bodyElement.classList.remove("noscroll");
}
})
