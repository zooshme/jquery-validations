$.fn.validations = function(options) {
	var Validations = function() {
		this.__version 
	}

	var Field = function(field, options, form) {

	}

	Field.prototype = function() {
		validate: function() {

		},
		getValue: function() {

		},
		_isValid: false
	}

	var Form = function(form) {
		console.log($el)
		$el.on('submit', function() {
			e.preventDefault()
		});
		this.fields = []
	}

	Form.prototype = {
		submitHandler: function(e) {
			e.preventDefault()
		}, 
		validate: function() {

		}
	}

	var Rule = function() {

	};

	Rule.prototype = {
		RegExp: function() {

		},
		Required: function() {

		},
		Unique: function() {

		},
		NotBlank: function() {

		},
		Blank: function() {
			this.__class__ = 'Blank';
			this.validate = function(value) {

			}
		},
		Count: function(count) {
			this.validate = function() {

			}
		},
		Email: function() {

		},
		EqualTo: function() {

		}
	}
	
	// var form = new Form(this);


	// $(this).on('submit', function(e) {
	// 	//e.preventDefault()
	// })
	// var $el = this;

	// var Pattern = function(str) {
	// 	return new RegExp(str);
	// };

	// var Message = function(options) {
	// 	this.html = '<span class="' + options.className + '">' + options.text + '</span>';
	// 	this.insert = function() {

	// 	}
	// };

	// var Type = function(options) {
	// 	this.name = options.name;
	// 	this.pattern = new Pattern(options.pattern);
	// 	this.errorMessage = new Message(options.errorMessage);
	// 	this.successMessage = new Message(options.successMessage);
	// };

	// var RequiredType = new Type({
	// 	name: 'required',
	// 	pattern: '',
	// 	errorMessage: {
	// 		className: 'error-message',
	// 		text: 'This field cannot be blank!'
	// 	},
	// 	successMessage: {
	// 		className: 'success-message',
	// 		text: ''
	// 	}
	// });

	// var EmailType = new Type({
	// 	name: 'email',
	// 	pattern: '^[A-Za-z0-9_\.]+@[A-Za-z0-9\-]+\.[A-Za-z]+$',
	// 	errorMessage: {
	// 		className: 'error-message',
	// 		text: ''
	// 	},
	// 	successMessage: {
	// 		className: 'succes-message',
	// 		text: ''
	// 	}
	// });

	// var NumberType = new Type({
	// 	name: 'number',
	// 	pattern: '',
	// 	errorMessage: {
	// 		className: 'error-message',
	// 		text: ''
	// 	},
	// 	successMessage: {
	// 		className: 'succes-message',
	// 		text: ''
	// 	}
	// });

	// var PhoneType = new Type({
	// 	name: 'phone',
	// 	pattern: '',
	// 	errorMessage: {
	// 		className: 'error-message',
	// 		text: ''
	// 	},
	// 	successMessage: {
	// 		className: 'succes-message',
	// 		text: ''
	// 	}
	// });

	// var LettersSpaces = new Type({
	// 	name: 'letters-spaces',
	// 	pattern: '',
	// 	errorMessage: {
	// 		className: 'error-message',
	// 		text: ''
	// 	},
	// 	successMessage: {
	// 		className: 'success-message',
	// 		text: ''
	// 	}
	// })

	// var types = {
	// 	required: RequiredType,
	// 	number: NumberType,
	// 	phone: PhoneType,
	// 	email: EmailType,
	// 	lettersSpaces: LettersSpaces
	// };

	// var Field = function($el) {
	// 	this.name = $el.attr('name');
	// 	this.type = $el.data('type');
	// 	this.value = $el.val();
	// 	this.pattern = $el.data('pattern') || null;
	// 	this.error = $el.data('error');
	// 	this.success = $el.data('success');
	// 	this.required = new Boolean($el.data('required'));
	// 	this.$el = $el;
	// 	this.$form = $el.parents('form');
	// 	this.$container = $el.parent('.field');
	// 	this.$label = this.$container.find('label');

	// 	this.getPattern = function() {
	// 		var str, pattern;
	// 		str = this.pattern || types[this.type].pattern;
	// 		pattern = new RegExp(str);
	// 		return pattern;
	// 	}

	// 	this.getValue = function() {
	// 		return this.$el.val();
	// 	}

	// 	this.validate = function() {
	// 		var pattern, value;
	// 		pattern = this.getPattern(this.type);
	// 		value = this.getValue();
	// 		if (pattern.test(value)) {
	// 			console.log('valid')
	// 		} else {
	// 			console.log('invalid');
	// 		};
	// 	}

	// 	this.status = 'valid';

	// 	this.reset = function() {

	// 	}

	// 	this.isValid = function() {
	// 		this.$container.addClass('is-valid');
	// 		$el.addClass('is-invalid');
	// 	}

	// 	this.isInvalid = function() {
	// 		this.$container.addClass('is-invalid');

	// 	}
	// }

	// var Form = function($el) {
	// 	this.status = 'valid';



	// 	this.setAllFields = function() {
	// 		var fields = [];
	// 		var $fields = $el.find('input[type=text]');
	// 		$fields.each(function(i, item) {
	// 			fields.push(new Field($(item)));
	// 		});
	// 		return fields;
	// 	}

	// 	var fields = this.setAllFields();

	// 	$el.submit(function(e) {
	// 		e.preventDefault();

	// 		for (var i=0; i<fields.length; i++) {
	// 			fields[i].validate()
	// 		}
	// 	});
	// }

	// new Form($el);
}