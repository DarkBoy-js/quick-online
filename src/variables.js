module.exports = {
	success: {
		success: 'true',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	hello: {
		hello: 'world',
	},
	home: {
		success: 'true',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
		creators: {
			1: '! Darkboy🍭#9966',
			2: 'AzizJaber.#5414',
			3: 'Sujal Goel#0001',
			4: 'Lebyy_Dev#0899',
		},
	},
	no_username: {
		success: 'false',
		error: {
			type: 'ValidationException',
			message: 'No data provided',
			errors: {
				username: 'The username field is required.',
			},
		},
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	invalid_username: {
		success: 'false',
		error: {
			type: 'ValidationException',
			message: 'The given data was invalid',
			errors: {
				username: 'The provided username is invalid.',
			},
		},
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	no_password: {
		success: 'false',
		error: {
			type: 'ValidationException',
			message: 'No data provided',
			errors: {
				password: 'The password field is required.',
			},
		},
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	invalid_password: {
		success: 'false',
		error: {
			type: 'ValidationException',
			message: 'The given data was invalid',
			errors: {
				password: 'The provided password is invalid.',
			},
		},
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	no_value: {
		success: 'false',
		error: {
			type: 'ValidationException',
			message: 'The given data was invalid',
			errors: {
				value: 'The value field is required.',
			},
		},
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	no_key: {
		success: 'false',
		error: {
			type: 'ValidationException',
			message: 'The given data was invalid',
			errors: {
				key: 'The key field is required.',
			},
		},
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	isNaN: {
		success: 'false',
		message: 'The value must be a number',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	noNaN: {
		success: 'false',
		message: 'The key must contain a number value',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	data_added: {
		success: 'true',
		message: 'Successfully added the requested data',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	data_deleted: {
		success: 'true',
		message: 'Successfully deleted the requested data',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	data_subtracted: {
		success: 'true',
		message: 'Successfully removed the requested data',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	has_data: {
		success: 'true',
		message: 'This key contain some sort of data',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	has_no_data: {
		success: 'true',
		message: 'This key does not contain any sort of data',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	no_object: {
		success: 'false',
		message: 'The data cannot be pushed into a non object',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
	no_array: {
		success: 'false',
		message: 'The target must be an array',
		links: {
			website: 'http://db.quickdevs.studio/',
			documentaion: 'http://docs.db.quickdevs.studio',
			github: 'https://github.com/DarkBoy-js/quick-online',
			discord: 'http://db.quickdevs.studio/discord',
		},
	},
};
