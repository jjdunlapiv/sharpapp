var sliders = (function() {
	'use strict';

	var _elements;

	var sliders = {

		init: function () {
			_elements = document.querySelectorAll('.slider');
			this.bindEvents();
		},

		bindEvents: function () {
			this.unbindEvents();

			for (var i = 0; i < _elements.length; i++)
				_elements[i].addEventListener('click', this.onClick);
		},

		unbindEvents: function () {
			for (var i = 0; i < _elements.length; i++)
				_elements[i].removeEventListener('click', this.onClick);
		},

		onClick: function(e) {
			for (var i = 0; i < _elements.length; i++)
				if (_elements[i] == this)
					this.classList.toggle('is-active');
				else
					_elements[i].classList.remove('is-active');
		}

	};

	return sliders;

}());

sliders.init();