
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
					//consloe.log("登录成功")

						sendMessageToContentScript({cmd:'test', value:'success'}, function(response)
						{
							//console.log('来自content的回复：'+response);
						});
						window.location.href="loginsuccess.html"; 
				}
				else{
					//consloe.log(response.msg)
					//$("body").html("<p class=\"lead\" class=\"text-center\">恭喜您登录成功</p>");
					window.location.href="loginsfail.html"; 
					sendMessageToContentScript({cmd:'test', value:response.msg}, function(response)
					{
						//console.log('来自content的回复：'+response);
					});
					//alert(response.msg);
					
				}
	}
				
				).catch(e=>{
					//$("body").html("<head>    <meta charset=\"utf-8\" /><title>拼多多插件</title>    <!-- 新 Bootstrap 核心 CSS 文件 --><link href=\"https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\"> <!-- jQuery文件。务必在bootstrap.min.js 之前引入 --><script src=\"https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js\"></script> <!-- 最新的 Bootstrap 核心 JavaScript 文件 --><script src=\"https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js\"></script>  </head>  <body dir=\"ltr\" class=\"\"><br /><br /><p class=\"lead\" class=\"text-center\">恭喜您登录成功</p>  </body>");
					//window.location.href="loginsfail.html";
				
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