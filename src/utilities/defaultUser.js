module.exports = {
	defaultUser: {
		id: Math.floor(Math.random() * 200),
		email: 'ron@hogwarts.com',
		profilePicture: 'https://fr.gravatar.com/userimage/26960800/576f0907a4ed387626f1c211c4b11942.png',
		userName: 'New User',
		createdOn: new Date(),
		lastLoginDate: new Date(),
		preferences: {
			theme: 'light',
			language: 'en',
			tracking: true
		}
	}
}

exports.defaultUser;
