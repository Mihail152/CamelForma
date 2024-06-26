(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", m = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, p, m ], C = function(n, t, e, i) {
                    n && "function" == typeof n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, p), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, m), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, pn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, mn = function(n) {
                    return function(n) {
                        return k(n) === m;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || pn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = pn(n), bn(e).filter(mn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        pn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        pn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }));
                }));
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    closeEsc: true,
                    hashSettings: {
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        /*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
        !function(a, b) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
                if (!a.document) throw new Error("jQuery requires a window with a document");
                return b(a);
            } : b(a);
        }("undefined" != typeof window ? window : void 0, (function(a, b) {
            var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function(a, b) {
                return new m.fn.init(a, b);
            }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
                return b.toUpperCase();
            };
            m.fn = m.prototype = {
                jquery: l,
                constructor: m,
                selector: "",
                length: 0,
                toArray: function() {
                    return d.call(this);
                },
                get: function(a) {
                    return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
                },
                pushStack: function(a) {
                    var b = m.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b;
                },
                each: function(a, b) {
                    return m.each(this, a, b);
                },
                map: function(a) {
                    return this.pushStack(m.map(this, (function(b, c) {
                        return a.call(b, c, b);
                    })));
                },
                slice: function() {
                    return this.pushStack(d.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                eq: function(a) {
                    var b = this.length, c = +a + (0 > a ? b : 0);
                    return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor(null);
                },
                push: f,
                sort: c.sort,
                splice: c.splice
            }, m.extend = m.fn.extend = function() {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), 
                h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], 
                c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, 
                f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
                return g;
            }, m.extend({
                expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(a) {
                    throw new Error(a);
                },
                noop: function() {},
                isFunction: function(a) {
                    return "function" === m.type(a);
                },
                isArray: Array.isArray || function(a) {
                    return "array" === m.type(a);
                },
                isWindow: function(a) {
                    return null != a && a == a.window;
                },
                isNumeric: function(a) {
                    return !m.isArray(a) && a - parseFloat(a) >= 0;
                },
                isEmptyObject: function(a) {
                    var b;
                    for (b in a) return !1;
                    return !0;
                },
                isPlainObject: function(a) {
                    var b;
                    if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                    } catch (c) {
                        return !1;
                    }
                    if (k.ownLast) for (b in a) return j.call(a, b);
                    for (b in a) ;
                    return void 0 === b || j.call(a, b);
                },
                type: function(a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
                },
                globalEval: function(b) {
                    b && m.trim(b) && (a.execScript || function(b) {
                        a.eval.call(a, b);
                    })(b);
                },
                camelCase: function(a) {
                    return a.replace(o, "ms-").replace(p, q);
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
                },
                each: function(a, b, c) {
                    var d, e = 0, f = a.length, g = r(a);
                    if (c) {
                        if (g) {
                            for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                        } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
                    } else if (g) {
                        for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
                    } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
                    return a;
                },
                trim: function(a) {
                    return null == a ? "" : (a + "").replace(n, "");
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
                    c;
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (g) return g.call(b, a, c);
                        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
                    }
                    return -1;
                },
                merge: function(a, b) {
                    var c = +b.length, d = 0, e = a.length;
                    while (c > d) a[e++] = b[d++];
                    if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
                    return a.length = e, a;
                },
                grep: function(a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                    return e;
                },
                map: function(a, b, c) {
                    var d, f = 0, g = a.length, h = r(a), i = [];
                    if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
                    null != d && i.push(d);
                    return e.apply([], i);
                },
                guid: 1,
                proxy: function(a, b) {
                    var c, e, f;
                    return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), 
                    e = function() {
                        return a.apply(b || this, c.concat(d.call(arguments)));
                    }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
                },
                now: function() {
                    return +new Date;
                },
                support: k
            }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(a, b) {
                h["[object " + b + "]"] = b.toLowerCase();
            }));
            function r(a) {
                var b = a.length, c = m.type(a);
                return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
            }
            var s = function(a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
                    return a === b && (l = !0), 0;
                }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
                    return -1;
                }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
                    ID: new RegExp("^#(" + N + ")"),
                    CLASS: new RegExp("^\\.(" + N + ")"),
                    TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + Q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + L + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
                };
                try {
                    I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
                } catch (eb) {
                    I = {
                        apply: F.length ? function(a, b) {
                            H.apply(a, J.call(b));
                        } : function(a, b) {
                            var c = a.length, d = 0;
                            while (a[c++] = b[d++]) ;
                            a.length = c - 1;
                        }
                    };
                }
                function fb(a, b, d, e) {
                    var f, h, j, k, l, o, r, s, w, x;
                    if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
                    if (1 !== (k = b.nodeType) && 9 !== k) return [];
                    if (p && !e) {
                        if (f = _.exec(a)) if (j = f[1]) {
                            if (9 === k) {
                                if (h = b.getElementById(j), !h || !h.parentNode) return d;
                                if (h.id === j) return d.push(h), d;
                            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                            d;
                        } else {
                            if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), 
                            d;
                        }
                        if (c.qsa && (!q || !q.test(a))) {
                            if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                                o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), 
                                s = "[id='" + s + "'] ", l = o.length;
                                while (l--) o[l] = s + qb(o[l]);
                                w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",");
                            }
                            if (x) try {
                                return I.apply(d, w.querySelectorAll(x)), d;
                            } catch (y) {} finally {
                                r || b.removeAttribute("id");
                            }
                        }
                    }
                    return i(a.replace(R, "$1"), b, d, e);
                }
                function gb() {
                    var a = [];
                    function b(c, e) {
                        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
                    }
                    return b;
                }
                function hb(a) {
                    return a[u] = !0, a;
                }
                function ib(a) {
                    var b = n.createElement("div");
                    try {
                        return !!a(b);
                    } catch (c) {
                        return !1;
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null;
                    }
                }
                function jb(a, b) {
                    var c = a.split("|"), e = a.length;
                    while (e--) d.attrHandle[c[e]] = b;
                }
                function kb(a, b) {
                    var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
                    if (d) return d;
                    if (c) while (c = c.nextSibling) if (c === b) return -1;
                    return a ? 1 : -1;
                }
                function lb(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a;
                    };
                }
                function mb(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a;
                    };
                }
                function nb(a) {
                    return hb((function(b) {
                        return b = +b, hb((function(c, d) {
                            var e, f = a([], c.length, b), g = f.length;
                            while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                        }));
                    }));
                }
                function ob(a) {
                    return a && typeof a.getElementsByTagName !== C && a;
                }
                c = fb.support = {}, f = fb.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1;
                }, m = fb.setDocument = function(a) {
                    var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
                    return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, 
                    p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", (function() {
                        m();
                    }), !1) : g.attachEvent && g.attachEvent("onunload", (function() {
                        m();
                    }))), c.attributes = ib((function(a) {
                        return a.className = "i", !a.getAttribute("className");
                    })), c.getElementsByTagName = ib((function(a) {
                        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
                    })), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib((function(a) {
                        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                        2 === a.getElementsByClassName("i").length;
                    })), c.getById = ib((function(a) {
                        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
                    })), c.getById ? (d.find.ID = function(a, b) {
                        if (typeof b.getElementById !== C && p) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [ c ] : [];
                        }
                    }, d.filter.ID = function(a) {
                        var b = a.replace(cb, db);
                        return function(a) {
                            return a.getAttribute("id") === b;
                        };
                    }) : (delete d.find.ID, d.filter.ID = function(a) {
                        var b = a.replace(cb, db);
                        return function(a) {
                            var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                            return c && c.value === b;
                        };
                    }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
                    } : function(a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++]) 1 === c.nodeType && d.push(c);
                            return d;
                        }
                        return f;
                    }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                        return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0;
                    }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib((function(a) {
                        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), 
                        a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), 
                        a.querySelectorAll(":checked").length || q.push(":checked");
                    })), ib((function(a) {
                        var b = e.createElement("input");
                        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), 
                        a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                        q.push(",.*:");
                    }))), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib((function(a) {
                        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q);
                    })), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
                    b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                    } : function(a, b) {
                        if (b) while (b = b.parentNode) if (b === a) return !0;
                        return !1;
                    }, B = b ? function(a, b) {
                        if (a === b) return l = !0, 0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                        1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
                    } : function(a, b) {
                        if (a === b) return l = !0, 0;
                        var c, d = 0, f = a.parentNode, g = b.parentNode, h = [ a ], i = [ b ];
                        if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                        if (f === g) return kb(a, b);
                        c = a;
                        while (c = c.parentNode) h.unshift(c);
                        c = b;
                        while (c = c.parentNode) i.unshift(c);
                        while (h[d] === i[d]) d++;
                        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
                    }, e) : n;
                }, fb.matches = function(a, b) {
                    return fb(a, null, null, b);
                }, fb.matchesSelector = function(a, b) {
                    if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
                    } catch (e) {}
                    return fb(b, n, null, [ a ]).length > 0;
                }, fb.contains = function(a, b) {
                    return (a.ownerDocument || a) !== n && m(a), t(a, b);
                }, fb.attr = function(a, b) {
                    (a.ownerDocument || a) !== n && m(a);
                    var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                    return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
                }, fb.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a);
                }, fb.uniqueSort = function(a) {
                    var b, d = [], e = 0, f = 0;
                    if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                        while (b = a[f++]) b === a[f] && (e = d.push(f));
                        while (e--) a.splice(d[e], 1);
                    }
                    return k = null, a;
                }, e = fb.getText = function(a) {
                    var b, c = "", d = 0, f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                        } else if (3 === f || 4 === f) return a.nodeValue;
                    } else while (b = a[d++]) c += e(b);
                    return c;
                }, d = fb.selectors = {
                    cacheLength: 50,
                    createPseudo: hb,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), 
                            "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), 
                            a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), 
                            a;
                        },
                        PSEUDO: function(a) {
                            var b, c = !a[6] && a[2];
                            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                            a[2] = c.slice(0, b)), a.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(cb, db).toLowerCase();
                            return "*" === a ? function() {
                                return !0;
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b;
                            };
                        },
                        CLASS: function(a) {
                            var b = y[a + " "];
                            return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, (function(a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(a, b, c) {
                            return function(d) {
                                var e = fb.attr(d, a);
                                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                            };
                        },
                        CHILD: function(a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                            return 1 === d && 0 === e ? function(a) {
                                return !!a.parentNode;
                            } : function(b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            l = b;
                                            while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                        k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                        l = n && q.childNodes[n];
                                        while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [ w, n, m ];
                                            break;
                                        }
                                    } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                                    l === b)) break;
                                    return m -= e, m === d || m % d === 0 && m / d >= 0;
                                }
                            };
                        },
                        PSEUDO: function(a, b) {
                            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                            return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb((function(a, c) {
                                var d, f = e(a, b), g = f.length;
                                while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
                            })) : function(a) {
                                return e(a, 0, c);
                            }) : e;
                        }
                    },
                    pseudos: {
                        not: hb((function(a) {
                            var b = [], c = [], d = h(a.replace(R, "$1"));
                            return d[u] ? hb((function(a, b, c, e) {
                                var f, g = d(a, null, e, []), h = a.length;
                                while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                            })) : function(a, e, f) {
                                return b[0] = a, d(b, null, f, c), !c.pop();
                            };
                        })),
                        has: hb((function(a) {
                            return function(b) {
                                return fb(a, b).length > 0;
                            };
                        })),
                        contains: hb((function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                            };
                        })),
                        lang: hb((function(a) {
                            return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), 
                            function(b) {
                                var c;
                                do {
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                                    c === a || 0 === c.indexOf(a + "-");
                                } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            };
                        })),
                        target: function(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id;
                        },
                        root: function(a) {
                            return a === o;
                        },
                        focus: function(a) {
                            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                        },
                        enabled: function(a) {
                            return a.disabled === !1;
                        },
                        disabled: function(a) {
                            return a.disabled === !0;
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected;
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(a) {
                            return !d.pseudos.empty(a);
                        },
                        header: function(a) {
                            return Z.test(a.nodeName);
                        },
                        input: function(a) {
                            return Y.test(a.nodeName);
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b;
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                        },
                        first: nb((function() {
                            return [ 0 ];
                        })),
                        last: nb((function(a, b) {
                            return [ b - 1 ];
                        })),
                        eq: nb((function(a, b, c) {
                            return [ 0 > c ? c + b : c ];
                        })),
                        even: nb((function(a, b) {
                            for (var c = 0; b > c; c += 2) a.push(c);
                            return a;
                        })),
                        odd: nb((function(a, b) {
                            for (var c = 1; b > c; c += 2) a.push(c);
                            return a;
                        })),
                        lt: nb((function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                            return a;
                        })),
                        gt: nb((function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                            return a;
                        }))
                    }
                }, d.pseudos.nth = d.pseudos.eq;
                for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = lb(b);
                for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = mb(b);
                function pb() {}
                pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
                    var c, e, f, g, h, i, j, k = z[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    h = a, i = [], j = d.preFilter;
                    while (h) {
                        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                        c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                            value: c,
                            type: e[0].replace(R, " ")
                        }), h = h.slice(c.length));
                        for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                        f.push({
                            value: c,
                            type: g,
                            matches: e
                        }), h = h.slice(c.length));
                        if (!c) break;
                    }
                    return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
                };
                function qb(a) {
                    for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                    return d;
                }
                function rb(a, b, c) {
                    var d = b.dir, e = c && "parentNode" === d, f = x++;
                    return b.first ? function(b, c, f) {
                        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
                    } : function(b, c, g) {
                        var h, i, j = [ w, f ];
                        if (g) {
                            while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                        } else while (b = b[d]) if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0;
                        }
                    };
                }
                function sb(a) {
                    return a.length > 1 ? function(b, c, d) {
                        var e = a.length;
                        while (e--) if (!a[e](b, c, d)) return !1;
                        return !0;
                    } : a[0];
                }
                function tb(a, b, c) {
                    for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
                    return c;
                }
                function ub(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
                    j && b.push(h));
                    return g;
                }
                function vb(a, b, c, d, e, f) {
                    return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb((function(f, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                        if (c && c(q, r, h, i), d) {
                            j = ub(r, n), d(j, [], h, i), k = j.length;
                            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                        }
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    j = [], k = r.length;
                                    while (k--) (l = r[k]) && j.push(q[k] = l);
                                    e(null, r = [], j, i);
                                }
                                k = r.length;
                                while (k--) (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                            }
                        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
                    }));
                }
                function wb(a) {
                    for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb((function(a) {
                        return a === b;
                    }), h, !0), l = rb((function(a) {
                        return K.call(b, a) > -1;
                    }), h, !0), m = [ function(a, c, d) {
                        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ rb(sb(m), c) ]; else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                            return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
                        }
                        m.push(c);
                    }
                    return sb(m);
                }
                function xb(a, b) {
                    var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                        var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                            if (e && l) {
                                m = 0;
                                while (o = a[m++]) if (o(l, g, h)) {
                                    i.push(l);
                                    break;
                                }
                                k && (w = v);
                            }
                            c && ((l = !o && l) && p--, f && r.push(l));
                        }
                        if (p += q, c && q !== p) {
                            m = 0;
                            while (o = b[m++]) o(r, s, g, h);
                            if (f) {
                                if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i));
                                s = ub(s);
                            }
                            I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
                        }
                        return k && (w = v, j = t), r;
                    };
                    return c ? hb(f) : f;
                }
                return h = fb.compile = function(a, b) {
                    var c, d = [], e = [], f = A[a + " "];
                    if (!f) {
                        b || (b = g(a)), c = b.length;
                        while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                        f = A(a, xb(e, d)), f.selector = a;
                    }
                    return f;
                }, i = fb.select = function(a, b, e, f) {
                    var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                    if (e = e || [], 1 === o.length) {
                        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                            if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                            n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                        }
                        i = X.needsContext.test(a) ? 0 : j.length;
                        while (i--) {
                            if (k = j[i], d.relative[l = k.type]) break;
                            if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                                if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                                break;
                            }
                        }
                    }
                    return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
                }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
                m(), c.sortDetached = ib((function(a) {
                    return 1 & a.compareDocumentPosition(n.createElement("div"));
                })), ib((function(a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
                })) || jb("type|href|height|width", (function(a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                })), c.attributes && ib((function(a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
                })) || jb("value", (function(a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
                })), ib((function(a) {
                    return null == a.getAttribute("disabled");
                })) || jb(L, (function(a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                })), fb;
            }(a);
            m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, 
            m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
            var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
            function w(a, b, c) {
                if (m.isFunction(b)) return m.grep(a, (function(a, d) {
                    return !!b.call(a, d, a) !== c;
                }));
                if (b.nodeType) return m.grep(a, (function(a) {
                    return a === b !== c;
                }));
                if ("string" == typeof b) {
                    if (v.test(b)) return m.filter(b, a, c);
                    b = m.filter(b, a);
                }
                return m.grep(a, (function(a) {
                    return m.inArray(a, b) >= 0 !== c;
                }));
            }
            m.filter = function(a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [ d ] : [] : m.find.matches(a, m.grep(b, (function(a) {
                    return 1 === a.nodeType;
                })));
            }, m.fn.extend({
                find: function(a) {
                    var b, c = [], d = this, e = d.length;
                    if ("string" != typeof a) return this.pushStack(m(a).filter((function() {
                        for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
                    })));
                    for (b = 0; e > b; b++) m.find(a, d[b], c);
                    return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
                    c;
                },
                filter: function(a) {
                    return this.pushStack(w(this, a || [], !1));
                },
                not: function(a) {
                    return this.pushStack(w(this, a || [], !0));
                },
                is: function(a) {
                    return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
                }
            });
            var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
                    !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), 
                        u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this;
                    }
                    if (d = y.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) return x.find(a);
                        this.length = 1, this[0] = d;
                    }
                    return this.context = y, this.selector = a, this;
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, 
                this.context = a.context), m.makeArray(a, this));
            };
            A.prototype = m.fn, x = m(y);
            var B = /^(?:parents|prev(?:Until|All))/, C = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            m.extend({
                dir: function(a, b, c) {
                    var d = [], e = a[b];
                    while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), 
                    e = e[b];
                    return d;
                },
                sibling: function(a, b) {
                    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                    return c;
                }
            }), m.fn.extend({
                has: function(a) {
                    var b, c = m(a, this), d = c.length;
                    return this.filter((function() {
                        for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
                    }));
                },
                closest: function(a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
                    return this.pushStack(f.length > 1 ? m.unique(f) : f);
                },
                index: function(a) {
                    return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(a, b) {
                    return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
                },
                addBack: function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
                }
            });
            function D(a, b) {
                do {
                    a = a[b];
                } while (a && 1 !== a.nodeType);
                return a;
            }
            m.each({
                parent: function(a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null;
                },
                parents: function(a) {
                    return m.dir(a, "parentNode");
                },
                parentsUntil: function(a, b, c) {
                    return m.dir(a, "parentNode", c);
                },
                next: function(a) {
                    return D(a, "nextSibling");
                },
                prev: function(a) {
                    return D(a, "previousSibling");
                },
                nextAll: function(a) {
                    return m.dir(a, "nextSibling");
                },
                prevAll: function(a) {
                    return m.dir(a, "previousSibling");
                },
                nextUntil: function(a, b, c) {
                    return m.dir(a, "nextSibling", c);
                },
                prevUntil: function(a, b, c) {
                    return m.dir(a, "previousSibling", c);
                },
                siblings: function(a) {
                    return m.sibling((a.parentNode || {}).firstChild, a);
                },
                children: function(a) {
                    return m.sibling(a.firstChild);
                },
                contents: function(a) {
                    return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
                }
            }, (function(a, b) {
                m.fn[a] = function(c, d) {
                    var e = m.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), 
                    this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), 
                    this.pushStack(e);
                };
            }));
            var E = /\S+/g, F = {};
            function G(a) {
                var b = F[a] = {};
                return m.each(a.match(E) || [], (function(a, c) {
                    b[c] = !0;
                })), b;
            }
            m.Callbacks = function(a) {
                a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
                var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
                    for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break;
                    }
                    b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
                }, k = {
                    add: function() {
                        if (h) {
                            var d = h.length;
                            !function f(b) {
                                m.each(b, (function(b, c) {
                                    var d = m.type(c);
                                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
                                }));
                            }(arguments), b ? e = h.length : c && (g = d, j(c));
                        }
                        return this;
                    },
                    remove: function() {
                        return h && m.each(arguments, (function(a, c) {
                            var d;
                            while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
                        })), this;
                    },
                    has: function(a) {
                        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
                    },
                    empty: function() {
                        return h = [], e = 0, this;
                    },
                    disable: function() {
                        return h = i = c = void 0, this;
                    },
                    disabled: function() {
                        return !h;
                    },
                    lock: function() {
                        return i = void 0, c || k.disable(), this;
                    },
                    locked: function() {
                        return !i;
                    },
                    fireWith: function(a, c) {
                        return !h || d && !i || (c = c || [], c = [ a, c.slice ? c.slice() : c ], b ? i.push(c) : j(c)), 
                        this;
                    },
                    fire: function() {
                        return k.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!d;
                    }
                };
                return k;
            }, m.extend({
                Deferred: function(a) {
                    var b = [ [ "resolve", "done", m.Callbacks("once memory"), "resolved" ], [ "reject", "fail", m.Callbacks("once memory"), "rejected" ], [ "notify", "progress", m.Callbacks("memory") ] ], c = "pending", d = {
                        state: function() {
                            return c;
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function() {
                            var a = arguments;
                            return m.Deferred((function(c) {
                                m.each(b, (function(b, f) {
                                    var g = m.isFunction(a[b]) && a[b];
                                    e[f[1]]((function() {
                                        var a = g && g.apply(this, arguments);
                                        a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                                    }));
                                })), a = null;
                            })).promise();
                        },
                        promise: function(a) {
                            return null != a ? m.extend(a, d) : d;
                        }
                    }, e = {};
                    return d.pipe = d.then, m.each(b, (function(a, f) {
                        var g = f[2], h = f[3];
                        d[f[1]] = g.add, h && g.add((function() {
                            c = h;
                        }), b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                            return e[f[0] + "With"](this === e ? d : this, arguments), this;
                        }, e[f[0] + "With"] = g.fireWith;
                    })), d.promise(e), a && a.call(e, e), e;
                },
                when: function(a) {
                    var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                        return function(e) {
                            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                        };
                    };
                    if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                    return f || g.resolveWith(k, c), g.promise();
                }
            });
            var H;
            m.fn.ready = function(a) {
                return m.ready.promise().done(a), this;
            }, m.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? m.readyWait++ : m.ready(!0);
                },
                ready: function(a) {
                    if (a === !0 ? ! --m.readyWait : !m.isReady) {
                        if (!y.body) return setTimeout(m.ready);
                        m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [ m ]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), 
                        m(y).off("ready")));
                    }
                }
            });
            function I() {
                y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), 
                a.detachEvent("onload", J));
            }
            function J() {
                (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), 
                m.ready());
            }
            m.ready.promise = function(b) {
                if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), 
                a.addEventListener("load", J, !1); else {
                    y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                    var c = !1;
                    try {
                        c = null == a.frameElement && y.documentElement;
                    } catch (d) {}
                    c && c.doScroll && !function e() {
                        if (!m.isReady) {
                            try {
                                c.doScroll("left");
                            } catch (a) {
                                return setTimeout(e, 50);
                            }
                            I(), m.ready();
                        }
                    }();
                }
                return H.promise(b);
            };
            var L, K = "undefined";
            for (L in m(k)) break;
            k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m((function() {
                var a, b, c, d;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
                d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
                k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
            })), function() {
                var a = y.createElement("div");
                if (null == k.deleteExpando) {
                    k.deleteExpando = !0;
                    try {
                        delete a.test;
                    } catch (b) {
                        k.deleteExpando = !1;
                    }
                }
                a = null;
            }(), m.acceptData = function(a) {
                var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
            };
            var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
            function O(a, b, c) {
                if (void 0 === c && 1 === a.nodeType) {
                    var d = "data-" + b.replace(N, "-$1").toLowerCase();
                    if (c = a.getAttribute(d), "string" == typeof c) {
                        try {
                            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                        } catch (e) {}
                        m.data(a, b, c);
                    } else c = void 0;
                }
                return c;
            }
            function P(a) {
                var b;
                for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
                return !0;
            }
            function Q(a, b, d, e) {
                if (m.acceptData(a)) {
                    var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
                    if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), 
                    j[k] || (j[k] = i ? {} : {
                        toJSON: m.noop
                    }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), 
                    g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 
                    "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, 
                    f;
                }
            }
            function R(a, b, c) {
                if (m.acceptData(a)) {
                    var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
                    if (g[h]) {
                        if (b && (d = c ? g[h] : g[h].data)) {
                            m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [ b ] : (b = m.camelCase(b), 
                            b = b in d ? [ b ] : b.split(" ")), e = b.length;
                            while (e--) delete d[b[e]];
                            if (c ? !P(d) : !m.isEmptyObject(d)) return;
                        }
                        (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([ a ], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
                    }
                }
            }
            m.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(a) {
                    return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
                },
                data: function(a, b, c) {
                    return Q(a, b, c);
                },
                removeData: function(a, b) {
                    return R(a, b);
                },
                _data: function(a, b, c) {
                    return Q(a, b, c, !0);
                },
                _removeData: function(a, b) {
                    return R(a, b, !0);
                }
            }), m.fn.extend({
                data: function(a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                            c = g.length;
                            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), 
                            O(f, d, e[d])));
                            m._data(f, "parsedAttrs", !0);
                        }
                        return e;
                    }
                    return "object" == typeof a ? this.each((function() {
                        m.data(this, a);
                    })) : arguments.length > 1 ? this.each((function() {
                        m.data(this, a, b);
                    })) : f ? O(f, a, m.data(f, a)) : void 0;
                },
                removeData: function(a) {
                    return this.each((function() {
                        m.removeData(this, a);
                    }));
                }
            }), m.extend({
                queue: function(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), 
                    d || []) : void 0;
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
                        m.dequeue(a, b);
                    };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
                    delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return m._data(a, c) || m._data(a, c, {
                        empty: m.Callbacks("once memory").add((function() {
                            m._removeData(a, b + "queue"), m._removeData(a, c);
                        }))
                    });
                }
            }), m.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each((function() {
                        var c = m.queue(this, a, b);
                        m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
                    }));
                },
                dequeue: function(a) {
                    return this.each((function() {
                        m.dequeue(this, a);
                    }));
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", []);
                },
                promise: function(a, b) {
                    var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                        --d || e.resolveWith(f, [ f ]);
                    };
                    "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                    while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b);
                }
            });
            var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [ "Top", "Right", "Bottom", "Left" ], U = function(a, b) {
                return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
            }, V = m.access = function(a, b, c, d, e, f, g) {
                var h = 0, i = a.length, j = null == c;
                if ("object" === m.type(c)) {
                    e = !0;
                    for (h in c) m.access(a, b, h, c[h], !0, f, g);
                } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
                b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c);
                })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
            }, W = /^(?:checkbox|radio)$/i;
            !function() {
                var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
                if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, 
                k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, 
                a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, 
                b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, 
                c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
                k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, 
                b.attachEvent && (b.attachEvent("onclick", (function() {
                    k.noCloneEvent = !1;
                })), b.cloneNode(!0).click()), null == k.deleteExpando) {
                    k.deleteExpando = !0;
                    try {
                        delete b.test;
                    } catch (d) {
                        k.deleteExpando = !1;
                    }
                }
            }(), function() {
                var b, c, d = y.createElement("div");
                for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
                d = null;
            }();
            var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
            function ab() {
                return !0;
            }
            function bb() {
                return !1;
            }
            function cb() {
                try {
                    return y.activeElement;
                } catch (a) {}
            }
            m.event = {
                global: {},
                add: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
                    if (r) {
                        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), 
                        (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                            return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                        }, k.elem = a), b = (b || "").match(E) || [ "" ], h = b.length;
                        while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), 
                        o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, 
                        j = m.event.special[o] || {}, l = m.extend({
                            type: o,
                            origType: q,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && m.expr.match.needsContext.test(e),
                            namespace: p.join(".")
                        }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), 
                        j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                        m.event.global[o] = !0);
                        a = null;
                    }
                },
                remove: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
                    if (r && (k = r.events)) {
                        b = (b || "").match(E) || [ "" ], j = b.length;
                        while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                        o) {
                            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], 
                            h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                            while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), 
                            g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), 
                            delete k[o]);
                        } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
                    }
                },
                trigger: function(b, c, d, e) {
                    var f, g, h, i, k, l, n, o = [ d || y ], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), 
                    p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), 
                    b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : m.makeArray(c, [ b ]), 
                    k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                        if (!e && !k.noBubble && !m.isWindow(d)) {
                            for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), 
                            l = h;
                            l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                        }
                        n = 0;
                        while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, 
                        f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), 
                        f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                            l = d[g], l && (d[g] = null), m.event.triggered = p;
                            try {
                                d[p]();
                            } catch (r) {}
                            m.event.triggered = void 0, l && (d[g] = l);
                        }
                        return b.result;
                    }
                },
                dispatch: function(a) {
                    a = m.event.fix(a);
                    var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
                    if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                        h = m.event.handlers.call(this, a, j), b = 0;
                        while ((f = h[b++]) && !a.isPropagationStopped()) {
                            a.currentTarget = f.elem, g = 0;
                            while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                            a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                            void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                        }
                        return k.postDispatch && k.postDispatch.call(this, a), a.result;
                    }
                },
                handlers: function(a, b) {
                    var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                    if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [ i ]).length), 
                        e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        });
                    }
                    return h < b.length && g.push({
                        elem: this,
                        handlers: b.slice(h)
                    }), g;
                },
                fix: function(a) {
                    if (a[m.expando]) return a;
                    var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                    g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), 
                    d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
                    while (b--) c = d[b], a[c] = f[c];
                    return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
                    a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                        a;
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(a, b) {
                        var c, d, e, f = b.button, g = b.fromElement;
                        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, 
                        e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), 
                        a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), 
                        !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), 
                        a;
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== cb() && this.focus) try {
                                return this.focus(), !1;
                            } catch (a) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === cb() && this.blur ? (this.blur(), !1) : void 0;
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                            !1) : void 0;
                        },
                        _default: function(a) {
                            return m.nodeName(a.target, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                        }
                    }
                },
                simulate: function(a, b, c, d) {
                    var e = m.extend(new m.Event, c, {
                        type: a,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
                }
            }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1);
            } : function(a, b, c) {
                var d = "on" + b;
                a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
            }, m.Event = function(a, b) {
                return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, 
                b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
            }, m.Event.prototype = {
                isDefaultPrevented: bb,
                isPropagationStopped: bb,
                isImmediatePropagationStopped: bb,
                preventDefault: function() {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
                },
                stopPropagation: function() {
                    var a = this.originalEvent;
                    this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), 
                    a.cancelBubble = !0);
                },
                stopImmediatePropagation: function() {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, m.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(a, b) {
                m.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                        a.type = b), c;
                    }
                };
            })), k.submitBubbles || (m.event.special.submit = {
                setup: function() {
                    return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", (function(a) {
                        var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                        c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", (function(a) {
                            a._submit_bubble = !0;
                        })), m._data(c, "submitBubbles", !0));
                    }));
                },
                postDispatch: function(a) {
                    a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
                },
                teardown: function() {
                    return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
                }
            }), k.changeBubbles || (m.event.special.change = {
                setup: function() {
                    return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", (function(a) {
                        "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
                    })), m.event.add(this, "click._change", (function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
                    }))), !1) : void m.event.add(this, "beforeactivate._change", (function(a) {
                        var b = a.target;
                        X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", (function(a) {
                            !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
                        })), m._data(b, "changeBubbles", !0));
                    }));
                },
                handle: function(a) {
                    var b = a.target;
                    return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
                },
                teardown: function() {
                    return m.event.remove(this, "._change"), !X.test(this.nodeName);
                }
            }), k.focusinBubbles || m.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(a, b) {
                var c = function(a) {
                    m.event.simulate(b, a.target, m.event.fix(a), !0);
                };
                m.event.special[b] = {
                    setup: function() {
                        var d = this.ownerDocument || this, e = m._data(d, b);
                        e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
                    },
                    teardown: function() {
                        var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                        e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
                    }
                };
            })), m.fn.extend({
                on: function(a, b, c, d, e) {
                    var f, g;
                    if ("object" == typeof a) {
                        "string" != typeof b && (c = c || b, b = void 0);
                        for (f in a) this.on(f, b, c, a[f], e);
                        return this;
                    }
                    if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
                    c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb; else if (!d) return this;
                    return 1 === e && (g = d, d = function(a) {
                        return m().off(a), g.apply(this, arguments);
                    }, d.guid = g.guid || (g.guid = m.guid++)), this.each((function() {
                        m.event.add(this, a, d, c, b);
                    }));
                },
                one: function(a, b, c, d) {
                    return this.on(a, b, c, d, 1);
                },
                off: function(a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
                    this;
                    if ("object" == typeof a) {
                        for (e in a) this.off(e, b, a[e]);
                        return this;
                    }
                    return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), 
                    this.each((function() {
                        m.event.remove(this, a, c, b);
                    }));
                },
                trigger: function(a, b) {
                    return this.each((function() {
                        m.event.trigger(a, b, this);
                    }));
                },
                triggerHandler: function(a, b) {
                    var c = this[0];
                    return c ? m.event.trigger(a, b, c, !0) : void 0;
                }
            });
            function db(a) {
                var b = eb.split("|"), c = a.createDocumentFragment();
                if (c.createElement) while (b.length) c.createElement(b.pop());
                return c;
            }
            var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
                option: [ 1, "<select multiple='multiple'>", "</select>" ],
                legend: [ 1, "<fieldset>", "</fieldset>" ],
                area: [ 1, "<map>", "</map>" ],
                param: [ 1, "<object>", "</object>" ],
                thead: [ 1, "<table>", "</table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: k.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
            }, sb = db(y), tb = sb.appendChild(y.createElement("div"));
            rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, 
            rb.th = rb.td;
            function ub(a, b) {
                var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
                if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
                return void 0 === b || b && m.nodeName(a, b) ? m.merge([ a ], f) : f;
            }
            function vb(a) {
                W.test(a.type) && (a.defaultChecked = a.checked);
            }
            function wb(a, b) {
                return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
            }
            function xb(a) {
                return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
            }
            function yb(a) {
                var b = pb.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"), a;
            }
            function zb(a, b) {
                for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
            }
            function Ab(a, b) {
                if (1 === b.nodeType && m.hasData(a)) {
                    var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
                    if (h) {
                        delete g.handle, g.events = {};
                        for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
                    }
                    g.data && (g.data = m.extend({}, g.data));
                }
            }
            function Bb(a, b) {
                var c, d, e;
                if (1 === b.nodeType) {
                    if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                        e = m._data(b);
                        for (d in e.events) m.removeEvent(b, d, e.handle);
                        b.removeAttribute(m.expando);
                    }
                    "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
                    k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
                    b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
                }
            }
            m.extend({
                clone: function(a, b, c) {
                    var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
                    if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, 
                    tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), 
                    h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
                    if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]); else Ab(a, f);
                    return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, 
                    f;
                },
                buildFragment: function(a, b, c, d) {
                    for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) if (f = a[q], 
                    f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [ f ] : f); else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || [ "", "" ])[1].toLowerCase(), 
                        l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], 
                        e = l[0];
                        while (e--) h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), 
                        !k.tbody) {
                            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, 
                            e = f && f.childNodes.length;
                            while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                        }
                        m.merge(p, h.childNodes), h.textContent = "";
                        while (h.firstChild) h.removeChild(h.firstChild);
                        h = o.lastChild;
                    } else p.push(b.createTextNode(f));
                    h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
                    while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), 
                    h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                        e = 0;
                        while (f = h[e++]) ob.test(f.type || "") && c.push(f);
                    }
                    return h = null, o;
                },
                cleanData: function(a, b) {
                    for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) if ((b || m.acceptData(d)) && (f = d[i], 
                    g = f && j[f])) {
                        if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                        j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, 
                        c.push(f));
                    }
                }
            }), m.fn.extend({
                text: function(a) {
                    return V(this, (function(a) {
                        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
                    }), null, a, arguments.length);
                },
                append: function() {
                    return this.domManip(arguments, (function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = wb(this, a);
                            b.appendChild(a);
                        }
                    }));
                },
                prepend: function() {
                    return this.domManip(arguments, (function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = wb(this, a);
                            b.insertBefore(a, b.firstChild);
                        }
                    }));
                },
                before: function() {
                    return this.domManip(arguments, (function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this);
                    }));
                },
                after: function() {
                    return this.domManip(arguments, (function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                    }));
                },
                remove: function(a, b) {
                    for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), 
                    c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
                    return this;
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++) {
                        1 === a.nodeType && m.cleanData(ub(a, !1));
                        while (a.firstChild) a.removeChild(a.firstChild);
                        a.options && m.nodeName(a, "select") && (a.options.length = 0);
                    }
                    return this;
                },
                clone: function(a, b) {
                    return a = null == a ? !1 : a, b = null == b ? a : b, this.map((function() {
                        return m.clone(this, a, b);
                    }));
                },
                html: function(a) {
                    return V(this, (function(a) {
                        var b = this[0] || {}, c = 0, d = this.length;
                        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                        if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                            a = a.replace(ib, "<$1></$2>");
                            try {
                                for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), 
                                b.innerHTML = a);
                                b = 0;
                            } catch (e) {}
                        }
                        b && this.empty().append(a);
                    }), null, a, arguments.length);
                },
                replaceWith: function() {
                    var a = arguments[0];
                    return this.domManip(arguments, (function(b) {
                        a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
                    })), a && (a.length || a.nodeType) ? this : this.remove();
                },
                detach: function(a) {
                    return this.remove(a, !0);
                },
                domManip: function(a, b) {
                    a = e.apply([], a);
                    var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
                    if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each((function(c) {
                        var d = n.eq(c);
                        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                    }));
                    if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 
                    1 === i.childNodes.length && (i = c), c)) {
                        for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), 
                        f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                        if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], 
                        ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                        i = c = null;
                    }
                    return this;
                }
            }), m.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(a, b) {
                m.fn[a] = function(a) {
                    for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), 
                    m(g[d])[b](c), f.apply(e, c.get());
                    return this.pushStack(e);
                };
            }));
            var Cb, Db = {};
            function Eb(b, c) {
                var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
                return e.detach(), f;
            }
            function Fb(a) {
                var b = y, c = Db[a];
                return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
                b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), 
                c = Eb(a, b), Cb.detach()), Db[a] = c), c;
            }
            !function() {
                var a;
                k.shrinkWrapBlocks = function() {
                    if (null != a) return a;
                    a = !1;
                    var b, c, d;
                    return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), 
                    d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                    c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
                    b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), 
                    c.removeChild(d), a) : void 0;
                };
            }();
            var Ib, Jb, Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Kb = /^(top|right|bottom|left)$/;
            a.getComputedStyle ? (Ib = function(a) {
                return a.ownerDocument.defaultView.getComputedStyle(a, null);
            }, Jb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), 
                Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
                g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
            }) : y.documentElement.currentStyle && (Ib = function(a) {
                return a.currentStyle;
            }, Jb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), 
                Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), 
                h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), 
                void 0 === g ? g : g + "" || "auto";
            });
            function Lb(a, b) {
                return {
                    get: function() {
                        var c = a();
                        if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
                    }
                };
            }
            !function() {
                var b, c, d, e, f, g, h;
                if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                d = b.getElementsByTagName("a")[0], c = d && d.style) {
                    c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, 
                    b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", 
                    k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, 
                    m.extend(k, {
                        reliableHiddenOffsets: function() {
                            return null == g && i(), g;
                        },
                        boxSizingReliable: function() {
                            return null == f && i(), f;
                        },
                        pixelPosition: function() {
                            return null == e && i(), e;
                        },
                        reliableMarginRight: function() {
                            return null == h && i(), h;
                        }
                    });
                    function i() {
                        var b, c, d, i;
                        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
                        d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                        c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                        e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, 
                        f = "4px" === (a.getComputedStyle(b, null) || {
                            width: "4px"
                        }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                        i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), 
                        b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), 
                        i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, 
                        g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), 
                        c.removeChild(d));
                    }
                }
            }(), m.swap = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e;
            };
            var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Sb = {
                letterSpacing: "0",
                fontWeight: "400"
            }, Tb = [ "Webkit", "O", "Moz", "ms" ];
            function Ub(a, b) {
                if (b in a) return b;
                var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
                while (e--) if (b = Tb[e] + c, b in a) return b;
                return d;
            }
            function Vb(a, b) {
                for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), 
                c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), 
                (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
                for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                return a;
            }
            function Wb(a, b, c) {
                var d = Pb.exec(b);
                return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
            }
            function Xb(a, b, c, d, e) {
                for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), 
                d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), 
                "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
                return g;
            }
            function Yb(a, b, c) {
                var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
                if (0 >= e || null == e) {
                    if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
                    d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
                }
                return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
            }
            m.extend({
                cssHooks: {
                    opacity: {
                        get: function(a, b) {
                            if (b) {
                                var c = Jb(a, "opacity");
                                return "" === c ? "1" : c;
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: k.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f, g, h = m.camelCase(b), i = a.style;
                        if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], 
                        void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                        if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), 
                        f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), 
                        k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                        !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                            i[b] = c;
                        } catch (j) {}
                    }
                },
                css: function(a, b, c, d) {
                    var e, f, g, h = m.camelCase(b);
                    return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], 
                    g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), 
                    "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
                }
            }), m.each([ "height", "width" ], (function(a, b) {
                m.cssHooks[b] = {
                    get: function(a, c, d) {
                        return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, (function() {
                            return Yb(a, b, d);
                        })) : Yb(a, b, d) : void 0;
                    },
                    set: function(a, c, d) {
                        var e = d && Ib(a);
                        return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
                    }
                };
            })), k.opacity || (m.cssHooks.opacity = {
                get: function(a, b) {
                    return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
                },
                set: function(a, b) {
                    var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
                    c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
                    "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
                }
            }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, (function(a, b) {
                return b ? m.swap(a, {
                    display: "inline-block"
                }, Jb, [ a, "marginRight" ]) : void 0;
            })), m.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(a, b) {
                m.cssHooks[a + b] = {
                    expand: function(c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                        return e;
                    }
                }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
            })), m.fn.extend({
                css: function(a, b) {
                    return V(this, (function(a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (m.isArray(b)) {
                            for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
                    }), a, b, arguments.length > 1);
                },
                show: function() {
                    return Vb(this, !0);
                },
                hide: function() {
                    return Vb(this);
                },
                toggle: function(a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each((function() {
                        U(this) ? m(this).show() : m(this).hide();
                    }));
                }
            });
            function Zb(a, b, c, d, e) {
                return new Zb.prototype.init(a, b, c, d, e);
            }
            m.Tween = Zb, Zb.prototype = {
                constructor: Zb,
                init: function(a, b, c, d, e, f) {
                    this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
                    this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
                },
                cur: function() {
                    var a = Zb.propHooks[this.prop];
                    return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
                },
                run: function(a) {
                    var b, c = Zb.propHooks[this.prop];
                    return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
                    this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
                }
            }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
                _default: {
                    get: function(a) {
                        var b;
                        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), 
                        b && "auto" !== b ? b : 0) : a.elem[a.prop];
                    },
                    set: function(a) {
                        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
                    }
                }
            }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
                set: function(a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
                }
            }, m.easing = {
                linear: function(a) {
                    return a;
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2;
                }
            }, m.fx = Zb.prototype.init, m.fx.step = {};
            var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ ic ], ec = {
                "*": [ function(a, b) {
                    var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do {
                            h = h || ".5", g /= h, m.style(c.elem, a, g + f);
                        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
                    c;
                } ]
            };
            function fc() {
                return setTimeout((function() {
                    $b = void 0;
                })), $b = m.now();
            }
            function gc(a, b) {
                var c, d = {
                    height: a
                }, e = 0;
                for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
                return b && (d.opacity = d.width = a), d;
            }
            function hc(a, b, c) {
                for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
            }
            function ic(a, b, c) {
                var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
                c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
                h.empty.fire = function() {
                    h.unqueued || i();
                }), h.unqueued++, n.always((function() {
                    n.always((function() {
                        h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
                    }));
                }))), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
                j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, 
                "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
                c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always((function() {
                    p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
                })));
                for (d in b) if (e = b[d], ac.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) continue;
                        q = !0;
                    }
                    o[d] = r && r[d] || m.style(a, d);
                } else j = void 0;
                if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j); else {
                    r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), 
                    q ? m(a).show() : n.done((function() {
                        m(a).hide();
                    })), n.done((function() {
                        var b;
                        m._removeData(a, "fxshow");
                        for (b in o) m.style(a, b, o[b]);
                    }));
                    for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, 
                    g.start = "width" === d || "height" === d ? 1 : 0));
                }
            }
            function jc(a, b) {
                var c, d, e, f, g;
                for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], 
                f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e);
                } else b[d] = e;
            }
            function kc(a, b, c) {
                var d, e, f = 0, g = dc.length, h = m.Deferred().always((function() {
                    delete i.elem;
                })), i = function() {
                    if (e) return !1;
                    for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
                    !1);
                }, j = h.promise({
                    elem: a,
                    props: m.extend({}, b),
                    opts: m.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: $b || fc(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d;
                    },
                    stop: function(b) {
                        var c = 0, d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
                    }
                }), k = j.props;
                for (jc(k, j.opts.specialEasing); g > f; f++) if (d = dc[f].call(j, a, k, j.opts)) return d;
                return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
            }
            m.Animation = m.extend(kc, {
                tweener: function(a, b) {
                    m.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
                },
                prefilter: function(a, b) {
                    b ? dc.unshift(a) : dc.push(a);
                }
            }), m.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? m.extend({}, a) : {
                    complete: c || !c && b || m.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !m.isFunction(b) && b
                };
                return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, 
                (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
                }, d;
            }, m.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(U).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d);
                },
                animate: function(a, b, c, d) {
                    var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0);
                    };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c);
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
                    this.each((function() {
                        var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                        for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                        b = !1, f.splice(e, 1));
                        (b || !c) && m.dequeue(this, a);
                    }));
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each((function() {
                        var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                        for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                        b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                        f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    }));
                }
            }), m.each([ "toggle", "show", "hide" ], (function(a, b) {
                var c = m.fn[b];
                m.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
                };
            })), m.each({
                slideDown: gc("show"),
                slideUp: gc("hide"),
                slideToggle: gc("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(a, b) {
                m.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d);
                };
            })), m.timers = [], m.fx.tick = function() {
                var a, b = m.timers, c = 0;
                for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || m.fx.stop(), $b = void 0;
            }, m.fx.timer = function(a) {
                m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
            }, m.fx.interval = 13, m.fx.start = function() {
                _b || (_b = setInterval(m.fx.tick, m.fx.interval));
            }, m.fx.stop = function() {
                clearInterval(_b), _b = null;
            }, m.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, m.fn.delay = function(a, b) {
                return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, (function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d);
                    };
                }));
            }, function() {
                var a, b, c, d, e;
                b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), 
                a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, 
                k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), 
                k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, 
                c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), 
                k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), 
                k.radioValue = "t" === a.value;
            }();
            var lc = /\r/g;
            m.fn.extend({
                val: function(a) {
                    var b, c, d, e = this[0];
                    if (arguments.length) return d = m.isFunction(a), this.each((function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, (function(a) {
                            return null == a ? "" : a + "";
                        }))), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                    }));
                    if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                    "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c);
                }
            }), m.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = m.find.attr(a, "value");
                            return null != b ? b : m.trim(m.text(a));
                        }
                    },
                    select: {
                        get: function(a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                            !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                                if (b = m(c).val(), f) return b;
                                g.push(b);
                            }
                            return g;
                        },
                        set: function(a, b) {
                            var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                            while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                                d.selected = c = !0;
                            } catch (h) {
                                d.scrollHeight;
                            } else d.selected = !1;
                            return c || (a.selectedIndex = -1), e;
                        }
                    }
                }
            }), m.each([ "radio", "checkbox" ], (function() {
                m.valHooks[this] = {
                    set: function(a, b) {
                        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
                    }
                }, k.checkOn || (m.valHooks[this].get = function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value;
                });
            }));
            var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
            m.fn.extend({
                attr: function(a, b) {
                    return V(this, m.attr, a, b, arguments.length > 1);
                },
                removeAttr: function(a) {
                    return this.each((function() {
                        m.removeAttr(this, a);
                    }));
                }
            }), m.extend({
                attr: function(a, b, c) {
                    var d, e, f = a.nodeType;
                    if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), 
                    d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), 
                    null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
                    c) : void m.removeAttr(a, b));
                },
                removeAttr: function(a, b) {
                    var c, d, e = 0, f = b && b.match(E);
                    if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), 
                    a.removeAttribute(qc ? c : d);
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b;
                            }
                        }
                    }
                }
            }), nc = {
                set: function(a, b, c) {
                    return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, 
                    c;
                }
            }, m.each(m.expr.match.bool.source.match(/\w+/g), (function(a, b) {
                var c = oc[b] || m.find.attr;
                oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
                    var e, f;
                    return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
                    oc[b] = f), e;
                } : function(a, b, c) {
                    return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
                };
            })), rc && qc || (m.attrHooks.value = {
                set: function(a, b, c) {
                    return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
                }
            }), qc || (mc = {
                set: function(a, b, c) {
                    var d = a.getAttributeNode(c);
                    return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", 
                    "value" === c || b === a.getAttribute(c) ? b : void 0;
                }
            }, oc.id = oc.name = oc.coords = function(a, b, c) {
                var d;
                return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
            }, m.valHooks.button = {
                get: function(a, b) {
                    var c = a.getAttributeNode(b);
                    return c && c.specified ? c.value : void 0;
                },
                set: mc.set
            }, m.attrHooks.contenteditable = {
                set: function(a, b, c) {
                    mc.set(a, "" === b ? !1 : b, c);
                }
            }, m.each([ "width", "height" ], (function(a, b) {
                m.attrHooks[b] = {
                    set: function(a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
                    }
                };
            }))), k.style || (m.attrHooks.style = {
                get: function(a) {
                    return a.style.cssText || void 0;
                },
                set: function(a, b) {
                    return a.style.cssText = b + "";
                }
            });
            var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
            m.fn.extend({
                prop: function(a, b) {
                    return V(this, m.prop, a, b, arguments.length > 1);
                },
                removeProp: function(a) {
                    return a = m.propFix[a] || a, this.each((function() {
                        try {
                            this[a] = void 0, delete this[a];
                        } catch (b) {}
                    }));
                }
            }), m.extend({
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
                prop: function(a, b, c) {
                    var d, e, f, g = a.nodeType;
                    if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, 
                    e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            var b = m.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
                        }
                    }
                }
            }), k.hrefNormalized || m.each([ "href", "src" ], (function(a, b) {
                m.propHooks[b] = {
                    get: function(a) {
                        return a.getAttribute(b, 4);
                    }
                };
            })), k.optSelected || (m.propHooks.selected = {
                get: function(a) {
                    var b = a.parentNode;
                    return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
                }
            }), m.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                m.propFix[this.toLowerCase()] = this;
            })), k.enctype || (m.propFix.enctype = "encoding");
            var uc = /[\t\r\n\f]/g;
            m.fn.extend({
                addClass: function(a) {
                    var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
                    if (m.isFunction(a)) return this.each((function(b) {
                        m(this).addClass(a.call(this, b, this.className));
                    }));
                    if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g);
                    }
                    return this;
                },
                removeClass: function(a) {
                    var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
                    if (m.isFunction(a)) return this.each((function(b) {
                        m(this).removeClass(a.call(this, b, this.className));
                    }));
                    if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
                    }
                    return this;
                },
                toggleClass: function(a, b) {
                    var c = typeof a;
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                        m(this).toggleClass(a.call(this, c, this.className, b), b);
                    } : function() {
                        if ("string" === c) {
                            var b, d = 0, e = m(this), f = a.match(E) || [];
                            while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                        } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), 
                        this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
                    });
                },
                hasClass: function(a) {
                    for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
                    return !1;
                }
            }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(a, b) {
                m.fn[b] = function(a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
                };
            })), m.fn.extend({
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a);
                },
                bind: function(a, b, c) {
                    return this.on(a, null, b, c);
                },
                unbind: function(a, b) {
                    return this.off(a, null, b);
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d);
                },
                undelegate: function(a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
                }
            });
            var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            m.parseJSON = function(b) {
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
                var c, d = null, e = m.trim(b + "");
                return e && !m.trim(e.replace(xc, (function(a, b, e, f) {
                    return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
                }))) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
            }, m.parseXML = function(b) {
                var c, d;
                if (!b || "string" != typeof b) return null;
                try {
                    a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), 
                    c.async = "false", c.loadXML(b));
                } catch (e) {
                    c = void 0;
                }
                return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), 
                c;
            };
            var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
            try {
                zc = location.href;
            } catch (Kc) {
                zc = y.createElement("a"), zc.href = "", zc = zc.href;
            }
            yc = Gc.exec(zc.toLowerCase()) || [];
            function Lc(a) {
                return function(b, c) {
                    "string" != typeof b && (c = b, b = "*");
                    var d, e = 0, f = b.toLowerCase().match(E) || [];
                    if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", 
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
                };
            }
            function Mc(a, b, c, d) {
                var e = {}, f = a === Ic;
                function g(h) {
                    var i;
                    return e[h] = !0, m.each(a[h] || [], (function(a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                        g(j), !1);
                    })), i;
                }
                return g(b.dataTypes[0]) || !e["*"] && g("*");
            }
            function Nc(a, b) {
                var c, d, e = m.ajaxSettings.flatOptions || {};
                for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
                return c && m.extend(!0, a, c), a;
            }
            function Oc(a, b, c) {
                var d, e, f, g, h = a.contents, i = a.dataTypes;
                while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
                if (e) for (g in h) if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break;
                }
                if (i[0] in c) f = i[0]; else {
                    for (g in c) {
                        if (!i[0] || a.converters[g + " " + i[0]]) {
                            f = g;
                            break;
                        }
                        d || (d = g);
                    }
                    f = f || d;
                }
                return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
            }
            function Pc(a, b, c, d) {
                var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                f = k.shift();
                while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
                i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break;
                    }
                    if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                        b = g(b);
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        };
                    }
                }
                return {
                    state: "success",
                    data: b
                };
            }
            m.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: zc,
                    type: "GET",
                    isLocal: Dc.test(yc[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Jc,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": m.parseJSON,
                        "text xml": m.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(a, b) {
                    return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
                },
                ajaxPrefilter: Lc(Hc),
                ajaxTransport: Lc(Ic),
                ajax: function(a, b) {
                    "object" == typeof a && (b = a, a = void 0), b = b || {};
                    var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!j) {
                                    j = {};
                                    while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2];
                                }
                                b = j[a.toLowerCase()];
                            }
                            return null == b ? null : b;
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null;
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this;
                        },
                        overrideMimeType: function(a) {
                            return t || (k.mimeType = a), this;
                        },
                        statusCode: function(a) {
                            var b;
                            if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                            return this;
                        },
                        abort: function(a) {
                            var b = a || u;
                            return i && i.abort(b), x(0, b), this;
                        }
                    };
                    if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), 
                    k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
                    null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), 
                    k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), 
                    Mc(Hc, k, b, v), 2 === t) return v;
                    h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), 
                    k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, 
                    delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), 
                    k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), 
                    m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
                    v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
                    for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
                    if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
                    u = "abort";
                    for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[d](k[d]);
                    if (i = Mc(Ic, k, b, v)) {
                        v.readyState = 1, h && n.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout((function() {
                            v.abort("timeout");
                        }), k.timeout));
                        try {
                            t = 1, i.send(r, x);
                        } catch (w) {
                            if (!(2 > t)) throw w;
                            x(-1, w);
                        }
                    } else x(-1, "No Transport");
                    function x(a, b, c, d) {
                        var j, r, s, u, w, x = b;
                        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, 
                        j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), 
                        j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), 
                        w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                        r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                        v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                        v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                        p.fireWith(l, [ v, x ]), h && (n.trigger("ajaxComplete", [ v, k ]), --m.active || m.event.trigger("ajaxStop")));
                    }
                    return v;
                },
                getJSON: function(a, b, c) {
                    return m.get(a, b, c, "json");
                },
                getScript: function(a, b) {
                    return m.get(a, void 0, b, "script");
                }
            }), m.each([ "get", "post" ], (function(a, b) {
                m[b] = function(a, c, d, e) {
                    return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    });
                };
            })), m.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(a, b) {
                m.fn[b] = function(a) {
                    return this.on(b, a);
                };
            })), m._evalUrl = function(a) {
                return m.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                });
            }, m.fn.extend({
                wrapAll: function(a) {
                    if (m.isFunction(a)) return this.each((function(b) {
                        m(this).wrapAll(a.call(this, b));
                    }));
                    if (this[0]) {
                        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]), b.map((function() {
                            var a = this;
                            while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                            return a;
                        })).append(this);
                    }
                    return this;
                },
                wrapInner: function(a) {
                    return this.each(m.isFunction(a) ? function(b) {
                        m(this).wrapInner(a.call(this, b));
                    } : function() {
                        var b = m(this), c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a);
                    });
                },
                wrap: function(a) {
                    var b = m.isFunction(a);
                    return this.each((function(c) {
                        m(this).wrapAll(b ? a.call(this, c) : a);
                    }));
                },
                unwrap: function() {
                    return this.parent().each((function() {
                        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
                    })).end();
                }
            }), m.expr.filters.hidden = function(a) {
                return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
            }, m.expr.filters.visible = function(a) {
                return !m.expr.filters.hidden(a);
            };
            var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;
            function Vc(a, b, c, d) {
                var e;
                if (m.isArray(b)) m.each(b, (function(b, e) {
                    c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
                })); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vc(a + "[" + e + "]", b[e], c, d);
            }
            m.param = function(a, b) {
                var c, d = [], e = function(a, b) {
                    b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
                };
                if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, (function() {
                    e(this.name, this.value);
                })); else for (c in a) Vc(c, a[c], b, e);
                return d.join("&").replace(Qc, "+");
            }, m.fn.extend({
                serialize: function() {
                    return m.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var a = m.prop(this, "elements");
                        return a ? m.makeArray(a) : this;
                    })).filter((function() {
                        var a = this.type;
                        return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
                    })).map((function(a, b) {
                        var c = m(this).val();
                        return null == c ? null : m.isArray(c) ? m.map(c, (function(a) {
                            return {
                                name: b.name,
                                value: a.replace(Sc, "\r\n")
                            };
                        })) : {
                            name: b.name,
                            value: c.replace(Sc, "\r\n")
                        };
                    })).get();
                }
            }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
            } : Zc;
            var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
            a.ActiveXObject && m(a).on("unload", (function() {
                for (var a in Xc) Xc[a](void 0, !0);
            })), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport((function(a) {
                if (!a.crossDomain || k.cors) {
                    var b;
                    return {
                        send: function(c, d) {
                            var e, f = a.xhr(), g = ++Wc;
                            if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                            for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                            f.send(a.hasContent && a.data || null), b = function(c, e) {
                                var h, i, j;
                                if (b && (e || 4 === f.readyState)) if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, 
                                e) 4 !== f.readyState && f.abort(); else {
                                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText;
                                    } catch (k) {
                                        i = "";
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                                }
                                j && d(h, i, j, f.getAllResponseHeaders());
                            }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b();
                        },
                        abort: function() {
                            b && b(void 0, !0);
                        }
                    };
                }
            }));
            function Zc() {
                try {
                    return new a.XMLHttpRequest;
                } catch (b) {}
            }
            function $c() {
                try {
                    return new a.ActiveXObject("Microsoft.XMLHTTP");
                } catch (b) {}
            }
            m.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(a) {
                        return m.globalEval(a), a;
                    }
                }
            }), m.ajaxPrefilter("script", (function(a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
            })), m.ajaxTransport("script", (function(a) {
                if (a.crossDomain) {
                    var b, c = y.head || m("head")[0] || y.documentElement;
                    return {
                        send: function(d, e) {
                            b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), 
                            b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, 
                                b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                            }, c.insertBefore(b, c.firstChild);
                        },
                        abort: function() {
                            b && b.onload(void 0, !0);
                        }
                    };
                }
            }));
            var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
            m.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var a = _c.pop() || m.expando + "_" + vc++;
                    return this[a] = !0, a;
                }
            }), m.ajaxPrefilter("json jsonp", (function(b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
                h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
                b.converters["script json"] = function() {
                    return g || m.error(e + " was not called"), g[0];
                }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                    g = arguments;
                }, d.always((function() {
                    a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), 
                    g = f = void 0;
                })), "script") : void 0;
            })), m.parseHTML = function(a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || y;
                var d = u.exec(a), e = !c && [];
                return d ? [ b.createElement(d[1]) ] : (d = m.buildFragment([ a ], b, e), e && e.length && m(e).remove(), 
                m.merge([], d.childNodes));
            };
            var bd = m.fn.load;
            m.fn.load = function(a, b, c) {
                if ("string" != typeof a && bd) return bd.apply(this, arguments);
                var d, e, f, g = this, h = a.indexOf(" ");
                return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, 
                b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
                    url: a,
                    type: f,
                    dataType: "html",
                    data: b
                }).done((function(a) {
                    e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
                })).complete(c && function(a, b) {
                    g.each(c, e || [ a.responseText, b, a ]);
                }), this;
            }, m.expr.filters.animated = function(a) {
                return m.grep(m.timers, (function(b) {
                    return a === b.elem;
                })).length;
            };
            var cd = a.document.documentElement;
            function dd(a) {
                return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
            }
            m.offset = {
                setOffset: function(a, b, c) {
                    var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
                    "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), 
                    i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [ f, i ]) > -1, 
                    j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
                    m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), 
                    null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
                }
            }, m.fn.extend({
                offset: function(a) {
                    if (arguments.length) return void 0 === a ? this : this.each((function(b) {
                        m.offset.setOffset(this, a, b);
                    }));
                    var b, c, d = {
                        top: 0,
                        left: 0
                    }, e = this[0], f = e && e.ownerDocument;
                    if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), 
                    c = dd(f), {
                        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                    }) : d;
                },
                position: function() {
                    if (this[0]) {
                        var a, b, c = {
                            top: 0,
                            left: 0
                        }, d = this[0];
                        return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                        b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), 
                        c.left += m.css(a[0], "borderLeftWidth", !0)), {
                            top: b.top - c.top - m.css(d, "marginTop", !0),
                            left: b.left - c.left - m.css(d, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        var a = this.offsetParent || cd;
                        while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                        return a || cd;
                    }));
                }
            }), m.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(a, b) {
                var c = /Y/.test(b);
                m.fn[a] = function(d) {
                    return V(this, (function(a, d, e) {
                        var f = dd(a);
                        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
                    }), a, d, arguments.length, null);
                };
            })), m.each([ "top", "left" ], (function(a, b) {
                m.cssHooks[b] = Lb(k.pixelPosition, (function(a, c) {
                    return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0;
                }));
            })), m.each({
                Height: "height",
                Width: "width"
            }, (function(a, b) {
                m.each({
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a
                }, (function(c, d) {
                    m.fn[d] = function(d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return V(this, (function(b, c, d) {
                            var e;
                            return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                        }), b, f ? d : void 0, f, null);
                    };
                }));
            })), m.fn.size = function() {
                return this.length;
            }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
                return m;
            }));
            var ed = a.jQuery, fd = a.$;
            return m.noConflict = function(b) {
                return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
            }, typeof b === K && (a.jQuery = a.$ = m), m;
        }));
        !function(i) {
            "use strict";
            "function" == typeof define && define.amd ? define([ "jquery" ], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
        }((function(i) {
            "use strict";
            var e = window.Slick || {};
            (e = function() {
                var e = 0;
                return function(t, o) {
                    var s, n = this;
                    n.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: i(t),
                        appendDots: i(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return i('<button type="button" />').text(t + 1);
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, n.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, 
                    n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, 
                    n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, 
                    n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, 
                    n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, 
                    n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), 
                    n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", 
                    n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", 
                    n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), 
                    n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), 
                    n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), 
                    n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), 
                    n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), 
                    n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
                    n.registerBreakpoints(), n.init(!0);
                };
            }()).prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                });
            }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
                var s = this;
                if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), 
                s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), 
                s.$slideTrack.append(s.$slides), s.$slides.each((function(e, t) {
                    i(t).attr("data-slick-index", e);
                })), s.$slidesCache = s.$slides, s.reinit();
            }, e.prototype.animateHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.animate({
                        height: e
                    }, i.options.speed);
                }
            }, e.prototype.animateSlide = function(e, t) {
                var o = {}, s = this;
                s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), 
                !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                    left: e
                }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                    top: e
                }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), 
                i({
                    animStart: s.currentLeft
                }).animate({
                    animStart: e
                }, {
                    duration: s.options.speed,
                    easing: s.options.easing,
                    step: function(i) {
                        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", 
                        s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
                    },
                    complete: function() {
                        t && t.call();
                    }
                })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", 
                s.$slideTrack.css(o), t && setTimeout((function() {
                    s.disableTransition(), t.call();
                }), s.options.speed));
            }, e.prototype.getNavTarget = function() {
                var e = this, t = e.options.asNavFor;
                return t && null !== t && (t = i(t).not(e.$slider)), t;
            }, e.prototype.asNavFor = function(e) {
                var t = this.getNavTarget();
                null !== t && "object" == typeof t && t.each((function() {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                }));
            }, e.prototype.applyTransition = function(i) {
                var e = this, t = {};
                !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, 
                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
            }, e.prototype.autoPlay = function() {
                var i = this;
                i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
            }, e.prototype.autoPlayClear = function() {
                var i = this;
                i.autoPlayTimer && clearInterval(i.autoPlayTimer);
            }, e.prototype.autoPlayIterator = function() {
                var i = this, e = i.currentSlide + i.options.slidesToScroll;
                i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, 
                i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
            }, e.prototype.buildArrows = function() {
                var e = this;
                !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), 
                e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
                e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), 
                e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), 
                !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }));
            }, e.prototype.buildDots = function() {
                var e, t, o = this;
                if (!0 === o.options.dots) {
                    for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), 
                    e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                    o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
                }
            }, e.prototype.buildOut = function() {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
                e.slideCount = e.$slides.length, e.$slides.each((function(e, t) {
                    i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
                })), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), 
                e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), 
                !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), 
                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), 
                e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), 
                !0 === e.options.draggable && e.$list.addClass("draggable");
            }, e.prototype.buildRows = function() {
                var i, e, t, o, s, n, r, l = this;
                if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
                    for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                        var d = document.createElement("div");
                        for (e = 0; e < l.options.rows; e++) {
                            var a = document.createElement("div");
                            for (t = 0; t < l.options.slidesPerRow; t++) {
                                var c = i * r + (e * l.options.slidesPerRow + t);
                                n.get(c) && a.appendChild(n.get(c));
                            }
                            d.appendChild(a);
                        }
                        o.appendChild(d);
                    }
                    l.$slider.empty().append(o), l.$slider.children().children().children().css({
                        width: 100 / l.options.slidesPerRow + "%",
                        display: "inline-block"
                    });
                }
            }, e.prototype.checkResponsive = function(e, t) {
                var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
                if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), 
                r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                    s = null;
                    for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                    null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, 
                    "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), 
                    !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, 
                    "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), 
                    !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, 
                    r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), 
                    r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [ r, l ]);
                }
            }, e.prototype.changeSlide = function(e, t) {
                var o, s, n, r = this, l = i(e.currentTarget);
                switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, 
                o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                  case "previous":
                    s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                    break;

                  case "next":
                    s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                    break;

                  case "index":
                    var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                    break;

                  default:
                    return;
                }
            }, e.prototype.checkNavigable = function(i) {
                var e, t;
                if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
                return i;
            }, e.prototype.cleanUpEvents = function() {
                var e = this;
                e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), 
                !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), 
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), 
                e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), 
                e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), 
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), 
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), 
                i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), 
                !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), 
                i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), 
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), 
                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
            }, e.prototype.cleanUpSlideEvents = function() {
                var e = this;
                e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
            }, e.prototype.cleanUpRows = function() {
                var i, e = this;
                e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), 
                e.$slider.empty().append(i));
            }, e.prototype.clickHandler = function(i) {
                !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
            }, e.prototype.destroy = function(e) {
                var t = this;
                t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), 
                t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
                t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
                t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                    i(this).attr("style", i(this).data("originalStyling"));
                })), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), 
                t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), 
                t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), 
                t.unslicked = !0, e || t.$slider.trigger("destroy", [ t ]);
            }, e.prototype.disableTransition = function(i) {
                var e = this, t = {};
                t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
            }, e.prototype.fadeSlide = function(i, e) {
                var t = this;
                !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                    zIndex: t.options.zIndex
                }), t.$slides.eq(i).animate({
                    opacity: 1
                }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
                    opacity: 1,
                    zIndex: t.options.zIndex
                }), e && setTimeout((function() {
                    t.disableTransition(i), e.call();
                }), t.options.speed));
            }, e.prototype.fadeSlideOut = function(i) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }));
            }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
                var e = this;
                null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
                e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
            }, e.prototype.focusHandler = function() {
                var e = this;
                e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout((function() {
                        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
                    }), 0);
                }));
            }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
                return this.currentSlide;
            }, e.prototype.getDotCount = function() {
                var i = this, e = 0, t = 0, o = 0;
                if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (;e < i.slideCount; ) ++o, 
                e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (;e < i.slideCount; ) ++o, 
                e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
                return o - 1;
            }, e.prototype.getLeft = function(i) {
                var e, t, o, s, n = this, r = 0;
                return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, 
                s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), 
                r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, 
                r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, 
                r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, 
                r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, 
                r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, 
                n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, 
                !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), 
                e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
                !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), 
                e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
                e += (n.$list.width() - o.outerWidth()) / 2)), e;
            }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
                return this.options[i];
            }, e.prototype.getNavigableIndexes = function() {
                var i, e = this, t = 0, o = 0, s = [];
                for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, 
                o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i; ) s.push(t), t = o + e.options.slidesToScroll, 
                o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return s;
            }, e.prototype.getSlick = function() {
                return this;
            }, e.prototype.getSlideCount = function() {
                var e, t, o = this;
                return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, 
                !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each((function(s, n) {
                    if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
                })), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
            }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(i)
                    }
                }, e);
            }, e.prototype.init = function(e) {
                var t = this;
                i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), 
                t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), 
                t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [ t ]), 
                !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, 
                t.autoPlay());
            }, e.prototype.initADA = function() {
                var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter((function(i) {
                    return i >= 0 && i < e.slideCount;
                }));
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(t) {
                    var s = o.indexOf(t);
                    i(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + e.instanceUid + t,
                        tabindex: -1
                    }), -1 !== s && i(this).attr({
                        "aria-describedby": "slick-slide-control" + e.instanceUid + s
                    });
                })), e.$dots.attr("role", "tablist").find("li").each((function(s) {
                    var n = o[s];
                    i(this).attr({
                        role: "presentation"
                    }), i(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + e.instanceUid + s,
                        "aria-controls": "slick-slide" + e.instanceUid + n,
                        "aria-label": s + 1 + " of " + t,
                        "aria-selected": null,
                        tabindex: "-1"
                    });
                })).eq(e.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }).end());
                for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
                e.activateADA();
            }, e.prototype.initArrowEvents = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), 
                i.$nextArrow.on("keydown.slick", i.keyHandler)));
            }, e.prototype.initDotEvents = function() {
                var e = this;
                !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                    message: "index"
                }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), 
                !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
            }, e.prototype.initSlideEvents = function() {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), 
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
            }, e.prototype.initializeEvents = function() {
                var e = this;
                e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), 
                !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), 
                i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), 
                i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), 
                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
            }, e.prototype.initUI = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), 
                i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
            }, e.prototype.keyHandler = function(i) {
                var e = this;
                i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                    data: {
                        message: !0 === e.options.rtl ? "next" : "previous"
                    }
                }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                    data: {
                        message: !0 === e.options.rtl ? "previous" : "next"
                    }
                }));
            }, e.prototype.lazyLoad = function() {
                function e(e) {
                    i("img[data-lazy]", e).each((function() {
                        var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                        r.onload = function() {
                            e.animate({
                                opacity: 0
                            }, 100, (function() {
                                o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                                    opacity: 1
                                }, 200, (function() {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                })), n.$slider.trigger("lazyLoaded", [ n, e, t ]);
                            }));
                        }, r.onerror = function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                            n.$slider.trigger("lazyLoadError", [ n, e, t ]);
                        }, r.src = t;
                    }));
                }
                var t, o, s, n = this;
                if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), 
                s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, 
                s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, 
                s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), 
                t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
                e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
            }, e.prototype.loadSlider = function() {
                var i = this;
                i.setPosition(), i.$slideTrack.css({
                    opacity: 1
                }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
            }, e.prototype.next = e.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                });
            }, e.prototype.orientationChange = function() {
                var i = this;
                i.checkResponsive(), i.setPosition();
            }, e.prototype.pause = e.prototype.slickPause = function() {
                var i = this;
                i.autoPlayClear(), i.paused = !0;
            }, e.prototype.play = e.prototype.slickPlay = function() {
                var i = this;
                i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
            }, e.prototype.postSlide = function(e) {
                var t = this;
                t.unslicked || (t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), 
                t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), 
                t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
            }, e.prototype.prev = e.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                });
            }, e.prototype.preventDefault = function(i) {
                i.preventDefault();
            }, e.prototype.progressiveLazyLoad = function(e) {
                e = e || 1;
                var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
                d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), 
                (r = document.createElement("img")).onload = function() {
                    s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), 
                    !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [ l, t, o ]), 
                    l.progressiveLazyLoad();
                }, r.onerror = function() {
                    e < 3 ? setTimeout((function() {
                        l.progressiveLazyLoad(e + 1);
                    }), 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    l.$slider.trigger("lazyLoadError", [ l, t, o ]), l.progressiveLazyLoad());
                }, r.src = o) : l.$slider.trigger("allImagesLoaded", [ l ]);
            }, e.prototype.refresh = function(e) {
                var t, o, s = this;
                o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), 
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, 
                s.destroy(!0), i.extend(s, s.initials, {
                    currentSlide: t
                }), s.init(), e || s.changeSlide({
                    data: {
                        message: "index",
                        index: t
                    }
                }, !1);
            }, e.prototype.registerBreakpoints = function() {
                var e, t, o, s = this, n = s.options.responsive || null;
                if ("array" === i.type(n) && n.length) {
                    s.respondTo = s.options.respondTo || "window";
                    for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                        for (t = n[e].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), 
                        o--;
                        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
                    }
                    s.breakpoints.sort((function(i, e) {
                        return s.options.mobileFirst ? i - e : e - i;
                    }));
                }
            }, e.prototype.reinit = function() {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, 
                e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), 
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), 
                e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), 
                e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), 
                e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), 
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), 
                e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [ e ]);
            }, e.prototype.resize = function() {
                var e = this;
                i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function() {
                    e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
                }), 50));
            }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
                var o = this;
                if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, 
                o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
                o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), 
                o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
                o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
            }, e.prototype.setCSS = function(i) {
                var e, t, o = this, s = {};
                !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", 
                t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, 
                !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", 
                o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", 
                o.$slideTrack.css(s)));
            }, e.prototype.setDimensions = function() {
                var i = this;
                !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                    padding: "0px " + i.options.centerPadding
                }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), 
                !0 === i.options.centerMode && i.$list.css({
                    padding: i.options.centerPadding + " 0px"
                })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), 
                i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), 
                i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
            }, e.prototype.setFade = function() {
                var e, t = this;
                t.$slides.each((function(o, s) {
                    e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                        position: "relative",
                        right: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    }) : i(s).css({
                        position: "relative",
                        left: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    });
                })), t.$slides.eq(t.currentSlide).css({
                    zIndex: t.options.zIndex - 1,
                    opacity: 1
                });
            }, e.prototype.setHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.css("height", e);
                }
            }, e.prototype.setOption = e.prototype.slickSetOption = function() {
                var e, t, o, s, n, r = this, l = !1;
                if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], 
                s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), 
                "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, (function(i, e) {
                    r.options[i] = e;
                })); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [ s[t] ]; else {
                    for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), 
                    e--;
                    r.options.responsive.push(s[t]);
                }
                l && (r.unload(), r.reinit());
            }, e.prototype.setPosition = function() {
                var i = this;
                i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), 
                i.$slider.trigger("setPosition", [ i ]);
            }, e.prototype.setProps = function() {
                var i = this, e = document.body.style;
                i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), 
                void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), 
                i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), 
                void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", 
                i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
                void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", 
                i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), 
                void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", 
                i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
                void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", 
                i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), 
                void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", 
                i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
            }, e.prototype.setSlideClasses = function(i) {
                var e, t, o, s, n = this;
                if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
                n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
                    var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                    e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, 
                    t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 
                    0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), 
                    n.$slides.eq(i).addClass("slick-center");
                } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, 
                o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
            }, e.prototype.setupInfinite = function() {
                var e, t, o, s = this;
                if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, 
                s.slideCount > s.options.slidesToShow)) {
                    for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, 
                    e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                    for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                    s.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                        i(this).attr("id", "");
                    }));
                }
            }, e.prototype.interrupt = function(i) {
                var e = this;
                i || e.autoPlay(), e.interrupted = i;
            }, e.prototype.selectHandler = function(e) {
                var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
                s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
            }, e.prototype.slideHandler = function(i, e, t) {
                var o, s, n, r, l, d = null, a = this;
                if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), 
                o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, 
                !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, 
                !0 !== t ? a.animateSlide(r, (function() {
                    a.postSlide(o);
                })) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, 
                !0 !== t ? a.animateSlide(r, (function() {
                    a.postSlide(o);
                })) : a.postSlide(o)); else {
                    if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, 
                    a.animating = !0, a.$slider.trigger("beforeChange", [ a, a.currentSlide, s ]), n = a.currentSlide, 
                    a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), 
                    a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), 
                    a.fadeSlide(s, (function() {
                        a.postSlide(s);
                    }))) : a.postSlide(s), void a.animateHeight();
                    !0 !== t ? a.animateSlide(d, (function() {
                        a.postSlide(s);
                    })) : a.postSlide(s);
                }
            }, e.prototype.startLoad = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), 
                i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), 
                i.$slider.addClass("slick-loading");
            }, e.prototype.swipeDirection = function() {
                var i, e, t, o, s = this;
                return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, 
                t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), 
                o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
            }, e.prototype.swipeEnd = function(i) {
                var e, t, o = this;
                if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
                if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
                if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [ o, o.swipeDirection() ]), 
                o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                    switch (t = o.swipeDirection()) {
                      case "left":
                      case "down":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), 
                        o.currentDirection = 0;
                        break;

                      case "right":
                      case "up":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), 
                        o.currentDirection = 1;
                    }
                    "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [ o, t ]));
                } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), 
                o.touchObject = {});
            }, e.prototype.swipeHandler = function(i) {
                var e = this;
                if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, 
                e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), 
                i.data.action) {
                  case "start":
                    e.swipeStart(i);
                    break;

                  case "move":
                    e.swipeMove(i);
                    break;

                  case "end":
                    e.swipeEnd(i);
                }
            }, e.prototype.swipeMove = function(i) {
                var e, t, o, s, n, r, l = this;
                return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), 
                l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, 
                l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), 
                r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), 
                !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), 
                t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, 
                i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), 
                !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), 
                o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, 
                l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, 
                !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, 
                !1) : void l.setCSS(l.swipeLeft))));
            }, e.prototype.swipeStart = function(i) {
                var e, t = this;
                if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, 
                !1;
                void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), 
                t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, 
                t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, 
                t.dragging = !0;
            }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
                var i = this;
                null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), 
                i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
            }, e.prototype.unload = function() {
                var e = this;
                i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), 
                e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }, e.prototype.unslick = function(i) {
                var e = this;
                e.$slider.trigger("unslick", [ e, i ]), e.destroy();
            }, e.prototype.updateArrows = function() {
                var i = this;
                Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
                i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
                i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
                i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
                i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }, e.prototype.updateDots = function() {
                var i = this;
                null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
            }, e.prototype.visibility = function() {
                var i = this;
                i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
            }, i.fn.slick = function() {
                var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
                for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), 
                void 0 !== t) return t;
                return o;
            };
        }));
        /*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
        !function(t, e) {
            "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], (function(i) {
                return e(t, i);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
        }(window, (function(t, e) {
            "use strict";
            function i(i, s, a) {
                function u(t, e, o) {
                    var n, s = "$()." + i + '("' + e + '")';
                    return t.each((function(t, u) {
                        var h = a.data(u, i);
                        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                        var d = h[e];
                        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                        var l = d.apply(h, o);
                        n = void 0 === n ? l : n;
                    })), void 0 !== n ? n : t;
                }
                function h(t, e) {
                    t.each((function(t, o) {
                        var n = a.data(o, i);
                        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
                    }));
                }
                a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
                    a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                }), a.fn[i] = function(t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }, o(a));
            }
            function o(t) {
                !t || t && t.bridget || (t.bridget = i);
            }
            var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function() {} : function(t) {
                s.error(t);
            };
            return o(e || t.jQuery), i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
        }("undefined" != typeof window ? window : void 0, (function() {
            function t() {}
            var e = t.prototype;
            return e.on = function(t, e) {
                if (t && e) {
                    var i = this._events = this._events || {}, o = i[t] = i[t] || [];
                    return o.indexOf(e) == -1 && o.push(e), this;
                }
            }, e.once = function(t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {};
                    return o[e] = !0, this;
                }
            }, e.off = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1), this;
                }
            }, e.emitEvent = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    i = i.slice(0), e = e || [];
                    for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                        var s = i[n], r = o && o[s];
                        r && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }, e.allOff = function() {
                delete this._events, delete this._onceEvents;
            }, t;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
        }(window, (function() {
            "use strict";
            function t(t) {
                var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e);
                return i && e;
            }
            function e() {}
            function i() {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < h; e++) {
                    var i = u[e];
                    t[i] = 0;
                }
                return t;
            }
            function o(t) {
                var e = getComputedStyle(t);
                return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), 
                e;
            }
            function n() {
                if (!d) {
                    d = !0;
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", 
                    e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(e);
                    var n = o(e);
                    r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
                }
            }
            function s(e) {
                if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var s = o(e);
                    if ("none" == s.display) return i();
                    var a = {};
                    a.width = e.offsetWidth, a.height = e.offsetHeight;
                    for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                        var f = u[l], c = s[f], m = parseFloat(c);
                        a[f] = isNaN(m) ? 0 : m;
                    }
                    var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, I = d && r, x = t(s.width);
                    x !== !1 && (a.width = x + (I ? 0 : p + _));
                    var S = t(s.height);
                    return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), 
                    a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, 
                    a;
                }
            }
            var r, a = "undefined" == typeof console ? e : function(t) {
                console.error(t);
            }, u = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], h = u.length, d = !1;
            return s;
        })), function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
        }(window, (function() {
            "use strict";
            var t = function() {
                var t = window.Element.prototype;
                if (t.matches) return "matches";
                if (t.matchesSelector) return "matchesSelector";
                for (var e = [ "webkit", "moz", "ms", "o" ], i = 0; i < e.length; i++) {
                    var o = e[i], n = o + "MatchesSelector";
                    if (t[n]) return n;
                }
            }();
            return function(e, i) {
                return e[t](i);
            };
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], (function(i) {
                return e(t, i);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
        }(window, (function(t, e) {
            var i = {};
            i.extend = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }, i.modulo = function(t, e) {
                return (t % e + e) % e;
            };
            var o = Array.prototype.slice;
            i.makeArray = function(t) {
                if (Array.isArray(t)) return t;
                if (null === t || void 0 === t) return [];
                var e = "object" == typeof t && "number" == typeof t.length;
                return e ? o.call(t) : [ t ];
            }, i.removeFrom = function(t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1);
            }, i.getParent = function(t, i) {
                for (;t.parentNode && t != document.body; ) if (t = t.parentNode, e(t, i)) return t;
            }, i.getQueryElement = function(t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }, i.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }, i.filterFindElements = function(t, o) {
                t = i.makeArray(t);
                var n = [];
                return t.forEach((function(t) {
                    if (t instanceof HTMLElement) {
                        if (!o) return void n.push(t);
                        e(t, o) && n.push(t);
                        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
                    }
                })), n;
            }, i.debounceMethod = function(t, e, i) {
                i = i || 100;
                var o = t.prototype[e], n = e + "Timeout";
                t.prototype[e] = function() {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments, s = this;
                    this[n] = setTimeout((function() {
                        o.apply(s, e), delete s[n];
                    }), i);
                };
            }, i.docReady = function(t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }, i.toDashed = function(t) {
                return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                    return e + "-" + i;
                })).toLowerCase();
            };
            var n = t.console;
            return i.htmlInit = function(e, o) {
                i.docReady((function() {
                    var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)), d = r + "-options", l = t.jQuery;
                    h.forEach((function(t) {
                        var i, s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                        }
                        var u = new e(t, i);
                        l && l.data(t, o, u);
                    }));
                }));
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("outlayer/item", [ "ev-emitter/ev-emitter", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, 
            t.Outlayer.Item = e(t.EvEmitter, t.getSize));
        }(window, (function(t, e) {
            "use strict";
            function i(t) {
                for (var e in t) return !1;
                return null, !0;
            }
            function o(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create());
            }
            function n(t) {
                return t.replace(/([A-Z])/g, (function(t) {
                    return "-" + t.toLowerCase();
                }));
            }
            var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition", a = "string" == typeof s.transform ? "transform" : "WebkitTransform", u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[r], h = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            }, d = o.prototype = Object.create(t.prototype);
            d.constructor = o, d._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                });
            }, d.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }, d.getSize = function() {
                this.size = e(this.element);
            }, d.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }, d.getPosition = function() {
                var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"], s = parseFloat(o), r = parseFloat(n), a = this.layout.size;
                o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), 
                s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, 
                r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
            }, d.layoutPosition = function() {
                var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", r = i ? "right" : "left", a = this.position.x + t[n];
                e[s] = this.getXValue(a), e[r] = "";
                var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top", l = this.position.y + t[u];
                e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [ this ]);
            }, d.getXValue = function(t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
            }, d.getYValue = function(t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
            }, d._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y;
                if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
                var s = t - i, r = e - o, a = {};
                a.transform = this.getTranslate(s, r), this.transition({
                    to: a,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                });
            }, d.getTranslate = function(t, e) {
                var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop");
                return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
            }, d.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
                this.position.x = parseFloat(t), this.position.y = parseFloat(e);
            }, d._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }, d.transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null;
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
            };
            var l = "opacity," + n(a);
            d.enableTransition = function() {
                if (!this.isTransitioning) {
                    var t = this.layout.options.transitionDuration;
                    t = "number" == typeof t ? t + "ms" : t, this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }), this.element.addEventListener(u, this, !1);
                }
            }, d.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t);
            }, d.onotransitionend = function(t) {
                this.ontransitionend(t);
            };
            var f = {
                "-webkit-transform": "transform"
            };
            d.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn, o = f[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", 
                    delete e.clean[o]), o in e.onEnd) {
                        var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o];
                    }
                    this.emitEvent("transitionEnd", [ this ]);
                }
            }, d.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
            }, d._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            };
            var c = {
                transitionProperty: "",
                transitionDuration: "",
                transitionDelay: ""
            };
            return d.removeTransitionStyles = function() {
                this.css(c);
            }, d.stagger = function(t) {
                t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
            }, d.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.css({
                    display: ""
                }), this.emitEvent("remove", [ this ]);
            }, d.remove = function() {
                return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
                    this.removeElem();
                })), void this.hide()) : void this.removeElem();
            }, d.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
                e[i] = this.onRevealTransitionEnd, this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                });
            }, d.onRevealTransitionEnd = function() {
                this.isHidden || this.emitEvent("reveal");
            }, d.getHideRevealTransitionEndProperty = function(t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }, d.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                e[i] = this.onHideTransitionEnd, this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                });
            }, d.onHideTransitionEnd = function() {
                this.isHidden && (this.css({
                    display: "none"
                }), this.emitEvent("hide"));
            }, d.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                });
            }, o;
        })), function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("outlayer/outlayer", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], (function(i, o, n, s) {
                return e(t, i, o, n, s);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
        }(window, (function(t, e, i, o, n) {
            "use strict";
            function s(t, e) {
                var i = o.getQueryElement(t);
                if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
                this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), 
                this.option(e);
                var n = ++l;
                this.element.outlayerGUID = n, f[n] = this, this._create();
                var s = this._getOption("initLayout");
                s && this.layout();
            }
            function r(t) {
                function e() {
                    t.apply(this, arguments);
                }
                return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
            }
            function a(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
                if (!i.length) return 0;
                i = parseFloat(i);
                var n = m[o] || 1;
                return i * n;
            }
            var u = t.console, h = t.jQuery, d = function() {}, l = 0, f = {};
            s.namespace = "outlayer", s.Item = n, s.defaults = {
                containerStyle: {
                    position: "relative"
                },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            };
            var c = s.prototype;
            o.extend(c, e.prototype), c.option = function(t) {
                o.extend(this.options, t);
            }, c._getOption = function(t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }, s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            }, c._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }, c.reloadItems = function() {
                this.items = this._itemize(this.element.children);
            }, c._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                    var s = e[n], r = new i(s, this);
                    o.push(r);
                }
                return o;
            }, c._filterFindItemElements = function(t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }, c.getItemElements = function() {
                return this.items.map((function(t) {
                    return t.element;
                }));
            }, c.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0;
            }, c._init = c.layout, c._resetLayout = function() {
                this.getSize();
            }, c.getSize = function() {
                this.size = i(this.element);
            }, c._getMeasurement = function(t, e) {
                var o, n = this.options[t];
                n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), 
                this[t] = o ? i(o)[e] : n) : this[t] = 0;
            }, c.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
            }, c._getItemsForLayout = function(t) {
                return t.filter((function(t) {
                    return !t.isIgnored;
                }));
            }, c._layoutItems = function(t, e) {
                if (this._emitCompleteOnItems("layout", t), t && t.length) {
                    var i = [];
                    t.forEach((function(t) {
                        var o = this._getItemLayoutPosition(t);
                        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
                    }), this), this._processLayoutQueue(i);
                }
            }, c._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                };
            }, c._processLayoutQueue = function(t) {
                this.updateStagger(), t.forEach((function(t, e) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                }), this);
            }, c.updateStagger = function() {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), 
                this.stagger);
            }, c._positionItem = function(t, e, i, o, n) {
                o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }, c._postLayout = function() {
                this.resizeContainer();
            }, c.resizeContainer = function() {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), 
                    t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
                }
            }, c._emitCompleteOnItems = function(t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [ e ]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this, s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach((function(e) {
                    e.once(t, o);
                }));
            }, c.dispatchEvent = function(t, e, i) {
                var o = e ? [ e ].concat(i) : i;
                if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), 
                e) {
                    var n = h.Event(e);
                    n.type = t, this.$element.trigger(n, i);
                } else this.$element.trigger(t, i);
            }, c.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }, c.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }, c.stamp = function(t) {
                t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
            }, c.unstamp = function(t) {
                t = this._find(t), t && t.forEach((function(t) {
                    o.removeFrom(this.stamps, t), this.unignore(t);
                }), this);
            }, c._find = function(t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
            }, c._manageStamps = function() {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }, c._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(), e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                };
            }, c._manageStamp = d, c._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t), s = {
                    left: e.left - o.left - n.marginLeft,
                    top: e.top - o.top - n.marginTop,
                    right: o.right - e.right - n.marginRight,
                    bottom: o.bottom - e.bottom - n.marginBottom
                };
                return s;
            }, c.handleEvent = o.handleEvent, c.bindResize = function() {
                t.addEventListener("resize", this), this.isResizeBound = !0;
            }, c.unbindResize = function() {
                t.removeEventListener("resize", this), this.isResizeBound = !1;
            }, c.onresize = function() {
                this.resize();
            }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }, c.needsResizeLayout = function() {
                var t = i(this.element), e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }, c.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }, c.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }, c.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), 
                    this.reveal(e), this.layoutItems(i);
                }
            }, c.reveal = function(t) {
                if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                    var e = this.updateStagger();
                    t.forEach((function(t, i) {
                        t.stagger(i * e), t.reveal();
                    }));
                }
            }, c.hide = function(t) {
                if (this._emitCompleteOnItems("hide", t), t && t.length) {
                    var e = this.updateStagger();
                    t.forEach((function(t, i) {
                        t.stagger(i * e), t.hide();
                    }));
                }
            }, c.revealItemElements = function(t) {
                var e = this.getItems(t);
                this.reveal(e);
            }, c.hideItemElements = function(t) {
                var e = this.getItems(t);
                this.hide(e);
            }, c.getItem = function(t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }, c.getItems = function(t) {
                t = o.makeArray(t);
                var e = [];
                return t.forEach((function(t) {
                    var i = this.getItem(t);
                    i && e.push(i);
                }), this), e;
            }, c.remove = function(t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
                    t.remove(), o.removeFrom(this.items, t);
                }), this);
            }, c.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
                    t.destroy();
                })), this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
            }, s.data = function(t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }, s.create = function(t, e) {
                var i = r(s);
                return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), 
                i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), 
                i;
            };
            var m = {
                ms: 1,
                s: 1e3
            };
            return s.Item = n, s;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/item", [ "outlayer/outlayer" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, 
            t.Isotope.Item = e(t.Outlayer));
        }(window, (function(t) {
            "use strict";
            function e() {
                t.Item.apply(this, arguments);
            }
            var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
            i._create = function() {
                this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
            }, i.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData, e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            };
            var n = i.destroy;
            return i.destroy = function() {
                n.apply(this, arguments), this.css({
                    display: ""
                });
            }, e;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", [ "get-size/get-size", "outlayer/outlayer" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, 
            t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
        }(window, (function(t, e) {
            "use strict";
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, 
                this.items = t.filteredItems, this.size = t.size);
            }
            var o = i.prototype, n = [ "_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption" ];
            return n.forEach((function(t) {
                o[t] = function() {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            })), o.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element), i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }, o._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments);
            }, o.getColumnWidth = function() {
                this.getSegmentSize("column", "Width");
            }, o.getRowHeight = function() {
                this.getSegmentSize("row", "Height");
            }, o.getSegmentSize = function(t, e) {
                var i = t + e, o = "outer" + e;
                if (this._getMeasurement(i, o), !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e];
                }
            }, o.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }, o.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments);
            }, o.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size;
            }, i.modes = {}, i.create = function(t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), 
                n.prototype.namespace = t, i.modes[t] = n, n;
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("masonry-layout/masonry", [ "outlayer/outlayer", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
        }(window, (function(t, e) {
            var i = t.create("masonry");
            i.compatOptions.fitWidth = "isFitWidth";
            var o = i.prototype;
            return o._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), 
                this.measureColumns(), this.colYs = [];
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                this.maxY = 0, this.horizontalColIndex = 0;
            }, o.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0], i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth;
                }
                var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o, a = r && r < 1 ? "round" : "floor";
                s = Math[a](s), this.cols = Math.max(s, 1);
            }, o.getContainerWidth = function() {
                var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i);
                this.containerWidth = o && o.innerWidth;
            }, o._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil", o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                    x: this.columnWidth * s.col,
                    y: s.y
                }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
                return r;
            }, o._getTopColPosition = function(t) {
                var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
                return {
                    col: e.indexOf(i),
                    y: i
                };
            }, o._getTopColGroup = function(t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
                return e;
            }, o._getColGroupY = function(t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }, o._getHorizontalColPosition = function(t, e) {
                var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
                    col: i,
                    y: this._getColGroupY(i, t)
                };
            }, o._manageStamp = function(t) {
                var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right, r = s + i.outerWidth, a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
                for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
            }, o._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), 
                t;
            }, o._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }, o.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", [ "../layout-mode", "masonry-layout/masonry" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
        }(window, (function(t, e) {
            "use strict";
            var i = t.create("masonry"), o = i.prototype, n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
            for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
            var r = o.measureColumns;
            o.measureColumns = function() {
                this.items = this.isotope.filteredItems, r.call(this);
            };
            var a = o._getOption;
            return o._getOption = function(t) {
                return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", [ "../layout-mode" ], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
        }(window, (function(t) {
            "use strict";
            var e = t.create("fitRows"), i = e.prototype;
            return i._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
            }, i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
                var o = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, 
                o;
            }, i._getContainerSize = function() {
                return {
                    height: this.maxY
                };
            }, e;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", [ "../layout-mode" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
        }(window, (function(t) {
            "use strict";
            var e = t.create("vertical", {
                horizontalAlignment: 0
            }), i = e.prototype;
            return i._resetLayout = function() {
                this.y = 0;
            }, i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                };
            }, i._getContainerSize = function() {
                return {
                    height: this.y
                };
            }, e;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define([ "outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical" ], (function(i, o, n, s, r, a) {
                return e(t, i, o, n, s, r, a);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
        }(window, (function(t, e, i, o, n, s, r) {
            function a(t, e) {
                return function(i, o) {
                    for (var n = 0; n < t.length; n++) {
                        var s = t[n], r = i.sortData[s], a = o.sortData[s];
                        if (r > a || r < a) {
                            var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1;
                            return (r > a ? 1 : -1) * h;
                        }
                    }
                    return 0;
                };
            }
            var u = t.jQuery, h = String.prototype.trim ? function(t) {
                return t.trim();
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "");
            }, d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            d.Item = s, d.LayoutMode = r;
            var l = d.prototype;
            l._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), 
                this.modes = {}, this.filteredItems = this.items, this.sortHistory = [ "original-order" ];
                for (var t in r.modes) this._initLayoutMode(t);
            }, l.reloadItems = function() {
                this.itemGUID = 0, e.prototype.reloadItems.call(this);
            }, l._itemize = function() {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }, l._initLayoutMode = function(t) {
                var e = r.modes[t], i = this.options[t] || {};
                this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
            }, l.layout = function() {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
            }, l._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), 
                this._isLayoutInited = !0;
            }, l.arrange = function(t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [ e ]) : this._hideReveal(e), 
                this._sort(), this._layout();
            }, l._init = l.arrange, l._hideReveal = function(t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }, l._getIsInstant = function() {
                var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
                return this._isInstant = e, e;
            }, l._bindArrangeComplete = function() {
                function t() {
                    e && i && o && n.dispatchEvent("arrangeComplete", null, [ n.filteredItems ]);
                }
                var e, i, o, n = this;
                this.once("layoutComplete", (function() {
                    e = !0, t();
                })), this.once("hideComplete", (function() {
                    i = !0, t();
                })), this.once("revealComplete", (function() {
                    o = !0, t();
                }));
            }, l._filter = function(t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
                    }
                }
                return {
                    matches: i,
                    needReveal: o,
                    needHide: n
                };
            }, l._getFilterTest = function(t) {
                return u && this.options.isJQueryFiltering ? function(e) {
                    return u(e.element).is(t);
                } : "function" == typeof t ? function(e) {
                    return t(e.element);
                } : function(e) {
                    return o(e.element, t);
                };
            }, l.updateSortData = function(t) {
                var e;
                t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), 
                this._updateItemsSortData(e);
            }, l._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }, l._updateItemsSortData = function(t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            };
            var f = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o), a = d.sortDataParsers[i[1]];
                    return t = a ? function(t) {
                        return t && a(r(t));
                    } : function(t) {
                        return t && r(t);
                    };
                }
                function e(t, e) {
                    return t ? function(e) {
                        return e.getAttribute(t);
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && i.textContent;
                    };
                }
                return t;
            }();
            d.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10);
                },
                parseFloat: function(t) {
                    return parseFloat(t);
                }
            }, l._sort = function() {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }, l._getIsSameSortBy = function(t) {
                for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }, l._mode = function() {
                var t = this.options.layoutMode, e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return e.options = this.options[t], e;
            }, l._resetLayout = function() {
                e.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }, l._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t);
            }, l._manageStamp = function(t) {
                this._mode()._manageStamp(t);
            }, l._getContainerSize = function() {
                return this._mode()._getContainerSize();
            }, l.needsResizeLayout = function() {
                return this._mode().needsResizeLayout();
            }, l.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }, l.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), 
                    this.items = e.concat(this.items);
                }
            }, l._filterRevealAdded = function(t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), 
                e.matches;
            }, l.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, o, n = e.length;
                    for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            };
            var c = l.remove;
            return l.remove = function(t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }, l.shuffle = function() {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                this.options.sortBy = "random", this._sort(), this._layout();
            }, l._noTransition = function(t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return this.options.transitionDuration = i, o;
            }, l.getFilteredItemElements = function() {
                return this.filteredItems.map((function(t) {
                    return t.element;
                }));
            }, d;
        }));
        (function(factory) {
            if (typeof define === "function" && define.amd) define([ "jquery" ], factory); else if (typeof module === "object" && module.exports) module.exports = factory(require("jquery")); else factory(jQuery);
        })((function($) {
            var slice = Array.prototype.slice;
            var splice = Array.prototype.splice;
            var defaults = {
                topSpacing: 0,
                bottomSpacing: 0,
                className: "is-sticky",
                wrapperClassName: "sticky-wrapper",
                center: false,
                getWidthFrom: "",
                widthFromWrapper: true,
                responsiveWidth: false,
                zIndex: "auto"
            }, $window = $(window), $document = $(document), sticked = [], windowHeight = $window.height(), scroller = function() {
                var scrollTop = $window.scrollTop(), documentHeight = $document.height(), dwh = documentHeight - windowHeight, extra = scrollTop > dwh ? dwh - scrollTop : 0;
                for (var i = 0, l = sticked.length; i < l; i++) {
                    var s = sticked[i], elementTop = s.stickyWrapper.offset().top, etse = elementTop - s.topSpacing - extra;
                    s.stickyWrapper.css("height", s.stickyElement.outerHeight());
                    if (scrollTop <= etse) {
                        if (s.currentTop !== null) {
                            s.stickyElement.css({
                                width: "",
                                position: "",
                                top: "",
                                "z-index": ""
                            });
                            s.stickyElement.parent().removeClass(s.className);
                            s.stickyElement.trigger("sticky-end", [ s ]);
                            s.currentTop = null;
                        }
                    } else {
                        var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                        if (newTop < 0) newTop += s.topSpacing; else newTop = s.topSpacing;
                        if (s.currentTop !== newTop) {
                            var newWidth;
                            if (s.getWidthFrom) newWidth = $(s.getWidthFrom).width() || null; else if (s.widthFromWrapper) newWidth = s.stickyWrapper.width();
                            if (newWidth == null) newWidth = s.stickyElement.width();
                            s.stickyElement.css("width", newWidth).css("position", "fixed").css("top", newTop).css("z-index", s.zIndex);
                            s.stickyElement.parent().addClass(s.className);
                            if (s.currentTop === null) s.stickyElement.trigger("sticky-start", [ s ]); else s.stickyElement.trigger("sticky-update", [ s ]);
                            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) s.stickyElement.trigger("sticky-bottom-reached", [ s ]); else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) s.stickyElement.trigger("sticky-bottom-unreached", [ s ]);
                            s.currentTop = newTop;
                        }
                        var stickyWrapperContainer = s.stickyWrapper.parent();
                        var unstick = s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight() && s.stickyElement.offset().top <= s.topSpacing;
                        if (unstick) s.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", ""); else s.stickyElement.css("position", "fixed").css("top", newTop).css("bottom", "").css("z-index", s.zIndex);
                    }
                }
            }, resizer = function() {
                windowHeight = $window.height();
                for (var i = 0, l = sticked.length; i < l; i++) {
                    var s = sticked[i];
                    var newWidth = null;
                    if (s.getWidthFrom) {
                        if (s.responsiveWidth) newWidth = $(s.getWidthFrom).width();
                    } else if (s.widthFromWrapper) newWidth = s.stickyWrapper.width();
                    if (newWidth != null) s.stickyElement.css("width", newWidth);
                }
            }, methods = {
                init: function(options) {
                    var o = $.extend({}, defaults, options);
                    return this.each((function() {
                        var stickyElement = $(this);
                        var stickyId = stickyElement.attr("id");
                        var wrapperId = stickyId ? stickyId + "-" + defaults.wrapperClassName : defaults.wrapperClassName;
                        var wrapper = $("<div></div>").attr("id", wrapperId).addClass(o.wrapperClassName);
                        stickyElement.wrapAll(wrapper);
                        var stickyWrapper = stickyElement.parent();
                        if (o.center) stickyWrapper.css({
                            width: stickyElement.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        });
                        if (stickyElement.css("float") === "right") stickyElement.css({
                            float: "none"
                        }).parent().css({
                            float: "right"
                        });
                        o.stickyElement = stickyElement;
                        o.stickyWrapper = stickyWrapper;
                        o.currentTop = null;
                        sticked.push(o);
                        methods.setWrapperHeight(this);
                        methods.setupChangeListeners(this);
                    }));
                },
                setWrapperHeight: function(stickyElement) {
                    var element = $(stickyElement);
                    var stickyWrapper = element.parent();
                    if (stickyWrapper) stickyWrapper.css("height", element.outerHeight());
                },
                setupChangeListeners: function(stickyElement) {
                    if (window.MutationObserver) {
                        var mutationObserver = new window.MutationObserver((function(mutations) {
                            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) methods.setWrapperHeight(stickyElement);
                        }));
                        mutationObserver.observe(stickyElement, {
                            subtree: true,
                            childList: true
                        });
                    } else {
                        stickyElement.addEventListener("DOMNodeInserted", (function() {
                            methods.setWrapperHeight(stickyElement);
                        }), false);
                        stickyElement.addEventListener("DOMNodeRemoved", (function() {
                            methods.setWrapperHeight(stickyElement);
                        }), false);
                    }
                },
                update: scroller,
                unstick: function(options) {
                    return this.each((function() {
                        var that = this;
                        var unstickyElement = $(that);
                        var removeIdx = -1;
                        var i = sticked.length;
                        while (i-- > 0) if (sticked[i].stickyElement.get(0) === that) {
                            splice.call(sticked, i, 1);
                            removeIdx = i;
                        }
                        if (removeIdx !== -1) {
                            unstickyElement.unwrap();
                            unstickyElement.css({
                                width: "",
                                position: "",
                                top: "",
                                float: "",
                                "z-index": ""
                            });
                        }
                    }));
                }
            };
            if (window.addEventListener) {
                window.addEventListener("scroll", scroller, false);
                window.addEventListener("resize", resizer, false);
            } else if (window.attachEvent) {
                window.attachEvent("onscroll", scroller);
                window.attachEvent("onresize", resizer);
            }
            $.fn.sticky = function(method) {
                if (methods[method]) return methods[method].apply(this, slice.call(arguments, 1)); else if (typeof method === "object" || !method) return methods.init.apply(this, arguments); else $.error("Method " + method + " does not exist on jQuery.sticky");
            };
            $.fn.unstick = function(method) {
                if (methods[method]) return methods[method].apply(this, slice.call(arguments, 1)); else if (typeof method === "object" || !method) return methods.unstick.apply(this, arguments); else $.error("Method " + method + " does not exist on jQuery.sticky");
            };
            $((function() {
                setTimeout(scroller, 0);
            }));
        }));
        /*!
 * Chart.js v4.4.2
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
        !function(t, e) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e();
        }(void 0, (function() {
            "use strict";
            var t = Object.freeze({
                __proto__: null,
                get Colors() {
                    return Go;
                },
                get Decimation() {
                    return Qo;
                },
                get Filler() {
                    return ma;
                },
                get Legend() {
                    return ya;
                },
                get SubTitle() {
                    return ka;
                },
                get Title() {
                    return Ma;
                },
                get Tooltip() {
                    return Ba;
                }
            });
            function e() {}
            const i = (() => {
                let t = 0;
                return () => t++;
            })();
            function s(t) {
                return null == t;
            }
            function n(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                const e = Object.prototype.toString.call(t);
                return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
            }
            function o(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t);
            }
            function a(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(+t);
            }
            function r(t, e) {
                return a(t) ? t : e;
            }
            function l(t, e) {
                return void 0 === t ? e : t;
            }
            const h = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e, c = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
            function d(t, e, i) {
                if (t && "function" == typeof t.call) return t.apply(i, e);
            }
            function u(t, e, i, s) {
                let a, r, l;
                if (n(t)) if (r = t.length, s) for (a = r - 1; a >= 0; a--) e.call(i, t[a], a); else for (a = 0; a < r; a++) e.call(i, t[a], a); else if (o(t)) for (l = Object.keys(t), 
                r = l.length, a = 0; a < r; a++) e.call(i, t[l[a]], l[a]);
            }
            function f(t, e) {
                let i, s, n, o;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, s = t.length; i < s; ++i) if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
                return !0;
            }
            function g(t) {
                if (n(t)) return t.map(g);
                if (o(t)) {
                    const e = Object.create(null), i = Object.keys(t), s = i.length;
                    let n = 0;
                    for (;n < s; ++n) e[i[n]] = g(t[i[n]]);
                    return e;
                }
                return t;
            }
            function p(t) {
                return -1 === [ "__proto__", "prototype", "constructor" ].indexOf(t);
            }
            function m(t, e, i, s) {
                if (!p(t)) return;
                const n = e[t], a = i[t];
                o(n) && o(a) ? b(n, a, s) : e[t] = g(a);
            }
            function b(t, e, i) {
                const s = n(e) ? e : [ e ], a = s.length;
                if (!o(t)) return t;
                const r = (i = i || {}).merger || m;
                let l;
                for (let e = 0; e < a; ++e) {
                    if (l = s[e], !o(l)) continue;
                    const n = Object.keys(l);
                    for (let e = 0, s = n.length; e < s; ++e) r(n[e], t, l, i);
                }
                return t;
            }
            function x(t, e) {
                return b(t, e, {
                    merger: _
                });
            }
            function _(t, e, i) {
                if (!p(t)) return;
                const s = e[t], n = i[t];
                o(s) && o(n) ? x(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = g(n));
            }
            const y = {
                "": t => t,
                x: t => t.x,
                y: t => t.y
            };
            function v(t) {
                const e = t.split("."), i = [];
                let s = "";
                for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), 
                s = "");
                return i;
            }
            function M(t, e) {
                const i = y[e] || (y[e] = function(t) {
                    const e = v(t);
                    return t => {
                        for (const i of e) {
                            if ("" === i) break;
                            t = t && t[i];
                        }
                        return t;
                    };
                }(e));
                return i(t);
            }
            function w(t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
            }
            const k = t => void 0 !== t, S = t => "function" == typeof t, P = (t, e) => {
                if (t.size !== e.size) return !1;
                for (const i of t) if (!e.has(i)) return !1;
                return !0;
            };
            function D(t) {
                return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type;
            }
            const C = Math.PI, O = 2 * C, A = O + C, T = Number.POSITIVE_INFINITY, L = C / 180, E = C / 2, R = C / 4, I = 2 * C / 3, z = Math.log10, F = Math.sign;
            function V(t, e, i) {
                return Math.abs(t - e) < i;
            }
            function B(t) {
                const e = Math.round(t);
                t = V(t, e, t / 1e3) ? e : t;
                const i = Math.pow(10, Math.floor(z(t))), s = t / i;
                return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
            }
            function W(t) {
                const e = [], i = Math.sqrt(t);
                let s;
                for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
                return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e;
            }
            function N(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
            }
            function H(t, e) {
                const i = Math.round(t);
                return i - e <= t && i + e >= t;
            }
            function j(t, e, i) {
                let s, n, o;
                for (s = 0, n = t.length; s < n; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), 
                e.max = Math.max(e.max, o));
            }
            function $(t) {
                return t * (C / 180);
            }
            function Y(t) {
                return t * (180 / C);
            }
            function U(t) {
                if (!a(t)) return;
                let e = 1, i = 0;
                for (;Math.round(t * e) / e !== t; ) e *= 10, i++;
                return i;
            }
            function X(t, e) {
                const i = e.x - t.x, s = e.y - t.y, n = Math.sqrt(i * i + s * s);
                let o = Math.atan2(s, i);
                return o < -.5 * C && (o += O), {
                    angle: o,
                    distance: n
                };
            }
            function q(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
            }
            function K(t, e) {
                return (t - e + A) % O - C;
            }
            function G(t) {
                return (t % O + O) % O;
            }
            function Z(t, e, i, s) {
                const n = G(t), o = G(e), a = G(i), r = G(o - n), l = G(a - n), h = G(n - o), c = G(n - a);
                return n === o || n === a || s && o === a || r > l && h < c;
            }
            function J(t, e, i) {
                return Math.max(e, Math.min(i, t));
            }
            function Q(t) {
                return J(t, -32768, 32767);
            }
            function tt(t, e, i, s = 1e-6) {
                return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
            }
            function et(t, e, i) {
                i = i || (i => t[i] < e);
                let s, n = t.length - 1, o = 0;
                for (;n - o > 1; ) s = o + n >> 1, i(s) ? o = s : n = s;
                return {
                    lo: o,
                    hi: n
                };
            }
            const it = (t, e, i, s) => et(t, i, s ? s => {
                const n = t[s][e];
                return n < i || n === i && t[s + 1][e] === i;
            } : s => t[s][e] < i), st = (t, e, i) => et(t, i, (s => t[s][e] >= i));
            function nt(t, e, i) {
                let s = 0, n = t.length;
                for (;s < n && t[s] < e; ) s++;
                for (;n > s && t[n - 1] > i; ) n--;
                return s > 0 || n < t.length ? t.slice(s, n) : t;
            }
            const ot = [ "push", "pop", "shift", "splice", "unshift" ];
            function at(t, e) {
                t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [ e ]
                    }
                }), ot.forEach((e => {
                    const i = "_onData" + w(e), s = t[e];
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value(...e) {
                            const n = s.apply(this, e);
                            return t._chartjs.listeners.forEach((t => {
                                "function" == typeof t[i] && t[i](...e);
                            })), n;
                        }
                    });
                })));
            }
            function rt(t, e) {
                const i = t._chartjs;
                if (!i) return;
                const s = i.listeners, n = s.indexOf(e);
                -1 !== n && s.splice(n, 1), s.length > 0 || (ot.forEach((e => {
                    delete t[e];
                })), delete t._chartjs);
            }
            function lt(t) {
                const e = new Set(t);
                return e.size === t.length ? t : Array.from(e);
            }
            const ht = "undefined" == typeof window ? function(t) {
                return t();
            } : window.requestAnimationFrame;
            function ct(t, e) {
                let i = [], s = !1;
                return function(...n) {
                    i = n, s || (s = !0, ht.call(window, (() => {
                        s = !1, t.apply(e, i);
                    })));
                };
            }
            function dt(t, e) {
                let i;
                return function(...s) {
                    return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e;
                };
            }
            const ut = t => "start" === t ? "left" : "end" === t ? "right" : "center", ft = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2, gt = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
            function pt(t, e, i) {
                const s = e.length;
                let n = 0, o = s;
                if (t._sorted) {
                    const {iScale: a, _parsed: r} = t, l = a.axis, {min: h, max: c, minDefined: d, maxDefined: u} = a.getUserBounds();
                    d && (n = J(Math.min(it(r, l, h).lo, i ? s : it(e, l, a.getPixelForValue(h)).lo), 0, s - 1)), 
                    o = u ? J(Math.max(it(r, a.axis, c, !0).hi + 1, i ? 0 : it(e, l, a.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n;
                }
                return {
                    start: n,
                    count: o
                };
            }
            function mt(t) {
                const {xScale: e, yScale: i, _scaleRanges: s} = t, n = {
                    xmin: e.min,
                    xmax: e.max,
                    ymin: i.min,
                    ymax: i.max
                };
                if (!s) return t._scaleRanges = n, !0;
                const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
                return Object.assign(s, n), o;
            }
            class bt {
                constructor() {
                    this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0;
                }
                _notify(t, e, i, s) {
                    const n = e.listeners[s], o = e.duration;
                    n.forEach((s => s({
                        chart: t,
                        initial: e.initial,
                        numSteps: o,
                        currentStep: Math.min(i - e.start, o)
                    })));
                }
                _refresh() {
                    this._request || (this._running = !0, this._request = ht.call(window, (() => {
                        this._update(), this._request = null, this._running && this._refresh();
                    })));
                }
                _update(t = Date.now()) {
                    let e = 0;
                    this._charts.forEach(((i, s) => {
                        if (!i.running || !i.items.length) return;
                        const n = i.items;
                        let o, a = n.length - 1, r = !1;
                        for (;a >= 0; --a) o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), 
                        o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop());
                        r && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, 
                        this._notify(s, i, t, "complete"), i.initial = !1), e += n.length;
                    })), this._lastDate = t, 0 === e && (this._running = !1);
                }
                _getAnims(t) {
                    const e = this._charts;
                    let i = e.get(t);
                    return i || (i = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: {
                            complete: [],
                            progress: []
                        }
                    }, e.set(t, i)), i;
                }
                listen(t, e, i) {
                    this._getAnims(t).listeners[e].push(i);
                }
                add(t, e) {
                    e && e.length && this._getAnims(t).items.push(...e);
                }
                has(t) {
                    return this._getAnims(t).items.length > 0;
                }
                start(t) {
                    const e = this._charts.get(t);
                    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), 
                    this._refresh());
                }
                running(t) {
                    if (!this._running) return !1;
                    const e = this._charts.get(t);
                    return !!(e && e.running && e.items.length);
                }
                stop(t) {
                    const e = this._charts.get(t);
                    if (!e || !e.items.length) return;
                    const i = e.items;
                    let s = i.length - 1;
                    for (;s >= 0; --s) i[s].cancel();
                    e.items = [], this._notify(t, e, Date.now(), "complete");
                }
                remove(t) {
                    return this._charts.delete(t);
                }
            }
            var xt = new bt;
            /*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */            function _t(t) {
                return t + .5 | 0;
            }
            const yt = (t, e, i) => Math.max(Math.min(t, i), e);
            function vt(t) {
                return yt(_t(2.55 * t), 0, 255);
            }
            function Mt(t) {
                return yt(_t(255 * t), 0, 255);
            }
            function wt(t) {
                return yt(_t(t / 2.55) / 100, 0, 1);
            }
            function kt(t) {
                return yt(_t(100 * t), 0, 100);
            }
            const St = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                A: 10,
                B: 11,
                C: 12,
                D: 13,
                E: 14,
                F: 15,
                a: 10,
                b: 11,
                c: 12,
                d: 13,
                e: 14,
                f: 15
            }, Pt = [ ..."0123456789ABCDEF" ], Dt = t => Pt[15 & t], Ct = t => Pt[(240 & t) >> 4] + Pt[15 & t], Ot = t => (240 & t) >> 4 == (15 & t);
            function At(t) {
                var e = (t => Ot(t.r) && Ot(t.g) && Ot(t.b) && Ot(t.a))(t) ? Dt : Ct;
                return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0;
            }
            const Tt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
            function Lt(t, e, i) {
                const s = e * Math.min(i, 1 - i), n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
                return [ n(0), n(8), n(4) ];
            }
            function Et(t, e, i) {
                const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
                return [ s(5), s(3), s(1) ];
            }
            function Rt(t, e, i) {
                const s = Lt(t, 1, .5);
                let n;
                for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) s[n] *= 1 - e - i, 
                s[n] += e;
                return s;
            }
            function It(t) {
                const e = t.r / 255, i = t.g / 255, s = t.b / 255, n = Math.max(e, i, s), o = Math.min(e, i, s), a = (n + o) / 2;
                let r, l, h;
                return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function(t, e, i, s, n) {
                    return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4;
                }(e, i, s, h, n), r = 60 * r + .5), [ 0 | r, l || 0, a ];
            }
            function zt(t, e, i, s) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(Mt);
            }
            function Ft(t, e, i) {
                return zt(Lt, t, e, i);
            }
            function Vt(t) {
                return (t % 360 + 360) % 360;
            }
            function Bt(t) {
                const e = Tt.exec(t);
                let i, s = 255;
                if (!e) return;
                e[5] !== i && (s = e[6] ? vt(+e[5]) : Mt(+e[5]));
                const n = Vt(+e[2]), o = +e[3] / 100, a = +e[4] / 100;
                return i = "hwb" === e[1] ? function(t, e, i) {
                    return zt(Rt, t, e, i);
                }(n, o, a) : "hsv" === e[1] ? function(t, e, i) {
                    return zt(Et, t, e, i);
                }(n, o, a) : Ft(n, o, a), {
                    r: i[0],
                    g: i[1],
                    b: i[2],
                    a: s
                };
            }
            const Wt = {
                x: "dark",
                Z: "light",
                Y: "re",
                X: "blu",
                W: "gr",
                V: "medium",
                U: "slate",
                A: "ee",
                T: "ol",
                S: "or",
                B: "ra",
                C: "lateg",
                D: "ights",
                R: "in",
                Q: "turquois",
                E: "hi",
                P: "ro",
                O: "al",
                N: "le",
                M: "de",
                L: "yello",
                F: "en",
                K: "ch",
                G: "arks",
                H: "ea",
                I: "ightg",
                J: "wh"
            }, Nt = {
                OiceXe: "f0f8ff",
                antiquewEte: "faebd7",
                aqua: "ffff",
                aquamarRe: "7fffd4",
                azuY: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "0",
                blanKedOmond: "ffebcd",
                Xe: "ff",
                XeviTet: "8a2be2",
                bPwn: "a52a2a",
                burlywood: "deb887",
                caMtXe: "5f9ea0",
                KartYuse: "7fff00",
                KocTate: "d2691e",
                cSO: "ff7f50",
                cSnflowerXe: "6495ed",
                cSnsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "ffff",
                xXe: "8b",
                xcyan: "8b8b",
                xgTMnPd: "b8860b",
                xWay: "a9a9a9",
                xgYF: "6400",
                xgYy: "a9a9a9",
                xkhaki: "bdb76b",
                xmagFta: "8b008b",
                xTivegYF: "556b2f",
                xSange: "ff8c00",
                xScEd: "9932cc",
                xYd: "8b0000",
                xsOmon: "e9967a",
                xsHgYF: "8fbc8f",
                xUXe: "483d8b",
                xUWay: "2f4f4f",
                xUgYy: "2f4f4f",
                xQe: "ced1",
                xviTet: "9400d3",
                dAppRk: "ff1493",
                dApskyXe: "bfff",
                dimWay: "696969",
                dimgYy: "696969",
                dodgerXe: "1e90ff",
                fiYbrick: "b22222",
                flSOwEte: "fffaf0",
                foYstWAn: "228b22",
                fuKsia: "ff00ff",
                gaRsbSo: "dcdcdc",
                ghostwEte: "f8f8ff",
                gTd: "ffd700",
                gTMnPd: "daa520",
                Way: "808080",
                gYF: "8000",
                gYFLw: "adff2f",
                gYy: "808080",
                honeyMw: "f0fff0",
                hotpRk: "ff69b4",
                RdianYd: "cd5c5c",
                Rdigo: "4b0082",
                ivSy: "fffff0",
                khaki: "f0e68c",
                lavFMr: "e6e6fa",
                lavFMrXsh: "fff0f5",
                lawngYF: "7cfc00",
                NmoncEffon: "fffacd",
                ZXe: "add8e6",
                ZcSO: "f08080",
                Zcyan: "e0ffff",
                ZgTMnPdLw: "fafad2",
                ZWay: "d3d3d3",
                ZgYF: "90ee90",
                ZgYy: "d3d3d3",
                ZpRk: "ffb6c1",
                ZsOmon: "ffa07a",
                ZsHgYF: "20b2aa",
                ZskyXe: "87cefa",
                ZUWay: "778899",
                ZUgYy: "778899",
                ZstAlXe: "b0c4de",
                ZLw: "ffffe0",
                lime: "ff00",
                limegYF: "32cd32",
                lRF: "faf0e6",
                magFta: "ff00ff",
                maPon: "800000",
                VaquamarRe: "66cdaa",
                VXe: "cd",
                VScEd: "ba55d3",
                VpurpN: "9370db",
                VsHgYF: "3cb371",
                VUXe: "7b68ee",
                VsprRggYF: "fa9a",
                VQe: "48d1cc",
                VviTetYd: "c71585",
                midnightXe: "191970",
                mRtcYam: "f5fffa",
                mistyPse: "ffe4e1",
                moccasR: "ffe4b5",
                navajowEte: "ffdead",
                navy: "80",
                Tdlace: "fdf5e6",
                Tive: "808000",
                TivedBb: "6b8e23",
                Sange: "ffa500",
                SangeYd: "ff4500",
                ScEd: "da70d6",
                pOegTMnPd: "eee8aa",
                pOegYF: "98fb98",
                pOeQe: "afeeee",
                pOeviTetYd: "db7093",
                papayawEp: "ffefd5",
                pHKpuff: "ffdab9",
                peru: "cd853f",
                pRk: "ffc0cb",
                plum: "dda0dd",
                powMrXe: "b0e0e6",
                purpN: "800080",
                YbeccapurpN: "663399",
                Yd: "ff0000",
                Psybrown: "bc8f8f",
                PyOXe: "4169e1",
                saddNbPwn: "8b4513",
                sOmon: "fa8072",
                sandybPwn: "f4a460",
                sHgYF: "2e8b57",
                sHshell: "fff5ee",
                siFna: "a0522d",
                silver: "c0c0c0",
                skyXe: "87ceeb",
                UXe: "6a5acd",
                UWay: "708090",
                UgYy: "708090",
                snow: "fffafa",
                sprRggYF: "ff7f",
                stAlXe: "4682b4",
                tan: "d2b48c",
                teO: "8080",
                tEstN: "d8bfd8",
                tomato: "ff6347",
                Qe: "40e0d0",
                viTet: "ee82ee",
                JHt: "f5deb3",
                wEte: "ffffff",
                wEtesmoke: "f5f5f5",
                Lw: "ffff00",
                LwgYF: "9acd32"
            };
            let Ht;
            function jt(t) {
                Ht || (Ht = function() {
                    const t = {}, e = Object.keys(Nt), i = Object.keys(Wt);
                    let s, n, o, a, r;
                    for (s = 0; s < e.length; s++) {
                        for (a = r = e[s], n = 0; n < i.length; n++) o = i[n], r = r.replace(o, Wt[o]);
                        o = parseInt(Nt[a], 16), t[r] = [ o >> 16 & 255, o >> 8 & 255, 255 & o ];
                    }
                    return t;
                }(), Ht.transparent = [ 0, 0, 0, 0 ]);
                const e = Ht[t.toLowerCase()];
                return e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255
                };
            }
            const $t = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            const Yt = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055, Ut = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
            function Xt(t, e, i) {
                if (t) {
                    let s = It(t);
                    s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = Ft(s), t.r = s[0], 
                    t.g = s[1], t.b = s[2];
                }
            }
            function qt(t, e) {
                return t ? Object.assign(e || {}, t) : t;
            }
            function Kt(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                }, t.length > 3 && (e.a = Mt(t[3]))) : (e = qt(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = Mt(e.a), e;
            }
            function Gt(t) {
                return "r" === t.charAt(0) ? function(t) {
                    const e = $t.exec(t);
                    let i, s, n, o = 255;
                    if (e) {
                        if (e[7] !== i) {
                            const t = +e[7];
                            o = e[8] ? vt(t) : yt(255 * t, 0, 255);
                        }
                        return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? vt(i) : yt(i, 0, 255)), 
                        s = 255 & (e[4] ? vt(s) : yt(s, 0, 255)), n = 255 & (e[6] ? vt(n) : yt(n, 0, 255)), 
                        {
                            r: i,
                            g: s,
                            b: n,
                            a: o
                        };
                    }
                }(t) : Bt(t);
            }
            class Zt {
                constructor(t) {
                    if (t instanceof Zt) return t;
                    const e = typeof t;
                    let i;
                    var s, n, o;
                    "object" === e ? i = Kt(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = {
                        r: 255 & 17 * St[s[1]],
                        g: 255 & 17 * St[s[2]],
                        b: 255 & 17 * St[s[3]],
                        a: 5 === o ? 17 * St[s[4]] : 255
                    } : 7 !== o && 9 !== o || (n = {
                        r: St[s[1]] << 4 | St[s[2]],
                        g: St[s[3]] << 4 | St[s[4]],
                        b: St[s[5]] << 4 | St[s[6]],
                        a: 9 === o ? St[s[7]] << 4 | St[s[8]] : 255
                    })), i = n || jt(t) || Gt(t)), this._rgb = i, this._valid = !!i;
                }
                get valid() {
                    return this._valid;
                }
                get rgb() {
                    var t = qt(this._rgb);
                    return t && (t.a = wt(t.a)), t;
                }
                set rgb(t) {
                    this._rgb = Kt(t);
                }
                rgbString() {
                    return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${wt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
                    var t;
                }
                hexString() {
                    return this._valid ? At(this._rgb) : void 0;
                }
                hslString() {
                    return this._valid ? function(t) {
                        if (!t) return;
                        const e = It(t), i = e[0], s = kt(e[1]), n = kt(e[2]);
                        return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${wt(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`;
                    }(this._rgb) : void 0;
                }
                mix(t, e) {
                    if (t) {
                        const i = this.rgb, s = t.rgb;
                        let n;
                        const o = e === n ? .5 : e, a = 2 * o - 1, r = i.a - s.a, l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
                        n = 1 - l, i.r = 255 & l * i.r + n * s.r + .5, i.g = 255 & l * i.g + n * s.g + .5, 
                        i.b = 255 & l * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i;
                    }
                    return this;
                }
                interpolate(t, e) {
                    return t && (this._rgb = function(t, e, i) {
                        const s = Ut(wt(t.r)), n = Ut(wt(t.g)), o = Ut(wt(t.b));
                        return {
                            r: Mt(Yt(s + i * (Ut(wt(e.r)) - s))),
                            g: Mt(Yt(n + i * (Ut(wt(e.g)) - n))),
                            b: Mt(Yt(o + i * (Ut(wt(e.b)) - o))),
                            a: t.a + i * (e.a - t.a)
                        };
                    }(this._rgb, t._rgb, e)), this;
                }
                clone() {
                    return new Zt(this.rgb);
                }
                alpha(t) {
                    return this._rgb.a = Mt(t), this;
                }
                clearer(t) {
                    return this._rgb.a *= 1 - t, this;
                }
                greyscale() {
                    const t = this._rgb, e = _t(.3 * t.r + .59 * t.g + .11 * t.b);
                    return t.r = t.g = t.b = e, this;
                }
                opaquer(t) {
                    return this._rgb.a *= 1 + t, this;
                }
                negate() {
                    const t = this._rgb;
                    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
                }
                lighten(t) {
                    return Xt(this._rgb, 2, t), this;
                }
                darken(t) {
                    return Xt(this._rgb, 2, -t), this;
                }
                saturate(t) {
                    return Xt(this._rgb, 1, t), this;
                }
                desaturate(t) {
                    return Xt(this._rgb, 1, -t), this;
                }
                rotate(t) {
                    return function(t, e) {
                        var i = It(t);
                        i[0] = Vt(i[0] + e), i = Ft(i), t.r = i[0], t.g = i[1], t.b = i[2];
                    }(this._rgb, t), this;
                }
            }
            function Jt(t) {
                if (t && "object" == typeof t) {
                    const e = t.toString();
                    return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e;
                }
                return !1;
            }
            function Qt(t) {
                return Jt(t) ? t : new Zt(t);
            }
            function te(t) {
                return Jt(t) ? t : new Zt(t).saturate(.5).darken(.1).hexString();
            }
            const ee = [ "x", "y", "borderWidth", "radius", "tension" ], ie = [ "color", "borderColor", "backgroundColor" ];
            const se = new Map;
            function ne(t, e, i) {
                return function(t, e) {
                    e = e || {};
                    const i = t + JSON.stringify(e);
                    let s = se.get(i);
                    return s || (s = new Intl.NumberFormat(t, e), se.set(i, s)), s;
                }(e, i).format(t);
            }
            const oe = {
                values: t => n(t) ? t : "" + t,
                numeric(t, e, i) {
                    if (0 === t) return "0";
                    const s = this.chart.options.locale;
                    let n, o = t;
                    if (i.length > 1) {
                        const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                        (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function(t, e) {
                            let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                            Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                            return i;
                        }(t, i);
                    }
                    const a = z(Math.abs(o)), r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
                        notation: n,
                        minimumFractionDigits: r,
                        maximumFractionDigits: r
                    };
                    return Object.assign(l, this.options.ticks.format), ne(t, s, l);
                },
                logarithmic(t, e, i) {
                    if (0 === t) return "0";
                    const s = i[e].significand || t / Math.pow(10, Math.floor(z(t)));
                    return [ 1, 2, 3, 5, 10, 15 ].includes(s) || e > .8 * i.length ? oe.numeric.call(this, t, e, i) : "";
                }
            };
            var ae = {
                formatters: oe
            };
            const re = Object.create(null), le = Object.create(null);
            function he(t, e) {
                if (!e) return t;
                const i = e.split(".");
                for (let e = 0, s = i.length; e < s; ++e) {
                    const s = i[e];
                    t = t[s] || (t[s] = Object.create(null));
                }
                return t;
            }
            function ce(t, e, i) {
                return "string" == typeof e ? b(he(t, e), i) : b(he(t, ""), e);
            }
            class de {
                constructor(t, e) {
                    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", 
                    this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), 
                    this.elements = {}, this.events = [ "mousemove", "mouseout", "click", "touchstart", "touchmove" ], 
                    this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = (t, e) => te(e.backgroundColor), 
                    this.hoverBorderColor = (t, e) => te(e.borderColor), this.hoverColor = (t, e) => te(e.color), 
                    this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0,
                        includeInvisible: !1
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, 
                    this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, 
                    this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
                }
                set(t, e) {
                    return ce(this, t, e);
                }
                get(t) {
                    return he(this, t);
                }
                describe(t, e) {
                    return ce(le, t, e);
                }
                override(t, e) {
                    return ce(re, t, e);
                }
                route(t, e, i, s) {
                    const n = he(this, t), a = he(this, i), r = "_" + e;
                    Object.defineProperties(n, {
                        [r]: {
                            value: n[e],
                            writable: !0
                        },
                        [e]: {
                            enumerable: !0,
                            get() {
                                const t = this[r], e = a[s];
                                return o(t) ? Object.assign({}, e, t) : l(t, e);
                            },
                            set(t) {
                                this[r] = t;
                            }
                        }
                    });
                }
                apply(t) {
                    t.forEach((t => t(this)));
                }
            }
            var ue = new de({
                _scriptable: t => !t.startsWith("on"),
                _indexable: t => "events" !== t,
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            }, [ function(t) {
                t.set("animation", {
                    delay: void 0,
                    duration: 1e3,
                    easing: "easeOutQuart",
                    fn: void 0,
                    from: void 0,
                    loop: void 0,
                    to: void 0,
                    type: void 0
                }), t.describe("animation", {
                    _fallback: !1,
                    _indexable: !1,
                    _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
                }), t.set("animations", {
                    colors: {
                        type: "color",
                        properties: ie
                    },
                    numbers: {
                        type: "number",
                        properties: ee
                    }
                }), t.describe("animations", {
                    _fallback: "animation"
                }), t.set("transitions", {
                    active: {
                        animation: {
                            duration: 400
                        }
                    },
                    resize: {
                        animation: {
                            duration: 0
                        }
                    },
                    show: {
                        animations: {
                            colors: {
                                from: "transparent"
                            },
                            visible: {
                                type: "boolean",
                                duration: 0
                            }
                        }
                    },
                    hide: {
                        animations: {
                            colors: {
                                to: "transparent"
                            },
                            visible: {
                                type: "boolean",
                                easing: "linear",
                                fn: t => 0 | t
                            }
                        }
                    }
                });
            }, function(t) {
                t.set("layout", {
                    autoPadding: !0,
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                });
            }, function(t) {
                t.set("scale", {
                    display: !0,
                    offset: !1,
                    reverse: !1,
                    beginAtZero: !1,
                    bounds: "ticks",
                    clip: !0,
                    grace: 0,
                    grid: {
                        display: !0,
                        lineWidth: 1,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickLength: 8,
                        tickWidth: (t, e) => e.lineWidth,
                        tickColor: (t, e) => e.color,
                        offset: !1
                    },
                    border: {
                        display: !0,
                        dash: [],
                        dashOffset: 0,
                        width: 1
                    },
                    title: {
                        display: !1,
                        text: "",
                        padding: {
                            top: 4,
                            bottom: 4
                        }
                    },
                    ticks: {
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        textStrokeWidth: 0,
                        textStrokeColor: "",
                        padding: 3,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 3,
                        labelOffset: 0,
                        callback: ae.formatters.values,
                        minor: {},
                        major: {},
                        align: "center",
                        crossAlign: "near",
                        showLabelBackdrop: !1,
                        backdropColor: "rgba(255, 255, 255, 0.75)",
                        backdropPadding: 2
                    }
                }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), 
                t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), 
                t.describe("scale", {
                    _fallback: !1,
                    _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                    _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
                }), t.describe("scales", {
                    _fallback: "scale"
                }), t.describe("scale.ticks", {
                    _scriptable: t => "backdropPadding" !== t && "callback" !== t,
                    _indexable: t => "backdropPadding" !== t
                });
            } ]);
            function fe() {
                return "undefined" != typeof window && "undefined" != typeof document;
            }
            function ge(t) {
                let e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
            }
            function pe(t, e, i) {
                let s;
                return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, 
                s;
            }
            const me = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
            function be(t, e) {
                return me(t).getPropertyValue(e);
            }
            const xe = [ "top", "right", "bottom", "left" ];
            function _e(t, e, i) {
                const s = {};
                i = i ? "-" + i : "";
                for (let n = 0; n < 4; n++) {
                    const o = xe[n];
                    s[o] = parseFloat(t[e + "-" + o + i]) || 0;
                }
                return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
            }
            const ye = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
            function ve(t, e) {
                if ("native" in t) return t;
                const {canvas: i, currentDevicePixelRatio: s} = e, n = me(i), o = "border-box" === n.boxSizing, a = _e(n, "padding"), r = _e(n, "border", "width"), {x: l, y: h, box: c} = function(t, e) {
                    const i = t.touches, s = i && i.length ? i[0] : t, {offsetX: n, offsetY: o} = s;
                    let a, r, l = !1;
                    if (ye(n, o, t.target)) a = n, r = o; else {
                        const t = e.getBoundingClientRect();
                        a = s.clientX - t.left, r = s.clientY - t.top, l = !0;
                    }
                    return {
                        x: a,
                        y: r,
                        box: l
                    };
                }(t, i), d = a.left + (c && r.left), u = a.top + (c && r.top);
                let {width: f, height: g} = e;
                return o && (f -= a.width + r.width, g -= a.height + r.height), {
                    x: Math.round((l - d) / f * i.width / s),
                    y: Math.round((h - u) / g * i.height / s)
                };
            }
            const Me = t => Math.round(10 * t) / 10;
            function we(t, e, i, s) {
                const n = me(t), o = _e(n, "margin"), a = pe(n.maxWidth, t, "clientWidth") || T, r = pe(n.maxHeight, t, "clientHeight") || T, l = function(t, e, i) {
                    let s, n;
                    if (void 0 === e || void 0 === i) {
                        const o = ge(t);
                        if (o) {
                            const t = o.getBoundingClientRect(), a = me(o), r = _e(a, "border", "width"), l = _e(a, "padding");
                            e = t.width - l.width - r.width, i = t.height - l.height - r.height, s = pe(a.maxWidth, o, "clientWidth"), 
                            n = pe(a.maxHeight, o, "clientHeight");
                        } else e = t.clientWidth, i = t.clientHeight;
                    }
                    return {
                        width: e,
                        height: i,
                        maxWidth: s || T,
                        maxHeight: n || T
                    };
                }(t, e, i);
                let {width: h, height: c} = l;
                if ("content-box" === n.boxSizing) {
                    const t = _e(n, "border", "width"), e = _e(n, "padding");
                    h -= e.width + t.width, c -= e.height + t.height;
                }
                h = Math.max(0, h - o.width), c = Math.max(0, s ? h / s : c - o.height), h = Me(Math.min(h, a, l.maxWidth)), 
                c = Me(Math.min(c, r, l.maxHeight)), h && !c && (c = Me(h / 2));
                return (void 0 !== e || void 0 !== i) && s && l.height && c > l.height && (c = l.height, 
                h = Me(Math.floor(c * s))), {
                    width: h,
                    height: c
                };
            }
            function ke(t, e, i) {
                const s = e || 1, n = Math.floor(t.height * s), o = Math.floor(t.width * s);
                t.height = Math.floor(t.height), t.width = Math.floor(t.width);
                const a = t.canvas;
                return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, 
                a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, 
                a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0);
            }
            const Se = function() {
                let t = !1;
                try {
                    const e = {
                        get passive() {
                            return t = !0, !1;
                        }
                    };
                    fe() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
                } catch (t) {}
                return t;
            }();
            function Pe(t, e) {
                const i = be(t, e), s = i && i.match(/^(\d+)(\.\d+)?px$/);
                return s ? +s[1] : void 0;
            }
            function De(t) {
                return !t || s(t.size) || s(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
            }
            function Ce(t, e, i, s, n) {
                let o = e[n];
                return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s;
            }
            function Oe(t, e, i, s) {
                let o = (s = s || {}).data = s.data || {}, a = s.garbageCollect = s.garbageCollect || [];
                s.font !== e && (o = s.data = {}, a = s.garbageCollect = [], s.font = e), t.save(), 
                t.font = e;
                let r = 0;
                const l = i.length;
                let h, c, d, u, f;
                for (h = 0; h < l; h++) if (u = i[h], null == u || n(u)) {
                    if (n(u)) for (c = 0, d = u.length; c < d; c++) f = u[c], null == f || n(f) || (r = Ce(t, o, a, r, f));
                } else r = Ce(t, o, a, r, u);
                t.restore();
                const g = a.length / 2;
                if (g > i.length) {
                    for (h = 0; h < g; h++) delete o[a[h]];
                    a.splice(0, g);
                }
                return r;
            }
            function Ae(t, e, i) {
                const s = t.currentDevicePixelRatio, n = 0 !== i ? Math.max(i / 2, .5) : 0;
                return Math.round((e - n) * s) / s + n;
            }
            function Te(t, e) {
                (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), 
                e.restore();
            }
            function Le(t, e, i, s) {
                Ee(t, e, i, s, null);
            }
            function Ee(t, e, i, s, n) {
                let o, a, r, l, h, c, d, u;
                const f = e.pointStyle, g = e.rotation, p = e.radius;
                let m = (g || 0) * L;
                if (f && "object" == typeof f && (o = f.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), 
                t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), 
                void t.restore();
                if (!(isNaN(p) || p <= 0)) {
                    switch (t.beginPath(), f) {
                      default:
                        n ? t.ellipse(i, s, n / 2, p, 0, 0, O) : t.arc(i, s, p, 0, O), t.closePath();
                        break;

                      case "triangle":
                        c = n ? n / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), 
                        m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath();
                        break;

                      case "rectRounded":
                        h = .516 * p, l = p - h, a = Math.cos(m + R) * l, d = Math.cos(m + R) * (n ? n / 2 - h : l), 
                        r = Math.sin(m + R) * l, u = Math.sin(m + R) * (n ? n / 2 - h : l), t.arc(i - d, s - r, h, m - C, m - E), 
                        t.arc(i + u, s - a, h, m - E, m), t.arc(i + d, s + r, h, m, m + E), t.arc(i - u, s + a, h, m + E, m + C), 
                        t.closePath();
                        break;

                      case "rect":
                        if (!g) {
                            l = Math.SQRT1_2 * p, c = n ? n / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l);
                            break;
                        }
                        m += R;

                      case "rectRot":
                        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), 
                        t.moveTo(i - d, s - r), t.lineTo(i + u, s - a), t.lineTo(i + d, s + r), t.lineTo(i - u, s + a), 
                        t.closePath();
                        break;

                      case "crossRot":
                        m += R;

                      case "cross":
                        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), 
                        t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
                        break;

                      case "star":
                        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), 
                        t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a), 
                        m += R, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, 
                        u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), 
                        t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
                        break;

                      case "line":
                        a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r);
                        break;

                      case "dash":
                        t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                        break;

                      case !1:
                        t.closePath();
                    }
                    t.fill(), e.borderWidth > 0 && t.stroke();
                }
            }
            function Re(t, e, i) {
                return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i;
            }
            function Ie(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), 
                t.clip();
            }
            function ze(t) {
                t.restore();
            }
            function Fe(t, e, i, s, n) {
                if (!e) return t.lineTo(i.x, i.y);
                if ("middle" === n) {
                    const s = (e.x + i.x) / 2;
                    t.lineTo(s, e.y), t.lineTo(s, i.y);
                } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y);
            }
            function Ve(t, e, i, s) {
                if (!e) return t.lineTo(i.x, i.y);
                t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y);
            }
            function Be(t, e, i, s, n) {
                if (n.strikethrough || n.underline) {
                    const o = t.measureText(s), a = e - o.actualBoundingBoxLeft, r = e + o.actualBoundingBoxRight, l = i - o.actualBoundingBoxAscent, h = i + o.actualBoundingBoxDescent, c = n.strikethrough ? (l + h) / 2 : h;
                    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, 
                    t.moveTo(a, c), t.lineTo(r, c), t.stroke();
                }
            }
            function We(t, e) {
                const i = t.fillStyle;
                t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i;
            }
            function Ne(t, e, i, o, a, r = {}) {
                const l = n(e) ? e : [ e ], h = r.strokeWidth > 0 && "" !== r.strokeColor;
                let c, d;
                for (t.save(), t.font = a.string, function(t, e) {
                    e.translation && t.translate(e.translation[0], e.translation[1]), s(e.rotation) || t.rotate(e.rotation), 
                    e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), 
                    e.textBaseline && (t.textBaseline = e.textBaseline);
                }(t, r), c = 0; c < l.length; ++c) d = l[c], r.backdrop && We(t, r.backdrop), h && (r.strokeColor && (t.strokeStyle = r.strokeColor), 
                s(r.strokeWidth) || (t.lineWidth = r.strokeWidth), t.strokeText(d, i, o, r.maxWidth)), 
                t.fillText(d, i, o, r.maxWidth), Be(t, i, o, d, r), o += Number(a.lineHeight);
                t.restore();
            }
            function He(t, e) {
                const {x: i, y: s, w: n, h: o, radius: a} = e;
                t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * C, C, !0), t.lineTo(i, s + o - a.bottomLeft), 
                t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, C, E, !0), t.lineTo(i + n - a.bottomRight, s + o), 
                t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, E, 0, !0), t.lineTo(i + n, s + a.topRight), 
                t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -E, !0), t.lineTo(i + a.topLeft, s);
            }
            function je(t, e = [ "" ], i, s, n = (() => t[0])) {
                const o = i || t;
                void 0 === s && (s = ti("_fallback", t));
                const a = {
                    [Symbol.toStringTag]: "Object",
                    _cacheable: !0,
                    _scopes: t,
                    _rootScopes: o,
                    _fallback: s,
                    _getTarget: n,
                    override: i => je([ i, ...t ], e, o, s)
                };
                return new Proxy(a, {
                    deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
                    get: (i, s) => qe(i, s, (() => function(t, e, i, s) {
                        let n;
                        for (const o of e) if (n = ti(Ue(o, t), i), void 0 !== n) return Xe(t, n) ? Je(i, s, t, n) : n;
                    }(s, e, t, i))),
                    getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                    has: (t, e) => ei(t).includes(e),
                    ownKeys: t => ei(t),
                    set(t, e, i) {
                        const s = t._storage || (t._storage = n());
                        return t[e] = s[e] = i, delete t._keys, !0;
                    }
                });
            }
            function $e(t, e, i, s) {
                const a = {
                    _cacheable: !1,
                    _proxy: t,
                    _context: e,
                    _subProxy: i,
                    _stack: new Set,
                    _descriptors: Ye(t, s),
                    setContext: e => $e(t, e, i, s),
                    override: n => $e(t.override(n), e, i, s)
                };
                return new Proxy(a, {
                    deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
                    get: (t, e, i) => qe(t, e, (() => function(t, e, i) {
                        const {_proxy: s, _context: a, _subProxy: r, _descriptors: l} = t;
                        let h = s[e];
                        S(h) && l.isScriptable(e) && (h = function(t, e, i, s) {
                            const {_proxy: n, _context: o, _subProxy: a, _stack: r} = i;
                            if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
                            r.add(t);
                            let l = e(o, a || s);
                            r.delete(t), Xe(t, l) && (l = Je(n._scopes, n, t, l));
                            return l;
                        }(e, h, t, i));
                        n(h) && h.length && (h = function(t, e, i, s) {
                            const {_proxy: n, _context: a, _subProxy: r, _descriptors: l} = i;
                            if (void 0 !== a.index && s(t)) return e[a.index % e.length];
                            if (o(e[0])) {
                                const i = e, s = n._scopes.filter((t => t !== i));
                                e = [];
                                for (const o of i) {
                                    const i = Je(s, n, t, o);
                                    e.push($e(i, a, r && r[t], l));
                                }
                            }
                            return e;
                        }(e, h, t, l.isIndexable));
                        Xe(e, h) && (h = $e(h, a, r && r[e], l));
                        return h;
                    }(t, e, i))),
                    getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
                        enumerable: !0,
                        configurable: !0
                    } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t),
                    has: (e, i) => Reflect.has(t, i),
                    ownKeys: () => Reflect.ownKeys(t),
                    set: (e, i, s) => (t[i] = s, delete e[i], !0)
                });
            }
            function Ye(t, e = {
                scriptable: !0,
                indexable: !0
            }) {
                const {_scriptable: i = e.scriptable, _indexable: s = e.indexable, _allKeys: n = e.allKeys} = t;
                return {
                    allKeys: n,
                    scriptable: i,
                    indexable: s,
                    isScriptable: S(i) ? i : () => i,
                    isIndexable: S(s) ? s : () => s
                };
            }
            const Ue = (t, e) => t ? t + w(e) : e, Xe = (t, e) => o(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
            function qe(t, e, i) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                const s = i();
                return t[e] = s, s;
            }
            function Ke(t, e, i) {
                return S(t) ? t(e, i) : t;
            }
            const Ge = (t, e) => !0 === t ? e : "string" == typeof t ? M(e, t) : void 0;
            function Ze(t, e, i, s, n) {
                for (const o of e) {
                    const e = Ge(i, o);
                    if (e) {
                        t.add(e);
                        const o = Ke(e._fallback, i, n);
                        if (void 0 !== o && o !== i && o !== s) return o;
                    } else if (!1 === e && void 0 !== s && i !== s) return null;
                }
                return !1;
            }
            function Je(t, e, i, s) {
                const a = e._rootScopes, r = Ke(e._fallback, i, s), l = [ ...t, ...a ], h = new Set;
                h.add(s);
                let c = Qe(h, l, i, r || i, s);
                return null !== c && (void 0 === r || r === i || (c = Qe(h, l, r, c, s), null !== c)) && je(Array.from(h), [ "" ], a, r, (() => function(t, e, i) {
                    const s = t._getTarget();
                    e in s || (s[e] = {});
                    const a = s[e];
                    if (n(a) && o(i)) return i;
                    return a || {};
                }(e, i, s)));
            }
            function Qe(t, e, i, s, n) {
                for (;i; ) i = Ze(t, e, i, s, n);
                return i;
            }
            function ti(t, e) {
                for (const i of e) {
                    if (!i) continue;
                    const e = i[t];
                    if (void 0 !== e) return e;
                }
            }
            function ei(t) {
                let e = t._keys;
                return e || (e = t._keys = function(t) {
                    const e = new Set;
                    for (const i of t) for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t);
                    return Array.from(e);
                }(t._scopes)), e;
            }
            function ii(t, e, i, s) {
                const {iScale: n} = t, {key: o = "r"} = this._parsing, a = new Array(s);
                let r, l, h, c;
                for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
                    r: n.parse(M(c, o), h)
                };
                return a;
            }
            const si = Number.EPSILON || 1e-14, ni = (t, e) => e < t.length && !t[e].skip && t[e], oi = t => "x" === t ? "y" : "x";
            function ai(t, e, i, s) {
                const n = t.skip ? e : t, o = e, a = i.skip ? e : i, r = q(o, n), l = q(a, o);
                let h = r / (r + l), c = l / (r + l);
                h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c;
                const d = s * h, u = s * c;
                return {
                    previous: {
                        x: o.x - d * (a.x - n.x),
                        y: o.y - d * (a.y - n.y)
                    },
                    next: {
                        x: o.x + u * (a.x - n.x),
                        y: o.y + u * (a.y - n.y)
                    }
                };
            }
            function ri(t, e = "x") {
                const i = oi(e), s = t.length, n = Array(s).fill(0), o = Array(s);
                let a, r, l, h = ni(t, 0);
                for (a = 0; a < s; ++a) if (r = l, l = h, h = ni(t, a + 1), l) {
                    if (h) {
                        const t = h[e] - l[e];
                        n[a] = 0 !== t ? (h[i] - l[i]) / t : 0;
                    }
                    o[a] = r ? h ? F(n[a - 1]) !== F(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
                }
                !function(t, e, i) {
                    const s = t.length;
                    let n, o, a, r, l, h = ni(t, 0);
                    for (let c = 0; c < s - 1; ++c) l = h, h = ni(t, c + 1), l && h && (V(e[c], 0, si) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], 
                    o = i[c + 1] / e[c], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), 
                    i[c] = n * a * e[c], i[c + 1] = o * a * e[c])));
                }(t, n, o), function(t, e, i = "x") {
                    const s = oi(i), n = t.length;
                    let o, a, r, l = ni(t, 0);
                    for (let h = 0; h < n; ++h) {
                        if (a = r, r = l, l = ni(t, h + 1), !r) continue;
                        const n = r[i], c = r[s];
                        a && (o = (n - a[i]) / 3, r[`cp1${i}`] = n - o, r[`cp1${s}`] = c - o * e[h]), l && (o = (l[i] - n) / 3, 
                        r[`cp2${i}`] = n + o, r[`cp2${s}`] = c + o * e[h]);
                    }
                }(t, o, e);
            }
            function li(t, e, i) {
                return Math.max(Math.min(t, i), e);
            }
            function hi(t, e, i, s, n) {
                let o, a, r, l;
                if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) ri(t, n); else {
                    let i = s ? t[t.length - 1] : t[0];
                    for (o = 0, a = t.length; o < a; ++o) r = t[o], l = ai(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), 
                    r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, 
                    i = r;
                }
                e.capBezierPoints && function(t, e) {
                    let i, s, n, o, a, r = Re(t[0], e);
                    for (i = 0, s = t.length; i < s; ++i) a = o, o = r, r = i < s - 1 && Re(t[i + 1], e), 
                    o && (n = t[i], a && (n.cp1x = li(n.cp1x, e.left, e.right), n.cp1y = li(n.cp1y, e.top, e.bottom)), 
                    r && (n.cp2x = li(n.cp2x, e.left, e.right), n.cp2y = li(n.cp2y, e.top, e.bottom)));
                }(t, i);
            }
            const ci = t => 0 === t || 1 === t, di = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * O / i), ui = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * O / i) + 1, fi = {
                linear: t => t,
                easeInQuad: t => t * t,
                easeOutQuad: t => -t * (t - 2),
                easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                easeInCubic: t => t * t * t,
                easeOutCubic: t => (t -= 1) * t * t + 1,
                easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                easeInQuart: t => t * t * t * t,
                easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                easeInQuint: t => t * t * t * t * t,
                easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                easeInSine: t => 1 - Math.cos(t * E),
                easeOutSine: t => Math.sin(t * E),
                easeInOutSine: t => -.5 * (Math.cos(C * t) - 1),
                easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
                easeInOutExpo: t => ci(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
                easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                easeInElastic: t => ci(t) ? t : di(t, .075, .3),
                easeOutElastic: t => ci(t) ? t : ui(t, .075, .3),
                easeInOutElastic(t) {
                    const e = .1125;
                    return ci(t) ? t : t < .5 ? .5 * di(2 * t, e, .45) : .5 + .5 * ui(2 * t - 1, e, .45);
                },
                easeInBack(t) {
                    const e = 1.70158;
                    return t * t * ((e + 1) * t - e);
                },
                easeOutBack(t) {
                    const e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1;
                },
                easeInOutBack(t) {
                    let e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                },
                easeInBounce: t => 1 - fi.easeOutBounce(1 - t),
                easeOutBounce(t) {
                    const e = 7.5625, i = 2.75;
                    return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375;
                },
                easeInOutBounce: t => t < .5 ? .5 * fi.easeInBounce(2 * t) : .5 * fi.easeOutBounce(2 * t - 1) + .5
            };
            function gi(t, e, i, s) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: t.y + i * (e.y - t.y)
                };
            }
            function pi(t, e, i, s) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
                };
            }
            function mi(t, e, i, s) {
                const n = {
                    x: t.cp2x,
                    y: t.cp2y
                }, o = {
                    x: e.cp1x,
                    y: e.cp1y
                }, a = gi(t, n, i), r = gi(n, o, i), l = gi(o, e, i), h = gi(a, r, i), c = gi(r, l, i);
                return gi(h, c, i);
            }
            const bi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, xi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
            function _i(t, e) {
                const i = ("" + t).match(bi);
                if (!i || "normal" === i[1]) return 1.2 * e;
                switch (t = +i[2], i[3]) {
                  case "px":
                    return t;

                  case "%":
                    t /= 100;
                }
                return e * t;
            }
            const yi = t => +t || 0;
            function vi(t, e) {
                const i = {}, s = o(e), n = s ? Object.keys(e) : e, a = o(t) ? s ? i => l(t[i], t[e[i]]) : e => t[e] : () => t;
                for (const t of n) i[t] = yi(a(t));
                return i;
            }
            function Mi(t) {
                return vi(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                });
            }
            function wi(t) {
                return vi(t, [ "topLeft", "topRight", "bottomLeft", "bottomRight" ]);
            }
            function ki(t) {
                const e = Mi(t);
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
            }
            function Si(t, e) {
                t = t || {}, e = e || ue.font;
                let i = l(t.size, e.size);
                "string" == typeof i && (i = parseInt(i, 10));
                let s = l(t.style, e.style);
                s && !("" + s).match(xi) && (console.warn('Invalid font style specified: "' + s + '"'), 
                s = void 0);
                const n = {
                    family: l(t.family, e.family),
                    lineHeight: _i(l(t.lineHeight, e.lineHeight), i),
                    size: i,
                    style: s,
                    weight: l(t.weight, e.weight),
                    string: ""
                };
                return n.string = De(n), n;
            }
            function Pi(t, e, i, s) {
                let o, a, r, l = !0;
                for (o = 0, a = t.length; o < a; ++o) if (r = t[o], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), 
                l = !1), void 0 !== i && n(r) && (r = r[i % r.length], l = !1), void 0 !== r)) return s && !l && (s.cacheable = !1), 
                r;
            }
            function Di(t, e, i) {
                const {min: s, max: n} = t, o = c(e, (n - s) / 2), a = (t, e) => i && 0 === t ? 0 : t + e;
                return {
                    min: a(s, -Math.abs(o)),
                    max: a(n, o)
                };
            }
            function Ci(t, e) {
                return Object.assign(Object.create(t), e);
            }
            function Oi(t, e, i) {
                return t ? function(t, e) {
                    return {
                        x: i => t + t + e - i,
                        setWidth(t) {
                            e = t;
                        },
                        textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                        xPlus: (t, e) => t - e,
                        leftForLtr: (t, e) => t - e
                    };
                }(e, i) : {
                    x: t => t,
                    setWidth(t) {},
                    textAlign: t => t,
                    xPlus: (t, e) => t + e,
                    leftForLtr: (t, e) => t
                };
            }
            function Ai(t, e) {
                let i, s;
                "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [ i.getPropertyValue("direction"), i.getPropertyPriority("direction") ], 
                i.setProperty("direction", e, "important"), t.prevTextDirection = s);
            }
            function Ti(t, e) {
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
            }
            function Li(t) {
                return "angle" === t ? {
                    between: Z,
                    compare: K,
                    normalize: G
                } : {
                    between: tt,
                    compare: (t, e) => t - e,
                    normalize: t => t
                };
            }
            function Ei({start: t, end: e, count: i, loop: s, style: n}) {
                return {
                    start: t % i,
                    end: e % i,
                    loop: s && (e - t + 1) % i == 0,
                    style: n
                };
            }
            function Ri(t, e, i) {
                if (!i) return [ t ];
                const {property: s, start: n, end: o} = i, a = e.length, {compare: r, between: l, normalize: h} = Li(s), {start: c, end: d, loop: u, style: f} = function(t, e, i) {
                    const {property: s, start: n, end: o} = i, {between: a, normalize: r} = Li(s), l = e.length;
                    let h, c, {start: d, end: u, loop: f} = t;
                    if (f) {
                        for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h) d--, u--;
                        d %= l, u %= l;
                    }
                    return u < d && (u += l), {
                        start: d,
                        end: u,
                        loop: f,
                        style: t.style
                    };
                }(t, e, i), g = [];
                let p, m, b, x = !1, _ = null;
                const y = () => x || l(n, b, p) && 0 !== r(n, b), v = () => !x || 0 === r(o, p) || l(o, b, p);
                for (let t = c, i = c; t <= d; ++t) m = e[t % a], m.skip || (p = h(m[s]), p !== b && (x = l(p, n, o), 
                null === _ && y() && (_ = 0 === r(p, n) ? t : i), null !== _ && v() && (g.push(Ei({
                    start: _,
                    end: t,
                    loop: u,
                    count: a,
                    style: f
                })), _ = null), i = t, b = p));
                return null !== _ && g.push(Ei({
                    start: _,
                    end: d,
                    loop: u,
                    count: a,
                    style: f
                })), g;
            }
            function Ii(t, e) {
                const i = [], s = t.segments;
                for (let n = 0; n < s.length; n++) {
                    const o = Ri(s[n], t.points, e);
                    o.length && i.push(...o);
                }
                return i;
            }
            function zi(t, e) {
                const i = t.points, s = t.options.spanGaps, n = i.length;
                if (!n) return [];
                const o = !!t._loop, {start: a, end: r} = function(t, e, i, s) {
                    let n = 0, o = e - 1;
                    if (i && !s) for (;n < e && !t[n].skip; ) n++;
                    for (;n < e && t[n].skip; ) n++;
                    for (n %= e, i && (o += n); o > n && t[o % e].skip; ) o--;
                    return o %= e, {
                        start: n,
                        end: o
                    };
                }(i, n, o, s);
                if (!0 === s) return Fi(t, [ {
                    start: a,
                    end: r,
                    loop: o
                } ], i, e);
                return Fi(t, function(t, e, i, s) {
                    const n = t.length, o = [];
                    let a, r = e, l = t[e];
                    for (a = e + 1; a <= i; ++a) {
                        const i = t[a % n];
                        i.skip || i.stop ? l.skip || (s = !1, o.push({
                            start: e % n,
                            end: (a - 1) % n,
                            loop: s
                        }), e = r = i.stop ? a : null) : (r = a, l.skip && (e = a)), l = i;
                    }
                    return null !== r && o.push({
                        start: e % n,
                        end: r % n,
                        loop: s
                    }), o;
                }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e);
            }
            function Fi(t, e, i, s) {
                return s && s.setContext && i ? function(t, e, i, s) {
                    const n = t._chart.getContext(), o = Vi(t.options), {_datasetIndex: a, options: {spanGaps: r}} = t, l = i.length, h = [];
                    let c = o, d = e[0].start, u = d;
                    function f(t, e, s, n) {
                        const o = r ? -1 : 1;
                        if (t !== e) {
                            for (t += l; i[t % l].skip; ) t -= o;
                            for (;i[e % l].skip; ) e += o;
                            t % l != e % l && (h.push({
                                start: t % l,
                                end: e % l,
                                loop: s,
                                style: n
                            }), c = n, d = e % l);
                        }
                    }
                    for (const t of e) {
                        d = r ? d : t.start;
                        let e, o = i[d % l];
                        for (u = d + 1; u <= t.end; u++) {
                            const r = i[u % l];
                            e = Vi(s.setContext(Ci(n, {
                                type: "segment",
                                p0: o,
                                p1: r,
                                p0DataIndex: (u - 1) % l,
                                p1DataIndex: u % l,
                                datasetIndex: a
                            }))), Bi(e, c) && f(d, u - 1, t.loop, c), o = r, c = e;
                        }
                        d < u - 1 && f(d, u - 1, t.loop, c);
                    }
                    return h;
                }(t, e, i, s) : e;
            }
            function Vi(t) {
                return {
                    backgroundColor: t.backgroundColor,
                    borderCapStyle: t.borderCapStyle,
                    borderDash: t.borderDash,
                    borderDashOffset: t.borderDashOffset,
                    borderJoinStyle: t.borderJoinStyle,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor
                };
            }
            function Bi(t, e) {
                if (!e) return !1;
                const i = [], s = function(t, e) {
                    return Jt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
                };
                return JSON.stringify(t, s) !== JSON.stringify(e, s);
            }
            var Wi = Object.freeze({
                __proto__: null,
                HALF_PI: E,
                INFINITY: T,
                PI: C,
                PITAU: A,
                QUARTER_PI: R,
                RAD_PER_DEG: L,
                TAU: O,
                TWO_THIRDS_PI: I,
                _addGrace: Di,
                _alignPixel: Ae,
                _alignStartEnd: ft,
                _angleBetween: Z,
                _angleDiff: K,
                _arrayUnique: lt,
                _attachContext: $e,
                _bezierCurveTo: Ve,
                _bezierInterpolation: mi,
                _boundSegment: Ri,
                _boundSegments: Ii,
                _capitalize: w,
                _computeSegments: zi,
                _createResolver: je,
                _decimalPlaces: U,
                _deprecated: function(t, e, i, s) {
                    void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead');
                },
                _descriptors: Ye,
                _elementsEqual: f,
                _factorize: W,
                _filterBetween: nt,
                _getParentNode: ge,
                _getStartAndCountOfVisiblePoints: pt,
                _int16Range: Q,
                _isBetween: tt,
                _isClickEvent: D,
                _isDomSupported: fe,
                _isPointInArea: Re,
                _limitValue: J,
                _longestText: Oe,
                _lookup: et,
                _lookupByKey: it,
                _measureText: Ce,
                _merger: m,
                _mergerIf: _,
                _normalizeAngle: G,
                _parseObjectDataRadialScale: ii,
                _pointInLine: gi,
                _readValueToProps: vi,
                _rlookupByKey: st,
                _scaleRangesChanged: mt,
                _setMinAndMaxByKey: j,
                _splitKey: v,
                _steppedInterpolation: pi,
                _steppedLineTo: Fe,
                _textX: gt,
                _toLeftRightCenter: ut,
                _updateBezierControlPoints: hi,
                addRoundedRectPath: He,
                almostEquals: V,
                almostWhole: H,
                callback: d,
                clearCanvas: Te,
                clipArea: Ie,
                clone: g,
                color: Qt,
                createContext: Ci,
                debounce: dt,
                defined: k,
                distanceBetweenPoints: q,
                drawPoint: Le,
                drawPointLegend: Ee,
                each: u,
                easingEffects: fi,
                finiteOrDefault: r,
                fontString: function(t, e, i) {
                    return e + " " + t + "px " + i;
                },
                formatNumber: ne,
                getAngleFromPoint: X,
                getHoverColor: te,
                getMaximumSize: we,
                getRelativePosition: ve,
                getRtlAdapter: Oi,
                getStyle: be,
                isArray: n,
                isFinite: a,
                isFunction: S,
                isNullOrUndef: s,
                isNumber: N,
                isObject: o,
                isPatternOrGradient: Jt,
                listenArrayEvents: at,
                log10: z,
                merge: b,
                mergeIf: x,
                niceNum: B,
                noop: e,
                overrideTextDirection: Ai,
                readUsedSize: Pe,
                renderText: Ne,
                requestAnimFrame: ht,
                resolve: Pi,
                resolveObjectKey: M,
                restoreTextDirection: Ti,
                retinaScale: ke,
                setsEqual: P,
                sign: F,
                splineCurve: ai,
                splineCurveMonotone: ri,
                supportsEventListenerOptions: Se,
                throttled: ct,
                toDegrees: Y,
                toDimension: c,
                toFont: Si,
                toFontString: De,
                toLineHeight: _i,
                toPadding: ki,
                toPercentage: h,
                toRadians: $,
                toTRBL: Mi,
                toTRBLCorners: wi,
                uid: i,
                unclipArea: ze,
                unlistenArrayEvents: rt,
                valueOrDefault: l
            });
            function Ni(t, e, i, s) {
                const {controller: n, data: o, _sorted: a} = t, r = n._cachedMeta.iScale;
                if (r && e === r.axis && "r" !== e && a && o.length) {
                    const t = r._reversePixels ? st : it;
                    if (!s) return t(o, e, i);
                    if (n._sharedOptions) {
                        const s = o[0], n = "function" == typeof s.getRange && s.getRange(e);
                        if (n) {
                            const s = t(o, e, i - n), a = t(o, e, i + n);
                            return {
                                lo: s.lo,
                                hi: a.hi
                            };
                        }
                    }
                }
                return {
                    lo: 0,
                    hi: o.length - 1
                };
            }
            function Hi(t, e, i, s, n) {
                const o = t.getSortedVisibleDatasetMetas(), a = i[e];
                for (let t = 0, i = o.length; t < i; ++t) {
                    const {index: i, data: r} = o[t], {lo: l, hi: h} = Ni(o[t], e, a, n);
                    for (let t = l; t <= h; ++t) {
                        const e = r[t];
                        e.skip || s(e, i, t);
                    }
                }
            }
            function ji(t, e, i, s, n) {
                const o = [];
                if (!n && !t.isPointInArea(e)) return o;
                return Hi(t, i, e, (function(i, a, r) {
                    (n || Re(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({
                        element: i,
                        datasetIndex: a,
                        index: r
                    });
                }), !0), o;
            }
            function $i(t, e, i, s, n, o) {
                let a = [];
                const r = function(t) {
                    const e = -1 !== t.indexOf("x"), i = -1 !== t.indexOf("y");
                    return function(t, s) {
                        const n = e ? Math.abs(t.x - s.x) : 0, o = i ? Math.abs(t.y - s.y) : 0;
                        return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
                    };
                }(i);
                let l = Number.POSITIVE_INFINITY;
                return Hi(t, i, e, (function(i, h, c) {
                    const d = i.inRange(e.x, e.y, n);
                    if (s && !d) return;
                    const u = i.getCenterPoint(n);
                    if (!(!!o || t.isPointInArea(u)) && !d) return;
                    const f = r(e, u);
                    f < l ? (a = [ {
                        element: i,
                        datasetIndex: h,
                        index: c
                    } ], l = f) : f === l && a.push({
                        element: i,
                        datasetIndex: h,
                        index: c
                    });
                })), a;
            }
            function Yi(t, e, i, s, n, o) {
                return o || t.isPointInArea(e) ? "r" !== i || s ? $i(t, e, i, s, n, o) : function(t, e, i, s) {
                    let n = [];
                    return Hi(t, i, e, (function(t, i, o) {
                        const {startAngle: a, endAngle: r} = t.getProps([ "startAngle", "endAngle" ], s), {angle: l} = X(t, {
                            x: e.x,
                            y: e.y
                        });
                        Z(l, a, r) && n.push({
                            element: t,
                            datasetIndex: i,
                            index: o
                        });
                    })), n;
                }(t, e, i, n) : [];
            }
            function Ui(t, e, i, s, n) {
                const o = [], a = "x" === i ? "inXRange" : "inYRange";
                let r = !1;
                return Hi(t, i, e, ((t, s, l) => {
                    t[a](e[i], n) && (o.push({
                        element: t,
                        datasetIndex: s,
                        index: l
                    }), r = r || t.inRange(e.x, e.y, n));
                })), s && !r ? [] : o;
            }
            var Xi = {
                evaluateInteractionItems: Hi,
                modes: {
                    index(t, e, i, s) {
                        const n = ve(e, t), o = i.axis || "x", a = i.includeInvisible || !1, r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a), l = [];
                        return r.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                            const e = r[0].index, i = t.data[e];
                            i && !i.skip && l.push({
                                element: i,
                                datasetIndex: t.index,
                                index: e
                            });
                        })), l) : [];
                    },
                    dataset(t, e, i, s) {
                        const n = ve(e, t), o = i.axis || "xy", a = i.includeInvisible || !1;
                        let r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a);
                        if (r.length > 0) {
                            const e = r[0].datasetIndex, i = t.getDatasetMeta(e).data;
                            r = [];
                            for (let t = 0; t < i.length; ++t) r.push({
                                element: i[t],
                                datasetIndex: e,
                                index: t
                            });
                        }
                        return r;
                    },
                    point: (t, e, i, s) => ji(t, ve(e, t), i.axis || "xy", s, i.includeInvisible || !1),
                    nearest(t, e, i, s) {
                        const n = ve(e, t), o = i.axis || "xy", a = i.includeInvisible || !1;
                        return Yi(t, n, o, i.intersect, s, a);
                    },
                    x: (t, e, i, s) => Ui(t, ve(e, t), "x", i.intersect, s),
                    y: (t, e, i, s) => Ui(t, ve(e, t), "y", i.intersect, s)
                }
            };
            const qi = [ "left", "top", "right", "bottom" ];
            function Ki(t, e) {
                return t.filter((t => t.pos === e));
            }
            function Gi(t, e) {
                return t.filter((t => -1 === qi.indexOf(t.pos) && t.box.axis === e));
            }
            function Zi(t, e) {
                return t.sort(((t, i) => {
                    const s = e ? i : t, n = e ? t : i;
                    return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
                }));
            }
            function Ji(t, e) {
                const i = function(t) {
                    const e = {};
                    for (const i of t) {
                        const {stack: t, pos: s, stackWeight: n} = i;
                        if (!t || !qi.includes(s)) continue;
                        const o = e[t] || (e[t] = {
                            count: 0,
                            placed: 0,
                            weight: 0,
                            size: 0
                        });
                        o.count++, o.weight += n;
                    }
                    return e;
                }(t), {vBoxMaxWidth: s, hBoxMaxHeight: n} = e;
                let o, a, r;
                for (o = 0, a = t.length; o < a; ++o) {
                    r = t[o];
                    const {fullSize: a} = r.box, l = i[r.stack], h = l && r.stackWeight / l.weight;
                    r.horizontal ? (r.width = h ? h * s : a && e.availableWidth, r.height = n) : (r.width = s, 
                    r.height = h ? h * n : a && e.availableHeight);
                }
                return i;
            }
            function Qi(t, e, i, s) {
                return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
            }
            function ts(t, e) {
                t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), 
                t.right = Math.max(t.right, e.right);
            }
            function es(t, e, i, s) {
                const {pos: n, box: a} = i, r = t.maxPadding;
                if (!o(n)) {
                    i.size && (t[n] -= i.size);
                    const e = s[i.stack] || {
                        size: 0,
                        count: 1
                    };
                    e.size = Math.max(e.size, i.horizontal ? a.height : a.width), i.size = e.size / e.count, 
                    t[n] += i.size;
                }
                a.getPadding && ts(r, a.getPadding());
                const l = Math.max(0, e.outerWidth - Qi(r, t, "left", "right")), h = Math.max(0, e.outerHeight - Qi(r, t, "top", "bottom")), c = l !== t.w, d = h !== t.h;
                return t.w = l, t.h = h, i.horizontal ? {
                    same: c,
                    other: d
                } : {
                    same: d,
                    other: c
                };
            }
            function is(t, e) {
                const i = e.maxPadding;
                function s(t) {
                    const s = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    return t.forEach((t => {
                        s[t] = Math.max(e[t], i[t]);
                    })), s;
                }
                return s(t ? [ "left", "right" ] : [ "top", "bottom" ]);
            }
            function ss(t, e, i, s) {
                const n = [];
                let o, a, r, l, h, c;
                for (o = 0, a = t.length, h = 0; o < a; ++o) {
                    r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, is(r.horizontal, e));
                    const {same: a, other: d} = es(e, i, r, s);
                    h |= a && n.length, c = c || d, l.fullSize || n.push(r);
                }
                return h && ss(n, e, i, s) || c;
            }
            function ns(t, e, i, s, n) {
                t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n;
            }
            function os(t, e, i, s) {
                const n = i.padding;
                let {x: o, y: a} = e;
                for (const r of t) {
                    const t = r.box, l = s[r.stack] || {
                        count: 1,
                        placed: 0,
                        weight: 1
                    }, h = r.stackWeight / l.weight || 1;
                    if (r.horizontal) {
                        const s = e.w * h, o = l.size || t.height;
                        k(l.start) && (a = l.start), t.fullSize ? ns(t, n.left, a, i.outerWidth - n.right - n.left, o) : ns(t, e.left + l.placed, a, s, o), 
                        l.start = a, l.placed += s, a = t.bottom;
                    } else {
                        const s = e.h * h, a = l.size || t.width;
                        k(l.start) && (o = l.start), t.fullSize ? ns(t, o, n.top, a, i.outerHeight - n.bottom - n.top) : ns(t, o, e.top + l.placed, a, s), 
                        l.start = o, l.placed += s, o = t.right;
                    }
                }
                e.x = o, e.y = a;
            }
            var as = {
                addBox(t, e) {
                    t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", 
                    e.weight = e.weight || 0, e._layers = e._layers || function() {
                        return [ {
                            z: 0,
                            draw(t) {
                                e.draw(t);
                            }
                        } ];
                    }, t.boxes.push(e);
                },
                removeBox(t, e) {
                    const i = t.boxes ? t.boxes.indexOf(e) : -1;
                    -1 !== i && t.boxes.splice(i, 1);
                },
                configure(t, e, i) {
                    e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight;
                },
                update(t, e, i, s) {
                    if (!t) return;
                    const n = ki(t.options.layout.padding), o = Math.max(e - n.width, 0), a = Math.max(i - n.height, 0), r = function(t) {
                        const e = function(t) {
                            const e = [];
                            let i, s, n, o, a, r;
                            for (i = 0, s = (t || []).length; i < s; ++i) n = t[i], ({position: o, options: {stack: a, stackWeight: r = 1}} = n), 
                            e.push({
                                index: i,
                                box: n,
                                pos: o,
                                horizontal: n.isHorizontal(),
                                weight: n.weight,
                                stack: a && o + a,
                                stackWeight: r
                            });
                            return e;
                        }(t), i = Zi(e.filter((t => t.box.fullSize)), !0), s = Zi(Ki(e, "left"), !0), n = Zi(Ki(e, "right")), o = Zi(Ki(e, "top"), !0), a = Zi(Ki(e, "bottom")), r = Gi(e, "x"), l = Gi(e, "y");
                        return {
                            fullSize: i,
                            leftAndTop: s.concat(o),
                            rightAndBottom: n.concat(l).concat(a).concat(r),
                            chartArea: Ki(e, "chartArea"),
                            vertical: s.concat(n).concat(l),
                            horizontal: o.concat(a).concat(r)
                        };
                    }(t.boxes), l = r.vertical, h = r.horizontal;
                    u(t.boxes, (t => {
                        "function" == typeof t.beforeLayout && t.beforeLayout();
                    }));
                    const c = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1, d = Object.freeze({
                        outerWidth: e,
                        outerHeight: i,
                        padding: n,
                        availableWidth: o,
                        availableHeight: a,
                        vBoxMaxWidth: o / 2 / c,
                        hBoxMaxHeight: a / 2
                    }), f = Object.assign({}, n);
                    ts(f, ki(s));
                    const g = Object.assign({
                        maxPadding: f,
                        w: o,
                        h: a,
                        x: n.left,
                        y: n.top
                    }, n), p = Ji(l.concat(h), d);
                    ss(r.fullSize, g, d, p), ss(l, g, d, p), ss(h, g, d, p) && ss(l, g, d, p), function(t) {
                        const e = t.maxPadding;
                        function i(i) {
                            const s = Math.max(e[i] - t[i], 0);
                            return t[i] += s, s;
                        }
                        t.y += i("top"), t.x += i("left"), i("right"), i("bottom");
                    }(g), os(r.leftAndTop, g, d, p), g.x += g.w, g.y += g.h, os(r.rightAndBottom, g, d, p), 
                    t.chartArea = {
                        left: g.left,
                        top: g.top,
                        right: g.left + g.w,
                        bottom: g.top + g.h,
                        height: g.h,
                        width: g.w
                    }, u(r.chartArea, (e => {
                        const i = e.box;
                        Object.assign(i, t.chartArea), i.update(g.w, g.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        });
                    }));
                }
            };
            class rs {
                acquireContext(t, e) {}
                releaseContext(t) {
                    return !1;
                }
                addEventListener(t, e, i) {}
                removeEventListener(t, e, i) {}
                getDevicePixelRatio() {
                    return 1;
                }
                getMaximumSize(t, e, i, s) {
                    return e = Math.max(0, e || t.width), i = i || t.height, {
                        width: e,
                        height: Math.max(0, s ? Math.floor(e / s) : i)
                    };
                }
                isAttached(t) {
                    return !0;
                }
                updateConfig(t) {}
            }
            class ls extends rs {
                acquireContext(t) {
                    return t && t.getContext && t.getContext("2d") || null;
                }
                updateConfig(t) {
                    t.options.animation = !1;
                }
            }
            const hs = "$chartjs", cs = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            }, ds = t => null === t || "" === t;
            const us = !!Se && {
                passive: !0
            };
            function fs(t, e, i) {
                t && t.canvas && t.canvas.removeEventListener(e, i, us);
            }
            function gs(t, e) {
                for (const i of t) if (i === e || i.contains(e)) return !0;
            }
            function ps(t, e, i) {
                const s = t.canvas, n = new MutationObserver((t => {
                    let e = !1;
                    for (const i of t) e = e || gs(i.addedNodes, s), e = e && !gs(i.removedNodes, s);
                    e && i();
                }));
                return n.observe(document, {
                    childList: !0,
                    subtree: !0
                }), n;
            }
            function ms(t, e, i) {
                const s = t.canvas, n = new MutationObserver((t => {
                    let e = !1;
                    for (const i of t) e = e || gs(i.removedNodes, s), e = e && !gs(i.addedNodes, s);
                    e && i();
                }));
                return n.observe(document, {
                    childList: !0,
                    subtree: !0
                }), n;
            }
            const bs = new Map;
            let xs = 0;
            function _s() {
                const t = window.devicePixelRatio;
                t !== xs && (xs = t, bs.forEach(((e, i) => {
                    i.currentDevicePixelRatio !== t && e();
                })));
            }
            function ys(t, e, i) {
                const s = t.canvas, n = s && ge(s);
                if (!n) return;
                const o = ct(((t, e) => {
                    const s = n.clientWidth;
                    i(t, e), s < n.clientWidth && i();
                }), window), a = new ResizeObserver((t => {
                    const e = t[0], i = e.contentRect.width, s = e.contentRect.height;
                    0 === i && 0 === s || o(i, s);
                }));
                return a.observe(n), function(t, e) {
                    bs.size || window.addEventListener("resize", _s), bs.set(t, e);
                }(t, o), a;
            }
            function vs(t, e, i) {
                i && i.disconnect(), "resize" === e && function(t) {
                    bs.delete(t), bs.size || window.removeEventListener("resize", _s);
                }(t);
            }
            function Ms(t, e, i) {
                const s = t.canvas, n = ct((e => {
                    null !== t.ctx && i(function(t, e) {
                        const i = cs[t.type] || t.type, {x: s, y: n} = ve(t, e);
                        return {
                            type: i,
                            chart: e,
                            native: t,
                            x: void 0 !== s ? s : null,
                            y: void 0 !== n ? n : null
                        };
                    }(e, t));
                }), t);
                return function(t, e, i) {
                    t && t.addEventListener(e, i, us);
                }(s, e, n), n;
            }
            class ws extends rs {
                acquireContext(t, e) {
                    const i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function(t, e) {
                        const i = t.style, s = t.getAttribute("height"), n = t.getAttribute("width");
                        if (t[hs] = {
                            initial: {
                                height: s,
                                width: n,
                                style: {
                                    display: i.display,
                                    height: i.height,
                                    width: i.width
                                }
                            }
                        }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", 
                        ds(n)) {
                            const e = Pe(t, "width");
                            void 0 !== e && (t.width = e);
                        }
                        if (ds(s)) if ("" === t.style.height) t.height = t.width / (e || 2); else {
                            const e = Pe(t, "height");
                            void 0 !== e && (t.height = e);
                        }
                    }(t, e), i) : null;
                }
                releaseContext(t) {
                    const e = t.canvas;
                    if (!e[hs]) return !1;
                    const i = e[hs].initial;
                    [ "height", "width" ].forEach((t => {
                        const n = i[t];
                        s(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
                    }));
                    const n = i.style || {};
                    return Object.keys(n).forEach((t => {
                        e.style[t] = n[t];
                    })), e.width = e.width, delete e[hs], !0;
                }
                addEventListener(t, e, i) {
                    this.removeEventListener(t, e);
                    const s = t.$proxies || (t.$proxies = {}), n = {
                        attach: ps,
                        detach: ms,
                        resize: ys
                    }[e] || Ms;
                    s[e] = n(t, e, i);
                }
                removeEventListener(t, e) {
                    const i = t.$proxies || (t.$proxies = {}), s = i[e];
                    if (!s) return;
                    ({
                        attach: vs,
                        detach: vs,
                        resize: vs
                    }[e] || fs)(t, e, s), i[e] = void 0;
                }
                getDevicePixelRatio() {
                    return window.devicePixelRatio;
                }
                getMaximumSize(t, e, i, s) {
                    return we(t, e, i, s);
                }
                isAttached(t) {
                    const e = ge(t);
                    return !(!e || !e.isConnected);
                }
            }
            function ks(t) {
                return !fe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ls : ws;
            }
            var Ss = Object.freeze({
                __proto__: null,
                BasePlatform: rs,
                BasicPlatform: ls,
                DomPlatform: ws,
                _detectPlatform: ks
            });
            const Ps = "transparent", Ds = {
                boolean: (t, e, i) => i > .5 ? e : t,
                color(t, e, i) {
                    const s = Qt(t || Ps), n = s.valid && Qt(e || Ps);
                    return n && n.valid ? n.mix(s, i).hexString() : e;
                },
                number: (t, e, i) => t + (e - t) * i
            };
            class Cs {
                constructor(t, e, i, s) {
                    const n = e[i];
                    s = Pi([ t.to, s, n, t.from ]);
                    const o = Pi([ t.from, n, s ]);
                    this._active = !0, this._fn = t.fn || Ds[t.type || typeof o], this._easing = fi[t.easing] || fi.linear, 
                    this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), 
                    this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, 
                    this._promises = void 0;
                }
                active() {
                    return this._active;
                }
                update(t, e, i) {
                    if (this._active) {
                        this._notify(!1);
                        const s = this._target[this._prop], n = i - this._start, o = this._duration - n;
                        this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += n, 
                        this._loop = !!t.loop, this._to = Pi([ t.to, e, s, t.from ]), this._from = Pi([ t.from, s, e ]);
                    }
                }
                cancel() {
                    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
                }
                tick(t) {
                    const e = t - this._start, i = this._duration, s = this._prop, n = this._from, o = this._loop, a = this._to;
                    let r;
                    if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, 
                    void this._notify(!0);
                    e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), 
                    this._target[s] = this._fn(n, a, r));
                }
                wait() {
                    const t = this._promises || (this._promises = []);
                    return new Promise(((e, i) => {
                        t.push({
                            res: e,
                            rej: i
                        });
                    }));
                }
                _notify(t) {
                    const e = t ? "res" : "rej", i = this._promises || [];
                    for (let t = 0; t < i.length; t++) i[t][e]();
                }
            }
            class Os {
                constructor(t, e) {
                    this._chart = t, this._properties = new Map, this.configure(e);
                }
                configure(t) {
                    if (!o(t)) return;
                    const e = Object.keys(ue.animation), i = this._properties;
                    Object.getOwnPropertyNames(t).forEach((s => {
                        const a = t[s];
                        if (!o(a)) return;
                        const r = {};
                        for (const t of e) r[t] = a[t];
                        (n(a.properties) && a.properties || [ s ]).forEach((t => {
                            t !== s && i.has(t) || i.set(t, r);
                        }));
                    }));
                }
                _animateOptions(t, e) {
                    const i = e.options, s = function(t, e) {
                        if (!e) return;
                        let i = t.options;
                        if (!i) return void (t.options = e);
                        i.$shared && (t.options = i = Object.assign({}, i, {
                            $shared: !1,
                            $animations: {}
                        }));
                        return i;
                    }(t, i);
                    if (!s) return [];
                    const n = this._createAnimations(s, i);
                    return i.$shared && function(t, e) {
                        const i = [], s = Object.keys(e);
                        for (let e = 0; e < s.length; e++) {
                            const n = t[s[e]];
                            n && n.active() && i.push(n.wait());
                        }
                        return Promise.all(i);
                    }(t.options.$animations, i).then((() => {
                        t.options = i;
                    }), (() => {})), n;
                }
                _createAnimations(t, e) {
                    const i = this._properties, s = [], n = t.$animations || (t.$animations = {}), o = Object.keys(e), a = Date.now();
                    let r;
                    for (r = o.length - 1; r >= 0; --r) {
                        const l = o[r];
                        if ("$" === l.charAt(0)) continue;
                        if ("options" === l) {
                            s.push(...this._animateOptions(t, e));
                            continue;
                        }
                        const h = e[l];
                        let c = n[l];
                        const d = i.get(l);
                        if (c) {
                            if (d && c.active()) {
                                c.update(d, h, a);
                                continue;
                            }
                            c.cancel();
                        }
                        d && d.duration ? (n[l] = c = new Cs(d, t, l, h), s.push(c)) : t[l] = h;
                    }
                    return s;
                }
                update(t, e) {
                    if (0 === this._properties.size) return void Object.assign(t, e);
                    const i = this._createAnimations(t, e);
                    return i.length ? (xt.add(this._chart, i), !0) : void 0;
                }
            }
            function As(t, e) {
                const i = t && t.options || {}, s = i.reverse, n = void 0 === i.min ? e : 0, o = void 0 === i.max ? e : 0;
                return {
                    start: s ? o : n,
                    end: s ? n : o
                };
            }
            function Ts(t, e) {
                const i = [], s = t._getSortedDatasetMetas(e);
                let n, o;
                for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
                return i;
            }
            function Ls(t, e, i, s = {}) {
                const n = t.keys, o = "single" === s.mode;
                let r, l, h, c;
                if (null !== e) {
                    for (r = 0, l = n.length; r < l; ++r) {
                        if (h = +n[r], h === i) {
                            if (s.all) continue;
                            break;
                        }
                        c = t.values[h], a(c) && (o || 0 === e || F(e) === F(c)) && (e += c);
                    }
                    return e;
                }
            }
            function Es(t, e) {
                const i = t && t.options.stacked;
                return i || void 0 === i && void 0 !== e.stack;
            }
            function Rs(t, e, i) {
                const s = t[e] || (t[e] = {});
                return s[i] || (s[i] = {});
            }
            function Is(t, e, i, s) {
                for (const n of e.getMatchingVisibleMetas(s).reverse()) {
                    const e = t[n.index];
                    if (i && e > 0 || !i && e < 0) return n.index;
                }
                return null;
            }
            function zs(t, e) {
                const {chart: i, _cachedMeta: s} = t, n = i._stacks || (i._stacks = {}), {iScale: o, vScale: a, index: r} = s, l = o.axis, h = a.axis, c = function(t, e, i) {
                    return `${t.id}.${e.id}.${i.stack || i.type}`;
                }(o, a, s), d = e.length;
                let u;
                for (let t = 0; t < d; ++t) {
                    const i = e[t], {[l]: o, [h]: d} = i;
                    u = (i._stacks || (i._stacks = {}))[h] = Rs(n, c, o), u[r] = d, u._top = Is(u, a, !0, s.type), 
                    u._bottom = Is(u, a, !1, s.type);
                    (u._visualValues || (u._visualValues = {}))[r] = d;
                }
            }
            function Fs(t, e) {
                const i = t.scales;
                return Object.keys(i).filter((t => i[t].axis === e)).shift();
            }
            function Vs(t, e) {
                const i = t.controller.index, s = t.vScale && t.vScale.axis;
                if (s) {
                    e = e || t._parsed;
                    for (const t of e) {
                        const e = t._stacks;
                        if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
                        delete e[s][i], void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i];
                    }
                }
            }
            const Bs = t => "reset" === t || "none" === t, Ws = (t, e) => e ? t : Object.assign({}, t);
            class Ns {
                static defaults={};
                static datasetElementType=null;
                static dataElementType=null;
                constructor(t, e) {
                    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), 
                    this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, 
                    this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, 
                    this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, 
                    this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, 
                    this.dataElementType = new.target.dataElementType, this.initialize();
                }
                initialize() {
                    const t = this._cachedMeta;
                    this.configure(), this.linkScales(), t._stacked = Es(t.vScale, t), this.addElements(), 
                    this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
                }
                updateIndex(t) {
                    this.index !== t && Vs(this._cachedMeta), this.index = t;
                }
                linkScales() {
                    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i, n = e.xAxisID = l(i.xAxisID, Fs(t, "x")), o = e.yAxisID = l(i.yAxisID, Fs(t, "y")), a = e.rAxisID = l(i.rAxisID, Fs(t, "r")), r = e.indexAxis, h = e.iAxisID = s(r, n, o, a), c = e.vAxisID = s(r, o, n, a);
                    e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), 
                    e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(c);
                }
                getDataset() {
                    return this.chart.data.datasets[this.index];
                }
                getMeta() {
                    return this.chart.getDatasetMeta(this.index);
                }
                getScaleForId(t) {
                    return this.chart.scales[t];
                }
                _getOtherScale(t) {
                    const e = this._cachedMeta;
                    return t === e.iScale ? e.vScale : e.iScale;
                }
                reset() {
                    this._update("reset");
                }
                _destroy() {
                    const t = this._cachedMeta;
                    this._data && rt(this._data, this), t._stacked && Vs(t);
                }
                _dataCheck() {
                    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
                    if (o(e)) this._data = function(t) {
                        const e = Object.keys(t), i = new Array(e.length);
                        let s, n, o;
                        for (s = 0, n = e.length; s < n; ++s) o = e[s], i[s] = {
                            x: o,
                            y: t[o]
                        };
                        return i;
                    }(e); else if (i !== e) {
                        if (i) {
                            rt(i, this);
                            const t = this._cachedMeta;
                            Vs(t), t._parsed = [];
                        }
                        e && Object.isExtensible(e) && at(e, this), this._syncList = [], this._data = e;
                    }
                }
                addElements() {
                    const t = this._cachedMeta;
                    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType);
                }
                buildOrUpdateElements(t) {
                    const e = this._cachedMeta, i = this.getDataset();
                    let s = !1;
                    this._dataCheck();
                    const n = e._stacked;
                    e._stacked = Es(e.vScale, e), e.stack !== i.stack && (s = !0, Vs(e), e.stack = i.stack), 
                    this._resyncElements(t), (s || n !== e._stacked) && zs(this, e._parsed);
                }
                configure() {
                    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
                    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, 
                    this._cachedDataOpts = {};
                }
                parse(t, e) {
                    const {_cachedMeta: i, _data: s} = this, {iScale: a, _stacked: r} = i, l = a.axis;
                    let h, c, d, u = 0 === t && e === s.length || i._sorted, f = t > 0 && i._parsed[t - 1];
                    if (!1 === this._parsing) i._parsed = s, i._sorted = !0, d = s; else {
                        d = n(s[t]) ? this.parseArrayData(i, s, t, e) : o(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
                        const a = () => null === c[l] || f && c[l] < f[l];
                        for (h = 0; h < e; ++h) i._parsed[h + t] = c = d[h], u && (a() && (u = !1), f = c);
                        i._sorted = u;
                    }
                    r && zs(this, d);
                }
                parsePrimitiveData(t, e, i, s) {
                    const {iScale: n, vScale: o} = t, a = n.axis, r = o.axis, l = n.getLabels(), h = n === o, c = new Array(s);
                    let d, u, f;
                    for (d = 0, u = s; d < u; ++d) f = d + i, c[d] = {
                        [a]: h || n.parse(l[f], f),
                        [r]: o.parse(e[f], f)
                    };
                    return c;
                }
                parseArrayData(t, e, i, s) {
                    const {xScale: n, yScale: o} = t, a = new Array(s);
                    let r, l, h, c;
                    for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
                        x: n.parse(c[0], h),
                        y: o.parse(c[1], h)
                    };
                    return a;
                }
                parseObjectData(t, e, i, s) {
                    const {xScale: n, yScale: o} = t, {xAxisKey: a = "x", yAxisKey: r = "y"} = this._parsing, l = new Array(s);
                    let h, c, d, u;
                    for (h = 0, c = s; h < c; ++h) d = h + i, u = e[d], l[h] = {
                        x: n.parse(M(u, a), d),
                        y: o.parse(M(u, r), d)
                    };
                    return l;
                }
                getParsed(t) {
                    return this._cachedMeta._parsed[t];
                }
                getDataElement(t) {
                    return this._cachedMeta.data[t];
                }
                applyStack(t, e, i) {
                    const s = this.chart, n = this._cachedMeta, o = e[t.axis];
                    return Ls({
                        keys: Ts(s, !0),
                        values: e._stacks[t.axis]._visualValues
                    }, o, n.index, {
                        mode: i
                    });
                }
                updateRangeFromParsed(t, e, i, s) {
                    const n = i[e.axis];
                    let o = null === n ? NaN : n;
                    const a = s && i._stacks[e.axis];
                    s && a && (s.values = a, o = Ls(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), 
                    t.max = Math.max(t.max, o);
                }
                getMinMax(t, e) {
                    const i = this._cachedMeta, s = i._parsed, n = i._sorted && t === i.iScale, o = s.length, r = this._getOtherScale(t), l = ((t, e, i) => t && !e.hidden && e._stacked && {
                        keys: Ts(i, !0),
                        values: null
                    })(e, i, this.chart), h = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY
                    }, {min: c, max: d} = function(t) {
                        const {min: e, max: i, minDefined: s, maxDefined: n} = t.getUserBounds();
                        return {
                            min: s ? e : Number.NEGATIVE_INFINITY,
                            max: n ? i : Number.POSITIVE_INFINITY
                        };
                    }(r);
                    let u, f;
                    function g() {
                        f = s[u];
                        const e = f[r.axis];
                        return !a(f[t.axis]) || c > e || d < e;
                    }
                    for (u = 0; u < o && (g() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++u) ;
                    if (n) for (u = o - 1; u >= 0; --u) if (!g()) {
                        this.updateRangeFromParsed(h, t, f, l);
                        break;
                    }
                    return h;
                }
                getAllParsedValues(t) {
                    const e = this._cachedMeta._parsed, i = [];
                    let s, n, o;
                    for (s = 0, n = e.length; s < n; ++s) o = e[s][t.axis], a(o) && i.push(o);
                    return i;
                }
                getMaxOverflow() {
                    return !1;
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta, i = e.iScale, s = e.vScale, n = this.getParsed(t);
                    return {
                        label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
                        value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
                    };
                }
                _update(t) {
                    const e = this._cachedMeta;
                    this.update(t || "default"), e._clip = function(t) {
                        let e, i, s, n;
                        return o(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, 
                        {
                            top: e,
                            right: i,
                            bottom: s,
                            left: n,
                            disabled: !1 === t
                        };
                    }(l(this.options.clip, function(t, e, i) {
                        if (!1 === i) return !1;
                        const s = As(t, i), n = As(e, i);
                        return {
                            top: n.end,
                            right: s.end,
                            bottom: n.start,
                            left: s.start
                        };
                    }(e.xScale, e.yScale, this.getMaxOverflow())));
                }
                update(t) {}
                draw() {
                    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], n = e.chartArea, o = [], a = this._drawStart || 0, r = this._drawCount || s.length - a, l = this.options.drawActiveElementsOnTop;
                    let h;
                    for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) {
                        const e = s[h];
                        e.hidden || (e.active && l ? o.push(e) : e.draw(t, n));
                    }
                    for (h = 0; h < o.length; ++h) o[h].draw(t, n);
                }
                getStyle(t, e) {
                    const i = e ? "active" : "default";
                    return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
                }
                getContext(t, e, i) {
                    const s = this.getDataset();
                    let n;
                    if (t >= 0 && t < this._cachedMeta.data.length) {
                        const e = this._cachedMeta.data[t];
                        n = e.$context || (e.$context = function(t, e, i) {
                            return Ci(t, {
                                active: !1,
                                dataIndex: e,
                                parsed: void 0,
                                raw: void 0,
                                element: i,
                                index: e,
                                mode: "default",
                                type: "data"
                            });
                        }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t;
                    } else n = this.$context || (this.$context = function(t, e) {
                        return Ci(t, {
                            active: !1,
                            dataset: void 0,
                            datasetIndex: e,
                            index: e,
                            mode: "default",
                            type: "dataset"
                        });
                    }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index;
                    return n.active = !!e, n.mode = i, n;
                }
                resolveDatasetElementOptions(t) {
                    return this._resolveElementOptions(this.datasetElementType.id, t);
                }
                resolveDataElementOptions(t, e) {
                    return this._resolveElementOptions(this.dataElementType.id, e, t);
                }
                _resolveElementOptions(t, e = "default", i) {
                    const s = "active" === e, n = this._cachedDataOpts, o = t + "-" + e, a = n[o], r = this.enableOptionSharing && k(i);
                    if (a) return Ws(a, r);
                    const l = this.chart.config, h = l.datasetElementScopeKeys(this._type, t), c = s ? [ `${t}Hover`, "hover", t, "" ] : [ t, "" ], d = l.getOptionScopes(this.getDataset(), h), u = Object.keys(ue.elements[t]), f = l.resolveNamedOptions(d, u, (() => this.getContext(i, s, e)), c);
                    return f.$shared && (f.$shared = r, n[o] = Object.freeze(Ws(f, r))), f;
                }
                _resolveAnimations(t, e, i) {
                    const s = this.chart, n = this._cachedDataOpts, o = `animation-${e}`, a = n[o];
                    if (a) return a;
                    let r;
                    if (!1 !== s.options.animation) {
                        const s = this.chart.config, n = s.datasetAnimationScopeKeys(this._type, e), o = s.getOptionScopes(this.getDataset(), n);
                        r = s.createResolver(o, this.getContext(t, i, e));
                    }
                    const l = new Os(s, r && r.animations);
                    return r && r._cacheable && (n[o] = Object.freeze(l)), l;
                }
                getSharedOptions(t) {
                    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
                }
                includeOptions(t, e) {
                    return !e || Bs(t) || this.chart._animationsDisabled;
                }
                _getSharedOptions(t, e) {
                    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, n = this.getSharedOptions(i), o = this.includeOptions(e, n) || n !== s;
                    return this.updateSharedOptions(n, e, i), {
                        sharedOptions: n,
                        includeOptions: o
                    };
                }
                updateElement(t, e, i, s) {
                    Bs(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
                }
                updateSharedOptions(t, e, i) {
                    t && !Bs(e) && this._resolveAnimations(void 0, e).update(t, i);
                }
                _setStyle(t, e, i, s) {
                    t.active = s;
                    const n = this.getStyle(e, s);
                    this._resolveAnimations(e, i, s).update(t, {
                        options: !s && this.getSharedOptions(n) || n
                    });
                }
                removeHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !1);
                }
                setHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !0);
                }
                _removeDatasetHoverStyle() {
                    const t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !1);
                }
                _setDatasetHoverStyle() {
                    const t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !0);
                }
                _resyncElements(t) {
                    const e = this._data, i = this._cachedMeta.data;
                    for (const [t, e, i] of this._syncList) this[t](e, i);
                    this._syncList = [];
                    const s = i.length, n = e.length, o = Math.min(n, s);
                    o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n);
                }
                _insertElements(t, e, i = !0) {
                    const s = this._cachedMeta, n = s.data, o = t + e;
                    let a;
                    const r = t => {
                        for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
                    };
                    for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType;
                    this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset");
                }
                updateElements(t, e, i, s) {}
                _removeElements(t, e) {
                    const i = this._cachedMeta;
                    if (this._parsing) {
                        const s = i._parsed.splice(t, e);
                        i._stacked && Vs(i, s);
                    }
                    i.data.splice(t, e);
                }
                _sync(t) {
                    if (this._parsing) this._syncList.push(t); else {
                        const [e, i, s] = t;
                        this[e](i, s);
                    }
                    this.chart._dataChanges.push([ this.index, ...t ]);
                }
                _onDataPush() {
                    const t = arguments.length;
                    this._sync([ "_insertElements", this.getDataset().data.length - t, t ]);
                }
                _onDataPop() {
                    this._sync([ "_removeElements", this._cachedMeta.data.length - 1, 1 ]);
                }
                _onDataShift() {
                    this._sync([ "_removeElements", 0, 1 ]);
                }
                _onDataSplice(t, e) {
                    e && this._sync([ "_removeElements", t, e ]);
                    const i = arguments.length - 2;
                    i && this._sync([ "_insertElements", t, i ]);
                }
                _onDataUnshift() {
                    this._sync([ "_insertElements", 0, arguments.length ]);
                }
            }
            class Hs {
                static defaults={};
                static defaultRoutes=void 0;
                x;
                y;
                active=!1;
                options;
                $animations;
                tooltipPosition(t) {
                    const {x: e, y: i} = this.getProps([ "x", "y" ], t);
                    return {
                        x: e,
                        y: i
                    };
                }
                hasValue() {
                    return N(this.x) && N(this.y);
                }
                getProps(t, e) {
                    const i = this.$animations;
                    if (!e || !i) return this;
                    const s = {};
                    return t.forEach((t => {
                        s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
                    })), s;
                }
            }
            function js(t, e) {
                const i = t.options.ticks, n = function(t) {
                    const e = t.options.offset, i = t._tickSize(), s = t._length / i + (e ? 0 : 1), n = t._maxLength / i;
                    return Math.floor(Math.min(s, n));
                }(t), o = Math.min(i.maxTicksLimit || n, n), a = i.major.enabled ? function(t) {
                    const e = [];
                    let i, s;
                    for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                    return e;
                }(e) : [], r = a.length, l = a[0], h = a[r - 1], c = [];
                if (r > o) return function(t, e, i, s) {
                    let n, o = 0, a = i[0];
                    for (s = Math.ceil(s), n = 0; n < t.length; n++) n === a && (e.push(t[n]), o++, 
                    a = i[o * s]);
                }(e, c, a, r / o), c;
                const d = function(t, e, i) {
                    const s = function(t) {
                        const e = t.length;
                        let i, s;
                        if (e < 2) return !1;
                        for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
                        return s;
                    }(t), n = e.length / i;
                    if (!s) return Math.max(n, 1);
                    const o = W(s);
                    for (let t = 0, e = o.length - 1; t < e; t++) {
                        const e = o[t];
                        if (e > n) return e;
                    }
                    return Math.max(n, 1);
                }(a, e, o);
                if (r > 0) {
                    let t, i;
                    const n = r > 1 ? Math.round((h - l) / (r - 1)) : null;
                    for ($s(e, c, d, s(n) ? 0 : l - n, l), t = 0, i = r - 1; t < i; t++) $s(e, c, d, a[t], a[t + 1]);
                    return $s(e, c, d, h, s(n) ? e.length : h + n), c;
                }
                return $s(e, c, d), c;
            }
            function $s(t, e, i, s, n) {
                const o = l(s, 0), a = Math.min(l(n, t.length), t.length);
                let r, h, c, d = 0;
                for (i = Math.ceil(i), n && (r = n - s, i = r / Math.floor(r / i)), c = o; c < 0; ) d++, 
                c = Math.round(o + d * i);
                for (h = Math.max(o, 0); h < a; h++) h === c && (e.push(t[h]), d++, c = Math.round(o + d * i));
            }
            const Ys = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i, Us = (t, e) => Math.min(e || t, t);
            function Xs(t, e) {
                const i = [], s = t.length / e, n = t.length;
                let o = 0;
                for (;o < n; o += s) i.push(t[Math.floor(o)]);
                return i;
            }
            function qs(t, e, i) {
                const s = t.ticks.length, n = Math.min(e, s - 1), o = t._startPixel, a = t._endPixel, r = 1e-6;
                let l, h = t.getPixelForTick(n);
                if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, 
                h += n < e ? l : -l, h < o - r || h > a + r))) return h;
            }
            function Ks(t) {
                return t.drawTicks ? t.tickLength : 0;
            }
            function Gs(t, e) {
                if (!t.display) return 0;
                const i = Si(t.font, e), s = ki(t.padding);
                return (n(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
            }
            function Zs(t, e, i) {
                let s = ut(t);
                return (i && "right" !== e || !i && "right" === e) && (s = (t => "left" === t ? "right" : "right" === t ? "left" : t)(s)), 
                s;
            }
            class Js extends Hs {
                constructor(t) {
                    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, 
                    this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, 
                    this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, 
                    this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, 
                    this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, 
                    this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, 
                    this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, 
                    this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, 
                    this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, 
                    this._dataLimitsCached = !1, this.$context = void 0;
                }
                init(t) {
                    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), 
                    this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), 
                    this._suggestedMax = this.parse(t.suggestedMax);
                }
                parse(t, e) {
                    return t;
                }
                getUserBounds() {
                    let {_userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s} = this;
                    return t = r(t, Number.POSITIVE_INFINITY), e = r(e, Number.NEGATIVE_INFINITY), i = r(i, Number.POSITIVE_INFINITY), 
                    s = r(s, Number.NEGATIVE_INFINITY), {
                        min: r(t, i),
                        max: r(e, s),
                        minDefined: a(t),
                        maxDefined: a(e)
                    };
                }
                getMinMax(t) {
                    let e, {min: i, max: s, minDefined: n, maxDefined: o} = this.getUserBounds();
                    if (n && o) return {
                        min: i,
                        max: s
                    };
                    const a = this.getMatchingVisibleMetas();
                    for (let r = 0, l = a.length; r < l; ++r) e = a[r].controller.getMinMax(this, t), 
                    n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max));
                    return i = o && i > s ? s : i, s = n && i > s ? i : s, {
                        min: r(i, r(s, i)),
                        max: r(s, r(i, s))
                    };
                }
                getPadding() {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    };
                }
                getTicks() {
                    return this.ticks;
                }
                getLabels() {
                    const t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
                }
                getLabelItems(t = this.chart.chartArea) {
                    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
                }
                beforeLayout() {
                    this._cache = {}, this._dataLimitsCached = !1;
                }
                beforeUpdate() {
                    d(this.options.beforeUpdate, [ this ]);
                }
                update(t, e, i) {
                    const {beginAtZero: s, grace: n, ticks: o} = this.options, a = o.sampleSize;
                    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, 
                    this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, 
                    this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), 
                    this.afterDataLimits(), this._range = Di(this, n, s), this._dataLimitsCached = !0), 
                    this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                    const r = a < this.ticks.length;
                    this._convertTicksToLabels(r ? Xs(this.ticks, a) : this.ticks), this.configure(), 
                    this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), 
                    o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = js(this, this.ticks), 
                    this._labelSizes = null, this.afterAutoSkip()), r && this._convertTicksToLabels(this.ticks), 
                    this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
                }
                configure() {
                    let t, e, i = this.options.reverse;
                    this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, 
                    i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, 
                    this._alignToPixels = this.options.alignToPixels;
                }
                afterUpdate() {
                    d(this.options.afterUpdate, [ this ]);
                }
                beforeSetDimensions() {
                    d(this.options.beforeSetDimensions, [ this ]);
                }
                setDimensions() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, 
                    this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, 
                    this.paddingRight = 0, this.paddingBottom = 0;
                }
                afterSetDimensions() {
                    d(this.options.afterSetDimensions, [ this ]);
                }
                _callHooks(t) {
                    this.chart.notifyPlugins(t, this.getContext()), d(this.options[t], [ this ]);
                }
                beforeDataLimits() {
                    this._callHooks("beforeDataLimits");
                }
                determineDataLimits() {}
                afterDataLimits() {
                    this._callHooks("afterDataLimits");
                }
                beforeBuildTicks() {
                    this._callHooks("beforeBuildTicks");
                }
                buildTicks() {
                    return [];
                }
                afterBuildTicks() {
                    this._callHooks("afterBuildTicks");
                }
                beforeTickToLabelConversion() {
                    d(this.options.beforeTickToLabelConversion, [ this ]);
                }
                generateTickLabels(t) {
                    const e = this.options.ticks;
                    let i, s, n;
                    for (i = 0, s = t.length; i < s; i++) n = t[i], n.label = d(e.callback, [ n.value, i, t ], this);
                }
                afterTickToLabelConversion() {
                    d(this.options.afterTickToLabelConversion, [ this ]);
                }
                beforeCalculateLabelRotation() {
                    d(this.options.beforeCalculateLabelRotation, [ this ]);
                }
                calculateLabelRotation() {
                    const t = this.options, e = t.ticks, i = Us(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, n = e.maxRotation;
                    let o, a, r, l = s;
                    if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void (this.labelRotation = s);
                    const h = this._getLabelSizes(), c = h.widest.width, d = h.highest.height, u = J(this.chart.width - c, 0, this.maxWidth);
                    o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), 
                    a = this.maxHeight - Ks(t.grid) - e.padding - Gs(t.title, this.chart.options.font), 
                    r = Math.sqrt(c * c + d * d), l = Y(Math.min(Math.asin(J((h.highest.height + 6) / o, -1, 1)), Math.asin(J(a / r, -1, 1)) - Math.asin(J(d / r, -1, 1)))), 
                    l = Math.max(s, Math.min(n, l))), this.labelRotation = l;
                }
                afterCalculateLabelRotation() {
                    d(this.options.afterCalculateLabelRotation, [ this ]);
                }
                afterAutoSkip() {}
                beforeFit() {
                    d(this.options.beforeFit, [ this ]);
                }
                fit() {
                    const t = {
                        width: 0,
                        height: 0
                    }, {chart: e, options: {ticks: i, title: s, grid: n}} = this, o = this._isVisible(), a = this.isHorizontal();
                    if (o) {
                        const o = Gs(s, e.options.font);
                        if (a ? (t.width = this.maxWidth, t.height = Ks(n) + o) : (t.height = this.maxHeight, 
                        t.width = Ks(n) + o), i.display && this.ticks.length) {
                            const {first: e, last: s, widest: n, highest: o} = this._getLabelSizes(), r = 2 * i.padding, l = $(this.labelRotation), h = Math.cos(l), c = Math.sin(l);
                            if (a) {
                                const e = i.mirror ? 0 : c * n.width + h * o.height;
                                t.height = Math.min(this.maxHeight, t.height + e + r);
                            } else {
                                const e = i.mirror ? 0 : h * n.width + c * o.height;
                                t.width = Math.min(this.maxWidth, t.width + e + r);
                            }
                            this._calculatePadding(e, s, c, h);
                        }
                    }
                    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, 
                    this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
                }
                _calculatePadding(t, e, i, s) {
                    const {ticks: {align: n, padding: o}, position: a} = this.options, r = 0 !== this.labelRotation, l = "top" !== a && "x" === this.axis;
                    if (this.isHorizontal()) {
                        const a = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1);
                        let c = 0, d = 0;
                        r ? l ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, 
                        d = e.width / 2), this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0), 
                        this.paddingRight = Math.max((d - h + o) * this.width / (this.width - h), 0);
                    } else {
                        let i = e.height / 2, s = t.height / 2;
                        "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, 
                        this.paddingBottom = s + o;
                    }
                }
                _handleMargins() {
                    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), 
                    this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), 
                    this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
                }
                afterFit() {
                    d(this.options.afterFit, [ this ]);
                }
                isHorizontal() {
                    const {axis: t, position: e} = this.options;
                    return "top" === e || "bottom" === e || "x" === t;
                }
                isFullSize() {
                    return this.options.fullSize;
                }
                _convertTicksToLabels(t) {
                    let e, i;
                    for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) s(t[e].label) && (t.splice(e, 1), 
                    i--, e--);
                    this.afterTickToLabelConversion();
                }
                _getLabelSizes() {
                    let t = this._labelSizes;
                    if (!t) {
                        const e = this.options.ticks.sampleSize;
                        let i = this.ticks;
                        e < i.length && (i = Xs(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
                    }
                    return t;
                }
                _computeLabelSizes(t, e, i) {
                    const {ctx: o, _longestTextCache: a} = this, r = [], l = [], h = Math.floor(e / Us(e, i));
                    let c, d, f, g, p, m, b, x, _, y, v, M = 0, w = 0;
                    for (c = 0; c < e; c += h) {
                        if (g = t[c].label, p = this._resolveTickFontOptions(c), o.font = m = p.string, 
                        b = a[m] = a[m] || {
                            data: {},
                            gc: []
                        }, x = p.lineHeight, _ = y = 0, s(g) || n(g)) {
                            if (n(g)) for (d = 0, f = g.length; d < f; ++d) v = g[d], s(v) || n(v) || (_ = Ce(o, b.data, b.gc, _, v), 
                            y += x);
                        } else _ = Ce(o, b.data, b.gc, _, g), y = x;
                        r.push(_), l.push(y), M = Math.max(_, M), w = Math.max(y, w);
                    }
                    !function(t, e) {
                        u(t, (t => {
                            const i = t.gc, s = i.length / 2;
                            let n;
                            if (s > e) {
                                for (n = 0; n < s; ++n) delete t.data[i[n]];
                                i.splice(0, s);
                            }
                        }));
                    }(a, e);
                    const k = r.indexOf(M), S = l.indexOf(w), P = t => ({
                        width: r[t] || 0,
                        height: l[t] || 0
                    });
                    return {
                        first: P(0),
                        last: P(e - 1),
                        widest: P(k),
                        highest: P(S),
                        widths: r,
                        heights: l
                    };
                }
                getLabelForValue(t) {
                    return t;
                }
                getPixelForValue(t, e) {
                    return NaN;
                }
                getValueForPixel(t) {}
                getPixelForTick(t) {
                    const e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
                }
                getPixelForDecimal(t) {
                    this._reversePixels && (t = 1 - t);
                    const e = this._startPixel + t * this._length;
                    return Q(this._alignToPixels ? Ae(this.chart, e, 0) : e);
                }
                getDecimalForPixel(t) {
                    const e = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - e : e;
                }
                getBasePixel() {
                    return this.getPixelForValue(this.getBaseValue());
                }
                getBaseValue() {
                    const {min: t, max: e} = this;
                    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
                }
                getContext(t) {
                    const e = this.ticks || [];
                    if (t >= 0 && t < e.length) {
                        const i = e[t];
                        return i.$context || (i.$context = function(t, e, i) {
                            return Ci(t, {
                                tick: i,
                                index: e,
                                type: "tick"
                            });
                        }(this.getContext(), t, i));
                    }
                    return this.$context || (this.$context = Ci(this.chart.getContext(), {
                        scale: this,
                        type: "scale"
                    }));
                }
                _tickSize() {
                    const t = this.options.ticks, e = $(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), n = this._getLabelSizes(), o = t.autoSkipPadding || 0, a = n ? n.widest.width + o : 0, r = n ? n.highest.height + o : 0;
                    return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s;
                }
                _isVisible() {
                    const t = this.options.display;
                    return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
                }
                _computeGridLineItems(t) {
                    const e = this.axis, i = this.chart, s = this.options, {grid: n, position: a, border: r} = s, h = n.offset, c = this.isHorizontal(), d = this.ticks.length + (h ? 1 : 0), u = Ks(n), f = [], g = r.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, b = function(t) {
                        return Ae(i, t, p);
                    };
                    let x, _, y, v, M, w, k, S, P, D, C, O;
                    if ("top" === a) x = b(this.bottom), w = this.bottom - u, S = x - m, D = b(t.top) + m, 
                    O = t.bottom; else if ("bottom" === a) x = b(this.top), D = t.top, O = b(t.bottom) - m, 
                    w = x + m, S = this.top + u; else if ("left" === a) x = b(this.right), M = this.right - u, 
                    k = x - m, P = b(t.left) + m, C = t.right; else if ("right" === a) x = b(this.left), 
                    P = t.left, C = b(t.right) - m, M = x + m, k = this.left + u; else if ("x" === e) {
                        if ("center" === a) x = b((t.top + t.bottom) / 2 + .5); else if (o(a)) {
                            const t = Object.keys(a)[0], e = a[t];
                            x = b(this.chart.scales[t].getPixelForValue(e));
                        }
                        D = t.top, O = t.bottom, w = x + m, S = w + u;
                    } else if ("y" === e) {
                        if ("center" === a) x = b((t.left + t.right) / 2); else if (o(a)) {
                            const t = Object.keys(a)[0], e = a[t];
                            x = b(this.chart.scales[t].getPixelForValue(e));
                        }
                        M = x - m, k = M - u, P = t.left, C = t.right;
                    }
                    const A = l(s.ticks.maxTicksLimit, d), T = Math.max(1, Math.ceil(d / A));
                    for (_ = 0; _ < d; _ += T) {
                        const t = this.getContext(_), e = n.setContext(t), s = r.setContext(t), o = e.lineWidth, a = e.color, l = s.dash || [], d = s.dashOffset, u = e.tickWidth, g = e.tickColor, p = e.tickBorderDash || [], m = e.tickBorderDashOffset;
                        y = qs(this, _, h), void 0 !== y && (v = Ae(i, y, o), c ? M = k = P = C = v : w = S = D = O = v, 
                        f.push({
                            tx1: M,
                            ty1: w,
                            tx2: k,
                            ty2: S,
                            x1: P,
                            y1: D,
                            x2: C,
                            y2: O,
                            width: o,
                            color: a,
                            borderDash: l,
                            borderDashOffset: d,
                            tickWidth: u,
                            tickColor: g,
                            tickBorderDash: p,
                            tickBorderDashOffset: m
                        }));
                    }
                    return this._ticksLength = d, this._borderValue = x, f;
                }
                _computeLabelItems(t) {
                    const e = this.axis, i = this.options, {position: s, ticks: a} = i, r = this.isHorizontal(), l = this.ticks, {align: h, crossAlign: c, padding: d, mirror: u} = a, f = Ks(i.grid), g = f + d, p = u ? -d : g, m = -$(this.labelRotation), b = [];
                    let x, _, y, v, M, w, k, S, P, D, C, O, A = "middle";
                    if ("top" === s) w = this.bottom - p, k = this._getXAxisLabelAlignment(); else if ("bottom" === s) w = this.top + p, 
                    k = this._getXAxisLabelAlignment(); else if ("left" === s) {
                        const t = this._getYAxisLabelAlignment(f);
                        k = t.textAlign, M = t.x;
                    } else if ("right" === s) {
                        const t = this._getYAxisLabelAlignment(f);
                        k = t.textAlign, M = t.x;
                    } else if ("x" === e) {
                        if ("center" === s) w = (t.top + t.bottom) / 2 + g; else if (o(s)) {
                            const t = Object.keys(s)[0], e = s[t];
                            w = this.chart.scales[t].getPixelForValue(e) + g;
                        }
                        k = this._getXAxisLabelAlignment();
                    } else if ("y" === e) {
                        if ("center" === s) M = (t.left + t.right) / 2 - g; else if (o(s)) {
                            const t = Object.keys(s)[0], e = s[t];
                            M = this.chart.scales[t].getPixelForValue(e);
                        }
                        k = this._getYAxisLabelAlignment(f).textAlign;
                    }
                    "y" === e && ("start" === h ? A = "top" : "end" === h && (A = "bottom"));
                    const T = this._getLabelSizes();
                    for (x = 0, _ = l.length; x < _; ++x) {
                        y = l[x], v = y.label;
                        const t = a.setContext(this.getContext(x));
                        S = this.getPixelForTick(x) + a.labelOffset, P = this._resolveTickFontOptions(x), 
                        D = P.lineHeight, C = n(v) ? v.length : 1;
                        const e = C / 2, i = t.color, o = t.textStrokeColor, h = t.textStrokeWidth;
                        let d, f = k;
                        if (r ? (M = S, "inner" === k && (f = x === _ - 1 ? this.options.reverse ? "left" : "right" : 0 === x ? this.options.reverse ? "right" : "left" : "center"), 
                        O = "top" === s ? "near" === c || 0 !== m ? -C * D + D / 2 : "center" === c ? -T.highest.height / 2 - e * D + D : -T.highest.height + D / 2 : "near" === c || 0 !== m ? D / 2 : "center" === c ? T.highest.height / 2 - e * D : T.highest.height - C * D, 
                        u && (O *= -1), 0 === m || t.showLabelBackdrop || (M += D / 2 * Math.sin(m))) : (w = S, 
                        O = (1 - C) * D / 2), t.showLabelBackdrop) {
                            const e = ki(t.backdropPadding), i = T.heights[x], s = T.widths[x];
                            let n = O - e.top, o = 0 - e.left;
                            switch (A) {
                              case "middle":
                                n -= i / 2;
                                break;

                              case "bottom":
                                n -= i;
                            }
                            switch (k) {
                              case "center":
                                o -= s / 2;
                                break;

                              case "right":
                                o -= s;
                                break;

                              case "inner":
                                x === _ - 1 ? o -= s : x > 0 && (o -= s / 2);
                            }
                            d = {
                                left: o,
                                top: n,
                                width: s + e.width,
                                height: i + e.height,
                                color: t.backdropColor
                            };
                        }
                        b.push({
                            label: v,
                            font: P,
                            textOffset: O,
                            options: {
                                rotation: m,
                                color: i,
                                strokeColor: o,
                                strokeWidth: h,
                                textAlign: f,
                                textBaseline: A,
                                translation: [ M, w ],
                                backdrop: d
                            }
                        });
                    }
                    return b;
                }
                _getXAxisLabelAlignment() {
                    const {position: t, ticks: e} = this.options;
                    if (-$(this.labelRotation)) return "top" === t ? "left" : "right";
                    let i = "center";
                    return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), 
                    i;
                }
                _getYAxisLabelAlignment(t) {
                    const {position: e, ticks: {crossAlign: i, mirror: s, padding: n}} = this.options, o = t + n, a = this._getLabelSizes().widest.width;
                    let r, l;
                    return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", 
                    l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", 
                    l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, 
                    "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", 
                    l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", 
                    l += a / 2) : (r = "right", l = this.right)) : r = "right", {
                        textAlign: r,
                        x: l
                    };
                }
                _computeLabelArea() {
                    if (this.options.ticks.mirror) return;
                    const t = this.chart, e = this.options.position;
                    return "left" === e || "right" === e ? {
                        top: 0,
                        left: this.left,
                        bottom: t.height,
                        right: this.right
                    } : "top" === e || "bottom" === e ? {
                        top: this.top,
                        left: 0,
                        bottom: this.bottom,
                        right: t.width
                    } : void 0;
                }
                drawBackground() {
                    const {ctx: t, options: {backgroundColor: e}, left: i, top: s, width: n, height: o} = this;
                    e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore());
                }
                getLineWidthForValue(t) {
                    const e = this.options.grid;
                    if (!this._isVisible() || !e.display) return 0;
                    const i = this.ticks.findIndex((e => e.value === t));
                    if (i >= 0) return e.setContext(this.getContext(i)).lineWidth;
                    return 0;
                }
                drawGrid(t) {
                    const e = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                    let n, o;
                    const a = (t, e, s) => {
                        s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, 
                        i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), 
                        i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore());
                    };
                    if (e.display) for (n = 0, o = s.length; n < o; ++n) {
                        const t = s[n];
                        e.drawOnChartArea && a({
                            x: t.x1,
                            y: t.y1
                        }, {
                            x: t.x2,
                            y: t.y2
                        }, t), e.drawTicks && a({
                            x: t.tx1,
                            y: t.ty1
                        }, {
                            x: t.tx2,
                            y: t.ty2
                        }, {
                            color: t.tickColor,
                            width: t.tickWidth,
                            borderDash: t.tickBorderDash,
                            borderDashOffset: t.tickBorderDashOffset
                        });
                    }
                }
                drawBorder() {
                    const {chart: t, ctx: e, options: {border: i, grid: s}} = this, n = i.setContext(this.getContext()), o = i.display ? n.width : 0;
                    if (!o) return;
                    const a = s.setContext(this.getContext(0)).lineWidth, r = this._borderValue;
                    let l, h, c, d;
                    this.isHorizontal() ? (l = Ae(t, this.left, o) - o / 2, h = Ae(t, this.right, a) + a / 2, 
                    c = d = r) : (c = Ae(t, this.top, o) - o / 2, d = Ae(t, this.bottom, a) + a / 2, 
                    l = h = r), e.save(), e.lineWidth = n.width, e.strokeStyle = n.color, e.beginPath(), 
                    e.moveTo(l, c), e.lineTo(h, d), e.stroke(), e.restore();
                }
                drawLabels(t) {
                    if (!this.options.ticks.display) return;
                    const e = this.ctx, i = this._computeLabelArea();
                    i && Ie(e, i);
                    const s = this.getLabelItems(t);
                    for (const t of s) {
                        const i = t.options, s = t.font;
                        Ne(e, t.label, 0, t.textOffset, s, i);
                    }
                    i && ze(e);
                }
                drawTitle() {
                    const {ctx: t, options: {position: e, title: i, reverse: s}} = this;
                    if (!i.display) return;
                    const a = Si(i.font), r = ki(i.padding), l = i.align;
                    let h = a.lineHeight / 2;
                    "bottom" === e || "center" === e || o(e) ? (h += r.bottom, n(i.text) && (h += a.lineHeight * (i.text.length - 1))) : h += r.top;
                    const {titleX: c, titleY: d, maxWidth: u, rotation: f} = function(t, e, i, s) {
                        const {top: n, left: a, bottom: r, right: l, chart: h} = t, {chartArea: c, scales: d} = h;
                        let u, f, g, p = 0;
                        const m = r - n, b = l - a;
                        if (t.isHorizontal()) {
                            if (f = ft(s, a, l), o(i)) {
                                const t = Object.keys(i)[0], s = i[t];
                                g = d[t].getPixelForValue(s) + m - e;
                            } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Ys(t, i, e);
                            u = l - a;
                        } else {
                            if (o(i)) {
                                const t = Object.keys(i)[0], s = i[t];
                                f = d[t].getPixelForValue(s) - b + e;
                            } else f = "center" === i ? (c.left + c.right) / 2 - b + e : Ys(t, i, e);
                            g = ft(s, r, n), p = "left" === i ? -E : E;
                        }
                        return {
                            titleX: f,
                            titleY: g,
                            maxWidth: u,
                            rotation: p
                        };
                    }(this, h, e, l);
                    Ne(t, i.text, 0, 0, a, {
                        color: i.color,
                        maxWidth: u,
                        rotation: f,
                        textAlign: Zs(l, e, s),
                        textBaseline: "middle",
                        translation: [ c, d ]
                    });
                }
                draw(t) {
                    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), 
                    this.drawTitle(), this.drawLabels(t));
                }
                _layers() {
                    const t = this.options, e = t.ticks && t.ticks.z || 0, i = l(t.grid && t.grid.z, -1), s = l(t.border && t.border.z, 0);
                    return this._isVisible() && this.draw === Js.prototype.draw ? [ {
                        z: i,
                        draw: t => {
                            this.drawBackground(), this.drawGrid(t), this.drawTitle();
                        }
                    }, {
                        z: s,
                        draw: () => {
                            this.drawBorder();
                        }
                    }, {
                        z: e,
                        draw: t => {
                            this.drawLabels(t);
                        }
                    } ] : [ {
                        z: e,
                        draw: t => {
                            this.draw(t);
                        }
                    } ];
                }
                getMatchingVisibleMetas(t) {
                    const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
                    let n, o;
                    for (n = 0, o = e.length; n < o; ++n) {
                        const o = e[n];
                        o[i] !== this.id || t && o.type !== t || s.push(o);
                    }
                    return s;
                }
                _resolveTickFontOptions(t) {
                    return Si(this.options.ticks.setContext(this.getContext(t)).font);
                }
                _maxDigits() {
                    const t = this._resolveTickFontOptions(0).lineHeight;
                    return (this.isHorizontal() ? this.width : this.height) / t;
                }
            }
            class Qs {
                constructor(t, e, i) {
                    this.type = t, this.scope = e, this.override = i, this.items = Object.create(null);
                }
                isForType(t) {
                    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
                }
                register(t) {
                    const e = Object.getPrototypeOf(t);
                    let i;
                    (function(t) {
                        return "id" in t && "defaults" in t;
                    })(e) && (i = this.register(e));
                    const s = this.items, n = t.id, o = this.scope + "." + n;
                    if (!n) throw new Error("class does not have id: " + t);
                    return n in s || (s[n] = t, function(t, e, i) {
                        const s = b(Object.create(null), [ i ? ue.get(i) : {}, ue.get(e), t.defaults ]);
                        ue.set(e, s), t.defaultRoutes && function(t, e) {
                            Object.keys(e).forEach((i => {
                                const s = i.split("."), n = s.pop(), o = [ t ].concat(s).join("."), a = e[i].split("."), r = a.pop(), l = a.join(".");
                                ue.route(o, n, l, r);
                            }));
                        }(e, t.defaultRoutes);
                        t.descriptors && ue.describe(e, t.descriptors);
                    }(t, o, i), this.override && ue.override(t.id, t.overrides)), o;
                }
                get(t) {
                    return this.items[t];
                }
                unregister(t) {
                    const e = this.items, i = t.id, s = this.scope;
                    i in e && delete e[i], s && i in ue[s] && (delete ue[s][i], this.override && delete re[i]);
                }
            }
            class tn {
                constructor() {
                    this.controllers = new Qs(Ns, "datasets", !0), this.elements = new Qs(Hs, "elements"), 
                    this.plugins = new Qs(Object, "plugins"), this.scales = new Qs(Js, "scales"), this._typedRegistries = [ this.controllers, this.scales, this.elements ];
                }
                add(...t) {
                    this._each("register", t);
                }
                remove(...t) {
                    this._each("unregister", t);
                }
                addControllers(...t) {
                    this._each("register", t, this.controllers);
                }
                addElements(...t) {
                    this._each("register", t, this.elements);
                }
                addPlugins(...t) {
                    this._each("register", t, this.plugins);
                }
                addScales(...t) {
                    this._each("register", t, this.scales);
                }
                getController(t) {
                    return this._get(t, this.controllers, "controller");
                }
                getElement(t) {
                    return this._get(t, this.elements, "element");
                }
                getPlugin(t) {
                    return this._get(t, this.plugins, "plugin");
                }
                getScale(t) {
                    return this._get(t, this.scales, "scale");
                }
                removeControllers(...t) {
                    this._each("unregister", t, this.controllers);
                }
                removeElements(...t) {
                    this._each("unregister", t, this.elements);
                }
                removePlugins(...t) {
                    this._each("unregister", t, this.plugins);
                }
                removeScales(...t) {
                    this._each("unregister", t, this.scales);
                }
                _each(t, e, i) {
                    [ ...e ].forEach((e => {
                        const s = i || this._getRegistryForType(e);
                        i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : u(e, (e => {
                            const s = i || this._getRegistryForType(e);
                            this._exec(t, s, e);
                        }));
                    }));
                }
                _exec(t, e, i) {
                    const s = w(t);
                    d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i);
                }
                _getRegistryForType(t) {
                    for (let e = 0; e < this._typedRegistries.length; e++) {
                        const i = this._typedRegistries[e];
                        if (i.isForType(t)) return i;
                    }
                    return this.plugins;
                }
                _get(t, e, i) {
                    const s = e.get(t);
                    if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
                    return s;
                }
            }
            var en = new tn;
            class sn {
                constructor() {
                    this._init = [];
                }
                notify(t, e, i, s) {
                    "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                    const n = s ? this._descriptors(t).filter(s) : this._descriptors(t), o = this._notify(n, t, e, i);
                    return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), 
                    o;
                }
                _notify(t, e, i, s) {
                    s = s || {};
                    for (const n of t) {
                        const t = n.plugin;
                        if (!1 === d(t[i], [ e, s, n.options ], t) && s.cancelable) return !1;
                    }
                    return !0;
                }
                invalidate() {
                    s(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
                }
                _descriptors(t) {
                    if (this._cache) return this._cache;
                    const e = this._cache = this._createDescriptors(t);
                    return this._notifyStateChanges(t), e;
                }
                _createDescriptors(t, e) {
                    const i = t && t.config, s = l(i.options && i.options.plugins, {}), n = function(t) {
                        const e = {}, i = [], s = Object.keys(en.plugins.items);
                        for (let t = 0; t < s.length; t++) i.push(en.getPlugin(s[t]));
                        const n = t.plugins || [];
                        for (let t = 0; t < n.length; t++) {
                            const s = n[t];
                            -1 === i.indexOf(s) && (i.push(s), e[s.id] = !0);
                        }
                        return {
                            plugins: i,
                            localIds: e
                        };
                    }(i);
                    return !1 !== s || e ? function(t, {plugins: e, localIds: i}, s, n) {
                        const o = [], a = t.getContext();
                        for (const r of e) {
                            const e = r.id, l = nn(s[e], n);
                            null !== l && o.push({
                                plugin: r,
                                options: on(t.config, {
                                    plugin: r,
                                    local: i[e]
                                }, l, a)
                            });
                        }
                        return o;
                    }(t, n, s, e) : [];
                }
                _notifyStateChanges(t) {
                    const e = this._oldCache || [], i = this._cache, s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
                    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
                }
            }
            function nn(t, e) {
                return e || !1 !== t ? !0 === t ? {} : t : null;
            }
            function on(t, {plugin: e, local: i}, s, n) {
                const o = t.pluginScopeKeys(e), a = t.getOptionScopes(s, o);
                return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [ "" ], {
                    scriptable: !1,
                    indexable: !1,
                    allKeys: !0
                });
            }
            function an(t, e) {
                const i = ue.datasets[t] || {};
                return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
            }
            function rn(t) {
                if ("x" === t || "y" === t || "r" === t) return t;
            }
            function ln(t, ...e) {
                if (rn(t)) return t;
                for (const s of e) {
                    const e = s.axis || ("top" === (i = s.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && rn(t[0].toLowerCase());
                    if (e) return e;
                }
                var i;
                throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
            }
            function hn(t, e, i) {
                if (i[e + "AxisID"] === t) return {
                    axis: e
                };
            }
            function cn(t, e) {
                const i = re[t.type] || {
                    scales: {}
                }, s = e.scales || {}, n = an(t.type, e), a = Object.create(null);
                return Object.keys(s).forEach((e => {
                    const r = s[e];
                    if (!o(r)) return console.error(`Invalid scale configuration for scale: ${e}`);
                    if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`);
                    const l = ln(e, r, function(t, e) {
                        if (e.data && e.data.datasets) {
                            const i = e.data.datasets.filter((e => e.xAxisID === t || e.yAxisID === t));
                            if (i.length) return hn(t, "x", i[0]) || hn(t, "y", i[0]);
                        }
                        return {};
                    }(e, t), ue.scales[r.type]), h = function(t, e) {
                        return t === e ? "_index_" : "_value_";
                    }(l, n), c = i.scales || {};
                    a[e] = x(Object.create(null), [ {
                        axis: l
                    }, r, c[l], c[h] ]);
                })), t.data.datasets.forEach((i => {
                    const n = i.type || t.type, o = i.indexAxis || an(n, e), r = (re[n] || {}).scales || {};
                    Object.keys(r).forEach((t => {
                        const e = function(t, e) {
                            let i = t;
                            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), 
                            i;
                        }(t, o), n = i[e + "AxisID"] || e;
                        a[n] = a[n] || Object.create(null), x(a[n], [ {
                            axis: e
                        }, s[n], r[t] ]);
                    }));
                })), Object.keys(a).forEach((t => {
                    const e = a[t];
                    x(e, [ ue.scales[e.type], ue.scale ]);
                })), a;
            }
            function dn(t) {
                const e = t.options || (t.options = {});
                e.plugins = l(e.plugins, {}), e.scales = cn(t, e);
            }
            function un(t) {
                return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t;
            }
            const fn = new Map, gn = new Set;
            function pn(t, e) {
                let i = fn.get(t);
                return i || (i = e(), fn.set(t, i), gn.add(i)), i;
            }
            const mn = (t, e, i) => {
                const s = M(e, i);
                void 0 !== s && t.add(s);
            };
            class bn {
                constructor(t) {
                    this._config = function(t) {
                        return (t = t || {}).data = un(t.data), dn(t), t;
                    }(t), this._scopeCache = new Map, this._resolverCache = new Map;
                }
                get platform() {
                    return this._config.platform;
                }
                get type() {
                    return this._config.type;
                }
                set type(t) {
                    this._config.type = t;
                }
                get data() {
                    return this._config.data;
                }
                set data(t) {
                    this._config.data = un(t);
                }
                get options() {
                    return this._config.options;
                }
                set options(t) {
                    this._config.options = t;
                }
                get plugins() {
                    return this._config.plugins;
                }
                update() {
                    const t = this._config;
                    this.clearCache(), dn(t);
                }
                clearCache() {
                    this._scopeCache.clear(), this._resolverCache.clear();
                }
                datasetScopeKeys(t) {
                    return pn(t, (() => [ [ `datasets.${t}`, "" ] ]));
                }
                datasetAnimationScopeKeys(t, e) {
                    return pn(`${t}.transition.${e}`, (() => [ [ `datasets.${t}.transitions.${e}`, `transitions.${e}` ], [ `datasets.${t}`, "" ] ]));
                }
                datasetElementScopeKeys(t, e) {
                    return pn(`${t}-${e}`, (() => [ [ `datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, "" ] ]));
                }
                pluginScopeKeys(t) {
                    const e = t.id;
                    return pn(`${this.type}-plugin-${e}`, (() => [ [ `plugins.${e}`, ...t.additionalOptionScopes || [] ] ]));
                }
                _cachedScopes(t, e) {
                    const i = this._scopeCache;
                    let s = i.get(t);
                    return s && !e || (s = new Map, i.set(t, s)), s;
                }
                getOptionScopes(t, e, i) {
                    const {options: s, type: n} = this, o = this._cachedScopes(t, i), a = o.get(e);
                    if (a) return a;
                    const r = new Set;
                    e.forEach((e => {
                        t && (r.add(t), e.forEach((e => mn(r, t, e)))), e.forEach((t => mn(r, s, t))), e.forEach((t => mn(r, re[n] || {}, t))), 
                        e.forEach((t => mn(r, ue, t))), e.forEach((t => mn(r, le, t)));
                    }));
                    const l = Array.from(r);
                    return 0 === l.length && l.push(Object.create(null)), gn.has(e) && o.set(e, l), 
                    l;
                }
                chartOptionScopes() {
                    const {options: t, type: e} = this;
                    return [ t, re[e] || {}, ue.datasets[e] || {}, {
                        type: e
                    }, ue, le ];
                }
                resolveNamedOptions(t, e, i, s = [ "" ]) {
                    const o = {
                        $shared: !0
                    }, {resolver: a, subPrefixes: r} = xn(this._resolverCache, t, s);
                    let l = a;
                    if (function(t, e) {
                        const {isScriptable: i, isIndexable: s} = Ye(t);
                        for (const o of e) {
                            const e = i(o), a = s(o), r = (a || e) && t[o];
                            if (e && (S(r) || _n(r)) || a && n(r)) return !0;
                        }
                        return !1;
                    }(a, e)) {
                        o.$shared = !1;
                        l = $e(a, i = S(i) ? i() : i, this.createResolver(t, i, r));
                    }
                    for (const t of e) o[t] = l[t];
                    return o;
                }
                createResolver(t, e, i = [ "" ], s) {
                    const {resolver: n} = xn(this._resolverCache, t, i);
                    return o(e) ? $e(n, e, void 0, s) : n;
                }
            }
            function xn(t, e, i) {
                let s = t.get(e);
                s || (s = new Map, t.set(e, s));
                const n = i.join();
                let o = s.get(n);
                if (!o) o = {
                    resolver: je(e, i),
                    subPrefixes: i.filter((t => !t.toLowerCase().includes("hover")))
                }, s.set(n, o);
                return o;
            }
            const _n = t => o(t) && Object.getOwnPropertyNames(t).some((e => S(t[e])));
            const yn = [ "top", "bottom", "left", "right", "chartArea" ];
            function vn(t, e) {
                return "top" === t || "bottom" === t || -1 === yn.indexOf(t) && "x" === e;
            }
            function Mn(t, e) {
                return function(i, s) {
                    return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
                };
            }
            function wn(t) {
                const e = t.chart, i = e.options.animation;
                e.notifyPlugins("afterRender"), d(i && i.onComplete, [ t ], e);
            }
            function kn(t) {
                const e = t.chart, i = e.options.animation;
                d(i && i.onProgress, [ t ], e);
            }
            function Sn(t) {
                return fe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), 
                t && t.canvas && (t = t.canvas), t;
            }
            const Pn = {}, Dn = t => {
                const e = Sn(t);
                return Object.values(Pn).filter((t => t.canvas === e)).pop();
            };
            function Cn(t, e, i) {
                const s = Object.keys(t);
                for (const n of s) {
                    const s = +n;
                    if (s >= e) {
                        const o = t[n];
                        delete t[n], (i > 0 || s > e) && (t[s + i] = o);
                    }
                }
            }
            function On(t, e, i) {
                return t.options.clip ? t[i] : e[i];
            }
            class An {
                static defaults=ue;
                static instances=Pn;
                static overrides=re;
                static registry=en;
                static version="4.4.2";
                static getChart=Dn;
                static register(...t) {
                    en.add(...t), Tn();
                }
                static unregister(...t) {
                    en.remove(...t), Tn();
                }
                constructor(t, e) {
                    const s = this.config = new bn(e), n = Sn(t), o = Dn(n);
                    if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
                    const a = s.createResolver(s.chartOptionScopes(), this.getContext());
                    this.platform = new (s.platform || ks(n)), this.platform.updateConfig(s);
                    const r = this.platform.acquireContext(n, a.aspectRatio), l = r && r.canvas, h = l && l.height, c = l && l.width;
                    this.id = i(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, 
                    this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, 
                    this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, 
                    this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, 
                    this._sortedMetasets = [], this.scales = {}, this._plugins = new sn, this.$proxies = {}, 
                    this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, 
                    this.$context = void 0, this._doResize = dt((t => this.update(t)), a.resizeDelay || 0), 
                    this._dataChanges = [], Pn[this.id] = this, r && l ? (xt.listen(this, "complete", wn), 
                    xt.listen(this, "progress", kn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
                }
                get aspectRatio() {
                    const {options: {aspectRatio: t, maintainAspectRatio: e}, width: i, height: n, _aspectRatio: o} = this;
                    return s(t) ? e && o ? o : n ? i / n : null : t;
                }
                get data() {
                    return this.config.data;
                }
                set data(t) {
                    this.config.data = t;
                }
                get options() {
                    return this._options;
                }
                set options(t) {
                    this.config.options = t;
                }
                get registry() {
                    return en;
                }
                _initialize() {
                    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ke(this, this.options.devicePixelRatio), 
                    this.bindEvents(), this.notifyPlugins("afterInit"), this;
                }
                clear() {
                    return Te(this.canvas, this.ctx), this;
                }
                stop() {
                    return xt.stop(this), this;
                }
                resize(t, e) {
                    xt.running(this) ? this._resizeBeforeDraw = {
                        width: t,
                        height: e
                    } : this._resize(t, e);
                }
                _resize(t, e) {
                    const i = this.options, s = this.canvas, n = i.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(s, t, e, n), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), r = this.width ? "resize" : "attach";
                    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, 
                    ke(this, a, !0) && (this.notifyPlugins("resize", {
                        size: o
                    }), d(i.onResize, [ this, o ], this), this.attached && this._doResize(r) && this.render());
                }
                ensureScalesHaveIDs() {
                    u(this.options.scales || {}, ((t, e) => {
                        t.id = e;
                    }));
                }
                buildOrUpdateScales() {
                    const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce(((t, e) => (t[e] = !1, 
                    t)), {});
                    let n = [];
                    e && (n = n.concat(Object.keys(e).map((t => {
                        const i = e[t], s = ln(t, i), n = "r" === s, o = "x" === s;
                        return {
                            options: i,
                            dposition: n ? "chartArea" : o ? "bottom" : "left",
                            dtype: n ? "radialLinear" : o ? "category" : "linear"
                        };
                    })))), u(n, (e => {
                        const n = e.options, o = n.id, a = ln(o, n), r = l(n.type, e.dtype);
                        void 0 !== n.position && vn(n.position, a) === vn(e.dposition) || (n.position = e.dposition), 
                        s[o] = !0;
                        let h = null;
                        if (o in i && i[o].type === r) h = i[o]; else h = new (en.getScale(r))({
                            id: o,
                            type: r,
                            ctx: this.ctx,
                            chart: this
                        }), i[h.id] = h;
                        h.init(n, t);
                    })), u(s, ((t, e) => {
                        t || delete i[e];
                    })), u(i, (t => {
                        as.configure(this, t, t.options), as.addBox(this, t);
                    }));
                }
                _updateMetasets() {
                    const t = this._metasets, e = this.data.datasets.length, i = t.length;
                    if (t.sort(((t, e) => t.index - e.index)), i > e) {
                        for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                        t.splice(e, i - e);
                    }
                    this._sortedMetasets = t.slice(0).sort(Mn("order", "index"));
                }
                _removeUnreferencedMetasets() {
                    const {_metasets: t, data: {datasets: e}} = this;
                    t.length > e.length && delete this._stacks, t.forEach(((t, i) => {
                        0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i);
                    }));
                }
                buildOrUpdateControllers() {
                    const t = [], e = this.data.datasets;
                    let i, s;
                    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
                        const s = e[i];
                        let n = this.getDatasetMeta(i);
                        const o = s.type || this.config.type;
                        if (n.type && n.type !== o && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), 
                        n.type = o, n.indexAxis = s.indexAxis || an(o, this.options), n.order = s.order || 0, 
                        n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), 
                        n.controller.linkScales(); else {
                            const e = en.getController(o), {datasetElementType: s, dataElementType: a} = ue.datasets[o];
                            Object.assign(e, {
                                dataElementType: en.getElement(a),
                                datasetElementType: s && en.getElement(s)
                            }), n.controller = new e(this, i), t.push(n.controller);
                        }
                    }
                    return this._updateMetasets(), t;
                }
                _resetElements() {
                    u(this.data.datasets, ((t, e) => {
                        this.getDatasetMeta(e).controller.reset();
                    }), this);
                }
                reset() {
                    this._resetElements(), this.notifyPlugins("reset");
                }
                update(t) {
                    const e = this.config;
                    e.update();
                    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
                    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), 
                    this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                        mode: t,
                        cancelable: !0
                    })) return;
                    const n = this.buildOrUpdateControllers();
                    this.notifyPlugins("beforeElementsUpdate");
                    let o = 0;
                    for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                        const {controller: e} = this.getDatasetMeta(t), i = !s && -1 === n.indexOf(e);
                        e.buildOrUpdateElements(i), o = Math.max(+e.getMaxOverflow(), o);
                    }
                    o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || u(n, (t => {
                        t.reset();
                    })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                        mode: t
                    }), this._layers.sort(Mn("z", "_idx"));
                    const {_active: a, _lastEvent: r} = this;
                    r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
                }
                _updateScales() {
                    u(this.scales, (t => {
                        as.removeBox(this, t);
                    })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
                }
                _checkEventBindings() {
                    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
                    P(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), 
                    this.bindEvents());
                }
                _updateHiddenIndices() {
                    const {_hiddenIndices: t} = this, e = this._getUniformDataChanges() || [];
                    for (const {method: i, start: s, count: n} of e) Cn(t, s, "_removeElements" === i ? -n : n);
                }
                _getUniformDataChanges() {
                    const t = this._dataChanges;
                    if (!t || !t.length) return;
                    this._dataChanges = [];
                    const e = this.data.datasets.length, i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))), s = i(0);
                    for (let t = 1; t < e; t++) if (!P(s, i(t))) return;
                    return Array.from(s).map((t => t.split(","))).map((t => ({
                        method: t[1],
                        start: +t[2],
                        count: +t[3]
                    })));
                }
                _updateLayout(t) {
                    if (!1 === this.notifyPlugins("beforeLayout", {
                        cancelable: !0
                    })) return;
                    as.update(this, this.width, this.height, t);
                    const e = this.chartArea, i = e.width <= 0 || e.height <= 0;
                    this._layers = [], u(this.boxes, (t => {
                        i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()));
                    }), this), this._layers.forEach(((t, e) => {
                        t._idx = e;
                    })), this.notifyPlugins("afterLayout");
                }
                _updateDatasets(t) {
                    if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                        mode: t,
                        cancelable: !0
                    })) {
                        for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                        for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, S(t) ? t({
                            datasetIndex: e
                        }) : t);
                        this.notifyPlugins("afterDatasetsUpdate", {
                            mode: t
                        });
                    }
                }
                _updateDataset(t, e) {
                    const i = this.getDatasetMeta(t), s = {
                        meta: i,
                        index: t,
                        mode: e,
                        cancelable: !0
                    };
                    !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), 
                    s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
                }
                render() {
                    !1 !== this.notifyPlugins("beforeRender", {
                        cancelable: !0
                    }) && (xt.has(this) ? this.attached && !xt.running(this) && xt.start(this) : (this.draw(), 
                    wn({
                        chart: this
                    })));
                }
                draw() {
                    let t;
                    if (this._resizeBeforeDraw) {
                        const {width: t, height: e} = this._resizeBeforeDraw;
                        this._resize(t, e), this._resizeBeforeDraw = null;
                    }
                    if (this.clear(), this.width <= 0 || this.height <= 0) return;
                    if (!1 === this.notifyPlugins("beforeDraw", {
                        cancelable: !0
                    })) return;
                    const e = this._layers;
                    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
                    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
                    this.notifyPlugins("afterDraw");
                }
                _getSortedDatasetMetas(t) {
                    const e = this._sortedMetasets, i = [];
                    let s, n;
                    for (s = 0, n = e.length; s < n; ++s) {
                        const n = e[s];
                        t && !n.visible || i.push(n);
                    }
                    return i;
                }
                getSortedVisibleDatasetMetas() {
                    return this._getSortedDatasetMetas(!0);
                }
                _drawDatasets() {
                    if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                        cancelable: !0
                    })) return;
                    const t = this.getSortedVisibleDatasetMetas();
                    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                    this.notifyPlugins("afterDatasetsDraw");
                }
                _drawDataset(t) {
                    const e = this.ctx, i = t._clip, s = !i.disabled, n = function(t, e) {
                        const {xScale: i, yScale: s} = t;
                        return i && s ? {
                            left: On(i, e, "left"),
                            right: On(i, e, "right"),
                            top: On(s, e, "top"),
                            bottom: On(s, e, "bottom")
                        } : e;
                    }(t, this.chartArea), o = {
                        meta: t,
                        index: t.index,
                        cancelable: !0
                    };
                    !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && Ie(e, {
                        left: !1 === i.left ? 0 : n.left - i.left,
                        right: !1 === i.right ? this.width : n.right + i.right,
                        top: !1 === i.top ? 0 : n.top - i.top,
                        bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
                    }), t.controller.draw(), s && ze(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o));
                }
                isPointInArea(t) {
                    return Re(t, this.chartArea, this._minPadding);
                }
                getElementsAtEventForMode(t, e, i, s) {
                    const n = Xi.modes[e];
                    return "function" == typeof n ? n(this, t, i, s) : [];
                }
                getDatasetMeta(t) {
                    const e = this.data.datasets[t], i = this._metasets;
                    let s = i.filter((t => t && t._dataset === e)).pop();
                    return s || (s = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: e && e.order || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1
                    }, i.push(s)), s;
                }
                getContext() {
                    return this.$context || (this.$context = Ci(null, {
                        chart: this,
                        type: "chart"
                    }));
                }
                getVisibleDatasetCount() {
                    return this.getSortedVisibleDatasetMetas().length;
                }
                isDatasetVisible(t) {
                    const e = this.data.datasets[t];
                    if (!e) return !1;
                    const i = this.getDatasetMeta(t);
                    return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
                }
                setDatasetVisibility(t, e) {
                    this.getDatasetMeta(t).hidden = !e;
                }
                toggleDataVisibility(t) {
                    this._hiddenIndices[t] = !this._hiddenIndices[t];
                }
                getDataVisibility(t) {
                    return !this._hiddenIndices[t];
                }
                _updateVisibility(t, e, i) {
                    const s = i ? "show" : "hide", n = this.getDatasetMeta(t), o = n.controller._resolveAnimations(void 0, s);
                    k(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), 
                    o.update(n, {
                        visible: i
                    }), this.update((e => e.datasetIndex === t ? s : void 0)));
                }
                hide(t, e) {
                    this._updateVisibility(t, e, !1);
                }
                show(t, e) {
                    this._updateVisibility(t, e, !0);
                }
                _destroyDatasetMeta(t) {
                    const e = this._metasets[t];
                    e && e.controller && e.controller._destroy(), delete this._metasets[t];
                }
                _stop() {
                    let t, e;
                    for (this.stop(), xt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t);
                }
                destroy() {
                    this.notifyPlugins("beforeDestroy");
                    const {canvas: t, ctx: e} = this;
                    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Te(t, e), this.platform.releaseContext(e), 
                    this.canvas = null, this.ctx = null), delete Pn[this.id], this.notifyPlugins("afterDestroy");
                }
                toBase64Image(...t) {
                    return this.canvas.toDataURL(...t);
                }
                bindEvents() {
                    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
                }
                bindUserEvents() {
                    const t = this._listeners, e = this.platform, i = (i, s) => {
                        e.addEventListener(this, i, s), t[i] = s;
                    }, s = (t, e, i) => {
                        t.offsetX = e, t.offsetY = i, this._eventHandler(t);
                    };
                    u(this.options.events, (t => i(t, s)));
                }
                bindResponsiveEvents() {
                    this._responsiveListeners || (this._responsiveListeners = {});
                    const t = this._responsiveListeners, e = this.platform, i = (i, s) => {
                        e.addEventListener(this, i, s), t[i] = s;
                    }, s = (i, s) => {
                        t[i] && (e.removeEventListener(this, i, s), delete t[i]);
                    }, n = (t, e) => {
                        this.canvas && this.resize(t, e);
                    };
                    let o;
                    const a = () => {
                        s("attach", a), this.attached = !0, this.resize(), i("resize", n), i("detach", o);
                    };
                    o = () => {
                        this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", a);
                    }, e.isAttached(this.canvas) ? a() : o();
                }
                unbindEvents() {
                    u(this._listeners, ((t, e) => {
                        this.platform.removeEventListener(this, e, t);
                    })), this._listeners = {}, u(this._responsiveListeners, ((t, e) => {
                        this.platform.removeEventListener(this, e, t);
                    })), this._responsiveListeners = void 0;
                }
                updateHoverStyle(t, e, i) {
                    const s = i ? "set" : "remove";
                    let n, o, a, r;
                    for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), 
                    a = 0, r = t.length; a < r; ++a) {
                        o = t[a];
                        const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                        e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
                    }
                }
                getActiveElements() {
                    return this._active || [];
                }
                setActiveElements(t) {
                    const e = this._active || [], i = t.map((({datasetIndex: t, index: e}) => {
                        const i = this.getDatasetMeta(t);
                        if (!i) throw new Error("No dataset found at index " + t);
                        return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                        };
                    }));
                    !f(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
                }
                notifyPlugins(t, e, i) {
                    return this._plugins.notify(this, t, e, i);
                }
                isPluginEnabled(t) {
                    return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length;
                }
                _updateHoverStyles(t, e, i) {
                    const s = this.options.hover, n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))), o = n(e, t), a = i ? t : n(t, e);
                    o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
                }
                _eventHandler(t, e) {
                    const i = {
                        event: t,
                        replay: e,
                        cancelable: !0,
                        inChartArea: this.isPointInArea(t)
                    }, s = e => (e.options.events || this.options.events).includes(t.native.type);
                    if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
                    const n = this._handleEvent(t, e, i.inChartArea);
                    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), 
                    this;
                }
                _handleEvent(t, e, i) {
                    const {_active: s = [], options: n} = this, o = e, a = this._getActiveElements(t, s, i, o), r = D(t), l = function(t, e, i, s) {
                        return i && "mouseout" !== t.type ? s ? e : t : null;
                    }(t, this._lastEvent, i, r);
                    i && (this._lastEvent = null, d(n.onHover, [ t, a, this ], this), r && d(n.onClick, [ t, a, this ], this));
                    const h = !f(a, s);
                    return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, 
                    h;
                }
                _getActiveElements(t, e, i, s) {
                    if ("mouseout" === t.type) return [];
                    if (!i) return e;
                    const n = this.options.hover;
                    return this.getElementsAtEventForMode(t, n.mode, n, s);
                }
            }
            function Tn() {
                return u(An.instances, (t => t._plugins.invalidate()));
            }
            function Ln() {
                throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
            }
            class En {
                static override(t) {
                    Object.assign(En.prototype, t);
                }
                options;
                constructor(t) {
                    this.options = t || {};
                }
                init() {}
                formats() {
                    return Ln();
                }
                parse() {
                    return Ln();
                }
                format() {
                    return Ln();
                }
                add() {
                    return Ln();
                }
                diff() {
                    return Ln();
                }
                startOf() {
                    return Ln();
                }
                endOf() {
                    return Ln();
                }
            }
            var Rn = {
                _date: En
            };
            function In(t) {
                const e = t.iScale, i = function(t, e) {
                    if (!t._cache.$bar) {
                        const i = t.getMatchingVisibleMetas(e);
                        let s = [];
                        for (let e = 0, n = i.length; e < n; e++) s = s.concat(i[e].controller.getAllParsedValues(t));
                        t._cache.$bar = lt(s.sort(((t, e) => t - e)));
                    }
                    return t._cache.$bar;
                }(e, t.type);
                let s, n, o, a, r = e._length;
                const l = () => {
                    32767 !== o && -32768 !== o && (k(a) && (r = Math.min(r, Math.abs(o - a) || r)), 
                    a = o);
                };
                for (s = 0, n = i.length; s < n; ++s) o = e.getPixelForValue(i[s]), l();
                for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) o = e.getPixelForTick(s), 
                l();
                return r;
            }
            function zn(t, e, i, s) {
                return n(t) ? function(t, e, i, s) {
                    const n = i.parse(t[0], s), o = i.parse(t[1], s), a = Math.min(n, o), r = Math.max(n, o);
                    let l = a, h = r;
                    Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = {
                        barStart: l,
                        barEnd: h,
                        start: n,
                        end: o,
                        min: a,
                        max: r
                    };
                }(t, e, i, s) : e[i.axis] = i.parse(t, s), e;
            }
            function Fn(t, e, i, s) {
                const n = t.iScale, o = t.vScale, a = n.getLabels(), r = n === o, l = [];
                let h, c, d, u;
                for (h = i, c = i + s; h < c; ++h) u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), 
                l.push(zn(u, d, o, h));
                return l;
            }
            function Vn(t) {
                return t && void 0 !== t.barStart && void 0 !== t.barEnd;
            }
            function Bn(t, e, i, s) {
                let n = e.borderSkipped;
                const o = {};
                if (!n) return void (t.borderSkipped = o);
                if (!0 === n) return void (t.borderSkipped = {
                    top: !0,
                    right: !0,
                    bottom: !0,
                    left: !0
                });
                const {start: a, end: r, reverse: l, top: h, bottom: c} = function(t) {
                    let e, i, s, n, o;
                    return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, 
                    i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), 
                    {
                        start: i,
                        end: s,
                        reverse: e,
                        top: n,
                        bottom: o
                    };
                }(t);
                "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[Wn(c, a, r, l)] = !0, 
                n = h)), o[Wn(n, a, r, l)] = !0, t.borderSkipped = o;
            }
            function Wn(t, e, i, s) {
                var n, o, a;
                return s ? (a = i, t = Nn(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = Nn(t, e, i), 
                t;
            }
            function Nn(t, e, i) {
                return "start" === t ? e : "end" === t ? i : t;
            }
            function Hn(t, {inflateAmount: e}, i) {
                t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e;
            }
            class jn extends Ns {
                static id="doughnut";
                static defaults={
                    datasetElementType: !1,
                    dataElementType: "arc",
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    animations: {
                        numbers: {
                            type: "number",
                            properties: [ "circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing" ]
                        }
                    },
                    cutout: "50%",
                    rotation: 0,
                    circumference: 360,
                    radius: "100%",
                    spacing: 0,
                    indexAxis: "r"
                };
                static descriptors={
                    _scriptable: t => "spacing" !== t,
                    _indexable: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
                };
                static overrides={
                    aspectRatio: 1,
                    plugins: {
                        legend: {
                            labels: {
                                generateLabels(t) {
                                    const e = t.data;
                                    if (e.labels.length && e.datasets.length) {
                                        const {labels: {pointStyle: i, color: s}} = t.legend.options;
                                        return e.labels.map(((e, n) => {
                                            const o = t.getDatasetMeta(0).controller.getStyle(n);
                                            return {
                                                text: e,
                                                fillStyle: o.backgroundColor,
                                                strokeStyle: o.borderColor,
                                                fontColor: s,
                                                lineWidth: o.borderWidth,
                                                pointStyle: i,
                                                hidden: !t.getDataVisibility(n),
                                                index: n
                                            };
                                        }));
                                    }
                                    return [];
                                }
                            },
                            onClick(t, e, i) {
                                i.chart.toggleDataVisibility(e.index), i.chart.update();
                            }
                        }
                    }
                };
                constructor(t, e) {
                    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, 
                    this.offsetX = void 0, this.offsetY = void 0;
                }
                linkScales() {}
                parse(t, e) {
                    const i = this.getDataset().data, s = this._cachedMeta;
                    if (!1 === this._parsing) s._parsed = i; else {
                        let n, a, r = t => +i[t];
                        if (o(i[t])) {
                            const {key: t = "value"} = this._parsing;
                            r = e => +M(i[e], t);
                        }
                        for (n = t, a = t + e; n < a; ++n) s._parsed[n] = r(n);
                    }
                }
                _getRotation() {
                    return $(this.options.rotation - 90);
                }
                _getCircumference() {
                    return $(this.options.circumference);
                }
                _getRotationExtents() {
                    let t = O, e = -O;
                    for (let i = 0; i < this.chart.data.datasets.length; ++i) if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
                        const s = this.chart.getDatasetMeta(i).controller, n = s._getRotation(), o = s._getCircumference();
                        t = Math.min(t, n), e = Math.max(e, n + o);
                    }
                    return {
                        rotation: t,
                        circumference: e - t
                    };
                }
                update(t) {
                    const e = this.chart, {chartArea: i} = e, s = this._cachedMeta, n = s.data, o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - o) / 2, 0), r = Math.min(h(this.options.cutout, a), 1), l = this._getRingWeight(this.index), {circumference: d, rotation: u} = this._getRotationExtents(), {ratioX: f, ratioY: g, offsetX: p, offsetY: m} = function(t, e, i) {
                        let s = 1, n = 1, o = 0, a = 0;
                        if (e < O) {
                            const r = t, l = r + e, h = Math.cos(r), c = Math.sin(r), d = Math.cos(l), u = Math.sin(l), f = (t, e, s) => Z(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i), g = (t, e, s) => Z(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i), p = f(0, h, d), m = f(E, c, u), b = g(C, h, d), x = g(C + E, c, u);
                            s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2;
                        }
                        return {
                            ratioX: s,
                            ratioY: n,
                            offsetX: o,
                            offsetY: a
                        };
                    }(u, d, r), b = (i.width - o) / f, x = (i.height - o) / g, _ = Math.max(Math.min(b, x) / 2, 0), y = c(this.options.radius, _), v = (y - Math.max(y * r, 0)) / this._getVisibleDatasetWeightTotal();
                    this.offsetX = p * y, this.offsetY = m * y, s.total = this.calculateTotal(), this.outerRadius = y - v * this._getRingWeightOffset(this.index), 
                    this.innerRadius = Math.max(this.outerRadius - v * l, 0), this.updateElements(n, 0, n.length, t);
                }
                _circumference(t, e) {
                    const i = this.options, s = this._cachedMeta, n = this._getCircumference();
                    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / O);
                }
                updateElements(t, e, i, s) {
                    const n = "reset" === s, o = this.chart, a = o.chartArea, r = o.options.animation, l = (a.left + a.right) / 2, h = (a.top + a.bottom) / 2, c = n && r.animateScale, d = c ? 0 : this.innerRadius, u = c ? 0 : this.outerRadius, {sharedOptions: f, includeOptions: g} = this._getSharedOptions(e, s);
                    let p, m = this._getRotation();
                    for (p = 0; p < e; ++p) m += this._circumference(p, n);
                    for (p = e; p < e + i; ++p) {
                        const e = this._circumference(p, n), i = t[p], o = {
                            x: l + this.offsetX,
                            y: h + this.offsetY,
                            startAngle: m,
                            endAngle: m + e,
                            circumference: e,
                            outerRadius: u,
                            innerRadius: d
                        };
                        g && (o.options = f || this.resolveDataElementOptions(p, i.active ? "active" : s)), 
                        m += e, this.updateElement(i, p, o, s);
                    }
                }
                calculateTotal() {
                    const t = this._cachedMeta, e = t.data;
                    let i, s = 0;
                    for (i = 0; i < e.length; i++) {
                        const n = t._parsed[i];
                        null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n));
                    }
                    return s;
                }
                calculateCircumference(t) {
                    const e = this._cachedMeta.total;
                    return e > 0 && !isNaN(t) ? O * (Math.abs(t) / e) : 0;
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], n = ne(e._parsed[t], i.options.locale);
                    return {
                        label: s[t] || "",
                        value: n
                    };
                }
                getMaxBorderWidth(t) {
                    let e = 0;
                    const i = this.chart;
                    let s, n, o, a, r;
                    if (!t) for (s = 0, n = i.data.datasets.length; s < n; ++s) if (i.isDatasetVisible(s)) {
                        o = i.getDatasetMeta(s), t = o.data, a = o.controller;
                        break;
                    }
                    if (!t) return 0;
                    for (s = 0, n = t.length; s < n; ++s) r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
                    return e;
                }
                getMaxOffset(t) {
                    let e = 0;
                    for (let i = 0, s = t.length; i < s; ++i) {
                        const t = this.resolveDataElementOptions(i);
                        e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
                    }
                    return e;
                }
                _getRingWeightOffset(t) {
                    let e = 0;
                    for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                    return e;
                }
                _getRingWeight(t) {
                    return Math.max(l(this.chart.data.datasets[t].weight, 1), 0);
                }
                _getVisibleDatasetWeightTotal() {
                    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
                }
            }
            class $n extends Ns {
                static id="polarArea";
                static defaults={
                    dataElementType: "arc",
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    animations: {
                        numbers: {
                            type: "number",
                            properties: [ "x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius" ]
                        }
                    },
                    indexAxis: "r",
                    startAngle: 0
                };
                static overrides={
                    aspectRatio: 1,
                    plugins: {
                        legend: {
                            labels: {
                                generateLabels(t) {
                                    const e = t.data;
                                    if (e.labels.length && e.datasets.length) {
                                        const {labels: {pointStyle: i, color: s}} = t.legend.options;
                                        return e.labels.map(((e, n) => {
                                            const o = t.getDatasetMeta(0).controller.getStyle(n);
                                            return {
                                                text: e,
                                                fillStyle: o.backgroundColor,
                                                strokeStyle: o.borderColor,
                                                fontColor: s,
                                                lineWidth: o.borderWidth,
                                                pointStyle: i,
                                                hidden: !t.getDataVisibility(n),
                                                index: n
                                            };
                                        }));
                                    }
                                    return [];
                                }
                            },
                            onClick(t, e, i) {
                                i.chart.toggleDataVisibility(e.index), i.chart.update();
                            }
                        }
                    },
                    scales: {
                        r: {
                            type: "radialLinear",
                            angleLines: {
                                display: !1
                            },
                            beginAtZero: !0,
                            grid: {
                                circular: !0
                            },
                            pointLabels: {
                                display: !1
                            },
                            startAngle: 0
                        }
                    }
                };
                constructor(t, e) {
                    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], n = ne(e._parsed[t].r, i.options.locale);
                    return {
                        label: s[t] || "",
                        value: n
                    };
                }
                parseObjectData(t, e, i, s) {
                    return ii.bind(this)(t, e, i, s);
                }
                update(t) {
                    const e = this._cachedMeta.data;
                    this._updateRadius(), this.updateElements(e, 0, e.length, t);
                }
                getMinMax() {
                    const t = this._cachedMeta, e = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY
                    };
                    return t.data.forEach(((t, i) => {
                        const s = this.getParsed(i).r;
                        !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s));
                    })), e;
                }
                _updateRadius() {
                    const t = this.chart, e = t.chartArea, i = t.options, s = Math.min(e.right - e.left, e.bottom - e.top), n = Math.max(s / 2, 0), o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                    this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o;
                }
                updateElements(t, e, i, s) {
                    const n = "reset" === s, o = this.chart, a = o.options.animation, r = this._cachedMeta.rScale, l = r.xCenter, h = r.yCenter, c = r.getIndexAngle(0) - .5 * C;
                    let d, u = c;
                    const f = 360 / this.countVisibleElements();
                    for (d = 0; d < e; ++d) u += this._computeAngle(d, s, f);
                    for (d = e; d < e + i; d++) {
                        const e = t[d];
                        let i = u, g = u + this._computeAngle(d, s, f), p = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;
                        u = g, n && (a.animateScale && (p = 0), a.animateRotate && (i = g = c));
                        const m = {
                            x: l,
                            y: h,
                            innerRadius: 0,
                            outerRadius: p,
                            startAngle: i,
                            endAngle: g,
                            options: this.resolveDataElementOptions(d, e.active ? "active" : s)
                        };
                        this.updateElement(e, d, m, s);
                    }
                }
                countVisibleElements() {
                    const t = this._cachedMeta;
                    let e = 0;
                    return t.data.forEach(((t, i) => {
                        !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
                    })), e;
                }
                _computeAngle(t, e, i) {
                    return this.chart.getDataVisibility(t) ? $(this.resolveDataElementOptions(t, e).angle || i) : 0;
                }
            }
            var Yn = Object.freeze({
                __proto__: null,
                BarController: class extends Ns {
                    static id="bar";
                    static defaults={
                        datasetElementType: !1,
                        dataElementType: "bar",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        grouped: !0,
                        animations: {
                            numbers: {
                                type: "number",
                                properties: [ "x", "y", "base", "width", "height" ]
                            }
                        }
                    };
                    static overrides={
                        scales: {
                            _index_: {
                                type: "category",
                                offset: !0,
                                grid: {
                                    offset: !0
                                }
                            },
                            _value_: {
                                type: "linear",
                                beginAtZero: !0
                            }
                        }
                    };
                    parsePrimitiveData(t, e, i, s) {
                        return Fn(t, e, i, s);
                    }
                    parseArrayData(t, e, i, s) {
                        return Fn(t, e, i, s);
                    }
                    parseObjectData(t, e, i, s) {
                        const {iScale: n, vScale: o} = t, {xAxisKey: a = "x", yAxisKey: r = "y"} = this._parsing, l = "x" === n.axis ? a : r, h = "x" === o.axis ? a : r, c = [];
                        let d, u, f, g;
                        for (d = i, u = i + s; d < u; ++d) g = e[d], f = {}, f[n.axis] = n.parse(M(g, l), d), 
                        c.push(zn(M(g, h), f, o, d));
                        return c;
                    }
                    updateRangeFromParsed(t, e, i, s) {
                        super.updateRangeFromParsed(t, e, i, s);
                        const n = i._custom;
                        n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max));
                    }
                    getMaxOverflow() {
                        return 0;
                    }
                    getLabelAndValue(t) {
                        const e = this._cachedMeta, {iScale: i, vScale: s} = e, n = this.getParsed(t), o = n._custom, a = Vn(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
                        return {
                            label: "" + i.getLabelForValue(n[i.axis]),
                            value: a
                        };
                    }
                    initialize() {
                        this.enableOptionSharing = !0, super.initialize();
                        this._cachedMeta.stack = this.getDataset().stack;
                    }
                    update(t) {
                        const e = this._cachedMeta;
                        this.updateElements(e.data, 0, e.data.length, t);
                    }
                    updateElements(t, e, i, n) {
                        const o = "reset" === n, {index: a, _cachedMeta: {vScale: r}} = this, l = r.getBasePixel(), h = r.isHorizontal(), c = this._getRuler(), {sharedOptions: d, includeOptions: u} = this._getSharedOptions(e, n);
                        for (let f = e; f < e + i; f++) {
                            const e = this.getParsed(f), i = o || s(e[r.axis]) ? {
                                base: l,
                                head: l
                            } : this._calculateBarValuePixels(f), g = this._calculateBarIndexPixels(f, c), p = (e._stacks || {})[r.axis], m = {
                                horizontal: h,
                                base: i.base,
                                enableBorderRadius: !p || Vn(e._custom) || a === p._top || a === p._bottom,
                                x: h ? i.head : g.center,
                                y: h ? g.center : i.head,
                                height: h ? g.size : Math.abs(i.size),
                                width: h ? Math.abs(i.size) : g.size
                            };
                            u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
                            const b = m.options || t[f].options;
                            Bn(m, b, p, a), Hn(m, b, c.ratio), this.updateElement(t[f], f, m, n);
                        }
                    }
                    _getStacks(t, e) {
                        const {iScale: i} = this._cachedMeta, n = i.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped)), o = i.options.stacked, a = [], r = t => {
                            const i = t.controller.getParsed(e), n = i && i[t.vScale.axis];
                            if (s(n) || isNaN(n)) return !0;
                        };
                        for (const i of n) if ((void 0 === e || !r(i)) && ((!1 === o || -1 === a.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && a.push(i.stack), 
                        i.index === t)) break;
                        return a.length || a.push(void 0), a;
                    }
                    _getStackCount(t) {
                        return this._getStacks(void 0, t).length;
                    }
                    _getStackIndex(t, e, i) {
                        const s = this._getStacks(t, i), n = void 0 !== e ? s.indexOf(e) : -1;
                        return -1 === n ? s.length - 1 : n;
                    }
                    _getRuler() {
                        const t = this.options, e = this._cachedMeta, i = e.iScale, s = [];
                        let n, o;
                        for (n = 0, o = e.data.length; n < o; ++n) s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
                        const a = t.barThickness;
                        return {
                            min: a || In(e),
                            pixels: s,
                            start: i._startPixel,
                            end: i._endPixel,
                            stackCount: this._getStackCount(),
                            scale: i,
                            grouped: t.grouped,
                            ratio: a ? 1 : t.categoryPercentage * t.barPercentage
                        };
                    }
                    _calculateBarValuePixels(t) {
                        const {_cachedMeta: {vScale: e, _stacked: i, index: n}, options: {base: o, minBarLength: a}} = this, r = o || 0, l = this.getParsed(t), h = l._custom, c = Vn(h);
                        let d, u, f = l[e.axis], g = 0, p = i ? this.applyStack(e, l, i) : f;
                        p !== f && (g = p - f, p = f), c && (f = h.barStart, p = h.barEnd - h.barStart, 
                        0 !== f && F(f) !== F(h.barEnd) && (g = 0), g += f);
                        const m = s(o) || c ? g : o;
                        let b = e.getPixelForValue(m);
                        if (d = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + p) : b, u = d - b, 
                        Math.abs(u) < a) {
                            u = function(t, e, i) {
                                return 0 !== t ? F(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
                            }(u, e, r) * a, f === r && (b -= u / 2);
                            const t = e.getPixelForDecimal(0), s = e.getPixelForDecimal(1), o = Math.min(t, s), h = Math.max(t, s);
                            b = Math.max(Math.min(b, h), o), d = b + u, i && !c && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(d) - e.getValueForPixel(b));
                        }
                        if (b === e.getPixelForValue(r)) {
                            const t = F(u) * e.getLineWidthForValue(r) / 2;
                            b += t, u -= t;
                        }
                        return {
                            size: u,
                            base: b,
                            head: d,
                            center: d + u / 2
                        };
                    }
                    _calculateBarIndexPixels(t, e) {
                        const i = e.scale, n = this.options, o = n.skipNull, a = l(n.maxBarThickness, 1 / 0);
                        let r, h;
                        if (e.grouped) {
                            const i = o ? this._getStackCount(t) : e.stackCount, l = "flex" === n.barThickness ? function(t, e, i, s) {
                                const n = e.pixels, o = n[t];
                                let a = t > 0 ? n[t - 1] : null, r = t < n.length - 1 ? n[t + 1] : null;
                                const l = i.categoryPercentage;
                                null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a);
                                const h = o - (o - Math.min(a, r)) / 2 * l;
                                return {
                                    chunk: Math.abs(r - a) / 2 * l / s,
                                    ratio: i.barPercentage,
                                    start: h
                                };
                            }(t, e, n, i) : function(t, e, i, n) {
                                const o = i.barThickness;
                                let a, r;
                                return s(o) ? (a = e.min * i.categoryPercentage, r = i.barPercentage) : (a = o * n, 
                                r = 1), {
                                    chunk: a / n,
                                    ratio: r,
                                    start: e.pixels[t] - a / 2
                                };
                            }(t, e, n, i), c = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                            r = l.start + l.chunk * c + l.chunk / 2, h = Math.min(a, l.chunk * l.ratio);
                        } else r = i.getPixelForValue(this.getParsed(t)[i.axis], t), h = Math.min(a, e.min * e.ratio);
                        return {
                            base: r - h / 2,
                            head: r + h / 2,
                            center: r,
                            size: h
                        };
                    }
                    draw() {
                        const t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length;
                        let n = 0;
                        for (;n < s; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
                    }
                },
                BubbleController: class extends Ns {
                    static id="bubble";
                    static defaults={
                        datasetElementType: !1,
                        dataElementType: "point",
                        animations: {
                            numbers: {
                                type: "number",
                                properties: [ "x", "y", "borderWidth", "radius" ]
                            }
                        }
                    };
                    static overrides={
                        scales: {
                            x: {
                                type: "linear"
                            },
                            y: {
                                type: "linear"
                            }
                        }
                    };
                    initialize() {
                        this.enableOptionSharing = !0, super.initialize();
                    }
                    parsePrimitiveData(t, e, i, s) {
                        const n = super.parsePrimitiveData(t, e, i, s);
                        for (let t = 0; t < n.length; t++) n[t]._custom = this.resolveDataElementOptions(t + i).radius;
                        return n;
                    }
                    parseArrayData(t, e, i, s) {
                        const n = super.parseArrayData(t, e, i, s);
                        for (let t = 0; t < n.length; t++) {
                            const s = e[i + t];
                            n[t]._custom = l(s[2], this.resolveDataElementOptions(t + i).radius);
                        }
                        return n;
                    }
                    parseObjectData(t, e, i, s) {
                        const n = super.parseObjectData(t, e, i, s);
                        for (let t = 0; t < n.length; t++) {
                            const s = e[i + t];
                            n[t]._custom = l(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius);
                        }
                        return n;
                    }
                    getMaxOverflow() {
                        const t = this._cachedMeta.data;
                        let e = 0;
                        for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                        return e > 0 && e;
                    }
                    getLabelAndValue(t) {
                        const e = this._cachedMeta, i = this.chart.data.labels || [], {xScale: s, yScale: n} = e, o = this.getParsed(t), a = s.getLabelForValue(o.x), r = n.getLabelForValue(o.y), l = o._custom;
                        return {
                            label: i[t] || "",
                            value: "(" + a + ", " + r + (l ? ", " + l : "") + ")"
                        };
                    }
                    update(t) {
                        const e = this._cachedMeta.data;
                        this.updateElements(e, 0, e.length, t);
                    }
                    updateElements(t, e, i, s) {
                        const n = "reset" === s, {iScale: o, vScale: a} = this._cachedMeta, {sharedOptions: r, includeOptions: l} = this._getSharedOptions(e, s), h = o.axis, c = a.axis;
                        for (let d = e; d < e + i; d++) {
                            const e = t[d], i = !n && this.getParsed(d), u = {}, f = u[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[h]), g = u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]);
                            u.skip = isNaN(f) || isNaN(g), l && (u.options = r || this.resolveDataElementOptions(d, e.active ? "active" : s), 
                            n && (u.options.radius = 0)), this.updateElement(e, d, u, s);
                        }
                    }
                    resolveDataElementOptions(t, e) {
                        const i = this.getParsed(t);
                        let s = super.resolveDataElementOptions(t, e);
                        s.$shared && (s = Object.assign({}, s, {
                            $shared: !1
                        }));
                        const n = s.radius;
                        return "active" !== e && (s.radius = 0), s.radius += l(i && i._custom, n), s;
                    }
                },
                DoughnutController: jn,
                LineController: class extends Ns {
                    static id="line";
                    static defaults={
                        datasetElementType: "line",
                        dataElementType: "point",
                        showLine: !0,
                        spanGaps: !1
                    };
                    static overrides={
                        scales: {
                            _index_: {
                                type: "category"
                            },
                            _value_: {
                                type: "linear"
                            }
                        }
                    };
                    initialize() {
                        this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
                    }
                    update(t) {
                        const e = this._cachedMeta, {dataset: i, data: s = [], _dataset: n} = e, o = this.chart._animationsDisabled;
                        let {start: a, count: r} = pt(e, s, o);
                        this._drawStart = a, this._drawCount = r, mt(e) && (a = 0, r = s.length), i._chart = this.chart, 
                        i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s;
                        const l = this.resolveDatasetElementOptions(t);
                        this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, 
                        this.updateElement(i, void 0, {
                            animated: !o,
                            options: l
                        }, t), this.updateElements(s, a, r, t);
                    }
                    updateElements(t, e, i, n) {
                        const o = "reset" === n, {iScale: a, vScale: r, _stacked: l, _dataset: h} = this._cachedMeta, {sharedOptions: c, includeOptions: d} = this._getSharedOptions(e, n), u = a.axis, f = r.axis, {spanGaps: g, segment: p} = this.options, m = N(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || "none" === n, x = e + i, _ = t.length;
                        let y = e > 0 && this.getParsed(e - 1);
                        for (let i = 0; i < _; ++i) {
                            const g = t[i], _ = b ? g : {};
                            if (i < e || i >= x) {
                                _.skip = !0;
                                continue;
                            }
                            const v = this.getParsed(i), M = s(v[f]), w = _[u] = a.getPixelForValue(v[u], i), k = _[f] = o || M ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, v, l) : v[f], i);
                            _.skip = isNaN(w) || isNaN(k) || M, _.stop = i > 0 && Math.abs(v[u] - y[u]) > m, 
                            p && (_.parsed = v, _.raw = h.data[i]), d && (_.options = c || this.resolveDataElementOptions(i, g.active ? "active" : n)), 
                            b || this.updateElement(g, i, _, n), y = v;
                        }
                    }
                    getMaxOverflow() {
                        const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, s = t.data || [];
                        if (!s.length) return i;
                        const n = s[0].size(this.resolveDataElementOptions(0)), o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
                        return Math.max(i, n, o) / 2;
                    }
                    draw() {
                        const t = this._cachedMeta;
                        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
                    }
                },
                PieController: class extends jn {
                    static id="pie";
                    static defaults={
                        cutout: 0,
                        rotation: 0,
                        circumference: 360,
                        radius: "100%"
                    };
                },
                PolarAreaController: $n,
                RadarController: class extends Ns {
                    static id="radar";
                    static defaults={
                        datasetElementType: "line",
                        dataElementType: "point",
                        indexAxis: "r",
                        showLine: !0,
                        elements: {
                            line: {
                                fill: "start"
                            }
                        }
                    };
                    static overrides={
                        aspectRatio: 1,
                        scales: {
                            r: {
                                type: "radialLinear"
                            }
                        }
                    };
                    getLabelAndValue(t) {
                        const e = this._cachedMeta.vScale, i = this.getParsed(t);
                        return {
                            label: e.getLabels()[t],
                            value: "" + e.getLabelForValue(i[e.axis])
                        };
                    }
                    parseObjectData(t, e, i, s) {
                        return ii.bind(this)(t, e, i, s);
                    }
                    update(t) {
                        const e = this._cachedMeta, i = e.dataset, s = e.data || [], n = e.iScale.getLabels();
                        if (i.points = s, "resize" !== t) {
                            const e = this.resolveDatasetElementOptions(t);
                            this.options.showLine || (e.borderWidth = 0);
                            const o = {
                                _loop: !0,
                                _fullLoop: n.length === s.length,
                                options: e
                            };
                            this.updateElement(i, void 0, o, t);
                        }
                        this.updateElements(s, 0, s.length, t);
                    }
                    updateElements(t, e, i, s) {
                        const n = this._cachedMeta.rScale, o = "reset" === s;
                        for (let a = e; a < e + i; a++) {
                            const e = t[a], i = this.resolveDataElementOptions(a, e.active ? "active" : s), r = n.getPointPositionForValue(a, this.getParsed(a).r), l = o ? n.xCenter : r.x, h = o ? n.yCenter : r.y, c = {
                                x: l,
                                y: h,
                                angle: r.angle,
                                skip: isNaN(l) || isNaN(h),
                                options: i
                            };
                            this.updateElement(e, a, c, s);
                        }
                    }
                },
                ScatterController: class extends Ns {
                    static id="scatter";
                    static defaults={
                        datasetElementType: !1,
                        dataElementType: "point",
                        showLine: !1,
                        fill: !1
                    };
                    static overrides={
                        interaction: {
                            mode: "point"
                        },
                        scales: {
                            x: {
                                type: "linear"
                            },
                            y: {
                                type: "linear"
                            }
                        }
                    };
                    getLabelAndValue(t) {
                        const e = this._cachedMeta, i = this.chart.data.labels || [], {xScale: s, yScale: n} = e, o = this.getParsed(t), a = s.getLabelForValue(o.x), r = n.getLabelForValue(o.y);
                        return {
                            label: i[t] || "",
                            value: "(" + a + ", " + r + ")"
                        };
                    }
                    update(t) {
                        const e = this._cachedMeta, {data: i = []} = e, s = this.chart._animationsDisabled;
                        let {start: n, count: o} = pt(e, i, s);
                        if (this._drawStart = n, this._drawCount = o, mt(e) && (n = 0, o = i.length), this.options.showLine) {
                            this.datasetElementType || this.addElements();
                            const {dataset: n, _dataset: o} = e;
                            n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, 
                            n.points = i;
                            const a = this.resolveDatasetElementOptions(t);
                            a.segment = this.options.segment, this.updateElement(n, void 0, {
                                animated: !s,
                                options: a
                            }, t);
                        } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
                        this.updateElements(i, n, o, t);
                    }
                    addElements() {
                        const {showLine: t} = this.options;
                        !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), 
                        super.addElements();
                    }
                    updateElements(t, e, i, n) {
                        const o = "reset" === n, {iScale: a, vScale: r, _stacked: l, _dataset: h} = this._cachedMeta, c = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(c), u = this.includeOptions(n, d), f = a.axis, g = r.axis, {spanGaps: p, segment: m} = this.options, b = N(p) ? p : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || "none" === n;
                        let _ = e > 0 && this.getParsed(e - 1);
                        for (let c = e; c < e + i; ++c) {
                            const e = t[c], i = this.getParsed(c), p = x ? e : {}, y = s(i[g]), v = p[f] = a.getPixelForValue(i[f], c), M = p[g] = o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, i, l) : i[g], c);
                            p.skip = isNaN(v) || isNaN(M) || y, p.stop = c > 0 && Math.abs(i[f] - _[f]) > b, 
                            m && (p.parsed = i, p.raw = h.data[c]), u && (p.options = d || this.resolveDataElementOptions(c, e.active ? "active" : n)), 
                            x || this.updateElement(e, c, p, n), _ = i;
                        }
                        this.updateSharedOptions(d, n, c);
                    }
                    getMaxOverflow() {
                        const t = this._cachedMeta, e = t.data || [];
                        if (!this.options.showLine) {
                            let t = 0;
                            for (let i = e.length - 1; i >= 0; --i) t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
                            return t > 0 && t;
                        }
                        const i = t.dataset, s = i.options && i.options.borderWidth || 0;
                        if (!e.length) return s;
                        const n = e[0].size(this.resolveDataElementOptions(0)), o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                        return Math.max(s, n, o) / 2;
                    }
                }
            });
            function Un(t, e, i, s) {
                const n = vi(t.options.borderRadius, [ "outerStart", "outerEnd", "innerStart", "innerEnd" ]);
                const o = (i - e) / 2, a = Math.min(o, s * e / 2), r = t => {
                    const e = (i - Math.min(o, t)) * s / 2;
                    return J(t, 0, Math.min(o, e));
                };
                return {
                    outerStart: r(n.outerStart),
                    outerEnd: r(n.outerEnd),
                    innerStart: J(n.innerStart, 0, a),
                    innerEnd: J(n.innerEnd, 0, a)
                };
            }
            function Xn(t, e, i, s) {
                return {
                    x: i + t * Math.cos(e),
                    y: s + t * Math.sin(e)
                };
            }
            function qn(t, e, i, s, n, o) {
                const {x: a, y: r, startAngle: l, pixelMargin: h, innerRadius: c} = e, d = Math.max(e.outerRadius + s + i - h, 0), u = c > 0 ? c + s + i + h : 0;
                let f = 0;
                const g = n - l;
                if (s) {
                    const t = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;
                    f = (g - (0 !== t ? g * t / (t + s) : g)) / 2;
                }
                const p = (g - Math.max(.001, g * d - i / C) / d) / 2, m = l + p + f, b = n - p - f, {outerStart: x, outerEnd: _, innerStart: y, innerEnd: v} = Un(e, u, d, b - m), M = d - x, w = d - _, k = m + x / M, S = b - _ / w, P = u + y, D = u + v, O = m + y / P, A = b - v / D;
                if (t.beginPath(), o) {
                    const e = (k + S) / 2;
                    if (t.arc(a, r, d, k, e), t.arc(a, r, d, e, S), _ > 0) {
                        const e = Xn(w, S, a, r);
                        t.arc(e.x, e.y, _, S, b + E);
                    }
                    const i = Xn(D, b, a, r);
                    if (t.lineTo(i.x, i.y), v > 0) {
                        const e = Xn(D, A, a, r);
                        t.arc(e.x, e.y, v, b + E, A + Math.PI);
                    }
                    const s = (b - v / u + (m + y / u)) / 2;
                    if (t.arc(a, r, u, b - v / u, s, !0), t.arc(a, r, u, s, m + y / u, !0), y > 0) {
                        const e = Xn(P, O, a, r);
                        t.arc(e.x, e.y, y, O + Math.PI, m - E);
                    }
                    const n = Xn(M, m, a, r);
                    if (t.lineTo(n.x, n.y), x > 0) {
                        const e = Xn(M, k, a, r);
                        t.arc(e.x, e.y, x, m - E, k);
                    }
                } else {
                    t.moveTo(a, r);
                    const e = Math.cos(k) * d + a, i = Math.sin(k) * d + r;
                    t.lineTo(e, i);
                    const s = Math.cos(S) * d + a, n = Math.sin(S) * d + r;
                    t.lineTo(s, n);
                }
                t.closePath();
            }
            function Kn(t, e, i, s, n) {
                const {fullCircles: o, startAngle: a, circumference: r, options: l} = e, {borderWidth: h, borderJoinStyle: c, borderDash: d, borderDashOffset: u} = l, f = "inner" === l.borderAlign;
                if (!h) return;
                t.setLineDash(d || []), t.lineDashOffset = u, f ? (t.lineWidth = 2 * h, t.lineJoin = c || "round") : (t.lineWidth = h, 
                t.lineJoin = c || "bevel");
                let g = e.endAngle;
                if (o) {
                    qn(t, e, i, s, g, n);
                    for (let e = 0; e < o; ++e) t.stroke();
                    isNaN(r) || (g = a + (r % O || O));
                }
                f && function(t, e, i) {
                    const {startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l} = e;
                    let h = n / r;
                    t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + E, s - E), 
                    t.closePath(), t.clip();
                }(t, e, g), o || (qn(t, e, i, s, g, n), t.stroke());
            }
            function Gn(t, e, i = e) {
                t.lineCap = l(i.borderCapStyle, e.borderCapStyle), t.setLineDash(l(i.borderDash, e.borderDash)), 
                t.lineDashOffset = l(i.borderDashOffset, e.borderDashOffset), t.lineJoin = l(i.borderJoinStyle, e.borderJoinStyle), 
                t.lineWidth = l(i.borderWidth, e.borderWidth), t.strokeStyle = l(i.borderColor, e.borderColor);
            }
            function Zn(t, e, i) {
                t.lineTo(i.x, i.y);
            }
            function Jn(t, e, i = {}) {
                const s = t.length, {start: n = 0, end: o = s - 1} = i, {start: a, end: r} = e, l = Math.max(n, a), h = Math.min(o, r), c = n < a && o < a || n > r && o > r;
                return {
                    count: s,
                    start: l,
                    loop: e.loop,
                    ilen: h < l && !c ? s + h - l : h - l
                };
            }
            function Qn(t, e, i, s) {
                const {points: n, options: o} = e, {count: a, start: r, loop: l, ilen: h} = Jn(n, i, s), c = function(t) {
                    return t.stepped ? Fe : t.tension || "monotone" === t.cubicInterpolationMode ? Ve : Zn;
                }(o);
                let d, u, f, {move: g = !0, reverse: p} = s || {};
                for (d = 0; d <= h; ++d) u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), 
                g = !1) : c(t, f, u, p, o.stepped), f = u);
                return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l;
            }
            function to(t, e, i, s) {
                const n = e.points, {count: o, start: a, ilen: r} = Jn(n, i, s), {move: l = !0, reverse: h} = s || {};
                let c, d, u, f, g, p, m = 0, b = 0;
                const x = t => (a + (h ? r - t : t)) % o, _ = () => {
                    f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
                };
                for (l && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
                    if (d = n[x(c)], d.skip) continue;
                    const e = d.x, i = d.y, s = 0 | e;
                    s === u ? (i < f ? f = i : i > g && (g = i), m = (b * m + e) / ++b) : (_(), t.lineTo(e, i), 
                    u = s, b = 0, f = g = i), p = i;
                }
                _();
            }
            function eo(t) {
                const e = t.options, i = e.borderDash && e.borderDash.length;
                return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? to : Qn;
            }
            const io = "function" == typeof Path2D;
            function so(t, e, i, s) {
                io && !e.options.segment ? function(t, e, i, s) {
                    let n = e._path;
                    n || (n = e._path = new Path2D, e.path(n, i, s) && n.closePath()), Gn(t, e.options), 
                    t.stroke(n);
                }(t, e, i, s) : function(t, e, i, s) {
                    const {segments: n, options: o} = e, a = eo(e);
                    for (const r of n) Gn(t, o, r.style), t.beginPath(), a(t, e, r, {
                        start: i,
                        end: i + s - 1
                    }) && t.closePath(), t.stroke();
                }(t, e, i, s);
            }
            class no extends Hs {
                static id="line";
                static defaults={
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    borderWidth: 3,
                    capBezierPoints: !0,
                    cubicInterpolationMode: "default",
                    fill: !1,
                    spanGaps: !1,
                    stepped: !1,
                    tension: 0
                };
                static defaultRoutes={
                    backgroundColor: "backgroundColor",
                    borderColor: "borderColor"
                };
                static descriptors={
                    _scriptable: !0,
                    _indexable: t => "borderDash" !== t && "fill" !== t
                };
                constructor(t) {
                    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, 
                    this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, 
                    this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
                }
                updateControlPoints(t, e) {
                    const i = this.options;
                    if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                        const s = i.spanGaps ? this._loop : this._fullLoop;
                        hi(this._points, i, t, s, e), this._pointsUpdated = !0;
                    }
                }
                set points(t) {
                    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
                }
                get points() {
                    return this._points;
                }
                get segments() {
                    return this._segments || (this._segments = zi(this, this.options.segment));
                }
                first() {
                    const t = this.segments, e = this.points;
                    return t.length && e[t[0].start];
                }
                last() {
                    const t = this.segments, e = this.points, i = t.length;
                    return i && e[t[i - 1].end];
                }
                interpolate(t, e) {
                    const i = this.options, s = t[e], n = this.points, o = Ii(this, {
                        property: e,
                        start: s,
                        end: s
                    });
                    if (!o.length) return;
                    const a = [], r = function(t) {
                        return t.stepped ? pi : t.tension || "monotone" === t.cubicInterpolationMode ? mi : gi;
                    }(i);
                    let l, h;
                    for (l = 0, h = o.length; l < h; ++l) {
                        const {start: h, end: c} = o[l], d = n[h], u = n[c];
                        if (d === u) {
                            a.push(d);
                            continue;
                        }
                        const f = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
                        f[e] = t[e], a.push(f);
                    }
                    return 1 === a.length ? a[0] : a;
                }
                pathSegment(t, e, i) {
                    return eo(this)(t, this, e, i);
                }
                path(t, e, i) {
                    const s = this.segments, n = eo(this);
                    let o = this._loop;
                    e = e || 0, i = i || this.points.length - e;
                    for (const a of s) o &= n(t, this, a, {
                        start: e,
                        end: e + i - 1
                    });
                    return !!o;
                }
                draw(t, e, i, s) {
                    const n = this.options || {};
                    (this.points || []).length && n.borderWidth && (t.save(), so(t, this, i, s), t.restore()), 
                    this.animated && (this._pointsUpdated = !1, this._path = void 0);
                }
            }
            function oo(t, e, i, s) {
                const n = t.options, {[i]: o} = t.getProps([ i ], s);
                return Math.abs(e - o) < n.radius + n.hitRadius;
            }
            function ao(t, e) {
                const {x: i, y: s, base: n, width: o, height: a} = t.getProps([ "x", "y", "base", "width", "height" ], e);
                let r, l, h, c, d;
                return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, 
                c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), 
                {
                    left: r,
                    top: h,
                    right: l,
                    bottom: c
                };
            }
            function ro(t, e, i, s) {
                return t ? 0 : J(e, i, s);
            }
            function lo(t) {
                const e = ao(t), i = e.right - e.left, s = e.bottom - e.top, n = function(t, e, i) {
                    const s = t.options.borderWidth, n = t.borderSkipped, o = Mi(s);
                    return {
                        t: ro(n.top, o.top, 0, i),
                        r: ro(n.right, o.right, 0, e),
                        b: ro(n.bottom, o.bottom, 0, i),
                        l: ro(n.left, o.left, 0, e)
                    };
                }(t, i / 2, s / 2), a = function(t, e, i) {
                    const {enableBorderRadius: s} = t.getProps([ "enableBorderRadius" ]), n = t.options.borderRadius, a = wi(n), r = Math.min(e, i), l = t.borderSkipped, h = s || o(n);
                    return {
                        topLeft: ro(!h || l.top || l.left, a.topLeft, 0, r),
                        topRight: ro(!h || l.top || l.right, a.topRight, 0, r),
                        bottomLeft: ro(!h || l.bottom || l.left, a.bottomLeft, 0, r),
                        bottomRight: ro(!h || l.bottom || l.right, a.bottomRight, 0, r)
                    };
                }(t, i / 2, s / 2);
                return {
                    outer: {
                        x: e.left,
                        y: e.top,
                        w: i,
                        h: s,
                        radius: a
                    },
                    inner: {
                        x: e.left + n.l,
                        y: e.top + n.t,
                        w: i - n.l - n.r,
                        h: s - n.t - n.b,
                        radius: {
                            topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)),
                            topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)),
                            bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)),
                            bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r))
                        }
                    }
                };
            }
            function ho(t, e, i, s) {
                const n = null === e, o = null === i, a = t && !(n && o) && ao(t, s);
                return a && (n || tt(e, a.left, a.right)) && (o || tt(i, a.top, a.bottom));
            }
            function co(t, e) {
                t.rect(e.x, e.y, e.w, e.h);
            }
            function uo(t, e, i = {}) {
                const s = t.x !== i.x ? -e : 0, n = t.y !== i.y ? -e : 0, o = (t.x + t.w !== i.x + i.w ? e : 0) - s, a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
                return {
                    x: t.x + s,
                    y: t.y + n,
                    w: t.w + o,
                    h: t.h + a,
                    radius: t.radius
                };
            }
            var fo = Object.freeze({
                __proto__: null,
                ArcElement: class extends Hs {
                    static id="arc";
                    static defaults={
                        borderAlign: "center",
                        borderColor: "#fff",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: void 0,
                        borderRadius: 0,
                        borderWidth: 2,
                        offset: 0,
                        spacing: 0,
                        angle: void 0,
                        circular: !0
                    };
                    static defaultRoutes={
                        backgroundColor: "backgroundColor"
                    };
                    static descriptors={
                        _scriptable: !0,
                        _indexable: t => "borderDash" !== t
                    };
                    circumference;
                    endAngle;
                    fullCircles;
                    innerRadius;
                    outerRadius;
                    pixelMargin;
                    startAngle;
                    constructor(t) {
                        super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, 
                        this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, 
                        this.fullCircles = 0, t && Object.assign(this, t);
                    }
                    inRange(t, e, i) {
                        const s = this.getProps([ "x", "y" ], i), {angle: n, distance: o} = X(s, {
                            x: t,
                            y: e
                        }), {startAngle: a, endAngle: r, innerRadius: h, outerRadius: c, circumference: d} = this.getProps([ "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference" ], i), u = (this.options.spacing + this.options.borderWidth) / 2, f = l(d, r - a) >= O || Z(n, a, r), g = tt(o, h + u, c + u);
                        return f && g;
                    }
                    getCenterPoint(t) {
                        const {x: e, y: i, startAngle: s, endAngle: n, innerRadius: o, outerRadius: a} = this.getProps([ "x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius" ], t), {offset: r, spacing: l} = this.options, h = (s + n) / 2, c = (o + a + l + r) / 2;
                        return {
                            x: e + Math.cos(h) * c,
                            y: i + Math.sin(h) * c
                        };
                    }
                    tooltipPosition(t) {
                        return this.getCenterPoint(t);
                    }
                    draw(t) {
                        const {options: e, circumference: i} = this, s = (e.offset || 0) / 4, n = (e.spacing || 0) / 2, o = e.circular;
                        if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > O ? Math.floor(i / O) : 0, 
                        0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
                        t.save();
                        const a = (this.startAngle + this.endAngle) / 2;
                        t.translate(Math.cos(a) * s, Math.sin(a) * s);
                        const r = s * (1 - Math.sin(Math.min(C, i || 0)));
                        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, function(t, e, i, s, n) {
                            const {fullCircles: o, startAngle: a, circumference: r} = e;
                            let l = e.endAngle;
                            if (o) {
                                qn(t, e, i, s, l, n);
                                for (let e = 0; e < o; ++e) t.fill();
                                isNaN(r) || (l = a + (r % O || O));
                            }
                            qn(t, e, i, s, l, n), t.fill();
                        }(t, this, r, n, o), Kn(t, this, r, n, o), t.restore();
                    }
                },
                BarElement: class extends Hs {
                    static id="bar";
                    static defaults={
                        borderSkipped: "start",
                        borderWidth: 0,
                        borderRadius: 0,
                        inflateAmount: "auto",
                        pointStyle: void 0
                    };
                    static defaultRoutes={
                        backgroundColor: "backgroundColor",
                        borderColor: "borderColor"
                    };
                    constructor(t) {
                        super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, 
                        this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
                    }
                    draw(t) {
                        const {inflateAmount: e, options: {borderColor: i, backgroundColor: s}} = this, {inner: n, outer: o} = lo(this), a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? He : co;
                        var r;
                        t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), a(t, uo(o, e, n)), t.clip(), 
                        a(t, uo(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, uo(n, e)), 
                        t.fillStyle = s, t.fill(), t.restore();
                    }
                    inRange(t, e, i) {
                        return ho(this, t, e, i);
                    }
                    inXRange(t, e) {
                        return ho(this, t, null, e);
                    }
                    inYRange(t, e) {
                        return ho(this, null, t, e);
                    }
                    getCenterPoint(t) {
                        const {x: e, y: i, base: s, horizontal: n} = this.getProps([ "x", "y", "base", "horizontal" ], t);
                        return {
                            x: n ? (e + s) / 2 : e,
                            y: n ? i : (i + s) / 2
                        };
                    }
                    getRange(t) {
                        return "x" === t ? this.width / 2 : this.height / 2;
                    }
                },
                LineElement: no,
                PointElement: class extends Hs {
                    static id="point";
                    parsed;
                    skip;
                    stop;
                    static defaults={
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverBorderWidth: 1,
                        hoverRadius: 4,
                        pointStyle: "circle",
                        radius: 3,
                        rotation: 0
                    };
                    static defaultRoutes={
                        backgroundColor: "backgroundColor",
                        borderColor: "borderColor"
                    };
                    constructor(t) {
                        super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, 
                        t && Object.assign(this, t);
                    }
                    inRange(t, e, i) {
                        const s = this.options, {x: n, y: o} = this.getProps([ "x", "y" ], i);
                        return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
                    }
                    inXRange(t, e) {
                        return oo(this, t, "x", e);
                    }
                    inYRange(t, e) {
                        return oo(this, t, "y", e);
                    }
                    getCenterPoint(t) {
                        const {x: e, y: i} = this.getProps([ "x", "y" ], t);
                        return {
                            x: e,
                            y: i
                        };
                    }
                    size(t) {
                        let e = (t = t || this.options || {}).radius || 0;
                        e = Math.max(e, e && t.hoverRadius || 0);
                        return 2 * (e + (e && t.borderWidth || 0));
                    }
                    draw(t, e) {
                        const i = this.options;
                        this.skip || i.radius < .1 || !Re(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, 
                        t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Le(t, i, this.x, this.y));
                    }
                    getRange() {
                        const t = this.options || {};
                        return t.radius + t.hitRadius;
                    }
                }
            });
            function go(t, e, i, s) {
                const n = t.indexOf(e);
                if (-1 === n) return ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, 
                s.unshift({
                    index: i,
                    label: e
                })) : isNaN(e) && (i = null), i))(t, e, i, s);
                return n !== t.lastIndexOf(e) ? i : n;
            }
            function po(t) {
                const e = this.getLabels();
                return t >= 0 && t < e.length ? e[t] : t;
            }
            function mo(t, e, {horizontal: i, minRotation: s}) {
                const n = $(s), o = (i ? Math.sin(n) : Math.cos(n)) || .001, a = .75 * e * ("" + t).length;
                return Math.min(e / o, a);
            }
            class bo extends Js {
                constructor(t) {
                    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, 
                    this._valueRange = 0;
                }
                parse(t, e) {
                    return s(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t;
                }
                handleTickRangeOptions() {
                    const {beginAtZero: t} = this.options, {minDefined: e, maxDefined: i} = this.getUserBounds();
                    let {min: s, max: n} = this;
                    const o = t => s = e ? s : t, a = t => n = i ? n : t;
                    if (t) {
                        const t = F(s), e = F(n);
                        t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
                    }
                    if (s === n) {
                        let e = 0 === n ? 1 : Math.abs(.05 * n);
                        a(n + e), t || o(s - e);
                    }
                    this.min = s, this.max = n;
                }
                getTickLimit() {
                    const t = this.options.ticks;
                    let e, {maxTicksLimit: i, stepSize: s} = t;
                    return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), 
                    e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), 
                    e;
                }
                computeTickLimit() {
                    return Number.POSITIVE_INFINITY;
                }
                buildTicks() {
                    const t = this.options, e = t.ticks;
                    let i = this.getTickLimit();
                    i = Math.max(2, i);
                    const n = function(t, e) {
                        const i = [], {bounds: n, step: o, min: a, max: r, precision: l, count: h, maxTicks: c, maxDigits: d, includeBounds: u} = t, f = o || 1, g = c - 1, {min: p, max: m} = e, b = !s(a), x = !s(r), _ = !s(h), y = (m - p) / (d + 1);
                        let v, M, w, k, S = B((m - p) / g / f) * f;
                        if (S < 1e-14 && !b && !x) return [ {
                            value: p
                        }, {
                            value: m
                        } ];
                        k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = B(k * S / g / f) * f), s(l) || (v = Math.pow(10, l), 
                        S = Math.ceil(S * v) / v), "ticks" === n ? (M = Math.floor(p / S) * S, w = Math.ceil(m / S) * S) : (M = p, 
                        w = m), b && x && o && H((r - a) / o, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), 
                        S = (r - a) / k, M = a, w = r) : _ ? (M = b ? a : M, w = x ? r : w, k = h - 1, S = (w - M) / k) : (k = (w - M) / S, 
                        k = V(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
                        const P = Math.max(U(S), U(M));
                        v = Math.pow(10, s(l) ? P : l), M = Math.round(M * v) / v, w = Math.round(w * v) / v;
                        let D = 0;
                        for (b && (u && M !== a ? (i.push({
                            value: a
                        }), M < a && D++, V(Math.round((M + D * S) * v) / v, a, mo(a, y, t)) && D++) : M < a && D++); D < k; ++D) {
                            const t = Math.round((M + D * S) * v) / v;
                            if (x && t > r) break;
                            i.push({
                                value: t
                            });
                        }
                        return x && u && w !== r ? i.length && V(i[i.length - 1].value, r, mo(r, y, t)) ? i[i.length - 1].value = r : i.push({
                            value: r
                        }) : x && w !== r || i.push({
                            value: w
                        }), i;
                    }({
                        maxTicks: i,
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds
                    }, this._range || this);
                    return "ticks" === t.bounds && j(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, 
                    this.end = this.min) : (this.start = this.min, this.end = this.max), n;
                }
                configure() {
                    const t = this.ticks;
                    let e = this.min, i = this.max;
                    if (super.configure(), this.options.offset && t.length) {
                        const s = (i - e) / Math.max(t.length - 1, 1) / 2;
                        e -= s, i += s;
                    }
                    this._startValue = e, this._endValue = i, this._valueRange = i - e;
                }
                getLabelForValue(t) {
                    return ne(t, this.chart.options.locale, this.options.ticks.format);
                }
            }
            class xo extends bo {
                static id="linear";
                static defaults={
                    ticks: {
                        callback: ae.formatters.numeric
                    }
                };
                determineDataLimits() {
                    const {min: t, max: e} = this.getMinMax(!0);
                    this.min = a(t) ? t : 0, this.max = a(e) ? e : 1, this.handleTickRangeOptions();
                }
                computeTickLimit() {
                    const t = this.isHorizontal(), e = t ? this.width : this.height, i = $(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || .001, n = this._resolveTickFontOptions(0);
                    return Math.ceil(e / Math.min(40, n.lineHeight / s));
                }
                getPixelForValue(t) {
                    return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
                }
                getValueForPixel(t) {
                    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
                }
            }
            const _o = t => Math.floor(z(t)), yo = (t, e) => Math.pow(10, _o(t) + e);
            function vo(t) {
                return 1 === t / Math.pow(10, _o(t));
            }
            function Mo(t, e, i) {
                const s = Math.pow(10, i), n = Math.floor(t / s);
                return Math.ceil(e / s) - n;
            }
            function wo(t, {min: e, max: i}) {
                e = r(t.min, e);
                const s = [], n = _o(e);
                let o = function(t, e) {
                    let i = _o(e - t);
                    for (;Mo(t, e, i) > 10; ) i++;
                    for (;Mo(t, e, i) < 10; ) i--;
                    return Math.min(i, _o(t));
                }(e, i), a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                const l = Math.pow(10, o), h = n > o ? Math.pow(10, n) : 0, c = Math.round((e - h) * a) / a, d = Math.floor((e - h) / l / 10) * l * 10;
                let u = Math.floor((c - d) / Math.pow(10, o)), f = r(t.min, Math.round((h + d + u * Math.pow(10, o)) * a) / a);
                for (;f < i; ) s.push({
                    value: f,
                    major: vo(f),
                    significand: u
                }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, a = o >= 0 ? 1 : a), 
                f = Math.round((h + d + u * Math.pow(10, o)) * a) / a;
                const g = r(t.max, f);
                return s.push({
                    value: g,
                    major: vo(g),
                    significand: u
                }), s;
            }
            class ko extends Js {
                static id="logarithmic";
                static defaults={
                    ticks: {
                        callback: ae.formatters.logarithmic,
                        major: {
                            enabled: !0
                        }
                    }
                };
                constructor(t) {
                    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
                }
                parse(t, e) {
                    const i = bo.prototype.parse.apply(this, [ t, e ]);
                    if (0 !== i) return a(i) && i > 0 ? i : null;
                    this._zero = !0;
                }
                determineDataLimits() {
                    const {min: t, max: e} = this.getMinMax(!0);
                    this.min = a(t) ? Math.max(0, t) : null, this.max = a(e) ? Math.max(0, e) : null, 
                    this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !a(this._userMin) && (this.min = t === yo(this.min, 0) ? yo(this.min, -1) : yo(this.min, 0)), 
                    this.handleTickRangeOptions();
                }
                handleTickRangeOptions() {
                    const {minDefined: t, maxDefined: e} = this.getUserBounds();
                    let i = this.min, s = this.max;
                    const n = e => i = t ? i : e, o = t => s = e ? s : t;
                    i === s && (i <= 0 ? (n(1), o(10)) : (n(yo(i, -1)), o(yo(s, 1)))), i <= 0 && n(yo(s, -1)), 
                    s <= 0 && o(yo(i, 1)), this.min = i, this.max = s;
                }
                buildTicks() {
                    const t = this.options, e = wo({
                        min: this._userMin,
                        max: this._userMax
                    }, this);
                    return "ticks" === t.bounds && j(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, 
                    this.end = this.min) : (this.start = this.min, this.end = this.max), e;
                }
                getLabelForValue(t) {
                    return void 0 === t ? "0" : ne(t, this.chart.options.locale, this.options.ticks.format);
                }
                configure() {
                    const t = this.min;
                    super.configure(), this._startValue = z(t), this._valueRange = z(this.max) - z(t);
                }
                getPixelForValue(t) {
                    return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (z(t) - this._startValue) / this._valueRange);
                }
                getValueForPixel(t) {
                    const e = this.getDecimalForPixel(t);
                    return Math.pow(10, this._startValue + e * this._valueRange);
                }
            }
            function So(t) {
                const e = t.ticks;
                if (e.display && t.display) {
                    const t = ki(e.backdropPadding);
                    return l(e.font && e.font.size, ue.font.size) + t.height;
                }
                return 0;
            }
            function Po(t, e, i, s, n) {
                return t === s || t === n ? {
                    start: e - i / 2,
                    end: e + i / 2
                } : t < s || t > n ? {
                    start: e - i,
                    end: e
                } : {
                    start: e,
                    end: e + i
                };
            }
            function Do(t) {
                const e = {
                    l: t.left + t._padding.left,
                    r: t.right - t._padding.right,
                    t: t.top + t._padding.top,
                    b: t.bottom - t._padding.bottom
                }, i = Object.assign({}, e), s = [], o = [], a = t._pointLabels.length, r = t.options.pointLabels, l = r.centerPointLabels ? C / a : 0;
                for (let u = 0; u < a; u++) {
                    const a = r.setContext(t.getPointLabelContext(u));
                    o[u] = a.padding;
                    const f = t.getPointPosition(u, t.drawingArea + o[u], l), g = Si(a.font), p = (h = t.ctx, 
                    c = g, d = n(d = t._pointLabels[u]) ? d : [ d ], {
                        w: Oe(h, c.string, d),
                        h: d.length * c.lineHeight
                    });
                    s[u] = p;
                    const m = G(t.getIndexAngle(u) + l), b = Math.round(Y(m));
                    Co(i, e, m, Po(b, f.x, p.w, 0, 180), Po(b, f.y, p.h, 90, 270));
                }
                var h, c, d;
                t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function(t, e, i) {
                    const s = [], n = t._pointLabels.length, o = t.options, {centerPointLabels: a, display: r} = o.pointLabels, l = {
                        extra: So(o) / 2,
                        additionalAngle: a ? C / n : 0
                    };
                    let h;
                    for (let o = 0; o < n; o++) {
                        l.padding = i[o], l.size = e[o];
                        const n = Oo(t, o, l);
                        s.push(n), "auto" === r && (n.visible = Ao(n, h), n.visible && (h = n));
                    }
                    return s;
                }(t, s, o);
            }
            function Co(t, e, i, s, n) {
                const o = Math.abs(Math.sin(i)), a = Math.abs(Math.cos(i));
                let r = 0, l = 0;
                s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, 
                t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, 
                t.b = Math.max(t.b, e.b + l));
            }
            function Oo(t, e, i) {
                const s = t.drawingArea, {extra: n, additionalAngle: o, padding: a, size: r} = i, l = t.getPointPosition(e, s + n + a, o), h = Math.round(Y(G(l.angle + E))), c = function(t, e, i) {
                    90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e);
                    return t;
                }(l.y, r.h, h), d = function(t) {
                    if (0 === t || 180 === t) return "center";
                    if (t < 180) return "left";
                    return "right";
                }(h), u = function(t, e, i) {
                    "right" === i ? t -= e : "center" === i && (t -= e / 2);
                    return t;
                }(l.x, r.w, d);
                return {
                    visible: !0,
                    x: l.x,
                    y: c,
                    textAlign: d,
                    left: u,
                    top: c,
                    right: u + r.w,
                    bottom: c + r.h
                };
            }
            function Ao(t, e) {
                if (!e) return !0;
                const {left: i, top: s, right: n, bottom: o} = t;
                return !(Re({
                    x: i,
                    y: s
                }, e) || Re({
                    x: i,
                    y: o
                }, e) || Re({
                    x: n,
                    y: s
                }, e) || Re({
                    x: n,
                    y: o
                }, e));
            }
            function To(t, e, i) {
                const {left: n, top: o, right: a, bottom: r} = i, {backdropColor: l} = e;
                if (!s(l)) {
                    const i = wi(e.borderRadius), s = ki(e.backdropPadding);
                    t.fillStyle = l;
                    const h = n - s.left, c = o - s.top, d = a - n + s.width, u = r - o + s.height;
                    Object.values(i).some((t => 0 !== t)) ? (t.beginPath(), He(t, {
                        x: h,
                        y: c,
                        w: d,
                        h: u,
                        radius: i
                    }), t.fill()) : t.fillRect(h, c, d, u);
                }
            }
            function Lo(t, e, i, s) {
                const {ctx: n} = t;
                if (i) n.arc(t.xCenter, t.yCenter, e, 0, O); else {
                    let i = t.getPointPosition(0, e);
                    n.moveTo(i.x, i.y);
                    for (let o = 1; o < s; o++) i = t.getPointPosition(o, e), n.lineTo(i.x, i.y);
                }
            }
            class Eo extends bo {
                static id="radialLinear";
                static defaults={
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {
                        display: !0,
                        lineWidth: 1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    grid: {
                        circular: !1
                    },
                    startAngle: 0,
                    ticks: {
                        showLabelBackdrop: !0,
                        callback: ae.formatters.numeric
                    },
                    pointLabels: {
                        backdropColor: void 0,
                        backdropPadding: 2,
                        display: !0,
                        font: {
                            size: 10
                        },
                        callback: t => t,
                        padding: 5,
                        centerPointLabels: !1
                    }
                };
                static defaultRoutes={
                    "angleLines.color": "borderColor",
                    "pointLabels.color": "color",
                    "ticks.color": "color"
                };
                static descriptors={
                    angleLines: {
                        _fallback: "grid"
                    }
                };
                constructor(t) {
                    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, 
                    this._pointLabels = [], this._pointLabelItems = [];
                }
                setDimensions() {
                    const t = this._padding = ki(So(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
                    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), 
                    this.drawingArea = Math.floor(Math.min(e, i) / 2);
                }
                determineDataLimits() {
                    const {min: t, max: e} = this.getMinMax(!1);
                    this.min = a(t) && !isNaN(t) ? t : 0, this.max = a(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
                }
                computeTickLimit() {
                    return Math.ceil(this.drawingArea / So(this.options));
                }
                generateTickLabels(t) {
                    bo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => {
                        const i = d(this.options.pointLabels.callback, [ t, e ], this);
                        return i || 0 === i ? i : "";
                    })).filter(((t, e) => this.chart.getDataVisibility(e)));
                }
                fit() {
                    const t = this.options;
                    t.display && t.pointLabels.display ? Do(this) : this.setCenterPoint(0, 0, 0, 0);
                }
                setCenterPoint(t, e, i, s) {
                    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), 
                    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
                }
                getIndexAngle(t) {
                    return G(t * (O / (this._pointLabels.length || 1)) + $(this.options.startAngle || 0));
                }
                getDistanceFromCenterForValue(t) {
                    if (s(t)) return NaN;
                    const e = this.drawingArea / (this.max - this.min);
                    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
                }
                getValueForDistanceFromCenter(t) {
                    if (s(t)) return NaN;
                    const e = t / (this.drawingArea / (this.max - this.min));
                    return this.options.reverse ? this.max - e : this.min + e;
                }
                getPointLabelContext(t) {
                    const e = this._pointLabels || [];
                    if (t >= 0 && t < e.length) {
                        const i = e[t];
                        return function(t, e, i) {
                            return Ci(t, {
                                label: i,
                                index: e,
                                type: "pointLabel"
                            });
                        }(this.getContext(), t, i);
                    }
                }
                getPointPosition(t, e, i = 0) {
                    const s = this.getIndexAngle(t) - E + i;
                    return {
                        x: Math.cos(s) * e + this.xCenter,
                        y: Math.sin(s) * e + this.yCenter,
                        angle: s
                    };
                }
                getPointPositionForValue(t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
                }
                getBasePosition(t) {
                    return this.getPointPositionForValue(t || 0, this.getBaseValue());
                }
                getPointLabelPosition(t) {
                    const {left: e, top: i, right: s, bottom: n} = this._pointLabelItems[t];
                    return {
                        left: e,
                        top: i,
                        right: s,
                        bottom: n
                    };
                }
                drawBackground() {
                    const {backgroundColor: t, grid: {circular: e}} = this.options;
                    if (t) {
                        const i = this.ctx;
                        i.save(), i.beginPath(), Lo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), 
                        i.closePath(), i.fillStyle = t, i.fill(), i.restore();
                    }
                }
                drawGrid() {
                    const t = this.ctx, e = this.options, {angleLines: i, grid: s, border: n} = e, o = this._pointLabels.length;
                    let a, r, l;
                    if (e.pointLabels.display && function(t, e) {
                        const {ctx: i, options: {pointLabels: s}} = t;
                        for (let n = e - 1; n >= 0; n--) {
                            const e = t._pointLabelItems[n];
                            if (!e.visible) continue;
                            const o = s.setContext(t.getPointLabelContext(n));
                            To(i, o, e);
                            const a = Si(o.font), {x: r, y: l, textAlign: h} = e;
                            Ne(i, t._pointLabels[n], r, l + a.lineHeight / 2, a, {
                                color: o.color,
                                textAlign: h,
                                textBaseline: "middle"
                            });
                        }
                    }(this, o), s.display && this.ticks.forEach(((t, e) => {
                        if (0 !== e || 0 === e && this.min < 0) {
                            r = this.getDistanceFromCenterForValue(t.value);
                            const i = this.getContext(e), a = s.setContext(i), l = n.setContext(i);
                            !function(t, e, i, s, n) {
                                const o = t.ctx, a = e.circular, {color: r, lineWidth: l} = e;
                                !a && !s || !r || !l || i < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, 
                                o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Lo(t, i, a, s), 
                                o.closePath(), o.stroke(), o.restore());
                            }(this, a, r, o, l);
                        }
                    })), i.display) {
                        for (t.save(), a = o - 1; a >= 0; a--) {
                            const s = i.setContext(this.getPointLabelContext(a)), {color: n, lineWidth: o} = s;
                            o && n && (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, 
                            r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), 
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
                        }
                        t.restore();
                    }
                }
                drawBorder() {}
                drawLabels() {
                    const t = this.ctx, e = this.options, i = e.ticks;
                    if (!i.display) return;
                    const s = this.getIndexAngle(0);
                    let n, o;
                    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", 
                    t.textBaseline = "middle", this.ticks.forEach(((s, a) => {
                        if (0 === a && this.min >= 0 && !e.reverse) return;
                        const r = i.setContext(this.getContext(a)), l = Si(r.font);
                        if (n = this.getDistanceFromCenterForValue(this.ticks[a].value), r.showLabelBackdrop) {
                            t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor;
                            const e = ki(r.backdropPadding);
                            t.fillRect(-o / 2 - e.left, -n - l.size / 2 - e.top, o + e.width, l.size + e.height);
                        }
                        Ne(t, s.label, 0, -n, l, {
                            color: r.color,
                            strokeColor: r.textStrokeColor,
                            strokeWidth: r.textStrokeWidth
                        });
                    })), t.restore();
                }
                drawTitle() {}
            }
            const Ro = {
                millisecond: {
                    common: !0,
                    size: 1,
                    steps: 1e3
                },
                second: {
                    common: !0,
                    size: 1e3,
                    steps: 60
                },
                minute: {
                    common: !0,
                    size: 6e4,
                    steps: 60
                },
                hour: {
                    common: !0,
                    size: 36e5,
                    steps: 24
                },
                day: {
                    common: !0,
                    size: 864e5,
                    steps: 30
                },
                week: {
                    common: !1,
                    size: 6048e5,
                    steps: 4
                },
                month: {
                    common: !0,
                    size: 2628e6,
                    steps: 12
                },
                quarter: {
                    common: !1,
                    size: 7884e6,
                    steps: 4
                },
                year: {
                    common: !0,
                    size: 3154e7
                }
            }, Io = Object.keys(Ro);
            function zo(t, e) {
                return t - e;
            }
            function Fo(t, e) {
                if (s(e)) return null;
                const i = t._adapter, {parser: n, round: o, isoWeekday: r} = t._parseOpts;
                let l = e;
                return "function" == typeof n && (l = n(l)), a(l) || (l = "string" == typeof n ? i.parse(l, n) : i.parse(l)), 
                null === l ? null : (o && (l = "week" !== o || !N(r) && !0 !== r ? i.startOf(l, o) : i.startOf(l, "isoWeek", r)), 
                +l);
            }
            function Vo(t, e, i, s) {
                const n = Io.length;
                for (let o = Io.indexOf(t); o < n - 1; ++o) {
                    const t = Ro[Io[o]], n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                    if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Io[o];
                }
                return Io[n - 1];
            }
            function Bo(t, e, i) {
                if (i) {
                    if (i.length) {
                        const {lo: s, hi: n} = et(i, e);
                        t[i[s] >= e ? i[s] : i[n]] = !0;
                    }
                } else t[e] = !0;
            }
            function Wo(t, e, i) {
                const s = [], n = {}, o = e.length;
                let a, r;
                for (a = 0; a < o; ++a) r = e[a], n[r] = a, s.push({
                    value: r,
                    major: !1
                });
                return 0 !== o && i ? function(t, e, i, s) {
                    const n = t._adapter, o = +n.startOf(e[0].value, s), a = e[e.length - 1].value;
                    let r, l;
                    for (r = o; r <= a; r = +n.add(r, 1, s)) l = i[r], l >= 0 && (e[l].major = !0);
                    return e;
                }(t, s, n, i) : s;
            }
            class No extends Js {
                static id="time";
                static defaults={
                    bounds: "data",
                    adapters: {},
                    time: {
                        parser: !1,
                        unit: !1,
                        round: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {}
                    },
                    ticks: {
                        source: "auto",
                        callback: !1,
                        major: {
                            enabled: !1
                        }
                    }
                };
                constructor(t) {
                    super(t), this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, 
                    this._parseOpts = void 0;
                }
                init(t, e = {}) {
                    const i = t.time || (t.time = {}), s = this._adapter = new Rn._date(t.adapters.date);
                    s.init(e), x(i.displayFormats, s.formats()), this._parseOpts = {
                        parser: i.parser,
                        round: i.round,
                        isoWeekday: i.isoWeekday
                    }, super.init(t), this._normalized = e.normalized;
                }
                parse(t, e) {
                    return void 0 === t ? null : Fo(this, t);
                }
                beforeLayout() {
                    super.beforeLayout(), this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    };
                }
                determineDataLimits() {
                    const t = this.options, e = this._adapter, i = t.time.unit || "day";
                    let {min: s, max: n, minDefined: o, maxDefined: r} = this.getUserBounds();
                    function l(t) {
                        o || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max));
                    }
                    o && r || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), 
                    s = a(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = a(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, 
                    this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n);
                }
                _getLabelBounds() {
                    const t = this.getLabelTimestamps();
                    let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
                    return t.length && (e = t[0], i = t[t.length - 1]), {
                        min: e,
                        max: i
                    };
                }
                buildTicks() {
                    const t = this.options, e = t.time, i = t.ticks, s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                    "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
                    const n = this.min, o = nt(s, n, this.max);
                    return this._unit = e.unit || (i.autoSkip ? Vo(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function(t, e, i, s, n) {
                        for (let o = Io.length - 1; o >= Io.indexOf(i); o--) {
                            const i = Io[o];
                            if (Ro[i].common && t._adapter.diff(n, s, i) >= e - 1) return i;
                        }
                        return Io[i ? Io.indexOf(i) : 0];
                    }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                        for (let e = Io.indexOf(t) + 1, i = Io.length; e < i; ++e) if (Ro[Io[e]].common) return Io[e];
                    }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), Wo(this, o, this._majorUnit);
                }
                afterAutoSkip() {
                    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value)));
                }
                initOffsets(t = []) {
                    let e, i, s = 0, n = 0;
                    this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, 
                    i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                    const o = t.length < 3 ? .5 : .25;
                    s = J(s, 0, o), n = J(n, 0, o), this._offsets = {
                        start: s,
                        end: n,
                        factor: 1 / (s + 1 + n)
                    };
                }
                _generate() {
                    const t = this._adapter, e = this.min, i = this.max, s = this.options, n = s.time, o = n.unit || Vo(n.minUnit, e, i, this._getLabelCapacity(e)), a = l(s.ticks.stepSize, 1), r = "week" === o && n.isoWeekday, h = N(r) || !0 === r, c = {};
                    let d, u, f = e;
                    if (h && (f = +t.startOf(f, "isoWeek", r)), f = +t.startOf(f, h ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o);
                    const g = "data" === s.ticks.source && this.getDataTimestamps();
                    for (d = f, u = 0; d < i; d = +t.add(d, a, o), u++) Bo(c, d, g);
                    return d !== i && "ticks" !== s.bounds && 1 !== u || Bo(c, d, g), Object.keys(c).sort(zo).map((t => +t));
                }
                getLabelForValue(t) {
                    const e = this._adapter, i = this.options.time;
                    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
                }
                format(t, e) {
                    const i = this.options.time.displayFormats, s = this._unit, n = e || i[s];
                    return this._adapter.format(t, n);
                }
                _tickFormatFunction(t, e, i, s) {
                    const n = this.options, o = n.ticks.callback;
                    if (o) return d(o, [ t, e, i ], this);
                    const a = n.time.displayFormats, r = this._unit, l = this._majorUnit, h = r && a[r], c = l && a[l], u = i[e], f = l && c && u && u.major;
                    return this._adapter.format(t, s || (f ? c : h));
                }
                generateTickLabels(t) {
                    let e, i, s;
                    for (e = 0, i = t.length; e < i; ++e) s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
                }
                getDecimalForValue(t) {
                    return null === t ? NaN : (t - this.min) / (this.max - this.min);
                }
                getPixelForValue(t) {
                    const e = this._offsets, i = this.getDecimalForValue(t);
                    return this.getPixelForDecimal((e.start + i) * e.factor);
                }
                getValueForPixel(t) {
                    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
                    return this.min + i * (this.max - this.min);
                }
                _getLabelSize(t) {
                    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = $(this.isHorizontal() ? e.maxRotation : e.minRotation), n = Math.cos(s), o = Math.sin(s), a = this._resolveTickFontOptions(0).size;
                    return {
                        w: i * n + a * o,
                        h: i * o + a * n
                    };
                }
                _getLabelCapacity(t) {
                    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, n = this._tickFormatFunction(t, 0, Wo(this, [ t ], this._majorUnit), s), o = this._getLabelSize(n), a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
                    return a > 0 ? a : 1;
                }
                getDataTimestamps() {
                    let t, e, i = this._cache.data || [];
                    if (i.length) return i;
                    const s = this.getMatchingVisibleMetas();
                    if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);
                    for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
                    return this._cache.data = this.normalize(i);
                }
                getLabelTimestamps() {
                    const t = this._cache.labels || [];
                    let e, i;
                    if (t.length) return t;
                    const s = this.getLabels();
                    for (e = 0, i = s.length; e < i; ++e) t.push(Fo(this, s[e]));
                    return this._cache.labels = this._normalized ? t : this.normalize(t);
                }
                normalize(t) {
                    return lt(t.sort(zo));
                }
            }
            function Ho(t, e, i) {
                let s, n, o, a, r = 0, l = t.length - 1;
                i ? (e >= t[r].pos && e <= t[l].pos && ({lo: r, hi: l} = it(t, "pos", e)), ({pos: s, time: o} = t[r]), 
                ({pos: n, time: a} = t[l])) : (e >= t[r].time && e <= t[l].time && ({lo: r, hi: l} = it(t, "time", e)), 
                ({time: s, pos: o} = t[r]), ({time: n, pos: a} = t[l]));
                const h = n - s;
                return h ? o + (a - o) * (e - s) / h : o;
            }
            var jo = Object.freeze({
                __proto__: null,
                CategoryScale: class extends Js {
                    static id="category";
                    static defaults={
                        ticks: {
                            callback: po
                        }
                    };
                    constructor(t) {
                        super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
                    }
                    init(t) {
                        const e = this._addedLabels;
                        if (e.length) {
                            const t = this.getLabels();
                            for (const {index: i, label: s} of e) t[i] === s && t.splice(i, 1);
                            this._addedLabels = [];
                        }
                        super.init(t);
                    }
                    parse(t, e) {
                        if (s(t)) return null;
                        const i = this.getLabels();
                        return ((t, e) => null === t ? null : J(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : go(i, t, l(e, t), this._addedLabels), i.length - 1);
                    }
                    determineDataLimits() {
                        const {minDefined: t, maxDefined: e} = this.getUserBounds();
                        let {min: i, max: s} = this.getMinMax(!0);
                        "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), 
                        this.min = i, this.max = s;
                    }
                    buildTicks() {
                        const t = this.min, e = this.max, i = this.options.offset, s = [];
                        let n = this.getLabels();
                        n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), 
                        this._startValue = this.min - (i ? .5 : 0);
                        for (let i = t; i <= e; i++) s.push({
                            value: i
                        });
                        return s;
                    }
                    getLabelForValue(t) {
                        return po.call(this, t);
                    }
                    configure() {
                        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
                    }
                    getPixelForValue(t) {
                        return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
                    }
                    getPixelForTick(t) {
                        const e = this.ticks;
                        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
                    }
                    getValueForPixel(t) {
                        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                    }
                    getBasePixel() {
                        return this.bottom;
                    }
                },
                LinearScale: xo,
                LogarithmicScale: ko,
                RadialLinearScale: Eo,
                TimeScale: No,
                TimeSeriesScale: class extends No {
                    static id="timeseries";
                    static defaults=No.defaults;
                    constructor(t) {
                        super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
                    }
                    initOffsets() {
                        const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
                        this._minPos = Ho(e, this.min), this._tableRange = Ho(e, this.max) - this._minPos, 
                        super.initOffsets(t);
                    }
                    buildLookupTable(t) {
                        const {min: e, max: i} = this, s = [], n = [];
                        let o, a, r, l, h;
                        for (o = 0, a = t.length; o < a; ++o) l = t[o], l >= e && l <= i && s.push(l);
                        if (s.length < 2) return [ {
                            time: e,
                            pos: 0
                        }, {
                            time: i,
                            pos: 1
                        } ];
                        for (o = 0, a = s.length; o < a; ++o) h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({
                            time: l,
                            pos: o / (a - 1)
                        });
                        return n;
                    }
                    _generate() {
                        const t = this.min, e = this.max;
                        let i = super.getDataTimestamps();
                        return i.includes(t) && i.length || i.splice(0, 0, t), i.includes(e) && 1 !== i.length || i.push(e), 
                        i.sort(((t, e) => t - e));
                    }
                    _getTimestampsForTable() {
                        let t = this._cache.all || [];
                        if (t.length) return t;
                        const e = this.getDataTimestamps(), i = this.getLabelTimestamps();
                        return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, 
                        t = this._cache.all = t, t;
                    }
                    getDecimalForValue(t) {
                        return (Ho(this._table, t) - this._minPos) / this._tableRange;
                    }
                    getValueForPixel(t) {
                        const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
                        return Ho(this._table, i * this._tableRange + this._minPos, !0);
                    }
                }
            });
            const $o = [ "rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)" ], Yo = $o.map((t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)")));
            function Uo(t) {
                return $o[t % $o.length];
            }
            function Xo(t) {
                return Yo[t % Yo.length];
            }
            function qo(t) {
                let e = 0;
                return (i, s) => {
                    const n = t.getDatasetMeta(s).controller;
                    n instanceof jn ? e = function(t, e) {
                        return t.backgroundColor = t.data.map((() => Uo(e++))), e;
                    }(i, e) : n instanceof $n ? e = function(t, e) {
                        return t.backgroundColor = t.data.map((() => Xo(e++))), e;
                    }(i, e) : n && (e = function(t, e) {
                        return t.borderColor = Uo(e), t.backgroundColor = Xo(e), ++e;
                    }(i, e));
                };
            }
            function Ko(t) {
                let e;
                for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
                return !1;
            }
            var Go = {
                id: "colors",
                defaults: {
                    enabled: !0,
                    forceOverride: !1
                },
                beforeLayout(t, e, i) {
                    if (!i.enabled) return;
                    const {data: {datasets: s}, options: n} = t.config, {elements: o} = n;
                    if (!i.forceOverride && (Ko(s) || (a = n) && (a.borderColor || a.backgroundColor) || o && Ko(o))) return;
                    var a;
                    const r = qo(t);
                    s.forEach(r);
                }
            };
            function Zo(t) {
                if (t._decimated) {
                    const e = t._data;
                    delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: e
                    });
                }
            }
            function Jo(t) {
                t.data.datasets.forEach((t => {
                    Zo(t);
                }));
            }
            var Qo = {
                id: "decimation",
                defaults: {
                    algorithm: "min-max",
                    enabled: !1
                },
                beforeElementsUpdate: (t, e, i) => {
                    if (!i.enabled) return void Jo(t);
                    const n = t.width;
                    t.data.datasets.forEach(((e, o) => {
                        const {_data: a, indexAxis: r} = e, l = t.getDatasetMeta(o), h = a || e.data;
                        if ("y" === Pi([ r, t.options.indexAxis ])) return;
                        if (!l.controller.supportsDecimation) return;
                        const c = t.scales[l.xAxisID];
                        if ("linear" !== c.type && "time" !== c.type) return;
                        if (t.options.parsing) return;
                        let {start: d, count: u} = function(t, e) {
                            const i = e.length;
                            let s, n = 0;
                            const {iScale: o} = t, {min: a, max: r, minDefined: l, maxDefined: h} = o.getUserBounds();
                            return l && (n = J(it(e, o.axis, a).lo, 0, i - 1)), s = h ? J(it(e, o.axis, r).hi + 1, n, i) - n : i - n, 
                            {
                                start: n,
                                count: s
                            };
                        }(l, h);
                        if (u <= (i.threshold || 4 * n)) return void Zo(e);
                        let f;
                        switch (s(a) && (e._data = h, delete e.data, Object.defineProperty(e, "data", {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return this._decimated;
                            },
                            set: function(t) {
                                this._data = t;
                            }
                        })), i.algorithm) {
                          case "lttb":
                            f = function(t, e, i, s, n) {
                                const o = n.samples || s;
                                if (o >= i) return t.slice(e, e + i);
                                const a = [], r = (i - 2) / (o - 2);
                                let l = 0;
                                const h = e + i - 1;
                                let c, d, u, f, g, p = e;
                                for (a[l++] = t[p], c = 0; c < o - 2; c++) {
                                    let s, n = 0, o = 0;
                                    const h = Math.floor((c + 1) * r) + 1 + e, m = Math.min(Math.floor((c + 2) * r) + 1, i) + e, b = m - h;
                                    for (s = h; s < m; s++) n += t[s].x, o += t[s].y;
                                    n /= b, o /= b;
                                    const x = Math.floor(c * r) + 1 + e, _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e, {x: y, y: v} = t[p];
                                    for (u = f = -1, s = x; s < _; s++) f = .5 * Math.abs((y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)), 
                                    f > u && (u = f, d = t[s], g = s);
                                    a[l++] = d, p = g;
                                }
                                return a[l++] = t[h], a;
                            }(h, d, u, n, i);
                            break;

                          case "min-max":
                            f = function(t, e, i, n) {
                                let o, a, r, l, h, c, d, u, f, g, p = 0, m = 0;
                                const b = [], x = e + i - 1, _ = t[e].x, y = t[x].x - _;
                                for (o = e; o < e + i; ++o) {
                                    a = t[o], r = (a.x - _) / y * n, l = a.y;
                                    const e = 0 | r;
                                    if (e === h) l < f ? (f = l, c = o) : l > g && (g = l, d = o), p = (m * p + a.x) / ++m; else {
                                        const i = o - 1;
                                        if (!s(c) && !s(d)) {
                                            const e = Math.min(c, d), s = Math.max(c, d);
                                            e !== u && e !== i && b.push({
                                                ...t[e],
                                                x: p
                                            }), s !== u && s !== i && b.push({
                                                ...t[s],
                                                x: p
                                            });
                                        }
                                        o > 0 && i !== u && b.push(t[i]), b.push(a), h = e, m = 0, f = g = l, c = d = u = o;
                                    }
                                }
                                return b;
                            }(h, d, u, n);
                            break;

                          default:
                            throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`);
                        }
                        e._decimated = f;
                    }));
                },
                destroy(t) {
                    Jo(t);
                }
            };
            function ta(t, e, i, s) {
                if (s) return;
                let n = e[t], o = i[t];
                return "angle" === t && (n = G(n), o = G(o)), {
                    property: t,
                    start: n,
                    end: o
                };
            }
            function ea(t, e, i) {
                for (;e > t; e--) {
                    const t = i[e];
                    if (!isNaN(t.x) && !isNaN(t.y)) break;
                }
                return e;
            }
            function ia(t, e, i, s) {
                return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
            }
            function sa(t, e) {
                let i = [], s = !1;
                return n(t) ? (s = !0, i = t) : i = function(t, e) {
                    const {x: i = null, y: s = null} = t || {}, n = e.points, o = [];
                    return e.segments.forEach((({start: t, end: e}) => {
                        e = ea(t, e, n);
                        const a = n[t], r = n[e];
                        null !== s ? (o.push({
                            x: a.x,
                            y: s
                        }), o.push({
                            x: r.x,
                            y: s
                        })) : null !== i && (o.push({
                            x: i,
                            y: a.y
                        }), o.push({
                            x: i,
                            y: r.y
                        }));
                    })), o;
                }(t, e), i.length ? new no({
                    points: i,
                    options: {
                        tension: 0
                    },
                    _loop: s,
                    _fullLoop: s
                }) : null;
            }
            function na(t) {
                return t && !1 !== t.fill;
            }
            function oa(t, e, i) {
                let s = t[e].fill;
                const n = [ e ];
                let o;
                if (!i) return s;
                for (;!1 !== s && -1 === n.indexOf(s); ) {
                    if (!a(s)) return s;
                    if (o = t[s], !o) return !1;
                    if (o.visible) return s;
                    n.push(s), s = o.fill;
                }
                return !1;
            }
            function aa(t, e, i) {
                const s = function(t) {
                    const e = t.options, i = e.fill;
                    let s = l(i && i.target, i);
                    void 0 === s && (s = !!e.backgroundColor);
                    if (!1 === s || null === s) return !1;
                    if (!0 === s) return "origin";
                    return s;
                }(t);
                if (o(s)) return !isNaN(s.value) && s;
                let n = parseFloat(s);
                return a(n) && Math.floor(n) === n ? function(t, e, i, s) {
                    "-" !== t && "+" !== t || (i = e + i);
                    if (i === e || i < 0 || i >= s) return !1;
                    return i;
                }(s[0], e, n, i) : [ "origin", "start", "end", "stack", "shape" ].indexOf(s) >= 0 && s;
            }
            function ra(t, e, i) {
                const s = [];
                for (let n = 0; n < i.length; n++) {
                    const o = i[n], {first: a, last: r, point: l} = la(o, e, "x");
                    if (!(!l || a && r)) if (a) s.unshift(l); else if (t.push(l), !r) break;
                }
                t.push(...s);
            }
            function la(t, e, i) {
                const s = t.interpolate(e, i);
                if (!s) return {};
                const n = s[i], o = t.segments, a = t.points;
                let r = !1, l = !1;
                for (let t = 0; t < o.length; t++) {
                    const e = o[t], s = a[e.start][i], h = a[e.end][i];
                    if (tt(n, s, h)) {
                        r = n === s, l = n === h;
                        break;
                    }
                }
                return {
                    first: r,
                    last: l,
                    point: s
                };
            }
            class ha {
                constructor(t) {
                    this.x = t.x, this.y = t.y, this.radius = t.radius;
                }
                pathSegment(t, e, i) {
                    const {x: s, y: n, radius: o} = this;
                    return e = e || {
                        start: 0,
                        end: O
                    }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds;
                }
                interpolate(t) {
                    const {x: e, y: i, radius: s} = this, n = t.angle;
                    return {
                        x: e + Math.cos(n) * s,
                        y: i + Math.sin(n) * s,
                        angle: n
                    };
                }
            }
            function ca(t) {
                const {chart: e, fill: i, line: s} = t;
                if (a(i)) return function(t, e) {
                    const i = t.getDatasetMeta(e), s = i && t.isDatasetVisible(e);
                    return s ? i.dataset : null;
                }(e, i);
                if ("stack" === i) return function(t) {
                    const {scale: e, index: i, line: s} = t, n = [], o = s.segments, a = s.points, r = function(t, e) {
                        const i = [], s = t.getMatchingVisibleMetas("line");
                        for (let t = 0; t < s.length; t++) {
                            const n = s[t];
                            if (n.index === e) break;
                            n.hidden || i.unshift(n.dataset);
                        }
                        return i;
                    }(e, i);
                    r.push(sa({
                        x: null,
                        y: e.bottom
                    }, s));
                    for (let t = 0; t < o.length; t++) {
                        const e = o[t];
                        for (let t = e.start; t <= e.end; t++) ra(n, a[t], r);
                    }
                    return new no({
                        points: n,
                        options: {}
                    });
                }(t);
                if ("shape" === i) return !0;
                const n = function(t) {
                    const e = t.scale || {};
                    if (e.getPointPositionForValue) return function(t) {
                        const {scale: e, fill: i} = t, s = e.options, n = e.getLabels().length, a = s.reverse ? e.max : e.min, r = function(t, e, i) {
                            let s;
                            return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : o(t) ? t.value : e.getBaseValue(), 
                            s;
                        }(i, e, a), l = [];
                        if (s.grid.circular) {
                            const t = e.getPointPositionForValue(0, a);
                            return new ha({
                                x: t.x,
                                y: t.y,
                                radius: e.getDistanceFromCenterForValue(r)
                            });
                        }
                        for (let t = 0; t < n; ++t) l.push(e.getPointPositionForValue(t, r));
                        return l;
                    }(t);
                    return function(t) {
                        const {scale: e = {}, fill: i} = t, s = function(t, e) {
                            let i = null;
                            return "start" === t ? i = e.bottom : "end" === t ? i = e.top : o(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), 
                            i;
                        }(i, e);
                        if (a(s)) {
                            const t = e.isHorizontal();
                            return {
                                x: t ? s : null,
                                y: t ? null : s
                            };
                        }
                        return null;
                    }(t);
                }(t);
                return n instanceof ha ? n : sa(n, s);
            }
            function da(t, e, i) {
                const s = ca(e), {line: n, scale: o, axis: a} = e, r = n.options, l = r.fill, h = r.backgroundColor, {above: c = h, below: d = h} = l || {};
                s && n.points.length && (Ie(t, i), function(t, e) {
                    const {line: i, target: s, above: n, below: o, area: a, scale: r} = e, l = i._loop ? "angle" : e.axis;
                    t.save(), "x" === l && o !== n && (ua(t, s, a.top), fa(t, {
                        line: i,
                        target: s,
                        color: n,
                        scale: r,
                        property: l
                    }), t.restore(), t.save(), ua(t, s, a.bottom));
                    fa(t, {
                        line: i,
                        target: s,
                        color: o,
                        scale: r,
                        property: l
                    }), t.restore();
                }(t, {
                    line: n,
                    target: s,
                    above: c,
                    below: d,
                    area: i,
                    scale: o,
                    axis: a
                }), ze(t));
            }
            function ua(t, e, i) {
                const {segments: s, points: n} = e;
                let o = !0, a = !1;
                t.beginPath();
                for (const r of s) {
                    const {start: s, end: l} = r, h = n[s], c = n[ea(s, l, n)];
                    o ? (t.moveTo(h.x, h.y), o = !1) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)), a = !!e.pathSegment(t, r, {
                        move: a
                    }), a ? t.closePath() : t.lineTo(c.x, i);
                }
                t.lineTo(e.first().x, i), t.closePath(), t.clip();
            }
            function fa(t, e) {
                const {line: i, target: s, property: n, color: o, scale: a} = e, r = function(t, e, i) {
                    const s = t.segments, n = t.points, o = e.points, a = [];
                    for (const t of s) {
                        let {start: s, end: r} = t;
                        r = ea(s, r, n);
                        const l = ta(i, n[s], n[r], t.loop);
                        if (!e.segments) {
                            a.push({
                                source: t,
                                target: l,
                                start: n[s],
                                end: n[r]
                            });
                            continue;
                        }
                        const h = Ii(e, l);
                        for (const e of h) {
                            const s = ta(i, o[e.start], o[e.end], e.loop), r = Ri(t, n, s);
                            for (const t of r) a.push({
                                source: t,
                                target: e,
                                start: {
                                    [i]: ia(l, s, "start", Math.max)
                                },
                                end: {
                                    [i]: ia(l, s, "end", Math.min)
                                }
                            });
                        }
                    }
                    return a;
                }(i, s, n);
                for (const {source: e, target: l, start: h, end: c} of r) {
                    const {style: {backgroundColor: r = o} = {}} = e, d = !0 !== s;
                    t.save(), t.fillStyle = r, ga(t, a, d && ta(n, h, c)), t.beginPath();
                    const u = !!i.pathSegment(t, e);
                    let f;
                    if (d) {
                        u ? t.closePath() : pa(t, s, c, n);
                        const e = !!s.pathSegment(t, l, {
                            move: u,
                            reverse: !0
                        });
                        f = u && e, f || pa(t, s, h, n);
                    }
                    t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
                }
            }
            function ga(t, e, i) {
                const {top: s, bottom: n} = e.chart.chartArea, {property: o, start: a, end: r} = i || {};
                "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip());
            }
            function pa(t, e, i, s) {
                const n = e.interpolate(i, s);
                n && t.lineTo(n.x, n.y);
            }
            var ma = {
                id: "filler",
                afterDatasetsUpdate(t, e, i) {
                    const s = (t.data.datasets || []).length, n = [];
                    let o, a, r, l;
                    for (a = 0; a < s; ++a) o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof no && (l = {
                        visible: t.isDatasetVisible(a),
                        index: a,
                        fill: aa(r, a, s),
                        chart: t,
                        axis: o.controller.options.indexAxis,
                        scale: o.vScale,
                        line: r
                    }), o.$filler = l, n.push(l);
                    for (a = 0; a < s; ++a) l = n[a], l && !1 !== l.fill && (l.fill = oa(n, a, i.propagate));
                },
                beforeDraw(t, e, i) {
                    const s = "beforeDraw" === i.drawTime, n = t.getSortedVisibleDatasetMetas(), o = t.chartArea;
                    for (let e = n.length - 1; e >= 0; --e) {
                        const i = n[e].$filler;
                        i && (i.line.updateControlPoints(o, i.axis), s && i.fill && da(t.ctx, i, o));
                    }
                },
                beforeDatasetsDraw(t, e, i) {
                    if ("beforeDatasetsDraw" !== i.drawTime) return;
                    const s = t.getSortedVisibleDatasetMetas();
                    for (let e = s.length - 1; e >= 0; --e) {
                        const i = s[e].$filler;
                        na(i) && da(t.ctx, i, t.chartArea);
                    }
                },
                beforeDatasetDraw(t, e, i) {
                    const s = e.meta.$filler;
                    na(s) && "beforeDatasetDraw" === i.drawTime && da(t.ctx, s, t.chartArea);
                },
                defaults: {
                    propagate: !0,
                    drawTime: "beforeDatasetDraw"
                }
            };
            const ba = (t, e) => {
                let {boxHeight: i = e, boxWidth: s = e} = t;
                return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), 
                {
                    boxWidth: s,
                    boxHeight: i,
                    itemHeight: Math.max(e, i)
                };
            };
            class xa extends Hs {
                constructor(t) {
                    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, 
                    this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, 
                    this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, 
                    this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, 
                    this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, 
                    this.weight = void 0, this.fullSize = void 0;
                }
                update(t, e, i) {
                    this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), 
                    this.buildLabels(), this.fit();
                }
                setDimensions() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, 
                    this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, 
                    this.bottom = this.height);
                }
                buildLabels() {
                    const t = this.options.labels || {};
                    let e = d(t.generateLabels, [ this.chart ], this) || [];
                    t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, i) => t.sort(e, i, this.chart.data)))), 
                    this.options.reverse && e.reverse(), this.legendItems = e;
                }
                fit() {
                    const {options: t, ctx: e} = this;
                    if (!t.display) return void (this.width = this.height = 0);
                    const i = t.labels, s = Si(i.font), n = s.size, o = this._computeTitleHeight(), {boxWidth: a, itemHeight: r} = ba(i, n);
                    let l, h;
                    e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, 
                    l = this._fitCols(o, s, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), 
                    this.height = Math.min(h, t.maxHeight || this.maxHeight);
                }
                _fitRows(t, e, i, s) {
                    const {ctx: n, maxWidth: o, options: {labels: {padding: a}}} = this, r = this.legendHitBoxes = [], l = this.lineWidths = [ 0 ], h = s + a;
                    let c = t;
                    n.textAlign = "left", n.textBaseline = "middle";
                    let d = -1, u = -h;
                    return this.legendItems.forEach(((t, f) => {
                        const g = i + e / 2 + n.measureText(t.text).width;
                        (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, 
                        u += h, d++), r[f] = {
                            left: 0,
                            top: u,
                            row: d,
                            width: g,
                            height: s
                        }, l[l.length - 1] += g + a;
                    })), c;
                }
                _fitCols(t, e, i, s) {
                    const {ctx: n, maxHeight: o, options: {labels: {padding: a}}} = this, r = this.legendHitBoxes = [], l = this.columnSizes = [], h = o - t;
                    let c = a, d = 0, u = 0, f = 0, g = 0;
                    return this.legendItems.forEach(((t, o) => {
                        const {itemWidth: p, itemHeight: m} = function(t, e, i, s, n) {
                            const o = function(t, e, i, s) {
                                let n = t.text;
                                n && "string" != typeof n && (n = n.reduce(((t, e) => t.length > e.length ? t : e)));
                                return e + i.size / 2 + s.measureText(n).width;
                            }(s, t, e, i), a = function(t, e, i) {
                                let s = t;
                                "string" != typeof e.text && (s = _a(e, i));
                                return s;
                            }(n, s, e.lineHeight);
                            return {
                                itemWidth: o,
                                itemHeight: a
                            };
                        }(i, e, n, t, s);
                        o > 0 && u + m + 2 * a > h && (c += d + a, l.push({
                            width: d,
                            height: u
                        }), f += d + a, g++, d = u = 0), r[o] = {
                            left: f,
                            top: u,
                            col: g,
                            width: p,
                            height: m
                        }, d = Math.max(d, p), u += m + a;
                    })), c += d, l.push({
                        width: d,
                        height: u
                    }), c;
                }
                adjustHitBoxes() {
                    if (!this.options.display) return;
                    const t = this._computeTitleHeight(), {legendHitBoxes: e, options: {align: i, labels: {padding: s}, rtl: n}} = this, o = Oi(n, this.left, this.width);
                    if (this.isHorizontal()) {
                        let n = 0, a = ft(i, this.left + s, this.right - this.lineWidths[n]);
                        for (const r of e) n !== r.row && (n = r.row, a = ft(i, this.left + s, this.right - this.lineWidths[n])), 
                        r.top += this.top + t + s, r.left = o.leftForLtr(o.x(a), r.width), a += r.width + s;
                    } else {
                        let n = 0, a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
                        for (const r of e) r.col !== n && (n = r.col, a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height)), 
                        r.top = a, r.left += this.left + s, r.left = o.leftForLtr(o.x(r.left), r.width), 
                        a += r.height + s;
                    }
                }
                isHorizontal() {
                    return "top" === this.options.position || "bottom" === this.options.position;
                }
                draw() {
                    if (this.options.display) {
                        const t = this.ctx;
                        Ie(t, this), this._draw(), ze(t);
                    }
                }
                _draw() {
                    const {options: t, columnSizes: e, lineWidths: i, ctx: s} = this, {align: n, labels: o} = t, a = ue.color, r = Oi(t.rtl, this.left, this.width), h = Si(o.font), {padding: c} = o, d = h.size, u = d / 2;
                    let f;
                    this.drawTitle(), s.textAlign = r.textAlign("left"), s.textBaseline = "middle", 
                    s.lineWidth = .5, s.font = h.string;
                    const {boxWidth: g, boxHeight: p, itemHeight: m} = ba(o, d), b = this.isHorizontal(), x = this._computeTitleHeight();
                    f = b ? {
                        x: ft(n, this.left + c, this.right - i[0]),
                        y: this.top + c + x,
                        line: 0
                    } : {
                        x: this.left + c,
                        y: ft(n, this.top + x + c, this.bottom - e[0].height),
                        line: 0
                    }, Ai(this.ctx, t.textDirection);
                    const _ = m + c;
                    this.legendItems.forEach(((y, v) => {
                        s.strokeStyle = y.fontColor, s.fillStyle = y.fontColor;
                        const M = s.measureText(y.text).width, w = r.textAlign(y.textAlign || (y.textAlign = o.textAlign)), k = g + u + M;
                        let S = f.x, P = f.y;
                        r.setWidth(this.width), b ? v > 0 && S + k + c > this.right && (P = f.y += _, f.line++, 
                        S = f.x = ft(n, this.left + c, this.right - i[f.line])) : v > 0 && P + _ > this.bottom && (S = f.x = S + e[f.line].width + c, 
                        f.line++, P = f.y = ft(n, this.top + x + c, this.bottom - e[f.line].height));
                        if (function(t, e, i) {
                            if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
                            s.save();
                            const n = l(i.lineWidth, 1);
                            if (s.fillStyle = l(i.fillStyle, a), s.lineCap = l(i.lineCap, "butt"), s.lineDashOffset = l(i.lineDashOffset, 0), 
                            s.lineJoin = l(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = l(i.strokeStyle, a), 
                            s.setLineDash(l(i.lineDash, [])), o.usePointStyle) {
                                const a = {
                                    radius: p * Math.SQRT2 / 2,
                                    pointStyle: i.pointStyle,
                                    rotation: i.rotation,
                                    borderWidth: n
                                }, l = r.xPlus(t, g / 2);
                                Ee(s, a, l, e + u, o.pointStyleWidth && g);
                            } else {
                                const o = e + Math.max((d - p) / 2, 0), a = r.leftForLtr(t, g), l = wi(i.borderRadius);
                                s.beginPath(), Object.values(l).some((t => 0 !== t)) ? He(s, {
                                    x: a,
                                    y: o,
                                    w: g,
                                    h: p,
                                    radius: l
                                }) : s.rect(a, o, g, p), s.fill(), 0 !== n && s.stroke();
                            }
                            s.restore();
                        }(r.x(S), P, y), S = gt(w, S + g + u, b ? S + k : this.right, t.rtl), function(t, e, i) {
                            Ne(s, i.text, t, e + m / 2, h, {
                                strikethrough: i.hidden,
                                textAlign: r.textAlign(i.textAlign)
                            });
                        }(r.x(S), P, y), b) f.x += k + c; else if ("string" != typeof y.text) {
                            const t = h.lineHeight;
                            f.y += _a(y, t) + c;
                        } else f.y += _;
                    })), Ti(this.ctx, t.textDirection);
                }
                drawTitle() {
                    const t = this.options, e = t.title, i = Si(e.font), s = ki(e.padding);
                    if (!e.display) return;
                    const n = Oi(t.rtl, this.left, this.width), o = this.ctx, a = e.position, r = i.size / 2, l = s.top + r;
                    let h, c = this.left, d = this.width;
                    if (this.isHorizontal()) d = Math.max(...this.lineWidths), h = this.top + l, c = ft(t.align, c, this.right - d); else {
                        const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0);
                        h = l + ft(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight());
                    }
                    const u = ft(a, c, c + d);
                    o.textAlign = n.textAlign(ut(a)), o.textBaseline = "middle", o.strokeStyle = e.color, 
                    o.fillStyle = e.color, o.font = i.string, Ne(o, e.text, u, h, i);
                }
                _computeTitleHeight() {
                    const t = this.options.title, e = Si(t.font), i = ki(t.padding);
                    return t.display ? e.lineHeight + i.height : 0;
                }
                _getLegendItemAt(t, e) {
                    let i, s, n;
                    if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom)) for (n = this.legendHitBoxes, 
                    i = 0; i < n.length; ++i) if (s = n[i], tt(t, s.left, s.left + s.width) && tt(e, s.top, s.top + s.height)) return this.legendItems[i];
                    return null;
                }
                handleEvent(t) {
                    const e = this.options;
                    if (!function(t, e) {
                        if (("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave)) return !0;
                        if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
                        return !1;
                    }(t.type, e)) return;
                    const i = this._getLegendItemAt(t.x, t.y);
                    if ("mousemove" === t.type || "mouseout" === t.type) {
                        const o = this._hoveredItem, a = (n = i, null !== (s = o) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index);
                        o && !a && d(e.onLeave, [ t, o, this ], this), this._hoveredItem = i, i && !a && d(e.onHover, [ t, i, this ], this);
                    } else i && d(e.onClick, [ t, i, this ], this);
                    var s, n;
                }
            }
            function _a(t, e) {
                return e * (t.text ? t.text.length : 0);
            }
            var ya = {
                id: "legend",
                _element: xa,
                start(t, e, i) {
                    const s = t.legend = new xa({
                        ctx: t.ctx,
                        options: i,
                        chart: t
                    });
                    as.configure(t, s, i), as.addBox(t, s);
                },
                stop(t) {
                    as.removeBox(t, t.legend), delete t.legend;
                },
                beforeUpdate(t, e, i) {
                    const s = t.legend;
                    as.configure(t, s, i), s.options = i;
                },
                afterUpdate(t) {
                    const e = t.legend;
                    e.buildLabels(), e.adjustHitBoxes();
                },
                afterEvent(t, e) {
                    e.replay || t.legend.handleEvent(e.event);
                },
                defaults: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullSize: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick(t, e, i) {
                        const s = e.datasetIndex, n = i.chart;
                        n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1);
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        color: t => t.chart.options.color,
                        boxWidth: 40,
                        padding: 10,
                        generateLabels(t) {
                            const e = t.data.datasets, {labels: {usePointStyle: i, pointStyle: s, textAlign: n, color: o, useBorderRadius: a, borderRadius: r}} = t.legend.options;
                            return t._getSortedDatasetMetas().map((t => {
                                const l = t.controller.getStyle(i ? 0 : void 0), h = ki(l.borderWidth);
                                return {
                                    text: e[t.index].label,
                                    fillStyle: l.backgroundColor,
                                    fontColor: o,
                                    hidden: !t.visible,
                                    lineCap: l.borderCapStyle,
                                    lineDash: l.borderDash,
                                    lineDashOffset: l.borderDashOffset,
                                    lineJoin: l.borderJoinStyle,
                                    lineWidth: (h.width + h.height) / 4,
                                    strokeStyle: l.borderColor,
                                    pointStyle: s || l.pointStyle,
                                    rotation: l.rotation,
                                    textAlign: n || l.textAlign,
                                    borderRadius: a && (r || l.borderRadius),
                                    datasetIndex: t.index
                                };
                            }), this);
                        }
                    },
                    title: {
                        color: t => t.chart.options.color,
                        display: !1,
                        position: "center",
                        text: ""
                    }
                },
                descriptors: {
                    _scriptable: t => !t.startsWith("on"),
                    labels: {
                        _scriptable: t => ![ "generateLabels", "filter", "sort" ].includes(t)
                    }
                }
            };
            class va extends Hs {
                constructor(t) {
                    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, 
                    this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, 
                    this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, 
                    this.fullSize = void 0;
                }
                update(t, e) {
                    const i = this.options;
                    if (this.left = 0, this.top = 0, !i.display) return void (this.width = this.height = this.right = this.bottom = 0);
                    this.width = this.right = t, this.height = this.bottom = e;
                    const s = n(i.text) ? i.text.length : 1;
                    this._padding = ki(i.padding);
                    const o = s * Si(i.font).lineHeight + this._padding.height;
                    this.isHorizontal() ? this.height = o : this.width = o;
                }
                isHorizontal() {
                    const t = this.options.position;
                    return "top" === t || "bottom" === t;
                }
                _drawArgs(t) {
                    const {top: e, left: i, bottom: s, right: n, options: o} = this, a = o.align;
                    let r, l, h, c = 0;
                    return this.isHorizontal() ? (l = ft(a, i, n), h = e + t, r = n - i) : ("left" === o.position ? (l = i + t, 
                    h = ft(a, s, e), c = -.5 * C) : (l = n - t, h = ft(a, e, s), c = .5 * C), r = s - e), 
                    {
                        titleX: l,
                        titleY: h,
                        maxWidth: r,
                        rotation: c
                    };
                }
                draw() {
                    const t = this.ctx, e = this.options;
                    if (!e.display) return;
                    const i = Si(e.font), s = i.lineHeight / 2 + this._padding.top, {titleX: n, titleY: o, maxWidth: a, rotation: r} = this._drawArgs(s);
                    Ne(t, e.text, 0, 0, i, {
                        color: e.color,
                        maxWidth: a,
                        rotation: r,
                        textAlign: ut(e.align),
                        textBaseline: "middle",
                        translation: [ n, o ]
                    });
                }
            }
            var Ma = {
                id: "title",
                _element: va,
                start(t, e, i) {
                    !function(t, e) {
                        const i = new va({
                            ctx: t.ctx,
                            options: e,
                            chart: t
                        });
                        as.configure(t, i, e), as.addBox(t, i), t.titleBlock = i;
                    }(t, i);
                },
                stop(t) {
                    const e = t.titleBlock;
                    as.removeBox(t, e), delete t.titleBlock;
                },
                beforeUpdate(t, e, i) {
                    const s = t.titleBlock;
                    as.configure(t, s, i), s.options = i;
                },
                defaults: {
                    align: "center",
                    display: !1,
                    font: {
                        weight: "bold"
                    },
                    fullSize: !0,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                },
                defaultRoutes: {
                    color: "color"
                },
                descriptors: {
                    _scriptable: !0,
                    _indexable: !1
                }
            };
            const wa = new WeakMap;
            var ka = {
                id: "subtitle",
                start(t, e, i) {
                    const s = new va({
                        ctx: t.ctx,
                        options: i,
                        chart: t
                    });
                    as.configure(t, s, i), as.addBox(t, s), wa.set(t, s);
                },
                stop(t) {
                    as.removeBox(t, wa.get(t)), wa.delete(t);
                },
                beforeUpdate(t, e, i) {
                    const s = wa.get(t);
                    as.configure(t, s, i), s.options = i;
                },
                defaults: {
                    align: "center",
                    display: !1,
                    font: {
                        weight: "normal"
                    },
                    fullSize: !0,
                    padding: 0,
                    position: "top",
                    text: "",
                    weight: 1500
                },
                defaultRoutes: {
                    color: "color"
                },
                descriptors: {
                    _scriptable: !0,
                    _indexable: !1
                }
            };
            const Sa = {
                average(t) {
                    if (!t.length) return !1;
                    let e, i, s = new Set, n = 0, o = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        const i = t[e].element;
                        if (i && i.hasValue()) {
                            const t = i.tooltipPosition();
                            s.add(t.x), n += t.y, ++o;
                        }
                    }
                    return {
                        x: [ ...s ].reduce(((t, e) => t + e)) / s.size,
                        y: n / o
                    };
                },
                nearest(t, e) {
                    if (!t.length) return !1;
                    let i, s, n, o = e.x, a = e.y, r = Number.POSITIVE_INFINITY;
                    for (i = 0, s = t.length; i < s; ++i) {
                        const s = t[i].element;
                        if (s && s.hasValue()) {
                            const t = q(e, s.getCenterPoint());
                            t < r && (r = t, n = s);
                        }
                    }
                    if (n) {
                        const t = n.tooltipPosition();
                        o = t.x, a = t.y;
                    }
                    return {
                        x: o,
                        y: a
                    };
                }
            };
            function Pa(t, e) {
                return e && (n(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
            }
            function Da(t) {
                return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
            }
            function Ca(t, e) {
                const {element: i, datasetIndex: s, index: n} = e, o = t.getDatasetMeta(s).controller, {label: a, value: r} = o.getLabelAndValue(n);
                return {
                    chart: t,
                    label: a,
                    parsed: o.getParsed(n),
                    raw: t.data.datasets[s].data[n],
                    formattedValue: r,
                    dataset: o.getDataset(),
                    dataIndex: n,
                    datasetIndex: s,
                    element: i
                };
            }
            function Oa(t, e) {
                const i = t.chart.ctx, {body: s, footer: n, title: o} = t, {boxWidth: a, boxHeight: r} = e, l = Si(e.bodyFont), h = Si(e.titleFont), c = Si(e.footerFont), d = o.length, f = n.length, g = s.length, p = ki(e.padding);
                let m = p.height, b = 0, x = s.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
                if (x += t.beforeBody.length + t.afterBody.length, d && (m += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), 
                x) m += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (x - g) * l.lineHeight + (x - 1) * e.bodySpacing;
                f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing);
                let _ = 0;
                const y = function(t) {
                    b = Math.max(b, i.measureText(t).width + _);
                };
                return i.save(), i.font = h.string, u(t.title, y), i.font = l.string, u(t.beforeBody.concat(t.afterBody), y), 
                _ = e.displayColors ? a + 2 + e.boxPadding : 0, u(s, (t => {
                    u(t.before, y), u(t.lines, y), u(t.after, y);
                })), _ = 0, i.font = c.string, u(t.footer, y), i.restore(), b += p.width, {
                    width: b,
                    height: m
                };
            }
            function Aa(t, e, i, s) {
                const {x: n, width: o} = i, {width: a, chartArea: {left: r, right: l}} = t;
                let h = "center";
                return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"), 
                function(t, e, i, s) {
                    const {x: n, width: o} = s, a = i.caretSize + i.caretPadding;
                    return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0;
                }(h, t, e, i) && (h = "center"), h;
            }
            function Ta(t, e, i) {
                const s = i.yAlign || e.yAlign || function(t, e) {
                    const {y: i, height: s} = e;
                    return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center";
                }(t, i);
                return {
                    xAlign: i.xAlign || e.xAlign || Aa(t, e, i, s),
                    yAlign: s
                };
            }
            function La(t, e, i, s) {
                const {caretSize: n, caretPadding: o, cornerRadius: a} = t, {xAlign: r, yAlign: l} = i, h = n + o, {topLeft: c, topRight: d, bottomLeft: u, bottomRight: f} = wi(a);
                let g = function(t, e) {
                    let {x: i, width: s} = t;
                    return "right" === e ? i -= s : "center" === e && (i -= s / 2), i;
                }(e, r);
                const p = function(t, e, i) {
                    let {y: s, height: n} = t;
                    return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s;
                }(e, l, h);
                return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), 
                {
                    x: J(g, 0, s.width - e.width),
                    y: J(p, 0, s.height - e.height)
                };
            }
            function Ea(t, e, i) {
                const s = ki(i.padding);
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left;
            }
            function Ra(t) {
                return Pa([], Da(t));
            }
            function Ia(t, e) {
                const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
                return i ? t.override(i) : t;
            }
            const za = {
                beforeTitle: e,
                title(t) {
                    if (t.length > 0) {
                        const e = t[0], i = e.chart.data.labels, s = i ? i.length : 0;
                        if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                        if (e.label) return e.label;
                        if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
                    }
                    return "";
                },
                afterTitle: e,
                beforeBody: e,
                beforeLabel: e,
                label(t) {
                    if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                    let e = t.dataset.label || "";
                    e && (e += ": ");
                    const i = t.formattedValue;
                    return s(i) || (e += i), e;
                },
                labelColor(t) {
                    const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {
                        borderColor: e.borderColor,
                        backgroundColor: e.backgroundColor,
                        borderWidth: e.borderWidth,
                        borderDash: e.borderDash,
                        borderDashOffset: e.borderDashOffset,
                        borderRadius: 0
                    };
                },
                labelTextColor() {
                    return this.options.bodyColor;
                },
                labelPointStyle(t) {
                    const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {
                        pointStyle: e.pointStyle,
                        rotation: e.rotation
                    };
                },
                afterLabel: e,
                afterBody: e,
                beforeFooter: e,
                footer: e,
                afterFooter: e
            };
            function Fa(t, e, i, s) {
                const n = t[e].call(i, s);
                return void 0 === n ? za[e].call(i, s) : n;
            }
            class Va extends Hs {
                static positioners=Sa;
                constructor(t) {
                    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, 
                    this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, 
                    this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, 
                    this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, 
                    this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, 
                    this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, 
                    this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, 
                    this.labelTextColors = void 0;
                }
                initialize(t) {
                    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
                }
                _resolveAnimations() {
                    const t = this._cachedAnimations;
                    if (t) return t;
                    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, n = new Os(this.chart, s);
                    return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
                }
                getContext() {
                    return this.$context || (this.$context = (t = this.chart.getContext(), e = this, 
                    i = this._tooltipItems, Ci(t, {
                        tooltip: e,
                        tooltipItems: i,
                        type: "tooltip"
                    })));
                    var t, e, i;
                }
                getTitle(t, e) {
                    const {callbacks: i} = e, s = Fa(i, "beforeTitle", this, t), n = Fa(i, "title", this, t), o = Fa(i, "afterTitle", this, t);
                    let a = [];
                    return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a;
                }
                getBeforeBody(t, e) {
                    return Ra(Fa(e.callbacks, "beforeBody", this, t));
                }
                getBody(t, e) {
                    const {callbacks: i} = e, s = [];
                    return u(t, (t => {
                        const e = {
                            before: [],
                            lines: [],
                            after: []
                        }, n = Ia(i, t);
                        Pa(e.before, Da(Fa(n, "beforeLabel", this, t))), Pa(e.lines, Fa(n, "label", this, t)), 
                        Pa(e.after, Da(Fa(n, "afterLabel", this, t))), s.push(e);
                    })), s;
                }
                getAfterBody(t, e) {
                    return Ra(Fa(e.callbacks, "afterBody", this, t));
                }
                getFooter(t, e) {
                    const {callbacks: i} = e, s = Fa(i, "beforeFooter", this, t), n = Fa(i, "footer", this, t), o = Fa(i, "afterFooter", this, t);
                    let a = [];
                    return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a;
                }
                _createItems(t) {
                    const e = this._active, i = this.chart.data, s = [], n = [], o = [];
                    let a, r, l = [];
                    for (a = 0, r = e.length; a < r; ++a) l.push(Ca(this.chart, e[a]));
                    return t.filter && (l = l.filter(((e, s, n) => t.filter(e, s, n, i)))), t.itemSort && (l = l.sort(((e, s) => t.itemSort(e, s, i)))), 
                    u(l, (e => {
                        const i = Ia(t.callbacks, e);
                        s.push(Fa(i, "labelColor", this, e)), n.push(Fa(i, "labelPointStyle", this, e)), 
                        o.push(Fa(i, "labelTextColor", this, e));
                    })), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, 
                    this.dataPoints = l, l;
                }
                update(t, e) {
                    const i = this.options.setContext(this.getContext()), s = this._active;
                    let n, o = [];
                    if (s.length) {
                        const t = Sa[i.position].call(this, s, this._eventPosition);
                        o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), 
                        this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
                        const e = this._size = Oa(this, i), a = Object.assign({}, t, e), r = Ta(this.chart, i, a), l = La(i, a, r, this.chart);
                        this.xAlign = r.xAlign, this.yAlign = r.yAlign, n = {
                            opacity: 1,
                            x: l.x,
                            y: l.y,
                            width: e.width,
                            height: e.height,
                            caretX: t.x,
                            caretY: t.y
                        };
                    } else 0 !== this.opacity && (n = {
                        opacity: 0
                    });
                    this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), 
                    t && i.external && i.external.call(this, {
                        chart: this.chart,
                        tooltip: this,
                        replay: e
                    });
                }
                drawCaret(t, e, i, s) {
                    const n = this.getCaretPosition(t, i, s);
                    e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
                }
                getCaretPosition(t, e, i) {
                    const {xAlign: s, yAlign: n} = this, {caretSize: o, cornerRadius: a} = i, {topLeft: r, topRight: l, bottomLeft: h, bottomRight: c} = wi(a), {x: d, y: u} = t, {width: f, height: g} = e;
                    let p, m, b, x, _, y;
                    return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, 
                    y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, 
                    "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, 
                    p = m + o, b = m - o), y = x), {
                        x1: p,
                        x2: m,
                        x3: b,
                        y1: x,
                        y2: _,
                        y3: y
                    };
                }
                drawTitle(t, e, i) {
                    const s = this.title, n = s.length;
                    let o, a, r;
                    if (n) {
                        const l = Oi(i.rtl, this.x, this.width);
                        for (t.x = Ea(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", 
                        o = Si(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, 
                        r = 0; r < n; ++r) e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, 
                        r + 1 === n && (t.y += i.titleMarginBottom - a);
                    }
                }
                _drawColorBox(t, e, i, s, n) {
                    const a = this.labelColors[i], r = this.labelPointStyles[i], {boxHeight: l, boxWidth: h} = n, c = Si(n.bodyFont), d = Ea(this, "left", n), u = s.x(d), f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0, g = e.y + f;
                    if (n.usePointStyle) {
                        const e = {
                            radius: Math.min(h, l) / 2,
                            pointStyle: r.pointStyle,
                            rotation: r.rotation,
                            borderWidth: 1
                        }, i = s.leftForLtr(u, h) + h / 2, o = g + l / 2;
                        t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, Le(t, e, i, o), 
                        t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Le(t, e, i, o);
                    } else {
                        t.lineWidth = o(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, 
                        t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
                        const e = s.leftForLtr(u, h), i = s.leftForLtr(s.xPlus(u, 1), h - 2), r = wi(a.borderRadius);
                        Object.values(r).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, 
                        He(t, {
                            x: e,
                            y: g,
                            w: h,
                            h: l,
                            radius: r
                        }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), He(t, {
                            x: i,
                            y: g + 1,
                            w: h - 2,
                            h: l - 2,
                            radius: r
                        }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, g, h, l), t.strokeRect(e, g, h, l), 
                        t.fillStyle = a.backgroundColor, t.fillRect(i, g + 1, h - 2, l - 2));
                    }
                    t.fillStyle = this.labelTextColors[i];
                }
                drawBody(t, e, i) {
                    const {body: s} = this, {bodySpacing: n, bodyAlign: o, displayColors: a, boxHeight: r, boxWidth: l, boxPadding: h} = i, c = Si(i.bodyFont);
                    let d = c.lineHeight, f = 0;
                    const g = Oi(i.rtl, this.x, this.width), p = function(i) {
                        e.fillText(i, g.x(t.x + f), t.y + d / 2), t.y += d + n;
                    }, m = g.textAlign(o);
                    let b, x, _, y, v, M, w;
                    for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = Ea(this, m, i), 
                    e.fillStyle = i.bodyColor, u(this.beforeBody, p), f = a && "right" !== m ? "center" === o ? l / 2 + h : l + 2 + h : 0, 
                    y = 0, M = s.length; y < M; ++y) {
                        for (b = s[y], x = this.labelTextColors[y], e.fillStyle = x, u(b.before, p), _ = b.lines, 
                        a && _.length && (this._drawColorBox(e, t, y, g, i), d = Math.max(c.lineHeight, r)), 
                        v = 0, w = _.length; v < w; ++v) p(_[v]), d = c.lineHeight;
                        u(b.after, p);
                    }
                    f = 0, d = c.lineHeight, u(this.afterBody, p), t.y -= n;
                }
                drawFooter(t, e, i) {
                    const s = this.footer, n = s.length;
                    let o, a;
                    if (n) {
                        const r = Oi(i.rtl, this.x, this.width);
                        for (t.x = Ea(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = r.textAlign(i.footerAlign), 
                        e.textBaseline = "middle", o = Si(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, 
                        a = 0; a < n; ++a) e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing;
                    }
                }
                drawBackground(t, e, i, s) {
                    const {xAlign: n, yAlign: o} = this, {x: a, y: r} = t, {width: l, height: h} = i, {topLeft: c, topRight: d, bottomLeft: u, bottomRight: f} = wi(s.cornerRadius);
                    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, 
                    e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), 
                    e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), 
                    e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), 
                    "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), 
                    "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), 
                    e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
                }
                _updateAnimationTarget(t) {
                    const e = this.chart, i = this.$animations, s = i && i.x, n = i && i.y;
                    if (s || n) {
                        const i = Sa[t.position].call(this, this._active, this._eventPosition);
                        if (!i) return;
                        const o = this._size = Oa(this, t), a = Object.assign({}, i, this._size), r = Ta(e, t, a), l = La(t, a, r, e);
                        s._to === l.x && n._to === l.y || (this.xAlign = r.xAlign, this.yAlign = r.yAlign, 
                        this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, 
                        this._resolveAnimations().update(this, l));
                    }
                }
                _willRender() {
                    return !!this.opacity;
                }
                draw(t) {
                    const e = this.options.setContext(this.getContext());
                    let i = this.opacity;
                    if (!i) return;
                    this._updateAnimationTarget(e);
                    const s = {
                        width: this.width,
                        height: this.height
                    }, n = {
                        x: this.x,
                        y: this.y
                    };
                    i = Math.abs(i) < .001 ? 0 : i;
                    const o = ki(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                    e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), 
                    Ai(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), 
                    this.drawFooter(n, t, e), Ti(t, e.textDirection), t.restore());
                }
                getActiveElements() {
                    return this._active || [];
                }
                setActiveElements(t, e) {
                    const i = this._active, s = t.map((({datasetIndex: t, index: e}) => {
                        const i = this.chart.getDatasetMeta(t);
                        if (!i) throw new Error("Cannot find a dataset at index " + t);
                        return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                        };
                    })), n = !f(i, s), o = this._positionChanged(s, e);
                    (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, 
                    this.update(!0));
                }
                handleEvent(t, e, i = !0) {
                    if (e && this._ignoreReplayEvents) return !1;
                    this._ignoreReplayEvents = !1;
                    const s = this.options, n = this._active || [], o = this._getActiveElements(t, n, e, i), a = this._positionChanged(o, t), r = e || !f(o, n) || a;
                    return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = {
                        x: t.x,
                        y: t.y
                    }, this.update(!0, e))), r;
                }
                _getActiveElements(t, e, i, s) {
                    const n = this.options;
                    if ("mouseout" === t.type) return [];
                    if (!s) return e.filter((t => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)));
                    const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
                    return n.reverse && o.reverse(), o;
                }
                _positionChanged(t, e) {
                    const {caretX: i, caretY: s, options: n} = this, o = Sa[n.position].call(this, t, e);
                    return !1 !== o && (i !== o.x || s !== o.y);
                }
            }
            var Ba = {
                id: "tooltip",
                _element: Va,
                positioners: Sa,
                afterInit(t, e, i) {
                    i && (t.tooltip = new Va({
                        chart: t,
                        options: i
                    }));
                },
                beforeUpdate(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i);
                },
                reset(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i);
                },
                afterDraw(t) {
                    const e = t.tooltip;
                    if (e && e._willRender()) {
                        const i = {
                            tooltip: e
                        };
                        if (!1 === t.notifyPlugins("beforeTooltipDraw", {
                            ...i,
                            cancelable: !0
                        })) return;
                        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
                    }
                },
                afterEvent(t, e) {
                    if (t.tooltip) {
                        const i = e.replay;
                        t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
                    }
                },
                defaults: {
                    enabled: !0,
                    external: null,
                    position: "average",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleColor: "#fff",
                    titleFont: {
                        weight: "bold"
                    },
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleAlign: "left",
                    bodyColor: "#fff",
                    bodySpacing: 2,
                    bodyFont: {},
                    bodyAlign: "left",
                    footerColor: "#fff",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFont: {
                        weight: "bold"
                    },
                    footerAlign: "left",
                    padding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    boxHeight: (t, e) => e.bodyFont.size,
                    boxWidth: (t, e) => e.bodyFont.size,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    boxPadding: 0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    animation: {
                        duration: 400,
                        easing: "easeOutQuart"
                    },
                    animations: {
                        numbers: {
                            type: "number",
                            properties: [ "x", "y", "width", "height", "caretX", "caretY" ]
                        },
                        opacity: {
                            easing: "linear",
                            duration: 200
                        }
                    },
                    callbacks: za
                },
                defaultRoutes: {
                    bodyFont: "font",
                    footerFont: "font",
                    titleFont: "font"
                },
                descriptors: {
                    _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
                    _indexable: !1,
                    callbacks: {
                        _scriptable: !1,
                        _indexable: !1
                    },
                    animation: {
                        _fallback: !1
                    },
                    animations: {
                        _fallback: "animation"
                    }
                },
                additionalOptionScopes: [ "interaction" ]
            };
            return An.register(Yn, jo, fo, t), An.helpers = {
                ...Wi
            }, An._adapters = Rn, An.Animation = Cs, An.Animations = Os, An.animator = xt, An.controllers = en.controllers.items, 
            An.DatasetController = Ns, An.Element = Hs, An.elements = fo, An.Interaction = Xi, 
            An.layouts = as, An.platforms = Ss, An.Scale = Js, An.Ticks = ae, Object.assign(An, Yn, jo, fo, t, Ss), 
            An.Chart = An, "undefined" != typeof window && (window.Chart = An), An;
        }));
        /*! jQuery UI - v1.12.1 - 2018-05-02
* http://jqueryui.com
* Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
        (function(t) {
            "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
        })((function(t) {
            t.ui = t.ui || {}, t.ui.version = "1.12.1";
            var e = 0, i = Array.prototype.slice;
            t.cleanData = function(e) {
                return function(i) {
                    var s, n, o;
                    for (o = 0; null != (n = i[o]); o++) try {
                        s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
                    } catch (a) {}
                    e(i);
                };
            }(t.cleanData), t.widget = function(e, i, s) {
                var n, o, a, r = {}, l = e.split(".")[0];
                e = e.split(".")[1];
                var h = l + "-" + e;
                return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [ {} ].concat(s))), 
                t.expr[":"][h.toLowerCase()] = function(e) {
                    return !!t.data(e, h);
                }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
                    return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
                }, t.extend(o, n, {
                    version: s.version,
                    _proto: t.extend({}, s),
                    _childConstructors: []
                }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, (function(e, s) {
                    return t.isFunction(s) ? (r[e] = function() {
                        function t() {
                            return i.prototype[e].apply(this, arguments);
                        }
                        function n(t) {
                            return i.prototype[e].apply(this, t);
                        }
                        return function() {
                            var e, i = this._super, o = this._superApply;
                            return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, 
                            this._superApply = o, e;
                        };
                    }(), void 0) : (r[e] = s, void 0);
                })), o.prototype = t.widget.extend(a, {
                    widgetEventPrefix: n ? a.widgetEventPrefix || e : e
                }, r, {
                    constructor: o,
                    namespace: l,
                    widgetName: e,
                    widgetFullName: h
                }), n ? (t.each(n._childConstructors, (function(e, i) {
                    var s = i.prototype;
                    t.widget(s.namespace + "." + s.widgetName, o, i._proto);
                })), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), 
                o;
            }, t.widget.extend = function(e) {
                for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++) for (s in o[a]) n = o[a][s], 
                o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
                return e;
            }, t.widget.bridge = function(e, s) {
                var n = s.prototype.widgetFullName || e;
                t.fn[e] = function(o) {
                    var a = "string" == typeof o, r = i.call(arguments, 1), l = this;
                    return a ? this.length || "instance" !== o ? this.each((function() {
                        var i, s = t.data(this, n);
                        return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), 
                        i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'");
                    })) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [ o ].concat(r))), 
                    this.each((function() {
                        var e = t.data(this, n);
                        e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new s(o, this));
                    }))), l;
                };
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(i, s) {
                    s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = e++, 
                    this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
                    this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), 
                    this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === s && this.destroy();
                        }
                    }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
                    this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), 
                    this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
                    this._init();
                },
                _getCreateOptions: function() {
                    return {};
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    var e = this;
                    this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
                        e._removeClass(i, t);
                    })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
                    this.bindings.off(this.eventNamespace);
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element;
                },
                option: function(e, i) {
                    var s, n, o, a = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, 
                        n = n[s[o]];
                        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                        n[e] = i;
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i;
                    }
                    return this._setOptions(a), this;
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this;
                },
                _setOption: function(t, e) {
                    return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), 
                    this;
                },
                _setOptionClasses: function(e) {
                    var i, s, n;
                    for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), 
                    this._removeClass(n, i), s.addClass(this._classes({
                        element: s,
                        keys: i,
                        classes: e,
                        add: !0
                    })));
                },
                _setOptionDisabled: function(t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), 
                    t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    });
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    });
                },
                _classes: function(e) {
                    function i(i, o) {
                        var a, r;
                        for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), 
                        n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
                    }
                    var s = [], n = this;
                    return e = t.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, e), this._on(e.element, {
                        remove: "_untrackClassesElement"
                    }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), 
                    s.join(" ");
                },
                _untrackClassesElement: function(e) {
                    var i = this;
                    t.each(i.classesElementLookup, (function(s, n) {
                        -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
                    }));
                },
                _removeClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !1);
                },
                _addClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !0);
                },
                _toggleClass: function(t, e, i, s) {
                    s = "boolean" == typeof s ? s : i;
                    var n = "string" == typeof t || null === t, o = {
                        extra: n ? e : i,
                        keys: n ? t : e,
                        element: n ? this.element : t,
                        add: s
                    };
                    return o.element.toggleClass(this._classes(o), s), this;
                },
                _on: function(e, i, s) {
                    var n, o = this;
                    "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, 
                    i = this.element, n = this.widget()), t.each(s, (function(s, a) {
                        function r() {
                            return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
                        }
                        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                        var l = s.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + o.eventNamespace, c = l[2];
                        c ? n.on(h, c, r) : i.on(h, r);
                    }));
                },
                _off: function(e, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
                    e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
                    this.hoverable = t(this.hoverable.not(e).get());
                },
                _delay: function(t, e) {
                    function i() {
                        return ("string" == typeof t ? s[t] : t).apply(s, arguments);
                    }
                    var s = this;
                    return setTimeout(i, e || 0);
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e), this._on(e, {
                        mouseenter: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-hover");
                        },
                        mouseleave: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                        }
                    });
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-focus");
                        },
                        focusout: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                        }
                    });
                },
                _trigger: function(e, i, s) {
                    var n, o, a = this.options[e];
                    if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
                    i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
                    return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [ i ].concat(s)) === !1 || i.isDefaultPrevented());
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, (function(e, i) {
                t.Widget.prototype["_" + e] = function(s, n, o) {
                    "string" == typeof n && (n = {
                        effect: n
                    });
                    var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
                    n = n || {}, "number" == typeof n && (n = {
                        duration: n
                    }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue((function(i) {
                        t(this)[e](), o && o.call(s[0]), i();
                    }));
                };
            })), t.widget, t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
            var s = !1;
            t(document).on("mouseup", (function() {
                s = !1;
            })), t.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                    cancel: "input, textarea, button, select, option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var e = this;
                    this.element.on("mousedown." + this.widgetName, (function(t) {
                        return e._mouseDown(t);
                    })).on("click." + this.widgetName, (function(i) {
                        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), 
                        i.stopImmediatePropagation(), !1) : void 0;
                    })), this.started = !1;
                },
                _mouseDestroy: function() {
                    this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
                },
                _mouseDown: function(e) {
                    if (!s) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                        var i = this, n = 1 === e.which, o = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                        return n && !o && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, 
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                            i.mouseDelayMet = !0;
                        }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, 
                        !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                        this._mouseMoveDelegate = function(t) {
                            return i._mouseMove(t);
                        }, this._mouseUpDelegate = function(t) {
                            return i._mouseUp(t);
                        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                        e.preventDefault(), s = !0, !0)) : !0;
                    }
                },
                _mouseMove: function(e) {
                    if (this._mouseMoved) {
                        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
                    }
                    return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), 
                    e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, 
                    this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
                },
                _mouseUp: function(e) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
                    this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
                    this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
                    delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, s = !1, e.preventDefault();
                },
                _mouseDistanceMet: function(t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet;
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0;
                }
            }), t.widget("ui.slider", t.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    classes: {
                        "ui-slider": "ui-corner-all",
                        "ui-slider-handle": "ui-corner-all",
                        "ui-slider-range": "ui-corner-all ui-widget-header"
                    },
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                numPages: 5,
                _create: function() {
                    this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
                    this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), 
                    this._refresh(), this._animateOff = !1;
                },
                _refresh: function() {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
                },
                _createHandles: function() {
                    var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), o = "<span tabindex='0'></span>", a = [];
                    for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), 
                    n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
                    this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), 
                    this.handle = this.handles.eq(0), this.handles.each((function(e) {
                        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
                    }));
                },
                _createRange: function() {
                    var e = this.options;
                    e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [ e.values[0], e.values[0] ] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [ this._valueMin(), this._valueMin() ]), 
                    this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
                    this.range.css({
                        left: "",
                        bottom: ""
                    })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
                    ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), 
                    this.range = null);
                },
                _setupEvents: function() {
                    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
                    this._focusable(this.handles);
                },
                _destroy: function() {
                    this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
                },
                _mouseCapture: function(e) {
                    var i, s, n, o, a, r, l, h, c = this, u = this.options;
                    return u.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), i = {
                        x: e.pageX,
                        y: e.pageY
                    }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, 
                    this.handles.each((function(e) {
                        var i = Math.abs(s - c.values(e));
                        (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, 
                        o = t(this), a = e);
                    })), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, 
                    this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), 
                    h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                        left: 0,
                        top: 0
                    } : {
                        left: e.pageX - l.left - o.width() / 2,
                        top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, 
                    !0));
                },
                _mouseStart: function() {
                    return !0;
                },
                _mouseDrag: function(t) {
                    var e = {
                        x: t.pageX,
                        y: t.pageY
                    }, i = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, i), !1;
                },
                _mouseStop: function(t) {
                    return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
                    this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, 
                    this._clickOffset = null, this._animateOff = !1, !1;
                },
                _detectOrientation: function() {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
                },
                _normValueFromMouse: function(t) {
                    var e, i, s, n, o;
                    return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
                    i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
                    s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), 
                    n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
                },
                _uiHash: function(t, e, i) {
                    var s = {
                        handle: this.handles[t],
                        handleIndex: t,
                        value: void 0 !== e ? e : this.value()
                    };
                    return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), 
                    s.values = i || this.values()), s;
                },
                _hasMultipleValues: function() {
                    return this.options.values && this.options.values.length;
                },
                _start: function(t, e) {
                    return this._trigger("start", t, this._uiHash(e));
                },
                _slide: function(t, e, i) {
                    var s, n, o = this.value(), a = this.values();
                    this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), 
                    a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
                },
                _stop: function(t, e) {
                    this._trigger("stop", t, this._uiHash(e));
                },
                _change: function(t, e) {
                    this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
                },
                value: function(t) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), 
                    this._change(null, 0), void 0) : this._value();
                },
                values: function(e, i) {
                    var s, n, o;
                    if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), 
                    this._refreshValue(), this._change(null, e), void 0;
                    if (!arguments.length) return this._values();
                    if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                    for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), 
                    this._change(null, o);
                    this._refreshValue();
                },
                _setOption: function(e, i) {
                    var s, n = 0;
                    switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), 
                    this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), 
                    this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), 
                    this._super(e, i), e) {
                      case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                        this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;

                      case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;

                      case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                        this._animateOff = !1;
                        break;

                      case "step":
                      case "min":
                      case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;

                      case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1;
                    }
                },
                _setOptionDisabled: function(t) {
                    this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
                },
                _value: function() {
                    var t = this.options.value;
                    return t = this._trimAlignValue(t);
                },
                _values: function(t) {
                    var e, i, s;
                    if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                    if (this._hasMultipleValues()) {
                        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                        return i;
                    }
                    return [];
                },
                _trimAlignValue: function(t) {
                    if (this._valueMin() >= t) return this._valueMin();
                    if (t >= this._valueMax()) return this._valueMax();
                    var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
                    return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
                },
                _calculateNewMax: function() {
                    var t = this.options.max, e = this._valueMin(), i = this.options.step, s = Math.round((t - e) / i) * i;
                    t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
                },
                _precision: function() {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
                    t;
                },
                _precisionOf: function(t) {
                    var e = "" + t, i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1;
                },
                _valueMin: function() {
                    return this.options.min;
                },
                _valueMax: function() {
                    return this.max;
                },
                _refreshRange: function(t) {
                    "vertical" === t && this.range.css({
                        width: "",
                        left: ""
                    }), "horizontal" === t && this.range.css({
                        height: "",
                        bottom: ""
                    });
                },
                _refreshValue: function() {
                    var e, i, s, n, o, a = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, c = {};
                    this._hasMultipleValues() ? this.handles.each((function(s) {
                        i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", 
                        t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                            left: i + "%"
                        }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                            width: i - e + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                            bottom: i + "%"
                        }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                            height: i - e + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        }))), e = i;
                    })) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, 
                    c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), 
                    "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                        width: i + "%"
                    }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                        width: 100 - i + "%"
                    }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                        height: i + "%"
                    }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                        height: 100 - i + "%"
                    }, r.animate));
                },
                _handleEvents: {
                    keydown: function(e) {
                        var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                        switch (e.keyCode) {
                          case t.ui.keyCode.HOME:
                          case t.ui.keyCode.END:
                          case t.ui.keyCode.PAGE_UP:
                          case t.ui.keyCode.PAGE_DOWN:
                          case t.ui.keyCode.UP:
                          case t.ui.keyCode.RIGHT:
                          case t.ui.keyCode.DOWN:
                          case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), 
                            i = this._start(e, a), i === !1)) return;
                        }
                        switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), 
                        e.keyCode) {
                          case t.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;

                          case t.ui.keyCode.END:
                            n = this._valueMax();
                            break;

                          case t.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;

                          case t.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;

                          case t.ui.keyCode.UP:
                          case t.ui.keyCode.RIGHT:
                            if (s === this._valueMax()) return;
                            n = this._trimAlignValue(s + o);
                            break;

                          case t.ui.keyCode.DOWN:
                          case t.ui.keyCode.LEFT:
                            if (s === this._valueMin()) return;
                            n = this._trimAlignValue(s - o);
                        }
                        this._slide(e, a, n);
                    },
                    keyup: function(e) {
                        var i = t(e.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), 
                        this._removeClass(t(e.target), null, "ui-state-active"));
                    }
                }
            });
        }));
        /*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
        !function(a) {
            function f(a, b) {
                if (!(a.originalEvent.touches.length > 1)) {
                    a.preventDefault();
                    var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
                    d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), 
                    a.target.dispatchEvent(d);
                }
            }
            if (a.support.touch = "ontouchend" in document, a.support.touch) {
                var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy;
                b._touchStart = function(a) {
                    var b = this;
                    !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, 
                    f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"));
                }, b._touchMove = function(a) {
                    e && (this._touchMoved = !0, f(a, "mousemove"));
                }, b._touchEnd = function(a) {
                    e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1);
                }, b._mouseInit = function() {
                    var b = this;
                    b.element.bind({
                        touchstart: a.proxy(b, "_touchStart"),
                        touchmove: a.proxy(b, "_touchMove"),
                        touchend: a.proxy(b, "_touchEnd")
                    }), c.call(b);
                }, b._mouseDestroy = function() {
                    var b = this;
                    b.element.unbind({
                        touchstart: a.proxy(b, "_touchStart"),
                        touchmove: a.proxy(b, "_touchMove"),
                        touchend: a.proxy(b, "_touchEnd")
                    }), d.call(b);
                };
            }
        }(jQuery);
        $("[data-svg]").not("loaded").each((function() {
            var $i = $(this).addClass("loaded");
            $.get($i.data("svg"), (function(data) {
                var $svg = $(data).find("svg");
                $svg.attr("class", $i.attr("class"));
                $i.replaceWith($svg);
            }), "xml");
        }));
        var slider1 = $(".slider-1").slick({
            slidesToShow: 8,
            slidesToScroll: 8,
            asNavFor: ".slider-2",
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: "0",
            arrows: false,
            autoplaySpeed: 3e3,
            speed: 500,
            infinite: false,
            responsive: [ {
                centerMode: false,
                breakpoint: 766,
                settings: {
                    slidesToShow: 4,
                    variableWidth: true,
                    autoplaySpeed: 9e3,
                    speed: 500,
                    centerMode: false
                }
            } ]
        });
        $(".slider-2").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".slider-1",
            dots: false,
            centerMode: true,
            adaptiveHeight: true,
            focusOnSelect: true,
            centerPadding: "0",
            arrows: false,
            autoplaySpeed: 3e3,
            speed: 500,
            responsive: [ {
                breakpoint: 766,
                settings: {
                    centerPadding: "0",
                    autoplaySpeed: 9e3,
                    speed: 500,
                    adaptiveHeight: true
                }
            } ]
        });
        $(".slider-1").on("beforeChange", (function(event, slick, currentSlide, nextSlide) {
            slider1.slick("slickPause");
        }));
        $(".slider-2").on("beforeChange", (function(event, slick, currentSlide, nextSlide) {
            slider1.slick("slickPause");
        }));
        $(".slider-1, .slider-2").on("afterChange", (function(event, slick, currentSlide) {
            slider1.slick("slickPlay");
        }));
        $(".card-mini").click((function(e) {
            e.preventDefault();
            $(".hide_card ").show(0);
            $(".hide_card-bg ").show(0);
            $(".axel-popup").hide(0);
        }));
        $(".lk-menu").click((function(e) {
            e.preventDefault();
            $(".axel-popup").show(0);
            $(".hide_card-bg ").show(0);
            $(".hide_card ").hide(0);
        }));
        $(".hide_card-bg, .hide_card-close").click((function(e) {
            e.preventDefault();
            $(".hide_card ").hide(0);
            $(".axel-popup").hide(0);
            $(".hide_card-bg ").hide(0);
        }));
        $(".port_slider_main").slick({
            arrows: true,
            dots: false,
            fade: true,
            infinite: false,
            autoplay: true,
            nextArrow: ".port_slider_main_next",
            prevArrow: ".port_slider_main_prev",
            autoplaySpeed: 12e3,
            speed: 500,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            responsive: [ {
                breakpoint: 766,
                settings: {}
            } ]
        });
        $("#values-slider").slick({
            arrows: true,
            dots: false,
            fade: false,
            infinite: false,
            autoplay: false,
            nextArrow: ".values-slider-next",
            prevArrow: ".values-slider-prev",
            autoplaySpeed: 2e3,
            speed: 400,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [ {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                    rows: 2
                }
            } ]
        });
        $("#smmm-slider").slick({
            arrows: true,
            dots: false,
            fade: false,
            infinite: false,
            autoplay: true,
            nextArrow: ".smmm-slider-next",
            prevArrow: ".smmm-slider-prev",
            autoplaySpeed: 3e3,
            speed: 500,
            adaptiveHeight: true,
            slidesToShow: 8,
            slidesToScroll: 4,
            variableWidth: false,
            responsive: [ {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7
                }
            }, {
                breakpoint: 992,
                settings: {
                    variableWidth: true,
                    slidesToScroll: 4,
                    slidesToShow: 7
                }
            } ]
        });
        $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            fade: true,
            speed: 0,
            asNavFor: ".staff-slider-nav"
        });
        $(".staff-slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            arrows: true,
            dots: false,
            speed: 0,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: "0",
            nextArrow: ".staff-slider-nav-next",
            prevArrow: ".staff-slider-nav-prev"
        });
        $(".biznes_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            nextArrow: '<span class="slick-next-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M11.4318 4.43873L20.1765 13.4095C20.3301 13.567 20.416 13.7784 20.416 13.9984C20.416 14.2185 20.3301 14.4298 20.1765 14.5873L11.4318 23.5615C11.3603 23.635 11.2748 23.6934 11.1803 23.7332C11.0858 23.7731 10.9843 23.7937 10.8817 23.7937C10.7792 23.7937 10.6776 23.7731 10.5832 23.7332C10.4887 23.6934 10.4031 23.635 10.3316 23.5615C10.1844 23.4108 10.102 23.2085 10.102 22.9979C10.102 22.7872 10.1844 22.5849 10.3316 22.4342L18.5548 13.9984L10.3316 5.56429C10.1849 5.41368 10.1028 5.21175 10.1028 5.00151C10.1028 4.79127 10.1849 4.58934 10.3316 4.43873C10.4031 4.36525 10.4887 4.30684 10.5832 4.26697C10.6776 4.22709 10.7792 4.20654 10.8817 4.20654C10.9843 4.20654 11.0858 4.22709 11.1803 4.26697C11.2748 4.30684 11.3603 4.36525 11.4318 4.43873Z" fill="white"/></svg></span></span>',
            prevArrow: '<span class="slick-prev-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">  <path d="M16.5682 4.43873L7.82353 13.4095C7.66994 13.567 7.58398 13.7784 7.58398 13.9984C7.58398 14.2185 7.66994 14.4298 7.82353 14.5873L16.5682 23.5615C16.6397 23.635 16.7252 23.6934 16.8197 23.7332C16.9142 23.7731 17.0157 23.7937 17.1183 23.7937C17.2208 23.7937 17.3224 23.7731 17.4168 23.7332C17.5113 23.6934 17.5969 23.635 17.6684 23.5615C17.8156 23.4108 17.898 23.2085 17.898 22.9979C17.898 22.7872 17.8156 22.5849 17.6684 22.4342L9.44521 13.9984L17.6684 5.56429C17.8151 5.41368 17.8972 5.21175 17.8972 5.00151C17.8972 4.79127 17.8151 4.58934 17.6684 4.43873C17.5969 4.36525 17.5113 4.30684 17.4168 4.26697C17.3224 4.22709 17.2208 4.20654 17.1183 4.20654C17.0157 4.20654 16.9142 4.22709 16.8197 4.26697C16.7252 4.30684 16.6397 4.36525 16.5682 4.43873Z" fill="white"/></svg></span></span>',
            adaptiveHeight: true,
            fade: true,
            speed: 500,
            asNavFor: ".biznes_slider-nav"
        });
        $(".biznes_slider-nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".biznes_slider",
            infinite: true,
            arrows: false,
            nextArrow: '<span class="slick-next-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M11.4318 4.43873L20.1765 13.4095C20.3301 13.567 20.416 13.7784 20.416 13.9984C20.416 14.2185 20.3301 14.4298 20.1765 14.5873L11.4318 23.5615C11.3603 23.635 11.2748 23.6934 11.1803 23.7332C11.0858 23.7731 10.9843 23.7937 10.8817 23.7937C10.7792 23.7937 10.6776 23.7731 10.5832 23.7332C10.4887 23.6934 10.4031 23.635 10.3316 23.5615C10.1844 23.4108 10.102 23.2085 10.102 22.9979C10.102 22.7872 10.1844 22.5849 10.3316 22.4342L18.5548 13.9984L10.3316 5.56429C10.1849 5.41368 10.1028 5.21175 10.1028 5.00151C10.1028 4.79127 10.1849 4.58934 10.3316 4.43873C10.4031 4.36525 10.4887 4.30684 10.5832 4.26697C10.6776 4.22709 10.7792 4.20654 10.8817 4.20654C10.9843 4.20654 11.0858 4.22709 11.1803 4.26697C11.2748 4.30684 11.3603 4.36525 11.4318 4.43873Z" fill="white"/></svg></span></span>',
            prevArrow: '<span class="slick-prev-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">  <path d="M16.5682 4.43873L7.82353 13.4095C7.66994 13.567 7.58398 13.7784 7.58398 13.9984C7.58398 14.2185 7.66994 14.4298 7.82353 14.5873L16.5682 23.5615C16.6397 23.635 16.7252 23.6934 16.8197 23.7332C16.9142 23.7731 17.0157 23.7937 17.1183 23.7937C17.2208 23.7937 17.3224 23.7731 17.4168 23.7332C17.5113 23.6934 17.5969 23.635 17.6684 23.5615C17.8156 23.4108 17.898 23.2085 17.898 22.9979C17.898 22.7872 17.8156 22.5849 17.6684 22.4342L9.44521 13.9984L17.6684 5.56429C17.8151 5.41368 17.8972 5.21175 17.8972 5.00151C17.8972 4.79127 17.8151 4.58934 17.6684 4.43873C17.5969 4.36525 17.5113 4.30684 17.4168 4.26697C17.3224 4.22709 17.2208 4.20654 17.1183 4.20654C17.0157 4.20654 16.9142 4.22709 16.8197 4.26697C16.7252 4.30684 16.6397 4.36525 16.5682 4.43873Z" fill="white"/></svg></span></span>',
            dots: false,
            speed: 500,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: "120px",
            responsive: [ {
                breakpoint: 992,
                settings: {
                    centerPadding: "60px",
                    slidesToShow: 4
                }
            }, {
                breakpoint: 550,
                settings: {
                    centerPadding: "60px",
                    slidesToShow: 2
                }
            } ]
        });
        $(".lok-ul .block:first").addClass("cur");
        $(".lok-ul").delegate("div:not(.cur)", "click", (function() {
            $(this).addClass("cur").siblings().removeClass("cur").parents(".lok-tab").find("div.lok-box").hide().eq($(this).index()).fadeIn(0);
        }));
        $(".metods-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents("#metods-tabs").find("div.metods-box").hide().removeClass("active").eq($(this).index()).fadeIn(0).addClass("active");
        }));
        $(".approach-tab-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents("#approach-tab").find("div.approach-tab-box").hide().eq($(this).index()).fadeIn(0);
        }));
        $(".explore-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents("#explore-tabs").find("div.explore-box").hide().eq($(this).index()).fadeIn(0);
        }));
        $(".otdel-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents("#otdel-tab").find("div.otdel-box").hide().eq($(this).index()).fadeIn(0);
        }));
        $(".model-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents("#model").find("div.model-box-bg").hide().eq($(this).index()).fadeIn(0);
        }));
        $(".js_port_single_tab__nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents("#js_port_single_tab").find("div.port_single_tab_box").hide().removeClass("active").eq($(this).index()).fadeIn(0).addClass("active");
            $(".port_slider_main").slick("refresh");
        }));
        $(".tab-100-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents(".tab-100").find("div.tab-100-box").hide().eq($(this).index()).fadeIn(0);
        }));
        $(".tab-200-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("current").siblings().removeClass("current").parents(".tab-200").find("div.tab-200-box").hide().eq($(this).index()).fadeIn(0);
        }));
        $(".open-explore-path-hide").click((function() {
            $(this).parent().hide(0);
            $(this).parent().parent().find(".explore-path-hide").show(0);
            $(".slider-for").slick("refresh");
        }));
        $(".close-explore-path-hide").click((function() {
            $("html, body").animate({
                scrollTop: $(".staff").offset().top - 80
            }, 500);
            $(this).parent().parent().parent().find(".has-button").show(0);
            $(this).parent().parent().parent().find(".explore-path-hide").hide(0);
            $(".slider-for").slick("refresh");
        }));
        $(".mobile-open-box-hide").click((function() {
            $(this).toggleClass("active");
            $(this).parent().parent().find(".box-hide-mobile-otdel-item").toggle(0);
        }));
        $(".js-open__port-nav-row").click((function() {
            $(".mobile-port-nav").addClass("active");
            $("body").addClass("oh");
        }));
        $(".js-close__port-nav-row").click((function() {
            $(".mobile-port-nav").removeClass("active");
            $("body").removeClass("oh");
        }));
        $(".approach-tab-box").click((function() {
            $(".approach-tab-box").removeClass("active");
            $(this).toggleClass("active");
        }));
        $(".btn-box").click((function() {
            $(this).toggleClass("active");
            $(this).parent().find(".box-hide").toggle(0);
        }));
        $(".smmm-item").hover((function() {
            $(this).toggleClass("active");
        }));
        $(".explore-nav-1").click((function() {
            $(".explore-nav-img").addClass("show-1");
            $(".explore-nav-img").removeClass("show-2");
            $(".explore-nav-img").removeClass("show-3");
        }));
        $(".explore-nav-2").click((function() {
            $(".explore-nav-img").addClass("show-2");
            $(".explore-nav-img").removeClass("show-1");
            $(".explore-nav-img").removeClass("show-3");
        }));
        $(".explore-nav-3").click((function() {
            $(".explore-nav-img").addClass("show-3");
            $(".explore-nav-img").removeClass("show-1");
            $(".explore-nav-img").removeClass("show-2");
        }));
        $(".otdel-nav-arrow-1").click((function() {
            $(".otdel-box-1").addClass("active");
            $(".otdel-box-3").removeClass("active");
        }));
        $(".otdel-nav-arrow-3").click((function() {
            $(".otdel-box-3").addClass("active");
            $(".otdel-box-1").removeClass("active");
        }));
        $(".a-1").click((function() {
            $(".explore-nav-svg-1").addClass("var-1-1");
            $(".explore-nav-svg-1").removeClass("var-1-2");
            $(".explore-nav-svg-1").removeClass("var-1-3");
        }));
        $(".a-2").click((function() {
            $(".explore-nav-svg-1").addClass("var-1-2");
            $(".explore-nav-svg-1").removeClass("var-1-1");
            $(".explore-nav-svg-1").removeClass("var-1-3");
        }));
        $(".a-3").click((function() {
            $(".explore-nav-svg-1").addClass("var-1-3");
            $(".explore-nav-svg-1").removeClass("var-1-1");
            $(".explore-nav-svg-1").removeClass("var-1-2");
        }));
        $(".b-1").click((function() {
            $(".explore-nav-svg-2").addClass("var-2-1");
            $(".explore-nav-svg-2").removeClass("var-2-2");
            $(".explore-nav-svg-2").removeClass("var-2-3");
        }));
        $(".b-2").click((function() {
            $(".explore-nav-svg-2").addClass("var-2-2");
            $(".explore-nav-svg-2").removeClass("var-2-1");
            $(".explore-nav-svg-2").removeClass("var-2-3");
        }));
        $(".b-3").click((function() {
            $(".explore-nav-svg-2").addClass("var-2-3");
            $(".explore-nav-svg-2").removeClass("var-2-1");
            $(".explore-nav-svg-2").removeClass("var-2-2");
        }));
        $(".c-1").click((function() {
            $(".explore-nav-svg-3").addClass("var-3-1");
            $(".explore-nav-svg-3").removeClass("var-3-2");
            $(".explore-nav-svg-3").removeClass("var-3-3");
        }));
        $(".c-2").click((function() {
            $(".explore-nav-svg-3").addClass("var-3-2");
            $(".explore-nav-svg-3").removeClass("var-3-1");
            $(".explore-nav-svg-3").removeClass("var-3-3");
        }));
        $(".c-3").click((function() {
            $(".explore-nav-svg-3").addClass("var-3-3");
            $(".explore-nav-svg-3").removeClass("var-3-1");
            $(".explore-nav-svg-3").removeClass("var-3-2");
        }));
        $("#sticker").sticky({
            topSpacing: 0
        });
        $(".off .btn-hide, .btn-open-popup-bisnes").click((function(e) {
            e.preventDefault();
            $(".popup-biznes").addClass("active");
            $(".popup-biznes-bg").addClass("active");
        }));
        $(".btn-open-popup-order").click((function() {
            $(".popup-biznes").removeClass("active");
            $(".popup-biznes-bg").removeClass("active");
            $(".popup-order").addClass("active");
            $(".popup-order-bg").addClass("active");
        }));
        $(".popup-biznes-bg,.popup-biznes-close").click((function() {
            $(".popup-biznes").removeClass("active");
            $(".popup-biznes-bg").removeClass("active");
        }));
        $(".popup-order-bg,.popup-order-close").click((function() {
            $(".popup-order").removeClass("active");
            $(".popup-order-bg").removeClass("active");
        }));
        if ($(window).width() > 992) $(".wecan-step-item .arrow").hover((function() {
            $(".wecan-step-item").removeClass("active");
            $(this).parent().toggleClass("active");
        })); else $(".wecan-step-item").click((function() {
            $(".wecan-step-item").removeClass("active");
            $(this).toggleClass("active");
        }));
        $(".filters-button a").one("click", (function() {
            $(".grid").addClass("show-all");
        }));
        if ($(window).width() < 992) $(".grid-item").one("click", (function() {
            $(".grid-item").removeClass("active");
            $(this).addClass("active");
        }));
        let grid = new Isotope(".grid", {
            itemSelector: ".grid-item",
            layoutMode: "fitRows"
        });
        let filterBtn = document.querySelectorAll(".filters-button .filter-btn");
        for (let i = 0; i < filterBtn.length; i++) filterBtn[i].onclick = function(click) {
            click.preventDefault();
            let filterData = event.target.getAttribute("data-filter");
            grid.arrange({
                filter: filterData
            });
        };
        $(".filters-button").each((function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", ".filter-btn", (function(event) {
                console.log("2");
                $buttonGroup.find(".filter-active").removeClass("filter-active");
                var $button = $(event.currentTarget);
                $button.addClass("filter-active");
            }));
        }));
        $(".header__card").click((function(e) {
            e.preventDefault();
            $(".hide_card ").show(0);
            $(".hide_card-bg ").show(0);
        }));
        $(".hide_card-bg, .hide_card-close").click((function(e) {
            e.preventDefault();
            $(".hide_card ").hide(0);
            $(".hide_card-bg ").hide(0);
        }));
        $(".cust_table td").each((function() {
            if (!$(this).text().trim().length) $(this).addClass("foo");
        }));
        $(".open_login_form").click((function() {
            $(".hide_mobile_login_form ").toggle("");
        }));
        let sections = $(".biznes_tab-item"), nav = $(".biznes-page-nav"), nav_height = nav.outerHeight();
        $(window).on("scroll", (function() {
            $(".biznes-page-nav a.go-a").removeClass("active");
            let cur_pos = $(this).scrollTop();
            sections.each((function() {
                let top = $(this).offset().top - nav_height - 80, bottom = top + $(this).outerHeight();
                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find("a.go-a").removeClass("active");
                    sections.removeClass("active");
                    $(this).addClass("active");
                    nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
                }
            }));
        }));
        nav.find("a.go-a").on("click", (function() {
            let $el = $(this), id = $el.attr("href");
            $("html, body").animate({
                scrollTop: $(id).offset().top - nav_height
            }, 600);
            return false;
        }));
        $(".m-scroll").bind("touchstart", (function() {
            $(this).addClass("start-scroll");
        }));
        $(".m-scroll-767").bind("touchstart", (function() {
            $(this).addClass("start-scroll");
        }));
        $(".history").bind("touchstart", (function() {
            $(this).addClass("start-scroll");
        }));
        $("#polzunok").slider({
            animate: "slow",
            range: "min",
            value: 50,
            slide: function(event, ui) {
                $("#send-result-polzunok").val(ui.value);
            }
        });
        $("#send-result-polzunok").val($("#polzunok").slider("value"));
        $(".biznes_tab-item .triger").click((function() {
            $(this).toggleClass("active");
            $(this).parent().find(".biznes_tab-info").toggle("");
        }));
        $(".go-a").click((function(e) {
            e.preventDefault();
            const lsle = $(this).attr("href");
            $(lsle).find(".triger").addClass("active");
            $(lsle).find(".biznes_tab-info").show("");
        }));
        $((function() {
            if ($(window).width() > 993) {
                var columns = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                for (let i = 1; i <= 22; i++) $(`.js_height_${i}`).each((function() {
                    const h = $(this).height();
                    if (h > columns[i - 1]) columns[i - 1] = h;
                })).height(columns[i - 1]);
            }
        }));
        $(".box_8987 .button-open").click((function() {
            $(this).parent().parent().parent().find(".sevice_table-path-mobile").show(0);
            $(this).parent().parent().parent().find(".bottom ").hide(0);
        }));
        $(".sevice_table-path-mobile-close").click((function() {
            $(this).parent().parent().parent().find(".sevice_table-path-mobile").hide(0);
            $(this).parent().parent().parent().find(".bottom ").show(0);
        }));
        $(".slider-far").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            adaptiveHeight: true,
            nextArrow: ".slider-far-nav-next",
            prevArrow: ".slider-far-nav-prev",
            asNavFor: ".slider-far-nav",
            responsive: [ {
                breakpoint: 992,
                settings: {
                    swipe: false
                }
            } ]
        });
        $(".slider-far-nav").slick({
            slidesToShow: 20,
            slidesToScroll: 1,
            asNavFor: ".slider-far",
            arrows: false,
            dots: false,
            variableWidth: true,
            centerMode: false,
            focusOnSelect: true
        });
        $("#help-menu li.menu-item-has-children > a").on("click", (function() {
            $(this).removeAttr("href");
            var element = $(this).parent("li");
            if (element.hasClass("open")) {
                element.removeClass("open");
                element.find("li").removeClass("open");
                element.find("ul").slideUp();
            } else {
                element.addClass("open");
                element.children("ul").slideDown();
                element.siblings("li").children("ul").slideUp();
                element.siblings("li").removeClass("open");
                element.siblings("li").find("li").removeClass("open");
                element.siblings("li").find("ul").slideUp();
            }
        }));
        $("#box-osow-help li.menu-item-has-children > a").on("click", (function() {
            $(this).removeAttr("href");
            var element = $(this).parent("li");
            if (element.hasClass("open")) {
                element.removeClass("open");
                element.find("li").removeClass("open");
                element.find("ul").slideUp();
            } else {
                element.addClass("open");
                element.children("ul").slideDown();
                element.siblings("li").children("ul").slideUp();
                element.siblings("li").removeClass("open");
                element.siblings("li").find("li").removeClass("open");
                element.siblings("li").find("ul").slideUp();
            }
        }));
        if ($(window).width() < 992) {
            $(".js_open_help_menu").click((function() {
                $(".help-left").addClass("active");
            }));
            $(".help-menu li li a").click((function() {
                $(".help-left").removeClass("active");
            }));
            $(".help-menu__close").click((function() {
                $(".help-left").removeClass("active");
            }));
        }
        $(".open-account-menu").click((function() {
            $("body").addClass("oh");
            $(".account-left-box").addClass("active");
        }));
        $(".close-account-menu").click((function() {
            $("body").removeClass("oh");
            $(".account-left-box").removeClass("active");
        }));
        if ($(window).width() < 992) $("#sticker3").sticky({
            topSpacing: 0
        });
        $(".offer-tab-nav").delegate("li:not(.current)", "click", (function() {
            $(this).addClass("active").siblings().removeClass("active").parents("#offer-tab").find("div.offer-tab-box").hide().removeClass("active").eq($(this).index()).fadeIn(0).addClass("active");
        }));
        $(".js_open_account_tariff").click((function(e) {
            e.preventDefault();
            $(this).hide(0);
            $(".hide_account_tariff").show(0);
        }));
        $(".js_close_tariff").click((function() {
            $(".js_open_account_tariff").show(0);
            $(".hide_account_tariff").hide(0);
        }));
        $(document).on("click", ".js_open_popup", (function(e) {
            e.preventDefault();
            const id = $(this).attr("href");
            $(id).addClass("active");
            $(".popup-ac-bg").addClass("active");
            $("body").addClass("oh");
        }));
        $(".popup-ac-bg,.popup-ac-close").click((function(e) {
            e.preventDefault();
            $(".popup-ac").removeClass("active");
            $(".popup-ac-bg").removeClass("active");
            $("body").removeClass("oh");
        }));
        $(".input-file input[type=file]").on("change", (function() {
            let file = this.files[0];
            $(this).next().html(file.name);
        }));
        $("#check-all").click((function() {
            if ($(this).is(":checked")) $('input[name="user-service-item"]').prop("checked", true); else $('input[name="user-service-item"]').prop("checked", false);
        }));
        $(".go-tab-200").click((function() {
            $("html, body").animate({
                scrollTop: $(".tab-200").offset().top - 130
            }, 500);
        }));
        $("#slider-filter-1").slider({
            range: true,
            min: 25e3,
            max: 12e4,
            values: [ "25000", "120000" ],
            slide: function(event, ui) {
                $("#min-1").val(ui.values[0]);
                $("#max-1").val(ui.values[1]);
            }
        });
        $("#slider-filter-2").slider({
            range: true,
            min: 0,
            max: 20,
            values: [ "0", "20" ],
            slide: function(event, ui) {
                $("#min-2").val(ui.values[0]);
                $("#max-2").val(ui.values[1]);
            }
        });
        $("#slider-filter-3").slider({
            range: true,
            min: 0,
            max: 240,
            values: [ "0", "240" ],
            slide: function(event, ui) {
                $("#min-3").val(ui.values[0]);
                $("#max-3").val(ui.values[1]);
            }
        });
        $(".lid-tab-nav").delegate("li:not(.active)", "click", (function() {
            $(this).addClass("active").siblings().removeClass("active").parents(".lid-tab").find("div.lid-tab-box").hide().eq($(this).index()).fadeIn(0);
        }));
        $('.js-donat-checkbox input[type="checkbox"]').change((function() {
            var $hideTable = $(".hide-table");
            if ($(this).is(":checked")) $hideTable.removeClass("hide"); else $hideTable.addClass("hide");
        }));
        $("#check-all").change((function() {
            if (this.checked) $(".button-all").removeClass("hide"); else $(".button-all").addClass("hide");
        }));
        $(".choise-phone-country").click((function() {
            $(".choise-phone-country-list").toggle(0);
            $(".phone-chang-block").toggleClass("input3-active");
        }));
        $(document).on("click", ".js_open_popup_startap", (function(e) {
            e.preventDefault();
            const id = $(this).attr("href");
            $(id).addClass("active");
            $(".popup_startap-bg").addClass("active");
            $("body").addClass("oh");
        }));
        $(".popup_startap-close, .popup_startap-bg, .btn-reset-apple, .btn-reset-apple-country").click((function() {
            $(".popup_startap").removeClass("active");
            $(".popup_startap-bg").removeClass("active");
            $("body").removeClass("oh");
        }));
        $(".btn-reset-country").click((function() {
            $('input[type="radio"]').prop("checked", false);
        }));
        $(".btn-reset-industry").click((function() {
            $('input[type="checkbox"]').prop("checked", false);
        }));
        $(".btn-reset-apple").click((function() {
            var selectedCategories = [];
            $('input[type="checkbox"]:checked').each((function() {
                selectedCategories.push('<span class="val">' + $(this).siblings("label").text().trim() + "</span>");
            }));
            $(".category-label").html(selectedCategories.join(" "));
        }));
        $(".btn-reset-apple-country").click((function() {
            var selectedCategories = [];
            $('input[type="radio"]:checked').each((function() {
                selectedCategories.push('<span class="val">' + $(this).siblings("label").text().trim() + "</span>");
            }));
            $(".country-label").html(selectedCategories.join(" "));
        }));
        $(".open-all-filter").click((function() {
            $(".catalog-startap-filter-col-hide").toggle(0);
        }));
        $(".js_open_analiz-block").click((function() {
            $(this).toggleClass("active");
            $(".analiz-block").toggle(0);
        }));
        $(".drop-list dt").click((function() {
            $(".drop-list").not($(this).parent()).removeClass("active");
            $(".drop-list dd").not($(this).next("dd")).hide(0);
            $(this).parent().toggleClass("active");
            $(this).next("dd").toggle(0);
        }));
        $('.drop-list input[type="radio"]').change((function() {
            var selectedText = $(this).next("label").text();
            $(this).closest(".drop-list").find("dt em").text(selectedText);
            $(this).closest("dd").hide(0);
            $(this).closest(".drop-list").removeClass("active");
        }));
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        document.addEventListener("DOMContentLoaded", (function() {
            if (window.innerWidth > 768) {
                var hovers = document.querySelectorAll(".hover"), elemHover = null;
                hovers.forEach((function(hover) {
                    hover.addEventListener("mouseover", (function(e) {
                        if (elemHover) return;
                        var target = e.target.closest(".hover__item-wrap");
                        if (!target) return;
                        elemHover = target;
                        var parent = target.closest(".hover"), old = parent.querySelector(".hover__item-wrap--fill");
                        if (old) old.classList.remove("hover__item-wrap--fill");
                        target.classList.add("hover__item-wrap--fill");
                    }));
                    hover.addEventListener("mouseout", (function(e) {
                        if (!elemHover) return;
                        var target = e.target.closest(".hover__item-wrap");
                        target.classList.remove("hover__item-wrap--fill");
                        elemHover = null;
                    }));
                    hover.addEventListener("mouseleave", (function(e) {
                        var def = e.currentTarget.querySelector(".hover__item-wrap--fill");
                        if (!def || !def.contains(elemHover)) {
                            var firstElement = e.currentTarget.querySelector(".hover__item-wrap");
                            if (firstElement) {
                                firstElement.classList.add("hover__item-wrap--fill");
                                elemHover = firstElement;
                            }
                        }
                    }));
                }));
                window.onscroll = function() {
                    myFunction();
                };
                var first = document.getElementById("first-scroll");
                var header = document.getElementById("header");
                var sticky = header ? header.offsetTop : 0;
                function myFunction() {
                    if (window.pageYOffset > sticky) {
                        if (header) header.classList.add("sticky");
                        if (first) first.classList.add("scroll");
                    } else {
                        if (header) header.classList.remove("sticky");
                        if (first) first.classList.remove("scroll");
                    }
                }
            }
        }));
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
        tabs();
    })();
})();