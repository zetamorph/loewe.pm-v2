const ProjectSlider = require("./ProjectSlider.js");

const votoImages = [
  require("./../../img/screens/voto/voto1.png"),
  require("./../../img/screens/voto/voto2.png"),
  require("./../../img/screens/voto/voto3.png")
];
const votoSlider = new ProjectSlider("voto-preview", "voto-modal", votoImages);
votoSlider.init();

const stallforthImages = [
  require("./../../img/screens/stallforth/stallforth1.png"),
  require("./../../img/screens/stallforth/stallforth2.png"),
  require("./../../img/screens/stallforth/stallforth2.png")
];

const stallforthSlider = new ProjectSlider("stallforth-preview", "stallforth-modal", stallforthImages);
stallforthSlider.init();