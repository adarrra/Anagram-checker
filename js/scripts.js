/*
function anagramCheck(word,part){
	var anagram_found = true;
	var partArray = [];
	for(var i=0;i<part.length;i++){

		partArray.push(part[i]);
	}

	partArray.forEach(function(letter){
		if(word.indexOf(letter)== -1){
			anagram_found =false;

		}

	});
	if (anagram_found != false){
		return true;
	}else{
		return false;
	}

}
*/
jQuery(document).ready(function	(){
/////////////


	$('.result').hide();
	$('#words-form').submit(function(e){
		var word = $("#word").val();

		function anagramCheck(word,part){
			word = word.toLowerCase();
			part = part.toLowerCase();

			if(!part){
				return "empty field"
			}

			var anagram_found = true;
			var partArray = [];
			for(var i=0;i<part.length;i++){

				partArray.push(part[i]);
			}

			partArray.forEach(function(letter){
				if(word.indexOf(letter)== -1){
					anagram_found =false;
				}
			});
			if (anagram_found != false){
				return "anagram";
			}else{
				return "not anagram";
			}
		}

		var fields = ['part1', 'part2', 'part3', 'part4', 'part5'];

		fields.forEach(function(field){
			$("."+field + '-result').empty().append((anagramCheck(word,$("#"+field).val())))
		});

		$('.result').show();


		e.preventDefault();
	});


//возможность добавлять поля, красивее это все сделать, проверить грамма, зелен/красный результат
//проверка чтоб буква не использовалась больше, чем в слове раз
// сделано: проверку на пустые поля, чувствительность к регистру



//////////////
});
