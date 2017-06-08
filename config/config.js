
/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://test01:gjtmdxo11@ds015740.mlab.com:15740/heroku_5hd8v40b',
	db_schemas: [
        {file:'./user_schema', collection:'users6', schemaName:'UserSchema', modelName:'UserModel'}
        ,{file:'./post_schema', collection:'post', schemaName:'PostSchema', modelName:'PostModel'}
	],
	route_info: [
        {file:'./post', path:'/process/addpost', method:'addpost', type:'post'}
        ,{file:'./post', path:'/process/showpost/:id', method:'showpost', type:'get'}
        ,{file:'./post', path:'/process/listpost', method:'listpost', type:'post'}
        ,{file:'./post', path:'/process/listpost', method:'listpost', type:'get'}
	],
	facebook: {		// passport facebook
		clientID: '135734880327081',
		clientSecret: 'c8be0cd03e0add31f78ffdb443c7ba29',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {		// passport twitter
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: '/auth/twitter/callback'
	},
	google: {		// passport google
		clientID: '870785152843-a0b5jb8plbtls403ok9rvhrjn0j9090e.apps.googleusercontent.com',
		clientSecret: 'OLWERe2AVnUxhaBe3yXHxypU',
		callbackURL: '/auth/google/callback'
	},
    naver: {		// passport naver
		clientID: 'TG68fRPi72U9iFbQ_NE6',
		clientSecret: 'GoJGYca2a2',
		callbackURL: '/auth/naver/callback'
	}
}