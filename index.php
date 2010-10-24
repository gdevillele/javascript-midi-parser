<!DOCTYPE html>


<html>
	<head>
		<title>Javascript-Parser</title>
		<!--*********************************************** CSS **********************************************-->
		<link rel="stylesheet" type="text/css" media="screen" href="css/reset.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/parser.css" />
		
		<!--******************************************** JAVASCRIPT ******************************************-->
		<!-- Lib -->
		<script type="text/javascript" src="lib/jquery/jquery.js"></script>
		
		<!-- JS to parse-->		
		<script type="text/javascript" src="js/parser.js"></script>
		<script type="text/javascript" src="js/parser.main.js"></script>
		<script type="text/javascript" src="js/parser.events.js"></script>
		
		<!--********************************************* MIDI ***********************************************-->
		<script type="audio/midi" id="midiFile" src="notes.mid"></script>
		<script type="audio/midi" id="midiFile2" src="parse_me.mid"></script>
				
	</head>
	
	
	
	<body>
		<div id="wrapper">
			
			<!--******************************************** TOP ******************************************-->
			<div id="top">
			</div>
			
			<!--******************************************** CENTER ******************************************-->
			<div id="center">
				<h1>MIDI Parser</h1>
				<br/><br/>
				<h2>can't you hear me knocking</h2><br/>
				<button id="parseButton">< PARSE !! ></button>
				<div id="debug"></div>
			</div>
			
			<!--******************************************** BOTTOM ******************************************-->
			<div id="bottom">
			</div>
	  	 	
	   	</div>
	</body>

</html>