const express = require('express');
const apiRouter = express.Router();
const db = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');


apiRouter.get('/minions', (req, res) => {
	res.send(db.getAllFromDatabase('minions'));
});

apiRouter.post('/minions', (req, res) => {
	try {
		const createdMinion = db.addToDatabase('minions', req.body);
		res.status(201).send(createdMinion);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

apiRouter.get('/minions/:minionId', (req, res) => {
	const minion = db.getFromDatabaseById('minions', req.params.minionId);

	if (!minion) {
		return res.sendStatus(404);
	}

	return res.send(minion);
});

apiRouter.put('/minions/:minionId', (req, res) => {
	const minion = db.getFromDatabaseById('minions', req.params.minionId);

	if (!minion) {
		return res.sendStatus(404);
	}

	try {
		const updatedMinion = {
			...req.body,
			id: req.params.minionId,
		};
		const result = db.updateInstanceInDatabase('minions', updatedMinion);

		if (!result) {
			return res.sendStatus(404);
		}

		return res.send(result);
	} catch (error) {
		return res.status(400).send(error.message);
	}
});

apiRouter.delete('/minions/:minionId', (req, res) => {
	const deleted = db.deleteFromDatabasebyId('minions', req.params.minionId);

	if (!deleted) {
		return res.sendStatus(404);
	}

	return res.sendStatus(204);
});

apiRouter.get('/ideas', (req, res) => {
	res.send(db.getAllFromDatabase('ideas'));
});

apiRouter.post('/ideas', checkMillionDollarIdea, (req, res) => {
	try {
		const createdIdea = db.addToDatabase('ideas', req.body);
		res.status(201).send(createdIdea);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

apiRouter.get('/ideas/:ideaId', (req, res) => {
	const idea = db.getFromDatabaseById('ideas', req.params.ideaId);

	if (!idea) {
		return res.sendStatus(404);
	}

	return res.send(idea);
});

apiRouter.put('/ideas/:ideaId', (req, res) => {
	const idea = db.getFromDatabaseById('ideas', req.params.ideaId);

	if (!idea) {
		return res.sendStatus(404);
	}

	return checkMillionDollarIdea(req, res, () => {
		try {
			const updatedIdea = {
				...req.body,
				id: req.params.ideaId,
			};
			const result = db.updateInstanceInDatabase('ideas', updatedIdea);

			if (!result) {
				return res.sendStatus(404);
			}

			return res.send(result);
		} catch (error) {
			return res.status(400).send(error.message);
		}
	});
});

apiRouter.delete('/ideas/:ideaId', (req, res) => {
	const deleted = db.deleteFromDatabasebyId('ideas', req.params.ideaId);

	if (!deleted) {
		return res.sendStatus(404);
	}

	return res.sendStatus(204);
});

apiRouter.get('/meetings', (req, res) => {
	res.send(db.getAllFromDatabase('meetings'));
});

apiRouter.post('/meetings', (req, res) => {
	try {
		const createdMeeting = db.addToDatabase('meetings', db.createMeeting());
		res.status(201).send(createdMeeting);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

apiRouter.delete('/meetings', (req, res) => {
	db.deleteAllFromDatabase('meetings');
	res.sendStatus(204);
});


module.exports = apiRouter;
