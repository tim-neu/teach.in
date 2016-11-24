var helpers = {};

helpers.mapPercentToGrade = function (percent) {
	if (percent < 60) {
		return 'F';
	}

	if (percent >= 60 && percent < 63) {
		return 'D-';
	}

	if (percent >= 63 && percent < 67) {
		return 'D';
	}

	if (percent >= 67 && percent < 70) {
		return 'D+';
	}

	if (percent >= 70 && percent < 73) {
		return 'C-';
	}

	if (percent >= 73 && percent < 77) {
		return 'C';
	}

	if (percent >= 77 && percent < 80) {
		return 'C+';
	}

	if (percent >= 80 && percent < 83) {
		return 'B-';
	}

	if (percent >= 83 && percent < 87) {
		return 'B';
	}

	if (percent >= 87 && percent < 90) {
		return 'B+';
	}

	if (percent >= 90 && percent < 93) {
		return 'A-';
	}

	if (percent >= 93 && percent < 97) {
		return 'A';
	}

	if (percent >= 97) {
		return 'A+';
	}
};

module.exports = helpers;

