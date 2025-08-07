"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9970],
  {
    19970: function (t, e, r) {
      r.d(e, {
        secp256k1: function () {
          return z;
        },
      });
      var n = {};
      r.r(n),
        r.d(n, {
          Fy: function () {
            return utils_aInRange;
          },
          uw: function () {
            return abool;
          },
          gk: function () {
            return abytes;
          },
          Dd: function () {
            return bitLen;
          },
          dQ: function () {
            return bitMask;
          },
          ci: function () {
            return bytesToHex;
          },
          bytesToNumberBE: function () {
            return utils_bytesToNumberBE;
          },
          ty: function () {
            return utils_bytesToNumberLE;
          },
          eV: function () {
            return utils_concatBytes;
          },
          n$: function () {
            return createHmacDrbg;
          },
          ql: function () {
            return utils_ensureBytes;
          },
          hexToBytes: function () {
            return hexToBytes;
          },
          Z2: function () {
            return utils_inRange;
          },
          _t: function () {
            return isBytes;
          },
          H9: function () {
            return memoized;
          },
          tL: function () {
            return utils_numberToBytesBE;
          },
          S5: function () {
            return numberToBytesLE;
          },
          uz: function () {
            return numberToHexUnpadded;
          },
          FF: function () {
            return validateObject;
          },
        });
      var i = r(3868),
        o = r(41656),
        s = r(15448);
      let HMAC = class HMAC extends s.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, o.z3)(t);
          let r = (0, s.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < i.length; t++) i[t] ^= 54;
          this.iHash.update(i), (this.oHash = t.create());
          for (let t = 0; t < i.length; t++) i[t] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(t) {
          return (0, o.$h)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, o.$h)(this),
            (0, o.gk)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      };
      let hmac = (t, e, r) => new HMAC(t, e).update(r).digest();
      hmac.create = (t, e) => new HMAC(t, e);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let l =
          BigInt(0),
        a = BigInt(1),
        u = BigInt(2);
      function isBytes(t) {
        return (
          t instanceof Uint8Array ||
          (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
        );
      }
      function abytes(t) {
        if (!isBytes(t)) throw Error("Uint8Array expected");
      }
      function abool(t, e) {
        if ("boolean" != typeof e)
          throw Error(t + " boolean expected, got " + e);
      }
      let f = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function bytesToHex(t) {
        abytes(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += f[t[r]];
        return e;
      }
      function numberToHexUnpadded(t) {
        let e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function hexToNumber(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return "" === t ? l : BigInt("0x" + t);
      }
      let d = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function asciiToBase16(t) {
        return t >= d._0 && t <= d._9
          ? t - d._0
          : t >= d.A && t <= d.F
          ? t - (d.A - 10)
          : t >= d.a && t <= d.f
          ? t - (d.a - 10)
          : void 0;
      }
      function hexToBytes(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length,
          r = e / 2;
        if (e % 2)
          throw Error("hex string expected, got unpadded hex of length " + e);
        let n = new Uint8Array(r);
        for (let e = 0, i = 0; e < r; e++, i += 2) {
          let r = asciiToBase16(t.charCodeAt(i)),
            o = asciiToBase16(t.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o) {
            let e = t[i] + t[i + 1];
            throw Error(
              'hex string expected, got non-hex character "' +
                e +
                '" at index ' +
                i
            );
          }
          n[e] = 16 * r + o;
        }
        return n;
      }
      function utils_bytesToNumberBE(t) {
        return hexToNumber(bytesToHex(t));
      }
      function utils_bytesToNumberLE(t) {
        return abytes(t), hexToNumber(bytesToHex(Uint8Array.from(t).reverse()));
      }
      function utils_numberToBytesBE(t, e) {
        return hexToBytes(t.toString(16).padStart(2 * e, "0"));
      }
      function numberToBytesLE(t, e) {
        return utils_numberToBytesBE(t, e).reverse();
      }
      function utils_ensureBytes(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = hexToBytes(e);
          } catch (e) {
            throw Error(t + " must be hex string or Uint8Array, cause: " + e);
          }
        else if (isBytes(e)) n = Uint8Array.from(e);
        else throw Error(t + " must be hex string or Uint8Array");
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(t + " of length " + r + " expected, got " + i);
        return n;
      }
      function utils_concatBytes(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          abytes(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let isPosBig = (t) => "bigint" == typeof t && l <= t;
      function utils_inRange(t, e, r) {
        return isPosBig(t) && isPosBig(e) && isPosBig(r) && e <= t && t < r;
      }
      function utils_aInRange(t, e, r, n) {
        if (!utils_inRange(e, r, n))
          throw Error(
            "expected valid " + t + ": " + r + " <= n < " + n + ", got " + e
          );
      }
      function bitLen(t) {
        let e;
        for (e = 0; t > l; t >>= a, e += 1);
        return e;
      }
      let bitMask = (t) => (u << BigInt(t - 1)) - a,
        u8n = (t) => new Uint8Array(t),
        u8fr = (t) => Uint8Array.from(t);
      function createHmacDrbg(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = u8n(t),
          i = u8n(t),
          o = 0,
          reset = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          h = (...t) => r(i, n, ...t),
          reseed = (t = u8n()) => {
            (i = h(u8fr([0]), t)),
              (n = h()),
              0 !== t.length && ((i = h(u8fr([1]), t)), (n = h()));
          },
          gen = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              n = h();
              let e = n.slice();
              r.push(e), (t += n.length);
            }
            return utils_concatBytes(...r);
          };
        return (t, e) => {
          let r;
          for (reset(), reseed(t); !(r = e(gen())); ) reseed();
          return reset(), r;
        };
      }
      let c = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) => "string" == typeof t || isBytes(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function validateObject(t, e, r = {}) {
        let checkField = (e, r, n) => {
          let i = c[r];
          if ("function" != typeof i) throw Error("invalid validator function");
          let o = t[e];
          if ((!n || void 0 !== o) && !i(o, t))
            throw Error(
              "param " + String(e) + " is invalid. Expected " + r + ", got " + o
            );
        };
        for (let [t, r] of Object.entries(e)) checkField(t, r, !1);
        for (let [t, e] of Object.entries(r)) checkField(t, e, !0);
        return t;
      }
      function memoized(t) {
        let e = new WeakMap();
        return (r, ...n) => {
          let i = e.get(r);
          if (void 0 !== i) return i;
          let o = t(r, ...n);
          return e.set(r, o), o;
        };
      }
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let g =
          BigInt(0),
        m = BigInt(1),
        y = BigInt(2),
        p = BigInt(3),
        b = BigInt(4),
        w = BigInt(5),
        B = BigInt(8);
      function modular_mod(t, e) {
        let r = t % e;
        return r >= g ? r : e + r;
      }
      function pow2(t, e, r) {
        let n = t;
        for (; e-- > g; ) (n *= n), (n %= r);
        return n;
      }
      function invert(t, e) {
        if (t === g) throw Error("invert: expected non-zero number");
        if (e <= g) throw Error("invert: expected positive modulus, got " + e);
        let r = modular_mod(t, e),
          n = e,
          i = g,
          o = m,
          s = m,
          l = g;
        for (; r !== g; ) {
          let t = n / r,
            e = n % r,
            a = i - s * t,
            u = o - l * t;
          (n = r), (r = e), (i = s), (o = l), (s = a), (l = u);
        }
        let a = n;
        if (a !== m) throw Error("invert: does not exist");
        return modular_mod(i, e);
      }
      let E = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function nLength(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function Field(t, e, r = !1, n = {}) {
        let i;
        if (t <= g) throw Error("invalid field: expected ORDER > 0, got " + t);
        let { nBitLength: o, nByteLength: s } = nLength(t, e);
        if (s > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let l = Object.freeze({
          ORDER: t,
          isLE: r,
          BITS: o,
          BYTES: s,
          MASK: bitMask(o),
          ZERO: g,
          ONE: m,
          create: (e) => modular_mod(e, t),
          isValid: (e) => {
            if ("bigint" != typeof e)
              throw Error(
                "invalid field element: expected bigint, got " + typeof e
              );
            return g <= e && e < t;
          },
          is0: (t) => t === g,
          isOdd: (t) => (t & m) === m,
          neg: (e) => modular_mod(-e, t),
          eql: (t, e) => t === e,
          sqr: (e) => modular_mod(e * e, t),
          add: (e, r) => modular_mod(e + r, t),
          sub: (e, r) => modular_mod(e - r, t),
          mul: (e, r) => modular_mod(e * r, t),
          pow: (t, e) =>
            (function (t, e, r) {
              if (r < g) throw Error("invalid exponent, negatives unsupported");
              if (r === g) return t.ONE;
              if (r === m) return e;
              let n = t.ONE,
                i = e;
              for (; r > g; )
                r & m && (n = t.mul(n, i)), (i = t.sqr(i)), (r >>= m);
              return n;
            })(l, t, e),
          div: (e, r) => modular_mod(e * invert(r, t), t),
          sqrN: (t) => t * t,
          addN: (t, e) => t + e,
          subN: (t, e) => t - e,
          mulN: (t, e) => t * e,
          inv: (e) => invert(e, t),
          sqrt:
            n.sqrt ||
            ((e) => (
              i ||
                (i = (function (t) {
                  if (t % b === p) {
                    let e = (t + m) / b;
                    return function (t, r) {
                      let n = t.pow(r, e);
                      if (!t.eql(t.sqr(n), r))
                        throw Error("Cannot find square root");
                      return n;
                    };
                  }
                  if (t % B === w) {
                    let e = (t - w) / B;
                    return function (t, r) {
                      let n = t.mul(r, y),
                        i = t.pow(n, e),
                        o = t.mul(r, i),
                        s = t.mul(t.mul(o, y), i),
                        l = t.mul(o, t.sub(s, t.ONE));
                      if (!t.eql(t.sqr(l), r))
                        throw Error("Cannot find square root");
                      return l;
                    };
                  }
                  return (function (t) {
                    let e, r, n;
                    let i = (t - m) / y;
                    for (e = t - m, r = 0; e % y === g; e /= y, r++);
                    for (
                      n = y;
                      n < t &&
                      (function (t, e, r) {
                        if (e < g)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (r <= g) throw Error("invalid modulus");
                        if (r === m) return g;
                        let n = m;
                        for (; e > g; )
                          e & m && (n = (n * t) % r),
                            (t = (t * t) % r),
                            (e >>= m);
                        return n;
                      })(n, i, t) !==
                        t - m;
                      n++
                    )
                      if (n > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let e = (t + m) / b;
                      return function (t, r) {
                        let n = t.pow(r, e);
                        if (!t.eql(t.sqr(n), r))
                          throw Error("Cannot find square root");
                        return n;
                      };
                    }
                    let o = (e + m) / y;
                    return function (t, s) {
                      if (t.pow(s, i) === t.neg(t.ONE))
                        throw Error("Cannot find square root");
                      let l = r,
                        a = t.pow(t.mul(t.ONE, n), e),
                        u = t.pow(s, o),
                        f = t.pow(s, e);
                      for (; !t.eql(f, t.ONE); ) {
                        if (t.eql(f, t.ZERO)) return t.ZERO;
                        let e = 1;
                        for (let r = t.sqr(f); e < l && !t.eql(r, t.ONE); e++)
                          r = t.sqr(r);
                        let r = t.pow(a, m << BigInt(l - e - 1));
                        (a = t.sqr(r)),
                          (u = t.mul(u, r)),
                          (f = t.mul(f, a)),
                          (l = e);
                      }
                      return u;
                    };
                  })(t);
                })(t)),
              i(l, e)
            )),
          invertBatch: (t) =>
            (function (t, e) {
              let r = Array(e.length),
                n = e.reduce(
                  (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                  t.ONE
                ),
                i = t.inv(n);
              return (
                e.reduceRight(
                  (e, n, i) =>
                    t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                  i
                ),
                r
              );
            })(l, t),
          cmov: (t, e, r) => (r ? e : t),
          toBytes: (t) =>
            r ? numberToBytesLE(t, s) : utils_numberToBytesBE(t, s),
          fromBytes: (t) => {
            if (t.length !== s)
              throw Error(
                "Field.fromBytes: expected " + s + " bytes, got " + t.length
              );
            return r ? utils_bytesToNumberLE(t) : utils_bytesToNumberBE(t);
          },
        });
        return Object.freeze(l);
      }
      function getFieldBytesLength(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        let e = t.toString(2).length;
        return Math.ceil(e / 8);
      }
      function getMinHashLength(t) {
        let e = getFieldBytesLength(t);
        return e + Math.ceil(e / 2);
      }
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let v =
          BigInt(0),
        x = BigInt(1);
      function constTimeNegate(t, e) {
        let r = e.negate();
        return t ? r : e;
      }
      function validateW(t, e) {
        if (!Number.isSafeInteger(t) || t <= 0 || t > e)
          throw Error(
            "invalid window size, expected [1.." + e + "], got W=" + t
          );
      }
      function calcWOpts(t, e) {
        validateW(t, e);
        let r = Math.ceil(e / t) + 1,
          n = 2 ** (t - 1);
        return { windows: r, windowSize: n };
      }
      let S = new WeakMap(),
        N = new WeakMap();
      function getW(t) {
        return N.get(t) || 1;
      }
      function validateBasic(t) {
        return (
          !(function (t) {
            let e = E.reduce((t, e) => ((t[e] = "function"), t), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            validateObject(t, e);
          })(t.Fp),
          validateObject(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...nLength(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
        );
      }
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function validateSigVerOpts(
        t
      ) {
        void 0 !== t.lowS && abool("lowS", t.lowS),
          void 0 !== t.prehash && abool("prehash", t.prehash);
      }
      let { bytesToNumberBE: _, hexToBytes: T } = n,
        P = {
          Err: class extends Error {
            constructor(t = "") {
              super(t);
            }
          },
          _tlv: {
            encode: (t, e) => {
              let { Err: r } = P;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (1 & e.length) throw new r("tlv.encode: unpadded data");
              let n = e.length / 2,
                i = numberToHexUnpadded(n);
              if ((i.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let o = n > 127 ? numberToHexUnpadded((i.length / 2) | 128) : "",
                s = numberToHexUnpadded(t);
              return s + o + i + e;
            },
            decode(t, e) {
              let { Err: r } = P,
                n = 0;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (e.length < 2 || e[n++] !== t)
                throw new r("tlv.decode: wrong tlv");
              let i = e[n++],
                o = !!(128 & i),
                s = 0;
              if (o) {
                let t = 127 & i;
                if (!t)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (t > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let o = e.subarray(n, n + t);
                if (o.length !== t)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === o[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let t of o) s = (s << 8) | t;
                if (((n += t), s < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else s = i;
              let l = e.subarray(n, n + s);
              if (l.length !== s) throw new r("tlv.decode: wrong value length");
              return { v: l, l: e.subarray(n + s) };
            },
          },
          _int: {
            encode(t) {
              let { Err: e } = P;
              if (t < O)
                throw new e("integer: negative integers are not allowed");
              let r = numberToHexUnpadded(t);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new e("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(t) {
              let { Err: e } = P;
              if (128 & t[0])
                throw new e("invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new e(
                  "invalid signature integer: unnecessary leading zero"
                );
              return _(t);
            },
          },
          toSig(t) {
            let { Err: e, _int: r, _tlv: n } = P,
              i = "string" == typeof t ? T(t) : t;
            abytes(i);
            let { v: o, l: s } = n.decode(48, i);
            if (s.length)
              throw new e("invalid signature: left bytes after parsing");
            let { v: l, l: a } = n.decode(2, o),
              { v: u, l: f } = n.decode(2, a);
            if (f.length)
              throw new e("invalid signature: left bytes after parsing");
            return { r: r.decode(l), s: r.decode(u) };
          },
          hexFromSig(t) {
            let { _tlv: e, _int: r } = P,
              n = e.encode(2, r.encode(t.r)),
              i = e.encode(2, r.encode(t.s));
            return e.encode(48, n + i);
          },
        },
        O = BigInt(0),
        I = BigInt(1),
        A = (BigInt(2), BigInt(3));
      BigInt(4);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let R =
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          ),
        H = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        q = BigInt(1),
        L = BigInt(2),
        divNearest = (t, e) => (t + e / L) / e,
        F = Field(R, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              s = BigInt(44),
              l = BigInt(88),
              a = (t * t * t) % R,
              u = (a * a * t) % R,
              f = (pow2(u, e, R) * u) % R,
              d = (pow2(f, e, R) * u) % R,
              c = (pow2(d, L, R) * a) % R,
              g = (pow2(c, n, R) * c) % R,
              m = (pow2(g, i, R) * g) % R,
              y = (pow2(m, s, R) * m) % R,
              p = (pow2(y, l, R) * y) % R,
              b = (pow2(p, s, R) * m) % R,
              w = (pow2(b, e, R) * u) % R,
              B = (pow2(w, o, R) * g) % R,
              E = (pow2(B, r, R) * a) % R,
              v = pow2(E, L, R);
            if (!F.eql(F.sqr(v), t)) throw Error("Cannot find square root");
            return v;
          },
        }),
        z = (function (t, e) {
          let create = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = validateBasic(t);
                  return (
                    validateObject(
                      e,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                i = r.BYTES + 1,
                o = 2 * r.BYTES + 1;
              function modN(t) {
                return modular_mod(t, n);
              }
              let {
                  ProjectivePoint: s,
                  normPrivateKeyToScalar: l,
                  weierstrassEquation: a,
                  isWithinCurveOrder: u,
                } = (function (t) {
                  var e;
                  let r = (function (t) {
                      let e = validateBasic(t);
                      validateObject(
                        e,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = e;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...e });
                    })(t),
                    { Fp: n } = r,
                    i = Field(r.n, r.nBitLength),
                    o =
                      r.toBytes ||
                      ((t, e, r) => {
                        let i = e.toAffine();
                        return utils_concatBytes(
                          Uint8Array.from([4]),
                          n.toBytes(i.x),
                          n.toBytes(i.y)
                        );
                      }),
                    s =
                      r.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1),
                          r = n.fromBytes(e.subarray(0, n.BYTES)),
                          i = n.fromBytes(e.subarray(n.BYTES, 2 * n.BYTES));
                        return { x: r, y: i };
                      });
                  function weierstrassEquation(t) {
                    let { a: e, b: i } = r,
                      o = n.sqr(t),
                      s = n.mul(o, t);
                    return n.add(n.add(s, n.mul(t, e)), i);
                  }
                  if (!n.eql(n.sqr(r.Gy), weierstrassEquation(r.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function normPrivateKeyToScalar(t) {
                    let e;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: o,
                      n: s,
                    } = r;
                    if (n && "bigint" != typeof t) {
                      if (
                        (isBytes(t) && (t = bytesToHex(t)),
                        "string" != typeof t || !n.includes(t.length))
                      )
                        throw Error("invalid private key");
                      t = t.padStart(2 * i, "0");
                    }
                    try {
                      e =
                        "bigint" == typeof t
                          ? t
                          : utils_bytesToNumberBE(
                              utils_ensureBytes("private key", t, i)
                            );
                    } catch (e) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof t
                      );
                    }
                    return (
                      o && (e = modular_mod(e, s)),
                      utils_aInRange("private key", e, I, s),
                      e
                    );
                  }
                  function assertPrjPoint(t) {
                    if (!(t instanceof Point))
                      throw Error("ProjectivePoint expected");
                  }
                  let l = memoized((t, e) => {
                      let { px: r, py: i, pz: o } = t;
                      if (n.eql(o, n.ONE)) return { x: r, y: i };
                      let s = t.is0();
                      null == e && (e = s ? n.ONE : n.inv(o));
                      let l = n.mul(r, e),
                        a = n.mul(i, e),
                        u = n.mul(o, e);
                      if (s) return { x: n.ZERO, y: n.ZERO };
                      if (!n.eql(u, n.ONE)) throw Error("invZ was invalid");
                      return { x: l, y: a };
                    }),
                    a = memoized((t) => {
                      if (t.is0()) {
                        if (r.allowInfinityPoint && !n.is0(t.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: e, y: i } = t.toAffine();
                      if (!n.isValid(e) || !n.isValid(i))
                        throw Error("bad point: x or y not FE");
                      let o = n.sqr(i),
                        s = weierstrassEquation(e);
                      if (!n.eql(o, s))
                        throw Error("bad point: equation left != right");
                      if (!t.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  let Point = class Point {
                    constructor(t, e, r) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = r),
                        null == t || !n.isValid(t))
                      )
                        throw Error("x required");
                      if (null == e || !n.isValid(e)) throw Error("y required");
                      if (null == r || !n.isValid(r)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(t) {
                      let { x: e, y: r } = t || {};
                      if (!t || !n.isValid(e) || !n.isValid(r))
                        throw Error("invalid affine point");
                      if (t instanceof Point)
                        throw Error("projective point not allowed");
                      let is0 = (t) => n.eql(t, n.ZERO);
                      return is0(e) && is0(r)
                        ? Point.ZERO
                        : new Point(e, r, n.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = n.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(Point.fromAffine);
                    }
                    static fromHex(t) {
                      let e = Point.fromAffine(
                        s(utils_ensureBytes("pointHex", t))
                      );
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return Point.BASE.multiply(normPrivateKeyToScalar(t));
                    }
                    static msm(t, e) {
                      return (function (t, e, r, n) {
                        if (
                          (!(function (t, e) {
                            if (!Array.isArray(t))
                              throw Error("array expected");
                            t.forEach((t, r) => {
                              if (!(t instanceof e))
                                throw Error("invalid point at index " + r);
                            });
                          })(r, t),
                          !(function (t, e) {
                            if (!Array.isArray(t))
                              throw Error("array of scalars expected");
                            t.forEach((t, r) => {
                              if (!e.isValid(t))
                                throw Error("invalid scalar at index " + r);
                            });
                          })(n, e),
                          r.length !== n.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let i = t.ZERO,
                          o = bitLen(BigInt(r.length)),
                          s = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1,
                          l = (1 << s) - 1,
                          a = Array(l + 1).fill(i),
                          u = Math.floor((e.BITS - 1) / s) * s,
                          f = i;
                        for (let t = u; t >= 0; t -= s) {
                          a.fill(i);
                          for (let e = 0; e < n.length; e++) {
                            let i = n[e],
                              o = Number((i >> BigInt(t)) & BigInt(l));
                            a[o] = a[o].add(r[e]);
                          }
                          let e = i;
                          for (let t = a.length - 1, r = i; t > 0; t--)
                            (r = r.add(a[t])), (e = e.add(r));
                          if (((f = f.add(e)), 0 !== t))
                            for (let t = 0; t < s; t++) f = f.double();
                        }
                        return f;
                      })(Point, i, t, e);
                    }
                    _setWindowSize(t) {
                      f.setWindowSize(this, t);
                    }
                    assertValidity() {
                      a(this);
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (n.isOdd) return !n.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      assertPrjPoint(t);
                      let { px: e, py: r, pz: i } = this,
                        { px: o, py: s, pz: l } = t,
                        a = n.eql(n.mul(e, l), n.mul(o, i)),
                        u = n.eql(n.mul(r, l), n.mul(s, i));
                      return a && u;
                    }
                    negate() {
                      return new Point(this.px, n.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: e } = r,
                        i = n.mul(e, A),
                        { px: o, py: s, pz: l } = this,
                        a = n.ZERO,
                        u = n.ZERO,
                        f = n.ZERO,
                        d = n.mul(o, o),
                        c = n.mul(s, s),
                        g = n.mul(l, l),
                        m = n.mul(o, s);
                      return (
                        (m = n.add(m, m)),
                        (f = n.mul(o, l)),
                        (f = n.add(f, f)),
                        (a = n.mul(t, f)),
                        (u = n.mul(i, g)),
                        (u = n.add(a, u)),
                        (a = n.sub(c, u)),
                        (u = n.add(c, u)),
                        (u = n.mul(a, u)),
                        (a = n.mul(m, a)),
                        (f = n.mul(i, f)),
                        (g = n.mul(t, g)),
                        (m = n.sub(d, g)),
                        (m = n.mul(t, m)),
                        (m = n.add(m, f)),
                        (f = n.add(d, d)),
                        (d = n.add(f, d)),
                        (d = n.add(d, g)),
                        (d = n.mul(d, m)),
                        (u = n.add(u, d)),
                        (g = n.mul(s, l)),
                        (g = n.add(g, g)),
                        (d = n.mul(g, m)),
                        (a = n.sub(a, d)),
                        (f = n.mul(g, c)),
                        (f = n.add(f, f)),
                        (f = n.add(f, f)),
                        new Point(a, u, f)
                      );
                    }
                    add(t) {
                      assertPrjPoint(t);
                      let { px: e, py: i, pz: o } = this,
                        { px: s, py: l, pz: a } = t,
                        u = n.ZERO,
                        f = n.ZERO,
                        d = n.ZERO,
                        c = r.a,
                        g = n.mul(r.b, A),
                        m = n.mul(e, s),
                        y = n.mul(i, l),
                        p = n.mul(o, a),
                        b = n.add(e, i),
                        w = n.add(s, l);
                      (b = n.mul(b, w)),
                        (w = n.add(m, y)),
                        (b = n.sub(b, w)),
                        (w = n.add(e, o));
                      let B = n.add(s, a);
                      return (
                        (w = n.mul(w, B)),
                        (B = n.add(m, p)),
                        (w = n.sub(w, B)),
                        (B = n.add(i, o)),
                        (u = n.add(l, a)),
                        (B = n.mul(B, u)),
                        (u = n.add(y, p)),
                        (B = n.sub(B, u)),
                        (d = n.mul(c, w)),
                        (u = n.mul(g, p)),
                        (d = n.add(u, d)),
                        (u = n.sub(y, d)),
                        (d = n.add(y, d)),
                        (f = n.mul(u, d)),
                        (y = n.add(m, m)),
                        (y = n.add(y, m)),
                        (p = n.mul(c, p)),
                        (w = n.mul(g, w)),
                        (y = n.add(y, p)),
                        (p = n.sub(m, p)),
                        (p = n.mul(c, p)),
                        (w = n.add(w, p)),
                        (m = n.mul(y, w)),
                        (f = n.add(f, m)),
                        (m = n.mul(B, w)),
                        (u = n.mul(b, u)),
                        (u = n.sub(u, m)),
                        (m = n.mul(b, y)),
                        (d = n.mul(B, d)),
                        (d = n.add(d, m)),
                        new Point(u, f, d)
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(Point.ZERO);
                    }
                    wNAF(t) {
                      return f.wNAFCached(this, t, Point.normalizeZ);
                    }
                    multiplyUnsafe(t) {
                      let { endo: e, n: i } = r;
                      utils_aInRange("scalar", t, O, i);
                      let o = Point.ZERO;
                      if (t === O) return o;
                      if (this.is0() || t === I) return this;
                      if (!e || f.hasPrecomputes(this))
                        return f.wNAFCachedUnsafe(this, t, Point.normalizeZ);
                      let {
                          k1neg: s,
                          k1: l,
                          k2neg: a,
                          k2: u,
                        } = e.splitScalar(t),
                        d = o,
                        c = o,
                        g = this;
                      for (; l > O || u > O; )
                        l & I && (d = d.add(g)),
                          u & I && (c = c.add(g)),
                          (g = g.double()),
                          (l >>= I),
                          (u >>= I);
                      return (
                        s && (d = d.negate()),
                        a && (c = c.negate()),
                        (c = new Point(n.mul(c.px, e.beta), c.py, c.pz)),
                        d.add(c)
                      );
                    }
                    multiply(t) {
                      let e, i;
                      let { endo: o, n: s } = r;
                      if ((utils_aInRange("scalar", t, I, s), o)) {
                        let {
                            k1neg: r,
                            k1: s,
                            k2neg: l,
                            k2: a,
                          } = o.splitScalar(t),
                          { p: u, f: d } = this.wNAF(s),
                          { p: c, f: g } = this.wNAF(a);
                        (u = f.constTimeNegate(r, u)),
                          (c = f.constTimeNegate(l, c)),
                          (c = new Point(n.mul(c.px, o.beta), c.py, c.pz)),
                          (e = u.add(c)),
                          (i = d.add(g));
                      } else {
                        let { p: r, f: n } = this.wNAF(t);
                        (e = r), (i = n);
                      }
                      return Point.normalizeZ([e, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = Point.BASE,
                        mul = (t, e) =>
                          e !== O && e !== I && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        i = mul(this, e).add(mul(t, r));
                      return i.is0() ? void 0 : i;
                    }
                    toAffine(t) {
                      return l(this, t);
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: e } = r;
                      if (t === I) return !0;
                      if (e) return e(Point, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: e } = r;
                      return t === I
                        ? this
                        : e
                        ? e(Point, this)
                        : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(t = !0) {
                      return (
                        abool("isCompressed", t),
                        this.assertValidity(),
                        o(Point, this, t)
                      );
                    }
                    toHex(t = !0) {
                      return (
                        abool("isCompressed", t), bytesToHex(this.toRawBytes(t))
                      );
                    }
                  };
                  (Point.BASE = new Point(r.Gx, r.Gy, n.ONE)),
                    (Point.ZERO = new Point(n.ZERO, n.ONE, n.ZERO));
                  let u = r.nBitLength,
                    f =
                      ((e = r.endo ? Math.ceil(u / 2) : u),
                      {
                        constTimeNegate,
                        hasPrecomputes: (t) => 1 !== getW(t),
                        unsafeLadder(t, e, r = Point.ZERO) {
                          let n = t;
                          for (; e > v; )
                            e & x && (r = r.add(n)),
                              (n = n.double()),
                              (e >>= x);
                          return r;
                        },
                        precomputeWindow(t, r) {
                          let { windows: n, windowSize: i } = calcWOpts(r, e),
                            o = [],
                            s = t,
                            l = s;
                          for (let t = 0; t < n; t++) {
                            (l = s), o.push(l);
                            for (let t = 1; t < i; t++)
                              (l = l.add(s)), o.push(l);
                            s = l.double();
                          }
                          return o;
                        },
                        wNAF(t, r, n) {
                          let { windows: i, windowSize: o } = calcWOpts(t, e),
                            s = Point.ZERO,
                            l = Point.BASE,
                            a = BigInt(2 ** t - 1),
                            u = 2 ** t,
                            f = BigInt(t);
                          for (let t = 0; t < i; t++) {
                            let e = t * o,
                              i = Number(n & a);
                            (n >>= f), i > o && ((i -= u), (n += x));
                            let d = e + Math.abs(i) - 1,
                              c = t % 2 != 0,
                              g = i < 0;
                            0 === i
                              ? (l = l.add(constTimeNegate(c, r[e])))
                              : (s = s.add(constTimeNegate(g, r[d])));
                          }
                          return { p: s, f: l };
                        },
                        wNAFUnsafe(t, r, n, i = Point.ZERO) {
                          let { windows: o, windowSize: s } = calcWOpts(t, e),
                            l = BigInt(2 ** t - 1),
                            a = 2 ** t,
                            u = BigInt(t);
                          for (let t = 0; t < o; t++) {
                            let e = t * s;
                            if (n === v) break;
                            let o = Number(n & l);
                            if (
                              ((n >>= u),
                              o > s && ((o -= a), (n += x)),
                              0 === o)
                            )
                              continue;
                            let f = r[e + Math.abs(o) - 1];
                            o < 0 && (f = f.negate()), (i = i.add(f));
                          }
                          return i;
                        },
                        getPrecomputes(t, e, r) {
                          let n = S.get(e);
                          return (
                            n ||
                              ((n = this.precomputeWindow(e, t)),
                              1 !== t && S.set(e, r(n))),
                            n
                          );
                        },
                        wNAFCached(t, e, r) {
                          let n = getW(t);
                          return this.wNAF(n, this.getPrecomputes(n, t, r), e);
                        },
                        wNAFCachedUnsafe(t, e, r, n) {
                          let i = getW(t);
                          return 1 === i
                            ? this.unsafeLadder(t, e, n)
                            : this.wNAFUnsafe(
                                i,
                                this.getPrecomputes(i, t, r),
                                e,
                                n
                              );
                        },
                        setWindowSize(t, r) {
                          validateW(r, e), N.set(t, r), S.delete(t);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: Point,
                    normPrivateKeyToScalar,
                    weierstrassEquation,
                    isWithinCurveOrder: function (t) {
                      return utils_inRange(t, I, r.n);
                    },
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let i = e.toAffine(),
                      o = r.toBytes(i.x),
                      s = utils_concatBytes;
                    return (abool("isCompressed", n), n)
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                      : s(Uint8Array.from([4]), o, r.toBytes(i.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      s = t.subarray(1);
                    if (e === i && (2 === n || 3 === n)) {
                      let t;
                      let e = utils_bytesToNumberBE(s);
                      if (!utils_inRange(e, I, r.ORDER))
                        throw Error("Point is not on curve");
                      let i = a(e);
                      try {
                        t = r.sqrt(i);
                      } catch (e) {
                        let t = e instanceof Error ? ": " + e.message : "";
                        throw Error("Point is not on curve" + t);
                      }
                      let o = (t & I) === I;
                      return (
                        ((1 & n) == 1) !== o && (t = r.neg(t)), { x: e, y: t }
                      );
                    }
                    if (e === o && 4 === n) {
                      let t = r.fromBytes(s.subarray(0, r.BYTES)),
                        e = r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES));
                      return { x: t, y: e };
                    }
                    throw Error(
                      "invalid Point, expected length of " +
                        i +
                        ", or uncompressed " +
                        o +
                        ", got " +
                        e
                    );
                  },
                }),
                numToNByteStr = (t) =>
                  bytesToHex(utils_numberToBytesBE(t, e.nByteLength));
              function isBiggerThanHalfOrder(t) {
                let e = n >> I;
                return t > e;
              }
              let slcNum = (t, e, r) => utils_bytesToNumberBE(t.slice(e, r));
              let Signature = class Signature {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return (
                    (t = utils_ensureBytes("compactSignature", t, 2 * r)),
                    new Signature(slcNum(t, 0, r), slcNum(t, r, 2 * r))
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = P.toSig(utils_ensureBytes("DER", t));
                  return new Signature(e, r);
                }
                assertValidity() {
                  utils_aInRange("r", this.r, I, n),
                    utils_aInRange("s", this.s, I, n);
                }
                addRecoveryBit(t) {
                  return new Signature(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: i, s: o, recovery: l } = this,
                    a = d(utils_ensureBytes("msgHash", t));
                  if (null == l || ![0, 1, 2, 3].includes(l))
                    throw Error("recovery id invalid");
                  let u = 2 === l || 3 === l ? i + e.n : i;
                  if (u >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let f = (1 & l) == 0 ? "02" : "03",
                    c = s.fromHex(f + numToNByteStr(u)),
                    g = invert(u, n),
                    m = modN(-a * g),
                    y = modN(o * g),
                    p = s.BASE.multiplyAndAddUnsafe(c, m, y);
                  if (!p) throw Error("point at infinify");
                  return p.assertValidity(), p;
                }
                hasHighS() {
                  return isBiggerThanHalfOrder(this.s);
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new Signature(this.r, modN(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return P.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return numToNByteStr(this.r) + numToNByteStr(this.s);
                }
              };
              function isProbPub(t) {
                let e = isBytes(t),
                  r = "string" == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === i || n === o
                  : r
                  ? n === 2 * i || n === 2 * o
                  : t instanceof s;
              }
              let f =
                  e.bits2int ||
                  function (t) {
                    if (t.length > 8192) throw Error("input is too large");
                    let r = utils_bytesToNumberBE(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                d =
                  e.bits2int_modN ||
                  function (t) {
                    return modN(f(t));
                  },
                c = bitMask(e.nBitLength);
              function int2octets(t) {
                return (
                  utils_aInRange("num < 2^" + e.nBitLength, t, O, c),
                  utils_numberToBytesBE(t, e.nByteLength)
                );
              }
              let g = { lowS: e.lowS, prehash: !1 },
                y = { lowS: e.lowS, prehash: !1 };
              return (
                s.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return s.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (isProbPub(t))
                      throw Error("first arg must be private key");
                    if (!isProbPub(e))
                      throw Error("second arg must be public key");
                    let n = s.fromHex(e);
                    return n.multiply(l(t)).toRawBytes(r);
                  },
                  sign: function (t, i, o = g) {
                    let { seed: a, k2sig: c } = (function (t, i, o = g) {
                        if (["recovered", "canonical"].some((t) => t in o))
                          throw Error("sign() legacy options not supported");
                        let { hash: a, randomBytes: c } = e,
                          { lowS: m, prehash: y, extraEntropy: p } = o;
                        null == m && (m = !0),
                          (t = utils_ensureBytes("msgHash", t)),
                          validateSigVerOpts(o),
                          y &&
                            (t = utils_ensureBytes("prehashed msgHash", a(t)));
                        let b = d(t),
                          w = l(i),
                          B = [int2octets(w), int2octets(b)];
                        if (null != p && !1 !== p) {
                          let t = !0 === p ? c(r.BYTES) : p;
                          B.push(utils_ensureBytes("extraEntropy", t));
                        }
                        let E = utils_concatBytes(...B);
                        return {
                          seed: E,
                          k2sig: function (t) {
                            let e = f(t);
                            if (!u(e)) return;
                            let r = invert(e, n),
                              i = s.BASE.multiply(e).toAffine(),
                              o = modN(i.x);
                            if (o === O) return;
                            let l = modN(r * modN(b + o * w));
                            if (l === O) return;
                            let a = (i.x === o ? 0 : 2) | Number(i.y & I),
                              d = l;
                            return (
                              m &&
                                isBiggerThanHalfOrder(l) &&
                                ((d = isBiggerThanHalfOrder(l) ? modN(-l) : l),
                                (a ^= 1)),
                              new Signature(o, d, a)
                            );
                          },
                        };
                      })(t, i, o),
                      m = createHmacDrbg(
                        e.hash.outputLen,
                        e.nByteLength,
                        e.hmac
                      );
                    return m(a, c);
                  },
                  verify: function (t, r, i, o = y) {
                    let l, a;
                    (r = utils_ensureBytes("msgHash", r)),
                      (i = utils_ensureBytes("publicKey", i));
                    let { lowS: u, prehash: f, format: c } = o;
                    if ((validateSigVerOpts(o), "strict" in o))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== c && "compact" !== c && "der" !== c)
                      throw Error("format must be compact or der");
                    let g = "string" == typeof t || isBytes(t),
                      m =
                        !g &&
                        !c &&
                        "object" == typeof t &&
                        null !== t &&
                        "bigint" == typeof t.r &&
                        "bigint" == typeof t.s;
                    if (!g && !m)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((m && (a = new Signature(t.r, t.s)), g)) {
                        try {
                          "compact" !== c && (a = Signature.fromDER(t));
                        } catch (t) {
                          if (!(t instanceof P.Err)) throw t;
                        }
                        a || "der" === c || (a = Signature.fromCompact(t));
                      }
                      l = s.fromHex(i);
                    } catch (t) {
                      return !1;
                    }
                    if (!a || (u && a.hasHighS())) return !1;
                    f && (r = e.hash(r));
                    let { r: p, s: b } = a,
                      w = d(r),
                      B = invert(b, n),
                      E = modN(w * B),
                      v = modN(p * B),
                      x = s.BASE.multiplyAndAddUnsafe(l, E, v)?.toAffine();
                    if (!x) return !1;
                    let S = modN(x.x);
                    return S === p;
                  },
                  ProjectivePoint: s,
                  Signature,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return l(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: l,
                    randomPrivateKey: () => {
                      let t = getMinHashLength(e.n);
                      return (function (t, e, r = !1) {
                        let n = t.length,
                          i = getFieldBytesLength(e),
                          o = getMinHashLength(e);
                        if (n < 16 || n < o || n > 1024)
                          throw Error(
                            "expected " + o + "-1024 bytes of input, got " + n
                          );
                        let s = r
                            ? utils_bytesToNumberLE(t)
                            : utils_bytesToNumberBE(t),
                          l = modular_mod(s, e - m) + m;
                        return r
                          ? numberToBytesLE(l, i)
                          : utils_numberToBytesBE(l, i);
                      })(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = s.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => hmac(e, t, (0, s.eV)(...r)),
              randomBytes: s.O6,
            });
          return { ...create(e), create };
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: F,
            n: H,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -q * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = divNearest(e * t, H),
                  s = divNearest(-r * t, H),
                  l = modular_mod(t - o * e - s * n, H),
                  a = modular_mod(-o * r - s * e, H),
                  u = l > i,
                  f = a > i;
                if ((u && (l = H - l), f && (a = H - a), l > i || a > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: u, k1: l, k2neg: f, k2: a };
              },
            },
          },
          i.JQ
        );
      BigInt(0), z.ProjectivePoint;
    },
  },
]);
