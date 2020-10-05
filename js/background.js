chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log(JSON.stringify(request))
	fetch("http://www.nzchhh.top:8000/goods", {
			"headers": {
				"accept": "application/msexcel",
				"Access-Control-Allow-Origin":'*'
			},
			"body": JSON.stringify(request),
			"method": "POST",
		})
		.then(response => response.blob())
		.then(response=>sendResponse(response))

});
