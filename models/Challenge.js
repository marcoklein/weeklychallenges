
const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
	title: String,
	ratings: [
		{type: mongoose.ref}
	]
});
