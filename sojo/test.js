
/* global Sojo */

function Test ()
{
	
}

Test.prototype.init = function ()
{
	$('#small-logo-row').children('.col-sm-3').each(function (i, elt)
	{
		var self = $(elt).children('.sojo-logo');
		var names = self.attr('class').split(' ');
		var len = names.length;
		
		for (var j = 0; j < len; j++)
		{
			if (names[j].indexOf("sojo-") === 0)
			{
				$(elt).append($('<p>').html('.' + names[j]).addClass(names[j]));
			}
		}
	});
};

(function(){
	
	if (Sojo.prototype.InitializeSojo())
	{
		window.test = new Test();
		window.test.init();
	}
	
})();