window.sm2 = function(t) {
    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    var e = {};
    return i.m = t,
    i.c = e,
    i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    },
    i.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return i.d(e, "a", e),
        e
    },
    i.o = function(t, i) {
        return Object.prototype.hasOwnProperty.call(t, i)
    },
    i.p = "",
    i(i.s = 3)
} ([function(t, i, e) { (function() {
        function e(t, i, e) {
            null != t && ("number" == typeof t ? this.fromNumber(t, i, e) : null == i && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, i))
        }
        function r() {
            return new e(null)
        }
        function n(t, i, e, r, n, s) {
            for (; --s >= 0;) {
                var o = i * this[t++] + e[r] + n;
                n = Math.floor(o / 67108864),
                e[r++] = 67108863 & o
            }
            return n
        }
        function s(t, i, e, r, n, s) {
            for (var o = 32767 & i,
            h = i >> 15; --s >= 0;) {
                var u = 32767 & this[t],
                a = this[t++] >> 15,
                f = h * u + a * o;
                u = o * u + ((32767 & f) << 15) + e[r] + (1073741823 & n),
                n = (u >>> 30) + (f >>> 15) + h * a + (n >>> 30),
                e[r++] = 1073741823 & u
            }
            return n
        }
        function o(t, i, e, r, n, s) {
            for (var o = 16383 & i,
            h = i >> 14; --s >= 0;) {
                var u = 16383 & this[t],
                a = this[t++] >> 14,
                f = h * u + a * o;
                u = o * u + ((16383 & f) << 14) + e[r] + n,
                n = (u >> 28) + (f >> 14) + h * a,
                e[r++] = 268435455 & u
            }
            return n
        }
        function h(t) {
            return pi.charAt(t)
        }
        function u(t, i) {
            var e = yi[t.charCodeAt(i)];
            return null == e ? -1 : e
        }
        function a(t) {
            for (var i = this.t - 1; i >= 0; --i) t[i] = this[i];
            t.t = this.t,
            t.s = this.s
        }
        function f(t) {
            this.t = 1,
            this.s = t < 0 ? -1 : 0,
            t > 0 ? this[0] = t: t < -1 ? this[0] = t + this.DV: this.t = 0
        }
        function l(t) {
            var i = r();
            return i.fromInt(t),
            i
        }
        function c(t, i) {
            var r;
            if (16 == i) r = 4;
            else if (8 == i) r = 3;
            else if (256 == i) r = 8;
            else if (2 == i) r = 1;
            else if (32 == i) r = 5;
            else {
                if (4 != i) return void this.fromRadix(t, i);
                r = 2
            }
            this.t = 0,
            this.s = 0;
            for (var n = t.length,
            s = !1,
            o = 0; --n >= 0;) {
                var h = 8 == r ? 255 & t[n] : u(t, n);
                h < 0 ? "-" == t.charAt(n) && (s = !0) : (s = !1, 0 == o ? this[this.t++] = h: o + r > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - o) - 1) << o, this[this.t++] = h >> this.DB - o) : this[this.t - 1] |= h << o, (o += r) >= this.DB && (o -= this.DB))
            }
            8 == r && 0 != (128 & t[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
            this.clamp(),
            s && e.ZERO.subTo(this, this)
        }
        function p() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)--this.t
        }
        function y(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var i;
            if (16 == t) i = 4;
            else if (8 == t) i = 3;
            else if (2 == t) i = 1;
            else if (32 == t) i = 5;
            else {
                if (4 != t) return this.toRadix(t);
                i = 2
            }
            var e, r = (1 << i) - 1,
            n = !1,
            s = "",
            o = this.t,
            u = this.DB - o * this.DB % i;
            if (o-->0) for (u < this.DB && (e = this[o] >> u) > 0 && (n = !0, s = h(e)); o >= 0;) u < i ? (e = (this[o] & (1 << u) - 1) << i - u, e |= this[--o] >> (u += this.DB - i)) : (e = this[o] >> (u -= i) & r, u <= 0 && (u += this.DB, --o)),
            e > 0 && (n = !0),
            n && (s += h(e));
            return n ? s: "0"
        }
        function v() {
            var t = r();
            return e.ZERO.subTo(this, t),
            t
        }
        function g() {
            return this.s < 0 ? this.negate() : this
        }
        function m(t) {
            var i = this.s - t.s;
            if (0 != i) return i;
            var e = this.t;
            if (0 != (i = e - t.t)) return this.s < 0 ? -i: i;
            for (; --e >= 0;) if (0 != (i = this[e] - t[e])) return i;
            return 0
        }
        function d(t) {
            var i, e = 1;
            return 0 != (i = t >>> 16) && (t = i, e += 16),
            0 != (i = t >> 8) && (t = i, e += 8),
            0 != (i = t >> 4) && (t = i, e += 4),
            0 != (i = t >> 2) && (t = i, e += 2),
            0 != (i = t >> 1) && (t = i, e += 1),
            e
        }
        function T() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + d(this[this.t - 1] ^ this.s & this.DM)
        }
        function b(t, i) {
            var e;
            for (e = this.t - 1; e >= 0; --e) i[e + t] = this[e];
            for (e = t - 1; e >= 0; --e) i[e] = 0;
            i.t = this.t + t,
            i.s = this.s
        }
        function F(t, i) {
            for (var e = t; e < this.t; ++e) i[e - t] = this[e];
            i.t = Math.max(this.t - t, 0),
            i.s = this.s
        }
        function B(t, i) {
            var e, r = t % this.DB,
            n = this.DB - r,
            s = (1 << n) - 1,
            o = Math.floor(t / this.DB),
            h = this.s << r & this.DM;
            for (e = this.t - 1; e >= 0; --e) i[e + o + 1] = this[e] >> n | h,
            h = (this[e] & s) << r;
            for (e = o - 1; e >= 0; --e) i[e] = 0;
            i[o] = h,
            i.t = this.t + o + 1,
            i.s = this.s,
            i.clamp()
        }
        function x(t, i) {
            i.s = this.s;
            var e = Math.floor(t / this.DB);
            if (e >= this.t) return void(i.t = 0);
            var r = t % this.DB,
            n = this.DB - r,
            s = (1 << r) - 1;
            i[0] = this[e] >> r;
            for (var o = e + 1; o < this.t; ++o) i[o - e - 1] |= (this[o] & s) << n,
            i[o - e] = this[o] >> r;
            r > 0 && (i[this.t - e - 1] |= (this.s & s) << n),
            i.t = this.t - e,
            i.clamp()
        }
        function w(t, i) {
            for (var e = 0,
            r = 0,
            n = Math.min(t.t, this.t); e < n;) r += this[e] - t[e],
            i[e++] = r & this.DM,
            r >>= this.DB;
            if (t.t < this.t) {
                for (r -= t.s; e < this.t;) r += this[e],
                i[e++] = r & this.DM,
                r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; e < t.t;) r -= t[e],
                i[e++] = r & this.DM,
                r >>= this.DB;
                r -= t.s
            }
            i.s = r < 0 ? -1 : 0,
            r < -1 ? i[e++] = this.DV + r: r > 0 && (i[e++] = r),
            i.t = e,
            i.clamp()
        }
        function S(t, i) {
            var r = this.abs(),
            n = t.abs(),
            s = r.t;
            for (i.t = s + n.t; --s >= 0;) i[s] = 0;
            for (s = 0; s < n.t; ++s) i[s + r.t] = r.am(0, n[s], i, s, 0, r.t);
            i.s = 0,
            i.clamp(),
            this.s != t.s && e.ZERO.subTo(i, i)
        }
        function k(t) {
            for (var i = this.abs(), e = t.t = 2 * i.t; --e >= 0;) t[e] = 0;
            for (e = 0; e < i.t - 1; ++e) {
                var r = i.am(e, i[e], t, 2 * e, 0, 1); (t[e + i.t] += i.am(e + 1, 2 * i[e], t, 2 * e + 1, r, i.t - e - 1)) >= i.DV && (t[e + i.t] -= i.DV, t[e + i.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += i.am(e, i[e], t, 2 * e, 0, 1)),
            t.s = 0,
            t.clamp()
        }
        function D(t, i, n) {
            var s = t.abs();
            if (! (s.t <= 0)) {
                var o = this.abs();
                if (o.t < s.t) return null != i && i.fromInt(0),
                void(null != n && this.copyTo(n));
                null == n && (n = r());
                var h = r(),
                u = this.s,
                a = t.s,
                f = this.DB - d(s[s.t - 1]);
                f > 0 ? (s.lShiftTo(f, h), o.lShiftTo(f, n)) : (s.copyTo(h), o.copyTo(n));
                var l = h.t,
                c = h[l - 1];
                if (0 != c) {
                    var p = c * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2: 0),
                    y = this.FV / p,
                    v = (1 << this.F1) / p,
                    g = 1 << this.F2,
                    m = n.t,
                    T = m - l,
                    b = null == i ? r() : i;
                    for (h.dlShiftTo(T, b), n.compareTo(b) >= 0 && (n[n.t++] = 1, n.subTo(b, n)), e.ONE.dlShiftTo(l, b), b.subTo(h, h); h.t < l;) h[h.t++] = 0;
                    for (; --T >= 0;) {
                        var F = n[--m] == c ? this.DM: Math.floor(n[m] * y + (n[m - 1] + g) * v);
                        if ((n[m] += h.am(0, F, n, T, 0, l)) < F) for (h.dlShiftTo(T, b), n.subTo(b, n); n[m] < --F;) n.subTo(b, n)
                    }
                    null != i && (n.drShiftTo(l, i), u != a && e.ZERO.subTo(i, i)),
                    n.t = l,
                    n.clamp(),
                    f > 0 && n.rShiftTo(f, n),
                    u < 0 && e.ZERO.subTo(n, n)
                }
            }
        }
        function I(t) {
            var i = r();
            return this.abs().divRemTo(t, null, i),
            this.s < 0 && i.compareTo(e.ZERO) > 0 && t.subTo(i, i),
            i
        }
        function E(t) {
            this.m = t
        }
        function O(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
        }
        function q(t) {
            return t
        }
        function A(t) {
            t.divRemTo(this.m, null, t)
        }
        function R(t, i, e) {
            t.multiplyTo(i, e),
            this.reduce(e)
        }
        function V(t, i) {
            t.squareTo(i),
            this.reduce(i)
        }
        function M() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var i = 3 & t;
            return i = i * (2 - (15 & t) * i) & 15,
            i = i * (2 - (255 & t) * i) & 255,
            i = i * (2 - ((65535 & t) * i & 65535)) & 65535,
            i = i * (2 - t * i % this.DV) % this.DV,
            i > 0 ? this.DV - i: -i
        }
        function _(t) {
            this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t
        }
        function C(t) {
            var i = r();
            return t.abs().dlShiftTo(this.m.t, i),
            i.divRemTo(this.m, null, i),
            t.s < 0 && i.compareTo(e.ZERO) > 0 && this.m.subTo(i, i),
            i
        }
        function L(t) {
            var i = r();
            return t.copyTo(i),
            this.reduce(i),
            i
        }
        function P(t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var i = 0; i < this.m.t; ++i) {
                var e = 32767 & t[i],
                r = e * this.mpl + ((e * this.mph + (t[i] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (e = i + this.m.t, t[e] += this.m.am(0, r, t, i, 0, this.m.t); t[e] >= t.DV;) t[e] -= t.DV,
                t[++e]++
            }
            t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }
        function H(t, i) {
            t.squareTo(i),
            this.reduce(i)
        }
        function N(t, i, e) {
            t.multiplyTo(i, e),
            this.reduce(e)
        }
        function U() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        function z(t, i) {
            if (t > 4294967295 || t < 1) return e.ONE;
            var n = r(),
            s = r(),
            o = i.convert(this),
            h = d(t) - 1;
            for (o.copyTo(n); --h >= 0;) if (i.sqrTo(n, s), (t & 1 << h) > 0) i.mulTo(s, o, n);
            else {
                var u = n;
                n = s,
                s = u
            }
            return i.revert(n)
        }
        function j(t, i) {
            var e;
            return e = t < 256 || i.isEven() ? new E(i) : new _(i),
            this.exp(t, e)
        }
        function X() {
            var t = r();
            return this.copyTo(t),
            t
        }
        function Z() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return - 1
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        function K() {
            return 0 == this.t ? this.s: this[0] << 24 >> 24
        }
        function G() {
            return 0 == this.t ? this.s: this[0] << 16 >> 16
        }
        function Y(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t))
        }
        function W() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        function J(t) {
            if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
            var i = this.chunkSize(t),
            e = Math.pow(t, i),
            n = l(e),
            s = r(),
            o = r(),
            h = "";
            for (this.divRemTo(n, s, o); s.signum() > 0;) h = (e + o.intValue()).toString(t).substr(1) + h,
            s.divRemTo(n, s, o);
            return o.intValue().toString(t) + h
        }
        function Q(t, i) {
            this.fromInt(0),
            null == i && (i = 10);
            for (var r = this.chunkSize(i), n = Math.pow(i, r), s = !1, o = 0, h = 0, a = 0; a < t.length; ++a) {
                var f = u(t, a);
                f < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (s = !0) : (h = i * h + f, ++o >= r && (this.dMultiply(n), this.dAddOffset(h, 0), o = 0, h = 0))
            }
            o > 0 && (this.dMultiply(Math.pow(i, o)), this.dAddOffset(h, 0)),
            s && e.ZERO.subTo(this, this)
        }
        function $(t, i, r) {
            if ("number" == typeof i) if (t < 2) this.fromInt(1);
            else for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), ht, this), this.isEven() && this.dAddOffset(1, 0); ! this.isProbablePrime(i);) this.dAddOffset(2, 0),
            this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
            else {
                var n = new Array,
                s = 7 & t;
                n.length = 1 + (t >> 3),
                i.nextBytes(n),
                s > 0 ? n[0] &= (1 << s) - 1 : n[0] = 0,
                this.fromString(n, 256)
            }
        }
        function tt() {
            var t = this.t,
            i = new Array;
            i[0] = this.s;
            var e, r = this.DB - t * this.DB % 8,
            n = 0;
            if (t-->0) for (r < this.DB && (e = this[t] >> r) != (this.s & this.DM) >> r && (i[n++] = e | this.s << this.DB - r); t >= 0;) r < 8 ? (e = (this[t] & (1 << r) - 1) << 8 - r, e |= this[--t] >> (r += this.DB - 8)) : (e = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)),
            0 != (128 & e) && (e |= -256),
            0 == n && (128 & this.s) != (128 & e) && ++n,
            (n > 0 || e != this.s) && (i[n++] = e);
            return i
        }
        function it(t) {
            return 0 == this.compareTo(t)
        }
        function et(t) {
            return this.compareTo(t) < 0 ? this: t
        }
        function rt(t) {
            return this.compareTo(t) > 0 ? this: t
        }
        function nt(t, i, e) {
            var r, n, s = Math.min(t.t, this.t);
            for (r = 0; r < s; ++r) e[r] = i(this[r], t[r]);
            if (t.t < this.t) {
                for (n = t.s & this.DM, r = s; r < this.t; ++r) e[r] = i(this[r], n);
                e.t = this.t
            } else {
                for (n = this.s & this.DM, r = s; r < t.t; ++r) e[r] = i(n, t[r]);
                e.t = t.t
            }
            e.s = i(this.s, t.s),
            e.clamp()
        }
        function st(t, i) {
            return t & i
        }
        function ot(t) {
            var i = r();
            return this.bitwiseTo(t, st, i),
            i
        }
        function ht(t, i) {
            return t | i
        }
        function ut(t) {
            var i = r();
            return this.bitwiseTo(t, ht, i),
            i
        }
        function at(t, i) {
            return t ^ i
        }
        function ft(t) {
            var i = r();
            return this.bitwiseTo(t, at, i),
            i
        }
        function lt(t, i) {
            return t & ~i
        }
        function ct(t) {
            var i = r();
            return this.bitwiseTo(t, lt, i),
            i
        }
        function pt() {
            for (var t = r(), i = 0; i < this.t; ++i) t[i] = this.DM & ~this[i];
            return t.t = this.t,
            t.s = ~this.s,
            t
        }
        function yt(t) {
            var i = r();
            return t < 0 ? this.rShiftTo( - t, i) : this.lShiftTo(t, i),
            i
        }
        function vt(t) {
            var i = r();
            return t < 0 ? this.lShiftTo( - t, i) : this.rShiftTo(t, i),
            i
        }
        function gt(t) {
            if (0 == t) return - 1;
            var i = 0;
            return 0 == (65535 & t) && (t >>= 16, i += 16),
            0 == (255 & t) && (t >>= 8, i += 8),
            0 == (15 & t) && (t >>= 4, i += 4),
            0 == (3 & t) && (t >>= 2, i += 2),
            0 == (1 & t) && ++i,
            i
        }
        function mt() {
            for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + gt(this[t]);
            return this.s < 0 ? this.t * this.DB: -1
        }
        function dt(t) {
            for (var i = 0; 0 != t;) t &= t - 1,
            ++i;
            return i
        }
        function Tt() {
            for (var t = 0,
            i = this.s & this.DM,
            e = 0; e < this.t; ++e) t += dt(this[e] ^ i);
            return t
        }
        function bt(t) {
            var i = Math.floor(t / this.DB);
            return i >= this.t ? 0 != this.s: 0 != (this[i] & 1 << t % this.DB)
        }
        function Ft(t, i) {
            var r = e.ONE.shiftLeft(t);
            return this.bitwiseTo(r, i, r),
            r
        }
        function Bt(t) {
            return this.changeBit(t, ht)
        }
        function xt(t) {
            return this.changeBit(t, lt)
        }
        function wt(t) {
            return this.changeBit(t, at)
        }
        function St(t, i) {
            for (var e = 0,
            r = 0,
            n = Math.min(t.t, this.t); e < n;) r += this[e] + t[e],
            i[e++] = r & this.DM,
            r >>= this.DB;
            if (t.t < this.t) {
                for (r += t.s; e < this.t;) r += this[e],
                i[e++] = r & this.DM,
                r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; e < t.t;) r += t[e],
                i[e++] = r & this.DM,
                r >>= this.DB;
                r += t.s
            }
            i.s = r < 0 ? -1 : 0,
            r > 0 ? i[e++] = r: r < -1 && (i[e++] = this.DV + r),
            i.t = e,
            i.clamp()
        }
        function kt(t) {
            var i = r();
            return this.addTo(t, i),
            i
        }
        function Dt(t) {
            var i = r();
            return this.subTo(t, i),
            i
        }
        function It(t) {
            var i = r();
            return this.multiplyTo(t, i),
            i
        }
        function Et() {
            var t = r();
            return this.squareTo(t),
            t
        }
        function Ot(t) {
            var i = r();
            return this.divRemTo(t, i, null),
            i
        }
        function qt(t) {
            var i = r();
            return this.divRemTo(t, null, i),
            i
        }
        function At(t) {
            var i = r(),
            e = r();
            return this.divRemTo(t, i, e),
            new Array(i, e)
        }
        function Rt(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
            ++this.t,
            this.clamp()
        }
        function Vt(t, i) {
            if (0 != t) {
                for (; this.t <= i;) this[this.t++] = 0;
                for (this[i] += t; this[i] >= this.DV;) this[i] -= this.DV,
                ++i >= this.t && (this[this.t++] = 0),
                ++this[i]
            }
        }
        function Mt() {}
        function _t(t) {
            return t
        }
        function Ct(t, i, e) {
            t.multiplyTo(i, e)
        }
        function Lt(t, i) {
            t.squareTo(i)
        }
        function Pt(t) {
            return this.exp(t, new Mt)
        }
        function Ht(t, i, e) {
            var r = Math.min(this.t + t.t, i);
            for (e.s = 0, e.t = r; r > 0;) e[--r] = 0;
            var n;
            for (n = e.t - this.t; r < n; ++r) e[r + this.t] = this.am(0, t[r], e, r, 0, this.t);
            for (n = Math.min(t.t, i); r < n; ++r) this.am(0, t[r], e, r, 0, i - r);
            e.clamp()
        }
        function Nt(t, i, e) {--i;
            var r = e.t = this.t + t.t - i;
            for (e.s = 0; --r >= 0;) e[r] = 0;
            for (r = Math.max(i - this.t, 0); r < t.t; ++r) e[this.t + r - i] = this.am(i - r, t[r], e, 0, 0, this.t + r - i);
            e.clamp(),
            e.drShiftTo(1, e)
        }
        function Ut(t) {
            this.r2 = r(),
            this.q3 = r(),
            e.ONE.dlShiftTo(2 * t.t, this.r2),
            this.mu = this.r2.divide(t),
            this.m = t
        }
        function zt(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var i = r();
            return t.copyTo(i),
            this.reduce(i),
            i
        }
        function jt(t) {
            return t
        }
        function Xt(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
        }
        function Zt(t, i) {
            t.squareTo(i),
            this.reduce(i)
        }
        function Kt(t, i, e) {
            t.multiplyTo(i, e),
            this.reduce(e)
        }
        function Gt(t, i) {
            var e, n, s = t.bitLength(),
            o = l(1);
            if (s <= 0) return o;
            e = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6,
            n = s < 8 ? new E(i) : i.isEven() ? new Ut(i) : new _(i);
            var h = new Array,
            u = 3,
            a = e - 1,
            f = (1 << e) - 1;
            if (h[1] = n.convert(this), e > 1) {
                var c = r();
                for (n.sqrTo(h[1], c); u <= f;) h[u] = r(),
                n.mulTo(c, h[u - 2], h[u]),
                u += 2
            }
            var p, y, v = t.t - 1,
            g = !0,
            m = r();
            for (s = d(t[v]) - 1; v >= 0;) {
                for (s >= a ? p = t[v] >> s - a & f: (p = (t[v] & (1 << s + 1) - 1) << a - s, v > 0 && (p |= t[v - 1] >> this.DB + s - a)), u = e; 0 == (1 & p);) p >>= 1,
                --u;
                if ((s -= u) < 0 && (s += this.DB, --v), g) h[p].copyTo(o),
                g = !1;
                else {
                    for (; u > 1;) n.sqrTo(o, m),
                    n.sqrTo(m, o),
                    u -= 2;
                    u > 0 ? n.sqrTo(o, m) : (y = o, o = m, m = y),
                    n.mulTo(m, h[p], o)
                }
                for (; v >= 0 && 0 == (t[v] & 1 << s);) n.sqrTo(o, m),
                y = o,
                o = m,
                m = y,
                --s < 0 && (s = this.DB - 1, --v)
            }
            return n.revert(o)
        }
        function Yt(t) {
            var i = this.s < 0 ? this.negate() : this.clone(),
            e = t.s < 0 ? t.negate() : t.clone();
            if (i.compareTo(e) < 0) {
                var r = i;
                i = e,
                e = r
            }
            var n = i.getLowestSetBit(),
            s = e.getLowestSetBit();
            if (s < 0) return i;
            for (n < s && (s = n), s > 0 && (i.rShiftTo(s, i), e.rShiftTo(s, e)); i.signum() > 0;)(n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i),
            (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
            i.compareTo(e) >= 0 ? (i.subTo(e, i), i.rShiftTo(1, i)) : (e.subTo(i, e), e.rShiftTo(1, e));
            return s > 0 && e.lShiftTo(s, e),
            e
        }
        function Wt(t) {
            if (t <= 0) return 0;
            var i = this.DV % t,
            e = this.s < 0 ? t - 1 : 0;
            if (this.t > 0) if (0 == i) e = this[0] % t;
            else for (var r = this.t - 1; r >= 0; --r) e = (i * e + this[r]) % t;
            return e
        }
        function Jt(t) {
            var i = t.isEven();
            if (this.isEven() && i || 0 == t.signum()) return e.ZERO;
            for (var r = t.clone(), n = this.clone(), s = l(1), o = l(0), h = l(0), u = l(1); 0 != r.signum();) {
                for (; r.isEven();) r.rShiftTo(1, r),
                i ? (s.isEven() && o.isEven() || (s.addTo(this, s), o.subTo(t, o)), s.rShiftTo(1, s)) : o.isEven() || o.subTo(t, o),
                o.rShiftTo(1, o);
                for (; n.isEven();) n.rShiftTo(1, n),
                i ? (h.isEven() && u.isEven() || (h.addTo(this, h), u.subTo(t, u)), h.rShiftTo(1, h)) : u.isEven() || u.subTo(t, u),
                u.rShiftTo(1, u);
                r.compareTo(n) >= 0 ? (r.subTo(n, r), i && s.subTo(h, s), o.subTo(u, o)) : (n.subTo(r, n), i && h.subTo(s, h), u.subTo(o, u))
            }
            return 0 != n.compareTo(e.ONE) ? e.ZERO: u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
        }
        function Qt(t) {
            var i, e = this.abs();
            if (1 == e.t && e[0] <= vi[vi.length - 1]) {
                for (i = 0; i < vi.length; ++i) if (e[0] == vi[i]) return ! 0;
                return ! 1
            }
            if (e.isEven()) return ! 1;
            for (i = 1; i < vi.length;) {
                for (var r = vi[i], n = i + 1; n < vi.length && r < gi;) r *= vi[n++];
                for (r = e.modInt(r); i < n;) if (r % vi[i++] == 0) return ! 1
            }
            return e.millerRabin(t)
        }
        function $t(t) {
            var i = this.subtract(e.ONE),
            n = i.getLowestSetBit();
            if (n <= 0) return ! 1;
            var s = i.shiftRight(n); (t = t + 1 >> 1) > vi.length && (t = vi.length);
            for (var o = r(), h = 0; h < t; ++h) {
                o.fromInt(vi[Math.floor(Math.random() * vi.length)]);
                var u = o.modPow(s, this);
                if (0 != u.compareTo(e.ONE) && 0 != u.compareTo(i)) {
                    for (var a = 1; a++<n && 0 != u.compareTo(i);) if (u = u.modPowInt(2, this), 0 == u.compareTo(e.ONE)) return ! 1;
                    if (0 != u.compareTo(i)) return ! 1
                }
            }
            return ! 0
        }
        function ti(t) {
            di[Ti++] ^= 255 & t,
            di[Ti++] ^= t >> 8 & 255,
            di[Ti++] ^= t >> 16 & 255,
            di[Ti++] ^= t >> 24 & 255,
            Ti >= xi && (Ti -= xi)
        }
        function ii() {
            ti((new Date).getTime())
        }
        function ei() {
            if (null == mi) {
                for (ii(), mi = ui(), mi.init(di), Ti = 0; Ti < di.length; ++Ti) di[Ti] = 0;
                Ti = 0
            }
            return mi.next()
        }
        function ri(t) {
            var i;
            for (i = 0; i < t.length; ++i) t[i] = ei()
        }
        function ni() {}
        function si() {
            this.i = 0,
            this.j = 0,
            this.S = new Array
        }
        function oi(t) {
            var i, e, r;
            for (i = 0; i < 256; ++i) this.S[i] = i;
            for (e = 0, i = 0; i < 256; ++i) e = e + this.S[i] + t[i % t.length] & 255,
            r = this.S[i],
            this.S[i] = this.S[e],
            this.S[e] = r;
            this.i = 0,
            this.j = 0
        }
        function hi() {
            var t;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            t = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = t,
            this.S[t + this.S[this.i] & 255]
        }
        function ui() {
            return new si
        }
        var ai, fi = "undefined" != typeof navigator;
        fi && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = s, ai = 30) : fi && "Netscape" != navigator.appName ? (e.prototype.am = n, ai = 26) : (e.prototype.am = o, ai = 28),
        e.prototype.DB = ai,
        e.prototype.DM = (1 << ai) - 1,
        e.prototype.DV = 1 << ai;
        e.prototype.FV = Math.pow(2, 52),
        e.prototype.F1 = 52 - ai,
        e.prototype.F2 = 2 * ai - 52;
        var li, ci, pi = "0123456789abcdefghijklmnopqrstuvwxyz",
        yi = new Array;
        for (li = "0".charCodeAt(0), ci = 0; ci <= 9; ++ci) yi[li++] = ci;
        for (li = "a".charCodeAt(0), ci = 10; ci < 36; ++ci) yi[li++] = ci;
        for (li = "A".charCodeAt(0), ci = 10; ci < 36; ++ci) yi[li++] = ci;
        E.prototype.convert = O,
        E.prototype.revert = q,
        E.prototype.reduce = A,
        E.prototype.mulTo = R,
        E.prototype.sqrTo = V,
        _.prototype.convert = C,
        _.prototype.revert = L,
        _.prototype.reduce = P,
        _.prototype.mulTo = N,
        _.prototype.sqrTo = H,
        e.prototype.copyTo = a,
        e.prototype.fromInt = f,
        e.prototype.fromString = c,
        e.prototype.clamp = p,
        e.prototype.dlShiftTo = b,
        e.prototype.drShiftTo = F,
        e.prototype.lShiftTo = B,
        e.prototype.rShiftTo = x,
        e.prototype.subTo = w,
        e.prototype.multiplyTo = S,
        e.prototype.squareTo = k,
        e.prototype.divRemTo = D,
        e.prototype.invDigit = M,
        e.prototype.isEven = U,
        e.prototype.exp = z,
        e.prototype.toString = y,
        e.prototype.negate = v,
        e.prototype.abs = g,
        e.prototype.compareTo = m,
        e.prototype.bitLength = T,
        e.prototype.mod = I,
        e.prototype.modPowInt = j,
        e.ZERO = l(0),
        e.ONE = l(1),
        Mt.prototype.convert = _t,
        Mt.prototype.revert = _t,
        Mt.prototype.mulTo = Ct,
        Mt.prototype.sqrTo = Lt,
        Ut.prototype.convert = zt,
        Ut.prototype.revert = jt,
        Ut.prototype.reduce = Xt,
        Ut.prototype.mulTo = Kt,
        Ut.prototype.sqrTo = Zt;
        var vi = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        gi = (1 << 26) / vi[vi.length - 1];
        e.prototype.chunkSize = Y,
        e.prototype.toRadix = J,
        e.prototype.fromRadix = Q,
        e.prototype.fromNumber = $,
        e.prototype.bitwiseTo = nt,
        e.prototype.changeBit = Ft,
        e.prototype.addTo = St,
        e.prototype.dMultiply = Rt,
        e.prototype.dAddOffset = Vt,
        e.prototype.multiplyLowerTo = Ht,
        e.prototype.multiplyUpperTo = Nt,
        e.prototype.modInt = Wt,
        e.prototype.millerRabin = $t,
        e.prototype.clone = X,
        e.prototype.intValue = Z,
        e.prototype.byteValue = K,
        e.prototype.shortValue = G,
        e.prototype.signum = W,
        e.prototype.toByteArray = tt,
        e.prototype.equals = it,
        e.prototype.min = et,
        e.prototype.max = rt,
        e.prototype.and = ot,
        e.prototype.or = ut,
        e.prototype.xor = ft,
        e.prototype.andNot = ct,
        e.prototype.not = pt,
        e.prototype.shiftLeft = yt,
        e.prototype.shiftRight = vt,
        e.prototype.getLowestSetBit = mt,
        e.prototype.bitCount = Tt,
        e.prototype.testBit = bt,
        e.prototype.setBit = Bt,
        e.prototype.clearBit = xt,
        e.prototype.flipBit = wt,
        e.prototype.add = kt,
        e.prototype.subtract = Dt,
        e.prototype.multiply = It,
        e.prototype.divide = Ot,
        e.prototype.remainder = qt,
        e.prototype.divideAndRemainder = At,
        e.prototype.modPow = Gt,
        e.prototype.modInverse = Jt,
        e.prototype.pow = Pt,
        e.prototype.gcd = Yt,
        e.prototype.isProbablePrime = Qt,
        e.prototype.square = Et,
        e.prototype.Barrett = Ut;
        var mi, di, Ti;
        if (null == di) {
            di = new Array,
            Ti = 0;
            var bi;
            if ("undefined" != typeof window && window.crypto) if (window.crypto.getRandomValues) {
                var Fi = new Uint8Array(32);
                for (window.crypto.getRandomValues(Fi), bi = 0; bi < 32; ++bi) di[Ti++] = Fi[bi]
            } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                var Bi = window.crypto.random(32);
                for (bi = 0; bi < Bi.length; ++bi) di[Ti++] = 255 & Bi.charCodeAt(bi)
            }
            for (; Ti < xi;) bi = Math.floor(65536 * Math.random()),
            di[Ti++] = bi >>> 8,
            di[Ti++] = 255 & bi;
            Ti = 0,
            ii()
        }
        ni.prototype.nextBytes = ri,
        si.prototype.init = oi,
        si.prototype.next = hi;
        var xi = 256;
        i = t.exports = {
        default:
            e,
            BigInteger: e,
            SecureRandom: ni
        }
    }).call(this)
},
function(t, i, e) {
    "use strict";
    function r() {
        return T
    }
    function n() {
        var t = new p("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16),
        i = new p("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16),
        e = new p("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16),
        r = new g(t, i, e);
        return {
            curve: r,
            G: r.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"),
            n: new p("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16)
        }
    }
    function s() {
        var t = new p(F.bitLength(), m).mod(F.subtract(p.ONE)).add(p.ONE),
        i = u(t.toString(16), 64),
        e = b.multiply(t);
        return {
            privateKey: i,
            publicKey: "04" + u(e.getX().toBigInteger().toString(16), 64) + u(e.getY().toBigInteger().toString(16), 64)
        }
    }
    function o(t) {
        t = unescape(encodeURIComponent(t));
        for (var i = t.length,
        e = [], r = 0; r < i; r++) e[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
        for (var n = [], s = 0; s < i; s++) {
            var o = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
            n.push((o >>> 4).toString(16)),
            n.push((15 & o).toString(16))
        }
        return n.join("")
    }
    function h(t) {
        return Array.prototype.map.call(new Uint8Array(t),
        function(t) {
            return ("00" + t.toString(16)).slice( - 2)
        }).join("")
    }
    function u(t, i) {
        return t.length >= i ? t: new Array(i - t.length + 1).join("0") + t
    }
    function a(t) {
        for (var i = [], e = 0, r = 0; r < 2 * t.length; r += 2) i[r >>> 3] |= parseInt(t[e], 10) << 24 - r % 8 * 4,
        e++;
        for (var n = [], s = 0; s < t.length; s++) {
            var o = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
            n.push((o >>> 4).toString(16)),
            n.push((15 & o).toString(16))
        }
        return n.join("")
    }
    function f(t) {
        for (var i = [], e = 0, r = 0; r < 2 * t.length; r += 2) i[r >>> 3] |= parseInt(t[e], 10) << 24 - r % 8 * 4,
        e++;
        try {
            for (var n = [], s = 0; s < t.length; s++) {
                var o = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                n.push(String.fromCharCode(o))
            }
            return decodeURIComponent(escape(n.join("")))
        } catch(t) {
            throw new Error("Malformed UTF-8 data")
        }
    }
    function l(t) {
        var i = [],
        e = t.length;
        e % 2 != 0 && (t = u(t, e + 1)),
        e = t.length;
        for (var r = 0; r < e; r += 2) i.push(parseInt(t.substr(r, 2), 16));
        return i
    }
    var c = e(0),
    p = c.BigInteger,
    y = c.SecureRandom,
    v = e(5),
    g = v.ECCurveFp,
    m = new y,
    d = n(),
    T = d.curve,
    b = d.G,
    F = d.n;
    t.exports = {
        getGlobalCurve: r,
        generateEcparam: n,
        generateKeyPairHex: s,
        parseUtf8StringToHex: o,
        parseArrayBufferToHex: h,
        leftPad: u,
        arrayToHex: a,
        arrayToUtf8: f,
        hexToArray: l
    }
},
function(t, i, e) {
    "use strict";
    function r(t, i) {
        if (! (t instanceof i)) throw new TypeError("Cannot call a class as a function")
    }
    var n = function() {
        function t(t, i) {
            for (var e = 0; e < i.length; e++) {
                var r = i[e];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(i, e, r) {
            return e && t(i.prototype, e),
            r && t(i, r),
            i
        }
    } (),
    s = e(0),
    o = s.BigInteger,
    h = e(1),
    u = function(t, i, e, r, n) {
        for (var s = 0; s < n; s++) e[r + s] = t[i + s]
    },
    a = {
        minValue: -parseInt("10000000000000000000000000000000", 2),
        maxValue: parseInt("1111111111111111111111111111111", 2),
        parse: function(t) {
            if (t < this.minValue) {
                for (var i = new Number( - t), e = i.toString(2), r = e.substr(e.length - 31, 31), n = "", s = 0; s < r.length; s++) {
                    n += "0" == r.substr(s, 1) ? "1": "0"
                }
                return parseInt(n, 2) + 1
            }
            if (t > this.maxValue) {
                for (var o = Number(t), h = o.toString(2), u = h.substr(h.length - 31, 31), a = "", f = 0; f < u.length; f++) {
                    a += "0" == u.substr(f, 1) ? "1": "0"
                }
                return - (parseInt(a, 2) + 1)
            }
            return t
        },
        parseByte: function(t) {
            if (t < 0) {
                for (var i = new Number( - t), e = i.toString(2), r = e.substr(e.length - 8, 8), n = "", s = 0; s < r.length; s++) {
                    n += "0" == r.substr(s, 1) ? "1": "0"
                }
                return parseInt(n, 2) + 1
            }
            if (t > 255) {
                var o = Number(t),
                h = o.toString(2);
                return parseInt(h.substr(h.length - 8, 8), 2)
            }
            return t
        }
    },
    f = function() {
        function t() {
            r(this, t),
            this.xBuf = new Array,
            this.xBufOff = 0,
            this.byteCount = 0,
            this.DIGEST_LENGTH = 32,
            this.v0 = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214],
            this.v0 = [1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082],
            this.v = new Array(8),
            this.v_ = new Array(8),
            this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            this.X = new Array(68),
            this.xOff = 0,
            this.T_00_15 = 2043430169,
            this.T_16_63 = 2055708042,
            arguments.length > 0 ? this.initDigest(arguments[0]) : this.init()
        }
        return n(t, [{
            key: "init",
            value: function() {
                this.xBuf = new Array(4),
                this.reset()
            }
        },
        {
            key: "initDigest",
            value: function(t) {
                this.xBuf = [].concat(t.xBuf),
                this.xBufOff = t.xBufOff,
                this.byteCount = t.byteCount,
                u(t.X, 0, this.X, 0, t.X.length),
                this.xOff = t.xOff,
                u(t.v, 0, this.v, 0, t.v.length)
            }
        },
        {
            key: "getDigestSize",
            value: function() {
                return this.DIGEST_LENGTH
            }
        },
        {
            key: "reset",
            value: function() {
                this.byteCount = 0,
                this.xBufOff = 0;
                for (var t in this.xBuf) this.xBuf[t] = null;
                u(this.v0, 0, this.v, 0, this.v0.length),
                this.xOff = 0,
                u(this.X0, 0, this.X, 0, this.X0.length)
            }
        },
        {
            key: "processBlock",
            value: function() {
                var t = void 0,
                i = this.X,
                e = new Array(64);
                for (t = 16; t < 68; t++) i[t] = this.p1(i[t - 16] ^ i[t - 9] ^ this.rotate(i[t - 3], 15)) ^ this.rotate(i[t - 13], 7) ^ i[t - 6];
                for (t = 0; t < 64; t++) e[t] = i[t] ^ i[t + 4];
                var r = this.v,
                n = this.v_;
                u(r, 0, n, 0, this.v0.length);
                var s = void 0,
                o = void 0,
                h = void 0,
                f = void 0,
                l = void 0;
                for (t = 0; t < 16; t++) l = this.rotate(n[0], 12),
                s = a.parse(a.parse(l + n[4]) + this.rotate(this.T_00_15, t)),
                s = this.rotate(s, 7),
                o = s ^ l,
                h = a.parse(a.parse(this.ff_00_15(n[0], n[1], n[2]) + n[3]) + o) + e[t],
                f = a.parse(a.parse(this.gg_00_15(n[4], n[5], n[6]) + n[7]) + s) + i[t],
                n[3] = n[2],
                n[2] = this.rotate(n[1], 9),
                n[1] = n[0],
                n[0] = h,
                n[7] = n[6],
                n[6] = this.rotate(n[5], 19),
                n[5] = n[4],
                n[4] = this.p0(f);
                for (t = 16; t < 64; t++) l = this.rotate(n[0], 12),
                s = a.parse(a.parse(l + n[4]) + this.rotate(this.T_16_63, t)),
                s = this.rotate(s, 7),
                o = s ^ l,
                h = a.parse(a.parse(this.ff_16_63(n[0], n[1], n[2]) + n[3]) + o) + e[t],
                f = a.parse(a.parse(this.gg_16_63(n[4], n[5], n[6]) + n[7]) + s) + i[t],
                n[3] = n[2],
                n[2] = this.rotate(n[1], 9),
                n[1] = n[0],
                n[0] = h,
                n[7] = n[6],
                n[6] = this.rotate(n[5], 19),
                n[5] = n[4],
                n[4] = this.p0(f);
                for (t = 0; t < 8; t++) r[t] ^= a.parse(n[t]);
                this.xOff = 0,
                u(this.X0, 0, this.X, 0, this.X0.length)
            }
        },
        {
            key: "processWord",
            value: function(t, i) {
                var e = t[i] << 24;
                e |= (255 & t[++i]) << 16,
                e |= (255 & t[++i]) << 8,
                e |= 255 & t[++i],
                this.X[this.xOff] = e,
                16 == ++this.xOff && this.processBlock()
            }
        },
        {
            key: "processLength",
            value: function(t) {
                this.xOff > 14 && this.processBlock(),
                this.X[14] = this.urShiftLong(t, 32),
                this.X[15] = 4294967295 & t
            }
        },
        {
            key: "intToBigEndian",
            value: function(t, i, e) {
                i[e] = a.parseByte(this.urShift(t, 24)),
                i[++e] = a.parseByte(this.urShift(t, 16)),
                i[++e] = a.parseByte(this.urShift(t, 8)),
                i[++e] = a.parseByte(t)
            }
        },
        {
            key: "doFinal",
            value: function(t, i) {
                this.finish();
                for (var e = 0; e < 8; e++) this.intToBigEndian(this.v[e], t, i + 4 * e);
                return this.reset(),
                this.DIGEST_LENGTH
            }
        },
        {
            key: "update",
            value: function(t) {
                this.xBuf[this.xBufOff++] = t,
                this.xBufOff == this.xBuf.length && (this.processWord(this.xBuf, 0), this.xBufOff = 0),
                this.byteCount++
            }
        },
        {
            key: "blockUpdate",
            value: function(t, i, e) {
                for (; 0 != this.xBufOff && e > 0;) this.update(t[i]),
                i++,
                e--;
                for (; e > this.xBuf.length;) this.processWord(t, i),
                i += this.xBuf.length,
                e -= this.xBuf.length,
                this.byteCount += this.xBuf.length;
                for (; e > 0;) this.update(t[i]),
                i++,
                e--
            }
        },
        {
            key: "finish",
            value: function() {
                var t = this.byteCount << 3;
                for (this.update(128); 0 != this.xBufOff;) this.update(0);
                this.processLength(t),
                this.processBlock()
            }
        },
        {
            key: "rotate",
            value: function(t, i) {
                return t << i | this.urShift(t, 32 - i)
            }
        },
        {
            key: "p0",
            value: function(t) {
                return t ^ this.rotate(t, 9) ^ this.rotate(t, 17)
            }
        },
        {
            key: "p1",
            value: function(t) {
                return t ^ this.rotate(t, 15) ^ this.rotate(t, 23)
            }
        },
        {
            key: "ff_00_15",
            value: function(t, i, e) {
                return t ^ i ^ e
            }
        },
        {
            key: "ff_16_63",
            value: function(t, i, e) {
                return t & i | t & e | i & e
            }
        },
        {
            key: "gg_00_15",
            value: function(t, i, e) {
                return t ^ i ^ e
            }
        },
        {
            key: "gg_16_63",
            value: function(t, i, e) {
                return t & i | ~t & e
            }
        },
        {
            key: "urShift",
            value: function(t, i) {
                return (t > a.maxValue || t < a.minValue) && (t = a.parse(t)),
                t >= 0 ? t >> i: (t >> i) + (2 << ~i)
            }
        },
        {
            key: "urShiftLong",
            value: function(t, i) {
                var e = void 0,
                r = new o;
                if (r.fromInt(t), r.signum() >= 0) e = r.shiftRight(i).intValue();
                else {
                    var n = new o;
                    n.fromInt(2);
                    var s = ~i,
                    h = "";
                    if (s < 0) {
                        for (var u = 64 + s,
                        a = 0; a < u; a++) h += "0";
                        var f = new o;
                        f.fromInt(t >> i);
                        var l = new o("10" + h, 2);
                        h = l.toRadix(10);
                        e = l.add(f).toRadix(10)
                    } else h = n.shiftLeft(~i).intValue(),
                    e = (t >> i) + h
                }
                return e
            }
        },
        {
            key: "getZ",
            value: function(t, i) {
                var e = h.parseUtf8StringToHex("1234567812345678"),
                r = 4 * e.length;
                this.update(r >> 8 & 255),
                this.update(255 & r);
                var n = h.hexToArray(e);
                this.blockUpdate(n, 0, n.length);
                var s = h.hexToArray(t.curve.a.toBigInteger().toRadix(16)),
                o = h.hexToArray(t.curve.b.toBigInteger().toRadix(16)),
                u = h.hexToArray(t.getX().toBigInteger().toRadix(16)),
                a = h.hexToArray(t.getY().toBigInteger().toRadix(16)),
                f = h.hexToArray(i.substr(0, 64)),
                l = h.hexToArray(i.substr(64, 64));
                this.blockUpdate(s, 0, s.length),
                this.blockUpdate(o, 0, o.length),
                this.blockUpdate(u, 0, u.length),
                this.blockUpdate(a, 0, a.length),
                this.blockUpdate(f, 0, f.length),
                this.blockUpdate(l, 0, l.length);
                var c = new Array(this.getDigestSize());
                return this.doFinal(c, 0),
                c
            }
        }]),
        t
    } ();
    t.exports = f
},
function(t, i, e) {
    "use strict";
    function r(t, i) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = new g;
        t = m.hexToArray(m.parseUtf8StringToHex(t)),
        i.length > 128 && (i = i.substr(i.length - 128));
        var n = i.substr(0, 64),
        s = i.substr(64);
        i = r.createPoint(n, s);
        var o = r.initEncipher(i);
        r.encryptBlock(t);
        var h = m.arrayToHex(t),
        u = new Array(32);
        return r.doFinal(u),
        u = m.arrayToHex(u),
        e === B ? o + h + u: o + u + h
    }
    function n(t, i) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = new g;
        i = new l(i, 16);
        var n = t.substr(0, 64),
        s = t.substr(0 + n.length, 64),
        o = n.length + s.length,
        h = t.substr(o, 64),
        u = t.substr(o + 64);
        e === B && (h = t.substr(t.length - 64), u = t.substr(o, t.length - o - 64));
        var a = m.hexToArray(u),
        f = r.createPoint(n, s);
        r.initDecipher(i, f),
        r.decryptBlock(a);
        var c = new Array(32);
        if (r.doFinal(c), m.arrayToHex(c) === h) return m.arrayToUtf8(a);
        return ""
    }
    function s(t, i) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = e.pointPool,
        n = e.der,
        s = e.hash,
        o = e.publicKey,
        f = "string" == typeof t ? m.parseUtf8StringToHex(t) : m.parseArrayBufferToHex(t);
        s && (o = o || u(i), f = h(f, o));
        var c = new l(i, 16),
        y = new l(f, 16),
        v = null,
        g = null,
        d = null;
        do {
            do {
                var T = void 0;
                T = r && r.length ? r.pop() : a(), v = T.k, g = y.add(T.x1).mod(F)
            } while ( g . equals ( l . ZERO ) || g.add(v).equals(F));
            d = c.add(l.ONE).modInverse(F).multiply(v.subtract(g.multiply(c))).mod(F)
        } while ( d . equals ( l . ZERO ));
        return n ? p(g, d) : m.leftPad(g.toString(16), 64) + m.leftPad(d.toString(16), 64)
    }
    function o(t, i, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        n = r.der,
        s = r.hash,
        o = "string" == typeof t ? m.parseUtf8StringToHex(t) : m.parseArrayBufferToHex(t);
        s && (o = h(o, e));
        var u = void 0,
        a = void 0;
        if (n) {
            var f = y(i);
            u = f.r,
            a = f.s
        } else u = new l(i.substring(0, 64), 16),
        a = new l(i.substring(64), 16);
        var c = b.decodePointHex(e),
        p = new l(o, 16),
        v = u.add(a).mod(F);
        if (v.equals(l.ZERO)) return ! 1;
        var g = T.multiply(a).add(c.multiply(v)),
        d = p.add(g.getX().toBigInteger()).mod(F);
        return u.equals(d)
    }
    function h(t, i) {
        var e = new v,
        r = (new v).getZ(T, i.substr(2, 128)),
        n = m.hexToArray(m.arrayToHex(r).toString()),
        s = t,
        o = m.hexToArray(s),
        h = new Array(e.getDigestSize());
        return e.blockUpdate(n, 0, n.length),
        e.blockUpdate(o, 0, o.length),
        e.doFinal(h, 0),
        m.arrayToHex(h).toString()
    }
    function u(t) {
        var i = T.multiply(new l(t, 16));
        return "04" + m.leftPad(i.getX().toBigInteger().toString(16), 64) + m.leftPad(i.getY().toBigInteger().toString(16), 64)
    }
    function a() {
        var t = m.generateKeyPairHex(),
        i = b.decodePointHex(t.publicKey);
        return t.k = new l(t.privateKey, 16),
        t.x1 = i.getX().toBigInteger(),
        t
    }
    var f = e(0),
    l = f.BigInteger,
    c = e(4),
    p = c.encodeDer,
    y = c.decodeDer,
    v = e(2),
    g = e(6),
    m = e(1),
    d = m.generateEcparam(),
    T = d.G,
    b = d.curve,
    F = d.n,
    B = 0;
    t.exports = {
        generateKeyPairHex: m.generateKeyPairHex,
        doEncrypt: r,
        doDecrypt: n,
        doSignature: s,
        doVerifySignature: o,
        getPoint: a
    }
},
function(t, i, e) {
    "use strict";
    function r(t, i) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! i || "object" != typeof i && "function" != typeof i ? t: i
    }
    function n(t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
        t.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        i && (Object.setPrototypeOf ? Object.setPrototypeOf(t, i) : t.__proto__ = i)
    }
    function s(t, i) {
        if (! (t instanceof i)) throw new TypeError("Cannot call a class as a function")
    }
    function o(t) {
        var i = t.toString(16);
        if ("-" !== i.substr(0, 1)) i.length % 2 == 1 ? i = "0" + i: i.match(/^[0-7]/) || (i = "00" + i);
        else {
            var e = i.substr(1),
            r = e.length;
            r % 2 == 1 ? r += 1 : i.match(/^[0-7]/) || (r += 2);
            for (var n = "",
            s = 0; s < r; s++) n += "f";
            i = new g(n, 16).xor(t).add(g.ONE).toString(16).replace(/^-/, "")
        }
        return i
    }
    function h(t, i) {
        if ("8" !== t.substring(i + 2, i + 3)) return 1;
        var e = parseInt(t.substring(i + 3, i + 4));
        return 0 === e ? -1 : 0 < e && e < 10 ? e + 1 : -2
    }
    function u(t, i) {
        var e = h(t, i);
        return e < 1 ? "": t.substring(i + 2, i + 2 + 2 * e)
    }
    function a(t, i) {
        var e = u(t, i);
        if ("" === e) return - 1;
        var r = void 0;
        return r = parseInt(e.substring(0, 1)) < 8 ? new g(e, 16) : new g(e.substring(2), 16),
        r.intValue()
    }
    function f(t, i) {
        var e = h(t, i);
        return e < 0 ? l_len: i + 2 * (e + 1)
    }
    function l(t, i) {
        var e = f(t, i),
        r = a(t, i);
        return t.substring(e, e + 2 * r)
    }
    function c(t, i) {
        return f(t, i) + 2 * a(t, i)
    }
    function p(t, i) {
        var e = [],
        r = f(t, i);
        e.push(r);
        for (var n = a(t, i), s = r, o = 0;;) {
            var h = c(t, s);
            if (null === h || h - r >= 2 * n) break;
            if (o >= 200) break;
            e.push(h),
            s = h,
            o++
        }
        return e
    }
    var y = function() {
        function t(t, i) {
            for (var e = 0; e < i.length; e++) {
                var r = i[e];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(i, e, r) {
            return e && t(i.prototype, e),
            r && t(i, r),
            i
        }
    } (),
    v = e(0),
    g = v.BigInteger,
    m = function() {
        function t() {
            s(this, t),
            this.isModified = !0,
            this.hTLV = null,
            this.hT = "00",
            this.hL = "00",
            this.hV = ""
        }
        return y(t, [{
            key: "getLengthHexFromValue",
            value: function() {
                var t = this.hV.length / 2,
                i = t.toString(16);
                return i.length % 2 == 1 && (i = "0" + i),
                t < 128 ? i: (128 + i.length / 2).toString(16) + i
            }
        },
        {
            key: "getEncodedHex",
            value: function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1),
                this.hTLV
            }
        },
        {
            key: "getFreshValueHex",
            value: function() {
                return ""
            }
        }]),
        t
    } (),
    d = function(t) {
        function i(t) {
            s(this, i);
            var e = r(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
            return e.hT = "02",
            t && t.bigint && (e.hTLV = null, e.isModified = !0, e.hV = o(t.bigint)),
            e
        }
        return n(i, t),
        y(i, [{
            key: "getFreshValueHex",
            value: function() {
                return this.hV
            }
        }]),
        i
    } (m),
    T = function(t) {
        function i(t) {
            s(this, i);
            var e = r(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
            return e.hT = "30",
            e.asn1Array = [],
            t && t.array && (e.asn1Array = t.array),
            e
        }
        return n(i, t),
        y(i, [{
            key: "getFreshValueHex",
            value: function() {
                for (var t = "",
                i = 0; i < this.asn1Array.length; i++) {
                    t += this.asn1Array[i].getEncodedHex()
                }
                return this.hV = t,
                this.hV
            }
        }]),
        i
    } (m);
    t.exports = {
        encodeDer: function(t, i) {
            var e = new d({
                bigint: t
            }),
            r = new d({
                bigint: i
            });
            return new T({
                array: [e, r]
            }).getEncodedHex()
        },
        decodeDer: function(t) {
            var i = p(t, 0),
            e = i[0],
            r = i[1],
            n = l(t, e),
            s = l(t, r);
            return {
                r: new g(n, 16),
                s: new g(s, 16)
            }
        }
    }
},
function(t, i, e) {
    "use strict";
    function r(t, i) {
        if (! (t instanceof i)) throw new TypeError("Cannot call a class as a function")
    }
    var n = function() {
        function t(t, i) {
            for (var e = 0; e < i.length; e++) {
                var r = i[e];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(i, e, r) {
            return e && t(i.prototype, e),
            r && t(i, r),
            i
        }
    } (),
    s = e(0),
    o = s.BigInteger,
    h = new o("3"),
    u = function() {
        function t(i, e) {
            r(this, t),
            this.x = e,
            this.q = i
        }
        return n(t, [{
            key: "equals",
            value: function(t) {
                return t === this || this.q.equals(t.q) && this.x.equals(t.x)
            }
        },
        {
            key: "toBigInteger",
            value: function() {
                return this.x
            }
        },
        {
            key: "negate",
            value: function() {
                return new t(this.q, this.x.negate().mod(this.q))
            }
        },
        {
            key: "add",
            value: function(i) {
                return new t(this.q, this.x.add(i.toBigInteger()).mod(this.q))
            }
        },
        {
            key: "subtract",
            value: function(i) {
                return new t(this.q, this.x.subtract(i.toBigInteger()).mod(this.q))
            }
        },
        {
            key: "multiply",
            value: function(i) {
                return new t(this.q, this.x.multiply(i.toBigInteger()).mod(this.q))
            }
        },
        {
            key: "divide",
            value: function(i) {
                return new t(this.q, this.x.multiply(i.toBigInteger().modInverse(this.q)).mod(this.q))
            }
        },
        {
            key: "square",
            value: function() {
                return new t(this.q, this.x.square().mod(this.q))
            }
        }]),
        t
    } (),
    a = function() {
        function t(i, e, n, s) {
            r(this, t),
            this.curve = i,
            this.x = e,
            this.y = n,
            this.z = void 0 === s ? o.ONE: s,
            this.zinv = null
        }
        return n(t, [{
            key: "getX",
            value: function() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
        },
        {
            key: "getY",
            value: function() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
        },
        {
            key: "equals",
            value: function(t) {
                return t === this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(o.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(o.ZERO))
            }
        },
        {
            key: "isInfinity",
            value: function() {
                return null === this.x && null === this.y || this.z.equals(o.ZERO) && !this.y.toBigInteger().equals(o.ZERO)
            }
        },
        {
            key: "negate",
            value: function() {
                return new t(this.curve, this.x, this.y.negate(), this.z)
            }
        },
        {
            key: "add",
            value: function(i) {
                if (this.isInfinity()) return i;
                if (i.isInfinity()) return this;
                var e = this.x.toBigInteger(),
                r = this.y.toBigInteger(),
                n = this.z,
                s = i.x.toBigInteger(),
                h = i.y.toBigInteger(),
                u = i.z,
                a = this.curve.q,
                f = e.multiply(u).mod(a),
                l = s.multiply(n).mod(a),
                c = f.subtract(l),
                p = r.multiply(u).mod(a),
                y = h.multiply(n).mod(a),
                v = p.subtract(y);
                if (o.ZERO.equals(c)) return o.ZERO.equals(v) ? this.twice() : this.curve.infinity;
                var g = f.add(l),
                m = n.multiply(u).mod(a),
                d = c.square().mod(a),
                T = c.multiply(d).mod(a),
                b = m.multiply(v.square()).subtract(g.multiply(d)).mod(a),
                F = c.multiply(b).mod(a),
                B = v.multiply(d.multiply(f).subtract(b)).subtract(p.multiply(T)).mod(a),
                x = T.multiply(m).mod(a);
                return new t(this.curve, this.curve.fromBigInteger(F), this.curve.fromBigInteger(B), x)
            }
        },
        {
            key: "twice",
            value: function() {
                if (this.isInfinity()) return this;
                if (!this.y.toBigInteger().signum()) return this.curve.infinity;
                var i = this.x.toBigInteger(),
                e = this.y.toBigInteger(),
                r = this.z,
                n = this.curve.q,
                s = this.curve.a.toBigInteger(),
                o = i.square().multiply(h).add(s.multiply(r.square())).mod(n),
                u = e.shiftLeft(1).multiply(r).mod(n),
                a = e.square().mod(n),
                f = a.multiply(i).multiply(r).mod(n),
                l = u.square().mod(n),
                c = o.square().subtract(f.shiftLeft(3)).mod(n),
                p = u.multiply(c).mod(n),
                y = o.multiply(f.shiftLeft(2).subtract(c)).subtract(l.shiftLeft(1).multiply(a)).mod(n),
                v = u.multiply(l).mod(n);
                return new t(this.curve, this.curve.fromBigInteger(p), this.curve.fromBigInteger(y), v)
            }
        },
        {
            key: "multiply",
            value: function(t) {
                if (this.isInfinity()) return this;
                if (!t.signum()) return this.curve.infinity;
                for (var i = t.multiply(h), e = this.negate(), r = this, n = i.bitLength() - 2; n > 0; n--) {
                    r = r.twice();
                    var s = i.testBit(n);
                    s !== t.testBit(n) && (r = r.add(s ? this: e))
                }
                return r
            }
        }]),
        t
    } (),
    f = function() {
        function t(i, e, n) {
            r(this, t),
            this.q = i,
            this.a = this.fromBigInteger(e),
            this.b = this.fromBigInteger(n),
            this.infinity = new a(this, null, null)
        }
        return n(t, [{
            key: "equals",
            value: function(t) {
                return t === this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
            }
        },
        {
            key: "fromBigInteger",
            value: function(t) {
                return new u(this.q, t)
            }
        },
        {
            key: "decodePointHex",
            value: function(t) {
                switch (parseInt(t.substr(0, 2), 16)) {
                case 0:
                    return this.infinity;
                case 2:
                case 3:
                    return null;
                case 4:
                case 6:
                case 7:
                    var i = (t.length - 2) / 2,
                    e = t.substr(2, i),
                    r = t.substr(i + 2, i);
                    return new a(this, this.fromBigInteger(new o(e, 16)), this.fromBigInteger(new o(r, 16)));
                default:
                    return null
                }
            }
        }]),
        t
    } ();
    t.exports = {
        ECPointFp: a,
        ECCurveFp: f
    }
},
function(t, i, e) {
    "use strict";
    function r(t, i) {
        if (! (t instanceof i)) throw new TypeError("Cannot call a class as a function")
    }
    var n = function() {
        function t(t, i) {
            for (var e = 0; e < i.length; e++) {
                var r = i[e];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(i, e, r) {
            return e && t(i.prototype, e),
            r && t(i, r),
            i
        }
    } (),
    s = e(0),
    o = s.BigInteger,
    h = e(2),
    u = e(1),
    a = function() {
        function t() {
            r(this, t),
            this.ct = 1,
            this.p2 = null,
            this.sm3keybase = null,
            this.sm3c3 = null,
            this.key = new Array(32),
            this.keyOff = 0
        }
        return n(t, [{
            key: "reset",
            value: function() {
                this.sm3keybase = new h,
                this.sm3c3 = new h;
                var t = u.hexToArray(this.p2.getX().toBigInteger().toRadix(16)),
                i = u.hexToArray(this.p2.getY().toBigInteger().toRadix(16));
                this.sm3keybase.blockUpdate(t, 0, t.length),
                this.sm3c3.blockUpdate(t, 0, t.length),
                this.sm3keybase.blockUpdate(i, 0, i.length),
                this.ct = 1,
                this.nextKey()
            }
        },
        {
            key: "nextKey",
            value: function() {
                var t = new h(this.sm3keybase);
                t.update(this.ct >> 24 & 255),
                t.update(this.ct >> 16 & 255),
                t.update(this.ct >> 8 & 255),
                t.update(255 & this.ct),
                t.doFinal(this.key, 0),
                this.keyOff = 0,
                this.ct++
            }
        },
        {
            key: "initEncipher",
            value: function(t) {
                var i = u.generateKeyPairHex(),
                e = new o(i.privateKey, 16),
                r = i.publicKey;
                return this.p2 = t.multiply(e),
                this.reset(),
                r.length > 128 && (r = r.substr(r.length - 128)),
                r
            }
        },
        {
            key: "encryptBlock",
            value: function(t) {
                this.sm3c3.blockUpdate(t, 0, t.length);
                for (var i = 0; i < t.length; i++) this.keyOff === this.key.length && this.nextKey(),
                t[i] ^= 255 & this.key[this.keyOff++]
            }
        },
        {
            key: "initDecipher",
            value: function(t, i) {
                this.p2 = i.multiply(t),
                this.reset()
            }
        },
        {
            key: "decryptBlock",
            value: function(t) {
                for (var i = 0; i < t.length; i++) this.keyOff === this.key.length && this.nextKey(),
                t[i] ^= 255 & this.key[this.keyOff++];
                this.sm3c3.blockUpdate(t, 0, t.length)
            }
        },
        {
            key: "doFinal",
            value: function(t) {
                var i = u.hexToArray(this.p2.getY().toBigInteger().toRadix(16));
                this.sm3c3.blockUpdate(i, 0, i.length),
                this.sm3c3.doFinal(t, 0),
                this.reset()
            }
        },
        {
            key: "createPoint",
            value: function(t, i) {
                var e = "04" + t + i;
                return u.getGlobalCurve().decodePointHex(e)
            }
        }]),
        t
    } ();
    t.exports = a
}]);

// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
// Basic JavaScript BN library - subset useful for RSA encryption.

// Bits per digit
var dbits;

// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary & 0xffffff) == 0xefcafe);

// (public) Constructor

function BigInteger(a, b, c) {
    if (a != null) if ("number" == typeof a) this.fromNumber(a, b, c);
    else if (b == null && "string" != typeof a) this.fromString(a, 256);
    else this.fromString(a, b);
}

// return new, unset BigInteger

function nbi() {
    return new BigInteger(null);
}

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)

function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
        var v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 0x4000000);
        w[j++] = v & 0x3ffffff;
    }
    return c;
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)

function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff,
        xh = x >> 15;
    while (--n >= 0) {
        var l = this[i] & 0x7fff;
        var h = this[i++] >> 15;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 0x3fffffff;
    }
    return c;
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.

function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff,
        xh = x >> 14;
    while (--n >= 0) {
        var l = this[i] & 0x3fff;
        var h = this[i++] >> 14;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 0xfffffff;
    }
    return c;
}
if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
}
else if (j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1 << dbits) - 1);
BigInteger.prototype.DV = (1 << dbits);

var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;

// Digit conversions
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

function int2char(n) {
    return BI_RM.charAt(n);
}

function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c;
}

// (protected) copy this to r

function bnpCopyTo(r) {
    for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
}

// (protected) set from integer value x, -DV <= x < DV

function bnpFromInt(x) {
    this.t = 1;
    this.s = (x < 0) ? -1 : 0;
    if (x > 0) this[0] = x;
    else if (x < -1) this[0] = x + DV;
    else this.t = 0;
}

// return bigint initialized to value

function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
}

// (protected) set from string and radix

function bnpFromString(s, b) {
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 256) k = 8; // byte array
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else {
        this.fromRadix(s, b);
        return;
    }
    this.t = 0;
    this.s = 0;
    var i = s.length,
        mi = false,
        sh = 0;
    while (--i >= 0) {
        var x = (k == 8) ? s[i] & 0xff : intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-") mi = true;
            continue;
        }
        mi = false;
        if (sh == 0) this[this.t++] = x;
        else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
            this[this.t++] = (x >> (this.DB - sh));
        }
        else this[this.t - 1] |= x << sh;
        sh += k;
        if (sh >= this.DB) sh -= this.DB;
    }
    if (k == 8 && (s[0] & 0x80) != 0) {
        this.s = -1;
        if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
    }
    this.clamp();
    if (mi) BigInteger.ZERO.subTo(this, this);
}

// (protected) clamp off excess high words

function bnpClamp() {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c)--this.t;
}

// (public) return string representation in given radix

function bnToString(b) {
    if (this.s < 0) return "-" + this.negate().toString(b);
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 64) k = 6;
    else if (b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1 << k) - 1,
        d, m = false,
        r = "",
        i = this.t;
    var p = this.DB - (i * this.DB) % k;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
        }
        while (i >= 0) {
            if (p < k) {
                d = (this[i] & ((1 << p) - 1)) << (k - p);
                d |= this[--i] >> (p += this.DB - k);
            }
            else {
                d = (this[i] >> (p -= k)) & km;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
        }
    }
    return m ? r : "0";
}

// (public) -this

function bnNegate() {
    var r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r;
}

// (public) |this|

function bnAbs() {
    return (this.s < 0) ? this.negate() : this;
}

// (public) return + if this > a, - if this < a, 0 if equal

function bnCompareTo(a) {
    var r = this.s - a.s;
    if (r != 0) return r;
    var i = this.t;
    r = i - a.t;
    if (r != 0) return r;
    while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
    return 0;
}

// returns bit length of the integer x

function nbits(x) {
    var r = 1,
        t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
    }
    return r;
}

// (public) return the number of bits in "this"

function bnBitLength() {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
}

// (protected) r = this << n*DB

function bnpDLShiftTo(n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
    for (i = n - 1; i >= 0; --i) r[i] = 0;
    r.t = this.t + n;
    r.s = this.s;
}

// (protected) r = this >> n*DB

function bnpDRShiftTo(n, r) {
    for (var i = n; i < this.t; ++i) r[i - n] = this[i];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
}

// (protected) r = this << n

function bnpLShiftTo(n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB),
        c = (this.s << bs) & this.DM,
        i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = (this[i] >> cbs) | c;
        c = (this[i] & bm) << bs;
    }
    for (i = ds - 1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
}

// (protected) r = this >> n

function bnpRShiftTo(n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
        r.t = 0;
        return;
    }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs;
    }
    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp();
}

// (protected) r = this - a

function bnpSubTo(a, r) {
    var i = 0,
        c = 0,
        m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c -= a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    }
    else {
        c += this.s;
        while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c -= a.s;
    }
    r.s = (c < 0) ? -1 : 0;
    if (c < -1) r[i++] = this.DV + c;
    else if (c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
}

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.

function bnpMultiplyTo(a, r) {
    var x = this.abs(),
        y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
}

// (protected) r = this^2, r != this (HAC 14.16)

function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2 * x.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x[i], r, 2 * i, 0, 1);
        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
        }
    }
    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    r.s = 0;
    r.clamp();
}

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m. q or r may be null.

function bnpDivRemTo(m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0) return;
    var pt = this.abs();
    if (pt.t < pm.t) {
        if (q != null) q.fromInt(0);
        if (r != null) this.copyTo(r);
        return;
    }
    if (r == null) r = nbi();
    var y = nbi(),
        ts = this.s,
        ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
    if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
    }
    else {
        pm.copyTo(y);
        pt.copyTo(r);
    }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0) return;
    var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt,
        d2 = (1 << this.F1) / yt,
        e = 1 << this.F2;
    var i = r.t,
        j = i - ys,
        t = (q == null) ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r);
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y); // "negative" y so we can replace sub with am later
    while (y.t < ys) y[y.t++] = 0;
    while (--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) { // Try it out
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) r.subTo(t, r);
        }
    }
    if (q != null) {
        r.drShiftTo(ys, q);
        if (ts != ms) BigInteger.ZERO.subTo(q, q);
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder
    if (ts < 0) BigInteger.ZERO.subTo(r, r);
}

// (public) this mod a

function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
    return r;
}

// Modular reduction using "classic" algorithm

function Classic(m) {
    this.m = m;
}

function cConvert(x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
}

function cRevert(x) {
    return x;
}

function cReduce(x) {
    x.divRemTo(this.m, null, x);
}

function cMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}

function cSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
// xy == 1 (mod m)
// xy = 1+km
// xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.

function bnpInvDigit() {
    if (this.t < 1) return 0;
    var x = this[0];
    if ((x & 1) == 0) return 0;
    var y = x & 3; // y == 1/x mod 2^2
    y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
    y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
    y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y > 0) ? this.DV - y : -y;
}

// Montgomery reduction

function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << (m.DB - 15)) - 1;
    this.mt2 = 2 * m.t;
}

// xR mod m

function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
    return r;
}

// x/R mod m

function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
}

// x = x/R mod m (HAC 14.32)

function montReduce(x) {
    while (x.t <= this.mt2) // pad x so am has enough room later
    x[x.t++] = 0;
    for (var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i] & 0x7fff;
        var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        // propagate carry
        while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
        }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}

// r = "x^2/R mod m"; x != r

function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}

// r = "xy/R mod m"; x,y != r

function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

// (protected) true iff this is even

function bnpIsEven() {
    return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
}

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)

function bnpExp(e, z) {
    if (e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(),
        r2 = nbi(),
        g = z.convert(this),
        i = nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
        z.sqrTo(r, r2);
        if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
        else {
            var t = r;
            r = r2;
            r2 = t;
        }
    }
    return z.revert(r);
}

// (public) this^e % m, 0 <= e < 2^32

function bnModPowInt(e, m) {
    var z;
    if (e < 256 || m.isEven()) z = new Classic(m);
    else z = new Montgomery(m);
    return this.exp(e, z);
}

// protected
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;

// public
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;

// "constants"
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);


function bnClone() {
    var r = nbi();
    this.copyTo(r);
    return r;
}

// (public) return value as integer

function bnIntValue() {
    if (this.s < 0) {
        if (this.t == 1) return this[0] - this.DV;
        else if (this.t == 0) return -1;
    }
    else if (this.t == 1) return this[0];
    else if (this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
}

// (public) return value as byte

function bnByteValue() {
    return (this.t == 0) ? this.s : (this[0] << 24) >> 24;
}

// (public) return value as short (assumes DB>=16)

function bnShortValue() {
    return (this.t == 0) ? this.s : (this[0] << 16) >> 16;
}

// (protected) return x s.t. r^x < DV

function bnpChunkSize(r) {
    return Math.floor(Math.LN2 * this.DB / Math.log(r));
}

// (public) 0 if this == 0, 1 if this > 0

function bnSigNum() {
    if (this.s < 0) return -1;
    else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
}

// (protected) convert to radix string

function bnpToRadix(b) {
    if (b == null) b = 10;
    if (this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b, cs);
    var d = nbv(a),
        y = nbi(),
        z = nbi(),
        r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z);
    }
    return z.intValue().toString(b) + r;
}

// (protected) convert from radix string

function bnpFromRadix(s, b) {
    this.fromInt(0);
    if (b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs),
        mi = false,
        j = 0,
        w = 0;
    for (var i = 0; i < s.length; ++i) {
        var x = intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
            continue;
        }
        w = b * w + x;
        if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0;
        }
    }
    if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0);
    }
    if (mi) BigInteger.ZERO.subTo(this, this);
}

// (protected) alternate constructor

function bnpFromNumber(a, b, c) {
    if ("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if (a < 2) this.fromInt(1);
        else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1)) // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
            if (this.isEven()) this.dAddOffset(1, 0); // force odd
            while (!this.isProbablePrime(b)) {
                this.dAddOffset(2, 0);
                if (this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            }
        }
    }
    else {
        // new BigInteger(int,RNG)
        var x = new Array(),
            t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);
        if (t > 0) x[0] &= ((1 << t) - 1);
        else x[0] = 0;
        this.fromString(x, 256);
    }
}

// (public) convert to bigendian byte array

function bnToByteArray() {
    var i = this.t,
        r = new Array();
    r[0] = this.s;
    var p = this.DB - (i * this.DB) % 8,
        d, k = 0;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) r[k++] = d | (this.s << (this.DB - p));
        while (i >= 0) {
            if (p < 8) {
                d = (this[i] & ((1 << p) - 1)) << (8 - p);
                d |= this[--i] >> (p += this.DB - 8);
            }
            else {
                d = (this[i] >> (p -= 8)) & 0xff;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if ((d & 0x80) != 0) d |= -256;
            if (k == 0 && (this.s & 0x80) != (d & 0x80))++k;
            if (k > 0 || d != this.s) r[k++] = d;
        }
    }
    return r;
}

function bnEquals(a) {
    return (this.compareTo(a) == 0);
}

function bnMin(a) {
    return (this.compareTo(a) < 0) ? this : a;
}

function bnMax(a) {
    return (this.compareTo(a) > 0) ? this : a;
}

// (protected) r = this op a (bitwise)

function bnpBitwiseTo(a, op, r) {
    var i, f, m = Math.min(a.t, this.t);
    for (i = 0; i < m; ++i) r[i] = op(this[i], a[i]);
    if (a.t < this.t) {
        f = a.s & this.DM;
        for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
        r.t = this.t;
    }
    else {
        f = this.s & this.DM;
        for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
        r.t = a.t;
    }
    r.s = op(this.s, a.s);
    r.clamp();
}

// (public) this & a

function op_and(x, y) {
    return x & y;
}

function bnAnd(a) {
    var r = nbi();
    this.bitwiseTo(a, op_and, r);
    return r;
}

// (public) this | a

function op_or(x, y) {
    return x | y;
}

function bnOr(a) {
    var r = nbi();
    this.bitwiseTo(a, op_or, r);
    return r;
}

// (public) this ^ a

function op_xor(x, y) {
    return x ^ y;
}

function bnXor(a) {
    var r = nbi();
    this.bitwiseTo(a, op_xor, r);
    return r;
}

// (public) this & ~a

function op_andnot(x, y) {
    return x & ~y;
}

function bnAndNot(a) {
    var r = nbi();
    this.bitwiseTo(a, op_andnot, r);
    return r;
}

// (public) ~this

function bnNot() {
    var r = nbi();
    for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
    r.t = this.t;
    r.s = ~this.s;
    return r;
}

// (public) this << n

function bnShiftLeft(n) {
    var r = nbi();
    if (n < 0) this.rShiftTo(-n, r);
    else this.lShiftTo(n, r);
    return r;
}

// (public) this >> n

function bnShiftRight(n) {
    var r = nbi();
    if (n < 0) this.lShiftTo(-n, r);
    else this.rShiftTo(n, r);
    return r;
}

// return index of lowest 1-bit in x, x < 2^31

function lbit(x) {
    if (x == 0) return -1;
    var r = 0;
    if ((x & 0xffff) == 0) {
        x >>= 16;
        r += 16;
    }
    if ((x & 0xff) == 0) {
        x >>= 8;
        r += 8;
    }
    if ((x & 0xf) == 0) {
        x >>= 4;
        r += 4;
    }
    if ((x & 3) == 0) {
        x >>= 2;
        r += 2;
    }
    if ((x & 1) == 0)++r;
    return r;
}

// (public) returns index of lowest 1-bit (or -1 if none)

function bnGetLowestSetBit() {
    for (var i = 0; i < this.t; ++i)
    if (this[i] != 0) return i * this.DB + lbit(this[i]);
    if (this.s < 0) return this.t * this.DB;
    return -1;
}

// return number of 1 bits in x

function cbit(x) {
    var r = 0;
    while (x != 0) {
        x &= x - 1;
        ++r;
    }
    return r;
}

// (public) return number of set bits

function bnBitCount() {
    var r = 0,
        x = this.s & this.DM;
    for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
    return r;
}

// (public) true iff nth bit is set

function bnTestBit(n) {
    var j = Math.floor(n / this.DB);
    if (j >= this.t) return (this.s != 0);
    return ((this[j] & (1 << (n % this.DB))) != 0);
}

// (protected) this op (1<<n)

function bnpChangeBit(n, op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r;
}

// (public) this | (1<<n)

function bnSetBit(n) {
    return this.changeBit(n, op_or);
}

// (public) this & ~(1<<n)

function bnClearBit(n) {
    return this.changeBit(n, op_andnot);
}

// (public) this ^ (1<<n)

function bnFlipBit(n) {
    return this.changeBit(n, op_xor);
}

// (protected) r = this + a

function bnpAddTo(a, r) {
    var i = 0,
        c = 0,
        m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c += a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    }
    else {
        c += this.s;
        while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += a.s;
    }
    r.s = (c < 0) ? -1 : 0;
    if (c > 0) r[i++] = c;
    else if (c < -1) r[i++] = this.DV + c;
    r.t = i;
    r.clamp();
}

// (public) this + a

function bnAdd(a) {
    var r = nbi();
    this.addTo(a, r);
    return r;
}

// (public) this - a

function bnSubtract(a) {
    var r = nbi();
    this.subTo(a, r);
    return r;
}

// (public) this * a

function bnMultiply(a) {
    var r = nbi();
    this.multiplyTo(a, r);
    return r;
}

// (public) this^2

function bnSquare() {
    var r = nbi();
    this.squareTo(r);
    return r;
}

// (public) this / a

function bnDivide(a) {
    var r = nbi();
    this.divRemTo(a, r, null);
    return r;
}

// (public) this % a

function bnRemainder(a) {
    var r = nbi();
    this.divRemTo(a, null, r);
    return r;
}

// (public) [this/a,this%a]

function bnDivideAndRemainder(a) {
    var q = nbi(),
        r = nbi();
    this.divRemTo(a, q, r);
    return new Array(q, r);
}

// (protected) this *= n, this >= 0, 1 < n < DV

function bnpDMultiply(n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
}

// (protected) this += n << w words, this >= 0

function bnpDAddOffset(n, w) {
    if (n == 0) return;
    while (this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while (this[w] >= this.DV) {
        this[w] -= this.DV;
        if (++w >= this.t) this[this.t++] = 0;
        ++this[w];
    }
}

// A "null" reducer

function NullExp() {}

function nNop(x) {
    return x;
}

function nMulTo(x, y, r) {
    x.multiplyTo(y, r);
}

function nSqrTo(x, r) {
    x.squareTo(r);
}

NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

// (public) this^e

function bnPow(e) {
    return this.exp(e, new NullExp());
}

// (protected) r = lower n words of "this * a", a.t <= n
// "this" should be the larger one if appropriate.

function bnpMultiplyLowerTo(a, n, r) {
    var i = Math.min(this.t + a.t, n);
    r.s = 0; // assumes a,this >= 0
    r.t = i;
    while (i > 0) r[--i] = 0;
    var j;
    for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
    for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
    r.clamp();
}

// (protected) r = "this * a" without lower n words, n > 0
// "this" should be the larger one if appropriate.

function bnpMultiplyUpperTo(a, n, r) {
    --n;
    var i = r.t = this.t + a.t - n;
    r.s = 0; // assumes a,this >= 0
    while (--i >= 0) r[i] = 0;
    for (i = Math.max(n - this.t, 0); i < a.t; ++i)
    r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
    r.clamp();
    r.drShiftTo(1, r);
}

// Barrett modular reduction

function Barrett(m) {
    // setup Barrett
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
}

function barrettConvert(x) {
    if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
    else if (x.compareTo(this.m) < 0) return x;
    else {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
    }
}

function barrettRevert(x) {
    return x;
}

// x = x mod m (HAC 14.42)

function barrettReduce(x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp();
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}

// r = x^2 mod m; x != r

function barrettSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}

// r = x*y mod m; x,y != r

function barrettMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}

Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

// (public) this^e % m (HAC 14.85)

function bnModPow(e, m) {
    var i = e.bitLength(),
        k, r = nbv(1),
        z;
    if (i <= 0) return r;
    else if (i < 18) k = 1;
    else if (i < 48) k = 3;
    else if (i < 144) k = 4;
    else if (i < 768) k = 5;
    else k = 6;
    if (i < 8) z = new Classic(m);
    else if (m.isEven()) z = new Barrett(m);
    else z = new Montgomery(m);

    // precomputation
    var g = new Array(),
        n = 3,
        k1 = k - 1,
        km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1], g2);
        while (n <= km) {
            g[n] = nbi();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
        }
    }

    var j = e.t - 1,
        w, is1 = true,
        r2 = nbi(),
        t;
    i = nbits(e[j]) - 1;
    while (j >= 0) {
        if (i >= k1) w = (e[j] >> (i - k1)) & km;
        else {
            w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
            if (j > 0) w |= e[j - 1] >> (this.DB + i - k1);
        }

        n = k;
        while ((w & 1) == 0) {
            w >>= 1;
            --n;
        }
        if ((i -= n) < 0) {
            i += this.DB;
            --j;
        }
        if (is1) { // ret == 1, don't bother squaring or multiplying it
            g[w].copyTo(r);
            is1 = false;
        }
        else {
            while (n > 1) {
                z.sqrTo(r, r2);
                z.sqrTo(r2, r);
                n -= 2;
            }
            if (n > 0) z.sqrTo(r, r2);
            else {
                t = r;
                r = r2;
                r2 = t;
            }
            z.mulTo(r2, g[w], r);
        }

        while (j >= 0 && (e[j] & (1 << i)) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
                i = this.DB - 1;
                --j;
            }
        }
    }
    return z.revert(r);
}

// (public) gcd(this,a) (HAC 14.54)

function bnGCD(a) {
    var x = (this.s < 0) ? this.negate() : this.clone();
    var y = (a.s < 0) ? a.negate() : a.clone();
    if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
    }
    var i = x.getLowestSetBit(),
        g = y.getLowestSetBit();
    if (g < 0) return x;
    if (i < g) g = i;
    if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
    }
    while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
        if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
        if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
        }
        else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
        }
    }
    if (g > 0) y.lShiftTo(g, y);
    return y;
}

// (protected) this % n, n < 2^26

function bnpModInt(n) {
    if (n <= 0) return 0;
    var d = this.DV % n,
        r = (this.s < 0) ? n - 1 : 0;
    if (this.t > 0) if (d == 0) r = this[0] % n;
    else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
    return r;
}

// (public) 1/this % m (HAC 14.61)

function bnModInverse(m) {
    var ac = m.isEven();
    if ((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
    var u = m.clone(),
        v = this.clone();
    var a = nbv(1),
        b = nbv(0),
        c = nbv(0),
        d = nbv(1);
    while (u.signum() != 0) {
        while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
                if (!a.isEven() || !b.isEven()) {
                    a.addTo(this, a);
                    b.subTo(m, b);
                }
                a.rShiftTo(1, a);
            }
            else if (!b.isEven()) b.subTo(m, b);
            b.rShiftTo(1, b);
        }
        while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
                if (!c.isEven() || !d.isEven()) {
                    c.addTo(this, c);
                    d.subTo(m, d);
                }
                c.rShiftTo(1, c);
            }
            else if (!d.isEven()) d.subTo(m, d);
            d.rShiftTo(1, d);
        }
        if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) a.subTo(c, a);
            b.subTo(d, b);
        }
        else {
            v.subTo(u, v);
            if (ac) c.subTo(a, c);
            d.subTo(b, d);
        }
    }
    if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if (d.compareTo(m) >= 0) return d.subtract(m);
    if (d.signum() < 0) d.addTo(m, d);
    else return d;
    if (d.signum() < 0) return d.add(m);
    else return d;
}

var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];

// (public) test primality with certainty >= 1-.5^t

function bnIsProbablePrime(t) {
    var i, x = this.abs();
    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i)
        if (x[0] == lowprimes[i]) return true;
        return false;
    }
    if (x.isEven()) return false;
    i = 1;
    while (i < lowprimes.length) {
        var m = lowprimes[i],
            j = i + 1;
        while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while (i < j) if (m % lowprimes[i++] == 0) return false;
    }
    return x.millerRabin(t);
}

// (protected) true if probably prime (HAC 4.24, Miller-Rabin)

function bnpMillerRabin(t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0) return false;
    var r = n1.shiftRight(k);
    t = (t + 1) >> 1;
    if (t > lowprimes.length) t = lowprimes.length;
    var a = nbi();
    for (var i = 0; i < t; ++i) {
        // Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var y = a.modPow(r, this);
        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
                y = y.modPowInt(2, this);
                if (y.compareTo(BigInteger.ONE) == 0) return false;
            }
            if (y.compareTo(n1) != 0) return false;
        }
    }
    return true;
}

// protected
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;

// public
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

// JSBN-specific extension
BigInteger.prototype.square = bnSquare;



















// seedrandom.js version 2.0.
// Author: David Bau 4/2/2011
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random(). Also
// supports automatic seeding from local or network sources of entropy.
//
// Usage:
//
// <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
// Math.seedrandom('yipee'); Sets Math.random to a function that is
// initialized using the given explicit seed.
//
// Math.seedrandom(); Sets Math.random to a function that is
// seeded using the current time, dom state,
// and other accumulated local entropy.
// The generated seed string is returned.
//
// Math.seedrandom('yowza', true);
// Seeds using the given explicit seed mixed
// together with accumulated entropy.
//
// <script src="http://bit.ly/srandom-512"></script>
// Seeds using physical random bits downloaded
// from random.org.
//
// <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
// </script> Seeds using urandom bits from call.jsonlib.com,
// which is faster than random.org.
//
// Examples:
//
// Math.seedrandom("hello"); // Use "hello" as the seed.
// document.write(Math.random()); // Always 0.5463663768140734
// document.write(Math.random()); // Always 0.43973793770592234
// var rng1 = Math.random; // Remember the current prng.
//
// var autoseed = Math.seedrandom(); // New prng with an automatic seed.
// document.write(Math.random()); // Pretty much unpredictable.
//
// Math.random = rng1; // Continue "hello" prng sequence.
// document.write(Math.random()); // Always 0.554769432473455
//
// Math.seedrandom(autoseed); // Restart at the previous seed.
// document.write(Math.random()); // Repeat the 'unpredictable' value.
//
// Notes:
//
// Each time seedrandom('arg') is called, entropy from the passed seed
// is accumulated in a pool to help generate future seeds for the
// zero-argument form of Math.seedrandom, so entropy can be injected over
// time by calling seedrandom with explicit data repeatedly.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but this is typically fast enough anyway. Seeding is more expensive,
// especially if you use auto-seeding. Some details (timings on Chrome 4):
//
// Our Math.random() - avg less than 0.002 milliseconds per call
// seedrandom('explicit') - avg less than 0.5 milliseconds per call
// seedrandom('explicit', true) - avg less than 2 milliseconds per call
// seedrandom() - avg about 38 milliseconds per call
//
// LICENSE (BSD):
//
// Copyright 2010 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright
// notice, this list of conditions and the following disclaimer in the
// documentation and/or other materials provided with the distribution.
// 
// 3. Neither the name of this module nor the names of its contributors may
// be used to endorse or promote products derived from this software
// without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
/**
 * All code is in an anonymous closure to keep the global namespace clean.
 * 
 * @param {number=}
 *            overflow
 * @param {number=}
 *            startdenom
 */
(function (pool, math, width, chunks, significance, overflow, startdenom)
{


    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    math['seedrandom'] = function seedrandom(seed, use_entropy)
    {
        var key = [];
        var arc4;

        // Flatten the seed string or build one from local entropy if needed.
        seed = mixkey(flatten(
        use_entropy ? [seed, pool] : arguments.length ? seed : [new Date().getTime(), pool, window], 3), key);

        // Use the seed to initialize an ARC4 generator.
        arc4 = new ARC4(key);

        // Mix the randomness into accumulated entropy.
        mixkey(arc4.S, pool);

        // Override Math.random
        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        math['random'] = function random()
        { // Closure to return a random double:
            var n = arc4.g(chunks); // Start with a numerator n < 2 ^ 48
            var d = startdenom; // and denominator d = 2 ^ 48.
            var x = 0; // and no 'extra last byte'.
            while (n < significance)
            { // Fill up all significant digits by
                n = (n + x) * width; // shifting numerator and
                d *= width; // denominator and generating a
                x = arc4.g(1); // new least-significant-byte.
            }
            while (n >= overflow)
            { // To avoid rounding up, before adding
                n /= 2; // last byte, shift everything
                d /= 2; // right using integer math until
                x >>>= 1; // we have exactly the desired bits.
            }
            return (n + x) / d; // Form the number within [0, 1).
        };

        // Return the seed that was used
        return seed;
    };

    //
    // ARC4
    //
    // An ARC4 implementation. The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4. Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    /** @constructor */

    function ARC4(key)
    {
        var t, u, me = this,
            keylen = key.length;
        var i = 0,
            j = me.i = me.j = me.m = 0;
        me.S = [];
        me.c = [];

        // The empty key [] is treated as [0].
        if (!keylen)
        {
            key = [keylen++];
        }

        // Set up S using the standard key scheduling algorithm.
        while (i < width)
        {
            me.S[i] = i++;
        }
        for (i = 0; i < width; i++)
        {
            t = me.S[i];
            j = lowbits(j + t + key[i % keylen]);
            u = me.S[j];
            me.S[i] = u;
            me.S[j] = t;
        }

        // The "g" method returns the next (count) outputs as one number.
        me.g = function getnext(count)
        {
            var s = me.S;
            var i = lowbits(me.i + 1);
            var t = s[i];
            var j = lowbits(me.j + t);
            var u = s[j];
            s[i] = u;
            s[j] = t;
            var r = s[lowbits(t + u)];
            while (--count)
            {
                i = lowbits(i + 1);
                t = s[i];
                j = lowbits(j + t);
                u = s[j];
                s[i] = u;
                s[j] = t;
                r = r * width + s[lowbits(t + u)];
            }
            me.i = i;
            me.j = j;
            return r;
        };
        // For robust unpredictability discard an initial batch of values.
        // See http://www.rsa.com/rsalabs/node.asp?id=2009
        me.g(width);
    }

    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    /**
	 * @param {Object=}
	 *            result
	 * @param {string=}
	 *            prop
	 * @param {string=}
	 *            typ
	 */

    function flatten(obj, depth, result, prop, typ)
    {
        result = [];
        typ = typeof (obj);
        if (depth && typ == 'object')
        {
            for (prop in obj)
            {
                if (prop.indexOf('S') < 5)
                { // Avoid FF3 bug (local/sessionStorage)
                    try
                    {
                        result.push(flatten(obj[prop], depth - 1));
                    }
                    catch (e)
                    {}
                }
            }
        }
        return (result.length ? result : obj + (typ != 'string' ? '\0' : ''));
    }

    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    /**
	 * @param {number=}
	 *            smear
	 * @param {number=}
	 *            j
	 */

    function mixkey(seed, key, smear, j)
    {
        seed += ''; // Ensure the seed is a string
        smear = 0;
        for (j = 0; j < seed.length; j++)
        {
            key[lowbits(j)] = lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
        }
        seed = '';
        for (j in key)
        {
            seed += String.fromCharCode(key[j]);
        }
        return seed;
    }

    //
    // lowbits()
    // A quick "n mod width" for width a power of 2.
    //


    function lowbits(n)
    {
        return n & (width - 1);
    }

    //
    // The following constants are related to IEEE 754 limits.
    //
    startdenom = math.pow(width, chunks);
    significance = math.pow(2, significance);
    overflow = significance * 2;

    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool. Because we do
    // not want to intefere with determinstic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);

    // End anonymous scope, and pass initial values.
})([], // pool: entropy pool starts empty
Math, // math: package containing random, pow, and seedrandom
256, // width: each RC4 output is 0 <= x < 256
6, // chunks: at least six RC4 outputs for each double
52 // significance: there are 52 significant digits in a double
);


// This is not really a random number generator object, and two SeededRandom
// objects will conflict with one another, but it's good enough for generating
// the rsa key.
function SeededRandom(){}

function SRnextBytes(ba)
{
    var i;
    for(i = 0; i < ba.length; i++)
    {
        ba[i] = Math.floor(Math.random() * 256);
    }
}

SeededRandom.prototype.nextBytes = SRnextBytes;

// prng4.js - uses Arcfour as a PRNG

function Arcfour() {
  this.i = 0;
  this.j = 0;
  this.S = new Array();
}

// Initialize arcfour context from key, an array of ints, each from [0..255]
function ARC4init(key) {
  var i, j, t;
  for(i = 0; i < 256; ++i)
    this.S[i] = i;
  j = 0;
  for(i = 0; i < 256; ++i) {
    j = (j + this.S[i] + key[i % key.length]) & 255;
    t = this.S[i];
    this.S[i] = this.S[j];
    this.S[j] = t;
  }
  this.i = 0;
  this.j = 0;
}

function ARC4next() {
  var t;
  this.i = (this.i + 1) & 255;
  this.j = (this.j + this.S[this.i]) & 255;
  t = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t;
  return this.S[(t + this.S[this.i]) & 255];
}

Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;

// Plug in your RNG constructor here
function prng_newstate() {
  return new Arcfour();
}

// Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()
var rng_psize = 256;

// Random number generator - requires a PRNG backend, e.g. prng4.js

// For best results, put code like
// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
// in your main HTML document.

var rng_state;
var rng_pool;
var rng_pptr;

// Mix in a 32-bit integer into the pool
function rng_seed_int(x) {
  rng_pool[rng_pptr++] ^= x & 255;
  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
  if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
}

// Mix in the current time (w/milliseconds) into the pool
function rng_seed_time() {
  rng_seed_int(new Date().getTime());
}

// Initialize the pool with junk if needed.
if(rng_pool == null) {
  rng_pool = new Array();
  rng_pptr = 0;
  var t;
  if(navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
    // Extract entropy (256 bits) from NS4 RNG if available
    var z = window.crypto.random(32);
    for(t = 0; t < z.length; ++t)
      rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
  }  
  while(rng_pptr < rng_psize) {  // extract some randomness from
									// Math.random()
    t = Math.floor(65536 * Math.random());
    rng_pool[rng_pptr++] = t >>> 8;
    rng_pool[rng_pptr++] = t & 255;
  }
  rng_pptr = 0;
  rng_seed_time();
  // rng_seed_int(window.screenX);
  // rng_seed_int(window.screenY);
}

function rng_get_byte() {
  if(rng_state == null) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);
    for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
      rng_pool[rng_pptr] = 0;
    rng_pptr = 0;
    // rng_pool = null;
  }
  // TODO: allow reseeding after first request
  return rng_state.next();
}

function rng_get_bytes(ba) {
  var i;
  for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
}

function SecureRandom() {}

SecureRandom.prototype.nextBytes = rng_get_bytes;







/**
 * 
 * Secure Hash Algorithm (SHA256) http://www.webtoolkit.info/
 * 
 * Original code by Angel Marin, Paul Johnston.
 * 
 */
 
function SHA256(s){
 
	var chrsz   = 8;
	var hexcase = 0;
 
	function safe_add (x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}
 
	function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
	function R (X, n) { return ( X >>> n ); }
	function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
	function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
	function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
	function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
	function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
	function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
 
	function core_sha256 (m, l) {
		var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
		var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
		var W = new Array(64);
		var a, b, c, d, e, f, g, h, i, j;
		var T1, T2;
 
		m[l >> 5] |= 0x80 << (24 - l % 32);
		m[((l + 64 >> 9) << 4) + 15] = l;
 
		for ( var i = 0; i<m.length; i+=16 ) {
			a = HASH[0];
			b = HASH[1];
			c = HASH[2];
			d = HASH[3];
			e = HASH[4];
			f = HASH[5];
			g = HASH[6];
			h = HASH[7];
 
			for ( var j = 0; j<64; j++) {
				if (j < 16) W[j] = m[j + i];
				else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
 
				T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
				T2 = safe_add(Sigma0256(a), Maj(a, b, c));
 
				h = g;
				g = f;
				f = e;
				e = safe_add(d, T1);
				d = c;
				c = b;
				b = a;
				a = safe_add(T1, T2);
			}
 
			HASH[0] = safe_add(a, HASH[0]);
			HASH[1] = safe_add(b, HASH[1]);
			HASH[2] = safe_add(c, HASH[2]);
			HASH[3] = safe_add(d, HASH[3]);
			HASH[4] = safe_add(e, HASH[4]);
			HASH[5] = safe_add(f, HASH[5]);
			HASH[6] = safe_add(g, HASH[6]);
			HASH[7] = safe_add(h, HASH[7]);
		}
		return HASH;
	}
 
	function str2binb (str) {
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for(var i = 0; i < str.length * chrsz; i += chrsz) {
			bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
		}
		return bin;
	}
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	}
 
	function binb2hex (binarray) {
		var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var str = "";
		for(var i = 0; i < binarray.length * 4; i++) {
			str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
			hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
		}
		return str;
	}
 
	s = Utf8Encode(s);
	return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}

var sha256 = {}
sha256.hex = function(s)
{
    return SHA256(s);
}

/**
 * 
 * Secure Hash Algorithm (SHA1) http://www.webtoolkit.info/
 * 
 */
 
function SHA1 (msg) {
 
	function rotate_left(n,s) {
		var t4 = ( n<<s ) | (n>>>(32-s));
		return t4;
	};
 
	function lsb_hex(val) {
		var str="";
		var i;
		var vh;
		var vl;
 
		for( i=0; i<=6; i+=2 ) {
			vh = (val>>>(i*4+4))&0x0f;
			vl = (val>>>(i*4))&0x0f;
			str += vh.toString(16) + vl.toString(16);
		}
		return str;
	};
 
	function cvt_hex(val) {
		var str="";
		var i;
		var v;
 
		for( i=7; i>=0; i-- ) {
			v = (val>>>(i*4))&0x0f;
			str += v.toString(16);
		}
		return str;
	};
 
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;
 
	msg = Utf8Encode(msg);
 
	var msg_len = msg.length;
 
	var word_array = new Array();
	for( i=0; i<msg_len-3; i+=4 ) {
		j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
		msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
		word_array.push( j );
	}
 
	switch( msg_len % 4 ) {
		case 0:
			i = 0x080000000;
		break;
		case 1:
			i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
		break;
 
		case 2:
			i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
		break;
 
		case 3:
			i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8	| 0x80;
		break;
	}
 
	word_array.push( i );
 
	while( (word_array.length % 16) != 14 ) word_array.push( 0 );
 
	word_array.push( msg_len>>>29 );
	word_array.push( (msg_len<<3)&0x0ffffffff );
 
 
	for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
 
		for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
		for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
 
		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;
 
		for( i= 0; i<=19; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		for( i=20; i<=39; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		for( i=40; i<=59; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		for( i=60; i<=79; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;
 
	}
 
	var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
 
	return temp.toLowerCase();
 
}

var sha1 = {}
sha1.hex = function(s)
{
    return SHA1(s);
}

/**
 * 
 * MD5 (Message-Digest Algorithm) http://www.webtoolkit.info/
 * 
 */
 
var MD5 = function (string) {
 
	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}
 
	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}
 
 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }
 
	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};
 
	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
 
	string = Utf8Encode(string);
 
	x = ConvertToWordArray(string);
 
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}
 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
	return temp.toLowerCase();
}













// Depends on jsbn.js and rng.js
// Version 1.1: support utf-8 encoding in pkcs1pad2
// convert a (hex) string to a bignum object


function parseBigInt(str, r)
{
    return new BigInteger(str, r);
}

function linebrk(s, n)
{
    var ret = "";
    var i = 0;
    while (i + n < s.length)
    {
        ret += s.substring(i, i + n) + "\n";
        i += n;
    }
    return ret + s.substring(i, s.length);
}

function byte2Hex(b)
{
    if (b < 0x10) return "0" + b.toString(16);
    else return b.toString(16);
}

// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint

function pkcs1pad2(s, n){
	 if (n < s.length + 11)
	    { // TODO: fix for utf-8
	        // alert("Message too long for RSA (n=" + n + ", l=" + s.length +
			// ")");
	        // return null;
	        throw "Message too long for RSA (n=" + n + ", l=" + s.length + ")";
	    }
	 ba = new Array();
	 for (var i=0;i<s.length;i++){
		 ba[i] = s.charCodeAt(i);
	 }
	 return new BigInteger(ba);
}
function pkcs1pad23(s, n)
{
    if (n < s.length + 11)
    { // TODO: fix for utf-8
        // alert("Message too long for RSA (n=" + n + ", l=" + s.length + ")");
        // return null;
        throw "Message too long for RSA (n=" + n + ", l=" + s.length + ")";
    }
    var ba = new Array();
    var i = s.length - 1;
    while (i >= 0 && n > 0)
    {
        var c = s.charCodeAt(i--);
        if (c < 128)
        { // encode using utf-8
            ba[--n] = c;
        }
        else if ((c > 127) && (c < 2048))
        {
            ba[--n] = (c & 63) | 128;
            ba[--n] = (c >> 6) | 192;
        }
        else
        {
            ba[--n] = (c & 63) | 128;
            ba[--n] = ((c >> 6) & 63) | 128;
            ba[--n] = (c >> 12) | 224;
        }
    }
    ba[--n] = 0;
    var rng = new SecureRandom();
    var x = new Array();
    while (n > 2)
    { // random non-zero pad
        x[0] = 0;
        while (x[0] == 0) rng.nextBytes(x);
       // ba[--n] = x[0];
        ba[--n] = 0;
    }
    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba);
}

// "empty" RSA key constructor


function RSAKey()
{
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null;
}
// Set the public key fields N and e from hex strings


function RSASetPublic(N, E)
{
    if (N != null && E != null && N.length > 0 && E.length > 0)
    {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
    }
    else alert("Invalid RSA public key");
}

// Perform raw public operation on "x": return x^e (mod n)


function RSADoPublic(x)
{
    return x.modPowInt(this.e, this.n);
}

// Return the PKCS#1 RSA encryption of "text" as an even-length hex string


function RSAEncrypt(text)
{
    var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
    if (m == null) return null;
    var c = this.doPublic(m);
    if (c == null) return null;
    var h = c.toString(16);
    if ((h.length & 1) == 0) return h;
    else return "0" + h;
}

// Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
// function RSAEncryptB64(text) {
// var h = this.encrypt(text);
// if(h) return hex2b64(h); else return null;
// }
// protected
RSAKey.prototype.doPublic = RSADoPublic;

// public
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;

// Version 1.1: support utf-8 decoding in pkcs1unpad2
// Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext

function pkcs1unpad2(d, n)
{
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] == 0)++i;
    if (b.length - i != n - 1 || b[i] != 2) return null;
    ++i;
    while (b[i] != 0)
    if (++i >= b.length) return null;
    var ret = "";
    while (++i < b.length)
    {
        var c = b[i] & 255;
        if (c < 128)
        { // utf-8 decode
            ret += String.fromCharCode(c);
        }
        else if ((c > 191) && (c < 224))
        {
            ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
            ++i;
        }
        else
        {
            ret += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
            i += 2;
        }
    }
    return ret;
}

// Set the private key fields N, e, and d from hex strings
function RSASetPrivate(N, E, D)
{
    if (N != null && E != null && N.length > 0 && E.length > 0)
    {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16);
    }
    else alert("Invalid RSA private key");
}

// Set the private key fields N, e, d and CRT params from hex strings
function RSASetPrivateEx(N, E, D, P, Q, DP, DQ, C)
{
    if (N != null && E != null && N.length > 0 && E.length > 0)
    {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16);
        this.p = parseBigInt(P, 16);
        this.q = parseBigInt(Q, 16);
        this.dmp1 = parseBigInt(DP, 16);
        this.dmq1 = parseBigInt(DQ, 16);
        this.coeff = parseBigInt(C, 16);
    }
    else alert("Invalid RSA private key");
}

// Generate a new random private key B bits long, using public expt E
function RSAGenerate(B, E)
{
    var rng = new SeededRandom();
    var qs = B >> 1;
    this.e = parseInt(E, 16);
    var ee = new BigInteger(E, 16);
    for (;;)
    {
        for (;;)
        {
            this.p = new BigInteger(B - qs, 1, rng);
            if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) break;
        }
        for (;;)
        {
            this.q = new BigInteger(qs, 1, rng);
            if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) break;
        }
        if (this.p.compareTo(this.q) <= 0)
        {
            var t = this.p;
            this.p = this.q;
            this.q = t;
        }
        var p1 = this.p.subtract(BigInteger.ONE);
        var q1 = this.q.subtract(BigInteger.ONE);
        var phi = p1.multiply(q1);
        if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0)
        {
            this.n = this.p.multiply(this.q);
            this.d = ee.modInverse(phi);
            this.dmp1 = this.d.mod(p1);
            this.dmq1 = this.d.mod(q1);
            this.coeff = this.q.modInverse(this.p);
            break;
        }
    }
}

// Perform raw private operation on "x": return x^d (mod n)
function RSADoPrivate(x)
{
    if (this.p == null || this.q == null) return x.modPow(this.d, this.n);
    // TODO: re-calculate any missing CRT params
    var xp = x.mod(this.p).modPow(this.dmp1, this.p);
    var xq = x.mod(this.q).modPow(this.dmq1, this.q);
    while (xp.compareTo(xq) < 0)
    xp = xp.add(this.p);
    return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
}

// Return the PKCS#1 RSA decryption of "ctext".
// "ctext" is an even-length hex string and the output is a plain string.
function RSADecrypt(text)
{
	 var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
	 if (m == null) return null;
	 var c = this.doPrivate(m);
	 if (c == null) return null;
	 var h = c.toString(16);
	 if ((h.length & 1) == 0) return h;
	 else return "0" + h;
}

// protected
RSAKey.prototype.doPrivate = RSADoPrivate;

// public
RSAKey.prototype.setPrivate = RSASetPrivate;
RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.decrypt = RSADecrypt;


//
// rsa-sign.js - adding signing functions to RSAKey class.
//
//
// version: 1.0 (2010-Jun-03)
//
// Copyright (c) 2010 Kenji Urushima (kenji.urushima@gmail.com)
//
// This software is licensed under the terms of the MIT License.
// http://www.opensource.org/licenses/mit-license.php
//
// The above copyright and license notice shall be
// included in all copies or substantial portions of the Software.
//
// Depends on:
// function sha1.hex(s) of sha1.js
// jsbn.js
// jsbn2.js
// rsa.js
// rsa2.js
//
// keysize / pmstrlen
// 512 / 128
// 1024 / 256
// 2048 / 512
// 4096 / 1024
// As for _RSASGIN_DIHEAD values for each hash algorithm, see PKCS#1 v2.1 spec
// (p38).
var _RSASIGN_DIHEAD = [];
_RSASIGN_DIHEAD['sha1'] = "3021300906052b0e03021a05000414";
_RSASIGN_DIHEAD['sha256'] = "3031300d060960864801650304020105000420";
// _RSASIGN_DIHEAD['md2'] = "3020300c06082a864886f70d020205000410";
// _RSASIGN_DIHEAD['md5'] = "3020300c06082a864886f70d020505000410";
// _RSASIGN_DIHEAD['sha384'] = "3041300d060960864801650304020205000430";
// _RSASIGN_DIHEAD['sha512'] = "3051300d060960864801650304020305000440";
var _RSASIGN_HASHHEXFUNC = [];
_RSASIGN_HASHHEXFUNC['sha1'] = sha1.hex;
_RSASIGN_HASHHEXFUNC['sha256'] = sha256.hex;

// ========================================================================
// Signature Generation
// ========================================================================

function _rsasign_getHexPaddedDigestInfoForString(s, keySize, hashAlg)
{
    var pmStrLen = keySize / 4;
    var hashFunc = _RSASIGN_HASHHEXFUNC[hashAlg];
    var sHashHex = hashFunc(s);

    var sHead = "0001";
    var sTail = "00" + _RSASIGN_DIHEAD[hashAlg] + sHashHex;
    var sMid = "";
    var fLen = pmStrLen - sHead.length - sTail.length;
    for (var i = 0; i < fLen; i += 2)
    {
        sMid += "ff";
    }
    sPaddedMessageHex = sHead + sMid + sTail;
    return sPaddedMessageHex;
}

function _rsasign_signString(s, hashAlg)
{
    var hPM = _rsasign_getHexPaddedDigestInfoForString(s, this.n.bitLength(), hashAlg);
    var biPaddedMessage = parseBigInt(hPM, 16);
    var biSign = this.doPrivate(biPaddedMessage);
    var hexSign = biSign.toString(16);
    return hexSign;
}

function _rsasign_signStringWithSHA1(s)
{
    var hPM = _rsasign_getHexPaddedDigestInfoForString(s, this.n.bitLength(), 'sha1');
    var biPaddedMessage = parseBigInt(hPM, 16);
    var biSign = this.doPrivate(biPaddedMessage);
    var hexSign = biSign.toString(16);
    return hexSign;
}

function _rsasign_signStringWithSHA256(s)
{
    var hPM = _rsasign_getHexPaddedDigestInfoForString(s, this.n.bitLength(), 'sha256');
    var biPaddedMessage = parseBigInt(hPM, 16);
    var biSign = this.doPrivate(biPaddedMessage);
    var hexSign = biSign.toString(16);
    return hexSign;
}

// ========================================================================
// Signature Verification
// ========================================================================

function _rsasign_getDecryptSignatureBI(biSig, hN, hE)
{
    var rsa = new RSAKey();
    rsa.setPublic(hN, hE);
    var biDecryptedSig = rsa.doPublic(biSig);
    return biDecryptedSig;
}

function _rsasign_getHexDigestInfoFromSig(biSig, hN, hE)
{
    var biDecryptedSig = _rsasign_getDecryptSignatureBI(biSig, hN, hE);
    var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, '');
    return hDigestInfo;
}

function _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo)
{
    for (var algName in _RSASIGN_DIHEAD)
    {
        var head = _RSASIGN_DIHEAD[algName];
        var len = head.length;
        if (hDigestInfo.substring(0, len) == head)
        {
            var a = [algName, hDigestInfo.substring(len)];
            return a;
        }
    }
    return [];
}

function _rsasign_verifySignatureWithArgs(sMsg, biSig, hN, hE)
{
    var hDigestInfo = _rsasign_getHexDigestInfoFromSig(biSig, hN, hE);
    var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);
    if (digestInfoAry.length == 0) return false;
    var algName = digestInfoAry[0];
    var diHashValue = digestInfoAry[1];
    var ff = _RSASIGN_HASHHEXFUNC[algName];
    var msgHashValue = ff(sMsg);
    return (diHashValue == msgHashValue);
}

function _rsasign_verifyHexSignatureForMessage(hSig, sMsg)
{
    var biSig = parseBigInt(hSig, 16);
    var result = _rsasign_verifySignatureWithArgs(sMsg, biSig, this.n.toString(16), this.e.toString(16));
    return result;
}

function _rsasign_verifyString(sMsg, hSig)
{
    hSig = hSig.replace(/[ \n]+/g, "");
    var biSig = parseBigInt(hSig, 16);
    var biDecryptedSig = this.doPublic(biSig);
    var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, '');
    var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);

    if (digestInfoAry.length == 0) return false;
    var algName = digestInfoAry[0];
    var diHashValue = digestInfoAry[1];
    var ff = _RSASIGN_HASHHEXFUNC[algName];
    var msgHashValue = ff(sMsg);
    return (diHashValue == msgHashValue);
}

RSAKey.prototype.signString = _rsasign_signString;
RSAKey.prototype.signStringWithSHA1 = _rsasign_signStringWithSHA1;
RSAKey.prototype.signStringWithSHA256 = _rsasign_signStringWithSHA256;

RSAKey.prototype.verifyString = _rsasign_verifyString;
RSAKey.prototype.verifyHexSignatureForMessage = _rsasign_verifyHexSignatureForMessage;



























/*
 * jsaes version 0.1 - Copyright 2006 B. Poettering
 * 
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 */
 
 // later modifications by wwwtyro@github
 
var aes = (function () {

    var my = {};

    my.Sbox = new Array(99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22);

    my.ShiftRowTab = new Array(0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11);

    my.Init = function () {
        my.Sbox_Inv = new Array(256);
        for (var i = 0; i < 256; i++)
        my.Sbox_Inv[my.Sbox[i]] = i;

        my.ShiftRowTab_Inv = new Array(16);
        for (var i = 0; i < 16; i++)
        my.ShiftRowTab_Inv[my.ShiftRowTab[i]] = i;

        my.xtime = new Array(256);
        for (var i = 0; i < 128; i++) {
            my.xtime[i] = i << 1;
            my.xtime[128 + i] = (i << 1) ^ 0x1b;
        }
    }

    my.Done = function () {
        delete my.Sbox_Inv;
        delete my.ShiftRowTab_Inv;
        delete my.xtime;
    }

    my.ExpandKey = function (key) {
        var kl = key.length,
            ks, Rcon = 1;
        switch (kl) {
        case 16:
            ks = 16 * (10 + 1);
            break;
        case 24:
            ks = 16 * (12 + 1);
            break;
        case 32:
            ks = 16 * (14 + 1);
            break;
        default:
            alert("my.ExpandKey: Only key lengths of 16, 24 or 32 bytes allowed!");
        }
        for (var i = kl; i < ks; i += 4) {
            var temp = key.slice(i - 4, i);
            if (i % kl == 0) {
                temp = new Array(my.Sbox[temp[1]] ^ Rcon, my.Sbox[temp[2]], my.Sbox[temp[3]], my.Sbox[temp[0]]);
                if ((Rcon <<= 1) >= 256) Rcon ^= 0x11b;
            }
            else if ((kl > 24) && (i % kl == 16)) temp = new Array(my.Sbox[temp[0]], my.Sbox[temp[1]], my.Sbox[temp[2]], my.Sbox[temp[3]]);
            for (var j = 0; j < 4; j++)
            key[i + j] = key[i + j - kl] ^ temp[j];
        }
    }

    my.Encrypt = function (block, key) {
        var l = key.length;
        my.AddRoundKey(block, key.slice(0, 16));
        for (var i = 16; i < l - 16; i += 16) {
            my.SubBytes(block, my.Sbox);
            my.ShiftRows(block, my.ShiftRowTab);
            my.MixColumns(block);
            my.AddRoundKey(block, key.slice(i, i + 16));
        }
        my.SubBytes(block, my.Sbox);
        my.ShiftRows(block, my.ShiftRowTab);
        my.AddRoundKey(block, key.slice(i, l));
    }

    my.Decrypt = function (block, key) {
        var l = key.length;
        my.AddRoundKey(block, key.slice(l - 16, l));
        my.ShiftRows(block, my.ShiftRowTab_Inv);
        my.SubBytes(block, my.Sbox_Inv);
        for (var i = l - 32; i >= 16; i -= 16) {
            my.AddRoundKey(block, key.slice(i, i + 16));
            my.MixColumns_Inv(block);
            my.ShiftRows(block, my.ShiftRowTab_Inv);
            my.SubBytes(block, my.Sbox_Inv);
        }
        my.AddRoundKey(block, key.slice(0, 16));
    }

    my.SubBytes = function (state, sbox) {
        for (var i = 0; i < 16; i++)
        state[i] = sbox[state[i]];
    }

    my.AddRoundKey = function (state, rkey) {
        for (var i = 0; i < 16; i++)
        state[i] ^= rkey[i];
    }

    my.ShiftRows = function (state, shifttab) {
        var h = new Array().concat(state);
        for (var i = 0; i < 16; i++)
        state[i] = h[shifttab[i]];
    }

    my.MixColumns = function (state) {
        for (var i = 0; i < 16; i += 4) {
            var s0 = state[i + 0],
                s1 = state[i + 1];
            var s2 = state[i + 2],
                s3 = state[i + 3];
            var h = s0 ^ s1 ^ s2 ^ s3;
            state[i + 0] ^= h ^ my.xtime[s0 ^ s1];
            state[i + 1] ^= h ^ my.xtime[s1 ^ s2];
            state[i + 2] ^= h ^ my.xtime[s2 ^ s3];
            state[i + 3] ^= h ^ my.xtime[s3 ^ s0];
        }
    }

    my.MixColumns_Inv = function (state) {
        for (var i = 0; i < 16; i += 4) {
            var s0 = state[i + 0],
                s1 = state[i + 1];
            var s2 = state[i + 2],
                s3 = state[i + 3];
            var h = s0 ^ s1 ^ s2 ^ s3;
            var xh = my.xtime[h];
            var h1 = my.xtime[my.xtime[xh ^ s0 ^ s2]] ^ h;
            var h2 = my.xtime[my.xtime[xh ^ s1 ^ s3]] ^ h;
            state[i + 0] ^= h1 ^ my.xtime[s0 ^ s1];
            state[i + 1] ^= h2 ^ my.xtime[s1 ^ s2];
            state[i + 2] ^= h1 ^ my.xtime[s2 ^ s3];
            state[i + 3] ^= h2 ^ my.xtime[s3 ^ s0];
        }
    }

    return my;

}());

var cryptico = (function() {

    this.my = {};

    aes.Init();

    var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    my.b256to64 = function(t) {
        var a, c, n;
        var r = '', l = 0, s = 0;
        var tl = t.length;
        for (n = 0; n < tl; n++)
        {
            c = t.charCodeAt(n);
            if (s == 0)
            {
                r += base64Chars.charAt((c >> 2) & 63);
                a = (c & 3) << 4;
            }
            else if (s == 1)
            {
                r += base64Chars.charAt((a | (c >> 4) & 15));
                a = (c & 15) << 2;
            }
            else if (s == 2)
            {
                r += base64Chars.charAt(a | ((c >> 6) & 3));
                l += 1;
                r += base64Chars.charAt(c & 63);
            }
            l += 1;
            s += 1;
            if (s == 3) s = 0;
        }
        if (s > 0)
        {
            r += base64Chars.charAt(a);
            l += 1;
            r += '=';
            l += 1;
        }
        if (s == 1)
        {
            r += '=';
        }
        return r;
    }

    my.b64to256 = function(t) 
    {
        var c, n;
        var r = '', s = 0, a = 0;
        var tl = t.length;
        for (n = 0; n < tl; n++)
        {
            c = base64Chars.indexOf(t.charAt(n));
            if (c >= 0)
            {
                if (s) r += String.fromCharCode(a | (c >> (6 - s)) & 255);
                s = (s + 2) & 7;
                a = (c << s) & 255;
            }
        }
        return r;
    }    

    my.b16to64 = function(h) {
        var i;
        var c;
        var ret = "";
        if(h.length % 2 == 1)
        {
            h = "0" + h;
        }
        for (i = 0; i + 3 <= h.length; i += 3)
        {
            c = parseInt(h.substring(i, i + 3), 16);
            ret += base64Chars.charAt(c >> 6) + base64Chars.charAt(c & 63);
        }
        if (i + 1 == h.length)
        {
            c = parseInt(h.substring(i, i + 1), 16);
            ret += base64Chars.charAt(c << 2);
        }
        else if (i + 2 == h.length)
        {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += base64Chars.charAt(c >> 2) + base64Chars.charAt((c & 3) << 4);
        }
        while ((ret.length & 3) > 0) ret += "=";
        return ret;
    }

    my.b64to16 = function(s) {
        var ret = "";
        var i;
        var k = 0;
        var slop;
        for (i = 0; i < s.length; ++i)
        {
            if (s.charAt(i) == "=") break;
            v = base64Chars.indexOf(s.charAt(i));
            if (v < 0) continue;
            if (k == 0)
            {
                ret += int2char(v >> 2);
                slop = v & 3;
                k = 1;
            }
            else if (k == 1)
            {
                ret += int2char((slop << 2) | (v >> 4));
                slop = v & 0xf;
                k = 2;
            }
            else if (k == 2)
            {
                ret += int2char(slop);
                ret += int2char(v >> 2);
                slop = v & 3;
                k = 3;
            }
            else
            {
                ret += int2char((slop << 2) | (v >> 4));
                ret += int2char(v & 0xf);
                k = 0;
            }
        }
        if (k == 1) ret += int2char(slop << 2);
        return ret;
    }
    
    // Converts a string to a byte array.
    my.string2bytes = function(string)
    {
        var bytes = new Array();
        for(var i = 0; i < string.length; i++) 
        {
            bytes.push(string.charCodeAt(i));
        }
        return bytes;
    }

    // Converts a byte array to a string.
    my.bytes2string = function(bytes)
    {
        var string = "";
        for(var i = 0; i < bytes.length; i++)
        {
            string += String.fromCharCode(bytes[i]);
        }   
        return string;
    }
    
    // Returns a XOR b, where a and b are 16-byte byte arrays.
    my.blockXOR = function(a, b)
    {
        var xor = new Array(16);
        for(var i = 0; i < 16; i++)
        {
            xor[i] = a[i] ^ b[i];
        }
        return xor;
    }
    
    // Returns a 16-byte initialization vector.
    my.blockIV = function()
    {
        var r = new SecureRandom();
        var IV = new Array(16);
        r.nextBytes(IV);
        return IV;
    }
    
    // Returns a copy of bytes with zeros appended to the end
    // so that the (length of bytes) % 16 == 0.
    my.pad16 = function(bytes)
    {
        var newBytes = bytes.slice(0);
        var padding = (16 - (bytes.length % 16)) % 16;
        for(i = bytes.length; i < bytes.length + padding; i++)
        {
            newBytes.push(0);
        }
        return newBytes;
    }
    
    // Removes trailing zeros from a byte array.
    my.depad = function(bytes)
    {
        var newBytes = bytes.slice(0);
        while(newBytes[newBytes.length - 1] == 0)
        {
            newBytes = newBytes.slice(0, newBytes.length - 1);
        }
        return newBytes;
    }
    
    // AES CBC Encryption.
    my.encryptAESCBC = function(plaintext, key)
    {
        var exkey = key.slice(0);
        aes.ExpandKey(exkey);
        var blocks = my.string2bytes(plaintext);
        blocks = my.pad16(blocks);
        var encryptedBlocks = my.blockIV();
        for(var i = 0; i < blocks.length/16; i++)
        {
            var tempBlock = blocks.slice(i * 16, i * 16 + 16);
            var prevBlock = encryptedBlocks.slice((i) * 16, (i) * 16 + 16);
            tempBlock = my.blockXOR(prevBlock, tempBlock);
            aes.Encrypt(tempBlock, exkey);
            encryptedBlocks = encryptedBlocks.concat(tempBlock);
        }
        var ciphertext = my.bytes2string(encryptedBlocks);
        return my.b256to64(ciphertext)
    }

    // AES CBC Decryption.
    my.decryptAESCBC = function(encryptedText, key)
    {
        var exkey = key.slice(0);
        aes.ExpandKey(exkey);
        var encryptedText = my.b64to256(encryptedText);
        var encryptedBlocks = my.string2bytes(encryptedText);
        var decryptedBlocks = new Array();
        for(var i = 1; i < encryptedBlocks.length/16; i++)
        {
            var tempBlock = encryptedBlocks.slice(i * 16, i * 16 + 16);
            var prevBlock = encryptedBlocks.slice((i-1) * 16, (i-1) * 16 + 16);
            aes.Decrypt(tempBlock, exkey);
            tempBlock = my.blockXOR(prevBlock, tempBlock);
            decryptedBlocks = decryptedBlocks.concat(tempBlock);
        }
        decryptedBlocks = my.depad(decryptedBlocks);
        return my.bytes2string(decryptedBlocks);
    }
    
    // Wraps a string to 60 characters.
    my.wrap60 = function(string) 
    {
        var outstr = "";
        for(var i = 0; i < string.length; i++) {
            if(i % 60 == 0 && i != 0) outstr += "\n";
            outstr += string[i]; }
        return outstr; 
    }

    // Generate a random key for the AES-encrypted message.
    my.generateAESKey = function()
    {
        var key = new Array(32);
        var r = new SecureRandom();
        r.nextBytes(key);
        return key;
    }

    // Generates an RSA key from a passphrase.
    my.generateRSAKey = function(passphrase, bitlength)
    {
        Math.seedrandom(sha256.hex(passphrase));
        var rsa = new RSAKey();
        rsa.generate(bitlength, "03");
        return rsa;
    }

    // Returns the ascii-armored version of the public key.
    my.publicKeyString = function(rsakey) 
    {
        pubkey = my.b16to64(rsakey.n.toString(16));
        return pubkey; 
    }
    
    // Returns an MD5 sum of a publicKeyString for easier identification.
    my.publicKeyID = function(publicKeyString)
    {
        return MD5(publicKeyString);
    }
    
    my.publicKeyFromString = function(string)
    {
        var N = my.b64to16(string.split("|")[0]);
        var E = "03";
        var rsa = new RSAKey();
        rsa.setPublic(N, E);
        return rsa
    }
    
    my.encrypt = function(plaintext, publickeystring, signingkey)
    {
        var cipherblock = "";
        var aeskey = my.generateAESKey();
        try
        {
            var publickey = my.publicKeyFromString(publickeystring);
            cipherblock += my.b16to64(publickey.encrypt(my.bytes2string(aeskey))) + "?";
        }
        catch(err)
        {
            return {status: "Invalid public key"};
        }
        if(signingkey)
        {
            signString = cryptico.b16to64(signingkey.signString(plaintext, "sha256"));
            plaintext += "::52cee64bb3a38f6403386519a39ac91c::";
            plaintext += cryptico.publicKeyString(signingkey);
            plaintext += "::52cee64bb3a38f6403386519a39ac91c::";
            plaintext += signString;
        }
        cipherblock += my.encryptAESCBC(plaintext, aeskey);    
        return {status: "success", cipher: cipherblock};
    }

    my.decrypt = function(ciphertext, key)
    {
        var cipherblock = ciphertext.split("?");
        var aeskey = key.decrypt(my.b64to16(cipherblock[0]));
        if(aeskey == null)
        {
            return {status: "failure"};
        }
        aeskey = my.string2bytes(aeskey);
        var plaintext = my.decryptAESCBC(cipherblock[1], aeskey).split("::52cee64bb3a38f6403386519a39ac91c::");
        if(plaintext.length == 3)
        {
            var publickey = my.publicKeyFromString(plaintext[1]);
            var signature = my.b64to16(plaintext[2]);
            if(publickey.verifyString(plaintext[0], signature))
            {
                return {status: "success", 
                        plaintext: plaintext[0], 
                        signature: "verified", 
                        publicKeyString: my.publicKeyString(publickey)};
            }
            else
            {
                return {status: "success", 
                        plaintext: plaintext[0], 
                        signature: "forged", 
                        publicKeyString: my.publicKeyString(publickey)};
            }
        }
        else
        {
            return {status: "success", plaintext: plaintext[0], signature: "unsigned"};
        }
    }

    return my;

}());

var createWssocket = function(wsurl, onopen, handler) {
	console.log("[createWS.js] createWssocket : " + wsurl);
	var retsocket = {};
	retsocket.handlerList = [];
	if (handler != undefined)
		retsocket.handlerList.push(handler);
	var wssocket = new WebSocket(wsurl);
	wssocket.onerror = function(error) {
		console.log(error);
	};

	wssocket.onopen = onopen;
	var onmessage = function(event) {
		var obj = JSON.parse(event.data);
		switch (obj.action) {
		case 'sendNextSegment':
			retsocket.sendNextSegment();
			break;
		case 'sendSeg':
			retsocket.receiveSeg(obj);
			break;
		default:
			for (var i = 0; i < retsocket.handlerList.length; i++) {
				var h = retsocket.handlerList[i];
				h(event, wssocket);
			}
		}
	};

	var reconnect = function(error) {
		setTimeout(function() {
			console.log("[createWS.js] try to reconnect");
			wssocket = new WebSocket(wsurl);
			// wssocket.onclose = reconnect;
			wssocket.onmessage = onmessage;
			// wssocket.onopen = onopen;
		}, 1000);
	};
	wssocket.onclose = reconnect;

	retsocket.receiveSeg = function(obj) {
		if (obj.cid == 'start') {
			retsocket.toReceive = "";
		}
		retsocket.toReceive += obj.data;
		if (obj.cid == 'done') {
			console.log("[receiveSeg] Received AllData:" + retsocket.toReceive);
			var event = {};
			event.data = retsocket.toReceive;
			retsocket.toReceive = "";
			handler(event);
		}
	};
	wssocket.onmessage = onmessage;

	retsocket.isSending = false;
	retsocket.sendList = [];
	retsocket.monitor = function() {
		if (!retsocket.isSending) {
			if (retsocket.sendList.length > 0) {
				retsocket.send(retsocket.sendList.pop());
			}
		}
		setTimeout(retsocket.monitor, 1000);
	};
	// TODO: we don't need monitor at all?
	retsocket.monitor();
	retsocket.send = function(str) {
		if (retsocket.isSending) {
			retsocket.sendList.push(str);
			return;
		}
		if (str.length > 1024) {
			retsocket.isSending = true;
			retsocket.toSend = str.substr(1024);
			var obj = {};
			obj.isSegment = true;
			obj.data = str.substr(0, 1024);
			wssocket.send(JSON.stringify(obj));
		} else
			wssocket.send(str);
	};
	retsocket.sendNextSegment = function() {
		var str = retsocket.toSend;
		if (str.length > 1024) {
			retsocket.toSend = str.substr(1024);
			var obj = {};
			obj.isSegment = true;
			obj.data = str.substr(0, 1024);
			wssocket.send(JSON.stringify(obj));
		} else {
			retsocket.toSend = "";
			var obj = {};
			obj.isSegment = false;
			obj.data = str;
			wssocket.send(JSON.stringify(obj));
			retsocket.isSending = false;
			if (retsocket.sendList.length > 0) {
				retsocket.send(retsocket.sendList.pop());
			}
		}
	};
	retsocket.isOpen = function() {
		return wssocket.readyState;
	}
	retsocket.addHandler = function(handler) {
		retsocket.handlerList.push(handler);
	}
	return retsocket;
};

var aesDecrypt = function(data) {
	data = cryptico.b64to256(data);
	var encryptedBlocks = cryptico.string2bytes(data);
	var exkey = global.aesKey.slice(0);
	aes.ExpandKey(exkey);
	aes.Decrypt(encryptedBlocks, exkey);
	return cryptico.bytes2string(encryptedBlocks);

};
var aesEncrypt = function(data, aesKey) {
	var key = aesKey;
	var exkey = key.slice(0);
	aes.ExpandKey(exkey);
	var blocks = my.string2bytes(data);
	blocks = my.pad16(blocks);
	aes.Encrypt(blocks, exkey);
	ciphertext = cryptico.bytes2string(blocks);
	ciphertext = cryptico.b256to64(ciphertext);
	return ciphertext;
};
var rsaEncrypt = function(data, rsaKey) {
	var rsa = new RSAKey();
	rsa.setPublic(rsaKey.n, rsaKey.e1);
	var result = rsa.encrypt(data);
	return result;
};
var loadRSAKey = function(rsaKey) {
	var str = cryptico.b64to256(rsaKey);
	str = str.split(",");
	var ret = {};
	ret.n = str[0];
	ret.e1 = str[1];
	ret.e2 = str[2];
	return ret;
};
var testRSA = function() {
	pubKey = loadRSAKey(global.privKey);
	reqContent = {};
	reqContent.action = "main";
	reqContent.arg = "[{\"score\":20},{\"score\":20}]";
	reqContent.contractID = "abc";
	eReq = encryptReq(reqContent, pubKey);
	url = "http://localhost:8080/SCIDE/SCManager?action=executeContractEncrypted&contractRequest="
			+ encodeURIComponent(JSON.stringify(eReq));
};

var encryptReq = function(reqContent, pubKey) {
	// global.pubKey = loadRSAKey(global.privKey);
	var aes = {};
	aes.key = cryptico.generateAESKey();
	var aesObj = JSON.stringify(aes);
	var rsa = new RSAKey();
	rsa.setPrivate(pubKey.n, pubKey.e1, pubKey.e2);
	var encrypedReq = {};
	encrypedReq.action = rsa.decrypt(aesObj);
	encrypedReq.contractID = reqContent.contractID;
	reqContent.contractID = undefined;
	encrypedReq.arg = JSON.stringify(reqContent);
	encrypedReq.arg = aesEncrypt(encrypedReq.arg, aes.key);
	encrypedReq.requester = pubKey.n + "," + pubKey.e1 + "," + "0";
	encrypedReq.requester = cryptico.b256to64(encrypedReq.requester);
	return encrypedReq;
};

var onExecuteResultInternal = function(data) {
	console.log(data);
	global.executeResult = JSON.parse(data.data);
	var reqId = data.responseID;
	var callback = global.cbs[data.responseID];
	if (callback != undefined) {
		callback(global.executeResult, data);
	}
};
window.executeContract = function(contractID, method, strarg, cb) {
	var sm2Key = global.sm2Key;
	var request = {};
	request.action = "executeContract";
	request.requestID = new Date().getTime() + "_"
			+ Math.floor(Math.random() * 10000);

	global.cbs[request.requestID] = cb;
	request.contractID = contractID;
	request.operation=method;
	request.arg  = strarg;

	if (sm2Key != undefined) {
		request.pubkey = sm2Key.publicKey;
		request.signature = sm2.doSignature(request.contractID + "|"
				+ method + "|" + strarg + "|" + sm2Key.publicKey,
				sm2Key.privateKey);
	}

	global.wssocket.send(JSON.stringify(request));
};

window.executeCurrentContract = function(method, strarg, cb) {
	var contract = global.currentContract;
	executeContract(contract.id, method, strarg, cb);
};
window.loadBDWareWebSDK = function(url, onopen, handler) {
	if (window.global == undefined) {
		window.global = {};
	}
	if (global.sm2Key == undefined) {
		if (sm2 != undefined)
			global.sm2Key = sm2.generateKeyPairHex();
	}
	if (global.cbs == undefined) {
		global.cbs = {};
	}
	if (global.wssocket == undefined) {
		global.wssocket = createWssocket(url, onopen, function(event, wss) {
			var data = event.data;
			var obj = JSON.parse(data);
			switch (obj.action) {
			case 'onExecuteResult':
				onExecuteResultInternal(obj);
			default:
			}
			handler(event, global.wssocket);
		});
	} else {
		if (onopen != undefined)
			onopen();
		global.wssocket.addHandler(handler);
	}
};
// Usage:
// Approach 1:
// var url = "ws://" +
// document.location.host+(document.location.pathname.replace("scide.html",
// "SCExecutor"));
// global.wssocket = createWssocket(url, WSHandler);

// Approach 2:
// loadBDWareWebSDK(url,function(){},WSHandler);
// global.currentContract = {'id':'DataAnalysisSample'};
// executeContract("contractID","methodName","arg",function(data){
// });
// executeCurrentContract("methodName","arg",function(data){
// });
// the bdware client won't call this method
