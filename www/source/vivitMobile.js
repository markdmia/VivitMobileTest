/**********************************************************************************
 *                       - M E F   A p p l i c a t i o n s -
 *
 * vivitMobile.js (VivitMobileTest)
 *---------------------------------------------------------------------------------
 * Written by: Mark Ford / 02-05-2017
 *
 * The main javascript code.
 **********************************************************************************/

$(document).ready(function() {
	$('#mainPanel').load('source/mainPanel.htm');
	$('#mainHeader1').load('source/mainHeader.htm');
	$('#mainHeader2').load('source/mainHeader.htm');
	$('#mainHeader3').load('source/mainHeader.htm');
	$('#mainHeader4').load('source/mainHeader.htm');
	$('#mainHeader5').load('source/mainHeader.htm');
	$('#mainHeader6').load('source/mainHeader.htm');

	$('#mainPanel').enhanceWithin().panel();

	$('#website').click(function() {
		window.open('http://vivit-worldwide.org', '_parent');
	});
});
