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
	this.m = new Array();
	this.midi;
	this.dec = "";
	this.bin = "";
	this.hex = "";
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
			this.m[i] = this.midi.charCodeAt(i).toString(16).toUpperCase();
			this.hex += this.midi.charCodeAt(i).toString(16).toUpperCase()+" ";
		}
		$("div#debug").html(this.hex);
		console.log(this.m[13]);
		//$("div#debug").html(this.hex);
		
		
		
		//var bp = new BinaryParser(true, true);
		//$("div#debug").html(bp.decodeInt(this.midi, 1, false).toString(16));
		
		//console.debug(this.midi.charCodeAt(13));
		//console.debug(this.dec2hex(this.midi.charCodeAt(13)));
		//console.debug(this.hex);
		//console.debug(this.midi);
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


