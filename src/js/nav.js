document.querySelector(".nav-toggle").addEventListener("click", toggleNav);
function toggleNav() {
  const nav = document.querySelector(".nav-menu");
  const navClassName = nav.className;
  const toggle = document.querySelector(".nav-toggle");
  if(nav.className === "nav-right nav-menu") {
    nav.className = "nav-right nav-menu is-active";
    toggle.className = "nav-toggle is-active";
  } else {
    nav.className = "nav-right nav-menu";
    toggle.className = "nav-toggle";
  }
}

