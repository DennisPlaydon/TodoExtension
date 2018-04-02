$(function(){
	var newDate = new Date();
	var weekday = newDate.getDay()
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + weekday)
    })
});