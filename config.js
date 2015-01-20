switch (process.env.NODE_ENV) {
	case 'local':
	default:
		module.exports = {
			domain: 'http://localhost:8000/'
		};
	break;
	
	case 'development':
		module.exports = {
			domain: 'http://dev.dietjs.com/'
		};
	break;
	
	case 'production':
		module.exports = {
			domain: 'http://dietjs.com/'
		};
	break;
}