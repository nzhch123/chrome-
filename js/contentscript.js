
all_data={}
order=0
var now_page_order=1
var fetch_status="originfetch"
const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.extension.getURL('js/injected-script.js'));
document.documentElement.appendChild(script);

window.addEventListener("message", function(e)
{   if (e.origin=="https://mms.pinduoduo.com"){
	if (e.data.from=="injected"){
		all_data[order]=e.data.content;
		order++;
		now_page_order++;
		}
	}
	// if (e.origin=="https://mms.pinduoduo.com"){
	// 	if (e.data.from=="injected"){
	// 		all_data[order]=e.data.content;
	// 		order++;
	// 	}
	// }

}, false);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	 console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
	if(request.cmd == 'test')
	{
		if(request.value=='success') {
			//btn.style.display="inline"
			console.log("登录成功")
			$("div:contains(商品榜单):eq(-3)").css("background-color","#B2E0FF").append('<input type="button" id="listen"  value="点击获取资料" style="line-height: 1.499;position: relative;font-weight: 400;white-space: nowrap;text-align: center;background-image: none;border: 1px solid transparent;-webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.015);box-shadow: 0 2px 0 rgba(0,0,0,0.015);cursor: pointer;-webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);transition: all .3s cubic-bezier(.645, .045, .355, 1);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;-ms-touch-action: manipulation;touch-action: manipulation;height: 40px;padding: 0 15px;font-size: 14px;border-radius: 4px;color: rgba(0,0,0,0.65);background-color: #fff;border-color: #d9d9d9;">');
		}
		else
		{
			console.log(request.value)
		}

		}

});



$(document).on('click', '#listen', function() {
	console.log("获取");
	// back=$(back)

	//  while (back.css('cursor')=='pointer'){
	// back.click()

	// }


	Promise.resolve().then(exc).then(send)



})

function exc ()
{
	let r = Promise.resolve()
	r=r.then(set_init)
	r=r.then(l);
	max=1;
	for (let j = 0 ; j < max-1; j++) {

		r=r.then(set_pause).then(page).then(l)
	}
	r=r.then(set_finish)
	return r

}
function set_pause(){
	return new Promise((resolve, reject)=> {

		window.postMessage("finish_pin", '*');

		resolve();


	})
}
function set_finish(){
	return new Promise((resolve, reject)=> {


		var judage = function(){
			if(now_page_order == $("span:contains(详情)").length/2){
				window.postMessage("finish_pin", '*');
				all_data={}
				order=0;
			}
			else{
				//20毫秒轮询一次
				setTimeout(judage, 20)
			}
		}

		judage();
			all_data={}
			order=0;

		resolve();


	})
}
function set_init(){
		return new Promise((resolve, reject)=> {
			window.postMessage("start_pin", '*');
			resolve();


		})

}
function send()

{
	return new Promise((resolve, reject)=> {

		chrome.runtime.sendMessage(all_data, function(response) {
			Promise.resolve(response)
					 .then(blob => URL.createObjectURL(blob))
					 .then(uril => {
					 var link = document.createElement("a");
					 link.href = uril;
					 link.download = 'my data' + ".xls";
					 document.body.appendChild(link);
					 link.click();
					 document.body.removeChild(link);
					 }).catch(function(error){
				alert("请稍后尝试，有问题请联系客服")
			});

		});

		resolve();


	})
}
function connect(data){
		return new Promise((resolve, reject)=> {


			var jsonStr = JSON.stringify(data.fill);
			// r=randomNum(1000000,900000000)
			// r=r.toString()
			console.log(jsonStr)
			// fetch("http://www.nzchhh.top:8000/goods", {
			// 		"headers": {
			// 			"accept": "application/msexcel",
			// 			"Access-Control-Allow-Origin":'*'
			// 		},
			// 		"body": jsonStr,
			// 		"method": "POST",
			// 	})
			// 	.then(response => response.blob())
			// 		 .then(blob => URL.createObjectURL(blob))
			// 		 .then(uril => {
			// 		 var link = document.createElement("a");
			// 		 link.href = uril;
			// 		 link.download = 'my data' + ".xls";
			// 		 document.body.appendChild(link);
			// 		 link.click();
			// 		 document.body.removeChild(link);
			// 		 }).catch(function(error){
			// 	alert("请稍后尝试，有问题请联系客服")
			// });



				resolve();


	})

}


function page()
{
	return new Promise((resolve, reject)=> {

	//fo=$("#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-last-child(1)")
	//$(forward).click()

	resolve();


	})
}
function l()
{	let p = Promise.resolve()
	let max=$("span:contains(详情)").length/2;
	for (let i = 0 ; i < max; i++) {
    p =p.then(() => { return new Promise(resolve =>
        setTimeout(function () {
            $("span:contains(详情)").eq(i*2).click();
			resolve();
        },  0)
	  )})
	.then(() => {
	return new Promise(resolve =>
        setTimeout(function () {

			//$('body>div:nth-last-child(1)>div>div>div:nth-child(3)>div:nth-child(2)>button>span').click()
			$("span:contains(确定)").click();
			now_page_order++;
            resolve();
        },  0)
    )}

	)

}

return p
}

