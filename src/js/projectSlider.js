class ProjectSlider {
  constructor(preview, modalRootId, images) {
    this.preview = document.getElementById(preview);
    this.modalRoot = document.getElementById(modalRootId);
    console.log(this.modalRoot);
    this.images = images;
  }

  init() {
    this.currentSlide = 0;
    this.imageRoot = this.modalRoot.querySelector(".modal-image");
    this.leftBtn = this.modalRoot.querySelector(".slider-btn-left");
    this.rightBtn = this.modalRoot.querySelector(".slider-btn-right");
    this.modalClose = this.modalRoot.querySelector(".modal-close");

    this.preview.addEventListener("click", this.openModal.bind(this));
    this.modalClose.addEventListener("click", this.closeModal.bind(this));
    this.leftBtn.addEventListener("click", this.slideLeft.bind(this));
    this.rightBtn.addEventListener("click", this.slideRight.bind(this));
  }

  openModal() {
    this.modalRoot.className = "modal is-active";
  }

  closeModal() {
    this.modalRoot.className = "modal";
  }

  slideLeft() {
    if(this.currentSlide === 0) {
      this.currentSlide = this.images.length - 1;
    }
    else {
      this.currentSlide--;
    }
    this.imageRoot.src = this.images[this.currentSlide];
  }

  slideRight() {
    if(this.currentSlide === this.images.length - 1) {
      this.currentSlide = 0;
    }
    else {
      this.currentSlide++;
    }
    this.imageRoot.src = this.images[this.currentSlide];
  }

};

module.exports = ProjectSlider;