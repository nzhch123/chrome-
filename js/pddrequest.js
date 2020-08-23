!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.pcLogging = t() : (e._MSFE_ = e._MSFE_ || {},
        e._MSFE_.pcLogging = t())
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
        }
        return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (n.r(r),
                    Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(r, o, function(t) {
                            return e[t]
                        }
                            .bind(null, o));
                return r
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                ;
                return n.d(t, "a", t),
                    t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "/",
            n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
                t
        }(n(1));
        r.autoReport(),
            t.default = r
    }
        , function(e, t, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
            ;
            function o(e) {
                return e && "object" === (void 0 === e ? "undefined" : r(e)) && "default"in e ? e.default : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, a, s = o(n(2)), u = n(3), c = o(n(6)), f = n(8), l = o(n(10)), d = o(n(12)), p = function() {
                return (p = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }
                ).apply(this, arguments)
            };
            function h(e, t) {
                var n = {};
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                        t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
                }
                return n
            }
            function g(e, t, n, r) {
                return new (n || (n = Promise))(function(o, i) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function u(e) {
                            e.done ? o(e.value) : new n(function(t) {
                                    t(e.value)
                                }
                            ).then(a, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }
                )
            }
            function v(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }
                ),
                    i;
                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, i[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (i = [2 & i[0], o.value]),
                                        i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                        case 5:
                                            a.label++,
                                                r = i[1],
                                                i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1],
                                                    o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2],
                                                    a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e],
                                        r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }
            !function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN",
                    e[e.WIFI = 1] = "WIFI",
                    e[e["2G"] = 2] = "2G",
                    e[e["3G"] = 3] = "3G",
                    e[e["4G"] = 4] = "4G"
            }(i || (i = {})),
                function(e) {
                    e.mmsUnknown = "MMS-UNKNOWN",
                        e.mmsWeb = "MMS-WEB",
                        e.mmsMobile = "MMS-MOBILE"
                }(a || (a = {}));
            var m, y, b = {
                platform: a.mmsUnknown,
                userInfo: {
                    id: 0,
                    mall_id: 0
                },
                network: i.UNKNOWN,
                pageName: "",
                isProd: !1,
                pageUrl: ""
            }, w = function() {
                return g(void 0, void 0, void 0, function() {
                    return v(this, function(e) {
                        return [2, b]
                    })
                })
            }, O = null, S = function() {
                return g(void 0, void 0, void 0, function() {
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]),
                                O || (console.warn("[logging]: Using default env."),
                                    O = w),
                                    [4, O()];
                            case 1:
                                return [2, e.sent()];
                            case 2:
                                return e.sent(),
                                    [2, b];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, E = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, x = function(e) {
                return g(void 0, void 0, void 0, function() {
                    var t, n, o, i, a;
                    return v(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, S()];
                            case 1:
                                return t = s.sent(),
                                    n = t.userInfo,
                                    o = Date.now(),
                                    i = "1.0.0",
                                    a = "object" === ("undefined" == typeof document ? "undefined" : r(document)) ? document.referrer : "",
                                    [2, {
                                        log_version: i,
                                        time: o,
                                        user_id: n.id,
                                        mall_id: n.mall_id,
                                        platform: t.platform,
                                        network: t.network,
                                        page_url: t.pageUrl,
                                        page_name: t.pageName,
                                        refer_page_name: a,
                                        payload: e,
                                        app_version: "undefined" != typeof APP_VERSION && APP_VERSION || "_undefined_"
                                    }]
                        }
                    })
                })
            };
            !function(e) {
                e[e.Fatal = 1001] = "Fatal",
                    e[e.SideNav = 1002] = "SideNav"
            }(m || (m = {})),
                function(e) {
                    e.NETWORK_EXCEPTION = "network_exception",
                        e.SERVICE_EXCEPTION = "service_exception",
                        e.H5_PAGE_EXCEPTION = "h5_page_exception"
                }(y || (y = {}));
            var _ = {
                init: function(e) {
                    var t = e.config.beforeSend;
                    E(t) && t.unshift(function(e) {
                        var t = e.errorMessage || ""
                            , n = e.errorClass || ""
                            , r = {
                            error_type: y.H5_PAGE_EXCEPTION
                        };
                        !function(e) {
                            return -1 !== e.indexOf("Failed to fetch") || /Loading.*chunk \d+ failed\./.test(e)
                        }(t) ? function(e) {
                            return "ApiError" === e
                        }(n) && (r.error_type = y.SERVICE_EXCEPTION) : r.error_type = y.NETWORK_EXCEPTION,
                            e.updateMetaData("marmot", r)
                    })
                }
            };
            u.polyfill(),
                n(13);
            var N = function(e, t, n) {
                return n ? fetch(e, {
                    body: JSON.stringify(t),
                    credentials: "include",
                    headers: {
                        "content-type": "text/plain"
                    },
                    method: "POST",
                    mode: "no-cors"
                }) : console.info("Can`t Report Log in testing")
            }
                , B = {
                init: function(e) {
                    var t = e.config.beforeSend;
                    (function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }
                    )(t) && t.unshift(function(e) {
                        var t = new c
                            , n = p({}, e.device, {
                            ua: t
                        });
                        e.device = n
                    })
                }
            }
                , j = s({
                apiKey: "@msfe/logging",
                autoCaptureSessions: !1,
                autoNotify: !1,
                consoleBreadcrumbsEnabled: !1
            }).use(_).use(B).delivery(function(e) {
                return {
                    name: "msfe-logging-delivery",
                    sendReport: function(t, n, r) {
                        return g(void 0, void 0, void 0, function() {
                            var t, n, o, i, a, s, u, c, f, l, d, g, b;
                            return v(this, function(v) {
                                switch (v.label) {
                                    case 0:
                                        return [4, x()];
                                    case 1:
                                        return t = v.sent(),
                                            [4, S()];
                                    case 2:
                                        return n = v.sent(),
                                            o = "https://tne.pinduoduo.com/tne.gif",
                                            i = r && r.events && r.events[0] || {},
                                            a = i.errorClass || "",
                                            s = i.errorMessage || "",
                                            u = i.metaData,
                                            c = u.marmot,
                                            f = void 0 === c ? {} : c,
                                            l = h(u, ["marmot"]),
                                            i.metaData = p({}, l),
                                            d = f.page || function(e) {
                                                try {
                                                    return [e.errorClass + ": " + e.errorMessage].concat(e.stacktrace.map(function(e) {
                                                        var t = e.method;
                                                        return "     at " + (void 0 === t ? "Anonymous function" : t) + " (" + e.file + ":" + e.lineNumber + ":" + e.columnNumber + ")"
                                                    })).join("\n")
                                                } catch (e) {
                                                    return ""
                                                }
                                            }(i),
                                        (g = f.error_msg || [a, s].filter(function(e) {
                                            return !!e
                                        }).join(": ")).length > 220 && (g = g.substring(0, 220)),
                                            t = p({}, t, f, {
                                                page: d,
                                                error_msg: g
                                            }),
                                        m.Fatal === t.error_code && y.NETWORK_EXCEPTION === t.error_type && (t.error_code,
                                            b = h(t, ["error_code"]),
                                            t = p({}, b)),
                                            t.payload = p({}, t.payload || {}, f.payload || {}, r),
                                        e.normalizeStack && (t.page = e.normalizeStack(t.page, t.page_url)),
                                        e.beforeSend && (t = e.beforeSend(t)),
                                            [2, e.post(o, t, n.isProd)]
                                }
                            })
                        })
                    },
                    sendSession: function(e, t, n, r) {
                        void 0 === r && (r = function() {}
                        )
                    }
                }
            }({
                post: N
            }))
                , k = null;
            var $ = function(e) {
                return k || (k = function(t, n) {
                        var r = (n = n || {}).page || t.stack
                            , o = p({}, n, {
                            page: r
                        });
                        e.notify(t, {
                            metaData: {
                                marmot: o
                            }
                        })
                    }
                ),
                    k
            }(j)
                , A = $
                , P = function() {
                return "https://tldas.pinduoduo.com/e.gif"
            };
            var T = null
                , M = null;
            var R = function() {
                function e(e) {
                    this.dataArr = [],
                        this.tag = e
                }
                return e.prototype.add = function(e) {
                    this.dataArr.push({
                        data: e,
                        time: (new Date).toLocaleString()
                    })
                }
                    ,
                    e.prototype.send = function() {
                        return g(this, void 0, void 0, function() {
                            return v(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return T ? [4, T(this.tag, JSON.stringify(this.dataArr))] : [3, 2];
                                    case 1:
                                        e.sent(),
                                            e.label = 2;
                                    case 2:
                                        return this.dataArr = [],
                                            [2]
                                }
                            })
                        })
                    }
                    ,
                    e
            }();
            var C = new c
                , L = function(e) {
                var t = this;
                return T || (T = function(n, o) {
                        return g(t, void 0, void 0, function() {
                            var t, i, a, s, u;
                            return v(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, S()];
                                    case 1:
                                        t = c.sent(),
                                            i = e.extraData || {},
                                            c.label = 2;
                                    case 2:
                                        return c.trys.push([2, 5, , 6]),
                                            [4, x()];
                                    case 3:
                                        return a = c.sent(),
                                            s = {
                                                app: p({
                                                    data: function(e) {
                                                        var t;
                                                        switch (void 0 === e ? "undefined" : r(e)) {
                                                            case "undefined":
                                                                t = "undefined";
                                                                break;
                                                            case "string":
                                                                t = e;
                                                                break;
                                                            default:
                                                                t = JSON.stringify(e)
                                                        }
                                                        return t
                                                    }(o)
                                                }, i),
                                                tag: n
                                            },
                                            a.payload = s,
                                        e.beforeSend && (a = e.beforeSend(a)),
                                            [4, e.post(P(), a, t.isProd)];
                                    case 4:
                                        return c.sent(),
                                            [3, 6];
                                    case 5:
                                        return u = c.sent(),
                                            console.error(u),
                                            [3, 6];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }
                ),
                    T
            }({
                post: N,
                extraData: C
            })
                , D = function(e) {
                var t = this;
                return M || (M = function(n, r) {
                        return g(t, void 0, void 0, function() {
                            var t, o, i, a, s;
                            return v(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, S()];
                                    case 1:
                                        t = u.sent(),
                                            o = e.extraData || {},
                                            u.label = 2;
                                    case 2:
                                        return u.trys.push([2, 5, , 6]),
                                            [4, x()];
                                    case 3:
                                        return i = u.sent(),
                                            a = {
                                                app: p({}, r, o),
                                                tag: n
                                            },
                                            i.payload = a,
                                        e.beforeSend && (i = e.beforeSend(i)),
                                            [4, e.post(P(), i, t.isProd)];
                                    case 4:
                                        return u.sent(),
                                            [3, 6];
                                    case 5:
                                        return s = u.sent(),
                                            console.error(s),
                                            [3, 6];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }
                ),
                    M
            }({
                post: N,
                extraData: C
            })
                , I = function(e) {
                return g(void 0, void 0, void 0, function() {
                    return v(this, function(t) {
                        return e instanceof Error ? [2, $(e)] : [2, L("__TAG__", e)]
                    })
                })
            }
                , F = function(e) {
                return function(t, n) {
                    e.use({
                        init: function(e) {
                            var r = e.config.beforeSend;
                            E(r) && r.unshift(function(e) {
                                if (t(e)) {
                                    var r = n(e);
                                    e.updateMetaData("extra", {
                                        info: r
                                    })
                                }
                            })
                        }
                    })
                }
            }(j)
                , U = function() {
                return {
                    id: function() {
                        var e = localStorage.getItem("userinfo");
                        if (!e)
                            return 0;
                        try {
                            return JSON.parse(e).id || 0
                        } catch (e) {}
                        return 0
                    }(),
                    mall_id: function() {
                        var e = localStorage.getItem("userinfo");
                        if (!e)
                            return 0;
                        try {
                            return JSON.parse(e).mall_id || 0
                        } catch (e) {}
                        return 0
                    }()
                }
            }
                , q = function(e) {
                return function(t) {
                    return g(void 0, void 0, void 0, function() {
                        var n = this;
                        return v(this, function(r) {
                            return function(e) {
                                O = e
                            }(function() {
                                return g(n, void 0, void 0, function() {
                                    var n, r, o, i;
                                    return v(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return n = t && t.envHandler,
                                                    r = t && t.envData,
                                                    [4, e()];
                                            case 1:
                                                return o = a.sent(),
                                                    i = {},
                                                    n ? [4, n()] : [3, 3];
                                            case 2:
                                                return i = a.sent(),
                                                    [3, 4];
                                            case 3:
                                                r && (i = r),
                                                    a.label = 4;
                                            case 4:
                                                return [2, Object.assign({}, o, i)]
                                        }
                                    })
                                })
                            }),
                                [2]
                        })
                    })
                }
            }(function() {
                return g(void 0, void 0, void 0, function() {
                    var e;
                    return v(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = {
                                    userInfo: U(),
                                    platform: a.mmsWeb
                                },
                                    [4, f.getNetwork()];
                            case 1:
                                return e.network = t.sent(),
                                    [4, f.isProduction()];
                            case 2:
                                return [2, (e.isProd = t.sent(),
                                    e.pageName = function(e) {
                                        if (void 0 === e && (e = location.href),
                                            !e)
                                            return "unknown";
                                        if (0 === e.indexOf("#") || "undefined" == typeof URL)
                                            return "unknown";
                                        var t = new URL(e,location.protocol + location.host).pathname;
                                        if (/\.html/.test(t))
                                            return t;
                                        var n = /\/([\w-]*)/.exec(t);
                                        return !n || n.length <= 0 ? "unknown" : n[1]
                                    }(),
                                    e.pageUrl = window.location.href,
                                    e)]
                        }
                    })
                })
            });
            q();
            var W = function(e) {
                return "number" == typeof e && "NaN" !== String.call(e)
            }
                , V = function(e, t, n, r) {
                var o = e[0];
                return o ? (o.fileName || "string" != typeof t || o.setFileName(t),
                !o.lineNumber && W(n) && o.setLineNumber(n),
                o.columnNumber || (W(r) ? o.setColumnNumber(r) : window.event && W(window.event.errorCharacter) && o.setColumnNumber(window.event.errorCharacter)),
                    e) : e
            };
            var K = function(e, t) {
                var n, r = e.reason, o = {
                    severity: "error",
                    unhandled: !0,
                    severityReason: {
                        type: "unhandledPromiseRejection"
                    }
                };
                if (r && function(e) {
                    return !(!e || !e.stack && !e.stacktrace && !e["opera#sourceloc"] || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message)
                }(r))
                    n = new t.BugsnagReport(r.name,r.message,l.parse(r),o);
                else {
                    (n = new t.BugsnagReport(r && r.name ? r.name : "UnhandledRejection",r && r.message ? r.message : 'Rejection reason was not an Error. See "Promise" tab for more detail.',[],o)).updateMetaData("promise", "rejection reason", function(e) {
                        var t;
                        return null === e || void 0 === e ? "undefined (or null)" : d(e) ? ((t = {})[Object.prototype.toString.call(e)] = {
                            name: e.name,
                            message: e.message,
                            code: e.code,
                            stack: e.stack
                        },
                            t) : e
                    }(r))
                }
                t.notify(n)
            };
            var Q = console.log
                , H = function() {
                function e() {
                    this.log = function(e) {
                        return Q("log", e)
                    }
                        ,
                        this.info = function(e) {
                            return Q("info", e)
                        }
                        ,
                        this.warn = function(e) {
                            return Q("warn", e)
                        }
                        ,
                        this.error = function(e) {
                            return Q("error", e)
                        }
                }
                return e.prototype.public = function(e, t) {
                    Q(e, t)
                }
                    ,
                    e
            }()
                , G = console;
            t.ErrorBoundary = function() {
                throw Error("Please use \"import ErrorBoundary from '@msfe/error-boundary'\" instead.")
            }
                ,
                t.Log = H,
                t.autoReport = function() {
                    !function(e) {
                        "addEventListener"in window && window.addEventListener("error", function(t) {
                            var n = t.type
                                , r = t.error;
                            if ("error" === n && !r) {
                                var o = t.target;
                                if (o) {
                                    var i = o
                                        , a = i.tagName
                                        , s = i.src
                                        , u = i.nodeName
                                        , c = i.localName
                                        , f = i.href
                                        , l = a || u || c
                                        , d = s || f;
                                    if (d && l && /(.*)\.(pinduoduo|yangkeduo).com/.test(d)) {
                                        var p = "Failed to fetch " + (l = l.toLowerCase())
                                            , h = new e.BugsnagReport("ResourceLoadError",p + " (" + d + ")",V([], "", "", ""),{
                                            severity: "error",
                                            unhandled: !0,
                                            severityReason: {
                                                type: "resourceLoadFail"
                                            }
                                        });
                                        h.updateMetaData("ResourceLoadError", {
                                            event: t
                                        }),
                                            e.notify(h)
                                    }
                                }
                            }
                        }, !0);
                        var t = window.onerror;
                        window.onerror = function(n, o, i, a, s) {
                            var u, c = {
                                severity: "error",
                                unhandled: !0,
                                severityReason: {
                                    type: "unhandledException"
                                }
                            };
                            if (s)
                                s.name && s.message ? u = new e.BugsnagReport(s.name,s.message,V(e.BugsnagReport.getStacktrace(s), o, i, a),c) : (u = new e.BugsnagReport("window.onerror",String(s),V(e.BugsnagReport.getStacktrace(s, 1), o, i, a),c)).updateMetaData("window onerror", {
                                    error: s
                                });
                            else if ("object" !== (void 0 === n ? "undefined" : r(n)) || null === n || o && "string" == typeof o || i || a || s)
                                (u = new e.BugsnagReport("window.onerror",String(n),V(e.BugsnagReport.getStacktrace(s, 1), o, i, a),c)).updateMetaData("window onerror", {
                                    event: n
                                });
                            else {
                                var f = n.type ? "Event: " + n.type : "window.onerror"
                                    , l = n.message || n.detail || "";
                                (u = new e.BugsnagReport(f,l,e.BugsnagReport.getStacktrace(new Error, 1).slice(1),c)).updateMetaData("window onerror", {
                                    event: n,
                                    extraParameters: o
                                })
                            }
                            e.notify(u),
                            "function" == typeof t && t.apply(this, arguments)
                        }
                    }(j),
                        function(e, t) {
                            Promise && Promise._unhandledRejectionFn ? Promise._unhandledRejectionFn = function(t) {
                                    console.error(t),
                                        e(t)
                                }
                                : "addEventListener"in window ? window.addEventListener("unhandledrejection", function(e) {
                                    return K(e, t)
                                }) : window.onunhandledrejection = function(e, n) {
                                    K({
                                        detail: {
                                            reason: e,
                                            promise: n
                                        }
                                    }, t)
                                }
                        }(I, j)
                }
                ,
                t.bugsnagClient = j,
                t.createLogger = function(e) {
                    return function(t) {
                        if (T)
                            return T(e, t)
                    }
                }
                ,
                t.createLoggerChain = function(e) {
                    return new R(e)
                }
                ,
                t.error = A,
                t.initLogging = q,
                t.log = G,
                t.report = I,
                t.reportError = $,
                t.reportExtraWhen = F,
                t.reportFatalError = function(e) {
                    k && k(e, {
                        error_code: m.Fatal
                    })
                }
                ,
                t.reportLog = L,
                t.reportPerf = D,
                t.track = function(e, t, n) {
                    return g(void 0, void 0, void 0, function() {
                        return v(this, function(r) {
                            return n = n || {},
                                j.notify({
                                    name: e,
                                    message: t
                                }, {
                                    metaData: p({}, n),
                                    severity: "info"
                                }),
                                [2]
                        })
                    })
                }
        }
        , function(e, t, n) {
            "use strict";
            var r, o, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
            ;
            !function(n) {
                "object" === a(t) && void 0 !== e ? e.exports = n() : (o = [],
                void 0 === (i = "function" == typeof (r = n) ? r.apply(t, o) : r) || (e.exports = i))
            }(function() {
                var e = function(e, t, n) {
                    for (var r = n, o = 0, i = e.length; o < i; o++)
                        r = t(r, e[o], o, e);
                    return r
                }
                    , t = !{
                    toString: null
                }.propertyIsEnumerable("toString")
                    , n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
                    , r = function(e) {
                    return e < 10 ? "0" + e : e
                }
                    , o = function(t, n) {
                    return e(t, function(e, t, r, o) {
                        return e.concat(n(t, r, o))
                    }, [])
                }
                    , i = e
                    , s = function(t, n) {
                    return e(t, function(e, t, r, o) {
                        return n(t, r, o) ? e.concat(t) : e
                    }, [])
                }
                    , u = function(t, n) {
                    return e(t, function(e, t, r, o) {
                        return !0 === e || t === n
                    }, !1)
                }
                    , c = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                    , f = function() {
                    var e = new Date;
                    return e.getUTCFullYear() + "-" + r(e.getUTCMonth() + 1) + "-" + r(e.getUTCDate()) + "T" + r(e.getUTCHours()) + ":" + r(e.getUTCMinutes()) + ":" + r(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                }
                    , l = {
                    intRange: function(e, t) {
                        return void 0 === e && (e = 1),
                        void 0 === t && (t = 1 / 0),
                            function(n) {
                                return "number" == typeof n && parseInt("" + n, 10) === n && n >= e && n <= t
                            }
                    },
                    stringWithLength: function(e) {
                        return "string" == typeof e && !!e.length
                    }
                }
                    , d = {}
                    , p = s
                    , h = i
                    , g = function(e) {
                    var r, o = [];
                    for (r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && o.push(r);
                    if (!t)
                        return o;
                    for (var i = 0, a = n.length; i < a; i++)
                        Object.prototype.hasOwnProperty.call(e, n[i]) && o.push(n[i]);
                    return o
                }
                    , v = c
                    , m = u
                    , y = l.intRange
                    , b = l.stringWithLength;
                function w() {
                    return (w = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                d.schema = {
                    apiKey: {
                        defaultValue: function() {
                            return null
                        },
                        message: "is required",
                        validate: b
                    },
                    appVersion: {
                        defaultValue: function() {
                            return null
                        },
                        message: "should be a string",
                        validate: function(e) {
                            return null === e || b(e)
                        }
                    },
                    appType: {
                        defaultValue: function() {
                            return null
                        },
                        message: "should be a string",
                        validate: function(e) {
                            return null === e || b(e)
                        }
                    },
                    autoNotify: {
                        defaultValue: function() {
                            return !0
                        },
                        message: "should be true|false",
                        validate: function(e) {
                            return !0 === e || !1 === e
                        }
                    },
                    beforeSend: {
                        defaultValue: function() {
                            return []
                        },
                        message: "should be a function or array of functions",
                        validate: function(e) {
                            return "function" == typeof e || v(e) && p(e, function(e) {
                                return "function" == typeof e
                            }).length === e.length
                        }
                    },
                    endpoints: {
                        defaultValue: function() {
                            return {
                                notify: "https://notify.bugsnag.com",
                                sessions: "https://sessions.bugsnag.com"
                            }
                        },
                        message: "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
                        validate: function(e, t) {
                            return e && "object" === (void 0 === e ? "undefined" : a(e)) && b(e.notify) && (!1 === t.autoCaptureSessions || b(e.sessions)) && 0 === p(g(e), function(e) {
                                return !m(["notify", "sessions"], e)
                            }).length
                        }
                    },
                    autoCaptureSessions: {
                        defaultValue: function(e, t) {
                            return void 0 === t.endpoints || !!t.endpoints && !!t.endpoints.sessions
                        },
                        message: "should be true|false",
                        validate: function(e) {
                            return !0 === e || !1 === e
                        }
                    },
                    notifyReleaseStages: {
                        defaultValue: function() {
                            return null
                        },
                        message: "should be an array of strings",
                        validate: function(e) {
                            return null === e || v(e) && p(e, function(e) {
                                return "string" == typeof e
                            }).length === e.length
                        }
                    },
                    releaseStage: {
                        defaultValue: function() {
                            return "production"
                        },
                        message: "should be a string",
                        validate: function(e) {
                            return "string" == typeof e && e.length
                        }
                    },
                    maxBreadcrumbs: {
                        defaultValue: function() {
                            return 20
                        },
                        message: "should be a number ≤40",
                        validate: function(e) {
                            return y(0, 40)(e)
                        }
                    },
                    autoBreadcrumbs: {
                        defaultValue: function() {
                            return !0
                        },
                        message: "should be true|false",
                        validate: function(e) {
                            return "boolean" == typeof e
                        }
                    },
                    user: {
                        defaultValue: function() {
                            return null
                        },
                        message: "(object) user should be an object",
                        validate: function(e) {
                            return "object" === (void 0 === e ? "undefined" : a(e))
                        }
                    },
                    metaData: {
                        defaultValue: function() {
                            return null
                        },
                        message: "should be an object",
                        validate: function(e) {
                            return "object" === (void 0 === e ? "undefined" : a(e))
                        }
                    },
                    logger: {
                        defaultValue: function() {},
                        message: "should be null or an object with methods { debug, info, warn, error }",
                        validate: function(e) {
                            return !e || e && h(["debug", "info", "warn", "error"], function(t, n) {
                                return t && "function" == typeof e[n]
                            }, !0)
                        }
                    },
                    filters: {
                        defaultValue: function() {
                            return ["password"]
                        },
                        message: "should be an array of strings|regexes",
                        validate: function(e) {
                            return v(e) && e.length === p(e, function(e) {
                                return "string" == typeof e || e && "function" == typeof e.test
                            }).length
                        }
                    }
                },
                    d.mergeDefaults = function(e, t) {
                        if (!e || !t)
                            throw new Error("opts and schema objects are required");
                        return h(g(t), function(n, r) {
                            return n[r] = void 0 !== e[r] ? e[r] : t[r].defaultValue(e[r], e),
                                n
                        }, {})
                    }
                    ,
                    d.validate = function(e, t) {
                        if (!e || !t)
                            throw new Error("opts and schema objects are required");
                        var n = h(g(t), function(n, r) {
                            return t[r].validate(e[r], e) ? n : n.concat({
                                key: r,
                                message: t[r].message,
                                value: e[r]
                            })
                        }, []);
                        return {
                            valid: !n.length,
                            errors: n
                        }
                    }
                ;
                var O = d.schema
                    , S = o
                    , E = {
                    releaseStage: {
                        defaultValue: function() {
                            return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
                        },
                        message: "should be set",
                        validate: l.stringWithLength
                    },
                    logger: w({}, O.logger, {
                        defaultValue: function() {
                            return "undefined" != typeof console && "function" == typeof console.debug ? x() : void 0
                        }
                    })
                }
                    , x = function() {
                    var e = {}
                        , t = console.log;
                    return S(["debug", "info", "warn", "error"], function(n) {
                        var r = console[n];
                        e[n] = "function" == typeof r ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]")
                    }),
                        e
                }
                    , _ = f
                    , N = function() {
                    function e(e, t, n, r) {
                        void 0 === e && (e = "[anonymous]"),
                        void 0 === t && (t = {}),
                        void 0 === n && (n = "manual"),
                        void 0 === r && (r = _()),
                            this.type = n,
                            this.name = e,
                            this.metaData = t,
                            this.timestamp = r
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            type: this.type,
                            name: this.name,
                            timestamp: this.timestamp,
                            metaData: this.metaData
                        }
                    }
                        ,
                        e
                }()
                    , B = function(e) {
                    return e.app && "string" == typeof e.app.releaseStage ? e.app.releaseStage : e.config.releaseStage
                }
                    , j = function(e, t) {
                    return e.isIgnored() || !1 === t
                }
                    , k = function(e) {
                    switch (Object.prototype.toString.call(e)) {
                        case "[object Error]":
                        case "[object Exception]":
                        case "[object DOMException]":
                            return !0;
                        default:
                            return e instanceof Error
                    }
                };
                var $ = function(e) {
                    return !(!e || !e.stack && !e.stacktrace && !e["opera#sourceloc"] || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message)
                }
                    , A = {};
                !function(e, t) {
                    "object" === (void 0 === A ? "undefined" : a(A)) ? A = t() : e.StackFrame = t()
                }(this, function() {
                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    function t(e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }
                    function n(e) {
                        return function() {
                            return this[e]
                        }
                    }
                    var r = ["isConstructor", "isEval", "isNative", "isToplevel"]
                        , o = ["columnNumber", "lineNumber"]
                        , i = ["fileName", "functionName", "source"]
                        , a = r.concat(o, i, ["args"]);
                    function s(e) {
                        if (e instanceof Object)
                            for (var n = 0; n < a.length; n++)
                                e.hasOwnProperty(a[n]) && void 0 !== e[a[n]] && this["set" + t(a[n])](e[a[n]])
                    }
                    s.prototype = {
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(e) {
                            if ("[object Array]" !== Object.prototype.toString.call(e))
                                throw new TypeError("Args must be an Array");
                            this.args = e
                        },
                        getEvalOrigin: function() {
                            return this.evalOrigin
                        },
                        setEvalOrigin: function(e) {
                            if (e instanceof s)
                                this.evalOrigin = e;
                            else {
                                if (!(e instanceof Object))
                                    throw new TypeError("Eval Origin must be an Object or StackFrame");
                                this.evalOrigin = new s(e)
                            }
                        },
                        toString: function() {
                            return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                        }
                    };
                    for (var u = 0; u < r.length; u++)
                        s.prototype["get" + t(r[u])] = n(r[u]),
                            s.prototype["set" + t(r[u])] = function(e) {
                                return function(t) {
                                    this[e] = Boolean(t)
                                }
                            }(r[u]);
                    for (var c = 0; c < o.length; c++)
                        s.prototype["get" + t(o[c])] = n(o[c]),
                            s.prototype["set" + t(o[c])] = function(t) {
                                return function(n) {
                                    if (!e(n))
                                        throw new TypeError(t + " must be a Number");
                                    this[t] = Number(n)
                                }
                            }(o[c]);
                    for (var f = 0; f < i.length; f++)
                        s.prototype["get" + t(i[f])] = n(i[f]),
                            s.prototype["set" + t(i[f])] = function(e) {
                                return function(t) {
                                    this[e] = String(t)
                                }
                            }(i[f]);
                    return s
                });
                var P = {};
                !function(e, t) {
                    "object" === (void 0 === P ? "undefined" : a(P)) ? P = t(A) : e.ErrorStackParser = t(e.StackFrame)
                }(this, function(e) {
                    var t = /(^|@)\S+\:\d+/
                        , n = /^\s*at .*(\S+\:\d+|\(native\))/m
                        , r = /^(eval@)?(\[native code\])?$/;
                    return {
                        parse: function(e) {
                            if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"])
                                return this.parseOpera(e);
                            if (e.stack && e.stack.match(n))
                                return this.parseV8OrIE(e);
                            if (e.stack)
                                return this.parseFFOrSafari(e);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(e) {
                            if (-1 === e.indexOf(":"))
                                return [e];
                            var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                            return [t[1], t[2] || void 0, t[3] || void 0]
                        },
                        parseV8OrIE: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !!e.match(n)
                            }, this).map(function(t) {
                                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1)
                                    , r = this.extractLocation(n.pop())
                                    , o = n.join(" ") || void 0
                                    , i = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0];
                                return new e({
                                    functionName: o,
                                    fileName: i,
                                    lineNumber: r[1],
                                    columnNumber: r[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseFFOrSafari: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !e.match(r)
                            }, this).map(function(t) {
                                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
                                -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                                    return new e({
                                        functionName: t
                                    });
                                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/
                                    , r = t.match(n)
                                    , o = r && r[1] ? r[1] : void 0
                                    , i = this.extractLocation(t.replace(n, ""));
                                return new e({
                                    functionName: o,
                                    fileName: i[0],
                                    lineNumber: i[1],
                                    columnNumber: i[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseOpera: function(e) {
                            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                        },
                        parseOpera9: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], i = 2, a = r.length; i < a; i += 2) {
                                var s = n.exec(r[i]);
                                s && o.push(new e({
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera10: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], i = 0, a = r.length; i < a; i += 2) {
                                var s = n.exec(r[i]);
                                s && o.push(new e({
                                    functionName: s[3] || void 0,
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera11: function(n) {
                            return n.stack.split("\n").filter(function(e) {
                                return !!e.match(t) && !e.match(/^Error created at/)
                            }, this).map(function(t) {
                                var n, r = t.split("@"), o = this.extractLocation(r.pop()), i = r.shift() || "", a = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                                i.match(/\(([^\)]*)\)/) && (n = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                return new e({
                                    functionName: a,
                                    args: s,
                                    fileName: o[0],
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }, this)
                        }
                    }
                });
                var T = {};
                function M() {
                    return (M = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                !function(e, t) {
                    "object" === (void 0 === T ? "undefined" : a(T)) ? T = t(A) : e.StackGenerator = t(e.StackFrame)
                }(this, function(e) {
                    return {
                        backtrace: function(t) {
                            var n = []
                                , r = 10;
                            "object" === (void 0 === t ? "undefined" : a(t)) && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
                            for (var o = arguments.callee; o && n.length < r && o.arguments; ) {
                                for (var i = new Array(o.arguments.length), s = 0; s < i.length; ++s)
                                    i[s] = o.arguments[s];
                                /function(?:\s+([\w$]+))+\s*\(/.test(o.toString()) ? n.push(new e({
                                    functionName: RegExp.$1 || void 0,
                                    args: i
                                })) : n.push(new e({
                                    args: i
                                }));
                                try {
                                    o = o.caller
                                } catch (e) {
                                    break
                                }
                            }
                            return n
                        }
                    }
                });
                var R = i
                    , C = s
                    , L = function() {
                    function e(e, t, n, r) {
                        void 0 === n && (n = []),
                        void 0 === r && (r = F()),
                            this.__isBugsnagReport = !0,
                            this._ignored = !1,
                            this._handledState = r,
                            this.app = void 0,
                            this.apiKey = void 0,
                            this.breadcrumbs = [],
                            this.context = void 0,
                            this.device = void 0,
                            this.errorClass = U(e, "[no error class]"),
                            this.errorMessage = U(t, "[no error message]"),
                            this.groupingHash = void 0,
                            this.metaData = {},
                            this.request = void 0,
                            this.severity = this._handledState.severity,
                            this.stacktrace = R(n, function(e, t) {
                                var n = D(t);
                                try {
                                    return "{}" === JSON.stringify(n) ? e : e.concat(n)
                                } catch (t) {
                                    return e
                                }
                            }, []),
                            this.user = void 0,
                            this.session = void 0
                    }
                    var t = e.prototype;
                    return t.ignore = function() {
                        this._ignored = !0
                    }
                        ,
                        t.isIgnored = function() {
                            return this._ignored
                        }
                        ,
                        t.updateMetaData = function(e) {
                            var t, n;
                            return e ? null === (arguments.length <= 1 ? void 0 : arguments[1]) ? this.removeMetaData(e) : null === (arguments.length <= 2 ? void 0 : arguments[2]) ? this.removeMetaData(e, arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : ("object" === a(arguments.length <= 1 ? void 0 : arguments[1]) && (n = arguments.length <= 1 ? void 0 : arguments[1]),
                            "string" == typeof (arguments.length <= 1 ? void 0 : arguments[1]) && ((t = {})[arguments.length <= 1 ? void 0 : arguments[1]] = arguments.length <= 2 ? void 0 : arguments[2],
                                n = t),
                                n ? (this.metaData[e] || (this.metaData[e] = {}),
                                    this.metaData[e] = M({}, this.metaData[e], n),
                                    this) : this) : this
                        }
                        ,
                        t.removeMetaData = function(e, t) {
                            return "string" != typeof e ? this : t ? this.metaData[e] ? (delete this.metaData[e][t],
                                this) : this : (delete this.metaData[e],
                                this)
                        }
                        ,
                        t.toJSON = function() {
                            return {
                                payloadVersion: "4",
                                exceptions: [{
                                    errorClass: this.errorClass,
                                    message: this.errorMessage,
                                    stacktrace: this.stacktrace,
                                    type: "browserjs"
                                }],
                                severity: this.severity,
                                unhandled: this._handledState.unhandled,
                                severityReason: this._handledState.severityReason,
                                app: this.app,
                                device: this.device,
                                breadcrumbs: this.breadcrumbs,
                                context: this.context,
                                user: this.user,
                                metaData: this.metaData,
                                groupingHash: this.groupingHash,
                                request: this.request,
                                session: this.session
                            }
                        }
                        ,
                        e
                }()
                    , D = function(e) {
                    var t = {
                        file: e.fileName,
                        method: I(e.functionName),
                        lineNumber: e.lineNumber,
                        columnNumber: e.columnNumber,
                        code: void 0,
                        inProject: void 0
                    };
                    return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"),
                        t
                }
                    , I = function(e) {
                    return /^global code$/i.test(e) ? "global code" : e
                }
                    , F = function() {
                    return {
                        unhandled: !1,
                        severity: "warning",
                        severityReason: {
                            type: "handledException"
                        }
                    }
                }
                    , U = function(e, t) {
                    return "string" == typeof e && e ? e : t
                };
                L.getStacktrace = function(e, t, n) {
                    return void 0 === t && (t = 0),
                    void 0 === n && (n = 0),
                        $(e) ? P.parse(e).slice(t) : C(T.backtrace(), function(e) {
                            return -1 === (e.functionName || "").indexOf("StackGenerator$$")
                        }).slice(1 + n)
                }
                    ,
                    L.ensureReport = function(e, t, n) {
                        if (void 0 === t && (t = 0),
                        void 0 === n && (n = 0),
                            e.__isBugsnagReport)
                            return e;
                        try {
                            var r = L.getStacktrace(e, t, 1 + n);
                            return new L(e.name,e.message,r)
                        } catch (t) {
                            return new L(e.name,e.message,[])
                        }
                    }
                ;
                var q = L
                    , W = function(e, t) {
                    var n = "000000000" + e;
                    return n.substr(n.length - t)
                }
                    , V = "object" === ("undefined" == typeof window ? "undefined" : a(window)) ? window : self
                    , K = 0;
                for (var Q in V)
                    Object.hasOwnProperty.call(V, Q) && K++;
                var H = navigator.mimeTypes ? navigator.mimeTypes.length : 0
                    , G = W((H + navigator.userAgent.length).toString(36) + K.toString(36), 4)
                    , X = function() {
                    return G
                }
                    , Y = 0
                    , J = 4
                    , z = 36
                    , Z = Math.pow(z, J);
                function ee() {
                    return W((Math.random() * Z << 0).toString(z), J)
                }
                function te() {
                    return "c" + (new Date).getTime().toString(z) + W((Y = Y < Z ? Y : 0,
                    ++Y - 1).toString(z), J) + X() + (ee() + ee())
                }
                te.fingerprint = X;
                var ne = te
                    , re = f
                    , oe = function() {
                    function e() {
                        this.id = ne(),
                            this.startedAt = re(),
                            this._handled = 0,
                            this._unhandled = 0
                    }
                    var t = e.prototype;
                    return t.toJSON = function() {
                        return {
                            id: this.id,
                            startedAt: this.startedAt,
                            events: {
                                handled: this._handled,
                                unhandled: this._unhandled
                            }
                        }
                    }
                        ,
                        t.trackError = function(e) {
                            this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1
                        }
                        ,
                        e
                }();
                function ie() {
                    return (ie = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                var ae = o
                    , se = u
                    , ue = c
                    , ce = function() {
                    function e(t) {
                        if (!(t && t.name && t.version && t.url))
                            throw new Error("`notifier` argument is required");
                        this.notifier = t,
                            this._configured = !1,
                            this._opts = {},
                            this.config = {},
                            this._delivery = {
                                sendSession: function() {},
                                sendReport: function() {}
                            },
                            this._logger = {
                                debug: function() {},
                                info: function() {},
                                warn: function() {},
                                error: function() {}
                            },
                            this._plugins = {},
                            this._session = null,
                            this.breadcrumbs = [],
                            this.app = {},
                            this.context = void 0,
                            this.device = void 0,
                            this.metaData = void 0,
                            this.request = void 0,
                            this.user = {},
                            this.BugsnagClient = e,
                            this.BugsnagReport = q,
                            this.BugsnagBreadcrumb = N,
                            this.BugsnagSession = oe;
                        var n = this
                            , r = this.notify;
                        this.notify = function() {
                            return r.apply(n, arguments)
                        }
                    }
                    var t = e.prototype;
                    return t.setOptions = function(e) {
                        this._opts = ie({}, this._opts, e)
                    }
                        ,
                        t.configure = function(e) {
                            void 0 === e && (e = d.schema);
                            var t = d.mergeDefaults(this._opts, e)
                                , n = d.validate(t, e);
                            if (!0 == !n.valid)
                                throw new Error(de(n.errors));
                            return "function" == typeof t.beforeSend && (t.beforeSend = [t.beforeSend]),
                            t.appVersion && (this.app.version = t.appVersion),
                            t.appType && (this.app.type = t.appType),
                            t.metaData && (this.metaData = t.metaData),
                            t.user && (this.user = t.user),
                            t.logger && this.logger(t.logger),
                                this.config = ie({}, this.config, t),
                                this._configured = !0,
                                this
                        }
                        ,
                        t.use = function(e) {
                            if (!this._configured)
                                throw new Error("client not configured");
                            e.configSchema && this.configure(e.configSchema);
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                                n[r - 1] = arguments[r];
                            var o = e.init.apply(e, [this].concat(n));
                            return e.name && (this._plugins["~" + e.name + "~"] = o),
                                this
                        }
                        ,
                        t.getPlugin = function(e) {
                            return this._plugins["~" + e + "~"]
                        }
                        ,
                        t.delivery = function(e) {
                            return this._delivery = e,
                                this
                        }
                        ,
                        t.logger = function(e, t) {
                            return this._logger = e,
                                this
                        }
                        ,
                        t.sessionDelegate = function(e) {
                            return this._sessionDelegate = e,
                                this
                        }
                        ,
                        t.startSession = function() {
                            return this._sessionDelegate ? this._sessionDelegate.startSession(this) : (this._logger.warn("No session implementation is installed"),
                                this)
                        }
                        ,
                        t.leaveBreadcrumb = function(e, t, n, r) {
                            if (!this._configured)
                                throw new Error("client not configured");
                            if (e = e || void 0,
                                n = "string" == typeof n ? n : void 0,
                                r = "string" == typeof r ? r : void 0,
                                t = "object" === (void 0 === t ? "undefined" : a(t)) && null !== t ? t : void 0,
                            "string" == typeof e || t) {
                                var o = new N(e,t,n,r);
                                return this.breadcrumbs.push(o),
                                this.breadcrumbs.length > this.config.maxBreadcrumbs && (this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs)),
                                    this
                            }
                        }
                        ,
                        t.notify = function(e, t, n) {
                            var r = this;
                            if (void 0 === t && (t = {}),
                            void 0 === n && (n = function() {}
                            ),
                                !this._configured)
                                throw new Error("client not configured");
                            var o = B(this)
                                , i = fe(e, t, this._logger)
                                , s = i.err
                                , u = i.errorFramesToSkip
                                , c = i._opts;
                            if (c && (t = c),
                                !s) {
                                var f = pe("nothing");
                                this._logger.warn("Usage error. " + f),
                                    s = new Error("Bugsnag usage error. " + f)
                            }
                            "object" === (void 0 === t ? "undefined" : a(t)) && null !== t || (t = {});
                            var l = q.ensureReport(s, u, 1);
                            if (l.app = ie({}, {
                                releaseStage: o
                            }, l.app, this.app),
                                l.context = l.context || t.context || this.context || void 0,
                                l.device = ie({}, l.device, this.device, t.device),
                                l.request = ie({}, l.request, this.request, t.request),
                                l.user = ie({}, l.user, this.user, t.user),
                                l.metaData = ie({}, l.metaData, this.metaData, t.metaData),
                                l.breadcrumbs = this.breadcrumbs.slice(0),
                            this._session && (this._session.trackError(l),
                                l.session = this._session),
                            void 0 !== t.severity && (l.severity = t.severity,
                                l._handledState.severityReason = {
                                    type: "userSpecifiedSeverity"
                                }),
                            ue(this.config.notifyReleaseStages) && !se(this.config.notifyReleaseStages, o))
                                return this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration"),
                                    !1;
                            var d = l.severity
                                , p = function(e) {
                                r._logger.error("Error occurred in beforeSend callback, continuing anyway…"),
                                    r._logger.error(e)
                            };
                            !function(e, t, n) {
                                var r = e.length
                                    , o = 0;
                                !function i() {
                                    if (o >= r)
                                        return n(null, !1);
                                    t(e[o], function(e, t) {
                                        return e ? n(e, !1) : !0 === t ? n(null, !0) : (o++,
                                            void i())
                                    })
                                }()
                            }([].concat(t.beforeSend).concat(this.config.beforeSend), function(e, t) {
                                return function(n, r) {
                                    if ("function" != typeof n)
                                        return r(null, !1);
                                    try {
                                        if (2 !== n.length) {
                                            var o = n(e);
                                            return o && "function" == typeof o.then ? o.then(function(t) {
                                                return setTimeout(function() {
                                                    return r(null, j(e, t))
                                                }, 0)
                                            }, function(e) {
                                                setTimeout(function() {
                                                    return t(e),
                                                        r(null, !1)
                                                })
                                            }) : r(null, j(e, o))
                                        }
                                        n(e, function(n, o) {
                                            if (n)
                                                return t(n),
                                                    r(null, !1);
                                            r(null, j(e, o))
                                        })
                                    } catch (e) {
                                        t(e),
                                            r(null, !1)
                                    }
                                }
                            }(l, p), function(e, t) {
                                if (e && p(e),
                                    t)
                                    return r._logger.debug("Report not sent due to beforeSend callback"),
                                        !1;
                                r.config.autoBreadcrumbs && r.leaveBreadcrumb(l.errorClass, {
                                    errorClass: l.errorClass,
                                    errorMessage: l.errorMessage,
                                    severity: l.severity,
                                    stacktrace: l.stacktrace
                                }, "error"),
                                d !== l.severity && (l._handledState.severityReason = {
                                    type: "userCallbackSetSeverity"
                                }),
                                    r._delivery.sendReport(r._logger, r.config, {
                                        apiKey: l.apiKey || r.config.apiKey,
                                        notifier: r.notifier,
                                        events: [l]
                                    }, function(e) {
                                        return n(e, l)
                                    })
                            })
                        }
                        ,
                        e
                }()
                    , fe = function(e, t, n) {
                    var r, o, i = 0;
                    switch (void 0 === e ? "undefined" : a(e)) {
                        case "string":
                            if ("string" == typeof t) {
                                var s = pe("string/string");
                                n.warn("Usage error. " + s),
                                    r = new Error("Bugsnag usage error. " + s),
                                    o = {
                                        metaData: {
                                            notifier: {
                                                notifyArgs: [e, t]
                                            }
                                        }
                                    }
                            } else
                                r = new Error(String(e)),
                                    i += 2;
                            break;
                        case "number":
                        case "boolean":
                            r = new Error(String(e));
                            break;
                        case "function":
                            var u = pe("function");
                            n.warn("Usage error. " + u),
                                r = new Error("Bugsnag usage error. " + u);
                            break;
                        case "object":
                            if (null !== e && (k(e) || e.__isBugsnagReport))
                                r = e;
                            else if (null !== e && le(e))
                                (r = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass,
                                    i += 2;
                            else {
                                var c = pe("unsupported object");
                                n.warn("Usage error. " + c),
                                    r = new Error("Bugsnag usage error. " + c)
                            }
                    }
                    return {
                        err: r,
                        errorFramesToSkip: i,
                        _opts: o
                    }
                }
                    , le = function(e) {
                    return !("string" != typeof e.name && "string" != typeof e.errorClass || "string" != typeof e.message && "string" != typeof e.errorMessage)
                }
                    , de = function(e) {
                    return "Bugsnag configuration error\n" + ae(e, function(e) {
                        return '"' + e.key + '" ' + e.message + " \n    got " + he(e.value)
                    }).join("\n\n")
                }
                    , pe = function(e) {
                    return "notify() expected error/opts parameters, got " + e
                }
                    , he = function(e) {
                    return "object" === (void 0 === e ? "undefined" : a(e)) ? JSON.stringify(e) : String(e)
                }
                    , ge = ce
                    , ve = function(e, t, n, r) {
                    var o = r && r.filterKeys ? r.filterKeys : []
                        , i = r && r.filterPaths ? r.filterPaths : [];
                    return JSON.stringify(function(e, t, n) {
                        var r = []
                            , o = 0;
                        return function e(i, s) {
                            function u() {
                                return s.length > be && o > ye
                            }
                            o++;
                            if (s.length > me)
                                return we;
                            if (u())
                                return we;
                            if (null === i || "object" !== (void 0 === i ? "undefined" : a(i)))
                                return i;
                            if (function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t)
                                        return !0;
                                return !1
                            }(r, i))
                                return "[Circular]";
                            r.push(i);
                            if ("function" == typeof i.toJSON)
                                try {
                                    o--;
                                    var c = e(i.toJSON(), s);
                                    return r.pop(),
                                        c
                                } catch (e) {
                                    return Oe(e)
                                }
                            var f = function(e) {
                                return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e))
                            }(i);
                            if (f) {
                                o--;
                                var l = e({
                                    name: i.name,
                                    message: i.message
                                }, s);
                                return r.pop(),
                                    l
                            }
                            if (function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }(i)) {
                                for (var d = [], p = 0, h = i.length; p < h; p++) {
                                    if (u()) {
                                        d.push(we);
                                        break
                                    }
                                    d.push(e(i[p], s.concat("[]")))
                                }
                                return r.pop(),
                                    d
                            }
                            var g = {};
                            try {
                                for (var v in i)
                                    if (Object.prototype.hasOwnProperty.call(i, v))
                                        if (Se(n, s.join(".")) && Ee(t, v))
                                            g[v] = "[Filtered]";
                                        else {
                                            if (u()) {
                                                g[v] = we;
                                                break
                                            }
                                            g[v] = e(xe(i, v), s.concat(v))
                                        }
                            } catch (e) {}
                            r.pop();
                            return g
                        }(e, [])
                    }(e, o, i), t, n)
                }
                    , me = 20
                    , ye = 25e3
                    , be = 8
                    , we = "...";
                function Oe(e) {
                    return "[Throws: " + (e ? e.message : "?") + "]"
                }
                function Se(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (0 === t.indexOf(e[n]))
                            return !0;
                    return !1
                }
                function Ee(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) {
                        if ("string" == typeof e[n] && e[n] === t)
                            return !0;
                        if (e[n] && "function" == typeof e[n].test && e[n].test(t))
                            return !0
                    }
                    return !1
                }
                function xe(e, t) {
                    try {
                        return e[t]
                    } catch (e) {
                        return Oe(e)
                    }
                }
                var _e = {}
                    , Ne = ["events.[].app", "events.[].metaData", "events.[].user", "events.[].breadcrumbs", "events.[].request", "events.[].device"]
                    , Be = ["device", "app", "user"];
                _e.report = function(e, t) {
                    var n = ve(e, null, null, {
                        filterPaths: Ne,
                        filterKeys: t
                    });
                    if (n.length > 1e6 && (delete e.events[0].metaData,
                        e.events[0].metaData = {
                            notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetaData was removed"
                        },
                    (n = ve(e, null, null, {
                        filterPaths: Ne,
                        filterKeys: t
                    })).length > 1e6))
                        throw new Error("payload exceeded 1MB limit");
                    return n
                }
                    ,
                    _e.session = function(e, t) {
                        var n = ve(e, null, null, {
                            filterPaths: Be,
                            filterKeys: t
                        });
                        if (n.length > 1e6)
                            throw new Error("payload exceeded 1MB limit");
                        return n
                    }
                ;
                var je, ke = f;
                je = function(e) {
                    return void 0 === e && (e = window),
                        {
                            sendReport: function(t, n, r, o) {
                                void 0 === o && (o = function() {}
                                );
                                var i = $e(n, "notify", "4.0", e)
                                    , a = new e.XDomainRequest;
                                a.onload = function() {
                                    o(null)
                                }
                                    ,
                                    a.open("POST", i),
                                    setTimeout(function() {
                                        try {
                                            a.send(_e.report(r, n.filters))
                                        } catch (e) {
                                            t.error(e),
                                                o(e)
                                        }
                                    }, 0)
                            },
                            sendSession: function(t, n, r, o) {
                                void 0 === o && (o = function() {}
                                );
                                var i = $e(n, "sessions", "1.0", e)
                                    , a = new e.XDomainRequest;
                                a.onload = function() {
                                    o(null)
                                }
                                    ,
                                    a.open("POST", i),
                                    setTimeout(function() {
                                        try {
                                            a.send(_e.session(r, n.filters))
                                        } catch (e) {
                                            t.error(e),
                                                o(e)
                                        }
                                    }, 0)
                            }
                        }
                }
                ;
                var $e = function(e, t, n, r) {
                    return Ae(e.endpoints[t], r.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(ke())
                }
                    , Ae = je._matchPageProtocol = function(e, t) {
                    return "http:" === t ? e.replace(/^https:/, "http:") : e
                }
                    , Pe = f
                    , Te = {
                    init: function(e, t) {
                        void 0 === t && (t = window),
                            e.config.beforeSend.unshift(function(e) {
                                e.context || (e.context = t.location.pathname)
                            })
                    }
                };
                function Me() {
                    return (Me = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                var Re = f
                    , Ce = {
                    init: function(e, t) {
                        void 0 === t && (t = navigator);
                        var n = {
                            locale: t.browserLanguage || t.systemLanguage || t.userLanguage || t.language,
                            userAgent: t.userAgent
                        };
                        e.device = Me({}, n, e.device),
                            e.config.beforeSend.unshift(function(e) {
                                e.device = Me({}, e.device, {
                                    time: Re()
                                })
                            })
                    }
                };
                function Le() {
                    return (Le = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                var De = {
                    init: function(e, t) {
                        void 0 === t && (t = window),
                            e.config.beforeSend.unshift(function(e) {
                                e.request && e.request.url || (e.request = Le({}, e.request, {
                                    url: t.location.href
                                }))
                            })
                    }
                };
                function Ie() {
                    return (Ie = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                var Fe = c
                    , Ue = u
                    , qe = {
                    init: function(e) {
                        return e.sessionDelegate(We)
                    }
                }
                    , We = {
                    startSession: function(e) {
                        var t = e;
                        t._session = new e.BugsnagSession;
                        var n = B(t);
                        return Fe(t.config.notifyReleaseStages) && !Ue(t.config.notifyReleaseStages, n) ? (t._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration"),
                            t) : t.config.endpoints.sessions ? (t._delivery.sendSession(t._logger, t.config, {
                            notifier: t.notifier,
                            device: t.device,
                            app: Ie({}, {
                                releaseStage: n
                            }, t.app),
                            sessions: [{
                                id: t._session.id,
                                startedAt: t._session.startedAt,
                                user: t.user
                            }]
                        }),
                            t) : (t._logger.warn("Session not sent due to missing endpoints.sessions configuration"),
                            t)
                    }
                };
                function Ve() {
                    return (Ve = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                var Ke = {
                    init: function(e) {
                        e.config.collectUserIp || e.config.beforeSend.push(function(e) {
                            e.user && void 0 === e.user.id && delete e.user.id,
                                e.user = Ve({
                                    id: "[NOT COLLECTED]"
                                }, e.user),
                                e.request = Ve({
                                    clientIp: "[NOT COLLECTED]"
                                }, e.request)
                        })
                    },
                    configSchema: {
                        collectUserIp: {
                            defaultValue: function() {
                                return !0
                            },
                            message: "should be true|false",
                            validate: function(e) {
                                return !0 === e || !1 === e
                            }
                        }
                    }
                }
                    , Qe = {}
                    , He = o
                    , Ge = i
                    , Xe = s;
                Qe.init = function(e) {
                    var t = /^dev(elopment)?$/.test(e.config.releaseStage)
                        , n = !1 === e.config.consoleBreadcrumbsEnabled
                        , r = (!1 === e.config.autoBreadcrumbs || t) && !0 !== e.config.consoleBreadcrumbsEnabled;
                    n || r || He(Ye, function(t) {
                        var n = console[t];
                        console[t] = function() {
                            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                                o[i] = arguments[i];
                            e.leaveBreadcrumb("Console output", Ge(o, function(e, t, n) {
                                var r = "[Unknown value]";
                                try {
                                    r = String(t)
                                } catch (e) {}
                                if ("[object Object]" === r)
                                    try {
                                        r = JSON.stringify(t)
                                    } catch (e) {}
                                return e["[" + n + "]"] = r,
                                    e
                            }, {
                                severity: 0 === t.indexOf("group") ? "log" : t
                            }), "log"),
                                n.apply(console, o)
                        }
                            ,
                            console[t]._restore = function() {
                                console[t] = n
                            }
                    })
                }
                    ,
                    Qe.configSchema = {
                        consoleBreadcrumbsEnabled: {
                            defaultValue: function() {},
                            validate: function(e) {
                                return !0 === e || !1 === e || void 0 === e
                            },
                            message: "should be true|false"
                        }
                    };
                var Ye = Xe(["log", "debug", "info", "warn", "error"], function(e) {
                    return "undefined" != typeof console && "function" == typeof console[e]
                })
                    , Je = {}
                    , ze = i
                    , Ze = /^.*<script.*?>/
                    , et = /<\/script>.*$/
                    , tt = (Je = {
                    init: function(e, t, n) {
                        void 0 === t && (t = document),
                        void 0 === n && (n = window);
                        var r = ""
                            , o = !1
                            , i = function() {
                            return t.documentElement.outerHTML
                        }
                            , a = n.location.href;
                        r = i();
                        var s = t.onreadystatechange;
                        t.onreadystatechange = function() {
                            "interactive" === t.readyState && (r = i(),
                                o = !0),
                            "function" == typeof s && s.apply(this, arguments)
                        }
                            ,
                            e.config.beforeSend.unshift(function(e) {
                                var t = e.stacktrace[0];
                                if (!t || !t.file || !t.lineNumber)
                                    return t;
                                if (t.file.replace(/#.*$/, "") !== a.replace(/#.*$/, ""))
                                    return t;
                                o && r || (r = i());
                                var n = ["\x3c!-- DOC START --\x3e"].concat(r.split("\n"))
                                    , s = tt(n, t.lineNumber - 1)
                                    , u = s.script
                                    , c = s.start
                                    , f = ze(u, function(e, n, r) {
                                    return Math.abs(c + r + 1 - t.lineNumber) > 10 ? e : (e["" + (c + r + 1)] = n,
                                        e)
                                }, {});
                                t.code = f,
                                    e.updateMetaData("script", {
                                        content: u.join("\n")
                                    })
                            })
                    }
                }).extractScriptContent = function(e, t) {
                    for (var n = t; n < e.length && !et.test(e[n]); )
                        n++;
                    for (var r = n; n > 0 && !Ze.test(e[n]); )
                        n--;
                    var o = n
                        , i = e.slice(o, r + 1);
                    return i[0] = i[0].replace(Ze, ""),
                        i[i.length - 1] = i[i.length - 1].replace(et, ""),
                        {
                            script: i,
                            start: o
                        }
                }
                    , nt = {
                    init: function(e, t) {
                        if (void 0 === t && (t = window),
                        "addEventListener"in t) {
                            var n = !1 === e.config.interactionBreadcrumbsEnabled
                                , r = !1 === e.config.autoBreadcrumbs && !0 !== e.config.interactionBreadcrumbsEnabled;
                            n || r || t.addEventListener("click", function(n) {
                                var r, o;
                                try {
                                    r = rt(n.target),
                                        o = function e(t, n) {
                                            var r = [t.tagName];
                                            t.id && r.push("#" + t.id);
                                            t.className && t.className.length && r.push("." + t.className.split(" ").join("."));
                                            if (!n.document.querySelectorAll || !Array.prototype.indexOf)
                                                return r.join("");
                                            try {
                                                if (1 === n.document.querySelectorAll(r.join("")).length)
                                                    return r.join("")
                                            } catch (e) {
                                                return r.join("")
                                            }
                                            if (t.parentNode.childNodes.length > 1) {
                                                var o = Array.prototype.indexOf.call(t.parentNode.childNodes, t) + 1;
                                                r.push(":nth-child(" + o + ")")
                                            }
                                            if (1 === n.document.querySelectorAll(r.join("")).length)
                                                return r.join("");
                                            if (t.parentNode)
                                                return e(t.parentNode, n) + " > " + r.join("");
                                            return r.join("")
                                        }(n.target, t)
                                } catch (t) {
                                    r = "[hidden]",
                                        o = "[hidden]",
                                        e._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm")
                                }
                                e.leaveBreadcrumb("UI click", {
                                    targetText: r,
                                    targetSelector: o
                                }, "user")
                            }, !0)
                        }
                    },
                    configSchema: {
                        interactionBreadcrumbsEnabled: {
                            defaultValue: function() {},
                            validate: function(e) {
                                return !0 === e || !1 === e || void 0 === e
                            },
                            message: "should be true|false"
                        }
                    }
                }
                    , rt = function(e) {
                    var t = e.textContent || e.innerText || "";
                    return t || "submit" !== e.type && "button" !== e.type || (t = e.value),
                        function(e, t) {
                            return e && e.length <= t ? e : e.slice(0, t - "(...)".length) + "(...)"
                        }(t = t.replace(/^\s+|\s+$/g, ""), 140)
                };
                var ot, it, at = {
                    init: function(e, t) {
                        if (void 0 === t && (t = window),
                        "addEventListener"in t) {
                            var n = !1 === e.config.navigationBreadcrumbsEnabled
                                , r = !1 === e.config.autoBreadcrumbs && !0 !== e.config.navigationBreadcrumbsEnabled;
                            if (!n && !r) {
                                var o = function(t) {
                                    return function() {
                                        return e.leaveBreadcrumb(t, {}, "navigation")
                                    }
                                };
                                t.addEventListener("pagehide", o("Page hidden"), !0),
                                    t.addEventListener("pageshow", o("Page shown"), !0),
                                    t.addEventListener("load", o("Page loaded"), !0),
                                    t.document.addEventListener("DOMContentLoaded", o("DOMContentLoaded"), !0),
                                    t.addEventListener("load", function() {
                                        return t.addEventListener("popstate", o("Navigated back"), !0)
                                    }),
                                    t.addEventListener("hashchange", function(n) {
                                        var r = n.oldURL ? {
                                            from: st(n.oldURL, t),
                                            to: st(n.newURL, t),
                                            state: ct(t)
                                        } : {
                                            to: st(t.location.href, t)
                                        };
                                        e.leaveBreadcrumb("Hash changed", r, "navigation")
                                    }, !0),
                                t.history.replaceState && ut(e, t.history, "replaceState", t),
                                t.history.pushState && ut(e, t.history, "pushState", t),
                                    e.leaveBreadcrumb("Bugsnag loaded", {}, "navigation")
                            }
                        }
                    },
                    configSchema: {
                        navigationBreadcrumbsEnabled: {
                            defaultValue: function() {},
                            validate: function(e) {
                                return !0 === e || !1 === e || void 0 === e
                            },
                            message: "should be true|false"
                        }
                    }
                }, st = function(e, t) {
                    var n = t.document.createElement("A");
                    return n.href = e,
                    "" + n.pathname + n.search + n.hash
                }, ut = function(e, t, n, r) {
                    var o = t[n];
                    t[n] = function(i, a, s) {
                        e.leaveBreadcrumb("History " + n, function(e, t, n, r) {
                            var o = st(e.location.href, e);
                            return {
                                title: n,
                                state: t,
                                prevState: ct(e),
                                to: r || o,
                                from: o
                            }
                        }(r, i, a, s), "navigation"),
                        "function" == typeof e.refresh && e.refresh(),
                        e.session && e.startSession(),
                            o.apply(t, [i, a].concat(void 0 !== s ? s : []))
                    }
                        ,
                        t[n]._restore = function() {
                            t[n] = o
                        }
                }, ct = function(e) {
                    try {
                        return e.history.state
                    } catch (e) {}
                }, ft = {}, lt = "request", dt = "BS~~U", pt = "BS~~M", ht = u, gt = function() {
                    return [ot.config.endpoints.notify, ot.config.endpoints.sessions]
                };
                ft.init = function(e, t) {
                    void 0 === t && (t = window);
                    var n = !1 === e.config.networkBreadcrumbsEnabled
                        , r = !1 === e.config.autoBreadcrumbs && !0 !== e.config.networkBreadcrumbsEnabled;
                    n || r || (ot = e,
                        it = t,
                        vt(),
                        bt())
                }
                    ,
                    ft.configSchema = {
                        networkBreadcrumbsEnabled: {
                            defaultValue: function() {},
                            validate: function(e) {
                                return !0 === e || !1 === e || void 0 === e
                            },
                            message: "should be true|false"
                        }
                    };
                var vt = function() {
                    if ("addEventListener"in it.XMLHttpRequest.prototype) {
                        var e = it.XMLHttpRequest.prototype.open;
                        it.XMLHttpRequest.prototype.open = function(t, n) {
                            this[dt] = n,
                                this[pt] = t,
                            this["BS~~S"] && (this.removeEventListener("load", mt),
                                this.removeEventListener("error", yt)),
                                this.addEventListener("load", mt),
                                this.addEventListener("error", yt),
                                this["BS~~S"] = !0,
                                e.apply(this, arguments)
                        }
                    }
                };
                function mt() {
                    if (!ht(gt(), this[dt])) {
                        var e = {
                            status: this.status,
                            request: this[pt] + " " + this[dt]
                        };
                        this.status >= 400 ? ot.leaveBreadcrumb("XMLHttpRequest failed", e, lt) : ot.leaveBreadcrumb("XMLHttpRequest succeeded", e, lt)
                    }
                }
                function yt() {
                    ht(gt(), this[dt]) || ot.leaveBreadcrumb("XMLHttpRequest error", {
                        request: this[pt] + " " + this[dt]
                    }, lt)
                }
                var bt = function() {
                    if ("fetch"in it) {
                        var e = it.fetch;
                        it.fetch = function() {
                            for (var t = arguments.length, canshu = new Array(t), r = 0; r < t; r++)
                                canshu[r] = arguments[r];
                            var o = canshu[0]
                                , i = canshu[1]
                                , a = "GET";
                            return i && i.method && (a = i.method),
                                new Promise(function(t, r) {
                                        e.apply(void 0, canshu).then(function(e) {
                                            wt(e, a, o),
                                                t(e)
                                        }).catch(function(e) {
                                            Ot(a, o),
                                                r(e)
                                        })
                                    }
                                )
                        }
                    }
                }
                    , wt = function(e, t, n) {
                    var r = {
                        status: e.status,
                        request: t + " " + n
                    };
                    e.status >= 400 ? ot.leaveBreadcrumb("fetch() failed", r, lt) : ot.leaveBreadcrumb("fetch() succeeded", r, lt)
                }
                    , Ot = function(e, t) {
                    ot.leaveBreadcrumb("fetch() error", {
                        request: e + " " + t
                    }, lt)
                }
                    , St = l.intRange
                    , Et = {
                    init: function(e) {
                        var t = 0;
                        e.config.beforeSend.push(function(n) {
                            if (t >= e.config.maxEvents)
                                return n.ignore();
                            t++
                        }),
                            e.refresh = function() {
                                t = 0
                            }
                    },
                    configSchema: {
                        maxEvents: {
                            defaultValue: function() {
                                return 10
                            },
                            message: "should be a positive integer ≤100",
                            validate: function(e) {
                                return St(1, 100)(e)
                            }
                        }
                    }
                }
                    , xt = {};
                function _t() {
                    return (_t = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                var Nt = o
                    , Bt = (xt = {
                    init: function(e) {
                        e.config.beforeSend.push(function(e) {
                            e.stacktrace = Nt(e.stacktrace, function(e) {
                                return _t({}, e, {
                                    file: Bt(e.file)
                                })
                            })
                        })
                    }
                })._strip = function(e) {
                    return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e
                }
                    , jt = {
                    init: function(e, t) {
                        void 0 === t && (t = window);
                        var n = t.onerror;
                        t.onerror = function(t, r, o, i, s) {
                            if (0 === o && /Script error\.?/.test(t))
                                e._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm");
                            else {
                                var u, c = {
                                    severity: "error",
                                    unhandled: !0,
                                    severityReason: {
                                        type: "unhandledException"
                                    }
                                };
                                if (s)
                                    s.name && s.message ? u = new e.BugsnagReport(s.name,s.message,kt(e.BugsnagReport.getStacktrace(s), r, o, i),c) : (u = new e.BugsnagReport("window.onerror",String(s),kt(e.BugsnagReport.getStacktrace(s, 1), r, o, i),c)).updateMetaData("window onerror", {
                                        error: s
                                    });
                                else if ("object" !== (void 0 === t ? "undefined" : a(t)) || null === t || r && "string" == typeof r || o || i || s)
                                    (u = new e.BugsnagReport("window.onerror",String(t),kt(e.BugsnagReport.getStacktrace(s, 1), r, o, i),c)).updateMetaData("window onerror", {
                                        event: t
                                    });
                                else {
                                    var f = t.type ? "Event: " + t.type : "window.onerror"
                                        , l = t.message || t.detail || "";
                                    (u = new e.BugsnagReport(f,l,e.BugsnagReport.getStacktrace(new Error, 1).slice(1),c)).updateMetaData("window onerror", {
                                        event: t,
                                        extraParameters: r
                                    })
                                }
                                e.notify(u)
                            }
                            "function" == typeof n && n.apply(this, arguments)
                        }
                    }
                }
                    , kt = function(e, t, n, r) {
                    var o = e[0];
                    return o ? (o.fileName || "string" != typeof t || o.setFileName(t),
                    !o.lineNumber && $t(n) && o.setLineNumber(n),
                    o.columnNumber || ($t(r) ? o.setColumnNumber(r) : window.event && $t(window.event.errorCharacter) && o.setColumnNumber(window.event.errorCharacter)),
                        e) : e
                }
                    , $t = function(e) {
                    return "number" == typeof e && "NaN" !== String.call(e)
                }
                    , At = {};
                !function(e, t) {
                    "object" === (void 0 === At ? "undefined" : a(At)) ? At = t() : e.StackFrame = t()
                }(this, function() {
                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    function t(e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }
                    function n(e) {
                        return function() {
                            return this[e]
                        }
                    }
                    var r = ["isConstructor", "isEval", "isNative", "isToplevel"]
                        , o = ["columnNumber", "lineNumber"]
                        , i = ["fileName", "functionName", "source"]
                        , a = r.concat(o, i, ["args"]);
                    function s(e) {
                        if (e instanceof Object)
                            for (var n = 0; n < a.length; n++)
                                e.hasOwnProperty(a[n]) && void 0 !== e[a[n]] && this["set" + t(a[n])](e[a[n]])
                    }
                    s.prototype = {
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(e) {
                            if ("[object Array]" !== Object.prototype.toString.call(e))
                                throw new TypeError("Args must be an Array");
                            this.args = e
                        },
                        getEvalOrigin: function() {
                            return this.evalOrigin
                        },
                        setEvalOrigin: function(e) {
                            if (e instanceof s)
                                this.evalOrigin = e;
                            else {
                                if (!(e instanceof Object))
                                    throw new TypeError("Eval Origin must be an Object or StackFrame");
                                this.evalOrigin = new s(e)
                            }
                        },
                        toString: function() {
                            return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                        }
                    };
                    for (var u = 0; u < r.length; u++)
                        s.prototype["get" + t(r[u])] = n(r[u]),
                            s.prototype["set" + t(r[u])] = function(e) {
                                return function(t) {
                                    this[e] = Boolean(t)
                                }
                            }(r[u]);
                    for (var c = 0; c < o.length; c++)
                        s.prototype["get" + t(o[c])] = n(o[c]),
                            s.prototype["set" + t(o[c])] = function(t) {
                                return function(n) {
                                    if (!e(n))
                                        throw new TypeError(t + " must be a Number");
                                    this[t] = Number(n)
                                }
                            }(o[c]);
                    for (var f = 0; f < i.length; f++)
                        s.prototype["get" + t(i[f])] = n(i[f]),
                            s.prototype["set" + t(i[f])] = function(e) {
                                return function(t) {
                                    this[e] = String(t)
                                }
                            }(i[f]);
                    return s
                });
                var Pt = {};
                !function(e, t) {
                    "object" === (void 0 === Pt ? "undefined" : a(Pt)) ? Pt = t(At) : e.ErrorStackParser = t(e.StackFrame)
                }(this, function(e) {
                    var t = /(^|@)\S+\:\d+/
                        , n = /^\s*at .*(\S+\:\d+|\(native\))/m
                        , r = /^(eval@)?(\[native code\])?$/;
                    return {
                        parse: function(e) {
                            if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"])
                                return this.parseOpera(e);
                            if (e.stack && e.stack.match(n))
                                return this.parseV8OrIE(e);
                            if (e.stack)
                                return this.parseFFOrSafari(e);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(e) {
                            if (-1 === e.indexOf(":"))
                                return [e];
                            var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                            return [t[1], t[2] || void 0, t[3] || void 0]
                        },
                        parseV8OrIE: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !!e.match(n)
                            }, this).map(function(t) {
                                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1)
                                    , r = this.extractLocation(n.pop())
                                    , o = n.join(" ") || void 0
                                    , i = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0];
                                return new e({
                                    functionName: o,
                                    fileName: i,
                                    lineNumber: r[1],
                                    columnNumber: r[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseFFOrSafari: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !e.match(r)
                            }, this).map(function(t) {
                                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
                                -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                                    return new e({
                                        functionName: t
                                    });
                                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/
                                    , r = t.match(n)
                                    , o = r && r[1] ? r[1] : void 0
                                    , i = this.extractLocation(t.replace(n, ""));
                                return new e({
                                    functionName: o,
                                    fileName: i[0],
                                    lineNumber: i[1],
                                    columnNumber: i[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseOpera: function(e) {
                            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                        },
                        parseOpera9: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], i = 2, a = r.length; i < a; i += 2) {
                                var s = n.exec(r[i]);
                                s && o.push(new e({
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera10: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], i = 0, a = r.length; i < a; i += 2) {
                                var s = n.exec(r[i]);
                                s && o.push(new e({
                                    functionName: s[3] || void 0,
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera11: function(n) {
                            return n.stack.split("\n").filter(function(e) {
                                return !!e.match(t) && !e.match(/^Error created at/)
                            }, this).map(function(t) {
                                var n, r = t.split("@"), o = this.extractLocation(r.pop()), i = r.shift() || "", a = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                                i.match(/\(([^\)]*)\)/) && (n = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                return new e({
                                    functionName: a,
                                    args: s,
                                    fileName: o[0],
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }, this)
                        }
                    }
                });
                var Tt = function(e) {
                    switch (Object.prototype.toString.call(e)) {
                        case "[object Error]":
                        case "[object Exception]":
                        case "[object DOMException]":
                            return !0;
                        default:
                            return e instanceof Error
                    }
                };
                var Mt = {}
                    , Rt = i;
                Mt.init = function(e, t) {
                    void 0 === t && (t = window);
                    var n = function(t) {
                        var n = t.reason
                            , r = !1;
                        try {
                            t.detail && t.detail.reason && (n = t.detail.reason,
                                r = !0)
                        } catch (e) {}
                        var o, i = {
                            severity: "error",
                            unhandled: !0,
                            severityReason: {
                                type: "unhandledPromiseRejection"
                            }
                        };
                        if (n && $(n))
                            o = new e.BugsnagReport(n.name,n.message,Pt.parse(n),i),
                            r && (o.stacktrace = Rt(o.stacktrace, Dt(n), []));
                        else {
                            (o = new e.BugsnagReport(n && n.name ? n.name : "UnhandledRejection",n && n.message ? n.message : 'Rejection reason was not an Error. See "Promise" tab for more detail.',[],i)).updateMetaData("promise", "rejection reason", Lt(n))
                        }
                        e.notify(o)
                    };
                    "addEventListener"in t ? t.addEventListener("unhandledrejection", n) : t.onunhandledrejection = function(e, t) {
                        n({
                            detail: {
                                reason: e,
                                promise: t
                            }
                        })
                    }
                        ,
                        n
                }
                ;
                var Ct, Lt = function(e) {
                    return null === e || void 0 === e ? "undefined (or null)" : Tt(e) ? ((t = {})[Object.prototype.toString.call(e)] = {
                        name: e.name,
                        message: e.message,
                        code: e.code,
                        stack: e.stack
                    },
                        t) : e;
                    var t
                }, Dt = function(e) {
                    return function(t, n) {
                        return n.file === e.toString() ? t : (n.method && (n.method = n.method.replace(/^\s+/, "")),
                            t.concat(n))
                    }
                };
                function It() {
                    return (It = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                var Ft = o
                    , Ut = It({}, d.schema, E);
                return (Ct = function(e) {
                        "string" == typeof e && (e = {
                            apiKey: e
                        });
                        var t = [];
                        e.sessionTrackingEnabled && (t.push("deprecated option sessionTrackingEnabled is now called autoCaptureSessions"),
                            e.autoCaptureSessions = e.sessionTrackingEnabled),
                        !e.endpoint && !e.sessionEndpoint || e.endpoints || (t.push("deprecated options endpoint/sessionEndpoint are now configured in the endpoints object"),
                            e.endpoints = {
                                notify: e.endpoint,
                                sessions: e.sessionEndpoint
                            }),
                        e.endpoints && e.endpoints.notify && !e.endpoints.sessions && t.push("notify endpoint is set but sessions endpoint is not. No sessions will be sent.");
                        var n = new ge({
                            name: "Bugsnag JavaScript",
                            version: "5.2.0",
                            url: "https://github.com/bugsnag/bugsnag-js"
                        });
                        return n.setOptions(e),
                            n.delivery(window.XDomainRequest ? je() : function(e) {
                                return void 0 === e && (e = window),
                                    {
                                        sendReport: function(t, n, r, o) {
                                            void 0 === o && (o = function() {}
                                            );
                                            try {
                                                var i = n.endpoints.notify
                                                    , a = new e.XMLHttpRequest;
                                                a.onreadystatechange = function() {
                                                    a.readyState === e.XMLHttpRequest.DONE && o(null)
                                                }
                                                    ,
                                                    a.open("POST", i),
                                                    a.setRequestHeader("Content-Type", "application/json"),
                                                    a.setRequestHeader("Bugsnag-Api-Key", r.apiKey || n.apiKey),
                                                    a.setRequestHeader("Bugsnag-Payload-Version", "4.0"),
                                                    a.setRequestHeader("Bugsnag-Sent-At", Pe()),
                                                    a.send(_e.report(r, n.filters))
                                            } catch (e) {
                                                t.error(e)
                                            }
                                        },
                                        sendSession: function(t, n, r, o) {
                                            void 0 === o && (o = function() {}
                                            );
                                            try {
                                                var i = n.endpoints.sessions
                                                    , a = new e.XMLHttpRequest;
                                                a.onreadystatechange = function() {
                                                    a.readyState === e.XMLHttpRequest.DONE && o(null)
                                                }
                                                    ,
                                                    a.open("POST", i),
                                                    a.setRequestHeader("Content-Type", "application/json"),
                                                    a.setRequestHeader("Bugsnag-Api-Key", n.apiKey),
                                                    a.setRequestHeader("Bugsnag-Payload-Version", "1.0"),
                                                    a.setRequestHeader("Bugsnag-Sent-At", Pe()),
                                                    a.send(_e.session(r, n.filters))
                                            } catch (e) {
                                                t.error(e)
                                            }
                                        }
                                    }
                            }()),
                            n.configure(Ut),
                            Ft(t, function(e) {
                                return n._logger.warn(e)
                            }),
                            n.use(Ce),
                            n.use(Te),
                            n.use(De),
                            n.use(Je),
                            n.use(Et),
                            n.use(qe),
                            n.use(Ke),
                            n.use(xt),
                        !1 !== n.config.autoNotify && (n.use(jt),
                            n.use(Mt)),
                            n.use(at),
                            n.use(nt),
                            n.use(ft),
                            n.use(Qe),
                            n._logger.debug("Loaded!"),
                            n.config.autoCaptureSessions ? n.startSession() : n
                    }
                ).Bugsnag = {
                    Client: ge,
                    Report: q,
                    Session: oe,
                    Breadcrumb: N
                },
                    Ct.default = Ct,
                    Ct
            })
        }
        , function(e, t, n) {
            "use strict";
            (function(r, o) {
                    var i, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                    ;
                    /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
                    !function(r, o) {
                        "object" === s(t) && void 0 !== e ? e.exports = o() : void 0 === (a = "function" == typeof (i = o) ? i.call(t, n, t, e) : i) || (e.exports = a)
                    }(0, function() {
                        function e(e) {
                            return "function" == typeof e
                        }
                        var t = Array.isArray ? Array.isArray : function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }
                            , n = 0
                            , i = void 0
                            , a = void 0
                            , u = function(e, t) {
                            g[n] = e,
                                g[n + 1] = t,
                            2 === (n += 2) && (a ? a(v) : m())
                        };
                        var c = "undefined" != typeof window ? window : void 0
                            , f = c || {}
                            , l = f.MutationObserver || f.WebKitMutationObserver
                            , d = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r)
                            , p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                        function h() {
                            var e = setTimeout;
                            return function() {
                                return e(v, 1)
                            }
                        }
                        var g = new Array(1e3);
                        function v() {
                            for (var e = 0; e < n; e += 2) {
                                (0,
                                    g[e])(g[e + 1]),
                                    g[e] = void 0,
                                    g[e + 1] = void 0
                            }
                            n = 0
                        }
                        var m = void 0;
                        function y(e, t) {
                            var n = this
                                , r = new this.constructor(O);
                            void 0 === r[w] && M(r);
                            var o = n._state;
                            if (o) {
                                var i = arguments[o - 1];
                                u(function() {
                                    return P(o, r, i, n._result)
                                })
                            } else
                                $(n, r, e, t);
                            return r
                        }
                        function b(e) {
                            if (e && "object" === (void 0 === e ? "undefined" : s(e)) && e.constructor === this)
                                return e;
                            var t = new this(O);
                            return N(t, e),
                                t
                        }
                        m = d ? function() {
                                return r.nextTick(v)
                            }
                            : l ? function() {
                                var e = 0
                                    , t = new l(v)
                                    , n = document.createTextNode("");
                                return t.observe(n, {
                                    characterData: !0
                                }),
                                    function() {
                                        n.data = e = ++e % 2
                                    }
                            }() : p ? function() {
                                var e = new MessageChannel;
                                return e.port1.onmessage = v,
                                    function() {
                                        return e.port2.postMessage(0)
                                    }
                            }() : void 0 === c ? function() {
                                try {
                                    var e = Function("return this")().require("vertx");
                                    return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function() {
                                            i(v)
                                        }
                                        : h()
                                } catch (e) {
                                    return h()
                                }
                            }() : h();
                        var w = Math.random().toString(36).substring(2);
                        function O() {}
                        var S = void 0
                            , E = 1
                            , x = 2;
                        function _(t, n, r) {
                            n.constructor === t.constructor && r === y && n.constructor.resolve === b ? function(e, t) {
                                t._state === E ? j(e, t._result) : t._state === x ? k(e, t._result) : $(t, void 0, function(t) {
                                    return N(e, t)
                                }, function(t) {
                                    return k(e, t)
                                })
                            }(t, n) : void 0 === r ? j(t, n) : e(r) ? function(e, t, n) {
                                u(function(e) {
                                    var r = !1
                                        , o = function(e, t, n, r) {
                                        try {
                                            e.call(t, n, r)
                                        } catch (e) {
                                            return e
                                        }
                                    }(n, t, function(n) {
                                        r || (r = !0,
                                            t !== n ? N(e, n) : j(e, n))
                                    }, function(t) {
                                        r || (r = !0,
                                            k(e, t))
                                    }, e._label);
                                    !r && o && (r = !0,
                                        k(e, o))
                                }, e)
                            }(t, n, r) : j(t, n)
                        }
                        function N(e, t) {
                            if (e === t)
                                k(e, new TypeError("You cannot resolve a promise with itself"));
                            else if (function(e) {
                                var t = void 0 === e ? "undefined" : s(e);
                                return null !== e && ("object" === t || "function" === t)
                            }(t)) {
                                var n = void 0;
                                try {
                                    n = t.then
                                } catch (t) {
                                    return void k(e, t)
                                }
                                _(e, t, n)
                            } else
                                j(e, t)
                        }
                        function B(e) {
                            e._onerror && e._onerror(e._result),
                                A(e)
                        }
                        function j(e, t) {
                            e._state === S && (e._result = t,
                                e._state = E,
                            0 !== e._subscribers.length && u(A, e))
                        }
                        function k(e, t) {
                            e._state === S && (e._state = x,
                                e._result = t,
                                u(B, e))
                        }
                        function $(e, t, n, r) {
                            var o = e._subscribers
                                , i = o.length;
                            e._onerror = null,
                                o[i] = t,
                                o[i + E] = n,
                                o[i + x] = r,
                            0 === i && e._state && u(A, e)
                        }
                        function A(e) {
                            var t = e._subscribers
                                , n = e._state;
                            if (0 !== t.length) {
                                for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3)
                                    r = t[a],
                                        o = t[a + n],
                                        r ? P(n, r, o, i) : o(i);
                                e._subscribers.length = 0
                            }
                        }
                        function P(t, n, r, o) {
                            var i = e(r)
                                , a = void 0
                                , s = void 0
                                , u = !0;
                            if (i) {
                                try {
                                    a = r(o)
                                } catch (e) {
                                    u = !1,
                                        s = e
                                }
                                if (n === a)
                                    return void k(n, new TypeError("A promises callback cannot return that same promise."))
                            } else
                                a = o;
                            n._state !== S || (i && u ? N(n, a) : !1 === u ? k(n, s) : t === E ? j(n, a) : t === x && k(n, a))
                        }
                        var T = 0;
                        function M(e) {
                            e[w] = T++,
                                e._state = void 0,
                                e._result = void 0,
                                e._subscribers = []
                        }
                        var R = function() {
                            function e(e, n) {
                                this._instanceConstructor = e,
                                    this.promise = new e(O),
                                this.promise[w] || M(this.promise),
                                    t(n) ? (this.length = n.length,
                                        this._remaining = n.length,
                                        this._result = new Array(this.length),
                                        0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0,
                                            this._enumerate(n),
                                        0 === this._remaining && j(this.promise, this._result))) : k(this.promise, new Error("Array Methods must be provided an Array"))
                            }
                            return e.prototype._enumerate = function(e) {
                                for (var t = 0; this._state === S && t < e.length; t++)
                                    this._eachEntry(e[t], t)
                            }
                                ,
                                e.prototype._eachEntry = function(e, t) {
                                    var n = this._instanceConstructor
                                        , r = n.resolve;
                                    if (r === b) {
                                        var o = void 0
                                            , i = void 0
                                            , a = !1;
                                        try {
                                            o = e.then
                                        } catch (e) {
                                            a = !0,
                                                i = e
                                        }
                                        if (o === y && e._state !== S)
                                            this._settledAt(e._state, t, e._result);
                                        else if ("function" != typeof o)
                                            this._remaining--,
                                                this._result[t] = e;
                                        else if (n === C) {
                                            var s = new n(O);
                                            a ? k(s, i) : _(s, e, o),
                                                this._willSettleAt(s, t)
                                        } else
                                            this._willSettleAt(new n(function(t) {
                                                    return t(e)
                                                }
                                            ), t)
                                    } else
                                        this._willSettleAt(r(e), t)
                                }
                                ,
                                e.prototype._settledAt = function(e, t, n) {
                                    var r = this.promise;
                                    r._state === S && (this._remaining--,
                                        e === x ? k(r, n) : this._result[t] = n),
                                    0 === this._remaining && j(r, this._result)
                                }
                                ,
                                e.prototype._willSettleAt = function(e, t) {
                                    var n = this;
                                    $(e, void 0, function(e) {
                                        return n._settledAt(E, t, e)
                                    }, function(e) {
                                        return n._settledAt(x, t, e)
                                    })
                                }
                                ,
                                e
                        }();
                        var C = function() {
                            function t(e) {
                                this[w] = T++,
                                    this._result = this._state = void 0,
                                    this._subscribers = [],
                                O !== e && ("function" != typeof e && function() {
                                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                }(),
                                    this instanceof t ? function(e, t) {
                                        try {
                                            t(function(t) {
                                                N(e, t)
                                            }, function(t) {
                                                k(e, t)
                                            })
                                        } catch (t) {
                                            k(e, t)
                                        }
                                    }(this, e) : function() {
                                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                    }())
                            }
                            return t.prototype.catch = function(e) {
                                return this.then(null, e)
                            }
                                ,
                                t.prototype.finally = function(t) {
                                    var n = this.constructor;
                                    return e(t) ? this.then(function(e) {
                                        return n.resolve(t()).then(function() {
                                            return e
                                        })
                                    }, function(e) {
                                        return n.resolve(t()).then(function() {
                                            throw e
                                        })
                                    }) : this.then(t, t)
                                }
                                ,
                                t
                        }();
                        return C.prototype.then = y,
                            C.all = function(e) {
                                return new R(this,e).promise
                            }
                            ,
                            C.race = function(e) {
                                var n = this;
                                return t(e) ? new n(function(t, r) {
                                        for (var o = e.length, i = 0; i < o; i++)
                                            n.resolve(e[i]).then(t, r)
                                    }
                                ) : new n(function(e, t) {
                                        return t(new TypeError("You must pass an array to race."))
                                    }
                                )
                            }
                            ,
                            C.resolve = b,
                            C.reject = function(e) {
                                var t = new this(O);
                                return k(t, e),
                                    t
                            }
                            ,
                            C._setScheduler = function(e) {
                                a = e
                            }
                            ,
                            C._setAsap = function(e) {
                                u = e
                            }
                            ,
                            C._asap = u,
                            C.polyfill = function() {
                                var e = void 0;
                                if (void 0 !== o)
                                    e = o;
                                else if ("undefined" != typeof self)
                                    e = self;
                                else
                                    try {
                                        e = Function("return this")()
                                    } catch (e) {
                                        throw new Error("polyfill failed because global object is unavailable in this environment")
                                    }
                                var t = e.Promise;
                                if (t) {
                                    var n = null;
                                    try {
                                        n = Object.prototype.toString.call(t.resolve())
                                    } catch (e) {}
                                    if ("[object Promise]" === n && !t.cast)
                                        return
                                }
                                e.Promise = C
                            }
                            ,
                            C.Promise = C,
                            C
                    })
                }
            ).call(this, n(4), n(5))
        }
        , function(e, t, n) {
            "use strict";
            var r, o, i = e.exports = {};
            function a() {
                throw new Error("setTimeout has not been defined")
            }
            function s() {
                throw new Error("clearTimeout has not been defined")
            }
            function u(e) {
                if (r === setTimeout)
                    return setTimeout(e, 0);
                if ((r === a || !r) && setTimeout)
                    return r = setTimeout,
                        setTimeout(e, 0);
                try {
                    return r(e, 0)
                } catch (t) {
                    try {
                        return r.call(null, e, 0)
                    } catch (t) {
                        return r.call(this, e, 0)
                    }
                }
            }
            !function() {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : a
                } catch (e) {
                    r = a
                }
                try {
                    o = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    o = s
                }
            }();
            var c, f = [], l = !1, d = -1;
            function p() {
                l && c && (l = !1,
                    c.length ? f = c.concat(f) : d = -1,
                f.length && h())
            }
            function h() {
                if (!l) {
                    var e = u(p);
                    l = !0;
                    for (var t = f.length; t; ) {
                        for (c = f,
                                 f = []; ++d < t; )
                            c && c[d].run();
                        d = -1,
                            t = f.length
                    }
                    c = null,
                        l = !1,
                        function(e) {
                            if (o === clearTimeout)
                                return clearTimeout(e);
                            if ((o === s || !o) && clearTimeout)
                                return o = clearTimeout,
                                    clearTimeout(e);
                            try {
                                o(e)
                            } catch (t) {
                                try {
                                    return o.call(null, e)
                                } catch (t) {
                                    return o.call(this, e)
                                }
                            }
                        }(e)
                }
            }
            function g(e, t) {
                this.fun = e,
                    this.array = t
            }
            function v() {}
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                f.push(new g(e,t)),
                1 !== f.length || l || u(h)
            }
                ,
                g.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                i.title = "browser",
                i.browser = !0,
                i.env = {},
                i.argv = [],
                i.version = "",
                i.versions = {},
                i.on = v,
                i.addListener = v,
                i.once = v,
                i.off = v,
                i.removeListener = v,
                i.removeAllListeners = v,
                i.emit = v,
                i.prependListener = v,
                i.prependOnceListener = v,
                i.listeners = function(e) {
                    return []
                }
                ,
                i.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }
                ,
                i.cwd = function() {
                    return "/"
                }
                ,
                i.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                i.umask = function() {
                    return 0
                }
        }
        , function(e, t, n) {
            "use strict";
            var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
            ;
            r = function() {
                return this
            }();
            try {
                r = r || new Function("return this")()
            } catch (e) {
                "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window)
            }
            e.exports = r
        }
        , function(e, t, n) {
            "use strict";
            var r = n(7);
            e.exports = r
        }
        , function(e, t, n) {
            "use strict";
            var r;
            "function" == typeof Symbol && Symbol.iterator;
            !function(o, i) {
                void 0 === (r = function() {
                    return function(e) {
                        var t = e || {}
                            , n = e && void 0 !== e.navigator ? e.navigator : {}
                            , r = function(e, t) {
                            var r = n.mimeTypes;
                            for (var o in r)
                                if (r[o][e] === t)
                                    return !0;
                            return !1
                        };
                        return function(e) {
                            var o = e || n.userAgent || {};
                            this.browser = {},
                                this.engine = {},
                                this.os = {},
                                this.device = {};
                            var i = {
                                Trident: o.indexOf("Trident") > -1 || o.indexOf("NET CLR") > -1,
                                Presto: o.indexOf("Presto") > -1,
                                WebKit: o.indexOf("AppleWebKit") > -1 || o.indexOf("PddWorkbench-Online") > -1,
                                Gecko: o.indexOf("Gecko/") > -1,
                                Safari: o.indexOf("Safari") > -1,
                                Chrome: o.indexOf("Chrome") > -1 || o.indexOf("CriOS") > -1,
                                IE: o.indexOf("MSIE") > -1 || o.indexOf("Trident") > -1,
                                Edge: o.indexOf("Edge") > -1,
                                Firefox: o.indexOf("Firefox") > -1 || o.indexOf("FxiOS") > -1,
                                "Firefox Focus": o.indexOf("Focus") > -1,
                                Chromium: o.indexOf("Chromium") > -1,
                                Opera: o.indexOf("Opera") > -1 || o.indexOf("OPR") > -1,
                                Vivaldi: o.indexOf("Vivaldi") > -1,
                                Yandex: o.indexOf("YaBrowser") > -1,
                                Arora: o.indexOf("Arora") > -1,
                                Lunascape: o.indexOf("Lunascape") > -1,
                                QupZilla: o.indexOf("QupZilla") > -1,
                                "Coc Coc": o.indexOf("coc_coc_browser") > -1,
                                Kindle: o.indexOf("Kindle") > -1 || o.indexOf("Silk/") > -1,
                                Iceweasel: o.indexOf("Iceweasel") > -1,
                                Konqueror: o.indexOf("Konqueror") > -1,
                                Iceape: o.indexOf("Iceape") > -1,
                                SeaMonkey: o.indexOf("SeaMonkey") > -1,
                                Epiphany: o.indexOf("Epiphany") > -1,
                                360: o.indexOf("QihooBrowser") > -1 || o.indexOf("QHBrowser") > -1,
                                "360EE": o.indexOf("360EE") > -1,
                                "360SE": o.indexOf("360SE") > -1,
                                UC: o.indexOf("UC") > -1 || o.indexOf(" UBrowser") > -1,
                                QQBrowser: o.indexOf("QQBrowser") > -1,
                                QQ: o.indexOf("QQ/") > -1,
                                Baidu: o.indexOf("Baidu") > -1 || o.indexOf("BIDUBrowser") > -1,
                                Maxthon: o.indexOf("Maxthon") > -1,
                                Sogou: o.indexOf("MetaSr") > -1 || o.indexOf("Sogou") > -1,
                                LBBROWSER: o.indexOf("LBBROWSER") > -1,
                                "2345Explorer": o.indexOf("2345Explorer") > -1,
                                TheWorld: o.indexOf("TheWorld") > -1,
                                XiaoMi: o.indexOf("MiuiBrowser") > -1,
                                Quark: o.indexOf("Quark") > -1,
                                Qiyu: o.indexOf("Qiyu") > -1,
                                Wechat: o.indexOf("MicroMessenger") > -1,
                                Taobao: o.indexOf("AliApp(TB") > -1,
                                Alipay: o.indexOf("AliApp(AP") > -1,
                                Weibo: o.indexOf("Weibo") > -1,
                                Douban: o.indexOf("com.douban.frodo") > -1,
                                Suning: o.indexOf("SNEBUY-APP") > -1,
                                iQiYi: o.indexOf("IqiyiApp") > -1,
                                PddBrowser: o.indexOf("PddBrowser") > -1,
                                Windows: o.indexOf("Windows") > -1 || o.indexOf("PddWorkbench-Online") > -1,
                                Linux: o.indexOf("Linux") > -1 || o.indexOf("X11") > -1,
                                "Mac OS": o.indexOf("Macintosh") > -1,
                                Android: o.indexOf("Android") > -1 || o.indexOf("Adr") > -1,
                                Ubuntu: o.indexOf("Ubuntu") > -1,
                                FreeBSD: o.indexOf("FreeBSD") > -1,
                                Debian: o.indexOf("Debian") > -1,
                                "Windows Phone": o.indexOf("IEMobile") > -1 || o.indexOf("Windows Phone") > -1,
                                BlackBerry: o.indexOf("BlackBerry") > -1 || o.indexOf("RIM") > -1 || o.indexOf("BB10") > -1,
                                MeeGo: o.indexOf("MeeGo") > -1,
                                Symbian: o.indexOf("Symbian") > -1,
                                iOS: o.indexOf("like Mac OS X") > -1,
                                "Chrome OS": o.indexOf("CrOS") > -1,
                                WebOS: o.indexOf("hpwOS") > -1,
                                Mobile: o.indexOf("Mobi") > -1 || o.indexOf("iPh") > -1 || o.indexOf("480") > -1,
                                Tablet: o.indexOf("Tablet") > -1 || o.indexOf("Pad") > -1 || o.indexOf("Nexus 7") > -1
                            }
                                , a = !1;
                            if (t.chrome) {
                                var s = o.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                                s > 36 && t.showModalDialog ? a = !0 : s > 45 && (a = r("type", "application/vnd.chromium.remoting-viewer"))
                            }
                            if (i.Mobile ? i.Mobile = !(o.indexOf("iPad") > -1) : a && (r("type", "application/gameplugin") ? i["360SE"] = !0 : n && n.connection && void 0 === n.connection.saveData ? i["360SE"] = !0 : i["360EE"] = !0),
                            (i.IE || i.Edge) && t.screenTop && t.screenY) {
                                var u = t.screenTop - t.screenY;
                                switch (u) {
                                    case 71:
                                    case 74:
                                    case 99:
                                    case 102:
                                        i["360EE"] = !0;
                                        break;
                                    case 75:
                                    case 105:
                                    case 104:
                                        i["360SE"] = !0
                                }
                            }
                            i.Baidu && i.Opera && (i.Baidu = !1);
                            var c = {
                                engine: {
                                    name: ["WebKit", "Trident", "Gecko", "Presto"]
                                },
                                browser: {
                                    name: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Arora", "Lunascape", "QupZilla", "Coc Coc", "Kindle", "Iceweasel", "Konqueror", "Iceape", "SeaMonkey", "Epiphany", "360", "360SE", "360EE", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi", "PddBrowser"]
                                },
                                os: {
                                    name: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"]
                                },
                                device: {
                                    type: ["Mobile", "Tablet"]
                                }
                            };
                            for (var f in this.device.type = "PC",
                                c)
                                if ("device" === f)
                                    for (var l = c[f].type, d = 0; d < l.length; d++) {
                                        var p = l[d];
                                        i[p] && (this[f].type = p)
                                    }
                                else
                                    for (var h = c[f].name, g = 0; g < h.length; g++) {
                                        var v = h[g];
                                        i[v] && (this[f].name = v)
                                    }
                            var m = {
                                Windows: function() {
                                    var e = o.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
                                    return {
                                        6.4: "10",
                                        6.3: "8.1",
                                        6.2: "8",
                                        6.1: "7",
                                        "6.0": "Vista",
                                        5.2: "XP",
                                        5.1: "XP",
                                        "5.0": "2000"
                                    }[e] || e
                                },
                                Android: function() {
                                    return o.replace(/^.*Android ([\d.]+);.*$/, "$1")
                                },
                                iOS: function() {
                                    return o.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
                                },
                                Debian: function() {
                                    return o.replace(/^.*Debian\/([\d.]+).*$/, "$1")
                                },
                                "Windows Phone": function() {
                                    return o.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
                                },
                                "Mac OS": function() {
                                    return o.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
                                },
                                WebOS: function() {
                                    return o.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
                                }
                            };
                            this.os.version = "",
                            m[this.os.name] && (this.os.version = m[this.os.name](),
                            this.os.version === o && (this.os.version = ""));
                            var y = {
                                Safari: function() {
                                    return o.replace(/^.*Version\/([\d.]+).*$/, "$1")
                                },
                                Chrome: function() {
                                    return o.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
                                },
                                IE: function() {
                                    return o.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
                                },
                                Edge: function() {
                                    return o.replace(/^.*Edge\/([\d.]+).*$/, "$1")
                                },
                                Firefox: function() {
                                    return o.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
                                },
                                "Firefox Focus": function() {
                                    return o.replace(/^.*Focus\/([\d.]+).*$/, "$1")
                                },
                                Chromium: function() {
                                    return o.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
                                },
                                Opera: function() {
                                    return o.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
                                },
                                Vivaldi: function() {
                                    return o.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
                                },
                                Yandex: function() {
                                    return o.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
                                },
                                Arora: function() {
                                    return o.replace(/^.*Arora\/([\d.]+).*$/, "$1")
                                },
                                Lunascape: function() {
                                    return o.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, "$1")
                                },
                                QupZilla: function() {
                                    return o.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, "$1")
                                },
                                "Coc Coc": function() {
                                    return o.replace(/^.*coc_coc_browser\/([\d.]+).*$/, "$1")
                                },
                                Kindle: function() {
                                    return o.replace(/^.*Version\/([\d.]+).*$/, "$1")
                                },
                                Iceweasel: function() {
                                    return o.replace(/^.*Iceweasel\/([\d.]+).*$/, "$1")
                                },
                                Konqueror: function() {
                                    return o.replace(/^.*Konqueror\/([\d.]+).*$/, "$1")
                                },
                                Iceape: function() {
                                    return o.replace(/^.*Iceape\/([\d.]+).*$/, "$1")
                                },
                                SeaMonkey: function() {
                                    return o.replace(/^.*SeaMonkey\/([\d.]+).*$/, "$1")
                                },
                                Epiphany: function() {
                                    return o.replace(/^.*Epiphany\/([\d.]+).*$/, "$1")
                                },
                                360: function() {
                                    return o.replace(/^.*QihooBrowser\/([\d.]+).*$/, "$1")
                                },
                                "360SE": function() {
                                    var e = o.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                                    return {
                                        63: "10.0",
                                        55: "9.1",
                                        45: "8.1",
                                        42: "8.0",
                                        31: "7.0",
                                        21: "6.3"
                                    }[e] || ""
                                },
                                "360EE": function() {
                                    var e = o.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                                    return {
                                        69: "11.0",
                                        63: "9.5",
                                        55: "9.0",
                                        50: "8.7",
                                        30: "7.5"
                                    }[e] || ""
                                },
                                Maxthon: function() {
                                    return o.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
                                },
                                QQBrowser: function() {
                                    return o.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
                                },
                                QQ: function() {
                                    return o.replace(/^.*QQ\/([\d.]+).*$/, "$1")
                                },
                                Baidu: function() {
                                    return o.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
                                },
                                UC: function() {
                                    return o.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
                                },
                                Sogou: function() {
                                    return o.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
                                },
                                LBBROWSER: function() {
                                    var e = o.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                                    return {
                                        57: "6.5",
                                        49: "6.0",
                                        46: "5.9",
                                        42: "5.3",
                                        39: "5.2",
                                        34: "5.0",
                                        29: "4.5",
                                        21: "4.0"
                                    }[e] || ""
                                },
                                "2345Explorer": function() {
                                    return o.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
                                },
                                TheWorld: function() {
                                    return o.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
                                },
                                XiaoMi: function() {
                                    return o.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
                                },
                                Quark: function() {
                                    return o.replace(/^.*Quark\/([\d.]+).*$/, "$1")
                                },
                                Qiyu: function() {
                                    return o.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
                                },
                                Wechat: function() {
                                    return o.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
                                },
                                Taobao: function() {
                                    return o.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
                                },
                                Alipay: function() {
                                    return o.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
                                },
                                Weibo: function() {
                                    return o.replace(/^.*weibo__([\d.]+).*$/, "$1")
                                },
                                Douban: function() {
                                    return o.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
                                },
                                Suning: function() {
                                    return o.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
                                },
                                iQiYi: function() {
                                    return o.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
                                },
                                PddBrowser: function() {
                                    return o.replace(/^.*Chrome\/([\d.]+).*$/, "$1")
                                }
                            };
                            this.browser.version = "",
                            y[this.browser.name] && (this.browser.version = y[this.browser.name](),
                            this.browser.version === o && (this.browser.version = "")),
                            Number.parseInt || (Number.parseInt = parseInt),
                                this.browser.major = this.browser.version && Number.parseInt(this.browser.version),
                                "Edge" === this.browser ? this.engine.name = "EdgeHTML" : "Chrome" === this.browser && parseInt(this.browser.version) > 27 ? this.engine.name = "Blink" : "Opera" === this.browser && parseInt(this.browser.version) > 12 ? this.engine.name = "Blink" : "Yandex" === this.browser && (this.engine.name = "Blink"),
                            new RegExp(/^.*Chrome\/([\d]+).*$/).test(o) && (this.browser.chromeVersion = o.match(/^.*Chrome\/([\d]+).*$/)[1])
                        }
                    }(o)
                }
                    .call(t, n, t, e)) || (e.exports = r)
            }("undefined" != typeof self ? self : void 0)
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.Network = t.IS_MOBILE = t.isMMSWeb = void 0,
                t.isProduction = function(e) {
                    return o(this, void 0, void 0, function() {
                        var t, n;
                        return i(this, function(r) {
                            if (t = "undefined" != typeof window,
                            !e && !t)
                                throw new Error("@msfe/env: node 使用必须传 hostname");
                            return n = e || (t ? window.location.hostname : ""),
                                [2, /\.pinduoduo.com$/.test(n) || /\.yangkeduo.com$/.test(n)]
                        })
                    })
                }
                ,
                t.getScope = function() {
                    return o(this, void 0, void 0, function() {
                        return i(this, function(e) {
                            throw new Error("")
                        })
                    })
                }
                ,
                t.getPlatform = function() {
                    return o(this, void 0, void 0, function() {
                        return i(this, function(e) {
                            return s(window.location.host) ? [2, "MMS-WEB"] : a ? [2, "MMS-MOBILE"] : [2, "unknown"]
                        })
                    })
                }
                ,
                t.getNetwork = function() {
                    return o(this, void 0, void 0, function() {
                        return i(this, function(e) {
                            return [2, u.UNKNOWN]
                        })
                    })
                }
            ;
            var r = n(9)
                , o = function(e, t, n, r) {
                return new (n || (n = Promise))(function(o, i) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function u(e) {
                            e.done ? o(e.value) : new n(function(t) {
                                    t(e.value)
                                }
                            ).then(a, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }
                )
            }
                , i = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }
                ),
                    i;
                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, i[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (i = [2 & i[0], o.value]),
                                        i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                        case 5:
                                            a.label++,
                                                r = i[1],
                                                i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1],
                                                    o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2],
                                                    a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e],
                                        r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }
                , a = function() {
                if ("undefined" == typeof window)
                    return {
                        IS_MOBILE: !1
                    };
                var e = ""
                    , t = "";
                try {
                    e = window.navigator.userAgent.toLowerCase(),
                        t = window.location.host
                } catch (e) {
                    return console.log(e),
                        {
                            IS_MOBILE: !1
                        }
                }
                return (0,
                    r.getMobileEnv)(e, t)
            }().IS_MOBILE;
            var s = t.isMMSWeb = function(e) {
                    return /^(mms|ims|ipp|dmp)\./.test(e)
                }
            ;
            t.IS_MOBILE = a;
            var u = t.Network = void 0;
            !function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN",
                    e[e.WIFI = 1] = "WIFI",
                    e[e["2G"] = 2] = "2G",
                    e[e["3G"] = 3] = "3G",
                    e[e["4G"] = 4] = "4G"
            }(u || (t.Network = u = {}))
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.getMobileEnv = function(e, t) {
                    var n = /pddmt_[^_]+_version/.test(e)
                        , r = /phh_[^_]+_version/.test(e)
                        , o = "mai.pinduoduo.com" === t || "testing.hutaojie.com" === t;
                    return {
                        IS_APP_B: n,
                        IS_APP_C: r,
                        IS_M_REMOTE: o,
                        IS_MOBILE: n || r || o
                    }
                }
        }
        , function(e, t, n) {
            "use strict";
            var r, o, i;
            "function" == typeof Symbol && Symbol.iterator;
            o = [n(11)],
            void 0 === (i = "function" == typeof (r = function(e) {
                    var t = /(^|@)\S+:\d+/
                        , n = /^\s*at .*(\S+:\d+|\(native\))/m
                        , r = /^(eval@)?(\[native code])?$/;
                    return {
                        parse: function(e) {
                            if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"])
                                return this.parseOpera(e);
                            if (e.stack && e.stack.match(n))
                                return this.parseV8OrIE(e);
                            if (e.stack)
                                return this.parseFFOrSafari(e);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(e) {
                            if (-1 === e.indexOf(":"))
                                return [e];
                            var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                            return [t[1], t[2] || void 0, t[3] || void 0]
                        },
                        parseV8OrIE: function(t) {
                            var r = t.stack.split("\n").filter(function(e) {
                                return !!e.match(n)
                            }, this);
                            return r.map(function(t) {
                                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                                var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(")
                                    , r = n.match(/ (\((.+):(\d+):(\d+)\)$)/)
                                    , o = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1)
                                    , i = this.extractLocation(r ? r[1] : o.pop())
                                    , a = o.join(" ") || void 0
                                    , s = ["eval", "<anonymous>"].indexOf(i[0]) > -1 ? void 0 : i[0];
                                return new e({
                                    functionName: a,
                                    fileName: s,
                                    lineNumber: i[1],
                                    columnNumber: i[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseFFOrSafari: function(t) {
                            var n = t.stack.split("\n").filter(function(e) {
                                return !e.match(r)
                            }, this);
                            return n.map(function(t) {
                                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
                                -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                                    return new e({
                                        functionName: t
                                    });
                                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/
                                    , r = t.match(n)
                                    , o = r && r[1] ? r[1] : void 0
                                    , i = this.extractLocation(t.replace(n, ""));
                                return new e({
                                    functionName: o,
                                    fileName: i[0],
                                    lineNumber: i[1],
                                    columnNumber: i[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseOpera: function(e) {
                            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                        },
                        parseOpera9: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], i = 2, a = r.length; i < a; i += 2) {
                                var s = n.exec(r[i]);
                                s && o.push(new e({
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera10: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], i = 0, a = r.length; i < a; i += 2) {
                                var s = n.exec(r[i]);
                                s && o.push(new e({
                                    functionName: s[3] || void 0,
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera11: function(n) {
                            var r = n.stack.split("\n").filter(function(e) {
                                return !!e.match(t) && !e.match(/^Error created at/)
                            }, this);
                            return r.map(function(t) {
                                var n, r = t.split("@"), o = this.extractLocation(r.pop()), i = r.shift() || "", a = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                i.match(/\(([^)]*)\)/) && (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                return new e({
                                    functionName: a,
                                    args: s,
                                    fileName: o[0],
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }, this)
                        }
                    }
                }
            ) ? r.apply(t, o) : r) || (e.exports = i)
        }
        , function(e, t, n) {
            "use strict";
            var r, o, i;
            "function" == typeof Symbol && Symbol.iterator;
            o = [],
            void 0 === (i = "function" == typeof (r = function() {
                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    function t(e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }
                    function n(e) {
                        return function() {
                            return this[e]
                        }
                    }
                    var r = ["isConstructor", "isEval", "isNative", "isToplevel"]
                        , o = ["columnNumber", "lineNumber"]
                        , i = ["fileName", "functionName", "source"]
                        , a = r.concat(o, i, ["args"]);
                    function s(e) {
                        if (e)
                            for (var n = 0; n < a.length; n++)
                                void 0 !== e[a[n]] && this["set" + t(a[n])](e[a[n]])
                    }
                    s.prototype = {
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(e) {
                            if ("[object Array]" !== Object.prototype.toString.call(e))
                                throw new TypeError("Args must be an Array");
                            this.args = e
                        },
                        getEvalOrigin: function() {
                            return this.evalOrigin
                        },
                        setEvalOrigin: function(e) {
                            if (e instanceof s)
                                this.evalOrigin = e;
                            else {
                                if (!(e instanceof Object))
                                    throw new TypeError("Eval Origin must be an Object or StackFrame");
                                this.evalOrigin = new s(e)
                            }
                        },
                        toString: function() {
                            var e = this.getFileName() || ""
                                , t = this.getLineNumber() || ""
                                , n = this.getColumnNumber() || ""
                                , r = this.getFunctionName() || "";
                            return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : r ? r + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
                        }
                    },
                        s.fromString = function(e) {
                            var t = e.indexOf("(")
                                , n = e.lastIndexOf(")")
                                , r = e.substring(0, t)
                                , o = e.substring(t + 1, n).split(",")
                                , i = e.substring(n + 1);
                            if (0 === i.indexOf("@"))
                                var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, "")
                                    , u = a[1]
                                    , c = a[2]
                                    , f = a[3];
                            return new s({
                                functionName: r,
                                args: o || void 0,
                                fileName: u,
                                lineNumber: c || void 0,
                                columnNumber: f || void 0
                            })
                        }
                    ;
                    for (var u = 0; u < r.length; u++)
                        s.prototype["get" + t(r[u])] = n(r[u]),
                            s.prototype["set" + t(r[u])] = function(e) {
                                return function(t) {
                                    this[e] = Boolean(t)
                                }
                            }(r[u]);
                    for (var c = 0; c < o.length; c++)
                        s.prototype["get" + t(o[c])] = n(o[c]),
                            s.prototype["set" + t(o[c])] = function(t) {
                                return function(n) {
                                    if (!e(n))
                                        throw new TypeError(t + " must be a Number");
                                    this[t] = Number(n)
                                }
                            }(o[c]);
                    for (var f = 0; f < i.length; f++)
                        s.prototype["get" + t(i[f])] = n(i[f]),
                            s.prototype["set" + t(i[f])] = function(e) {
                                return function(t) {
                                    this[e] = String(t)
                                }
                            }(i[f]);
                    return s
                }
            ) ? r.apply(t, o) : r) || (e.exports = i)
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                switch (Object.prototype.toString.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return e instanceof Error
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            n(14),
                e.exports = self.fetch.bind(self)
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.Headers = c,
                t.Request = v,
                t.Response = y,
                t.fetch = O;
            var r = {
                searchParams: "URLSearchParams"in self,
                iterable: "Symbol"in self && "iterator"in Symbol,
                blob: "FileReader"in self && "Blob"in self && function() {
                    try {
                        return new Blob,
                            !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData"in self,
                arrayBuffer: "ArrayBuffer"in self
            };
            if (r.arrayBuffer)
                var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                    , i = ArrayBuffer.isView || function(e) {
                        return e && o.indexOf(Object.prototype.toString.call(e)) > -1
                    }
                ;
            function a(e) {
                if ("string" != typeof e && (e = String(e)),
                    /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
                    throw new TypeError("Invalid character in header field name");
                return e.toLowerCase()
            }
            function s(e) {
                return "string" != typeof e && (e = String(e)),
                    e
            }
            function u(e) {
                var t = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return r.iterable && (t[Symbol.iterator] = function() {
                        return t
                    }
                ),
                    t
            }
            function c(e) {
                this.map = {},
                    e instanceof c ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
            }
            function f(e) {
                if (e.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0
            }
            function l(e) {
                return new Promise(function(t, n) {
                        e.onload = function() {
                            t(e.result)
                        }
                            ,
                            e.onerror = function() {
                                n(e.error)
                            }
                    }
                )
            }
            function d(e) {
                var t = new FileReader
                    , n = l(t);
                return t.readAsArrayBuffer(e),
                    n
            }
            function p(e) {
                if (e.slice)
                    return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)),
                    t.buffer
            }
            function h() {
                return this.bodyUsed = !1,
                    this._initBody = function(e) {
                        this._bodyInit = e,
                            e ? "string" == typeof e ? this._bodyText = e : r.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : r.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : r.arrayBuffer && r.blob && function(e) {
                                return e && DataView.prototype.isPrototypeOf(e)
                            }(e) ? (this._bodyArrayBuffer = p(e.buffer),
                                this._bodyInit = new Blob([this._bodyArrayBuffer])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e)) ? this._bodyArrayBuffer = p(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
                        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }
                    ,
                r.blob && (this.blob = function() {
                        var e = f(this);
                        if (e)
                            return e;
                        if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }
                        ,
                        this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
                        }
                ),
                    this.text = function() {
                        var e = f(this);
                        if (e)
                            return e;
                        if (this._bodyBlob)
                            return function(e) {
                                var t = new FileReader
                                    , n = l(t);
                                return t.readAsText(e),
                                    n
                            }(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
                                    n[r] = String.fromCharCode(t[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }
                    ,
                r.formData && (this.formData = function() {
                        return this.text().then(m)
                    }
                ),
                    this.json = function() {
                        return this.text().then(JSON.parse)
                    }
                    ,
                    this
            }
            c.prototype.append = function(e, t) {
                e = a(e),
                    t = s(t);
                var n = this.map[e];
                this.map[e] = n ? n + ", " + t : t
            }
                ,
                c.prototype.delete = function(e) {
                    delete this.map[a(e)]
                }
                ,
                c.prototype.get = function(e) {
                    return e = a(e),
                        this.has(e) ? this.map[e] : null
                }
                ,
                c.prototype.has = function(e) {
                    return this.map.hasOwnProperty(a(e))
                }
                ,
                c.prototype.set = function(e, t) {
                    this.map[a(e)] = s(t)
                }
                ,
                c.prototype.forEach = function(e, t) {
                    for (var n in this.map)
                        this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }
                ,
                c.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, n) {
                        e.push(n)
                    }),
                        u(e)
                }
                ,
                c.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }),
                        u(e)
                }
                ,
                c.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, n) {
                        e.push([n, t])
                    }),
                        u(e)
                }
                ,
            r.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
            var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function v(e, t) {
                var n = (t = t || {}).body;
                if (e instanceof v) {
                    if (e.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = e.url,
                        this.credentials = e.credentials,
                    t.headers || (this.headers = new c(e.headers)),
                        this.method = e.method,
                        this.mode = e.mode,
                        this.signal = e.signal,
                    n || null == e._bodyInit || (n = e._bodyInit,
                        e.bodyUsed = !0)
                } else
                    this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "same-origin",
                !t.headers && this.headers || (this.headers = new c(t.headers)),
                    this.method = function(e) {
                        var t = e.toUpperCase();
                        return g.indexOf(t) > -1 ? t : e
                    }(t.method || this.method || "GET"),
                    this.mode = t.mode || this.mode || null,
                    this.signal = t.signal || this.signal,
                    this.referrer = null,
                ("GET" === this.method || "HEAD" === this.method) && n)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n)
            }
            function m(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var n = e.split("=")
                            , r = n.shift().replace(/\+/g, " ")
                            , o = n.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(r), decodeURIComponent(o))
                    }
                }),
                    t
            }
            function y(e, t) {
                t || (t = {}),
                    this.type = "default",
                    this.status = void 0 === t.status ? 200 : t.status,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText"in t ? t.statusText : "OK",
                    this.headers = new c(t.headers),
                    this.url = t.url || "",
                    this._initBody(e)
            }
            v.prototype.clone = function() {
                return new v(this,{
                    body: this._bodyInit
                })
            }
                ,
                h.call(v.prototype),
                h.call(y.prototype),
                y.prototype.clone = function() {
                    return new y(this._bodyInit,{
                        status: this.status,
                        statusText: this.statusText,
                        headers: new c(this.headers),
                        url: this.url
                    })
                }
                ,
                y.error = function() {
                    var e = new y(null,{
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error",
                        e
                }
            ;
            var b = [301, 302, 303, 307, 308];
            y.redirect = function(e, t) {
                if (-1 === b.indexOf(t))
                    throw new RangeError("Invalid status code");
                return new y(null,{
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }
            ;
            var w = t.DOMException = self.DOMException;
            try {
                new w
            } catch (e) {
                t.DOMException = w = function(e, t) {
                    this.message = e,
                        this.name = t;
                    var n = Error(e);
                    this.stack = n.stack
                }
                    ,
                    w.prototype = Object.create(Error.prototype),
                    w.prototype.constructor = w
            }
            function O(e, t) {
                return new Promise(function(n, o) {
                        var i = new v(e,t);
                        if (i.signal && i.signal.aborted)
                            return o(new w("Aborted","AbortError"));
                        var a = new XMLHttpRequest;
                        function s() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: function(e) {
                                    var t = new c;
                                    return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                        var n = e.split(":")
                                            , r = n.shift().trim();
                                        if (r) {
                                            var o = n.join(":").trim();
                                            t.append(r, o)
                                        }
                                    }),
                                        t
                                }(a.getAllResponseHeaders() || "")
                            };
                            e.url = "responseURL"in a ? a.responseURL : e.headers.get("X-Request-URL");
                            var t = "response"in a ? a.response : a.responseText;
                            n(new y(t,e))
                        }
                            ,
                            a.onerror = function() {
                                o(new TypeError("Network request failed"))
                            }
                            ,
                            a.ontimeout = function() {
                                o(new TypeError("Network request failed"))
                            }
                            ,
                            a.onabort = function() {
                                o(new w("Aborted","AbortError"))
                            }
                            ,
                            a.open(i.method, i.url, !0),
                            "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1),
                        "responseType"in a && r.blob && (a.responseType = "blob"),
                            i.headers.forEach(function(e, t) {
                                a.setRequestHeader(t, e)
                            }),
                        i.signal && (i.signal.addEventListener("abort", s),
                                a.onreadystatechange = function() {
                                    4 === a.readyState && i.signal.removeEventListener("abort", s)
                                }
                        ),
                            a.send(void 0 === i._bodyInit ? null : i._bodyInit)
                    }
                )
            }
            O.polyfill = !0,
            self.fetch || (self.fetch = O,
                self.Headers = c,
                self.Request = v,
                self.Response = y)
        }
    ]).default
});
