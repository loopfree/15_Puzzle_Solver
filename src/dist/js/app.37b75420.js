(function () {
  "use strict";
  var a = {
      3844: function (a, e, t) {
        var r = t(9242),
          o = t(3396),
          n = t(7139);
        const s = (0, o._)(
            "section",
            { class: "title" },
            [
              (0, o._)("h1", null, "15-Puzzle"),
              (0, o._)("h2", null, "Steven - 13520131"),
            ],
            -1
          ),
          l = { class: "horizontal", style: { "justify-content": "center" } },
          d = { class: "vertical", style: { "align-items": "center" } },
          u = { key: 0, class: "error-color" },
          i = { class: "horizontal inner-div" },
          c = { key: 0, class: "horizontal" },
          p = { class: "vertical result-div" },
          _ = (0, o.Uk)(" Kurang: "),
          b = { class: "horizontal" },
          h = { class: "box" },
          f = { class: "box" },
          v = (0, o.Uk)("Σ "),
          g = (0, o._)("sub", null, "i=0", -1),
          m = (0, o.Uk)(),
          y = (0, o._)("sup", null, "16", -1),
          w = { class: "vertical result-div" },
          k = (0, o.Uk)(" Board: ");
        function x(a, e, t, r, x, q) {
          const U = (0, o.up)("GameBoard");
          return (
            (0, o.wg)(),
            (0, o.iD)(
              o.HY,
              null,
              [
                s,
                (0, o._)("div", l, [
                  (0, o._)("div", d, [
                    x.error
                      ? ((0, o.wg)(),
                        (0, o.iD)("div", u, (0, n.zw)(x.errorMessage), 1))
                      : (0, o.kq)("", !0),
                    (0, o._)("div", i, [
                      (0, o.Wm)(U, { ref: "gameBoard" }, null, 512),
                      (0, o._)(
                        "button",
                        {
                          class: "calculate",
                          onClick:
                            e[0] ||
                            (e[0] = (...a) =>
                              q.calculateBnb && q.calculateBnb(...a)),
                        },
                        "Calculate BnB"
                      ),
                    ]),
                    (0, o._)(
                      "button",
                      {
                        onClick:
                          e[1] ||
                          (e[1] = (...a) => q.randomize && q.randomize(...a)),
                        class: "randomize",
                      },
                      "Randomize Squares"
                    ),
                    (0, o._)(
                      "button",
                      {
                        onClick:
                          e[2] ||
                          (e[2] = (...a) => q.clearBoard && q.clearBoard(...a)),
                      },
                      "Clear Board"
                    ),
                    (0, o._)(
                      "button",
                      {
                        onClick:
                          e[3] ||
                          (e[3] = (...a) => q.stopApp && q.stopApp(...a)),
                      },
                      " Quit App "
                    ),
                  ]),
                  x.hasResult
                    ? ((0, o.wg)(),
                      (0, o.iD)("div", c, [
                        (0, o._)("div", p, [
                          _,
                          ((0, o.wg)(!0),
                          (0, o.iD)(
                            o.HY,
                            null,
                            (0, o.Ko)(
                              x.kurang,
                              (a) => (
                                (0, o.wg)(),
                                (0, o.iD)("div", { key: a[0] }, [
                                  (0, o._)("div", b, [
                                    (0, o._)("div", h, (0, n.zw)(a[0]), 1),
                                    (0, o._)("div", f, (0, n.zw)(a[1]), 1),
                                  ]),
                                ])
                              )
                            ),
                            128
                          )),
                          (0, o._)("div", null, [
                            (0, o._)("p", null, [
                              v,
                              g,
                              m,
                              y,
                              (0, o.Uk)(
                                " KURANG(i) + X = " + (0, n.zw)(x.kurangX),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                        (0, o._)("div", w, [
                          k,
                          ((0, o.wg)(!0),
                          (0, o.iD)(
                            o.HY,
                            null,
                            (0, o.Ko)(
                              x.boards,
                              (a) => (
                                (0, o.wg)(),
                                (0, o.iD)("div", { key: a.board_id }, [
                                  (0, o.Wm)(
                                    U,
                                    {
                                      class: "gameboard-margin",
                                      square_values: a.board,
                                    },
                                    null,
                                    8,
                                    ["square_values"]
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : (0, o.kq)("", !0),
                ]),
              ],
              64
            )
          );
        }
        const q = { class: "vertical" },
          U = { class: "horizontal" },
          z = { class: "horizontal" },
          V = { class: "horizontal" },
          B = { class: "horizontal" };
        function O(a, e, t, n, s, l) {
          return (
            (0, o.wg)(),
            (0, o.iD)("div", q, [
              (0, o._)("div", U, [
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[0] || (e[0] = (a) => (s.board_data[0] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[0]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[1] || (e[1] = (a) => (s.board_data[1] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[1]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[2] || (e[2] = (a) => (s.board_data[2] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[2]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[3] || (e[3] = (a) => (s.board_data[3] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[3]]]
                ),
              ]),
              (0, o._)("div", z, [
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[4] || (e[4] = (a) => (s.board_data[4] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[4]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[5] || (e[5] = (a) => (s.board_data[5] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[5]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[6] || (e[6] = (a) => (s.board_data[6] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[6]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[7] || (e[7] = (a) => (s.board_data[7] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[7]]]
                ),
              ]),
              (0, o._)("div", V, [
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[8] || (e[8] = (a) => (s.board_data[8] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[8]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[9] || (e[9] = (a) => (s.board_data[9] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[9]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[10] || (e[10] = (a) => (s.board_data[10] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[10]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[11] || (e[11] = (a) => (s.board_data[11] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[11]]]
                ),
              ]),
              (0, o._)("div", B, [
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[12] || (e[12] = (a) => (s.board_data[12] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[12]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[13] || (e[13] = (a) => (s.board_data[13] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[13]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[14] || (e[14] = (a) => (s.board_data[14] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[14]]]
                ),
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      type: "text",
                      class: "board-square",
                      "onUpdate:modelValue":
                        e[15] || (e[15] = (a) => (s.board_data[15] = a)),
                    },
                    null,
                    512
                  ),
                  [[r.nr, s.board_data[15]]]
                ),
              ]),
            ])
          );
        }
        var M = {
            props: { square_values: Array },
            data() {
              return { board_data: this.square_values || [] };
            },
            mounted() {
              for (let a = this.board_data.length; a < 16; ++a)
                this.board_data.push("");
            },
            methods: {
              randomizeValues() {
                let a = [];
                for (let e = 1; e < 16; ++e) a.push(`${e}`);
                a.push("");
                for (let e = a.length - 1; e > 0; --e) {
                  const t = Math.floor(Math.random() * (e + 1));
                  [a[e], a[t]] = [a[t], a[e]];
                }
                this.board_data = a;
              },
              resetValues() {
                this.board_data = [];
                for (let a = this.board_data.length; a < 16; ++a)
                  this.board_data.push("");
              },
            },
          },
          C = t(89);
        const D = (0, C.Z)(M, [["render", O]]);
        var j = D,
          R = {
            name: "App",
            components: { GameBoard: j },
            data() {
              return {
                error: !1,
                errorMessage: "",
                hasResult: !1,
                kurang: [],
                boards: [],
                kurangX: 0,
              };
            },
            mounted() {
              const a = () => {
                (this.hasResult = !0), (this.boards = []);
              };
              eel.expose(a, "reset_board");
              const e = (a) => {
                for (let e = 0; e < a.board.length; ++e)
                  -1 == a.board[e] && (a.board[e] = "");
                this.boards.push(a);
              };
              eel.expose(e, "add_board");
              const t = (a) => {
                this.kurangX = a;
              };
              eel.expose(t, "set_kurang_x");
              const r = (a) => {
                this.kurang = a;
              };
              eel.expose(r, "set_kurang");
              const o = (a) => {
                (this.error = !0),
                  (this.errorMessage = a),
                  (this.hasResult = !1);
              };
              eel.expose(o, "set_error");
            },
            methods: {
              randomize() {
                this.$refs.gameBoard.randomizeValues();
              },
              stopApp() {
                eel.stop_program(), window.close();
              },
              clearBoard() {
                (this.hasResult = !1), this.$refs.gameBoard.resetValues();
              },
              calculateBnb() {
                let a = this.$refs.gameBoard.board_data,
                  e = [],
                  t = new Set();
                for (let r = 0; r < a.length; ++r) {
                  if (!1 !== t.has(a[r]))
                    return (
                      (this.error = !0),
                      void (this.errorMessage =
                        "The board contains duplicate value")
                    );
                  if ((t.add(a[r]), "" == a[r])) {
                    e.push(-1);
                    continue;
                  }
                  a[r].indexOf(".") > -1 &&
                    ((this.error = !0),
                    (this.errorMessage =
                      "The board contains non integer value"));
                  let o = parseInt(a[r]);
                  if (isNaN(o))
                    return (
                      (this.error = !0),
                      void (this.errorMessage =
                        "The board contains non integer value")
                    );
                  if (o < 1 || o > 15)
                    return (
                      (this.error = !0),
                      void (this.errorMessage = "There's a number out of range")
                    );
                  e.push(o);
                }
                (this.error = !1), eel.calculate_bnb(e);
              },
            },
          };
        const A = (0, C.Z)(R, [["render", x]]);
        var T = A;
        (0, r.ri)(T).mount("#app");
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var n = (e[r] = { exports: {} });
    return a[r](n, n.exports, t), n.exports;
  }
  (t.m = a),
    (function () {
      var a = [];
      t.O = function (e, r, o, n) {
        if (!r) {
          var s = 1 / 0;
          for (i = 0; i < a.length; i++) {
            (r = a[i][0]), (o = a[i][1]), (n = a[i][2]);
            for (var l = !0, d = 0; d < r.length; d++)
              (!1 & n || s >= n) &&
              Object.keys(t.O).every(function (a) {
                return t.O[a](r[d]);
              })
                ? r.splice(d--, 1)
                : ((l = !1), n < s && (s = n));
            if (l) {
              a.splice(i--, 1);
              var u = o();
              void 0 !== u && (e = u);
            }
          }
          return e;
        }
        n = n || 0;
        for (var i = a.length; i > 0 && a[i - 1][2] > n; i--) a[i] = a[i - 1];
        a[i] = [r, o, n];
      };
    })(),
    (function () {
      t.n = function (a) {
        var e =
          a && a.__esModule
            ? function () {
                return a["default"];
              }
            : function () {
                return a;
              };
        return t.d(e, { a: e }), e;
      };
    })(),
    (function () {
      t.d = function (a, e) {
        for (var r in e)
          t.o(e, r) &&
            !t.o(a, r) &&
            Object.defineProperty(a, r, { enumerable: !0, get: e[r] });
      };
    })(),
    (function () {
      t.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (a) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      t.o = function (a, e) {
        return Object.prototype.hasOwnProperty.call(a, e);
      };
    })(),
    (function () {
      var a = { 143: 0 };
      t.O.j = function (e) {
        return 0 === a[e];
      };
      var e = function (e, r) {
          var o,
            n,
            s = r[0],
            l = r[1],
            d = r[2],
            u = 0;
          if (
            s.some(function (e) {
              return 0 !== a[e];
            })
          ) {
            for (o in l) t.o(l, o) && (t.m[o] = l[o]);
            if (d) var i = d(t);
          }
          for (e && e(r); u < s.length; u++)
            (n = s[u]), t.o(a, n) && a[n] && a[n][0](), (a[n] = 0);
          return t.O(i);
        },
        r = (self["webpackChunktugas_kecil_3_2022"] =
          self["webpackChunktugas_kecil_3_2022"] || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  var r = t.O(void 0, [998], function () {
    return t(3844);
  });
  r = t.O(r);
})();
//# sourceMappingURL=app.37b75420.js.map
