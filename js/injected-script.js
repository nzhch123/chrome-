
window.addEventListener("message", function(e)
{   if (e.origin=="https://mms.pinduoduo.com"){
    if (e.data=="start_pin"){
        window.fetch = fetch_kinds.myFetch;
        //window.postMessage({from:"injected",content:"myfetch"}, '*')
    }
    if (e.data=="finish_pin"){
        window.fetch = fetch_kinds.originalFetch;
        //window.postMessage({from:"injected",content:"originfetch"}, '*')
    }

}

}, false);
fetch_kinds = {
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

                window.postMessage({from:"injected",content:response}, '*');
            }

        });
    },
}




