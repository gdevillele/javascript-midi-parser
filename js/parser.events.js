/////////////////////////////////////////////////////
//	
//	@file 			: js/parser/parser_events.js 
//	@description 	: handle the events callbacks for the PARSER PAGE
//	
//	
/////////////////////////////////////////////////////

$(document).ready( function()
{	
	//parser.main.init();
	
	
	//---------------------------------------------------------
	//	UI - Events
	//---------------------------------------------------------
	//	Click sur le bouton PARSE!
	//-----------------------------------
	$("#parseButton").click( function(event)
	{
		parser.main.init();
	});
	
	
	
	
});