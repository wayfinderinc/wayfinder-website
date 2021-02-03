(function ($){
	$.fn.rating = function(){

		var $that = $(this);
		var $ratings = $('.rating em');
		var $maxScore = $ratings.length * 5;
		var $total = 0;
		var $baseRatio = 0;

		$ratings.each(function() {
			$total += parseInt($(this).text().split('/')[0]);
		});

		$baseRatio = $total / $maxScore * 100;
		$averageRating = Math.round($baseRatio * 100) / 100;

		// var $averageRating = parseFloat($total / $maxScore * 100);
		// console.log('average:' + $averageRating);

		returnLetterGrade = function(averagedRating) {
			var grade = 'C';

			switch (true) {
				case (averagedRating < 20):
					grade = 'F';
					break;

				case ((averagedRating >= 20) && (averagedRating <= 26.66)):
					grade = 'D<sup>-</sup>';
					break;

				case ((averagedRating >= 26.67) && (averagedRating <= 33.32)):
					grade = 'D';
					break;

				case ((averagedRating >= 33.33) && (averagedRating <= 39.99)):
					grade = 'D<sup>+</sup>';
					break;

				case ((averagedRating >= 40) && (averagedRating <= 46.66)):
					grade = 'C<sup>-</sup>';
					break;

				case ((averagedRating >= 46.67) && (averagedRating <= 53.32)):
					grade = 'C';
					break;

				case ((averagedRating >= 53.33) && (averagedRating <= 59.99)):
					grade = 'C<sup>+</sup>';
					break;

				case ((averagedRating >= 60) && (averagedRating <= 66.66)):
					grade = 'B<sup>-</sup>';
					break;

				case ((averagedRating >= 66.67) && (averagedRating <= 73.32)):
					grade = 'B';
					break;

				case ((averagedRating >= 73.33) && (averagedRating <= 79.99)):
					grade = 'B<sup>+</sup>';
					break;

				case ((averagedRating >= 80) && (averagedRating <= 86.66)):
					grade = 'A<sup>-</sup>';
					break;

				case ((averagedRating >= 86.67) && (averagedRating <= 93.32)):
					grade = 'A';
					break;

				case ((averagedRating >= 93.33) && (averagedRating <= 100)):
					grade = 'A<sup>+</sup>';
					break;

				default:
					grade = 'C';
					break;
			}

			return grade;
		}

		return $that.find('span').append(returnLetterGrade($averageRating));

	};

}(jQuery));