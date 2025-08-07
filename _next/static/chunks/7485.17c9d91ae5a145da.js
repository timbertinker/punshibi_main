(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7485],
  {
    3867: function (e, t) {
      "use strict";
      function anumber(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function abytes(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function ahash(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        anumber(e.outputLen), anumber(e.blockLen);
      }
      function aexists(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function aoutput(e, t) {
        abytes(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.anumber = anumber),
        (t.number = anumber),
        (t.abytes = abytes),
        (t.bytes = abytes),
        (t.ahash = ahash),
        (t.aexists = aexists),
        (t.aoutput = aoutput),
        (t.default = {
          number: anumber,
          bytes: abytes,
          hash: ahash,
          exists: aexists,
          output: aoutput,
        });
    },
    21171: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
            void 0),
        (t.fromBig = fromBig),
        (t.split = split),
        (t.add = add);
      let n = BigInt(4294967296 - 1),
        i = BigInt(32);
      function fromBig(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> i) & n) }
          : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) };
      }
      function split(e, t = !1) {
        let n = new Uint32Array(e.length),
          i = new Uint32Array(e.length);
        for (let s = 0; s < e.length; s++) {
          let { h: a, l: o } = fromBig(e[s], t);
          [n[s], i[s]] = [a, o];
        }
        return [n, i];
      }
      let toBig = (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0);
      t.toBig = toBig;
      let shrSH = (e, t, n) => e >>> n;
      t.shrSH = shrSH;
      let shrSL = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = shrSL;
      let rotrSH = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = rotrSH;
      let rotrSL = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = rotrSL;
      let rotrBH = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = rotrBH;
      let rotrBL = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = rotrBL;
      let rotr32H = (e, t) => t;
      t.rotr32H = rotr32H;
      let rotr32L = (e, t) => e;
      t.rotr32L = rotr32L;
      let rotlSH = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = rotlSH;
      let rotlSL = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = rotlSL;
      let rotlBH = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = rotlBH;
      let rotlBL = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function add(e, t, n, i) {
        let s = (t >>> 0) + (i >>> 0);
        return { h: (e + n + ((s / 4294967296) | 0)) | 0, l: 0 | s };
      }
      t.rotlBL = rotlBL;
      let add3L = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = add3L;
      let add3H = (e, t, n, i) => (t + n + i + ((e / 4294967296) | 0)) | 0;
      t.add3H = add3H;
      let add4L = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0);
      t.add4L = add4L;
      let add4H = (e, t, n, i, s) =>
        (t + n + i + s + ((e / 4294967296) | 0)) | 0;
      t.add4H = add4H;
      let add5L = (e, t, n, i, s) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (s >>> 0);
      t.add5L = add5L;
      let add5H = (e, t, n, i, s, a) =>
        (t + n + i + s + a + ((e / 4294967296) | 0)) | 0;
      (t.add5H = add5H),
        (t.default = {
          fromBig,
          split,
          toBig,
          shrSH,
          shrSL,
          rotrSH,
          rotrSL,
          rotrBH,
          rotrBL,
          rotr32H,
          rotr32L,
          rotlSH,
          rotlSL,
          rotlBH,
          rotlBL,
          add,
          add3L,
          add3H,
          add4L,
          add4H,
          add5H,
          add5L,
        });
    },
    9889: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    49361: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shake256 =
          t.shake128 =
          t.keccak_512 =
          t.keccak_384 =
          t.keccak_256 =
          t.keccak_224 =
          t.sha3_512 =
          t.sha3_384 =
          t.sha3_256 =
          t.sha3_224 =
          t.Keccak =
            void 0),
        (t.keccakP = keccakP);
      let i = n(3867),
        s = n(21171),
        a = n(57140),
        o = [],
        l = [],
        c = [],
        u = BigInt(0),
        v = BigInt(1),
        L = BigInt(2),
        R = BigInt(7),
        U = BigInt(256),
        W = BigInt(113);
      for (let e = 0, t = v, n = 1, i = 0; e < 24; e++) {
        ([n, i] = [i, (2 * n + 3 * i) % 5]),
          o.push(2 * (5 * i + n)),
          l.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = u;
        for (let e = 0; e < 7; e++)
          (t = ((t << v) ^ ((t >> R) * W)) % U) & L &&
            (s ^= v << ((v << BigInt(e)) - v));
        c.push(s);
      }
      let [K, J] = (0, s.split)(c, !0),
        rotlH = (e, t, n) =>
          n > 32 ? (0, s.rotlBH)(e, t, n) : (0, s.rotlSH)(e, t, n),
        rotlL = (e, t, n) =>
          n > 32 ? (0, s.rotlBL)(e, t, n) : (0, s.rotlSL)(e, t, n);
      function keccakP(e, t = 24) {
        let n = new Uint32Array(10);
        for (let i = 24 - t; i < 24; i++) {
          for (let t = 0; t < 10; t++)
            n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
          for (let t = 0; t < 10; t += 2) {
            let i = (t + 8) % 10,
              s = (t + 2) % 10,
              a = n[s],
              o = n[s + 1],
              l = rotlH(a, o, 1) ^ n[i],
              c = rotlL(a, o, 1) ^ n[i + 1];
            for (let n = 0; n < 50; n += 10)
              (e[t + n] ^= l), (e[t + n + 1] ^= c);
          }
          let t = e[2],
            s = e[3];
          for (let n = 0; n < 24; n++) {
            let i = l[n],
              a = rotlH(t, s, i),
              c = rotlL(t, s, i),
              u = o[n];
            (t = e[u]), (s = e[u + 1]), (e[u] = a), (e[u + 1] = c);
          }
          for (let t = 0; t < 50; t += 10) {
            for (let i = 0; i < 10; i++) n[i] = e[t + i];
            for (let i = 0; i < 10; i++)
              e[t + i] ^= ~n[(i + 2) % 10] & n[(i + 4) % 10];
          }
          (e[0] ^= K[i]), (e[1] ^= J[i]);
        }
        n.fill(0);
      }
      let Keccak = class Keccak extends a.Hash {
        constructor(e, t, n, s = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = s),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, i.anumber)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, a.u32)(this.state));
        }
        keccak() {
          a.isLE || (0, a.byteSwap32)(this.state32),
            keccakP(this.state32, this.rounds),
            a.isLE || (0, a.byteSwap32)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, i.aexists)(this);
          let { blockLen: t, state: n } = this;
          e = (0, a.toBytes)(e);
          let s = e.length;
          for (let i = 0; i < s; ) {
            let a = Math.min(t - this.pos, s - i);
            for (let t = 0; t < a; t++) n[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: i } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, i.aexists)(this, !1), (0, i.abytes)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let i = 0, s = e.length; i < s; ) {
            this.posOut >= n && this.keccak();
            let a = Math.min(n - this.posOut, s - i);
            e.set(t.subarray(this.posOut, this.posOut + a), i),
              (this.posOut += a),
              (i += a);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, i.anumber)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, i.aoutput)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: i,
            rounds: s,
            enableXOF: a,
          } = this;
          return (
            e || (e = new Keccak(t, n, i, a, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = n),
            (e.outputLen = i),
            (e.enableXOF = a),
            (e.destroyed = this.destroyed),
            e
          );
        }
      };
      t.Keccak = Keccak;
      let gen = (e, t, n) => (0, a.wrapConstructor)(() => new Keccak(t, e, n));
      (t.sha3_224 = gen(6, 144, 28)),
        (t.sha3_256 = gen(6, 136, 32)),
        (t.sha3_384 = gen(6, 104, 48)),
        (t.sha3_512 = gen(6, 72, 64)),
        (t.keccak_224 = gen(1, 144, 28)),
        (t.keccak_256 = gen(1, 136, 32)),
        (t.keccak_384 = gen(1, 104, 48)),
        (t.keccak_512 = gen(1, 72, 64));
      let genShake = (e, t, n) =>
        (0, a.wrapXOFConstructorWithOpts)(
          (i = {}) => new Keccak(t, e, void 0 === i.dkLen ? n : i.dkLen, !0)
        );
      (t.shake128 = genShake(31, 168, 16)),
        (t.shake256 = genShake(31, 136, 32));
    },
    57140: function (e, t, n) {
      "use strict";
      /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
        t,
        "__esModule",
        { value: !0 }
      ),
        (t.Hash =
          t.nextTick =
          t.byteSwapIfBE =
          t.byteSwap =
          t.isLE =
          t.rotl =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
            void 0),
        (t.isBytes = function (e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }),
        (t.byteSwap32 = function (e) {
          for (let n = 0; n < e.length; n++) e[n] = (0, t.byteSwap)(e[n]);
        }),
        (t.bytesToHex = function (e) {
          (0, s.abytes)(e);
          let t = "";
          for (let n = 0; n < e.length; n++) t += a[e[n]];
          return t;
        }),
        (t.hexToBytes = function (e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          let t = e.length,
            n = t / 2;
          if (t % 2)
            throw Error("hex string expected, got unpadded hex of length " + t);
          let i = new Uint8Array(n);
          for (let t = 0, s = 0; t < n; t++, s += 2) {
            let n = asciiToBase16(e.charCodeAt(s)),
              a = asciiToBase16(e.charCodeAt(s + 1));
            if (void 0 === n || void 0 === a) {
              let t = e[s] + e[s + 1];
              throw Error(
                'hex string expected, got non-hex character "' +
                  t +
                  '" at index ' +
                  s
              );
            }
            i[t] = 16 * n + a;
          }
          return i;
        }),
        (t.asyncLoop = asyncLoop),
        (t.utf8ToBytes = utf8ToBytes),
        (t.toBytes = toBytes),
        (t.concatBytes = function (...e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            (0, s.abytes)(i), (t += i.length);
          }
          let n = new Uint8Array(t);
          for (let t = 0, i = 0; t < e.length; t++) {
            let s = e[t];
            n.set(s, i), (i += s.length);
          }
          return n;
        }),
        (t.checkOpts = function (e, t) {
          if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
            throw Error("Options should be object or undefined");
          let n = Object.assign(e, t);
          return n;
        }),
        (t.wrapConstructor = function (e) {
          let hashC = (t) => e().update(toBytes(t)).digest(),
            t = e();
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = () => e()),
            hashC
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          let hashC = (t, n) => e(n).update(toBytes(t)).digest(),
            t = e({});
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = (t) => e(t)),
            hashC
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          let hashC = (t, n) => e(n).update(toBytes(t)).digest(),
            t = e({});
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = (t) => e(t)),
            hashC
          );
        }),
        (t.randomBytes = function (e = 32) {
          if (i.crypto && "function" == typeof i.crypto.getRandomValues)
            return i.crypto.getRandomValues(new Uint8Array(e));
          if (i.crypto && "function" == typeof i.crypto.randomBytes)
            return i.crypto.randomBytes(e);
          throw Error("crypto.getRandomValues must be defined");
        });
      let i = n(9889),
        s = n(3867);
      (t.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
        (t.u32 = (e) =>
          new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          )),
        (t.createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (t.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
        (t.rotl = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0)),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        (t.byteSwap = (e) =>
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => (0, t.byteSwap)(e));
      let a = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        ),
        o = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function asciiToBase16(e) {
        return e >= o._0 && e <= o._9
          ? e - o._0
          : e >= o.A && e <= o.F
          ? e - (o.A - 10)
          : e >= o.a && e <= o.f
          ? e - (o.a - 10)
          : void 0;
      }
      let nextTick = async () => {};
      async function asyncLoop(e, n, i) {
        let s = Date.now();
        for (let a = 0; a < e; a++) {
          i(a);
          let e = Date.now() - s;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (s += e));
        }
      }
      function utf8ToBytes(e) {
        if ("string" != typeof e)
          throw Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function toBytes(e) {
        return (
          "string" == typeof e && (e = utf8ToBytes(e)), (0, s.abytes)(e), e
        );
      }
      (t.nextTick = nextTick),
        (t.Hash = class {
          clone() {
            return this._cloneInto();
          }
        });
    },
    6400: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Component: function () {
            return k;
          },
          Fragment: function () {
            return b;
          },
          cloneElement: function () {
            return D;
          },
          createContext: function () {
            return G;
          },
          createElement: function () {
            return _;
          },
          createRef: function () {
            return m;
          },
          h: function () {
            return _;
          },
          hydrate: function () {
            return B;
          },
          isValidElement: function () {
            return o;
          },
          options: function () {
            return s;
          },
          render: function () {
            return q;
          },
          toChildArray: function () {
            return function H(e, t) {
              return (
                (t = t || []),
                null == e ||
                  "boolean" == typeof e ||
                  (Y(e)
                    ? e.some(function (e) {
                        H(e, t);
                      })
                    : t.push(e)),
                t
              );
            };
          },
        });
      var i,
        s,
        a,
        o,
        l,
        c,
        u,
        v,
        L,
        R,
        U,
        W,
        K = {},
        J = [],
        $ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        Y = Array.isArray;
      function d(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function w(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function _(e, t, n) {
        var s,
          a,
          o,
          l = {};
        for (o in t)
          "key" == o ? (s = t[o]) : "ref" == o ? (a = t[o]) : (l[o] = t[o]);
        if (
          (arguments.length > 2 &&
            (l.children = arguments.length > 3 ? i.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (o in e.defaultProps)
            void 0 === l[o] && (l[o] = e.defaultProps[o]);
        return g(e, l, s, a, null);
      }
      function g(e, t, n, i, o) {
        var l = {
          type: e,
          props: t,
          key: n,
          ref: i,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == o ? ++a : o,
          __i: -1,
          __u: 0,
        };
        return null == o && null != s.vnode && s.vnode(l), l;
      }
      function m() {
        return { current: null };
      }
      function b(e) {
        return e.children;
      }
      function k(e, t) {
        (this.props = e), (this.context = t);
      }
      function x(e, t) {
        if (null == t) return e.__ ? x(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? x(e) : null;
      }
      function S(e) {
        ((!e.__d && (e.__d = !0) && l.push(e) && !M.__r++) ||
          c !== s.debounceRendering) &&
          ((c = s.debounceRendering) || u)(M);
      }
      function M() {
        var e, t, n, i, a, o, c, u;
        for (l.sort(v); (e = l.shift()); )
          e.__d &&
            ((t = l.length),
            (i = void 0),
            (o = (a = (n = e).__v).__e),
            (c = []),
            (u = []),
            n.__P &&
              (((i = d({}, a)).__v = a.__v + 1),
              s.vnode && s.vnode(i),
              O(
                n.__P,
                i,
                a,
                n.__n,
                n.__P.namespaceURI,
                32 & a.__u ? [o] : null,
                c,
                null == o ? x(a) : o,
                !!(32 & a.__u),
                u
              ),
              (i.__v = a.__v),
              (i.__.__k[i.__i] = i),
              j(c, i, u),
              i.__e != o &&
                (function C(e) {
                  var t, n;
                  if (null != (e = e.__) && null != e.__c) {
                    for (
                      e.__e = e.__c.base = null, t = 0;
                      t < e.__k.length;
                      t++
                    )
                      if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break;
                      }
                    return C(e);
                  }
                })(i)),
            l.length > t && l.sort(v));
        M.__r = 0;
      }
      function P(e, t, n, i, a, o, l, c, u, v, L) {
        var R,
          U,
          W,
          $,
          Q,
          Z = (i && i.__k) || J,
          X = t.length;
        for (
          n.__d = u,
            (function (e, t, n) {
              var i,
                a,
                o,
                l,
                c,
                u = t.length,
                v = n.length,
                L = v,
                R = 0;
              for (e.__k = [], i = 0; i < u; i++)
                null != (a = t[i]) &&
                "boolean" != typeof a &&
                "function" != typeof a
                  ? ((l = i + R),
                    ((a = e.__k[i] =
                      "string" == typeof a ||
                      "number" == typeof a ||
                      "bigint" == typeof a ||
                      a.constructor == String
                        ? g(null, a, null, null, null)
                        : Y(a)
                        ? g(b, { children: a }, null, null, null)
                        : void 0 === a.constructor && a.__b > 0
                        ? g(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                        : a).__ = e),
                    (a.__b = e.__b + 1),
                    (o = null),
                    -1 !==
                      (c = a.__i =
                        (function (e, t, n, i) {
                          var s = e.key,
                            a = e.type,
                            o = n - 1,
                            l = n + 1,
                            c = t[n];
                          if (
                            null === c ||
                            (c &&
                              s == c.key &&
                              a === c.type &&
                              0 == (131072 & c.__u))
                          )
                            return n;
                          if (
                            ("function" != typeof a || a === b || s) &&
                            i > (null != c && 0 == (131072 & c.__u) ? 1 : 0)
                          )
                            for (; o >= 0 || l < t.length; ) {
                              if (o >= 0) {
                                if (
                                  (c = t[o]) &&
                                  0 == (131072 & c.__u) &&
                                  s == c.key &&
                                  a === c.type
                                )
                                  return o;
                                o--;
                              }
                              if (l < t.length) {
                                if (
                                  (c = t[l]) &&
                                  0 == (131072 & c.__u) &&
                                  s == c.key &&
                                  a === c.type
                                )
                                  return l;
                                l++;
                              }
                            }
                          return -1;
                        })(a, n, l, L)) &&
                      (L--, (o = n[c]) && (o.__u |= 131072)),
                    null == o || null === o.__v
                      ? (-1 == c && R--,
                        "function" != typeof a.type && (a.__u |= 65536))
                      : c !== l &&
                        (c == l - 1
                          ? R--
                          : c == l + 1
                          ? R++
                          : (c > l ? R-- : R++, (a.__u |= 65536))))
                  : (a = e.__k[i] = null);
              if (L)
                for (i = 0; i < v; i++)
                  null != (o = n[i]) &&
                    0 == (131072 & o.__u) &&
                    (o.__e == e.__d && (e.__d = x(o)),
                    (function N(e, t, n) {
                      var i, a;
                      if (
                        (s.unmount && s.unmount(e),
                        (i = e.ref) &&
                          ((i.current && i.current !== e.__e) || E(i, null, t)),
                        null != (i = e.__c))
                      ) {
                        if (i.componentWillUnmount)
                          try {
                            i.componentWillUnmount();
                          } catch (e) {
                            s.__e(e, t);
                          }
                        i.base = i.__P = null;
                      }
                      if ((i = e.__k))
                        for (a = 0; a < i.length; a++)
                          i[a] && N(i[a], t, n || "function" != typeof e.type);
                      n || w(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
                    })(o, o));
            })(n, t, Z),
            u = n.__d,
            R = 0;
          R < X;
          R++
        )
          null != (W = n.__k[R]) &&
            ((U = -1 === W.__i ? K : Z[W.__i] || K),
            (W.__i = R),
            O(e, W, U, a, o, l, c, u, v, L),
            ($ = W.__e),
            W.ref &&
              U.ref != W.ref &&
              (U.ref && E(U.ref, null, W), L.push(W.ref, W.__c || $, W)),
            null == Q && null != $ && (Q = $),
            65536 & W.__u || U.__k === W.__k
              ? (u = (function I(e, t, n) {
                  var i, s;
                  if ("function" == typeof e.type) {
                    for (i = e.__k, s = 0; i && s < i.length; s++)
                      i[s] && ((i[s].__ = e), (t = I(i[s], t, n)));
                    return t;
                  }
                  e.__e != t &&
                    (t && e.type && !n.contains(t) && (t = x(e)),
                    n.insertBefore(e.__e, t || null),
                    (t = e.__e));
                  do t = t && t.nextSibling;
                  while (null != t && 8 === t.nodeType);
                  return t;
                })(W, u, e))
              : "function" == typeof W.type && void 0 !== W.__d
              ? (u = W.__d)
              : $ && (u = $.nextSibling),
            (W.__d = void 0),
            (W.__u &= -196609));
        (n.__d = u), (n.__e = Q);
      }
      function T(e, t, n) {
        "-" === t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || $.test(t)
                ? n
                : n + "px");
      }
      function A(e, t, n, i, s) {
        var a;
        e: if ("style" === t) {
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof i && (e.style.cssText = i = ""), i))
              for (t in i) (n && t in n) || T(e.style, t, "");
            if (n) for (t in n) (i && n[t] === i[t]) || T(e.style, t, n[t]);
          }
        } else if ("o" === t[0] && "n" === t[1])
          (a = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + a] = n),
            n
              ? i
                ? (n.u = i.u)
                : ((n.u = L), e.addEventListener(t, a ? U : R, a))
              : e.removeEventListener(t, a ? U : R, a);
        else {
          if ("http://www.w3.org/2000/svg" == s)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function F(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = L++;
            else if (t.t < n.u) return;
            return (
              s.event && (t = s.event(t)),
              "handleEvent" in n ? n.handleEvent(t) : n(t)
            );
          }
        };
      }
      function O(e, t, n, a, o, l, c, u, v, L) {
        var R,
          U,
          W,
          J,
          $,
          Q,
          Z,
          X,
          ee,
          et,
          en,
          er,
          ei,
          es,
          ea,
          eo,
          el = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((v = !!(32 & n.__u)), (l = [(u = t.__e = n.__e)])),
          (R = s.__b) && R(t);
        e: if ("function" == typeof el)
          try {
            if (
              ((X = t.props),
              (ee = "prototype" in el && el.prototype.render),
              (et = (R = el.contextType) && a[R.__c]),
              (en = R ? (et ? et.props.value : R.__) : a),
              n.__c
                ? (Z = (U = t.__c = n.__c).__ = U.__E)
                : (ee
                    ? (t.__c = U = new el(X, en))
                    : ((t.__c = U = new k(X, en)),
                      (U.constructor = el),
                      (U.render = V)),
                  et && et.sub(U),
                  (U.props = X),
                  U.state || (U.state = {}),
                  (U.context = en),
                  (U.__n = a),
                  (W = U.__d = !0),
                  (U.__h = []),
                  (U._sb = [])),
              ee && null == U.__s && (U.__s = U.state),
              ee &&
                null != el.getDerivedStateFromProps &&
                (U.__s == U.state && (U.__s = d({}, U.__s)),
                d(U.__s, el.getDerivedStateFromProps(X, U.__s))),
              (J = U.props),
              ($ = U.state),
              (U.__v = t),
              W)
            )
              ee &&
                null == el.getDerivedStateFromProps &&
                null != U.componentWillMount &&
                U.componentWillMount(),
                ee &&
                  null != U.componentDidMount &&
                  U.__h.push(U.componentDidMount);
            else {
              if (
                (ee &&
                  null == el.getDerivedStateFromProps &&
                  X !== J &&
                  null != U.componentWillReceiveProps &&
                  U.componentWillReceiveProps(X, en),
                !U.__e &&
                  ((null != U.shouldComponentUpdate &&
                    !1 === U.shouldComponentUpdate(X, U.__s, en)) ||
                    t.__v === n.__v))
              ) {
                for (
                  t.__v !== n.__v &&
                    ((U.props = X), (U.state = U.__s), (U.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    er = 0;
                  er < U._sb.length;
                  er++
                )
                  U.__h.push(U._sb[er]);
                (U._sb = []), U.__h.length && c.push(U);
                break e;
              }
              null != U.componentWillUpdate &&
                U.componentWillUpdate(X, U.__s, en),
                ee &&
                  null != U.componentDidUpdate &&
                  U.__h.push(function () {
                    U.componentDidUpdate(J, $, Q);
                  });
            }
            if (
              ((U.context = en),
              (U.props = X),
              (U.__P = e),
              (U.__e = !1),
              (ei = s.__r),
              (es = 0),
              ee)
            ) {
              for (
                U.state = U.__s,
                  U.__d = !1,
                  ei && ei(t),
                  R = U.render(U.props, U.state, U.context),
                  ea = 0;
                ea < U._sb.length;
                ea++
              )
                U.__h.push(U._sb[ea]);
              U._sb = [];
            } else
              do
                (U.__d = !1),
                  ei && ei(t),
                  (R = U.render(U.props, U.state, U.context)),
                  (U.state = U.__s);
              while (U.__d && ++es < 25);
            (U.state = U.__s),
              null != U.getChildContext &&
                (a = d(d({}, a), U.getChildContext())),
              ee &&
                !W &&
                null != U.getSnapshotBeforeUpdate &&
                (Q = U.getSnapshotBeforeUpdate(J, $)),
              P(
                e,
                Y(
                  (eo =
                    null != R && R.type === b && null == R.key
                      ? R.props.children
                      : R)
                )
                  ? eo
                  : [eo],
                t,
                n,
                a,
                o,
                l,
                c,
                u,
                v,
                L
              ),
              (U.base = t.__e),
              (t.__u &= -161),
              U.__h.length && c.push(U),
              Z && (U.__E = U.__ = null);
          } catch (e) {
            if (((t.__v = null), v || null != l)) {
              for (
                t.__u |= v ? 160 : 128;
                u && 8 === u.nodeType && u.nextSibling;

              )
                u = u.nextSibling;
              (l[l.indexOf(u)] = null), (t.__e = u);
            } else (t.__e = n.__e), (t.__k = n.__k);
            s.__e(e, t, n);
          }
        else
          null == l && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = (function (e, t, n, a, o, l, c, u, v) {
                var L,
                  R,
                  U,
                  W,
                  J,
                  $,
                  Q,
                  Z = n.props,
                  X = t.props,
                  ee = t.type;
                if (
                  ("svg" === ee
                    ? (o = "http://www.w3.org/2000/svg")
                    : "math" === ee
                    ? (o = "http://www.w3.org/1998/Math/MathML")
                    : o || (o = "http://www.w3.org/1999/xhtml"),
                  null != l)
                ) {
                  for (L = 0; L < l.length; L++)
                    if (
                      (J = l[L]) &&
                      "setAttribute" in J == !!ee &&
                      (ee ? J.localName === ee : 3 === J.nodeType)
                    ) {
                      (e = J), (l[L] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === ee) return document.createTextNode(X);
                  (e = document.createElementNS(o, ee, X.is && X)),
                    u && (s.__m && s.__m(t, l), (u = !1)),
                    (l = null);
                }
                if (null === ee) Z === X || (u && e.data === X) || (e.data = X);
                else {
                  if (
                    ((l = l && i.call(e.childNodes)),
                    (Z = n.props || K),
                    !u && null != l)
                  )
                    for (Z = {}, L = 0; L < e.attributes.length; L++)
                      Z[(J = e.attributes[L]).name] = J.value;
                  for (L in Z)
                    if (((J = Z[L]), "children" == L));
                    else if ("dangerouslySetInnerHTML" == L) U = J;
                    else if (!(L in X)) {
                      if (
                        ("value" == L && "defaultValue" in X) ||
                        ("checked" == L && "defaultChecked" in X)
                      )
                        continue;
                      A(e, L, null, J, o);
                    }
                  for (L in X)
                    (J = X[L]),
                      "children" == L
                        ? (W = J)
                        : "dangerouslySetInnerHTML" == L
                        ? (R = J)
                        : "value" == L
                        ? ($ = J)
                        : "checked" == L
                        ? (Q = J)
                        : (u && "function" != typeof J) ||
                          Z[L] === J ||
                          A(e, L, J, Z[L], o);
                  if (R)
                    u ||
                      (U &&
                        (R.__html === U.__html || R.__html === e.innerHTML)) ||
                      (e.innerHTML = R.__html),
                      (t.__k = []);
                  else if (
                    (U && (e.innerHTML = ""),
                    P(
                      e,
                      Y(W) ? W : [W],
                      t,
                      n,
                      a,
                      "foreignObject" === ee
                        ? "http://www.w3.org/1999/xhtml"
                        : o,
                      l,
                      c,
                      l ? l[0] : n.__k && x(n, 0),
                      u,
                      v
                    ),
                    null != l)
                  )
                    for (L = l.length; L--; ) w(l[L]);
                  u ||
                    ((L = "value"),
                    "progress" === ee && null == $
                      ? e.removeAttribute("value")
                      : void 0 === $ ||
                        ($ === e[L] &&
                          ("progress" !== ee || $) &&
                          ("option" !== ee || $ === Z[L])) ||
                        A(e, L, $, Z[L], o),
                    (L = "checked"),
                    void 0 !== Q && Q !== e[L] && A(e, L, Q, Z[L], o));
                }
                return e;
              })(n.__e, t, n, a, o, l, c, v, L));
        (R = s.diffed) && R(t);
      }
      function j(e, t, n) {
        t.__d = void 0;
        for (var i = 0; i < n.length; i++) E(n[i], n[++i], n[++i]);
        s.__c && s.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              s.__e(e, t.__v);
            }
          });
      }
      function E(e, t, n) {
        try {
          if ("function" == typeof e) {
            var i = "function" == typeof e.__u;
            i && e.__u(), (i && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          s.__e(e, n);
        }
      }
      function V(e, t, n) {
        return this.constructor(e, n);
      }
      function q(e, t, n) {
        var a, o, l, c;
        s.__ && s.__(e, t),
          (o = (a = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (l = []),
          (c = []),
          O(
            t,
            (e = ((!a && n) || t).__k = _(b, null, [e])),
            o || K,
            K,
            t.namespaceURI,
            !a && n
              ? [n]
              : o
              ? null
              : t.firstChild
              ? i.call(t.childNodes)
              : null,
            l,
            !a && n ? n : o ? o.__e : t.firstChild,
            a,
            c
          ),
          j(l, e, c);
      }
      function B(e, t) {
        q(e, t, B);
      }
      function D(e, t, n) {
        var s,
          a,
          o,
          l,
          c = d({}, e.props);
        for (o in (e.type && e.type.defaultProps && (l = e.type.defaultProps),
        t))
          "key" == o
            ? (s = t[o])
            : "ref" == o
            ? (a = t[o])
            : (c[o] = void 0 === t[o] && void 0 !== l ? l[o] : t[o]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? i.call(arguments, 2) : n),
          g(e.type, c, s || e.key, a || e.ref, null)
        );
      }
      function G(e, t) {
        var n = {
          __c: (t = "__cC" + W++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var n, i;
            return (
              this.getChildContext ||
                ((n = new Set()),
                ((i = {})[t] = this),
                (this.getChildContext = function () {
                  return i;
                }),
                (this.componentWillUnmount = function () {
                  n = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    n.forEach(function (e) {
                      (e.__e = !0), S(e);
                    });
                }),
                (this.sub = function (e) {
                  n.add(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    n && n.delete(e), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (i = J.slice),
        (s = {
          __e: function (e, t, n, i) {
            for (var s, a, o; (t = t.__); )
              if ((s = t.__c) && !s.__)
                try {
                  if (
                    ((a = s.constructor) &&
                      null != a.getDerivedStateFromError &&
                      (s.setState(a.getDerivedStateFromError(e)), (o = s.__d)),
                    null != s.componentDidCatch &&
                      (s.componentDidCatch(e, i || {}), (o = s.__d)),
                    o)
                  )
                    return (s.__E = s);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (a = 0),
        (o = function (e) {
          return null != e && null == e.constructor;
        }),
        (k.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = d({}, this.state))),
            "function" == typeof e && (e = e(d({}, n), this.props)),
            e && d(n, e),
            null != e && this.__v && (t && this._sb.push(t), S(this));
        }),
        (k.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), S(this));
        }),
        (k.prototype.render = b),
        (l = []),
        (u =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (v = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (M.__r = 0),
        (L = 0),
        (R = F(!1)),
        (U = F(!0)),
        (W = 0);
    },
    30396: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCallback: function () {
            return q;
          },
          useContext: function () {
            return x;
          },
          useDebugValue: function () {
            return P;
          },
          useEffect: function () {
            return y;
          },
          useErrorBoundary: function () {
            return b;
          },
          useId: function () {
            return g;
          },
          useImperativeHandle: function () {
            return F;
          },
          useLayoutEffect: function () {
            return _;
          },
          useMemo: function () {
            return T;
          },
          useReducer: function () {
            return p;
          },
          useRef: function () {
            return A;
          },
          useState: function () {
            return h;
          },
        });
      var i,
        s,
        a,
        o,
        l = n(6400),
        c = 0,
        u = [],
        v = l.options,
        L = v.__b,
        R = v.__r,
        U = v.diffed,
        W = v.__c,
        K = v.unmount,
        J = v.__;
      function d(e, t) {
        v.__h && v.__h(s, e, c || t), (c = 0);
        var n = s.__H || (s.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function h(e) {
        return (c = 1), p(D, e);
      }
      function p(e, t, n) {
        var a = d(i++, 2);
        if (
          ((a.t = e),
          !a.__c &&
            ((a.__ = [
              n ? n(t) : D(void 0, t),
              function (e) {
                var t = a.__N ? a.__N[0] : a.__[0],
                  n = a.t(t, e);
                t !== n && ((a.__N = [n, a.__[1]]), a.__c.setState({}));
              },
            ]),
            (a.__c = s),
            !s.u))
        ) {
          var f = function (e, t, n) {
            if (!a.__c.__H) return !0;
            var i = a.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              i.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var s = a.__c.props !== e;
            return (
              i.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                }
              }),
              (o && o.call(this, e, t, n)) || s
            );
          };
          s.u = !0;
          var o = s.shouldComponentUpdate,
            l = s.componentWillUpdate;
          (s.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var i = o;
              (o = void 0), f(e, t, n), (o = i);
            }
            l && l.call(this, e, t, n);
          }),
            (s.shouldComponentUpdate = f);
        }
        return a.__N || a.__;
      }
      function y(e, t) {
        var n = d(i++, 3);
        !v.__s && C(n.__H, t) && ((n.__ = e), (n.i = t), s.__H.__h.push(n));
      }
      function _(e, t) {
        var n = d(i++, 4);
        !v.__s && C(n.__H, t) && ((n.__ = e), (n.i = t), s.__h.push(n));
      }
      function A(e) {
        return (
          (c = 5),
          T(function () {
            return { current: e };
          }, [])
        );
      }
      function F(e, t, n) {
        (c = 6),
          _(
            function () {
              return "function" == typeof e
                ? (e(t()),
                  function () {
                    return e(null);
                  })
                : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
            },
            null == n ? n : n.concat(e)
          );
      }
      function T(e, t) {
        var n = d(i++, 7);
        return C(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
      }
      function q(e, t) {
        return (
          (c = 8),
          T(function () {
            return e;
          }, t)
        );
      }
      function x(e) {
        var t = s.context[e.__c],
          n = d(i++, 9);
        return (
          (n.c = e),
          t ? (null == n.__ && ((n.__ = !0), t.sub(s)), t.props.value) : e.__
        );
      }
      function P(e, t) {
        v.useDebugValue && v.useDebugValue(t ? t(e) : e);
      }
      function b(e) {
        var t = d(i++, 10),
          n = h();
        return (
          (t.__ = e),
          s.componentDidCatch ||
            (s.componentDidCatch = function (e, i) {
              t.__ && t.__(e, i), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function g() {
        var e = d(i++, 11);
        if (!e.__) {
          for (var t = s.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
      }
      function j() {
        for (var e; (e = u.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(z), e.__H.__h.forEach(B), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), v.__e(t, e.__v);
            }
      }
      (v.__b = function (e) {
        (s = null), L && L(e);
      }),
        (v.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), J && J(e, t);
        }),
        (v.__r = function (e) {
          R && R(e), (i = 0);
          var t = (s = e.__c).__H;
          t &&
            (a === s
              ? ((t.__h = []),
                (s.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                }))
              : (t.__h.forEach(z), t.__h.forEach(B), (t.__h = []), (i = 0))),
            (a = s);
        }),
        (v.diffed = function (e) {
          U && U(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== u.push(t) && o === v.requestAnimationFrame) ||
                (
                  (o = v.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      r = function () {
                        clearTimeout(n),
                          $ && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      n = setTimeout(r, 100);
                    $ && (t = requestAnimationFrame(r));
                  }
                )(j)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i), (e.i = void 0);
            })),
            (a = s = null);
        }),
        (v.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(z),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || B(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                v.__e(n, e.__v);
            }
          }),
            W && W(e, t);
        }),
        (v.unmount = function (e) {
          K && K(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                z(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && v.__e(t, n.__v));
        });
      var $ = "function" == typeof requestAnimationFrame;
      function z(e) {
        var t = s,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (s = t);
      }
      function B(e) {
        var t = s;
        (e.__c = e.__()), (s = t);
      }
      function C(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function D(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    42817: function (e, t, n) {
      var i = n(48764).Buffer;
      let s = n(91488);
      function elementaryName(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function parseTypeN(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function parseTypeNxM(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function parseTypeArray(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function parseNumber(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function encodeSingle(e, t) {
        if ("address" === e) return encodeSingle("uint160", parseNumber(t));
        if ("bool" === e) return encodeSingle("uint8", t ? 1 : 0);
        if ("string" === e) return encodeSingle("bytes", new i(t, "utf8"));
        if ((c = e).lastIndexOf("]") === c.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = parseTypeArray(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (l in ((o = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            o.push(encodeSingle(e, t[l]));
          if ("dynamic" === n) {
            var n,
              a,
              o,
              l,
              c,
              u = encodeSingle("uint256", t.length);
            o.unshift(u);
          }
          return i.concat(o);
        }
        if ("bytes" === e)
          return (
            (t = new i(t)),
            (o = i.concat([encodeSingle("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (o = i.concat([o, s.zeros(32 - (t.length % 32))])),
            o
          );
        if (e.startsWith("bytes")) {
          if ((n = parseTypeN(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return s.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = parseTypeN(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          a = parseNumber(t);
          let i = s.bitLengthFromBigInt(a);
          if (i > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + i);
          if (a < 0) throw Error("Supplied uint is negative");
          return s.bufferBEFromBigInt(a, 32);
        } else if (e.startsWith("int")) {
          if ((n = parseTypeN(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          a = parseNumber(t);
          let i = s.bitLengthFromBigInt(a);
          if (i > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + i);
          let o = s.twosFromBigInt(a, 256);
          return s.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = parseTypeNxM(e)), (a = parseNumber(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return encodeSingle("uint256", a * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (
            (n = parseTypeNxM(e)),
            encodeSingle("int256", parseNumber(t) * BigInt(2) ** BigInt(n[1]))
          );
        throw Error("Unsupported or invalid type: " + e);
      }
      function solidityPack(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, a, o = [], l = 0; l < e.length; l++) {
          var c = elementaryName(e[l]),
            u = t[l];
          if ("bytes" === c) o.push(u);
          else if ("string" === c) o.push(new i(u, "utf8"));
          else if ("bool" === c) o.push(new i(u ? "01" : "00", "hex"));
          else if ("address" === c) o.push(s.setLength(u, 20));
          else if (c.startsWith("bytes")) {
            if ((n = parseTypeN(c)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            o.push(s.setLengthRight(u, n));
          } else if (c.startsWith("uint")) {
            if ((n = parseTypeN(c)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            a = parseNumber(u);
            let e = s.bitLengthFromBigInt(a);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            o.push(s.bufferBEFromBigInt(a, n / 8));
          } else if (c.startsWith("int")) {
            if ((n = parseTypeN(c)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            a = parseNumber(u);
            let e = s.bitLengthFromBigInt(a);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = s.twosFromBigInt(a, n);
            o.push(s.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + c);
        }
        return i.concat(o);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            s = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = elementaryName(e[o]),
              c = encodeSingle(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === parseTypeArray(l)
              ? (n.push(encodeSingle("uint256", a)), s.push(c), (a += c.length))
              : n.push(c);
          }
          return i.concat(n.concat(s));
        },
        solidityPack,
        soliditySHA3: function (e, t) {
          return s.keccak(solidityPack(e, t));
        },
      };
    },
    87009: function (e, t, n) {
      var i = n(48764).Buffer;
      let s = n(91488),
        a = n(42817),
        o = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        l = {
          encodeData(e, t, n, o = !0) {
            let l = ["bytes32"],
              c = [this.hashType(e, n)];
            if (o) {
              let encodeField = (e, t, l) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == l
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : s.keccak(this.encodeData(t, l, n, o)),
                  ];
                if (void 0 === l)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", s.keccak(l)];
                if ("string" === t)
                  return (
                    "string" == typeof l && (l = i.from(l, "utf8")),
                    ["bytes32", s.keccak(l)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    i = l.map((t) => encodeField(e, n, t));
                  return [
                    "bytes32",
                    s.keccak(
                      a.rawEncode(
                        i.map(([e]) => e),
                        i.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, l];
              };
              for (let i of n[e]) {
                let [e, n] = encodeField(i.name, i.type, t[i.name]);
                l.push(e), c.push(n);
              }
            } else
              for (let a of n[e]) {
                let e = t[a.name];
                if (void 0 !== e) {
                  if ("bytes" === a.type)
                    l.push("bytes32"), (e = s.keccak(e)), c.push(e);
                  else if ("string" === a.type)
                    l.push("bytes32"),
                      "string" == typeof e && (e = i.from(e, "utf8")),
                      (e = s.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[a.type])
                    l.push("bytes32"),
                      (e = s.keccak(this.encodeData(a.type, e, n, o))),
                      c.push(e);
                  else if (a.type.lastIndexOf("]") === a.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else l.push(a.type), c.push(e);
                }
              }
            return a.rawEncode(l, c);
          },
          encodeType(e, t) {
            let n = "",
              i = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let s of (i = [e].concat(i.sort()))) {
              let e = t[s];
              if (!e) throw Error("No type definition specified: " + s);
              n +=
                s +
                "(" +
                t[s].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let i of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(i.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, i = !0) {
            return s.keccak(this.encodeData(e, t, n, i));
          },
          hashType(e, t) {
            return s.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in o.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              a = [i.from("1901", "hex")];
            return (
              a.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                a.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              s.keccak(i.concat(a))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: o,
        TypedDataUtils: l,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? s.toBuffer(e.value) : e.value;
              }),
              i = e.map(function (e) {
                return e.type;
              }),
              o = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return a.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                a.soliditySHA3(Array(e.length).fill("string"), o),
                a.soliditySHA3(i, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return l.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return l.hash(e.data);
        },
      };
    },
    91488: function (e, t, n) {
      var i = n(48764).Buffer;
      let { keccak_256: s } = n(49361);
      function zeros(e) {
        return i.allocUnsafe(e).fill(0);
      }
      function bufferBEFromBigInt(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let s = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; s.length < t; ) s.unshift(0);
        return i.from(s);
      }
      function setLength(e, t, n) {
        let i = zeros(t);
        return ((e = toBuffer(e)), n)
          ? e.length < t
            ? (e.copy(i), i)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(i, t - e.length), i)
          : e.slice(-t);
      }
      function toBuffer(e) {
        if (!i.isBuffer(e)) {
          if (Array.isArray(e)) e = i.from(e);
          else if ("string" == typeof e) {
            var t;
            e = isHexString(e)
              ? i.from((t = stripHexPrefix(e)).length % 2 ? "0" + t : t, "hex")
              : i.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = i.allocUnsafe(0);
          else if ("bigint" == typeof e) e = bufferBEFromBigInt(e);
          else if (e.toArray) e = i.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function isHexString(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function stripHexPrefix(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros,
        setLength,
        setLengthRight: function (e, t) {
          return setLength(e, t, !0);
        },
        isHexString,
        stripHexPrefix,
        toBuffer,
        bufferToHex: function (e) {
          return "0x" + (e = toBuffer(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = toBuffer(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return i.from(s(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt,
        twosFromBigInt: function (e, t) {
          let n;
          if (e < 0n) {
            let i = (1n << BigInt(t)) - 1n;
            n = (~e & i) + 1n;
          } else n = e;
          return n & ((1n << BigInt(t)) - 1n);
        },
      };
    },
    77485: function (e, t, n) {
      "use strict";
      let i;
      n.d(t, {
        createCoinbaseWalletSDK: function () {
          return createCoinbaseWalletSDK;
        },
      });
      let ScopedLocalStorage = class ScopedLocalStorage {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let i = localStorage.key(n);
            "string" == typeof i && i.startsWith(e) && t.push(i);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new ScopedLocalStorage("CBWSDK").clear(),
            new ScopedLocalStorage("walletlink").clear();
        }
      };
      let s = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        a = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        o = "Unspecified error message.";
      function getMessageFromCode(e, t = o) {
        if (e && Number.isInteger(e)) {
          let t = e.toString();
          if (hasKey(a, t)) return a[t].message;
          if (e >= -32099 && e <= -32e3) return "Unspecified server error.";
        }
        return t;
      }
      function assignOriginalError(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function hasKey(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function hasStringProperty(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let l = {
        rpc: {
          parse: (e) => getEthJsonRpcError(s.rpc.parse, e),
          invalidRequest: (e) => getEthJsonRpcError(s.rpc.invalidRequest, e),
          invalidParams: (e) => getEthJsonRpcError(s.rpc.invalidParams, e),
          methodNotFound: (e) => getEthJsonRpcError(s.rpc.methodNotFound, e),
          internal: (e) => getEthJsonRpcError(s.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return getEthJsonRpcError(t, e);
          },
          invalidInput: (e) => getEthJsonRpcError(s.rpc.invalidInput, e),
          resourceNotFound: (e) =>
            getEthJsonRpcError(s.rpc.resourceNotFound, e),
          resourceUnavailable: (e) =>
            getEthJsonRpcError(s.rpc.resourceUnavailable, e),
          transactionRejected: (e) =>
            getEthJsonRpcError(s.rpc.transactionRejected, e),
          methodNotSupported: (e) =>
            getEthJsonRpcError(s.rpc.methodNotSupported, e),
          limitExceeded: (e) => getEthJsonRpcError(s.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) =>
            getEthProviderError(s.provider.userRejectedRequest, e),
          unauthorized: (e) => getEthProviderError(s.provider.unauthorized, e),
          unsupportedMethod: (e) =>
            getEthProviderError(s.provider.unsupportedMethod, e),
          disconnected: (e) => getEthProviderError(s.provider.disconnected, e),
          chainDisconnected: (e) =>
            getEthProviderError(s.provider.chainDisconnected, e),
          unsupportedChain: (e) =>
            getEthProviderError(s.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: i } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new EthereumProviderError(t, n, i);
          },
        },
      };
      function getEthJsonRpcError(e, t) {
        let [n, i] = parseOpts(t);
        return new EthereumRpcError(e, n || getMessageFromCode(e), i);
      }
      function getEthProviderError(e, t) {
        let [n, i] = parseOpts(t);
        return new EthereumProviderError(e, n || getMessageFromCode(e), i);
      }
      function parseOpts(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      let EthereumRpcError = class EthereumRpcError extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      };
      let EthereumProviderError = class EthereumProviderError extends EthereumRpcError {
        constructor(e, t, n) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      };
      let HexString = (e) => e,
        AddressString = (e) => e,
        BigIntString = (e) => e;
      function type_IntNumber(e) {
        return Math.floor(e);
      }
      var c,
        u,
        v = n(48764).Buffer;
      let L = /^[0-9]*$/,
        R = /^[a-f0-9]*$/;
      function randomBytesHex(e) {
        return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(e)));
      }
      function uint8ArrayToHex(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function hexStringToUint8Array(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function hexStringFromBuffer(e, t = !1) {
        let n = e.toString("hex");
        return HexString(t ? `0x${n}` : n);
      }
      function encodeToHexString(e) {
        return hexStringFromBuffer(ensureBuffer(e), !0);
      }
      function bigIntStringFromBigInt(e) {
        return BigIntString(e.toString(10));
      }
      function hexStringFromNumber(e) {
        return HexString(`0x${BigInt(e).toString(16)}`);
      }
      function has0xPrefix(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function strip0x(e) {
        return has0xPrefix(e) ? e.slice(2) : e;
      }
      function prepend0x(e) {
        return has0xPrefix(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function isHexString(e) {
        if ("string" != typeof e) return !1;
        let t = strip0x(e).toLowerCase();
        return R.test(t);
      }
      function ensureEvenLengthHexString(e, t = !1) {
        let n = (function (e, t = !1) {
          if ("string" == typeof e) {
            let n = strip0x(e).toLowerCase();
            if (R.test(n)) return HexString(t ? `0x${n}` : n);
          }
          throw l.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        })(e, !1);
        return (
          n.length % 2 == 1 && (n = HexString(`0${n}`)),
          t ? HexString(`0x${n}`) : n
        );
      }
      function ensureAddressString(e) {
        if ("string" == typeof e) {
          let t = strip0x(e).toLowerCase();
          if (isHexString(t) && 40 === t.length)
            return AddressString(prepend0x(t));
        }
        throw l.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function ensureBuffer(e) {
        if (v.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (isHexString(e)) {
            let t = ensureEvenLengthHexString(e, !1);
            return v.from(t, "hex");
          }
          return v.from(e, "utf8");
        }
        throw l.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function ensureIntNumber(e) {
        if ("number" == typeof e && Number.isInteger(e))
          return type_IntNumber(e);
        if ("string" == typeof e) {
          if (L.test(e)) return type_IntNumber(Number(e));
          if (isHexString(e))
            return type_IntNumber(
              Number(BigInt(ensureEvenLengthHexString(e, !0)))
            );
        }
        throw l.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function ensureBigInt(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(ensureIntNumber(e));
        if ("string" == typeof e) {
          if (L.test(e)) return BigInt(e);
          if (isHexString(e)) return BigInt(ensureEvenLengthHexString(e, !0));
        }
        throw l.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function generateKeyPair() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function deriveSharedSecret(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function encrypt(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          i = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: i };
      }
      async function decrypt(e, { iv: t, cipherText: n }) {
        let i = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(i);
      }
      function getFormat(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function exportKeyToHexString(e, t) {
        let n = getFormat(e),
          i = await crypto.subtle.exportKey(n, t);
        return uint8ArrayToHex(new Uint8Array(i));
      }
      async function importKeyFromHexString(e, t) {
        let n = getFormat(e),
          i = hexStringToUint8Array(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(i),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function encryptContent(e, t) {
        let n = JSON.stringify(e, (e, t) =>
          t instanceof Error
            ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                message: t.message,
              })
            : t
        );
        return encrypt(t, n);
      }
      async function decryptContent(e, t) {
        return JSON.parse(await decrypt(t, e));
      }
      let U = { storageKey: "ownPrivateKey", keyType: "private" },
        W = { storageKey: "ownPublicKey", keyType: "public" },
        K = { storageKey: "peerPublicKey", keyType: "public" };
      let SCWKeyManager = class SCWKeyManager {
        constructor() {
          (this.storage = new ScopedLocalStorage("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(K, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(W.storageKey),
            this.storage.removeItem(U.storageKey),
            this.storage.removeItem(K.storageKey);
        }
        async generateKeyPair() {
          let e = await generateKeyPair();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(U, e.privateKey),
            await this.storeKey(W, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(U)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(W)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(K)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await deriveSharedSecret(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? importKeyFromHexString(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await exportKeyToHexString(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      };
      let J = "4.2.3",
        $ = "@coinbase/wallet-sdk";
      async function fetchRPCRequest(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          i = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": J,
              "X-Cbw-Sdk-Platform": $,
            },
          }),
          { result: s, error: a } = await i.json();
        if (a) throw a;
        return s;
      }
      let Y = "accounts",
        Q = "activeChain",
        Z = "availableChains",
        X = "walletCapabilities";
      let SCWSigner = class SCWSigner {
        constructor(e) {
          var t, n, i;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new SCWKeyManager()),
            (this.storage = new ScopedLocalStorage(
              "CBWSDK",
              "SCWStateManager"
            )),
            (this.accounts =
              null !== (t = this.storage.loadObject(Y)) && void 0 !== t
                ? t
                : []),
            (this.chain = this.storage.loadObject(Q) || {
              id:
                null !==
                  (i =
                    null === (n = e.metadata.appChainIds) || void 0 === n
                      ? void 0
                      : n[0]) && void 0 !== i
                  ? i
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n;
          let i = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (t = e.params) && void 0 !== t ? t : {}
                ),
              },
            }),
            s = await this.communicator.postRequestAndWaitForResponse(i);
          if ("failure" in s.content) throw s.content.failure;
          let a = await importKeyFromHexString("public", s.sender);
          await this.keyManager.setPeerPublicKey(a);
          let o = await this.decryptResponseMessage(s),
            l = o.result;
          if ("error" in l) throw l.error;
          let c = l.value;
          (this.accounts = c),
            this.storage.storeObject(Y, c),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", c);
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) throw l.provider.unauthorized();
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, "connect", {
                    chainId: hexStringFromNumber(this.chain.id),
                  }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return hexStringFromNumber(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(X);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw l.rpc.internal("No RPC URL set for chain");
              return fetchRPCRequest(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === n
            ? void 0
            : n.call(t));
          let i = await this.sendEncryptedRequest(e),
            s = await this.decryptResponseMessage(i),
            a = s.result;
          if ("error" in a) throw a.error;
          return a.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t =
                    null === (e = this.metadata.appChainIds) || void 0 === e
                      ? void 0
                      : e[0]) && void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw l.rpc.invalidParams();
          let i = ensureIntNumber(n[0].chainId),
            s = this.updateChain(i);
          if (s) return null;
          let a = await this.sendRequestToPopup(e);
          return null === a && this.updateChain(i), a;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw l.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await encryptContent(
              { action: e, chainId: this.chain.id },
              t
            ),
            i = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(i);
        }
        async createRequestMessage(e) {
          let t = await exportKeyToHexString(
            "public",
            await this.keyManager.getOwnPublicKey()
          );
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let i = e.content;
          if ("failure" in i) throw i.failure;
          let s = await this.keyManager.getSharedSecret();
          if (!s) throw l.provider.unauthorized("Invalid session");
          let a = await decryptContent(i.encrypted, s),
            o = null === (t = a.data) || void 0 === t ? void 0 : t.chains;
          if (o) {
            let e = Object.entries(o).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(Z, e), this.updateChain(this.chain.id, e);
          }
          let c =
            null === (n = a.data) || void 0 === n ? void 0 : n.capabilities;
          return c && this.storage.storeObject(X, c), a;
        }
        updateChain(e, t) {
          var n;
          let i = null != t ? t : this.storage.loadObject(Z),
            s = null == i ? void 0 : i.find((t) => t.id === e);
          return (
            !!s &&
            (s !== this.chain &&
              ((this.chain = s),
              this.storage.storeObject(Q, s),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, "chainChanged", hexStringFromNumber(s.id))),
            !0)
          );
        }
      };
      var ee = n(87009);
      let et = "Addresses";
      function isErrorResponse(e) {
        return void 0 !== e.errorMessage;
      }
      let WalletLinkCipher = class WalletLinkCipher {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey(
              "raw",
              hexStringToUint8Array(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            s = new TextEncoder(),
            a = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              i,
              s.encode(e)
            ),
            o = a.slice(a.byteLength - 16),
            l = a.slice(0, a.byteLength - 16),
            c = new Uint8Array(o),
            u = new Uint8Array(l),
            v = new Uint8Array([...n, ...c, ...u]);
          return uint8ArrayToHex(v);
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, i) => {
            !(async function () {
              let s = await crypto.subtle.importKey(
                  "raw",
                  hexStringToUint8Array(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                a = hexStringToUint8Array(e),
                o = a.slice(0, 12),
                l = a.slice(12, 28),
                c = a.slice(28),
                u = new Uint8Array([...c, ...l]),
                v = { name: "AES-GCM", iv: new Uint8Array(o) };
              try {
                let e = await window.crypto.subtle.decrypt(v, s, u),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                i(e);
              }
            })();
          });
        }
      };
      let WalletLinkHTTP = class WalletLinkHTTP {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let i = `${t}:${n}`;
          this.auth = `Basic ${btoa(i)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: i } = await t.json();
            if (i) throw Error(`Check unseen events failed: ${i}`);
            let s =
              null !==
                (e =
                  null == n
                    ? void 0
                    : n
                        .filter((e) => "Web3Response" === e.event)
                        .map((e) => ({
                          type: "Event",
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(s), s;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      };
      ((c = u || (u = {}))[(c.DISCONNECTED = 0)] = "DISCONNECTED"),
        (c[(c.CONNECTING = 1)] = "CONNECTING"),
        (c[(c.CONNECTED = 2)] = "CONNECTED");
      let WalletLinkWebSocket = class WalletLinkWebSocket {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let i;
            try {
              this.webSocket = i = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, u.CONNECTING),
              (i.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, u.DISCONNECTED);
              }),
              (i.onopen = (t) => {
                var n;
                if (
                  (e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, u.CONNECTED),
                  this.pendingData.length > 0)
                ) {
                  let e = [...this.pendingData];
                  e.forEach((e) => this.sendData(e)), (this.pendingData = []);
                }
              }),
              (i.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) ||
                      void 0 === n ||
                      n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, u.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      };
      let WalletLinkConnection = class WalletLinkConnection {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = type_IntNumber(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              if (!e) return;
              let t = new Map([
                ["__destroyed", this.handleDestroyed],
                ["EthereumAddress", this.handleAccountUpdated],
                ["WalletUsername", this.handleWalletUsernameUpdated],
                ["AppVersion", this.handleAppVersionUpdated],
                [
                  "ChainId",
                  (t) =>
                    e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                ],
              ]);
              t.forEach((t, n) => {
                let i = e[n];
                void 0 !== i && t(i);
              });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) ||
                void 0 === t ||
                t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.metadataUpdated(e, i);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(e),
                s = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.chainUpdated(i, s);
            }),
            (this.session = e),
            (this.cipher = new WalletLinkCipher(e.secret)),
            (this.listener = n);
          let i = new WalletLinkWebSocket(`${t}/rpc`, WebSocket);
          i.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case u.DISCONNECTED:
                if (!this.destroyed) {
                  let connect = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        i.connect().catch(() => {
                          connect();
                        });
                  };
                  connect();
                }
                break;
              case u.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case u.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            i.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = i),
            (this.http = new WalletLinkHTTP(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: type_IntNumber(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let n = await this.cipher.decrypt(e.data),
            i = JSON.parse(n);
          if ("WEB3_RESPONSE" !== i.type) return;
          let { id: s, response: a } = i;
          null === (t = this.listener) ||
            void 0 === t ||
            t.handleWeb3ResponseMessage(s, a);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          this.shouldFetchUnseenEventsOnConnect = !1;
          let e = await this.http.fetchUnseenEvents();
          e.forEach((e) => this.handleIncomingEvent(e));
        }
        async publishEvent(e, t, n = !1) {
          let i = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            s = {
              type: "PublishEvent",
              id: type_IntNumber(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: i,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(s);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let i = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, s) => {
                n = window.setTimeout(() => {
                  s(Error(`request ${i} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(i, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(i);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          let e = await this.makeRequest({
            type: "HostSession",
            id: type_IntNumber(this.nextReqId++),
            sessionId: this.session.id,
            sessionKey: this.session.key,
          });
          return (
            "Fail" !== e.type &&
            (this.sendData({
              type: "IsLinked",
              id: type_IntNumber(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: type_IntNumber(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      };
      let RelayEventManager = class RelayEventManager {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = prepend0x(e.toString(16)),
            n = this.callbacks.get(t);
          return n && this.callbacks.delete(t), e;
        }
      };
      function _assert_abytes(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function aexists(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength),
        rotr = (e, t) => (e << (32 - t)) | (e >>> t),
        en = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function toBytes(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          _assert_abytes(e),
          e
        );
      }
      let Hash = class Hash {
        clone() {
          return this._cloneInto();
        }
      };
      let Chi = (e, t, n) => (e & t) ^ (~e & n),
        Maj = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
      let HashMD = class HashMD extends Hash {
        constructor(e, t, n, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = createView(this.buffer));
        }
        update(e) {
          aexists(this);
          let { view: t, buffer: n, blockLen: i } = this;
          e = toBytes(e);
          let s = e.length;
          for (let a = 0; a < s; ) {
            let o = Math.min(i - this.pos, s - a);
            if (o === i) {
              let t = createView(e);
              for (; i <= s - a; a += i) this.process(t, a);
              continue;
            }
            n.set(e.subarray(a, a + o), this.pos),
              (this.pos += o),
              (a += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          aexists(this),
            (function (e, t) {
              _assert_abytes(e);
              let n = t.outputLen;
              if (e.length < n)
                throw Error(
                  "digestInto() expects output buffer of length at least " + n
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: n, blockLen: i, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > i - a && (this.process(n, 0), (a = 0));
          for (let e = a; e < i; e++) t[e] = 0;
          !(function (e, t, n, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, i);
            let s = BigInt(32),
              a = BigInt(4294967295),
              o = Number((n >> s) & a),
              l = Number(n & a),
              c = i ? 4 : 0,
              u = i ? 0 : 4;
            e.setUint32(t + c, o, i), e.setUint32(t + u, l, i);
          })(n, i - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
          let o = createView(e),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = l / 4,
            u = this.get();
          if (c > u.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) o.setUint32(4 * e, u[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: i,
            finished: s,
            destroyed: a,
            pos: o,
          } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = a),
            i % t && e.buffer.set(n),
            e
          );
        }
      };
      let er = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        ei = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        es = new Uint32Array(64);
      let SHA256 = class SHA256 extends HashMD {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | ei[0]),
            (this.B = 0 | ei[1]),
            (this.C = 0 | ei[2]),
            (this.D = 0 | ei[3]),
            (this.E = 0 | ei[4]),
            (this.F = 0 | ei[5]),
            (this.G = 0 | ei[6]),
            (this.H = 0 | ei[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: i, E: s, F: a, G: o, H: l } = this;
          return [e, t, n, i, s, a, o, l];
        }
        set(e, t, n, i, s, a, o, l) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | i),
            (this.E = 0 | s),
            (this.F = 0 | a),
            (this.G = 0 | o),
            (this.H = 0 | l);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) es[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = es[e - 15],
              n = es[e - 2],
              i = rotr(t, 7) ^ rotr(t, 18) ^ (t >>> 3),
              s = rotr(n, 17) ^ rotr(n, 19) ^ (n >>> 10);
            es[e] = (s + es[e - 7] + i + es[e - 16]) | 0;
          }
          let { A: n, B: i, C: s, D: a, E: o, F: l, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t = rotr(o, 6) ^ rotr(o, 11) ^ rotr(o, 25),
              v = (u + t + Chi(o, l, c) + er[e] + es[e]) | 0,
              L = rotr(n, 2) ^ rotr(n, 13) ^ rotr(n, 22),
              R = (L + Maj(n, i, s)) | 0;
            (u = c),
              (c = l),
              (l = o),
              (o = (a + v) | 0),
              (a = s),
              (s = i),
              (i = n),
              (n = (v + R) | 0);
          }
          (n = (n + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (a = (a + this.D) | 0),
            (o = (o + this.E) | 0),
            (l = (l + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, i, s, a, o, l, c, u);
        }
        roundClean() {
          es.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      };
      let ea = (function (e) {
          let hashC = (t) => e().update(toBytes(t)).digest(),
            t = e();
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = () => e()),
            hashC
          );
        })(() => new SHA256()),
        eo = "session:id",
        el = "session:secret",
        ec = "session:linked";
      let WalletLinkSession = class WalletLinkSession {
        constructor(e, t, n, i = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (function (e) {
              _assert_abytes(e);
              let t = "";
              for (let n = 0; n < e.length; n++) t += en[e[n]];
              return t;
            })(ea(`${t}, ${n} WalletLink`))),
            (this._linked = !!i);
        }
        static create(e) {
          let t = randomBytesHex(16),
            n = randomBytesHex(32);
          return new WalletLinkSession(e, t, n).save();
        }
        static load(e) {
          let t = e.getItem(eo),
            n = e.getItem(ec),
            i = e.getItem(el);
          return t && i ? new WalletLinkSession(e, t, i, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(eo, this.id),
            this.storage.setItem(el, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(ec, this._linked ? "1" : "0");
        }
      };
      function isDarkMode() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) ||
              void 0 === e
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) &&
          void 0 !== t &&
          t
        );
      }
      function injectCssReset() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      var eu = n(86010),
        ed = n(6400),
        eh = n(30396);
      let Snackbar = class Snackbar {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = isDarkMode());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, ed.render)(
              (0, ed.h)(
                "div",
                null,
                (0, ed.h)(
                  SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, ed.h)(
                      SnackbarInstance,
                      Object.assign({}, t, { key: e })
                    )
                  )
                )
              ),
              this.root
            );
        }
      };
      let SnackbarContainer = (e) =>
          (0, ed.h)(
            "div",
            { class: (0, eu.clsx)("-cbwsdk-snackbar-container") },
            (0, ed.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, ed.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        SnackbarInstance = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [i, s] = (0, eh.useState)(!0),
            [a, o] = (0, eh.useState)(null != e && e);
          return (
            (0, eh.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  s(!1);
                }, 1),
                window.setTimeout(() => {
                  o(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, ed.h)(
              "div",
              {
                class: (0, eu.clsx)(
                  "-cbwsdk-snackbar-instance",
                  i && "-cbwsdk-snackbar-instance-hidden",
                  a && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, ed.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    o(!a);
                  },
                },
                (0, ed.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, ed.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, ed.h)(
                  "div",
                  { class: "-gear-container" },
                  !a &&
                    (0, ed.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, ed.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, ed.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, ed.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    (0, ed.h)(
                      "div",
                      {
                        class: (0, eu.clsx)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, ed.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, ed.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, ed.h)(
                        "span",
                        {
                          class: (0, eu.clsx)(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      let WalletLinkRelayUI = class WalletLinkRelayUI {
        constructor() {
          (this.attached = !1), (this.snackbar = new Snackbar());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            injectCssReset();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      };
      let RedirectDialog = class RedirectDialog {
        constructor() {
          (this.root = null), (this.darkMode = isDarkMode());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            injectCssReset();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, ed.render)(null, this.root),
            e &&
              (0, ed.render)(
                (0, ed.h)(
                  RedirectDialogContent,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      };
      let RedirectDialogContent = ({
          title: e,
          buttonText: t,
          darkMode: n,
          onButtonClick: i,
          onDismiss: s,
        }) =>
          (0, ed.h)(
            SnackbarContainer,
            { darkMode: n },
            (0, ed.h)(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              (0, ed.h)(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              (0, ed.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: s,
              }),
              (0, ed.h)(
                "div",
                {
                  class: (0, eu.clsx)(
                    "-cbwsdk-redirect-dialog-box",
                    n ? "dark" : "light"
                  ),
                },
                (0, ed.h)("p", null, e),
                (0, ed.h)("button", { onClick: i }, t)
              )
            )
          ),
        ep = "https://www.walletlink.org";
      let WLMobileRelayUI = class WLMobileRelayUI {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new RedirectDialog());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      };
      let WalletLinkRelay = class WalletLinkRelay {
        constructor(e) {
          var t;
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (t = null == window ? void 0 : window.navigator) ||
                  void 0 === t
                  ? void 0
                  : t.userAgent
              )),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(et);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  i = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  i ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                WalletLinkRelay.accountRequestCallbackIds.size > 0 &&
                  (Array.from(
                    WalletLinkRelay.accountRequestCallbackIds.values()
                  ).forEach((t) => {
                    this.invokeCallback(t, {
                      method: "requestEthereumAccounts",
                      result: [e],
                    });
                  }),
                  WalletLinkRelay.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: n, ui: i, connection: s } = this.subscribe();
          (this._session = n),
            (this.connection = s),
            (this.relayEventManager = new RelayEventManager()),
            (this.ui = i),
            this.ui.attach();
        }
        subscribe() {
          let e =
              WalletLinkSession.load(this.storage) ||
              WalletLinkSession.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new WalletLinkConnection({
              session: e,
              linkAPIUrl: t,
              listener: this,
            }),
            i = this.isMobileWeb
              ? new WLMobileRelayUI()
              : new WalletLinkRelayUI();
          return n.connect(), { session: e, ui: i, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = WalletLinkSession.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id &&
                ScopedLocalStorage.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: bigIntStringFromBigInt(e.weiValue),
              data: hexStringFromBuffer(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit ? bigIntStringFromBigInt(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: bigIntStringFromBigInt(e.weiValue),
              data: hexStringFromBuffer(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.maxFeePerGas
                ? bigIntStringFromBigInt(e.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? bigIntStringFromBigInt(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? bigIntStringFromBigInt(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
              signedTransaction: hexStringFromBuffer(e, !0),
              chainId: t,
            },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = randomBytesHex(8),
            cancel = (i) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, i),
                null == t || t();
            };
          return new Promise((i, s) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: cancel,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), isErrorResponse(e)))
                  return s(Error(e.errorMessage));
                i(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof WLMobileRelayUI)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            WalletLinkRelay.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              WalletLinkRelay.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var i;
          let s =
            null !== (i = null == n ? void 0 : n.message) && void 0 !== i
              ? i
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: s });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            i = randomBytesHex(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(i, (n) => {
              if (isErrorResponse(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              WalletLinkRelay.accountRequestCallbackIds.add(i),
              this.publishWeb3RequestEvent(i, n);
          });
        }
        watchAsset(e, t, n, i, s, a) {
          let o = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: i, image: s },
                chainId: a,
              },
            },
            l = null,
            c = randomBytesHex(8);
          return (
            (l = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, o.method, e),
                  null == l || l();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == l || l(), isErrorResponse(n)))
                  return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, o);
            })
          );
        }
        addEthereumChain(e, t, n, i, s, a) {
          let o = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: i,
                chainName: s,
                iconUrls: n,
                nativeCurrency: a,
              },
            },
            l = null,
            c = randomBytesHex(8);
          return (
            (l = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, o.method, e),
                  null == l || l();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == l || l(), isErrorResponse(n)))
                  return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, o);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            i = null,
            s = randomBytesHex(8);
          return (
            (i = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(s),
                  this.handleErrorResponse(s, n.method, e),
                  null == i || i();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(s, (n) =>
                (null == i || i(), isErrorResponse(n) && n.errorCode)
                  ? t(
                      l.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : isErrorResponse(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(s, n);
            })
          );
        }
      };
      WalletLinkRelay.accountRequestCallbackIds = new Set();
      var ef = n(48764).Buffer;
      let eg = "DefaultChainId",
        em = "DefaultJsonRpcUrl";
      let WalletLinkSigner = class WalletLinkSigner {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new ScopedLocalStorage("walletlink", ep)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(et);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] &&
              (this._addresses = e.map((e) => ensureAddressString(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let e = this.initializeRelay(),
            { id: t, secret: n } = e.getWalletLinkSession();
          return { id: t, secret: n };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(em)) && void 0 !== e
            ? e
            : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(em, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let i = this.getChainId();
          this._storage.setItem(eg, t.toString(10));
          let s = ensureIntNumber(t) !== i;
          s &&
            (null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "chainChanged", hexStringFromNumber(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw l.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw l.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw l.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw l.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: i, symbol: s, image: a, decimals: o } = t.options,
            c = this.initializeRelay(),
            u = await c.watchAsset(
              t.type,
              i,
              s,
              o,
              a,
              null == n ? void 0 : n.toString()
            );
          return !isErrorResponse(u) && !!u.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let i = e[0];
          if (
            (null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            throw l.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!i.chainName || "" === i.chainName.trim())
            throw l.rpc.invalidParams("chainName is a required field");
          if (!i.nativeCurrency)
            throw l.rpc.invalidParams("nativeCurrency is a required field");
          let s = Number.parseInt(i.chainId, 16);
          if (s === this.getChainId()) return !1;
          let a = this.initializeRelay(),
            {
              rpcUrls: o = [],
              blockExplorerUrls: c = [],
              chainName: u,
              iconUrls: v = [],
              nativeCurrency: L,
            } = i,
            R = await a.addEthereumChain(s.toString(), o, v, c, u, L);
          if (isErrorResponse(R)) return !1;
          if (
            (null === (n = R.result) || void 0 === n
              ? void 0
              : n.isApproved) === !0
          )
            return this.updateProviderInfo(o[0], s), null;
          throw l.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = e[0],
            n = Number.parseInt(t.chainId, 16),
            i = this.initializeRelay(),
            s = await i.switchEthereumChain(
              n.toString(10),
              this.selectedAddress || void 0
            );
          if (isErrorResponse(s)) throw s;
          let a = s.result;
          return (
            a.isApproved &&
              a.rpcUrl.length > 0 &&
              this.updateProviderInfo(a.rpcUrl, n),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let i = e.map((e) => ensureAddressString(e));
          JSON.stringify(i) !== JSON.stringify(this._addresses) &&
            ((this._addresses = i),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", i),
            this._storage.setItem(et, i.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return hexStringFromNumber(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw l.rpc.internal("No RPC URL set for chain");
              return fetchRPCRequest(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = ensureAddressString(e),
            n = this._addresses.map((e) => ensureAddressString(e));
          if (!n.includes(t)) throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? ensureAddressString(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? ensureAddressString(e.to) : null,
            i = null != e.value ? ensureBigInt(e.value) : BigInt(0),
            s = e.data ? ensureBuffer(e.data) : ef.alloc(0),
            a = null != e.nonce ? ensureIntNumber(e.nonce) : null,
            o = null != e.gasPrice ? ensureBigInt(e.gasPrice) : null,
            l = null != e.maxFeePerGas ? ensureBigInt(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas
                ? ensureBigInt(e.maxPriorityFeePerGas)
                : null,
            u = null != e.gas ? ensureBigInt(e.gas) : null,
            v = e.chainId ? ensureIntNumber(e.chainId) : this.getChainId();
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: i,
            data: s,
            nonce: a,
            gasPriceInWei: o,
            maxFeePerGas: l,
            maxPriorityFeePerGas: c,
            gasLimit: u,
            chainId: v,
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw l.rpc.invalidParams();
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: encodeToHexString(n[0]),
                signature: encodeToHexString(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (isErrorResponse(s)) throw s;
          return s.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(eg)) && void 0 !== e ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, "connect", {
                  chainId: hexStringFromNumber(this.getChainId()),
                }),
              this._addresses
            );
          let n = this.initializeRelay(),
            i = await n.requestEthereumAccounts();
          if (isErrorResponse(i)) throw i;
          if (!i.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(i.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, "connect", {
                chainId: hexStringFromNumber(this.getChainId()),
              }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw l.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: ensureAddressString(t),
                message: encodeToHexString(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (isErrorResponse(s)) throw s;
          return s.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signEthereumTransaction(t);
          if (isErrorResponse(i)) throw i;
          return i.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = ensureBuffer(e[0]),
            n = this.initializeRelay(),
            i = await n.submitEthereumTransaction(t, this.getChainId());
          if (isErrorResponse(i)) throw i;
          return i.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signAndSubmitEthereumTransaction(t);
          if (isErrorResponse(i)) throw i;
          return i.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw l.rpc.invalidParams();
          let i = n["eth_signTypedData_v1" === t ? 1 : 0],
            s = n["eth_signTypedData_v1" === t ? 0 : 1];
          this._ensureKnownAddress(i);
          let a = this.initializeRelay(),
            o = await a.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: ensureAddressString(i),
                message: ((e) => {
                  let n = {
                    eth_signTypedData_v1: ee.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: ee.hashForSignTypedData_v3,
                    eth_signTypedData_v4: ee.hashForSignTypedData_v4,
                    eth_signTypedData: ee.hashForSignTypedData_v4,
                  };
                  return hexStringFromBuffer(
                    n[t]({
                      data: (function (e) {
                        if ("string" == typeof e) return JSON.parse(e);
                        if ("object" == typeof e) return e;
                        throw l.rpc.invalidParams(
                          `Not a JSON string or an object: ${String(e)}`
                        );
                      })(e),
                    }),
                    !0
                  );
                })(s),
                typedDataJson: JSON.stringify(s, null, 2),
                addPrefix: !1,
              },
            });
          if (isErrorResponse(o)) throw o;
          return o.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new WalletLinkRelay({
                linkAPIUrl: ep,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      };
      let ey = "SignerType",
        e_ = new ScopedLocalStorage("CBWSDK", "SignerConfigurator");
      async function fetchSignerType(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: i,
          callback: s,
        } = e;
        listenForWalletLinkSessionRequest(t, n, s).catch(() => {});
        let a = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: i,
            }),
          },
          { data: o } = await t.postRequestAndWaitForResponse(a);
        return o;
      }
      async function listenForWalletLinkSessionRequest(e, t, n) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let i = new WalletLinkSigner({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: i.getSession() },
        }),
          await i.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let eb = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: ew, getCrossOriginOpenerPolicy: ev } = {
          getCrossOriginOpenerPolicy: () => (void 0 === i ? "undefined" : i),
          checkCrossOriginOpenerPolicy: async () => {
            if ("undefined" == typeof window) {
              i = "non-browser-env";
              return;
            }
            try {
              let e = `${window.location.origin}${window.location.pathname}`,
                t = await fetch(e, { method: "HEAD" });
              if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
              let n = t.headers.get("Cross-Origin-Opener-Policy");
              (i = null != n ? n : "null"),
                "same-origin" === i && console.error(eb);
            } catch (e) {
              console.error(
                "Error checking Cross-Origin-Opener-Policy:",
                e.message
              ),
                (i = "error");
            }
          },
        };
      let Communicator = class Communicator {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              let t = await this.waitForPopupLoaded();
              t.postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let listener = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let i = n.data;
                  e(i) &&
                    (t(i),
                    window.removeEventListener("message", listener),
                    this.listeners.delete(listener));
                };
                window.addEventListener("message", listener),
                  this.listeners.set(listener, { reject: n });
              })),
            (this.disconnect = () => {
              var e;
              (e = this.popup) && !e.closed && e.close(),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(l.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    (function (e) {
                      let t = {
                        sdkName: $,
                        sdkVersion: J,
                        origin: window.location.origin,
                        coop: ev(),
                      };
                      for (let [n, i] of Object.entries(t))
                        e.searchParams.append(n, i.toString());
                    })(e);
                    let i = window.open(
                      e,
                      "Smart Wallet",
                      `width=420, height=540, left=${t}, top=${n}`
                    );
                    if ((null == i || i.focus(), !i))
                      throw l.rpc.internal("Pop up window failed to open");
                    return i;
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: J,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw l.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      };
      var ek = n(54146);
      let ProviderEventEmitter = class ProviderEventEmitter extends ek.v {};
      var __rest = function (e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, i = Object.getOwnPropertySymbols(e);
            s < i.length;
            s++
          )
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (n[i[s]] = e[i[s]]);
        return n;
      };
      let CoinbaseWalletProvider = class CoinbaseWalletProvider extends ProviderEventEmitter {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: i } = n,
            s = __rest(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = s),
            (this.communicator = new Communicator({
              url: i,
              metadata: t,
              preference: s,
            }));
          let a = e_.getItem(ey);
          a && (this.signer = this.initSigner(a));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                  throw l.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ("string" != typeof t || 0 === t.length)
                  throw l.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (
                  void 0 !== n &&
                  !Array.isArray(n) &&
                  ("object" != typeof n || null === n)
                )
                  throw l.rpc.invalidParams({
                    message:
                      "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case "eth_sign":
                  case "eth_signTypedData_v2":
                  case "eth_subscribe":
                  case "eth_unsubscribe":
                    throw l.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), e_.setItem(ey, t);
                  break;
                }
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return hexStringFromNumber(1);
                default:
                  throw l.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === s.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      let n = {};
                      return (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        hasKey(e, "code") &&
                        (function (e) {
                          if (!Number.isInteger(e)) return !1;
                          let t = e.toString();
                          return !!(a[t] || (e >= -32099 && e <= -32e3));
                        })(e.code)
                          ? ((n.code = e.code),
                            e.message && "string" == typeof e.message
                              ? ((n.message = e.message),
                                hasKey(e, "data") && (n.data = e.data))
                              : ((n.message = getMessageFromCode(n.code)),
                                (n.data = {
                                  originalError: assignOriginalError(e),
                                })))
                          : ((n.code = s.rpc.internal),
                            (n.message = hasStringProperty(e, "message")
                              ? e.message
                              : o),
                            (n.data = {
                              originalError: assignOriginalError(e),
                            })),
                        t &&
                          (n.stack = hasStringProperty(e, "stack")
                            ? e.stack
                            : void 0),
                        n
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: s.rpc.internal };
                        if (isErrorResponse(e)) {
                          let n = e.errorMessage,
                            i =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? s.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: i,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", J),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e
            ? void 0
            : e.cleanup()),
            (this.signer = null),
            ScopedLocalStorage.clearAll(),
            this.emit(
              "disconnect",
              l.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return fetchSignerType({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let {
              signerType: t,
              metadata: n,
              communicator: i,
              callback: s,
            } = e;
            switch (t) {
              case "scw":
                return new SCWSigner({
                  metadata: n,
                  callback: s,
                  communicator: i,
                });
              case "walletlink":
                return new WalletLinkSigner({ metadata: n, callback: s });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      };
      let eS = { options: "all" };
      function createCoinbaseWalletSDK(e) {
        var t;
        let n = new ScopedLocalStorage("CBWSDK");
        n.setItem("VERSION", J), ew();
        let i = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(
            eS,
            null !== (t = e.preference) && void 0 !== t ? t : {}
          ),
        };
        !(function (e) {
          if (e) {
            if (!["all", "smartWalletOnly", "eoaOnly"].includes(e.options))
              throw Error(`Invalid options: ${e.options}`);
            if (
              e.attribution &&
              void 0 !== e.attribution.auto &&
              void 0 !== e.attribution.dataSuffix
            )
              throw Error(
                "Attribution cannot contain both auto and dataSuffix properties"
              );
          }
        })(i.preference);
        let s = null;
        return {
          getProvider: () => (
            s ||
              (s = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !==
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, i;
                    let { appName: s, appLogoUrl: a, appChainIds: o } = e;
                    if ("smartWalletOnly" !== t.options) {
                      let e = (function () {
                        let e = globalThis;
                        return e.coinbaseWalletExtension;
                      })();
                      if (e)
                        return (
                          null === (n = e.setAppInfo) ||
                            void 0 === n ||
                            n.call(e, s, a, o, t),
                          e
                        );
                    }
                    let l = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null !== (e = n.ethereum) && void 0 !== e
                          ? e
                          : null === (t = n.top) || void 0 === t
                          ? void 0
                          : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == l ? void 0 : l.isCoinbaseBrowser)
                      return (
                        null === (i = l.setAppInfo) ||
                          void 0 === i ||
                          i.call(l, s, a, o, t),
                        l
                      );
                  })(n)) && void 0 !== t
                  ? t
                  : new CoinbaseWalletProvider(n);
              })(i)),
            s
          ),
        };
      }
    },
  },
]);
