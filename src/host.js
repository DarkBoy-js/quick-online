class host {
	constructor(data) {
		if (!data) throw new Error('Missing data array need help? http://db.quickdevs.studio/discord');
		if (!data.port) data.port = 8080;
		if (!data.username) throw new Error('Missing Username,, need help? join http://db.quickdevs.studio/discord');
		if (!data.password) throw new Error('Missing Password, need help? join http://db.quickdevs.studio/discord');
		this.port = data.port;
		this.username = data.username;
		this.password = data.password;
	}
	async start() {
		const variable = require('./variables');
		const express = require('express');
		const db = require('quick.db');
		const app = new express();

		app.listen(this.port, () => {
			console.log(`Quick Online started on PORT, ${this.port}.`);
		});

		app.get('/', async (_, res) => {
			res.set('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(variable.home, null, 2));
		});


		app.get('/quickonline/set', async (req, res) => {
			const Key = req.query.key;
			const value = req.query.value;
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			if (!value) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_value, null, 2));
			}
			if (!Key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			db.set(`${Key}`, value);
			const data = {
				sucsses: true,
				key: Key,
				data: value,
			};
			res.set('Content-Type', 'application/json');
			await res.send(JSON.stringify(data, null, 2));
		});

		app.get('/quickonline/setobject', async (req, res) => {
			const Key = req.query.key;
			const value = req.query.value;
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			if (!value) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_value, null, 2));
			}
			if (!Key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			await db.set(Key, JSON.parse(value));
			const data = {
				sucsses: true,
				key: Key,
				data: JSON.parse(value),
			};
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(data, null, 2));
		});

		app.get('/quickonline/get', async (req, res) => {
			const Key = req.query.key;
			if (!Key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			const data = db.get(Key);
			const final_data = {
				success: 'true',
				data,
			};
			if (typeof data === 'object') {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(final_data, null, 2));
			}
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(final_data, null, 2));
		});

		app.get('/quickonline/delete', async (req, res) => {
			const Key = req.query.key;
			if (!Key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			db.delete(`${Key}`);
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(variable.data_deleted, null, 2));
		});

		app.get('/quickonline/all', async (req, res) => {
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(db.all(), null, 2));
		});

		app.get('/quickonline/add', async (req, res) => {
			const key = req.query.key;
			const value = req.query.value;
			if (!key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			if (!value) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_value, null, 2));
			}
			if (isNaN(value)) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.isNaN, null, 2));
			}
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			const data = db.get(key);
			if (!data) {
				db.add(key, value);
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.data_added, null, 2));
			} else {
				if (isNaN(data)) {
					res.set('Content-Type', 'application/json');
					return res.send(JSON.stringify(variable.noNaN, null, 2));
				}
				db.add(key, value);
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.data_added, null, 2));
			}
		});

		app.get('/quickonline/subtract', async (req, res) => {
			const key = req.query.key;
			const value = req.query.value;
			if (!key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			if (!value) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_value, null, 2));
			}
			if (isNaN(value)) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.isNaN, null, 2));
			}
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			const data = db.get(key);
			if (isNaN(data)) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.noNaN, null, 2));
			}
			if (!data) {
				db.subtract(key, value);
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.data_subtracted, null, 2));
			} else {
				db.subtract(key, value);
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.data_subtracted, null, 2));
			}
		});

		app.get('/quickonline/fetch', async (req, res) => {
			const key = req.query.key;
			if (!key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			const data = db.get(key);
			const final_data = {
				key: key,
				data: data,
			};
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(final_data, null, 2));
		});

		app.get('/quickonline/push', async (req, res) => {
			const key = req.query.key;
			const data = req.query.data;
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			if (!key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			if (!data) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_data, null, 2));
			}
			const semi_data = db.get(key);
			if (!semi_data) {
				const final_data = JSON.parse(data);
				db.push(key, final_data);
			} else if (!Array.isArray(semi_data)) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_array, null, 2));
			} else {
				const final_data = JSON.parse(data);
				db.push(key, final_data);
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.success, null, 2));
			}
		});

		app.get('/quickonline/pull', async (req, res) => {
			const key = req.query.key;
			const data = req.query.data;
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			if (!key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			if (!data) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_data, null, 2));
			}
			const semi_data = db.get(key);
			if (!semi_data) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.has_no_data, null, 2));
			} else if (!Array.isArray(semi_data)) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_array, null, 2));
			} else {
				const mapped = semi_data.map(m => m);
				const stringed = mapped.toString();
				const splited = stringed.split(',');
				const result = splited.filter(_ => !_.includes(data));
				await db.set(key, result);
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.success, null, 2));
			}
		});

		app.get('/quickonline/has', async (req, res) => {
			const key = req.query.key;
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			if (!key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			const data = db.get(key);
			if (!data) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.has_no_data, null, 2));
			} else {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.has_data, null, 2));
			}
		});

		app.get('/quickonline/startswith', async (req, res) => {
			const key = req.query.key;
			const range = req.query.range;
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			if (!key) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_key, null, 2));
			}
			const data = db.all()
				.filter(_ => _.ID.startsWith(key))
				.slice(0, range);
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(data, null, 2));
		});

		app.get('/quickonline/check', async (req, res) => {
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(variable.success, null, 2));
		});

		app.get('/quickonline/stop', async (req, res) => {
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			res.set('Content-Type', 'application/json');
			res.send(JSON.stringify(variable.success, null, 2));
			process.exit(1);
		});

		app.get('/quickonline/latency', (req, res) => {
			const username = req.query.username;
			const password = req.query.password;
			if (!username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_username, null, 2));
			}
			if (username != this.username) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_username, null, 2));
			}
			if (!password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.no_password, null, 2));
			}
			if (password != this.password) {
				res.set('Content-Type', 'application/json');
				return res.send(JSON.stringify(variable.invalid_password, null, 2));
			}
			const ltc = {
				success: 'true',
				ping: Date.now(),
			};
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(ltc, null, 2));
		});

		// For unknown routes
		app.get('*', function(_, res) {
			res.set('Content-Type', 'application/json');
			return res.send(JSON.stringify(variable.hello));
		});

	}
}

module.exports = host;
