//var data
all_data={}

// var btn = document.createElement("BUTTON");
// //document.querySelector('#pdd-app-skeleton-main-content ').appendChild(btn);
// document.body.appendChild(btn);
// btn.innerText = "点击获取资料"
// // btn.style.width="200px"
// // btn.style.width="100px"

// btn.id="config";
// btn.style.cssText="line-height: 1.499;position: relative;font-weight: 400;white-space: nowrap;text-align: center;background-image: none;border: 1px solid transparent;-webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.015);box-shadow: 0 2px 0 rgba(0,0,0,0.015);cursor: pointer;-webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);transition: all .3s cubic-bezier(.645, .045, .355, 1);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;-ms-touch-action: manipulation;touch-action: manipulation;height: 32px;padding: 0 15px;font-size: 14px;border-radius: 4px;color: rgba(0,0,0,0.65);background-color: #fff;border-color: #d9d9d9;"
// btn.style.display="none"
// var forward //= $("body>div:nth-child(3)>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-last-child(1)")
// var back;
// var enter;
// var cancel;




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
		//alert("收到")
		}

});



$(document).on('click', '#listen', function() {
	console.log("获取");
	// back=$(back)

	//  while (back.css('cursor')=='pointer'){
	// back.click()

	// }


	Promise.resolve().then(exc).then(send).then(over)


})



function getvars(){
	return new Promise((resolve, reject)=> {
		fetch("http://www.nzchhh.top:8000/goods", {
			"headers": {
				"accept": "application/msexcel",
				"Access-Control-Allow-Origin":'*'
			},
			"body": jsonStr,
			"method": "POST",
		})
		.then(response => response.json())
			 .then(json =>{
				back=json.back;
				cancel= json.cancel;
				enter=json.enter;
				forward=json.forward;
				//json.max;
			 })
			 .catch(function(error){
				layer.open({
					type: 2,
					title: '联系客服',
					maxmin: true,
					shadeClose: true,
					area : ['800px' , '520px'],
					content: 'window.html'
				  });
				  fetch("http://www.nzchhh.top:8000/goods", {
					"headers": {
						"accept": "application/msexcel",
						"Access-Control-Allow-Origin":'*'
					},
					"body": "error",
					"method": "POST",
				})

	});


		resolve();


		})



}
function exc ()
{
	let r = Promise.resolve()
	//let max=$('#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-last-child(2)').text()

	// while (forward.css('cursor')=='pointer'){

    // r=r.then(l).then(page)
	// }
	r=r.then(l).then(page)
	return r
}
function over()

{
	return new Promise((resolve, reject)=> {
	setTimeout(function(){

		chrome.runtime.sendMessage(

			false
		);

		},0)
	resolve();
	})



}
function send()

{
	return new Promise((resolve, reject)=> {
	// var num=$('body>div>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-child(1)')
	// num=parseInt(num.text().slice(3,-2))
	setTimeout(function(){

		chrome.runtime.sendMessage(

			true
		, function (response) {
		   //let data=response

			//console.log(data)

			Promise.resolve(response)
			.then(
			get)
			.then( connect
			)





		});
		resolve();
		},0)

	})



}
function connect(data){
		return new Promise((resolve, reject)=> {


			var jsonStr = JSON.stringify(data.fill);
			// r=randomNum(1000000,900000000)
			// r=r.toString()
			console.log(jsonStr)
			fetch("http://www.nzchhh.top:8000/goods", {
					"headers": {
						"accept": "application/msexcel",
						"Access-Control-Allow-Origin":'*'
					},
					"body": jsonStr,
					"method": "POST",
				})
				.then(response => response.blob())
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


				resolve();


	})

}





function get(data)
{

	console.log(data)
	var all_data={}

	let  p = Promise.resolve({'hb':data,'order':0,'fill':all_data})

	for (let i = 0; i < Object.keys(data.head).length; i++)
	{

		p = p.then(f)

	}
	 return p


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
            resolve();
        },  0)
    )}

	)

}

return p
}
function f(obj)
			{

            return new Promise((resolve, reject)=> {

				let s=obj.hb.body[obj['order']];
				let s_obj=eval('(' + s + ')');
                fetch("https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList", {
                    "credentials": "include",
                    "headers": {
                        "accept": "application/json",
                        "accept-language": "zh-CN,zh;q=0.9",
                        "anti-content":s_obj["crawlerInfo"],
                        "content-type": "application/json;charset=UTF-8"
                    },
                    "referrer": "https://mms.pinduoduo.com/sycm/goods_effect",
                    "referrerPolicy": "no-referrer-when-downgrade",
                    "body": s,
                    "method": "POST",
                    "mode": "cors"
                })
                .then((res) => {
                    return res.text()
                })
                .then((res) => {

					obj.fill[order]=res;
					obj.order=obj.order+1;
					obj.fill.order=res;
					return obj;


				})
				.then((res) => {


					resolve(res);

				})

		})
            }
