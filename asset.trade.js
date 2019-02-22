(this.webpackJsonp = this.webpackJsonp || []).push([[6], {
    1453: function(e, t, r) {
        "use strict";
        var n = r(0)
          , o = r.n(n)
          , i = r(4)
          , a = r(2)
          , c = r(3)
          , l = (r(11),
        r(13));
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function s(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , l = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function f(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        s(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        s(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function p(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function b(e, t) {
            return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var h = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = b(this, (e = y(t)).call.apply(e, [this].concat(o)))).onClick = f(regeneratorRuntime.mark(function e() {
                    var t, n, o, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = r.props,
                                n = t.order,
                                o = t.destroyOrder,
                                i = t.removeOrder,
                                !n.active) {
                                    e.next = 5;
                                    break
                                }
                                return r.trackClick("cancel"),
                                e.next = 5,
                                o(n);
                            case 5:
                                n.done && (r.trackClick("remove"),
                                i(n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                r.trackClick = function(e) {
                    var t = r.props.order;
                    Object(l.d)("mobile_cancel_order", {
                        market: t.product_id,
                        side: t.side,
                        type: t.type,
                        action: e
                    })
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(t, o.a.Component),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.order;
                    return e.active || e.done ? o.a.createElement(m, {
                        center: !0,
                        onClick: this.onClick
                    }, o.a.createElement(c.b, null)) : null
                }
            }]) && p(r.prototype, n),
            i && p(r, i),
            t
        }()
          , m = Object(a.c)(c.c).withConfig({
            componentId: "sc-12600om-0"
        })(["padding:8px;", ";"], function(e) {
            var t = e.theme;
            return Object(a.b)(["&:hover{background:", ";}"], t.colors.alert.default)
        })
          , v = Object(i.c)(h)
          , g = r(8)
          , O = Object(a.c)(c.h).withConfig({
            componentId: "sc-6bt7ic-0"
        })(["text-transform:capitalize;"])
          , w = Object(i.c)(function(e) {
            var t = e.order
              , r = t.product_id
              , n = t.stop_price
              , i = t.status
              , a = t.side
              , l = e.fontSize
              , u = e.labelFontSize
              , s = g.D.getProductById(r);
            if (!s)
                return null;
            var f = a;
            return n && "open" !== i && "done" !== i && (f = "Stop @ ".concat(n.toFixed(s.price_precision))),
            o.a.createElement(c.c, {
                column: !0
            }, o.a.createElement(c.h, {
                fontSize: l
            }, r), o.a.createElement(O, {
                fontSize: u,
                intent: "label"
            }, f))
        })
          , S = r(5)
          , j = Object(a.c)(c.c).withConfig({
            componentId: "sc-1xwousz-0"
        })(["align-items:center;", ";"], function(e) {
            var t = e.theme;
            return Object(a.b)(["color:", ";"], t.colors.label.default)
        })
          , _ = Object(a.c)(S.h).attrs({
            size: "small",
            color: "currentColor"
        }).withConfig({
            componentId: "sc-1xwousz-1"
        })(["margin-right:2px;"])
          , x = Object(i.c)(function(e) {
            var t = e.order
              , r = t.product_id
              , n = t.displayedPrice
              , i = t.fill_fees
              , a = e.fontSize
              , l = e.labelFontSize
              , u = e.precision
              , s = void 0 === u ? 4 : u
              , f = g.D.getProductById(r);
            if (!f)
                return null;
            var p = f.quote;
            return o.a.createElement(c.c, {
                column: !0
            }, n ? o.a.createElement(c.c, {
                align: "center"
            }, o.a.createElement(_, {
                currency: p.id
            }), o.a.createElement(S.v, {
                value: n,
                precision: f.price_precision,
                approximate: !0,
                fontSize: a
            })) : o.a.createElement(c.h, {
                fontSize: a
            }, "MKT"), o.a.createElement(c.c, {
                align: "center"
            }, o.a.createElement(j, null, o.a.createElement(_, {
                currency: p.id
            })), o.a.createElement(S.v, {
                value: i,
                intent: "label",
                precision: Math.min(f.price_precision, s),
                approximate: !0,
                fontSize: l
            })))
        })
          , E = Object(a.c)(c.c).withConfig({
            componentId: "sc-1tu83t6-0"
        })(["height:36px;border-left:3px solid ", ";"], function(e) {
            var t = e.side;
            return e.theme.colors[t].default
        })
          , k = Object(i.c)(function(e) {
            var t = e.order.side;
            return o.a.createElement(E, {
                side: t
            })
        })
          , C = Object(a.c)(c.c).withConfig({
            componentId: "sc-1ojdhqo-0"
        })(["align-items:center;", ";"], function(e) {
            var t = e.theme;
            return Object(a.b)(["color:", ";"], t.colors.label.default)
        })
          , P = Object(a.c)(S.h).attrs({
            size: "small",
            color: "currentColor"
        }).withConfig({
            componentId: "sc-1ojdhqo-1"
        })(["margin-right:2px;"])
          , T = Object(i.c)(function(e) {
            var t = e.order
              , r = t.sizeAndUnit
              , o = t.filled_size
              , i = t.product_id
              , a = e.fontSize
              , l = e.labelFontSize
              , u = e.precision
              , s = void 0 === u ? 4 : u
              , f = g.D.getProductById(i);
            if (!f)
                return null;
            var p = r.size
              , b = r.unit
              , y = "base" === b ? f.base : f.quote
              , d = f.base;
            return n.createElement(c.c, {
                column: !0
            }, n.createElement(c.c, {
                align: "center"
            }, n.createElement(P, {
                currency: y.id
            }), n.createElement(S.v, {
                value: p,
                precision: Math.min("base" === b ? f.base_precision : f.price_precision, s),
                fontSize: a,
                approximate: !0
            })), n.createElement(c.c, {
                align: "center"
            }, n.createElement(C, null, n.createElement(P, {
                currency: d.id
            })), n.createElement(S.v, {
                value: o,
                precision: Math.min(f.base_precision, s),
                fontSize: l,
                intent: "label",
                approximate: !0
            })))
        });
        r.d(t, "a", function() {
            return v
        }),
        r.d(t, "b", function() {
            return w
        }),
        r.d(t, "c", function() {
            return x
        }),
        r.d(t, "d", function() {
            return k
        }),
        r.d(t, "e", function() {
            return T
        })
    },
    1472: function(e, t, r) {
        "use strict";
        var n, o, i, a, c, l, u, s, f, p = r(1), b = r(7), y = r.n(b), d = r(236), h = r(10), m = r(8), v = r(30), g = r(11), O = r(13);
        function w(e) {
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function S(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , l = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function j(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        S(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        S(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function _(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function x(e) {
            return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function E(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function k(e, t, r) {
            return t && E(e.prototype, t),
            r && E(e, r),
            e
        }
        function C(e, t) {
            return (C = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function P(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function T(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var z = (o = T((n = function(e) {
            function t() {
                var e, r, n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                r = this,
                n = x(t).call(this),
                _(e = !n || "object" !== w(n) && "function" != typeof n ? P(r) : n, "_userCurrency", o, P(P(e))),
                _(e, "selectedCurrency", i, P(P(e))),
                _(e, "ledgerStores", a, P(P(e))),
                _(e, "holdStores", c, P(P(e))),
                e.limitsStore = new d.a,
                _(e, "disposers", l, P(P(e))),
                e.depositsStore = new m.d(g.x),
                e.withdrawalsStore = new m.d(g.x),
                e.oneToOneCurrencies = [["USD", "USDC"]],
                e.loadTransfers = j(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Promise.all([e.depositsStore.fetch(), e.withdrawalsStore.fetch()]);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                e.createAccountStores = function() {
                    e.accounts.forEach(function(t) {
                        if (!e.holdStores[t.currency]) {
                            var r = new m.d(t.Hold());
                            e.holdStores[t.currency] = r
                        }
                        if (!e.ledgerStores[t.currency]) {
                            var n = new m.d(t.Transaction());
                            e.ledgerStores[t.currency] = n
                        }
                    })
                }
                ,
                _(e, "setSelectedCurrency", u, P(P(e))),
                _(e, "refreshAccounts", s, P(P(e))),
                e.refresh = function() {
                    e.createAccountStores(),
                    e._userCurrency = e.limitCurrency
                }
                ,
                e.lastTradePriceInUserCurrency = function(t) {
                    var r = P(P(e)).userCurrency;
                    return e.oneToOneCurrencies.some(function(e) {
                        return e.includes(r.id) && e.includes(t.id)
                    }) ? y()(1) : m.w.currencyConversion(y()(1), t, r)
                }
                ,
                e.dailyChangeInUserCurrency = function(t) {
                    var r = P(P(e)).userCurrency;
                    if (!e.oneToOneCurrencies.some(function(e) {
                        return e.includes(r.id) && e.includes(t.id)
                    }))
                        return m.w.percentChangeArbitraryCurrencies(t, r)
                }
                ,
                e.convertBalanceToUserCurrency = function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "balance"
                      , n = m.x.findById(t.currency)
                      , o = P(P(e)).userCurrency;
                    if (!o)
                        throw new h.e("Trying to convert between invalid currencies");
                    var i = "balance" === r ? t.balance : "hold" === r ? t.hold : t.available;
                    return e.oneToOneCurrencies.some(function(e) {
                        return e.includes(n.id) && e.includes(o.id)
                    }) ? i : m.w.currencyConversion(i, n, o)
                }
                ,
                _(e, "updateUserCurrency", f, P(P(e))),
                e.depositsStore.query = {
                    type: "deposit"
                },
                e.withdrawalsStore.query = {
                    type: "withdraw"
                },
                e
            }
            var r;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && C(e, t)
            }(t, m["c"]),
            k(t, [{
                key: "subscribe",
                value: function() {
                    this.disposers.push(Object(p.observe)(m.u, "accounts", this.refresh))
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    this.disposers.forEach(function(e) {
                        return e()
                    }),
                    this.disposers = []
                }
            }]),
            k(t, [{
                key: "_fetch",
                value: (r = j(regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.all([m.u.fetch(), m.D.fetch(), this.limitsStore.fetch(), this.loadTransfers()]);
                            case 2:
                                Object(p.runInAction)(function() {
                                    t.refresh()
                                });
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                function() {
                    return r.apply(this, arguments)
                }
                )
            }, {
                key: "sumAcrossCurrencies",
                value: function(e) {
                    var t = this
                      , r = m.u.accounts
                      , n = y()(0);
                    return r.forEach(function(r) {
                        var o = t.convertBalanceToUserCurrency(r, e);
                        o && (n = n.add(o))
                    }),
                    n
                }
            }, {
                key: "selectedAccount",
                get: function() {
                    var e = this.selectedCurrency;
                    if (!e)
                        return null;
                    var t = this.accounts.find(function(t) {
                        return t.currency === e.id
                    }) || this.accounts[0];
                    if (!t)
                        throw new h.c("User does not have account for selected currency");
                    return t
                }
            }, {
                key: "limitCurrency",
                get: function() {
                    var e = (this.limitsStore.exchangeLimits || {}).limit_currency;
                    if (!e)
                        throw new h.c("No limit currency found");
                    var t = m.x.findById("USD");
                    return m.x.currencies[e] || t
                }
            }, {
                key: "selectedLedger",
                get: function() {
                    var e = this.selectedCurrency;
                    if (!e)
                        throw new h.e("No selected currency, can't get ledger");
                    var t = this.ledgerStores[e.id];
                    if (!t)
                        throw new h.e("No store for currency ".concat(e.id));
                    return t.loader,
                    t
                }
            }, {
                key: "selectedHolds",
                get: function() {
                    var e = this.selectedCurrency;
                    if (!e)
                        throw new h.e("No selected currency, can't get holds");
                    var t = this.holdStores[e.id];
                    if (!t)
                        throw new h.e("No holds store for currency ".concat(e.id));
                    return t.loader,
                    t
                }
            }, {
                key: "accounts",
                get: function() {
                    var e = m.u.accounts
                      , t = m.E.getDefaultProfile();
                    return e.slice().sort(function(e, r) {
                        var n = m.x.findById(e.currency)
                          , o = m.x.findById(r.currency)
                          , i = e.profile_id
                          , a = r.profile_id;
                        if (t && i !== a) {
                            if (i === t.id)
                                return -1;
                            if (a === t.id)
                                return 1
                        }
                        return n && o ? g.i.comparator(n, o) : 0
                    })
                }
            }, {
                key: "availableCurrencies",
                get: function() {
                    return this.accounts.map(function(e) {
                        return m.x.findById(e.currency)
                    }).filter(function(e) {
                        return e.isQuoteCurrency
                    })
                }
            }, {
                key: "totalHoldings",
                get: function() {
                    return this.sumAcrossCurrencies("balance")
                }
            }, {
                key: "onHold",
                get: function() {
                    return this.sumAcrossCurrencies("hold")
                }
            }, {
                key: "availableBalance",
                get: function() {
                    return this.sumAcrossCurrencies("available")
                }
            }, {
                key: "userCurrency",
                get: function() {
                    var e = this._userCurrency;
                    if (!e)
                        throw new h.e("User currency is not set");
                    return e
                }
            }, {
                key: "exchangeLimits",
                get: function() {
                    var e = this.limitsStore.exchangeLimits || {}
                      , t = e.transfer_limits
                      , r = void 0 === t ? {} : t
                      , n = e.limit_currency
                      , o = r.exchange_withdraw
                      , i = void 0 === o ? {} : o
                      , a = i[n] || {}
                      , c = a.max
                      , l = a.remaining;
                    if (!c || !l) {
                        var u = new h.c("Could not get limits for user");
                        throw Object(v.b)(u, "noLimitError", {
                            limit_currency: n,
                            exchange_withdraw: i
                        }),
                        u
                    }
                    return {
                        used: y()(c - l),
                        total: y()(c)
                    }
                }
            }]),
            t
        }()).prototype, "_userCurrency", [p.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }),
        i = T(n.prototype, "selectedCurrency", [p.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }),
        a = T(n.prototype, "ledgerStores", [p.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        c = T(n.prototype, "holdStores", [p.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        l = T(n.prototype, "disposers", [p.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        u = T(n.prototype, "setSelectedCurrency", [p.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t) {
                    return e.selectedCurrency = t || null
                }
            }
        }),
        s = T(n.prototype, "refreshAccounts", [p.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return function() {
                    m.u.refreshAccounts()
                }
            }
        }),
        T(n.prototype, "_fetch", [p.action], Object.getOwnPropertyDescriptor(n.prototype, "_fetch"), n.prototype),
        T(n.prototype, "selectedAccount", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "selectedAccount"), n.prototype),
        T(n.prototype, "limitCurrency", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "limitCurrency"), n.prototype),
        T(n.prototype, "selectedLedger", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "selectedLedger"), n.prototype),
        T(n.prototype, "selectedHolds", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "selectedHolds"), n.prototype),
        T(n.prototype, "accounts", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "accounts"), n.prototype),
        T(n.prototype, "availableCurrencies", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "availableCurrencies"), n.prototype),
        T(n.prototype, "totalHoldings", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "totalHoldings"), n.prototype),
        T(n.prototype, "onHold", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "onHold"), n.prototype),
        T(n.prototype, "availableBalance", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "availableBalance"), n.prototype),
        f = T(n.prototype, "updateUserCurrency", [p.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t) {
                    Object(O.d)("my_wallets_currency_selected", {
                        currency: e._userCurrency && e._userCurrency.id || "",
                        selected_currency: t
                    }),
                    e._userCurrency = m.x.findById(t || "") || null
                }
            }
        }),
        T(n.prototype, "userCurrency", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "userCurrency"), n.prototype),
        T(n.prototype, "exchangeLimits", [p.computed], Object.getOwnPropertyDescriptor(n.prototype, "exchangeLimits"), n.prototype),
        n);
        t.a = new z
    },
    1810: function(e, t, r) {
        e.exports = r.p + "assets/whitelisting.06f68ba92dbcb97f785bdfbbbe38d994.png"
    },
    1811: function(e, t, r) {
        e.exports = r.p + "favicon-price-up.ico"
    },
    1812: function(e, t, r) {
        e.exports = r.p + "favicon-price-down.ico"
    },
    1844: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, o = r(0), i = r.n(o), a = r(135), c = r(435), l = r(4), u = r(20), s = r(8);
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function p(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function b(e, t) {
            return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var h, m, v, g, O, w, S, j, _, x, E, k, C, P = Object(l.c)(n = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                    i[c] = arguments[c];
                return (r = b(this, (e = y(t)).call.apply(e, [this].concat(i)))).renderComponent = function(e) {
                    var t = e.match.params
                      , n = r.props
                      , i = n.path
                      , c = n.component
                      , l = s.D.selectProduct(t.productId);
                    return a.a.setProductById(l),
                    l && t.productId !== l ? o.createElement(u.e, {
                        to: "".concat(i, "/").concat(l)
                    }) : o.createElement(c, {
                        productId: t.productId
                    })
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.path;
                    return s.D.loading ? null : o.createElement(u.g, null, o.createElement(u.f, {
                        path: "".concat(e, "/:productId"),
                        render: this.renderComponent
                    }), o.createElement(u.f, {
                        exact: !0,
                        path: e,
                        render: this.renderComponent
                    }))
                }
            }]) && p(r.prototype, n),
            i && p(r, i),
            t
        }()) || n, T = r(13), z = r(30), A = r(10), R = r(9), I = r(1472), D = r(316), M = r(1), B = r(7), F = r.n(B), L = r(11);
        function W(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function U(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function N(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function q(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var H = "post_only_disabled"
          , G = (m = q((h = function() {
            function e(t) {
                var r = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                U(this, "type", m, this),
                U(this, "side", v, this),
                U(this, "price", g, this),
                U(this, "amount", O, this),
                U(this, "stop_price", w, this),
                U(this, "show_advanced", S, this),
                U(this, "time_in_force", j, this),
                U(this, "cancel_after", _, this),
                U(this, "post_only", x, this),
                this.ordersStore = void 0,
                this.disposers = [],
                U(this, "reset", E, this),
                U(this, "toggleAdvanced", k, this),
                this.setTypeMarket = function() {
                    return r.setType("market")
                }
                ,
                this.setTypeLimit = function() {
                    return r.setType("limit")
                }
                ,
                this.setTypeStop = function() {
                    return r.setType("stop")
                }
                ,
                U(this, "prefillMax", C, this),
                this.buildOrder = function() {
                    var e = a.a.product
                      , t = a.a.profile
                      , n = new L.k({
                        profile_id: t.id,
                        product_id: e.id,
                        side: r.side,
                        client_oid: L.k.generate_client_oid(),
                        filled_size: F()(0),
                        fill_fees: F()(0),
                        status: "pending"
                    });
                    if ("market" === r.type && (n.type = r.type,
                    "buy" === n.side ? n.funds = F()(r.amount) : n.size = F()(r.amount)),
                    "limit" === r.type && (n.type = r.type,
                    n.price = F()(r.price),
                    n.size = F()(r.amount),
                    n.post_only = r.post_only,
                    r.show_advanced && (n.time_in_force = r.time_in_force,
                    n.cancel_after = "GTT" === r.time_in_force ? r.cancel_after : "")),
                    "stop" === r.type)
                        if (n.type = "market",
                        n.stop = "buy" === r.side ? "entry" : "loss",
                        n.stop_price = F()(r.stop_price),
                        r.show_advanced && r.price)
                            if (n.type = "limit",
                            n.price = F()(r.price),
                            "entry" === n.stop) {
                                var o = e.base.precision;
                                n.size = F()(r.amount).div(n.price).round(o, 0)
                            } else
                                n.size = F()(r.amount);
                        else
                            "entry" === n.stop ? n.funds = F()(r.amount) : n.size = F()(r.amount);
                    return t.margin_enabled && "stop" !== r.type && (n.overdraft_enabled = !0),
                    n
                }
                ,
                this.ordersStore = t.ordersStore;
                var n = s.J.user;
                this.post_only = !!n && !n.get_preference(H)
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "subscribe",
                value: function() {
                    this.disposers.push(Object(M.observe)(a.a, "product", this.reset)),
                    this.disposers.push(Object(M.observe)(a.a, "profile", this.reset)),
                    s.B.addSubscriber(this)
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    this.disposers.forEach(function(e) {
                        return e()
                    }),
                    this.disposers.length = 0,
                    s.B.removeSubscriber(this)
                }
            }, {
                key: "track",
                value: function(e, t) {
                    Object(T.d)(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {}
                              , n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))),
                            n.forEach(function(t) {
                                W(e, t, r[t])
                            })
                        }
                        return e
                    }({}, t, {
                        product_id: a.a.product.id,
                        order_side: this.side,
                        order_type: this.type
                    }))
                }
            }, {
                key: "setType",
                value: function(e) {
                    this.type !== e && (this.type = e,
                    this.track("order_tab_selected"),
                    this.amount = "",
                    this.price = "",
                    this.stop_price = "")
                }
            }, {
                key: "setSide",
                value: function(e) {
                    this.side !== e && (this.side = e,
                    this.track("order_side_selected"),
                    "limit" !== this.type && (this.amount = ""))
                }
            }, {
                key: "setAmount",
                value: function(e) {
                    this.amount = e
                }
            }, {
                key: "setPrice",
                value: function(e) {
                    this.price = e
                }
            }, {
                key: "setStopPrice",
                value: function(e) {
                    this.stop_price = e
                }
            }, {
                key: "setCancelAfter",
                value: function(e) {
                    this.cancel_after = e,
                    this.track("limit_order_cancel_after_updated", {
                        cancel_after: e
                    })
                }
            }, {
                key: "setTimeInForce",
                value: function(e) {
                    var t = s.J.user;
                    this.time_in_force = e,
                    this.track("limit_order_time_in_force_policy_updated", {
                        time_in_force_policy: e
                    }),
                    this.post_only = ("GTT" === e || "GTC" === e) && !(t && t.get_preference(H))
                }
            }, {
                key: "setPostOnly",
                value: function(e) {
                    if (this.post_only !== e) {
                        var t = s.J.user;
                        if (this.post_only = e,
                        e ? this.track("post_only_limit_order_execution_selected") : this.track("allow_taker_limit_order_execution_selected"),
                        t)
                            return e ? t.remove_preference(H) : t.add_preference(H, !0)
                    }
                }
            }, {
                key: "submit",
                value: function() {
                    var e = this
                      , t = this.buildOrder();
                    this.track("place_order_clicked"),
                    this.ordersStore.addOrUpdateOrder(t);
                    var r = {
                        profile_id: t.profile_id,
                        show_match: "market" === t.type
                    };
                    return t.save(r).then(Object(M.action)("saving order", function() {
                        if (e.ordersStore.addOrUpdateOrder(t),
                        "rejected" === t.status) {
                            var r = "";
                            if (t.post_only)
                                if ("post only" === t.reject_reason) {
                                    var n = t.product_id.split("-");
                                    r = "Post Only: Cannot place order at ".concat(+t.price, " ").concat(n[1], "/").concat(n[0], ".")
                                } else
                                    "cannot exceed leverage ratio" === t.reject_reason && (r = "Margin: Cannot exceed leverage ratio");
                            else
                                "FOK" === t.time_in_force && (r = "Time in Force: Cannot fill entire order.");
                            throw !r && t.reject_reason && (r = t.reject_reason),
                            new A.j(r)
                        }
                        "pending" === t.status && (t.status = "received"),
                        "market" !== t.type || t.stop || (t.status = "done",
                        t.done_reason = "filled",
                        t.executed_value.gt(0) && (t.avg_market_fill_price = t.executed_value.div(t.filled_size))),
                        e.price = "",
                        e.amount = "",
                        e.stop_price = "",
                        s.u.refreshAccounts()
                    })).catch(Object(M.action)(function(e) {
                        throw t.status = "rejected",
                        e
                    }))
                }
            }, {
                key: "validateOrder",
                value: function() {
                    var e, t = this.amount, r = this.price, n = this.stop_price, o = this.type, i = a.a.product, c = i.base_min_size, l = i.base_max_size, u = i.min_market_funds, s = i.max_market_funds, f = i.quote.symbol, p = i.base.symbol;
                    if (!t)
                        return "Amount must be specified";
                    try {
                        e = F()(t)
                    } catch (e) {
                        return "Invalid amount"
                    }
                    if (e.lte(0))
                        return "Amount must be greater than zero";
                    if ("limit" === o && !r)
                        return "Price must be specified";
                    if ("limit" === o || "stop" === o && r) {
                        var b = this.price;
                        try {
                            b = F()(r)
                        } catch (e) {
                            return "Invalid price"
                        }
                        if (!b || b.lte(0))
                            return "Price must be greater than zero"
                    }
                    if ("stop" === o && !n)
                        return "Stop price must be specified";
                    if ("stop" === o) {
                        var y;
                        try {
                            y = F()(n)
                        } catch (e) {
                            return "Invalid stop price"
                        }
                        if (y.lte(0))
                            return "Stop price must be greater than zero"
                    }
                    var d = this.buildOrder();
                    if (d.funds) {
                        if (d.funds.gt(s))
                            return "Amount must be less than ".concat(f).concat(s.toFixed(), ".");
                        if (d.funds.lt(u))
                            return "Amount must be greater than ".concat(f).concat(u.toFixed(), ".")
                    }
                    if (d.size) {
                        if (d.size.gt(l))
                            return "Amount must be less than ".concat(p).concat(l.toFixed(), ".");
                        if (d.size.lt(c))
                            return "Amount must be greater than ".concat(p).concat(c.toFixed(), ".")
                    }
                }
            }, {
                key: "validateSlippage",
                value: function() {
                    var e = this.type
                      , t = this.side;
                    if ("market" === e) {
                        if ("buy" === t) {
                            var r = s.B.bestAskPrice;
                            if (!r)
                                return "No asks";
                            var n = F()(r).mul(F()(1).add(.02));
                            if (s.B.calculateBuyOrder(this.amount, n).remaining.gt(0))
                                return "Order would move market more than ".concat(F()(100).mul(.02).toFixed(0), "%")
                        }
                        if ("sell" === t) {
                            var o = s.B.bestBidPrice;
                            if (!o)
                                return "No bids";
                            var i = F()(o).mul(F()(1).sub(.02));
                            if (s.B.calculateSellOrder(this.amount, i).remaining.gt(0))
                                return "Order would move market more than ".concat(F()(100).mul(.02).toFixed(0), "%")
                        }
                    }
                }
            }, {
                key: "calculateMarketTotal",
                value: function(e) {
                    return ("buy" === this.side ? s.B.calculateBuyOrder(e) : s.B.calculateSellOrder(e)).total
                }
            }, {
                key: "calculateLimitTotal",
                value: function(e) {
                    return F()(e).mul(this.price || F()(0))
                }
            }, {
                key: "calculateStopTotal",
                value: function(e) {
                    var t = this.price
                      , r = this.side;
                    if (!this.show_advanced || !t)
                        throw new A.e("Cannot estimate stop market totals");
                    return e ? "buy" === r ? F()(e).div(t) : "sell" === r ? F()(e).mul(t) : void 0 : F()(0)
                }
            }, {
                key: "total",
                get: function() {
                    var e = this.price
                      , t = this.amount
                      , r = F()(0);
                    try {
                        "market" === this.type && t ? r = this.calculateMarketTotal(t) : "limit" === this.type && t && e ? r = this.calculateLimitTotal(t) : "stop" === this.type && (r = this.calculateStopTotal(t))
                    } catch (e) {
                        return null
                    }
                    return r || F()(0)
                }
            }, {
                key: "totalCurrency",
                get: function() {
                    var e = this.type
                      , t = this.side
                      , r = a.a.product;
                    return "buy" === t && "limit" !== e ? r.base : r.quote
                }
            }, {
                key: "feeEstimation",
                get: function() {
                    var e = s.z.feeRate || s.z.findRateForValue(F()(0));
                    if (!e || !this.total)
                        return null;
                    if ("limit" === this.type && this.post_only)
                        return F()(0);
                    if (!("stop" !== this.type || this.show_advanced && this.price))
                        return null;
                    var t = e.fee;
                    return "limit" !== this.type && "buy" === this.side ? t.mul(this.amount || 0) : t.mul(this.total)
                }
            }, {
                key: "postOnlyDisabled",
                get: function() {
                    return !("GTC" === this.time_in_force || "GTT" === this.time_in_force)
                }
            }]) && N(t.prototype, r),
            n && N(t, n),
            e
        }()).prototype, "type", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return "market"
            }
        }),
        v = q(h.prototype, "side", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return "buy"
            }
        }),
        g = q(h.prototype, "price", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        O = q(h.prototype, "amount", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        w = q(h.prototype, "stop_price", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        S = q(h.prototype, "show_advanced", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        j = q(h.prototype, "time_in_force", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return "GTC"
            }
        }),
        _ = q(h.prototype, "cancel_after", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return "min"
            }
        }),
        x = q(h.prototype, "post_only", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }),
        q(h.prototype, "total", [M.computed], Object.getOwnPropertyDescriptor(h.prototype, "total"), h.prototype),
        q(h.prototype, "totalCurrency", [M.computed], Object.getOwnPropertyDescriptor(h.prototype, "totalCurrency"), h.prototype),
        q(h.prototype, "feeEstimation", [M.computed], Object.getOwnPropertyDescriptor(h.prototype, "feeEstimation"), h.prototype),
        q(h.prototype, "postOnlyDisabled", [M.computed], Object.getOwnPropertyDescriptor(h.prototype, "postOnlyDisabled"), h.prototype),
        E = q(h.prototype, "reset", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    e.amount = "",
                    e.price = "",
                    e.stop_price = "",
                    e.time_in_force = "GTC",
                    e.cancel_after = "min"
                }
            }
        }),
        k = q(h.prototype, "toggleAdvanced", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    e.show_advanced = !e.show_advanced,
                    e.track("order_advanced_toggled")
                }
            }
        }),
        q(h.prototype, "setType", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setType"), h.prototype),
        q(h.prototype, "setSide", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setSide"), h.prototype),
        q(h.prototype, "setAmount", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setAmount"), h.prototype),
        q(h.prototype, "setPrice", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setPrice"), h.prototype),
        q(h.prototype, "setStopPrice", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setStopPrice"), h.prototype),
        q(h.prototype, "setCancelAfter", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setCancelAfter"), h.prototype),
        q(h.prototype, "setTimeInForce", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setTimeInForce"), h.prototype),
        q(h.prototype, "setPostOnly", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "setPostOnly"), h.prototype),
        C = q(h.prototype, "prefillMax", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    if (s.J.user) {
                        var t = a.a.product
                          , r = c.a.quoteAccount
                          , n = c.a.baseAccount
                          , o = s.z.feeRate || s.z.findRateForValue(F()(0))
                          , i = e.type
                          , l = e.side
                          , u = e.price
                          , f = F()(0);
                        if ("market" === i || "stop" === i)
                            f = "buy" === l ? r.available.round(t.price_precision, 0) : n.available.round(t.base_precision, 0);
                        else if ("limit" === i)
                            if ("buy" === l && u)
                                try {
                                    if (f = r.available.div(u).round(t.base_precision, 0),
                                    !e.post_only && o) {
                                        var p = o.fee;
                                        f = f.mul(F()(1).minus(p))
                                    }
                                } catch (e) {}
                            else
                                "sell" === l && (f = n.available.round(t.base_precision, 0));
                        e.amount = f.toString()
                    }
                }
            }
        }),
        q(h.prototype, "submit", [M.action], Object.getOwnPropertyDescriptor(h.prototype, "submit"), h.prototype),
        h)
          , Y = r(2)
          , K = r(3)
          , X = r(445)
          , J = r(314)
          , V = r(5)
          , Q = Object(Y.c)(K.c).withConfig({
            componentId: "o08ail-0"
        })(["align-items:center;overflow:hidden;", ";"], function(e) {
            var t = e.theme
              , r = e.mobile;
            return Object(Y.b)(["", ";padding:0 ", ";"], r && Object(Y.b)(["flex:1;justify-content:space-between;"]), t.spacing.paddingLeftRight)
        })
          , Z = Object(Y.c)(K.h).withConfig({
            componentId: "o08ail-1"
        })(["margin-left:9px;"])
          , $ = Object(Y.c)(K.c).withConfig({
            componentId: "o08ail-2"
        })(["align-items:center;margin-right:30px;", ";&:last-child{margin-right:0;}"], function(e) {
            return e.mobile && Object(Y.b)(["flex-direction:column;> ", "{margin-left:0;}"], K.h)
        })
          , ee = Object(l.c)(function() {
            var e = a.a.product
              , t = e && s.C.stats.get(e.id) || {}
              , r = t.last
              , n = t.volume_24h
              , i = e && e.price_precision
              , c = e && s.C.percentChange(e.id)
              , l = R.f.isMobile;
            return o.createElement(Q, {
                mobile: l
            }, r && o.createElement($, {
                mobile: l
            }, o.createElement(V.v, {
                value: r,
                precision: i,
                unit: e.quote.id,
                fontWeight: "bold"
            }), o.createElement(Z, {
                tone: "weak",
                fontSize: "small"
            }, "Last trade price")), c && o.createElement($, {
                mobile: l
            }, o.createElement(V.v, {
                intent: c.lt(0) ? "sell" : "buy",
                symbol: c.lt(0) ? "" : "+",
                unit: "%",
                value: c,
                precision: 2,
                fontWeight: "bold"
            }), o.createElement(Z, {
                tone: "weak",
                fontSize: "small"
            }, "24h price")), n && o.createElement($, {
                mobile: l
            }, o.createElement(V.v, {
                value: n,
                unit: e.base.id,
                precision: 0,
                fontWeight: "bold"
            }), o.createElement(Z, {
                tone: "weak",
                fontSize: "small"
            }, "24h volume")))
        })
          , te = Object(Y.c)(K.c).withConfig({
            componentId: "sc-2xo5a5-0"
        })(["position:relative;height:", "px;", ";"], 46, function(e) {
            var t = e.theme;
            return Object(Y.b)(["border-bottom:1px solid ", ";background:", ";"], t.colors.divider.default, t.colors.navbar.default)
        })
          , re = Object(l.c)(function() {
            return o.createElement(te, {
                noShrink: !0
            }, R.f.width >= R.c && o.createElement(J.j, null), o.createElement(ee, null))
        })
          , ne = r(196);
        function oe() {
            return (oe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ie(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var ae = function(e) {
            var t = e.children
              , r = e.borderTop
              , n = e.borderBottom
              , i = e.className
              , a = ie(e, ["children", "borderTop", "borderBottom", "className"]);
            return o.createElement(le, oe({
                borderTop: r,
                borderBottom: n,
                className: i
            }, a), t)
        }
          , ce = 31
          , le = Object(Y.c)(K.c).withConfig({
            componentId: "sc-14zk4ul-0"
        })(["position:relative;flex-shrink:0;height:", "px;", ";"], ce, function(e) {
            var t = e.theme
              , r = e.borderTop
              , n = e.borderBottom
              , o = void 0 === n || n;
            return Object(Y.b)(["border-top:", ";border-bottom:", ";font-size:", ";color:", ";background:", ";"], r ? "1px solid ".concat(t.colors.divider.default) : "none", o ? "1px solid ".concat(t.colors.divider.default) : "none", t.fonts.size.small, t.colors.text.weak, t.colors.base.default)
        })
          , ue = function(e) {
            var t = e.children
              , r = e.justify
              , n = e.className
              , i = ie(e, ["children", "justify", "className"]);
            return o.createElement(se, oe({
                auto: !0,
                align: "center",
                justify: r,
                className: n
            }, i), o.createElement(K.h, {
                intent: "label",
                fontSize: "small"
            }, t))
        }
          , se = Object(Y.c)(K.c).withConfig({
            componentId: "sc-14zk4ul-1"
        })(["display:flex;white-space:pre;", ";"], function(e) {
            var t = e.basis
              , r = e.padding
              , n = e.justify
              , o = void 0 === n ? "flex-end" : n;
            return Object(Y.b)(["flex-basis:", "%;justify-content:", ";padding-right:", "px;"], t, o, r ? "".concat(r) : 0)
        });
        function fe() {
            return (fe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function pe(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var be = function(e) {
            var t = e.children
              , r = e.className
              , n = pe(e, ["children", "className"]);
            return o.createElement(de, fe({
                className: r
            }, n), o.Children.map(t, function(e, t) {
                return o.createElement(ye, {
                    key: t
                }, e)
            }))
        }
          , ye = Y.c.li.withConfig({
            componentId: "lwahsu-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["border-bottom:1px solid ", ";background:", ";&:last-child{border-bottom:none;}&:hover{background:", ";}"], t.colors.divider.default, t.colors.base.default, t.colors.accent.default)
        })
          , de = Y.c.ul.withConfig({
            componentId: "lwahsu-1"
        })(["display:flex;flex:1;flex-direction:column;margin:0;padding:0;list-style:none;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["border:1px solid ", ";"], t.colors.divider.default)
        })
          , he = r(436)
          , me = r(12);
        function ve(e) {
            return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ge(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , l = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function Oe(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        ge(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        ge(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function we(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Se(e, t) {
            return !t || "object" !== ve(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function je(e) {
            return (je = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function _e(e, t) {
            return (_e = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var xe = "show_whitelisting_alert"
          , Ee = new F.a(1e4)
          , ke = function(e) {
            function t(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (r = Se(this, je(t).call(this, e))).visitAddressBook = function() {
                    r.props.locationStore.push("/profile/address-book"),
                    r.props.addressBookStore.showModal(),
                    Object(T.d)("whitelisting_alert_visit_address_book")
                }
                ,
                r.dontShowAgain = Oe(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r.setState({
                                    showWhitelistingAlert: !1
                                }),
                                t = r.props.userStore.user,
                                e.prev = 2,
                                e.t0 = !!t,
                                !e.t0) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 7,
                                t.add_preference(xe, !1);
                            case 7:
                                Object(T.d)("whitelisting_alert_dont_show_again"),
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t1 = e.catch(2),
                                Object(T.d)("whitelisting_alert_dont_show_again_fail", e.t1.message);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[2, 10]])
                }));
                var n = r.props.userStore.user
                  , o = !!n && n.get_preference(xe);
                return r.state = {
                    showWhitelistingAlert: void 0 === o || o
                },
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && _e(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.state.showWhitelistingAlert
                      , t = this.props.addressBookStore.enabled
                      , r = this.props.walletsStore.totalHoldings;
                    return t || !e || r.lt(Ee) ? null : o.createElement(V.a, {
                        titleText: "Secure your assets",
                        descriptionText: "We noticed you’re a high-value client. Enable Whitelisting to restrict the crypto addresses you can withdraw your assets to.",
                        primaryActionText: "Secure your assets",
                        secondaryActionText: "Don't show again",
                        mobile: this.props.deviceStore.isMobile,
                        eventPrefix: "whitelisting",
                        onSecondaryAction: this.dontShowAgain,
                        onPrimaryAction: this.visitAddressBook,
                        offsetTop: "70px",
                        offsetLeft: "270px"
                    })
                }
            }]) && we(r.prototype, n),
            i && we(r, i),
            t
        }()
          , Ce = Object(l.b)("addressBookStore", "deviceStore", "locationStore", "userStore", "walletsStore")(Object(l.c)(ke));
        function Pe(e) {
            return (Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Te() {
            return (Te = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ze(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ae(e, t) {
            return !t || "object" !== Pe(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Re(e) {
            return (Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ie(e, t) {
            return (Ie = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var De = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Ae(this, (e = Re(t)).call.apply(e, [this].concat(o)))).visitConversion = function() {
                    r.props.locationStore.push("/wallets", {
                        showConversionModal: !0
                    }),
                    Object(T.d)("conversion_alert_visit_wallets")
                }
                ,
                r.visitLearnMore = function() {
                    var e = r.props.product;
                    window.open({
                        USDC: "https://support.pro.coinbase.com/customer/en/portal/articles/2958774-usd-coin-usdc-faq"
                    }[e.quote.id], "_blank"),
                    Object(T.d)("conversion_alert_visit_learn_more")
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ie(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.userStore.user;
                    if (!e)
                        return null;
                    var t = this.props.product
                      , r = e.country && "US" === e.country.code;
                    if (!s.x.stableCoins.includes(t.quote.id))
                        return null;
                    var n = t.quote.convertible_to[0]
                      , i = {
                        descriptionText: "".concat(t.quote.id, " is an ERC20 token that is a 1:1 representation of ").concat(n, ". Convert between ").concat(n, " and ").concat(t.quote.id, " for free and start trading ").concat(t.quote.id, " books"),
                        primaryActionText: "Trade ".concat(t.quote.id, " books"),
                        onPrimaryAction: this.visitConversion
                    };
                    return r || (i.descriptionText = o.createElement(K.c, {
                        column: !0
                    }, o.createElement(K.h, null, t.quote.id, " is an ERC20 token that is a 1:1 representation of ", n, ". Steps to get", " ", t.quote.id, ":"), o.createElement(Me, null, o.createElement("li", null, o.createElement(K.h, null, "Acquire BTC on Coinbase Pro.")), o.createElement("li", null, o.createElement(K.h, null, "Get ", t.quote.id, " by selling BTC on BTC-", t.quote.id, ".")))),
                    delete i.primaryActionText,
                    delete i.onPrimaryAction),
                    o.createElement(V.a, Te({
                        titleText: "Get ".concat(t.quote.id, " to trade ").concat(t.id),
                        secondaryActionText: "Learn more about ".concat(t.quote.id, " here"),
                        onSecondaryAction: this.visitLearnMore,
                        mobile: this.props.deviceStore.isMobile,
                        eventPrefix: "conversion",
                        className: this.props.className,
                        offsetTop: "154px",
                        offsetLeft: "94px",
                        iconSize: "12px"
                    }, i))
                }
            }]) && ze(r.prototype, n),
            i && ze(r, i),
            t
        }()
          , Me = Y.c.ul.withConfig({
            componentId: "sc-19spo11-0"
        })(["padding-left:16px;"])
          , Be = Object(l.b)("deviceStore", "locationStore", "userStore")(Object(l.c)(De));
        function Fe(e) {
            return (Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Le(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function We(e, t) {
            return !t || "object" !== Fe(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ue(e) {
            return (Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ne(e, t) {
            return (Ne = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var qe = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = We(this, (e = Ue(t)).call.apply(e, [this].concat(o)))).state = {
                    modal: null
                },
                r.hideModal = function() {
                    r.setState({
                        modal: null
                    })
                }
                ,
                r.onDeposit = function() {
                    r.setState({
                        modal: "deposit"
                    })
                }
                ,
                r.onWithdraw = function() {
                    r.setState({
                        modal: "withdraw"
                    })
                }
                ,
                r.onSelectQuoteBalance = function() {
                    var e = r.props.orderFormStore;
                    e.setSide("buy"),
                    e.prefillMax()
                }
                ,
                r.onSelectBaseBalance = function() {
                    var e = r.props.orderFormStore;
                    e.setSide("sell"),
                    e.prefillMax()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ne(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    s.u.refreshAccounts()
                }
            }, {
                key: "render",
                value: function() {
                    var e = c.a.quoteAccount
                      , t = c.a.baseAccount
                      , r = c.a.stale
                      , n = a.a.product
                      , i = this.state.modal
                      , l = R.f.isMobile;
                    return o.createElement(V.D, {
                        title: o.createElement(K.c, {
                            flex: "1",
                            justify: "space-between"
                        }, "Wallet Balance", o.createElement(Ce, null)),
                        type: "primary",
                        noFlex: !0
                    }, !l && o.createElement(Ye, {
                        type: "primary"
                    }, o.createElement(ue, {
                        justify: "flex-start"
                    }, "Asset"), o.createElement(ue, null, "Amount")), o.createElement(Ge, {
                        column: !0
                    }, o.createElement(K.c, {
                        auto: !0
                    }, o.createElement(K.c, {
                        column: !0,
                        auto: !0
                    }, o.createElement(K.c, {
                        row: !0
                    }, o.createElement(Ke, {
                        justify: "flex-start"
                    }, n.quote.id), o.createElement(Ze, {
                        product: n
                    })), o.createElement(Ke, null, n.base.id)), r ? o.createElement(me.qb, null) : o.createElement(K.c, {
                        column: !0
                    }, o.createElement(Xe, {
                        roundingMode: 0,
                        value: e ? e.available : 0,
                        precision: n.price_precision,
                        onClick: this.onSelectQuoteBalance
                    }), o.createElement(Xe, {
                        roundingMode: 0,
                        value: t ? t.available : 0,
                        precision: n.base_precision,
                        onClick: this.onSelectBaseBalance
                    }))), o.createElement(K.c, null, o.createElement(Je, {
                        onClick: this.onDeposit,
                        eventName: "deposit_button_clicked"
                    }, o.createElement(Ve, {
                        color: "currentColor"
                    }), "DEPOSIT"), o.createElement(Je, {
                        onClick: this.onWithdraw,
                        eventName: "withdrawal_button_clicked"
                    }, o.createElement(Qe, {
                        color: "currentColor"
                    }), "WITHDRAW"))), i && o.createElement(he.a, {
                        type: i,
                        onClose: this.hideModal,
                        suggestedCurrencies: [n.base, n.quote],
                        refreshStore: s.u.refreshAccounts
                    }))
                }
            }]) && Le(r.prototype, n),
            i && Le(r, i),
            t
        }()
          , He = Object(l.b)("orderFormStore")(Object(l.c)(qe))
          , Ge = Object(Y.c)(K.c).withConfig({
            componentId: "sc-5ot532-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["padding:", ";"], t.spacing.padding)
        })
          , Ye = Object(Y.c)(ae).withConfig({
            componentId: "sc-5ot532-1"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["padding:0 ", ";background:", ";"], t.spacing.paddingLeftRight, t.colors.accent.default)
        })
          , Ke = Object(Y.c)(K.h).withConfig({
            componentId: "sc-5ot532-2"
        })(["margin-bottom:14px;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["font-size:", ";"], t.fonts.size.small)
        })
          , Xe = Object(Y.c)(V.v).withConfig({
            componentId: "sc-5ot532-3"
        })(["margin-bottom:14px;font-weight:bold;text-align:right;cursor:pointer;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["font-size:", ";"], t.fonts.size.small)
        })
          , Je = Object(Y.c)(V.d).withConfig({
            componentId: "sc-5ot532-4"
        })(["&:not(:first-child){margin-left:20px;}"])
          , Ve = Object(Y.c)(me.F).withConfig({
            componentId: "sc-5ot532-5"
        })(["margin-right:3px;padding-right:2px;"])
          , Qe = Object(Y.c)(me.Bb).withConfig({
            componentId: "sc-5ot532-6"
        })(["margin-right:3px;padding-right:2px;"])
          , Ze = Object(Y.c)(Be).withConfig({
            componentId: "sc-5ot532-7"
        })(["margin-top:2px;margin-left:5px;"])
          , $e = Object(Y.c)(V.t).withConfig({
            componentId: "sc-1sylbfv-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["font-size:", ";color:", ";"], t.fonts.size.smaller, t.colors.text.default)
        })
          , et = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1sylbfv-1"
        })(["flex:0 0 auto;", ";> ", "{margin-bottom:", ";&:last-child{margin-bottom:0;}}"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["padding:", ";background:", ";"], t.spacing.padding, t.colors.primary.default)
        }, K.h, function(e) {
            return e.theme.spacing.halfPaddingTopBottom
        })
          , tt = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1sylbfv-2"
        })(["margin:40px 0;padding:", ";"], function(e) {
            return e.theme.spacing.padding
        })
          , rt = Object(Y.c)(V.d).withConfig({
            componentId: "sc-1sylbfv-3"
        })(["width:100%;margin-top:20px;"])
          , nt = Object(l.c)(function() {
            var e = s.J.user
              , t = a.a.product;
            return e ? e.active_at ? t && !t.accessible ? o.createElement(et, {
                column: !0,
                "data-pup": ne.TRADE.USER_PANEL_VIEW_ONLY
            }, o.createElement(K.h, {
                fontSize: "large"
            }, "View Only"), o.createElement(K.h, {
                fontSize: "small"
            }, t.display_name, " trading is not yet available in your region.")) : o.createElement(K.c, {
                column: !0,
                none: !0,
                "data-pup": ne.TRADE.USER_PANEL_ACTIVE
            }, t.status_message && o.createElement(et, {
                column: !0
            }, o.createElement(K.h, null, t.status_message)), o.createElement(He, null)) : o.createElement(et, {
                column: !0,
                "data-pup": ne.TRADE.USER_PANEL_RESTRICTED
            }, o.createElement(K.h, {
                fontSize: "large"
            }, "Restricted Access"), o.createElement(K.h, {
                fontSize: "small"
            }, "Deposits and order placement are disabled on your account."), o.createElement($e, {
                to: "/signup"
            }, "Complete your account")) : o.createElement(tt, {
                column: !0,
                align: "center"
            }, o.createElement(K.h, {
                fontSize: "large"
            }, "Start trading ", t.base.displayName), o.createElement(rt, {
                onClick: L.u.signup,
                eventName: "user_panel_get_started_clicked",
                intent: "primary",
                primary: !0
            }, "Get Started"))
        });
        function ot(e) {
            return (ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function it(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function at(e) {
            return (at = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ct(e, t) {
            return (ct = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function lt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var ut = function(e) {
            function t() {
                var e, r, n, o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
                    a[c] = arguments[c];
                return n = this,
                o = (e = at(t)).call.apply(e, [this].concat(a)),
                (r = !o || "object" !== ot(o) && "function" != typeof o ? lt(n) : o).switchSide = function(e) {
                    r.props.orderFormStore.setSide(e)
                }
                ,
                r.switchSideBuy = r.switchSide.bind(lt(lt(r)), "buy"),
                r.switchSideSell = r.switchSide.bind(lt(lt(r)), "sell"),
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ct(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.orderFormStore.side;
                    return o.createElement(st, null, o.createElement(V.U, {
                        "data-pup": ne.TRADE.ORDER_SIDE_BUY,
                        intent: "buy",
                        active: "buy" === e,
                        onClick: this.switchSideBuy
                    }, "BUY"), o.createElement(V.U, {
                        "data-pup": ne.TRADE.ORDER_SIDE_SELL,
                        intent: "sell",
                        active: "sell" === e,
                        onClick: this.switchSideSell
                    }, "SELL"))
                }
            }]) && it(r.prototype, n),
            i && it(r, i),
            t
        }()
          , st = Object(Y.c)(V.T).withConfig({
            componentId: "ouqh1b-0"
        })(["margin:", ";"], function(e) {
            var t = e.theme;
            return "".concat(t.spacing.paddingTopBottom, " ").concat(t.spacing.paddingLeftRight, " 0 ").concat(t.spacing.paddingLeftRight)
        })
          , ft = Object(l.b)("orderFormStore")(Object(l.c)(ut))
          , pt = Object(l.b)("orderFormStore")(Object(l.c)(function(e) {
            var t = e.orderFormStore
              , r = t.type
              , n = t.setTypeMarket
              , i = t.setTypeLimit
              , a = t.setTypeStop;
            return o.createElement(K.c, null, o.createElement(V.L, {
                type: r
            }, o.createElement(V.M, {
                onClick: n,
                title: "Market",
                type: "market",
                "data-pup": ne.TRADE.MARKET_ORDER_TAB
            }), o.createElement(V.M, {
                onClick: i,
                title: "Limit",
                type: "limit",
                "data-pup": ne.TRADE.LIMIT_ORDER_TAB
            }), o.createElement(V.M, {
                onClick: a,
                title: "Stop",
                type: "stop",
                "data-pup": ne.TRADE.STOP_ORDER_TAB
            })))
        }));
        function bt(e) {
            return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function yt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function dt(e, t) {
            return !t || "object" !== bt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ht(e) {
            return (ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function mt(e, t) {
            return (mt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var vt = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = dt(this, (e = ht(t)).call.apply(e, [this].concat(o)))).setAmount = function(e) {
                    var t = r.props.orderFormStore
                      , n = e.target.value;
                    t.setAmount(n)
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && mt(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.orderFormStore
                      , t = a.a.product
                      , r = e.amount
                      , n = e.side
                      , i = e.prefillMax;
                    return t ? o.createElement(V.i, {
                        "data-pup": ne.TRADE.MARKET_ORDER_AMOUNT,
                        label: "Amount",
                        currency: "sell" === n ? t.base.id : t.quote.id,
                        precision: "sell" === n ? t.base_precision : t.price_precision,
                        value: r,
                        onChange: this.setAmount,
                        action: {
                            onClick: i,
                            text: "Max"
                        }
                    }) : null
                }
            }]) && yt(r.prototype, n),
            i && yt(r, i),
            t
        }()
          , gt = Object(l.b)("orderFormStore")(Object(l.c)(vt));
        function Ot(e) {
            return (Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function wt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function St(e) {
            return (St = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function jt(e, t) {
            return (jt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _t(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var xt = function(e) {
            function t() {
                var e, r, n, o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
                    a[c] = arguments[c];
                return n = this,
                o = (e = St(t)).call.apply(e, [this].concat(a)),
                (r = !o || "object" !== Ot(o) && "function" != typeof o ? _t(n) : o).setPostOnly = function(e) {
                    var t = r.props.orderFormStore;
                    e && t.postOnlyDisabled || t.setPostOnly(e)
                }
                ,
                r.setPostOnlyFalse = r.setPostOnly.bind(_t(_t(r)), !1),
                r.setPostOnlyTrue = r.setPostOnly.bind(_t(_t(r)), !0),
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && jt(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.orderFormStore
                      , t = e.post_only
                      , r = e.postOnlyDisabled
                      , n = e.side;
                    return o.createElement(K.c, {
                        column: !0
                    }, o.createElement(V.r, null, "Execution"), o.createElement(V.T, null, o.createElement(V.U, {
                        active: t,
                        disabled: r,
                        onClick: this.setPostOnlyTrue
                    }, "Post Only"), o.createElement(V.U, {
                        active: !t,
                        onClick: this.setPostOnlyFalse
                    }, "Allow Taker")), o.createElement(kt, null, this.note, " ", o.createElement(Ct, {
                        to: "https://support.pro.coinbase.com/customer/en/portal/articles/2945313-overview-of-order-types-and-settings-stop-limit-market-?b_id=17474",
                        eventName: "limit_order_execution_learn_more_clicked",
                        eventProperties: {
                            order_side: n,
                            product_id: a.a.product.id
                        }
                    }, "Learn more")))
                }
            }, {
                key: "note",
                get: function() {
                    return this.props.orderFormStore.post_only ? "Your order will only execute as a maker order." : "Your order may execute as a maker order or taker order."
                }
            }]) && wt(r.prototype, n),
            i && wt(r, i),
            t
        }()
          , Et = function(e) {
            var t = e.theme
              , r = t.colors
              , n = t.fonts;
            return Object(Y.b)(["font-size:", ";color:", ";"], n.size.smaller, r.text.weak)
        }
          , kt = Y.c.div.withConfig({
            componentId: "sc-4sr29b-0"
        })(["", ";margin-top:14px;"], Et)
          , Ct = Object(Y.c)(V.t).withConfig({
            componentId: "sc-4sr29b-1"
        })(["", ";"], Et)
          , Pt = Object(l.b)("orderFormStore")(Object(l.c)(xt));
        function Tt(e) {
            return (Tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function zt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function At(e, t) {
            return !t || "object" !== Tt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Rt(e) {
            return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function It(e, t) {
            return (It = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Dt, Mt = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = At(this, (e = Rt(t)).call.apply(e, [this].concat(o)))).changeTimeInForce = function(e) {
                    var t = e;
                    r.props.orderFormStore.setTimeInForce(t)
                }
                ,
                r.changeCancelAfter = function(e) {
                    var t = e;
                    r.props.orderFormStore.setCancelAfter(t)
                }
                ,
                r.toggleAdvanced = function() {
                    r.props.orderFormStore.toggleAdvanced()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && It(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.orderFormStore
                      , t = e.show_advanced
                      , r = e.time_in_force
                      , n = e.cancel_after
                      , i = {
                        GTC: "Good Til Cancelled",
                        GTT: "Good Til Time",
                        IOC: "Immediate or Cancel",
                        FOK: "Fill or Kill"
                    }
                      , a = {
                        min: "One Minute",
                        hour: "One Hour",
                        day: "One Day"
                    };
                    return o.createElement(V.n, {
                        title: o.createElement(K.h, {
                            fontSize: "smaller"
                        }, "Advanced"),
                        show: t,
                        onClick: this.toggleAdvanced,
                        maxHeight: "250px"
                    }, o.createElement(K.c, {
                        column: !0
                    }, o.createElement(Ft, {
                        column: !0
                    }, o.createElement(Bt, null, "Time In Force Policy"), o.createElement(V.J, {
                        onChange: this.changeTimeInForce,
                        value: r,
                        font: "small",
                        compact: !0
                    }, Object.keys(i).map(function(e) {
                        return o.createElement(V.A, {
                            key: e,
                            value: e
                        }, i[e])
                    }))), "GTT" !== r ? null : o.createElement(Ft, {
                        column: !0
                    }, o.createElement(Bt, null, "Cancel After"), o.createElement(V.J, {
                        onChange: this.changeCancelAfter,
                        value: n,
                        font: "small",
                        compact: !0
                    }, Object.keys(a).map(function(e) {
                        return o.createElement(V.A, {
                            key: e,
                            value: e
                        }, a[e])
                    }))), o.createElement(Lt, {
                        column: !0
                    }, o.createElement(Pt, null))))
                }
            }]) && zt(r.prototype, n),
            i && zt(r, i),
            t
        }(), Bt = Object(Y.c)(K.h).withConfig({
            componentId: "sc-1p5nms0-0"
        })(["margin-bottom:5px;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["font-size:", ";color:", ";"], t.fonts.size.small, t.colors.label.default)
        }), Ft = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1p5nms0-1"
        })(["margin-top:10px;"]), Lt = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1p5nms0-2"
        })(["margin-top:15px;"]), Wt = Object(l.b)("orderFormStore")(Object(l.c)(Mt));
        function Ut(e) {
            return (Ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Nt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function qt(e, t) {
            return !t || "object" !== Ut(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ht(e) {
            return (Ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Gt(e, t) {
            return (Gt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Yt = Object(l.c)(Dt = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = qt(this, (e = Ht(t)).call.apply(e, [this].concat(o)))).setAmount = function(e) {
                    var t = r.props.orderFormStore
                      , n = e.target.value;
                    t.setAmount(n)
                }
                ,
                r.setPrice = function(e) {
                    var t = r.props.orderFormStore
                      , n = e.target.value;
                    t.setPrice(n)
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Gt(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = a.a.product;
                    if (!e)
                        return null;
                    var t = this.props.orderFormStore
                      , r = t.amount
                      , n = t.price
                      , i = t.prefillMax;
                    return o.createElement("div", null, o.createElement(Kt, {
                        "data-pup": ne.TRADE.LIMIT_ORDER_AMOUNT,
                        label: "Amount",
                        currency: e.base.id,
                        precision: e.base_precision,
                        value: r,
                        onChange: this.setAmount,
                        action: {
                            onClick: i,
                            text: "Max"
                        }
                    }), o.createElement(Kt, {
                        "data-pup": ne.TRADE.LIMIT_ORDER_PRICE,
                        label: "Limit Price",
                        currency: e.quote.id,
                        precision: e.price_precision,
                        value: n,
                        onChange: this.setPrice
                    }), o.createElement(Wt, null))
                }
            }]) && Nt(r.prototype, n),
            i && Nt(r, i),
            t
        }()) || Dt
          , Kt = Object(Y.c)(V.i).withConfig({
            componentId: "lkehsk-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return "\n        margin-bottom: ".concat(t.spacing.halfPaddingTopBottom, ";\n    ")
        })
          , Xt = Object(l.b)("orderFormStore")(Object(l.c)(Yt));
        function Jt(e) {
            return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Vt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Qt(e, t) {
            return !t || "object" !== Jt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Zt(e) {
            return (Zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function $t(e, t) {
            return ($t = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var er = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Qt(this, (e = Zt(t)).call.apply(e, [this].concat(o)))).setAmount = function(e) {
                    var t = r.props.orderFormStore
                      , n = e.target.value;
                    t.setAmount(n)
                }
                ,
                r.setStopPrice = function(e) {
                    var t = r.props.orderFormStore
                      , n = e.target.value;
                    t.setStopPrice(n)
                }
                ,
                r.setLimitPrice = function(e) {
                    var t = r.props.orderFormStore
                      , n = e.target.value;
                    t.setPrice(n)
                }
                ,
                r.toggleAdvanced = function() {
                    r.props.orderFormStore.toggleAdvanced()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && $t(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.orderFormStore
                      , t = a.a.product
                      , r = e.amount
                      , n = e.stop_price
                      , i = e.price
                      , c = e.side
                      , l = e.show_advanced
                      , u = e.prefillMax;
                    return t ? o.createElement("div", null, o.createElement(tr, {
                        "data-pup": ne.TRADE.STOP_ORDER_AMOUNT,
                        label: "Amount",
                        currency: "sell" === c ? t.base.id : t.quote.id,
                        precision: "sell" === c ? t.base_precision : t.price_precision,
                        value: r,
                        onChange: this.setAmount,
                        action: {
                            onClick: u,
                            text: "Max"
                        }
                    }), o.createElement(tr, {
                        "data-pup": ne.TRADE.STOP_ORDER_PRICE,
                        label: "Stop Price",
                        currency: t.quote.id,
                        precision: t.price_precision,
                        value: n,
                        onChange: this.setStopPrice
                    }), o.createElement(V.n, {
                        title: o.createElement(K.h, {
                            fontSize: "smaller"
                        }, "Advanced"),
                        show: l,
                        onClick: this.toggleAdvanced
                    }, o.createElement(rr, {
                        label: "Limit Price",
                        currency: t.quote.id,
                        precision: t.price_precision,
                        value: i,
                        onChange: this.setLimitPrice
                    }))) : null
                }
            }]) && Vt(r.prototype, n),
            i && Vt(r, i),
            t
        }()
          , tr = Object(Y.c)(V.i).withConfig({
            componentId: "sc-1cpk5bg-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return "\n        margin-bottom: ".concat(t.spacing.halfPaddingTopBottom, ";\n    ")
        })
          , rr = Object(Y.c)(V.i).withConfig({
            componentId: "sc-1cpk5bg-1"
        })(["", ";"], function(e) {
            var t = e.theme;
            return "\n        margin-top: ".concat(t.spacing.halfPaddingTopBottom, ";\n    ")
        })
          , nr = Object(l.b)("orderFormStore")(Object(l.c)(er))
          , or = function(e) {
            var t = e.label
              , r = e.value
              , n = e.currency
              , i = n.id
              , a = n.precision;
            return o.createElement(ir, {
                align: "center",
                justify: "space-between"
            }, o.createElement(K.h, {
                fontSize: "smaller"
            }, t, " ≈"), o.createElement(K.h, {
                mono: !0,
                fontSize: "smaller"
            }, r ? o.createElement(V.v, {
                value: r,
                precision: a,
                fontSize: "smaller"
            }) : "N/A", " ", i))
        }
          , ir = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1p6ti4r-0"
        })(["margin-top:3px;&:first-child{margin-top:0;}"])
          , ar = Object(l.b)("orderFormStore")(Object(l.c)(function(e) {
            var t = e.orderFormStore
              , r = a.a.product
              , n = t.feeEstimation
              , i = t.total
              , c = t.totalCurrency;
            return r ? o.createElement(K.c, {
                column: !0
            }, o.createElement(or, {
                label: "Fee",
                value: n,
                currency: r.quote
            }), o.createElement(or, {
                label: "Total",
                value: i,
                currency: c
            })) : null
        }));
        function cr(e) {
            return (cr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function lr() {
            return (lr = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ur(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function sr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function fr(e, t) {
            return !t || "object" !== cr(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function pr(e) {
            return (pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function br(e, t) {
            return (br = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var yr = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                fr(this, pr(t).apply(this, arguments))
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && br(e, t)
            }(t, o["PureComponent"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.step
                      , r = e.children
                      , n = ur(e, ["step", "children"]);
                    return o.createElement(V.d, lr({
                        primary: !0,
                        intent: this.intent,
                        inactive: "available" !== t
                    }, n), "available" === t ? r : "loading" === t ? o.createElement(me.qb, {
                        height: 21,
                        opacity: 1
                    }) : "success" === t ? "✓ Success!" : "⚠ Error")
                }
            }, {
                key: "intent",
                get: function() {
                    var e = this.props
                      , t = e.side;
                    switch (e.step) {
                    case "available":
                        return "buy" === t ? "buy" : "sell";
                    case "loading":
                        return "secondary";
                    case "success":
                        return "primary";
                    case "failure":
                        return "alert";
                    default:
                        throw new A.e("Unknown step")
                    }
                }
            }]) && sr(r.prototype, n),
            i && sr(r, i),
            t
        }();
        function dr(e) {
            return (dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function hr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function mr(e, t) {
            return !t || "object" !== dr(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function vr(e) {
            return (vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function gr(e, t) {
            return (gr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Or = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = mr(this, (e = vr(t)).call.apply(e, [this].concat(o)))).keyPressed = function(e) {
                    var t = r.props.onSubmit;
                    13 === e.keyCode && t()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && gr(e, t)
            }(t, o["PureComponent"]),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("keypress", this.keyPressed)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("keypress", this.keyPressed)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.onClose
                      , r = e.onSubmit;
                    return o.createElement(V.y, {
                        onClose: t,
                        title: this.title,
                        maxWidth: 400
                    }, o.createElement(wr, {
                        column: !0,
                        auto: !0
                    }, o.createElement(Sr, {
                        auto: !0
                    }, this.message), o.createElement(K.c, {
                        noShrink: !0
                    }, o.createElement(jr, {
                        "data-pup": ne.TRADE.ORDER_CONFIRMATION_MODAL_CANCEL,
                        onClick: t,
                        intent: "accent"
                    }, "Cancel"), o.createElement(jr, {
                        "data-pup": ne.TRADE.ORDER_CONFIRMATION_MODAL_CONFIRM,
                        onClick: r,
                        intent: "primary",
                        primary: !0
                    }, "Place Order"))))
                }
            }, {
                key: "title",
                get: function() {
                    var e = this.props.type;
                    return "".concat(e, " warning")
                }
            }, {
                key: "message",
                get: function() {
                    var e = this.props.type;
                    if ("slippage" === e)
                        return o.createElement(K.h, null, "Placing this order will result in greater than 2% slippage. Are you sure you would like to continue?");
                    if ("stop" === e)
                        return o.createElement(K.h, null, "This order may fill at a price less favorable than the stop price. Are you sure you would like to continue?");
                    if ("stop-limit" === e)
                        return o.createElement(K.h, null, "This order may not fill immediately when executed. Are you sure you would like to continue?");
                    throw new A.e("modal type not provided")
                }
            }]) && hr(r.prototype, n),
            i && hr(r, i),
            t
        }()
          , wr = Object(Y.c)(K.c).withConfig({
            componentId: "fct4f2-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["padding:", ";"], t.spacing.padding)
        })
          , Sr = Object(Y.c)(K.c).withConfig({
            componentId: "fct4f2-1"
        })(["margin:30px 0;"])
          , jr = Object(Y.c)(V.d).withConfig({
            componentId: "fct4f2-2"
        })(["margin-top:20px;&:not(:first-child){margin-left:20px;}"]);
        function _r(e) {
            return (_r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function xr(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , l = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function Er(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        xr(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        xr(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function kr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Cr(e, t) {
            return !t || "object" !== _r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Pr(e) {
            return (Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Tr(e, t) {
            return (Tr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var zr, Ar, Rr = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Cr(this, (e = Pr(t)).call.apply(e, [this].concat(o)))).state = {
                    step: "available",
                    error: null,
                    modal: ""
                },
                r.setError = function(e) {
                    r.setState({
                        error: e instanceof Error ? e.message : e,
                        step: "failure"
                    }),
                    setTimeout(function() {
                        return r.setState({
                            step: "available"
                        })
                    }, 1500)
                }
                ,
                r.clearError = function() {
                    r.setState({
                        error: ""
                    })
                }
                ,
                r.onReset = function() {
                    r.props.orderFormStore.reset()
                }
                ,
                r.onSubmitOrder = function(e) {
                    e.preventDefault();
                    var t = r.props.orderFormStore
                      , n = s.J.user;
                    if (t.track("order_form_place_order_clicked"),
                    n) {
                        if ("available" === r.state.step) {
                            var o = t.validateOrder();
                            if (o)
                                return r.setError(o);
                            if ("market" === t.type)
                                if (t.validateSlippage())
                                    return r.setState({
                                        modal: "slippage"
                                    });
                            if ("stop" === t.type)
                                return t.show_advanced && t.price ? r.setState({
                                    modal: "stop-limit"
                                }) : r.setState({
                                    modal: "stop"
                                });
                            r.placeOrder()
                        }
                    } else
                        L.u.signup()
                }
                ,
                r.placeOrder = Er(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = r.props.orderFormStore,
                                n = s.J.user,
                                "available" === r.state.step && n) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                return r.setState({
                                    step: "loading"
                                }),
                                r.clearError(),
                                e.prev = 6,
                                e.next = 9,
                                t.submit();
                            case 9:
                                t.track("successful_order_through_UI"),
                                r.setState({
                                    step: "success"
                                }),
                                setTimeout(function() {
                                    return r.setState({
                                        step: "available"
                                    })
                                }, 1500),
                                e.next = 18;
                                break;
                            case 14:
                                e.prev = 14,
                                e.t0 = e.catch(6),
                                r.setError(e.t0),
                                t.track("unsuccessful_order_through_UI", {
                                    error: e.t0
                                });
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[6, 14]])
                })),
                r.onModalClose = function() {
                    r.setState({
                        modal: ""
                    })
                }
                ,
                r.onModalSubmit = function() {
                    r.setState({
                        modal: ""
                    }),
                    r.placeOrder()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Tr(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.error
                      , r = e.step
                      , n = e.modal
                      , i = this.props.orderFormStore.side;
                    return a.a.product ? o.createElement(J.c, {
                        onSignup: L.u.signup,
                        onLogin: L.u.signin,
                        signupEvent: "order_form_cta_mask_signup",
                        loginEvent: "order_form_cta_mask_login",
                        showCta: !s.J.user
                    }, o.createElement(V.D, {
                        title: "Order Form",
                        type: "primary"
                    }, o.createElement("form", {
                        onSubmit: this.onSubmitOrder
                    }, o.createElement(ft, null), o.createElement(pt, null), o.createElement(Ir, {
                        column: !0
                    }, this.orderForm, o.createElement(Dr, null), o.createElement(ar, null), o.createElement(yr, {
                        "data-pup": ne.TRADE.PLACE_ORDER_BUTTON,
                        side: i,
                        step: r,
                        onClick: this.onSubmitOrder
                    }, "PLACE ", i.toUpperCase(), " ORDER"), t && o.createElement(Mr, {
                        onClick: this.clearError
                    }, o.createElement(Br, null, t), o.createElement(K.b, null))), o.createElement(Fr, null)), n && o.createElement(Or, {
                        type: n,
                        onClose: this.onModalClose,
                        onSubmit: this.onModalSubmit
                    }))) : null
                }
            }, {
                key: "orderForm",
                get: function() {
                    var e = this.props.orderFormStore.type;
                    return "market" === e ? o.createElement(gt, null) : "limit" === e ? o.createElement(Xt, null) : "stop" === e ? o.createElement(nr, null) : null
                }
            }]) && kr(r.prototype, n),
            i && kr(r, i),
            t
        }(), Ir = Object(Y.c)(K.c).withConfig({
            componentId: "sc-99m0o7-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["padding:", ";> div{margin-bottom:", ";}"], t.spacing.padding, t.spacing.paddingTopBottom)
        }), Dr = Y.c.div.withConfig({
            componentId: "sc-99m0o7-1"
        })(["flex:1;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["border-top:2px solid ", ";"], t.colors.highlight.default)
        }), Mr = Y.c.div.withConfig({
            componentId: "sc-99m0o7-2"
        })(["display:flex;padding:7px;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["background:", ";"], t.colors.alert.default)
        }), Br = Object(Y.c)(K.h).withConfig({
            componentId: "sc-99m0o7-3"
        })(["flex:1;margin-left:8px;"]), Fr = Y.c.button.withConfig({
            componentId: "sc-99m0o7-4"
        })(["display:none;"]), Lr = Object(l.b)("orderFormStore")(Object(l.c)(Rr)), Wr = Object(Y.c)(K.c).withConfig({
            componentId: "i20ifw-0"
        })(["flex:1;overflow:hidden;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["background:", ";"], t.colors.accent.default)
        }), Ur = Object(Y.c)(K.c).withConfig({
            componentId: "i20ifw-1"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["border-top:1px solid ", ";"], t.colors.divider.default)
        }), Nr = function() {
            return o.createElement(Wr, null, o.createElement(V.I, null, o.createElement(nt, null), o.createElement(Ur, null), o.createElement(Lr, null)))
        }, qr = r(119), Hr = r(104), Gr = r(15), Yr = r(38);
        function Kr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Xr(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var Jr, Vr, Qr = (Ar = Xr((zr = function() {
            function e() {
                var t, r, n, o, i = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                t = this,
                r = "_domain",
                o = this,
                (n = Ar) && Object.defineProperty(t, r, {
                    enumerable: n.enumerable,
                    configurable: n.configurable,
                    writable: n.writable,
                    value: n.initializer ? n.initializer.call(o) : void 0
                }),
                this.range = {
                    min: 0,
                    max: 0
                },
                this.isDate = !1,
                this.toRange = function(e) {
                    var t = e;
                    i.isDate && t instanceof Date && (t = t.getTime() - Yr.f);
                    var r = i.domain
                      , n = r.min
                      , o = r.max
                      , a = i.range
                      , c = a.min;
                    return c + (t - n) * (a.max - c) / (o - n)
                }
                ,
                this.toDomain = function(e) {
                    var t = i.domain
                      , r = t.min
                      , n = t.max
                      , o = i.range
                      , a = o.min
                      , c = o.max;
                    i.isDate && (r += Yr.f,
                    n += Yr.f);
                    var l = r + (e - a) * (n - r) / (c - a);
                    return i.isDate ? new Date(l) : l
                }
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "domain",
                get: function() {
                    return this._domain
                },
                set: function(e) {
                    var t = e.min
                      , r = e.max;
                    t instanceof Date && r instanceof Date ? (this._domain = {
                        min: t.getTime() - Yr.f,
                        max: r.getTime() - Yr.f
                    },
                    this.isDate = !0) : this._domain = e
                }
            }, {
                key: "delta",
                get: function() {
                    var e = this.domain
                      , t = e.min;
                    return e.max - t
                }
            }]) && Kr(t.prototype, r),
            n && Kr(t, n),
            e
        }()).prototype, "_domain", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {
                    min: 0,
                    max: 0
                }
            }
        }),
        Xr(zr.prototype, "domain", [M.computed], Object.getOwnPropertyDescriptor(zr.prototype, "domain"), zr.prototype),
        zr);
        function Zr(e) {
            return (Zr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function $r(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function en(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++)
                        r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function tn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function rn(e, t) {
            return !t || "object" !== Zr(t) && "function" != typeof t ? an(e) : t
        }
        function nn(e) {
            return (nn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function on(e, t) {
            return (on = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function an(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function cn(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var ln, un, sn, fn = [5 * Yr.c, 10 * Yr.c, 15 * Yr.c, 30 * Yr.c, Yr.b, 2 * Yr.b, 3 * Yr.b, 6 * Yr.b, 12 * Yr.b, Yr.a, 2 * Yr.a, 3 * Yr.a, Yr.g, 2 * Yr.g, Yr.d, 3 * Yr.d, 6 * Yr.d], pn = [1, 2, 2.5, 4, 5], bn = (Vr = cn((Jr = function(e) {
            function t(e) {
                var r, n, o, i, a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                r = rn(this, nn(t).call(this)),
                n = r,
                o = "ticks",
                i = Vr,
                a = an(an(r)),
                i && Object.defineProperty(n, o, {
                    enumerable: i.enumerable,
                    configurable: i.configurable,
                    writable: i.writable,
                    value: i.initializer ? i.initializer.call(a) : void 0
                }),
                r.steps = void 0,
                r._numTicks = 5,
                r._domain = {
                    min: 0,
                    max: 0
                },
                r.originalDomain = void 0,
                r.reformat = !1,
                e ? (r.reformat = e.reformat,
                r) : rn(r)
            }
            var r, n, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && on(e, t)
            }(t, Qr),
            r = t,
            (n = [{
                key: "calculateTicks",
                value: function() {
                    var e, t, r;
                    this.isDate ? (t = (e = this._dateTicks(this.numTicks))[e.length - 1],
                    r = e[0]) : (t = (e = this._numberTicks(this.numTicks))[0],
                    r = e[e.length - 1]),
                    this.reformat && (this._domain = {
                        min: t,
                        max: r
                    }),
                    this.ticks = e || []
                }
            }, {
                key: "_dateTicks",
                value: function(e) {
                    var t = this.originalDomain
                      , r = this.steps;
                    if (!e || !r || !r.length)
                        return [];
                    for (var n = t.min, o = t.max, i = F()(o - n), a = i.div(e), c = F()(1), l = 0, u = r.length; l < u && (c = F()(r[l]),
                    !a.lt(c)); l++)
                        ;
                    var s = F()(o);
                    s = s.minus(s.mod(c));
                    var f = +i.div(c).round(0, 3);
                    return en(Array(f)).map(function(e, t) {
                        return Number(s.minus(c.mul(t)))
                    })
                }
            }, {
                key: "_numberTicks",
                value: function(e) {
                    var t = this.originalDomain
                      , r = this.steps;
                    if (!e || !r || !r.length)
                        return [];
                    var n = t.min
                      , o = t.max;
                    if (!isFinite(o - n))
                        return [];
                    for (var i = F()(o - n), a = i.div(e), c = F()(1), l = 1, u = -1; u < 2; u++) {
                        l = i.e + u;
                        for (var s = 0, f = r.length; s < f && ((c = F()(r[s])).e = l,
                        !a.lt(c)); s++)
                            ;
                        if (a.lt(c))
                            break
                    }
                    var p = F()(n)
                      , b = F()(o);
                    p = p.minus(p.mod(c)),
                    b = b.add(c.minus(b.mod(c)));
                    var y = Number(b.minus(p).div(c).round(0, 3)) + 1;
                    return en(Array(y)).map(function(e, t) {
                        return Number(p.add(c.mul(t)))
                    })
                }
            }, {
                key: "domain",
                get: function() {
                    return this._domain
                },
                set: function(e) {
                    var t = e.min
                      , r = e.max;
                    t instanceof Date && r instanceof Date ? (this._domain = {
                        min: t.getTime() - Yr.f,
                        max: r.getTime() - Yr.f
                    },
                    this.isDate = !0,
                    this.steps || (this.steps = fn)) : (this._domain = e,
                    this.steps || (this.steps = pn)),
                    this.originalDomain = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {}
                              , n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))),
                            n.forEach(function(t) {
                                $r(e, t, r[t])
                            })
                        }
                        return e
                    }({}, this._domain),
                    this.calculateTicks()
                }
            }, {
                key: "numTicks",
                get: function() {
                    return this._numTicks
                },
                set: function(e) {
                    e !== this._numTicks && (this._numTicks = e,
                    this.calculateTicks())
                }
            }]) && tn(r.prototype, n),
            o && tn(r, o),
            t
        }()).prototype, "ticks", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        cn(Jr.prototype, "domain", [M.computed], Object.getOwnPropertyDescriptor(Jr.prototype, "domain"), Jr.prototype),
        cn(Jr.prototype, "calculateTicks", [M.action], Object.getOwnPropertyDescriptor(Jr.prototype, "calculateTicks"), Jr.prototype),
        Jr);
        function yn(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function dn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function hn(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var mn, vn, gn, On, wn, Sn = (un = hn((ln = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                yn(this, "periods", un, this),
                yn(this, "data", sn, this),
                this.periods = t
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "update",
                value: function(e) {
                    for (var t = this.periods, r = [], n = F()(0), o = 0, i = e.length; o < i; o++) {
                        var a = e[o];
                        n.add(a.close),
                        o < t - 1 || (r.push({
                            candle: e[o],
                            sma: +n.div(t)
                        }),
                        n.minus(e[o - t + 1].close))
                    }
                    this.data = r
                }
            }]) && dn(t.prototype, r),
            n && dn(t, n),
            e
        }()).prototype, "periods", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }),
        sn = hn(ln.prototype, "data", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        hn(ln.prototype, "update", [M.action], Object.getOwnPropertyDescriptor(ln.prototype, "update"), ln.prototype),
        ln);
        function jn(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function _n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function xn(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        Gr.h.getItem("show-ema") || Gr.h.setItem("show-ema", {});
        var En, kn, Cn, Pn, Tn = (vn = xn((mn = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                jn(this, "periods", vn, this),
                jn(this, "data", gn, this),
                jn(this, "show", On, this),
                this.sma = void 0,
                jn(this, "toggle", wn, this),
                this.periods = t,
                this.sma = new Sn(t);
                var r = Gr.h.getItem("show-ema") || {};
                this.show = r[t]
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "update",
                value: function(e) {
                    var t = this.periods
                      , r = this.sma;
                    r.update(e.slice(-t));
                    var n = 2 / (t + 1)
                      , o = r.data[0] && r.data[0].sma || e[0] && e[0].close;
                    this.data = e.slice(t - 1).map(function(e) {
                        var t = (e.close - o) * n + o;
                        return o = t,
                        {
                            candle: e,
                            ema: t
                        }
                    })
                }
            }]) && _n(t.prototype, r),
            n && _n(t, n),
            e
        }()).prototype, "periods", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }),
        gn = xn(mn.prototype, "data", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        On = xn(mn.prototype, "show", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }),
        xn(mn.prototype, "update", [M.action], Object.getOwnPropertyDescriptor(mn.prototype, "update"), mn.prototype),
        wn = xn(mn.prototype, "toggle", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    e.show = !e.show,
                    Object(T.d)("chart_overlay_selected", {
                        overlay: "EMA".concat(e.periods),
                        showing: e.show
                    });
                    var t = Gr.h.getItem("show-ema") || {};
                    if (e.show)
                        return t[e.periods] = !0,
                        void Gr.h.setItem("show-ema", t);
                    t[e.periods] = !1,
                    Gr.h.setItem("show-ema", t)
                }
            }
        }),
        mn);
        function zn(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function An(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Rn(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var In, Dn, Mn, Bn, Fn, Ln, Wn, Un, Nn, qn, Hn, Gn, Yn, Kn, Xn, Jn, Vn, Qn, Zn = (kn = Rn((En = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                zn(this, "x", kn, this),
                zn(this, "y", Cn, this),
                zn(this, "active", Pn, this)
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "set",
                value: function(e) {
                    if (!e)
                        return this.active = !1;
                    this.x = e.x,
                    this.y = e.y,
                    this.active = !0
                }
            }]) && An(t.prototype, r),
            n && An(t, n),
            e
        }()).prototype, "x", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }),
        Cn = Rn(En.prototype, "y", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }),
        Pn = Rn(En.prototype, "active", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        Rn(En.prototype, "set", [M.action], Object.getOwnPropertyDescriptor(En.prototype, "set"), En.prototype),
        En), $n = r(25);
        function eo(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = []
                  , n = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        function to(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function ro(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function no(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var oo = 16
          , io = (Dn = no((In = function() {
            function e(t, r) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                to(this, "nodes", Dn, this),
                to(this, "mySizes", Mn, this),
                to(this, "mouse", Bn, this),
                to(this, "selected", Fn, this),
                to(this, "renderIndex", Ln, this),
                to(this, "renderEndIndex", Wn, this),
                this.type = void 0,
                this.lastTick = Date.now(),
                this.dt = 0,
                this.animationFrame = 0,
                this.columns = {
                    bar: {
                        x: 0,
                        width: .1
                    },
                    size: {
                        x: .1,
                        width: .28,
                        padding: 3
                    },
                    price: {
                        x: .38,
                        width: .3,
                        padding: 3
                    },
                    mySize: {
                        x: .68,
                        width: .32,
                        padding: 16
                    }
                },
                this.ordersStore = void 0,
                this.orderBookStore = void 0,
                this.scrollerStore = void 0,
                this.disposers = [],
                to(this, "resetBook", Un, this),
                to(this, "setSelected", Nn, this),
                to(this, "setMyOrders", qn, this),
                to(this, "setRenderIndex", Hn, this),
                to(this, "generate", Gn, this),
                to(this, "_setAnimation", Yn, this),
                to(this, "setNodeRender", Kn, this),
                to(this, "setNodeY", Xn, this),
                to(this, "runAnimationLoop", Jn, this),
                to(this, "updateAnimations", Vn, this),
                to(this, "renderAll", Qn, this),
                this.type = t,
                this.ordersStore = r.ordersStore,
                this.orderBookStore = r.orderBookStore,
                this.scrollerStore = r.scrollerStore
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "subscribe",
                value: function() {
                    var e = this;
                    this.disposers.push(Object(M.observe)(this.ordersStore, "asks" === this.type ? "activeSells" : "activeBuys", this.setMyOrders)),
                    this.disposers.push(Object(M.observe)(this.orderBookStore, "book", this.generate)),
                    this.disposers.push(Object(M.observe)(a.a, "product", this.resetBook)),
                    this.disposers.push(Object(M.observe)(this.orderBookStore, "aggregationIndex", this.resetBook)),
                    this.disposers.push(Object(M.observe)(this.scrollerStore, "dimensions", this.setRenderIndex)),
                    this.disposers.push(Object(M.observe)(R.k, "fontsLoaded", function() {
                        e.renderAll()
                    })),
                    this.disposers.push(Object(M.observe)(R.k, "theme", function() {
                        e.renderAll()
                    })),
                    this.setRenderIndex(),
                    this.setMyOrders(),
                    this.lastTick = Date.now(),
                    this.runAnimationLoop(),
                    this.orderBookStore.setBook()
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    this.disposers.forEach(function(e) {
                        return e()
                    }),
                    this.disposers = [],
                    this.animationFrame && Object($n.a)(this.animationFrame)
                }
            }, {
                key: "firstLoad",
                get: function() {
                    return !this.nodes.length
                }
            }, {
                key: "styles",
                get: function() {
                    var e = R.k.theme
                      , t = e.colors
                      , r = t.base
                      , n = t.accent
                      , o = t.text
                      , i = t.chartSell
                      , a = t.chartBuy
                      , c = t.alert;
                    return {
                        fontFamily: e.fonts.family.mono,
                        fontSize: 10,
                        fontWeight: "500",
                        textAlign: "right",
                        textBaseline: "middle",
                        dimColor: Object(Hr.f)(.8, o.default),
                        normalColor: Object(Hr.f)(.2, o.default),
                        wholeColor: Object(Hr.f)(.2, o.default),
                        asksBarColor: Object(Hr.f)(.55, i.default),
                        asksWholeColor: Object(Hr.f)(.4, i.default),
                        asksDecimalColor: Object(Hr.f)(0, i.default),
                        asksChangeWholeColor: Object(Hr.f)(.1, i.default),
                        asksChangeDecimalColor: Object(Hr.f)(.8, i.default),
                        bidsBarColor: Object(Hr.f)(.55, a.default),
                        bidsWholeColor: Object(Hr.f)(.4, a.default),
                        bidsDecimalColor: Object(Hr.f)(0, a.default),
                        bidsChangeWholeColor: Object(Hr.f)(.1, a.default),
                        bidsChangeDecimalColor: Object(Hr.f)(.8, a.default),
                        removeFromColor: r.default,
                        removeToColor: Object(Hr.a)(.02, r.default),
                        hoverColor: n.default,
                        cancelColor: c.default
                    }
                }
            }]) && ro(t.prototype, r),
            n && ro(t, n),
            e
        }()).prototype, "nodes", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        Mn = no(In.prototype, "mySizes", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        Bn = no(In.prototype, "mouse", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new Zn
            }
        }),
        Fn = no(In.prototype, "selected", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ln = no(In.prototype, "renderIndex", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }),
        Wn = no(In.prototype, "renderEndIndex", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }),
        no(In.prototype, "firstLoad", [M.computed], Object.getOwnPropertyDescriptor(In.prototype, "firstLoad"), In.prototype),
        Un = no(In.prototype, "resetBook", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    e.nodes = [],
                    e.setMyOrders()
                }
            }
        }),
        Nn = no(In.prototype, "setSelected", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t) {
                    e.selected = t
                }
            }
        }),
        qn = no(In.prototype, "setMyOrders", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    var t = e.type
                      , r = e.ordersStore
                      , n = r.activeSells
                      , o = r.activeBuys
                      , i = e.orderBookStore
                      , a = i.hasAggregation
                      , c = i.bucket
                      , l = "bids" === t ? o : n;
                    e.mySizes = l.reduce(function(e, t) {
                        var r = t.price.toString();
                        a && (r = c(t.side, r).toString());
                        var n = e[r]
                          , o = t.size.minus(t.filled_size);
                        return Object(z.a)("setMyOrders Error", "remaining size for order is negative", {
                            order: t,
                            remainingSize: o,
                            price: r
                        }, "info"),
                        e[r] = n ? n.add(o) : o,
                        e
                    }, {})
                }
            }
        }),
        Hn = no(In.prototype, "setRenderIndex", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    var t, r, n = e.type, o = e.scrollerStore, i = o.height, a = o.top, c = o.viewport, l = i / 2;
                    "bids" === n ? (r = a - l,
                    t = a - l + c) : (r = l - a - c,
                    t = l - a),
                    e.renderIndex = Math.max(Math.floor(r / oo), 0),
                    e.renderEndIndex = Math.min.apply(null, [Math.ceil(t / oo), 50])
                }
            }
        }),
        Gn = no(In.prototype, "generate", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    var t = 0
                      , r = 0
                      , n = []
                      , o = !1
                      , i = e.type
                      , a = e.orderBookStore.book
                      , c = a.asks
                      , l = a.bids
                      , u = ("asks" === i ? c : l).slice(0, 50)
                      , s = e.nodes.slice(0, 100);
                    if (u.length || s.length) {
                        for (; u[t] || s[r]; ) {
                            var f = u[t]
                              , p = s[r]
                              , b = !1
                              , y = F()(0)
                              , d = F()(0);
                            if (f) {
                                var h = eo(f, 2);
                                y = h[0],
                                d = h[1]
                            }
                            p ? f ? y.eq(p.price) ? (d.eq(p.size) || (p.size = d,
                            e._setAnimation(p, "change")),
                            t += 1,
                            r += 1) : ("bids" === i ? y.gt(p.price) : y.lt(p.price)) ? (b = !0,
                            t += 1) : (e._setAnimation(p, "remove"),
                            r += 1) : (e._setAnimation(p, "remove"),
                            r += 1) : (b = !0,
                            t += 1),
                            b ? (p = {
                                price: y,
                                size: d,
                                render: !0,
                                y: 0
                            },
                            o = !0,
                            e.firstLoad || e._setAnimation(p, "change")) : o && (p.render = !0),
                            n.push(p)
                        }
                        e.nodes = n
                    }
                }
            }
        }),
        Yn = no(In.prototype, "_setAnimation", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return function(e, t) {
                    if ("change" === t)
                        return e.render = !0,
                        void (e.animation = {
                            type: "change",
                            dt: 0,
                            time: 1e3,
                            done: !1
                        });
                    if ("remove" === t) {
                        if (e.animation && "remove" === e.animation.type)
                            return;
                        e.render = !0,
                        e.animation = {
                            type: "remove",
                            dt: 0,
                            time: 500,
                            done: !1
                        }
                    }
                }
            }
        }),
        Kn = no(In.prototype, "setNodeRender", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return function(e, t) {
                    e && (e.render = t)
                }
            }
        }),
        Xn = no(In.prototype, "setNodeY", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return function(e, t) {
                    e && (e.y = t)
                }
            }
        }),
        Jn = no(In.prototype, "runAnimationLoop", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    var t = Date.now()
                      , r = t - e.lastTick;
                    e.lastTick = t,
                    e.dt += r,
                    e.dt >= R.f.msPerFrame && (e.updateAnimations(e.dt),
                    e.dt = 0),
                    e.animationFrame = Object($n.c)(e.runAnimationLoop)
                }
            }
        }),
        Vn = no(In.prototype, "updateAnimations", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t) {
                    var r = []
                      , n = !1
                      , o = !1;
                    t >= 1e3 && (o = !0);
                    for (var i = 0, a = e.nodes.length; i < a; i++) {
                        var c = e.nodes[i]
                          , l = c.animation;
                        if (l && (l.dt += t,
                        o || l.dt >= l.time)) {
                            if ("remove" === l.type) {
                                n = !0;
                                continue
                            }
                            c.animation = null
                        }
                        n && (c.render = !0),
                        r.push(c)
                    }
                    e.nodes = r
                }
            }
        }),
        Qn = no(In.prototype, "renderAll", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    for (var t = 0, r = e.nodes.length; t < r; t++) {
                        e.nodes[t].render = !0
                    }
                }
            }
        }),
        no(In.prototype, "styles", [M.computed], Object.getOwnPropertyDescriptor(In.prototype, "styles"), In.prototype),
        In);
        function ao(e) {
            return (ao = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function co() {
            return (co = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function lo(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function uo(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function so(e, t) {
            return !t || "object" !== ao(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function fo(e) {
            return (fo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function po(e, t) {
            return (po = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var bo = {}
          , yo = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = so(this, (e = fo(t)).call.apply(e, [this].concat(o)))).ctx = void 0,
                r.barColor = void 0,
                r.wholeColorHighlight = void 0,
                r.decimalColorHighlight = void 0,
                r.changeWholeColor = void 0,
                r.changeDecimalColor = void 0,
                r.height = 0,
                r.width = 0,
                r.nodeCount = 0,
                r.textYOffset = Math.round(oo / 2),
                r.selectNode = function() {
                    var e = r.props.orderBookUIStore
                      , t = e.type
                      , n = e.nodes
                      , o = e.setSelected
                      , i = e.mouse
                      , a = i.active
                      , c = i.y;
                    if (!a)
                        return o(null);
                    var l = "bids" === t ? Math.floor(c / oo) : Math.floor((r.height - c) / oo);
                    if (l < 0 || l >= n.length)
                        return o(null);
                    o(n[l])
                }
                ,
                r.draw = function(e, t, n) {
                    var o = r.props.orderBookUIStore
                      , i = o.nodes
                      , a = o.type
                      , c = o.setNodeRender
                      , l = o.setNodeY
                      , u = o.renderIndex
                      , s = o.renderEndIndex
                      , f = o.styles;
                    r.ctx = e,
                    r.width = t,
                    r.height = n,
                    "asks" === a ? (r.barColor = f.asksBarColor,
                    r.wholeColorHighlight = f.asksWholeColor,
                    r.decimalColorHighlight = f.asksDecimalColor,
                    r.changeWholeColor = f.asksChangeWholeColor,
                    r.changeDecimalColor = f.asksChangeDecimalColor) : (r.barColor = f.bidsBarColor,
                    r.wholeColorHighlight = f.bidsWholeColor,
                    r.decimalColorHighlight = f.bidsDecimalColor,
                    r.changeWholeColor = f.bidsChangeWholeColor,
                    r.changeDecimalColor = f.bidsChangeDecimalColor),
                    r.setTextStyles();
                    for (var p = u, b = Math.min(i.length, s); p < b; p++) {
                        var y = i[p];
                        l(y, "bids" === a ? oo * p : n - oo * (p + 1)),
                        y.render && (e.clearRect(0, y.y, t, oo),
                        r.renderBG(y),
                        r.renderBar(y),
                        r.renderMarketSize(y),
                        r.renderPrice(y),
                        r.renderMySize(y)),
                        y.animation || c(y, !1)
                    }
                    if (i.length < r.nodeCount) {
                        var d = (r.nodeCount - i.length) * oo
                          , h = "bids" === a ? i.length * oo : r.height - oo * r.nodeCount;
                        e.clearRect(0, h, t, d)
                    }
                    r.nodeCount = i.length,
                    r.selectNode()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && po(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "setTextStyles",
                value: function() {
                    var e = this.props.orderBookUIStore.styles
                      , t = this.ctx;
                    t && (t.font = "".concat(e.fontWeight, " ").concat(e.fontSize, "px ").concat(e.fontFamily),
                    t.textAlign = e.textAlign,
                    t.textBaseline = e.textBaseline)
                }
            }, {
                key: "renderBG",
                value: function(e) {
                    var t = this.props.orderBookUIStore.styles;
                    if (e.animation && "remove" === e.animation.type) {
                        var r = this.easeInOut(e.animation.dt / e.animation.time)
                          , n = t.removeFromColor
                          , o = t.removeToColor;
                        this.ctx.fillStyle = Object(Hr.c)(r, o, n),
                        this.ctx.fillRect(0, e.y, this.width, oo)
                    }
                }
            }, {
                key: "renderBar",
                value: function(e) {
                    var t = this.props.orderBookUIStore.columns
                      , r = a.a.product.maxBarSize;
                    this.ctx.fillStyle = this.barColor;
                    var n = t.bar.width * this.width * Math.min(r, +e.size) / r;
                    this.ctx.fillRect(0, e.y, Math.max(n, 1), oo)
                }
            }, {
                key: "renderMarketSize",
                value: function(e) {
                    var t = this.props.orderBookUIStore
                      , r = t.columns
                      , n = t.styles
                      , o = +e.size
                      , i = [n.wholeColor, n.normalColor, n.dimColor]
                      , a = e.animation;
                    if (a && "change" === a.type) {
                        var c = this.easeInOut(a.dt / a.time);
                        i = [Object(Hr.c)(c, this.changeWholeColor, n.wholeColor), Object(Hr.c)(c, this.changeWholeColor, n.normalColor), Object(Hr.c)(c, this.changeDecimalColor, n.dimColor)]
                    } else
                        a && "remove" === a.type && (i = [n.dimColor]);
                    var l = (r.size.x + r.size.width) * this.width - r.size.padding
                      , u = Object(Gr.i)(o, {
                        formattedValue: o.toFixed(4)
                    });
                    this._renderMulticolorText(u, i, l, e.y + this.textYOffset, !0)
                }
            }, {
                key: "renderPrice",
                value: function(e) {
                    var t = this.props.orderBookUIStore
                      , r = t.columns
                      , n = t.styles
                      , o = a.a.product
                      , i = +e.price
                      , c = Object(Gr.i)(i, {
                        formattedValue: i.toFixed(o.price_precision)
                    })
                      , l = [this.wholeColorHighlight, this.decimalColorHighlight];
                    e.animation && "remove" === e.animation.type && (l = [n.dimColor]);
                    var u = (r.price.x + r.price.width) * this.width - r.price.padding;
                    this._renderMulticolorText(c, l, u, e.y + this.textYOffset, !0)
                }
            }, {
                key: "renderMySize",
                value: function(e) {
                    var t = this.props.orderBookUIStore
                      , r = t.columns
                      , n = t.mySizes
                      , o = t.styles
                      , i = a.a.product
                      , c = [o.wholeColor, o.normalColor, o.dimColor]
                      , l = e.animation
                      , u = e.price;
                    if (l && "change" === l.type) {
                        var s = this.easeInOut(l.dt / l.time);
                        c = [Object(Hr.c)(s, this.changeWholeColor, o.wholeColor), Object(Hr.c)(s, this.changeWholeColor, o.normalColor), Object(Hr.c)(s, this.changeDecimalColor, o.dimColor)]
                    } else
                        l && "remove" === l.type && (c = [o.dimColor]);
                    var f = n[u.toString()] || 0
                      , p = Object(Gr.i)(f, {
                        formattedValue: f.toFixed(i.base_precision),
                        zeroValue: "-"
                    })
                      , b = (r.mySize.x + r.mySize.width) * this.width - r.mySize.padding;
                    this._renderMulticolorText(p, c, b, e.y + this.textYOffset, !0)
                }
            }, {
                key: "_renderMulticolorText",
                value: function(e, t, r, n, o) {
                    for (var i = 0, a = e.length === t.length ? e : e.slice(0, t.length - 1).concat(e.slice(t.length - 1).join("")), c = this.ctx, l = 0, u = a.length; l < u; l++) {
                        var s = o ? u - l - 1 : l
                          , f = a[s];
                        f && (c.fillStyle = t[s],
                        c.fillText(f, Math.round(r - i), Math.round(n)),
                        i += this._measureText(f))
                    }
                }
            }, {
                key: "_measureText",
                value: function(e) {
                    for (var t = 0, r = 0, n = e.length; r < n; r++) {
                        var o = e[r]
                          , i = bo[o];
                        i || (i = this.ctx.measureText(o).width,
                        bo[o] = i),
                        t += i
                    }
                    return t
                }
            }, {
                key: "easeInOut",
                value: function(e) {
                    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.orderBookUIStore,
                    lo(e, ["orderBookUIStore"]));
                    return o.createElement(qr.a, co({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && uo(r.prototype, n),
            i && uo(r, i),
            t
        }()
          , ho = Object(l.b)("orderBookUIStore")(Object(l.c)(yo))
          , mo = Object(l.b)("orderBookUIStore")(Object(l.c)(function(e) {
            var t = e.orderBookUIStore
              , r = t.selected
              , n = t.styles
              , i = t.mouse.x
              , a = t.columns
              , c = t.mySizes
              , l = e.width
              , u = void 0 === l ? 0 : l
              , s = e.height
              , f = void 0 === s ? 0 : s;
            if (!r)
                return null;
            var p = u - a.mySize.width * u;
            return o.createElement(qr.b, {
                top: r.y,
                left: 0,
                right: 0,
                bottom: f - r.y - oo,
                width: u,
                height: oo,
                style: {
                    background: n.hoverColor
                }
            }, i >= p && c[r.price.toString()] ? o.createElement(qr.b, {
                top: 0,
                left: p,
                right: 0,
                bottom: 0,
                width: u,
                height: oo,
                style: {
                    background: n.cancelColor
                }
            }) : null)
        }))
          , vo = r(132);
        function go(e) {
            return (go = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Oo(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = []
                  , n = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        function wo(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , l = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function So(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        wo(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        wo(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function jo(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _o(e, t) {
            return !t || "object" !== go(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function xo(e) {
            return (xo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Eo(e, t) {
            return (Eo = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ko = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = _o(this, (e = xo(t)).call.apply(e, [this].concat(o)))).root = void 0,
                r.onMarketSizeClick = So(regeneratorRuntime.mark(function e() {
                    var t, n, o, i, a, c, l, u, f, p, b, y, d, h, m, v, g, O, w, S, j;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = r.props,
                                n = t.orderFormStore,
                                o = t.orderBookUIStore,
                                i = o.type,
                                a = o.selected,
                                c = s.B.asks,
                                l = s.B.bids,
                                u = s.B.calculateBaseBuyOrder,
                                f = vo.a.product,
                                a) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                p = a.price,
                                b = "bids" === i ? p.gt.bind(p) : p.lt.bind(p),
                                y = "bids" === i ? l : c,
                                d = F()(0),
                                h = 0,
                                m = y.length;
                            case 10:
                                if (!(h < m)) {
                                    e.next = 18;
                                    break
                                }
                                if (v = Oo(y[h], 2),
                                g = v[0],
                                O = v[1],
                                !b(g)) {
                                    e.next = 14;
                                    break
                                }
                                return e.abrupt("break", 18);
                            case 14:
                                d = d.add(O);
                            case 15:
                                h++,
                                e.next = 10;
                                break;
                            case 18:
                                if (n.setType("market"),
                                n.setPrice(""),
                                "bids" !== i) {
                                    e.next = 25;
                                    break
                                }
                                n.setSide("sell"),
                                n.setAmount(d.toFixed(f.base_precision)),
                                e.next = 32;
                                break;
                            case 25:
                                return n.setSide("buy"),
                                w = u(d).total,
                                e.next = 29,
                                s.z.loader;
                            case 29:
                                S = s.z.feeRate || s.z.exchangeFeeRates[0],
                                j = w.mul(S.fee),
                                n.setAmount(w.add(j).toFixed(f.price_precision));
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                r.onPriceClick = function() {
                    var e = r.props
                      , t = e.orderFormStore
                      , n = e.orderBookUIStore
                      , o = n.type
                      , i = n.selected
                      , a = vo.a.product;
                    if (i) {
                        var c = i.price.toFixed(a.price_precision);
                        if ("stop" === t.type)
                            return t.setSide("bids" === o ? "sell" : "buy"),
                            void t.setStopPrice(c);
                        t.setType("limit"),
                        t.setSide("bids" === o ? "buy" : "sell"),
                        t.setPrice(c)
                    }
                }
                ,
                r.onMySizeClick = function() {
                    var e = r.props
                      , t = e.ordersStore
                      , n = e.orderBookStore
                      , o = n.hasAggregation
                      , i = n.bucket
                      , a = e.orderBookUIStore
                      , c = a.type
                      , l = a.selected;
                    if (l) {
                        var u = l.price;
                        ("bids" === c ? t.activeBuys : t.activeSells).forEach(function(e) {
                            var r = o ? i(e.side, e.price) : e.price;
                            u && r.eq(u) && e.active && t.destroyOrder(e)
                        })
                    }
                }
                ,
                r.onMouseMove = function(e) {
                    var t = r.props.orderBookUIStore.mouse
                      , n = e.currentTarget.getBoundingClientRect()
                      , o = n.left
                      , i = n.top
                      , a = e.pageX - o
                      , c = e.pageY - i;
                    t.set({
                        x: a,
                        y: c
                    })
                }
                ,
                r.onMouseOut = function() {
                    r.props.orderBookUIStore.mouse.set()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Eo(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.orderBookUIStore
                      , r = t.columns
                      , n = t.mouse.x
                      , i = t.selected
                      , a = t.mySizes
                      , c = e.width
                      , l = void 0 === c ? 0 : c
                      , u = e.height
                      , s = void 0 === u ? 0 : u
                      , f = (r.size.width + r.bar.width) * l
                      , p = f + r.price.width * l;
                    return o.createElement(qr.b, {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        onMouseMove: this.onMouseMove,
                        onMouseOut: this.onMouseOut
                    }, o.createElement(qr.b, {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: l - f,
                        onClick: this.onMarketSizeClick,
                        style: {
                            cursor: "pointer"
                        }
                    }), o.createElement(qr.b, {
                        top: 0,
                        bottom: 0,
                        left: f,
                        right: l - p,
                        onClick: this.onPriceClick,
                        style: {
                            cursor: "pointer"
                        }
                    }), o.createElement(qr.b, {
                        top: 0,
                        bottom: 0,
                        left: p,
                        right: 0,
                        onClick: this.onMySizeClick
                    }, i && a[i.price.toString()] && n >= p ? o.createElement(qr.b, {
                        top: i.y,
                        left: 0,
                        right: 0,
                        bottom: s - i.y - oo,
                        style: {
                            cursor: "pointer"
                        }
                    }, o.createElement(Co, null)) : null))
                }
            }]) && jo(r.prototype, n),
            i && jo(r, i),
            t
        }()
          , Co = Object(Y.c)(K.b).withConfig({
            componentId: "d6h93l-0"
        })(["position:absolute;top:-2px;right:4px;width:8px;height:8px;"])
          , Po = Object(l.b)("orderBookUIStore", "orderBookStore", "orderFormStore", "ordersStore")(Object(l.c)(ko));
        function To(e) {
            return (To = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function zo(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ao(e, t) {
            return !t || "object" !== To(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ro(e) {
            return (Ro = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Io(e, t) {
            return (Io = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Do, Mo = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Ao(this, (e = Ro(t)).call.apply(e, [this].concat(o)))).onSize = function() {
                    r.props.orderBookUIStore.renderAll()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Io(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(Bo, null, o.createElement(qr.e, {
                        onSize: this.onSize
                    }, o.createElement(mo, null), o.createElement(ho, null), o.createElement(Po, null)))
                }
            }]) && zo(r.prototype, n),
            i && zo(r, i),
            t
        }(), Bo = Y.c.div.withConfig({
            componentId: "sc-1agy7ty-0"
        })(["display:flex;flex:1;height:50%;min-height:", "px;"], 50 * oo), Fo = Object(l.b)("orderBookUIStore")(Object(l.c)(Mo)), Lo = Object(l.b)("ordersStore", "orderBookStore", "scrollerStore")(Object(l.c)(function(e) {
            var t = e.type
              , r = e.ordersStore
              , n = e.orderBookStore
              , i = e.scrollerStore
              , a = new io(t,{
                ordersStore: r,
                orderBookStore: n,
                scrollerStore: i
            });
            return o.createElement(u.b, {
                orderBookUIStore: a
            }, o.createElement(Fo, e))
        }));
        function Wo(e) {
            return (Wo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Uo(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function No(e, t) {
            return !t || "object" !== Wo(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function qo(e) {
            return (qo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ho(e, t) {
            return (Ho = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Go = Object(l.c)(Do = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = No(this, (e = qo(t)).call.apply(e, [this].concat(o)))).disposers = [],
                r.onClick = function() {
                    r.props.scrollerStore.center()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ho(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.fixed
                      , r = e.scrollerStore;
                    r.center(),
                    t || (this.disposers.push(Object(M.observe)(r, "height", r.center)),
                    this.disposers.push(Object(M.observe)(r, "viewport", r.center)))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.disposers.forEach(function(e) {
                        return e()
                    }),
                    this.disposers.length = 0
                }
            }, {
                key: "render",
                value: function() {
                    var e = a.a.product
                      , t = this.renderPosition;
                    return e && t ? o.createElement(Yo, {
                        borderTop: !0,
                        position: t,
                        onClick: this.onClick
                    }, o.createElement(ue, {
                        basis: 38,
                        padding: 3
                    }, e.quote.id, " Spread"), o.createElement(ue, {
                        basis: 30,
                        padding: 3
                    }, this.spread), o.createElement(ue, {
                        basis: 32,
                        padding: 3
                    })) : null
                }
            }, {
                key: "renderPosition",
                get: function() {
                    var e = this.props
                      , t = e.fixed
                      , r = e.scrollerStore
                      , n = r.top
                      , o = r.viewport;
                    if (!t)
                        return "static";
                    var i = 50 * oo;
                    return i + ce > n + o ? "bottom" : i < n ? "top" : null
                }
            }, {
                key: "spread",
                get: function() {
                    var e = a.a.product.price_precision
                      , t = this.props.orderBookStore.spread;
                    return o.createElement(Ko, {
                        value: t,
                        precision: e
                    })
                }
            }]) && Uo(r.prototype, n),
            i && Uo(r, i),
            t
        }()) || Do
          , Yo = Object(Y.c)(ae).withConfig({
            componentId: "sc-4ksms0-0"
        })(["cursor:pointer;", ";", ";"], function(e) {
            return "top" === e.position && Object(Y.b)(["position:absolute;top:-1px;right:0;left:0;"])
        }, function(e) {
            return "bottom" === e.position && Object(Y.b)(["position:absolute;right:0;bottom:-1px;left:0;"])
        })
          , Ko = Object(Y.c)(V.v).withConfig({
            componentId: "sc-4ksms0-1"
        })(["font-size:inherit;color:inherit;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["font-size:", ";"], t.fonts.size.small)
        })
          , Xo = Object(l.b)("orderBookStore", "scrollerStore")(Object(l.c)(Go))
          , Jo = Y.c.div.attrs({
            role: "button"
        }).withConfig({
            componentId: "sc-1o2hmw4-0"
        })(["display:flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;", ";"], function(e) {
            return e.disabled && Object(Y.b)(["opacity:0.2;cursor:default;"])
        })
          , Vo = Object(Y.c)(V.v).withConfig({
            componentId: "sc-1o2hmw4-1"
        })(["font-size:inherit;color:inherit;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["font-size:", ";"], t.fonts.size.small)
        })
          , Qo = Object(Y.c)(me.db).withConfig({
            componentId: "sc-1o2hmw4-2"
        })(["width:16px;height:16px;margin-right:8px;"])
          , Zo = Object(Y.c)(me.ib).withConfig({
            componentId: "sc-1o2hmw4-3"
        })(["width:16px;height:16px;margin-right:12px;"])
          , $o = Object(l.b)("orderBookStore")(Object(l.c)(function(e) {
            var t = e.orderBookStore
              , r = a.a.product;
            if (!r)
                return null;
            var n = t.aggregationIndex
              , i = t.aggregationValue
              , c = t.increaseAggregation
              , l = t.decreaseAggregation;
            return o.createElement(ae, {
                borderTop: !0,
                borderBottom: !1
            }, o.createElement(ue, {
                basis: 38,
                padding: 3
            }, "Aggregation"), o.createElement(ue, {
                basis: 30,
                padding: 3
            }, o.createElement(Vo, {
                value: i,
                precision: r.price_precision
            })), o.createElement(K.c, {
                flex: "1 0 32%",
                justify: "flex-end"
            }, o.createElement(Jo, {
                disabled: n <= s.n,
                onClick: l
            }, o.createElement(Qo, null)), o.createElement(Jo, {
                disabled: n >= s.l,
                onClick: c
            }, o.createElement(Zo, null))))
        }))
          , ei = Object(Y.c)(K.c).withConfig({
            componentId: "sc-17rztxs-0"
        })(["flex:1;flex-direction:column;overflow:hidden;"])
          , ti = Object(l.b)("orderBookStore")(Object(l.c)(function(e) {
            var t = e.contentOnly
              , r = s.B.loading
              , n = a.a.product;
            if (!n)
                return null;
            var i = o.createElement(ei, null, o.createElement(ae, null, o.createElement(ue, {
                basis: 38,
                padding: 3
            }, "Market Size"), o.createElement(ue, {
                basis: 30,
                padding: 3
            }, "Price (", n.quote.id, ")"), o.createElement(ue, {
                basis: 32,
                padding: 16
            }, "My Size")), r ? o.createElement(K.c, {
                auto: !0,
                center: !0
            }, o.createElement(me.qb, null)) : o.createElement(V.I, null, o.createElement(Lo, {
                type: "asks"
            }), o.createElement(Xo, null), o.createElement(Lo, {
                type: "bids"
            }), o.createElement(Xo, {
                fixed: !0
            })), o.createElement($o, null));
            return t ? i : o.createElement(J.c, {
                onSignup: L.u.signup,
                onLogin: L.u.signin,
                signupEvent: "order_book_cta_mask_signup",
                loginEvent: "order_book_cta_mask_login",
                showCta: !s.J.user
            }, o.createElement(V.D, {
                title: "Order Book"
            }, i))
        }));
        function ri(e) {
            return (ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ni(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function oi(e, t) {
            return !t || "object" !== ri(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ii(e) {
            return (ii = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ai(e, t) {
            return (ai = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ci = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = oi(this, (e = ii(t)).call.apply(e, [this].concat(o)))).orderBookStore = new s.o,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ai(e, t)
            }(t, o["PureComponent"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.contentOnly;
                    return o.createElement(u.b, {
                        orderBookStore: this.orderBookStore
                    }, o.createElement(ti, {
                        contentOnly: e
                    }))
                }
            }]) && ni(r.prototype, n),
            i && ni(r, i),
            t
        }();
        function li(e) {
            return (li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ui(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function si(e, t) {
            return !t || "object" !== li(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function fi(e) {
            return (fi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function pi(e, t) {
            return (pi = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var bi = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = si(this, (e = fi(t)).call.apply(e, [this].concat(o)))).chartTypeStore = new R.d("chart_chart_type_hovered"),
                r.durationsStore = new R.d("chart_time_interval_hovered"),
                r.overlayStore = new R.d("chart_overlay_hovered"),
                r.setChartType = function(e) {
                    var t = r.props.candlesStore;
                    Object(T.d)("chart_chart_type_selected", {
                        chart_type: e
                    }),
                    r.chartTypeStore.hide(),
                    t.setType(e)
                }
                ,
                r.setChartTypeCandle = function(e) {
                    e.stopPropagation(),
                    r.setChartType("candle")
                }
                ,
                r.setChartTypeLine = function(e) {
                    e.stopPropagation(),
                    r.setChartType("line")
                }
                ,
                r.setDuration = function(e) {
                    var t = r.props.candlesStore;
                    Object(T.d)("chart_time_interval_selected", {
                        time_interval: e
                    }),
                    r.durationsStore.hide(),
                    t.setDuration(e)
                }
                ,
                r.resumeChart = function() {
                    r.props.priceChartStore.resume()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && pi(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.priceChartStore.manualScroll;
                    return o.createElement(ae, null, this.durations, this.chartType, this.overlay, o.createElement(K.c, {
                        auto: !0
                    }), o.createElement(gi, {
                        onClick: this.resumeChart
                    }, o.createElement(Oi, {
                        fontSize: "small",
                        active: e
                    }, "▶")))
                }
            }, {
                key: "chartType",
                get: function() {
                    var e = this.props.candlesStore.type
                      , t = this.chartTypeStore;
                    return o.createElement(yi, {
                        onMouseOver: R.f.isDesktop ? t.show : null,
                        onMouseLeave: t.hide,
                        onClick: R.f.isDesktop ? null : t.toggle
                    }, o.createElement(di, {
                        center: !0
                    }, o.createElement(ue, null, "line" === e ? "Line" : "Candle"), o.createElement(hi, {
                        isOpen: !t.hidden
                    })), o.createElement(V.k, {
                        hidden: t.hidden,
                        left: "-1px",
                        right: "-1px",
                        height: "200px"
                    }, o.createElement(be, null, o.createElement(mi, {
                        onClick: this.setChartTypeCandle
                    }, "Candle"), o.createElement(mi, {
                        onClick: this.setChartTypeLine
                    }, "Line"))))
                }
            }, {
                key: "durations",
                get: function() {
                    var e = this
                      , t = this.props.candlesStore
                      , r = t.duration
                      , n = t.durations
                      , i = this.durationsStore;
                    return o.createElement(yi, {
                        onMouseOver: R.f.isDesktop ? i.show : null,
                        onMouseLeave: i.hide,
                        onClick: R.f.isDesktop ? null : i.toggle
                    }, o.createElement(di, {
                        center: !0
                    }, o.createElement(ue, null, r), o.createElement(hi, {
                        isOpen: !i.hidden
                    })), o.createElement(V.k, {
                        hidden: i.hidden,
                        left: "-1px",
                        right: "-1px",
                        height: "400px"
                    }, o.createElement(be, null, n.map(function(t) {
                        return o.createElement(mi, {
                            key: t,
                            onClick: function(r) {
                                r.stopPropagation(),
                                e.setDuration(t)
                            }
                        }, t)
                    }))))
                }
            }, {
                key: "overlay",
                get: function() {
                    var e = this.props.priceChartStore
                      , t = e.emas
                      , r = e.styles
                      , n = this.overlayStore;
                    return o.createElement(yi, {
                        onMouseOver: R.f.isDesktop ? n.show : null,
                        onMouseLeave: n.hide,
                        onClick: R.f.isDesktop ? null : n.toggle
                    }, o.createElement(di, {
                        center: !0
                    }, o.createElement(ue, null, "Overlay"), o.createElement(hi, {
                        isOpen: !n.hidden
                    })), o.createElement(V.k, {
                        hidden: n.hidden,
                        left: "-1px",
                        right: "-1px",
                        height: "200px"
                    }, o.createElement(be, null, Object.keys(t).map(function(e, n) {
                        var i = t[e]
                          , a = i.periods
                          , c = i.toggle
                          , l = i.show
                          , u = r["emaColor".concat(n + 1)];
                        return o.createElement(mi, {
                            key: e,
                            onClick: function(e) {
                                e.stopPropagation(),
                                c()
                            }
                        }, o.createElement(vi, {
                            color: u,
                            active: l
                        }), "EMA".concat(a))
                    }))))
                }
            }]) && ui(r.prototype, n),
            i && ui(r, i),
            t
        }()
          , yi = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1mf7p9r-0"
        })(["position:relative;cursor:pointer;", ";"], function(e) {
            var t = e.theme;
            return "\n        border-right: 1px solid ".concat(t.colors.divider.default, ";\n    ")
        })
          , di = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1mf7p9r-1"
        })(["padding:0 14px;"])
          , hi = Object(Y.c)(V.b).withConfig({
            componentId: "sc-1mf7p9r-2"
        })(["margin-left:10px;"])
          , mi = Object(Y.c)(ue).attrs({
            justify: "flex-start"
        }).withConfig({
            componentId: "sc-1mf7p9r-3"
        })(["padding:10px 14px;text-align:left;cursor:pointer;"])
          , vi = Y.c.span.withConfig({
            componentId: "sc-1mf7p9r-4"
        })(["display:inline-block;width:8px;height:8px;margin-right:8px;border-radius:50%;", ";"], function(e) {
            var t = e.color
              , r = e.active;
            return Object(Y.b)(["background:", ";opacity:", ";"], t, r ? 1 : .2)
        })
          , gi = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1mf7p9r-5"
        })(["flex-shrink:0;align-items:center;padding:0 10px;cursor:pointer;", ";"], function(e) {
            var t = e.theme;
            return "\n        border-left: 1px solid ".concat(t.colors.divider.default, ";\n    ")
        })
          , Oi = Object(Y.c)(K.h).withConfig({
            componentId: "sc-1mf7p9r-6"
        })(["", ";"], function(e) {
            var t = e.active;
            return "\n        opacity: ".concat(t ? 1 : .2, ";\n    ")
        })
          , wi = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(bi))
          , Si = r(16)
          , ji = r.n(Si);
        function _i(e) {
            return (_i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function xi() {
            return (xi = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ei(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function ki(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ci(e, t) {
            return !t || "object" !== _i(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Pi(e) {
            return (Pi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ti(e, t) {
            return (Ti = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var zi = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Ci(this, (e = Pi(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.priceChartStore
                      , i = o.candleWidth
                      , a = o.xAxis
                      , c = o.yAxis
                      , l = o.styles;
                    e.clearRect(0, 0, t, n),
                    e.strokeStyle = l.gridColor,
                    e.beginPath();
                    for (var u = a.ticks, s = 0, f = u.length; s < f; s++) {
                        var p = ji.a.utc(u[s])
                          , b = Math.round(a.toRange(p.valueOf()) - i) + .5;
                        e.moveTo(b, 0),
                        e.lineTo(b, n)
                    }
                    for (var y = c.ticks, d = 0, h = y.length; d < h; d++) {
                        var m = y[d]
                          , v = c.toRange(m);
                        e.moveTo(0, v),
                        e.lineTo(t, v)
                    }
                    e.stroke()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ti(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    Ei(e, ["priceChartStore"]));
                    return o.createElement(qr.a, xi({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && ki(r.prototype, n),
            i && ki(r, i),
            t
        }()
          , Ai = Object(l.b)("priceChartStore")(Object(l.c)(zi));
        function Ri(e) {
            return (Ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ii() {
            return (Ii = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Di(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function Mi(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Bi(e, t) {
            return !t || "object" !== Ri(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Fi(e) {
            return (Fi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Li(e, t) {
            return (Li = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Wi = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Bi(this, (e = Fi(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props
                      , i = o.priceChartStore
                      , a = i.xAxis
                      , c = i.candleWidth
                      , l = i.styles
                      , u = o.yAxisWidth;
                    e.clearRect(0, 0, t, n),
                    e.strokeStyle = l.axisColor,
                    e.lineWidth = l.axisLineWidth,
                    e.beginPath(),
                    e.moveTo(0, .5),
                    e.lineTo(t - u, .5),
                    e.stroke(),
                    r.setTextStyle(e);
                    for (var s = a.ticks, f = 0, p = s.length; f < p; f++) {
                        var b = ji.a.utc(s[f])
                          , y = b.hour()
                          , d = b.minutes()
                          , h = "";
                        y || d ? d ? d && (h = b.format("h:mm A")) : h = b.format("h A") : h = b.format("MMM D");
                        var m = Math.round(a.toRange(b.valueOf()) - c) + .5;
                        e.fillText(h, m, 7)
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Li(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "setTextStyle",
                value: function(e) {
                    var t = this.props.priceChartStore.styles;
                    e.font = "".concat(t.fontWeight, " ").concat(t.fontSize, "px ").concat(t.fontFamily),
                    e.textAlign = t.xAxisTextAlign,
                    e.textBaseline = t.xAxisTextBaseline,
                    e.fillStyle = t.textColor
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    Di(e, ["priceChartStore"]));
                    return o.createElement(qr.a, Ii({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && Mi(r.prototype, n),
            i && Mi(r, i),
            t
        }()
          , Ui = Object(l.b)("priceChartStore")(Object(l.c)(Wi));
        function Ni(e) {
            return (Ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function qi() {
            return (qi = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Hi(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function Gi(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Yi(e, t) {
            return !t || "object" !== Ni(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ki(e) {
            return (Ki = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Xi(e, t) {
            return (Xi = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Ji = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Yi(this, (e = Ki(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.priceChartStore
                      , i = o.yAxis
                      , c = o.styles
                      , l = a.a.product;
                    e.clearRect(0, 0, t, n),
                    r.setTextStyle(e);
                    for (var u = l.quote.symbol, s = i.ticks, f = 0, p = s.length; f < p; f++) {
                        var b = s[f]
                          , y = i.toRange(b);
                        e.fillText("".concat(u).concat(b.toLocaleString("en-US")), c.yAxisLeftPadding, y)
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Xi(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "setTextStyle",
                value: function(e) {
                    var t = this.props.priceChartStore.styles;
                    e.font = "".concat(t.fontWeight, " ").concat(t.fontSize, "px ").concat(t.fontFamily),
                    e.textAlign = t.yAxisTextAlign,
                    e.textBaseline = t.yAxisTextBaseline,
                    e.fillStyle = t.textColor
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    Hi(e, ["priceChartStore"]));
                    return o.createElement(qr.a, qi({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && Gi(r.prototype, n),
            i && Gi(r, i),
            t
        }()
          , Vi = Object(l.b)("priceChartStore")(Object(l.c)(Ji));
        function Qi(e) {
            return (Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Zi() {
            return (Zi = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function $i(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function ea(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function ta(e, t) {
            return !t || "object" !== Qi(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ra(e) {
            return (ra = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function na(e, t) {
            return (na = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var oa = 2
          , ia = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = ta(this, (e = ra(t)).call.apply(e, [this].concat(o)))).lastX = 0,
                r.lastY = 0,
                r.draw = function(e, t, n) {
                    var o = r.props
                      , i = o.priceChartStore
                      , a = i.mouse
                      , c = i.styles
                      , l = o.candlesStore.type;
                    if (e.clearRect(r.lastX - oa, 0, 2 * oa, n),
                    e.clearRect(0, r.lastY - oa, t, 2 * oa),
                    a.active) {
                        e.strokeStyle = c.crosshairsColor,
                        e.setLineDash([2, 2]);
                        var u = qr.d.round(a.x)
                          , s = qr.d.round(a.y);
                        r.lastX = u,
                        r.lastY = s,
                        e.beginPath(),
                        e.moveTo(t, s),
                        e.lineTo(0, s),
                        "line" === l && (e.moveTo(u, n),
                        e.lineTo(u, 0)),
                        e.stroke()
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && na(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    $i(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, Zi({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && ea(r.prototype, n),
            i && ea(r, i),
            t
        }()
          , aa = Object(l.b)("priceChartStore", "candlesStore")(Object(l.c)(ia));
        function ca(e) {
            return (ca = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function la() {
            return (la = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ua(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function sa(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function fa(e, t) {
            return !t || "object" !== ca(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function pa(e) {
            return (pa = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ba(e, t) {
            return (ba = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ya = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = fa(this, (e = pa(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props
                      , i = o.candlesStore.candles
                      , a = o.priceChartStore
                      , c = a.xAxis
                      , l = a.volumeScale
                      , u = a.candleWidth
                      , s = a.styles;
                    e.clearRect(0, 0, t, n);
                    for (var f = {
                        green: {
                            styles: {
                                fillStyle: s.lineVolumeGreenColor
                            },
                            calls: []
                        },
                        red: {
                            styles: {
                                fillStyle: s.lineVolumeRedColor
                            },
                            calls: []
                        }
                    }, p = 0, b = i.length; p < b; p++) {
                        var y = i[p]
                          , d = y.close >= y.open ? "green" : "red"
                          , h = c.toRange(y.date)
                          , m = l.toRange(y.volume);
                        f[d].calls.push(e.rect.bind(e, h - u, m, u, n - m))
                    }
                    r.drawBatchedCalls(e, f)
                }
                ,
                r.drawBatchedCalls = function(e, t) {
                    for (var r in t) {
                        var n = t[r];
                        for (var o in n.styles)
                            e[o] = n.styles[o];
                        e.beginPath();
                        var i = !0
                          , a = !1
                          , c = void 0;
                        try {
                            for (var l, u = n.calls[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) {
                                (0,
                                l.value)()
                            }
                        } catch (e) {
                            a = !0,
                            c = e
                        } finally {
                            try {
                                i || null == u.return || u.return()
                            } finally {
                                if (a)
                                    throw c
                            }
                        }
                        e.fill()
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ba(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    ua(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, la({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && sa(r.prototype, n),
            i && sa(r, i),
            t
        }()
          , da = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(ya));
        function ha(e) {
            return (ha = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ma() {
            return (ma = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function va(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function ga(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Oa(e, t) {
            return !t || "object" !== ha(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function wa(e) {
            return (wa = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Sa(e, t) {
            return (Sa = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ja = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Oa(this, (e = wa(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props
                      , i = o.priceChartStore
                      , a = i.xAxis
                      , c = i.yAxis
                      , l = i.styles
                      , u = o.candlesStore.candles;
                    if (u.length) {
                        e.clearRect(0, 0, t, n),
                        e.lineWidth = l.lineWidth,
                        e.strokeStyle = l.lineColor,
                        e.beginPath();
                        for (var s = t, f = 0, p = 0, b = u.length; p < b; p++) {
                            var y = u[p]
                              , d = a.toRange(y.date)
                              , h = c.toRange(y.close);
                            p ? (f = d,
                            e.lineTo(d, h)) : (s = d,
                            e.moveTo(d, h))
                        }
                        e.stroke(),
                        e.lineTo(f, n),
                        e.lineTo(s, n);
                        var m = e.createLinearGradient(t / 2, 0, t / 2, n);
                        m.addColorStop(0, l.lineGradientColor1),
                        m.addColorStop(1, l.lineGradientColor2),
                        e.fillStyle = m,
                        e.fill()
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Sa(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    va(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, ma({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && ga(r.prototype, n),
            i && ga(r, i),
            t
        }()
          , _a = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(ja));
        function xa(e) {
            return (xa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ea() {
            return (Ea = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ka(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function Ca(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Pa(e, t) {
            return !t || "object" !== xa(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ta(e) {
            return (Ta = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function za(e, t) {
            return (za = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Aa, Ra = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Pa(this, (e = Ta(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.priceChartStore
                      , i = o.xAxis
                      , a = o.yAxis
                      , c = o.candleWidth
                      , l = o.emas
                      , u = o.styles;
                    e.clearRect(0, 0, t, n),
                    Object.keys(l).forEach(function(t, r) {
                        var n = l[t]
                          , o = n.show
                          , s = n.data;
                        if (o) {
                            e.lineWidth = u.emaLineWidth,
                            e.strokeStyle = u["emaColor".concat(r + 1)] || "#fff",
                            e.beginPath();
                            for (var f = 0, p = s.length; f < p; f++) {
                                var b = s[f].candle
                                  , y = i.toRange(b.date) - c / 2
                                  , d = a.toRange(s[f].ema);
                                f ? e.lineTo(y, d) : e.moveTo(y, d)
                            }
                            e.stroke()
                        }
                    })
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && za(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    ka(e, ["priceChartStore"]));
                    return o.createElement(qr.a, Ea({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && Ca(r.prototype, n),
            i && Ca(r, i),
            t
        }(), Ia = Object(l.b)("priceChartStore")(Object(l.c)(Ra));
        function Da(e) {
            return (Da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ma(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ba(e, t) {
            return !t || "object" !== Da(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Fa(e) {
            return (Fa = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function La(e, t) {
            return (La = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Wa = Object(l.c)(Aa = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                Ba(this, Fa(t).apply(this, arguments))
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && La(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(qr.e, null, o.createElement(da, this.props), o.createElement(_a, this.props), o.createElement(Ia, this.props))
                }
            }]) && Ma(r.prototype, n),
            i && Ma(r, i),
            t
        }()) || Aa;
        function Ua(e) {
            return (Ua = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Na() {
            return (Na = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function qa(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function Ha(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ga(e, t) {
            return !t || "object" !== Ua(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ya(e) {
            return (Ya = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ka(e, t) {
            return (Ka = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Xa = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Ga(this, (e = Ya(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.priceChartStore
                      , i = o.yAxis
                      , a = o.xAxis
                      , c = o.candleWidth
                      , l = o.styles
                      , u = o.candles;
                    e.clearRect(0, 0, t, n);
                    for (var s = {
                        green: {
                            styles: {
                                strokeStyle: l.candleGreenColor,
                                fillStyle: l.candleGreenBackground
                            },
                            calls: []
                        },
                        red: {
                            styles: {
                                strokeStyle: l.candleRedColor,
                                fillStyle: l.candleRedBackground
                            },
                            calls: []
                        }
                    }, f = 0, p = u.length; f < p; f++) {
                        var b = u[f]
                          , y = b.close >= b.open ? "green" : "red"
                          , d = a.toRange(b.date)
                          , h = i.toRange(b.high)
                          , m = i.toRange(b.low)
                          , v = i.toRange(b.open)
                          , g = i.toRange(b.close)
                          , O = s[y].calls;
                        O.push(e.rect.bind(e, d - c, Math.min(v, g), c, Math.abs(g - v)));
                        var w = d - c / 2;
                        O.push(e.moveTo.bind(e, w, Math.min(v, g))),
                        O.push(e.lineTo.bind(e, w, h)),
                        O.push(e.moveTo.bind(e, w, Math.max(v, g))),
                        O.push(e.lineTo.bind(e, w, m))
                    }
                    r.drawBatchedCalls(e, s)
                }
                ,
                r.drawBatchedCalls = function(e, t) {
                    for (var r in t) {
                        var n = t[r];
                        for (var o in n.styles)
                            e[o] = n.styles[o];
                        e.beginPath();
                        var i = !0
                          , a = !1
                          , c = void 0;
                        try {
                            for (var l, u = n.calls[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) {
                                (0,
                                l.value)()
                            }
                        } catch (e) {
                            a = !0,
                            c = e
                        } finally {
                            try {
                                i || null == u.return || u.return()
                            } finally {
                                if (a)
                                    throw c
                            }
                        }
                        e.stroke(),
                        e.fill()
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ka(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    qa(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, Na({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && Ha(r.prototype, n),
            i && Ha(r, i),
            t
        }()
          , Ja = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(Xa));
        function Va(e) {
            return (Va = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Qa() {
            return (Qa = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Za(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function $a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function ec(e, t) {
            return !t || "object" !== Va(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function tc(e) {
            return (tc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function rc(e, t) {
            return (rc = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var nc = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = ec(this, (e = tc(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.priceChartStore
                      , i = o.candles
                      , a = o.xAxis
                      , c = o.volumeScale
                      , l = o.candleWidth
                      , u = o.styles;
                    e.clearRect(0, 0, t, n);
                    for (var s = {
                        styles: {
                            fillStyle: u.volumeColor
                        },
                        calls: []
                    }, f = 0, p = i.length; f < p; f++) {
                        var b = i[f]
                          , y = a.toRange(b.date)
                          , d = c.toRange(b.volume)
                          , h = e.rect.bind(e, y - l, d, l, n - d);
                        s.calls.push(h)
                    }
                    r.drawBatchedCalls(e, s)
                }
                ,
                r.drawBatchedCalls = function(e, t) {
                    for (var r in t.styles)
                        e[r] = t.styles[r];
                    e.beginPath();
                    var n = !0
                      , o = !1
                      , i = void 0;
                    try {
                        for (var a, c = t.calls[Symbol.iterator](); !(n = (a = c.next()).done); n = !0) {
                            (0,
                            a.value)()
                        }
                    } catch (e) {
                        o = !0,
                        i = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    e.fill()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && rc(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    Za(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, Qa({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && $a(r.prototype, n),
            i && $a(r, i),
            t
        }()
          , oc = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(nc));
        function ic(e) {
            return (ic = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ac() {
            return (ac = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function cc(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function lc(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function uc(e, t) {
            return !t || "object" !== ic(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function sc(e) {
            return (sc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function fc(e, t) {
            return (fc = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var pc = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = uc(this, (e = sc(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.priceChartStore
                      , i = o.xAxis
                      , a = o.yAxis
                      , c = o.candleWidth
                      , l = o.emas
                      , u = o.styles;
                    e.clearRect(0, 0, t, n),
                    Object.keys(l).forEach(function(t, r) {
                        var n = l[t]
                          , o = n.show
                          , s = n.data;
                        if (o) {
                            e.lineWidth = u.emaLineWidth,
                            e.strokeStyle = u["emaColor".concat(r + 1)] || "#fff",
                            e.beginPath();
                            for (var f = 0, p = s.length; f < p; f++) {
                                var b = s[f].candle
                                  , y = i.toRange(b.date) - c / 2
                                  , d = a.toRange(s[f].ema);
                                f ? e.lineTo(y, d) : e.moveTo(y, d)
                            }
                            e.stroke()
                        }
                    })
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && fc(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    cc(e, ["priceChartStore"]));
                    return o.createElement(qr.a, ac({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && lc(r.prototype, n),
            i && lc(r, i),
            t
        }()
          , bc = Object(l.b)("priceChartStore")(Object(l.c)(pc));
        function yc(e) {
            return (yc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function dc() {
            return (dc = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function hc(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function mc(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function vc(e, t) {
            return !t || "object" !== yc(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function gc(e) {
            return (gc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Oc(e, t) {
            return (Oc = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var wc, Sc = 2, jc = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = vc(this, (e = gc(t)).call.apply(e, [this].concat(o)))).lastX = 0,
                r.lastCandleWidth = 0,
                r.draw = function(e, t, n) {
                    var o = r.props.priceChartStore
                      , i = o.xAxis
                      , a = o.yAxis
                      , c = o.volumeScale
                      , l = o.candleWidth
                      , u = o.selected
                      , s = o.styles;
                    if (e.clearRect(r.lastX - Sc - r.lastCandleWidth, 0, r.lastCandleWidth + 2 * Sc, n),
                    u) {
                        e.fillStyle = s.highlightVolumeColor;
                        var f = i.toRange(u.date);
                        r.lastX = f,
                        r.lastCandleWidth = l,
                        e.fillStyle = "rgba(255,255,255, 0.05)",
                        e.fillRect(f - l, 0, l, n);
                        var p = c.toRange(u.volume);
                        e.fillRect(f - l, p, l, n - p);
                        var b = a.toRange(u.high)
                          , y = a.toRange(u.low)
                          , d = a.toRange(u.open)
                          , h = a.toRange(u.close)
                          , m = u.close >= u.open ? "green" : "red";
                        e.strokeStyle = "green" === m ? s.highlightGreenColor : s.highlightRedColor,
                        e.fillStyle = "green" === m ? s.candleGreenBackground : s.highlightRedColor,
                        e.beginPath(),
                        e.rect(f - l, Math.min(d, h), l, Math.abs(h - d)),
                        e.fill();
                        var v = f - l / 2;
                        e.moveTo(v, Math.min(d, h)),
                        e.lineTo(v, b),
                        e.moveTo(v, Math.max(d, h)),
                        e.lineTo(v, y),
                        e.stroke()
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Oc(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    hc(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, dc({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && mc(r.prototype, n),
            i && mc(r, i),
            t
        }(), _c = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(jc));
        function xc(e) {
            return (xc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ec(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function kc(e, t) {
            return !t || "object" !== xc(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Cc(e) {
            return (Cc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Pc(e, t) {
            return (Pc = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Tc = Object(l.c)(wc = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                kc(this, Cc(t).apply(this, arguments))
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Pc(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(qr.e, null, o.createElement(oc, this.props), o.createElement(bc, this.props), o.createElement(Ja, this.props), o.createElement(_c, this.props))
                }
            }]) && Ec(r.prototype, n),
            i && Ec(r, i),
            t
        }()) || wc;
        function zc(e) {
            return (zc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ac() {
            return (Ac = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Rc(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function Ic(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Dc(e, t) {
            return !t || "object" !== zc(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Mc(e) {
            return (Mc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Bc(e, t) {
            return (Bc = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Fc = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Dc(this, (e = Mc(t)).call.apply(e, [this].concat(o)))).arrowWidth = 6,
                r.arrowHeight = 20,
                r.draw = function(e, t, n) {
                    var o = r.props
                      , i = o.priceChartStore
                      , c = i.mouse
                      , l = i.yAxis
                      , u = i.styles
                      , s = o.candlesStore.candles
                      , f = a.a.product;
                    if (e.clearRect(0, 0, t, n),
                    s.length) {
                        var p, b = c.y, y = f.price_precision;
                        if (c.active)
                            p = Number(l.toDomain(b)).toLocaleString("en-US", {
                                minimumFractionDigits: y,
                                maximumFractionDigits: y
                            });
                        else {
                            var d = s[0].close;
                            b = l.toRange(d),
                            p = d.toLocaleString("en-US", {
                                minimumFractionDigits: y,
                                maximumFractionDigits: y
                            })
                        }
                        if (p) {
                            r.setTextStyle(e);
                            var h = f.quote.symbol
                              , m = "".concat(h).concat(p)
                              , v = e.measureText(m).width;
                            e.fillStyle = u.axesLabelBackground,
                            e.beginPath();
                            e.moveTo(8, b - u.axesLabelPadding),
                            e.lineTo(8 + v, b - u.axesLabelPadding),
                            e.lineTo(8 + v, b + u.axesLabelPadding),
                            e.lineTo(8, b + u.axesLabelPadding),
                            e.fill(),
                            r.setTextStyle(e),
                            e.fillText(m, 8, b)
                        }
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Bc(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "setTextStyle",
                value: function(e) {
                    var t = this.props.priceChartStore.styles;
                    e.font = "".concat(t.fontWeight, " ").concat(t.fontSize, "px ").concat(t.fontFamily),
                    e.textAlign = t.yAxisTextAlign,
                    e.textBaseline = t.yAxisTextBaseline,
                    e.fillStyle = t.axesLabelText
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    Rc(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, Ac({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && Ic(r.prototype, n),
            i && Ic(r, i),
            t
        }()
          , Lc = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(Fc));
        function Wc(e) {
            return (Wc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Uc() {
            return (Uc = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Nc(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function qc(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Hc(e, t) {
            return !t || "object" !== Wc(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Gc(e) {
            return (Gc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Yc(e, t) {
            return (Yc = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Kc = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Hc(this, (e = Gc(t)).call.apply(e, [this].concat(o)))).arrowWidth = 6,
                r.arrowHeight = 20,
                r.draw = function(e, t, n) {
                    var o = r.props
                      , i = o.priceChartStore
                      , a = i.mouse
                      , c = i.xAxis
                      , l = i.candleWidth
                      , u = i.styles
                      , s = o.candlesStore
                      , f = s.candles
                      , p = s.end
                      , b = s.bucket
                      , y = s.granularity;
                    if (e.clearRect(0, 0, t, n),
                    f.length && a.active) {
                        var d = a.x
                          , h = c.toDomain(a.x + l)
                          , m = ji()(b(h));
                        if (!m.isAfter(p)) {
                            var v;
                            v = y % Yr.b * 6 == 0 ? "MMM D" : y % Yr.b == 0 ? "ha" : "h:mma",
                            r.setTextStyle(e);
                            var g = "".concat(m.format(v))
                              , O = e.measureText(g).width;
                            e.fillStyle = u.axesLabelBackground,
                            e.beginPath(),
                            e.moveTo(d - O / 2 - u.axesLabelPadding, 0),
                            e.lineTo(d - O / 2 - u.axesLabelPadding, 20),
                            e.lineTo(d + O / 2 + u.axesLabelPadding, 20),
                            e.lineTo(d + O / 2 + u.axesLabelPadding, 0),
                            e.fill(),
                            r.setTextStyle(e),
                            e.fillText(g, d, 7)
                        }
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Yc(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "setTextStyle",
                value: function(e) {
                    var t = this.props.priceChartStore.styles;
                    e.font = "".concat(t.fontWeight, " ").concat(t.fontSize, "px ").concat(t.fontFamily),
                    e.textAlign = t.xAxisTextAlign,
                    e.textBaseline = t.xAxisTextBaseline,
                    e.fillStyle = t.axesLabelText
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    Nc(e, ["priceChartStore", "candlesStore"]));
                    return o.createElement(qr.a, Uc({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && qc(r.prototype, n),
            i && qc(r, i),
            t
        }()
          , Xc = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(Kc));
        function Jc(e) {
            return (Jc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Vc(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Qc(e, t) {
            return !t || "object" !== Jc(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Zc(e) {
            return (Zc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function $c(e, t) {
            return ($c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var el = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Qc(this, (e = Zc(t)).call.apply(e, [this].concat(o)))).mouseDown = !1,
                r.dragging = !1,
                r.offsets = {
                    left: 0,
                    top: 0
                },
                r.onMouseUp = function() {
                    var e = r.props
                      , t = e.priceChartStore
                      , n = t.yAxis
                      , o = t.mouse.y
                      , i = e.orderFormStore
                      , c = a.a.product
                      , l = i.type;
                    if (r.mouseDown = !1,
                    r.dragging)
                        r.dragging = !1;
                    else {
                        var u = Number(n.toDomain(o));
                        if (u = u.toFixed(c.price_precision),
                        "stop" === l)
                            return i.setStopPrice(u);
                        i.setType("limit"),
                        i.setPrice(u)
                    }
                }
                ,
                r.onMouseDown = function(e) {
                    var t = r.props.priceChartStore.mouse
                      , n = r.offsets
                      , o = n.left
                      , i = n.top;
                    r.mouseDown = !0,
                    t.set({
                        x: e.clientX - o,
                        y: e.clientY - i
                    })
                }
                ,
                r.onMouseOver = function(e) {
                    r.offsets = e.target.getBoundingClientRect()
                }
                ,
                r.onMouseMove = function(e) {
                    var t = r.props
                      , n = t.priceChartStore
                      , o = n.mouse
                      , i = n.xAxis
                      , a = n.candleWidth
                      , c = n.setSelected
                      , l = n.scroll
                      , u = t.candlesStore
                      , s = r.offsets
                      , f = s.left
                      , p = s.top;
                    r.mouseDown && (r.dragging = !0);
                    var b = o.x
                      , y = o.y;
                    (o.set({
                        x: e.clientX - f,
                        y: e.clientY - p
                    }),
                    r.dragging) && l(b - o.x, y - o.y);
                    var d = i.toDomain(o.x + a)
                      , h = u.bucket(d);
                    c(u.hash[h])
                }
                ,
                r.onMouseOut = function() {
                    var e = r.props.priceChartStore
                      , t = e.mouse
                      , n = e.setSelected;
                    r.dragging = !1,
                    r.mouseDown = !1,
                    t.set(),
                    n(null)
                }
                ,
                r.onWheel = function(e) {
                    var t = e.deltaX
                      , n = e.deltaY
                      , o = r.props.priceChartStore;
                    e.preventDefault(),
                    o.scroll(t, n)
                }
                ,
                r.onTouchStart = function(e) {
                    e.preventDefault(),
                    r.offsets = e.target.getBoundingClientRect();
                    var t = r.props.priceChartStore
                      , n = e.touches
                      , o = r.offsets
                      , i = o.left
                      , a = o.top
                      , c = n[0]
                      , l = t.mouse
                      , u = c.clientX - i
                      , s = c.clientY - a;
                    l.set({
                        x: u,
                        y: s
                    })
                }
                ,
                r.onTouchMove = function(e) {
                    e.preventDefault();
                    var t = r.props.priceChartStore
                      , n = e.touches
                      , o = r.offsets
                      , i = o.left
                      , a = o.top
                      , c = n[0]
                      , l = t.mouse
                      , u = l.x
                      , s = l.y
                      , f = c.clientX - i
                      , p = c.clientY - a
                      , b = f - u
                      , y = p - s;
                    l.set({
                        x: f,
                        y: p
                    }),
                    t.scroll(b, y)
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && $c(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(qr.b, {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        onMouseOver: this.onMouseOver,
                        onMouseMove: this.onMouseMove,
                        onMouseOut: this.onMouseOut,
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onWheel: this.onWheel,
                        onTouchMove: this.onTouchMove,
                        onTouchStart: this.onTouchStart,
                        style: {
                            cursor: "move"
                        }
                    })
                }
            }]) && Vc(r.prototype, n),
            i && Vc(r, i),
            t
        }()
          , tl = Object(l.b)("candlesStore", "orderFormStore", "priceChartStore")(Object(l.c)(el));
        function rl(e) {
            return (rl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function nl() {
            return (nl = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ol(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function il(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function al(e, t) {
            return !t || "object" !== rl(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function cl(e) {
            return (cl = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ll(e, t) {
            return (ll = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ul = 10
          , sl = 4
          , fl = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = al(this, (e = cl(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props
                      , i = o.candlesStore
                      , c = o.priceChartStore
                      , l = a.a.product
                      , u = i.candles
                      , s = i.loading
                      , f = c.selected
                      , p = c.styles;
                    if (e.clearRect(0, 0, t, n),
                    !s && u && u.length) {
                        e.fillStyle = p.textColor,
                        e.font = "".concat(p.fontSize, "px ").concat(p.fontFamily),
                        e.textBaseline = "center";
                        var b = f || u[0]
                          , y = "O: ".concat(b.open.toLocaleString("en-US", {
                            maximumFractionDigits: l.price_precision
                        }))
                          , d = "C: ".concat(b.close.toLocaleString("en-US", {
                            maximumFractionDigits: l.price_precision
                        }))
                          , h = [y, "H: ".concat(b.high.toLocaleString("en-US", {
                            maximumFractionDigits: l.price_precision
                        })), "L: ".concat(b.low.toLocaleString("en-US", {
                            maximumFractionDigits: l.price_precision
                        })), d, "V: ".concat(b.volume.toLocaleString("en-US", {
                            maximumFractionDigits: 0
                        }))].join("  ")
                          , m = e.measureText(h).width;
                        m > t || e.fillText(h, t - m - ul, ce / 2 + sl)
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ll(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.priceChartStore,
                    e.candlesStore,
                    ol(e, ["priceChartStore", "candlesStore"]))
                      , r = {
                        position: "absolute",
                        top: "-".concat(ce, "px"),
                        bottom: "100%"
                    };
                    return o.createElement(qr.a, nl({}, t, {
                        draw: this.draw,
                        style: r
                    }))
                }
            }]) && il(r.prototype, n),
            i && il(r, i),
            t
        }()
          , pl = Object(l.b)("priceChartStore", "candlesStore")(Object(l.c)(fl));
        function bl(e) {
            return (bl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function yl(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function dl(e, t) {
            return !t || "object" !== bl(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function hl(e) {
            return (hl = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ml(e, t) {
            return (ml = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var vl, gl, Ol, wl, Sl, jl, _l, xl, El, kl, Cl, Pl, Tl, zl, Al, Rl, Il = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = dl(this, (e = hl(t)).call.apply(e, [this].concat(o)))).onSize = function(e, t) {
                    r.props.priceChartStore.setDimensions(e, t)
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ml(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e, t = this.props.candlesStore, r = t.loading, n = t.candles, i = a.a.product.base_currency, c = ["GNT", "DAI", "MKR", "ZIL"].includes(i);
                    return e = r ? o.createElement(Ml, null, o.createElement(Bl, null)) : n && n.length ? this.chartContent : o.createElement(K.c, {
                        center: !0,
                        auto: !0
                    }, c ? o.createElement(Dl, null, "Deposit your ", i, " to ", "Coinbase Pro", " ", "now. ", o.createElement("br", null), "Trading will soon be enabled for this order book.") : o.createElement(Dl, null, "Unable to load chart data")),
                    o.createElement(K.c, {
                        column: !0,
                        auto: !0
                    }, o.createElement(wi, null), e)
                }
            }, {
                key: "chartContent",
                get: function() {
                    var e = this.props
                      , t = e.candlesStore.type
                      , r = e.priceChartStore
                      , n = r.yAxisWidth
                      , i = r.xAxisHeight;
                    return o.createElement(qr.e, {
                        onSize: this.onSize,
                        redraw: !0
                    }, o.createElement(Ai, {
                        bottom: i,
                        right: n
                    }), o.createElement(Ui, {
                        top: -i,
                        right: n
                    }), o.createElement(Vi, {
                        left: -n
                    }), "candle" === t ? o.createElement(Tc, {
                        right: n,
                        bottom: i
                    }) : o.createElement(Wa, {
                        right: n,
                        bottom: i
                    }), o.createElement(pl, {
                        left: 250,
                        right: 32
                    }), o.createElement(aa, null), o.createElement(Lc, {
                        left: -n - 2
                    }), o.createElement(Xc, {
                        top: -i
                    }), o.createElement(tl, null))
                }
            }]) && yl(r.prototype, n),
            i && yl(r, i),
            t
        }(), Dl = Object(Y.c)(K.h).withConfig({
            componentId: "sc-1rcktiy-0"
        })(["margin:0 40px;"]), Ml = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1rcktiy-1"
        })(["position:relative;flex:1;"]), Bl = Object(Y.c)(me.qb).withConfig({
            componentId: "sc-1rcktiy-2"
        })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]), Fl = Object(l.b)("candlesStore", "priceChartStore")(Object(l.c)(Il)), Ll = r(156);
        function Wl(e) {
            return (Wl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ul(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++)
                        r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function Nl(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function ql(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Hl(e) {
            return (Hl = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Gl(e, t) {
            return (Gl = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Yl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Kl(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var Xl = "price-chart-candle-width"
          , Jl = (gl = Kl((vl = function(e) {
            function t(e) {
                var r, n, o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                n = this,
                o = Hl(t).call(this),
                Nl(r = !o || "object" !== Wl(o) && "function" != typeof o ? Yl(n) : o, "candleWidth", gl, Yl(Yl(r))),
                Nl(r, "start", Ol, Yl(Yl(r))),
                Nl(r, "end", wl, Yl(Yl(r))),
                Nl(r, "candles", Sl, Yl(Yl(r))),
                Nl(r, "selected", jl, Yl(Yl(r))),
                Nl(r, "manualScroll", _l, Yl(Yl(r))),
                Nl(r, "yAxisWidth", xl, Yl(Yl(r))),
                r.numCandles = 0,
                r.candleSpacing = 1,
                r.width = 0,
                r.height = 0,
                r.xAxisHeight = 24,
                r.xAxis = new bn,
                r.yAxis = new bn({
                    reformat: !0
                }),
                r.mouse = new Zn,
                r.volumeScale = new Qr,
                r.emas = {
                    12: new Tn(12),
                    26: new Tn(26)
                },
                r.candlesStore = void 0,
                r.disposers = [],
                r.onHide = function() {
                    r.manualScroll = !1
                }
                ,
                Nl(r, "setSelected", El, Yl(Yl(r))),
                Nl(r, "scroll", kl, Yl(Yl(r))),
                Nl(r, "updateTime", Cl, Yl(Yl(r))),
                Nl(r, "disableManualScroll", Pl, Yl(Yl(r))),
                Nl(r, "setCandleWidth", Tl, Yl(Yl(r))),
                Nl(r, "setDimensions", zl, Yl(Yl(r))),
                Nl(r, "adjustAxes", Al, Yl(Yl(r))),
                Nl(r, "resume", Rl, Yl(Yl(r))),
                r.candlesStore = e;
                var i = Gr.h.getItem(Xl);
                return i && r.setCandleWidth(i),
                r
            }
            var r, n, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Gl(e, t)
            }(t, s["c"]),
            r = t,
            (n = [{
                key: "subscribe",
                value: function() {
                    var e = this;
                    this.disposers.push(Object(M.observe)(this.candlesStore.candles, this.adjustAxes)),
                    this.disposers.push(Object(M.observe)(this.candlesStore, "end", this.updateTime)),
                    this.disposers.push(Object(M.observe)(this.candlesStore, "loading", this.disableManualScroll)),
                    this.disposers.push(Object(M.observe)(this.candlesStore, "paging", this.adjustAxes)),
                    this.disposers.push(Object(M.observe)(R.k, "theme", function() {
                        e.adjustAxes
                    })),
                    this.updateTime(),
                    this.adjustAxes()
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    this.disposers.forEach(function(e) {
                        return e()
                    }),
                    this.disposers.length = 0
                }
            }, {
                key: "styles",
                get: function() {
                    var e = R.k.theme
                      , t = e.colors
                      , r = t.text
                      , n = t.base
                      , o = t.label
                      , i = t.primary
                      , a = t.highlight
                      , c = t.chartBuy
                      , l = t.chartSell
                      , u = t.chartAccent
                      , s = t.chartHighlight1
                      , f = t.chartHighlight2;
                    return {
                        fontFamily: e.fonts.family.mono,
                        fontSize: 10,
                        fontWeight: "normal",
                        textColor: o.default,
                        gridColor: Object(Hr.f)(.85, r.default),
                        axisColor: Object(Hr.f)(.85, r.default),
                        axisLineWidth: .5,
                        xAxisTextAlign: "center",
                        xAxisTextBaseline: "top",
                        yAxisTextAlign: "left",
                        yAxisTextBaseline: "middle",
                        yAxisLeftPadding: 6,
                        yAxisRightPadding: 10,
                        axesLabelText: r.default,
                        axesLabelBackground: n.default,
                        axesLabelPadding: 10,
                        crosshairsColor: Object(Hr.f)(.7, r.default),
                        lineVolumeGreenColor: Object(Hr.f)(.4, c.default),
                        lineVolumeRedColor: Object(Hr.f)(.2, l.default),
                        lineWidth: 2,
                        lineColor: i.default,
                        lineGradientColor1: Object(Hr.f)(.3, i.default),
                        lineGradientColor2: "transparent",
                        volumeColor: u.default,
                        candleGreenColor: Object(Hr.f)(.1, c.default),
                        candleGreenBackground: n.default,
                        candleRedColor: Object(Hr.f)(.1, l.default),
                        candleRedBackground: Object(Hr.f)(.1, l.default),
                        emaColor1: s.default,
                        emaColor2: f.default,
                        emaLineWidth: 1,
                        highlightVolumeColor: a.default,
                        highlightGreenColor: Object(Hr.b)(.1, c.default),
                        highlightRedColor: Object(Hr.b)(.1, l.default)
                    }
                }
            }]) && ql(r.prototype, n),
            o && ql(r, o),
            t
        }()).prototype, "candleWidth", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 8
            }
        }),
        Ol = Kl(vl.prototype, "start", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new Date
            }
        }),
        wl = Kl(vl.prototype, "end", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new Date
            }
        }),
        Sl = Kl(vl.prototype, "candles", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        jl = Kl(vl.prototype, "selected", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }),
        _l = Kl(vl.prototype, "manualScroll", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        xl = Kl(vl.prototype, "yAxisWidth", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }),
        El = Kl(vl.prototype, "setSelected", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t) {
                    e.selected = t
                }
            }
        }),
        kl = Kl(vl.prototype, "scroll", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t, r) {
                    var n = e.candlesStore
                      , o = n.granularity
                      , i = n.start
                      , a = n.end
                      , c = !1;
                    if (e.manualScroll = !0,
                    Math.abs(t) > 1) {
                        var l = Math.min(Math.abs(t), 12)
                          , u = t < 0 ? -l : l
                          , s = e.width * (1 / 3) / (e.candleWidth + e.candleSpacing) * o
                          , f = u * o * 1
                          , p = e.start.getTime() + f
                          , b = e.end.getTime() + f;
                        p + s > i.getTime() && b - s < a.getTime() && (e.end = new Date(e.end.getTime() + f),
                        c = !0)
                    }
                    if (Math.abs(r) > 1) {
                        var y = Math.min(Math.abs(r), 6)
                          , d = r < 0 ? -y : y
                          , h = e.candleWidth + .1 * -d;
                        if (h >= 3 && h <= 14 && (e.setCandleWidth(h),
                        c = !0,
                        r < 0)) {
                            var m = e.width * (1 / 3) / (e.candleWidth + e.candleSpacing) * o
                              , v = a.getTime() + m;
                            e.end.getTime() > v && (e.end = new Date(v))
                        }
                    }
                    c && e.adjustAxes()
                }
            }
        }),
        Cl = Kl(vl.prototype, "updateTime", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    var t = e.candlesStore.end;
                    e.manualScroll || (e.end = t)
                }
            }
        }),
        Pl = Kl(vl.prototype, "disableManualScroll", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    e.manualScroll = !1
                }
            }
        }),
        Tl = Kl(vl.prototype, "setCandleWidth", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t) {
                    e.candleWidth = t,
                    Gr.h.setItem(Xl, t)
                }
            }
        }),
        zl = Kl(vl.prototype, "setDimensions", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t, r) {
                    e.width = t,
                    e.height = r,
                    e.adjustAxes()
                }
            }
        }),
        Al = Kl(vl.prototype, "adjustAxes", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    var t = e.candlesStore
                      , r = t.candles
                      , n = t.start
                      , o = t.granularity
                      , i = t.paginationInterval
                      , c = e.height
                      , l = e.width;
                    if (r.length && c && l) {
                        var u = e.candleWidth / 2
                          , s = Math.ceil(l / (e.candleWidth + u));
                        e.start = new Date(e.end - s * o),
                        e.numCandles = s,
                        e.candleSpacing = u,
                        e.start - n < i / 3 && e.candlesStore.loadMoreCandles(),
                        e.xAxis.domain = {
                            min: e.start,
                            max: e.end
                        },
                        e.candles = r.filter(function(t) {
                            return t.date >= e.start && t.date <= e.end
                        }),
                        e.yAxis.domain = {
                            min: Math.min.apply(Math, Ul(e.candles.map(function(e) {
                                return e.low
                            }))),
                            max: Math.max.apply(Math, Ul(e.candles.map(function(e) {
                                return e.high
                            })))
                        },
                        e.volumeScale.domain = {
                            min: 0,
                            max: Math.max.apply(Math, Ul(e.candles.map(function(e) {
                                return e.volume
                            })))
                        };
                        var f = a.a.product
                          , p = e.styles
                          , b = p.fontWeight
                          , y = p.fontSize
                          , d = p.fontFamily
                          , h = p.yAxisLeftPadding
                          , m = p.yAxisRightPadding
                          , v = 0;
                        if (e.yAxis.domain.max) {
                            var g = "".concat(b, " ").concat(y, "px ").concat(d)
                              , O = "".concat(f.quote.symbol).concat(Number(e.yAxis.domain.max).toFixed(f.price_precision))
                              , w = Object(Ll.measureText)(O, g);
                            w && (v = w.width)
                        }
                        e.yAxisWidth = v + h + m;
                        var S = c - e.xAxisHeight
                          , j = l - e.yAxisWidth;
                        e.yAxis.numTicks = Math.floor(S / 60),
                        e.yAxis.range = {
                            min: S,
                            max: 10
                        };
                        e.xAxis.numTicks = Math.floor(j / 60),
                        e.xAxis.range = {
                            min: 0,
                            max: j - e.candleWidth / 2
                        },
                        e.volumeScale.range = {
                            min: S,
                            max: 2 * S / 3
                        },
                        Object.keys(e.emas).forEach(function(t) {
                            e.emas[t].update(r.slice(0).reverse())
                        })
                    }
                }
            }
        }),
        Rl = Kl(vl.prototype, "resume", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    var t = e.candlesStore.end;
                    e.manualScroll = !1,
                    e.end = t,
                    e.adjustAxes()
                }
            }
        }),
        Kl(vl.prototype, "styles", [M.computed], Object.getOwnPropertyDescriptor(vl.prototype, "styles"), vl.prototype),
        vl);
        function Vl(e) {
            return (Vl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ql(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Zl(e, t) {
            return !t || "object" !== Vl(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function $l(e) {
            return ($l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function eu(e, t) {
            return (eu = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var tu = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Zl(this, (e = $l(t)).call.apply(e, [this].concat(o)))).candlesStore = new s.e,
                r.priceChartStore = new Jl(r.candlesStore),
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && eu(e, t)
            }(t, o["PureComponent"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(u.b, {
                        candlesStore: this.candlesStore,
                        priceChartStore: this.priceChartStore
                    }, o.createElement(Fl, null))
                }
            }]) && Ql(r.prototype, n),
            i && Ql(r, i),
            t
        }()
          , ru = Y.c.div.withConfig({
            componentId: "ksjqrh-0"
        })(["position:absolute;top:5px;z-index:1;display:flex;justify-content:center;width:100%;pointer-events:none;"])
          , nu = Y.c.div.attrs({
            role: "button"
        }).withConfig({
            componentId: "ksjqrh-1"
        })(["opacity:0.6;cursor:pointer;user-select:none;pointer-events:all;", ";"], function(e) {
            return e.disabled ? Object(Y.b)(["opacity:0.2;cursor:default;user-select:none;"]) : Object(Y.b)(["&:hover{opacity:1;}"])
        })
          , ou = Object(l.b)("depthStore")(Object(l.c)(function(e) {
            var t = e.depthStore
              , r = t.midprice
              , n = t.zoomIdx
              , i = t.zoomIn
              , c = t.zoomOut;
            return o.createElement(ru, null, o.createElement(nu, {
                type: "out",
                onClick: c,
                disabled: n + 1 >= s.t.length
            }, o.createElement(me.db, null)), o.createElement(K.c, {
                column: !0,
                center: !0
            }, o.createElement(V.v, {
                value: r,
                precision: a.a.product.price_precision + 1,
                fontSize: "large",
                fontWeight: "500"
            }), o.createElement(K.h, {
                fontSize: "small",
                tone: "weak"
            }, "Mid Market Price")), o.createElement(nu, {
                type: "in",
                onClick: i,
                disabled: n <= 0
            }, o.createElement(me.ib, null)))
        }));
        function iu(e, t) {
            return function(r) {
                return t - r / e * t * .9
            }
        }
        function au(e, t, r) {
            for (var n = t - e, o = n / r, i = Math.log(o) / Math.log(10), a = i < 0 ? Math.floor(i) : Math.ceil(i), c = Math.pow(10, a), l = Math.floor(n / c); l < r; )
                a -= 1,
                c = Math.pow(10, a),
                l = Math.floor(n / c);
            var u = Math.floor(l / r) * c;
            return {
                initial: Math.ceil(e / c) * c,
                unitStepWidth: u,
                precision: a < 0 ? -a : 0
            }
        }
        function cu(e, t, r, n, o) {
            e.beginPath(),
            e.moveTo(t, r),
            e.lineTo(t + n, r + o),
            e.stroke()
        }
        function lu(e) {
            return (lu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function uu() {
            return (uu = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function su(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function fu(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function pu(e, t) {
            return !t || "object" !== lu(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function bu(e) {
            return (bu = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function yu(e, t) {
            return (yu = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var du = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = pu(this, (e = bu(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.depthStore
                      , i = o.worstBid
                      , c = o.worstAsk
                      , l = o.styles
                      , u = a.a.product.quote;
                    e.clearRect(0, 0, t, n);
                    var s = c - i;
                    e.lineWidth = 1,
                    e.strokeStyle = l.lineColor,
                    e.fillStyle = l.textColor,
                    e.font = "10px ".concat(l.fontFamily),
                    e.textBaseline = "top",
                    e.textAlign = "center",
                    cu(e, 0, 0, t, 0);
                    for (var f = Math.floor(t / 100), p = au(i, c, f), b = p.initial, y = p.unitStepWidth, d = p.precision, h = b; h < c; h += y) {
                        var m = (h - i) * t / s;
                        cu(e, m, 0, 0, 4);
                        var v = u.symbol + Object(Gr.f)(h.toFixed(d));
                        e.fillText(v, m, 5)
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && yu(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.depthStore,
                    su(e, ["depthStore"]));
                    return o.createElement(qr.a, uu({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && fu(r.prototype, n),
            i && fu(r, i),
            t
        }()
          , hu = Object(l.b)("depthStore")(Object(l.c)(du));
        function mu(e) {
            return (mu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function vu() {
            return (vu = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function gu(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function Ou(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function wu(e, t) {
            return !t || "object" !== mu(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Su(e) {
            return (Su = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ju(e, t) {
            return (ju = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var _u = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = wu(this, (e = Su(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.depthStore
                      , i = o.maxSize
                      , a = o.styles
                      , c = n - 5;
                    e.clearRect(0, 0, t, n),
                    e.lineWidth = 1,
                    e.strokeStyle = a.lineColor,
                    e.fillStyle = a.textColor,
                    e.font = "10px ".concat(a.fontFamily),
                    cu(e, Math.floor(t / 2), 100, 0, c - 100);
                    var l = function(e) {
                        return c - e * c / i
                    }
                      , u = Math.floor(c / 50)
                      , s = au(0, i, u)
                      , f = s.initial
                      , p = s.unitStepWidth
                      , b = (c - 5) * i / c;
                    r.drawYAxis(e, f, p, b, l, t, "left"),
                    r.drawYAxis(e, f, p, b, l, t, "right")
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ju(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "drawYAxis",
                value: function(e, t, r, n, o, i, a) {
                    var c, l = "left" === a ? 0 : i, u = "left" === a ? 1 : -1;
                    e.textBaseline = "middle",
                    e.textAlign = a;
                    for (var s = t; s < n; s += r) {
                        var f = o(s);
                        cu(e, l, f, 6 * u, 0);
                        var p = (c = s) > 1e6 ? "".concat((c / 1e6).toString(), "M") : c > 1e3 ? "".concat((c / 1e3).toString(), "k") : c.toString();
                        e.fillText(p, l + 8 * u, f)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.depthStore,
                    gu(e, ["depthStore"]));
                    return o.createElement(qr.a, vu({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && Ou(r.prototype, n),
            i && Ou(r, i),
            t
        }()
          , xu = Object(l.b)("depthStore")(Object(l.c)(_u));
        function Eu(e) {
            return (Eu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ku(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Cu(e, t) {
            return !t || "object" !== Eu(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Pu(e) {
            return (Pu = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Tu(e, t) {
            return (Tu = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var zu, Au = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Cu(this, (e = Pu(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n, o) {
                    var i = r.props.depthStore.styles;
                    t.clearRect(0, 0, n, o);
                    var a = Math.floor(o / 2)
                      , c = n / 2;
                    t.strokeStyle = "buy" === e.side ? i.bidsStrokeStyle : i.asksStrokeStyle,
                    t.beginPath(),
                    t.moveTo(c - 5, a),
                    t.lineTo(c, a - 5),
                    t.lineTo(c + 5, a),
                    t.lineTo(c, a + 5),
                    t.closePath(),
                    t.stroke(),
                    r.props.ordersStore.selected === e && (t.fillStyle = t.strokeStyle,
                    t.fill())
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Tu(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , r = t.width
                      , n = t.height
                      , i = t.top
                      , a = t.bottom
                      , c = t.ordersStore
                      , l = t.depthStore
                      , u = l.worstBid
                      , s = l.worstAsk
                      , f = c.models.filter(function(e) {
                        var t = e.price || e.stop_price;
                        return e.active && t && t.gte(u) && t.lte(s)
                    });
                    return o.createElement("div", null, f.map(function(t) {
                        var l = function(e) {
                            return Math.floor(r * ((Number(e.price || e.stop_price) - u) / (s - u)))
                        }(t);
                        return o.createElement(qr.a, {
                            key: t.id,
                            onMouseEnter: function() {
                                return c.selectOrder(t)
                            },
                            onMouseLeave: function() {
                                return c.selectOrder(null)
                            },
                            height: n,
                            width: r,
                            top: i,
                            bottom: a,
                            left: l,
                            right: -l - 10,
                            draw: function(r, n, o) {
                                return e.draw(t, r, n, o)
                            }
                        })
                    }))
                }
            }]) && ku(r.prototype, n),
            i && ku(r, i),
            t
        }(), Ru = Object(l.b)("depthStore", "ordersStore")(Object(l.c)(Au));
        function Iu(e) {
            return (Iu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Du(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Mu(e) {
            return (Mu = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Bu(e, t) {
            return (Bu = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Fu(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var Lu = 3;
        var Wu, Uu, Nu, qu, Hu, Gu, Yu = 3, Ku = 4, Xu = 8, Ju = 5, Vu = (Wu = (zu = function(e) {
            function t() {
                var e, r, n, o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var i = arguments.length, c = new Array(i), l = 0; l < i; l++)
                    c[l] = arguments[l];
                return n = this,
                o = (e = Mu(t)).call.apply(e, [this].concat(c)),
                (r = !o || "object" !== Iu(o) && "function" != typeof o ? Fu(n) : o).state = {
                    mouse: null,
                    elementOffsetX: 0,
                    width: 0,
                    height: 0
                },
                r.onMouseMove = function(e) {
                    var t = e.clientX;
                    r.setState(function(e) {
                        return {
                            mouse: {
                                x: t - e.elementOffsetX
                            }
                        }
                    })
                }
                ,
                r.onMouseOver = function(e) {
                    var t = e.target.getBoundingClientRect().left;
                    r.setState({
                        elementOffsetX: t
                    })
                }
                ,
                r.onMouseOut = function() {
                    r.setState({
                        mouse: null
                    })
                }
                ,
                r.onClick = function() {
                    var e = Fu(Fu(r)).mouseData
                      , t = r.props.orderFormStore
                      , n = a.a.product;
                    if (e && n) {
                        var o = e.value
                          , i = e.sum
                          , c = e.amount
                          , l = e.isBid
                          , u = "limit" === t.type;
                        if (t.setSide(u === l ? "buy" : "sell"),
                        "market" !== t.type) {
                            var s = o.toFixed(n.price_precision);
                            "limit" !== t.type ? "stop" === t.type && t.setStopPrice(s) : t.setPrice(s)
                        } else {
                            var f = l ? i.toFixed(n.base_precision) : c.toFixed(n.price_precision);
                            t.setAmount(f)
                        }
                    }
                }
                ,
                r.draw = function(e, t, n) {
                    var o = r.props.depthStore.styles;
                    if (e.clearRect(0, 0, t, n),
                    r.mouseData) {
                        var i = r.mouseData
                          , a = i.x
                          , c = i.y
                          , l = a < t / 2 ? o.bidsStrokeStyle : o.asksStrokeStyle;
                        e.strokeStyle = l,
                        e.fillStyle = l,
                        e.setLineDash([3, 3]),
                        cu(e, a, c, 0, n - c),
                        e.setLineDash([]),
                        e.beginPath(),
                        e.arc(a, c, 4, 0, 2 * Math.PI, !1),
                        e.fill(),
                        e.beginPath(),
                        e.arc(a, c, 6, 0, 2 * Math.PI, !1),
                        e.stroke(),
                        r.renderMouseData(e, t, n)
                    }
                }
                ,
                r.renderMouseData = function(e, t, n) {
                    if (r.mouseData) {
                        var o = a.a.product
                          , i = o.base
                          , c = o.quote
                          , l = r.props.depthStore.styles
                          , u = r.mouseData
                          , s = u.value
                          , f = u.sum
                          , p = u.amount
                          , b = u.x
                          , y = u.y
                          , d = u.isBid
                          , h = 3 * l.fontSize + 3 * Ju + 2 * Xu
                          , m = d ? "Sell" : "Buy"
                          , v = b
                          , g = y;
                        g -= h + 2 * Ju;
                        var O = "fiat" === c.type ? c.symbol : ""
                          , w = "fiat" === i.type ? i.symbol : ""
                          , S = Math.min(o.price_precision, Ku)
                          , j = Math.min(o.base_precision, Ku)
                          , _ = "".concat(O).concat(s.toLocaleString("en-US", {
                            maximumFractionDigits: S
                        }))
                          , x = "".concat(w).concat(f.toLocaleString("en-US", {
                            maximumFractionDigits: j
                        }))
                          , E = "".concat(O).concat(p.toLocaleString("en-US", {
                            maximumFractionDigits: S
                        }));
                        e.textBaseline = "top",
                        e.font = "".concat(l.fontSize, "px ").concat(l.fontFamily);
                        var k = e.measureText(m).width
                          , C = e.measureText("Cost").width
                          , P = Math.max(k, C);
                        e.font = "".concat(l.fontSize, "px ").concat(l.monoFontFamily);
                        var T = Math.max(e.measureText(x).width, e.measureText(E).width) + P + Ju + 2 * Xu + Yu
                          , z = .25 * t
                          , A = !1;
                        (!d && t - b < z || d && b > z) && (A = !0,
                        v -= T),
                        y < n / 2 && (g += h + 4 * Ju),
                        e.fillStyle = l.hoverColor,
                        e.fillRect(v, g, T, h),
                        e.fillStyle = d ? l.bidsStrokeStyle : l.asksStrokeStyle;
                        var R = A ? v + T - Yu : v;
                        e.fillRect(R, g, Yu, h),
                        v += Xu + (A ? 0 : Yu);
                        var I = g += Xu
                          , D = g += 2 * Ju + l.fontSize
                          , M = g += Ju + l.fontSize;
                        e.fillStyle = l.textColor,
                        e.fillText(x, v + Ju + P, D),
                        e.fillText(E, v + Ju + P, M),
                        e.font = "500 ".concat(l.fontSize + 2, "px ").concat(l.monoFontFamily),
                        e.fillStyle = l.titleColor,
                        e.fillText(_, v, I),
                        e.font = "".concat(l.fontSize, "px ").concat(l.fontFamily),
                        e.fillStyle = d ? l.asksStrokeStyle : l.bidsStrokeStyle,
                        e.fillText(m, v, D),
                        e.fillText("Cost", v, M)
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Bu(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "UNSAFE_componentWillReceiveProps",
                value: function(e) {
                    var t = e.width
                      , r = e.height;
                    this.setState({
                        width: t,
                        height: r
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.width
                      , r = void 0 === t ? 0 : t
                      , n = e.height
                      , i = void 0 === n ? 0 : n;
                    return o.createElement(qr.a, {
                        width: r,
                        height: i,
                        top: 0,
                        left: 0,
                        bottom: 20,
                        right: 0,
                        onMouseOver: this.onMouseOver,
                        onMouseMove: this.onMouseMove,
                        onMouseOut: this.onMouseOut,
                        onClick: this.onClick,
                        draw: this.draw,
                        style: {
                            cursor: "pointer"
                        }
                    })
                }
            }, {
                key: "mouseData",
                get: function() {
                    var e = this.state
                      , t = e.mouse
                      , r = e.width
                      , n = e.height
                      , o = this.props.depthStore
                      , i = o.bidsData
                      , a = o.asksData
                      , c = o.worstBid
                      , l = o.worstAsk
                      , u = o.midprice
                      , s = o.maxSize;
                    if (!t)
                        return null;
                    var f = (l - c) * (t.x / r) + c
                      , p = f <= u
                      , b = p ? i : a
                      , y = function(e, t, r) {
                        for (var n = 0, o = e.length / Lu - 1; o - n > 1; ) {
                            var i = Math.floor(n + (o - n) / 2);
                            e[i * Lu] < t === r ? o = i : n = i
                        }
                        return (r ? o : n) * Lu
                    }(b, f, p);
                    if (!y)
                        return null;
                    var d = b[y]
                      , h = b[y + 1]
                      , m = b[y + 2]
                      , v = iu(s, n - 20)(h);
                    return {
                        value: d,
                        sum: h,
                        amount: m,
                        x: t.x,
                        y: v,
                        isBid: p
                    }
                }
            }]) && Du(r.prototype, n),
            i && Du(r, i),
            t
        }()).prototype,
        Uu = "mouseData",
        Nu = [M.computed],
        qu = Object.getOwnPropertyDescriptor(zu.prototype, "mouseData"),
        Hu = zu.prototype,
        Gu = {},
        Object.keys(qu).forEach(function(e) {
            Gu[e] = qu[e]
        }),
        Gu.enumerable = !!Gu.enumerable,
        Gu.configurable = !!Gu.configurable,
        ("value"in Gu || Gu.initializer) && (Gu.writable = !0),
        Gu = Nu.slice().reverse().reduce(function(e, t) {
            return t(Wu, Uu, e) || e
        }, Gu),
        Hu && void 0 !== Gu.initializer && (Gu.value = Gu.initializer ? Gu.initializer.call(Hu) : void 0,
        Gu.initializer = void 0),
        void 0 === Gu.initializer && (Object.defineProperty(Wu, Uu, Gu),
        Gu = null),
        zu), Qu = Object(l.b)("depthStore", "orderFormStore")(Object(l.c)(Vu));
        function Zu(e) {
            return (Zu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function $u() {
            return ($u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function es(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function ts(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function rs(e, t) {
            return !t || "object" !== Zu(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ns(e) {
            return (ns = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function os(e, t) {
            return (os = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var is = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = rs(this, (e = ns(t)).call.apply(e, [this].concat(o)))).draw = function(e, t, n) {
                    var o = r.props.depthStore
                      , i = o.bidsData
                      , a = o.asksData
                      , c = o.styles;
                    e.clearRect(0, 0, t, n),
                    e.lineWidth = 2,
                    e.strokeStyle = c.bidsStrokeStyle,
                    e.fillStyle = c.bidsFillStyle,
                    r.drawData(e, t, n, i, !1),
                    e.strokeStyle = c.asksStrokeStyle,
                    e.fillStyle = c.asksFillStyle,
                    r.drawData(e, t, n, a, !0)
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && os(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "drawData",
                value: function(e, t, r, n, o) {
                    var i = this.props.depthStore
                      , a = i.worstBid
                      , c = i.worstAsk
                      , l = iu(i.maxSize, r)
                      , u = c - a
                      , s = o ? t : 0;
                    e.beginPath(),
                    e.moveTo(Math.floor(t / 2), r);
                    for (var f = r, p = 0; p < n.length; p += 3) {
                        var b = t / u * (n[p] - a)
                          , y = l(n[p + 1]);
                        e.lineTo(b, f),
                        e.lineTo(b, y),
                        f = y
                    }
                    e.stroke(),
                    e.lineTo(s, f),
                    e.lineTo(s, r),
                    e.closePath(),
                    e.fill()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.depthStore,
                    es(e, ["depthStore"]));
                    return o.createElement(qr.a, $u({}, t, {
                        draw: this.draw
                    }))
                }
            }]) && ts(r.prototype, n),
            i && ts(r, i),
            t
        }()
          , as = Object(l.b)("depthStore")(Object(l.c)(is))
          , cs = Object(l.b)("depthStore")(Object(l.c)(function(e) {
            return e.depthStore.loading ? o.createElement(K.c, {
                center: !0,
                auto: !0
            }, o.createElement(me.qb, null)) : o.createElement(qr.e, null, o.createElement(as, {
                bottom: 20
            }), o.createElement(xu, {
                bottom: 15
            }), o.createElement(hu, {
                top: -20
            }), o.createElement(Qu, null), o.createElement(Ru, {
                top: -25,
                bottom: 15
            }), o.createElement(qr.b, {
                top: 5,
                left: 0,
                right: 0
            }, o.createElement(ou, null)))
        }));
        function ls(e) {
            return (ls = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function us(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function ss(e, t) {
            return !t || "object" !== ls(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function fs(e) {
            return (fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ps(e, t) {
            return (ps = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var bs = new s.i
          , ys = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = ss(this, (e = fs(t)).call.apply(e, [this].concat(o)))).disposer = void 0,
                r.setTheme = function() {
                    var e = R.k.theme
                      , t = e.colors
                      , r = t.text
                      , n = t.accent
                      , o = t.label
                      , i = t.chartBuy
                      , a = t.chartSell
                      , c = t.buy
                      , l = t.sell
                      , u = e.fonts.family
                      , s = {
                        fontFamily: u.regular,
                        monoFontFamily: u.mono,
                        fontSize: 11,
                        bidsStrokeStyle: i.default,
                        bidsFillStyle: Object(Hr.f)(.8, i.default),
                        asksStrokeStyle: a.default,
                        asksFillStyle: Object(Hr.f)(.8, a.default),
                        lineColor: Object(Hr.f)(.8, r.default),
                        textColor: o.default,
                        titleColor: r.default,
                        hoverColor: n.default,
                        asksHoverColor: l.default,
                        bidsHoverColor: c.default
                    };
                    bs.setStyles(s)
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ps(e, t)
            }(t, o["PureComponent"]),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.disposer = Object(M.observe)(R.k, "theme", this.setTheme),
                    this.setTheme()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.disposer && this.disposer()
                }
            }, {
                key: "render",
                value: function() {
                    return o.createElement(u.b, {
                        depthStore: bs
                    }, o.createElement(cs, this.props))
                }
            }]) && us(r.prototype, n),
            i && us(r, i),
            t
        }()
          , ds = Object(l.c)(ys);
        function hs(e) {
            return (hs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ms(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function vs(e, t) {
            return !t || "object" !== hs(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function gs(e) {
            return (gs = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Os(e, t) {
            return (Os = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ws = function() {
            return o.createElement(J.c, {
                onSignup: L.u.signup,
                onLogin: L.u.signin,
                signupEvent: "price_chart_cta_mask_signup",
                loginEvent: "price_chart_cta_mask_login",
                showCta: !s.J.user
            }, o.createElement(V.D, {
                showOverflow: !0,
                title: "Price Charts"
            }, o.createElement(K.c, {
                column: !0,
                auto: !0
            }, o.createElement(K.c, {
                flex: "3 1 150px"
            }, o.createElement(tu, null)), o.createElement(K.c, {
                flex: "1 0 100px"
            }, o.createElement(ds, null)))))
        }
          , Ss = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = vs(this, (e = gs(t)).call.apply(e, [this].concat(o)))).state = {
                    tab: "price"
                },
                r.setTab = function(e) {
                    Object(T.d)("".concat(e, "_chart_option_clicked")),
                    r.setState({
                        tab: e
                    })
                }
                ,
                r.setTabPrice = function() {
                    return r.setTab("price")
                }
                ,
                r.setTabDepth = function() {
                    return r.setTab("depth")
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Os(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(J.c, {
                        onSignup: L.u.signup,
                        onLogin: L.u.signin,
                        signupEvent: "price_chart_cta_mask_signup",
                        loginEvent: "price_chart_cta_mask_login",
                        showCta: !s.J.user
                    }, o.createElement(V.D, {
                        showOverflow: !0,
                        title: this.title
                    }, this.tab))
                }
            }, {
                key: "title",
                get: function() {
                    var e = this.state.tab;
                    return o.createElement(K.c, {
                        auto: !0
                    }, o.createElement(K.c, {
                        auto: !0
                    }, "price" === e ? "Price Chart" : "Depth Chart"), o.createElement(K.c, {
                        justify: "center"
                    }, o.createElement(V.E, {
                        onClick: this.setTabPrice,
                        active: "price" === e
                    }, "Price Chart"), o.createElement(V.E, {
                        onClick: this.setTabDepth,
                        active: "depth" === e
                    }, "Depth Chart")))
                }
            }, {
                key: "tab",
                get: function() {
                    return "price" === this.state.tab ? o.createElement(tu, null) : o.createElement(ds, null)
                }
            }]) && ms(r.prototype, n),
            i && ms(r, i),
            t
        }();
        function js() {
            return (js = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function _s(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var xs = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1xmliez-0"
        })(["padding-left:8px;border-left:2px solid ", ";text-transform:capitalize;"], function(e) {
            var t = e.side;
            return e.theme.colors[t].default
        })
          , Es = Object(l.c)(function(e) {
            var t = e.order
              , r = t.side
              , n = t.stop_price
              , o = t.status
              , c = _s(e, ["order"])
              , l = a.a.product;
            if (!l)
                return null;
            var u = r;
            return n && "open" !== o && "done" !== o && (u = "Stop @ ".concat(n.toFixed(l.price_precision))),
            i.a.createElement(xs, {
                side: r
            }, i.a.createElement(K.h, js({
                intent: r,
                mono: !0
            }, c), u))
        });
        function ks() {
            return (ks = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Cs(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var Ps = Object(l.c)(function(e) {
            var t = e.order
              , r = e.precision
              , n = void 0 === r ? 4 : r
              , o = Cs(e, ["order", "precision"])
              , c = a.a.product;
            if (!c)
                throw new A.e("No product");
            var l = t.sizeAndUnit
              , u = l.size
              , s = "base" === l.unit ? c.base : c.quote;
            return i.a.createElement(V.v, ks({
                value: u,
                unit: s.id,
                precision: n,
                approximate: !0
            }, o))
        });
        function Ts() {
            return (Ts = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function zs(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var As = Object(l.c)(function(e) {
            var t = e.order.filled_size
              , r = e.precision
              , n = void 0 === r ? 4 : r
              , o = zs(e, ["order", "precision"]);
            return i.a.createElement(V.v, Ts({
                value: t,
                precision: n,
                approximate: !0
            }, o))
        });
        function Rs() {
            return (Rs = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Is(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var Ds = Object(l.c)(function(e) {
            var t = e.order.displayedPrice
              , r = Is(e, ["order"]);
            if (!t)
                return "MKT";
            var n = a.a.product;
            if (!n)
                throw new A.e("No product");
            return i.a.createElement(V.v, Rs({
                value: t,
                precision: n.price_precision,
                approximate: !0
            }, r))
        });
        function Ms() {
            return (Ms = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Bs(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var Fs = Object(l.c)(function(e) {
            var t = e.order.fill_fees
              , r = e.precision
              , n = void 0 === r ? 4 : r
              , o = Bs(e, ["order", "precision"]);
            return i.a.createElement(V.v, Ms({
                value: t,
                intent: t && t.gt(0) ? "sell" : "text",
                precision: n,
                approximate: !0
            }, o))
        });
        function Ls() {
            return (Ls = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ws(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var Us = Object(Y.c)(K.h).withConfig({
            componentId: "v73ox4-0"
        })(["text-transform:capitalize;"])
          , Ns = Object(l.c)(function(e) {
            var t = e.order.displayedStatus
              , r = Ws(e, ["order"]);
            return i.a.createElement(Us, Ls({
                mono: !0
            }, r), t)
        });
        function qs(e) {
            return (qs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Hs(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Gs(e, t) {
            return !t || "object" !== qs(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ys(e) {
            return (Ys = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ks(e, t) {
            return (Ks = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Xs = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Gs(this, (e = Ys(t)).call.apply(e, [this].concat(o)))).onClick = function() {
                    var e = r.props
                      , t = e.order
                      , n = e.ordersStore;
                    t.active ? n.destroyOrder(t) : t.done && n.removeOrder(t)
                }
                ,
                r
            }
            var r, n, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ks(e, t)
            }(t, i.a.Component),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.order;
                    return e.active || e.done ? i.a.createElement(Js, {
                        center: !0,
                        onClick: this.onClick
                    }, i.a.createElement(K.b, null)) : null
                }
            }]) && Hs(r.prototype, n),
            o && Hs(r, o),
            t
        }()
          , Js = Object(Y.c)(K.c).withConfig({
            componentId: "sc-178hbh9-0"
        })(["", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["&:hover{background:", ";}"], t.colors.alert.default)
        })
          , Vs = Object(l.b)("ordersStore")(Object(l.c)(Xs));
        function Qs(e) {
            return (Qs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Zs(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function $s(e, t) {
            return !t || "object" !== Qs(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ef(e) {
            return (ef = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function tf(e, t) {
            return (tf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var rf = "smaller"
          , nf = "normal"
          , of = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                    o[a] = arguments[a];
                return (r = $s(this, (e = ef(t)).call.apply(e, [this].concat(o)))).renderSide = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(Es, {
                        order: t,
                        fontSize: rf
                    })
                }
                ,
                r.renderSize = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(Ps, {
                        order: t,
                        precision: r.getBasePrecision(t),
                        fontSize: rf,
                        fontWeight: nf
                    })
                }
                ,
                r.renderFilled = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(As, {
                        order: t,
                        precision: r.getBasePrecision(t),
                        fontSize: rf,
                        fontWeight: nf
                    })
                }
                ,
                r.renderPrice = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(Ds, {
                        order: t,
                        fontSize: rf,
                        fontWeight: nf,
                        precision: r.getQuotePrecision(t)
                    })
                }
                ,
                r.renderFees = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(Fs, {
                        order: t,
                        precision: r.getQuotePrecision(t),
                        fontSize: rf,
                        fontWeight: nf
                    })
                }
                ,
                r.renderStatus = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(Ns, {
                        order: t,
                        fontSize: rf
                    })
                }
                ,
                r.renderAction = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(Vs, {
                        order: t
                    })
                }
                ,
                r.getBasePrecision = function(e) {
                    return "LOADING" === e ? 0 : s.D.getProductById(e.product_id).base_precision
                }
                ,
                r.getQuotePrecision = function(e) {
                    return "LOADING" === e ? 0 : s.D.getProductById(e.product_id).price_precision
                }
                ,
                r
            }
            var r, n, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && tf(e, t)
            }(t, i.a.Component),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.props.ordersStore.reset()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.ordersStore
                      , t = a.a.product;
                    return i.a.createElement(V.q, {
                        store: e,
                        noRowsMessage: "No orders to show",
                        headerIntent: "base",
                        backgroundIntent: "base",
                        rowHeight: 25
                    }, i.a.createElement(V.f, {
                        label: "Side",
                        dataKey: "side",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderSide
                    }), i.a.createElement(V.f, {
                        label: "Size",
                        dataKey: "sizeAndUnit",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderSize
                    }), i.a.createElement(V.f, {
                        label: "Filled (".concat(t.base.id, ")"),
                        dataKey: "filled_size",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderFilled
                    }), i.a.createElement(V.f, {
                        label: "Price (".concat(t.quote.id, ")"),
                        dataKey: "displayedPrice",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderPrice
                    }), i.a.createElement(V.f, {
                        label: "Fee (".concat(t.quote.id, ")"),
                        dataKey: "fill_fees",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderFees
                    }), i.a.createElement(V.f, {
                        label: "Status",
                        dataKey: "displayedStatus",
                        width: 120,
                        flexGrow: 1,
                        cellRenderer: this.renderStatus
                    }), i.a.createElement(V.f, {
                        label: "",
                        dataKey: "id",
                        width: 60,
                        cellRenderer: this.renderAction
                    }))
                }
            }]) && Zs(r.prototype, n),
            o && Zs(r, o),
            t
        }()
          , af = Object(l.b)("ordersStore")(Object(l.c)(of));
        function cf() {
            return (cf = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function lf(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var uf = Object(Y.c)(K.c).withConfig({
            componentId: "v4nxy6-0"
        })(["padding-left:8px;border-left:2px solid ", ";text-transform:capitalize;"], function(e) {
            var t = e.side;
            return e.theme.colors[t].default
        })
          , sf = Object(l.c)(function(e) {
            var t = e.fill.side
              , r = lf(e, ["fill"]);
            return i.a.createElement(uf, {
                side: t
            }, i.a.createElement(K.h, cf({
                intent: t,
                mono: !0
            }, r), t))
        });
        function ff() {
            return (ff = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function pf(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var bf = Object(l.c)(function(e) {
            var t = e.fill.size
              , r = e.precision
              , n = void 0 === r ? 4 : r
              , o = pf(e, ["fill", "precision"]);
            return i.a.createElement(V.v, ff({
                value: t,
                precision: n,
                approximate: !0
            }, o))
        });
        function yf() {
            return (yf = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function df(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var hf = Object(l.c)(function(e) {
            var t = e.fill.price
              , r = df(e, ["fill"])
              , n = a.a.product;
            if (!n)
                throw new A.e("No product");
            return i.a.createElement(V.v, yf({
                value: t,
                precision: n.price_precision,
                approximate: !0
            }, r))
        });
        function mf() {
            return (mf = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function vf(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var gf = Object(l.c)(function(e) {
            var t = e.fill.fee
              , r = e.precision
              , n = void 0 === r ? 4 : r
              , o = vf(e, ["fill", "precision"]);
            return i.a.createElement(V.v, mf({
                value: t,
                intent: t && t.gt(0) ? "sell" : "text",
                precision: n,
                approximate: !0
            }, o))
        });
        function Of() {
            return (Of = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function wf(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var Sf = Object(l.c)(function(e) {
            var t = e.fill.created_at
              , r = wf(e, ["fill"]);
            return i.a.createElement(V.H, Of({
                mono: !0,
                moment: t
            }, r))
        });
        function jf(e) {
            return (jf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _f(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function xf(e, t) {
            return !t || "object" !== jf(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ef(e) {
            return (Ef = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function kf(e, t) {
            return (kf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Cf = "smaller"
          , Pf = "normal"
          , Tf = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                    o[a] = arguments[a];
                return (r = xf(this, (e = Ef(t)).call.apply(e, [this].concat(o)))).renderSide = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(sf, {
                        fill: t,
                        fontSize: Cf
                    })
                }
                ,
                r.renderSize = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(bf, {
                        fill: t,
                        precision: r.getBasePrecision(t),
                        fontSize: Cf,
                        fontWeight: Pf
                    })
                }
                ,
                r.renderPrice = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(hf, {
                        fill: t,
                        fontSize: Cf,
                        fontWeight: Pf,
                        precision: r.getQuotePrecision(t)
                    })
                }
                ,
                r.renderFee = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(gf, {
                        fill: t,
                        precision: r.getQuotePrecision(t),
                        fontSize: Cf,
                        fontWeight: Pf
                    })
                }
                ,
                r.renderTime = function(e) {
                    var t = e.rowData;
                    return i.a.createElement(Sf, {
                        fill: t,
                        fontSize: Cf
                    })
                }
                ,
                r.getBasePrecision = function(e) {
                    return "LOADING" === e ? 0 : s.D.getProductById(e.product_id).base_precision
                }
                ,
                r.getQuotePrecision = function(e) {
                    return "LOADING" === e ? 0 : s.D.getProductById(e.product_id).price_precision
                }
                ,
                r
            }
            var r, n, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && kf(e, t)
            }(t, i.a.Component),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.props.fillsStore.fetch()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.fillsStore
                      , t = a.a.product;
                    return i.a.createElement(V.I, null, i.a.createElement(V.q, {
                        store: e,
                        noRowsMessage: "No fills to show",
                        headerIntent: "base",
                        backgroundIntent: "base",
                        rowHeight: 25
                    }, i.a.createElement(V.f, {
                        label: "Side",
                        dataKey: "side",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderSide
                    }), i.a.createElement(V.f, {
                        label: "Size (".concat(t.base.id, ")"),
                        dataKey: "size",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderSize
                    }), i.a.createElement(V.f, {
                        label: "Price (".concat(t.quote.id, ")"),
                        dataKey: "price",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderPrice
                    }), i.a.createElement(V.f, {
                        label: "Fee (".concat(t.quote.id, ")"),
                        dataKey: "fee",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderFee
                    }), i.a.createElement(V.f, {
                        label: "Time",
                        dataKey: "created_at",
                        width: 240,
                        flexGrow: 1,
                        cellRenderer: this.renderTime
                    })))
                }
            }]) && _f(r.prototype, n),
            o && _f(r, o),
            t
        }()
          , zf = Object(l.b)("fillsStore")(Object(l.c)(Tf))
          , Af = r(1453);
        function Rf(e) {
            return (Rf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function If(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Df(e, t) {
            return !t || "object" !== Rf(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Mf(e) {
            return (Mf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Bf(e, t) {
            return (Bf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Ff = 4
          , Lf = "small"
          , Wf = "small"
          , Uf = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                    i[a] = arguments[a];
                return (r = Df(this, (e = Mf(t)).call.apply(e, [this].concat(i)))).renderSide = function(e) {
                    var t = e.rowData;
                    return o.createElement(Af.d, {
                        order: t,
                        precision: Ff,
                        fontSize: Lf,
                        labelFontSize: Wf
                    })
                }
                ,
                r.renderMarket = function(e) {
                    var t = e.rowData;
                    return o.createElement(Af.b, {
                        order: t,
                        precision: Ff,
                        fontSize: Lf,
                        labelFontSize: Wf
                    })
                }
                ,
                r.renderPrice = function(e) {
                    var t = e.rowData;
                    return o.createElement(Af.c, {
                        order: t,
                        precision: Ff,
                        fontSize: Lf,
                        labelFontSize: Wf
                    })
                }
                ,
                r.renderSize = function(e) {
                    var t = e.rowData;
                    return o.createElement(Af.e, {
                        order: t,
                        precision: Ff,
                        fontSize: Lf,
                        labelFontSize: Wf
                    })
                }
                ,
                r.renderAction = function(e) {
                    var t = e.rowData
                      , n = r.props.ordersStore
                      , i = n.destroyOrder
                      , a = n.removeOrder;
                    return o.createElement(Af.a, {
                        order: t,
                        destroyOrder: i,
                        removeOrder: a
                    })
                }
                ,
                r.rowStyle = function(e) {
                    var t = e.index
                      , n = r.props.theme;
                    return -1 === t ? {
                        borderTop: "none",
                        padding: "0 4px"
                    } : {
                        borderTop: "4px solid ".concat(n.colors.base.default),
                        borderRight: "4px solid ".concat(n.colors.base.default),
                        borderLeft: "4px solid ".concat(n.colors.base.default),
                        borderBottom: "none"
                    }
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Bf(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.props.ordersStore.reset()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.ordersStore;
                    return o.createElement(V.q, {
                        store: e,
                        noRowsMessage: "No orders to show",
                        headerIntent: "accent",
                        backgroundIntent: "accent",
                        rowHeight: 60,
                        rowStyle: this.rowStyle
                    }, o.createElement(V.f, {
                        label: "",
                        dataKey: "side",
                        width: 8,
                        flexGrow: 0,
                        flexShrink: 0,
                        cellRenderer: this.renderSide
                    }), o.createElement(V.f, {
                        label: "Market",
                        dataKey: "id",
                        width: 140,
                        flexGrow: 1,
                        cellRenderer: this.renderMarket
                    }), o.createElement(V.f, {
                        label: "Price / Fee",
                        dataKey: "price",
                        width: 140,
                        flexGrow: 1,
                        cellRenderer: this.renderPrice
                    }), o.createElement(V.f, {
                        label: "Size / Filled",
                        dataKey: "size",
                        width: 120,
                        flexGrow: 1,
                        cellRenderer: this.renderSize
                    }), o.createElement(V.f, {
                        label: "",
                        dataKey: "status",
                        width: 50,
                        flexGrow: 0,
                        cellRenderer: this.renderAction
                    }))
                }
            }]) && If(r.prototype, n),
            i && If(r, i),
            t
        }()
          , Nf = Object(l.b)("ordersStore")(Object(l.c)(Object(Y.f)(Uf)));
        function qf(e) {
            return (qf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Hf(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Gf(e, t) {
            return !t || "object" !== qf(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Yf(e) {
            return (Yf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Kf(e, t) {
            return (Kf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Xf = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Gf(this, (e = Yf(t)).call.apply(e, [this].concat(o)))).state = {
                    tab: "orders"
                },
                r.setTab = function(e) {
                    Object(T.d)("my_orders_".concat("orders" === e ? "open" : e, "_clicked")),
                    r.setState({
                        tab: e
                    })
                }
                ,
                r.setTabOrders = function() {
                    return r.setTab("orders")
                }
                ,
                r.setTabFills = function() {
                    return r.setTab("fills")
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Kf(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(J.c, {
                        onSignup: L.u.signup,
                        onLogin: L.u.signin,
                        signupEvent: "orders_fills_cta_mask_signup",
                        loginEvent: "orders_fills_cta_mask_login",
                        showCta: !s.J.user
                    }, o.createElement(V.D, {
                        title: this.title
                    }, this.tab))
                }
            }, {
                key: "title",
                get: function() {
                    var e = this.state.tab
                      , t = this.props.ordersStore;
                    return o.createElement(K.c, {
                        auto: !0,
                        align: "center"
                    }, o.createElement(K.c, {
                        auto: !0
                    }, "orders" === e ? "Open Orders" : "Fills"), "orders" === e && t.hasOpenOrders ? o.createElement(Jf, {
                        compact: !0,
                        onClick: t.cancelOpenOrders
                    }, "CANCEL OPEN ORDERS") : null, o.createElement(K.c, {
                        justify: "center"
                    }, o.createElement(V.E, {
                        onClick: this.setTabOrders,
                        active: "orders" === e
                    }, "Open"), o.createElement(V.E, {
                        onClick: this.setTabFills,
                        active: "fills" === e
                    }, "Fills")))
                }
            }, {
                key: "tab",
                get: function() {
                    var e = this.state.tab;
                    return R.f.isMobile ? "orders" === e ? o.createElement(Nf, null) : o.createElement(zf, null) : "orders" === e ? o.createElement(af, null) : o.createElement(zf, null)
                }
            }]) && Hf(r.prototype, n),
            i && Hf(r, i),
            t
        }()
          , Jf = Object(Y.c)(V.d).withConfig({
            componentId: "sc-11lhoac-0"
        })(["flex:0 0 auto;padding:0 10px;&:not(:last-child){margin-right:20px;}"])
          , Vf = Object(l.b)("ordersStore")(Object(l.c)(Xf))
          , Qf = Object(l.b)("ordersStore")(Object(l.c)(function(e) {
            var t = e.ordersStore
              , r = o.createElement(K.c, {
                auto: !0,
                align: "center"
            }, o.createElement(K.c, {
                auto: !0
            }, "Open Orders"), t.hasOpenOrders && o.createElement(Jf, {
                compact: !0,
                onClick: t.cancelOpenOrders
            }, "CANCEL OPEN ORDERS"));
            return o.createElement(J.c, {
                onSignup: L.u.signup,
                onLogin: L.u.signin,
                signupEvent: "orders_cta_mask_signup",
                loginEvent: "orders_cta_mask_login",
                showCta: !s.J.user
            }, o.createElement(V.D, {
                title: r
            }, R.f.isMobile ? o.createElement(Nf, null) : o.createElement(af, null)))
        }))
          , Zf = function() {
            return o.createElement(J.c, {
                onSignup: L.u.signup,
                onLogin: L.u.signin,
                signupEvent: "fills_cta_mask_signup",
                loginEvent: "fills_cta_mask_login",
                showCta: !s.J.user
            }, o.createElement(V.D, {
                title: "Fills"
            }, o.createElement(zf, null)))
        };
        function $f(e) {
            return ($f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ep() {
            return (ep = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function tp(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function rp(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function np(e, t) {
            return !t || "object" !== $f(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function op(e) {
            return (op = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ip(e, t) {
            return (ip = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ap = {}
          , cp = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = np(this, (e = op(t)).call.apply(e, [this].concat(o)))).ctx = void 0,
                r.arrowDownImg = void 0,
                r.arrowUpImg = void 0,
                r.height = 0,
                r.width = 0,
                r.textYOffset = Math.round(s.k / 2),
                r.draw = function(e, t, n, o, i) {
                    var a = r.props.tradeHistoryStore
                      , c = a.newTrades
                      , l = a.nodes
                      , u = a.clearNewTrades;
                    if (!i)
                        throw new A.b("buffer ctx is required");
                    var f = Object(Ll.getPixelRatio)()
                      , p = Math.round(t * f)
                      , b = Math.round(n * f);
                    r.ctx = e,
                    r.width = t,
                    r.height = n,
                    c && (r.ctx.globalAlpha = 1,
                    e.clearRect(0, 0, t, n),
                    e.imageSmoothingEnabled = !1,
                    r.ctx.drawImage(i.canvas, 0, 0, p, b, 0, c * s.k, r.width, r.height));
                    for (var y = 0, d = l.length; y < d; y++) {
                        var h = l[y];
                        if (!h.render)
                            break;
                        h.y = y * s.k,
                        h.dt >= h.animation_time && (h.dt = h.animation_time,
                        h.render = !1),
                        r.ctx.clearRect(0, s.k * y, r.width, s.k),
                        r.renderBG(h),
                        r.ctx.globalAlpha = h.dt < 100 ? h.dt / 100 : 1,
                        r.setTextStyles(!0),
                        r.renderBar(h),
                        r.renderSize(h),
                        r.renderPrice(h),
                        r.setTextStyles(!1),
                        r.renderTime(h),
                        h.dt += o
                    }
                    i.clearRect(0, 0, i.canvas.width, i.canvas.height),
                    i.imageSmoothingEnabled = !1,
                    i.drawImage(e.canvas, 0, 0, p, b, 0, 0, p, b),
                    u()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ip(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "setTextStyles",
                value: function(e) {
                    var t = this.ctx
                      , r = this.styles;
                    t && (t.font = "".concat(e ? "500" : "normal", " ").concat(r.fontSize, "px ").concat(r.fontFamily),
                    t.textAlign = r.textAlign,
                    t.textBaseline = r.textBaseline)
                }
            }, {
                key: "renderBG",
                value: function(e) {
                    var t = this.styles
                      , r = e.dt
                      , n = e.animation_time
                      , o = e.y
                      , i = e.trade.side;
                    if (!(r >= n)) {
                        var a = r / n
                          , c = "sell" === i ? t.buyBgColor1 : t.sellBgColor1
                          , l = "sell" === i ? t.buyBgColor2 : t.sellBgColor2;
                        a >= .6 && (c = l,
                        l = "rgba(0,0,0,0)"),
                        this.ctx.fillStyle = Object(Hr.c)(a, c, l),
                        this.ctx.fillRect(0, o, this.width, s.k)
                    }
                }
            }, {
                key: "renderBar",
                value: function(e) {
                    var t = this.styles
                      , r = a.a.product.maxBarSize
                      , n = e.trade
                      , o = n.side
                      , i = n.size
                      , c = e.y;
                    this.ctx.fillStyle = "sell" === o ? t.buyBarColor : t.sellBarColor;
                    var l = +t.barColumnX / 100 * this.width * (Math.min(r, +i) / r);
                    this.ctx.fillRect(0, c, Math.max(l, s.b), s.k)
                }
            }, {
                key: "renderSize",
                value: function(e) {
                    var t = this.styles
                      , r = e.trade.size
                      , n = e.y
                      , o = this.width * t.sizeColumnX / 100 - t.sizeColumnPadding
                      , i = [t.sizeColor, t.sizeColor, t.dimColor]
                      , a = Object(Gr.i)(r, {
                        formattedValue: Number(r).toFixed(4)
                    });
                    this._renderMulticolorText(a, i, o, n + this.textYOffset, !0)
                }
            }, {
                key: "renderPrice",
                value: function(e) {
                    var t = this.styles
                      , r = a.a.product
                      , n = e.trade
                      , o = n.side
                      , i = n.price
                      , c = e.y
                      , l = Object(Gr.i)(+i, {
                        formattedValue: F()(i).toFixed(r.price_precision)
                    })
                      , u = [t.sellPriceColor1, t.sellPriceColor2];
                    "sell" === o && (u = [t.buyPriceColor1, t.buyPriceColor2]);
                    var f = this.width * +t.priceColumnX / 100 - +t.priceColumnPadding
                      , p = "buy" === o ? this.arrowDownImg : this.arrowUpImg;
                    p && (this.ctx.drawImage(p, f, Math.round(c + (s.k - 8) / 2), 8, 8),
                    this._renderMulticolorText(l, u, f - 3, c + this.textYOffset, !0))
                }
            }, {
                key: "renderTime",
                value: function(e) {
                    var t = this.styles
                      , r = e.trade.time
                      , n = e.y
                      , o = ji.a.utc(r).local().format("H:mm:ss")
                      , i = this.width - +t.timeColumnPadding;
                    this.ctx.fillStyle = t.timeColor,
                    this.ctx.fillText(o, Math.round(i), Math.round(n + this.textYOffset))
                }
            }, {
                key: "_renderMulticolorText",
                value: function(e, t, r, n, o) {
                    for (var i = 0, a = e.length === t.length ? e : e.slice(0, t.length - 1).concat(e.slice(t.length - 1).join("")), c = this.ctx, l = 0, u = a.length; l < u; l++) {
                        var s = o ? u - l - 1 : l
                          , f = a[s];
                        f && (c.fillStyle = t[s],
                        c.fillText(f, Math.round(r - i), Math.round(n)),
                        i += this._measureText(f))
                    }
                }
            }, {
                key: "_measureText",
                value: function(e) {
                    for (var t = 0, r = 0, n = e.length; r < n; r++) {
                        var o = e[r]
                          , i = ap[o];
                        i || (i = this.ctx.measureText(o).width,
                        ap[o] = i),
                        t += i
                    }
                    return t
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , r = (t.tradeHistoryStore,
                    tp(t, ["tradeHistoryStore"]));
                    return o.createElement(qr.b, null, o.createElement(qr.a, ep({}, r, {
                        fps: R.f.fps,
                        buffer: !0,
                        draw: this.draw
                    })), o.createElement(qr.c, {
                        component: o.createElement(me.e, null),
                        onLoad: function(t) {
                            return e.arrowUpImg = t
                        }
                    }), o.createElement(qr.c, {
                        component: o.createElement(me.d, null),
                        onLoad: function(t) {
                            return e.arrowDownImg = t
                        }
                    }))
                }
            }, {
                key: "styles",
                get: function() {
                    var e = R.k.theme
                      , t = e.colors
                      , r = t.text
                      , n = t.chartBuy
                      , o = t.chartSell;
                    return {
                        fontFamily: e.fonts.family.mono,
                        fontSize: 10,
                        fontWeight: "normal",
                        textAlign: "right",
                        textBaseline: "middle",
                        barColumnX: 5,
                        sizeColumnX: 32,
                        priceColumnX: 66,
                        sizeColumnPadding: 8,
                        priceColumnPadding: 18,
                        timeColumnPadding: 18,
                        sizeColor: Object(Hr.f)(.2, r.default),
                        dimColor: Object(Hr.f)(.8, r.default),
                        timeColor: Object(Hr.f)(.6, r.default),
                        sellBarColor: Object(Hr.f)(.55, o.default),
                        sellPriceColor1: Object(Hr.f)(.4, o.default),
                        sellPriceColor2: Object(Hr.f)(0, o.default),
                        sellBgColor1: Object(Hr.f)(.95, o.default),
                        sellBgColor2: Object(Hr.f)(.8, o.default),
                        buyBarColor: Object(Hr.f)(.55, n.default),
                        buyPriceColor1: Object(Hr.f)(.4, n.default),
                        buyPriceColor2: Object(Hr.f)(0, n.default),
                        buyBgColor1: Object(Hr.f)(.95, n.default),
                        buyBgColor2: Object(Hr.f)(.8, n.default)
                    }
                }
            }]) && rp(r.prototype, n),
            i && rp(r, i),
            t
        }()
          , lp = Object(l.b)("tradeHistoryStore")(Object(l.c)(cp));
        function up(e) {
            return (up = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function sp(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function fp(e, t) {
            return !t || "object" !== up(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function pp(e) {
            return (pp = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function bp(e, t) {
            return (bp = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var yp = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = fp(this, (e = pp(t)).call.apply(e, [this].concat(o)))).disposer = void 0,
                r.onSize = function() {
                    r.props.tradeHistoryStore.renderAll()
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && bp(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.tradeHistoryStore;
                    this.disposer = Object(M.observe)(R.k, "fontsLoaded", function() {
                        e.renderAll()
                    }),
                    this.disposer = Object(M.observe)(R.k, "theme", function() {
                        e.renderAll()
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.disposer && this.disposer()
                }
            }, {
                key: "render",
                value: function() {
                    return o.createElement(dp, null, o.createElement(qr.e, {
                        onSize: this.onSize
                    }, o.createElement(lp, null)))
                }
            }]) && sp(r.prototype, n),
            i && sp(r, i),
            t
        }()
          , dp = Y.c.div.withConfig({
            componentId: "qu7uih-0"
        })(["display:flex;flex:1;min-height:", "px;overflow:hidden;"], s.k * s.m)
          , hp = Object(l.b)("tradeHistoryStore")(Object(l.c)(yp))
          , mp = Object(Y.c)(K.c).withConfig({
            componentId: "avq67t-0"
        })(["flex:1;flex-direction:column;overflow:hidden;"])
          , vp = Object(l.b)("tradeHistoryStore")(Object(l.c)(function(e) {
            var t = e.tradeHistoryStore
              , r = e.contentOnly
              , n = t.loading
              , i = a.a.product;
            if (!i)
                return null;
            var c = o.createElement(mp, null, o.createElement(ae, null, o.createElement(ue, {
                basis: 34,
                padding: 8
            }, "Trade Size"), o.createElement(ue, {
                basis: 34,
                padding: 12
            }, "Price (", i.quote.id, ")"), o.createElement(ue, {
                basis: 32,
                padding: 18
            }, "Time")), n ? o.createElement(K.c, {
                center: !0,
                auto: !0
            }, o.createElement(me.qb, null)) : o.createElement(V.I, null, o.createElement(hp, null)));
            return r ? c : o.createElement(J.c, {
                onSignup: L.u.signup,
                onLogin: L.u.signin,
                signupEvent: "trade_history_cta_mask_signup",
                loginEvent: "trade_history_cta_mask_login",
                showCta: !s.J.user
            }, o.createElement(V.D, {
                title: "Trade History"
            }, c))
        }));
        function gp(e) {
            return (gp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Op(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function wp(e, t) {
            return !t || "object" !== gp(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Sp(e) {
            return (Sp = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function jp(e, t) {
            return (jp = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var _p, xp, Ep, kp, Cp = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = wp(this, (e = Sp(t)).call.apply(e, [this].concat(o)))).tradeHistoryStore = new s.s,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && jp(e, t)
            }(t, o["PureComponent"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props.contentOnly;
                    return o.createElement(u.b, {
                        tradeHistoryStore: this.tradeHistoryStore
                    }, o.createElement(vp, {
                        contentOnly: e
                    }))
                }
            }]) && Op(r.prototype, n),
            i && Op(r, i),
            t
        }();
        function Pp(e) {
            return (Pp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Tp(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function zp(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ap(e) {
            return (Ap = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Rp(e, t) {
            return (Rp = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ip(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Dp(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        function Mp() {
            return (Mp = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Bp(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var Fp = Object(l.c)((Ep = Dp((xp = function(e) {
            function t() {
                var e, r, n, o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
                    a[c] = arguments[c];
                return n = this,
                o = (e = Ap(t)).call.apply(e, [this].concat(a)),
                Tp(r = !o || "object" !== Pp(o) && "function" != typeof o ? Ip(n) : o, "tab", Ep, Ip(Ip(r))),
                Tp(r, "setTab", kp, Ip(Ip(r))),
                r.setTabOrderBook = function() {
                    return r.setTab("orderbook")
                }
                ,
                r.setTabOrderForm = function() {
                    return r.setTab("orderForm")
                }
                ,
                r.setTabCharts = function() {
                    return r.setTab("charts")
                }
                ,
                r.setTabOrders = function() {
                    return r.setTab("orders")
                }
                ,
                r.setTabHistory = function() {
                    return r.setTab("history")
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Rp(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.tab;
                    return o.createElement(K.c, {
                        auto: !0,
                        column: !0
                    }, "orderbook" === e && o.createElement(ci, null), "charts" === e && o.createElement(ws, null), "orders" === e && o.createElement(Qf, null), "history" === e && o.createElement(Cp, null), "orderForm" === e && o.createElement(Nr, null), o.createElement(Wp, null, o.createElement(Lp, {
                        title: "TRADE",
                        active: "orderForm" === e,
                        onClick: this.setTabOrderForm
                    }), o.createElement(Lp, {
                        title: "ORDERS",
                        active: "orders" === e,
                        onClick: this.setTabOrders
                    }), o.createElement(Lp, {
                        title: "CHARTS",
                        active: "charts" === e,
                        onClick: this.setTabCharts
                    }), o.createElement(Lp, {
                        title: "BOOK",
                        active: "orderbook" === e,
                        onClick: this.setTabOrderBook
                    }), o.createElement(Lp, {
                        title: "HISTORY",
                        active: "history" === e,
                        onClick: this.setTabHistory
                    })))
                }
            }]) && zp(r.prototype, n),
            i && zp(r, i),
            t
        }()).prototype, "tab", [M.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return "orderForm"
            }
        }),
        kp = Dp(xp.prototype, "setTab", [M.action], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t) {
                    e.tab = t
                }
            }
        }),
        _p = xp)) || _p
          , Lp = function(e) {
            var t = e.title
              , r = e.active
              , n = Bp(e, ["title", "active"]);
            return o.createElement(Up, Mp({
                active: r
            }, n), t, r && o.createElement(Np, null))
        }
          , Wp = Object(Y.c)(K.c).withConfig({
            componentId: "vk7on8-0"
        })(["flex-shrink:0;height:40px;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["border-top:1px solid ", ";"], t.colors.divider.default)
        })
          , Up = Object(Y.c)(K.c).withConfig({
            componentId: "vk7on8-1"
        })(["position:relative;flex:1 0 auto;justify-content:center;align-items:center;font-weight:bold;cursor:pointer;", ";"], function(e) {
            var t = e.theme
              , r = e.active;
            return Object(Y.b)(["border-left:1px solid ", ";font-size:", ";color:", ";background:", ";&:first-child{border-left:none;}&:hover{color:", ";background:", ";}"], t.colors.divider.default, t.fonts.size.smaller, r ? t.colors.text.default : t.colors.text.weak, t.colors.base.default, t.colors.text.default, t.colors.accent.default)
        })
          , Np = Y.c.span.withConfig({
            componentId: "vk7on8-2"
        })(["position:absolute;right:0;bottom:0;left:0;height:2px;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["background:", ";"], t.colors.primary.default)
        });
        function qp(e) {
            return (qp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Hp(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Gp(e, t) {
            return !t || "object" !== qp(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Yp(e) {
            return (Yp = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Kp(e, t) {
            return (Kp = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Xp = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Gp(this, (e = Yp(t)).call.apply(e, [this].concat(o)))).state = {
                    tab: "orderbook"
                },
                r.setTab = function(e) {
                    r.setState({
                        tab: e
                    })
                }
                ,
                r.setTabOrderBook = function() {
                    return r.setTab("orderbook")
                }
                ,
                r.setTabTradeHistory = function() {
                    return r.setTab("trade-history")
                }
                ,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Kp(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(V.D, {
                        title: this.title
                    }, this.tab)
                }
            }, {
                key: "title",
                get: function() {
                    var e = this.state.tab;
                    return o.createElement(K.c, {
                        auto: !0
                    }, o.createElement(K.c, {
                        auto: !0
                    }, "orderbook" === e ? "Order Book" : "Trade History"), o.createElement(K.c, {
                        justify: "center"
                    }, o.createElement(V.E, {
                        onClick: this.setTabOrderBook,
                        active: "orderbook" === e
                    }, "Order Book"), o.createElement(V.E, {
                        onClick: this.setTabTradeHistory,
                        active: "trade-history" === e
                    }, "Trade History")))
                }
            }, {
                key: "tab",
                get: function() {
                    return "orderbook" === this.state.tab ? o.createElement(ci, {
                        contentOnly: !0
                    }) : o.createElement(Cp, {
                        contentOnly: !0
                    })
                }
            }]) && Hp(r.prototype, n),
            i && Hp(r, i),
            t
        }()
          , Jp = r(1810)
          , Vp = r.n(Jp);
        function Qp(e) {
            return (Qp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Zp(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , l = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function $p(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        Zp(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        Zp(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function eb(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function tb(e, t) {
            return !t || "object" !== Qp(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function rb(e) {
            return (rb = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function nb(e, t) {
            return (nb = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ob, ib = "YYYY-MM-DDTHH:mm:ss.SSSSZ", ab = "whitelisting_modal_skipped_at_in_utc", cb = new F.a(1e4), lb = function(e) {
            function t(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (r = tb(this, rb(t).call(this, e))).visitAddressBook = function() {
                    r.setState({
                        showModal: !1
                    }, function() {
                        r.props.locationStore.push("/profile/address-book"),
                        r.props.addressBookStore.showModal(),
                        Object(T.d)("whitelisting_modal_visit_address_book")
                    })
                }
                ,
                r.dontShowAgainUntilNextMonth = $p(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = r.props.userStore.user,
                                n = ji.a.utc().format(ib),
                                r.setState({
                                    showModal: !1
                                }),
                                e.prev = 3,
                                e.t0 = !!t,
                                !e.t0) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 8,
                                t.add_preference(ab, n);
                            case 8:
                                Object(T.d)("whitelisting_modal_dont_show_again_until_next_month", {
                                    skipped_at_in_utc: n
                                }),
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t1 = e.catch(3),
                                Object(T.d)("whitelisting_modal_dont_show_again_until_next_month_fail", e.t1.message);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[3, 11]])
                })),
                r.shouldShowModal = function() {
                    var e = r.props.addressBookStore.enabled
                      , t = r.props.walletsStore.totalHoldings;
                    return r.state.showModal && !e && t.gt(cb)
                }
                ;
                var n = e.userStore.user
                  , o = n ? n.get_preference(ab) : void 0;
                return r.state = {
                    showModal: void 0 === o || ji.a.utc().diff(ji.a.utc(o), "months") >= 1
                },
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && nb(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return this.shouldShowModal() ? o.createElement(V.y, {
                        maxWidth: 800,
                        onClose: this.dontShowAgainUntilNextMonth,
                        flexible: !0,
                        title: "Improve Your Security",
                        blockOverlayClick: !0
                    }, o.createElement(K.c, {
                        align: this.props.deviceStore.isMobile ? "center" : "normal",
                        column: !0,
                        justify: "space-between"
                    }, o.createElement(sb, {
                        isMobile: this.props.deviceStore.isMobile,
                        align: "center",
                        column: !0
                    }, o.createElement(fb, {
                        isMobile: this.props.deviceStore.isMobile
                    }, "We strongly recommend enabling Whitelisting"), o.createElement(K.h, null, "We noticed you're a high value client. Whitelisting helps secure your funds by limiting cryptocurrency withdrawals to only the addresses you’ve added to your address book."), o.createElement(db, null, o.createElement(hb, {
                        src: Vp.a,
                        role: "presentation"
                    }))), o.createElement(pb, {
                        align: "center",
                        column: !0
                    }, o.createElement(bb, {
                        primary: !0,
                        intent: "primary",
                        onClick: this.visitAddressBook
                    }, "Secure your assets"), o.createElement(yb, {
                        onClick: this.dontShowAgainUntilNextMonth
                    }, "Skip for now")))) : null
                }
            }]) && eb(r.prototype, n),
            i && eb(r, i),
            t
        }(), ub = Object(l.b)("addressBookStore", "locationStore", "userStore", "walletsStore", "deviceStore")(Object(l.c)(lb)), sb = Object(Y.c)(K.c).withConfig({
            componentId: "xitjfe-0"
        })(["padding:", ";"], function(e) {
            return e.isMobile ? "20px 28px 0 28px" : "20px 80px 0 80px"
        }), fb = Y.c.div.withConfig({
            componentId: "xitjfe-1"
        })(["padding:", ";font-size:", ";font-weight:bold;line-height:1.5em;"], function(e) {
            var t = e.theme;
            return e.isMobile ? "20px 0" : t.spacing.padding
        }, function(e) {
            return e.theme.fonts.size.larger
        }), pb = Object(Y.c)(K.c).withConfig({
            componentId: "xitjfe-2"
        })(["z-index:10;width:100%;background-color:", ";"], function(e) {
            return e.theme.colors.disabled.default
        }), bb = Object(Y.c)(V.d).withConfig({
            componentId: "xitjfe-3"
        })(["width:250px;margin:30px 0 0 0;"]), yb = Object(Y.c)(V.d).withConfig({
            componentId: "xitjfe-4"
        })(["width:250px;margin:10px 0 15px 0;border:none;text-decoration:underline;color:", ";background:none;&:hover{border:none;color:", ";background:none;}"], function(e) {
            return e.theme.colors.primary.default
        }, function(e) {
            return e.theme.colors.primary.default
        }), db = Y.c.div.withConfig({
            componentId: "xitjfe-5"
        })(["position:relative;width:100%;height:0;margin:40px 0 -14% 0;padding-bottom:62.5%;"]), hb = Y.c.img.withConfig({
            componentId: "xitjfe-6"
        })(["position:absolute;top:0;left:0;width:100%;height:100%;"]);
        function mb(e) {
            return (mb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function vb(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function gb(e, t) {
            return !t || "object" !== mb(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ob(e) {
            return (Ob = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function wb(e, t) {
            return (wb = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Sb, jb = Object(l.c)(ob = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                gb(this, Ob(t).apply(this, arguments))
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && wb(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "render",
                value: function() {
                    return o.createElement(_b, null, o.createElement(re, null), o.createElement(xb, {
                        layouts: this.layouts,
                        fallbacks: this.fallbacks
                    }, o.createElement(Fp, {
                        key: "mobile"
                    }), o.createElement(Nr, {
                        key: "sidebar"
                    }), o.createElement(ci, {
                        key: "order-book"
                    }), o.createElement(Xp, {
                        key: "order-book-tabbed"
                    }), o.createElement(ws, {
                        key: "chart"
                    }), o.createElement(Ss, {
                        key: "chart-tabbed"
                    }), o.createElement(Vf, {
                        key: "trading"
                    }), o.createElement(Qf, {
                        key: "orders"
                    }), o.createElement(Zf, {
                        key: "fills"
                    }), o.createElement(Cp, {
                        key: "trade-history"
                    })), o.createElement(ub, null))
                }
            }, {
                key: "layouts",
                get: function() {
                    var e = "".concat(Number(this.props.theme.spacing.subSidebarWidth) - 1, "px");
                    return [{
                        width: 0,
                        height: 0,
                        columns: "1fr",
                        rows: "1fr",
                        areas: ["mobile"]
                    }, {
                        width: R.c,
                        height: 0,
                        columns: "".concat(e, " 1fr 1fr"),
                        rows: "1fr 1fr ".concat("220px"),
                        areas: ["sidebar chart-tabbed chart-tabbed", "sidebar order-book trade-history", "sidebar trading trading"]
                    }, {
                        width: R.b,
                        height: 0,
                        columns: "".concat(e, " ").concat("300px", " 1fr"),
                        rows: "1fr ".concat("220px"),
                        areas: ["sidebar order-book-tabbed chart", "sidebar trading trading"]
                    }, {
                        width: R.a,
                        height: 0,
                        columns: "".concat(e, " ").concat("300px", " 1fr ").concat("285px"),
                        rows: "1fr 1fr ".concat("280px"),
                        areas: ["sidebar order-book chart-tabbed trade-history", "sidebar order-book chart-tabbed trade-history", "sidebar order-book trading trade-history"]
                    }, {
                        width: R.a,
                        height: 900,
                        columns: "".concat(e, " ").concat("300px", " 1fr ").concat("285px"),
                        rows: "1fr 1fr ".concat("280px"),
                        areas: ["sidebar order-book chart trade-history", "sidebar order-book chart trade-history", "sidebar order-book trading trade-history"]
                    }, {
                        width: R.a,
                        height: 1200,
                        columns: "".concat(e, " ").concat("300px", " 1fr ").concat("285px"),
                        rows: "1fr 1fr ".concat("1fr"),
                        areas: ["sidebar order-book chart trade-history", "sidebar order-book chart trade-history", "sidebar order-book trading trade-history"]
                    }, {
                        width: R.e,
                        height: 0,
                        columns: "".concat(e, " ").concat("313px", " 4fr 3fr ").concat("285px"),
                        rows: "1fr 1fr ".concat("280px"),
                        areas: ["sidebar order-book chart-tabbed chart-tabbed trade-history", "sidebar order-book chart-tabbed chart-tabbed trade-history", "sidebar order-book orders fills trade-history"]
                    }, {
                        width: R.e,
                        height: 900,
                        columns: "".concat(e, " ").concat("313px", " 4fr 3fr ").concat("285px"),
                        rows: "1fr 1fr ".concat("280px"),
                        areas: ["sidebar order-book chart chart trade-history", "sidebar order-book chart chart trade-history", "sidebar order-book orders fills trade-history"]
                    }, {
                        width: R.e,
                        height: 1440,
                        columns: "".concat(e, " ").concat("313px", " 4fr 3fr ").concat("285px"),
                        rows: "1fr 1fr ".concat("1fr"),
                        areas: ["sidebar order-book chart chart trade-history", "sidebar order-book chart chart trade-history", "sidebar order-book orders fills trade-history"]
                    }]
                }
            }, {
                key: "fallbacks",
                get: function() {
                    return [{
                        width: 0,
                        height: 0,
                        layout: o.createElement(Fp, null)
                    }, {
                        width: 600,
                        height: 0,
                        layout: o.createElement(K.c, {
                            auto: !0
                        }, o.createElement(Nr, null), o.createElement(ci, null), o.createElement(K.c, {
                            column: !0,
                            auto: !0
                        }, o.createElement(ws, null), o.createElement(Vf, null)), o.createElement(Cp, null))
                    }]
                }
            }]) && vb(r.prototype, n),
            i && vb(r, i),
            t
        }()) || ob, _b = Object(Y.c)(K.c).withConfig({
            componentId: "sc-1gmrtyi-0"
        })(["flex:1;flex-direction:column;overflow:hidden;"]), xb = Object(Y.c)(X.a).withConfig({
            componentId: "sc-1gmrtyi-1"
        })(["grid-gap:1px;", ";"], function(e) {
            var t = e.theme;
            return Object(Y.b)(["background:", ";"], t.colors.divider.default)
        }), Eb = Object(Y.f)(jb), kb = r(1811), Cb = r.n(kb), Pb = r(1812), Tb = r.n(Pb);
        function zb(e) {
            return (zb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ab(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Rb(e, t) {
            return !t || "object" !== zb(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ib(e) {
            return (Ib = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Db(e, t) {
            return (Db = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Mb = Object(l.c)(Sb = function(e) {
            function t() {
                var e, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (r = Rb(this, (e = Ib(t)).call.apply(e, [this].concat(o)))).head = void 0,
                r.favicon = void 0,
                r.originalFavicon = void 0,
                r.positiveChange = void 0,
                r.originalTitle = document.title,
                r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Db(e, t)
            }(t, o["Component"]),
            r = t,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    var e = document.head;
                    e && (this.head = e,
                    this.favicon = e.querySelector('link[rel="shortcut icon"]'),
                    this.favicon && (this.originalFavicon = this.favicon && this.favicon.href)),
                    this.originalTitle = document.title
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (document.title = this.originalTitle,
                    this.favicon && this.originalFavicon) {
                        var e = document.createElement("link");
                        e.type = "image/x-icon",
                        e.rel = "shortcut icon",
                        e.href = this.originalFavicon,
                        this.head.removeChild(this.favicon),
                        this.head.appendChild(e)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = a.a.product
                      , r = R.f.isMobile;
                    if (!t)
                        return null;
                    var n = (s.C.stats.get(t.id) || {}).last;
                    if (!n)
                        return null;
                    if (document.title = "".concat(t.quote.symbol).concat(n.toFixed(t.price_precision), " · ").concat(t.base.id, " to ").concat(t.quote.id, " ").concat(this.originalTitle),
                    r)
                        return null;
                    var o = s.C.priceChange(t.id);
                    if (!o)
                        return null;
                    var i = o.gt(0);
                    if (this.positiveChange === i)
                        return null;
                    var c = document.createElement("link");
                    return c.type = "image/x-icon",
                    c.href = o.gt(0) ? Cb.a : Tb.a,
                    c.rel = "shortcut icon",
                    this.head && this.favicon ? (this.head.removeChild(this.favicon),
                    this.favicon = c,
                    this.head.querySelectorAll('link[rel="icon"]').forEach(function(t) {
                        return e.head.removeChild(t)
                    }),
                    this.head.appendChild(this.favicon),
                    this.positiveChange = i,
                    null) : null
                }
            }]) && Ab(r.prototype, n),
            i && Ab(r, i),
            t
        }()) || Sb;
        function Bb(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , l = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function Fb(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        Bb(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        Bb(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        t.default = Fb(regeneratorRuntime.mark(function e() {
            var t, r, n, i;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return Object(z.c)({
                            category: "General",
                            action: "Trade page view"
                        }),
                        Object(T.d)("trade_page_viewed"),
                        e.next = 4,
                        Promise.all([s.z.loader, s.v.loader]);
                    case 4:
                        if (!s.J.user) {
                            e.next = 11;
                            break
                        }
                        if (t = s.E.getDefaultProfile()) {
                            e.next = 8;
                            break
                        }
                        throw new A.e("No default profile");
                    case 8:
                        return a.a.setProfile(t),
                        e.next = 11,
                        Promise.all([D.a.loader.catch(function(e) {
                            return Object(z.b)(e)
                        }), I.a.loader]);
                    case 11:
                        return r = new s.j,
                        n = new s.p({
                            sort: "smart"
                        }),
                        i = new G({
                            ordersStore: n
                        }),
                        e.abrupt("return", o.createElement(u.b, {
                            accountBalanceStore: c.a,
                            accountsStore: s.u,
                            addressBookStore: D.a,
                            appStore: a.a,
                            currencyConverterStore: s.w,
                            deviceStore: R.f,
                            feesStore: s.z,
                            fillsStore: r,
                            locationStore: R.h,
                            orderFormStore: i,
                            ordersStore: n,
                            productsStatsStore: s.C,
                            profilesStore: s.E,
                            userStore: s.J,
                            walletsStore: I.a
                        }, o.createElement(T.b, {
                            name: "trade"
                        }, o.createElement(Mb, null), o.createElement(P, {
                            path: "/trade",
                            component: Eb
                        }))));
                    case 15:
                    case "end":
                        return e.stop()
                    }
            }, e, this)
        }))
    }
}]);
