"use strict";

var Violation = require('./violation');

var Assert = function() {

}

Assert.prototype = {
	NotBlank: function() {
		this.__class__ = 'NotBlank';
		this.validate = function(value) {
			if ('string' !== typeof value)
				throw new Violation(this, value, {value: Validator.errorCode.must_be_a_string});
			if ('' === value.replace(/^\s+/g, '').replace(/\s+$/g, ''))
				throw new Violation(this, value);
			return true;
		};
		return this;
	},
	NotNull: function() {
		this.__class__ = 'NotNull';
		this.validate = function(value) {
			if(null === value || 'undefined' == typeof value)
				throw new Violation(this, value);
			return true;
		};
		return this;
	},
	Required: function() {
		this.__class__ = 'Required';
		this.validate = function(value) {
			if ('undefined' === typeof value)
				throw new Violation(this, value);

			try {
				if ('string' === typeof value)
					new Assert().NotNull().validate(value) && new Assert().NotBlank().validate(value);
				else if (true === _isArray(value))
					new Assert().Length({ min: 1}).validate(value);
			} catch(violation) {
				throw new Violation(this, value);
			}

			return true;
		}
		return this;
	},
	RegExp: function() {

	},
	Email: function() {

	}
}

module.exports = Assert;