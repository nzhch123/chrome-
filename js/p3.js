(window.webpackJsonp = window.webpackJsonp || []).push([[19], {
    "+15y": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC"),
            t.default = fetch
    },
    "1UXV": function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("ISwc"),
            o = i(n("rEeM"));
        t.del = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                r.wrapTask(o.default, "DELETE", e, t, n)
        }
    },
    "2Qsj": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("h7rg");
        t.get = i.get;
        var r = n("g178");
        t.post = r.post;
        var o = n("1UXV");
        t.del = o.del;
        var a = n("EeXR");
        t.put = a.put;
        var s = n("RwpE");
        t.fetch = s.fetch;
        var c = n("VuGI");
        t.sync = c.sync;
        var u = n("ISwc");
        t.redirectToLogin = u.redirectToLogin
    },
    "3IEO": function (e, t, n) {
        "use strict";
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC"),
            t.default = function (e, t, n) {
                return void 0 === e && (e = ""),
                void 0 === n && (n = {}),
                    fetch(e, i({
                        method: "POST",
                        body: t
                    }, n))
            }
    },
    "5u7Q": function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(n("ILi6")),
            o = n("WYEG"),
            a = {
                dataType: "json"
            };
        t.put = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = a),
                n = Object.assign({}, a, n),
                o.wrapTask(r.default, "PUT", e, t, n)
        }
    },
    "8QOX": function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        e.done ? r(e.value) : new n((function (t) {
                            t(e.value)
                        })).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            r = this && this.__generator || function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            },
            o = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("oVbL"),
            s = n("KDNj"),
            c = n("cyQr"),
            u = n("vYes");
        t.default = function (e, n, c, u) {
            return void 0 === e && (e = ""),
            void 0 === c && (c = {}),
            void 0 === u && (u = ""),
                i(o, void 0, void 0, (function () {
                    var i,
                        o;
                    return r(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                i = n || {},
                                    r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]),
                                    [4, s.getRiskInfo()];
                            case 2:
                                return o = r.sent(),
                                    [3, 4];
                            case 3:
                                return r.sent(),
                                    [3, 4];
                            case 4:
                                return [4, s.isCrawlerInfoRequired(e)];
                            case 5:
                                return r.sent() && (i = Object.assign({}, i, {
                                    crawlerInfo: o
                                })),
                                1 === c.debug && (i.debug = 1),
                                    e = a.getURL(e),
                                "json" === (c = t.getOptHeader(c, e, o || "getRisckInfoError")).dataType && ("GET" === u || "DELETE" === u || (i = JSON.stringify(i))),
                                    [2, {
                                        url: e,
                                        params: i,
                                        options: c
                                    }
                                    ]
                        }
                    }))
                }))
        },
            t.getOptHeader = function (e, t, n) {
                var i = u.getCaptchaVerifyAuthToken();
                return "file" !== (e = Object.assign({}, c.defaultOptions, e)).dataType && "formData" !== e.dataType && (e.headers = Object.assign({}, c.defaultHeaders, e.headers)),
                    e.headers = e.headers || {},
                a.shouldAddAntiHeader(t) && (e.headers["Anti-Content"] = n),
                i && (e.headers.VerifyAuthToken = i),
                    e
            }
    },
    "9Ine": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("JjDG");
        t.fetch = i.default
    },
    BD9u: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC");
        var i = n("oVbL");
        t.default = function (e, t, n) {
            return void 0 === e && (e = ""),
            void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                n = Object.assign({
                    method: "GET"
                }, n),
                fetch(i.composeUrl(e, t), n)
        }
    },
    CO0x: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        })),
            n.d(t, "b", (function () {
                return c
            }));
        var i = n("SsX+");
        function r() {
            var e = {};
            return e.promise = new Promise((function (t, n) {
                e.resolve = t,
                    e.reject = n
            })),
                e
        }
        var o = function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        e.done ? r(e.value) : new n((function (t) {
                            t(e.value)
                        })).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            a = function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            };
        function s(e) {
            return o(this, void 0, void 0, (function () {
                return a(this, (function (t) {
                    return [2, Object(i.b)("/earth/api/cathet/hints/click", {
                        source: 1,
                        cathetId: e
                    })]
                }))
            }))
        }
        function c(e) {
            return o(this, void 0, void 0, (function () {
                return a(this, (function (t) {
                    return [2, Object(i.b)("/earth/api/cathet/hints/query", {
                        source: 1,
                        cathetIds: e
                    })]
                }))
            }))
        }
        !function (e, t) {
            void 0 === t && (t = 100);
            var n = 0,
                i = r()
        }
        ((function () {
            return o(this, void 0, void 0, (function () {
                return a(this, (function (e) {
                    return [2, Object(i.b)("/earth/api/cathet/hints/queryAll", {
                        source: 1
                    }).then((function (e) {
                        return e
                    }))]
                }))
            }))
        }), 500)
    },
    "DLo/": function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("WYEG"),
            o = i(n("BD9u"));
        t.get = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                r.wrapTask(o.default, "GET", e, t, n)
        }
    },
    EI3B: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("wx14"),
            r = n("cDcd"),
            o = n.n(r);
        function a(e) {
            var t = e.item,
                n = e.onClick,
                i = t.name,
                o = t.url,
                a = t.active,
                s = void 0 !== a && a,
                c = t.alertNum,
                u = void 0 === c ? 0 : c,
                l = t.featureHint,
                d = t.recommendationHint,
                f = u > 99 ? "99+" : u,
                p = "nav-item" + (s ? " active" : "");
            return r.createElement("li", {
                className: p
            }, r.createElement("a", {
                onClick: function (e) {
                    e.preventDefault(),
                    n && n(t, e)
                },
                href: o
            }, r.createElement("span", {
                className: "nav-item-text",
                title: i.length > 6 ? i : void 0
            }, i, u > 0 && r.createElement("span", {
                className: "nav-item-tag alerts-num-tag " + (u > 9 ? "alerts-num-tag--large" : "")
            }, r.createElement("span", null, f)), l && r.createElement("span", {
                className: "nav-item-tag new-feature-tag"
            }), d && r.createElement("span", {
                className: "nav-item-tag red-dot-tag"
            }))))
        }
        function s(e, t) {
            return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }
        var c = n("faye");
        function u() {
            return (u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }
        function l(e, t) {
            e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                e.__proto__ = t
        }
        function d(e, t) {
            if (null == e)
                return {};
            var n,
                i,
                r = {},
                o = Object.keys(e);
            for (i = 0; i < o.length; i++)
                n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }
        var f = !1,
            p = Object(r.createContext)(null),
            h = "unmounted",
            m = "exited",
            v = "entering",
            w = "entered",
            y = function () {},
            g = function (e) {
                function t(t, n) {
                    var i;
                    i = e.call(this, t, n) || this;
                    var r,
                        o = n && !n.isMounting ? t.enter : t.appear;
                    return i.appearStatus = null,
                        t.in ? o ? (r = m, i.appearStatus = v) : r = w : r = t.unmountOnExit || t.mountOnEnter ? h : m,
                        i.state = {
                            status: r
                        },
                        i.nextCallback = null,
                        i
                }
                l(t, e),
                    t.getDerivedStateFromProps = function (e, t) {
                        return e.in && t.status === h ? {
                                status: m
                            }
                            : null
                    };
                var n = t.prototype;
                return n.componentDidMount = function () {
                    this.updateStatus(!0, this.appearStatus)
                },
                    n.componentDidUpdate = function (e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== v && n !== w && (t = v) : n !== v && n !== w || (t = "exiting")
                        }
                        this.updateStatus(!1, t)
                    },
                    n.componentWillUnmount = function () {
                        this.cancelNextCallback()
                    },
                    n.getTimeouts = function () {
                        var e,
                            t,
                            n,
                            i = this.props.timeout;
                        return e = t = n = i,
                        null != i && "number" !== typeof i && (e = i.exit, t = i.enter, n = void 0 !== i.appear ? i.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    },
                    n.updateStatus = function (e, t) {
                        if (void 0 === e && (e = !1), null !== t) {
                            this.cancelNextCallback();
                            var n = Object(c.findDOMNode)(this);
                            t === v ? this.performEnter(n, e) : this.performExit(n)
                        } else
                            this.props.unmountOnExit && this.state.status === m && this.setState({
                                status: h
                            })
                    },
                    n.performEnter = function (e, t) {
                        var n = this,
                            i = this.props,
                            r = i.enter,
                            o = i.onEnter,
                            a = this.context ? this.context.isMounting : t,
                            s = this.getTimeouts(),
                            c = a ? s.appear : s.enter;
                        !t && !r || f ? this.safeSetState({
                            status: w
                        }, (function () {
                            var t,
                                i;
                            null === (t = (i = n.props).onEntered) || void 0 === t || t.call(i, e)
                        })) : (null === o || void 0 === o || o(e, a), this.safeSetState({
                            status: v
                        }, (function () {
                            var t,
                                i;
                            null === (t = (i = n.props).onEntering) || void 0 === t || t.call(i, e, a),
                                n.onTransitionEnd(e, c, (function () {
                                    n.safeSetState({
                                        status: w
                                    }, (function () {
                                        var t,
                                            i;
                                        null === (t = (i = n.props).onEntered) || void 0 === t || t.call(i, e, a)
                                    }))
                                }))
                        })))
                    },
                    n.performExit = function (e) {
                        var t,
                            n,
                            i = this,
                            r = this.props.exit,
                            o = this.getTimeouts();
                        r && !f ? (null === (t = (n = this.props).onExit) || void 0 === t || t.call(n, e), this.safeSetState({
                            status: "exiting"
                        }, (function () {
                            var t,
                                n;
                            null === (t = (n = i.props).onExiting) || void 0 === t || t.call(n, e),
                                i.onTransitionEnd(e, o.exit, (function () {
                                    i.safeSetState({
                                        status: m
                                    }, (function () {
                                        var t,
                                            n;
                                        null === (t = (n = i.props).onExited) || void 0 === t || t.call(n, e)
                                    }))
                                }))
                        }))) : this.safeSetState({
                            status: m
                        }, (function () {
                            var t,
                                n;
                            null === (t = (n = i.props).onExited) || void 0 === t || t.call(n, e)
                        }))
                    },
                    n.cancelNextCallback = function () {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    },
                    n.safeSetState = function (e, t) {
                        t = this.setNextCallback(t),
                            this.setState(e, t)
                    },
                    n.setNextCallback = function (e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function (i) {
                            n && (n = !1, t.nextCallback = null, e(i))
                        },
                            this.nextCallback.cancel = function () {
                                n = !1
                            },
                            this.nextCallback
                    },
                    n.onTransitionEnd = function (e, t, n) {
                        this.setNextCallback(n);
                        var i = null == t && !this.props.addEndListener;
                        e && !i ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
                    },
                    n.render = function () {
                        var e = this.state.status;
                        if (e === h)
                            return null;
                        var t = this.props,
                            n = t.children,
                            i = d(t, ["children"]);
                        if (delete i.in, delete i.mountOnEnter, delete i.unmountOnExit, delete i.appear, delete i.enter, delete i.exit, delete i.timeout, delete i.addEndListener, delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, "function" === typeof n)
                            return Object(r.createElement)(p.Provider, {
                                value: null
                            }, n(e, i));
                        var o = r.Children.only(n);
                        return (Object(r.createElement)(p.Provider, {
                            value: null
                        }, Object(r.cloneElement)(o, i)))
                    },
                    t
            }
            (r.Component);
        g.contextType = p,
            g.defaultProps = {
                in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: y,
                onEntering: y,
                onEntered: y,
                onExit: y,
                onExiting: y,
                onExited: y
            },
            g.UNMOUNTED = h,
            g.EXITED = m,
            g.ENTERING = v,
            g.ENTERED = w,
            g.EXITING = "exiting";
        var b,
            _,
            O = function (e, t) {
                return e && t && t.split(" ").forEach((function (t) {
                    return i = t,
                        void((n = e).classList ? n.classList.add(i) : function (e, t) {
                            return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                        }
                        (n, i) || ("string" === typeof n.className ? n.className = n.className + " " + i : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + i)));
                    var n,
                        i
                }))
            },
            E = function (e, t) {
                return e && t && t.split(" ").forEach((function (t) {
                    return i = t,
                        void((n = e).classList ? n.classList.remove(i) : "string" === typeof n.className ? n.className = s(n.className, i) : n.setAttribute("class", s(n.className && n.className.baseVal || "", i)));
                    var n,
                        i
                }))
            },
            x = r.useRef;
        function C(e) {
            var t = e.classNames,
                n = void 0 === t ? "" : t,
                i = e.onEnter,
                o = e.onEntering,
                a = e.onEntered,
                s = e.onExit,
                c = e.onExiting,
                u = e.onExited,
                l = d(e, ["classNames", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]),
                f = x({
                    appear: {},
                    enter: {},
                    exit: {}
                }),
                p = function (e) {
                    var t = "string" === typeof n,
                        i = t ? "" + (t && n ? n + "-" : "") + e : n[e];
                    return {
                        baseClassName: i,
                        activeClassName: t ? i + "-active" : n[e + "Active"],
                        doneClassName: t ? i + "-done" : n[e + "Done"]
                    }
                },
                h = function (e, t, n) {
                    var i = p(t)[n + "ClassName"],
                        r = p("enter").doneClassName;
                    "appear" === t && "done" === n && r && (i += " " + r),
                    i && (f.current[t][n] = i, O(e, i))
                },
                m = function (e, t) {
                    var n = f.current[t],
                        i = n.base,
                        r = n.active,
                        o = n.done;
                    f.current[t] = {},
                    i && E(e, i),
                    r && E(e, r),
                    o && E(e, o)
                };
            return Object(r.createElement)(g, Object.assign({}, l, {
                onEnter: function (e, t) {
                    m(e, "exit"),
                        h(e, t ? "appear" : "enter", "base"),
                    i && i(e, t)
                },
                onEntered: function (e, t) {
                    var n = t ? "appear" : "enter";
                    m(e, n),
                        h(e, n, "done"),
                    a && a(e, t)
                },
                onEntering: function (e, t) {
                    h(e, t ? "appear" : "enter", "active"),
                    o && o(e, t)
                },
                onExit: function (e) {
                    m(e, "appear"),
                        m(e, "enter"),
                        h(e, "exit", "base"),
                    s && s(e)
                },
                onExiting: function (e) {
                    h(e, "exit", "active"),
                    c && c(e)
                },
                onExited: function (e) {
                    m(e, "exit"),
                        h(e, "exit", "done"),
                    u && u(e)
                }
            }))
        }
        var k = "out-in",
            N = "in-out",
            T = function (e, t, n) {
                return function () {
                    var i;
                    e.props[t] && (i = e.props)[t].apply(i, arguments),
                        n()
                }
            },
            j = ((b = {})[k] = function (e) {
                var t = e.current,
                    n = e.changeState;
                return Object(r.cloneElement)(t, {
                    in: !1,
                    onExited: T(t, "onExited", (function () {
                        n(v, null)
                    }))
                })
            }, b[N] = function (e) {
                var t = e.current,
                    n = e.changeState,
                    i = e.children;
                return [t, Object(r.cloneElement)(i, {
                    in: !0,
                    onEntered: T(i, "onEntered", (function () {
                        n(v)
                    }))
                })]
            }, b),
            I = ((_ = {})[k] = function (e) {
                var t = e.children,
                    n = e.changeState;
                return Object(r.cloneElement)(t, {
                    in: !0,
                    onEntered: T(t, "onEntered", (function () {
                        n(w, Object(r.cloneElement)(t, {
                            in: !0
                        }))
                    }))
                })
            }, _[N] = function (e) {
                var t = e.current,
                    n = e.children,
                    i = e.changeState;
                return [Object(r.cloneElement)(t, {
                    in: !1,
                    onExited: T(t, "onExited", (function () {
                        i(w, Object(r.cloneElement)(n, {
                            in: !0
                        }))
                    }))
                }), Object(r.cloneElement)(n, {
                    in: !0
                })]
            }, _);
        function L(e, t) {
            var n = Object.create(null);
            return e && r.Children.map(e, (function (e) {
                return e
            })).forEach((function (e) {
                n[e.key] = function (e) {
                    return t && Object(r.isValidElement)(e) ? t(e) : e
                }
                (e)
            })),
                n
        }
        function R(e, t, n) {
            return null != n[t] ? n[t] : e.props[t]
        }
        function S(e, t, n) {
            var i = L(e.children),
                o = function (e, t) {
                    function n(n) {
                        return n in t ? t[n] : e[n]
                    }
                    e = e || {},
                        t = t || {};
                    var i,
                        r = Object.create(null),
                        o = [];
                    for (var a in e)
                        a in t ? o.length && (r[a] = o, o = []) : o.push(a);
                    var s = {};
                    for (var c in t) {
                        if (r[c])
                            for (i = 0; i < r[c].length; i++) {
                                var u = r[c][i];
                                s[r[c][i]] = n(u)
                            }
                        s[c] = n(c)
                    }
                    for (i = 0; i < o.length; i++)
                        s[o[i]] = n(o[i]);
                    return s
                }
                (t, i);
            return Object.keys(o).forEach((function (a) {
                var s = o[a];
                if (Object(r.isValidElement)(s)) {
                    var c = a in t,
                        u = a in i,
                        l = t[a],
                        d = Object(r.isValidElement)(l) && !l.props.in;
                    !u || c && !d ? u || !c || d ? u && c && Object(r.isValidElement)(l) && (o[a] = Object(r.cloneElement)(s, {
                        onExited: n.bind(null, s),
                        in: l.props.in,
                        exit: R(s, "exit", e),
                        enter: R(s, "enter", e)
                    })) : o[a] = Object(r.cloneElement)(s, {
                        in: !1
                    }) : o[a] = Object(r.cloneElement)(s, {
                        onExited: n.bind(null, s),
                        in: !0,
                        exit: R(s, "exit", e),
                        enter: R(s, "enter", e)
                    })
                }
            })),
                o
        }
        (function (e) {
            function t() {
                var t;
                return (t = e.apply(this, arguments) || this).state = {
                    status: w,
                    current: null
                },
                    t.appeared = !1,
                    t.changeState = function (e, n) {
                        void 0 === n && (n = t.state.current),
                            t.setState({
                                status: e,
                                current: n
                            })
                    },
                    t
            }
            l(t, e);
            var n = t.prototype;
            return n.componentDidMount = function () {
                this.appeared = !0
            },
                t.getDerivedStateFromProps = function (e, t) {
                    return null == e.children ? {
                            current: null
                        }
                        : t.status === v && e.mode === N ? {
                                status: v
                            }
                            : !t.current || (n = t.current, i = e.children, n === i || Object(r.isValidElement)(n) && Object(r.isValidElement)(i) && null != n.key && n.key === i.key) ? {
                                    current: Object(r.cloneElement)(e.children, {
                                        in: !0
                                    })
                                }
                                : {
                                    status: "exiting"
                                };
                    var n,
                        i
                },
                n.render = function () {
                    var e,
                        t = this.props,
                        n = t.children,
                        i = t.mode,
                        o = void 0 === i ? k : i,
                        a = this.state,
                        s = a.status,
                        c = a.current,
                        u = {
                            children: n,
                            current: c,
                            changeState: this.changeState,
                            status: s
                        };
                    switch (s) {
                        case v:
                            e = I[o](u);
                            break;
                        case "exiting":
                            e = j[o](u);
                            break;
                        case w:
                            e = c
                    }
                    return Object(r.createElement)(p.Provider, {
                        value: {
                            isMounting: !this.appeared
                        }
                    }, e)
                },
                t
        }
        (r.Component)).defaultProps = {
            mode: k
        };
        var P = Object.values || function (e) {
            return Object.keys(e).map((function (t) {
                return e[t]
            }))
        };
        function V(e) {
            var t = e.itemList,
                n = void 0 === t ? [] : t,
                i = e.onClickItem,
                o = e.closed,
                s = void 0 !== o && o,
                c = r.useRef(null);
            return r.useEffect((function () {
                if (c.current && !s) {
                    c.current.style.height = "";
                    var e = c.current.getBoundingClientRect();
                    c.current.style.height = e.height + "px"
                }
            }), [s, n.length]),
                r.createElement(C, {
                    unmountOnExit: !0,
                    in: !s,
                    timeout: 200,
                    classNames: "pdd-left-nav-slide"
                }, r.createElement("ul", {
                    className: "nav-item-group-content",
                    ref: c
                }, n.map((function (e) {
                    return r.createElement(a, {
                        key: e.id,
                        item: e,
                        onClick: i
                    })
                }))))
        }
        function M(e) {
            var t = e.group,
                n = e.onClick,
                i = e.onClickItem,
                r = t.name,
                a = t.icon,
                s = t.closed,
                c = void 0 !== s && s,
                u = t.children;
            return o.a.createElement("div", {
                className: "nav-item-group"
            }, o.a.createElement("div", {
                className: "nav-item-group-title",
                onClick: function (t) {
                    n && n(e.group)
                }
            }, o.a.createElement("img", {
                src: a,
                width: "16",
                height: "16",
                alt: r
            }), o.a.createElement("span", null, r), o.a.createElement("div", {
                className: c ? "pdd-left-nav-arrow-collapsed" : "pdd-left-nav-arrow-expanded"
            })), o.a.createElement(V, {
                closed: c,
                onClickItem: i,
                itemList: u
            }))
        }
        (function (e) {
            function t(t, n) {
                var i;
                (i = e.call(this, t, n) || this).mounted = !1;
                var r = i.handleExited.bind(function (e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
                (i));
                return i.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: r,
                    firstRender: !0
                },
                    i
            }
            l(t, e);
            var n = t.prototype;
            return n.componentDidMount = function () {
                this.mounted = !0,
                    this.setState({
                        contextValue: {
                            isMounting: !1
                        }
                    })
            },
                n.componentWillUnmount = function () {
                    this.mounted = !1
                },
                t.getDerivedStateFromProps = function (e, t) {
                    var n,
                        i,
                        o = t.children,
                        a = t.handleExited;
                    return {
                        children: t.firstRender ? (n = e, i = a, L(n.children, (function (e) {
                            return Object(r.cloneElement)(e, {
                                onExited: i.bind(null, e),
                                in: !0,
                                appear: R(e, "appear", n),
                                enter: R(e, "enter", n),
                                exit: R(e, "exit", n)
                            })
                        }))) : S(e, o, a),
                        firstRender: !1
                    }
                },
                n.handleExited = function (e, t) {
                    var n = L(this.props.children);
                    e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function (t) {
                        var n = u({}, t.children);
                        return delete n[e.key], {
                            children: n
                        }
                    })))
                },
                n.render = function () {
                    var e = this.props,
                        t = e.component,
                        n = e.childFactory,
                        i = d(e, ["component", "childFactory"]),
                        o = this.state.contextValue,
                        a = P(this.state.children).map(n);
                    return delete i.appear,
                        delete i.enter,
                        delete i.exit,
                        null === t ? Object(r.createElement)(p.Provider, {
                            value: o
                        }, a) : Object(r.createElement)(p.Provider, {
                            value: o
                        }, Object(r.createElement)(t, Object.assign({}, i), a))
                },
                t
        }
        (r.Component)).defaultProps = {
            component: "div",
            childFactory: function (e) {
                return e
            }
        };
        n("nWbA");
        function A() {}
        function D(e) {
            var t = e.groups,
                n = e.home,
                i = e.showHome,
                r = e.onClickGroup,
                s = void 0 === r ? A : r,
                c = e.onClickItem,
                u = void 0 === c ? A : c,
                l = e.onMouseEnter,
                d = void 0 === l ? A : l;
            return o.a.createElement("div", {
                className: "__msfe__side-nav side-nav",
                onMouseEnter: d
            }, i && o.a.createElement("div", {
                className: "nav-item-group"
            }, o.a.createElement(a, {
                item: n,
                onClick: u
            })), t.map((function (e) {
                return o.a.createElement(M, {
                    key: e.id,
                    group: e,
                    onClick: s,
                    onClickItem: u
                })
            })))
        }
        var W,
            U = n("CO0x"),
            H = n("wC9B"),
            G = "MMS_NAV",
            F = "EXTENSIONONLY",
            K = "mms_b84d1837",
            J = {
                id: 1101,
                name: "\u540e\u53f0\u9996\u9875",
                url: "/home/",
                activeList: ["^/index", "^/home"],
                active: !1
            },
            $ = {
                groups: [{
                    id: 100,
                    name: "\u53d1\u8d27\u7ba1\u7406",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/e28bf79a-91ca-4101-94d7-c598ffd0f523.png",
                    children: [{
                        id: 101,
                        url: "/orders/list",
                        name: "\u8ba2\u5355\u67e5\u8be2",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/orders/search/index", "/orders/wechat/push", "/orders/list"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 102,
                        url: "/express/batch",
                        name: "\u53d1\u8d27\u4e2d\u5fc3",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/orders/complaint", "/orders/express", "/express/complain", "/express/reminder", "^/express/(?!(package|store/*))"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 103,
                        url: "/orders/order/carriage/list",
                        name: "\u7269\u6d41\u5de5\u5177",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/orders/order/carriage/list", "/orders/carriage/edit", "/orders/carriage/detail", "/orders/delivery_address_management", "/order/carriage", "/order/sendInstall"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 104,
                        url: "/orders/order/logisticsSurvey",
                        name: "\u7269\u6d41\u6982\u51b5",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/orders/order/logisticsSurvey"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 105,
                        url: "/express/package",
                        name: "\u5305\u88f9\u4e2d\u5fc3",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/orders/order/packageCenter", "/express/package"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 110,
                        url: "/orders/medicine",
                        name: "\u5904\u65b9\u5355\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/orders/medicine/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 1100,
                    name: "\u4ed3\u914d\u7ba1\u7406",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/44d3b26c-3e87-4c27-b98b-dd21841f8783.png",
                    children: [{
                        id: 1101,
                        url: "/express/store/book",
                        name: "\u4ed3\u914d\u8ba2\u9605",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/book", "^/express/store/book/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1102,
                        url: "/express/store/order",
                        name: "\u4ed3\u914d\u8ba2\u5355",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/order", "^/express/store/order/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1103,
                        url: "/express/store/manage",
                        name: "\u4ed3\u5e93\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/manage", "^/express/store/manage/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1104,
                        url: "/express/store/ware",
                        name: "\u8d27\u54c1\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/ware", "^/express/store/ware/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1105,
                        url: "/express/store/stock",
                        name: "\u5e93\u5b58\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/stock", "^/express/store/stock/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1106,
                        url: "/express/store/search",
                        name: "\u5e93\u5b58\u67e5\u8be2",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/search", "^/express/store/search/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1108,
                        url: "/express/store/own",
                        name: "\u81ea\u6709\u4ed3\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/own", "^/express/store/own/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1109,
                        url: "/express/store/service",
                        name: "\u670d\u52a1\u4e2d\u5fc3",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/express/store/service", "^/express/store/service/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 200,
                    name: "\u552e\u540e\u7ba1\u7406",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/f08bfc37-4ec9-4a94-8cee-4f12ce1e3041.png",
                    children: [{
                        id: 201,
                        url: "/aftersales/aftersale_list",
                        name: "\u9000\u6b3e/\u552e\u540e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/order.html#/aftersales/jvzheng", "/aftersales/merchant_appeal", "/order.html#/aftersales/goods_refund_status/index"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 203,
                        url: "/aftersales/setup",
                        name: "\u552e\u540e\u8bbe\u7f6e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 204,
                        url: "/aftersales/work_order/list",
                        name: "\u5de5\u5355\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/aftersales/work_order"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 205,
                        url: "/aftersales/micro_transfer",
                        name: "\u5c0f\u989d\u6253\u6b3e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/orders/aftersale/micro_transfer", "/aftersales/micro_transfer"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 206,
                        url: "/aftersales/return_freight?refer_source=sidebar",
                        name: "\u9000\u8d27\u5305\u8fd0\u8d39",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/aftersales/return_freight"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 207,
                        url: "/aftersales/aftersale_auto/home",
                        name: "\u552e\u540e\u5c0f\u52a9\u624b",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/aftersales/aftersale_auto"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 208,
                        url: "/aftersales/speed_refund",
                        name: "\u6781\u901f\u9000\u6b3e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/aftersales/speed_refund"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 300,
                    name: "\u5546\u54c1\u7ba1\u7406",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/24c8b43e-37b1-4967-bdec-d6aabfaf3935.png",
                    children: [{
                        id: 301,
                        url: "/goods/category",
                        name: "\u53d1\u5e03\u65b0\u5546\u54c1",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !0,
                        activeList: ["/goods/category", "/goods/goods_add/index", "/goods/goods_add/success"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 302,
                        url: "/goods/goods_list",
                        name: "\u5546\u54c1\u5217\u8868",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/goods/goods_list$", "/goods/goods_draft", "/goods/goods_recycle", "/goods/goods_record", "/goods/goods_list/change_goods_sku", "/goods/goods_list/virtual_detail", "/goods/goods_detail*", "/goods/goods_return_detail*", "/goods/violation_list", "/goods/violation_detail*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 306,
                        url: "/search/good_inspect_v2/inspect_start",
                        name: "\u5546\u54c1\u4f53\u68c0",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["^/search/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 308,
                        url: "/goods/goods_materials",
                        name: "\u5546\u54c1\u7d20\u6750",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 303,
                        url: "/goods/quality",
                        name: "\u54c1\u8d28\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/goods/quality"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 304,
                        url: "/goods/evaluation/index",
                        name: "\u8bc4\u4ef7\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/goods/evaluation/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 305,
                        url: "/goods/goods_categories_home",
                        name: "\u5e97\u94fa\u63a8\u8350",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/goods/up", "/decoration/categories*", "/decoration/goods/add/*", "/goods/goods_categories_home*", "/goods/goods_categories_goods_list*", "/goods/goods_categories_goods_added*", "/goods/recommend"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 310,
                        url: "/goods/gold_manager",
                        name: "\u91d1\u4ef7\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 309,
                        url: "/goods/question",
                        name: "\u5546\u5bb6\u5ba2\u670d\u7b54\u7591",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 600,
                    name: "\u5e97\u94fa\u8425\u9500",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/7b42dd53-b101-4b7b-aba8-99544c19e2e4.png",
                    children: [{
                        id: 601,
                        url: "/act/index",
                        name: "\u8425\u9500\u6d3b\u52a8",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/activity/resource/promotion_activity", "/activity/resource/entry", "/activity/resource/activity_detail/", "/activity/resource/attended_list", "/activity/resource_niche/apply/index", "/act/index", "/act/detail", "/act/sign_detail", "/act/my_join_activity", "/act/register_record"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 602,
                        url: "/act/act_bidding_new/home",
                        name: "\u7ade\u4ef7\u6d3b\u52a8",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/activity/NewBidding/", "^/act/act_bidding_new/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 606,
                        url: "/act/act_call_bidding/home",
                        name: "\u54c1\u8d28\u62db\u6807",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["^/act/act_call_bidding/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 604,
                        url: "/tool",
                        name: "\u8425\u9500\u5de5\u5177",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^\\/tool(?!\\/(?:cashback|sms|shop)(?:\\/|$))(\\/\\w+)*$"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 603,
                        url: "/tool/sms",
                        name: "\u77ed\u4fe1\u8425\u9500",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/tool/sms", "^/tool/sms/*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 605,
                        url: "/tool/cashback",
                        name: "\u62fc\u5355\u8fd4\u73b0",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 607,
                        url: "/decoration/home",
                        name: "\u5e97\u94fa\u88c5\u4fee",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["/decoration/home*", "/decoration/topic*", "/decoration/guide", "/decoration/notification"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 1e3,
                    name: "\u6570\u636e\u4e2d\u5fc3",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/e3b5368b-775c-43ee-8337-d537b7386318.png",
                    children: [{
                        id: 1006,
                        url: "/sycm/evaluation",
                        name: "\u7ecf\u8425\u603b\u89c8",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/sycm/evaluation*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1001,
                        url: "/sycm/goods_effect",
                        name: "\u5546\u54c1\u6570\u636e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/sycm/goods_effect*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1002,
                        url: "/sycm/stores_data",
                        name: "\u4ea4\u6613\u6570\u636e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/sycm/stores_data*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1003,
                        url: "/sycm/goods_quality",
                        name: "\u670d\u52a1\u6570\u636e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/sycm/goods_quality*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1004,
                        url: "/sycm/search_data",
                        name: "\u6d41\u91cf\u6570\u636e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/sycm/search_data*"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 400,
                    name: "\u8d26\u6237\u8d44\u91d1",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/95b94fb8-77ec-4ac3-adef-8d3f29fdd1d0.png",
                    children: [{
                        id: 401,
                        url: "/finance/balance",
                        name: "\u8d27\u6b3e\u8d26\u6237",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/finance/balance", "/FundManagement/withdraw/index", "/recharge/balance", "/FundManagement/SelectRechargeType/SelectRechargeType", "/FundManagement/AccountWithdraw2", "/FundManagement/AccountWithdraw2/edit_account", "/FundManagement/activity_deposit/select_deposit_way", "/FundManagement/activity_deposit/input_amount"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 402,
                        url: "/finance/payment-bills/index",
                        name: "\u8d27\u6b3e\u5bf9\u8d26\u5355",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/finance/payment-bills/index", "/finance/payment-bills/export-history"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 403,
                        url: "/finance/deposit",
                        name: "\u4fdd\u8bc1\u91d1",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/finance/deposit", "/recharge/activity_bond", "/FundManagement/eReceipts", "/Fundmanagement/withdraw_deposit/index", "/recharge/enter_deposit", "FundManagement/activity_deposit/gear_deposit/offline_pay/index"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 404,
                        url: "/finance/invoice/index",
                        name: "\u53d1\u7968\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/finance/invoice/index", "/finance/invoice/invoice-info-manage", "/finance/invoice/questions"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 405,
                        url: "/pg/deduciton_detail/record",
                        name: "\u8d27\u6b3e\u6263\u6b3e\u660e\u7ec6",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/FundManagement/Chargebacks/withhold", "/FundManagement/Chargebacks/shipping", "/pg/deduciton_detail/stock"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 406,
                        url: "/pg/restrict_list",
                        name: "\u8d44\u91d1\u9650\u5236",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/mall/restrict_money", "/mall/restrict_detail", "/pg/restrict_list", "/pg/restrict_detail"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 500,
                    name: "\u591a\u591a\u5ba2\u670d",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/fb5d7709-f9f3-4e9f-acfb-69d918868549.png",
                    children: [{
                        id: 504,
                        url: "/chat-service/setting",
                        name: "\u6d88\u606f\u8bbe\u7f6e",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["^/chat-service/setting", "^/Pdd.html#/chats/settings/index"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 502,
                        url: "/chat-service/status",
                        name: "\u5728\u7ebf\u72b6\u6001",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/chat-service/status", "^/Pdd.html#/chats/status/index"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 503,
                        url: "/mms-chat/overview/store",
                        name: "\u5ba2\u670d\u6570\u636e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/mms-chat/overview/store", "/mms-chat/overview/merchant", "/mms-chat/overview/robot"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 505,
                        url: "/other/downloadapp/",
                        name: "\u5ba2\u670d\u5de5\u5177",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 501,
                        url: "/chat-service/search",
                        name: "\u804a\u5929\u8bb0\u5f55\u67e5\u8be2",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["^/chat-service/search", "^/Pdd.html#/chats/search/index"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 507,
                        url: "/mms-chat/autoUrge",
                        name: "\u50ac\u4ed8\u52a9\u624b",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 508,
                        url: "/mms-chat/service",
                        name: "\u670d\u52a1\u52a9\u624b",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 506,
                        url: "/chat-service/qrcode",
                        name: "\u5ba2\u670d\u4e8c\u7ef4\u7801",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 1200,
                    name: "\u591a\u591a\u8fdb\u5b9d",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/feeb6de7-4647-4b85-abb8-3515c4d54465.png",
                    children: [{
                        id: 1202,
                        url: "/jinbao/effect",
                        name: "\u8fdb\u5b9d\u9996\u9875",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["^/jinbao/index"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1203,
                        url: "/jinbao/promotion/index",
                        name: "\u63a8\u5e7f\u8bbe\u7f6e",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/jinbao/promotion/index", "^/jinbao/mallPromotion", "^/jinbao/coupon", "^/jinbao/operateRecord"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1204,
                        url: "/jinbao/promotionDetail",
                        name: "\u63a8\u5e7f\u6548\u679c",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/jinbao/promotionDetail", "^/jinbao/goodsEffect", "^/jinbao/orderDetail"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 1205,
                        url: "/jinbao/zsactivity",
                        name: "\u6d3b\u52a8\u52a9\u529b",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/jinbao/zsactivity", "^/jinbao/secondKillActivity"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 700,
                    name: "\u63a8\u5e7f\u4e2d\u5fc3",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/a56c77f8-1952-44b6-9996-a3d31ea6b361.png",
                    children: [{
                        id: 702,
                        url: "/exp/pro/index",
                        name: "\u63a8\u5e7f\u6982\u51b5",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/exp/pro/index", "^/exp/messageCenter/", "^/exp/discountReport", "^/adgroup/", "^/extension/recharge_record", "^/extension/operation_record"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 703,
                        url: "/exp/search/index",
                        name: "\u63a8\u5e7f\u8ba1\u5212",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/extension_project/index", "^/extension/search_extension/", "^/extension/star_shop/", "^/extension/mall_extension/", "^/searche_extension/", "^/exp/directional/", "^/exp/search/", "^/exp/pro/starPromotion/", "^/directional/create", "^/directional/report/", "^/star_mall/", "^/extension_data/star_shop/"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 708,
                        url: "/exp/reportOverview/index/search",
                        name: "\u63a8\u5e7f\u62a5\u8868",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/exp/reportOverview/index/search", "^/exp/reportOverview/index/scene", "^/exp/reportOverview/unit/", "^/exp/reportOverview/plan/", "^/exp/reportOverview/detail/", "^/exp/reportOverview/dayDetail"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 706,
                        url: "/exp/extensionAccountDetail/index",
                        name: "\u63a8\u5e7f\u8d26\u6237",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/exp/extensionAccountDetail/", "^/exp/tools/qualifyCenter/", "^/exp/pro/illegalRecord"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 707,
                        url: "/exp/tools/index",
                        name: "\u63a8\u5e7f\u5de5\u5177",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/exp/tools/index", "/exp/tools/dataAnalysis"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 709,
                        url: "https://shuyuan.pinduoduo.com",
                        name: "\u591a\u591a\u8425\u9500\u4e66\u9662",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !0,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 710,
                        url: "/exp/privilege",
                        name: "\u6d3b\u52a8\u52a9\u529b\u4e2d\u5fc3",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/exp/privilege"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 800,
                    name: "\u5e97\u94fa\u7ba1\u7406",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/a0b6afda-b18c-4bf9-b4c3-f48a3396ff36.png",
                    children: [{
                        id: 801,
                        url: "/mallcenter/mallinfo",
                        name: "\u5e97\u94fa\u4fe1\u606f",
                        isNotifyClicked: !0,
                        isOpenInNewWindow: !1,
                        activeList: ["^/mallcenter/info", "^/mallcenter/mallinfo"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 802,
                        url: "/mallcenter/sub/account",
                        name: "\u5b50\u8d26\u53f7\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/mallcenter/sub"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 808,
                        url: "/material/upload",
                        name: "\u56fe\u7247\u7a7a\u95f4",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/material"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 809,
                        url: "/invoice/list",
                        name: "\u8ba2\u5355\u5f00\u7968",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["^/invoice"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 805,
                        url: "/pg/violation_list",
                        name: "\u8fdd\u89c4\u4fe1\u606f",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/mall/violation_info/violation", "/mall/complain_result", "/mall/violation_complain", "/pg/violation_list", "/pg/violation_info"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 806,
                        url: "/mallcenter/close/index",
                        name: "\u9000\u5e97",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/mallcenter/close"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 807,
                        url: "/orders/appeals",
                        name: "\u8ba2\u5355\u7533\u8bc9",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 811,
                        url: "/mallcenter/promotionBattle",
                        name: "\u5927\u4fc3\u4f5c\u6218\u5ba4",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }, {
                    id: 900,
                    name: "\u5546\u5bb6\u670d\u52a1\u5e02\u573a",
                    icon: "https://t16img.yangkeduo.com/mms_static/2019-11-15/e3967a00-fe52-4313-8939-9270aa8b2f44.png",
                    children: [{
                        id: 901,
                        url: "/service-market/",
                        name: "\u670d\u52a1\u5e02\u573a",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 915,
                        url: "/service-market/my-service",
                        name: "\u6211\u7684\u670d\u52a1",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 913,
                        url: "/service-market/order-list",
                        name: "\u8ba2\u5355\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: ["/service-market/order-detail"],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 916,
                        url: "/service-market/my-auth",
                        name: "\u6211\u7684\u6388\u6743",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }, {
                        id: 914,
                        url: "/service-market/evaluation-manage",
                        name: "\u8bc4\u4ef7\u7ba1\u7406",
                        isNotifyClicked: !1,
                        isOpenInNewWindow: !1,
                        activeList: [],
                        defaultVisibility: !0,
                        whitelist: ""
                    }
                    ]
                }
                ],
                showHome: !0
            },
            q = n("4GZr");
        !function (e) {
            e[e.RECOMMENDATION = 1] = "RECOMMENDATION",
                e[e.FEATURE = 2] = "FEATURE",
                e[e.ALERT = 3] = "ALERT"
        }
        (W || (W = {}));
        var Y = n("PuFS"),
            X = function () {
                function e(e) {
                    this.to = e
                }
                return e.prototype.go = function () {
                    var e = this.to;
                    window.location.href = e
                },
                    e
            }
            (),
            Q = function () {
                function e(e, t) {
                    this.to = e,
                        this.history = t
                }
                return e.prototype.go = function () {
                    var e = this.to;
                    if (this.history) {
                        if (!this.history.push)
                            return window.location.href = e;
                        if (-1 != e.indexOf("#")) {
                            var t = e.split("#"),
                                n = t && t[1];
                            this.history.push(n)
                        } else
                            this.history.push(e)
                    } else
                        window.location.href = e
                },
                    e
            }
            (),
            B = n("2Qsj"),
            z = n("KTVE"),
            Z = function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            ee = function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            };
        function te(e) {
            return Z(this, void 0, void 0, (function () {
                var t,
                    n;
                return ee(this, (function (i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]),
                                [4, Object(B.get)(e, {}, {
                                    headers: {
                                        "X-Custom-Checklb": "true"
                                    }
                                })];
                        case 1:
                            return [2, (t = i.sent()) && t.indexOf("__mfns_container") < 0];
                        case 2:
                            return n = i.sent(),
                                Object(z.reportLog)("mf.getLb", {
                                    e: n,
                                    to: e
                                }),
                                [2, !0];
                        case 3:
                            return [2]
                    }
                }))
            }))
        }
        function ne(e) {
            return new URL(e, location.protocol + location.host).host
        }
        function ie(e) {
            if (!e)
                throw new ae;
            if (0 === e.indexOf("#"))
                throw new ae;
            var t = new URL(e, location.protocol + location.host),
                n = t.href,
                i = t.pathname;
            t.hash;
            if (-1 !== n.indexOf("#") || -1 !== n.indexOf(".html"))
                return i;
            var r = /(\/[\w-]*)/.exec(i);
            if (!r || r.length <= 0)
                throw new ae;
            return r[1]
        }
        function re(e, t) {
            return "undefined" !== typeof window ? window && window.__mf ? function (e, t) {
                if (function () {
                    var e = window.location.href;
                    return e.includes("localhost") || e.includes("127.0.0.1")
                }
                ())
                    return Promise.resolve(!1);
                if (Math.random() < oe)
                    return Promise.resolve(!0);
                var n = new Promise((function (e) {
                    setTimeout((function () {
                        e(!0)
                    }), 3e3)
                }));
                return Promise.race([te(t), n]).catch((function (e) {
                    return !0
                }))
            }
            (0, t) : Promise.resolve(function (e, t) {
                if (!e || !t)
                    throw new ae;
                return e !== t && (ne(e) !== ne(t) || ie(e) !== ie(t))
            }
            (e, t)) : Promise.resolve(!0)
        }
        var oe = .01;
        var ae = function () {
                this.message = "Invalid URL."
            },
            se = function () {
                function e() {
                    this._from = window.location.href
                }
                return e.prototype.withHistory = function (e) {
                    return this._history = e,
                        this
                },
                    e.prototype.from = function (e) {
                        return this._from = e,
                            this
                    },
                    e.prototype.to = function (e, t, n) {
                        return void 0 === n && (n = Promise.resolve(!1)),
                            this._to = e,
                            this._grayUrl = t,
                            this._grayLogic = n,
                            this
                    },
                    e.prototype.build = function () {
                        var e = this,
                            t = e._from,
                            n = e._to,
                            i = e._grayUrl,
                            r = e._grayLogic,
                            o = e._history;
                        return (i && r ? r.then((function (e) {
                            return e ? i : n
                        })) : Promise.resolve(n)).then((function (e) {
                            return re(t, e).then((function (t) {
                                return t ? new X(e) : new Q(e, o)
                            }))
                        }))
                    },
                    e
            }
            ();
        "undefined" !== typeof window && (window.navigateTo = function (e, t, n, i) {
            var r = (new se).to(e, n, i);
            return t && r.withHistory(t),
                r.build().then((function (e) {
                    return e.go()
                }))
        });
        var ce = function () {
                return (ce = Object.assign || function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            ue = function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            le = function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            };
        function de(e) {
            try {
                localStorage.setItem(G, JSON.stringify(e))
            } catch (t) {
                console.error(t)
            }
            return e
        }
        function fe() {
            return Object(H.get)("/janus/api/pageResources/sidebar").then(ve).then(ye)
        }
        function pe() {
            return function () {
                var e = $.groups,
                    t = $.showHome;
                return Object(q.a)("f467c3caa379512dde18fde6f054b", {
                    sidebarUserViewList: e,
                    extra: {
                        showHome: t
                    }
                })
            }
            ().then(ve).then(ye)
        }
        function he(e) {
            var t = e.map((function (e) {
                return e.children.map((function (e) {
                    return e.id
                }))
            })).flat();
            return Object(U.b)(t).then(me)
        }
        function me(e) {
            if (!Array.isArray(e)) {
                var t = new Error("[sidenav]: invalid hints response: " + e + ", json stringify: " + ("object" === typeof e ? JSON.stringify(e) : "not object"));
                throw Object(z.reportError)(t, {
                    error_code: 1002
                }),
                    t
            }
            return e
        }
        function ve(e) {
            if (e && e.sidebarUserViewList && Array.isArray(e.sidebarUserViewList) && e.extra)
                return e;
            var t = new Error("[sidenav]: invalid nav response: " + e + ", json stringify: " + ("object" === typeof e ? JSON.stringify(e) : "not object"));
            throw Object(z.reportError)(t, {
                error_code: 1002
            }),
                t
        }
        function we(e) {
            return e && e.groups && Array.isArray(e.groups) && "boolean" === typeof e.showHome
        }
        function ye(e) {
            var t = e.sidebarUserViewList,
                n = void 0 === t ? [] : t,
                i = e.extra,
                r = void 0 === i ? {
                        showHome: !0
                    }
                    : i;
            return {
                groups: n,
                showHome: "boolean" !== typeof r.showHome || r.showHome
            }
        }
        function ge(e, t) {
            return e.map((function (e) {
                var n = e.children.map((function (e) {
                    return ce(ce({}, e), {
                        active: Oe(e, t)
                    })
                }));
                return ce(ce({}, e), {
                    children: n
                })
            }))
        }
        function be(e, t) {
            return t.map((function (t) {
                var n = (t.children || []).map((function (t) {
                    for (var n = Array.isArray(e) ? e.filter((function (e) {
                        return e.id === t.id
                    })) : [], i = n.filter((function (e) {
                        return W.FEATURE === e.type && e.data && e.data.show
                    })).length > 0, r = n.filter((function (e) {
                        return W.RECOMMENDATION === e.type && e.data && e.data.show
                    })).length > 0, o = 0, a = 0, s = n.filter((function (e) {
                        return W.ALERT === e.type
                    })); a < s.length; a++) {
                        var c = s[a],
                            u = c && c.data && c.data.count || 0;
                        o = Math.max(o, u)
                    }
                    return ce(ce({}, t), {
                        featureHint: i,
                        recommendationHint: r,
                        alertNum: o
                    })
                }));
                return ce(ce({}, t), {
                    children: n
                })
            }))
        }
        function _e(e, t, n) {
            void 0 === n && (n = !1),
                Object(Y.a)({
                    page_sn: "10323",
                    page_el_sn: "97807",
                    id: t,
                    op: "click"
                });
            try {
                n ? window.open(t) : (new se).withHistory(e).to(t).build().then((function (e) {
                    e.go(),
                        setTimeout((function () {
                            !function (e) {
                                void 0 === e && (e = 60);
                                window && window.scrollY > e && window.scrollTo(0, e)
                            }
                            ()
                        }), 200)
                }))
            } catch (i) {}
        }
        function Oe(e, t) {
            if (Ne())
                return !1;
            var n = e.url,
                i = e.activeList,
                r = n,
                o = new URL(r, window.location.href);
            if (o.hash && (r = o.hash.replace("#", "")), t === r)
                return !0;
            for (var a = i || [], s = 0; s < a.length; s += 1) {
                var c = a[s];
                if (new RegExp(c, "i").test(t))
                    return !0
            }
            return !1
        }
        function Ee(e, t) {
            for (var n = [], i = function (t) {
                var i = e.find((function (e) {
                    return e.id === t.id
                }));
                i ? n.push(ce(ce({}, i), t)) : n.push(t)
            }, r = 0, o = t; r < o.length; r++) {
                i(o[r])
            }
            return n
        }
        var xe = function (e, t) {
            return ue(void 0, void 0, void 0, (function () {
                var n,
                    i,
                    r,
                    o,
                    a;
                return le(this, (function (s) {
                    switch (s.label) {
                        case 0:
                            if (!(n = function (e) {
                                if (!/\(/g.test(e) || !/\)/g.test(e))
                                    return !1;
                                if (!/(.*)\)$/g.test(e) && !/\|\|/g.test(e))
                                    return !1;
                                var t = e.replace(/\s+/g, "").split(/\(|\)\|\||\)/);
                                return t.length >= 2 && {
                                    method: t[0],
                                    uri: t[1]
                                }
                            }
                            (e)))
                                throw new Error("whitelist parse error");
                            return i = n.method,
                                r = n.uri,
                                o = function () {
                                    return Promise.resolve(0)
                                },
                                "get" === i ? o = H.get : "post" === i && (o = H.post),
                                a = function (e) {
                                    var t;
                                    void 0 === e && (e = "");
                                    try {
                                        (t = JSON.parse(e)) || (t = {})
                                    } catch (n) {
                                        t = {}
                                    }
                                    return t
                                }
                                (t),
                                [4, o(r, a)];
                        case 1:
                            return [2, 1 === +s.sent()]
                    }
                }))
            }))
        };
        function Ce(e, t) {
            return e.map((function (e) {
                var n = e.children.filter((function (e) {
                    return !e.whitelist || t.indexOf(e.id) > -1
                }));
                return ce(ce({}, e), {
                    children: n
                })
            })).filter((function (e) {
                return e.children.length
            }))
        }
        function ke(e) {
            return ue(this, void 0, void 0, (function () {
                var t,
                    n,
                    i,
                    r,
                    o = this;
                return le(this, (function (a) {
                    switch (a.label) {
                        case 0:
                            t = e.groups.map((function (e) {
                                return e.children.filter((function (e) {
                                    return e.whitelist
                                }))
                            })).flat(),
                                n = [],
                                a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                                [4, Promise.all(t.map((function (e) {
                                    return new Promise((function (t) {
                                        return ue(o, void 0, void 0, (function () {
                                            var n,
                                                i;
                                            return le(this, (function (r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return r.trys.push([0, 2, , 3]),
                                                            n = t,
                                                            [4, xe(e.whitelist)];
                                                    case 1:
                                                        return n.apply(void 0, [r.sent()]),
                                                            [3, 3];
                                                    case 2:
                                                        return i = r.sent(),
                                                            console.error(i),
                                                            t("boolean" === typeof e.defaultVisibility && e.defaultVisibility),
                                                            [3, 3];
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }))
                                })))];
                        case 2:
                            return n = a.sent(),
                                [3, 4];
                        case 3:
                            return a.sent(),
                                [3, 4];
                        case 4:
                            return i = new Map,
                                t.forEach((function (e, t) {
                                    n[t] && i.set(e.id, n[t])
                                })),
                                r = Array.from(i.keys()),
                                document.cookie = K + "=" + r.join(",") + ";max-age=8640000;path='/'",
                                [2, ce(ce({}, e), {
                                    groups: Ce(e.groups, r)
                                })]
                    }
                }))
            }))
        }
        function Ne() {
            return "undefined" === typeof window
        }
        var Te = function () {
                return (Te = Object.assign || function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            je = function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            Ie = function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            },
            Le = function () {},
            Re = {
                ready: function () {
                    return new Promise((function (e) {
                        Le = e
                    }))
                },
                expandGroup: function (e) {},
                collapseGroup: function (e, t) {}
            },
            Se = "sideNav-timeToClick";
        function Pe(e) {
            var t = e.fromServer,
                n = e.location,
                i = e.history,
                a = void 0 === i ? {}
                    : i,
                s = e.whitelistCookie,
                c = Object(r.useRef)(n),
                u = {
                    groups: [],
                    showHome: !0,
                    home: Te({}, J)
                };
            if (t) {
                var l = s || "",
                    d = ye(t),
                    f = d.groups,
                    p = d.showHome;
                u.groups = Ce(f, l.split(",").filter((function (e) {
                    return e
                })).map((function (e) {
                    return +e
                }))),
                    u.showHome = p
            }
            if (!Ne())
                try {
                    var h = function () {
                        var e = localStorage.getItem(G);
                        if (e) {
                            var t = JSON.parse(e);
                            if (we(t))
                                return t;
                            throw new Error("malformatted nav")
                        }
                        throw new Error("not found")
                    }
                    ();
                    u.groups = h.groups,
                        u.showHome = h.showHome
                } catch (_) {}
            var m = Object(r.useState)(u),
                v = m[0],
                w = m[1];
            function y(e, t) {
                var n = e.id,
                    i = e.isNotifyClicked,
                    r = e.url,
                    o = e.isOpenInNewWindow;
                i && (window.__mf ? Object(U.a)(n).then((function () {
                    return he(t)
                })).then(g).catch(console.error) : Object(U.a)(n).catch(console.error)),
                    _e(a, r, o);
                try {
                    sessionStorage.setItem(r, String(Date.now()))
                } catch (_) {}
                !function () {
                    var e = Number(sessionStorage.getItem(Se));
                    if (!e)
                        return;
                    var t = Date.now() - e;
                    if (t <= 0 || t > 3e4)
                        return;
                    try {
                        var n = window;
                        n ? (n.timeConsumingTimeout && clearTimeout(n.timeConsumingTimeout), n.timeConsumingTimeout = setTimeout((function () {
                            sessionStorage.setItem(Se, ""),
                                Object(z.reportPerf)("sideNav.timeToClick.before", {
                                    timeConsuming: t
                                })
                        }), 1e3)) : Object(z.reportPerf)("sideNav.timeToClick.before", {
                            timeConsuming: t
                        })
                    } catch (_) {}
                }
                ()
            }
            function g(e) {
                w((function (t) {
                    return Te(Te({}, t), {
                        groups: be(e, t.groups)
                    })
                }))
            }
            Object(r.useEffect)((function () {
                we(v) && v.groups.length && Le()
            }), [v]),
                Re.collapseGroup = function (e, t) {
                    void 0 === t && (t = !1);
                    var n = v.groups.map((function (n) {
                        return t ? e.indexOf(n.id) < 0 ? Te(Te({}, n), {
                            closed: !0
                        }) : n : e.indexOf(n.id) > -1 ? Te(Te({}, n), {
                            closed: !0
                        }) : n
                    }));
                    w(Te(Te({}, v), {
                        groups: n
                    }))
                },
                Re.expandGroup = function (e) {
                    var t = v.groups.map((function (t) {
                        return e.indexOf(t.id) > -1 ? Te(Te({}, t), {
                            closed: !1
                        }) : t
                    }));
                    w(Te(Te({}, v), {
                        groups: t
                    }))
                },
                Object(r.useEffect)((function () {
                    !function () {
                        je(this, void 0, void 0, (function () {
                            var e,
                                n,
                                i,
                                r,
                                o;
                            return Ie(this, (function (a) {
                                switch (a.label) {
                                    case 0:
                                        return t ? [4, ke(ye(t))] : [3, 2];
                                    case 1:
                                        return de(e = a.sent()),
                                            w((function (t) {
                                                return Te(Te(Te({}, t), e), {
                                                    groups: ge(e.groups, c.current.pathname)
                                                })
                                            })),
                                            he(e.groups).then(g).catch(console.error),
                                            [3, 12];
                                    case 2:
                                        n = null,
                                            i = [],
                                        v.groups.length && he(v.groups).then((function (e) {
                                            g(i = e)
                                        })).catch(console.error),
                                            a.label = 3;
                                    case 3:
                                        return a.trys.push([3, 5, , 10]),
                                            [4, fe()];
                                    case 4:
                                        return n = a.sent(),
                                            [3, 10];
                                    case 5:
                                        r = a.sent(),
                                            console.error(r),
                                            a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]),
                                            [4, pe()];
                                    case 7:
                                        return n = a.sent(),
                                            [3, 9];
                                    case 8:
                                        return o = a.sent(),
                                            console.error(o),
                                            n = $,
                                            [3, 9];
                                    case 9:
                                        return [3, 10];
                                    case 10:
                                        return [4, ke(n)];
                                    case 11:
                                        de(n = a.sent()),
                                            function () {
                                                try {
                                                    setTimeout((function () {
                                                        var e = document.querySelector(".__msfe__side-nav");
                                                        if (e) {
                                                            var t = e.innerHTML.replace("active", "");
                                                            window.localStorage.setItem("MMS_SIDE_NAV_HTML", t)
                                                        }
                                                    }), 500)
                                                } catch (e) {
                                                    console.error("@msfe/mms-side-nav: setSideNavHtmlLocal", e)
                                                }
                                            }
                                            (),
                                            w((function (e) {
                                                return Te(Te(Te({}, e), n), {
                                                    groups: Ee(e.groups, ge(n.groups, c.current.pathname))
                                                })
                                            })),
                                            i.length && v.groups.length && function (e, t) {
                                                var n = e.map((function (e) {
                                                        return e.children.map((function (e) {
                                                            return e.id
                                                        }))
                                                    })).flat(),
                                                    i = e.map((function (e) {
                                                        return e.children.map((function (e) {
                                                            return e.id
                                                        }))
                                                    })).flat();
                                                return n.every((function (e) {
                                                    return i.indexOf(e) > -1
                                                }))
                                            }
                                            (n.groups, v.groups) ? g(i) : he(n.groups).then(g).catch(console.error),
                                            a.label = 12;
                                    case 12:
                                        return [2]
                                }
                            }))
                        }))
                    }
                    ()
                }), []),
                Object(r.useEffect)((function () {
                    w(Te(Te({}, v), {
                        groups: ge(v.groups, n.pathname),
                        home: Te(Te({}, v.home), {
                            active: Oe(v.home, n.pathname)
                        })
                    })),
                        c.current = n
                }), [n]);
            var b = v.groups;
            return !Ne() && function () {
                var e = localStorage.getItem(F);
                return !!e && "1" === e
            }
            () && (b = function (e) {
                var t = [],
                    n = e.find((function (e) {
                        return 700 === e.id
                    }));
                if (n) {
                    var i = n.children.filter((function (e) {
                        return [702, 703, 705, 706, 707, 708, 709].indexOf(e.id) > -1
                    }));
                    t.push(ce(ce({}, n), {
                        children: i
                    }))
                }
                return t
            }
            (v.groups)),
                o.a.createElement(D, {
                    groups: b,
                    showHome: v.showHome,
                    home: v.home,
                    onClickGroup: function (e) {
                        var t = v.groups.map((function (t) {
                            return t.id === e.id ? Te(Te({}, t), {
                                closed: !t.closed
                            }) : t
                        }));
                        w(Te(Te({}, v), {
                            groups: t
                        })),
                            Object(Y.a)({
                                page_sn: 10323,
                                page_el_sn: 88409,
                                name: e.name,
                                state: e.closed ? "1" : "0",
                                op: "click"
                            })
                    },
                    onClickItem: function (e) {
                        return y(e, b)
                    },
                    onMouseEnter: function () {
                        try {
                            sessionStorage.setItem(Se, String(Date.now()))
                        } catch (_) {}
                    }
                })
        }
        var Ve = n("34RB");
        function Me(e) {
            return Object(z.reportFatalError)(e.error),
                o.a.createElement(D, {
                    home: J,
                    groups: $.groups,
                    showHome: $.showHome,
                    onClickItem: function (e) {
                        location.replace(e.url)
                    }
                })
        }
        var Ae = function () {
            return (Ae = Object.assign || function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        function De(e) {
            return o.a.createElement(Ve.a, {
                FallbackComponent: Me
            }, o.a.createElement(Pe, Ae({}, e)))
        }
        var We = n("0OVc"),
            Ue = o.a.createElement,
            He = function (e) {
                return Ue(De, Object(i.a)({
                    location: e._location
                }, e))
            };
        He = Object(We.withRouter)((function (e) {
            return Ue(De, e)
        }));
        t.default = He
    },
    EeXR: function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(n("kOS0")),
            o = n("ISwc"),
            a = {
                dataType: "json"
            };
        t.put = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = a),
                n = Object.assign({}, a, n),
                o.wrapTask(r.default, "PUT", e, t, n)
        }
    },
    FFsz: function (e, t, n) {
        "use strict";
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC"),
            t.default = function (e, t, n) {
                return void 0 === e && (e = ""),
                void 0 === n && (n = {}),
                    fetch(e, i({
                        method: "POST",
                        body: t
                    }, n))
            }
    },
    "G+Tw": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("KDNj"),
            r = n("WYEG"),
            o = n("KTVE"),
            a = n("oVbL"),
            s = n("cyQr"),
            c = {
                dataType: "json",
                redirectOnExpired: !0
            };
        t.sync = function (e, t, n, u) {
            void 0 === n && (n = {}),
            void 0 === u && (u = {}),
                u = Object.assign({}, c, u);
            var l = (new Date).getTime(),
                d = new XMLHttpRequest,
                f = null;
            t = a.getURL(t),
            "json" === u.dataType && ("GET" === e || "DELETE" === e ? t = a.composeUrl(t, n) : f = JSON.stringify(n)),
                d.open(e, t, !1),
            "json" === u.dataType && d.setRequestHeader("Content-type", "application/json; charset=utf-8"),
            a.shouldAddAntiHeader(t) && d.setRequestHeader("Anti-Content", i.syncGetRiskInfo()),
                Object.keys(u.headers || {}).forEach((function (e) {
                    return d.setRequestHeader(e, u.headers[e])
                })),
                d.withCredentials = !1 !== u.withCredentials,
                d.send(f);
            var p = {
                    status: d.status,
                    headers: {
                        get: function (e) {
                            return d.getResponseHeader(e)
                        }
                    }
                },
                h = "";
            if (4 === d.readyState) {
                var m = (new Date).getTime() - l,
                    v = d.getResponseHeader("Content-Type") || "",
                    w = p.headers.get("checklogin"),
                    y = u && u.redirectOnExpired,
                    g = !a.ignoreRedirectToLogin();
                try {
                    if (~v.indexOf("application/json") && (h = JSON.parse(d.responseText)), ~v.indexOf("text/") && (h = d.responseText), h && h.error_code === s.ERR_SESSION_EXPIRED && "false" === w && y && g)
                        return r.redirectToLogin();
                    if (403 === d.status && h && 31012e4 === h.error_code)
                        return window.location.reload();
                    if (429 === d.status && h && 40001 === h.error_code && g)
                        return r.redirectToLogin();
                    if (!(d.status >= 200 && d.status < 400)) {
                        var b = h && (h.errorCode || h.error_code) || d.status,
                            _ = h ? h.errorMsg || h.error_msg : "";
                        throw {
                            errorCode: b,
                            error_code: b,
                            errorMsg: _,
                            error_msg: _,
                            res: h,
                            status: d.status,
                            errorUrl: t
                        }
                    }
                } catch (O) {
                    throw o.error({
                        name: "ApiError",
                        message: "url: " + t + " ;status:" + d.status + ";msg:" + d.responseText
                    }),
                        O
                }
                return r.sendCmt(p, h, l, m, t, n, u),
                    h = r.handleJsonResult(h, u),
                    r.validatePermissions(h),
                    h
            }
        }
    },
    ILi6: function (e, t, n) {
        "use strict";
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC"),
            t.default = function (e, t, n) {
                return void 0 === e && (e = ""),
                void 0 === n && (n = {}),
                    fetch(e, i({
                        method: "PUT",
                        body: t
                    }, n))
            }
    },
    ISwc: function (e, t, n) {
        "use strict";
        var i = this && this.__extends || function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (e, t) {
                            e.__proto__ = t
                        }
                        || function (e, t) {
                            for (var n in t)
                                t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function (t, n) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, n),
                        t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }
            (),
            r = this && this.__assign || function () {
                return (r = Object.assign || function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            o = this && this.__awaiter || function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        e.done ? r(e.value) : new n((function (t) {
                            t(e.value)
                        })).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            a = this && this.__generator || function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            },
            s = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default:
                    e
                }
            },
            c = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n("GII0"),
            l = n("KTVE"),
            d = n("rB8i"),
            f = n("myeZ"),
            p = s(n("ohGc")),
            h = n("vLE5"),
            m = n("z/5a"),
            v = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.message = t,
                        n.name = "NETWORK_ERROR",
                        n.stack = ((new Error).stack || "").slice(0, 200),
                        n
                }
                return i(t, e),
                    t
            }
            (Error);
        function w() {
            return window.location.href.toLowerCase().indexOf("/login") < 0 ? (window.location.href = "/login/?redirectUrl=" + encodeURIComponent(window.location.href), new Promise((function () {}))) : Promise.reject()
        }
        function y(e) {
            if (e && e.hasOwnProperty("error_code") && f.ERR_NO_PERMISSION === e.error_code)
                throw new v("ERR_NO_PERMISSION");
            return e
        }
        t.getContentType = function (e) {
            return void 0 === e && (e = {}),
            e.headers && e.headers.get("content-type") && e.headers.get("content-type").toLocaleLowerCase() || ""
        },
            t.sendCmt = function (e, t, n, i, r, o, a) {
                if (void 0 === a && (a = {}), a && a.skipCmt)
                    return t;
                t = t || {};
                var s = {};
                try {
                    s = JSON.parse(localStorage.getItem("userinfo") || "{}")
                } catch (l) {}
                var c = {
                    requestTime: n,
                    reqData: o,
                    apiUrl: r,
                    mall_id: s && s.mall_id || "",
                    user_id: s && s.id || "",
                    resData: "",
                    statusCode: 0,
                    resTimeConsume: i,
                    vip: e.headers && e.headers.get("x-mms-vip") || ""
                };
                e.status >= 200 && e.status < 400 ? (c.statusCode = e.status, c.resData = t) : (c.statusCode = t.errorCode || t.error_code || e.status, c.resData = t || e.statusText),
                    u.cmt.send(c)
            },
            t.handleResponse = function (e, n, i) {
                return void 0 === i && (i = {}),
                    o(c, void 0, void 0, (function () {
                        var r,
                            o,
                            s,
                            c,
                            u,
                            d,
                            p,
                            h,
                            v,
                            y,
                            g,
                            b,
                            _,
                            O,
                            E,
                            x;
                        return a(this, (function (a) {
                            switch (a.label) {
                                case 0:
                                    r = Date.now() - n,
                                        o = t.getContentType(e),
                                        s = e.headers.get("checklogin"),
                                        c = i.options && i.options.redirectOnExpired,
                                        u = !m.ignoreRedirectToLogin(),
                                        a.label = 1;
                                case 1:
                                    return a.trys.push([1, 6, , 7]),
                                        ~o.indexOf("application/json") ? [4, e.text()] : [3, 3];
                                case 2:
                                    return p = a.sent(),
                                        d = JSON.parse(p),
                                        [3, 5];
                                case 3:
                                    return ~o.indexOf("text/") ? [4, e.text()] : [3, 5];
                                case 4:
                                    d = a.sent(),
                                        a.label = 5;
                                case 5:
                                    if (t.sendCmt(e, d, n, r, i.url, i.params, i.options), d && d.error_code === f.ERR_SESSION_EXPIRED && "false" === s && c && u)
                                        return [2, w()];
                                    if (403 === e.status && d && 31012e4 === d.error_code)
                                        return window.location.reload(), [2, new Promise((function () {}))];
                                    if (429 === e.status && d && d.error_code === f.ERR_LOGIN_NEEDED && u)
                                        return [2, w()];
                                    if (e.status >= 200 && e.status < 400)
                                        return [2, d || e];
                                    throw h = d && (d.errorCode || d.error_code) || e.status,
                                        v = d ? d.errorMsg || d.error_msg : "", {
                                        errorCode: h,
                                        error_code: h,
                                        errorMsg: v,
                                        error_msg: v,
                                        res: d,
                                        status: e.status,
                                        ok: e.ok,
                                        errorUrl: e.url,
                                        type: e.type,
                                        statusText: e.statusText
                                    };
                                case 6:
                                    y = a.sent();
                                    try {
                                        g = i.url,
                                            b = e.status,
                                            _ = p || d || e.statusText,
                                            O = y.message,
                                            E = JSON.stringify(i),
                                        -1 === (x = "url: " + g + "; status: " + b + "; msg: " + _ + "; e: " + O + "; context: " + E).indexOf("PDD-WAF") && l.error({
                                            name: "ApiError",
                                            message: x
                                        })
                                    } catch (C) {}
                                    throw y;
                                case 7:
                                    return [2]
                            }
                        }))
                    }))
            },
            t.handleJsonResult = function (e, t) {
                var n = t && t.transformResponse ? t.transformResponse(e) : e;
                if (t && t.skipHandleJson)
                    return n;
                if (d.hasKeys(n, "success")) {
                    if (n.success)
                        return n.result;
                    var i = n.error_msg || n.errorMsg;
                    throw n.error_msg = n.errorMsg = i,
                        n
                }
                if (d.hasKeys(n, "result", "data"))
                    return n.data;
                if (d.hasKeys(n, "error_msg") || d.hasKeys(n, "errorMsg")) {
                    i = n.error_msg || n.errorMsg;
                    throw n.error_msg = n.errorMsg = i,
                        n
                }
                return n
            },
            t.redirectToLogin = w,
            t.validatePermissions = y;
        var g = function (e, n, i, s, u) {
            return new Promise((function (l, f) {
                return o(c, void 0, void 0, (function () {
                    var o,
                        c,
                        m,
                        v;
                    return a(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                return [4, p.default(i, s, u, n)];
                            case 1:
                                return o = a.sent(),
                                    c = r({}, o),
                                    m = function (t) {
                                        t ? g(e, n, i, s, u).then((function (e) {
                                            return l(e)
                                        })).catch((function (e) {
                                            return f(e)
                                        })) : f(c.res)
                                    },
                                    v = Date.now(),
                                    e(o.url, o.params, o.options).then((function (e) {
                                        return t.handleResponse(e, v, c)
                                    })).then((function (e) {
                                        return h.validateCaptcha(e, m, c, o.options)
                                    })).then((function (e) {
                                        return t.handleJsonResult(e, o.options)
                                    })).then(y).then((function (e) {
                                        c.__ignore__all__flow || l(e)
                                    })).catch((function (e) {
                                        d.isObject(e) && (e.errorUrl = i),
                                        c.__ignore__all__flow || f(e)
                                    })),
                                    [2]
                        }
                    }))
                }))
            }))
        };
        t.wrapTask = g
    },
    JjDG: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC"),
            t.default = fetch
    },
    M6TE: function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("WYEG"),
            o = i(n("XV2s"));
        t.del = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                r.wrapTask(o.default, "DELETE", e, t, n)
        }
    },
    RwpE: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("+15y");
        t.fetch = i.default
    },
    USDg: function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(n("FFsz")),
            o = n("WYEG"),
            a = {
                dataType: "json"
            };
        t.post = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                n = Object.assign({}, a, n),
                o.wrapTask(r.default, "POST", e, t, n)
        }
    },
    VuGI: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("KDNj"),
            r = n("ISwc"),
            o = n("KTVE"),
            a = n("z/5a"),
            s = n("myeZ"),
            c = {
                dataType: "json",
                redirectOnExpired: !0
            };
        t.sync = function (e, t, n, u) {
            void 0 === n && (n = {}),
            void 0 === u && (u = {}),
                u = Object.assign({}, c, u);
            var l = (new Date).getTime(),
                d = new XMLHttpRequest,
                f = null;
            t = a.getURL(t),
            "json" === u.dataType && ("GET" === e || "DELETE" === e ? t = a.composeUrl(t, n) : f = JSON.stringify(n)),
                d.open(e, t, !1),
            "json" === u.dataType && d.setRequestHeader("Content-type", "application/json; charset=utf-8"),
            a.shouldAddAntiHeader(t) && d.setRequestHeader("Anti-Content", i.syncGetRiskInfo()),
                Object.keys(u.headers || {}).forEach((function (e) {
                    return d.setRequestHeader(e, u.headers[e])
                })),
                d.withCredentials = !1 !== u.withCredentials,
                d.send(f);
            var p = {
                    status: d.status,
                    headers: {
                        get: function (e) {
                            return d.getResponseHeader(e)
                        }
                    }
                },
                h = "";
            if (4 === d.readyState) {
                var m = (new Date).getTime() - l,
                    v = d.getResponseHeader("Content-Type") || "",
                    w = p.headers.get("checklogin"),
                    y = u && u.redirectOnExpired,
                    g = !a.ignoreRedirectToLogin();
                try {
                    if (~v.indexOf("application/json") && (h = JSON.parse(d.responseText)), ~v.indexOf("text/") && (h = d.responseText), h && h.error_code === s.ERR_SESSION_EXPIRED && "false" === w && y && g)
                        return r.redirectToLogin();
                    if (403 === d.status && h && 31012e4 === h.error_code)
                        return window.location.reload();
                    if (429 === d.status && h && 40001 === h.error_code && g)
                        return r.redirectToLogin();
                    if (!(d.status >= 200 && d.status < 400)) {
                        var b = h && (h.errorCode || h.error_code) || d.status,
                            _ = h ? h.errorMsg || h.error_msg : "";
                        throw {
                            errorCode: b,
                            error_code: b,
                            errorMsg: _,
                            error_msg: _,
                            res: h,
                            status: d.status,
                            errorUrl: t
                        }
                    }
                } catch (O) {
                    throw o.error({
                        name: "ApiError",
                        message: "url: " + t + " ;status:" + d.status + ";msg:" + d.responseText
                    }),
                        O
                }
                return r.sendCmt(p, h, l, m, t, n, u),
                    h = r.handleJsonResult(h, u),
                    r.validatePermissions(h),
                    h
            }
        }
    },
    WYEG: function (e, t, n) {
        "use strict";
        var i = this && this.__extends || function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (e, t) {
                            e.__proto__ = t
                        }
                        || function (e, t) {
                            for (var n in t)
                                t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function (t, n) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, n),
                        t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }
            (),
            r = this && this.__assign || function () {
                return (r = Object.assign || function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            o = this && this.__awaiter || function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        e.done ? r(e.value) : new n((function (t) {
                            t(e.value)
                        })).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            a = this && this.__generator || function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            },
            s = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default:
                    e
                }
            },
            c = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n("GII0"),
            l = n("KTVE"),
            d = n("rB8i"),
            f = n("cyQr"),
            p = s(n("8QOX")),
            h = n("vYes"),
            m = n("oVbL"),
            v = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.message = t,
                        n.name = "NETWORK_ERROR",
                        n.stack = ((new Error).stack || "").slice(0, 200),
                        n
                }
                return i(t, e),
                    t
            }
            (Error);
        function w() {
            return window.location.href.toLowerCase().indexOf("/login") < 0 ? (window.location.href = "/login/?redirectUrl=" + encodeURIComponent(window.location.href), new Promise((function () {}))) : Promise.reject()
        }
        function y(e) {
            if (e && e.hasOwnProperty("error_code") && f.ERR_NO_PERMISSION === e.error_code)
                throw new v("ERR_NO_PERMISSION");
            return e
        }
        t.getContentType = function (e) {
            return void 0 === e && (e = {}),
            e.headers && e.headers.get("content-type") && e.headers.get("content-type").toLocaleLowerCase() || ""
        },
            t.sendCmt = function (e, t, n, i, r, o, a) {
                if (void 0 === a && (a = {}), a && a.skipCmt)
                    return t;
                t = t || {};
                var s = {};
                try {
                    s = JSON.parse(localStorage.getItem("userinfo") || "{}")
                } catch (l) {}
                var c = {
                    requestTime: n,
                    reqData: o,
                    apiUrl: r,
                    mall_id: s && s.mall_id || "",
                    user_id: s && s.id || "",
                    resData: "",
                    statusCode: 0,
                    resTimeConsume: i,
                    vip: e.headers && e.headers.get("x-mms-vip") || ""
                };
                e.status >= 200 && e.status < 400 ? (c.statusCode = e.status, c.resData = t) : (c.statusCode = t.errorCode || t.error_code || e.status, c.resData = t || e.statusText),
                    u.cmt.send(c)
            },
            t.handleResponse = function (e, n, i) {
                return void 0 === i && (i = {}),
                    o(c, void 0, void 0, (function () {
                        var r,
                            o,
                            s,
                            c,
                            u,
                            d,
                            p,
                            h,
                            v,
                            y,
                            g,
                            b,
                            _,
                            O,
                            E,
                            x;
                        return a(this, (function (a) {
                            switch (a.label) {
                                case 0:
                                    r = Date.now() - n,
                                        o = t.getContentType(e),
                                        s = e.headers.get("checklogin"),
                                        c = i.options && i.options.redirectOnExpired,
                                        u = !m.ignoreRedirectToLogin(),
                                        a.label = 1;
                                case 1:
                                    return a.trys.push([1, 6, , 7]),
                                        ~o.indexOf("application/json") ? [4, e.text()] : [3, 3];
                                case 2:
                                    return p = a.sent(),
                                        d = JSON.parse(p),
                                        [3, 5];
                                case 3:
                                    return ~o.indexOf("text/") ? [4, e.text()] : [3, 5];
                                case 4:
                                    d = a.sent(),
                                        a.label = 5;
                                case 5:
                                    if (t.sendCmt(e, d, n, r, i.url, i.params, i.options), d && d.error_code === f.ERR_SESSION_EXPIRED && "false" === s && c && u)
                                        return [2, w()];
                                    if (403 === e.status && d && 31012e4 === d.error_code)
                                        return window.location.reload(), [2, new Promise((function () {}))];
                                    if (429 === e.status && d && d.error_code === f.ERR_LOGIN_NEEDED && u)
                                        return [2, w()];
                                    if (e.status >= 200 && e.status < 400)
                                        return [2, d || e];
                                    throw h = d && (d.errorCode || d.error_code) || e.status,
                                        v = d ? d.errorMsg || d.error_msg : "", {
                                        errorCode: h,
                                        error_code: h,
                                        errorMsg: v,
                                        error_msg: v,
                                        res: d,
                                        status: e.status,
                                        ok: e.ok,
                                        errorUrl: e.url,
                                        type: e.type,
                                        statusText: e.statusText
                                    };
                                case 6:
                                    y = a.sent();
                                    try {
                                        g = i.url,
                                            b = e.status,
                                            _ = p || d || e.statusText,
                                            O = y.message,
                                            E = JSON.stringify(i),
                                        -1 === (x = "url: " + g + "; status: " + b + "; msg: " + _ + "; e: " + O + "; context: " + E).indexOf("PDD-WAF") && l.error({
                                            name: "ApiError",
                                            message: x
                                        })
                                    } catch (C) {}
                                    throw y;
                                case 7:
                                    return [2]
                            }
                        }))
                    }))
            },
            t.handleJsonResult = function (e, t) {
                var n = t && t.transformResponse ? t.transformResponse(e) : e;
                if (t && t.skipHandleJson)
                    return n;
                if (d.hasKeys(n, "success")) {
                    if (n.success)
                        return n.result;
                    var i = n.error_msg || n.errorMsg;
                    throw n.error_msg = n.errorMsg = i,
                        n
                }
                if (d.hasKeys(n, "result", "data"))
                    return n.data;
                if (d.hasKeys(n, "error_msg") || d.hasKeys(n, "errorMsg")) {
                    i = n.error_msg || n.errorMsg;
                    throw n.error_msg = n.errorMsg = i,
                        n
                }
                return n
            },
            t.redirectToLogin = w,
            t.validatePermissions = y;
        var g = function (e, n, i, s, u) {
            return new Promise((function (l, f) {
                return o(c, void 0, void 0, (function () {
                    var o,
                        c,
                        m,
                        v;
                    return a(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                return [4, p.default(i, s, u, n)];
                            case 1:
                                return o = a.sent(),
                                    c = r({}, o),
                                    m = function (t) {
                                        t ? g(e, n, i, s, u).then((function (e) {
                                            return l(e)
                                        })).catch((function (e) {
                                            return f(e)
                                        })) : f(c.res)
                                    },
                                    v = Date.now(),
                                    e(o.url, o.params, o.options).then((function (e) {
                                        return t.handleResponse(e, v, c)
                                    })).then((function (e) {
                                        return h.validateCaptcha(e, m, c, o.options)
                                    })).then((function (e) {
                                        return t.handleJsonResult(e, o.options)
                                    })).then(y).then((function (e) {
                                        c.__ignore__all__flow || l(e)
                                    })).catch((function (e) {
                                        d.isObject(e) && (e.errorUrl = i),
                                        c.__ignore__all__flow || f(e)
                                    })),
                                    [2]
                        }
                    }))
                }))
            }))
        };
        t.wrapTask = g
    },
    XV2s: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC");
        var i = n("oVbL");
        t.default = function (e, t, n) {
            return void 0 === e && (e = ""),
            void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                n = Object.assign({
                    method: "DELETE"
                }, n),
                fetch(i.composeUrl(e, t), n)
        }
    },
    cyQr: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CAPTCHA_COOKIE_KEY = "msfe-pc-cookie-captcha-token",
            t.MSFE_CAPTCHA_VERIFIED = "MSFE_CAPTCHA_VERIFIED",
            t.ERR_CAPTCHA_CODE = 54001,
            t.ERR_SESSION_EXPIRED = 43001,
            t.ERR_NO_PERMISSION = 40010,
            t.ERR_LOGIN_NEEDED = 40001,
            t.ERR_HIGH_FREQUENCY = 40002,
            t.SUPPORT_METHODS = ["PUT", "POST", "DELETE", "GET"],
            t.defaultOptions = {
                mode: "cors",
                credentials: "include",
                redirectOnExpired: !0
            },
            t.defaultHeaders = {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
            t.noLoginUrl = ["login", "protocol/index", "getPassword/index", "phonebind", "agree/change", "protocol/index", "protocol/change", "protocol/relogin", "newdynamic/index", "newdynamic/index_detail", "aftersales/setup/index", "SafetyManage", "change_psd", "/other/help", "/other/colleage", "/other/questionnaire", "/other/download_app", "/other/redirect", "/other_entry/index", "/other_entry/result", "/other/helpcenter", "/account_change_mobile/index", "/phone_validate/index", "/mallcenter/resetPwd/index", "/mallcenter/resetPwd/second", "/mallcenter/resetPwd/third", "/mallcenter/changeAccountInfo/forgetMobile", "/mallcenter/changeAccountInfo/phoneValidate", "/mallcenter/changeAccountInfo/weakPwdEdit", "/mallcenter/changeAccountInfo/findAccountName/index", "/mallcenter/changeAccountInfo/findAccountName/success", "/other/latestNewsList", "/other/latestNewsDetail", "/other/downloadapp", "/other/report", "/other/reportSuccess", "/other/404", "/other/reporExamine", "/mallentry/", "/daxue"]
    },
    g178: function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(n("3IEO")),
            o = n("ISwc"),
            a = {
                dataType: "json"
            };
        t.post = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                n = Object.assign({}, a, n),
                o.wrapTask(r.default, "POST", e, t, n)
        }
    },
    h7rg: function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("ISwc"),
            o = i(n("miY5"));
        t.get = function (e, t, n) {
            return void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                r.wrapTask(o.default, "GET", e, t, n)
        }
    },
    kOS0: function (e, t, n) {
        "use strict";
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC"),
            t.default = function (e, t, n) {
                return void 0 === e && (e = ""),
                void 0 === n && (n = {}),
                    fetch(e, i({
                        method: "PUT",
                        body: t
                    }, n))
            }
    },
    miY5: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC");
        var i = n("z/5a");
        t.default = function (e, t, n) {
            return void 0 === e && (e = ""),
            void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                n = Object.assign({
                    method: "GET"
                }, n),
                fetch(i.composeUrl(e, t), n)
        }
    },
    myeZ: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CAPTCHA_COOKIE_KEY = "msfe-pc-cookie-captcha-token",
            t.MSFE_CAPTCHA_VERIFIED = "MSFE_CAPTCHA_VERIFIED",
            t.ERR_CAPTCHA_CODE = 54001,
            t.ERR_SESSION_EXPIRED = 43001,
            t.ERR_NO_PERMISSION = 40010,
            t.ERR_LOGIN_NEEDED = 40001,
            t.ERR_HIGH_FREQUENCY = 40002,
            t.SUPPORT_METHODS = ["PUT", "POST", "DELETE", "GET"],
            t.defaultOptions = {
                mode: "cors",
                credentials: "include",
                redirectOnExpired: !0
            },
            t.defaultHeaders = {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
            t.noLoginUrl = ["login", "protocol/index", "getPassword/index", "phonebind", "agree/change", "protocol/index", "protocol/change", "protocol/relogin", "newdynamic/index", "newdynamic/index_detail", "aftersales/setup/index", "SafetyManage", "change_psd", "/other/help", "/other/colleage", "/other/questionnaire", "/other/download_app", "/other/redirect", "/other_entry/index", "/other_entry/result", "/other/helpcenter", "/account_change_mobile/index", "/phone_validate/index", "/mallcenter/resetPwd/index", "/mallcenter/resetPwd/second", "/mallcenter/resetPwd/third", "/mallcenter/changeAccountInfo/forgetMobile", "/mallcenter/changeAccountInfo/phoneValidate", "/mallcenter/changeAccountInfo/weakPwdEdit", "/mallcenter/changeAccountInfo/findAccountName/index", "/mallcenter/changeAccountInfo/findAccountName/success", "/other/latestNewsList", "/other/latestNewsDetail", "/other/downloadapp", "/other/report", "/other/reportSuccess", "/other/404", "/other/reporExamine", "/mallentry/", "/daxue"]
    },
    oVbL: function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(n("rB8i")),
            o = n("cyQr");
        t.stringifyURL = function (e) {
            return r.default.isString(e) ? e : r.default.isObject(e) ? Object.entries(e).map((function (e) {
                return [e[0], e[1]].map(encodeURIComponent).join("=")
            })).join("&").replace(/%20/g, "+") : void 0
        },
            t.getSeparator = function (e) {
                return void 0 === e && (e = ""),
                    -1 !== e.indexOf("?") ? "&" : "?"
            },
            t.mergeUrlParams = function (e, t, n) {
                var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                    r = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(i) ? void 0 === n ? e.replace(i, "$1") : e.replace(i, "$1" + t + "=" + encodeURIComponent(n) + "$2") : e + r + t + "=" + encodeURIComponent(n)
            },
            t.composeUrl = function (e, t) {
                if (r.default.isString(t)) {
                    var n = -1 !== e.indexOf("?") ? "&" : "?";
                    return "" + e + n + t
                }
                for (var i = 0, o = Object.keys(t || {}); i < o.length; i++) {
                    var a = o[i],
                        s = (n = -1 !== e.indexOf("?") ? "&" : "?", new RegExp("([?&])" + a + "=.*?(&|$)", "i"));
                    e.match(s) ? (void 0 === t[a] && (e = e.replace(s, "$1")), e = e.replace(s, "$1" + a + "=" + encodeURIComponent(t[a]) + "$2")) : e = e + n + a + "=" + encodeURIComponent(t[a])
                }
                return e
            },
            t.isMatchReg = function (e, t) {
                try {
                    return new RegExp(e).test(t)
                } catch (n) {
                    return !1
                }
            },
            t.ignoreRedirectToLogin = function () {
                return o.noLoginUrl.some((function (e) {
                    return !!(e && location && location.href) && location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
                }))
            },
            t.isRelativeURL = function (e) {
                if (void 0 === e && (e = ""), r.default.isString(e))
                    return !(/^https?:\/\//.test(e) || /^\/\//.test(e));
                throw new Error("-- The type of url MUST be [object String]. --")
            },
            t.getURL = function (e) {
                if (!t.isRelativeURL(e))
                    return e;
                var n = e.replace(/^\//, "");
                return "/" + n
            };
        var a = /https?:\/\/(mms|ims|ipp|jubao\-api|topen\-api|shuyuan|imsapi|open\-api|jinbao|open|mai|dmp|icube|wb).+?\.(com|net)/,
            s = /https?:\/\/test(ing|2)\.hutaojie(.+?)?\.com/;
        t.shouldAddAntiHeader = function (e) {
            return void 0 === e && (e = ""),
                !!(t.isRelativeURL(e) || a.test(e) || s.test(e))
        }
    },
    ohGc: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
                return new(n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        e.done ? r(e.value) : new n((function (t) {
                            t(e.value)
                        })).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            r = this && this.__generator || function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                },
                "function" === typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                    o;
                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (s) {
                                    o = [6, s],
                                        i = 0
                                }
                                finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, s])
                    }
                }
            },
            o = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("z/5a"),
            s = n("KDNj"),
            c = n("myeZ"),
            u = n("vLE5");
        t.default = function (e, n, c, u) {
            return void 0 === e && (e = ""),
            void 0 === c && (c = {}),
            void 0 === u && (u = ""),
                i(o, void 0, void 0, (function () {
                    var i,
                        o;
                    return r(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                i = n || {},
                                    r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]),
                                    [4, s.getRiskInfo()];
                            case 2:
                                return o = r.sent(),
                                    [3, 4];
                            case 3:
                                return r.sent(),
                                    [3, 4];
                            case 4:
                                return [4, s.isCrawlerInfoRequired(e)];
                            case 5:
                                return r.sent() && (i = Object.assign({}, i, {
                                    crawlerInfo: o
                                })),
                                1 === c.debug && (i.debug = 1),
                                    e = a.getURL(e),
                                "json" === (c = t.getOptHeader(c, e, o || "getRisckInfoError")).dataType && ("GET" === u || "DELETE" === u || (i = JSON.stringify(i))),
                                    [2, {
                                        url: e,
                                        params: i,
                                        options: c
                                    }
                                    ]
                        }
                    }))
                }))
        },
            t.getOptHeader = function (e, t, n) {
                var i = u.getCaptchaVerifyAuthToken();
                return "file" !== (e = Object.assign({}, c.defaultOptions, e)).dataType && "formData" !== e.dataType && (e.headers = Object.assign({}, c.defaultHeaders, e.headers)),
                    e.headers = e.headers || {},
                a.shouldAddAntiHeader(t) && (e.headers["Anti-Content"] = n),
                i && (e.headers.VerifyAuthToken = i),
                    e
            }
    },
    rEeM: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n("LpSC");
        var i = n("z/5a");
        t.default = function (e, t, n) {
            return void 0 === e && (e = ""),
            void 0 === t && (t = {}),
            void 0 === n && (n = {}),
                n = Object.assign({
                    method: "DELETE"
                }, n),
                fetch(i.composeUrl(e, t), n)
        }
    },
    vLE5: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("myeZ");
        t.captchaCallback = function (e) {
            var t = e.verifyAuthToken;
            try {
                var n = new Date;
                n.setTime(n.getTime() + 6e5),
                    document.cookie = i.CAPTCHA_COOKIE_KEY + "=" + encodeURIComponent(t) + ";path=/;expires=" + n.toUTCString() + ";"
            } catch (r) {}
        },
            t.removeCookie = function () {
                try {
                    var e = new Date;
                    e.setTime(e.getTime() - 1e3),
                        document.cookie = i.CAPTCHA_COOKIE_KEY + "=;path=/;expires=" + e.toUTCString() + ";"
                } catch (t) {}
            },
            t.getCaptchaVerifyAuthToken = function () {
                var e = new RegExp("(?:(?:^|.*;\\s*)" + i.CAPTCHA_COOKIE_KEY + "\\s*\\=\\s*([^;]*).*$)|^.*$");
                return decodeURIComponent(document.cookie.replace(e, "$1"))
            };
        var r = function (e) {
            var t;
            return "function" === typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0),
                t
        };
        t.validateCaptcha = function (e, n, o, a) {
            if (void 0 === n && (n = function (e) {}), o.options && o.options.skipValidateCaptcha)
                return e;
            if (e && (e.hasOwnProperty("errorCode") || e.hasOwnProperty("error_code"))) {
                var s = e.errorCode || e.error_code;
                if (i.ERR_CAPTCHA_CODE === s && window.__CAPTCHA_PROMPT__) {
                    if (a && a.headers && a.headers.VerifyAuthToken && t.removeCookie(), t.getCaptchaVerifyAuthToken())
                        n(!0);
                    else {
                        var c = e.result && e.result.verifyAuthToken || "",
                            u = r("FLOATING_CAPTCHA");
                        Object.assign(u, {
                            verifyAuthToken: c,
                            captchaRetry: n,
                            captchaCallback: t.captchaCallback
                        }),
                        window && window.dispatchEvent && window.dispatchEvent(u)
                    }
                    o.__ignore__all__flow = !0,
                        o.res = e
                }
            }
            return e
        }
    },
    vYes: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("cyQr");
        t.captchaCallback = function (e) {
            var t = e.verifyAuthToken;
            try {
                var n = new Date;
                n.setTime(n.getTime() + 6e5),
                    document.cookie = i.CAPTCHA_COOKIE_KEY + "=" + encodeURIComponent(t) + ";path=/;expires=" + n.toUTCString() + ";"
            } catch (r) {}
        },
            t.removeCookie = function () {
                try {
                    var e = new Date;
                    e.setTime(e.getTime() - 1e3),
                        document.cookie = i.CAPTCHA_COOKIE_KEY + "=;path=/;expires=" + e.toUTCString() + ";"
                } catch (t) {}
            },
            t.getCaptchaVerifyAuthToken = function () {
                var e = new RegExp("(?:(?:^|.*;\\s*)" + i.CAPTCHA_COOKIE_KEY + "\\s*\\=\\s*([^;]*).*$)|^.*$");
                return decodeURIComponent(document.cookie.replace(e, "$1"))
            };
        var r = function (e) {
            var t;
            return "function" === typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0),
                t
        };
        t.validateCaptcha = function (e, n, o, a) {
            if (void 0 === n && (n = function (e) {}), o.options && o.options.skipValidateCaptcha)
                return e;
            if (e && (e.hasOwnProperty("errorCode") || e.hasOwnProperty("error_code"))) {
                var s = e.errorCode || e.error_code;
                if (i.ERR_CAPTCHA_CODE === s && window.__CAPTCHA_PROMPT__) {
                    if (a && a.headers && a.headers.VerifyAuthToken && t.removeCookie(), t.getCaptchaVerifyAuthToken())
                        n(!0);
                    else {
                        var c = e.result && e.result.verifyAuthToken || "",
                            u = r("FLOATING_CAPTCHA");
                        Object.assign(u, {
                            verifyAuthToken: c,
                            captchaRetry: n,
                            captchaCallback: t.captchaCallback
                        }),
                        window && window.dispatchEvent && window.dispatchEvent(u)
                    }
                    o.__ignore__all__flow = !0,
                        o.res = e
                }
            }
            return e
        }
    },
    wC9B: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("DLo/");
        t.get = i.get;
        var r = n("USDg");
        t.post = r.post;
        var o = n("M6TE");
        t.del = o.del;
        var a = n("5u7Q");
        t.put = a.put;
        var s = n("9Ine");
        t.fetch = s.fetch;
        var c = n("G+Tw");
        t.sync = c.sync;
        var u = n("WYEG");
        t.redirectToLogin = u.redirectToLogin
    },
    "z/5a": function (e, t, n) {
        "use strict";
        var i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(n("rB8i")),
            o = n("myeZ");
        t.stringifyURL = function (e) {
            return r.default.isString(e) ? e : r.default.isObject(e) ? Object.entries(e).map((function (e) {
                return [e[0], e[1]].map(encodeURIComponent).join("=")
            })).join("&").replace(/%20/g, "+") : void 0
        },
            t.getSeparator = function (e) {
                return void 0 === e && (e = ""),
                    -1 !== e.indexOf("?") ? "&" : "?"
            },
            t.mergeUrlParams = function (e, t, n) {
                var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                    r = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(i) ? void 0 === n ? e.replace(i, "$1") : e.replace(i, "$1" + t + "=" + encodeURIComponent(n) + "$2") : e + r + t + "=" + encodeURIComponent(n)
            },
            t.composeUrl = function (e, t) {
                if (r.default.isString(t)) {
                    var n = -1 !== e.indexOf("?") ? "&" : "?";
                    return "" + e + n + t
                }
                for (var i = 0, o = Object.keys(t || {}); i < o.length; i++) {
                    var a = o[i],
                        s = (n = -1 !== e.indexOf("?") ? "&" : "?", new RegExp("([?&])" + a + "=.*?(&|$)", "i"));
                    e.match(s) ? (void 0 === t[a] && (e = e.replace(s, "$1")), e = e.replace(s, "$1" + a + "=" + encodeURIComponent(t[a]) + "$2")) : e = e + n + a + "=" + encodeURIComponent(t[a])
                }
                return e
            },
            t.isMatchReg = function (e, t) {
                try {
                    return new RegExp(e).test(t)
                } catch (n) {
                    return !1
                }
            },
            t.ignoreRedirectToLogin = function () {
                return o.noLoginUrl.some((function (e) {
                    return !!(e && location && location.href) && location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
                }))
            },
            t.isRelativeURL = function (e) {
                if (void 0 === e && (e = ""), r.default.isString(e))
                    return !(/^https?:\/\//.test(e) || /^\/\//.test(e));
                throw new Error("-- The type of url MUST be [object String]. --")
            },
            t.getURL = function (e) {
                if (!t.isRelativeURL(e))
                    return e;
                var n = e.replace(/^\//, "");
                return "/" + n
            };
        var a = /https?:\/\/(mms|ims|ipp|jubao\-api|topen\-api|shuyuan|imsapi|open\-api|jinbao|open|mai|dmp|icube|wb).+?\.(com|net)/,
            s = /https?:\/\/test(ing|2)\.hutaojie(.+?)?\.com/;
        t.shouldAddAntiHeader = function (e) {
            return void 0 === e && (e = ""),
                !!(t.isRelativeURL(e) || a.test(e) || s.test(e))
        }
    }
}
]);
