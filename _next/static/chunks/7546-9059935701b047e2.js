"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7546],
  {
    68689: function (e, t, n) {
      n.d(t, {
        FL: function () {
          return r;
        },
        f2: function () {
          return l;
        },
        nI: function () {
          return s;
        },
        nf: function () {
          return i;
        },
      });
      let a = "https://api.panshibi.com",
        s = "".concat(a, "/subscribe"),
        l = "".concat(a, "/buy/getOutAmount"),
        i = "".concat(a, "/buy/getUserData"),
        r = "".concat(a, "/stage/getStages");
    },
    2899: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return UpIcon;
          },
        });
      var a = n(85893);
      function UpIcon(e) {
        return (0, a.jsx)("svg", {
          width: "12",
          height: "14",
          viewBox: "0 0 12 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M5.26751 12.7904C5.26751 13.2262 5.62081 13.5795 6.05664 13.5795C6.49247 13.5795 6.84577 13.2262 6.84577 12.7904H5.26751ZM6.61464 0.50108C6.30647 0.192904 5.80681 0.192904 5.49864 0.50108L0.476618 5.5231C0.168442 5.83128 0.168442 6.33093 0.476618 6.6391C0.784794 6.94728 1.28445 6.94728 1.59262 6.6391L6.05664 2.17509L10.5207 6.6391C10.8288 6.94728 11.3285 6.94728 11.6367 6.6391C11.9448 6.33093 11.9448 5.83128 11.6367 5.5231L6.61464 0.50108ZM6.84577 12.7904V1.05908H5.26751V12.7904H6.84577Z",
            fill: "#00FFA1",
          }),
        });
      }
      n(67294);
    },
    45476: function (e, t, n) {
      n.r(t);
      var a = n(85893);
      n(67294),
        (t.default = (e) => {
          let { pro: t } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative scroll-bg items-center h-[40px] md:h-[50px] p-1",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute scroll-pro h-[28px] md:h-[40px] rounded-3xl",
                style: {
                  width: t < 5 ? "5%" : "".concat(t, "%"),
                  display: 0 == t ? "none" : "block",
                },
              }),
              (0, a.jsxs)("span", {
                className:
                  "absolute label-earth-stroke font-bold text-[22px] md:text-[32px] text-right w-full px-4 mt-1 md:mt-2",
                children: [t, "%"],
              }),
            ],
          });
        });
    },
    87546: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return BuyNow;
          },
        });
      var a = n(85893),
        s = n(67294),
        l = n(92321),
        i = n(91526);
      let r = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
          ],
          name: "airdrop",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "airdropAddress",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "airdropAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "blacklistedUsers",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_airdropAddress",
              type: "address[]",
            },
          ],
          name: "setAirdropAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_airdropAmount",
              type: "uint256[]",
            },
          ],
          name: "setAirdropAmount",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_addr", type: "address" },
            { internalType: "bool", name: "_value", type: "bool" },
          ],
          name: "setBlacklisted",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "_value", type: "bool" }],
          name: "setTransferApproval",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "transferApproval",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      var d = n(93677),
        o = n(10824),
        c = n(68597),
        p = n(64892),
        u = n(26623);
      let x = (0, o.v)({ chain: p.R, transport: (0, c.d)() }),
        fetchUSDTBal = () => {
          let [e, t] = (0, s.useState)(0),
            n = (0, s.useCallback)(async (e) => {
              if (e)
                try {
                  let n = await x.readContract({
                    address: d.e.usdtAddress,
                    abi: r,
                    functionName: "balanceOf",
                    args: [e],
                  });
                  t(Number(n) / 10 ** d.e.usdtDecimal);
                } catch (e) {
                  console.error("Error fetching contract data:", e);
                }
              return !1;
            }, []);
          return { usdtBal: e, onUSDTBal: n };
        };
      var m = n(33305),
        h = n(16693),
        f = n(48120),
        y = n(55678),
        w = n(66357),
        b = n(14679),
        g = n(82693),
        j = n(67421),
        v = n(52463),
        C = n(91663),
        k = n(57014),
        N = n(45277),
        T = n(58171),
        M = n(7857),
        H = n(45476),
        L = n(64277),
        _ = n(41664),
        A = n.n(_),
        E = n(2899),
        S = n(87066),
        B = n(68689);
      let fetchStages = () => {
          let [e, t] = (0, s.useState)(0),
            [n, a] = (0, s.useState)(),
            [l, i] = (0, s.useState)([]),
            r = (0, s.useCallback)(async () => {
              try {
                let { data: e } = await S.Z.get(B.FL);
                if ("ok" === e.status) {
                  let n = e.data,
                    s = n.reduce((e, t) => e + t.amountRaised, 0),
                    l = n.findIndex((e) => !0 === e.active);
                  i(n), t(s), a(n[l]);
                }
              } catch (e) {
                console.error("Error fetching contract data:", e);
              }
              return !1;
            }, []);
          return { stages: l, totalRaised: e, currentStage: n, refetch: r };
        },
        useFetch_fetchUserData = () => {
          let [e, t] = (0, s.useState)(0),
            [n, a] = (0, s.useState)(0),
            l = (0, s.useCallback)(async (e) => {
              try {
                let { data: n } = await S.Z.get(
                  "".concat(B.nf, "?address=").concat(e)
                );
                "ok" === n.status &&
                  (t(n.data.totalPurchase), a(n.data.totalInvested));
              } catch (e) {
                console.error("Error fetching contract data:", e);
              }
              return !1;
            }, []);
          return { totalPurchase: e, totalInvested: n, refetch: l };
        },
        fetchOutAmount = async (e, t) => {
          try {
            let { data: n } = await S.Z.get(
              "".concat(B.f2, "?amount=").concat(e, "&isNative=").concat(t)
            );
            if ("ok" === n.status) return Number(n.data.tokenAmount);
          } catch (e) {
            console.error("Error fetching contract data:", e);
          }
          return 0;
        };
      function BuyNow() {
        let { t: e } = (0, j.$G)(),
          { address: t, isConnected: n } = (0, l.m)(),
          { data: r } = (0, i.K)({ address: t }),
          o = (0, s.useRef)(null),
          { usdtBal: c, onUSDTBal: p } = fetchUSDTBal(),
          [x, _] = (0, s.useState)(0),
          [S, B] = (0, s.useState)(0),
          [F, Z] = (0, s.useState)(0),
          [U, V] = (0, s.useState)(0),
          [D, O] = (0, s.useState)("eth"),
          [I, $] = (0, s.useState)(""),
          [P, R] = (0, s.useState)(""),
          [z, q] = (0, s.useState)(!1),
          [G, K] = (0, s.useState)(0),
          {
            stages: W,
            totalRaised: X,
            currentStage: J,
            refetch: Q,
          } = fetchStages(),
          { totalPurchase: Y, refetch: ee } = useFetch_fetchUserData(),
          [et, en] = (0, s.useState)(0),
          ea = (0, s.useRef)(null),
          [es, el] = (0, s.useState)(!1),
          handleChange = async (e) => {
            "." === e.target.value && $("0"),
              /^\d*\.?\d{0,18}$/.test(e.currentTarget.value) &&
                $(e.target.value);
          },
          getContractData = async () => {
            t && (p(t), ee(t));
          },
          handleBuy = async () => {
            if (!t || !n) {
              u.web3Modal.open();
              return;
            }
            if (!I || !Number(I)) {
              y.Am.error("Input valid amount!");
              return;
            }
            if ("eth" === D) {
              if (!I || Number(I) < d.e.minEthAmount) {
                y.Am.error(
                  "Minimum ETH deposit amount is ".concat(
                    d.e.minEthAmount,
                    "ETH!"
                  )
                );
                return;
              }
              console.log("buy with eth..."), q(!0);
              try {
                let e = await (0, w.T)(u.wagmiConfig, {
                    to: d.e.treasuryAddress,
                    value: (0, m.f)(String(I)),
                    data: "0x",
                  }),
                  t = await (0, b.e)(u.wagmiConfig, { hash: e });
                console.log("data ==> ", t, e),
                  (null == t ? void 0 : t.blockHash) &&
                    (console.log(null == t ? void 0 : t.blockHash),
                    y.Am.success("Transaction complete!"),
                    getContractData(),
                    Q(),
                    $(""));
              } catch (e) {
                console.log("err ==> ", e),
                  String(e).includes("User rejected the request.") ||
                    y.Am.error("Transaction failed!");
              }
              q(!1);
            } else {
              if (!I || Number(I) < d.e.minUsdtAmount) {
                y.Am.error(
                  "Minimum USDT deposit amount is ".concat(
                    d.e.minUsdtAmount,
                    "USDT!"
                  )
                );
                return;
              }
              console.log("depositing"), q(!0);
              try {
                let e = await (0, g.n)(u.wagmiConfig, {
                    address: d.e.usdtAddress,
                    abi: h.Wo,
                    functionName: "transfer",
                    args: [d.e.treasuryAddress, (0, f.v)(String(I), 6)],
                  }),
                  t = await (0, b.e)(u.wagmiConfig, { hash: e });
                console.log("data ==> ", t, e),
                  (null == t ? void 0 : t.blockHash) &&
                    (console.log(null == t ? void 0 : t.blockHash),
                    y.Am.success("Transaction complete!"),
                    getContractData(),
                    Q(),
                    $(""));
              } catch (e) {
                console.log("err ==> ", e),
                  String(e).includes("User rejected the request.") ||
                    y.Am.error("Transaction failed!");
              }
              q(!1);
            }
          },
          fetchToAmount = () => {
            if (I)
              try {
                "eth" === D
                  ? fetchOutAmount(Number(I), !0).then((e) => {
                      e ? R(e.toFixed()) : R("");
                    })
                  : fetchOutAmount(Number(I), !1).then((e) => {
                      e ? R(e.toFixed()) : R("");
                    });
              } catch (e) {}
            else R("");
          };
        return (
          (0, s.useEffect)(() => {
            V(Number((null == r ? void 0 : r.formatted) || 0));
          }, [r]),
          (0, s.useEffect)(() => {
            I || R(""),
              G > 0 &&
                (setTimeout(() => {
                  K((e) => e - 1);
                }, 300),
                1 === G && fetchToAmount());
          }, [G]),
          (0, s.useEffect)(() => {
            K(3);
          }, [I]),
          (0, s.useEffect)(() => {
            getContractData(), t && V(Number(null == r ? void 0 : r.formatted));
          }, [, t]),
          (0, s.useEffect)(() => {
            if (J) {
              B(J.price), Z(J.nextPrice);
              let e = J.tokenToSellAmount,
                t = J.tokenSoldAmount;
              _((Number(t) / Number(e)) * 100);
            }
          }, [J]),
          (0, s.useEffect)(() => {
            o &&
              o.current &&
              (o.current.style.width = "".concat(x.toFixed(2), "%"));
          }, [x, o]),
          (0, s.useEffect)(() => {
            Q();
            let e = Math.floor(new Date(d.e.presaleEnd).getTime() / 1e3),
              t = Math.floor(Date.now() / 1e3);
            en(Math.max(e - t, 0));
            let n = setInterval(() => {
              en((e) => e - 1);
            }, 1e3);
            return () => clearInterval(n);
          }, []),
          (0, v.Z)(ea, () => el(!1)),
          (0, a.jsxs)("div", {
            className:
              "buy-box relative p-4 bg-white gap-4 w-full max-w-[480px]",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "discord ml-4 size-[40px] md:size-[63px] bg-[#EE89C8]",
                    children: (0, a.jsx)("img", {
                      src: "./images/logo.png",
                      draggable: !1,
                      alt: "logo",
                    }),
                  }),
                  (0, a.jsx)("span", {
                    className:
                      "text-[20px] md:text-[32px] uppercase label-earth-stroke",
                    children: e("presale_ending_in"),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "content z-10",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center p-2 gap-1",
                    children: [
                      (0, a.jsx)("span", {
                        className: "label-button text-[22px] md:text-[28px]",
                        children: e("buy_now_before_it_hits"),
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "label-earth-stroke text-[22px] md:text-[28px] normal-case",
                        children: e("major_exchanges"),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex gap-4 pt-2 items-center",
                        children: [
                          (0, a.jsxs)("span", {
                            className:
                              "label-earth-stroke text-[20px] md:text-[30px] uppercase",
                            children: [e("raised"), ":"],
                          }),
                          (0, a.jsxs)("span", {
                            className:
                              "label-button text-[26px] md:text-[36px]",
                            children: [
                              "$",
                              Math.floor(Number(X.toFixed(2))).toLocaleString(),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col px-4 p-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex px-4 text-black text-[10px] md:text-[14px]",
                        children: [
                          (0, a.jsxs)("span", {
                            className: "items-start",
                            children: [
                              e("stage"),
                              " ",
                              null == J ? void 0 : J.id,
                              "/",
                              W.length,
                            ],
                          }),
                          (0, a.jsxs)("span", {
                            className: "flex-1 text-right text-nowrap",
                            children: [
                              x.toFixed(2),
                              "% ",
                              e("of_the_target_raised"),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(H.default, { pro: Number(x.toFixed(2)) }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex px-4 text-black text-[10px] md:text-[14px] mt-1 items-center",
                        children: [
                          (0, a.jsxs)("span", {
                            className: "items-start",
                            children: [e("current_price"), ": $", S],
                          }),
                          (0, a.jsxs)("span", {
                            className:
                              "flex-1 text-right text-nowrap inline-block",
                            children: [
                              e("next_price"),
                              ": ",
                              (0, a.jsxs)("b", { children: ["$", F] }),
                              " ",
                              (0, a.jsx)(E.default, { className: "inline" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center p-2",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "label-button text-[28px] md:text-[36px] text-center",
                        children: "Listing Price: $0.026",
                      }),
                      t && n
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)("span", {
                                className:
                                  "flex text-black text-[10px] md:text-[14px] items-center",
                                children: [
                                  e("your_purchased"),
                                  " $SHIBI:",
                                  " ",
                                  n ? "".concat(Y) : 0,
                                ],
                              }),
                              "eth" === D
                                ? (0, a.jsxs)("span", {
                                    className:
                                      "flex text-black text-[10px] md:text-[14px] items-center",
                                    children: [
                                      "ETH ",
                                      e("balance"),
                                      " = ",
                                      n ? U.toFixed(4) : 0,
                                    ],
                                  })
                                : (0, a.jsxs)("span", {
                                    className:
                                      "flex text-black text-[10px] md:text-[14px] items-center",
                                    children: [
                                      "USDT ",
                                      e("balance"),
                                      " = $",
                                      n ? c.toFixed(2) : 0,
                                    ],
                                  }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col px-4 pb-2 gap-1",
                    style: { display: t && n ? "flex" : "none" },
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "grid grid-cols-2 items-center justify-center gap-1",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex md:px-4 px-2 text-[9px] md:text-[14px]",
                                children: [
                                  "eth" === D
                                    ? (0, a.jsxs)("span", {
                                        className:
                                          "flex-1 text-black items-start text-nowrap",
                                        children: [e("pay_with"), " ETH"],
                                      })
                                    : (0, a.jsxs)("span", {
                                        className:
                                          "flex-1 text-black items-start text-nowrap",
                                        children: [e("pay_with"), " USDT"],
                                      }),
                                  (0, a.jsx)("span", {
                                    children:
                                      n &&
                                      (0, a.jsx)("button", {
                                        className:
                                          "flex-1 text-[#DF75B7] text-right cursor-pointer md:px-1",
                                        onClick: () => {
                                          "eth" === D
                                            ? $(U.toFixed(4))
                                            : $(c.toFixed(2));
                                        },
                                        children: "MAX",
                                      }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "relative items-center justify-center",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "absolute flex items-center w-full h-[42px] md:h-[63px] md:px-[20px] px-[15px]",
                                    children: [
                                      (0, a.jsx)("input", {
                                        type: "text",
                                        placeholder: "0",
                                        className:
                                          "label-button text-[18px] md:text-[28px] pt-[4px]",
                                        value: I,
                                        onChange: handleChange,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center cursor-pointer gap-1",
                                        onClick: () => el(!0),
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "shadow-circle ml-4 w-[16px] h-[16px] md:w-[22px] md:h-[22px] bg-white",
                                            children:
                                              "eth" === D
                                                ? (0, a.jsx)(N.default, {
                                                    className:
                                                      "w-[8px] h-[8px] md:w-[15px] md:h-[15px]",
                                                  })
                                                : (0, a.jsx)(T.default, {
                                                    className:
                                                      "w-[8px] h-[8px] md:w-[12px] md:h-[12px]",
                                                  }),
                                          }),
                                          "eth" === D
                                            ? (0, a.jsx)("span", {
                                                className:
                                                  "text-white text-[10px] md:text-[14px] text-right",
                                                children: "ETH",
                                              })
                                            : (0, a.jsx)("span", {
                                                className:
                                                  "text-white text-[10px] md:text-[14px] text-right",
                                                children: "USDT",
                                              }),
                                          (0, a.jsx)(M.default, {
                                            className:
                                              "w-[6px] h-[3px] md:w-[11px] md:h-[6px]",
                                          }),
                                        ],
                                      }),
                                      es &&
                                        (0, a.jsxs)("div", {
                                          className:
                                            "absolute menu-box md:top-16 top-10 right-0 flex flex-col md:w-[50%] w-[70%] gap-1",
                                          ref: ea,
                                          children: [
                                            (0, a.jsx)("button", {
                                              className:
                                                "h-[40px] w-full fourth " +
                                                ("eth" === D ? "active" : ""),
                                              onClick: () => {
                                                O("eth"), $(""), el(!1);
                                              },
                                              children: (0, a.jsxs)("div", {
                                                className:
                                                  "flex w-full gap-1 px-3 text-[16px] font-black",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "shadow-circle w-[16px] h-[16px] md:w-[22px] md:h-[22px] bg-white",
                                                    children: (0, a.jsx)(
                                                      N.default,
                                                      {
                                                        className:
                                                          "w-[8px] h-[8px] md:w-[15px] md:h-[15px]",
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    children: "ETH",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("button", {
                                              className:
                                                "h-[40px] w-full fourth " +
                                                ("usdt" === D ? "active" : ""),
                                              onClick: () => {
                                                O("usdt"), $(""), el(!1);
                                              },
                                              children: (0, a.jsxs)("div", {
                                                className:
                                                  "flex w-full gap-1 px-3 text-[16px] font-black",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "shadow-circle w-[16px] h-[16px] md:w-[22px] md:h-[22px] bg-white",
                                                    children: (0, a.jsx)(
                                                      T.default,
                                                      {
                                                        className:
                                                          "w-[8px] h-[8px] md:w-[12px] md:h-[12px]",
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    children: "USDT",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, a.jsx)(k.default, {
                                    className: "w-full h-[42px] md:h-[63px]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "flex md:px-4 px-2 text-[9px] md:text-[14px]",
                                children: (0, a.jsxs)("span", {
                                  className:
                                    "flex-1 text-black items-start md:px-1",
                                  children: [e("receive"), " $SHIBI"],
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "relative items-center justify-center",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "absolute flex items-center w-full h-[42px] md:h-[63px] md:px-[20px] px-[15px]",
                                    children: [
                                      (0, a.jsx)("input", {
                                        type: "text",
                                        placeholder: "0",
                                        className:
                                          "label-button text-[18px] md:text-[28px] pt-[4px]",
                                        value: P,
                                        readOnly: !0,
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "discord w-[18px] h-[14px] md:w-[36px] md:h-[28px] bg-[#EE89C8]",
                                        children: (0, a.jsx)("img", {
                                          src: "./images/logo.png",
                                          draggable: !1,
                                          alt: "logo",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(k.default, {
                                    className: "w-full h-[42px] md:h-[63px]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-center cursor-pointer",
                        onClick: () => handleBuy(),
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "absolute text-[22px] md:text-[28px] label-button",
                            children: e(z ? "depositing" : "buy_now"),
                          }),
                          (0, a.jsx)(C.default, {
                            className:
                              "w-full h-[42px] max-w-[458px] md:h-[63px]",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1 pb-2 px-4",
                    style: { display: t && n ? "none" : "flex" },
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-center cursor-pointer",
                        onClick: () => {
                          u.web3Modal.open();
                        },
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "absolute text-[22px] md:text-[28px] label-button",
                            children: e("buy_with_crypto"),
                          }),
                          (0, a.jsx)(L.default, {
                            className:
                              "w-[276px] h-[42px] md:w-[458px] md:h-[63px]",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(A(), {
                        href: "/cardbuy",
                        className:
                          "flex items-center justify-center cursor-pointer",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "absolute text-[22px] md:text-[28px] label-button",
                            children: e("buy_with_card"),
                          }),
                          (0, a.jsx)(C.default, {
                            className:
                              "w-[276px] h-[42px] md:w-[458px] md:h-[63px]",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col text-black items-center justify-center",
                style: { display: t && n ? "flex" : "none" },
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "flex text-black text-[10px] md:text-[14px] items-center",
                        children: e("want_to_pay_with_card"),
                      }),
                      (0, a.jsx)(A(), {
                        href: "/cardbuy",
                        className:
                          "flex text-[#EE89C8] text-[10px] md:text-[14px] items-center px-2 cursor-pointer",
                        children: e("click_here"),
                      }),
                    ],
                  }),
                  (0, a.jsx)(A(), {
                    href: "https://widget.wert.io/default/widget/?commodity=ETH%3AEthereum",
                    target: "_blank",
                    children: (0, a.jsx)("span", {
                      className:
                        "flex text-black text-[8px] md:text-[12px] items-center underline cursor-pointer",
                      children: e("not_enough_eth"),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex gap-2 text-black items-center justify-center",
                style: { display: t && n ? "none" : "flex" },
                children: [
                  (0, a.jsx)("span", {
                    className: "text-sm",
                    children: "Accepted:",
                  }),
                  (0, a.jsx)("div", {
                    className: "round-btn bg-white",
                    children: (0, a.jsx)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, a.jsx)("path", {
                        d: "M11.9999 0L4.62988 12.22L11.9999 16.574L19.3699 12.22L11.9999 0ZM11.9999 24L4.62988 13.617L11.9999 18L19.3699 13.617L11.9999 24Z",
                        fill: "black",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "round-btn bg-white",
                    children: (0, a.jsx)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, a.jsx)("path", {
                        d: "M18.7542 10.518C18.7542 11.143 16.5162 11.666 13.5162 11.798L13.5182 11.799C13.0187 11.8263 12.5184 11.8374 12.0182 11.832C11.2392 11.832 10.6882 11.809 10.4942 11.8C7.48818 11.667 5.24418 11.144 5.24418 10.518C5.24418 9.89203 7.48818 9.36804 10.4942 9.23404V11.278C10.6902 11.293 11.2532 11.326 12.0312 11.326C12.9642 11.326 13.4312 11.286 13.5162 11.279V9.23604C16.5162 9.36904 18.7542 9.89303 18.7542 10.518ZM23.9442 11.064L12.1242 22.39C12.0907 22.4221 12.0461 22.44 11.9997 22.44C11.9533 22.44 11.9087 22.4221 11.8752 22.39L0.0561792 11.064C0.028712 11.0378 0.0102446 11.0036 0.00341917 10.9662C-0.00340624 10.9288 0.00176019 10.8903 0.0181792 10.856L4.39418 1.66404C4.40878 1.63318 4.43186 1.60711 4.46072 1.58887C4.48959 1.57063 4.52304 1.56098 4.55718 1.56104H19.4452C19.4788 1.56154 19.5116 1.57146 19.5399 1.58966C19.5682 1.60787 19.5908 1.63363 19.6052 1.66404L23.9822 10.856C23.9986 10.8903 24.0038 10.9288 23.9969 10.9662C23.9901 11.0036 23.9716 11.0378 23.9442 11.064ZM19.4662 10.66C19.4662 9.85404 16.9142 9.18004 13.5192 9.02304V7.19504H17.7052V4.40504H6.30818V7.19504H10.4932V9.02404C7.09118 9.18004 4.53318 9.85404 4.53318 10.661C4.53318 11.469 7.09118 12.141 10.4932 12.299V18.161H13.5182V12.297C16.9122 12.14 19.4662 11.467 19.4662 10.66Z",
                        fill: "black",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "round-btn bg-white",
                    children: (0, a.jsx)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, a.jsx)("path", {
                        d: "M22.222 15.768L21.997 14.643H19.483L19.083 15.76L17.068 15.764C18.3633 12.6513 19.3247 10.3457 19.952 8.847C20.116 8.455 20.407 8.255 20.836 8.258C21.164 8.26066 21.6993 8.261 22.442 8.259L24 15.765L22.222 15.768ZM20.048 13.102H21.669L21.064 10.282L20.048 13.102ZM7.062 8.257L9.088 8.259L5.956 15.769L3.905 15.767C3.38925 13.7833 2.87991 11.798 2.377 9.811C2.277 9.415 2.079 9.138 1.698 9.007C1.35733 8.89033 0.791333 8.70999 0 8.46599V8.259H3.237C3.797 8.259 4.124 8.53 4.229 9.086C4.335 9.64333 4.60167 11.0613 5.029 13.34L7.062 8.257ZM11.872 8.259L10.271 15.768L8.342 15.765L9.94 8.257L11.872 8.259ZM15.782 8.12C16.359 8.12 17.086 8.29999 17.504 8.46599L17.166 10.022C16.788 9.87 16.166 9.665 15.643 9.672C14.883 9.685 14.413 10.004 14.413 10.31C14.413 10.808 15.229 11.059 16.069 11.603C17.027 12.223 17.154 12.78 17.142 13.386C17.129 14.641 16.069 15.88 13.833 15.88C12.813 15.865 12.445 15.78 11.613 15.484L11.965 13.86C12.812 14.214 13.171 14.327 13.895 14.327C14.558 14.327 15.127 14.059 15.132 13.592C15.136 13.26 14.932 13.095 14.188 12.685C13.444 12.275 12.4 11.706 12.414 10.563C12.431 9.10099 13.816 8.12 15.782 8.12Z",
                        fill: "black",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "round-btn bg-white",
                    children: (0, a.jsxs)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, a.jsx)("path", {
                          d: "M7 19C10.866 19 14 15.866 14 12C14 8.13401 10.866 5 7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19Z",
                          fill: "black",
                        }),
                        (0, a.jsx)("path", {
                          d: "M17 19C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5C13.134 5 10 8.13401 10 12C10 15.866 13.134 19 17 19Z",
                          fill: "black",
                          "fill-opacity": "0.8",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    64277: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ButtonLargeBlue;
          },
        });
      var a = n(85893);
      function ButtonLargeBlue(e) {
        return (0, a.jsxs)("svg", {
          viewBox: "0 0 458 63",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("rect", {
              x: "2.27891",
              y: "1.41026",
              width: "453.912",
              height: "59.559",
              rx: "29.7795",
              fill: "#07CCFF",
              stroke: "black",
              "stroke-width": "2.70723",
            }),
            (0, a.jsx)("mask", {
              id: "mask0_2008_140",
              maskUnits: "userSpaceOnUse",
              x: "3",
              y: "2",
              width: "452",
              height: "58",
              children: (0, a.jsx)("rect", {
                x: "3.69287",
                y: "2.76392",
                width: "451.085",
                height: "56.8518",
                rx: "28.4259",
                fill: "#EE89C8",
              }),
            }),
            (0, a.jsxs)("g", {
              mask: "url(#mask0_2008_140)",
              children: [
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M8.30518 44.2747C8.30518 49.2379 18.0678 60.518 28.957 60.518L336.702 60.5181H432.451C443.34 60.5181 453.103 49.238 453.103 44.2747C451.601 50.0501 438.709 51.7948 432.451 51.9452L351.461 51.9451H28.957C22.6989 51.7947 9.80712 50.0501 8.30518 44.2747Z",
                  fill: "#0060B9",
                }),
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M454.614 19.0072C454.614 14.0439 444.725 2.76383 433.694 2.76383L115.282 2.7638H29.2252C18.1946 2.7638 8.30518 14.0439 8.30518 19.0072C9.82663 13.2318 22.8858 11.4871 29.2252 11.3367L89.0203 11.3367H433.694C440.034 11.4871 453.093 13.2318 454.614 19.0072Z",
                  fill: "#67E0FF",
                }),
              ],
            }),
            (0, a.jsx)("path", {
              d: "M446.475 46.0795C448.013 44.1243 451.087 38.6797 451.087 32.5433",
              stroke: "black",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M21.2714 11.0539C19.0147 12.1545 13.8155 15.7354 11.0723 21.2538",
              stroke: "white",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M47.9707 51.9452H103.318M109.776 51.9452H118.539",
              stroke: "black",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M345.926 11.788H401.274M407.731 11.788H416.495",
              stroke: "white",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
          ],
        });
      }
      n(67294);
    },
    91663: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ButtonLargePink;
          },
        });
      var a = n(85893);
      function ButtonLargePink(e) {
        return (0, a.jsxs)("svg", {
          width: "458",
          height: "63",
          viewBox: "0 0 458 63",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("rect", {
              x: "2.27891",
              y: "1.40781",
              width: "453.912",
              height: "59.559",
              rx: "29.7795",
              fill: "#EE89C8",
              stroke: "black",
              "stroke-width": "2.70723",
            }),
            (0, a.jsx)("mask", {
              id: "mask0_2008_19",
              maskUnits: "userSpaceOnUse",
              x: "3",
              y: "2",
              width: "452",
              height: "58",
              children: (0, a.jsx)("rect", {
                x: "3.69287",
                y: "2.76147",
                width: "451.085",
                height: "56.8518",
                rx: "28.4259",
                fill: "#EE89C8",
              }),
            }),
            (0, a.jsxs)("g", {
              mask: "url(#mask0_2008_19)",
              children: [
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M453.103 44.2723C453.103 49.2356 443.34 60.5157 432.451 60.5157L351.461 60.5158H28.957C18.0678 60.5158 8.30518 49.2356 8.30518 44.2724C9.80712 50.0478 22.6989 51.7925 28.957 51.9429L336.702 51.9428H432.451C438.709 51.7924 451.601 50.0478 453.103 44.2723Z",
                  fill: "#DF75B7",
                }),
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M454.614 19.0048C454.614 14.0415 444.725 2.76139 433.694 2.76139H115.282V2.76133H29.2252C18.1946 2.76133 8.30518 14.0414 8.30518 19.0047C9.82663 13.2293 22.8858 11.4846 29.2252 11.3342H89.0203V11.3343H433.694C440.034 11.4847 453.093 13.2293 454.614 19.0048Z",
                  fill: "#FEA1DB",
                }),
              ],
            }),
            (0, a.jsx)("path", {
              d: "M446.475 46.0772C448.013 44.1219 451.087 38.6774 451.087 32.541",
              stroke: "black",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M21.2714 11.0515C19.0147 12.1521 13.8155 15.7329 11.0723 21.2514",
              stroke: "white",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M47.9707 51.9427H103.318M109.776 51.9427H118.539",
              stroke: "black",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M345.926 11.7855H401.274M407.731 11.7855H416.495",
              stroke: "white",
              "stroke-width": "0.90241",
              "stroke-linecap": "round",
            }),
          ],
        });
      }
      n(67294);
    },
    57014: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ButtonSmallBlue;
          },
        });
      var a = n(85893);
      function ButtonSmallBlue(e) {
        return (0, a.jsxs)("svg", {
          width: "245",
          height: "69",
          viewBox: "0 0 245 69",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("rect", {
              x: "1.5",
              y: "1.5",
              width: "242",
              height: "66",
              rx: "33",
              fill: "#07CCFF",
              stroke: "black",
              "stroke-width": "3",
            }),
            (0, a.jsx)("mask", {
              id: "mask0_2026_479",
              maskUnits: "userSpaceOnUse",
              x: "3",
              y: "3",
              width: "239",
              height: "63",
              children: (0, a.jsx)("rect", {
                x: "3",
                y: "3",
                width: "239",
                height: "63",
                rx: "31.5",
                fill: "#EE89C8",
              }),
            }),
            (0, a.jsxs)("g", {
              mask: "url(#mask0_2026_479)",
              children: [
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M7 49C7 54.5 17.5833 67 29.3877 67H111.815H121.482H215.612C227.417 67 238 54.5 238 49C236.372 55.4 222.396 57.3333 215.612 57.5H121.482H111.815H29.3877C22.6035 57.3333 8.62819 55.4 7 49Z",
                  fill: "#50AAFF",
                }),
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M6 21C6 15.5 16.7207 3 28.6784 3H112.176H121.969H217.322C229.279 3 240 15.5 240 21C238.351 14.6 224.194 12.6667 217.322 12.5H121.969H112.176H28.6784C21.8062 12.6667 7.64934 14.6 6 21Z",
                  fill: "#67E0FF",
                }),
              ],
            }),
            (0, a.jsx)("path", {
              d: "M234 49.5C235.667 47.3333 239 41.3 239 34.5",
              stroke: "black",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M20.0281 9.84855C17.5817 11.0682 11.9455 15.0363 8.97174 21.1515",
              stroke: "white",
              "stroke-linecap": "round",
            }),
            (0, a.jsx)("path", {
              d: "M31 57.5H91M98 57.5H107.5",
              stroke: "black",
              "stroke-linecap": "round",
            }),
          ],
        });
      }
      n(67294);
    },
    7857: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ButtonSmallBlue;
          },
        });
      var a = n(85893);
      function ButtonSmallBlue(e) {
        return (0, a.jsx)("svg", {
          width: "15",
          height: "10",
          viewBox: "0 0 15 10",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M2 2L7.5 7.5L13 2",
            stroke: "white",
            "stroke-width": "3",
            "stroke-linecap": "round",
          }),
        });
      }
      n(67294);
    },
    45277: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ETHImage;
          },
        });
      var a = n(85893);
      function ETHImage(e) {
        return (0, a.jsx)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M11.9999 0L4.62988 12.22L11.9999 16.574L19.3699 12.22L11.9999 0ZM11.9999 24L4.62988 13.617L11.9999 18L19.3699 13.617L11.9999 24Z",
            fill: "#2E42A5",
          }),
        });
      }
      n(67294);
    },
    58171: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ETHImage;
          },
        });
      var a = n(85893);
      function ETHImage(e) {
        return (0, a.jsx)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M18.7542 10.518C18.7542 11.143 16.5162 11.666 13.5162 11.798L13.5182 11.799C13.0187 11.8263 12.5184 11.8374 12.0182 11.832C11.2392 11.832 10.6882 11.809 10.4942 11.8C7.48818 11.667 5.24418 11.144 5.24418 10.518C5.24418 9.89203 7.48818 9.36804 10.4942 9.23404V11.278C10.6902 11.293 11.2532 11.326 12.0312 11.326C12.9642 11.326 13.4312 11.286 13.5162 11.279V9.23604C16.5162 9.36904 18.7542 9.89303 18.7542 10.518ZM23.9442 11.064L12.1242 22.39C12.0907 22.4221 12.0461 22.44 11.9997 22.44C11.9533 22.44 11.9087 22.4221 11.8752 22.39L0.0561792 11.064C0.028712 11.0378 0.0102446 11.0036 0.00341917 10.9662C-0.00340624 10.9288 0.00176019 10.8903 0.0181792 10.856L4.39418 1.66404C4.40878 1.63318 4.43186 1.60711 4.46072 1.58887C4.48959 1.57063 4.52304 1.56098 4.55718 1.56104H19.4452C19.4788 1.56154 19.5116 1.57146 19.5399 1.58966C19.5682 1.60787 19.5908 1.63363 19.6052 1.66404L23.9822 10.856C23.9986 10.8903 24.0038 10.9288 23.9969 10.9662C23.9901 11.0036 23.9716 11.0378 23.9442 11.064ZM19.4662 10.66C19.4662 9.85404 16.9142 9.18004 13.5192 9.02304V7.19504H17.7052V4.40504H6.30818V7.19504H10.4932V9.02404C7.09118 9.18004 4.53318 9.85404 4.53318 10.661C4.53318 11.469 7.09118 12.141 10.4932 12.299V18.161H13.5182V12.297C16.9122 12.14 19.4662 11.467 19.4662 10.66Z",
            fill: "#2E42A5",
          }),
        });
      }
      n(67294);
    },
  },
]);
