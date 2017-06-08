/**
 * 패스포트 설정 파일
 * 
 * 네이버 인증 방식에 사용되는 패스포트 설정
 *
 * @date 2016-11-10
 * @author Mike
 */

var NaverStrategy = require('passport-naver').Strategy;
var config = require('../config');

module.exports = function(app, passport) {
	return new NaverStrategy({
		clientID: config.naver.clientID,
		clientSecret: config.naver.clientSecret,
		callbackURL: config.naver.callbackURL
	}, function(accessToken, refreshToken, profile, done) {
		console.log('passport의 naver 호출됨.');
		console.dir(profile);
		
		var options = {
		    criteria: { 'naver.id': profile.id }
		};
		
		var database = app.get('database');
	    database.UserModel.load(options, function (err, user) {
			if (err) return done(err);
      
			if (!user) {
				var user = new database.UserModel({
					name: profile.displayName,
					email: profile.emails[0].value,
					provider: 'naver',
					authToken: accessToken,
					facebook: profile._json
				});
        
				user.save(function (err) {
					if (err) console.log(err);
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
	    });
	});
};
