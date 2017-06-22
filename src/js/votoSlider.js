const ProjectSlider = require("./ProjectSlider.js");

const images = ["voto.png", "feuertruppe.png", "stallforth.png"];
const votoSlider = new ProjectSlider("voto-preview", "voto-modal", images);
votoSlider.init();