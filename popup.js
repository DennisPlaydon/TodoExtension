$(function(){
    var newDate = new Date();
    var weekdays = new Array(7);
	weekdays[0] =  "Sunday";
	weekdays[1] = "Monday";
	weekdays[2] = "Tuesday";
	weekdays[3] = "Wednesday";
	weekdays[4] = "Thursday";
	weekdays[5] = "Friday";
	weekdays[6] = "Saturday";

	var weekday = weekdays[newDate.getDay()]
    $('#greet').text(weekday + "'s List")

    var mustdo = document.querySelector('.mustdo');
    var guessField = document.querySelector('#name');

    $('#addItem').click(function(){
    	mustdo.textContent += guessField.value
    });
});