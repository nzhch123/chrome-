var data
all_data={}
var btn = document.createElement("BUTTON");
document.querySelector('#pdd-app-skeleton-main-content ').appendChild(btn);
//document.body.appendChild(btn);
btn.innerText = "点击获取资料"
btn.style.width="200px"
btn.style.width="100px"
btn.style.display="none"
var forward = $("body>div:nth-child(3)>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-last-child(1)")





chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	// console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
	if(request.cmd == 'test') 
	{
		// if(request.value=='success') {
		// 	btn.style.display="inline"
		// }
		alert("收到")
		}

});





	btn.onclick = function () 
{		
		var back = $("#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-child(3)")

          
         while (back.css('cursor')=='pointer'){
        back.click()
		
        } 
        
		
		Promise.resolve().then(exc).then(send).then(over)

           
			
}	

function exc () 
{	
	let r = Promise.resolve()
	let max=$('#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-last-child(2)').text()
	
	for (let j = 0 ; j < max; j++) {
	 
    r=r.then(l).then(page)
	}
	return r
}
function over()

{   
	return new Promise((resolve, reject)=> {
	var num=$('#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-child(1)')
	num=parseInt(num.text().slice(3,-2))
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
	var num=$('body>div>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-child(1)')
	num=parseInt(num.text().slice(3,-2))
	setTimeout(function(){
			
		chrome.runtime.sendMessage(
			
			true
		, function (response) {
		    data=response
			
			//console.log(data)
			
			Promise.resolve(data)
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
			r=randomNum(1000000,900000000)	
			r=r.toString()
			console.log(jsonStr)
			fetch("http://127.0.0.1:8080/goods?name="+r, {
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
					 link.download = 'your data' + ".xls";
					 document.body.appendChild(link);
					 link.click();
					 document.body.removeChild(link);
					 });
					
			
				resolve();
	
	
	})
	
}
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
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
	setTimeout(function () {
	fo=$("#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-last-child(1)")
	fo.click()
	
	resolve();
	},0)
	
	})
}
function l()
{	let p = Promise.resolve()
	debugger;
	let max=$('#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)>div>ul>li:nth-child(2)>div>div>div>div>input').val()
	for (let i = 0 ; i < max; i++) {
    p =p.then(() => { return new Promise(resolve =>
        setTimeout(function () {
			
			$('#root>div>div>main>div>div:nth-child(3)>div>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(1)>div:nth-child(1)>table>tbody>tr>td:nth-child(7)>div>div:nth-child(2)>a>span').eq(i).click()
            resolve();
        },  0)
	  )})
	.then(() => { 
	return new Promise(resolve =>
        setTimeout(function () {
            
			$('body>div:nth-last-child(1)>div>div>div:nth-child(3)>div:nth-child(2)>button>span').click()
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
				
				al=obj.fill
                fetch("https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList", {
                    "credentials": "include",
                    "headers": {
                        "accept": "application/json",
                        "accept-language": "zh-CN,zh;q=0.9",
                        "anti-content": obj.hb.head[obj['order']],
                        "content-type": "application/json;charset=UTF-8"
                    },
                    "referrer": "https://mms.pinduoduo.com/sycm/goods_effect",
                    "referrerPolicy": "no-referrer-when-downgrade",
                    "body": obj.hb.body[obj['order']],
                    "method": "POST",
                    "mode": "cors"
                })
                .then((res) => {
                    return res.text() 
                })
                .then((res) => {
                     
					al[obj.order]=res
					
					
				})
				.then((res) => {
                     
					
					resolve({'hb':data,'order':obj.order+1,'fill':al});
					
				})
			
		}) 
            } 		