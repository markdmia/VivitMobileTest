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
	$('#mainPanel').load('source/mainPanel.htm');													// load the main panel html
	
	for (var indx1=1; indx1<6; indx1++) {															// load the main header html onto each page
		$('#mainHeader' + indx1).load('source/mainHeader.htm');
		$('#mainBannerAdd' + indx1).load('source/mainBannerAdd.htm');								// load the main banner add html onto each page
	}

	$('#mainPanel').enhanceWithin().panel();														// establish the main panel

	$('#mainPanel').on('click', '#website', function() {
		showHelp();
//		window.open('http://vivit-worldwide.org/', '_system');
//		window.location='http://vivit-worldwide.org/';
	});
	
//	$('#mainPanel').on('click', '#website', function() {
//		if (typeof navigator !== 'undefined' && navigator.app) {									// mobile device
//			navigator.app.loadUrl('http://vivit-worldwide.org/', {openExternal: true});
//		} 
//		else {																						// Possible web browser
//			window.open('http://vivit-worldwide.org/', '_blank');
//		}
//	});
});

var inAppBrowserRef;

function showHelp() {
	var url		= "http://vivit-worldwide.org/"
	var target 	= "_blank";
	var options = "location=yes,hidden=yes";

	inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
	inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
	inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
	inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
}


function loadStartCallBack() {
    $('#status-message').text("loading please wait ...");
}


function loadStopCallBack() {
    if (inAppBrowserRef != undefined) {
        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });
        $('#status-message').text("");
        inAppBrowserRef.show();
    }
}


function loadErrorCallBack(params) {
    $('#status-message').text("");
    var scriptErrorMesssage =
       "alert('Sorry we cannot open that page. Message from the server is : "
       + params.message + "');"
 
    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
    inAppBrowserRef.close();
    inAppBrowserRef = undefined;
}
 

function executeScriptCallBack(params) {
    if (params[0] == null) {
        $('#status-message').text(
           "Sorry we couldn't open that page. Message from the server is : '"
           + params.message + "'");
    }
}
