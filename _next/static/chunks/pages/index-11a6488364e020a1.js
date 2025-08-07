(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(32627);
        },
      ]);
    },
    68689: function (e, t, s) {
      "use strict";
      s.d(t, {
        FL: function () {
          return r;
        },
        f2: function () {
          return x;
        },
        nI: function () {
          return a;
        },
        nf: function () {
          return n;
        },
      });
      let l = "https://api.panshibi.com",
        a = "".concat(l, "/subscribe"),
        x = "".concat(l, "/buy/getOutAmount"),
        n = "".concat(l, "/buy/getUserData"),
        r = "".concat(l, "/stage/getStages");
    },
    2482: function (e, t, s) {
      "use strict";
      s.r(t);
      var l = s(85893),
        a = s(67294),
        x = s(36152);
      t.default = (e) => {
        let { title: t, content: s, initialCollapse: n = !1 } = e,
          [r, c] = (0, a.useState)(n);
        return (0, l.jsxs)(x.default, {
          className:
            "bg-[#B9C4CE] flex flex-col relative p-4 gap-4 cursor-pointer",
          onClick: () => c(!r),
          children: [
            (0, l.jsx)("span", {
              className: "text-[20px] md:text-[24px] font-bold  pr-8",
              children: t,
            }),
            r &&
              (0, l.jsx)("span", {
                className: "text-[16px] md:text-[20px] break-words",
                children: s,
              }),
            (0, l.jsx)("span", {
              className: "absolute top-0 right-4 label-nunum text-[45px]",
              children: r ? "-" : "+",
            }),
          ],
        });
      };
    },
    86248: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return Faq;
          },
        });
      var l = s(85893),
        a = s(67294),
        x = s(67421),
        n = s(36152),
        r = s(2482);
      function Faq() {
        let { t: e } = (0, x.$G)(),
          [t, s] = (0, a.useState)(0);
        return (0, l.jsxs)("main", {
          className:
            "flex flex-col items-center justify-center z-10 relative bg-[#A7B3BF] p-2",
          children: [
            (0, l.jsx)("span", {
              className:
                "label-earth-stroke-shadow font-bold text-[60px] md:text-[90px] max-w-[1460px] px-4 md:mt-12",
              children: "FAQ",
            }),
            (0, l.jsxs)(n.default, {
              className:
                "bg-white text-black lg:max-w-[1151px] flex flex-col p-4 gap-4 w-full",
              children: [
                (0, l.jsx)(r.default, {
                  title: e("faq3_question"),
                  content: (0, l.jsxs)(l.Fragment, {
                    children: [
                      e("faq3_answer_1"),
                      (0, l.jsx)("br", {}),
                      e("token_name"),
                      ": Panshibi",
                      (0, l.jsx)("br", {}),
                      e("symbol"),
                      ": SHIBI",
                      (0, l.jsx)("br", {}),
                      e("network_chain"),
                      ": Ethereum",
                      (0, l.jsx)("br", {}),
                      e("decimals"),
                      ": 18",
                      (0, l.jsx)("br", {}),
                      e("contract_address"),
                      ": 0xEBc2c701BcA0C26767E9dcAdEB0BFDD993269218",
                      (0, l.jsx)("br", {}),
                      e("faq3_answer_2"),
                    ],
                  }),
                  initialCollapse: !0,
                }),
                (0, l.jsx)(r.default, {
                  title: e("faq1_question"),
                  content: e("faq1_answer"),
                }),
                (0, l.jsx)(r.default, {
                  title: e("faq4_question"),
                  content: e("faq4_answer"),
                }),
                (0, l.jsx)(r.default, {
                  title: e("faq5_question"),
                  content: e("faq5_answer"),
                }),
                (0, l.jsx)(r.default, {
                  title: e("faq6_question"),
                  content: e("faq6_answer"),
                }),
                (0, l.jsx)(r.default, {
                  title: e("faq7_question"),
                  content: e("faq7_answer"),
                }),
              ],
            }),
          ],
        });
      }
    },
    18674: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return HowToBuy;
          },
        });
      var l = s(85893);
      s(67294);
      var a = s(67421),
        x = s(86472),
        n = s(64277),
        r = s(36152),
        c = s(57014),
        i = s(92321);
      s(26623), s(6590);
      var o = s(66261),
        p = s(41664),
        m = s.n(p);
      function HowToBuy() {
        let { t: e } = (0, a.$G)(),
          { address: t, isConnected: s } = (0, i.m)();
        return (0, l.jsxs)("main", {
          className:
            "flex flex-col items-center justify-center z-10 relative bg-[#2E2C42]",
          children: [
            (0, l.jsxs)("div", {
              className: "flex flex-col items-center lg:items-start gap-4 z-10",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col w-auto items-center lg:w-full pt-48 md:pt-[560px] lg:pt-24 lg:pr-32",
                  children: [
                    (0, l.jsx)("span", {
                      className:
                        "label-brother-stroke text-[120px] md:text-[180px]",
                      children: "CA:",
                    }),
                    (0, l.jsx)("span", {
                      className:
                        "label-brother-stroke text-[50px] md:text-[80px] text-white ",
                      children: "0x0000000000",
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex items-center justify-center -rotate-1 mt-4",
                      target: "_blank",
                      children: [
                        (0, l.jsx)("span", {
                          className:
                            "absolute text-[22px] lg:text-[38px] label-button z-10",
                          children: "BUY $SHIBI",
                        }),
                        (0, l.jsx)(n.default, {
                          className: "h-[42px] md:h-[64px]",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col px-2 w-full items-center lg:items-start lg:mt-48",
                  children: [
                    (0, l.jsx)(o.W_, {
                      name: "howtobuy",
                      children: (0, l.jsx)("span", {
                        className:
                          "label-nanum text-[50px] lg:text-[120px] text-white",
                        children: e("how_to_buy"),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-col lg:flex-row gap-4",
                      children: [
                        (0, l.jsx)(r.default, {
                          className:
                            "bg-[#5C5A7A] max-w-[350px] lg:max-w-[423px]",
                          children: (0, l.jsxs)("div", {
                            className: "flex flex-col p-[20px]",
                            children: [
                              (0, l.jsxs)("span", {
                                className:
                                  "label-earth-stroke text-white text-[24px] lg:text-[30px] uppercase",
                                children: [e("step"), " 1"],
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "label-earth-stroke pt-6 pb-4 text-[42px] lg:text-[48px] normal-case",
                                children: e("create_wallet"),
                              }),
                              (0, l.jsx)("span", {
                                children: e("create_wallet_content"),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.default, {
                          className:
                            "bg-[#5C5A7A] max-w-[350px] lg:max-w-[423px]",
                          children: (0, l.jsxs)("div", {
                            className: "flex flex-col p-[20px]",
                            children: [
                              (0, l.jsxs)("span", {
                                className:
                                  "label-earth-stroke text-white text-[30px] uppercase",
                                children: [e("step"), " 2"],
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "label-earth-stroke pt-6 pb-4 text-[42px] lg:text-[48px] normal-case",
                                children: e("top_up_wallet"),
                              }),
                              (0, l.jsx)("span", {
                                children: e("top_up_wallet_content"),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.default, {
                          className:
                            "bg-[#5C5A7A] max-w-[350px] lg:max-w-[423px]",
                          children: (0, l.jsxs)("div", {
                            className: "flex flex-col p-[20px]",
                            children: [
                              (0, l.jsxs)("span", {
                                className:
                                  "label-earth-stroke text-white text-[30px] uppercase",
                                children: [e("step"), " 3"],
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "label-earth-stroke pt-6 pb-4 text-[42px] lg:text-[48px] normal-case",
                                children: e("buy_tokens"),
                              }),
                              (0, l.jsx)("span", {
                                children: e("buy_tokens_content"),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-row items-center justify-center mt-10",
                  children: [
                    (0, l.jsxs)(o.rU, {
                      to: "presale",
                      className:
                        "flex items-center justify-center cursor-pointer w-[170px] md:w-auto relative",
                      children: [
                        (0, l.jsxs)("span", {
                          className:
                            "absolute text-[22px] md:text-[28px] label-button overflow-hidden whitespace-nowrap text-ellipsis w-full px-4 text-center",
                          children: [e("buy"), " $SHIBI"],
                        }),
                        (0, l.jsx)(x.default, {
                          className: "h-[42px] md:h-[63px]",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: "w-full h-[100px]" }),
              ],
            }),
            (0, l.jsx)("img", {
              className:
                "absolute w-fit xl:w-full h-[443px] md:h-[912px] -top-24 lg:-top-48 z-0 max-w-none -right-[200px] lg:right-auto",
              src: "/images/background/howtobuy-1.png",
            }),
            (0, l.jsx)("img", {
              className:
                "absolute w-fit xl:w-full h-[266px] bottom-0 z-0 max-w-none",
              src: "/images/background/howtobuy-2.png",
            }),
          ],
        });
      }
    },
    41410: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return Meet;
          },
        });
      var l = s(85893),
        a = s(67294),
        x = s(67421);
      function Meet() {
        let { t: e } = (0, x.$G)();
        (0, a.useRef)(null);
        let [t, s] = (0, a.useState)(0.005),
          [n, r] = (0, a.useState)(0),
          [c, i] = (0, a.useState)("");
        return (
          (0, a.useEffect)(() => {
            r(Number(c) * t);
          }, [c, t]),
          (0, l.jsxs)("main", {
            className:
              "flex flex-col items-center justify-center pt-10 mt-2 z-10 relative bg-[#B9C4CE]",
            children: [
              (0, l.jsx)("span", {
                className:
                  "label-nanum font-semibold text-[60px] md:text-[90px] w-auto lg:w-full max-w-[1460px] px-2",
                children: e("meet_the_team"),
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col lg:flex-row gap-10 lg:gap-1 px-4",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-2 items-center",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "relative my-btn rounded-3xl bg-[#FEA1DB] w-[340px] h-[348px]",
                        children: (0, l.jsx)("img", {
                          className: "absolute bottom-0 left-[80px] h-fit",
                          src: "./images/characters/panda.png",
                          draggable: !1,
                          alt: "logo",
                        }),
                      }),
                      (0, l.jsx)("span", {
                        className:
                          "label-earth-stroke font-bold text-[30px] text-white normal-case pt-2 text-center",
                        children: "POKO PANDA",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "relative my-btn rounded-3xl bg-[#5F7183] w-[340px] h-[348px]",
                        children: (0, l.jsx)("img", {
                          className: "absolute bottom-0 left-0 h-fit",
                          src: "./images/characters/panda_venom.png",
                          draggable: !1,
                          alt: "logo",
                        }),
                      }),
                      (0, l.jsx)("span", {
                        className:
                          "label-earth-stroke font-bold text-[30px] text-white normal-case pt-2 text-center",
                        children: "BAMBOO BLITZ",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "relative my-btn rounded-3xl bg-white w-[340px] h-[348px]",
                        children: (0, l.jsx)("img", {
                          className: "absolute bottom-0 left-[40px] h-fit",
                          src: "./images/characters/panda_blade1.png",
                          draggable: !1,
                          alt: "logo",
                        }),
                      }),
                      (0, l.jsx)("span", {
                        className:
                          "label-earth-stroke font-bold text-[30px] text-white normal-case pt-2 text-center",
                        children: "ROKU THE ROGUE",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "relative my-btn rounded-3xl bg-[#07CCFF] w-[340px] h-[348px]",
                        children: (0, l.jsx)("img", {
                          className: "absolute bottom-0 left-10 h-fit",
                          src: "./images/characters/panda_wulverine.png",
                          draggable: !1,
                          alt: "logo",
                        }),
                      }),
                      (0, l.jsx)("span", {
                        className:
                          "label-earth-stroke font-bold text-[30px] text-white normal-case pt-2 text-center",
                        children: "PING PING",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    7237: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return Tokenomics;
          },
        });
      var l = s(85893),
        a = s(67294),
        x = s(67421),
        n = s(57014),
        r = s(86472),
        c = s(36152),
        i = s(64277),
        o = s(66261),
        p = s(41664),
        m = s.n(p),
        d = s(55678),
        u = s(87066),
        h = s(68689);
      function Tokenomics() {
        let { t: e } = (0, x.$G)(),
          [t, s] = (0, a.useState)(""),
          handleSubscribe = async () => {
            if (!t) {
              d.Am.error("Input valid email");
              return;
            }
            try {
              let { data: e } = await (0, u.Z)({
                method: "post",
                url: h.nI,
                data: { email: t },
              });
              "ok" === e.status
                ? (d.Am.success("Successfully subscribed."), s(""))
                : d.Am.error("Failed to subscribe.");
            } catch (e) {
              d.Am.error("Failed to subscribe.");
            }
          };
        return (0, l.jsxs)("main", {
          className:
            "flex flex-col bg-[#B9C4CE] mt-[40px] gap-4 px-4 my-auto justify-center items-center",
          children: [
            (0, l.jsxs)("div", {
              className: "flex flex-col items-center mb-12",
              children: [
                (0, l.jsx)("span", {
                  className:
                    "label-earth-stroke-shadow text-[54px] md:text-[84px] z-10 text-left md:text-center",
                  children: e("tokenomics"),
                }),
                (0, l.jsx)("span", {
                  className: "text-[20px] text-black max-w-max text-center",
                  children: e("tokenomics_content"),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "flex flex-col xl:flex-row bg-[#B9C4CE] gap-4 px-4 justify-center",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex flex-col gap-8",
                  children: [
                    (0, l.jsx)("span", {
                      className:
                        "text-[20px] text-black max-w-max xl:max-w-[466px]",
                      children: e("tokenomics_content_1"),
                    }),
                    (0, l.jsx)("span", {
                      className:
                        "text-[20px] text-black max-w-max xl:max-w-[466px]",
                      children: e("tokenomics_content_2"),
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-row items-center justify-center",
                      children: [
                        (0, l.jsxs)(o.rU, {
                          to: "presale",
                          className:
                            "flex items-center justify-center cursor-pointer w-[170px] md:w-auto",
                          children: [
                            (0, l.jsxs)("span", {
                              className:
                                "absolute text-[22px] md:text-[28px] label-button",
                              children: [e("buy"), " $SHIBI"],
                            }),
                            (0, l.jsx)(r.default, {
                              className: "h-[42px] md:h-[63px]",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row gap-10 ml-0 lg:-ml-[80px] xl:-ml-[90px] mt-0 xl:-mt-[150px] items-center justify-center",
                  children: [
                    (0, l.jsx)("img", {
                      className: "w-[488px] lg:h-[756px] lg:w-[756px]",
                      src: "/images/tokenomic.png",
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col mt-0 lg:mt-[10px] ml-0 lg:-ml-[150px] gap-2 lg:gap-[85px] items-start pr-4",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "label-earth-stroke text-[24px] lg:text-[30px] text-white ml-0 lg:-ml-[50px]",
                              children: "60%",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "text-[18px] lg:text-[20px] text-black text-nowrap",
                              children: "Presale",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "label-earth-stroke text-[24px] lg:text-[30px] text-white ml-0 lg:ml-[30px]",
                              children: "15%",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "text-[18px] lg:text-[20px] text-black text-nowrap",
                              children: "Community Rewards & Staking",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "label-earth-stroke text-[24px] lg:text-[30px] text-white ml-0 lg:ml-[45px]",
                              children: "10%",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "text-[18px] lg:text-[20px] text-black text-nowrap",
                              children: "Exchange Listings",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "label-earth-stroke text-[24px] lg:text-[30px] text-white ml-0 lg:ml-[30px]",
                              children: "10%",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "text-[18px] lg:text-[20px] text-black text-nowrap",
                              children: "Marketing & Partnerships",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "label-earth-stroke text-[24px] lg:text-[30px] text-white ml-0 lg:-ml-[35px]",
                              children: "5%",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "text-[18px] lg:text-[20px] text-black text-nowrap",
                              children: "Team Allocations",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(c.default, {
              className:
                "relative flex justify-center bg-[#5F7183] h-[905px] lg:h-[348px] max-w-[1460px] w-full mt-[100px]",
              children: [
                (0, l.jsx)("span", {
                  className:
                    "absolute label-earth-stroke text-[50px] md:text-[54px] z-10 text-white max-w-[520px] text-wrap normal-case ml-0 md:ml-[100px] top-[320px] lg:top-10 text-center md:text-left",
                  children: e("drop_your_email"),
                }),
                (0, l.jsxs)("div", {
                  className:
                    "absolute flex flex-col lg:flex-row bottom-[200px] lg:bottom-[60px] ml-0 lg:ml-[200px] z-10 gap-2 lg:gap-0",
                  children: [
                    (0, l.jsx)("input", {
                      type: "text",
                      value: t,
                      onChange: (e) => s(e.target.value),
                      placeholder: e("enter_your_email"),
                      className:
                        "text-center lg:text-center pr-0 lg:pr-14 my-btn bg-white text-black h-[42px] md:h-[63px] w-full",
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex items-center justify-center cursor-pointer w-auto ml-0 lg:-ml-[70px]",
                      onClick: handleSubscribe,
                      children: [
                        (0, l.jsx)("span", {
                          className:
                            "absolute text-[22px] md:text-[28px] label-button",
                          children: e("subscribe"),
                        }),
                        (0, l.jsx)(i.default, {
                          className:
                            "block lg:hidden w-[318px] md:w-auto h-[63px]",
                        }),
                        (0, l.jsx)(n.default, {
                          className: "hidden lg:block h-[63px]",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "absolute left-0 bottom-0 w-full h-full overflow-hidden rounded-[32px]",
                  children: [
                    (0, l.jsx)("img", {
                      className: "absolute -left-20 bottom-0",
                      src: "./images/characters/take.png",
                      draggable: !1,
                      alt: "take",
                    }),
                    (0, l.jsx)("img", {
                      className:
                        "absolute xl:hidden right-0 bottom-0 w-[111px]",
                      src: "./images/characters/whiteman.png",
                      draggable: !1,
                      alt: "take",
                    }),
                  ],
                }),
                (0, l.jsx)("img", {
                  className: "hidden xl:block absolute right-0 bottom-0",
                  src: "./images/howtobuy/building.png",
                  draggable: !1,
                  alt: "panda_v2",
                }),
                (0, l.jsx)("img", {
                  className:
                    "absolute -left-1 lg:left-auto right-auto lg:right-10 -top-10 lg:top-auto bottom-auto lg:bottom-0",
                  src: "./images/characters/panda_v2.png",
                  draggable: !1,
                  alt: "panda_v2",
                }),
              ],
            }),
          ],
        });
      }
    },
    64277: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ButtonLargeBlue;
          },
        });
      var l = s(85893);
      function ButtonLargeBlue(e) {
        return (0, l.jsxs)("svg", {
          viewBox: "0 0 458 63",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, l.jsx)("rect", {
              x: "2.27891",
              y: "1.41026",
              width: "453.912",
              height: "59.559",
              rx: "29.7795",
              fill: "#07CCFF",
              stroke: "black",
              "stroke-width": "2.70723",
            }),
            (0, l.jsx)("mask", {
              id: "mask0_2008_140",
              maskUnits: "userSpaceOnUse",
              x: "3",
              y: "2",
              width: "452",
              height: "58",
              children: (0, l.jsx)("rect", {
                x: "3.69287",
                y: "2.76392",
                width: "451.085",
                height: "56.8518",
                rx: "28.4259",
                fill: "#EE89C8",
              }),
            }),
            (0, l.jsxs)("g", {
              mask: "url(#mask0_2008_140)",
              children: [
                (0, l.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M8.30518 44.2747C8.30518 49.2379 18.0678 60.518 28.957 60.518L336.702 60.5181H432.451C443.34 60.5181 453.103 49.238 453.103 44.2747C451.601 50.0501 438.709 51.7948 432.451 51.9452L351.461 51.9451H28.957C22.6989 51.7947 9.80712 50.0501 8.30518 44.2747Z",
                  fill: "#0060B9",
                }),
                (0, l.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M454.614 19.0072C454.614 14.0439 444.725 2.76383 433.694 2.76383L115.282 2.7638H29.2252C18.1946 2.7638 8.30518 14.0439 8.30518 19.0072C9.82663 13.2318 22.8858 11.4871 29.2252 11.3367L89.0203 11.3367H433.694C440.034 11.4871 453.093 13.2318 454.614 19.0072Z",
                  fill: "#67E0FF",
                }),
              ],
            }),
            (0, l.jsx)("path", {
              d: "M446.475 46.0795C448.013 44.1243 451.087 38.6797 451.087 32.5433",
              stroke: "black",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, l.jsx)("path", {
              d: "M21.2714 11.0539C19.0147 12.1545 13.8155 15.7354 11.0723 21.2538",
              stroke: "white",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, l.jsx)("path", {
              d: "M47.9707 51.9452H103.318M109.776 51.9452H118.539",
              stroke: "black",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, l.jsx)("path", {
              d: "M345.926 11.788H401.274M407.731 11.788H416.495",
              stroke: "white",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
          ],
        });
      }
      s(67294);
    },
    32627: function (e, t, s) {
      "use strict";
      s.r(t);
      var l = s(85893),
        a = s(31097),
        x = s.n(a),
        n = s(66261),
        r = s(68591),
        c = s(49945),
        i = s(18674),
        o = s(41410),
        p = s(7237),
        m = s(40396),
        d = s(86248);
      t.default = () =>
        (0, l.jsxs)("div", {
          className: x().className,
          children: [
            (0, l.jsx)(n.W_, {
              name: "overview",
              children: (0, l.jsx)(r.default, {}),
            }),
            (0, l.jsx)(c.default, {}),
            (0, l.jsx)(i.default, {}),
            (0, l.jsx)(p.default, {}),
            (0, l.jsx)(o.default, {}),
            (0, l.jsx)(n.W_, {
              name: "roadmap",
              children: (0, l.jsx)(m.default, {}),
            }),
            (0, l.jsx)(n.W_, {
              name: "faqs",
              children: (0, l.jsx)(d.default, {}),
            }),
          ],
        });
    },
    31097: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Poppins_0c346d', '__Poppins_Fallback_0c346d'",
          fontStyle: "normal",
        },
        className: "__className_0c346d",
      };
    },
  },
  function (e) {
    e.O(0, [7066, 8400, 9945, 396, 8591, 9774, 2888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
