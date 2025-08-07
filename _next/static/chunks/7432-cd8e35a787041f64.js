"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7432],
  {
    10824: function (e, t, r) {
      r.d(t, {
        v: function () {
          return createPublicClient;
        },
      });
      var n = r(94898),
        a = r(18011),
        s = r(95270),
        i = r(95602),
        o = r(47864),
        c = r(92106),
        u = r(48063),
        l = r(93714),
        h = r(88819);
      async function getEnsResolver(
        e,
        { blockNumber: t, blockTag: r, name: n, universalResolverAddress: a }
      ) {
        let s = a;
        if (!s) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          s = (0, o.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [i] = await (0, l.s)(
          e,
          h.L,
          "readContract"
        )({
          address: s,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, c.NC)((0, u.T)(n))],
          blockNumber: t,
          blockTag: r,
        });
        return i;
      }
      var d = r(16171),
        p = r(78407),
        f = r(14503),
        y = r(87502),
        m = r(61163),
        g = r(74688),
        b = r(35721);
      async function createAccessList(e, t) {
        let {
            account: r = e.account,
            blockNumber: n,
            blockTag: a = "latest",
            blobs: s,
            data: i,
            gas: o,
            gasPrice: u,
            maxFeePerBlobGas: l,
            maxFeePerGas: h,
            maxPriorityFeePerGas: d,
            to: p,
            value: v,
            ...w
          } = t,
          E = r ? (0, f.T)(r) : void 0;
        try {
          (0, b.F)(t);
          let r = n ? (0, c.eC)(n) : void 0,
            f = e.chain?.formatters?.transactionRequest?.format,
            y = f || g.tG,
            R = y({
              ...(0, m.K)(w, { format: f }),
              from: E?.address,
              blobs: s,
              data: i,
              gas: o,
              gasPrice: u,
              maxFeePerBlobGas: l,
              maxFeePerGas: h,
              maxPriorityFeePerGas: d,
              to: p,
              value: v,
            }),
            C = await e.request({
              method: "eth_createAccessList",
              params: [R, r || a],
            });
          return { accessList: C.accessList, gasUsed: BigInt(C.gasUsed) };
        } catch (r) {
          throw (0, y.P)(r, { ...t, account: E, chain: e.chain });
        }
      }
      var v = r(17211);
      async function createBlockFilter(e) {
        let t = (0, v.g)(e, { method: "eth_newBlockFilter" }),
          r = await e.request({ method: "eth_newBlockFilter" });
        return { id: r, request: t(r), type: "block" };
      }
      var w = r(57412),
        E = r(36117);
      let FilterTypeNotSupportedError = class FilterTypeNotSupportedError extends E.G {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      };
      var R = r(11187),
        C = r(91734),
        I = r(96005),
        F = r(45444),
        S = r(80522),
        k = r(40840);
      let T = "/docs/contract/encodeEventTopics";
      function encodeEventTopics(e) {
        let { abi: t, eventName: r, args: n } = e,
          a = t[0];
        if (r) {
          let e = (0, k.mE)({ abi: t, name: r });
          if (!e) throw new w.mv(r, { docsPath: T });
          a = e;
        }
        if ("event" !== a.type) throw new w.mv(void 0, { docsPath: T });
        let s = (0, S.t)(a),
          i = (0, I.n)(s),
          o = [];
        if (n && "inputs" in a) {
          let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(n)
              ? n
              : Object.values(n).length > 0
              ? e?.map((e) => n[e.name]) ?? []
              : [];
          t.length > 0 &&
            (o =
              e?.map((e, r) =>
                Array.isArray(t[r])
                  ? t[r].map((n, a) => encodeArg({ param: e, value: t[r][a] }))
                  : void 0 !== t[r] && null !== t[r]
                  ? encodeArg({ param: e, value: t[r] })
                  : null
              ) ?? []);
        }
        return [i, ...o];
      }
      function encodeArg({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, C.w)((0, R.O0)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new FilterTypeNotSupportedError(e.type);
        return (0, F.E)([e], [t]);
      }
      async function createContractEventFilter(e, t) {
        let {
            address: r,
            abi: n,
            args: a,
            eventName: s,
            fromBlock: i,
            strict: o,
            toBlock: u,
          } = t,
          l = (0, v.g)(e, { method: "eth_newFilter" }),
          h = s ? encodeEventTopics({ abi: n, args: a, eventName: s }) : void 0,
          d = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: r,
                fromBlock: "bigint" == typeof i ? (0, c.eC)(i) : i,
                toBlock: "bigint" == typeof u ? (0, c.eC)(u) : u,
                topics: h,
              },
            ],
          });
        return {
          abi: n,
          args: a,
          eventName: s,
          id: d,
          request: l(d),
          strict: !!o,
          type: "event",
        };
      }
      async function createEventFilter(
        e,
        {
          address: t,
          args: r,
          event: n,
          events: a,
          fromBlock: s,
          strict: i,
          toBlock: o,
        } = {}
      ) {
        let u = a ?? (n ? [n] : void 0),
          l = (0, v.g)(e, { method: "eth_newFilter" }),
          h = [];
        if (u) {
          let e = u.flatMap((e) =>
            encodeEventTopics({ abi: [e], eventName: e.name, args: r })
          );
          (h = [e]), n && (h = h[0]);
        }
        let d = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof s ? (0, c.eC)(s) : s,
              toBlock: "bigint" == typeof o ? (0, c.eC)(o) : o,
              ...(h.length ? { topics: h } : {}),
            },
          ],
        });
        return {
          abi: u,
          args: r,
          eventName: n ? n.name : void 0,
          fromBlock: s,
          id: d,
          request: l(d),
          strict: !!i,
          toBlock: o,
          type: "event",
        };
      }
      var O = r(41727),
        B = r(55629),
        P = r(72365),
        x = r(81841);
      async function estimateContractGas(e, t) {
        let {
            abi: r,
            address: n,
            args: a,
            functionName: s,
            dataSuffix: i,
            ...o
          } = t,
          c = (0, B.R)({ abi: r, args: a, functionName: s });
        try {
          let t = await (0, l.s)(
            e,
            x.Q,
            "estimateGas"
          )({ data: `${c}${i ? i.replace("0x", "") : ""}`, to: n, ...o });
          return t;
        } catch (t) {
          let e = o.account ? (0, f.T)(o.account) : void 0;
          throw (0, P.S)(t, {
            abi: r,
            address: n,
            args: a,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: s,
            sender: e?.address,
          });
        }
      }
      var N = r(43861),
        Q = r(79379),
        D = r(88930);
      async function getBlobBaseFee(e) {
        let t = await e.request({ method: "eth_blobBaseFee" });
        return BigInt(t);
      }
      var $ = r(75016),
        L = r(97712),
        M = r(95946);
      async function getBlockTransactionCount(
        e,
        { blockHash: t, blockNumber: r, blockTag: n = "latest" } = {}
      ) {
        let a;
        let s = void 0 !== r ? (0, c.eC)(r) : void 0;
        return (
          (a = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [s || n],
                },
                { dedupe: !!s }
              )),
          (0, M.ly)(a)
        );
      }
      var _ = r(79524);
      async function getCode(
        e,
        { address: t, blockNumber: r, blockTag: n = "latest" }
      ) {
        let a = void 0 !== r ? (0, c.eC)(r) : void 0,
          s = await e.request(
            { method: "eth_getCode", params: [t, a || n] },
            { dedupe: !!a }
          );
        if ("0x" !== s) return s;
      }
      var q = r(59691),
        A = r(53992);
      async function getLogs(
        e,
        {
          address: t,
          blockHash: r,
          fromBlock: n,
          toBlock: a,
          event: s,
          events: i,
          args: o,
          strict: u,
        } = {}
      ) {
        let l;
        let h = u ?? !1,
          d = i ?? (s ? [s] : void 0),
          p = [];
        if (d) {
          let e = d.flatMap((e) =>
            encodeEventTopics({
              abi: [e],
              eventName: e.name,
              args: i ? void 0 : o,
            })
          );
          (p = [e]), s && (p = p[0]);
        }
        l = r
          ? await e.request({
              method: "eth_getLogs",
              params: [{ address: t, topics: p, blockHash: r }],
            })
          : await e.request({
              method: "eth_getLogs",
              params: [
                {
                  address: t,
                  topics: p,
                  fromBlock: "bigint" == typeof n ? (0, c.eC)(n) : n,
                  toBlock: "bigint" == typeof a ? (0, c.eC)(a) : a,
                },
              ],
            });
        let f = l.map((e) => (0, A.U)(e));
        return d ? (0, q.h)({ abi: d, args: o, logs: f, strict: h }) : f;
      }
      async function getContractEvents(e, t) {
        let {
            abi: r,
            address: n,
            args: a,
            blockHash: s,
            eventName: i,
            fromBlock: o,
            toBlock: c,
            strict: u,
          } = t,
          h = i ? (0, k.mE)({ abi: r, name: i }) : void 0,
          d = h ? void 0 : r.filter((e) => "event" === e.type);
        return (0, l.s)(
          e,
          getLogs,
          "getLogs"
        )({
          address: n,
          args: a,
          blockHash: s,
          event: h,
          events: d,
          fromBlock: o,
          toBlock: c,
          strict: u,
        });
      }
      let Eip712DomainNotFoundError = class Eip712DomainNotFoundError extends E.G {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      };
      async function getEip712Domain(e, t) {
        let { address: r, factory: n, factoryData: a } = t;
        try {
          let [t, s, i, o, c, u, d] = await (0, l.s)(
            e,
            h.L,
            "readContract"
          )({
            abi: j,
            address: r,
            functionName: "eip712Domain",
            factory: n,
            factoryData: a,
          });
          return {
            domain: {
              name: s,
              version: i,
              chainId: Number(o),
              verifyingContract: c,
              salt: u,
            },
            extensions: d,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new Eip712DomainNotFoundError({ address: r });
          throw e;
        }
      }
      let j = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function getFeeHistory(
        e,
        {
          blockCount: t,
          blockNumber: r,
          blockTag: n = "latest",
          rewardPercentiles: a,
        }
      ) {
        let s = r ? (0, c.eC)(r) : void 0,
          i = await e.request(
            { method: "eth_feeHistory", params: [(0, c.eC)(t), s || n, a] },
            { dedupe: !!s }
          );
        return {
          baseFeePerGas: i.baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      var z = r(80478);
      async function getFilterLogs(e, { filter: t }) {
        let r = t.strict ?? !1,
          n = await t.request({ method: "eth_getFilterLogs", params: [t.id] }),
          a = n.map((e) => (0, A.U)(e));
        return t.abi ? (0, q.h)({ abi: t.abi, logs: a, strict: r }) : a;
      }
      var U = r(24453);
      async function getProof(
        e,
        { address: t, blockNumber: r, blockTag: n, storageKeys: a }
      ) {
        let s = void 0 !== r ? (0, c.eC)(r) : void 0,
          i = await e.request({
            method: "eth_getProof",
            params: [t, a, s || (n ?? "latest")],
          });
        return {
          ...i,
          balance: i.balance ? BigInt(i.balance) : void 0,
          nonce: i.nonce ? (0, M.ly)(i.nonce) : void 0,
          storageProof: i.storageProof
            ? i.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function getStorageAt(
        e,
        { address: t, blockNumber: r, blockTag: n = "latest", slot: a }
      ) {
        let s = void 0 !== r ? (0, c.eC)(r) : void 0,
          i = await e.request({
            method: "eth_getStorageAt",
            params: [t, a, s || n],
          });
        return i;
      }
      var G = r(23147);
      async function getTransactionConfirmations(
        e,
        { hash: t, transactionReceipt: r }
      ) {
        let [n, a] = await Promise.all([
            (0, l.s)(e, L.z, "getBlockNumber")({}),
            t ? (0, l.s)(e, G.f, "getTransaction")({ hash: t }) : void 0,
          ]),
          s = r?.blockNumber || a?.blockNumber;
        return s ? n - s + 1n : 0n;
      }
      var H = r(86162),
        K = r(34085),
        W = r(9884);
      let BaseError = class BaseError extends Error {
        constructor(e, t = {}) {
          let r = (() => {
              if (t.cause instanceof BaseError) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            n =
              (t.cause instanceof BaseError && t.cause.docsPath) || t.docsPath,
            a = `https://oxlib.sh${n ?? ""}`,
            s = [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(r || n
                ? ["", r ? `Details: ${r}` : void 0, n ? `See: ${a}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n");
          super(s, t.cause ? { cause: t.cause } : void 0),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = r),
            (this.docs = a),
            (this.docsPath = n),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function walk(e, t) {
            return t?.(e)
              ? e
              : e && "object" == typeof e && "cause" in e && e.cause
              ? walk(e.cause, t)
              : t
              ? null
              : e;
          })(this, e);
        }
      };
      function fromNumber(e, t = {}) {
        let r;
        let { signed: n, size: a } = t,
          s = BigInt(e);
        a
          ? (r = n
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let i = "bigint" == typeof r && n ? -r - 1n : 0;
        if ((r && s > r) || s < i) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new IntegerOutOfRangeError({
            max: r ? `${r}${t}` : void 0,
            min: `${i}${t}`,
            signed: n,
            size: a,
            value: `${e}${t}`,
          });
        }
        let o = (n && s < 0 ? (1n << BigInt(8 * a)) + BigInt(s) : s).toString(
            16
          ),
          c = `0x${o}`;
        return a
          ? (function (e, t = {}) {
              let { dir: r, size: n = 32 } = t;
              if (0 === n) return e;
              let a = e.replace("0x", "");
              if (a.length > 2 * n)
                throw new SizeExceedsPaddingSizeError({
                  size: Math.ceil(a.length / 2),
                  targetSize: n,
                  type: "Hex",
                });
              return `0x${a["right" === r ? "padEnd" : "padStart"](
                2 * n,
                "0"
              )}`;
            })(c, { dir: "left", size: a })
          : c;
      }
      let IntegerOutOfRangeError = class IntegerOutOfRangeError extends BaseError {
        constructor({ max: e, min: t, signed: r, size: n, value: a }) {
          super(
            `Number \`${a}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
              r ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      };
      let SizeExceedsPaddingSizeError = class SizeExceedsPaddingSizeError extends BaseError {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      };
      function toRpc(e) {
        return {
          address: e.address,
          amount: fromNumber(e.amount),
          index: fromNumber(e.index),
          validatorIndex: fromNumber(e.validatorIndex),
        };
      }
      var V = r(97405),
        Z = r(26445),
        X = r(7210),
        J = r(87469),
        Y = r(43310),
        ee = r(50150);
      async function simulate(e, t) {
        let {
          blockNumber: r,
          blockTag: n = "latest",
          blocks: a,
          returnFullTransactions: s,
          traceTransfers: i,
          validation: o,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            var u;
            let r = e.blockOverrides
                ? ((u = e.blockOverrides),
                  {
                    ...("bigint" == typeof u.baseFeePerGas && {
                      baseFeePerGas: fromNumber(u.baseFeePerGas),
                    }),
                    ...("bigint" == typeof u.blobBaseFee && {
                      blobBaseFee: fromNumber(u.blobBaseFee),
                    }),
                    ...("string" == typeof u.feeRecipient && {
                      feeRecipient: u.feeRecipient,
                    }),
                    ...("bigint" == typeof u.gasLimit && {
                      gasLimit: fromNumber(u.gasLimit),
                    }),
                    ...("bigint" == typeof u.number && {
                      number: fromNumber(u.number),
                    }),
                    ...("bigint" == typeof u.prevRandao && {
                      prevRandao: fromNumber(u.prevRandao),
                    }),
                    ...("bigint" == typeof u.time && {
                      time: fromNumber(u.time),
                    }),
                    ...(u.withdrawals && {
                      withdrawals: u.withdrawals.map(toRpc),
                    }),
                  })
                : void 0,
              n = e.calls.map((e) => {
                let t = e.account ? (0, f.T)(e.account) : void 0,
                  r = {
                    ...e,
                    data: e.abi ? (0, B.R)(e) : e.data,
                    from: e.from ?? t?.address,
                  };
                return (0, b.F)(r), (0, g.tG)(r);
              }),
              a = e.stateOverrides ? (0, ee.mF)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: r, calls: n, stateOverrides: a });
          }
          let l = r ? (0, c.eC)(r) : void 0,
            h = await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: i,
                  validation: o,
                },
                l || n,
              ],
            });
          return h.map((e, t) => ({
            ...(0, Y.Z)(e),
            calls: e.calls.map((e, r) => {
              let { abi: n, args: s, functionName: i, to: o } = a[t].calls[r],
                c = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                l = e.logs?.map((e) => A.U(e)),
                h = "0x1" === e.status ? "success" : "failure",
                d = n ? (0, X.k)({ abi: n, data: c, functionName: i }) : null,
                p = (() => {
                  let t;
                  if (
                    "success" !== h &&
                    (e.error?.data === "0x"
                      ? (t = new w.wb())
                      : e.error && (t = new V.VQ(e.error)),
                    t)
                  )
                    return (0, P.S)(t, {
                      abi: n ?? [],
                      address: o,
                      args: s,
                      functionName: i ?? "<unknown>",
                    });
                })();
              return {
                data: c,
                gasUsed: u,
                logs: l,
                status: h,
                ...("success" === h ? { result: d } : { error: p }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, J.k)(t, {});
          if (e instanceof Z.cj) throw t;
          throw e;
        }
      }
      async function simulateContract(e, t) {
        let {
            abi: r,
            address: n,
            args: a,
            dataSuffix: s,
            functionName: i,
            ...o
          } = t,
          c = o.account ? (0, f.T)(o.account) : e.account,
          u = (0, B.R)({ abi: r, args: a, functionName: i });
        try {
          let { data: h } = await (0, l.s)(
              e,
              p.R,
              "call"
            )({
              batch: !1,
              data: `${u}${s ? s.replace("0x", "") : ""}`,
              to: n,
              ...o,
              account: c,
            }),
            d = (0, X.k)({ abi: r, args: a, functionName: i, data: h || "0x" }),
            f = r.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: d,
            request: {
              abi: f,
              address: n,
              args: a,
              dataSuffix: s,
              functionName: i,
              ...o,
              account: c,
            },
          };
        } catch (e) {
          throw (0, P.S)(e, {
            abi: r,
            address: n,
            args: a,
            docsPath: "/docs/contract/simulateContract",
            functionName: i,
            sender: c?.address,
          });
        }
      }
      var et = r(78006),
        er = r(57040),
        en = r(39135);
      function hashMessage(e, t) {
        return (0, C.w)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, c.$G)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, c.ci)(e.raw),
              r = (0, c.$G)(`Ethereum Signed Message:
${(0, en.d)(t)}`);
            return (0, er.zo)([r, t]);
          })(e),
          t
        );
      }
      var ea = r(16693),
        es = r(18590),
        ei = r(30286),
        eo = r(45775),
        ec = r(61228),
        eu = r(15102);
      let el =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var eh = r(3972),
        ed = r(40112),
        ep = r(19970);
      async function verifyHash(e, t) {
        let {
            address: r,
            factory: n,
            factoryData: a,
            hash: s,
            signature: i,
            universalSignatureVerifierAddress: o = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...u
          } = t,
          h = (0, eu.v)(i)
            ? i
            : "object" == typeof i && "r" in i && "s" in i
            ? (function ({ r: e, s: t, to: r = "hex", v: n, yParity: a }) {
                let s = (() => {
                    if (0 === a || 1 === a) return a;
                    if (n && (27n === n || 28n === n || n >= 35n))
                      return n % 2n === 0n ? 1 : 0;
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  i = `0x${new ep.secp256k1.Signature(
                    (0, M.y_)(e),
                    (0, M.y_)(t)
                  ).toCompactHex()}${0 === s ? "1b" : "1c"}`;
                return "hex" === r ? i : (0, R.nr)(i);
              })(i)
            : (0, c.ci)(i),
          d = await (async () =>
            n || a
              ? (0, eh.p5)(h, -32) === el
                ? h
                : (function (e) {
                    let {
                        address: t,
                        data: r,
                        signature: n,
                        to: a = "hex",
                      } = e,
                      s = (0, er.SM)([
                        (0, F.E)(
                          [
                            { type: "address" },
                            { type: "bytes" },
                            { type: "bytes" },
                          ],
                          [t, r, n]
                        ),
                        el,
                      ]);
                    return "hex" === a ? s : (0, R.nr)(s);
                  })({ address: n, data: a, signature: h })
              : h)();
        try {
          let t = o
              ? {
                  to: o,
                  data: (0, B.R)({
                    abi: ea.$o,
                    functionName: "isValidSig",
                    args: [r, s, d],
                  }),
                  ...u,
                }
              : {
                  data: (0, ei.w)({
                    abi: ea.$o,
                    args: [r, s, d],
                    bytecode: es.ST,
                  }),
                  ...u,
                },
            { data: n } = await (0, l.s)(e, p.R, "call")(t);
          return (0, M.XA)(n ?? "0x0");
        } catch (e) {
          try {
            let e = (0, ec.E)(
              (0, eo.K)(r),
              await (0, ed.R)({ hash: s, signature: i })
            );
            if (e) return !0;
          } catch {}
          if (e instanceof V.cg) return !1;
          throw e;
        }
      }
      async function verifyMessage(
        e,
        {
          address: t,
          message: r,
          factory: n,
          factoryData: a,
          signature: s,
          ...i
        }
      ) {
        let o = hashMessage(r);
        return verifyHash(e, {
          address: t,
          factory: n,
          factoryData: a,
          hash: o,
          signature: s,
          ...i,
        });
      }
      var ef = r(26087),
        ey = r(96070);
      let InvalidDomainError = class InvalidDomainError extends E.G {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, ey.P)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      };
      let InvalidPrimaryTypeError = class InvalidPrimaryTypeError extends E.G {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      };
      let InvalidStructTypeError = class InvalidStructTypeError extends E.G {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      };
      var em = r(49321),
        eg = r(24409);
      function hashStruct({ data: e, primaryType: t, types: r }) {
        let n = (function encodeData({ data: e, primaryType: t, types: r }) {
          let n = [{ type: "bytes32" }],
            a = [
              (function ({ primaryType: e, types: t }) {
                let r = (0, c.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let r = "",
                      n = (function findTypeDependencies(
                        { primaryType: e, types: t },
                        r = new Set()
                      ) {
                        let n = e.match(/^\w*/u),
                          a = n?.[0];
                        if (r.has(a) || void 0 === t[a]) return r;
                        for (let e of (r.add(a), t[a]))
                          findTypeDependencies(
                            { primaryType: e.type, types: t },
                            r
                          );
                        return r;
                      })({ primaryType: e, types: t });
                    n.delete(e);
                    let a = [e, ...Array.from(n).sort()];
                    for (let e of a)
                      r += `${e}(${t[e]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return r;
                  })({ primaryType: e, types: t })
                );
                return (0, C.w)(r);
              })({ primaryType: t, types: r }),
            ];
          for (let s of r[t]) {
            let [t, i] = (function encodeField({
              types: e,
              name: t,
              type: r,
              value: n,
            }) {
              if (void 0 !== e[r])
                return [
                  { type: "bytes32" },
                  (0, C.w)(encodeData({ data: n, primaryType: r, types: e })),
                ];
              if ("bytes" === r) {
                let e = n.length % 2 ? "0" : "";
                return (
                  (n = `0x${e + n.slice(2)}`),
                  [{ type: "bytes32" }, (0, C.w)(n)]
                );
              }
              if ("string" === r)
                return [{ type: "bytes32" }, (0, C.w)((0, c.NC)(n))];
              if (r.lastIndexOf("]") === r.length - 1) {
                let a = r.slice(0, r.lastIndexOf("[")),
                  s = n.map((r) =>
                    encodeField({ name: t, type: a, types: e, value: r })
                  );
                return [
                  { type: "bytes32" },
                  (0, C.w)(
                    (0, F.E)(
                      s.map(([e]) => e),
                      s.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: r }, n];
            })({ types: r, name: s.name, type: s.type, value: e[s.name] });
            n.push(t), a.push(i);
          }
          return (0, F.E)(n, a);
        })({ data: e, primaryType: t, types: r });
        return (0, C.w)(n);
      }
      async function verifyTypedData(e, t) {
        let {
            address: r,
            factory: n,
            factoryData: a,
            signature: s,
            message: i,
            primaryType: o,
            types: u,
            domain: l,
            ...h
          } = t,
          d = (function (e) {
            let { domain: t = {}, message: r, primaryType: n } = e,
              a = {
                EIP712Domain: (function ({ domain: e }) {
                  return [
                    "string" == typeof e?.name && {
                      name: "name",
                      type: "string",
                    },
                    e?.version && { name: "version", type: "string" },
                    ("number" == typeof e?.chainId ||
                      "bigint" == typeof e?.chainId) && {
                      name: "chainId",
                      type: "uint256",
                    },
                    e?.verifyingContract && {
                      name: "verifyingContract",
                      type: "address",
                    },
                    e?.salt && { name: "salt", type: "bytes32" },
                  ].filter(Boolean);
                })({ domain: t }),
                ...e.types,
              };
            !(function (e) {
              let { domain: t, message: r, primaryType: n, types: a } = e,
                validateData = (e, t) => {
                  for (let r of e) {
                    let { name: e, type: n } = r,
                      s = t[e],
                      i = n.match(eg.lh);
                    if (i && ("number" == typeof s || "bigint" == typeof s)) {
                      let [e, t, r] = i;
                      (0, c.eC)(s, {
                        signed: "int" === t,
                        size: Number.parseInt(r) / 8,
                      });
                    }
                    if (
                      "address" === n &&
                      "string" == typeof s &&
                      !(0, em.U)(s)
                    )
                      throw new ef.b({ address: s });
                    let o = n.match(eg.eL);
                    if (o) {
                      let [e, t] = o;
                      if (t && (0, en.d)(s) !== Number.parseInt(t))
                        throw new w.KY({
                          expectedSize: Number.parseInt(t),
                          givenSize: (0, en.d)(s),
                        });
                    }
                    let u = a[n];
                    u &&
                      ((function (e) {
                        if (
                          "address" === e ||
                          "bool" === e ||
                          "string" === e ||
                          e.startsWith("bytes") ||
                          e.startsWith("uint") ||
                          e.startsWith("int")
                        )
                          throw new InvalidStructTypeError({ type: e });
                      })(n),
                      validateData(u, s));
                  }
                };
              if (a.EIP712Domain && t) {
                if ("object" != typeof t)
                  throw new InvalidDomainError({ domain: t });
                validateData(a.EIP712Domain, t);
              }
              if ("EIP712Domain" !== n) {
                if (a[n]) validateData(a[n], r);
                else
                  throw new InvalidPrimaryTypeError({
                    primaryType: n,
                    types: a,
                  });
              }
            })({ domain: t, message: r, primaryType: n, types: a });
            let s = ["0x1901"];
            return (
              t &&
                s.push(
                  (function ({ domain: e, types: t }) {
                    return hashStruct({
                      data: e,
                      primaryType: "EIP712Domain",
                      types: t,
                    });
                  })({ domain: t, types: a })
                ),
              "EIP712Domain" !== n &&
                s.push(hashStruct({ data: r, primaryType: n, types: a })),
              (0, C.w)((0, er.zo)(s))
            );
          })({ message: i, primaryType: o, types: u, domain: l });
        return verifyHash(e, {
          address: r,
          factory: n,
          factoryData: a,
          hash: d,
          signature: s,
          ...h,
        });
      }
      var eb = r(51973),
        ev = r(65185),
        ew = r(22514),
        eE = r(23),
        eR = r(39028),
        eC = r(15950),
        eI = r(37075);
      let eF =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        eS =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      async function verifySiweMessage(e, t) {
        let {
            address: r,
            domain: n,
            message: a,
            nonce: s,
            scheme: i,
            signature: o,
            time: c = new Date(),
            ...u
          } = t,
          l = (function (e) {
            let { scheme: t, statement: r, ...n } = e.match(eF)?.groups ?? {},
              {
                chainId: a,
                expirationTime: s,
                issuedAt: i,
                notBefore: o,
                requestId: c,
                ...u
              } = e.match(eS)?.groups ?? {},
              l = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...n,
              ...u,
              ...(a ? { chainId: Number(a) } : {}),
              ...(s ? { expirationTime: new Date(s) } : {}),
              ...(i ? { issuedAt: new Date(i) } : {}),
              ...(o ? { notBefore: new Date(o) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(l ? { resources: l } : {}),
              ...(t ? { scheme: t } : {}),
              ...(r ? { statement: r } : {}),
            };
          })(a);
        if (!l.address) return !1;
        let h = (function (e) {
          let {
            address: t,
            domain: r,
            message: n,
            nonce: a,
            scheme: s,
            time: i = new Date(),
          } = e;
          if (
            (r && n.domain !== r) ||
            (a && n.nonce !== a) ||
            (s && n.scheme !== s) ||
            (n.expirationTime && i >= n.expirationTime) ||
            (n.notBefore && i < n.notBefore)
          )
            return !1;
          try {
            if (!n.address || (t && !(0, ec.E)(n.address, t))) return !1;
          } catch {
            return !1;
          }
          return !0;
        })({ address: r, domain: n, message: l, nonce: s, scheme: i, time: c });
        if (!h) return !1;
        let d = hashMessage(a);
        return verifyHash(e, {
          address: l.address,
          hash: d,
          signature: o,
          ...u,
        });
      }
      var ek = r(45141),
        eT = r(99238);
      function publicActions(e) {
        return {
          call: (t) => (0, p.R)(e, t),
          createAccessList: (t) => createAccessList(e, t),
          createBlockFilter: () => createBlockFilter(e),
          createContractEventFilter: (t) => createContractEventFilter(e, t),
          createEventFilter: (t) => createEventFilter(e, t),
          createPendingTransactionFilter: () => (0, O.W)(e),
          estimateContractGas: (t) => estimateContractGas(e, t),
          estimateGas: (t) => (0, x.Q)(e, t),
          getBalance: (t) => (0, D.s)(e, t),
          getBlobBaseFee: () => getBlobBaseFee(e),
          getBlock: (t) => (0, $.Q)(e, t),
          getBlockNumber: (t) => (0, L.z)(e, t),
          getBlockTransactionCount: (t) => getBlockTransactionCount(e, t),
          getBytecode: (t) => getCode(e, t),
          getChainId: () => (0, _.L)(e),
          getCode: (t) => getCode(e, t),
          getContractEvents: (t) => getContractEvents(e, t),
          getEip712Domain: (t) => getEip712Domain(e, t),
          getEnsAddress: (t) => (0, a.O)(e, t),
          getEnsAvatar: (t) => (0, s.r)(e, t),
          getEnsName: (t) => (0, i.w)(e, t),
          getEnsResolver: (t) => getEnsResolver(e, t),
          getEnsText: (t) => (0, d.g)(e, t),
          getFeeHistory: (t) => getFeeHistory(e, t),
          estimateFeesPerGas: (t) => (0, N.X)(e, t),
          getFilterChanges: (t) => (0, z.K)(e, t),
          getFilterLogs: (t) => getFilterLogs(e, t),
          getGasPrice: () => (0, U.o)(e),
          getLogs: (t) => getLogs(e, t),
          getProof: (t) => getProof(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, Q._)(e, t),
          getStorageAt: (t) => getStorageAt(e, t),
          getTransaction: (t) => (0, G.f)(e, t),
          getTransactionConfirmations: (t) => getTransactionConfirmations(e, t),
          getTransactionCount: (t) => (0, H.K)(e, t),
          getTransactionReceipt: (t) => (0, K.a)(e, t),
          multicall: (t) => (0, W.A)(e, t),
          prepareTransactionRequest: (t) => (0, ek.ZE)(e, t),
          readContract: (t) => (0, h.L)(e, t),
          sendRawTransaction: (t) => (0, eT.p)(e, t),
          simulate: (t) => simulate(e, t),
          simulateContract: (t) => simulateContract(e, t),
          verifyMessage: (t) => verifyMessage(e, t),
          verifySiweMessage: (t) => verifySiweMessage(e, t),
          verifyTypedData: (t) => verifyTypedData(e, t),
          uninstallFilter: (t) => (0, et.W)(e, t),
          waitForTransactionReceipt: (t) => (0, eb.e)(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = "latest",
                emitMissed: r = !1,
                emitOnBegin: n = !1,
                onBlock: a,
                onError: s,
                includeTransactions: i,
                poll: o,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let u, h, d, p;
              let f =
                  void 0 !== o
                    ? o
                    : "webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type),
                y = i ?? !1;
              return f
                ? (() => {
                    let i = (0, ey.P)(["watchBlocks", e.uid, t, r, n, y, c]);
                    return (0, ew.N7)(i, { onBlock: a, onError: s }, (a) =>
                      (0, eE.$)(
                        async () => {
                          try {
                            let n = await (0, l.s)(
                              e,
                              $.Q,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: y });
                            if (n.number && u?.number) {
                              if (n.number === u.number) return;
                              if (n.number - u.number > 1 && r)
                                for (
                                  let t = u?.number + 1n;
                                  t < n.number;
                                  t++
                                ) {
                                  let r = await (0, l.s)(
                                    e,
                                    $.Q,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: y });
                                  a.onBlock(r, u), (u = r);
                                }
                            }
                            (!u?.number ||
                              ("pending" === t && !n?.number) ||
                              (n.number && n.number > u.number)) &&
                              (a.onBlock(n, u), (u = n));
                          } catch (e) {
                            a.onError?.(e);
                          }
                        },
                        { emitOnBegin: n, interval: c }
                      )
                    );
                  })()
                : ((h = !0),
                  (d = !0),
                  (p = () => (h = !1)),
                  (async () => {
                    try {
                      n &&
                        (0, l.s)(
                          e,
                          $.Q,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: y }).then((e) => {
                          h && d && (a(e, void 0), (d = !1));
                        });
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: i } = await r.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!h) return;
                            let r = await (0, l.s)(
                              e,
                              $.Q,
                              "getBlock"
                            )({
                              blockNumber: t.blockNumber,
                              includeTransactions: y,
                            }).catch(() => {});
                            h && (a(r, u), (d = !1), (u = r));
                          },
                          onError(e) {
                            s?.(e);
                          },
                        });
                      (p = i), h || p();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchBlockNumber: (t) => (0, ev.q)(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                  abi: r,
                  address: n,
                  args: a,
                  batch: s = !0,
                  eventName: i,
                  fromBlock: o,
                  onError: c,
                  onLogs: u,
                  poll: h,
                  pollingInterval: d = e.pollingInterval,
                  strict: p,
                } = t,
                f =
                  void 0 !== h
                    ? h
                    : "bigint" == typeof o ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type));
              return f
                ? (() => {
                    let t = p ?? !1,
                      h = (0, ey.P)([
                        "watchContractEvent",
                        n,
                        a,
                        s,
                        e.uid,
                        i,
                        d,
                        t,
                        o,
                      ]);
                    return (0, ew.N7)(h, { onLogs: u, onError: c }, (c) => {
                      let u, h;
                      void 0 !== o && (u = o - 1n);
                      let p = !1,
                        f = (0, eE.$)(
                          async () => {
                            if (!p) {
                              try {
                                h = await (0, l.s)(
                                  e,
                                  createContractEventFilter,
                                  "createContractEventFilter"
                                )({
                                  abi: r,
                                  address: n,
                                  args: a,
                                  eventName: i,
                                  strict: t,
                                  fromBlock: o,
                                });
                              } catch {}
                              p = !0;
                              return;
                            }
                            try {
                              let o;
                              if (h)
                                o = await (0, l.s)(
                                  e,
                                  z.K,
                                  "getFilterChanges"
                                )({ filter: h });
                              else {
                                let s = await (0, l.s)(
                                  e,
                                  L.z,
                                  "getBlockNumber"
                                )({});
                                (o =
                                  u && u < s
                                    ? await (0, l.s)(
                                        e,
                                        getContractEvents,
                                        "getContractEvents"
                                      )({
                                        abi: r,
                                        address: n,
                                        args: a,
                                        eventName: i,
                                        fromBlock: u + 1n,
                                        toBlock: s,
                                        strict: t,
                                      })
                                    : []),
                                  (u = s);
                              }
                              if (0 === o.length) return;
                              if (s) c.onLogs(o);
                              else for (let e of o) c.onLogs([e]);
                            } catch (e) {
                              h && e instanceof eR.yR && (p = !1),
                                c.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: d }
                        );
                      return async () => {
                        h &&
                          (await (0, l.s)(
                            e,
                            et.W,
                            "uninstallFilter"
                          )({ filter: h })),
                          f();
                      };
                    });
                  })()
                : (() => {
                    let t = (0, ey.P)([
                        "watchContractEvent",
                        n,
                        a,
                        s,
                        e.uid,
                        i,
                        d,
                        p ?? !1,
                      ]),
                      o = !0,
                      unsubscribe = () => (o = !1);
                    return (0, ew.N7)(
                      t,
                      { onLogs: u, onError: c },
                      (t) => (
                        (async () => {
                          try {
                            let s = (() => {
                                if ("fallback" === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) => "webSocket" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              c = i
                                ? encodeEventTopics({
                                    abi: r,
                                    eventName: i,
                                    args: a,
                                  })
                                : [],
                              { unsubscribe: u } = await s.subscribe({
                                params: ["logs", { address: n, topics: c }],
                                onData(e) {
                                  if (!o) return;
                                  let n = e.result;
                                  try {
                                    let { eventName: e, args: a } = (0, eC.F)({
                                        abi: r,
                                        data: n.data,
                                        topics: n.topics,
                                        strict: p,
                                      }),
                                      s = (0, A.U)(n, {
                                        args: a,
                                        eventName: e,
                                      });
                                    t.onLogs([s]);
                                  } catch (s) {
                                    let e, r;
                                    if (
                                      s instanceof w.SM ||
                                      s instanceof w.Gy
                                    ) {
                                      if (p) return;
                                      (e = s.abiItem.name),
                                        (r = s.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let a = (0, A.U)(n, {
                                      args: r ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([a]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (unsubscribe = u), o || unsubscribe();
                          } catch (e) {
                            c?.(e);
                          }
                        })(),
                        () => unsubscribe()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: r,
                batch: n = !0,
                event: a,
                events: s,
                fromBlock: i,
                onError: o,
                onLogs: c,
                poll: u,
                pollingInterval: h = e.pollingInterval,
                strict: d,
              }
            ) {
              let p, f;
              let y =
                  void 0 !== u
                    ? u
                    : "bigint" == typeof i ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                m = d ?? !1;
              return y
                ? (() => {
                    let u = (0, ey.P)(["watchEvent", t, r, n, e.uid, a, h, i]);
                    return (0, ew.N7)(u, { onLogs: c, onError: o }, (o) => {
                      let c, u;
                      void 0 !== i && (c = i - 1n);
                      let d = !1,
                        p = (0, eE.$)(
                          async () => {
                            if (!d) {
                              try {
                                u = await (0, l.s)(
                                  e,
                                  createEventFilter,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: r,
                                  event: a,
                                  events: s,
                                  strict: m,
                                  fromBlock: i,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let i;
                              if (u)
                                i = await (0, l.s)(
                                  e,
                                  z.K,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let n = await (0, l.s)(
                                  e,
                                  L.z,
                                  "getBlockNumber"
                                )({});
                                (i =
                                  c && c !== n
                                    ? await (0, l.s)(
                                        e,
                                        getLogs,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: r,
                                        event: a,
                                        events: s,
                                        fromBlock: c + 1n,
                                        toBlock: n,
                                      })
                                    : []),
                                  (c = n);
                              }
                              if (0 === i.length) return;
                              if (n) o.onLogs(i);
                              else for (let e of i) o.onLogs([e]);
                            } catch (e) {
                              u && e instanceof eR.yR && (d = !1),
                                o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: h }
                        );
                      return async () => {
                        u &&
                          (await (0, l.s)(
                            e,
                            et.W,
                            "uninstallFilter"
                          )({ filter: u })),
                          p();
                      };
                    });
                  })()
                : ((p = !0),
                  (f = () => (p = !1)),
                  (async () => {
                    try {
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        i = s ?? (a ? [a] : void 0),
                        u = [];
                      if (i) {
                        let e = i.flatMap((e) =>
                          encodeEventTopics({
                            abi: [e],
                            eventName: e.name,
                            args: r,
                          })
                        );
                        (u = [e]), a && (u = u[0]);
                      }
                      let { unsubscribe: l } = await n.subscribe({
                        params: ["logs", { address: t, topics: u }],
                        onData(e) {
                          if (!p) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: r } = (0, eC.F)({
                                abi: i ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              n = (0, A.U)(t, { args: r, eventName: e });
                            c([n]);
                          } catch (a) {
                            let e, r;
                            if (a instanceof w.SM || a instanceof w.Gy) {
                              if (d) return;
                              (e = a.abiItem.name),
                                (r = a.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let n = (0, A.U)(t, {
                              args: r ? [] : {},
                              eventName: e,
                            });
                            c([n]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (f = l), p || f();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => f());
            })(e, t),
          watchPendingTransactions: (t) => (0, eI.O)(e, t),
        };
      }
      function createPublicClient(e) {
        let { key: t = "public", name: r = "Public Client" } = e,
          a = (0, n.e)({ ...e, key: t, name: r, type: "publicClient" });
        return a.extend(publicActions);
      }
    },
    33305: function (e, t, r) {
      r.d(t, {
        f: function () {
          return parseEther;
        },
      });
      var n = r(84192),
        a = r(48120);
      function parseEther(e, t = "wei") {
        return (0, a.v)(e, n.ez[t]);
      }
    },
    91526: function (e, t, r) {
      let n;
      r.d(t, {
        K: function () {
          return useBalance;
        },
      });
      var a = r(79869);
      function utils_hashFn(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!hasObjectPrototype(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let r = t.prototype;
            return !!(
              hasObjectPrototype(r) && r.hasOwnProperty("isPrototypeOf")
            );
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
        );
      }
      function hasObjectPrototype(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      var s = r(66474),
        i = r(27037),
        o = r(56888),
        c = r(7506),
        u = r(13820),
        l = r(24139),
        h = class extends c.l {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#e = e),
              (this.#t = null),
              (this.#r = (0, u.O)()),
              this.options.experimental_prefetchInRender ||
                this.#r.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #e;
          #n = void 0;
          #a = void 0;
          #s = void 0;
          #i;
          #o;
          #r;
          #t;
          #c;
          #u;
          #l;
          #h;
          #d;
          #p;
          #f = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#n.addObserver(this),
              shouldFetchOnMount(this.#n, this.options)
                ? this.#y()
                : this.updateResult(),
              this.#m());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return shouldFetchOn(
              this.#n,
              this.options,
              this.options.refetchOnReconnect
            );
          }
          shouldFetchOnWindowFocus() {
            return shouldFetchOn(
              this.#n,
              this.options,
              this.options.refetchOnWindowFocus
            );
          }
          destroy() {
            (this.listeners = new Set()),
              this.#g(),
              this.#b(),
              this.#n.removeObserver(this);
          }
          setOptions(e, t) {
            let r = this.options,
              n = this.#n;
            if (
              ((this.options = this.#e.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, l.Nc)(this.options.enabled, this.#n))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#v(),
              this.#n.setOptions(this.options),
              r._defaulted &&
                !(0, l.VS)(this.options, r) &&
                this.#e
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#n,
                    observer: this,
                  });
            let a = this.hasListeners();
            a &&
              shouldFetchOptionally(this.#n, n, this.options, r) &&
              this.#y(),
              this.updateResult(t),
              a &&
                (this.#n !== n ||
                  (0, l.Nc)(this.options.enabled, this.#n) !==
                    (0, l.Nc)(r.enabled, this.#n) ||
                  (0, l.KC)(this.options.staleTime, this.#n) !==
                    (0, l.KC)(r.staleTime, this.#n)) &&
                this.#w();
            let s = this.#E();
            a &&
              (this.#n !== n ||
                (0, l.Nc)(this.options.enabled, this.#n) !==
                  (0, l.Nc)(r.enabled, this.#n) ||
                s !== this.#p) &&
              this.#R(s);
          }
          getOptimisticResult(e) {
            let t = this.#e.getQueryCache().build(this.#e, e),
              r = this.createResult(t, e);
            return (
              (0, l.VS)(this.getCurrentResult(), r) ||
                ((this.#s = r),
                (this.#o = this.options),
                (this.#i = this.#n.state)),
              r
            );
          }
          getCurrentResult() {
            return this.#s;
          }
          trackResult(e, t) {
            let r = {};
            return (
              Object.keys(e).forEach((n) => {
                Object.defineProperty(r, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(n), t?.(n), e[n]),
                });
              }),
              r
            );
          }
          trackProp(e) {
            this.#f.add(e);
          }
          getCurrentQuery() {
            return this.#n;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#e.defaultQueryOptions(e),
              r = this.#e.getQueryCache().build(this.#e, t);
            return r.fetch().then(() => this.createResult(r, t));
          }
          fetch(e) {
            return this.#y({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#s)
            );
          }
          #y(e) {
            this.#v();
            let t = this.#n.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(l.ZT)), t;
          }
          #w() {
            this.#g();
            let e = (0, l.KC)(this.options.staleTime, this.#n);
            if (l.sk || this.#s.isStale || !(0, l.PN)(e)) return;
            let t = (0, l.Kp)(this.#s.dataUpdatedAt, e);
            this.#h = setTimeout(() => {
              this.#s.isStale || this.updateResult();
            }, t + 1);
          }
          #E() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#n)
                : this.options.refetchInterval) ?? !1
            );
          }
          #R(e) {
            this.#b(),
              (this.#p = e),
              !l.sk &&
                !1 !== (0, l.Nc)(this.options.enabled, this.#n) &&
                (0, l.PN)(this.#p) &&
                0 !== this.#p &&
                (this.#d = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    s.j.isFocused()) &&
                    this.#y();
                }, this.#p));
          }
          #m() {
            this.#w(), this.#R(this.#E());
          }
          #g() {
            this.#h && (clearTimeout(this.#h), (this.#h = void 0));
          }
          #b() {
            this.#d && (clearInterval(this.#d), (this.#d = void 0));
          }
          createResult(e, t) {
            let r;
            let n = this.#n,
              a = this.options,
              s = this.#s,
              i = this.#i,
              c = this.#o,
              h = e !== n,
              d = h ? e.state : this.#a,
              { state: p } = e,
              f = { ...p },
              y = !1;
            if (t._optimisticResults) {
              let r = this.hasListeners(),
                s = !r && shouldFetchOnMount(e, t),
                i = r && shouldFetchOptionally(e, n, t, a);
              (s || i) && (f = { ...f, ...(0, o.z)(p.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (f.fetchStatus = "idle");
            }
            let { error: m, errorUpdatedAt: g, status: b } = f;
            if (t.select && void 0 !== f.data) {
              if (s && f.data === i?.data && t.select === this.#c) r = this.#u;
              else
                try {
                  (this.#c = t.select),
                    (r = t.select(f.data)),
                    (r = (0, l.oE)(s?.data, r, t)),
                    (this.#u = r),
                    (this.#t = null);
                } catch (e) {
                  this.#t = e;
                }
            } else r = f.data;
            if (
              void 0 !== t.placeholderData &&
              void 0 === r &&
              "pending" === b
            ) {
              let e;
              if (
                s?.isPlaceholderData &&
                t.placeholderData === c?.placeholderData
              )
                e = s.data;
              else if (
                ((e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#l?.state.data, this.#l)
                    : t.placeholderData),
                t.select && void 0 !== e)
              )
                try {
                  (e = t.select(e)), (this.#t = null);
                } catch (e) {
                  this.#t = e;
                }
              void 0 !== e &&
                ((b = "success"), (r = (0, l.oE)(s?.data, e, t)), (y = !0));
            }
            this.#t &&
              ((m = this.#t), (r = this.#u), (g = Date.now()), (b = "error"));
            let v = "fetching" === f.fetchStatus,
              w = "pending" === b,
              E = "error" === b,
              R = w && v,
              C = void 0 !== r,
              I = {
                status: b,
                fetchStatus: f.fetchStatus,
                isPending: w,
                isSuccess: "success" === b,
                isError: E,
                isInitialLoading: R,
                isLoading: R,
                data: r,
                dataUpdatedAt: f.dataUpdatedAt,
                error: m,
                errorUpdatedAt: g,
                failureCount: f.fetchFailureCount,
                failureReason: f.fetchFailureReason,
                errorUpdateCount: f.errorUpdateCount,
                isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
                isFetchedAfterMount:
                  f.dataUpdateCount > d.dataUpdateCount ||
                  f.errorUpdateCount > d.errorUpdateCount,
                isFetching: v,
                isRefetching: v && !w,
                isLoadingError: E && !C,
                isPaused: "paused" === f.fetchStatus,
                isPlaceholderData: y,
                isRefetchError: E && C,
                isStale: isStale(e, t),
                refetch: this.refetch,
                promise: this.#r,
              };
            if (this.options.experimental_prefetchInRender) {
              let finalizeThenableIfPossible = (e) => {
                  "error" === I.status
                    ? e.reject(I.error)
                    : void 0 !== I.data && e.resolve(I.data);
                },
                recreateThenable = () => {
                  let e = (this.#r = I.promise = (0, u.O)());
                  finalizeThenableIfPossible(e);
                },
                t = this.#r;
              switch (t.status) {
                case "pending":
                  e.queryHash === n.queryHash && finalizeThenableIfPossible(t);
                  break;
                case "fulfilled":
                  ("error" === I.status || I.data !== t.value) &&
                    recreateThenable();
                  break;
                case "rejected":
                  ("error" !== I.status || I.error !== t.reason) &&
                    recreateThenable();
              }
            }
            return I;
          }
          updateResult(e) {
            let t = this.#s,
              r = this.createResult(this.#n, this.options);
            if (
              ((this.#i = this.#n.state),
              (this.#o = this.options),
              void 0 !== this.#i.data && (this.#l = this.#n),
              (0, l.VS)(r, t))
            )
              return;
            this.#s = r;
            let n = {};
            e?.listeners !== !1 &&
              (() => {
                if (!t) return !0;
                let { notifyOnChangeProps: e } = this.options,
                  r = "function" == typeof e ? e() : e;
                if ("all" === r || (!r && !this.#f.size)) return !0;
                let n = new Set(r ?? this.#f);
                return (
                  this.options.throwOnError && n.add("error"),
                  Object.keys(this.#s).some((e) => {
                    let r = this.#s[e] !== t[e];
                    return r && n.has(e);
                  })
                );
              })() &&
              (n.listeners = !0),
              this.#C({ ...n, ...e });
          }
          #v() {
            let e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#n) return;
            let t = this.#n;
            (this.#n = e),
              (this.#a = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#m();
          }
          #C(e) {
            i.V.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#s);
                }),
                this.#e
                  .getQueryCache()
                  .notify({ query: this.#n, type: "observerResultsUpdated" });
            });
          }
        };
      function shouldFetchOnMount(e, t) {
        return (
          (!1 !== (0, l.Nc)(t.enabled, e) &&
            void 0 === e.state.data &&
            !("error" === e.state.status && !1 === t.retryOnMount)) ||
          (void 0 !== e.state.data && shouldFetchOn(e, t, t.refetchOnMount))
        );
      }
      function shouldFetchOn(e, t, r) {
        if (!1 !== (0, l.Nc)(t.enabled, e)) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && isStale(e, t));
        }
        return !1;
      }
      function shouldFetchOptionally(e, t, r, n) {
        return (
          (e !== t || !1 === (0, l.Nc)(n.enabled, e)) &&
          (!r.suspense || "error" !== e.state.status) &&
          isStale(e, r)
        );
      }
      function isStale(e, t) {
        return (
          !1 !== (0, l.Nc)(t.enabled, e) &&
          e.isStaleByTime((0, l.KC)(t.staleTime, e))
        );
      }
      var d = r(67294),
        p = r(30202);
      r(85893);
      var f = d.createContext(
          ((n = !1),
          {
            clearReset: () => {
              n = !1;
            },
            reset: () => {
              n = !0;
            },
            isReset: () => n,
          })
        ),
        useQueryErrorResetBoundary = () => d.useContext(f);
      function noop() {}
      var ensurePreventErrorBoundaryRetry = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        useClearResetErrorBoundary = (e) => {
          d.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        getHasError = ({
          result: e,
          errorResetBoundary: t,
          throwOnError: r,
          query: n,
        }) => {
          var a;
          return (
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            n &&
            ((a = [e.error, n]), "function" == typeof r ? r(...a) : !!r)
          );
        },
        y = d.createContext(!1),
        useIsRestoring = () => d.useContext(y);
      y.Provider;
      var ensureSuspenseTimers = (e) => {
          e.suspense &&
            (void 0 === e.staleTime && (e.staleTime = 1e3),
            "number" == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        willFetch = (e, t) => e.isLoading && e.isFetching && !t,
        shouldSuspend = (e, t) => e?.suspense && t.isPending,
        fetchOptimistic = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
      function getChainId(e) {
        return e.state.chainId;
      }
      var m = r(37122);
      function useBalance(e = {}) {
        let { address: t, query: r = {} } = e,
          n = (0, m.Z)(e),
          s = (function (e = {}) {
            let t = (0, m.Z)(e);
            return (0, d.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: r } = t;
                  return e.subscribe((e) => e.chainId, r);
                })(t, { onChange: e }),
              () => getChainId(t),
              () => getChainId(t)
            );
          })({ config: n }),
          o = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: r, scopeKey: n, ...s } = t[1];
                if (!r) throw Error("address is required");
                let i = await (0, a.s)(e, { ...s, address: r });
                return i ?? null;
              },
              queryKey: (function (e = {}) {
                return [
                  "balance",
                  (function (e) {
                    let {
                      _defaulted: t,
                      behavior: r,
                      gcTime: n,
                      initialData: a,
                      initialDataUpdatedAt: s,
                      maxPages: i,
                      meta: o,
                      networkMode: c,
                      queryFn: u,
                      queryHash: l,
                      queryKey: h,
                      queryKeyHashFn: d,
                      retry: p,
                      retryDelay: f,
                      structuralSharing: y,
                      getPreviousPageParam: m,
                      getNextPageParam: g,
                      initialPageParam: b,
                      _optimisticResults: v,
                      enabled: w,
                      notifyOnChangeProps: E,
                      placeholderData: R,
                      refetchInterval: C,
                      refetchIntervalInBackground: I,
                      refetchOnMount: F,
                      refetchOnReconnect: S,
                      refetchOnWindowFocus: k,
                      retryOnMount: T,
                      select: O,
                      staleTime: B,
                      suspense: P,
                      throwOnError: x,
                      config: N,
                      connector: Q,
                      query: D,
                      ...$
                    } = e;
                    return $;
                  })(e),
                ];
              })(t),
            };
          })(n, { ...e, chainId: e.chainId ?? s }),
          c = !!(t && (r.enabled ?? !0));
        return (function (e) {
          let t = (function (e, t, r) {
            let n = (0, p.NL)(r),
              a = useIsRestoring(),
              s = useQueryErrorResetBoundary(),
              o = n.defaultQueryOptions(e);
            n.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
              (o._optimisticResults = a ? "isRestoring" : "optimistic"),
              ensureSuspenseTimers(o),
              ensurePreventErrorBoundaryRetry(o, s),
              useClearResetErrorBoundary(s);
            let c = !n.getQueryCache().get(o.queryHash),
              [u] = d.useState(() => new t(n, o)),
              h = u.getOptimisticResult(o);
            if (
              (d.useSyncExternalStore(
                d.useCallback(
                  (e) => {
                    let t = a ? noop : u.subscribe(i.V.batchCalls(e));
                    return u.updateResult(), t;
                  },
                  [u, a]
                ),
                () => u.getCurrentResult(),
                () => u.getCurrentResult()
              ),
              d.useEffect(() => {
                u.setOptions(o, { listeners: !1 });
              }, [o, u]),
              shouldSuspend(o, h))
            )
              throw fetchOptimistic(o, u, s);
            if (
              getHasError({
                result: h,
                errorResetBoundary: s,
                throwOnError: o.throwOnError,
                query: n.getQueryCache().get(o.queryHash),
              })
            )
              throw h.error;
            if (
              (n.getDefaultOptions().queries?._experimental_afterQuery?.(o, h),
              o.experimental_prefetchInRender && !l.sk && willFetch(h, a))
            ) {
              let e = c
                ? fetchOptimistic(o, u, s)
                : n.getQueryCache().get(o.queryHash)?.promise;
              e?.catch(noop).finally(() => {
                u.updateResult();
              });
            }
            return o.notifyOnChangeProps ? h : u.trackResult(h);
          })({ ...e, queryKeyHashFn: utils_hashFn }, h, void 0);
          return (t.queryKey = e.queryKey), t;
        })({ ...r, ...o, enabled: c });
      }
    },
  },
]);
