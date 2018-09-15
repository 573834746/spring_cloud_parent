!function(e, t) {
    "use strict";
    function n(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    }; 
!function(e, r) {
        /*@version: 4.12.0
							@date: 2018-9-4 11:3:49*/
        var o = function(e) {
            return null != e && void 0 != e
        },
        s = function(e) {
            return ! o(e)
        },
        a = function(e) {
            return e === !0
        },
        c = function(e) {
            return e === !1
        },
        u = function(e) {
            return "function" == typeof e
        },
        l = function(e) {
            return "number" == typeof e
        },
        d = function(e) {
            return "[object array]" === Object.prototype.toString.call(e).toLowerCase()
        },
        f = function(e) {
            return "object" == ("undefined" == typeof e ? "undefined": i(e)) && "[object object]" == Object.prototype.toString.call(e).toLowerCase() && null != e
        },
        h = function(e, t) {
            for (var n = arguments.length,
            i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
            return function() {
                for (var n = arguments.length,
                r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                e.apply(t, i.concat(r))
            }
        },
        p = function() {
            var t;
            e.console && u(e.console.log) ? (t = e.console).log.apply(t, arguments) : null
        },
        m = function() {
            var t;
            e.console && u(e.console.warn) ? (t = e.console).warn.apply(t, arguments) : null
        },
        g = function(t) {
            e.console && u(e.console.warn) ? e.console.warn(t) : null
        };
        e.JSON ? null: e.JSON = {};
        var v = {
            stringify: e.JSON.stringify ||
            function(e) {
                var t = "undefined" == typeof e ? "undefined": i(e);
                if ("object" != t || null === e) return "string" == t && (e = '"' + e + '"'),
                String(e);
                var n, r, o = [],
                s = e && e.constructor == Array;
                for (n in e) r = e[n],
                t = "undefined" == typeof r ? "undefined": i(r),
                "string" == t ? r = '"' + r + '"': "object" == t && null !== r && (r = v.stringify(r)),
                "function" != t && o.push((s ? "": '"' + n + '":') + String(r));
                return (s ? "[": "{") + String(o) + (s ? "]": "}")
            },
            parse: e.JSON.parse ||
            function(e) {
                return eval("(" + e + ")")
            }
        },
        w = {
            each: function(e, t) {
                var n = e.length;
                if (n) for (var i = 0; i < n && t(e[i], i) !== !1; i++);
            },
            indexOf: function(e, t) {
                var n = e.length >>> 0,
                i = Number(arguments[1]) || 0;
                for (i = i < 0 ? Math.ceil(i) : Math.floor(i), i < 0 && (i += n); i < n; i++) if (i in e && e[i] === t) return i;
                return - 1
            },
            uniquePush: function(e, t) {
                w.indexOf(e, t) === -1 && e.push(t)
            }
        },
        y = {
            keys: Object.keys ||
            function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t
            },
            assign: Object.assign ||
            function() {
                for (var e = arguments[0], t = 1, n = arguments.length; t < n; t++) for (var i in arguments[t]) e[i] = arguments[t][i];
                return e
            }
        },
        b = function() {
            function e(e) {
                return u(e) || f(e)
            }
            function n(e) {
                return "function" == typeof e
            }
            function r(e) {
                Y = e
            }
            function o(e) {
                J = e
            }
            function s() {
                return function() {
                    return process.nextTick(h)
                }
            }
            function a() {
                return "undefined" != typeof G ?
                function() {
                    G(h)
                }: d()
            }
            function c() {
                var e = 0,
                t = new ee(h),
                n = document.createTextNode("");
                return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = e = ++e % 2
                }
            }
            function l() {
                var e = new MessageChannel;
                return e.port1.onmessage = h,
                function() {
                    return e.port2.postMessage(0)
                }
            }
            function d() {
                var e = setTimeout;
                return function() {
                    return e(h, 1)
                }
            }
            function h() {
                for (var e = 0; e < $; e += 2) {
                    var t = ie[e],
                    n = ie[e + 1];
                    t(n),
                    ie[e] = void 0,
                    ie[e + 1] = void 0
                }
                $ = 0
            }
            function p() {
                try {
                    var e = require,
                    t = e("vertx");
                    return G = t.runOnLoop || t.runOnContext,
                    a()
                } catch(n) {
                    return d()
                }
            }
            function m(e, t) {
                var n = arguments,
                i = this,
                r = new this.constructor(v);
                void 0 === r[oe] && R(r);
                var o = i._state;
                return o ? !
                function() {
                    var e = n[o - 1];
                    J(function() {
                        return M(o, r, e, i._result)
                    })
                } () : C(i, r, e, t),
                r
            }
            function g(e) {
                var t = this;
                if (e && "object" == ("undefined" == typeof e ? "undefined": i(e)) && e.constructor === t) return e;
                var n = new t(v);
                return k(n, e),
                n
            }
            function v() {}
            function w() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function y() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function b(e) {
                try {
                    return e.then
                } catch(t) {
                    return ue.error = t,
                    ue
                }
            }
            function _(e, t, n, i) {
                try {
                    e.call(t, n, i)
                } catch(r) {
                    return r
                }
            }
            function x(e, t, n) {
                J(function(e) {
                    var i = !1,
                    r = _(n, t,
                    function(n) {
                        i || (i = !0, t !== n ? k(e, n) : O(e, n))
                    },
                    function(t) {
                        i || (i = !0, T(e, t))
                    },
                    "Settle: " + (e._label || " unknown promise")); ! i && r && (i = !0, T(e, r))
                },
                e)
            }
            function E(e, t) {
                t._state === ae ? O(e, t._result) : t._state === ce ? T(e, t._result) : C(t, void 0,
                function(t) {
                    return k(e, t)
                },
                function(t) {
                    return T(e, t)
                })
            }
            function S(e, t, i) {
                t.constructor === e.constructor && i === m && t.constructor.resolve === g ? E(e, t) : i === ue ? (T(e, ue.error), ue.error = null) : void 0 === i ? O(e, t) : n(i) ? x(e, t, i) : O(e, t)
            }
            function k(t, n) {
                t === n ? T(t, w()) : e(n) ? S(t, n, b(n)) : O(t, n)
            }
            function A(e) {
                e._onerror && e._onerror(e._result),
                I(e)
            }
            function O(e, t) {
                e._state === se && (e._result = t, e._state = ae, 0 !== e._subscribers.length && J(I, e))
            }
            function T(e, t) {
                e._state === se && (e._state = ce, e._result = t, J(A, e))
            }
            function C(e, t, n, i) {
                var r = e._subscribers,
                o = r.length;
                e._onerror = null,
                r[o] = t,
                r[o + ae] = n,
                r[o + ce] = i,
                0 === o && e._state && J(I, e)
            }
            function I(e) {
                var t = e._subscribers,
                n = e._state;
                if (0 !== t.length) {
                    for (var i = void 0,
                    r = void 0,
                    o = e._result,
                    s = 0; s < t.length; s += 3) i = t[s],
                    r = t[s + n],
                    i ? M(n, i, r, o) : r(o);
                    e._subscribers.length = 0
                }
            }
            function N() {
                this.error = null
            }
            function P(e, t) {
                try {
                    return e(t)
                } catch(n) {
                    return le.error = n,
                    le
                }
            }
            function M(e, t, i, r) {
                var o = n(i),
                s = void 0,
                a = void 0,
                c = void 0,
                u = void 0;
                if (o) {
                    if (s = P(i, r), s === le ? (u = !0, a = s.error, s.error = null) : c = !0, t === s) return void T(t, y())
                } else s = r,
                c = !0;
                t._state !== se || (o && c ? k(t, s) : u ? T(t, a) : e === ae ? O(t, s) : e === ce && T(t, s))
            }
            function L(e, t) {
                try {
                    t(function(t) {
                        k(e, t)
                    },
                    function(t) {
                        T(e, t)
                    })
                } catch(n) {
                    T(e, n)
                }
            }
            function D() {
                return de++
            }
            function R(e) {
                e[oe] = de++,
                e._state = void 0,
                e._result = void 0,
                e._subscribers = []
            }
            function j(e, t) {
                this._instanceConstructor = e,
                this.promise = new e(v),
                this.promise[oe] || R(this.promise),
                W(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && O(this.promise, this._result))) : T(this.promise, q())
            }
            function q() {
                return new Error("Array Methods must be provided an Array")
            }
            function U(e) {
                return new j(this, e).promise
            }
            function F(e) {
                var t = this;
                return new t(W(e) ?
                function(n, i) {
                    for (var r = e.length,
                    o = 0; o < r; o++) t.resolve(e[o]).then(n, i)
                }: function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }
            function K(e) {
                var t = this,
                n = new t(v);
                return T(n, e),
                n
            }
            function B() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function H() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            function z(e) {
                this[oe] = D(),
                this._result = this._state = void 0,
                this._subscribers = [],
                v !== e && ("function" != typeof e && B(), this instanceof z ? L(this, e) : H())
            }
            function V() {
                var e = void 0;
                if ("undefined" != typeof t) e = t;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch(n) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var i = e.Promise;
                if (i) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(i.resolve())
                    } catch(n) {}
                    if ("[object Promise]" === r && !i.cast) return
                }
                e.Promise = z
            }
            var X = void 0;
            X = Array.isArray ? Array.isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var W = X,
            $ = 0,
            G = void 0,
            Y = void 0,
            J = function(e, t) {
                ie[$] = e,
                ie[$ + 1] = t,
                $ += 2,
                2 === $ && (Y ? Y(h) : re())
            },
            Q = "undefined" != typeof window ? window: void 0,
            Z = Q || {},
            ee = Z.MutationObserver || Z.WebKitMutationObserver,
            te = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            ne = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            ie = new Array(1e3),
            re = void 0;
            re = te ? s() : ee ? c() : ne ? l() : void 0 === Q && "function" == typeof require ? p() : d();
            var oe = Math.random().toString(36).substring(16),
            se = void 0,
            ae = 1,
            ce = 2,
            ue = new N,
            le = new N,
            de = 0;
            return j.prototype._enumerate = function() {
                for (var e = this.length,
                t = this._input,
                n = 0; this._state === se && n < e; n++) this._eachEntry(t[n], n)
            },
            j.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor,
                i = n.resolve;
                if (i === g) {
                    var r = b(e);
                    if (r === m && e._state !== se) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof r) this._remaining--,
                    this._result[t] = e;
                    else if (n === z) {
                        var o = new n(v);
                        S(o, e, r),
                        this._willSettleAt(o, t)
                    } else this._willSettleAt(new n(function(t) {
                        return t(e)
                    }), t)
                } else this._willSettleAt(i(e), t)
            },
            j.prototype._settledAt = function(e, t, n) {
                var i = this.promise;
                i._state === se && (this._remaining--, e === ce ? T(i, n) : this._result[t] = n),
                0 === this._remaining && O(i, this._result)
            },
            j.prototype._willSettleAt = function(e, t) {
                var n = this;
                C(e, void 0,
                function(e) {
                    return n._settledAt(ae, t, e)
                },
                function(e) {
                    return n._settledAt(ce, t, e)
                })
            },
            z.all = U,
            z.race = F,
            z.resolve = g,
            z.reject = K,
            z._setScheduler = r,
            z._setAsap = o,
            z._asap = J,
            z.prototype = {
                constructor: z,
                then: m,
                _catch: function(e) {
                    return this.then(null, e)
                }
            },
            z.polyfill = V,
            z.Promise = z,
            z
        },
        _ = b(),
        x = e.XMLHttpRequest,
        E = function(t) {
            var n = t.url,
            i = t.data,
            r = t.timeout;
            return s(r) ? r = 3e3: "",
            new _(function(t, a) {
                try {
                    if (s(i) || s(i.app_key)) return a("Please pass your appKey in the init method");
                    var c = new x;
                    "withCredentials" in c || (o(e.XDomainRequest) ? (c = new e.XDomainRequest, n = n.replace(/http\w*\:/, e.location.protocol)) : a("construct $request failed")),
                    c.onload = function() {
                        t(c.responseText)
                    },
                    c.onerror = function() {
                        a(c.responseText || "network failed")
                    },
                    setTimeout(function() {
                        a(n + " timeout")
                    },
                    r),
                    c.open("POST", n, !0),
                    u(c.setRequestHeader) ? c.setRequestHeader("Content-Type", "application/json;charset=UTF-8") : "",
                    c.send(v.stringify(i))
                } catch(l) {
                    a(l)
                }
            })
        },
        S = {
            getAllParams: function() {
                var t = e.location.search,
                n = {};
                if (t.indexOf("?") != -1) for (var i = t.replace(/^\?/, "").split("&"), r = i.length, o = 0, s = void 0; o < r; o++) i[o] && (s = i[o].split("="), n[s[0]] = s[1]);
                return n
            },
            getQueryString: function(t, n) {
                if (n = n || e.location.search.substr(1)) {
                    var i = null;
                    return w.each(n.split("&"),
                    function(e) {
                        if (0 == e.indexOf(t + "=")) return i = e.split("=")[1],
                        !1
                    }),
                    o(i) ? i: null
                }
                return null
            },
            getProtocol: function(t) {
                if (s(t)) return e.location.protocol;
                var n = t.match(/http\w*\:/);
                return n && 1 == n.length ? n[0] : (m("get protocol failed"), "")
            },
            getHost: function(t) {
                return s(t) ? e.location.host: (t = t.replace(/http\w*\:\/\//, ""), t.indexOf("?") > 0 ? t = t.substr(0, t.indexOf("?")) : "", t.indexOf("#") > 0 ? t = t.substr(0, t.indexOf("#")) : "", t.split("/")[0])
            },
            getPath: function(t) {
                if (s(t)) return e.location.pathname;
                var n = t.replace(/http\w*\:\/\//).split("/");
                return n.shift(),
                "/" + n.join("/").replace(/[\?|\#]\S*/, "")
            },
            getSearch: function(t) {
                if (s(t)) return e.location.search;
                var n = t.split("?")[1];
                return n ? "?" + n.replace(/\#\S+$/, "") : ""
            },
            getHash: function(t) {
                if (s(t)) return e.location.hash;
                var n = t.split("#")[1];
                return n ? "#" + n: ""
            }
        },
        k = function(e) {
            if (e) {
                var t = encodeURIComponent(v.stringify(e)),
                n = "https://zhtest.appadhoc.com/l.gif?m=" + t + "&t=" + Date.now(),
                i = document.createElement("img");
                i.src = n
            }
        },
        A = "1.0",
        O = function(e) {
            e += A;
            for (var t = encodeURIComponent(e), n = t + "=", i = document.cookie.split(";"), r = 0; r < i.length; r++) {
                for (var o = i[r];
                " " == o.charAt(0);) o = o.substring(1);
                if (0 === o.indexOf(t)) {
                    var s = o.substring(n.length, o.length);
                    return decodeURIComponent(s)
                }
            }
            return null
        },
        T = function(e, t, n, i) {
            e += A;
            var r = n ? 1e3 * n: 31536e6,
            s = new Date((new Date).getTime() + r),
            a = "; expires=" + s.toUTCString(),
            c = encodeURIComponent(e) + "=" + encodeURIComponent(t) + a + "; path=/;";
            o(i) && (c += "domain=" + i + ";"),
            document.cookie = c
        },
        C = {
            set: T,
            get: O
        };
        try {
            e.localStorage.setItem("_adhoc_test_", 1),
            C.setItem = function(t, n) {
                e.localStorage.setItem(t, n)
            },
            C.getItem = function(t) {
                return e.localStorage.getItem(t)
            },
            C.removeItem = function(t) {
                return e.localStorage.removeItem(t)
            }
        } catch(I) {
            C.setItem = function() {},
            C.getItem = function() {},
            C.removeItem = function() {}
        }
        var N = {
            $: function(e) {
                for (var t = e.match(/(\w|\-)+(?=\[)/g), n = e.match(/\d+(?=\])/g), i = document.body, r = 0, o = n.length; r < o; r++) {
                    var a = t[r].toLowerCase(),
                    c = n[r];
                    if ("body" != a) {
                        if (!i) return null;
                        for (var u = i.childNodes,
                        l = -1,
                        d = 0,
                        f = u.length; d < f; d++) {
                            var h = u[d];
                            if (1 === h.nodeType && h.nodeName.toLowerCase() == a) {
                                l++;
                                var p = h.getAttribute(D);
                                if (p == c) {
                                    i = h,
                                    l = p;
                                    break
                                }
                                if (s(p) && l == c) {
                                    i = h;
                                    break
                                }
                            }
                        }
                        if (l != c) {
                            i = null;
                            break
                        }
                    }
                }
                return i
            },
            addEvent: function(e, t, n, i, r, o) {
                var s = e,
                a = !!o && o,
                c = null;
                r && (s = r === !0 ? i: r),
                c = function(e) {
                    return n.call(s, e || window.event)
                };
                try {
                    e.addEventListener(t, c, a)
                } catch(u) {
                    try {
                        e.attachEvent("on" + t, c)
                    } catch(l) {
                        e["on" + t] = c
                    }
                }
            },
            findParentNodeByTag: function(e, t) {
                for (; e != document && e.parentNode.tagName && e.parentNode.tagName.toLowerCase() != t;) e = e.parentNode;
                return e == document || e.parentNode == document ? null: e.parentNode
            },
            next: function we(e) {
                var we = e.nextSibling;
                if ("#text" === we.nodeName && 3 === we.nodeType) return we;
                for (; we && 1 != we.nodeType;) we = we.nextSibling;
                return we
            },
            ready: function(e) {
                "function" == typeof e && setTimeout(function() {
                    return "complete" === r.readyState ? e() : N.ready(e)
                },
                0)
            },
            getChildren: function(e, t) {
                for (var n = [], i = e.childNodes, r = 0, o = i.length; r < o; r++) {
                    var s = i[r];
                    1 === s.nodeType && s.tagName && "style" != s.tagName.toLowerCase() && "script" != s.tagName.toLowerCase() && (t ? s.tagName && s.tagName.toLowerCase && t == s.tagName.toLowerCase() && n.push(s) : n.push(s))
                }
                return n
            },
            getDoms: function(e) {
                var t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                n = /^(?:\s*(<[\w\W]+>)[^>]*|.([\w-]*))$/;
                if (t.test(e)) {
                    var i = t.exec(e);
                    return document.getElementById(i[2])
                }
                if (n.test(e)) {
                    for (var r = n.exec(e), o = document.getElementsByTagName("*"), s = [], a = 0, c = o.length; a < c; a++) o[a].className.match(new RegExp("(\\s|^)" + r[2] + "(\\s|$)")) && s.push(o[a]);
                    return s
                }
            },
            querySelectorPolyfill: function() {
                document.querySelectorAll || (document.querySelectorAll = function(e) {
                    var t, n = document.createElement("style"),
                    i = [];
                    for (document.documentElement.firstChild.appendChild(n), document._qsa = [], n.styleSheet.cssText = e + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), n.parentNode.removeChild(n); document._qsa.length;) t = document._qsa.shift(),
                    t.style.removeAttribute("x-qsa"),
                    i.push(t);
                    return document._qsa = null,
                    i
                }),
                document.querySelector || (document.querySelector = function(e) {
                    var t = document.querySelectorAll(e);
                    return t.length ? t[0] : null
                })
            }
        },
        P = void 0,
        M = {
            setName: function(t) {
                e.name = e.ADHOC_WINDOW_NAME = P = t
            },
            getName: function() {
                return P || document.referrer
            }
        };
        M.setName(e.name);
        var L = "data-ab-origin-sequence",
        D = "data-ab-origin-tag-sequence",
        R = void 0; !
        function() {
            var e = "0.7.10",
            t = "",
            n = "?",
            r = "function",
            o = "undefined",
            s = "object",
            a = "string",
            c = "major",
            u = "model",
            l = "name",
            d = "type",
            f = "vendor",
            h = "version",
            p = "architecture",
            m = "console",
            g = "mobile",
            v = "tablet",
            w = "smarttv",
            y = "wearable",
            b = "embedded",
            _ = {
                extend: function(e, t) {
                    var n = {};
                    for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                    return n
                },
                has: function(e, t) {
                    return "string" == typeof e && t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return ("undefined" == typeof e ? "undefined": i(e)) === a ? e.split(".")[0] : void 0
                }
            },
            x = {
                rgx: function() {
                    for (var e, t, n, a, c, u, l, d = 0,
                    f = arguments; d < f.length && !u;) {
                        var h = f[d],
                        p = f[d + 1];
                        if (("undefined" == typeof e ? "undefined": i(e)) === o) {
                            e = {};
                            for (a in p) p.hasOwnProperty(a) && (c = p[a], ("undefined" == typeof c ? "undefined": i(c)) === s ? e[c[0]] = void 0 : e[c] = void 0)
                        }
                        for (t = n = 0; t < h.length && !u;) if (u = h[t++].exec(this.getUA())) for (a = 0; a < p.length; a++) l = u[++n],
                        c = p[a],
                        ("undefined" == typeof c ? "undefined": i(c)) === s && c.length > 0 ? 2 == c.length ? i(c[1]) == r ? e[c[0]] = c[1].call(this, l) : e[c[0]] = c[1] : 3 == c.length ? i(c[1]) !== r || c[1].exec && c[1].test ? e[c[0]] = l ? l.replace(c[1], c[2]) : void 0 : e[c[0]] = l ? c[1].call(this, l, c[2]) : void 0 : 4 == c.length && (e[c[0]] = l ? c[3].call(this, l.replace(c[1], c[2])) : void 0) : e[c] = l ? l: void 0;
                        d += 2
                    }
                    return e
                },
                str: function(e, t) {
                    for (var r in t) if (i(t[r]) === s && t[r].length > 0) {
                        for (var o = 0; o < t[r].length; o++) if (_.has(t[r][o], e)) return r === n ? void 0 : r
                    } else if (_.has(t[r], e)) return r === n ? void 0 : r;
                    return e
                }
            },
            E = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2 : "/1",
                            1.3 : "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000 : "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7 : "NT 6.1",
                            8 : "NT 6.2",
                            8.1 : "NT 6.3",
                            10 : ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            S = {
                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [l, h], [/(OPiOS)[\/\s]+([\w\.]+)/i], [[l, "Opera Mini"], h], [/\s(opr)\/([\w\.]+)/i], [[l, "Opera"], h], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [l, h], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[l, "IE"], h], [/(edge)\/((\d+)?[\w\.]+)/i], [l, h], [/(yabrowser)\/([\w\.]+)/i], [[l, "Yandex"], h], [/(comodo_dragon)\/([\w\.]+)/i], [[l, /_/g, " "], h], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [l, h], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[l, "UCBrowser"], h], [/(dolfin)\/([\w\.]+)/i], [[l, "Dolphin"], h], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[l, "Chrome"], h], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [h, [l, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [h, [l, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [h, [l, "Facebook"]], [/fxios\/([\w\.-]+)/i], [h, [l, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [h, [l, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [h, l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [l, [h, x.str, E.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [l, h], [/(navigator|netscape)\/([\w\.-]+)/i], [[l, "Netscape"], h], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [l, h]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[p, "amd64"]], [/(ia32(?=;))/i], [[p, _.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[p, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[p, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[p, /ower/, "", _.lowerize]], [/(sun4\w)[;\)]/i], [[p, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[p, _.lowerize]]],
                device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [u, f, [d, v]], [/applecoremedia\/[\w\.]+ \((ipad)/], [u, [f, "Apple"], [d, v]], [/(apple\s{0,1}tv)/i], [[u, "Apple TV"], [f, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [f, u, [d, v]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [u, [f, "Amazon"], [d, v]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[u, x.str, E.device.amazon.model], [f, "Amazon"], [d, g]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [u, f, [d, g]], [/\((ip[honed|\s\w*]+);/i], [u, [f, "Apple"], [d, g]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [f, u, [d, g]], [/\(bb10;\s(\w+)/i], [u, [f, "BlackBerry"], [d, g]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider1\s\w+|nexus 7)/i], [u, [f, "Asus"], [d, v]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[f, "Sony"], [u, "Xperia Tablet"], [d, v]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[f, "Sony"], [u, "Xperia Phone"], [d, g]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [f, u, [d, m]], [/android.+;\s(shield)\sbuild/i], [u, [f, "Nvidia"], [d, m]], [/(playstation\s[34portablevi]+)/i], [u, [f, "Sony"], [d, m]], [/(sprint\s(\w+))/i], [[f, x.str, E.device.sprint.vendor], [u, x.str, E.device.sprint.model], [d, g]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [f, u, [d, v]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|oppo|vivo|coolpad|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [f, [u, /_/g, " "], [d, g]], [/(nexus\s9)/i], [u, [f, "HTC"], [d, v]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [u, [f, "Microsoft"], [d, m]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [f, "Microsoft"], [d, g]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [u, [f, "Motorola"], [d, g]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [u, [f, "Motorola"], [d, v]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[f, "Samsung"], u, [d, v]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[f, "Samsung"], u, [d, g]], [/(samsung);smarttv/i], [f, u, [d, w]], [/\(dtv[\);].+(aquos)/i], [u, [f, "Sharp"], [d, w]], [/sie-(\w+)*/i], [u, [f, "Siemens"], [d, g]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[f, "Nokia"], u, [d, g]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [u, [f, "Acer"], [d, v]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[f, "LG"], u, [d, v]], [/(lg) netcast\.tv/i], [f, u, [d, w]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [u, [f, "LG"], [d, g]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [u, [f, "Lenovo"], [d, v]], [/linux;.+((jolla));/i], [f, u, [d, g]], [/((pebble))app\/[\d\.]+\s/i], [f, u, [d, y]], [/android.+;\s(glass)\s\d/i], [u, [f, "Google"], [d, y]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi .+)\s+build/i], [[u, /_/g, " "], [f, "Xiaomi"], [d, g]], [/android.+(mz-[\w]+)\s+.*build/i], [[u, /_/g, " "], [f, "Meizu"], [d, g]], [/android.+(moto .+)\s+build/i], [[u, /_/g, " "], [f, "Motorola"], [d, g]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[d, _.lowerize], f, u]],
                engine: [[/windows.+\sedge\/([\w\.]+)/i], [h, [l, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [l, h], [/rv\:([\w\.]+).*(gecko)/i], [h, l]],
                os: [[/microsoft\s(windows)\s(vista|xp)/i], [l, h], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [l, [h, x.str, E.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[l, "Windows"], [h, x.str, E.os.windows.version]], [/\((bb)(10);/i], [[l, "BlackBerry"], h], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [l, h], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[l, "Symbian"], h], [/\((series40);/i], [l], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[l, "Firefox OS"], h], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [[l, "Linux"], h], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[l, "Chromium OS"], h], [/(sunos)\s?([\w\.]+\d)*/i], [[l, "Solaris"], h], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [l, h], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[l, "iOS"], [h, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[l, "Mac OS"], [h, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [l, h]]
            },
            k = function D(e, n) {
                if (! (this instanceof D)) return new D(e, n);
                var i = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent: t),
                r = n ? _.extend(S, n) : S;
                return this.getBrowser = function() {
                    var e = x.rgx.apply(this, r.browser);
                    return e.major = _.major(e.version),
                    e
                },
                this.getCPU = function() {
                    return x.rgx.apply(this, r.cpu)
                },
                this.getDevice = function() {
                    return x.rgx.apply(this, r.device)
                },
                this.getEngine = function() {
                    return x.rgx.apply(this, r.engine)
                },
                this.getOS = function() {
                    return x.rgx.apply(this, r.os)
                },
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                },
                this.getUA = function() {
                    return i
                },
                this.setUA = function(e) {
                    return i = e,
                    this
                },
                this
            };
            k.VERSION = e,
            k.BROWSER = {
                NAME: l,
                MAJOR: c,
                VERSION: h
            },
            k.CPU = {
                ARCHITECTURE: p
            },
            k.DEVICE = {
                MODEL: u,
                VENDOR: f,
                TYPE: d,
                CONSOLE: m,
                MOBILE: g,
                SMARTTV: w,
                TABLET: v,
                WEARABLE: y,
                EMBEDDED: b
            },
            k.ENGINE = {
                NAME: l,
                VERSION: h
            },
            k.OS = {
                NAME: l,
                VERSION: h
            };
            var A = function(e) {
                if (!e) return "";
                var t = e.split("."),
                n = "";
                return t.length > 0 && (n += t[0]),
                t.length > 1 && (n += "." + t[1]),
                n
            },
            O = new k,
            T = O.getResult(),
            C = {},
            I = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "",
            N = "",
            P = "",
            M = I.indexOf("-");
            if (M > 0 && (N = I.substr(M + 1).toUpperCase(), I = I.substr(0, M), P = I + "_" + N), "iOS" == T.os.name ? T.os.name = "iPhone OS": "Android" == T.os.name ? T.os.name = "google_android": "Windows" == T.os.name && "mobile" != T.device.type ? T.device.type = "PC": "Mac OS" == T.os.name && "mobile" != T.device.type && (T.device.type = "Mac"), "Mobile Safari" == T.browser.name ? T.browser.name = "Safari": "IEMobile" == T.browser.name ? T.browser.name = "IE": "Opera Mini" == T.browser.name && (T.browser.name = "Opera"), C = {
                sdk_api_version: "2.0",
                sdk_version: "4.12.0",
                OS: T.os.name || "",
                os_version: A(T.os.version),
                os_version_name: T.os.version || "",
                device_model: T.device.model || navigator.platform || "",
                country: N,
                language: I,
                locale: P,
                display_height: window.innerHeight || document.documentElement.clientHeight,
                display_width: window.innerWidth || document.documentElement.clientWidth,
                device_type: T.device.type || "",
                device_vendor: T.device.vendor || "",
                url: window.location.href,
                referrer: document.referrer,
                browser: T.browser.name || "",
                browser_version: A(T.browser.version),
                browser_version_name: T.browser.version || "",
                browser_engine: T.engine.name || ""
            },
            !T.browser.name || !T.browser.version || !T.engine.name) {
                var L = T.ua.match(/(bot|crawl|slurp|spider)/i);
                L && (C.browser = "__spider__")
            }
            R = C
        } ();
        var j = R,
        q = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        },
        U = "ADHOC_MEMBERSHIP_CLIENT_ID",
        F = function() {
            function e(t, i) {
                n(this, e);
                try {
                    var r = C.get(U);
                    this.id = o(i) ? i: o(r) ? r: q(),
                    o(i) || o(r) || C.removeItem("ADHOC_EXP_INFO_" + t),
                    o(i) && o(r) && i != r && C.removeItem("ADHOC_EXP_INFO_" + t),
                    C.set(U, this.id)
                } catch(s) {
                    g(s)
                }
            }
            return e.prototype.getId = function() {
                return this.id
            },
            e.prototype.update = function(e) {
                o(e) ? this.id = e: null
            },
            e
        } (),
        K = function(t) {
            return new _(function(n, i) {
                try {
                    e._adhoc_config_env_ = "production",
                    e._adhoc_md5_ = t;
                    var o = r.createElement("script");
                    o.onload = function() {
                        n("editor ready")
                    },
                    o.onerror = function() {
                        i("load editor failed")
                    },
                    o.setAttribute("charset", "utf-8"),
                    o.src = e.setAbtestingEditorUrl || "https://editor.appadhoc.com/adhoc-editor.js?v=" + (new Date).getTime();
                    var s = r.getElementsByTagName("head")[0];
                    s.appendChild(o)
                } catch(a) {
                    i(a)
                }
            })
        },
        B = function() {
            function e(t) {
                n(this, e),
                this.expList = [],
                this.usedFlagMap = {},
                this.onMatch = t,
                this.use = h(this.use, this)
            }
            return e.prototype.setExpList = function(e) {
                this.expList = e
            },
            e.prototype.use = function(e) {
                var t = this;
                this.usedFlagMap.hasOwnProperty(e) || (this.usedFlagMap[e] = !0, w.each(this.expList,
                function(e, n) {
                    if (!f(e)) return ! 0;
                    var i = !0;
                    w.each(e.flags,
                    function(e) {
                        if (!t.usedFlagMap.hasOwnProperty(e)) return i = !1,
                        !1
                    }),
                    a(i) && t.expList[n] && t.onMatch(t.expList.splice(n, 1)[0])
                }))
            },
            e
        } (),
        H = function() {
            function t(i) {
                var r = this;
                n(this, t);
                var s = i.appKey,
                a = i.clientId,
                u = i.custom,
                l = i.onMatch,
                d = i.defaultFlags,
                f = i.noStorage;
                this.matchedExpList = [],
                this.adhocMatchExp = new B(function(e) {
                    r.matchedExpList.push(e.id),
                    l(e)
                }),
                this.promise = new _(function(n, i) {
                    try {
                        var r = "ADHOC_EXP_INFO_" + s,
                        l = C.getItem(r),
                        h = !1;
                        if (o(l) && c(f)) try {
                            var p = v.parse(e.decodeURIComponent(l));
                            n(p),
                            h = !0
                        } catch(m) {
                            g(m)
                        }
                        E({
                            url: t.protocol + "//experiment." + t.domain + "/get_flags_async",
                            data: {
                                app_key: s,
                                client_id: a,
                                summary: j,
                                custom: u
                            },
                            timeout: t.timeout
                        }).then(function(t) {
                            var i = v.parse(t);
                            c(h) && (h = !0, n(i)),
                            c(f) && C.setItem(r, e.encodeURIComponent(t))
                        })._catch(function(e) {
                            c(h) && (n({
                                experiments: [],
                                flags: d
                            }), h = !0)
                        })
                    } catch(m) {
                        n({
                            experiments: [],
                            flags: d
                        })
                    }
                }).then(function(e) {
                    return r.adhocMatchExp.setExpList(e.experiments),
                    {
                        expInfoOrigin: e,
                        flags: r.expInfo2FlagObj(e)
                    }
                })._catch(function(e) {
                    return m("get flag failed!\n" + e),
                    {
                        expInfoOrigin: d,
                        flags: r.expInfo2FlagObj({
                            flags: d
                        })
                    }
                })
            }
            return t.prototype.getFlags = function(e) {
                return this.promise.then(function(t) {
                    return u(e) && e(t.flags),
                    t
                }),
                this
            },
            t.prototype.getMatchedExpIds = function() {
                return this.matchedExpList
            },
            t.prototype.expInfo2FlagObj = function(e) {
                var t = e.flags,
                n = this.adhocMatchExp.use;
                return {
                    get: function(e) {
                        return t.hasOwnProperty(e) && n(e),
                        t[e]
                    },
                    all: function() {
                        return t
                    }
                }
            },
            t
        } ();
        H.domain = "appadhoc.com",
        H.protocol = e.location.protocol,
        H.timeout = void 0;
        var z = function() {
            function e(t) {
                n(this, e);
                var i = t.appKey,
                r = t.clientId,
                o = t.custom;
                this.appKey = i,
                this.clientId = r,
                this.custom = o,
                this.cachedStats = []
            }
            return e.prototype.track = function(e, t, n, r) {
                var o = this;
                d(t) || (t = [t]),
                w.each(t,
                function(t, r) {
                    var s = 1;
                    "number" == typeof n && (s = n),
                    "object" === ("undefined" == typeof n ? "undefined": i(n)) && n.hasOwnProperty("length") && (s = r < n.length ? n[r] : 1);
                    var a = {
                        key: t,
                        value: s,
                        timestamp: Math.round((new Date).getTime() / 1e3),
                        experiment_ids: e
                    };
                    o.cachedStats.push(a)
                }),
                u(r) ? "": r = function() {},
                e.length > 0 ? (this.send(e, this.cachedStats, r), this.cachedStats = []) : r("no matchedExpId")
            },
            e.prototype.send = function(t, n, i) {
                w.each(n,
                function(e, i) {
                    n[i].experiment_ids = t
                }),
                "" != j.OS && "" != j.browser_version && "" != j.browser_engine && window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("spider") < 0 && E({
                    url: e.protocol + "//tracker." + e.domain + "/tracker",
                    timeout: e.timeout,
                    data: {
                        app_key: this.appKey,
                        client_id: this.clientId,
                        summary: j,
                        custom: this.custom,
                        stats: n
                    }
                }).then(function() {
                    i(null)
                })._catch(function(e) {
                    i(e)
                })
            },
            e
        } ();
        z.domain = "appadhoc.com",
        z.protocol = e.location.protocol,
        z.timeout = void 0;
        var V = function() {
            function e() {
                n(this, e);
                var t = r.createElement("style");
                t.setAttribute("type", "text/css"),
                s(t.styleSheet) && t.appendChild(r.createTextNode("")),
                r.getElementsByTagName("head")[0].appendChild(t),
                this.s = t,
                this.hiddenElementMap = {}
            }
            return e.prototype.update = function() {
                var e = [];
                for (var t in this.hiddenElementMap) e.push(t);
                var n = 0 == e.length ? "": e.join(",") + "{opacity:0 !important; filter:alpha(opacity=0) !important; background:none !important;visibility:hidden !important;}";
                this.s.styleSheet ? this.s.styleSheet.cssText = n: this.s.innerHTML = n
            },
            e.prototype.hide = function() {
                for (var e = this,
                t = arguments.length,
                n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                w.each(n,
                function(t) {
                    e.hiddenElementMap[t] = !0
                }),
                this.update()
            },
            e.prototype.show = function() {
                var e = this;
                try {
                    for (var t = arguments.length,
                    n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    0 == n.length ? this.hiddenElementMap = {}: w.each(n,
                    function(t) {
                        delete e.hiddenElementMap[t]
                    }),
                    this.update()
                } catch(r) {
                    g(r)
                }
            },
            e.prototype.xPath2Css = function(e) {
                var t = e.match(/\w+(?=\[)/g);
                if ("IE" == j.browser && Math.floor(j.browser_version) <= 8) return t.join(">");
                var n = e.match(/\d+(?=\])/g),
                i = [];
                return w.each(t,
                function(e, t) {
                    i.push(e + ":nth-of-type(" + (parseInt(n[t]) + 1) + ")")
                }),
                i.join(">")
            },
            e.prototype.log = function() {
                console.log(this.s.styleSheet.cssText)
            },
            e
        } (),
        X = function(e, t) {
            w.each(e,
            function(e) {
                "domXpath" == e.mode ? w.each(e.elemId,
                function(n) { !
                    function(e, n) {
                        var i = t.xPath2Css(e),
                        r = function a() {
                            var r = N.$(e);
                            if (o(r)) {
                                r.setAttribute("data-adhoc-stat", "true");
                                var c = r.tagName.toLowerCase(),
                                u = r.getAttribute("type");
                                u ? u = u.toLowerCase() : null;
                                var l = r.getAttribute("target"),
                                d = r.getAttribute("href");
                                "a" == c && s(l) && o(d) && d.indexOf("http") > -1 || "input" == c && "submit" == u || "input" == c && "image" == u || "button" == c && "submit" == u ? W(r, n) : N.addEvent(r, "click",
                                function() {
                                    adhoc("track", n, 1,
                                    function() {},
                                    !0)
                                }),
                                t.show(i)
                            } else setTimeout(a)
                        };
                        setTimeout(r)
                    } (n, e.statName)
                }) : w.each(e.doms,
                function(n) { !
                    function(e, n) {
                        var r = function a() {
                            var r = void 0,
                            c = void 0,
                            u = void 0;
                            switch (e.mode) {
                            case "domXpath":
                                r = N.$(e.id),
                                c = t.xPath2Css(e.id);
                                break;
                            case "class":
                                u = e.id.split(" "),
                                r = u.length > 1 ? document.querySelectorAll("[" + e.mode + "='" + e.id + "']") : N.getDoms("." + e.id),
                                c = u.length > 1 ? "[" + e.mode + "='" + e.id + "']": "." + e.id;
                                break;
                            case "id":
                                u = e.id.split(" "),
                                r = u.length > 1 ? document.querySelectorAll("[" + e.mode + "='" + e.id + "']") : document.getElementById(e.id),
                                c = u.length > 1 ? "[" + e.mode + "='" + e.id + "']": "#" + e.id;
                                break;
                            default:
                                r = document.querySelectorAll("[" + e.mode + "='" + e.id + "']"),
                                c = "[" + e.mode + "='" + e.id + "']"
                            }
                            if (o(r) && "object" === ("undefined" == typeof r ? "undefined": i(r)) && void 0 != r.length && r.length > 0 || o(r) && "object" === ("undefined" == typeof r ? "undefined": i(r)) && void 0 == r.length) {
                                var l = function(e) {
                                    e.setAttribute("data-adhoc-stat", "true");
                                    var i = e.tagName.toLowerCase(),
                                    r = e.getAttribute("type");
                                    r ? r = r.toLowerCase() : null;
                                    var a = e.getAttribute("target"),
                                    u = e.getAttribute("href");
                                    "a" == i && s(a) && o(u) && u.indexOf("http") > -1 || "input" == i && "submit" == r || "input" == i && "image" == r || "button" == i && "submit" == r ? W(e, n) : N.addEvent(e, "click",
                                    function() {
                                        adhoc("track", n, 1,
                                        function() {},
                                        !0)
                                    }),
                                    t.show(c)
                                };
                                if (r.length && r.length >= 1) for (var d = 0; d < r.length; d++) l(r[d]);
                                else l(r)
                            } else setTimeout(a)
                        };
                        setTimeout(r)
                    } (n, e.statName)
                })
            })
        },
        W = function(t, n) {
            var i = o(t.tagName) ? t.tagName.toLowerCase() : "";
            t.adhocVisualClicked = !1;
            var s = function() {
                try {
                    if (t && t.dispatchEvent) {
                        var e = r.createEvent("MouseEvents");
                        e.initEvent("click", !0, !0),
                        t.dispatchEvent(e)
                    } else t.click()
                } catch(n) {
                    g(n)
                }
            };
            if ("a" == i) {
                var c = t.parentNode,
                l = N.next(t),
                d = t.cloneNode(!0);
                d.removeAttribute("onclick"),
                d.setAttribute("href", "javascript:;"),
                N.addEvent(d, "click",
                function(i) {
                    a(t.adhocVisualClicked) || (o(i) && u(i.preventDefault) ? i.preventDefault() : i.returnValue = !1, t.adhocVisualClicked = !0, adhoc("track", n, 1,
                    function() {
                        t.adhocVisualClicked = !1;
                        var n = d.getAttribute("href");
                        "javascript:;" == n ? s() : e.location.href = n
                    },
                    !0))
                }),
                c.removeChild(t),
                c.insertBefore(d, l)
            } else {
                var f = N.findParentNodeByTag(t, "form");
                if (o(f)) {
                    var h = null;
                    N.addEvent(t, "click",
                    function() {
                        h = t
                    }),
                    N.addEvent(f, "submit",
                    function(e) {
                        a(t.adhocVisualClicked) || h != t || (t.adhocVisualClicked = !0, o(e) && u(e.preventDefault) ? e.preventDefault() : e.returnValue = !1, adhoc("track", n, 1,
                        function() {
                            s(),
                            t.adhocVisualClicked = !1
                        },
                        !0))
                    })
                } else N.addEvent(t, "click",
                function() {
                    adhoc("track", n, 1,
                    function() {},
                    !0)
                })
            }
        },
        $ = function(e, t) {
            w.each(e,
            function(e) {
                Y(G(e.changes), t)
            })
        },
        G = function(e) {
            for (var t = e.slice(), n = [], i = 0, r = e.length; i < r; i++) {
                for (var o = t[i], s = !1, a = i + 1; a < r; a++) {
                    var c = t[a];
                    if ("src" == c.key && "src" == o.key && c.id == o.id && c.type == o.type && c.mode == o.mode) {
                        s = !0;
                        break
                    }
                }
                s || n.push(o)
            }
            return n
        },
        Y = function(e, t) {
            var n = [];
            w.each(e,
            function(e) { !
                function(e) {
                    var i = void 0,
                    r = function o() {
                        var r = void 0,
                        a = void 0;
                        switch (e.mode) {
                        case "domXpath":
                            r = N.$(e.id),
                            i = t.xPath2Css(e.id);
                            break;
                        case "class":
                            a = e.id.split(" "),
                            r = a.length > 1 ? document.querySelectorAll("[" + e.mode + "='" + e.id + "']") : N.getDoms("." + e.id),
                            i = a.length > 1 ? "[" + e.mode + "='" + e.id + "']": "." + e.id;
                            break;
                        case "id":
                            a = e.id.split(" "),
                            r = a.length > 1 ? document.querySelectorAll("[" + e.mode + "='" + e.id + "']") : document.getElementById(e.id),
                            i = a.length > 1 ? "[" + e.mode + "='" + e.id + "']": "#" + e.id;
                            break;
                        default:
                            r = document.querySelectorAll("[" + e.mode + "='" + e.id + "']"),
                            i = "[" + e.mode + "='" + e.id + "']"
                        }
                        if (s(r) || d(r) && 0 == r.length || 0 == r.length) return void setTimeout(o);
                        var c = function(t) {
                            switch (e.type) {
                            case "attr":
                                if (t.tagName && "img" == t.tagName.toLowerCase() && "src" == e.key.toLowerCase()) {
                                    var i = void 0;
                                    n.indexOf(t) == -1 && (i = t.style.visibility),
                                    t.style.visibility = "hidden",
                                    n.push(t);
                                    var r = new Image;
                                    r.onload = function() {
                                        t.setAttribute("src", e.val),
                                        setTimeout(function() {
                                            t.style.visibility = i
                                        },
                                        100),
                                        t.onload = function() {
                                            t.getAttribute("src") != e.val && t.setAttribute("src", e.val)
                                        }
                                    },
                                    r.onerror = function() {
                                        t.style.visibility = i
                                    },
                                    r.src = e.val
                                } else t.setAttribute(e.key, e.val);
                                break;
                            case "html":
                                t.outerHTML = e.val;
                                break;
                            case "text":
                                t.innerText = e.val;
                                break;
                            case "style":
                                var o = void 0;
                                "ie" == j.browser.toLowerCase() && "7.0" == j.browser_version ? (o = t.style.cssText || "", t.style.cssText = o + ";" + e.val) : (o = t.getAttribute("style") || "", t.setAttribute("style", o + ";" + e.val));
                                break;
                            case "drag":
                                var a = N.$(e.val),
                                c = a.parentNode;
                                "after" == e.key && (a = N.next(a)),
                                c.insertBefore(t, a);
                                break;
                            case "sequence":
                                d(e.val) && (w.each(N.getChildren(t),
                                function(e, n) {
                                    e && (s(e.getAttribute(L)) && e.setAttribute(L, n), s(e.getAttribute(D)) && w.each(N.getChildren(t, e.tagName.toLowerCase()),
                                    function(e, t) {
                                        s(e.getAttribute(D)) && e.setAttribute(D, t)
                                    }))
                                }), w.each(e.val.reverse(),
                                function(e) {
                                    var n = N.getChildren(t);
                                    n[e] && s(n[e].getAttribute(L)) ? t.insertBefore(n[e], n[0]) : w.each(n,
                                    function(i) {
                                        i.getAttribute(L) == e && t.insertBefore(i, n[0])
                                    })
                                }))
                            }
                        };
                        if (r.length && r.length >= 1) for (var u = 0; u < r.length; u++) c(r[u]);
                        else c(r);
                        t.show(i)
                    };
                    setTimeout(r)
                } (e)
            })
        },
        J = function(e) {
            var t = new V,
            n = [],
            i = [],
            r = [];
            w.each(e,
            function(e) {
                return !! s(e) || (d(e.changes) && (w.each(e.changes,
                function(e) {
                    "domXpath" == e.mode && i.push(t.xPath2Css(e.id))
                }), n.push(e)), void(d(e.stats) && w.each(e.stats,
                function(e) {
                    "domXpath" == e.mode && w.each(e.elemId,
                    function(e) {
                        i.push(t.xPath2Css(e))
                    }),
                    r.push(e)
                })))
            }),
            t.hide.apply(t, i),
            X(r, t),
            $(n, t)
        },
        Q = function(t, n, i, r, u) {
            return new _(function(l, d) {
                var h = t.all(),
                p = ee(n);
                if (c(p)) return d("no referrer in control group");
                var m = [],
                g = null;
                for (var w in h) {
                    var y = h[w],
                    b = void 0;
                    try {
                        b = v.parse(y)
                    } catch(_) {
                        continue
                    }
                    for (var x in b) {
                        var E = b[x];
                        if (!s(E) && !s(E.mode)) {
                            var S = "regex" == E.mode ? E.regexp: E.url;
                            if (a(te(p, S, E.mode, u))) {
                                var A = e.navigator && e.navigator.userAgent ? e.navigator.userAgent: "";
                                if (o(E.ua) && c(new RegExp(E.ua, "i").test(A))) continue;
                                var O = E.data || {};
                                if (s(g) && o(O.newPageUrl) && n != ce.SPLIT && "" != O.newPageUrl) {
                                    if (0 != O.newPageUrl.indexOf("http")) return void d("newPageUrl error!\n" + E.newPageUrl);
                                    g = {
                                        newUrl: O.newPageUrl,
                                        originUrl: p
                                    }
                                } else t.get(w);
                                m.push(E.data)
                            }
                        }
                    }
                }
                if (f(g)) {
                    var T = Z(g, i, r);
                    M.setName(g.originUrl);
                    var C = Math.random();
                    k({
                        active: "replace",
                        clientid: i,
                        newpageurl: T,
                        step: 0,
                        id: C
                    }),
                    e.location.replace(T),
                    k({
                        active: "replace",
                        clientid: i,
                        newpageurl: T,
                        step: 1,
                        id: C
                    }),
                    setTimeout(function() {
                        k({
                            active: "replace",
                            clientid: i,
                            newpageurl: T,
                            step: 3,
                            id: C
                        }),
                        d("redirect failed")
                    },
                    1e3)
                } else try {
                    J(m),
                    l()
                } catch(_) {
                    d(_)
                }
            })
        },
        Z = function(e, t, n) {
            var i = e.newUrl,
            r = ne(i) + ("?" + ue.SPLIT + "=" + t),
            s = S.getSearch(i);
            if (s && (r += "&" + s.substr(1)), c(n)) {
                var a = S.getSearch(e.originUrl).substr(1).split("&");
                w.each(a,
                function(e, t) { (o(e) && e.indexOf("adhoc") > -1 || "" == e) && a.splice(t, 1)
                }),
                a.length > 0 ? r += "&" + a.join("&") : null
            }
            var u = S.getHash(i);
            return "#" == u ? u = "": "",
            r += u
        },
        ee = function(t) {
            var n = void 0;
            if (t == ce.SPLIT) {
                if (n = M.getName(), !n || n.indexOf("http") < 0) return ! 1
            } else n = e.location.href;
            var i = S.getProtocol(n),
            r = S.getHost(n),
            o = S.getPath(n),
            s = S.getHash(n),
            a = S.getSearch(n),
            c = "";
            if (a.length > 0 && 0 == a.indexOf("?")) {
                var u = a.substr(1).split("&"),
                l = u.length;
                w.each(u,
                function(e, t) {
                    return "" == e || e.indexOf("adhoc_force_client_id") >= 0 || (c += e, void(t < l - 1 && (c += "&")))
                }),
                c.length > 0 && (c = "?" + c)
            }
            return i + "//" + r + o + c + s
        },
        te = function(e, t, n, i) {
            switch (n) {
            case "regex":
                return new RegExp(t.replace("?", "\\?").replace(/\*/g, "\\S*") + "$").test(e);
            case "equal":
                if (a(i)) {
                    if (ne(t) == ne(e) && S.getHash(t) == S.getHash(e)) {
                        var r = "&" + S.getSearch(e).substr(1) + "&",
                        o = S.getSearch(t).substr(1).split("&"),
                        s = !0;
                        return w.each(o,
                        function(e) {
                            return "" == e || (r.indexOf("&" + e + "&") < 0 ? (s = !1, !1) : void 0)
                        }),
                        s
                    }
                    return ! 1
                }
                if (t.indexOf("?") > -1 || t.indexOf("#") > -1) {
                    var c = S.getProtocol(e) + S.getHost(e) + S.getPath(e) + S.getSearch(e) + S.getHash(e),
                    u = S.getProtocol(t) + S.getHost(t) + S.getPath(t) + S.getSearch(t) + S.getHash(t);
                    return c == u
                }
                return ne(e) == ne(t)
            }
        },
        ne = function(e) {
            return S.getProtocol(e) + "//" + S.getHost(e) + S.getPath(e)
        },
        ie = "ADHOC_CROSS_PAGE_EXPIDS",
        re = 1800,
        oe = function() {
            function e(t, i) {
                n(this, e);
                var r = C.get(ie) || "[]";
                this.ids = v.parse(r),
                this.domain = t,
                this.duration = i || re
            }
            return e.prototype.getCrossExpIds = function() {
                return this.ids
            },
            e.prototype.concatExp = function(e) {
                var t = this;
                return w.each(e,
                function(e) {
                    w.uniquePush(t.ids, e)
                }),
                this.ids
            },
            e.prototype.save = function(e) {
                w.uniquePush(this.ids, e),
                C.set(ie, v.stringify(this.ids), this.duration, this.domain)
            },
            e
        } (),
        se = function() {
            function e() {
                n(this, e),
                this.events = {}
            }
            return e.prototype.on = function(e, t) {
                this.events.hasOwnProperty(e) || (this.events[e] = []),
                this.events[e].push(t)
            },
            e.prototype.trigger = function() {
                for (var e = arguments.length,
                t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var i = t.shift(),
                r = this.events[i];
                if (void 0 != r) for (var o = 0; o < r.length; o++) r[o].apply(null, t)
            },
            e.getInstance = function() {
                return e.instance || (e.instance = new e),
                e.instance
            },
            e
        } (),
        ae = se.getInstance(),
        ce = {
            EDITOR: "editor",
            SPLIT: "split",
            FORCE_CLIENT: "force_client",
            NORMAL: "normal"
        },
        ue = {
            SPLIT: "__adhoc_split_id__",
            FORCE_CLIENT: "adhoc_force_client_id",
            APP_KEY: "appKey"
        },
        le = function() {
            function t() {
                n(this, t),
                this.appKey = void 0,
                this.client = void 0,
                this.mode = void 0,
                this.exp = void 0,
                this.tracker = void 0,
                this.style = new V,
                this.crossExp = void 0,
                this.event = ae
            }
            return t.prototype.init = function(t) {
                var n = {
                    appKey: void 0,
                    clientId: void 0,
                    defaultFlags: {},
                    custom: {},
                    stopUrlParams: !1,
                    filterUrlParams: !1,
                    protocol: e.location.protocol,
                    domain: "appadhoc.com",
                    timeout: 3e3,
                    crossDomain: void 0,
                    crossDomainDuration: void 0
                };
                if (y.assign(n, t), s(n.appKey)) return g("adhoc needs an appKey, get it from your abtesting web console please");
                if (o(this.appKey)) return g("please just init adhoc once");
                this.appKey = n.appKey,
                this.client = new F(n.appKey, n.clientId),
                this.custom = n.custom || {},
                this.defaultFlags = f(n.defaultFlags) ? n.defaultFlags: {},
                this.stopUrlParams = !!n.stopUrlParams,
                this.filterUrlParams = !!n.filterUrlParams,
                this.crossDomain = n.crossDomain,
                this.crossExp = new oe(this.crossDomain, n.crossDomainDuration),
                H.domain = z.domain = n.domain,
                H.protocol = z.protocol = n.protocol,
                H.timeout = z.timeout = n.timeout,
                this.setOverlay(!0);
                var i = S.getQueryString(ue.SPLIT),
                r = S.getQueryString(ue.FORCE_CLIENT),
                a = /openSDK/.test(M.getName()) ? ce.EDITOR: i ? ce.SPLIT: r ? ce.FORCE_CLIENT: ce.NORMAL;
                switch (this.mode = a, a) {
                case ce.EDITOR:
                    S.getQueryString(ue.APP_KEY, M.getName()) === this.appKey ? (this.setOverlay(!1), K(this.appKey)._catch(function(e) {
                        g("init editor failed! \n " + e)
                    })) : (this.setOverlay(!1), alert("appkey error"));
                    break;
                case ce.SPLIT:
                    this.initSDK(i);
                    break;
                case ce.FORCE_CLIENT:
                    this.initSDK(r);
                    break;
                case ce.NORMAL:
                default:
                    this.initSDK()
                }
            },
            t.prototype.initSDK = function(e) {
                var t = this,
                n = this.mode == ce.FORCE_CLIENT;
                this.mode == ce.SPLIT && M.getName().indexOf("force_client_id") > 0 && (n = !0),
                o(e) ? this.client.update(e) : "",
                this.exp = new H({
                    appKey: this.appKey,
                    clientId: this.client.getId(),
                    custom: this.custom,
                    noStorage: n,
                    defaultFlags: this.defaultFlags,
                    onMatch: function(e) {
                        t.event.trigger("MatchExperiment", e),
                        t.tracker.track([e.id], "Event-GET_EXPERIMENT_FLAGS", 1),
                        t.event.trigger("Track", {
                            statname: "PV",
                            expids: [e.id],
                            value: 1
                        }),
                        t.crossDomain && t.crossExp.save(e.id)
                    }
                }).getFlags(function(e) {
                    Q(e, t.mode, t.client.getId(), t.stopUrlParams, t.filterUrlParams).then(function() {
                        t.setOverlay(!1)
                    })._catch(function(e) {
                        t.setOverlay(!1),
                        g(e)
                    })
                }),
                this.tracker = new z({
                    appKey: this.appKey,
                    clientId: this.client.getId(),
                    custom: this.custom
                })
            },
            t.prototype.getFlags = function(e) {
                o(this.exp) ? this.exp.getFlags(function(t) {
                    u(e) && e(t)
                }) : g("please try:\n\tadhoc('init', {appKey: 'your adhoc appKey'})")
            },
            t.prototype.track = function(e, t, n) {
                if (o(this.tracker)) {
                    var i = this.crossExp.concatExp(this.exp.getMatchedExpIds());
                    this.tracker.track(i, e, t, n),
                    i && 0 != i.length && this.event.trigger("Track", {
                        statname: e,
                        expids: i,
                        value: t
                    })
                } else u(n) ? n("no matchedExpId") : "",
                g("please try:\n\tadhoc('init', {appKey: 'your adhoc appKey'})")
            },
            t.prototype.setOverlay = function(e) {
                e || (this.setOverlay = function() {}),
                this.style[e ? "hide": "show"]("*", "body")
            },
            t.prototype.on = function(e, t) {
                this.event.on(e, t)
            },
            t
        } (); !
        function() {
            var e = void 0;
            le.getInstance = function(t) {
                return s(e) && (e = new le),
                e
            }
        } ();
        var de = le.getInstance(),
        fe = function() {
            for (var e = arguments.length,
            t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t.shift();
            try {
                if (s(i)) return m("apiName is not defined");
                if ("track" == i) {
                    var r = t[0],
                    o = (new Date).getTime();
                    if (a(t[3]));
                    else {
                        if (l(ge[r]) && o - ge[r] < 3e3) throw new Error("please do not track one stat frequently");
                        ge[r] = o
                    }
                }
                switch (i) {
                case "initSDK":
                    break;
                case "show":
                    return pe.apply(void 0, t);
                case "hide":
                    return me.apply(void 0, t);
                default:
                    if (s(this[i])) throw new Error("api: " + i + " is not exist");
                    return this[i].apply(this, t)
                }
            } catch(c) {
                g(c)
            }
        },
        he = new V,
        pe = function() {
            he.show.apply(he, arguments)
        },
        me = function() {
            he.hide.apply(he, arguments)
        },
        ge = {},
        ve = function() {
            for (var e = arguments.length,
            t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return fe.apply(de, t)
        };
        e.adhoc = ve,
        e.adhoc.init = function(e, t) {
            adhoc("init", {
                appKey: e,
                clientId: t
            })
        },
        N.querySelectorPolyfill()
    } (window, document),
    t["true"] = e
} ({},
function() {
    return this
} ());