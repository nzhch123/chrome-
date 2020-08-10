var i=0
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {

	
		for (var j = 0; j < details.requestHeaders.length; ++j) {
            if (details.requestHeaders[j].name === 'Origin')
                details.requestHeaders[j].value = 'https://mms.pinduoduo.com';
        }
			

	}, {
        urls: ["https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList"]
    },
    ["blocking", "requestHeaders", "extraHeaders"]

)
 chrome.webRequest.onBeforeRequest.addListener(
    
	
	function(details)
    {
        i=i+1;

		if(i%2==1){
		buffer=details.requestBody.raw[0].bytes
		
  
        var blob = new Blob([buffer]);
//将 Blob对象 读成字符串
		var reader = new FileReader();
		reader.readAsText(blob, 'utf-8');
		reader.onload = function (e) {
		var send=reader.result; //a Hello world!
		

}
		
		}	
    },
    {urls: ["https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList"]},
    ['requestBody']
); 





