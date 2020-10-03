flag=0;
order=0;
all_data={}
window.addEventListener("message", function(e)
{   if (e.origin=="https://mms.pinduoduo.com"){
        if (e.data=="start"){
            flag=1;
            order=1;
        }
        if (e.data=="finish"){
            flag=0;
            order=0;
            console.log(all)
            window.postMessage(all_data, '*');
        }

}

}, false);
let fetch_kinds = {


    originalFetch: window.fetch.bind(window),
    myFetch: function(...args) {
        return fetch_kinds.originalFetch(...args).then((response) => {
            return response.json();
        }).then((response) => {console.log(response)});
    },
}


if (fetch_kinds.settings.ajaxInterceptor_switchOn) {
    window.XMLHttpRequest = fetch_kinds.myXHR;
    window.fetch = fetch_kinds.myFetch;
} else {
    window.XMLHttpRequest = fetch_kinds.originalXHR;
    window.fetch = fetch_kinds.originalFetch;
}
