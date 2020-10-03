chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	// fetch("http://www.nzchhh.top:8000/goods", {
	// 		"headers": {
	// 			"accept": "application/msexcel",
	// 			"Access-Control-Allow-Origin":'*'
	// 		},
	// 		"body": jsonStr,
	// 		"method": "POST",
	// 	})
	// 	.then(response => response.blob())
	console.log('收到来自content-script的消息：');
	console.log(request);
	//sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
});
