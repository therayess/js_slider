function mySlider(el) {
	const sliderWrapper = document.querySelector(el);
	const scroller = sliderWrapper.querySelector('.scroller');
	const prevBtn = sliderWrapper.querySelector('[data-prev-slide]');
	const nextBtn = sliderWrapper.querySelector('[data-next-slide]');

	this.items = sliderWrapper.querySelector('.items');
	this.itemCount = this.items.querySelectorAll('.item').length;
	this.pos = 0;

	// Event listeners
	prevBtn.addEventListener('click', () => this.prev());
	nextBtn.addEventListener('click', () => this.next());
	swipedetect(scroller, (swipedir) => {
	    if (swipedir === 'right') {
	    	this.prev();
	    }

	    if (swipedir === 'left') {
	    	this.next();
	    }
	});
}

mySlider.prototype = {
	constructor: mySlider,
	prev: function() {
		// Set position to previous slide if any, otherwise it's 0
		this.pos = Math.max(this.pos - 1, 0);

		// Go to slide
		this.setTransform();
	},
	next: function() {
		// Set position to next slide if any, otherwise it's slider length - 1 (last slide)
		this.pos = Math.min(this.pos + 1, this.itemCount - 1);

		// Go to slide
		this.setTransform();
	},
	setTransform: function() {
		// Slide to updated position, which is the slide position multiplied by it's position offset
		this.items.style.transform = 'translate3d(' + (-this.pos * this.items.offsetWidth) + 'px,0,0)';
	}
}

var slider1 = new mySlider('#slider_mobile');
var slider2 = new mySlider('#slider_desktop');
