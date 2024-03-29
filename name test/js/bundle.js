function text(){
	! function(t) {
		"use strict";

		function n(t, n = {}) {
			const e = JSON.parse(JSON.stringify(n));
			t.innerHTML = "<span>" + t.innerText + "</span>";
			const r = t.querySelector("span");
			r.style.color = "rgb(" + e.color.join(",") + ")", r.style.backgroundColor = "", r.style.fontSize = "inherit";
			let o = 0,
				u = !1;
			return {
				step: function(t) {
					if (o += t, u || o < e.delay) return;
					const n = o - e.delay;
					var i, c;
					u = n >= e.duration, r.style.backgroundColor = u ? "" : (i = e.color, c = 1 - n / e.duration, "rgba(" + i.join(",") + "," + c + ")")
				}
			}
		}
		t = t && t.hasOwnProperty("default") ? t.default : t;
		var e = function(t, n) {
			n = n || {}, t.normalize();
			var e = n.splitRegex,
				r = n.tagName || "span",
				o = null != n.classPrefix ? n.classPrefix : "char",
				u = 1;

			function i(t) {
				for (var n = t.parentNode, i = t.nodeValue, c = e ? i.split(e) : i, a = c.length, f = -1; ++f < a;) {
					var l = document.createElement(r);
					o && (l.className = o + u, u++), l.appendChild(document.createTextNode(c[f])), l.setAttribute("aria-hidden", "true"), n.insertBefore(l, t)
				}
				"" !== i.trim() && n.setAttribute("aria-label", i), n.removeChild(t)
			}! function t(n) {
				if (3 === n.nodeType) return i(n);
				var e = Array.prototype.slice.call(n.childNodes),
					r = e.length;
				if (1 === r && 3 === e[0].nodeType) return i(e[0]);
				for (var o = -1; ++o < r;) t(e[o])
			}(t)
		};
		"undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

		function r(t, n) {
			return t(n = {
				exports: {}
			}, n.exports), n.exports
		}
		var o = r(function(t) {
				! function(t, n, e) {
					function r(t) {
						var n, e = this,
							r = (n = 4022871197, function(t) {
								t = t.toString();
								for (var e = 0; e < t.length; e++) {
									var r = .02519603282416938 * (n += t.charCodeAt(e));
									r -= n = r >>> 0, n = (r *= n) >>> 0, n += 4294967296 * (r -= n)
								}
								return 2.3283064365386963e-10 * (n >>> 0)
							});
						e.next = function() {
							var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
							return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = 0 | t)
						}, e.c = 1, e.s0 = r(" "), e.s1 = r(" "), e.s2 = r(" "), e.s0 -= r(t), e.s0 < 0 && (e.s0 += 1), e.s1 -= r(t), e.s1 < 0 && (e.s1 += 1), e.s2 -= r(t), e.s2 < 0 && (e.s2 += 1), r = null
					}

					function o(t, n) {
						return n.c = t.c, n.s0 = t.s0, n.s1 = t.s1, n.s2 = t.s2, n
					}

					function u(t, n) {
						var e = new r(t),
							u = n && n.state,
							i = e.next;
						return i.int32 = function() {
							return 4294967296 * e.next() | 0
						}, i.double = function() {
							return i() + 1.1102230246251565e-16 * (2097152 * i() | 0)
						}, i.quick = i, u && ("object" == typeof u && o(u, e), i.state = function() {
							return o(e, {})
						}), i
					}
					n && n.exports ? n.exports = u : e && e.amd ? e(function() {
						return u
					}) : this.alea = u
				}(0, t, !1)
			}),
			u = r(function(t) {
				! function(t, n, e) {
					function r(t) {
						var n = this,
							e = "";
						n.x = 0, n.y = 0, n.z = 0, n.w = 0, n.next = function() {
							var t = n.x ^ n.x << 11;
							return n.x = n.y, n.y = n.z, n.z = n.w, n.w ^= n.w >>> 19 ^ t ^ t >>> 8
						}, t === (0 | t) ? n.x = t : e += t;
						for (var r = 0; r < e.length + 64; r++) n.x ^= 0 | e.charCodeAt(r), n.next()
					}

					function o(t, n) {
						return n.x = t.x, n.y = t.y, n.z = t.z, n.w = t.w, n
					}

					function u(t, n) {
						var e = new r(t),
							u = n && n.state,
							i = function() {
								return (e.next() >>> 0) / 4294967296
							};
						return i.double = function() {
							do {
								var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
							} while (0 === t);
							return t
						}, i.int32 = e.next, i.quick = i, u && ("object" == typeof u && o(u, e), i.state = function() {
							return o(e, {})
						}), i
					}
					n && n.exports ? n.exports = u : e && e.amd ? e(function() {
						return u
					}) : this.xor128 = u
				}(0, t, !1)
			}),
			i = r(function(t) {
				! function(t, n, e) {
					function r(t) {
						var n = this,
							e = "";
						n.next = function() {
							var t = n.x ^ n.x >>> 2;
							return n.x = n.y, n.y = n.z, n.z = n.w, n.w = n.v, (n.d = n.d + 362437 | 0) + (n.v = n.v ^ n.v << 4 ^ t ^ t << 1) | 0
						}, n.x = 0, n.y = 0, n.z = 0, n.w = 0, n.v = 0, t === (0 | t) ? n.x = t : e += t;
						for (var r = 0; r < e.length + 64; r++) n.x ^= 0 | e.charCodeAt(r), r == e.length && (n.d = n.x << 10 ^ n.x >>> 4), n.next()
					}

					function o(t, n) {
						return n.x = t.x, n.y = t.y, n.z = t.z, n.w = t.w, n.v = t.v, n.d = t.d, n
					}

					function u(t, n) {
						var e = new r(t),
							u = n && n.state,
							i = function() {
								return (e.next() >>> 0) / 4294967296
							};
						return i.double = function() {
							do {
								var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
							} while (0 === t);
							return t
						}, i.int32 = e.next, i.quick = i, u && ("object" == typeof u && o(u, e), i.state = function() {
							return o(e, {})
						}), i
					}
					n && n.exports ? n.exports = u : e && e.amd ? e(function() {
						return u
					}) : this.xorwow = u
				}(0, t, !1)
			}),
			c = r(function(t) {
				! function(t, n, e) {
					function r(t) {
						var n = this;
						n.next = function() {
								var t, e, r = n.x,
									o = n.i;
								return t = r[o], e = (t ^= t >>> 7) ^ t << 24, e ^= (t = r[o + 1 & 7]) ^ t >>> 10, e ^= (t = r[o + 3 & 7]) ^ t >>> 3, e ^= (t = r[o + 4 & 7]) ^ t << 7, t = r[o + 7 & 7], e ^= (t ^= t << 13) ^ t << 9, r[o] = e, n.i = o + 1 & 7, e
							},
							function(t, n) {
								var e, r = [];
								if (n === (0 | n)) r[0] = n;
								else
									for (n = "" + n, e = 0; e < n.length; ++e) r[7 & e] = r[7 & e] << 15 ^ n.charCodeAt(e) + r[e + 1 & 7] << 13;
								for (; r.length < 8;) r.push(0);
								for (e = 0; e < 8 && 0 === r[e]; ++e);
								for (8 == e ? r[7] = -1 : r[e], t.x = r, t.i = 0, e = 256; e > 0; --e) t.next()
							}(n, t)
					}

					function o(t, n) {
						return n.x = t.x.slice(), n.i = t.i, n
					}

					function u(t, n) {
						null == t && (t = +new Date);
						var e = new r(t),
							u = n && n.state,
							i = function() {
								return (e.next() >>> 0) / 4294967296
							};
						return i.double = function() {
							do {
								var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
							} while (0 === t);
							return t
						}, i.int32 = e.next, i.quick = i, u && (u.x && o(u, e), i.state = function() {
							return o(e, {})
						}), i
					}
					n && n.exports ? n.exports = u : e && e.amd ? e(function() {
						return u
					}) : this.xorshift7 = u
				}(0, t, !1)
			}),
			a = r(function(t) {
				! function(t, n, e) {
					function r(t) {
						var n = this;
						n.next = function() {
								var t, e, r = n.w,
									o = n.X,
									u = n.i;
								return n.w = r = r + 1640531527 | 0, e = o[u + 34 & 127], t = o[u = u + 1 & 127], e ^= e << 13, t ^= t << 17, e ^= e >>> 15, t ^= t >>> 12, e = o[u] = e ^ t, n.i = u, e + (r ^ r >>> 16) | 0
							},
							function(t, n) {
								var e, r, o, u, i, c = [],
									a = 128;
								for (n === (0 | n) ? (r = n, n = null) : (n += "\0", r = 0, a = Math.max(a, n.length)), o = 0, u = -32; u < a; ++u) n && (r ^= n.charCodeAt((u + 32) % n.length)), 0 === u && (i = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, u >= 0 && (i = i + 1640531527 | 0, o = 0 == (e = c[127 & u] ^= r + i) ? o + 1 : 0);
								for (o >= 128 && (c[127 & (n && n.length || 0)] = -1), o = 127, u = 512; u > 0; --u) r = c[o + 34 & 127], e = c[o = o + 1 & 127], r ^= r << 13, e ^= e << 17, r ^= r >>> 15, e ^= e >>> 12, c[o] = r ^ e;
								t.w = i, t.X = c, t.i = o
							}(n, t)
					}

					function o(t, n) {
						return n.i = t.i, n.w = t.w, n.X = t.X.slice(), n
					}

					function u(t, n) {
						null == t && (t = +new Date);
						var e = new r(t),
							u = n && n.state,
							i = function() {
								return (e.next() >>> 0) / 4294967296
							};
						return i.double = function() {
							do {
								var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
							} while (0 === t);
							return t
						}, i.int32 = e.next, i.quick = i, u && (u.X && o(u, e), i.state = function() {
							return o(e, {})
						}), i
					}
					n && n.exports ? n.exports = u : e && e.amd ? e(function() {
						return u
					}) : this.xor4096 = u
				}(0, t, !1)
			}),
			f = r(function(t) {
				! function(t, n, e) {
					function r(t) {
						var n = this,
							e = "";
						n.next = function() {
							var t = n.b,
								e = n.c,
								r = n.d,
								o = n.a;
							return t = t << 25 ^ t >>> 7 ^ e, e = e - r | 0, r = r << 24 ^ r >>> 8 ^ o, o = o - t | 0, n.b = t = t << 20 ^ t >>> 12 ^ e, n.c = e = e - r | 0, n.d = r << 16 ^ e >>> 16 ^ o, n.a = o - t | 0
						}, n.a = 0, n.b = 0, n.c = -1640531527, n.d = 1367130551, t === Math.floor(t) ? (n.a = t / 4294967296 | 0, n.b = 0 | t) : e += t;
						for (var r = 0; r < e.length + 20; r++) n.b ^= 0 | e.charCodeAt(r), n.next()
					}

					function o(t, n) {
						return n.a = t.a, n.b = t.b, n.c = t.c, n.d = t.d, n
					}

					function u(t, n) {
						var e = new r(t),
							u = n && n.state,
							i = function() {
								return (e.next() >>> 0) / 4294967296
							};
						return i.double = function() {
							do {
								var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
							} while (0 === t);
							return t
						}, i.int32 = e.next, i.quick = i, u && ("object" == typeof u && o(u, e), i.state = function() {
							return o(e, {})
						}), i
					}
					n && n.exports ? n.exports = u : e && e.amd ? e(function() {
						return u
					}) : this.tychei = u
				}(0, t, !1)
			}),
			l = r(function(n) {
				! function(e, r) {
					var o, u = (0, eval)("this"),
						i = 256,
						c = 6,
						a = "random",
						f = r.pow(i, c),
						l = r.pow(2, 52),
						s = 2 * l,
						d = i - 1;

					function x(t, n, d) {
						var x = [],
							v = y(function t(n, e) {
								var r, o = [],
									u = typeof n;
								if (e && "object" == u)
									for (r in n) try {
										o.push(t(n[r], e - 1))
									} catch (t) {}
								return o.length ? o : "string" == u ? n : n + "\0"
							}((n = 1 == n ? {
								entropy: !0
							} : n || {}).entropy ? [t, g(e)] : null == t ? function() {
								try {
									var t;
									return o && (t = o.randomBytes) ? t = t(i) : (t = new Uint8Array(i), (u.crypto || u.msCrypto).getRandomValues(t)), g(t)
								} catch (t) {
									var n = u.navigator,
										r = n && n.plugins;
									return [+new Date, u, r, u.screen, g(e)]
								}
							}() : t, 3), x),
							w = new h(x),
							b = function() {
								for (var t = w.g(c), n = f, e = 0; t < l;) t = (t + e) * i, n *= i, e = w.g(1);
								for (; t >= s;) t /= 2, n /= 2, e >>>= 1;
								return (t + e) / n
							};
						return b.int32 = function() {
							return 0 | w.g(4)
						}, b.quick = function() {
							return w.g(4) / 4294967296
						}, b.double = b, y(g(w.S), e), (n.pass || d || function(t, n, e, o) {
							return o && (o.S && p(o, w), t.state = function() {
								return p(w, {})
							}), e ? (r[a] = t, n) : t
						})(b, v, "global" in n ? n.global : this == r, n.state)
					}

					function h(t) {
						var n, e = t.length,
							r = this,
							o = 0,
							u = r.i = r.j = 0,
							c = r.S = [];
						for (e || (t = [e++]); o < i;) c[o] = o++;
						for (o = 0; o < i; o++) c[o] = c[u = d & u + t[o % e] + (n = c[o])], c[u] = n;
						(r.g = function(t) {
							for (var n, e = 0, o = r.i, u = r.j, c = r.S; t--;) n = c[o = d & o + 1], e = e * i + c[d & (c[o] = c[u = d & u + n]) + (c[u] = n)];
							return r.i = o, r.j = u, e
						})(i)
					}

					function p(t, n) {
						return n.i = t.i, n.j = t.j, n.S = t.S.slice(), n
					}

					function y(t, n) {
						for (var e, r = t + "", o = 0; o < r.length;) n[d & o] = d & (e ^= 19 * n[d & o]) + r.charCodeAt(o++);
						return g(n)
					}

					function g(t) {
						return String.fromCharCode.apply(0, t)
					}
					if (r["seed" + a] = x, y(r.random(), e), n.exports) {
						n.exports = x;
						try {
							o = t
						} catch (t) {}
					}
				}([], Math)
			});
		l.alea = o, l.xor128 = u, l.xorwow = i, l.xorshift7 = c, l.xor4096 = a, l.tychei = f;
		var s = l;

		function d(t, n = {}) {
			const r = JSON.parse(JSON.stringify(n));
			let o, u = 0,
				i = 0;
			const c = r.delay ? r.delay : 0,
				a = s(r.randSeed);
			let f = a() > .5 ? 1 : 2;
			const l = function(t) {
					t >= o.length || (" " !== o[t].innerText ? (o[t].style.color = r.etchFGColor, o[t].style.backgroundColor = r.etchBGColor) : o[t].style.backgroundColor = "")
				},
				d = function(t) {
					t >= o.length || (o[t].style.color = "", o[t].style.backgroundColor = r.targetBGColor)
				},
				x = function(n) {
					e(t), u = 0, o = t.querySelectorAll("span");
					const r = window.getComputedStyle(document.body, null).getPropertyValue("background-color");
					for (let t = 0; t < o.length; t++) o[t].style.color = r
				};
			return x(t.innerText), {
				setText: function(t) {
					x(t), i = c
				},
				step: function(t) {
					if ((i += t) < c) return;
					let n = i - c;
					for (; n >= r.etchSpeed;) {
						if (d(u), f > 1 && d(u + 1), (u += f) >= o.length) return;
						f = a() > .5 ? 1 : 2, l(u), f > 1 && l(u + 1), n -= r.etchSpeed, i -= r.etchSpeed
					}
				}
			}
		}
		const x = function() {
				const t = [];
				let n = Date.now();
				const e = function() {
					const r = Date.now(),
						o = r - n;
					n = r;
					for (let n = 0; n < t.length; n++) t[n].step(o);
					requestAnimationFrame(e)
				};
				return {
					add: function(n) {
						t.push(n)
					},
					remove: function(n) {
						for (let e = 0; e < t.length; e++)
							if (t[e] === n) return t.splice(e, 1)
					},
					start: function() {
						requestAnimationFrame(e)
					}
				}
			}(),
			h = Math.random(),
			p = {
				color: [0, 0, 0],
				duration: 300,
				delay: 200,
				seed: h
			},
			y = document.querySelectorAll("h1,h2");
		for (let t = 0; t < y.length; t++) p.delay = 120 + Math.floor(50 * Math.random()), p.duration = 250 + Math.floor(100 * Math.random()), x.add(n(y[t], p));
		const g = {
				etchSpeed: 10 + Math.round(4 * Math.random()),
				targetBGColor: "rgb(255,255,255)",
				targetFGColor: "rgb(40, 40, 40)",
				etchBGColor: "rgb(62, 62, 62)",
				etchFGColor: "rgb(255,20,147)",
				seed: h
			},
			v = document.querySelectorAll("li,p");
		for (let t = 0; t < v.length; t++) x.add(d(v[t], g));
		x.start()
	}(crypto);
}	