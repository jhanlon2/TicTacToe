$(document).ready(function() {

	var turn_count = 0

	$('#board').find('.td').on('click', function(e){
		if(turn_count % 2 === 0) {
			$(this).text('X')
			}
		else {
			$(this).text('X')
			}
		turn_count++
	});

	checkVictory = function() {
		//horizontal check
		if($('#board').find('#1').text() !== '') {
			if($('#board').find('#1').text() = $('#board').find('#2').text()) {
				if($('#board').find('#2').text() = $('board').find('#3').text()) {
					alert('Game Over! ' + player + ' is the winner!')
					}
				}
			//diagonal check
			if($('#board').find('#1').text() = $('#board').find('#5').text()) {
				if($('#board').find('#5').text() = $('#board').find('#9').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			//check vertical
			if($('#board').find('#1').text() = $('#board').find('#4').text()) {
				if($('#board').find('#4').text() = $('#board').find('#7').text()) {
					alert('Game over! '+player+' is the winner!')
					}
				}
			}

		
	}
})
