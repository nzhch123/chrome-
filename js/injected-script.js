flag=0;
order=0;
all_data={}
let fetch_kinds = {


    originalFetch: window.fetch.bind(window),
    myFetch: function(...args) {
        return fetch_kinds.originalFetch(...args).then((response) => {
            if (response.url=="https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsSpanDateList")
            {
                return response.json();
            }

        }).then((response) => {
            //console.log(response)
            if (response!=null){
                all_data[order]=response;
                order++;
            }

        });
    },
}
window.addEventListener("message", function(e)
{   if (e.origin=="https://mms.pinduoduo.com"){
        if (e.data=="start"){
            flag=1;
            order=0;
            window.fetch = fetch_kinds.myFetch;
        }
        if (e.data=="finish"){
            flag=0;
            order=0;
            window.fetch = fetch_kinds.originalFetch;
            console.log(all_data)
            all_data={}
           // window.postMessage(all_data, '*');
        }

}

}, false);



