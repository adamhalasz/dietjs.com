var overflowSelector = $($.browser.firefox ? 'html' : 'body');

function Toc(contentSelector, viewportSelector){
	window.sections = []
	$('.section.wrap').each(function(index, element){
		if($(element).attr('data-section')){
			var link = $('[href="#'+$(element).attr('data-section')+'"]')
			sections.push([$(element), link])
		}
	})
	
	window.content = contentSelector ? $(contentSelector) : $(document.body);
	var viewport = viewportSelector ? $(viewportSelector) : $(window);
	
	setTimeout(function(){
		if(window.location.hash){
			$('#toc-menu').show()
			var section = $('[data-section="'+window.location.hash.split('#')[1]+'"]')
			overflowSelector[0].scrollTop = section.offset().top
			//overflowSelector[0].scrollTop = findPos(section[0])-$('#toc-menu').offset().height
		}
	}, 200)
	
	//Finds y value of given object
	function findPos(obj) {
	    var curtop = 0;
	    if (obj.offsetParent) {
	        do {
	            curtop += obj.offsetTop;
	        } while (obj = obj.offsetParent);
	    return [curtop];
	    }
	}
	
	$(viewport).scroll(function(event){
		if(sections){
    		if(overflowSelector.scrollTop() > 0){
    			$('#toc-menu').show()
    		} else {
    			$('#toc-menu').hide()
    			window.location.hash = ''
    		}
    		$('#toc-menu .selected').removeClass('selected')
    		
    		if(overflowSelector.scrollTop() + $(viewport).height() >= content.height() - 100){
    			var section = sections[sections.length-1]
    			section[1].addClass('selected')
    			window.location.hash = section[0].attr('data-section')
    		} else {
    			var sectionLength = sections.length
    			for(var i = sectionLength; i > 0; i--){
    				var section = sections[i-1]
    				if(section[0].offset().top-40 < overflowSelector.scrollTop()){
    					section[1].addClass('selected')
    					window.location.hash = section[0].attr('data-section')
    					break;
    				}
    			}
    		}
		}
	})
	
	$('.toc-link').each(function(index, element){
		$(element).click(function(event){
			var section = $('[data-section="'+$(element).attr('href').split('#')[1]+'"]')
			overflowSelector[0].scrollTop = section.offset().top;
		})
	})
}

