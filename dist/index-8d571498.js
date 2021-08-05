var r$1 = {};
var e = Object.getOwnPropertySymbols;
var t$1 = Object.prototype.hasOwnProperty;
var n$1 = Object.prototype.propertyIsEnumerable;

function toObject(r) {
  if (null === r || void 0 === r) throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(r);
}

function shouldUseNative() {
  try {
    if (!Object.assign) return false;
    var r = new String("abc");
    r[5] = "de";
    if ("5" === Object.getOwnPropertyNames(r)[0]) return false;
    var e = {};

    for (var t = 0; t < 10; t++) e["_" + String.fromCharCode(t)] = t;

    var n = Object.getOwnPropertyNames(e).map(function (r) {
      return e[r];
    });
    if ("0123456789" !== n.join("")) return false;
    var a = {};
    "abcdefghijklmnopqrst".split("").forEach(function (r) {
      a[r] = r;
    });
    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("");
  } catch (r) {
    return false;
  }
}

r$1 = shouldUseNative() ? Object.assign : function (r, a) {
  var o;
  var c = toObject(r);
  var i;

  for (var s = 1; s < arguments.length; s++) {
    o = Object(arguments[s]);

    for (var f in o) t$1.call(o, f) && (c[f] = o[f]);

    if (e) {
      i = e(o);

      for (var l = 0; l < i.length; l++) n$1.call(o, i[l]) && (c[i[l]] = o[i[l]]);
    }
  }

  return c;
};
var a$1 = r$1;

var t = {};
var r = a$1,
    n = 60103,
    o = 60106;
t.Fragment = 60107;
t.StrictMode = 60108;
t.Profiler = 60114;
var u = 60109,
    a = 60110,
    i = 60112;
t.Suspense = 60113;
var f = 60115,
    c = 60116;

if ("function" === typeof Symbol && Symbol.for) {
  var l = Symbol.for;
  n = l("react.element");
  o = l("react.portal");
  t.Fragment = l("react.fragment");
  t.StrictMode = l("react.strict_mode");
  t.Profiler = l("react.profiler");
  u = l("react.provider");
  a = l("react.context");
  i = l("react.forward_ref");
  t.Suspense = l("react.suspense");
  f = l("react.memo");
  c = l("react.lazy");
}

var s = "function" === typeof Symbol && Symbol.iterator;

function y(e) {
  if (null === e || "object" !== typeof e) return null;
  e = s && e[s] || e["@@iterator"];
  return "function" === typeof e ? e : null;
}

function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);

  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var p = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    d = {};

function C(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = d;
  this.updater = r || p;
}

C.prototype.isReactComponent = {};

C.prototype.setState = function (e, t) {
  if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(z(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};

C.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};

function D() {}

D.prototype = C.prototype;

function E(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = d;
  this.updater = r || p;
}

var _ = E.prototype = new D();

_.constructor = E;
r(_, C.prototype);
_.isPureReactComponent = !0;
var v = {
  current: null
},
    m = Object.prototype.hasOwnProperty,
    h = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function J(e, t, r) {
  var o,
      u = {},
      a = null,
      i = null;
  if (null != t) for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = "" + t.key), t) m.call(t, o) && !h.hasOwnProperty(o) && (u[o] = t[o]);
  var f = arguments.length - 2;
  if (1 === f) u.children = r;else if (1 < f) {
    for (var c = Array(f), l = 0; l < f; l++) c[l] = arguments[l + 2];

    u.children = c;
  }
  if (e && e.defaultProps) for (o in f = e.defaultProps, f) void 0 === u[o] && (u[o] = f[o]);
  return {
    $$typeof: n,
    type: e,
    key: a,
    ref: i,
    props: u,
    _owner: v.current
  };
}

function K(e, t) {
  return {
    $$typeof: n,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}

function L(e) {
  return "object" === typeof e && null !== e && e.$$typeof === n;
}

function escape(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (e) {
    return t[e];
  });
}

var R = /\/+/g;

function N(e, t) {
  return "object" === typeof e && null !== e && null != e.key ? escape("" + e.key) : t.toString(36);
}

function O(e, t, r, u, a) {
  var i = typeof e;
  "undefined" !== i && "boolean" !== i || (e = null);
  var f = !1;
  if (null === e) f = !0;else switch (i) {
    case "string":
    case "number":
      f = !0;
      break;

    case "object":
      switch (e.$$typeof) {
        case n:
        case o:
          f = !0;
      }

  }
  if (f) return f = e, a = a(f), e = "" === u ? "." + N(f, 0) : u, Array.isArray(a) ? (r = "", null != e && (r = e.replace(R, "$&/") + "/"), O(a, t, r, "", function (e) {
    return e;
  })) : null != a && (L(a) && (a = K(a, r + (!a.key || f && f.key === a.key ? "" : ("" + a.key).replace(R, "$&/") + "/") + e)), t.push(a)), 1;
  f = 0;
  u = "" === u ? "." : u + ":";
  if (Array.isArray(e)) for (var c = 0; c < e.length; c++) {
    i = e[c];
    var l = u + N(i, c);
    f += O(i, t, r, l, a);
  } else if (l = y(e), "function" === typeof l) for (e = l.call(e), c = 0; !(i = e.next()).done;) i = i.value, l = u + N(i, c++), f += O(i, t, r, l, a);else if ("object" === i) throw t = "" + e, Error(z(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return f;
}

function P(e, t, r) {
  if (null == e) return e;
  var n = [],
      o = 0;
  O(e, n, "", "", function (e) {
    return t.call(r, e, o++);
  });
  return n;
}

function Q(e) {
  if (-1 === e._status) {
    var t = e._result;
    t = t();
    e._status = 0;
    e._result = t;
    t.then(function (t) {
      0 === e._status && (t = t.default, e._status = 1, e._result = t);
    }, function (t) {
      0 === e._status && (e._status = 2, e._result = t);
    });
  }

  if (1 === e._status) return e._result;
  throw e._result;
}

var b = {
  current: null
};

function S() {
  var e = b.current;
  if (null === e) throw Error(z(321));
  return e;
}

var g = {
  ReactCurrentDispatcher: b,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: v,
  IsSomeRendererActing: {
    current: !1
  },
  assign: r
};
t.Children = {
  map: P,
  forEach: function (e, t, r) {
    P(e, function () {
      t.apply(this, arguments);
    }, r);
  },
  count: function (e) {
    var t = 0;
    P(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return P(e, function (e) {
      return e;
    }) || [];
  },
  only: function (e) {
    if (!L(e)) throw Error(z(143));
    return e;
  }
};
t.Component = C;
t.PureComponent = E;
t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g;

t.cloneElement = function (e, t, o) {
  if (null === e || void 0 === e) throw Error(z(267, e));
  var u = r({}, e.props),
      a = e.key,
      i = e.ref,
      f = e._owner;

  if (null != t) {
    void 0 !== t.ref && (i = t.ref, f = v.current);
    void 0 !== t.key && (a = "" + t.key);
    if (e.type && e.type.defaultProps) var c = e.type.defaultProps;

    for (l in t) m.call(t, l) && !h.hasOwnProperty(l) && (u[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l]);
  }

  var l = arguments.length - 2;
  if (1 === l) u.children = o;else if (1 < l) {
    c = Array(l);

    for (var s = 0; s < l; s++) c[s] = arguments[s + 2];

    u.children = c;
  }
  return {
    $$typeof: n,
    type: e.type,
    key: a,
    ref: i,
    props: u,
    _owner: f
  };
};

t.createContext = function (e, t) {
  void 0 === t && (t = null);
  e = {
    $$typeof: a,
    _calculateChangedBits: t,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  e.Provider = {
    $$typeof: u,
    _context: e
  };
  return e.Consumer = e;
};

t.createElement = J;

t.createFactory = function (e) {
  var t = J.bind(null, e);
  t.type = e;
  return t;
};

t.createRef = function () {
  return {
    current: null
  };
};

t.forwardRef = function (e) {
  return {
    $$typeof: i,
    render: e
  };
};

t.isValidElement = L;

t.lazy = function (e) {
  return {
    $$typeof: c,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: Q
  };
};

t.memo = function (e, t) {
  return {
    $$typeof: f,
    type: e,
    compare: void 0 === t ? null : t
  };
};

t.useCallback = function (e, t) {
  return S().useCallback(e, t);
};

t.useContext = function (e, t) {
  return S().useContext(e, t);
};

t.useDebugValue = function () {};

t.useEffect = function (e, t) {
  return S().useEffect(e, t);
};

t.useImperativeHandle = function (e, t, r) {
  return S().useImperativeHandle(e, t, r);
};

t.useLayoutEffect = function (e, t) {
  return S().useLayoutEffect(e, t);
};

t.useMemo = function (e, t) {
  return S().useMemo(e, t);
};

t.useReducer = function (e, t, r) {
  return S().useReducer(e, t, r);
};

t.useRef = function (e) {
  return S().useRef(e);
};

t.useState = function (e) {
  return S().useState(e);
};

t.version = "17.0.2";
t.Fragment;
      t.StrictMode;
      t.Profiler;
      t.Suspense;
      t.Children;
      t.Component;
      t.PureComponent;
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      t.cloneElement;
      t.createContext;
      t.createElement;
      t.createFactory;
      t.createRef;
      t.forwardRef;
      t.isValidElement;
      t.lazy;
      t.memo;
      t.useCallback;
      t.useContext;
      t.useDebugValue;
      t.useEffect;
      t.useImperativeHandle;
      t.useLayoutEffect;
      t.useMemo;
      t.useReducer;
      t.useRef;
      t.useState;
      t.version;

t.Fragment;
      t.StrictMode;
      t.Profiler;
      t.Suspense;
      t.Children;
      t.Component;
      t.PureComponent;
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      t.cloneElement;
      t.createContext;
      t.createElement;
      t.createFactory;
      t.createRef;
      t.forwardRef;
      t.isValidElement;
      t.lazy;
      t.memo;
      t.useCallback;
      t.useContext;
      t.useDebugValue;
      t.useEffect;
      t.useImperativeHandle;
      t.useLayoutEffect;
      t.useMemo;
      t.useReducer;
      t.useRef;
      t.useState;
      t.version;

export { t };
