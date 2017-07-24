$(document).ready(function() {

	var turn_count = 0

	$('td').one('click', function(e){
		turn_count++
		if(turn_count == 9) {
			alert("Game over! It's a draw!")
			}
		else if(turn_count % 2 == 0) {
			$(this).text('X');
			checkVictory('X')
			}
		else {
			$(this).text('O');
			checkVictory('O')
			}
	});

	checkVictory = function(player) {
		//top horizontal check
		if($('#board').find('#1').text() !== '') {
			if($('#board').find('#1').text() == $('#board').find('#2').text()) {
				if($('#board').find('#2').text() == $('#board').find('#3').text()) {
					alert('Game Over! ' + player + ' is the winner!')
					}
				}
			//left diagonal check
			if($('#board').find('#1').text() == $('#board').find('#5').text()) {
				if($('#board').find('#5').text() == $('#board').find('#9').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			//check left vertical
			if($('#board').find('#1').text() == $('#board').find('#4').text()) {
				if($('#board').find('#4').text() == $('#board').find('#7').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			}
		if($('#board').find('#2').text() !== '') {
			//check middle vertical
			if($('#board').find('#2').text() == $('#board').find('#5').text()) {
				if($('#board').find('#5').text() == $('#board').find('#8').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			}
		if($('#board').find('#3').text() !== '') {
			//check right vertical
			if($('#board').find('#3').text() == $('#board').find('#6').text()) {
				if($('#board').find('#6').text() == $('#board').find('#9').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			//rihgt diagonal check
			if($('#board').find('#3').text() == $('#board').find('#5').text()) {
				if($('#board').find('#5').text() == $('#board').find('#7').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			}
		//middle horizontal check
		if($('#board').find('#4').text() !== '') {
			if($('#board').find('#4').text() == $('#board').find('#5').text()) {
				if($('#board').find('#5').text() == $('#board').find('#6').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			}
		//bottom horizontal check
		if($('#board').find('#7').text() !== '') {
			if($('#board').find('#7').text() == $('#board').find('#8').text()) {
				if($('#board').find('#8').text() == $('#board').find('#9').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			}

	}
	reset = function() {
		turn_count = 0
		$('.cell').text('');
	}
	
	$('.button').click(reset)

})
