(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8400],
  {
    7025: function () {},
    60439: function () {},
    98918: function (e, t, i) {
      "use strict";
      i.d(t, {
        W_: function () {
          return Navigation;
        },
      }),
        i(13433);
      var s = i(7185);
      function Navigation(e) {
        let { swiper: t, extendParams: i, on: r, emit: n } = e;
        function getEl(e) {
          let i;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (i = t.el.querySelector(e) || t.hostEl.querySelector(e))
            ? i
            : (e &&
                ("string" == typeof e &&
                  (i = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" == typeof e &&
                i &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (i = t.el.querySelector(e))
                  : i && 1 === i.length && (i = i[0])),
              e && !i)
            ? e
            : i;
        }
        function toggleEl(e, i) {
          let r = t.params.navigation;
          (e = (0, s.m)(e)).forEach((e) => {
            e &&
              (e.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = i),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](r.lockClass));
          });
        }
        function update() {
          let { nextEl: e, prevEl: i } = t.navigation;
          if (t.params.loop) {
            toggleEl(i, !1), toggleEl(e, !1);
            return;
          }
          toggleEl(i, t.isBeginning && !t.params.rewind),
            toggleEl(e, t.isEnd && !t.params.rewind);
        }
        function onPrevClick(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), n("navigationPrev"));
        }
        function onNextClick(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), n("navigationNext"));
        }
        function init() {
          var e, i, r;
          let n = t.params.navigation;
          if (
            ((t.params.navigation =
              ((e = t.originalParams.navigation),
              (i = t.params.navigation),
              (r = {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }),
              t.params.createElements &&
                Object.keys(r).forEach((n) => {
                  if (!i[n] && !0 === i.auto) {
                    let l = (0, s.e)(t.el, `.${r[n]}`)[0];
                    l ||
                      (((l = (0, s.c)("div", r[n])).className = r[n]),
                      t.el.append(l)),
                      (i[n] = l),
                      (e[n] = l);
                  }
                }),
              i)),
            !(n.nextEl || n.prevEl))
          )
            return;
          let l = getEl(n.nextEl),
            a = getEl(n.prevEl);
          Object.assign(t.navigation, { nextEl: l, prevEl: a }),
            (l = (0, s.m)(l)),
            (a = (0, s.m)(a));
          let initButton = (e, i) => {
            e &&
              e.addEventListener(
                "click",
                "next" === i ? onNextClick : onPrevClick
              ),
              !t.enabled && e && e.classList.add(...n.lockClass.split(" "));
          };
          l.forEach((e) => initButton(e, "next")),
            a.forEach((e) => initButton(e, "prev"));
        }
        function destroy() {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = (0, s.m)(e)), (i = (0, s.m)(i));
          let destroyButton = (e, i) => {
            e.removeEventListener(
              "click",
              "next" === i ? onNextClick : onPrevClick
            ),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => destroyButton(e, "next")),
            i.forEach((e) => destroyButton(e, "prev"));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r("init", () => {
            !1 === t.params.navigation.enabled ? disable() : (init(), update());
          }),
          r("toEdge fromEdge lock unlock", () => {
            update();
          }),
          r("destroy", () => {
            destroy();
          }),
          r("enable disable", () => {
            let { nextEl: e, prevEl: i } = t.navigation;
            if (((e = (0, s.m)(e)), (i = (0, s.m)(i)), t.enabled)) {
              update();
              return;
            }
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          r("click", (e, i) => {
            let { nextEl: r, prevEl: l } = t.navigation;
            (r = (0, s.m)(r)), (l = (0, s.m)(l));
            let a = i.target,
              o = l.includes(a) || r.includes(a);
            if (t.isElement && !o) {
              let e = i.path || (i.composedPath && i.composedPath());
              e && (o = e.find((e) => r.includes(e) || l.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))
              )
                return;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : l.length &&
                  (e = l[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                !0 === e ? n("navigationShow") : n("navigationHide"),
                [...r, ...l]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        let disable = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            destroy();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              init(),
              update();
          },
          disable,
          update,
          init,
          destroy,
        });
      }
    },
    13433: function (e, t, i) {
      "use strict";
      function isObject(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function extend(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : isObject(t[i]) &&
                isObject(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                extend(e[i], t[i]);
          });
      }
      i.d(t, {
        a: function () {
          return getWindow;
        },
        g: function () {
          return getDocument;
        },
      });
      let s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function getDocument() {
        let e = "undefined" != typeof document ? document : {};
        return extend(e, s), e;
      }
      let r = {
        document: s,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function getWindow() {
        let e = "undefined" != typeof window ? window : {};
        return extend(e, r), e;
      }
    },
    7185: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return elementParents;
        },
        c: function () {
          return createElement;
        },
        d: function () {
          return now;
        },
        e: function () {
          return elementChildren;
        },
        f: function () {
          return elementOuterSize;
        },
        h: function () {
          return elementIndex;
        },
        j: function () {
          return getTranslate;
        },
        m: function () {
          return makeElementsArray;
        },
        n: function () {
          return nextTick;
        },
        p: function () {
          return elementStyle;
        },
        q: function () {
          return elementNextAll;
        },
        r: function () {
          return elementPrevAll;
        },
        s: function () {
          return setCSSProperty;
        },
        t: function () {
          return animateCSSModeScroll;
        },
        u: function () {
          return showWarning;
        },
        v: function () {
          return elementIsChildOf;
        },
        w: function () {
          return function extend() {
            let e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
              let s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
              if (
                null != s &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(s instanceof HTMLElement)
                  : !s || (1 !== s.nodeType && 11 !== s.nodeType))
              ) {
                let i = Object.keys(Object(s)).filter((e) => 0 > t.indexOf(e));
                for (let t = 0, r = i.length; t < r; t += 1) {
                  let r = i[t],
                    n = Object.getOwnPropertyDescriptor(s, r);
                  void 0 !== n &&
                    n.enumerable &&
                    (isObject(e[r]) && isObject(s[r])
                      ? s[r].__swiper__
                        ? (e[r] = s[r])
                        : extend(e[r], s[r])
                      : !isObject(e[r]) && isObject(s[r])
                      ? ((e[r] = {}),
                        s[r].__swiper__ ? (e[r] = s[r]) : extend(e[r], s[r]))
                      : (e[r] = s[r]));
                }
              }
            }
            return e;
          };
        },
        x: function () {
          return deleteProps;
        },
      });
      var s = i(13433);
      function deleteProps(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function nextTick(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function now() {
        return Date.now();
      }
      function getTranslate(e, t) {
        let i, r, n;
        void 0 === t && (t = "x");
        let l = (0, s.a)(),
          a = (function (e) {
            let t;
            let i = (0, s.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          l.WebKitCSSMatrix
            ? ((r = a.transform || a.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new l.WebKitCSSMatrix("none" === r ? "" : r)))
            : (i = (n =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (r = l.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (r = l.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          r || 0
        );
      }
      function isObject(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function setCSSProperty(e, t, i) {
        e.style.setProperty(t, i);
      }
      function animateCSSModeScroll(e) {
        let t,
          { swiper: i, targetPosition: r, side: n } = e,
          l = (0, s.a)(),
          a = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          l.cancelAnimationFrame(i.cssModeFrameID);
        let c = r > a ? "next" : "prev",
          isOutOfBound = (e, t) =>
            ("next" === c && e >= t) || ("prev" === c && e <= t),
          animate = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e = Math.max(Math.min((t - o) / d, 1), 0),
              s = a + (0.5 - Math.cos(e * Math.PI) / 2) * (r - a);
            if (
              (isOutOfBound(s, r) && (s = r),
              i.wrapperEl.scrollTo({ [n]: s }),
              isOutOfBound(s, r))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [n]: s });
                }),
                l.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = l.requestAnimationFrame(animate);
          };
        animate();
      }
      function elementChildren(e, t) {
        void 0 === t && (t = "");
        let i = [...e.children];
        return (e instanceof HTMLSlotElement && i.push(...e.assignedElements()),
        t)
          ? i.filter((e) => e.matches(t))
          : i;
      }
      function elementIsChildOf(e, t) {
        let i = t.contains(e);
        if (!i && t instanceof HTMLSlotElement) {
          let s = [...t.assignedElements()];
          (i = s.includes(e)) ||
            (i = (function (e, t) {
              let i = [t];
              for (; i.length > 0; ) {
                let t = i.shift();
                if (e === t) return !0;
                i.push(
                  ...t.children,
                  ...(t.shadowRoot?.children || []),
                  ...(t.assignedElements?.() || [])
                );
              }
            })(e, t));
        }
        return i;
      }
      function showWarning(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function createElement(e, t) {
        var i;
        void 0 === t && (t = []);
        let s = document.createElement(e);
        return (
          s.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          s
        );
      }
      function elementPrevAll(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let s = e.previousElementSibling;
          t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
        }
        return i;
      }
      function elementNextAll(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let s = e.nextElementSibling;
          t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
        }
        return i;
      }
      function elementStyle(e, t) {
        let i = (0, s.a)();
        return i.getComputedStyle(e, null).getPropertyValue(t);
      }
      function elementIndex(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function elementParents(e, t) {
        let i = [],
          s = e.parentElement;
        for (; s; )
          t ? s.matches(t) && i.push(s) : i.push(s), (s = s.parentElement);
        return i;
      }
      function elementOuterSize(e, t, i) {
        let r = (0, s.a)();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function makeElementsArray(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    2261: function (e, t, i) {
      "use strict";
      let s, r, n;
      i.d(t, {
        tq: function () {
          return m;
        },
        o5: function () {
          return v;
        },
      });
      var l = i(67294),
        a = i(13433),
        o = i(7185);
      function getSupport() {
        return (
          s ||
            (s = (function () {
              let e = (0, a.a)(),
                t = (0, a.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          s
        );
      }
      function getDevice(e) {
        return (
          void 0 === e && (e = {}),
          r ||
            (r = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = getSupport(),
                s = (0, a.a)(),
                r = s.navigator.platform,
                n = t || s.navigator.userAgent,
                l = { ios: !1, android: !1 },
                o = s.screen.width,
                d = s.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                u = n.match(/(iPad).*OS\s([\d_]+)/),
                p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "MacIntel" === r;
              return (
                !u &&
                  f &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${d}`) >= 0 &&
                  ((u = n.match(/(Version)\/([\d.]+)/)) ||
                    (u = [0, 1, "13_0_0"]),
                  (f = !1)),
                c && "Win32" !== r && ((l.os = "android"), (l.android = !0)),
                (u || h || p) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          r
        );
      }
      let toggleSlideClasses$1 = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        toggleSlideClasses = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        processLazyPreloader = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        unlazy = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        preload = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let s =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [r - t];
            i.push(...Array.from({ length: t }).map((e, t) => r + s + t)),
              e.slides.forEach((t, s) => {
                i.includes(t.column) && unlazy(e, s);
              });
            return;
          }
          let n = r + s - 1;
          if (e.params.rewind || e.params.loop)
            for (let s = r - t; s <= n + t; s += 1) {
              let t = ((s % i) + i) % i;
              (t < r || t > n) && unlazy(e, t);
            }
          else
            for (
              let s = Math.max(r - t, 0);
              s <= Math.min(n + t, i - 1);
              s += 1
            )
              s !== r && (s > n || s < r) && unlazy(e, s);
        };
      function transitionEmit(e) {
        let { swiper: t, runCallbacks: i, direction: s, step: r } = e,
          { activeIndex: n, previousIndex: l } = t,
          a = s;
        if (
          (a || (a = n > l ? "next" : n < l ? "prev" : "reset"),
          t.emit(`transition${r}`),
          i && n !== l)
        ) {
          if ("reset" === a) {
            t.emit(`slideResetTransition${r}`);
            return;
          }
          t.emit(`slideChangeTransition${r}`),
            "next" === a
              ? t.emit(`slideNextTransition${r}`)
              : t.emit(`slidePrevTransition${r}`);
        }
      }
      function preventEdgeSwipe(e, t, i) {
        let s = (0, a.a)(),
          { params: r } = e,
          n = r.edgeSwipeDetection,
          l = r.edgeSwipeThreshold;
        return (
          !n ||
          (!(i <= l) && !(i >= s.innerWidth - l)) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function onTouchStart(e) {
        let t = (0, a.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let s = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
          s.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (s.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          preventEdgeSwipe(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: r, touches: n, enabled: l } = this;
        if (
          !l ||
          (!r.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && r.preventInteractionOnTransition)
        )
          return;
        !this.animating && r.cssMode && r.loop && this.loopFix();
        let d = i.target;
        if (
          ("wrapper" === r.touchEventsTarget && !(0, o.v)(d, this.wrapperEl)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (s.isTouched && s.isMoved)
        )
          return;
        let c = !!r.noSwipingClass && "" !== r.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        c && i.target && i.target.shadowRoot && u && (d = u[0]);
        let p = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          h = !!(i.target && i.target.shadowRoot);
        if (
          r.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function __closestFrom(t) {
                    if (!t || t === (0, a.g)() || t === (0, a.a)()) return null;
                    t.assignedSlot && (t = t.assignedSlot);
                    let i = t.closest(e);
                    return i || t.getRootNode
                      ? i || __closestFrom(t.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, d)
            : d.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
        (n.currentX = i.pageX), (n.currentY = i.pageY);
        let f = n.currentX,
          m = n.currentY;
        if (!preventEdgeSwipe(this, i, f)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = f),
          (n.startY = m),
          (s.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          r.threshold > 0 && (s.allowThresholdMove = !1);
        let v = !0;
        d.matches(s.focusableElements) &&
          ((v = !1), "SELECT" === d.nodeName && (s.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(s.focusableElements) &&
            t.activeElement !== d &&
            ("mouse" === i.pointerType ||
              ("mouse" !== i.pointerType && !d.matches(s.focusableElements))) &&
            t.activeElement.blur();
        let g = v && this.allowTouchMove && r.touchStartPreventDefault;
        (r.touchStartForcePreventDefault || g) &&
          !d.isContentEditable &&
          i.preventDefault(),
          r.freeMode &&
            r.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !r.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function onTouchMove(e) {
        let t, i;
        let s = (0, a.g)(),
          r = this.touchEventsData,
          { params: n, touches: l, rtlTranslate: d, enabled: c } = this;
        if (!c || (!n.simulateTouch && "mouse" === e.pointerType)) return;
        let u = e;
        if (
          (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type)
        ) {
          if (null !== r.touchId) return;
          let e = u.pointerId;
          if (e !== r.pointerId) return;
        }
        if ("touchmove" === u.type) {
          if (
            !(t = [...u.changedTouches].find(
              (e) => e.identifier === r.touchId
            )) ||
            t.identifier !== r.touchId
          )
            return;
        } else t = u;
        if (!r.isTouched) {
          r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", u);
          return;
        }
        let p = t.pageX,
          h = t.pageY;
        if (u.preventedByNestedSwiper) {
          (l.startX = p), (l.startY = h);
          return;
        }
        if (!this.allowTouchMove) {
          u.target.matches(r.focusableElements) || (this.allowClick = !1),
            r.isTouched &&
              (Object.assign(l, {
                startX: p,
                startY: h,
                currentX: p,
                currentY: h,
              }),
              (r.touchStartTime = (0, o.d)()));
          return;
        }
        if (n.touchReleaseOnEdges && !n.loop) {
          if (this.isVertical()) {
            if (
              (h < l.startY && this.translate <= this.maxTranslate()) ||
              (h > l.startY && this.translate >= this.minTranslate())
            ) {
              (r.isTouched = !1), (r.isMoved = !1);
              return;
            }
          } else if (
            (p < l.startX && this.translate <= this.maxTranslate()) ||
            (p > l.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          (s.activeElement &&
            s.activeElement.matches(r.focusableElements) &&
            s.activeElement !== u.target &&
            "mouse" !== u.pointerType &&
            s.activeElement.blur(),
          s.activeElement &&
            u.target === s.activeElement &&
            u.target.matches(r.focusableElements))
        ) {
          (r.isMoved = !0), (this.allowClick = !1);
          return;
        }
        r.allowTouchCallbacks && this.emit("touchMove", u),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = p),
          (l.currentY = h);
        let f = l.currentX - l.startX,
          m = l.currentY - l.startY;
        if (
          this.params.threshold &&
          Math.sqrt(f ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === r.isScrolling) {
          let e;
          (this.isHorizontal() && l.currentY === l.startY) ||
          (this.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (r.isScrolling = this.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (r.isScrolling && this.emit("touchMoveOpposite", u),
          void 0 === r.startMoving &&
            (l.currentX !== l.startX || l.currentY !== l.startY) &&
            (r.startMoving = !0),
          r.isScrolling ||
            ("touchmove" === u.type && r.preventTouchMoveFromPointerMove))
        ) {
          r.isTouched = !1;
          return;
        }
        if (!r.startMoving) return;
        (this.allowClick = !1),
          !n.cssMode && u.cancelable && u.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && u.stopPropagation();
        let v = this.isHorizontal() ? f : m,
          g = this.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        n.oneWayMovement &&
          ((v = Math.abs(v) * (d ? 1 : -1)), (g = Math.abs(g) * (d ? 1 : -1))),
          (l.diff = v),
          (v *= n.touchRatio),
          d && ((v = -v), (g = -g));
        let w = this.touchesDirection;
        (this.swipeDirection = v > 0 ? "prev" : "next"),
          (this.touchesDirection = g > 0 ? "prev" : "next");
        let S = this.params.loop && !n.cssMode,
          b =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (S && b && this.loopFix({ direction: this.swipeDirection }),
            (r.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            n.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", u);
        }
        if (
          (new Date().getTime(),
          r.isMoved &&
            r.allowThresholdMove &&
            w !== this.touchesDirection &&
            S &&
            b &&
            Math.abs(v) >= 1)
        ) {
          Object.assign(l, {
            startX: p,
            startY: h,
            currentX: p,
            currentY: h,
            startTranslate: r.currentTranslate,
          }),
            (r.loopSwapReset = !0),
            (r.startTranslate = r.currentTranslate);
          return;
        }
        this.emit("sliderMove", u),
          (r.isMoved = !0),
          (r.currentTranslate = v + r.startTranslate);
        let y = !0,
          T = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (T = 0),
          v > 0
            ? (S &&
                b &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (n.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] +
                          this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > this.minTranslate() &&
                ((y = !1),
                n.resistance &&
                  (r.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + r.startTranslate + v) ** T)))
            : v < 0 &&
              (S &&
                b &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (n.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[
                            this.slidesSizesGrid.length - 1
                          ] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === n.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              r.currentTranslate < this.maxTranslate() &&
                ((y = !1),
                n.resistance &&
                  (r.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - r.startTranslate - v) ** T))),
          y && (u.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          n.threshold > 0)
        ) {
          if (Math.abs(v) > n.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
              (r.allowThresholdMove = !0),
                (l.startX = l.currentX),
                (l.startY = l.currentY),
                (r.currentTranslate = r.startTranslate),
                (l.diff = this.isHorizontal()
                  ? l.currentX - l.startX
                  : l.currentY - l.startY);
              return;
            }
          } else {
            r.currentTranslate = r.startTranslate;
            return;
          }
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && this.freeMode) ||
            n.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(r.currentTranslate),
          this.setTranslate(r.currentTranslate));
      }
      function onTouchEnd(e) {
        let t, i;
        let s = this,
          r = s.touchEventsData,
          n = e;
        n.originalEvent && (n = n.originalEvent);
        let l = "touchend" === n.type || "touchcancel" === n.type;
        if (l) {
          if (
            !(t = [...n.changedTouches].find(
              (e) => e.identifier === r.touchId
            )) ||
            t.identifier !== r.touchId
          )
            return;
        } else {
          if (null !== r.touchId || n.pointerId !== r.pointerId) return;
          t = n;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(n.type)
        ) {
          let e =
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (s.browser.isSafari || s.browser.isWebView);
          if (!e) return;
        }
        (r.pointerId = null), (r.touchId = null);
        let {
          params: a,
          touches: d,
          rtlTranslate: c,
          slidesGrid: u,
          enabled: p,
        } = s;
        if (!p || (!a.simulateTouch && "mouse" === n.pointerType)) return;
        if (
          (r.allowTouchCallbacks && s.emit("touchEnd", n),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        ) {
          r.isMoved && a.grabCursor && s.setGrabCursor(!1),
            (r.isMoved = !1),
            (r.startMoving = !1);
          return;
        }
        a.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
          s.setGrabCursor(!1);
        let h = (0, o.d)(),
          f = h - r.touchStartTime;
        if (s.allowClick) {
          let e = n.path || (n.composedPath && n.composedPath());
          s.updateClickedSlide((e && e[0]) || n.target, e),
            s.emit("tap click", n),
            f < 300 &&
              h - r.lastClickTime < 300 &&
              s.emit("doubleTap doubleClick", n);
        }
        if (
          ((r.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            s.destroyed || (s.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !s.swipeDirection ||
            (0 === d.diff && !r.loopSwapReset) ||
            (r.currentTranslate === r.startTranslate && !r.loopSwapReset))
        ) {
          (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
          return;
        }
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (i = a.followFinger
            ? c
              ? s.translate
              : -s.translate
            : -r.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode && a.freeMode.enabled) {
          s.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let m = i >= -s.maxTranslate() && !s.params.loop,
          v = 0,
          g = s.slidesSizesGrid[0];
        for (
          let e = 0;
          e < u.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== u[e + t]
            ? (m || (i >= u[e] && i < u[e + t])) &&
              ((v = e), (g = u[e + t] - u[e]))
            : (m || i >= u[e]) &&
              ((v = e), (g = u[u.length - 1] - u[u.length - 2]));
        }
        let w = null,
          S = null;
        a.rewind &&
          (s.isBeginning
            ? (S =
                a.virtual && a.virtual.enabled && s.virtual
                  ? s.virtual.slides.length - 1
                  : s.slides.length - 1)
            : s.isEnd && (w = 0));
        let b = (i - u[v]) / g,
          y = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (f > a.longSwipesMs) {
          if (!a.longSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          "next" === s.swipeDirection &&
            (b >= a.longSwipesRatio
              ? s.slideTo(a.rewind && s.isEnd ? w : v + y)
              : s.slideTo(v)),
            "prev" === s.swipeDirection &&
              (b > 1 - a.longSwipesRatio
                ? s.slideTo(v + y)
                : null !== S && b < 0 && Math.abs(b) > a.longSwipesRatio
                ? s.slideTo(S)
                : s.slideTo(v));
        } else {
          if (!a.shortSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          let e =
            s.navigation &&
            (n.target === s.navigation.nextEl ||
              n.target === s.navigation.prevEl);
          e
            ? n.target === s.navigation.nextEl
              ? s.slideTo(v + y)
              : s.slideTo(v)
            : ("next" === s.swipeDirection && s.slideTo(null !== w ? w : v + y),
              "prev" === s.swipeDirection && s.slideTo(null !== S ? S : v));
        }
      }
      function onResize() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = e,
          l = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let a = l && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        a
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = s),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function onClick(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function onScroll() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let s = this.maxTranslate() - this.minTranslate();
        (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function onLoad(e) {
        processLazyPreloader(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function onDocumentTouchStart() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let events = (e, t) => {
          let i = (0, a.g)(),
            { params: s, el: r, wrapperEl: n, device: l } = e,
            o = !!s.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          r &&
            "string" != typeof r &&
            (i[d]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            r[d]("touchstart", e.onTouchStart, { passive: !1 }),
            r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("touchend", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (s.preventClicks || s.preventClicksPropagation) &&
              r[d]("click", e.onClick, !0),
            s.cssMode && n[d]("scroll", e.onScroll),
            s.updateOnWindowResize
              ? e[t](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  onResize,
                  !0
                )
              : e[t]("observerUpdate", onResize, !0),
            r[d]("load", e.onLoad, { capture: !0 }));
        },
        isGridEnabled = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var d = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let c = {
          eventsEmitter: {
            on(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              let r = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][r](t);
                }),
                s
              );
            },
            once(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              function onceHandler() {
                s.off(e, onceHandler),
                  onceHandler.__emitterProxy &&
                    delete onceHandler.__emitterProxy;
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                  r[n] = arguments[n];
                t.apply(s, r);
              }
              return (onceHandler.__emitterProxy = t), s.on(e, onceHandler, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((s, r) => {
                          (s === t ||
                            (s.__emitterProxy && s.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(r, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let s = this;
              if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
                return s;
              for (var r = arguments.length, n = Array(r), l = 0; l < r; l++)
                n[l] = arguments[l];
              "string" == typeof n[0] || Array.isArray(n[0])
                ? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
                : ((e = n[0].events), (t = n[0].data), (i = n[0].context || s)),
                t.unshift(i);
              let a = Array.isArray(e) ? e : e.split(" ");
              return (
                a.forEach((e) => {
                  s.eventsAnyListeners &&
                    s.eventsAnyListeners.length &&
                    s.eventsAnyListeners.forEach((s) => {
                      s.apply(i, [e, ...t]);
                    }),
                    s.eventsListeners &&
                      s.eventsListeners[e] &&
                      s.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                s
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.p)(i, "padding-left") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.p)(i, "padding-top") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function getDirectionPropertyValue(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let i = t.params,
                {
                  wrapperEl: s,
                  slidesEl: r,
                  size: n,
                  rtlTranslate: l,
                  wrongRTL: a,
                } = t,
                d = t.virtual && i.virtual.enabled,
                c = d ? t.virtual.slides.length : t.slides.length,
                u = (0, o.e)(r, `.${t.params.slideClass}, swiper-slide`),
                p = d ? t.virtual.slides.length : u.length,
                h = [],
                f = [],
                m = [],
                v = i.slidesOffsetBefore;
              "function" == typeof v && (v = i.slidesOffsetBefore.call(t));
              let g = i.slidesOffsetAfter;
              "function" == typeof g && (g = i.slidesOffsetAfter.call(t));
              let w = t.snapGrid.length,
                S = t.slidesGrid.length,
                b = i.spaceBetween,
                y = -v,
                T = 0,
                E = 0;
              if (void 0 === n) return;
              "string" == typeof b && b.indexOf("%") >= 0
                ? (b = (parseFloat(b.replace("%", "")) / 100) * n)
                : "string" == typeof b && (b = parseFloat(b)),
                (t.virtualSize = -b),
                u.forEach((e) => {
                  l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                i.centeredSlides &&
                  i.cssMode &&
                  ((0, o.s)(s, "--swiper-centered-offset-before", ""),
                  (0, o.s)(s, "--swiper-centered-offset-after", ""));
              let x = i.grid && i.grid.rows > 1 && t.grid;
              x ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
              let C =
                "auto" === i.slidesPerView &&
                i.breakpoints &&
                Object.keys(i.breakpoints).filter(
                  (e) => void 0 !== i.breakpoints[e].slidesPerView
                ).length > 0;
              for (let s = 0; s < p; s += 1) {
                let r;
                if (
                  ((e = 0),
                  u[s] && (r = u[s]),
                  x && t.grid.updateSlide(s, r, u),
                  !u[s] || "none" !== (0, o.p)(r, "display"))
                ) {
                  if ("auto" === i.slidesPerView) {
                    C && (u[s].style[t.getDirectionLabel("width")] = "");
                    let n = getComputedStyle(r),
                      l = r.style.transform,
                      a = r.style.webkitTransform;
                    if (
                      (l && (r.style.transform = "none"),
                      a && (r.style.webkitTransform = "none"),
                      i.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, o.f)(r, "width", !0)
                        : (0, o.f)(r, "height", !0);
                    else {
                      let t = getDirectionPropertyValue(n, "width"),
                        i = getDirectionPropertyValue(n, "padding-left"),
                        s = getDirectionPropertyValue(n, "padding-right"),
                        l = getDirectionPropertyValue(n, "margin-left"),
                        a = getDirectionPropertyValue(n, "margin-right"),
                        o = n.getPropertyValue("box-sizing");
                      if (o && "border-box" === o) e = t + l + a;
                      else {
                        let { clientWidth: n, offsetWidth: o } = r;
                        e = t + i + s + l + a + (o - n);
                      }
                    }
                    l && (r.style.transform = l),
                      a && (r.style.webkitTransform = a),
                      i.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (n - (i.slidesPerView - 1) * b) / i.slidesPerView),
                      i.roundLengths && (e = Math.floor(e)),
                      u[s] &&
                        (u[s].style[t.getDirectionLabel("width")] = `${e}px`);
                  u[s] && (u[s].swiperSlideSize = e),
                    m.push(e),
                    i.centeredSlides
                      ? ((y = y + e / 2 + T / 2 + b),
                        0 === T && 0 !== s && (y = y - n / 2 - b),
                        0 === s && (y = y - n / 2 - b),
                        0.001 > Math.abs(y) && (y = 0),
                        i.roundLengths && (y = Math.floor(y)),
                        E % i.slidesPerGroup == 0 && h.push(y),
                        f.push(y))
                      : (i.roundLengths && (y = Math.floor(y)),
                        (E - Math.min(t.params.slidesPerGroupSkip, E)) %
                          t.params.slidesPerGroup ==
                          0 && h.push(y),
                        f.push(y),
                        (y = y + e + b)),
                    (t.virtualSize += e + b),
                    (T = e),
                    (E += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, n) + g),
                l &&
                  a &&
                  ("slide" === i.effect || "coverflow" === i.effect) &&
                  (s.style.width = `${t.virtualSize + b}px`),
                i.setWrapperSize &&
                  (s.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + b
                  }px`),
                x && t.grid.updateWrapperSize(e, h),
                !i.centeredSlides)
              ) {
                let e = [];
                for (let s = 0; s < h.length; s += 1) {
                  let r = h[s];
                  i.roundLengths && (r = Math.floor(r)),
                    h[s] <= t.virtualSize - n && e.push(r);
                }
                (h = e),
                  Math.floor(t.virtualSize - n) - Math.floor(h[h.length - 1]) >
                    1 && h.push(t.virtualSize - n);
              }
              if (d && i.loop) {
                let e = m[0] + b;
                if (i.slidesPerGroup > 1) {
                  let s = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        i.slidesPerGroup
                    ),
                    r = e * i.slidesPerGroup;
                  for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + r);
                }
                for (
                  let s = 0;
                  s < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  s += 1
                )
                  1 === i.slidesPerGroup && h.push(h[h.length - 1] + e),
                    f.push(f[f.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === h.length && (h = [0]), 0 !== b)) {
                let e =
                  t.isHorizontal() && l
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                u.filter(
                  (e, t) => !i.cssMode || !!i.loop || t !== u.length - 1
                ).forEach((t) => {
                  t.style[e] = `${b}px`;
                });
              }
              if (i.centeredSlides && i.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t) => {
                  e += t + (b || 0);
                }),
                  (e -= b);
                let t = e > n ? e - n : 0;
                h = h.map((e) => (e <= 0 ? -v : e > t ? t + g : e));
              }
              if (i.centerInsufficientSlides) {
                let e = 0;
                m.forEach((t) => {
                  e += t + (b || 0);
                }),
                  (e -= b);
                let t =
                  (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                if (e + t < n) {
                  let i = (n - e - t) / 2;
                  h.forEach((e, t) => {
                    h[t] = e - i;
                  }),
                    f.forEach((e, t) => {
                      f[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: u,
                  snapGrid: h,
                  slidesGrid: f,
                  slidesSizesGrid: m,
                }),
                i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
              ) {
                (0, o.s)(s, "--swiper-centered-offset-before", `${-h[0]}px`),
                  (0, o.s)(
                    s,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - m[m.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (p !== c && t.emit("slidesLengthChange"),
                h.length !== w &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                f.length !== S && t.emit("slidesGridLengthChange"),
                i.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !d &&
                  !i.cssMode &&
                  ("slide" === i.effect || "fade" === i.effect))
              ) {
                let e = `${i.containerModifierClass}backface-hidden`,
                  s = t.el.classList.contains(e);
                p <= i.maxBackfaceHiddenSlides
                  ? s || t.el.classList.add(e)
                  : s && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                s = [],
                r = i.virtual && i.params.virtual.enabled,
                n = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let getSlideByIndex = (e) =>
                r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    s.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !r) break;
                    s.push(getSlideByIndex(e));
                  }
              } else s.push(getSlideByIndex(i.activeIndex));
              for (t = 0; t < s.length; t += 1)
                if (void 0 !== s[t]) {
                  let e = s[t].offsetHeight;
                  n = e > n ? e : n;
                }
              (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: s, snapGrid: r } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let n = -e;
              s && (n = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let l = t.spaceBetween;
              "string" == typeof l && l.indexOf("%") >= 0
                ? (l = (parseFloat(l.replace("%", "")) / 100) * this.size)
                : "string" == typeof l && (l = parseFloat(l));
              for (let e = 0; e < i.length; e += 1) {
                let a = i[e],
                  o = a.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (n + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (a.swiperSlideSize + l),
                  c =
                    (n -
                      r[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (a.swiperSlideSize + l),
                  u = -(n - o),
                  p = u + this.slidesSizesGrid[e],
                  h = u >= 0 && u <= this.size - this.slidesSizesGrid[e],
                  f =
                    (u >= 0 && u < this.size - 1) ||
                    (p > 1 && p <= this.size) ||
                    (u <= 0 && p >= this.size);
                f &&
                  (this.visibleSlides.push(a),
                  this.visibleSlidesIndexes.push(e)),
                  toggleSlideClasses$1(a, f, t.slideVisibleClass),
                  toggleSlideClasses$1(a, h, t.slideFullyVisibleClass),
                  (a.progress = s ? -d : d),
                  (a.originalProgress = s ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: s,
                  isBeginning: r,
                  isEnd: n,
                  progressLoop: l,
                } = this,
                a = r,
                o = n;
              if (0 === i) (s = 0), (r = !0), (n = !0);
              else {
                s = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  l = 1 > Math.abs(e - this.maxTranslate());
                (r = t || s <= 0),
                  (n = l || s >= 1),
                  t && (s = 0),
                  l && (s = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  s = this.slidesGrid[t],
                  r = this.slidesGrid[i],
                  n = this.slidesGrid[this.slidesGrid.length - 1],
                  a = Math.abs(e);
                (l = a >= s ? (a - s) / n : (a + n - r) / n) > 1 && (l -= 1);
              }
              Object.assign(this, {
                progress: s,
                progressLoop: l,
                isBeginning: r,
                isEnd: n,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                r && !a && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                ((a && !r) || (o && !n)) && this.emit("fromEdge"),
                this.emit("progress", s);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: s, params: r, slidesEl: n, activeIndex: l } = this,
                a = this.virtual && r.virtual.enabled,
                d = this.grid && r.grid && r.grid.rows > 1,
                getFilteredSlide = (e) =>
                  (0, o.e)(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
              if (a) {
                if (r.loop) {
                  let t = l - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = getFilteredSlide(`[data-swiper-slide-index="${t}"]`));
                } else e = getFilteredSlide(`[data-swiper-slide-index="${l}"]`);
              } else
                d
                  ? ((e = s.find((e) => e.column === l)),
                    (i = s.find((e) => e.column === l + 1)),
                    (t = s.find((e) => e.column === l - 1)))
                  : (e = s[l]);
              e &&
                !d &&
                ((i = (0, o.q)(e, `.${r.slideClass}, swiper-slide`)[0]),
                r.loop && !i && (i = s[0]),
                (t = (0, o.r)(e, `.${r.slideClass}, swiper-slide`)[0]),
                r.loop),
                s.forEach((s) => {
                  toggleSlideClasses(s, s === e, r.slideActiveClass),
                    toggleSlideClasses(s, s === i, r.slideNextClass),
                    toggleSlideClasses(s, s === t, r.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let s = this,
                r = s.rtlTranslate ? s.translate : -s.translate,
                {
                  snapGrid: n,
                  params: l,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: d,
                } = s,
                c = e,
                getVirtualRealIndex = (e) => {
                  let t = e - s.virtual.slidesBefore;
                  return (
                    t < 0 && (t = s.virtual.slides.length + t),
                    t >= s.virtual.slides.length &&
                      (t -= s.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t;
                    let { slidesGrid: i, params: s } = e,
                      r = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : r >= i[e] && r < i[e + 1] && (t = e + 1)
                        : r >= i[e] && (t = e);
                    return (
                      s.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(s)),
                n.indexOf(r) >= 0)
              )
                t = n.indexOf(r);
              else {
                let e = Math.min(l.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / l.slidesPerGroup);
              }
              if (
                (t >= n.length && (t = n.length - 1), c === a && !s.params.loop)
              ) {
                t !== d && ((s.snapIndex = t), s.emit("snapIndexChange"));
                return;
              }
              if (
                c === a &&
                s.params.loop &&
                s.virtual &&
                s.params.virtual.enabled
              ) {
                s.realIndex = getVirtualRealIndex(c);
                return;
              }
              let u = s.grid && l.grid && l.grid.rows > 1;
              if (s.virtual && l.virtual.enabled && l.loop)
                i = getVirtualRealIndex(c);
              else if (u) {
                let e = s.slides.find((e) => e.column === c),
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)),
                  (i = Math.floor(t / l.grid.rows));
              } else if (s.slides[c]) {
                let e = s.slides[c].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : c;
              } else i = c;
              Object.assign(s, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: a,
                activeIndex: c,
              }),
                s.initialized && preload(s),
                s.emit("activeIndexChange"),
                s.emit("snapIndexChange"),
                (s.initialized || s.params.runCallbacksOnInit) &&
                  (o !== i && s.emit("realIndexChange"), s.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let s = this.params,
                r = e.closest(`.${s.slideClass}, swiper-slide`);
              !r &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !r &&
                    e.matches &&
                    e.matches(`.${s.slideClass}, swiper-slide`) &&
                    (r = e);
                });
              let n = !1;
              if (r) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === r) {
                    (n = !0), (i = e);
                    break;
                  }
              }
              if (r && n)
                (this.clickedSlide = r),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        r.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              s.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: s,
                wrapperEl: r,
              } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let n = (0, o.j)(r, e);
              return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: s,
                  wrapperEl: r,
                  progress: n,
                } = this,
                l = 0,
                a = 0;
              this.isHorizontal() ? (l = i ? -e : e) : (a = e),
                s.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? l : a),
                s.cssMode
                  ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -l : -a)
                  : s.virtualTranslate ||
                    (this.isHorizontal()
                      ? (l -= this.cssOverflowAdjustment())
                      : (a -= this.cssOverflowAdjustment()),
                    (r.style.transform = `translate3d(${l}px, ${a}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, s, r) {
              let n;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
              let l = this,
                { params: a, wrapperEl: d } = l;
              if (l.animating && a.preventInteractionOnTransition) return !1;
              let c = l.minTranslate(),
                u = l.maxTranslate();
              if (
                ((n = s && e > c ? c : s && e < u ? u : e),
                l.updateProgress(n),
                a.cssMode)
              ) {
                let e = l.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -n;
                else {
                  if (!l.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: l,
                        targetPosition: -n,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -n, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, r),
                      l.emit("transitionEnd")))
                  : (l.setTransition(t),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, r),
                      l.emit("transitionStart")),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.wrapperEl.removeEventListener(
                              "transitionend",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            (l.animating = !1),
                            i && l.emit("transitionEnd"));
                        }),
                      l.wrapperEl.addEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                transitionEmit({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  transitionEmit({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, s, r) {
              let n;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let l = this,
                a = e;
              a < 0 && (a = 0);
              let {
                params: d,
                snapGrid: c,
                slidesGrid: u,
                previousIndex: p,
                activeIndex: h,
                rtlTranslate: f,
                wrapperEl: m,
                enabled: v,
              } = l;
              if (
                (!v && !s && !r) ||
                l.destroyed ||
                (l.animating && d.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = l.params.speed);
              let g = Math.min(l.params.slidesPerGroupSkip, a),
                w = g + Math.floor((a - g) / l.params.slidesPerGroup);
              w >= c.length && (w = c.length - 1);
              let S = -c[w];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < u.length; e += 1) {
                  let t = -Math.floor(100 * S),
                    i = Math.floor(100 * u[e]),
                    s = Math.floor(100 * u[e + 1]);
                  void 0 !== u[e + 1]
                    ? t >= i && t < s - (s - i) / 2
                      ? (a = e)
                      : t >= i && t < s && (a = e + 1)
                    : t >= i && (a = e);
                }
              if (
                l.initialized &&
                a !== h &&
                ((!l.allowSlideNext &&
                  (f
                    ? S > l.translate && S > l.minTranslate()
                    : S < l.translate && S < l.minTranslate())) ||
                  (!l.allowSlidePrev &&
                    S > l.translate &&
                    S > l.maxTranslate() &&
                    (h || 0) !== a))
              )
                return !1;
              a !== (p || 0) && i && l.emit("beforeSlideChangeStart"),
                l.updateProgress(S),
                (n = a > h ? "next" : a < h ? "prev" : "reset");
              let b = l.virtual && l.params.virtual.enabled;
              if (
                !(b && r) &&
                ((f && -S === l.translate) || (!f && S === l.translate))
              )
                return (
                  l.updateActiveIndex(a),
                  d.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  "slide" !== d.effect && l.setTranslate(S),
                  "reset" !== n &&
                    (l.transitionStart(i, n), l.transitionEnd(i, n)),
                  !1
                );
              if (d.cssMode) {
                let e = l.isHorizontal(),
                  i = f ? S : -S;
                if (0 === t)
                  b &&
                    ((l.wrapperEl.style.scrollSnapType = "none"),
                    (l._immediateVirtual = !0)),
                    b &&
                    !l._cssModeVirtualInitialSet &&
                    l.params.initialSlide > 0
                      ? ((l._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    b &&
                      requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ""),
                          (l._immediateVirtual = !1);
                      });
                else {
                  if (!l.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: l,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                l.setTransition(t),
                l.setTranslate(S),
                l.updateActiveIndex(a),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, s),
                l.transitionStart(i, n),
                0 === t
                  ? l.transitionEnd(i, n)
                  : l.animating ||
                    ((l.animating = !0),
                    l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (e) {
                        l &&
                          !l.destroyed &&
                          e.target === this &&
                          (l.wrapperEl.removeEventListener(
                            "transitionend",
                            l.onSlideToWrapperTransitionEnd
                          ),
                          (l.onSlideToWrapperTransitionEnd = null),
                          delete l.onSlideToWrapperTransitionEnd,
                          l.transitionEnd(i, n));
                      }),
                    l.wrapperEl.addEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, s) {
              if (
                (void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e)
              ) {
                let t = parseInt(e, 10);
                e = t;
              }
              let r = this;
              if (r.destroyed) return;
              void 0 === t && (t = r.params.speed);
              let n = r.grid && r.params.grid && r.params.grid.rows > 1,
                l = e;
              if (r.params.loop) {
                if (r.virtual && r.params.virtual.enabled)
                  l += r.virtual.slidesBefore;
                else {
                  let e;
                  if (n) {
                    let t = l * r.params.grid.rows;
                    e = r.slides.find(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    ).column;
                  } else e = r.getSlideIndexByData(l);
                  let t = n
                      ? Math.ceil(r.slides.length / r.params.grid.rows)
                      : r.slides.length,
                    { centeredSlides: i } = r.params,
                    a = r.params.slidesPerView;
                  "auto" === a
                    ? (a = r.slidesPerViewDynamic())
                    : ((a = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                      i && a % 2 == 0 && (a += 1));
                  let o = t - e < a;
                  if (
                    (i && (o = o || e < Math.ceil(a / 2)),
                    s &&
                      i &&
                      "auto" !== r.params.slidesPerView &&
                      !n &&
                      (o = !1),
                    o)
                  ) {
                    let s = i
                      ? e < r.activeIndex
                        ? "prev"
                        : "next"
                      : e - r.activeIndex - 1 < r.params.slidesPerView
                      ? "next"
                      : "prev";
                    r.loopFix({
                      direction: s,
                      slideTo: !0,
                      activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === s ? r.realIndex : void 0,
                    });
                  }
                  if (n) {
                    let e = l * r.params.grid.rows;
                    l = r.slides.find(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    ).column;
                  } else l = r.getSlideIndexByData(l);
                }
              }
              return (
                requestAnimationFrame(() => {
                  r.slideTo(l, t, i, s);
                }),
                r
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                { enabled: r, params: n, animating: l } = s;
              if (!r || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let a = n.slidesPerGroup;
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
              let o = s.activeIndex < n.slidesPerGroupSkip ? 1 : a,
                d = s.virtual && n.virtual.enabled;
              if (n.loop) {
                if (l && !d && n.loopPreventsSliding) return !1;
                if (
                  (s.loopFix({ direction: "next" }),
                  (s._clientLeft = s.wrapperEl.clientLeft),
                  s.activeIndex === s.slides.length - 1 && n.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      s.slideTo(s.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return n.rewind && s.isEnd
                ? s.slideTo(0, e, t, i)
                : s.slideTo(s.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                {
                  params: r,
                  snapGrid: n,
                  slidesGrid: l,
                  rtlTranslate: a,
                  enabled: o,
                  animating: d,
                } = s;
              if (!o || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let c = s.virtual && r.virtual.enabled;
              if (r.loop) {
                if (d && !c && r.loopPreventsSliding) return !1;
                s.loopFix({ direction: "prev" }),
                  (s._clientLeft = s.wrapperEl.clientLeft);
              }
              let u = a ? s.translate : -s.translate;
              function normalize(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = normalize(u),
                h = n.map((e) => normalize(e)),
                f = n[h.indexOf(p) - 1];
              if (void 0 === f && r.cssMode) {
                let e;
                n.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = l.indexOf(f)) < 0 && (m = s.activeIndex - 1),
                  "auto" === r.slidesPerView &&
                    1 === r.slidesPerGroup &&
                    r.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - s.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                r.rewind && s.isBeginning)
              ) {
                let r =
                  s.params.virtual && s.params.virtual.enabled && s.virtual
                    ? s.virtual.slides.length - 1
                    : s.slides.length - 1;
                return s.slideTo(r, e, t, i);
              }
              return r.loop && 0 === s.activeIndex && r.cssMode
                ? (requestAnimationFrame(() => {
                    s.slideTo(m, e, t, i);
                  }),
                  !0)
                : s.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, s) {
              if (
                (void 0 === t && (t = !0),
                void 0 === s && (s = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let r = this.activeIndex,
                n = Math.min(this.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / this.params.slidesPerGroup),
                a = this.rtlTranslate ? this.translate : -this.translate;
              if (a >= this.snapGrid[l]) {
                let e = this.snapGrid[l],
                  t = this.snapGrid[l + 1];
                a - e > (t - e) * s && (r += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[l - 1],
                  t = this.snapGrid[l];
                a - e <= (t - e) * s && (r -= this.params.slidesPerGroup);
              }
              return (
                (r = Math.min(
                  (r = Math.max(r, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(r, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: s } = t,
                r =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex,
                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - r / 2 ||
                      n > t.slides.length - t.loopedSlides + r / 2
                      ? (t.loopFix(),
                        (n = t.getSlideIndex(
                          (0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, o.n)(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - r
                    ? (t.loopFix(),
                      (n = t.getSlideIndex(
                        (0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, o.n)(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: s } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let initSlides = () => {
                  let e = (0, o.e)(s, `.${i.slideClass}, swiper-slide`);
                  e.forEach((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  });
                },
                r = t.grid && i.grid && i.grid.rows > 1,
                n = i.slidesPerGroup * (r ? i.grid.rows : 1),
                l = t.slides.length % n != 0,
                a = r && t.slides.length % i.grid.rows != 0,
                addBlankSlides = (e) => {
                  for (let s = 0; s < e; s += 1) {
                    let e = t.isElement
                      ? (0, o.c)("swiper-slide", [i.slideBlankClass])
                      : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              if (l) {
                if (i.loopAddBlankSlides) {
                  let e = n - (t.slides.length % n);
                  addBlankSlides(e), t.recalcSlides(), t.updateSlides();
                } else
                  (0, o.u)(
                    "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                  );
                initSlides();
              } else if (a) {
                if (i.loopAddBlankSlides) {
                  let e = i.grid.rows - (t.slides.length % i.grid.rows);
                  addBlankSlides(e), t.recalcSlides(), t.updateSlides();
                } else
                  (0, o.u)(
                    "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                  );
                initSlides();
              } else initSlides();
              t.loopFix({
                slideRealIndex: e,
                direction: i.centeredSlides ? void 0 : "next",
              });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: s,
                  setTranslate: r,
                  activeSlideIndex: n,
                  byController: l,
                  byMousewheel: a,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: c,
                  allowSlidePrev: u,
                  allowSlideNext: p,
                  slidesEl: h,
                  params: f,
                } = d,
                { centeredSlides: m } = f;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && f.virtual.enabled)
              ) {
                i &&
                  (f.centeredSlides || 0 !== d.snapIndex
                    ? f.centeredSlides && d.snapIndex < f.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = u),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let v = f.slidesPerView;
              "auto" === v
                ? (v = d.slidesPerViewDynamic())
                : ((v = Math.ceil(parseFloat(f.slidesPerView, 10))),
                  m && v % 2 == 0 && (v += 1));
              let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup,
                w = g;
              w % g != 0 && (w += g - (w % g)),
                (w += f.loopAdditionalSlides),
                (d.loopedSlides = w);
              let S = d.grid && f.grid && f.grid.rows > 1;
              c.length < v + w
                ? (0, o.u)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : S &&
                  "row" === f.grid.fill &&
                  (0, o.u)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let b = [],
                y = [],
                T = d.activeIndex;
              void 0 === n
                ? (n = d.getSlideIndex(
                    c.find((e) => e.classList.contains(f.slideActiveClass))
                  ))
                : (T = n);
              let E = "next" === s || !s,
                x = "prev" === s || !s,
                C = 0,
                P = 0,
                M = S ? Math.ceil(c.length / f.grid.rows) : c.length,
                O = S ? c[n].column : n,
                k = O + (m && void 0 === r ? -v / 2 + 0.5 : 0);
              if (k < w) {
                C = Math.max(w - k, g);
                for (let e = 0; e < w - k; e += 1) {
                  let t = e - Math.floor(e / M) * M;
                  if (S) {
                    let e = M - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1)
                      c[t].column === e && b.push(t);
                  } else b.push(M - t - 1);
                }
              } else if (k + v > M - w) {
                P = Math.max(k - (M - 2 * w), g);
                for (let e = 0; e < P; e += 1) {
                  let t = e - Math.floor(e / M) * M;
                  S
                    ? c.forEach((e, i) => {
                        e.column === t && y.push(i);
                      })
                    : y.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                x &&
                  b.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.prepend(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                E &&
                  y.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.append(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === f.slidesPerView
                  ? d.updateSlides()
                  : S &&
                    ((b.length > 0 && x) || (y.length > 0 && E)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                f.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (b.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[T],
                      t = d.slidesGrid[T + C],
                      i = t - e;
                    a
                      ? d.setTranslate(d.translate - i)
                      : (d.slideTo(T + Math.ceil(C), 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - i),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - i)));
                  } else if (r) {
                    let e = S ? b.length / f.grid.rows : b.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (y.length > 0 && E) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[T],
                      t = d.slidesGrid[T - P],
                      i = t - e;
                    a
                      ? d.setTranslate(d.translate - i)
                      : (d.slideTo(T - P, 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - i),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - i)));
                  } else {
                    let e = S ? y.length / f.grid.rows : y.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = u),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !l)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: s,
                  setTranslate: r,
                  activeSlideIndex: n,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === f.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          f.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                let t =
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex;
                i[t] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = onTouchStart.bind(this)),
                (this.onTouchMove = onTouchMove.bind(this)),
                (this.onTouchEnd = onTouchEnd.bind(this)),
                (this.onDocumentTouchStart = onDocumentTouchStart.bind(this)),
                e.cssMode && (this.onScroll = onScroll.bind(this)),
                (this.onClick = onClick.bind(this)),
                (this.onLoad = onLoad.bind(this)),
                events(this, "on");
            },
            detachEvents: function () {
              events(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: s, el: r } = e,
                n = s.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let l = (0, a.g)(),
                d =
                  "window" !== s.breakpointsBase && s.breakpointsBase
                    ? "container"
                    : s.breakpointsBase,
                c =
                  ["window", "container"].includes(s.breakpointsBase) ||
                  !s.breakpointsBase
                    ? e.el
                    : l.querySelector(s.breakpointsBase),
                u = e.getBreakpoint(n, d, c);
              if (!u || e.currentBreakpoint === u) return;
              let p = u in n ? n[u] : void 0,
                h = p || e.originalParams,
                f = isGridEnabled(e, s),
                m = isGridEnabled(e, h),
                v = e.params.grabCursor,
                g = h.grabCursor,
                w = s.enabled;
              f && !m
                ? (r.classList.remove(
                    `${s.containerModifierClass}grid`,
                    `${s.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !f &&
                  m &&
                  (r.classList.add(`${s.containerModifierClass}grid`),
                  ((h.grid.fill && "column" === h.grid.fill) ||
                    (!h.grid.fill && "column" === s.grid.fill)) &&
                    r.classList.add(`${s.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                v && !g ? e.unsetGrabCursor() : !v && g && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === h[t]) return;
                  let i = s[t] && s[t].enabled,
                    r = h[t] && h[t].enabled;
                  i && !r && e[t].disable(), !i && r && e[t].enable();
                });
              let S = h.direction && h.direction !== s.direction,
                b = s.loop && (h.slidesPerView !== s.slidesPerView || S),
                y = s.loop;
              S && i && e.changeDirection(), (0, o.w)(e.params, h);
              let T = e.params.enabled,
                E = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                w && !T ? e.disable() : !w && T && e.enable(),
                (e.currentBreakpoint = u),
                e.emit("_beforeBreakpoint", h),
                i &&
                  (b
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !y && E
                    ? (e.loopCreate(t), e.updateSlides())
                    : y && !E && e.loopDestroy()),
                e.emit("breakpoint", h);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let s = !1,
                r = (0, a.a)(),
                n = "window" === t ? r.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    let t = parseFloat(e.substr(1));
                    return { value: n * t, point: e };
                  }
                  return { value: e, point: e };
                });
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                let { point: n, value: a } = l[e];
                "window" === t
                  ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = n)
                  : a <= i.clientWidth && (s = n);
              }
              return s || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: s, device: r } = this,
                n = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((s) => {
                            e[s] && i.push(t + s);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: r.android },
                    { ios: r.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n), s.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        u = {};
      let Swiper = class Swiper {
        constructor() {
          let e, t;
          for (var i = arguments.length, s = Array(i), r = 0; r < i; r++)
            s[r] = arguments[r];
          1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
            t || (t = {}),
            (t = (0, o.w)({}, t)),
            e && !t.el && (t.el = e);
          let l = (0, a.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            l.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              l.querySelectorAll(t.el).forEach((i) => {
                let s = (0, o.w)({}, t, { el: i });
                e.push(new Swiper(s));
              }),
              e
            );
          }
          let c = this;
          (c.__swiper__ = !0),
            (c.support = getSupport()),
            (c.device = getDevice({ userAgent: t.userAgent })),
            (c.browser =
              (n ||
                (n = (function () {
                  let e = (0, a.a)(),
                    t = getDevice(),
                    i = !1;
                  function isSafari() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (isSafari()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, s] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && s < 2);
                    }
                  }
                  let s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    r = isSafari(),
                    n = r || (s && t.ios);
                  return {
                    isSafari: i || r,
                    needPerspectiveFix: i,
                    need3dFix: n,
                    isWebView: s,
                  };
                })()),
              n)),
            (c.eventsListeners = {}),
            (c.eventsAnyListeners = []),
            (c.modules = [...c.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              c.modules.push(...t.modules);
          let p = {};
          c.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: c,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    s = e[t];
                  if (
                    "object" != typeof s ||
                    null === s ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    "navigation" === t &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].prevEl &&
                      !i[t].nextEl &&
                      (i[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].el &&
                      (i[t].auto = !0),
                    !(t in i && "enabled" in s))
                  ) {
                    (0, o.w)(p, e);
                    return;
                  }
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    (0, o.w)(p, e);
                }),
              on: c.on.bind(c),
              once: c.once.bind(c),
              off: c.off.bind(c),
              emit: c.emit.bind(c),
            });
          });
          let h = (0, o.w)({}, d, p);
          return (
            (c.params = (0, o.w)({}, h, u, t)),
            (c.originalParams = (0, o.w)({}, c.params)),
            (c.passedParams = (0, o.w)({}, t)),
            c.params &&
              c.params.on &&
              Object.keys(c.params.on).forEach((e) => {
                c.on(e, c.params.on[e]);
              }),
            c.params && c.params.onAny && c.onAny(c.params.onAny),
            Object.assign(c, {
              enabled: c.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === c.params.direction,
              isVertical: () => "vertical" === c.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: c.params.allowSlideNext,
              allowSlidePrev: c.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: c.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: c.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            c.emit("_swiper"),
            c.params.init && c.init(),
            c
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            r = (0, o.h)(s[0]);
          return (0, o.h)(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.find(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            s = this.maxTranslate(),
            r = (s - i) * e + i;
          this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: s,
              slidesGrid: r,
              slidesSizesGrid: n,
              size: l,
              activeIndex: a,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = s[a] ? Math.ceil(s[a].swiperSlideSize) : 0;
            for (let i = a + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += Math.ceil(s[i].swiperSlideSize)),
                (o += 1),
                t > l && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (o += 1), t > l && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < s.length; e += 1) {
              let i = t ? r[e] + n[e] - r[a] < l : r[e] - r[a] < l;
              i && (o += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              let t = r[a] - r[e] < l;
              t && (o += 1);
            }
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: s } = t;
          function setTranslate() {
            let e = t.rtlTranslate ? -1 * t.translate : t.translate,
              i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (s.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && processLazyPreloader(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
          )
            setTranslate(), s.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
              t.isEnd &&
              !s.centeredSlides
            ) {
              let i =
                t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || setTranslate();
          }
          s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let getWrapperSelector = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            s = (() => {
              if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                let e = i.shadowRoot.querySelector(getWrapperSelector());
                return e;
              }
              return (0, o.e)(i, getWrapperSelector())[0];
            })();
          return (
            !s &&
              t.params.createElements &&
              ((s = (0, o.c)("div", t.params.wrapperClass)),
              i.append(s),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                s.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: s,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : s,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() ||
                "rtl" === (0, o.p)(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() ||
                  "rtl" === (0, o.p)(i, "direction")),
              wrongRTL: "-webkit-box" === (0, o.p)(s, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized) return t;
          let i = t.mount(e);
          if (!1 === i) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            s.forEach((e) => {
              e.complete
                ? processLazyPreloader(t, e)
                : e.addEventListener("load", (e) => {
                    processLazyPreloader(t, e.target);
                  });
            }),
            preload(t),
            (t.initialized = !0),
            preload(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: s, el: r, wrapperEl: n, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r && "string" != typeof r && r.removeAttribute("style"),
                n && n.removeAttribute("style"),
                l &&
                  l.length &&
                  l.forEach((e) => {
                    e.classList.remove(
                      s.slideVisibleClass,
                      s.slideFullyVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (0, o.x)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.w)(u, e);
        }
        static get extendedDefaults() {
          return u;
        }
        static get defaults() {
          return d;
        }
        static installModule(e) {
          Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
          let t = Swiper.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => Swiper.installModule(e))
              : Swiper.installModule(e),
            Swiper
          );
        }
      };
      Object.keys(c).forEach((e) => {
        Object.keys(c[e]).forEach((t) => {
          Swiper.prototype[t] = c[e][t];
        });
      }),
        Swiper.use([
          function (e) {
            let { swiper: t, on: i, emit: s } = e,
              r = (0, a.a)(),
              n = null,
              l = null,
              resizeHandler = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              createObserver = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n = new ResizeObserver((e) => {
                    l = r.requestAnimationFrame(() => {
                      let { width: i, height: s } = t,
                        r = i,
                        n = s;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: s,
                          target: l,
                        } = e;
                        (l && l !== t.el) ||
                          ((r = s ? s.width : (i[0] || i).inlineSize),
                          (n = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (r !== i || n !== s) && resizeHandler();
                    });
                  })).observe(t.el);
              },
              removeObserver = () => {
                l && r.cancelAnimationFrame(l),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
              },
              orientationChangeHandler = () => {
                t && !t.destroyed && t.initialized && s("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                createObserver();
                return;
              }
              r.addEventListener("resize", resizeHandler),
                r.addEventListener(
                  "orientationchange",
                  orientationChangeHandler
                );
            }),
              i("destroy", () => {
                removeObserver(),
                  r.removeEventListener("resize", resizeHandler),
                  r.removeEventListener(
                    "orientationchange",
                    orientationChangeHandler
                  );
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: r } = e,
              n = [],
              l = (0, a.a)(),
              attach = function (e, i) {
                void 0 === i && (i = {});
                let s = l.MutationObserver || l.WebkitMutationObserver,
                  a = new s((e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      r("observerUpdate", e[0]);
                      return;
                    }
                    let observerUpdate = function () {
                      r("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame
                      ? l.requestAnimationFrame(observerUpdate)
                      : l.setTimeout(observerUpdate, 0);
                  });
                a.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList:
                    t.isElement || (void 0 === i.childList || i).childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(a);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) attach(e[t]);
                  }
                  attach(t.hostEl, {
                    childList: t.params.observeSlideChildren,
                  }),
                    attach(t.wrapperEl, { attributes: !1 });
                }
              }),
              s("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      let p = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function isObject(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function extend(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : isObject(t[i]) && isObject(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : extend(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function needsNavigation(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function needsPagination(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function needsScrollbar(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function uniqueClasses(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let updateOnVirtualData = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function isChildSwiperSlide(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function useIsomorphicLayoutEffect(e, t) {
        return "undefined" == typeof window
          ? (0, l.useEffect)(e, t)
          : (0, l.useLayoutEffect)(e, t);
      }
      let h = (0, l.createContext)(null),
        f = (0, l.createContext)(null),
        m = (0, l.forwardRef)(function (e, t) {
          var i;
          let {
              className: s,
              tag: r = "div",
              wrapperTag: n = "div",
              children: a,
              onSwiper: o,
              ...c
            } = void 0 === e ? {} : e,
            u = !1,
            [h, m] = (0, l.useState)("swiper"),
            [v, g] = (0, l.useState)(null),
            [w, S] = (0, l.useState)(!1),
            b = (0, l.useRef)(!1),
            y = (0, l.useRef)(null),
            T = (0, l.useRef)(null),
            E = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            C = (0, l.useRef)(null),
            P = (0, l.useRef)(null),
            M = (0, l.useRef)(null),
            O = (0, l.useRef)(null),
            {
              params: k,
              passedParams: L,
              rest: _,
              events: I,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                s = {},
                r = {};
              extend(i, d), (i._emitClasses = !0), (i.init = !1);
              let n = {},
                l = p.map((e) => e.replace(/_/, "")),
                a = Object.assign({}, e);
              return (
                Object.keys(a).forEach((a) => {
                  void 0 !== e[a] &&
                    (l.indexOf(a) >= 0
                      ? isObject(e[a])
                        ? ((i[a] = {}),
                          (r[a] = {}),
                          extend(i[a], e[a]),
                          extend(r[a], e[a]))
                        : ((i[a] = e[a]), (r[a] = e[a]))
                      : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a]
                      ? t
                        ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                        : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (n[a] = e[a]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: r, rest: n, events: s }
              );
            })(c),
            { slides: z, slots: A } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                l.Children.toArray(e).forEach((e) => {
                  if (isChildSwiperSlide(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let s = (function processChildren(e) {
                      let t = [];
                      return (
                        l.Children.toArray(e).forEach((e) => {
                          isChildSwiperSlide(e)
                            ? t.push(e)
                            : e.props &&
                              e.props.children &&
                              processChildren(e.props.children).forEach((e) =>
                                t.push(e)
                              );
                        }),
                        t
                      );
                    })(e.props.children);
                    s.length > 0
                      ? s.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(a),
            onBeforeBreakpoint = () => {
              S(!w);
            };
          Object.assign(k.on, {
            _containerClasses(e, t) {
              m(t);
            },
          });
          let initSwiper = () => {
            Object.assign(k.on, I), (u = !0);
            let e = { ...k };
            if (
              (delete e.wrapperClass,
              (T.current = new Swiper(e)),
              T.current.virtual && T.current.params.virtual.enabled)
            ) {
              T.current.virtual.slides = z;
              let e = {
                cache: !1,
                slides: z,
                renderExternal: g,
                renderExternalUpdate: !1,
              };
              extend(T.current.params.virtual, e),
                extend(T.current.originalParams.virtual, e);
            }
          };
          y.current || initSwiper(),
            T.current && T.current.on("_beforeBreakpoint", onBeforeBreakpoint);
          let attachEvents = () => {
              !u &&
                I &&
                T.current &&
                Object.keys(I).forEach((e) => {
                  T.current.on(e, I[e]);
                });
            },
            detachEvents = () => {
              I &&
                T.current &&
                Object.keys(I).forEach((e) => {
                  T.current.off(e, I[e]);
                });
            };
          return (
            (0, l.useEffect)(() => () => {
              T.current &&
                T.current.off("_beforeBreakpoint", onBeforeBreakpoint);
            }),
            (0, l.useEffect)(() => {
              !b.current &&
                T.current &&
                (T.current.emitSlidesClasses(), (b.current = !0));
            }),
            useIsomorphicLayoutEffect(() => {
              if ((t && (t.current = y.current), y.current))
                return (
                  T.current.destroyed && initSwiper(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: s,
                      prevEl: r,
                      paginationEl: n,
                      scrollbarEl: l,
                      swiper: a,
                    } = e;
                    needsNavigation(t) &&
                      s &&
                      r &&
                      ((a.params.navigation.nextEl = s),
                      (a.originalParams.navigation.nextEl = s),
                      (a.params.navigation.prevEl = r),
                      (a.originalParams.navigation.prevEl = r)),
                      needsPagination(t) &&
                        n &&
                        ((a.params.pagination.el = n),
                        (a.originalParams.pagination.el = n)),
                      needsScrollbar(t) &&
                        l &&
                        ((a.params.scrollbar.el = l),
                        (a.originalParams.scrollbar.el = l)),
                      a.init(i);
                  })(
                    {
                      el: y.current,
                      nextEl: C.current,
                      prevEl: P.current,
                      paginationEl: M.current,
                      scrollbarEl: O.current,
                      swiper: T.current,
                    },
                    k
                  ),
                  o && !T.current.destroyed && o(T.current),
                  () => {
                    T.current &&
                      !T.current.destroyed &&
                      T.current.destroy(!0, !1);
                  }
                );
            }, []),
            useIsomorphicLayoutEffect(() => {
              attachEvents();
              let e = (function (e, t, i, s, r) {
                let n = [];
                if (!t) return n;
                let addKey = (e) => {
                  0 > n.indexOf(e) && n.push(e);
                };
                if (i && s) {
                  let e = s.map(r),
                    t = i.map(r);
                  e.join("") !== t.join("") && addKey("children"),
                    s.length !== i.length && addKey("children");
                }
                let l = p
                  .filter((e) => "_" === e[0])
                  .map((e) => e.replace(/_/, ""));
                return (
                  l.forEach((i) => {
                    if (i in e && i in t) {
                      if (isObject(e[i]) && isObject(t[i])) {
                        let s = Object.keys(e[i]),
                          r = Object.keys(t[i]);
                        s.length !== r.length
                          ? addKey(i)
                          : (s.forEach((s) => {
                              e[i][s] !== t[i][s] && addKey(i);
                            }),
                            r.forEach((s) => {
                              e[i][s] !== t[i][s] && addKey(i);
                            }));
                      } else e[i] !== t[i] && addKey(i);
                    }
                  }),
                  n
                );
              })(L, E.current, z, x.current, (e) => e.key);
              return (
                (E.current = L),
                (x.current = z),
                e.length &&
                  T.current &&
                  !T.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      s,
                      r,
                      n,
                      l,
                      a,
                      o,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: u,
                        changedParams: p,
                        nextEl: h,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: v,
                      } = e,
                      g = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: w,
                        pagination: S,
                        navigation: b,
                        scrollbar: y,
                        virtual: T,
                        thumbs: E,
                      } = d;
                    p.includes("thumbs") &&
                      u.thumbs &&
                      u.thumbs.swiper &&
                      !u.thumbs.swiper.destroyed &&
                      w.thumbs &&
                      (!w.thumbs.swiper || w.thumbs.swiper.destroyed) &&
                      (t = !0),
                      p.includes("controller") &&
                        u.controller &&
                        u.controller.control &&
                        w.controller &&
                        !w.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        u.pagination &&
                        (u.pagination.el || v) &&
                        (w.pagination || !1 === w.pagination) &&
                        S &&
                        !S.el &&
                        (s = !0),
                      p.includes("scrollbar") &&
                        u.scrollbar &&
                        (u.scrollbar.el || m) &&
                        (w.scrollbar || !1 === w.scrollbar) &&
                        y &&
                        !y.el &&
                        (r = !0),
                      p.includes("navigation") &&
                        u.navigation &&
                        (u.navigation.prevEl || f) &&
                        (u.navigation.nextEl || h) &&
                        (w.navigation || !1 === w.navigation) &&
                        b &&
                        !b.prevEl &&
                        !b.nextEl &&
                        (n = !0);
                    let destroyModule = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (w[e].prevEl = void 0),
                            (w[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (w[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    if (
                      (p.includes("loop") &&
                        d.isElement &&
                        (w.loop && !u.loop
                          ? (l = !0)
                          : !w.loop && u.loop
                          ? (a = !0)
                          : (o = !0)),
                      g.forEach((e) => {
                        if (isObject(w[e]) && isObject(u[e]))
                          Object.assign(w[e], u[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in u[e] &&
                              !u[e].enabled &&
                              destroyModule(e);
                        else {
                          let t = u[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && destroyModule(e)
                            : (w[e] = u[e]);
                        }
                      }),
                      g.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        w.controller &&
                        w.controller.control &&
                        (d.controller.control = w.controller.control),
                      p.includes("children") && c && T && w.virtual.enabled
                        ? ((T.slides = c), T.update(!0))
                        : p.includes("virtual") &&
                          T &&
                          w.virtual.enabled &&
                          (c && (T.slides = c), T.update(!0)),
                      p.includes("children") && c && w.loop && (o = !0),
                      t)
                    ) {
                      let e = E.init();
                      e && E.update(!0);
                    }
                    i && (d.controller.control = w.controller.control),
                      s &&
                        (d.isElement &&
                          (!v || "string" == typeof v) &&
                          ((v = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          v.part.add("pagination"),
                          d.el.appendChild(v)),
                        v && (w.pagination.el = v),
                        S.init(),
                        S.render(),
                        S.update()),
                      r &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (w.scrollbar.el = m),
                        y.init(),
                        y.updateSize(),
                        y.setTranslate()),
                      n &&
                        (d.isElement &&
                          ((h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (h.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            h.part.add("button-next"),
                            d.el.appendChild(h)),
                          (f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (f.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            f.part.add("button-prev"),
                            d.el.appendChild(f))),
                        h && (w.navigation.nextEl = h),
                        f && (w.navigation.prevEl = f),
                        b.init(),
                        b.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = u.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = u.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(u.direction, !1),
                      (l || o) && d.loopDestroy(),
                      (a || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: T.current,
                    slides: z,
                    passedParams: L,
                    changedParams: e,
                    nextEl: C.current,
                    prevEl: P.current,
                    scrollbarEl: O.current,
                    paginationEl: M.current,
                  }),
                () => {
                  detachEvents();
                }
              );
            }),
            useIsomorphicLayoutEffect(() => {
              updateOnVirtualData(T.current);
            }, [v]),
            l.createElement(
              r,
              _extends(
                { ref: y, className: uniqueClasses(`${h}${s ? ` ${s}` : ""}`) },
                _
              ),
              l.createElement(
                f.Provider,
                { value: T.current },
                A["container-start"],
                l.createElement(
                  n,
                  {
                    className: (void 0 === (i = k.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  A["wrapper-start"],
                  k.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let getSlideIndex = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          s = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: r, to: n } = i,
                          a = e.params.loop ? -t.length : 0,
                          o = e.params.loop ? 2 * t.length : t.length,
                          d = [];
                        for (let e = a; e < o; e += 1)
                          e >= r && e <= n && d.push(t[getSlideIndex(e)]);
                        return d.map((t, i) =>
                          l.cloneElement(t, {
                            swiper: e,
                            style: s,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(T.current, z, v)
                    : z.map((e, t) =>
                        l.cloneElement(e, {
                          swiper: T.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  A["wrapper-end"]
                ),
                needsNavigation(k) &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("div", {
                      ref: P,
                      className: "swiper-button-prev",
                    }),
                    l.createElement("div", {
                      ref: C,
                      className: "swiper-button-next",
                    })
                  ),
                needsScrollbar(k) &&
                  l.createElement("div", {
                    ref: O,
                    className: "swiper-scrollbar",
                  }),
                needsPagination(k) &&
                  l.createElement("div", {
                    ref: M,
                    className: "swiper-pagination",
                  }),
                A["container-end"]
              )
            )
          );
        });
      m.displayName = "Swiper";
      let v = (0, l.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: s,
            className: r = "",
            swiper: n,
            zoom: a,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...u
          } = void 0 === e ? {} : e,
          p = (0, l.useRef)(null),
          [f, m] = (0, l.useState)("swiper-slide"),
          [v, g] = (0, l.useState)(!1);
        function updateClasses(e, t, i) {
          t === p.current && m(i);
        }
        useIsomorphicLayoutEffect(() => {
          if (
            (void 0 !== c && (p.current.swiperSlideIndex = c),
            t && (t.current = p.current),
            p.current && n)
          ) {
            if (n.destroyed) {
              "swiper-slide" !== f && m("swiper-slide");
              return;
            }
            return (
              n.on("_slideClass", updateClasses),
              () => {
                n && n.off("_slideClass", updateClasses);
              }
            );
          }
        }),
          useIsomorphicLayoutEffect(() => {
            n && p.current && !n.destroyed && m(n.getSlideClasses(p.current));
          }, [n]);
        let w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0,
          },
          renderChildren = () => ("function" == typeof s ? s(w) : s);
        return l.createElement(
          i,
          _extends(
            {
              ref: p,
              className: uniqueClasses(`${f}${r ? ` ${r}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                g(!0);
              },
            },
            u
          ),
          a &&
            l.createElement(
              h.Provider,
              { value: w },
              l.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof a ? a : void 0,
                },
                renderChildren(),
                o &&
                  !v &&
                  l.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !a &&
            l.createElement(
              h.Provider,
              { value: w },
              renderChildren(),
              o &&
                !v &&
                l.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      v.displayName = "SwiperSlide";
    },
  },
]);
