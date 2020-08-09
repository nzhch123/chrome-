$("#sub").click(function(){
    var a=$("#acc").val()
	var p=$("#pass").val()
	fetch("http://127.0.0.1:8083/core/user/login.json?code="+a+"&password="+p, {
					"headers": {
						
						"Access-Control-Allow-Origin":'*'
					},
					
					"method": "GET",
				})
				.then(response=>response.json())
				.then(response =>
				if (response.code=="200"){
					
						sendMessageToContentScript({cmd:'test', value:'success'}, function(response)
						{
							//console.log('来自content的回复：'+response);
						});
				}
				else{
					alert(response.msg);
				}
				
				
				)
					 
	
  });
			function sendMessageToContentScript(message, callback)
						{
							chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
							{
								chrome.tabs.sendMessage(tabs[0].id, message, function(response)
								{
									if(callback) callback(response);
								});
							});
						} 