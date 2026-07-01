const checkMillionDollarIdea = (req, res, next) => {
	const { numWeeks, weeklyRevenue } = req.body;
	const parsedNumWeeks = Number(numWeeks);
	const parsedWeeklyRevenue = Number(weeklyRevenue);

	if (
		numWeeks === undefined ||
		weeklyRevenue === undefined ||
		Number.isNaN(parsedNumWeeks) ||
		Number.isNaN(parsedWeeklyRevenue) ||
		parsedNumWeeks * parsedWeeklyRevenue < 1000000
	) {
		return res.sendStatus(400);
	}

	return next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
