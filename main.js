$(document).ready(function()
{
	/*
	$('#bubble1').css( {'display' : 'block' } );
	$('#bubble2').css( {'display' : 'block' } );
	$('#bubble3').css( {'display' : 'block' } );
	$('#bubble4').css( {'display' : 'block' } );
	*/

	$('#bubble1').css( {'display' : 'none' } );
	$('#bubble2').css( {'display' : 'none' } );
	$('#bubble3').css( {'display' : 'none' } );
	$('#bubble4').css( {'display' : 'none' } );
	
	var width = $(window).innerWidth(), height = $(window).innerHeight();
	
	console.log( " huhu " + width + " " + height );
	for ( var i = 0; i < 50; ++i )
	{
		createImg();
	};
	
	
   
    window.requestAnimationFrame( updateAnim );
   
	function createImg() {
		var img=$( '<img id="dynamic">' );     
		$( document.createElement( 'img' ) );
		//insert here the number of different png images minus 1
		var rand = parseInt( ( Math.random() * 20 ) + 1 );
		img.attr( 'src',"img/raw-mri"+rand+".png" );
		img.appendTo( '#floats' );
		img.css( { 'position': 'fixed' } );
		img.css( { 'top': '50%' } );
		img.css( { 'left': '50%' } );
		img.css( { 'transform': 'translate(-50%,-50%)' });
		img.attr( 'x', 50 );
		img.attr( 'y', 50 );
		img.attr( 'dirX', ( Math.random() * 2.0 ) - 1.0 );
		img.attr( 'dirY', ( Math.random() * 2.0 ) - 1.0 );
		img.attr( 'speed', Math.random() + 0.2 );
		img.attr( 'dist', ( Math.random() * 30 ) + 15 );
		img.attr( 'angle', ( Math.random() * 719 ) );
    };
	
	var step = 0;
	function updateAnim()
	{
		switch( step )
		{
			case 350:
				$('#earth').fadeOut( 1000 );
				break
			case 450:
				$('#earth').attr( 'src', 'img/brainbox.svg' );
				$('#earth').css( { 'width':'20%' } );
				$('#earth').fadeIn( 2000 );
				break;
			case 650:
			case 3429:
				$('#floats').children('img').each( function(i) 
				{
					$(this).fadeOut( 1000 );
				});
				break;
			case 730:
				$('#earth').attr( 'src', 'img/brainbox.gif' );
				$('#earth').css( { 'width':'20%' } );
				
				break;
			case 2760:
				$('#earth').attr( 'src', 'img/brainbox.svg' );
				$('#earth').css( { 'width':'20%' } );
				$('#floats').children('img').each( function(i) 
				{
					$(this).fadeIn( 1000 );
					//insert here the number of different png images minus 1
					var rand = parseInt( ( Math.random() * 34 ) + 1 );
					$(this).attr( 'src',"img/mri"+rand+".png" );
				});
			case 3210 :
				$('#earth').attr( 'src', 'img/earth.gif' );
				$('#earth').css( { 'width':'15%' } );
				break;
			case 3479:
				$('#bubble1').fadeIn( 4000 );
				break;
			case 3600:
				$('#bubble2').fadeIn( 4000 );
				break;
			case 3700:
				$('#bubble3').fadeIn( 4000 );
				break;
			case 3800:
				$('#bubble4').fadeIn( 4000 );
				break;
		}
		
		if ( step < 720 )
		{
			$('#floats').children('img').each( function(i) 
			{ 
				var x = parseFloat( $(this).attr( 'x' ) );
				var y = parseFloat( $(this).attr( 'y' ) );
				var dirX, dirY;

				var angle = parseFloat( $(this).attr( 'angle' ) );
				angle = angle + 1;
				if ( angle > 719 )
				{
					angle = 0;
				}
				//dirX = parseFloat( $(this).attr( 'dirX' ) );
				//dirY = parseFloat( $(this).attr( 'dirY' ) );
				dirX = Math.sin( Math.PI * 2 / 720 * angle );
				dirY = Math.cos( Math.PI * 2 / 720 * angle );
				
				var speed = parseFloat( $(this).attr( 'speed' ) );
				var dist = parseFloat( $(this).attr( 'dist' ) );
				
				var newX = x + dirX * speed / 2;
				var newY = y + dirY * speed / 2;
							
				var currentDist = Math.sqrt( ( 50 - newX ) * ( 50 - newX ) + ( 50 - newY ) * ( 50 - newY ) );		 
				
				//if ( ( currentDist < dist && newX > 5 && newX < 95  && newY > 5 && newY < 95 ) )
				{
					//$(this).css( { 'transform': 'translate('+newX+'px,'+newY+'px)' });
					$(this).css( { 'top': newY + '%' } );
					$(this).css( { 'left': newX + '%' } );
					$(this).attr( 'x', newX );
					$(this).attr( 'y', newY );
					$(this).attr( 'angle', angle );
				}
			});
		}
		
		if ( step > 2760 && step < 3480 )
		{
			$('#floats').children('img').each( function(i) 
			{ 
				var x = parseFloat( $(this).attr( 'x' ) );
				var y = parseFloat( $(this).attr( 'y' ) );
				var dirX, dirY;

				var angle = parseFloat( $(this).attr( 'angle' ) );
				angle = angle + 1;
				if ( angle > 719 )
				{
					angle = 0;
				}
				//dirX = parseFloat( $(this).attr( 'dirX' ) );
				//dirY = parseFloat( $(this).attr( 'dirY' ) );
				dirX = Math.sin( Math.PI * 2 / 720 * angle );
				dirY = Math.cos( Math.PI * 2 / 720 * angle );
				
				var speed = parseFloat( $(this).attr( 'speed' ) );
				var dist = parseFloat( $(this).attr( 'dist' ) );
				
				var newX = x + dirX * speed / 2;
				var newY = y + dirY * speed / 2;
							
				var currentDist = Math.sqrt( ( 50 - newX ) * ( 50 - newX ) + ( 50 - newY ) * ( 50 - newY ) );		 
				
				//if ( ( currentDist < dist && newX > 5 && newX < 95  && newY > 5 && newY < 95 ) )
				{
					//$(this).css( { 'transform': 'translate('+newX+'px,'+newY+'px)' });
					$(this).css( { 'top': newY + '%' } );
					$(this).css( { 'left': newX + '%' } );
					$(this).attr( 'x', newX );
					$(this).attr( 'y', newY );
					$(this).attr( 'angle', angle );
				}
			});
		}
		
		
		
		
		++step;
		//console.log( step + "\n" );
		if ( step < 4000 ) 
		{
			window.requestAnimationFrame( updateAnim );
		}
	}
});

