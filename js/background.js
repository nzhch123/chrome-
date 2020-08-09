var k=-1
var j=-1
var data={}
var data_h={}
var finish=false

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
		j++;
        console.log('BeforeSendHeaders',j)
		console.log(finish)
		if(finish==false){
		//{ console.log('head')
		an=details.requestHeaders[1].value
		
		
		data_h[j]=an
		console.log(data_h)
		}	
    }
	, {
        urls: ["https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList"]
    },
    ["blocking", "requestHeaders", "extraHeaders"]

)

 chrome.webRequest.onBeforeRequest.addListener(
    
	
	function(details)
    {
        k++;
		console.log('beforerequest',k)
		
		if(finish==false)
		{
			
		buffer=details.requestBody.raw[0].bytes		
		console.log('before')  
        var blob = new Blob([buffer]);
//将 Blob对象 读成字符串
		var reader = new FileReader();
		reader.onloadend = function (e) {
		
		var send=reader.result; //a Hello world!
				console.log(k,send)

		data[k]=send
		}

		reader.readAsText(blob, 'utf-8');
		
		

		
		}
		
		//}	
    },
    {urls: ["https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList"]},
    ['requestBody']
); 




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










 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    
	
	
	 k=-1
     j=-1	
		
	
	
	finish=request
	
	
	sendResponse({head:data_h,body:data});
	
	
});


/*  chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
			console.log('head')
					if(i%2==1){
		
  		chrome.tabs.query(
			{active: true, currentWindow: true}, 
			function(tabs) {
				chrome.tabs.sendMessage(
					tabs[0].id, 
					details.requestHeaders[1].value
					);
}); 
}
		
		}
             ,
        {urls: ["https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList"]},
        [ "requestHeaders"]); 
		   */