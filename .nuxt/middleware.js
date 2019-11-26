const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['home'] = require('../middleware/home.js')
middleware['home'] = middleware['home'].default || middleware['home']

export default middleware
