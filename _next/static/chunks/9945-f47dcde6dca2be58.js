"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9945],
  {
    36152: function (e, l, s) {
      s.r(l);
      var t = s(85893);
      s(67294),
        (l.default = (e) => {
          let { children: l, className: s, ...a } = e;
          return (0, t.jsx)("div", {
            className: "my-panel ".concat(s),
            ...a,
            children: l,
          });
        });
    },
    3654: function (e, l, s) {
      s.r(l);
      var t = s(85893);
      s(67294);
      var a = s(63114),
        x = s(55678);
      l.default = (e) => {
        let { title: l } = e;
        return (0, t.jsxs)("div", {
          className: "wish flex items-center justify-end w-full",
          children: [
            (0, t.jsx)("span", {
              className:
                "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-bold w-full text-left ",
              children: l,
            }),
            (0, t.jsx)("div", {
              className: "cursor-pointer",
              onClick: () =>
                (0, a.copyToClipboard)(l || "", () => {
                  x.Am.success("Copied successfully");
                }),
              children: (0, t.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, t.jsx)("path", {
                  d: "M19 2C19.5304 2 20.0391 2.21071 20.4142 2.58579C20.7893 2.96086 21 3.46957 21 4V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H17V20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H7V4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H19ZM10 15H8C7.74512 15.0003 7.49997 15.0979 7.31463 15.2728C7.1293 15.4478 7.01777 15.687 7.00283 15.9414C6.98789 16.1958 7.07067 16.4464 7.23426 16.6418C7.39786 16.8373 7.6299 16.9629 7.883 16.993L8 17H10C10.2549 16.9997 10.5 16.9021 10.6854 16.7272C10.8707 16.5522 10.9822 16.313 10.9972 16.0586C11.0121 15.8042 10.9293 15.5536 10.7657 15.3582C10.6021 15.1627 10.3701 15.0371 10.117 15.007L10 15ZM19 4H9V6H15C15.5304 6 16.0391 6.21071 16.4142 6.58579C16.7893 6.96086 17 7.46957 17 8V16H19V4ZM12 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H12C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11Z",
                  fill: "black",
                }),
              }),
            }),
          ],
        });
      };
    },
    49945: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return About;
          },
        });
      var t = s(85893);
      s(67294);
      var a = s(67421),
        x = s(86472),
        i = s(36152),
        r = s(90569),
        c = s(76041),
        p = s(3654),
        n = s(57014),
        o = s(25775),
        d = s(66261),
        h = s(41664),
        m = s.n(h);
      function About() {
        let { t: e } = (0, a.$G)();
        return (0, t.jsxs)("main", {
          className:
            "flex flex-col items-center justify-center z-10 bg-gray p-4 lg:p-0 lg:pt-20",
          children: [
            (0, t.jsxs)("div", {
              className: "relative",
              children: [
                (0, t.jsxs)(i.default, {
                  className:
                    "bg-white max-w-[710px] min-h-[726px] flex flex-col item-center pt-0 lg:pt-10 px-0 lg:px-12 gap-4",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex flex-col items-center px-2 xl:px-0",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "label-earth-stroke text-[42px] md:text-[65px] text-center pl-[90px] lg:pl-0 py-4 lg:py-0 normal-case",
                          children: e("panshibi_unleashed"),
                        }),
                        (0, t.jsx)("span", {
                          className: "text-black py-4 font-bold",
                          children: e("Panshibi is the new viral everyone’s talking about! Fueled by the power of community and the spirit of innovation."),
                        }),
                        (0, t.jsxs)(i.default, {
                          className:
                            "relative bg-[#07CCFF] px-2 xl:px-8 py-6 mt-[490px] xl:mt-0",
                          children: [
                            (0, t.jsx)("span", {
                              className:
                                "text-black md:text-[32px] text-left font-bold",
                              children: e("Panshibi… Don’t miss out on this token that’s changing the game!"),
                            }),
                            (0, t.jsx)("svg", {
                              className: "absolute top-1 right-1",
                              width: "29",
                              height: "30",
                              viewBox: "0 0 29 30",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, t.jsx)("path", {
                                d: "M27.0086 28.3787C27.0086 17.3787 16.0086 2.37865 2.00827 2.37865",
                                stroke: "white",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                              }),
                            }),
                            (0, t.jsx)("svg", {
                              className: "absolute bottom-2 left-6",
                              width: "274",
                              height: "4",
                              viewBox: "0 0 274 4",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, t.jsx)("path", {
                                d: "M2 2H213.765M238.471 2H272",
                                stroke: "black",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "flex justify-center xl:justify-end w-full pt-8 mb-[180px] xl:mb-0",
                          children: (0, t.jsxs)("div", {
                            to: "presale",
                            className:
                              "flex items-center justify-center cursor-pointer",
                            children: [
                              (0, t.jsxs)("a", {
                                href: "https://app.uniswap.org",
                                className:
                                  "absolute text-[22px] md:text-[28px] label-button",
                                children: [e("buy"), " $SHIBI"],
                              }),
                              (0, t.jsx)(x.default, {
                                className: "h-[42px] md:h-[63px]",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)("img", {
                      className:
                        "absolute top-4 left-2 xl:-top-12 xl:-left-20 -mt-4 w-[90px] h-[100px] xl:w-[156px] xl:h-[173px]",
                      src: "./images/large-logo.png",
                      draggable: !1,
                      alt: "logo",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 h-[170px] xl:h-[250px]",
                      children: (0, t.jsx)("img", {
                        className: "h-[170px] xl:h-[250px]",
                        src: "./images/characters/about-1.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: "w-auto xl:w-[1312px]" }),
                (0, t.jsx)("div", {
                  className:
                    "absolute left-0 bottom-[420px] xl:left-[700px] xl:top-0 h-[440px] xl:h-[768px]",
                  children: (0, t.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, t.jsx)("img", {
                        className: "h-[440px] xl:h-[768px]",
                        src: "./images/characters/about-2.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                      (0, t.jsx)("img", {
                        className:
                          "absolute h-[128px] hidden xl:block xl:h-[212px] -left-[50px] -top-[500px] xl:-left-[100px]  xl:-top-[70px] ",
                        src: "./images/characters/ursa-1.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                      (0, t.jsx)("img", {
                        className:
                          "absolute h-[112px] left-[200px] top-[50px] xl:left-[420px] xl:top-[170px]",
                        src: "./images/characters/ursa-2.png",
                        draggable: !1,
                        alt: "logo",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "relative lg:pt-28 pt-0",
              children: (0, t.jsxs)("div", {
                className: "flex lg:flex-row-reverse flex-col gap-2",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col text-black gap-4 pt-6 justify-center z-10 items-center",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "label-earth-stroke text-[72px] md:text-[80px] lg:text-[120px] text-center",
                            children: "PANSHIBI",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "label-nanum font-bold text-[28px] md:text-[36px] text-center",
                            children: e("ultimate_memecoin"),
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "label-earth-stroke ml-[2px] lg:ml-[150px] text-[40px] md:text-[54px] text-white normal-case text-center",
                            children: e("global_domination"),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "lg:flex lg:flex-row-reverse gap-2 pt-6",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex-1 my-btn bg-[#07CCFF]",
                            children: (0, t.jsx)("span", {
                              className: "text-[24px]",
                              children: "EXCLUSIVE",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "flex-1 my-btn bg-white hidden lg:flex",
                            children: (0, t.jsx)("span", {
                              className: "text-[24px]",
                              children: "HIGHEST APY",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "my-btn bg-white flex lg:hidden",
                        children: (0, t.jsx)("span", {
                          className: "text-[24px]",
                          children: "HIGHEST APY",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "my-btn bg-[#EE89C8] mb-10",
                        children: (0, t.jsx)("span", {
                          className: "text-[24px]",
                          children: "GOVERNANCE",
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "-mt-[30px]",
                    children: (0, t.jsx)("img", {
                      className: "h-[400px] lg:h-[600px]",
                      src: "./images/characters/about-3.png",
                      draggable: !1,
                      alt: "logo",
                    }),
                  }),
                ],
              }),
            }),
            (0, t.jsxs)(i.default, {
              className:
                "bg-gradient-to-b from-[#96A6B6] to-[#B9C4CE] relative lg:min-w-[1312px] min-w-[360px] z-10 rounded-none sm:rounded-[32px]",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex flex-col z-10",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex flex-row text-black items-center px-4 z-20",
                      children: [
                        (0, t.jsx)("img", {
                          className:
                            "hidden lg:block w-[156px] h-[173px] -mt-10",
                          src: "./images/large-logo.png",
                          draggable: !1,
                          alt: "logo",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "label-vogue text-[82px] lg:text-[200px] text-center w-full pr-0 lg:pr-[160px]",
                          children: "PANSHIBI",
                        }),
                      ],
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "label-vogue text-white text-[90px] md:text-[100px] ml-0 lg:ml-[160px] -mt-[60px] lg:-mt-[100px] lg:text-left text-center",
                      children: "PRESS",
                    }),
                    (0, t.jsx)("div", {
                      className: "h-[1650px] lg:h-[1400px]",
                      children: " ",
                    }),
                  ],
                }),
                (0, t.jsx)("img", {
                  className: "absolute w-full top-[170px]",
                  src: "./images/characters/about-4.png",
                  draggable: !1,
                  alt: "logo",
                }),
                (0, t.jsx)("img", {
                  className:
                    "hidden lg:block absolute -left-[154px] top-[200px]",
                  src: "./images/characters/hand-1.png",
                  draggable: !1,
                  alt: "logo",
                }),
                (0, t.jsx)("img", {
                  className:
                    "hidden lg:block absolute -right-[154px] top-[200px]",
                  src: "./images/characters/hand-2.png",
                  draggable: !1,
                  alt: "logo",
                }),
                (0, t.jsx)("img", {
                  className:
                    "hidden lg:block absolute -right-[170px] top-[900px]",
                  src: "./images/characters/buyer.png",
                  draggable: !1,
                  alt: "logo",
                }),
                (0, t.jsx)("img", {
                  className: "absolute left-1 bottom-0",
                  src: "./images/characters/take.png",
                  draggable: !1,
                  alt: "logo",
                }),
                (0, t.jsx)("div", {
                  className: "absolute top-[300px] w-full",
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row text-black pt-[300px] lg:pt-[120px] pl-0 lg:pl-[80px] lg:gap-[440px] gap-[48px]",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "lg:flex-1 flex flex-col items-center lg:items-end gap-10",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "relative w-[340px] lg:w-[227px] lg:h-[360px] rotate-0 lg:rotate-12 pb-[50px] lg:pb-0",
                            children: [
                              (0, t.jsx)(r.default, {
                                className:
                                  "absolute -top-[40px] lg:-top-[10px] left-0 lg:-left-[30px]",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "label-earth text-[36px] text-black text-wrap",
                                children: "Set to Take Crypto by storm",
                              }),
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("span", {
                                className: "font-bold text-[30px]",
                                children: "Crypto Daily.",
                              }),
                              (0, t.jsx)(c.default, {
                                className:
                                  "absolute top-[90px] lg:top-[120px] right-[40px]",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "relative w-[340px] lg:w-[380px] lg:h-[240px] pb-[48px] lg:pb-0",
                            children: [
                              (0, t.jsx)(r.default, {
                                className:
                                  "absolute -top-[30px] lg:-top-[10px] left-0 lg:-left-[30px]",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "label-nanum text-[40px] text-black font-bold",
                                children: "Pandas + Asia + Memes = 100X",
                              }),
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("span", {
                                className: "font-bold text-[30px]",
                                children: "CoinPedia.",
                              }),
                              (0, t.jsx)(c.default, {
                                className: "absolute top-[120px] right-[40px]",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "relative w-[340px] lg:w-[389px] h-auto lg:h-[310px] pb-[48px] lg:pb-0",
                            children: [
                              (0, t.jsx)(r.default, {
                                className:
                                  "absolute -top-[40px] lg:-top-[24px] left-0 lg:-left-[24px]",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "label-earth text-[32px] text-white text-wrap",
                                children: "MOST ANTICIPATED MEMECOIN OF 2025",
                              }),
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("span", {
                                className: "font-bold text-[30px]",
                                children: "Analytics Insight.",
                              }),
                              (0, t.jsx)(c.default, {
                                className: "absolute right-[20px] top-[80px]",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "lg:flex-1 flex flex-col items-center lg:items-start",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "hidden lg:block relative w-[227px] h-[350px]",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "relative w-[340px] lg:w-[389px] h-[300px]",
                            children: [
                              (0, t.jsx)(r.default, {
                                className:
                                  "absolute -top-[40px] lg:-top-2 left-0 lg:-left-[24px]",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "label-vogue text-[36px] text-black text-wrap",
                                children:
                                  "POWER, PROFIT, PANDAS, THE FUTURE IS PANSHIBI",
                              }),
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("span", {
                                className: "font-bold text-[30px]",
                                children: "Crypto Reporter.",
                              }),
                              (0, t.jsx)(c.default, {
                                className: "absolute right-[20px] top-[180px]",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "relative w-[340px] lg:w-[389px] h-[300px]",
                            children: [
                              (0, t.jsx)(r.default, {
                                className:
                                  "absolute -top-[40px] lg:-top-[24px] left-0 lg:-left-[24px]",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "label-earth text-[32px] text-white text-wrap",
                                children:
                                  "WHALES BUY UP THIS NEW VIRAL MEMECOIN",
                              }),
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("span", {
                                className: "font-bold text-[30px]",
                                children: "Zycrypto.",
                              }),
                              (0, t.jsx)(c.default, {
                                className: "absolute right-[20px] top-[80px]",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "hidden lg:block absolute bottom-[300px] left-0 bg-white text-black",
                  children: (0, t.jsxs)("div", {
                    className: "flex flex-col w-[400px] pl-8 pr-4",
                    children: [
                      (0, t.jsx)("span", {
                        className: "label-vouge text-[36px]",
                        children: "WHERE MEMES MEET MOONSHOTS",
                      }),
                      (0, t.jsx)("span", {
                        className: "font-bold text-[30px]",
                        children: "U Today.",
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "hidden lg:block absolute -bottom-[60px] right-0",
                  children: (0, t.jsx)("img", {
                    className: "w-full",
                    src: "./images/characters/about-5.png",
                    draggable: !1,
                    alt: "logo",
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "relative flex flex-col lg:flex-row py-20 justify-center w-full",
              children: [
                (0, t.jsx)("img", {
                  className:
                    "absolute w-full h-auto z-1 -mt-[1100px] md:-mt-[900px] lg:-mt-[300px]",
                  src: "/images/background/about.png",
                }),
                (0, t.jsxs)("div", {
                  className: "relative flex items-center justify-center z-20",
                  children: [
                    (0, t.jsxs)(i.default, {
                      className:
                        "flex flex-col bg-black p-4 w-full lg:w-auto pr-0 lg:pr-[250px] mt-[180px] lg:pt-4 gap-6",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "my-btn w-[200px] lg:w-[300px] bg-white text-black h-[73px] font-bold text-[24px] uppercase",
                          children: e("featured_in"),
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-fit md:pl-12 gap-6",
                          children: [
                            (0, t.jsx)("img", {
                              className: "md:h-[30px] h-[28px]",
                              src: "./images/overview/logo-w-1.png",
                              draggable: !1,
                              alt: "logo",
                            }),
                            (0, t.jsx)("img", {
                              className: "md:h-[30px] h-[28px]",
                              src: "./images/overview/logo-w-2.png",
                              draggable: !1,
                              alt: "logo",
                            }),
                            (0, t.jsx)("img", {
                              className: "md:h-[30px] h-[28px]",
                              src: "./images/overview/logo-w-3.png",
                              draggable: !1,
                              alt: "logo",
                            }),
                            (0, t.jsx)("img", {
                              className: "md:h-[30px] h-[28px]",
                              src: "./images/overview/logo-w-5.png",
                              draggable: !1,
                              alt: "logo",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("img", {
                      className:
                        "absolute h-[480px] lg:h-[710px] right-0 top-[120px]",
                      src: "./images/characters/panda_blade.png",
                      draggable: !1,
                      alt: "logo",
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "absolute flex items-center right-[80px] top-0",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "absolute text-[48px] label-button text-center",
                          children: e("Wen? Moonshot"),
                        }),
                        (0, t.jsx)(o.default, {
                          className: "right-[140px] bottom-[650px]",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "flex w-full lg:w-auto items-center justify-center z-10",
                  children: (0, t.jsxs)(i.default, {
                    className:
                      "flex flex-col bg-[#2E2C42] p-[10px] lg:p-[50px] py-[50px] gap-6 max-w-[710px] mt-[110px] w-full",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "label-earth text-white text-[48px] md:text-[72px] normal-case text-center",
                        children: e("exchange_wishlist"),
                      }),
                      (0, t.jsx)("span", {
                        children: e("exchange_wishlist_content"),
                      }),
                      (0, t.jsx)(p.default, {
                        title: "The hype is real.",
                        className: "text-black",
                      }),
                      (0, t.jsx)(p.default, {
                        title: "Unleash the power.",
                        className: "text-black",
                      }),
                      (0, t.jsx)(p.default, {
                        title: "The future is here.",
                        className: "text-black",
                      }),
                      (0, t.jsx)(p.default, {
                        title: "Get in on the action.",
                        className: "text-black",
                      }),
                      (0, t.jsx)("span", { children: e("stay_locked_in") }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-row items-center justify-center",
                        children: [
                          (0, t.jsxs)(m(), {
                            href: "https://x.com",
                            className:
                              "flex-1 flex items-center justify-center cursor-pointer w-[160px]",
                            target: "_blank",
                            children: [
                              (0, t.jsx)("span", {
                                className:
                                  "absolute text-[22px] md:text-[28px] label-button",
                                children: "Twitter",
                              }),
                              (0, t.jsx)(n.default, {
                                className: "h-[42px] md:h-[63px]",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex-1 flex items-center justify-center cursor-pointer w-[160px]",
                            children: [
                              (0, t.jsxs)("a", {
                                to: "presale",
                                href: "https://app.uniswap.org",
                                className:
                                  "absolute text-[22px] md:text-[28px] label-button",
                                children: [e("buy"), " $SHIBI"],
                              }),
                              (0, t.jsx)(x.default, {
                                className: "h-[42px] md:h-[63px]",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "hidden md:block -mt-[500px] bg-[#96A6B6] w-full h-[600px] z-0",
            }),
          ],
        });
      }
    },
    57014: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return ButtonSmallBlue;
          },
        });
      var t = s(85893);
      function ButtonSmallBlue(e) {
        return (0, t.jsxs)("svg", {
          width: "245",
          height: "69",
          viewBox: "0 0 245 69",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, t.jsx)("rect", {
              x: "1.5",
              y: "1.5",
              width: "242",
              height: "66",
              rx: "33",
              fill: "#07CCFF",
              stroke: "black",
              "stroke-width": "3",
            }),
            (0, t.jsx)("mask", {
              id: "mask0_2026_479",
              maskUnits: "userSpaceOnUse",
              x: "3",
              y: "3",
              width: "239",
              height: "63",
              children: (0, t.jsx)("rect", {
                x: "3",
                y: "3",
                width: "239",
                height: "63",
                rx: "31.5",
                fill: "#EE89C8",
              }),
            }),
            (0, t.jsxs)("g", {
              mask: "url(#mask0_2026_479)",
              children: [
                (0, t.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M7 49C7 54.5 17.5833 67 29.3877 67H111.815H121.482H215.612C227.417 67 238 54.5 238 49C236.372 55.4 222.396 57.3333 215.612 57.5H121.482H111.815H29.3877C22.6035 57.3333 8.62819 55.4 7 49Z",
                  fill: "#50AAFF",
                }),
                (0, t.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M6 21C6 15.5 16.7207 3 28.6784 3H112.176H121.969H217.322C229.279 3 240 15.5 240 21C238.351 14.6 224.194 12.6667 217.322 12.5H121.969H112.176H28.6784C21.8062 12.6667 7.64934 14.6 6 21Z",
                  fill: "#67E0FF",
                }),
              ],
            }),
            (0, t.jsx)("path", {
              d: "M234 49.5C235.667 47.3333 239 41.3 239 34.5",
              stroke: "black",
              "stroke-linecap": "round",
            }),
            (0, t.jsx)("path", {
              d: "M20.0281 9.84855C17.5817 11.0682 11.9455 15.0363 8.97174 21.1515",
              stroke: "white",
              "stroke-linecap": "round",
            }),
            (0, t.jsx)("path", {
              d: "M31 57.5H91M98 57.5H107.5",
              stroke: "black",
              "stroke-linecap": "round",
            }),
          ],
        });
      }
      s(67294);
    },
    25775: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return Notice;
          },
        });
      var t = s(85893);
      function Notice(e) {
        return (0, t.jsxs)("svg", {
          width: "278",
          height: "148",
          viewBox: "0 0 278 148",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, t.jsxs)("g", {
              filter: "url(#filter0_d_2026_436)",
              children: [
                (0, t.jsx)("mask", {
                  id: "path-1-inside-1_2026_436",
                  fill: "white",
                  children: (0, t.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M249.473 1.53571L5.67623 0.0609292L4.82504 140.77L248.621 142.245L248.788 114.75L277.75 114.75L249.02 76.3234L249.473 1.53571Z",
                  }),
                }),
                (0, t.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M249.473 1.53571L5.67623 0.0609292L4.82504 140.77L248.621 142.245L248.788 114.75L277.75 114.75L249.02 76.3234L249.473 1.53571Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M5.67623 0.0609292L5.69261 -2.64625L2.98543 -2.66263L2.96905 0.0445486L5.67623 0.0609292ZM249.473 1.53571L252.18 1.55209L252.196 -1.15509L249.489 -1.17147L249.473 1.53571ZM4.82504 140.77L2.11786 140.754L2.10148 143.461L4.80866 143.478L4.82504 140.77ZM248.621 142.245L248.605 144.952L251.312 144.969L251.329 142.262L248.621 142.245ZM248.788 114.75L248.788 112.043L246.097 112.043L246.08 114.734L248.788 114.75ZM277.75 114.75L277.75 117.457L283.155 117.457L279.918 113.129L277.75 114.75ZM249.02 76.3234L246.313 76.307L246.307 77.2163L246.852 77.9445L249.02 76.3234ZM5.65985 2.7681L249.456 4.24289L249.489 -1.17147L5.69261 -2.64625L5.65985 2.7681ZM7.53222 140.787L8.38341 0.0773028L2.96905 0.0445486L2.11786 140.754L7.53222 140.787ZM248.638 139.538L4.84141 138.063L4.80866 143.478L248.605 144.952L248.638 139.538ZM246.08 114.734L245.914 142.229L251.329 142.262L251.495 114.767L246.08 114.734ZM248.788 117.457L277.75 117.457L277.75 112.043L248.788 112.043L248.788 117.457ZM279.918 113.129L251.188 74.7023L246.852 77.9445L275.582 116.371L279.918 113.129ZM246.765 1.51934L246.313 76.307L251.727 76.3398L252.18 1.55209L246.765 1.51934Z",
                  fill: "black",
                  mask: "url(#path-1-inside-1_2026_436)",
                }),
              ],
            }),
            (0, t.jsx)("defs", {
              children: (0, t.jsxs)("filter", {
                id: "filter0_d_2026_436",
                x: "0.313147",
                y: "0.0609131",
                width: "277.437",
                height: "147.599",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [
                  (0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, t.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, t.jsx)("feOffset", { dx: "-4.51205", dy: "5.41446" }),
                  (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "out",
                  }),
                  (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0",
                  }),
                  (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_2026_436",
                  }),
                  (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_2026_436",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      s(67294);
    },
    76041: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return QuoteEnd;
          },
        });
      var t = s(85893);
      function QuoteEnd(e) {
        return (0, t.jsx)("div", {
          className:
            "rotate-180 label-earth-stroke text-[66px] h-[28px] ".concat(
              e.className
            ),
          children: "“",
        });
      }
      s(67294);
    },
    90569: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return QuoteStart;
          },
        });
      var t = s(85893);
      function QuoteStart(e) {
        return (0, t.jsx)("div", {
          className:
            "label-earth-stroke text-white text-[66px] h-[28px] ".concat(
              e.className
            ),
          children: "“",
        });
      }
      s(67294);
    },
  },
]);
