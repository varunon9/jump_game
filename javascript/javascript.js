function welcome(){
    var p=prompt("Enter your name","Varun");
	if(p!=null)
	    document.getElementById("name").innerHTML="Welcome "+p+"!";
	else
	    document.getElementById("name").innerHTML="you didn't enter your name. Reload and try again";
	}
function ready() {
	if(confirm("Are you ready to play")==true)
	{
	    welcome();
	    document.getElementById("wish").innerHTML="Avoid collisions and earn scores. GOOD LUCK!";
		start();
	}
	else
	    document.getElementById("wish").innerHTML="Take a deep breath,get ready and then reload the page.";
	}
function start() {
    var left_pos=0;
	var height_factor;
    for(var i=0;i<6;++i)
	{
	    $("#sky ul").append('<li class="block">'+i+'</li>');
		$('li:nth-child('+i+')').css("left",left_pos);
		$('li:nth-child('+i+')').css("height",25);
		left_pos += 50;
	}
	for(var i=6;i<200;++i)
	{
	    height_factor = parseInt(Math.random()*2+1);
	    $("#sky ul").append('<li class="block">'+i+'</li>');
		$('li:nth-child('+i+')').css("left",left_pos);
		$('li:nth-child('+i+')').css("height",25*height_factor);
		left_pos += 50;
	}
	setTimeout(function(){
	$('.block').css('transform','translateX(-9500px)');
	},500);
	$('.ball').css('bottom',parseInt($('#sky .block:nth-child(1)').css('height')));
	var UP_KEY = 38;
	var flag=0;
	$('.block').css('transform','translateX(-10000%)');
				var game_loop = setInterval(function(){
					flag++;
					console.log(flag);
					if(flag > 199){
						alert("Congrats! You Won");
					}
					var current_block_height = parseInt($('ul .block:nth-child('+flag+')').css('height'));
					if(current_block_height>parseInt($('.ball').css('bottom'))){
						$('.ball').css('display','none');
						alert('Game Over');
						clearInterval(game_loop);
					}
					else{
						setTimeout(function(){
							$('.ball').css('bottom',current_block_height);
					
						},(100000*20)/(200*50));
					}
				},100000/200);
				$(document).on("keydown",function(event){
				console.log(event.keyCode);
					if(event.keyCode == UP_KEY)
						moveBall('up');
				});
				function moveBall(direction){
				current_block_height = parseInt($('ul .block:nth-child('+flag+')').css('height'));
			
					if(parseInt($('.ball').css('bottom')) != current_block_height)
						return;
					if(direction == 'up'){
						var top_pos = parseInt($('.ball').css('bottom'))+200;
						$('.ball').css('bottom',top_pos);
						setTimeout(function(){
							var returning_height = parseInt($('ul .block:nth-child('+flag+')').css('height'));
							$('.ball').css('bottom',returning_height);
						},500);
					}
				}
	}
	