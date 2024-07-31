!function(t) {
  "function" == typeof define && define.amd ? define(t) : t()
}((function() {
  "use strict";
  function t(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++)
          n[r] = t[r];
      return n
  }
  function e(e, r) {
      return function(t) {
          if (Array.isArray(t))
              return t
      }(e) || function(t, e) {
          var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null != r) {
              var n, a, o, l, i = [], c = !0, u = !1;
              try {
                  if (o = (r = r.call(t)).next,
                  0 === e) {
                      if (Object(r) !== r)
                          return;
                      c = !1
                  } else
                      for (; !(c = (n = o.call(r)).done) && (i.push(n.value),
                      i.length !== e); c = !0)
                          ;
              } catch (t) {
                  u = !0,
                  a = t
              } finally {
                  try {
                      if (!c && null != r.return && (l = r.return(),
                      Object(l) !== l))
                          return
                  } finally {
                      if (u)
                          throw a
                  }
              }
              return i
          }
      }(e, r) || function(e, r) {
          if (e) {
              if ("string" == typeof e)
                  return t(e, r);
              var n = {}.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, r) : void 0
          }
      }(e, r) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }
  for (var r = {
      "menu-position": {
          localStorage: "tablerMenuPosition",
          default: "top"
      },
      "menu-behavior": {
          localStorage: "tablerMenuBehavior",
          default: "sticky"
      },
      "container-layout": {
          localStorage: "tablerContainerLayout",
          default: "boxed"
      }
  }, n = {}, a = 0, o = Object.entries(r); a < o.length; a++) {
      var l = e(o[a], 2)
        , i = l[0]
        , c = l[1]
        , u = localStorage.getItem(c.localStorage);
      n[i] = u || c.default
  }
  !function() {
      for (var t = window.location.search.substring(1).split("&"), e = 0; e < t.length; e++) {
          var a = t[e].split("=")
            , o = a[0]
            , l = a[1];
          r[o] && (localStorage.setItem(r[o].localStorage, l),
          n[o] = l)
      }
  }();
  var f = document.querySelector("#offcanvasSettings");
  f && (f.addEventListener("submit", (function(t) {
      t.preventDefault(),
      function(t) {
          for (var a = 0, o = Object.entries(r); a < o.length; a++) {
              var l = e(o[a], 2)
                , i = l[0]
                , c = l[1]
                , u = t.querySelector('[name="settings-'.concat(i, '"]:checked')).value;
              localStorage.setItem(c.localStorage, u),
              n[i] = u
          }
          window.dispatchEvent(new Event("resize")),
          new bootstrap.Offcanvas(t).hide()
      }(f)
  }
  )),
  function(t) {
      for (var a = 0, o = Object.entries(r); a < o.length; a++) {
          var l = e(o[a], 2)
            , i = l[0];
          l[1];
          var c = t.querySelector('[name="settings-'.concat(i, '"][value="').concat(n[i], '"]'));
          c && (c.checked = !0)
      }
  }(f))
}
));