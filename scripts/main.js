class MobileMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector('.mobile-menu__btn');
      this.DOM.cover = document.querySelector('.mobile-menu__cover');
      this.DOM.container = document.querySelector('#global-container');
      this.eventType = this._getEventType();
      this._addEvent();
  }

  _getEventType() {
      return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
      this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();


document.addEventListener("DOMContentLoaded",function(){
 const hero = new HeroSlider(".swiper-container");
 const hero1 = new HeroSlider(".own-pe");

 hero.start({delay:6000});
 hero1.start({delay:6000});
});

class HeroSlider{
 constructor(el){
   this.el = el;
   this.swiper = this._initSwiper();
   
 }

  _initSwiper(){
   return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor:true,
      effect:"fade",
      // effect: 'coverflow',
      //  slidesPerView: 3,
      centeredSlides:true,
   });
  }
 
   start(options = {}) {
    options = Object.assign({
      delay:3000,
      disableOnInteraction:false
    },options);
    this.swiper.params.autoplay = {
      delay:10000,
      disableOnInteraction:false
    }
    this.swiper.autoplay.start();
  }
  stop(){
    this.swiper.autoplay.stop();
  }
}









document.addEventListener("DOMContentLoaded",function(){
 const hero2 = new HeroSlider1(".swiper-main");
 const hero3 = new HeroSlider1(".swiper-sub");

 hero2.start({delay:6000});
 hero3.start({delay:6000});

});

class HeroSlider1 {
 constructor(el){
   this.el = el;
   this.swiper = this._initSwiper();
 }

  _initSwiper(){
   return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor:true,
      slidesPerView: 4,
      spaceBetween: 50,
      slidesOffsetBefore: 100,
	    slidesOffsetAfter: 100,
      centeredSlides:true,
   });
  }

  start(options = {}) {
    options = Object.assign({
      delay:3000,
      disableOnInteraction:false
    },options);
    this.swiper.params.autoplay = {
      delay:6000,
      disableOnInteraction:false
    }
    this.swiper.autoplay.start();
  }
  stop(){
    this.swiper.autoplay.stop();
  }
}














