
// 命名空间
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
