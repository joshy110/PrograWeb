$('#btn_azul').click(function()
{
	$('#Mision').css('background-color','#123DE0');
	$('#Mision').css('color', 'white');
});

$('#btn_verde').click(function()
{
	var idM = $('#Mision');
	console.log(idM);
	$('#Vision').css('background-color','#5EC809');
	$('#Vision').css('color', 'white');
});