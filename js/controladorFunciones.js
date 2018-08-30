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

$('#btn_cambioClase').click(function()
{
	$('.TituloscolumnasPrincipal').css('background-color','#080302');
	$('.TituloscolumnasPrincipal').css('font-family', 'Arial');
});

$('#btn_regresarClase').click(function()
{
	$('.TituloscolumnasPrincipal').css('background-color','#E5D808');
	$('.TituloscolumnasPrincipal').css('color', 'white');
	$('.TituloscolumnasPrincipal').css('font-family', 'Georgia');
});



