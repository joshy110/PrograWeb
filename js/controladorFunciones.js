$('#btn_azul').click(function()
{
	$('#Mision').css('background-color','#123DE0');
	$('#Mision').css('color', 'white');
	$('#Mision').css('font-family', 'Comic Sans MS');

});

$('#btn_verde').click(function()
{
	$('#Vision').css('background-color','#5EC809');
	$('#Vision').css('color', 'white');
	$('#Vision').css('font-family', 'Arial Black');
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
$('#btn_regresarParrafo').click(function()
{
	$('#Mision').css('background-color','#000203');
	$('#Mision').css('color', '#fff');
	$('#Mision').css('font-family', 'Georgia');

	$('#Vision').css('background-color','#000203');
	$('#Vision').css('color', '#fff');
	$('#Vision').css('font-family', 'Georgia');
});



