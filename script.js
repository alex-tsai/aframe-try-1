$(document).ready(function(){
	for(var x = 0; x < 5; x++)
	{
		var cube = $("<a-cube color='#92A5A5' position='" + (x*3-6) + " " +(Math.random()*5-2)+ " " + (Math.random()*2 - 2)+ "'></a-cube>");
		$('#scene').append(cube);
		cube.append("<a-animation attribute='rotation' to='0 " + Math.random()*360 + " " + Math.random()*360 + "' dur='5000' direction='alternate' fill='forwards' repeat='indefinite' ease='linear'></a-animation>");
		
	}
});