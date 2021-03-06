const fetch = require('node-fetch');

class bot {
	constructor(data) {
		if (!data) throw new Error('Missing default Array.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!data.url) throw new Error('Missing Database url.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!data.username) throw new Error('Missing Database Username.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!data.password) throw new Error('Missing Database Password/\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		this.url = data.url;
		this.username = data.username;
		this.password = data.password;
	}

	/**
   * Sets a value to a spefic key
   * @param  key
   * @param valuekey
   * @example dbo.set('quick', 'online')
   * @returns online
   */
	async set(key, valuekey) {
		if (!key) throw new Error('[Key] Missing Data Key\n  You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!valuekey) throw new Error('[Value] Missing data\n  You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (typeof valuekey === 'object') {
			const data = fetch(`${this.url}/quickonline/setobject`, {
			method: 'POST',
			headers: {
			'Authorization': `${this.username} ${this.password}`,
			'Key': key,
			'Value': valuekey,
			},
			}).then(res => res.json());
			if (!data) throw new Error('Invaild URL\n \n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
			if ((await data).success === 'false') {
				if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
				if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
			} else {
				return (await data);
			}
		}
		const data = fetch(`${this.url}/quickonline/setobject`, {
			method: 'POST',
			headers: {
			'Authorization': `${this.username} ${this.password}`,
			'Key': key,
			'Value': valuekey,
			},
			}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		} else {
			return (await data);
		}
	}

	/**
   * Gets data of a specific key
   * @param key
   * @example dbo.get('wow')
   * @returns online
   */
	async get(key) {
		if (!key) throw new Error('[Key] Missing Data Key\n  You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/get`, {
			method: 'POST',
			headers: {
			'Authorization': `${this.username} ${this.password}`,
			'Key': key,
			},
			}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data).data;
	}

	/**
   * Deletes data of a specific key
   * @param key
   * @example dbo.delete('wow')
   * @returns null
   */
	async delete(key) {
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/delete`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Adds some value to a specific key
   * @param  key
   * @param  value
   * @example dbo.add('math', 500)
   * @returns 500
   * @example dbo.add('math', 290)
   * @returns 790
   */
	async add(key, value) {
		if (!value) throw new Error('[Value] Missing Data Value\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (isNaN(value)) throw new Error('[Value] must be a number\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/add`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		'Value': value,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).message === 'The key must contain a number value') throw new Error('The key must contain a number value, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Subtracts some value from a specific key
   * @param key
   * @param value
   * @example dbo.subtract('math', 30)
   * @returns 760
   */
	async subtract(key, value) {
		if (!value) throw new Error('[Value] Missing Data Value\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (isNaN(value)) throw new Error('[Value] must be a number\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/subtract`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		'Value': value,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).message === 'The key must contain a number value') throw new Error('The key must contain a number value, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Checks if a specific key has some value or not
   * @param key
   * @example dbo.has("quick")
   * @returns { success: 'true', message: 'This key contain some sort of data' }
   */
	async has(key) {
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/has`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Pushs some data to a specific key
   * @param key
   * @param value
   * @example dbo.push("Key", { boo: "Boomer", cool: "Cooler"})
   * @readonly You can't push an non-object value
   */
	async push(key, value) {
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!value) throw new Error('[Value] Missing Data Value\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/push`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		'Data': value,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).message === 'The target must be an array') {
				return (await data);
			}
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Pull some data from a specific key
   * @param  key
   * @example dbo.pull('quick', 'online')
   */
	async pull(key, value) {
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if (!value) throw new Error('[Value] Missing Data Value\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/pull`, {
		method: 'POST',
		headers: { 
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		'Data': value,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL\n need help? http://db.quickdevs.studio/discord ');
		if ((await data).success === 'false') {
			if ((await data).message === 'The target must be an array') {
				return (await data);
			}
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Fetch data from a specific key
   * @param  key
   * @example dbo.fetch('quick')
   * @returns { key: "quick", data: online }
   */
	async fetch(key) {
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/fetch`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Fetches everything and sorts by given target
   * @param {string} key
   * @param {object} ops
   * @example await dbo.startsWith("money", { sort: ".data" });
   */
	async startsWith(key, range) {
		if (!key) throw new Error('[Key] Missing Data Key\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		const data = fetch(`${this.url}/quickonline/startswith`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		'Key': key,
		'Range': range,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}


	/**
   * Checks if the database url is working or not
   * @example dbo.check()
   */
	async check() {
		const data = fetch(`${this.url}/quickonline/check`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Fetches all data from the database
   * @example dbo.all()
   */
	async all() {
		const data = fetch(`${this.url}/quickonline/all`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * Stops the database
   * @example dbo.stop()
   */
	async stop() {
		const data = fetch(`${this.url}/quickonline/check`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`,
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return (await data);
	}

	/**
   * returns the ping of your database
   * @example await dbo.ping();
   * @returns Number
   */
	async ping() {
		const data = fetch(`${this.url}/quickonline/latency`, {
		method: 'POST',
		headers: {
		'Authorization': `${this.username} ${this.password}`
		},
		}).then(res => res.json());
		if (!data) throw new Error('Invaild URL.\n You can go to http://db.quickdevs.studio/ for help, Also you can join our Discord server : http://db.quickdevs.studio/discord');
		if ((await data).success === 'false') {
			if ((await data).error.errors.username === 'The provided username is invalid.') throw new Error('Invaild Username, need help? \nJoin http://db.quickdevs.studio/discord');
			if ((await data).error.errors.password === 'The provided password is invalid.') throw new Error('Invaild Password, need help? \nJoin http://db.quickdevs.studio/discord');
		}
		return data;
	}
}

module.exports = bot;
