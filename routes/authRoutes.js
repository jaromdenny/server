const passport = require('passport');

module.exports = app => {
	app.get('/', (req, res) => {
		res.send(
			'<!DOCTYPE html><head></head><body><h1 style="color:blue;font-size:4em;">To Authenticate via Google</h1><br><a href="/auth/google">google<a></body><html>'
		);
	});

	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
