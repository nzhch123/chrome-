
const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
'2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ=='
function encrypt(txt) {
	const encryptor = new JSEncrypt()
	encryptor.setPublicKey(publicKey) // 设置公钥
	return encryptor.encrypt(txt) // 对需要加密的数据进行加密
  }

 account= {
    "code": "<string>",
    "password": "HPyaaTwGN9bl5i2MQadJL88RkUH3MN28e8F3RRXBd9qeqOoKSKgXv1MPHCfSqPFDw//Pr+gInE/rW8iklJXNKQ==",
    "username": "admin",
    "uuid": "<string>"
}

$("#sub").click(function(){
    var a=$("#acc").val()
	var p=$("#pass").val()
	account.username=a;
	account.password=encrypt(p)
	accounts=JSON.stringify(account);
	fetch("http://www.nzchhh.top:8000/auth/login", {
					"headers": {
						"content-type": "application/json;charset=UTF-8",
						"Access-Control-Allow-Origin":'*'
					},
					"body":accounts,
					"method": "POST"
				})
				.then(response=>response.json())
				.then(response =>{
					console.log(response);
				if (response.hasOwnProperty('token')){


						sendMessageToContentScript({cmd:'test', value:'success'}, function(response)
						{
							//console.log('来自content的回复：'+response);
						});
						window.location.href="loginsuccess.html";
				}
				else{

					window.location.href="loginsfail.html";
					sendMessageToContentScript({cmd:'test', value:response.msg}, function(response)
					{
						//console.log('来自content的回复：'+response);
					});
				}
	}

				).catch(e=>{
					window.location.href="loginsfail.html";

				})


  });
			function sendMessageToContentScript(message, callback)
						{
							chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
							{	console.log(tabs);
								chrome.tabs.sendMessage(tabs[0].id, message, function(response)
								{
									if(callback) callback(response);

								});
							});
						}
