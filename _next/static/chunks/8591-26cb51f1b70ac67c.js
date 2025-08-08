(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8591],
  {
    1342: function (e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var l in t)
            Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
        })(t, {
          noSSR: function () {
            return noSSR;
          },
          default: function () {
            return dynamic;
          },
        });
      let a = l(38754),
        r = (l(67294), a._(l(24304)));
      function convertModule(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function noSSR(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function dynamic(e, t) {
        let l = r.default,
          a = {
            loading: (e) => {
              let { error: t, isLoading: l, pastDelay: a } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (a.loader = () => e)
          : "function" == typeof e
          ? (a.loader = e)
          : "object" == typeof e && (a = { ...a, ...e }),
          (a = { ...a, ...t });
        let s = a.loader;
        return (a.loadableGenerated &&
          ((a = { ...a, ...a.loadableGenerated }), delete a.loadableGenerated),
        "boolean" != typeof a.ssr || a.ssr)
          ? l({
              ...a,
              loader: () =>
                null != s
                  ? s().then(convertModule)
                  : Promise.resolve(convertModule(() => null)),
            })
          : (delete a.webpack, delete a.modules, noSSR(l, a));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    30043: function (e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let a = l(38754),
        r = a._(l(67294)),
        s = r.default.createContext(null);
    },
    24304: function (e, t, l) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let a = l(38754),
        r = a._(l(67294)),
        s = l(30043),
        n = [],
        i = [],
        o = !1;
      function load(e) {
        let t = e(),
          l = { loading: !0, loaded: null, error: null };
        return (
          (l.promise = t
            .then((e) => ((l.loading = !1), (l.loaded = e), e))
            .catch((e) => {
              throw ((l.loading = !1), (l.error = e), e);
            })),
          l
        );
      }
      let LoadableSubscription = class LoadableSubscription {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      };
      function Loadable(e) {
        return (function (e, t) {
          let l = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            a = null;
          function init() {
            if (!a) {
              let t = new LoadableSubscription(e, l);
              a = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return a.promise();
          }
          if (!o) {
            let e = l.webpack ? l.webpack() : l.modules;
            e &&
              i.push((t) => {
                for (let l of e) if (t.includes(l)) return init();
              });
          }
          function LoadableComponent(e, t) {
            !(function () {
              init();
              let e = r.default.useContext(s.LoadableContext);
              e &&
                Array.isArray(l.modules) &&
                l.modules.forEach((t) => {
                  e(t);
                });
            })();
            let n = r.default.useSyncExternalStore(
              a.subscribe,
              a.getCurrentValue,
              a.getCurrentValue
            );
            return (
              r.default.useImperativeHandle(t, () => ({ retry: a.retry }), []),
              r.default.useMemo(() => {
                var t;
                return n.loading || n.error
                  ? r.default.createElement(l.loading, {
                      isLoading: n.loading,
                      pastDelay: n.pastDelay,
                      timedOut: n.timedOut,
                      error: n.error,
                      retry: a.retry,
                    })
                  : n.loaded
                  ? r.default.createElement(
                      (t = n.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, n])
            );
          }
          return (
            (LoadableComponent.preload = () => init()),
            (LoadableComponent.displayName = "LoadableComponent"),
            r.default.forwardRef(LoadableComponent)
          );
        })(load, e);
      }
      function flushInitializers(e, t) {
        let l = [];
        for (; e.length; ) {
          let a = e.pop();
          l.push(a(t));
        }
        return Promise.all(l).then(() => {
          if (e.length) return flushInitializers(e, t);
        });
      }
      (Loadable.preloadAll = () =>
        new Promise((e, t) => {
          flushInitializers(n).then(e, t);
        })),
        (Loadable.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let res = () => ((o = !0), t());
            flushInitializers(i, e).then(res, res);
          })
        )),
        (window.__NEXT_PRELOADREADY = Loadable.preloadReady);
      let d = Loadable;
    },
    68591: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return Overview;
          },
        });
      var a = l(85893),
        r = l(5152),
        s = l.n(r);
      l(67294);
      var n = l(66261),
        i = l(67421);
      let o = s()(
        () =>
          Promise.all([l.e(7066), l.e(9970), l.e(7432), l.e(7546)]).then(
            l.bind(l, 87546)
          ),
        { loadableGenerated: { webpack: () => [87546] }, ssr: !1 }
      );
      function Overview() {
        let { t: e } = (0, i.$G)();
        return (0, a.jsxs)("main", {
          className:
            "flex flex-col items-center justify-center z-10 relative bg-no-repeat bg-gray min-h-full bg-[url(/images/background/overview_small.png)] md:bg-[url(/images/background/overview.png)] mt-[240px] md:mt-[344px]",
          style: {
            backgroundSize: "contain",       // ✅ scale image to fit container
            backgroundRepeat: "no-repeat",   // ✅ already in class, but safe here
            backgroundPosition: "center",    // ✅ center the image
            height: "100vh",                 // ✅ full screen height
            width: "100vw",                  // ✅ full screen width
          },
          children: [
            (0, a.jsx)("div", {
              className:
                "w-full flex flex-col items-center px-4 md:px-8 relative z-10",
              children: (0, a.jsxs)("div", {
                className:
                  "-mt-[100px] md:-mt-[200px] w-full",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col relative z-10 font-semibold w-full items-center md:items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col w-fit relative z-10 md:px-20",
                        style: {marginTop: "120px"},
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex gap-1 items-center",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "label-earth-stroke text-[38px] md:text-[72px] 2xl:text-[100px]",
                                children: "PANSHIBI",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "label-nanum text-[19px] md:text-[32px] 2xl:text-[42px] leading-3",
                                    children: "The",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "label-nanum text-[19px] md:text-[32px] 2xl:text-[42px]",
                                    children: "new",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "label-earth text-[32px] md:text-[48px] 2xl:text-[64px]",
                                children: "viral",
                              }),
                            ],
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "label-earth text-[42px] md:text-[72px] 2xl:text-[100px]",
                            children: "MEMECOIN",
                          }),
                        ],
                      }),
                      (0, a.jsx)("img", {
                        className: "max-w-full top-10 z-20 md:p-20",
                        src: "/images/characters/overview.png",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "px-4 lg:mt-20 mt-0 w-full max-w-[1330px]",
              children: (0, a.jsxs)("div", {
                className:
                  "gray-panel flex flex-col lg:flex-row gap-6 p-4 items-center lg:rounded-full w-full justify-between",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "gray-panel bg-white text-black w-[260px] h-[50px] md:h-[72px] flex justify-center items-center lg:rounded-full",
                    children: (0, a.jsx)("span", {
                      className: "font-bold text-[24px] uppercase",
                      children: e("featured_in"),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row gap-3 xl:gap-12 items-center pl-0 lg:pl-10",
                    children: [
                      (0, a.jsx)("img", {
                        className: "md:h-[42px] h-[26px]",
                        src: "./images/overview/logo1.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                      (0, a.jsx)("img", {
                        className: "md:h-[38px] h-[19px]",
                        src: "./images/overview/logo2.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                      (0, a.jsx)("img", {
                        className: "md:h-[26px] h-[18px]",
                        src: "./images/overview/logo3.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                      (0, a.jsx)("img", {
                        className: "md:h-[30px] h-[20px]",
                        src: "./images/overview/logo5.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    5152: function (e, t, l) {
      e.exports = l(1342);
    },
  },
]);
