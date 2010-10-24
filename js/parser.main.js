///////////////////////////////////////////////////////////////////
//
//	@file		: /js/parser
//	
//
//
//
///////////////////////////////////////////////////////////////////


parser.main = new function()
{
	///////////////////////////////////////////////
	//	ATTRIBUTES
	///////////////////////////////////////////////
	this.hex = new Array();
	this.midi;
	this.dec = "";
	this.bin = "";
	this.hexTab = new Array();
	
	//	MIDI infos
	//----------------------------
	//	Header Chunk (8 octets)
	this.header_chunk_id 	= null;
	this.header_chunk_size 	= null;
	this.midi_format_type	= null;
	this.tracks_number		= null;
	this.time_division		= null;
	
	
	
	
	
	
	///////////////////////////////////////////////
	//	METHODS
	///////////////////////////////////////////////
	this.init = function()
	{
		$.ajax({url:$('#midiFile')[0].src,success:function(data){
			parser.main.midi = data;
			parser.main.parse();
		}});
	}
	
	//  parser
	this.parse = function()
	{	
		var i;
		for(i=0; i < this.midi.length ; i++)
		{
			//this.hex[i] = this.midi.charCodeAt(i).toString(16).toUpperCase();
			this.hex[i] = this.dec2hex(this.midi.charCodeAt(i)).toUpperCase();
			$("div#debug").html($("div#debug").html()+" "+this.hex[i]);
		}
		//console.log(this.hex[13]);
		
		
		//$("div#debug").html(this.hex);
	};
	


	this.dec2hex = function(i)
	{
	  var result = "0000";
	  if      (i >= 0    && i <= 15)    { result = "000" + i.toString(16); }
	  else if (i >= 16   && i <= 255)   { result = "00"  + i.toString(16); }
	  else if (i >= 256  && i <= 4095)  { result = "0"   + i.toString(16); }
	  else if (i >= 4096 && i <= 65535) { result =         i.toString(16); }
	  return result;
	}




	/*
	// OLD CODE
	
	*/


	

};


