const votoModal = document.getElementById("voto-modal");

document.getElementById("voto-preview").addEventListener("click", () => {
  votoModal.className = "modal is-active"; 
});

votoModal.querySelector(".modal-close").addEventListener("click", () => {
  votoModal.className = "modal"; 
});