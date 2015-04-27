// Require diet
var server = require('diet')

// Create Server Instance
var app = server()

// Load environmental configurations
app.config = require('./config.js')

// Domain
app.listen(app.config.domain, app.config.https)

// Content Modules
var ect = require('diet-ect')({ path: app.path+'/static/html/' })
var static = require('diet-static')({ path: app.path+'/static/' })

// Globals
app.header(ect, function($){ $.data.version = '0.9.2'; $.return(); })
app.footer(static)

// Homepage
app.get('/', function($){
	$.data.page = 'home'
	meta($)
	$.html()
})

// Tutorials
app.get('/tutorials/:subpage', function($){
	$.data.page = 'tutorial'
	$.data.subpage = $.params.subpage
	meta($)
	$.html()
})

// API
app.get('/api/:subpage', function($){
	$.data.page = 'api'
	$.data.subpage = $.params.subpage
	meta($)
	$.html()
})

// API/signal
app.get('/api/signal/:subpage', function($){
	$.data.page = 'api'
	$.data.subpage = 'signal_'+$.params.subpage
	meta($)
	$.html()
})

// Resources
app.get('/resources/:subpage', function($){
	$.data.page = 'resource'
	$.data.subpage = $.params.subpage
	meta($)
	$.html()
})

// 404 not found page
app.missing(function($){
	$.data.title = 'Diet.js - 404 Not Found'
	$.data.page = 'missing'
	$.html()
})

// 500 internal server error page
app.error(function($){
	$.data.page = 'fail'
	console.log($.fail.error.message)
	$.html()
})

// Load meta data from meta.json
var metadata = JSON.parse(require('fs').readFileSync(__dirname+'/meta.json'))

// Meta function
function meta($){
    // if meta information found for this page/subpage
	if(metadata[$.data.page] && metadata[$.data.page][$.data.subpage]){	
		var page = metadata[$.data.page][$.data.subpage]
		$.data.title = 'Diet.js - ' + page.title
		$.data.description = page.description
		$.data.tags =  page.tags + 'http, https, framework, routing, router, rest, restful, rest, web, web server, domains, subdomains, page routing, from handling, request, response, diet, dietjs, app.js'
	
	// if meta information was not found for this page/subpage
	} else {
		$.data.title = 'Diet.js'
		$.data.description = 'Diet is a beautiful, minimalistic, extensible web application framework for node.'
		$.data.tags = 'http, https, framework, routing, router, rest, restful, rest, web, web server, domains, subdomains, page routing, from handling, request, response, diet, dietjs, app.js'
	}
}