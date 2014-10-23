var Violation = function(assert, value, violation) {
	this.__class__ = 'Violation';
	if (!(assert instanceof Assert))
		throw new Error('Should give an assertion implementing the Assert Interface');
	this.assert = assert;
	this.value = this.value;
	if ('undefined' !== typeof violation)
		this.violation = violation;
};

Violation.prototype = {
	show: function() {
		var show = {
			assert: this.assert.__class__,
			value: this.value
		};
		if (this.violation)
			show.violation = this.violation;
		return show;
	},
	__toString: function() {
		if ('undefined' !== typeof this.violation)
			this.violation = '", ' + this.getViolation().constraint + ' expected was ' + this.getViolation().expected;
		return this.assert.__class__ + ' assert failed for "' + this.value + this.violation + '';
	},
	getViolation: function() {
		var constraint, expected;
		for (constraint in this.violation)
			expected = this.violation[constraint];
		return {constraint: constraint, expected: expected};
	}
};

module.exports = Violation;