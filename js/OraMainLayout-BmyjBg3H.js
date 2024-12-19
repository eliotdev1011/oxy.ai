import {
  K as Be,
  J as P,
  N as Le,
  O as V,
  P as Me,
  S as Xe,
  M as n,
  U as ee,
  j as t,
  V as q,
  W as Ie,
  bv as Re,
  b2 as Je,
  Q as _,
  bu as qe,
  bF as Ke,
  ax as I,
  aA as le,
  aB as J,
  ay as R,
  aW as $e,
  az as y,
  co as et,
  cp as tt,
  cq as rt,
  cr as it,
  cs as st,
  ct as ot,
  t as B,
  ae as W,
  L as C,
  e as S,
  X as G,
  G as o,
  T as u,
  R as k,
  a1 as te,
  a4 as K,
  Z as nt,
  ar as at,
  cu as lt,
  cg as ct,
  cv as ce,
  cw as dt,
} from "./index-Dg322SbI.js";
import { G as N } from "./index-BBZuYqjW.js";
import { l as de, S as ht } from "./TwitterIcon-DkqgGF_e.js";
import { c as Z } from "./createSvgIcon-C1_jFWCT.js";
import { u as pt, N as gt } from "./NewsContext-DHxbCEP9.js";
import { C as ut } from "./ConnectButton-Btnn9i4e.js";
import { u as mt } from "./useDashboard-BwNjG2Qg.js";
import { u as xt } from "./useOraTask-B2Pdhpsv.js";
import { u as ft } from "./useStake-BnL3tD5h.js";
import { P as Ct } from "./Modal-ClwAz5WQ.js";
import { a as wt, u as vt, B as yt } from "./Button-BKXOMoUW.js";
import { I as bt } from "./IconButton-DEybFO94.js";
import { L as he, M as St } from "./Menu-uPt8HNXf.js";
(function () {
  try {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "04c208a0-6b15-4056-ae5b-006f3ac6f9ae"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-04c208a0-6b15-4056-ae5b-006f3ac6f9ae"));
  } catch {}
})();
function kt(e) {
  return Be("MuiAppBar", e);
}
P("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const At = (e) => {
    const { color: r, position: i, classes: s } = e,
      l = { root: ["root", `color${V(r)}`, `position${V(i)}`] };
    return Ie(l, kt, s);
  },
  pe = (e, r) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${r})` : r),
  jt = Le(Ct, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: i } = e;
      return [r.root, r[`position${V(i.position)}`], r[`color${V(i.color)}`]];
    },
  })(
    Me(({ theme: e }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": e.vars
              ? e.vars.palette.AppBar.defaultBg
              : e.palette.grey[100],
            "--AppBar-color": e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles("dark", {
              "--AppBar-background": e.vars
                ? e.vars.palette.AppBar.defaultBg
                : e.palette.grey[900],
              "--AppBar-color": e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(Xe(["contrastText"]))
          .map(([r]) => ({
            props: { color: r },
            style: {
              "--AppBar-background": (e.vars ?? e).palette[r].main,
              "--AppBar-color": (e.vars ?? e).palette[r].contrastText,
            },
          })),
        {
          props: (r) =>
            r.enableColorOnDark === !0 &&
            !["inherit", "transparent"].includes(r.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
          },
        },
        {
          props: (r) =>
            r.enableColorOnDark === !1 &&
            !["inherit", "transparent"].includes(r.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", {
              backgroundColor: e.vars
                ? pe(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: e.vars
                ? pe(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)")
                : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    }))
  ),
  Et = n.forwardRef(function (r, i) {
    const s = ee({ props: r, name: "MuiAppBar" }),
      {
        className: l,
        color: d = "primary",
        enableColorOnDark: h = !1,
        position: g = "fixed",
        ...a
      } = s,
      f = { ...s, color: d, position: g, enableColorOnDark: h },
      p = At(f);
    return t.jsx(jt, {
      square: !0,
      component: "header",
      ownerState: f,
      elevation: 4,
      className: q(p.root, l, g === "fixed" && "mui-fixed"),
      ref: i,
      ...a,
    });
  }),
  $ = typeof Re({}) == "function",
  Bt = (e, r) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(r && !e.vars && { colorScheme: e.palette.mode }),
  }),
  Lt = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    "@media print": { backgroundColor: (e.vars || e).palette.common.white },
  }),
  ze = (e, r = !1) => {
    var d, h;
    const i = {};
    r &&
      e.colorSchemes &&
      typeof e.getColorSchemeSelector == "function" &&
      Object.entries(e.colorSchemes).forEach(([g, a]) => {
        var p, m;
        const f = e.getColorSchemeSelector(g);
        f.startsWith("@")
          ? (i[f] = {
              ":root": {
                colorScheme: (p = a.palette) == null ? void 0 : p.mode,
              },
            })
          : (i[f.replace(/\s*&/, "")] = {
              colorScheme: (m = a.palette) == null ? void 0 : m.mode,
            });
      });
    let s = {
      html: Bt(e, r),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: e.typography.fontWeightBold },
      body: {
        margin: 0,
        ...Lt(e),
        "&::backdrop": {
          backgroundColor: (e.vars || e).palette.background.default,
        },
      },
      ...i,
    };
    const l =
      (h = (d = e.components) == null ? void 0 : d.MuiCssBaseline) == null
        ? void 0
        : h.styleOverrides;
    return l && (s = [s, l]), s;
  },
  D = "mui-ecs",
  Mt = (e) => {
    const r = ze(e, !1),
      i = Array.isArray(r) ? r[0] : r;
    return (
      !e.vars &&
        i &&
        (i.html[`:root:has(${D})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([s, l]) => {
          var h, g;
          const d = e.getColorSchemeSelector(s);
          d.startsWith("@")
            ? (i[d] = {
                [`:root:not(:has(.${D}))`]: {
                  colorScheme: (h = l.palette) == null ? void 0 : h.mode,
                },
              })
            : (i[d.replace(/\s*&/, "")] = {
                [`&:not(:has(.${D}))`]: {
                  colorScheme: (g = l.palette) == null ? void 0 : g.mode,
                },
              });
        }),
      r
    );
  },
  It = Re(
    $
      ? ({ theme: e, enableColorScheme: r }) => ze(e, r)
      : ({ theme: e }) => Mt(e)
  );
function Rt(e) {
  const r = ee({ props: e, name: "MuiCssBaseline" }),
    { children: i, enableColorScheme: s = !1 } = r;
  return t.jsxs(n.Fragment, {
    children: [
      $ && t.jsx(It, { enableColorScheme: s }),
      !$ && !s && t.jsx("span", { className: D, style: { display: "none" } }),
      i,
    ],
  });
}
const ge = P("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  ue = P("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function zt(e) {
  return Be("MuiMenuItem", e);
}
const z = P("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  Ft = (e, r) => {
    const { ownerState: i } = e;
    return [
      r.root,
      i.dense && r.dense,
      i.divider && r.divider,
      !i.disableGutters && r.gutters,
    ];
  },
  Tt = (e) => {
    const {
        disabled: r,
        dense: i,
        divider: s,
        disableGutters: l,
        selected: d,
        classes: h,
      } = e,
      a = Ie(
        {
          root: [
            "root",
            i && "dense",
            r && "disabled",
            !l && "gutters",
            s && "divider",
            d && "selected",
          ],
        },
        zt,
        h
      );
    return { ...h, ...a };
  },
  Ht = Le(wt, {
    shouldForwardProp: (e) => Je(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: Ft,
  })(
    Me(({ theme: e }) => ({
      ...e.typography.body1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${z.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : _(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${z.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : _(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
      },
      [`&.${z.selected}:hover`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : _(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
        "@media (hover: none)": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : _(e.palette.primary.main, e.palette.action.selectedOpacity),
        },
      },
      [`&.${z.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${z.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      [`& + .${ge.root}`]: {
        marginTop: e.spacing(1),
        marginBottom: e.spacing(1),
      },
      [`& + .${ge.inset}`]: { marginLeft: 52 },
      [`& .${de.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${de.inset}`]: { paddingLeft: 36 },
      [`& .${ue.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: r }) => !r.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: r }) => r.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: r }) => !r.dense,
          style: { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
        },
        {
          props: ({ ownerState: r }) => r.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...e.typography.body2,
            [`& .${ue.root} svg`]: { fontSize: "1.25rem" },
          },
        },
      ],
    }))
  ),
  Ot = n.forwardRef(function (r, i) {
    const s = ee({ props: r, name: "MuiMenuItem" }),
      {
        autoFocus: l = !1,
        component: d = "li",
        dense: h = !1,
        divider: g = !1,
        disableGutters: a = !1,
        focusVisibleClassName: f,
        role: p = "menuitem",
        tabIndex: m,
        className: w,
        ...Q
      } = s,
      A = n.useContext(he),
      L = n.useMemo(
        () => ({ dense: h || A.dense || !1, disableGutters: a }),
        [A.dense, h, a]
      ),
      b = n.useRef(null);
    qe(() => {
      l && b.current && b.current.focus();
    }, [l]);
    const Y = { ...s, dense: L.dense, divider: g, disableGutters: a },
      M = Tt(s),
      F = vt(b, i);
    let T;
    return (
      s.disabled || (T = m !== void 0 ? m : -1),
      t.jsx(he.Provider, {
        value: L,
        children: t.jsx(Ht, {
          ref: F,
          role: p,
          tabIndex: T,
          component: d,
          focusVisibleClassName: q(M.focusVisible, f),
          className: q(M.root, w),
          ...Q,
          ownerState: Y,
          classes: M,
        }),
      })
    );
  }),
  me =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20976%20225'%20fill='none'%20id='polygon-logo-colored'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill='%237A53DD'%20d='M258.127%20116.989v58.183a21.287%2021.287%200%200%201-2.841%2010.341%2021.013%2021.013%200%200%201-7.529%207.613l-50.398%2029.035a20.2%2020.2%200%200%201-20.653%200l-50.398-29.035a21.02%2021.02%200%200%201-7.529-7.613%2021.287%2021.287%200%200%201-2.841-10.341v-16.307l25.796-15v28.409l45.171%2026.222%2045.142-26.222v-52.302l-45.142-26.221L81.109%20155.03a20.91%2020.91%200%200%201-20.654%200l-50.398-29.148A20.884%2020.884%200%200%201%200%20107.984V49.802a20.966%2020.966%200%200%201%2010.313-17.955L60.71%202.812a20.313%2020.313%200%200%201%2020.625%200l50.398%2029.035A21.048%2021.048%200%200%201%20142.075%2049.8v16.307l-25.966%2014.887v-28.21l-45.17-26.222-45.143%2026.221v52.217l45.142%2026.222%20105.881-61.28a20.913%2020.913%200%200%201%2020.654%200l50.37%2029.149a20.961%2020.961%200%200%201%2010.227%2017.897h.057Z'%3e%3c/path%3e%3cpath%20fill='%23000'%20d='M347.943%20196.337v-45.455c4.915%206.193%2013.863%209.659%2024.204%209.659%2026.393%200%2044.234-18.75%2044.234-47.33s-16.392-47.33-42.046-47.33c-11.847%200-20.938%204.347-26.421%2011.364V67.16h-25.256v128.893l25.285.284zm21.079-57.557c-13.693%200-22.585-10.199-22.585-25.569s8.892-25.568%2022.585-25.568c13.694%200%2022.387%2010.085%2022.387%2025.568s-9.063%2025.569-22.387%2025.569zm104.839%2021.876c28.21%200%2048.296-20.057%2048.296-47.33s-20.171-47.33-48.296-47.33-48.296%2019.886-48.296%2047.33c0%2027.443%2020.057%2047.33%2048.296%2047.33zm0-21.876c-13.665%200-22.955-10.369-22.955-25.568%200-15.199%209.318-25.568%2022.955-25.568%2013.636%200%2022.926%2010.37%2022.926%2025.568%200%2015.199-9.261%2025.568-22.926%2025.568zm89.024%2020.426V27.558h-25.256v131.648h25.256zm76.041-91.763-19.12%2059.148-19.29-59.148H574.55l33.296%2090.91-13.409%2037.983h24.204l13.012-37.472%2033.324-91.392-26.051-.029zm97.117%209.093c-5.113-6.364-14.204-10.54-25.312-10.54-26.762%200-42.955%2018.722-42.955%2047.33%200%2028.608%2016.136%2047.33%2043.324%2047.33%2010.739%200%2020.398-4.035%2025.114-10.768v12.103c0%208.523-5.682%2014.574-13.267%2014.574h-42.245v19.886h46.25c20.739%200%2034.575-12.557%2034.575-31.676v-97.33h-25.569l.085%209.09zm-20.937%2062.244c-13.466%200-22.387-10.056-22.387-25.568%200-15.511%208.921-25.568%2022.387-25.568%2013.466%200%2022.557%2010.085%2022.557%2025.568s-8.892%2025.568-22.557%2025.568zm110.233%2021.876c28.21%200%2048.296-20.057%2048.296-47.33s-20.171-47.33-48.296-47.33-48.296%2019.886-48.296%2047.33c0%2027.443%2020.057%2047.33%2048.296%2047.33zm0-21.876c-13.665%200-22.955-10.369-22.955-25.568%200-15.199%209.29-25.568%2022.955-25.568s22.926%2010.37%2022.926%2025.568c0%2015.199-9.29%2025.568-22.926%2025.568zm87.724%2020.427v-50.256c0-11.847%207.841-20.398%2018.949-20.398%2010.54%200%2017.642%208.068%2017.642%2019.119v51.535h25.569v-57.188c0-21.108-13.466-36.023-34.262-36.023-12.557%200-22.727%205.256-27.841%2014.205V67.558h-25.568l-.001%2091.762%2025.512-.113z'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h975v225H0z'%3e%3c/path%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  xe =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.0'%20id='katman_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20600%20400'%20style='enable-background:new%200%200%20600%20400;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill-rule:evenodd;clip-rule:evenodd;fill:%23000;}%20.st1{fill-rule:evenodd;clip-rule:evenodd;fill:%2300D395;}%20%3c/style%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M527.2,199.4c0-6.3-3.7-11-9.6-11s-9.6,4.7-9.6,11c0,6.3,3.7,11,9.6,11C523.5,210.5,527.2,205.7,527.2,199.4z%20M526.9,184.2v-16.5c0-1.1,0.7-2,1.8-2.3l8.7-2.3v55.8h-9.7v-4.7c-2.4,3.6-6.8,5.6-12.3,5.6c-11.3,0-17.9-9-17.9-20.3%20c0-11.3,6.6-20.3,17.9-20.3C520.9,179.1,524.9,181.5,526.9,184.2z%20M467.2,180v4.7c1.8-3.3,5.8-5.6,11.6-5.6%20c9.3,0,14.3,6.2,14.3,15.5v24.2h-10.5v-23c0-4.5-1.9-7.6-6.6-7.6c-5.1,0-7.9,3.3-7.9,8.4v22.2h-10.5V180H467.2z%20M432.9,219.7%20c-11.3,0-17.6-4.9-17.6-17.5V180h10.5v22.4c0,5.4,2.4,7.9,7.1,7.9s7.1-2.5,7.1-7.9V180h10.5v22.2%20C450.5,214.8,444.2,219.7,432.9,219.7z%20M380.5,199.4c0,7,4.3,11,9.8,11c5.6,0,9.8-4.1,9.8-11c0-7-4.3-11-9.8-11%20C384.8,188.4,380.5,192.4,380.5,199.4z%20M390.4,219.7c-12.4,0-20.4-9.3-20.4-20.3c0-11,7.9-20.3,20.4-20.3%20c12.4,0,20.4,9.3,20.4,20.3C410.8,210.5,402.8,219.7,390.4,219.7z%20M338,199.4c0,6.3,3.7,11,9.6,11s9.6-4.7,9.6-11%20c0-6.3-3.7-11-9.6-11S338,193.1,338,199.4z%20M338.3,214.7v16.1c0,1.1-0.7,2-1.8,2.3l-8.7,2.3V180h9.7v4.7c2.4-3.6,6.8-5.6,12.3-5.6%20c11.3,0,17.9,9,17.9,20.3c0,11.3-6.6,20.3-17.9,20.3C344.2,219.7,340.3,217.3,338.3,214.7z%20M296.5,196.7v22.1H286v-23%20c0-4.3-1.6-7.6-6.2-7.6c-4.9,0-7.6,3.2-7.6,8.4v22.3h-10.5V180h9.7v4.7c1.8-3.3,5.6-5.6,11.2-5.6c5.3,0,9,2.1,11.3,5.5%20c3.4-3.8,7.3-5.5,12.9-5.5c9.3,0,14.1,6.4,14.1,15.5v24.2h-10.5v-23c0-4.3-1.6-7.6-6.2-7.6C299.1,188.1,296.5,191.3,296.5,196.7z%20M226.6,199.4c0,7,4.3,11,9.8,11c5.6,0,9.8-4.1,9.8-11c0-7-4.3-11-9.8-11C230.9,188.4,226.6,192.4,226.6,199.4z%20M236.4,219.7%20c-12.4,0-20.4-9.3-20.4-20.3c0-11,7.9-20.3,20.4-20.3c12.5,0,20.4,9.3,20.4,20.3C256.8,210.5,248.9,219.7,236.4,219.7z%20M161.5,192.4c0-16.4,11.3-27.3,26.4-27.3c13.1,0,23.5,7.8,25.5,20.6h-11.6c-1.6-6.6-6.9-10.3-13.9-10.3c-9.6,0-15,6.7-15,17%20s5.4,17,15,17c7,0,12.4-3.7,13.9-10.3h11.6c-2,12.8-12.4,20.6-25.5,20.6C172.8,219.8,161.5,208.9,161.5,192.4z'/%3e%3cpath%20class='st1'%20d='M58,222.1c-2.7-1.6-4.3-4.6-4.3-7.7v-17.5c0-0.7,0.2-1.3,0.5-1.9c1-1.8,3.4-2.4,5.1-1.4l39.5,23%20c2.3,1.4,3.7,3.8,3.7,6.5v18.1c0,0.8-0.2,1.7-0.7,2.4c-1.3,2.1-4.1,2.8-6.2,1.5L58,222.1z%20M116.9,188.8c2.3,1.4,3.7,3.8,3.7,6.5%20v36.8c0,1.1-0.6,2.1-1.5,2.6l-8.7,4.9c-0.1,0.1-0.2,0.1-0.3,0.1v-20.4c0-2.6-1.4-5.1-3.7-6.5l-34.7-20.8V169%20c0-0.7,0.2-1.3,0.5-1.9c1-1.8,3.4-2.4,5.1-1.4L116.9,188.8z%20M134.2,161.7c2.3,1.3,3.7,3.8,3.7,6.5v53.8c0,1.1-0.6,2.1-1.6,2.6%20l-8.2,4.4v-37.4c0-2.6-1.4-5.1-3.6-6.4L89,163.8V142c0-0.7,0.2-1.3,0.5-1.9c1-1.8,3.4-2.4,5.1-1.4L134.2,161.7z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  fe = "/asset/svg/full-uniswap-logo-DnaV-0Ug.svg",
  Ce = "/asset/svg/logo_EthereumFoundation-QRyhLlmU.svg",
  we = "/asset/svg/optimism-B2Z2Boow.svg",
  ve = "/asset/svg/Arbitrum-tJHD6nYU.svg",
  ye =
    "data:image/svg+xml,%3csvg%20width='500'%20height='171'%20viewBox='-35%20-30%20500%20171'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.034%2055.017C110.034%2085.402%2085.359%20110.034%2054.921%20110.034C26.0432%20110.034%202.35281%2087.8625%200%2059.6416H72.8467V50.3923H0C2.35281%2022.1714%2026.0432%200%2054.921%200C85.359%200%20110.034%2024.6319%20110.034%2055.017ZM314.359%20100.066C333.456%20100.066%20345.98%2089.7739%20345.98%2074.2731C345.98%2059.8883%20336.556%2053.068%20322.295%2050.7119L309.646%2048.6037C299.974%2046.9917%20293.525%2042.7754%20293.525%2033.4749C293.525%2024.0505%20300.718%2016.8581%20314.359%2016.8581C327.627%2016.8581%20334.448%2023.5544%20335.192%2033.1029H344.74C343.996%2020.4543%20334.324%209.16968%20314.483%209.16968C294.889%209.16968%20284.101%2020.2062%20284.101%2033.847C284.101%2048.3557%20293.897%2055.0521%20307.29%2057.2842L320.063%2059.2683C330.727%2061.1284%20336.68%2065.4686%20336.68%2074.6451C336.68%2085.4337%20327.875%2092.378%20314.483%2092.378C300.594%2092.378%20291.913%2085.6817%20291.169%2074.2731H281.745C282.489%2089.1539%20293.897%20100.066%20314.359%20100.066ZM173.574%2098.3303H138.853V11.0298H172.334C187.091%2011.0298%20197.384%2019.7102%20197.384%2033.599C197.384%2043.6435%20191.679%2050.3398%20182.503%2052.5719V52.944C193.415%2055.0521%20200.112%2062.4925%20200.112%2074.1491C200.112%2089.1539%20189.075%2098.3303%20173.574%2098.3303ZM171.094%2049.3478C181.635%2049.3478%20188.083%2043.6435%20188.083%2034.715V33.4749C188.083%2024.5465%20181.635%2018.9662%20171.094%2018.9662H148.153V49.3478H171.094ZM172.21%2090.3939C183.743%2090.3939%20190.811%2084.0696%20190.811%2074.3971V73.157C190.811%2063.1125%20183.619%2057.0362%20172.086%2057.0362H148.153V90.3939H172.21ZM275.216%2098.3303H265.296L257.855%2074.6451H223.133L215.693%2098.3303H206.268L234.914%2011.0298H246.199L275.216%2098.3303ZM240.99%2020.5783H240.246L225.613%2066.8327H255.499L240.99%2020.5783ZM359.949%2098.3303V11.0298H416V19.0902H369.25V49.0998H412.28V57.0362H369.25V90.2699H416V98.3303H359.949Z'%20fill='%230052FF'/%3e%3c/svg%3e",
  be = "/asset/svg/logo_manta-x2iqKCwe.svg",
  Se =
    "data:image/svg+xml,%3csvg%20width='190'%20height='45'%20viewBox='5%200%20190%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M55.9114%2036.5715H50.8701V12.0383H55.9114V36.5715Z'%20fill='%23121212'/%3e%3cpath%20d='M74.1284%2011.5567C76.9112%2011.5567%2079.1849%2012.5327%2080.9465%2014.4843C82.7057%2016.4361%2083.5877%2018.9175%2083.5877%2021.9261V36.569H78.5461V22.6942C78.5461%2020.8059%2077.938%2019.2444%2076.7213%2018.0128C75.5045%2016.7808%2074.0016%2016.1649%2072.2095%2016.1649C70.192%2016.1649%2068.5444%2016.7808%2067.2644%2018.0128C65.9845%2019.2444%2065.3431%2020.8059%2065.3431%2022.6942V36.569H60.3018V12.0383H65.3431V18.3752C66.0147%2016.2636%2067.1274%2014.5985%2068.6813%2013.3818C70.2325%2012.165%2072.0498%2011.5567%2074.1308%2011.5567H74.1284Z'%20fill='%23121212'/%3e%3cpath%20d='M99.3058%2011.5567C103.242%2011.5567%20106.443%2012.9661%20108.907%2015.782C111.371%2018.6006%20112.38%2022.0073%20111.931%2026.0094H91.6233C91.9758%2027.9942%2092.888%2029.6036%2094.3607%2030.8356C95.8334%2032.0673%2097.6077%2032.6834%2099.6888%2032.6834C101.288%2032.6834%20102.72%2032.2905%20103.985%2031.5072C105.25%2030.7241%20106.233%2029.6593%20106.938%2028.3137L111.163%2030.1867C110.076%2032.2678%20108.522%2033.9304%20106.507%2035.1801C104.492%2036.4295%20102.17%2037.0532%2099.5443%2037.0532C95.8639%2037.0532%2092.7741%2035.8364%2090.2774%2033.4057C87.7807%2030.9751%2086.5312%2027.9485%2086.5312%2024.3315C86.5312%2020.7146%2087.7555%2017.683%2090.2039%2015.2321C92.6523%2012.7837%2095.6839%2011.5595%2099.3033%2011.5595L99.3058%2011.5567ZM99.3058%2015.9267C97.448%2015.9267%2095.8411%2016.4943%2094.4799%2017.6323C93.1187%2018.7681%2092.214%2020.2482%2091.7678%2022.073H106.844C106.428%2020.2482%20105.539%2018.7681%20104.18%2017.6323C102.819%2016.4968%20101.194%2015.9267%2099.3058%2015.9267Z'%20fill='%23121212'/%3e%3cpath%20d='M125.87%2011.5567C128.816%2011.5567%20131.216%2012.3248%20133.071%2013.8609C134.927%2015.3968%20135.857%2017.6071%20135.857%2020.4864V36.5715H130.815V30.0423C129.31%2034.7162%20126.286%2037.0532%20121.741%2037.0532C119.627%2037.0532%20117.868%2036.4221%20116.459%2035.1571C115.05%2033.8924%20114.348%2032.2373%20114.348%2030.1892C114.348%2027.7887%20115.194%2025.9867%20116.892%2024.7877C118.588%2023.589%20120.75%2022.8436%20123.374%2022.5547L128.126%2022.073C129.918%2021.9136%20130.815%2021.1125%20130.815%2019.6729C130.815%2018.4891%20130.359%2017.5436%20129.447%2016.8415C128.534%2016.1369%20127.343%2015.7848%20125.87%2015.7848C124.398%2015.7848%20123.092%2016.1699%20122.053%2016.938C121.014%2017.7058%20120.35%2018.8263%20120.061%2020.299L115.067%2019.0975C115.516%2016.7935%20116.715%2014.9609%20118.669%2013.5997C120.621%2012.2413%20123.021%2011.5595%20125.87%2011.5595V11.5567ZM123.374%2032.9699C125.455%2032.9699%20127.213%2032.2728%20128.653%2030.881C130.093%2029.4896%20130.813%2027.865%20130.813%2026.0069V24.6638C130.43%2025.3048%20129.5%2025.7027%20128.027%2025.8624L123.371%2026.4378C122.154%2026.6%20121.186%2026.9574%20120.466%2027.5176C119.746%2028.0777%20119.386%2028.8383%20119.386%2029.7988C119.386%2030.7596%20119.746%2031.5274%20120.466%2032.1028C121.186%2032.6781%20122.154%2032.9671%20123.371%2032.9671L123.374%2032.9699Z'%20fill='%23121212'/%3e%3cpath%20d='M47.3994%2036.5715H24.1133V12.0383H29.4411V31.8191H47.3994V36.5715Z'%20fill='%23121212'/%3e%3cpath%20d='M140.609%2011.5567C143.234%2011.5567%20145.362%209.42894%20145.362%206.80431C145.362%204.17957%20143.234%202.05179%20140.609%202.05179C137.984%202.05179%20135.856%204.17957%20135.856%206.80431C135.856%209.42894%20137.984%2011.5567%20140.609%2011.5567Z'%20fill='%23121212'/%3e%3c/svg%3e",
  ke = "/asset/svg/logo_mantle-D9go02WK.svg",
  _t =
    "data:image/svg+xml,%3csvg%20width='49'%20height='48'%20viewBox='0%200%2049%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4707_3623)'%3e%3cpath%20d='M24.0356%2047.5823C37.1979%2047.5823%2047.8682%2036.9306%2047.8682%2023.7911C47.8682%2010.6516%2037.1979%200%2024.0356%200C11.5479%200%201.30338%209.58763%200.28595%2021.7913H31.7872V25.791H0.28595C1.30338%2037.9946%2011.5479%2047.5823%2024.0356%2047.5823Z'%20fill='%230A0B0D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4707_3623'%3e%3crect%20width='48'%20height='48'%20fill='white'%20transform='translate(0.28595)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Wt =
    "data:image/svg+xml,%3csvg%20width='49'%20height='48'%20viewBox='0%200%2049%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.2703%2018.8802L15.9528%2016.96L5.99994%2022.7202V34.2398L15.9528%2040L25.9062%2034.2398V16.3198L31.4352%2013.12L36.9651%2016.3198V22.7202L31.4352%2025.92L28.1178%2024.0004V29.1198L31.4352%2031.04L41.3882%2025.2798V13.7602L31.4352%208L21.4825%2013.7602V31.6802L15.9528%2034.88L10.4236%2031.6802V25.2798L15.9528%2022.08L19.2703%2023.9996V18.8802Z'%20fill='black'/%3e%3c/svg%3e",
  Fe = "/asset/png/circle_footer-UnM6YKMZ.png",
  Dt = "/asset/svg/Arbitrum_hoverout-jrC7ipLy.svg";
class Vt {
  constructor(r, i, s, l, d) {
    (this.elapsed = Date.now()),
      (this.inView = !1),
      (this.wall_spw = 250 * 0.8),
      (this.wall_sph = 80),
      (this.wall_gap = 400 * 0.8),
      (this.wall_startY = 70),
      (this.wall_columnGap = 80),
      (this.arr_logos = []),
      (this.arr_logosFix = []),
      (this.maxWidth = 1920),
      (this.settings = { width: 1920, height: 120 }),
      (this.startHandler = d),
      (this.modelName = i.modelName),
      (this.hooks = s),
      (this.props = i),
      (this.location = l),
      (this.ratio = Math.min(window.devicePixelRatio, 2)),
      (this.canvas = r),
      this.init();
  }
  async init() {
    const r = await Ke({
      backgroundColor: "#000",
      width: this.settings.width,
      height: this.settings.height,
      antialias: !0,
      canvas: this.canvas,
      resolution: Math.min(2, window.devicePixelRatio),
      transparent: !0,
      backgroundAlpha: 0,
    });
    (this.pixiStage = new I()),
      (this.pixi_renderer = r),
      (this.rectTest = new le().rect(
        0,
        0,
        this.settings.width,
        this.settings.height
      )),
      this.rectTest.fill(0),
      (this.rectTest.alpha = 0),
      this.pixiStage.addChild(this.rectTest),
      this.preload();
  }
  preload() {
    this.wall_gap;
    let r = [];
    r.push({ alias: "logo0", src: me }),
      r.push({ alias: "logo1", src: xe }),
      r.push({ alias: "logo2", src: fe }),
      r.push({ alias: "logo3", src: Ce }),
      r.push({ alias: "logo4", src: we }),
      r.push({ alias: "logo5", src: ve }),
      r.push({ alias: "logo6", src: ye }),
      r.push({ alias: "logo7", src: be }),
      r.push({ alias: "logo8", src: Se }),
      r.push({ alias: "logo9", src: ke }),
      r.push({ alias: "logo_live0", src: et }),
      r.push({ alias: "logo_live1", src: tt }),
      r.push({ alias: "logo_live2", src: rt }),
      r.push({ alias: "logo_live3", src: _t }),
      r.push({ alias: "logo_live4", src: Wt }),
      r.push({ alias: "logo_live5", src: it }),
      r.push({ alias: "logo_live6", src: st }),
      r.push({ alias: "logo_live7", src: ot }),
      r.push({ alias: "logo5_dark", src: Dt }),
      r.push({ alias: "circle", src: Fe });
    for (let i = 0; i < r.length; i++) {
      let { alias: s, src: l } = r[i];
      J.cache.has(s) || J.add({ alias: s, src: l });
    }
    J.load(
      r.map((i) => i.alias),
      (i) => {}
    ).then((i) => {
      (this.resources = i), this.start();
    });
  }
  start() {
    (this.con_logoFix = this.createLogoWallFix()),
      (this.arr_conlogo = []),
      (this.con_logo0 = this.createLogoWall()),
      this.arr_conlogo.push(this.con_logo0),
      this.createCircle(),
      this.showIn(),
      (this.edgeTexture = this.createGraidentEdgeTexture()),
      (this.leftEdge = new R(this.edgeTexture)),
      this.pixiStage.addChild(this.leftEdge),
      (this.rightEdge = new R(this.edgeTexture)),
      (this.rightEdge.scale.x = -1),
      this.pixiStage.addChild(this.rightEdge),
      this.updateProps(this.location),
      window.addEventListener("resize", this.onWindowResize.bind(this), !1),
      window.requestAnimationFrame(this._animate.bind(this)),
      this._resize();
  }
  createGraidentEdgeTexture() {
    const r = document.createElement("canvas"),
      i = r.getContext("2d"),
      s = 400,
      l = 200,
      d = i.createLinearGradient(0, 0, s, 0);
    return (
      d.addColorStop(0, "rgba(238,238,238,1)"),
      d.addColorStop(0.3, "rgba(238,238,238,0)"),
      (i.fillStyle = d),
      i.fillRect(0, 0, s, l),
      $e.from(r)
    );
  }
  updateProps(r) {
    (this.location = r),
      this.location.pathname.includes("/app/opml")
        ? (this.con_logo0 && (this.con_logo0.visible = !1),
          this.con_logoFix && (this.con_logoFix.visible = !0),
          this.leftEdge && (this.leftEdge.visible = !1),
          this.rightEdge && (this.rightEdge.visible = !1),
          (this.maxWidth = 1280),
          this._resize())
        : (this.con_logo0 && (this.con_logo0.visible = !0),
          this.con_logoFix && (this.con_logoFix.visible = !1),
          this.leftEdge && (this.leftEdge.visible = !0),
          this.rightEdge && (this.rightEdge.visible = !0),
          (this.maxWidth = 1920),
          this._resize());
  }
  createLogoWallFix() {
    let r = new I();
    this.pixiStage.addChild(r), (this.arr_fixed = []);
    const i = [
      "logo_live0",
      "logo_live1",
      "logo_live2",
      "logo_live3",
      "logo_live4",
      "logo_live5",
      "logo_live6",
      "logo_live7",
    ];
    this.wall_spw * 0.3;
    let s = this.wall_gap * 0.85;
    for (let l = 0; l < i.length; l++) {
      let d = new I(),
        h = this.resources[i[l]];
      const g = new R(h);
      this.resizeSpriteH(g, 55),
        (d.x = 50 + g.width / 2 + s * l),
        (d.sp = g),
        d.addChild(g),
        r.addChild(d),
        this.arr_fixed.push(d);
    }
    return r;
  }
  createLogoWall() {
    const r = [me, xe, fe, Ce, we, ve, ye, be, Se, ke];
    let i = new I();
    this.pixiStage.addChild(i);
    let s = r.length,
      l = this.wall_spw,
      d = this.wall_gap;
    this.wall_startY;
    let h = [];
    this.arr_logos.push(h);
    for (let g = 0; g < r.length * 4; g++) {
      let a = new I(),
        f = this.resources["logo" + (g % s)];
      const p = new R(f);
      p.anchor.set(0.5, 0.5),
        (a.interactive = !0),
        g % s == 5 &&
          ((p.drakTexture = !0),
          (p.texture = this.resources["logo" + (g % s) + "_dark"])),
        (a.tint = 0),
        a.on("pointerover", () => {
          y.TweenMax.killTweensOf(p.mask.scale),
            y.TweenMax.killTweensOf(a.scale);
          let w = a.orginS * 1.3;
          y.TweenMax.to(a, 0, { tint: 16777215 }),
            y.TweenMax.to(a.scale, 0.7, { x: w, y: w, ease: Back.easeOut }),
            y.TweenMax.to(p.mask.scale, 0.7, {
              x: 1.5,
              y: 1.5,
              ease: Back.easeOut,
            }),
            p.drakTexture &&
              ((p.texture = this.resources["logo" + (g % s)]),
              this.resizeSprite(p, l));
        }),
        a.on("pointerout", () => {
          y.TweenMax.killTweensOf(p.mask.scale),
            y.TweenMax.killTweensOf(a.scale);
          let w = a.orginS * 1;
          y.TweenMax.to(a, 0, { tint: 0 }),
            y.TweenMax.to(a.scale, 0.3, { x: w, y: w, ease: Back.easeOut }),
            y.TweenMax.to(p.mask.scale, 0.3, { x: 1, y: 1 }),
            p.drakTexture &&
              ((p.texture = this.resources["logo" + (g % s) + "_dark"]),
              this.resizeSprite(p, l));
        }),
        this.resizeSprite(p, l),
        (a.x = 0 + d * g),
        (a.y = 0),
        (a.sp = p),
        (a.orginX = a.x),
        (a.orginY = a.y),
        (a.orginS = a.scale.x),
        a.addChild(p),
        h.push(a),
        i.addChild(a);
      let m = new le()
        .rect(-0.5 * p.width, -0.5 * p.height, p.width, p.height)
        .fill(16711680);
      a.addChild(m), (m.x = p.x), (m.y = p.y), (p.mask = m);
    }
    return i;
  }
  resizeSprite(r, i) {
    let s = r.texture.orig.width / r.texture.orig.height;
    r.anchor.set(0.5, 0.5), (r.width = i), (r.height = i / s);
  }
  resizeSpriteH(r, i) {
    let s = r.texture.orig.width / r.texture.orig.height;
    r.anchor.set(0.5, 0.5), (r.width = i * s), (r.height = i);
  }
  resizeGap(r) {
    this.wall_gap = r;
    for (let i = 0; i < this.con_logo0.children.length; i++) {
      let s = this.con_logo0.children[i];
      s.x = 0 + this.wall_gap * i;
    }
    this.showIn();
  }
  createCircle() {
    let r = this.resources.circle;
    (this.circle = new R(r)),
      this.circle.anchor.set(0.5, 0.5),
      (this.circle.x = 0.5 * this.settings.width),
      (this.circle.orginY = this.circle.y =
        this.settings.height - this.circle.height / 2),
      this._resize();
  }
  showFix() {}
  showIn() {
    for (let r = 0; r < this.arr_conlogo.length; r++) {
      let i = this.arr_conlogo[r];
      if ((y.TweenMax.killTweensOf(i), r == 0)) {
        (i.dir = 1), (i.x = -5 * this.wall_gap);
        let s = 10;
        y.TweenMax.to(i, 8.5 * s, {
          x: -(5 + s) * this.wall_gap,
          repeat: -1,
          ease: Linear.easeNone,
        });
      }
    }
  }
  showOut() {}
  fixSide(r, i, s) {
    i == "t"
      ? (r.orginY = r.y = -this.offsetY + r.height / 2 + s)
      : i == "b"
      ? (r.orginY = r.y =
          this.settings.height + this.offsetY - r.height / 2 - s)
      : i == "l"
      ? (r.orginX = r.x = r.width / 2 - this.offsetX + s)
      : i == "r" &&
        (r.orginX = r.x = this.settings.width - r.width / 2 + this.offsetX - s);
  }
  onWindowResize() {
    this._resize(),
      setTimeout(() => {
        this._resize();
      }, 300);
  }
  _resize() {
    if (!this.pixi_renderer) return;
    (this.settings.width = this.parentW =
      Math.min(this.maxWidth, this.canvas.parentNode.offsetWidth)),
      (this.settings.height = this.parentH =
        this.canvas.parentNode.offsetHeight),
      this.pixi_renderer.resize(this.parentW, this.parentH),
      (this.canvas.style.height = this.parentH + "px"),
      (this.canvas.style.width = this.parentW + "px"),
      (this.pixiStage.scale.x =
        this.parentH / this.settings.height < this.parentW / this.settings.width
          ? this.parentH / this.settings.height
          : this.parentW / this.settings.width),
      (this.pixiStage.scale.y = this.pixiStage.scale.x),
      (this.pixiStage.x =
        (this.parentW - this.settings.width * this.pixiStage.scale.x) * 0.5),
      (this.pixiStage.y =
        (this.parentH - this.settings.height * this.pixiStage.scale.y) * 0.5),
      (this.offsetX = this.pixiStage.x / this.pixiStage.scale.x),
      (this.offsetY = this.pixiStage.y / this.pixiStage.scale.x);
    let r = 1,
      i = 1,
      s = 50;
    if (
      (this.canvas.parentNode.offsetWidth < 600
        ? ((r = 0.5), (i = 0.5), (s = 40), this.resizeGap(400 * 0.6))
        : this.canvas.parentNode.offsetWidth < 900
        ? ((r = 0.6), (i = 0.6), (s = 80), this.resizeGap(400 * 0.8))
        : this.canvas.parentNode.offsetWidth < 1200
        ? ((r = 0.8), (i = 0.8), (s = 100), this.resizeGap(400 * 0.8))
        : this.canvas.parentNode.offsetWidth < 1536 &&
          ((r = 1), (i = 0.9), (s = 120), this.resizeGap(400 * 0.8)),
      this.rectTest &&
        ((this.rectTest.width = this.settings.width),
        (this.rectTest.height = this.settings.height)),
      this.leftEdge &&
        ((this.leftEdge.width = this.settings.width * 0.1),
        (this.leftEdge.height = this.settings.height * 0.75)),
      this.rightEdge &&
        ((this.rightEdge.width = this.settings.width * 0.1),
        (this.rightEdge.height = this.settings.height),
        (this.rightEdge.x = this.settings.width),
        (this.rightEdge.y = 0)),
      this.con_logo0 &&
        ((this.con_logo0.y = this.settings.height / 2),
        this.con_logo0.scale.set(r / this.pixiStage.scale.x)),
      this.con_logoFix)
    ) {
      this.con_logoFix.y = this.settings.height / 2;
      for (let l = 0; l < this.arr_fixed.length; l++) {
        let d = this.arr_fixed[l];
        (d.x =
          s +
          ((this.parentW - 2 * s) /
            (this.arr_fixed.length - 1) /
            this.pixiStage.scale.x) *
            l),
          (d.scale.x = i / this.pixiStage.scale.x),
          (d.scale.y = i / this.pixiStage.scale.x);
      }
    }
  }
  pixiStart() {}
  _animate() {
    if (this.canvas) {
      let r = this.canvas.getBoundingClientRect().bottom - 300;
      !this.inView && r < window.innerHeight
        ? (this.inView = !0)
        : r > window.innerHeight && (this.inView = !1),
        this.pixi_renderer.render(this.pixiStage);
    }
    this.animationId = window.requestAnimationFrame(this._animate.bind(this));
  }
  dispose() {
    window.removeEventListener("resize", this.onWindowResize.bind(this), !1),
      cancelAnimationFrame(this.animationId);
  }
}
const Nt = (e) => {
    const r = B(),
      i = n.useRef(null),
      s = n.useRef(null),
      l = n.useRef(null),
      d = () => {},
      [h, g] = n.useState(0),
      a = { setCount: g },
      f = n.useRef(!1);
    return (
      n.useEffect(() => {
        const p = l.current;
        if (f.current) s.current.updateProps(r);
        else {
          f.current = !0;
          const m = new Vt(p, e, a, r, d);
          s.current = m;
        }
        return () => {};
      }, [r]),
      t.jsx(W, {
        ref: i,
        style: e.style,
        sx: e.sx,
        children: t.jsx("canvas", {
          ref: l,
          style: {
            touchAction: "auto !important",
            backgroundColor: "transparent",
            position: "relative",
            transform: "translate(-50%,-50%)",
            left: "50%",
            top: "50%",
          },
        }),
      })
    );
  },
  Pt = (e) =>
    n.createElement(
      "svg",
      {
        width: 33,
        height: 32,
        viewBox: "0 0 33 32",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      n.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.7109 28C23.3384 28 28.7109 22.6274 28.7109 16C28.7109 9.37258 23.3384 4 16.7109 4C10.0835 4 4.71094 9.37258 4.71094 16C4.71094 22.6274 10.0835 28 16.7109 28ZM16.6988 9.80646C14.1016 9.80646 11.9961 11.9119 11.9961 14.5092V20.6914C11.9961 21.5206 12.6683 22.1928 13.4975 22.1928H19.9001C20.7293 22.1928 21.4015 21.5206 21.4015 20.6914V14.5092C21.4015 11.9119 19.296 9.80646 16.6988 9.80646Z",
      })
    ),
  Gt = (e) =>
    n.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      n.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      n.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        n.createElement("path", {
          d: "M20.317 4.4921C18.7873 3.80147 17.147 3.29265 15.4319 3.00122C15.4007 2.9956 15.3695 3.00965 15.3534 3.03777C15.1424 3.40697 14.9087 3.88862 14.7451 4.26719C12.9004 3.99545 11.0652 3.99545 9.25832 4.26719C9.09465 3.8802 8.85248 3.40697 8.64057 3.03777C8.62449 3.01059 8.59328 2.99654 8.56205 3.00122C6.84791 3.29172 5.20756 3.80054 3.67693 4.4921C3.66368 4.49772 3.65233 4.5071 3.64479 4.51928C0.533392 9.09311 -0.31895 13.5545 0.0991801 17.9606C0.101072 17.9822 0.11337 18.0028 0.130398 18.0159C2.18321 19.4993 4.17171 20.3998 6.12328 20.9967C6.15451 21.0061 6.18761 20.9949 6.20748 20.9695C6.66913 20.3492 7.08064 19.6952 7.43348 19.0073C7.4543 18.967 7.43442 18.9192 7.39186 18.9033C6.73913 18.6597 6.1176 18.3626 5.51973 18.0253C5.47244 17.9981 5.46865 17.9316 5.51216 17.8997C5.63797 17.8069 5.76382 17.7104 5.88396 17.613C5.90569 17.5952 5.93598 17.5914 5.96153 17.6026C9.88928 19.3672 14.1415 19.3672 18.023 17.6026C18.0485 17.5905 18.0788 17.5942 18.1015 17.612C18.2216 17.7095 18.3475 17.8069 18.4742 17.8997C18.5177 17.9316 18.5149 17.9981 18.4676 18.0253C17.8697 18.3692 17.2482 18.6597 16.5945 18.9024C16.552 18.9183 16.533 18.967 16.5538 19.0073C16.9143 19.6942 17.3258 20.3483 17.7789 20.9686C17.7978 20.9949 17.8319 21.0061 17.8631 20.9967C19.8241 20.3998 21.8126 19.4993 23.8654 18.0159C23.8834 18.0028 23.8948 17.9831 23.8967 17.9616C24.3971 12.8676 23.0585 8.4428 20.3482 4.52021C20.3416 4.5071 20.3303 4.49772 20.317 4.4921ZM8.02002 15.2778C6.8375 15.2778 5.86313 14.2095 5.86313 12.8976C5.86313 11.5857 6.8186 10.5175 8.02002 10.5175C9.23087 10.5175 10.1958 11.5951 10.1769 12.8976C10.1769 14.2095 9.22141 15.2778 8.02002 15.2778ZM15.9947 15.2778C14.8123 15.2778 13.8379 14.2095 13.8379 12.8976C13.8379 11.5857 14.7933 10.5175 15.9947 10.5175C17.2056 10.5175 18.1705 11.5951 18.1516 12.8976C18.1516 14.2095 17.2056 15.2778 15.9947 15.2778Z",
          fill: "currentColor",
        })
      )
    ),
  Zt = (e) =>
    n.createElement(
      "svg",
      {
        className: "githubIcon",
        fill: "currentColor",
        height: "200px",
        width: "200px",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "-267 288.9 264.5 225.1",
        xmlSpace: "preserve",
        ...e,
      },
      n.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      n.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        n.createElement(
          "g",
          null,
          n.createElement("path", {
            d: "M-21.8,354.4c-0.8-0.9-1.3-2.3-1.2-3.5c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5 c-15.2,5.5-29.1,13.5-42.6,22.2c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3 c-15.7-10.2-31.7-20.2-50-25c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8 c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2 c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7c4.2-10.7,6.5-22.4,7.9-33.8C-0.3,397.9-4.6,374.3-21.8,354.4z M-39.5,458.8c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2 c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6 c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C-37.6,446.5-38.3,452.8-39.5,458.8z",
          }),
          n.createElement("path", {
            d: "M-191.5,424.5c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41 C-175.4,417.7-184.9,417.6-191.5,424.5z",
          }),
          n.createElement("path", {
            d: "M-99.4,423.7c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9 C-84.2,418-93,417.8-99.4,423.7z",
          })
        )
      )
    ),
  Qt = Z(
    t.jsx("path", {
      d: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z",
    }),
    "YouTube"
  ),
  Yt = ({ href: e, pathname: r, children: i, sx: s }) =>
    e
      ? t.jsx(C, {
          href: e,
          target: "_blank",
          rel: "noopener noreferrer",
          underline: "none",
          sx: { ...s },
          children: i,
        })
      : t.jsx(C, {
          component: S,
          to: { pathname: r || "/" },
          underline: "none",
          sx: { ...s },
          children: i,
        }),
  Ut = ({ newsList: e }) => {
    const { SCREEN_SIZE: r } = G();
    return t.jsxs(o, {
      container: !0,
      item: !0,
      direction: "column",
      gap: 0,
      sx: {
        margin: `${r.EXTRA_SMALL ? "2rem" : "0"} 0rem`,
        width: { xs: "100%" },
        height: "100%",
        backdropFilter: "blur(4px)",
        zIndex: 5,
      },
      children: [
        t.jsx(o, {
          container: !0,
          item: !0,
          xs: 2,
          alignItems: "center",
          style: {
            borderRadius: "2rem 0rem 0rem 0rem",
            backgroundColor: "#1B1C1B",
            padding: "1.5rem 2rem",
          },
          children: t.jsx(u, {
            fontFamily: "Syncopate-Bold",
            style: { fontSize: "1.2rem", color: "#EEE", lineHeight: "1rem" },
            children: "in the news",
          }),
        }),
        t.jsxs(o, {
          container: !0,
          item: !0,
          xs: 10,
          style: {
            borderLeft: "0.25rem solid #1B1C1B",
            borderRight: "0.25rem solid #1B1C1B",
            borderBottom: "0.25rem solid #1B1C1B",
            padding: "2rem 1.5rem 0 1.5rem",
            boxSizing: "border-box",
          },
          children: [
            t.jsx(o, {
              container: !0,
              item: !0,
              spacing: 0,
              justifyContent: "flex-start",
              alignContent: "flex-start",
              alignItems: "center",
              sx: {
                backgroundColor: "transparent",
                height: { xs: "15.5rem", sm: "14.5rem" },
                overflowY: "hidden",
                overflowX: "hidden",
              },
              children: e.map((i, s) =>
                t.jsxs(
                  o,
                  {
                    container: !0,
                    item: !0,
                    style: {
                      borderBottom: "1px solid black",
                      marginBottom: "2rem",
                    },
                    children: [
                      t.jsx(o, {
                        item: !0,
                        xs: 12,
                        children: t.jsx(C, {
                          href: i.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          underline: "hover",
                          color: "black",
                          children: t.jsx(u, {
                            align: "left",
                            fontFamily: "Syncopate-Bold",
                            style: {
                              width: "80%",
                              fontSize: "1.2rem",
                              color: "black",
                              lineHeight: "1.75rem",
                              textTransform: "uppercase",
                            },
                            children: i.title,
                          }),
                        }),
                      }),
                      t.jsxs(o, {
                        item: !0,
                        container: !0,
                        justifyContent: "space-between",
                        xs: 12,
                        style: { margin: "0.6rem 0" },
                        children: [
                          t.jsx(o, {
                            item: !0,
                            xs: 2,
                            children: t.jsxs(C, {
                              href: i.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              underline: "always",
                              color: "#000",
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              },
                              children: [
                                t.jsx("img", {
                                  src: i.icon,
                                  style: { height: "0.8rem" },
                                }),
                                t.jsx(u, {
                                  fontFamily: "SpaceMono-Regular",
                                  align: "left",
                                  style: {
                                    fontSize: "0.85rem",
                                    color: "black",
                                    textTransform: "uppercase",
                                  },
                                  children: i.from,
                                }),
                              ],
                            }),
                          }),
                          t.jsx(o, {
                            item: !0,
                            xs: 10,
                            children: t.jsx(u, {
                              fontFamily: "SpaceMono-Regular",
                              align: "right",
                              style: {
                                fontSize: "0.85rem",
                                color: "black",
                                textTransform: "uppercase",
                              },
                              children: i.date,
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
            t.jsx(C, {
              component: S,
              to: "/news",
              color: "black",
              underline: "hover",
              sx: { width: "100%", margin: { xs: "0.5rem 0 1rem 0", sm: "0" } },
              children: t.jsxs(o, {
                container: !0,
                item: !0,
                justifyContent: "space-between",
                alignItems: "center",
                style: { cursor: "pointer" },
                children: [
                  t.jsx(o, {
                    container: !0,
                    item: !0,
                    alignItems: "center",
                    style: { width: "auto" },
                    children: t.jsx(u, {
                      style: { fontSize: "1.1rem", color: "black" },
                      children: "READ MORE",
                    }),
                  }),
                  t.jsx(o, {
                    container: !0,
                    item: !0,
                    style: { width: "auto" },
                    children: t.jsx(N, {
                      fontSize: "1.5rem",
                      color: "#1B1C1B",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Xt = () => {
    const e = [
        {
          paths: ["/imo", "/app/imo/olm"],
          title: "Empowering AI Contributors with IMO",
          desc: "Imagine a world where open-source AI models thrive, and contributors are rewarded for their work. IMO is making that vision a reality, one token at a time.",
          btn: "Build with us",
          href: "https://arxiv.org/abs/2402.15006",
        },
        {
          paths: ["/app/opml", "news"],
          title: "Want to run a 13B ML Model on Ethereum? ",
          desc: "Unlock the Full Potential of Optimistic Machine Learning (opML). opML is the only practical onchain AI solution that achieves optimal performance without sacrificing security. OAO is powered by opML.",
          btn: "Build with us",
          href: "https://arxiv.org/abs/2401.17555",
        },
      ],
      r = B(),
      { SCREEN_SIZE: i } = G(),
      [s, l] = k.useState(null);
    return (
      n.useEffect(() => {
        const d = e.find((h) => {
          for (let g = 0; g < h.paths.length; g++)
            if (r.pathname.includes(h.paths[g])) return h;
        });
        l(d);
      }, [r]),
      t.jsxs(o, {
        container: !0,
        item: !0,
        direction: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        sx: {
          margin: `${i.EXTRA_SMALL ? "2rem" : "0"} 2rem`,
          width: { sm: "44rem" },
          zIndex: 5,
        },
        children: [
          t.jsx(o, {
            item: !0,
            container: !0,
            children: t.jsx(u, {
              fontFamily: "Syncopate-Bold",
              sx: { width: { xs: "100%", sm: "80%" } },
              style: {
                fontSize: "1.75rem",
                color: "#1b1c1b",
                lineHeight: "2.7rem",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              },
              children: s == null ? void 0 : s.title,
            }),
          }),
          t.jsx(o, {
            item: !0,
            container: !0,
            children: t.jsx(u, {
              fontFamily: "SpaceMono-Regular",
              sx: {
                width: { xs: "100%", sm: "90%" },
                fontSize: {
                  xs: "1.5rem",
                  sm: "1rem",
                  lg: "0.9rem",
                  xl: "0.8rem",
                },
                color: "#1b1c1b",
                lineHeight: "2rem",
                marginBottom: "2rem",
                textTransform: "uppercase",
              },
              children: s == null ? void 0 : s.desc,
            }),
          }),
          t.jsx(o, {
            item: !0,
            container: !0,
            justifyContent: "space-between",
            alignContent: "center",
            sx: {
              width: { xs: "100%", sm: "50%" },
              backgroundColor: "#1B1C1B",
              padding: "0.5rem 2rem",
              color: "#EEE",
              borderRadius: "2rem 0rem",
              ":hover": {
                background: "#0070af",
                color: "#1B1C1B",
                ".go-icon": { color: "#1b1c1b" },
                ".go-icon-box": {},
              },
            },
            children: t.jsxs(C, {
              href: s == null ? void 0 : s.href,
              target: "_blank",
              rel: "noopener noreferrer",
              underline: "none",
              style: { padding: 0, display: "flex" },
              children: [
                t.jsx(o, {
                  item: !0,
                  container: !0,
                  direction: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  style: { width: "auto" },
                  children: t.jsx(o, {
                    item: !0,
                    children: t.jsx(u, {
                      fontFamily: "SpaceMono-Regular",
                      style: { fontSize: "1.2rem", textTransform: "uppercase" },
                      children: "BUILD WITH US",
                    }),
                  }),
                }),
                t.jsx(o, {
                  item: !0,
                  container: !0,
                  justifyContent: "flex-end",
                  alignContent: "center",
                  style: { width: "auto" },
                  children: t.jsx(o, {
                    item: !0,
                    container: !0,
                    justifyContent: "center",
                    alignContent: "center",
                    className: "go-icon-box",
                    style: {
                      backgroundColor: "rgba(#00FBFF,0)",
                      height: "2rem",
                      width: "2rem",
                      marginLeft: "2rem",
                      borderRadius: "0.625rem 0rem",
                    },
                    children: t.jsx(N, {
                      color: "#eee",
                      fontSize: "1.5rem",
                      className: "go-icon",
                    }),
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Jt = () => {
    const e = te(),
      r = B(),
      [i, s] = k.useState("/"),
      [l, d] = k.useState({}),
      { SCREEN_SIZE: h } = G();
    n.useEffect(() => {
      s(r.pathname),
        r.pathname.includes("app/opml")
          ? d({ tabs: "TRUSTED BY", title: "SOMETHING BIG IS COMMING SOON..." })
          : r.pathname.includes("app/points-program")
          ? d({ tabs: "Onchain AI Oracle Now Live On" })
          : d({ tabs: "TRUSTED BY" });
    }, [r.pathname]);
    const g = [
        {
          logo: t.jsx(ht, {
            height: h.EXTRA_SMALL ? "1.5rem" : "0.75rem",
            width: h.EXTRA_SMALL ? "2rem" : "1rem",
          }),
          link: "https://x.com/OxyProtocol",
        },
      ],
      a = pt().filter((p) => p.showInHome === !0),
      f = [
        {
          firstLine: "DEVELOPER",
          secondLine: "DOCUMENTATION ",
          href: "https://ifrices-organization.gitbook.io/oxy-ai/",
        },
        {
          firstLine: "JOIN OUR",
          secondLine: "TELEGRAM",
          href: "https://t.me/oxy_ai_channel",
        },
        {
          firstLine: "FOLLOW US",
          secondLine: "ON TWITTER",
          href: "https://x.com/OxyProtocol",
        },
      ];
    return t.jsxs(o, {
      item: !0,
      container: !0,
      direction: "column",
      flexWrap: "nowrap",
      children: [
        t.jsxs(o, {
          container: !0,
          item: !0,
          justifyContent: "center",
          style: {
            backgroundColor: "rgba(0,250,255,1)",
            paddingBottom: h.EXTRA_SMALL ? "2rem" : "0",
            textTransform: "uppercase",
          },
          children: [
            !r.pathname.includes("imo") &&
              t.jsxs(o, {
                container: !0,
                item: !0,
                justifyContent: "center",
                style: {
                  pointerEvents: "all",
                  position: "relative",
                  background: "#eee",
                  borderRadius: "0 2rem",
                },
                children: [
                  t.jsx(o, {
                    container: !0,
                    item: !0,
                    xs: 12,
                    justifyContent: "center",
                    style: {
                      maxWidth: "var(--app-maxWidth)",
                      position: "relative",
                      padding: h.EXTRA_SMALL
                        ? "2.5rem 3rem 1rem 3rem"
                        : "1.5rem 1rem 1rem 1rem",
                      zIndex: 3,
                    },
                    children: t.jsxs(o, {
                      container: !0,
                      item: !0,
                      alignItems: "center",
                      style: {
                        height: "fit-content",
                        width: "100%",
                        maxWidth: "unset",
                      },
                      children: [
                        t.jsx(o, {
                          container: !0,
                          item: !0,
                          xs: 1,
                          md: 0.5,
                          children: t.jsx(W, {
                            style: {
                              width: "0",
                              height: "0",
                              borderTop: "0.75rem solid transparent",
                              borderBottom: "0.75rem solid transparent",
                              borderLeft: "0.75rem solid #000",
                              borderRight: "0.75rem solid transparent",
                            },
                          }),
                        }),
                        t.jsx(o, {
                          item: !0,
                          style: { marginLeft: "0rem" },
                          children: t.jsx(u, {
                            fontFamily: "Syncopate-Bold",
                            style: {
                              width: "auto",
                              fontSize: "1.75rem",
                              color: "#1B1C1B",
                              lineHeight: "1.4rem",
                            },
                            children: l.tabs,
                          }),
                        }),
                      ],
                    }),
                  }),
                  t.jsx(Nt, {
                    data: { path: r.pathname },
                    sx: {
                      position: "relative",
                      width: "100vw",
                      top: { xs: "0rem", md: "0rem" },
                      height: { xs: "7rem", md: "6rem" },
                      zIndex: 3,
                    },
                  }),
                ],
              }),
            t.jsxs(o, {
              container: !0,
              item: !0,
              xs: 12,
              gap: 5,
              direction: "row",
              justifyContent: "space-between",
              sx: {
                alignItems: { xs: "center", sm: "stretch" },
                position: "relative",
                zIndex: 3,
                margin: r.pathname.includes("imo")
                  ? "0"
                  : { xs: "0rem 0 0 0", sm: "2rem  0 2.5rem 0" },
                padding: r.pathname.includes("imo")
                  ? { xs: "3rem 0 3rem 0 ", sm: "3rem 0 5rem 0 " }
                  : { xs: "1rem", sm: "0 1rem 2.5rem 1rem" },
              },
              style: {
                backgroundImage: `url(${Fe})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                maxWidth: "var(--app-maxWidth)",
                width: "100%",
                zIndex: 2,
              },
              children: [
                t.jsx(o, {
                  item: !0,
                  container: !0,
                  xs: 12,
                  sm: 7,
                  lg: 8,
                  children:
                    i === "/imo" ||
                    i === "/app/imo/olm" ||
                    i.includes("/app/opml") ||
                    i.includes("/news")
                      ? t.jsx(Xt, {})
                      : t.jsx(Ut, { newsList: a }),
                }),
                t.jsx(o, {
                  item: !0,
                  container: !0,
                  xs: 12,
                  sm: 4,
                  lg: 3.5,
                  direction: "column",
                  gap: { sm: 0, md: 4 },
                  children: f.map((p, m) =>
                    t.jsx(
                      o,
                      {
                        container: !0,
                        item: !0,
                        xs: 12,
                        sm: 3,
                        sx: {
                          padding: {
                            xs: "0.5rem 0rem 0.5rem 0rem",
                            md: "0 1rem 0rem 0rem",
                          },
                        },
                        children: t.jsx(Yt, {
                          href: p.href,
                          sx: { width: "100%", textDecoration: "none" },
                          children: t.jsxs(o, {
                            item: !0,
                            container: !0,
                            justifyContent: "space-between",
                            alignContent: "center",
                            sx: {
                              backgroundColor: "#1B1C1B",
                              padding: "2.5rem",
                              height: "7rem",
                              color: "#EEE",
                              borderRadius: "2rem 0rem",
                              ":hover": {
                                background: "#0070af",
                                color: "#eee",
                                ".go-icon": { color: "#EEE" },
                                ".go-icon-box": {
                                  backgroundColor: "#1B1C1B !important",
                                },
                              },
                            },
                            children: [
                              t.jsxs(o, {
                                item: !0,
                                container: !0,
                                direction: "column",
                                gap: 1,
                                justifyContent: "center",
                                alignContent: "center",
                                style: { width: "auto" },
                                children: [
                                  t.jsx(o, {
                                    item: !0,
                                    children: t.jsx(u, {
                                      fontFamily: "SpaceMono-Regular",
                                      fontWeight: 400,
                                      style: { fontSize: "1.2rem" },
                                      children: p.firstLine,
                                    }),
                                  }),
                                  t.jsx(o, {
                                    item: !0,
                                    children: t.jsx(u, {
                                      fontFamily: "SpaceMono-Bold",
                                      fontWeight: "700 !important",
                                      style: { fontSize: "1.2rem" },
                                      children: p.secondLine,
                                    }),
                                  }),
                                ],
                              }),
                              t.jsx(o, {
                                item: !0,
                                container: !0,
                                justifyContent: "flex-end",
                                alignContent: "center",
                                style: { width: "auto" },
                                children: p.href
                                  ? t.jsx(o, {
                                      item: !0,
                                      container: !0,
                                      justifyContent: "center",
                                      alignContent: "center",
                                      className: "go-icon-box",
                                      style: {
                                        backgroundColor: "#00FBFF",
                                        height: "2rem",
                                        width: "2rem",
                                        marginLeft: "2rem",
                                        borderRadius: "0.625rem 0rem",
                                      },
                                      children: t.jsx(N, {
                                        color: "#1B1C1B",
                                        fontSize: "1.5rem",
                                        className: "go-icon",
                                      }),
                                    })
                                  : t.jsx(o, {
                                      item: !0,
                                      container: !0,
                                      justifyContent: "center",
                                      alignContent: "center",
                                      className: "go-icon-box",
                                      style: {
                                        backgroundColor: "#00FBFF",
                                        height: "2rem",
                                        width: "2rem",
                                        marginLeft: "2rem",
                                        borderRadius: "0.625rem 0rem",
                                      },
                                      children: t.jsx(N, {
                                        color: "#1B1C1B",
                                        fontSize: "1.5rem",
                                        className: "go-icon",
                                      }),
                                    }),
                              }),
                            ],
                          }),
                        }),
                      },
                      m
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        t.jsx(o, {
          item: !0,
          container: !0,
          direction: "row",
          style: {
            backgroundColor: "black",
            zIndex: 3,
            marginTop: h.EXTRA_SMALL ? "0" : "-3rem",
            borderRadius: "3rem 3rem 0 0 ",
          },
          children: t.jsxs(o, {
            item: !0,
            sx: {
              padding: { xs: "1rem 2rem 1rem 2rem", md: "1rem 2rem 1rem 1rem" },
            },
            container: !0,
            style: {
              backgroundColor: "transparent",
              borderRadius: "0 0 1.5625rem 1.5625rem",
            },
            flexWrap: "nowrap",
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
            children: [
              t.jsxs(o, {
                item: !0,
                container: !0,
                direction: "row",
                gap: 1,
                children: [
                  t.jsx(o, {
                    item: !0,
                    style: { margin: "0 1rem" },
                    children: t.jsx(W, {
                      style: {
                        width: h.EXTRA_SMALL ? "2.3rem" : "1.7rem",
                        height: h.EXTRA_SMALL ? "2.3rem" : "1.7rem",
                        border: "1px solid #EEE",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: t.jsx(W, {
                        style: {
                          width: h.EXTRA_SMALL ? "1.3rem" : "0.8rem",
                          height: h.EXTRA_SMALL ? "1.3rem" : "0.8rem",
                          border: "1px solid #EEE",
                          borderRadius: "50%",
                        },
                      }),
                    }),
                  }),
                  t.jsx(o, {
                    item: !0,
                    alignContent: "center",
                    children: t.jsx(u, {
                      fontFamily: "SpaceMono-Regular",
                      style: {
                        textAlign: "center",
                        fontSize: h.EXTRA_SMALL ? "1.2rem" : "0.8rem",
                      },
                      color: "#EEE",
                      children: "© 2024 OXY.",
                    }),
                  }),
                  t.jsx(o, {
                    item: !0,
                    alignContent: "center",
                    sx: { ml: { xs: 0, sm: 4 } },
                    children: t.jsx(C, {
                      component: "a",
                      href: "https://ifrices-organization.gitbook.io/oxy-ai/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      color: "inherit",
                      underline: "hover",
                      sx: { width: "auto" },
                      children: t.jsx(u, {
                        fontFamily: "SpaceMono-Regular",
                        sx: {
                          textAlign: "center",
                          fontSize: { xs: "1.1rem", sm: "0.8rem" },
                        },
                        color: "#EEE",
                        children: "TERMS OF SERVICE",
                      }),
                    }),
                  }),
                ],
              }),
              t.jsx(o, {
                item: !0,
                container: !0,
                direction: "row",
                gap: { xs: 1, sm: 0 },
                justifyContent: "flex-end",
                children: g.map((p, m) =>
                  t.jsx(
                    C,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: h.EXTRA_SMALL ? "0rem" : "1.2rem",
                        color: e.palette.primary.main,
                        ":hover": { color: e.palette.primary.contrastText },
                      },
                      href: p.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: p.logo,
                    },
                    m
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  qt = "/asset/png/menu_orapoint-B4hB4DBs.png",
  Kt = "/asset/png/menu_staking-5__5FGRq.png",
  $t = "/asset/png/menu_tora-C6HQ-tPx.png",
  e0 = "/asset/png/menu_oao-YmmXawzT.png",
  t0 = "/asset/png/menu_imo-CdSWiDcV.png",
  r0 =
    "data:image/png;base64,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",
  i0 = Z(
    t.jsx("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
    "Menu"
  ),
  s0 =
    "data:image/svg+xml,%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20width='469.29'%20height='157.71'%20viewBox='0%200%20469.29%20157.71'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%2300f6ff;%20}%20%3c/style%3e%3c/defs%3e%3cg%3e%3cpath%20class='cls-1'%20d='M23.2,134.05A75.78,75.78,0,0,1,0,78.49,75.69,75.69,0,0,1,23.2,23.2,75.54,75.54,0,0,1,78.85,0,75.64,75.64,0,0,1,134.51,23.2,75.78,75.78,0,0,1,157.7,78.86a75.8,75.8,0,0,1-23.19,55.65A75.78,75.78,0,0,1,78.85,157.7,75.7,75.7,0,0,1,23.2,134.05Zm83.48-27.83a37.63,37.63,0,0,0,11.55-27.83,37.61,37.61,0,0,0-11.55-27.83A37.66,37.66,0,0,0,78.85,39,37.58,37.58,0,0,0,51,51,37.6,37.6,0,0,0,39.48,78.86,37.61,37.61,0,0,0,51,106.68a38.21,38.21,0,0,0,55.19-.46Z'/%3e%3cpath%20class='cls-1'%20d='M289.93,23.2a78.38,78.38,0,0,0-111.31,0,75.71,75.71,0,0,0-23.19,55.66h0V157h39.24V78.49a37.63,37.63,0,0,1,11.54-27.83,39,39,0,0,1,55.17-.5l.49.5a37.6,37.6,0,0,1,11.55,27.83h39.24A75.6,75.6,0,0,0,289.93,23.2Z'/%3e%3cpath%20class='cls-1'%20d='M469.1,78.49a75.86,75.86,0,0,0-23.19-55.66A78.48,78.48,0,0,0,335,23.2,75.9,75.9,0,0,0,312.1,78.86,75.93,75.93,0,0,0,335,134.51a75.78,75.78,0,0,0,55.66,23.19V117.77a37.6,37.6,0,0,1-27.83-11.55,37.67,37.67,0,0,1-11.55-27.83,37.65,37.65,0,0,1,11.55-27.83A39,39,0,0,1,418,50.07l.5.49A37.75,37.75,0,0,1,430,78.39V157h39.29V78.49Z'/%3e%3c/g%3e%3c/svg%3e",
  o0 = ({
    show: e,
    onMouseEnter: r,
    onMouseLeave: i,
    children: s,
    data: l,
  }) => {
    const d = n.useRef(null);
    return t.jsx(o, {
      onMouseEnter: () => {
        r(null, s);
      },
      onMouseLeave: () => {
        i();
      },
      onClick: () => {
        i();
      },
      ref: d,
      container: !0,
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      sx: {
        position: "fixed",
        width: "auto",
        left: `${l.left}px`,
        top: `${l.top}px`,
        background: "linear-gradient(180deg, black, rgba(125,130,125,0.8))",
        borderRadius: "0 0 1rem 1rem",
        zIndex: 9999,
        transform: "scale(1)",
        transition: "clip-path 0.4s ease-in-out,left 0.4s ease-in-out",
        clipPath: e ? "inset(0 0 0 0)" : "inset(0 100% 100% 0)",
        willChange: "clip-path",
      },
      children: s,
    });
  },
  n0 = Z(
    t.jsx("path", {
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
    }),
    "ArrowBack"
  ),
  a0 = Z(
    t.jsx("path", {
      d: "m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z",
    }),
    "East"
  ),
  Ae = ({ item: e, index: r }) => {
    let i = !1;
    i = location.pathname === e.link;
    const s = n.useRef(null);
    return t.jsx(C, {
      component: e.link ? S : "a",
      to: e.link ? e.link : void 0,
      href: e.href ? e.href : void 0,
      target: e.target ? e.target : void 0,
      rel: e.href ? "noopener noreferrer" : void 0,
      underline: "none",
      sx: {
        borderRadius: "1rem 0 1rem 0",
        transition: "transform 0.3s ease",
        display: "flex",
        color: i ? "#eee" : "#000",
        background: i ? "#0070AF" : "#00FBFF",
        "& .title": {
          fontSize: "0.8rem",
          transition: "transform 0.3s ease, text-shadow 0.3s ease",
          textShadow: "0 0 0px rgba(0, 0, 0, 0)",
        },
        ":hover": {
          boxShadow: "0 4px 16px rgba(0, 255, 255, 0.45)",
          transform: "scale(1.04) ",
          "& .title": { textShadow: "0px 0px 8px rgba(255, 255, 255, 1)" },
        },
        willChange: "transform",
      },
      children:
        e.direction == "left"
          ? t.jsx(
              K.div,
              {
                ref: s,
                initial: { opacity: 0, x: 10 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 0.2 * r },
                children: t.jsxs(o, {
                  container: !0,
                  xs: "auto",
                  item: !0,
                  padding: 1,
                  direction: "column",
                  justifyContent: "space-between",
                  style: {
                    background: "inherit",
                    borderRadius: "1rem 0 1rem 0",
                    maxWidth: "16rem",
                    cursor: "pointer",
                  },
                  children: [
                    t.jsx(o, {
                      item: !0,
                      container: !0,
                      sx: { minHeight: "4rem" },
                      children: n.useMemo(
                        () =>
                          t.jsx("img", {
                            src: e.img,
                            style: { display: "block", width: "100%" },
                          }),
                        [e.img]
                      ),
                    }),
                    t.jsxs(o, {
                      item: !0,
                      container: !0,
                      direction: "column",
                      children: [
                        t.jsxs(o, {
                          children: [
                            t.jsx(u, {
                              className: "title",
                              style: {
                                display: "inline-block",
                                fontFamily: "Poppins-Bold",
                                fontSize: "0.8rem",
                                whiteSpace: "nowrap",
                              },
                              children: e.title,
                            }),
                            t.jsx(u, {
                              style: {
                                display: "inline-block",
                                marginLeft: "0.25rem",
                                fontFamily: "Poppins-Regular",
                                fontSize: "0.75rem",
                                whiteSpace: "nowrap",
                                textTransform: "uppercase",
                              },
                              children: e.subTitle,
                            }),
                          ],
                        }),
                        t.jsx(o, {
                          children: t.jsx(u, {
                            sx: {
                              fontFamily: "Poppins-Regular",
                              fontSize: { sm: "0.55rem" },
                              textTransform: "uppercase",
                            },
                            children: e.desc,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              },
              e.img
            )
          : t.jsx(
              K.div,
              {
                ref: s,
                initial: { opacity: 0, x: 10 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.3, delay: 0.2 * r },
                children: t.jsxs(o, {
                  container: !0,
                  gap: 1,
                  padding: 1,
                  direction: "row",
                  alignItems: "center",
                  sx: { cursor: "pointer" },
                  children: [
                    t.jsx(o, {
                      item: !0,
                      container: !0,
                      xs: "auto",
                      sx: { height: "3rem" },
                      children: n.useMemo(
                        () =>
                          t.jsx("img", {
                            src: e.img,
                            style: {
                              borderRadius: "1rem 0 0rem 0",
                              display: "block",
                              objectFit: "cover",
                              height: "3.0rem",
                              width: "3.0rem",
                            },
                          }),
                        [e.img]
                      ),
                    }),
                    t.jsxs(o, {
                      item: !0,
                      container: !0,
                      direction: "column",
                      justifyContent: "space-between",
                      xs: !0,
                      children: [
                        t.jsxs(o, {
                          container: !0,
                          alignItems: "center",
                          children: [
                            t.jsx(u, {
                              className: "title",
                              style: {
                                display: "inline-block",
                                fontFamily: "Poppins-Bold",
                                fontSize: "0.8rem",
                              },
                              children: e.title,
                            }),
                            t.jsx(u, {
                              style: {
                                display: "inline-block",
                                marginLeft: "0.25rem",
                                fontFamily: "Poppins-Regular",
                                fontSize: "0.75rem",
                                whiteSpace: "nowrap",
                                textTransform: "uppercase",
                              },
                              children: e.subTitle,
                            }),
                          ],
                        }),
                        t.jsx(o, {
                          children: t.jsx(u, {
                            style: {
                              textAlign: "left",
                              fontFamily: "Poppins-Regular",
                              fontSize: "0.6rem",
                              textTransform: "uppercase",
                            },
                            children: e.desc,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              },
              e.img
            ),
    });
  },
  je = ({ items: e }) =>
    t.jsxs(o, {
      container: !0,
      direction: "row",
      justifyContent: "center",
      alignItems: "stretch",
      gap: 2,
      sx: { padding: "1rem" },
      children: [
        e
          .filter((r) => r.direction === "left")
          .map((r, i) => t.jsx(Ae, { item: r, index: i }, i)),
        t.jsx(o, {
          container: !0,
          xs: "auto",
          item: !0,
          gap: 1,
          direction: "column",
          justifyContent: "space-between",
          style: { maxWidth: "20rem" },
          children: e
            .filter((r) => r.direction === "right")
            .map((r, i) => t.jsx(Ae, { item: r, index: i }, i)),
        }),
      ],
    }),
  l0 = () => {
    const e = B();
    return (
      n.useEffect(() => {}, [e]),
      t.jsxs(t.Fragment, {
        children: [
          e.pathname.includes("/app/stake") ||
            (e.pathname.includes("/app/tasks") &&
              t.jsx(o, {
                item: !0,
                container: !0,
                justifyContent: "center",
                sx: {
                  minHeight: "3.5rem",
                  maxHeight: "3.5rem",
                  backgroundColor: "#00FBFF",
                  zIndex: 3,
                  padding: { xs: "1rem", sm: "1.0rem 2.5rem" },
                },
                children: t.jsx(o, {
                  item: !0,
                  children: t.jsx(u, {
                    sx: {
                      fontFamily: "Poppins-Bold",
                      fontSize: { xs: "1.3rem", sm: "1.0rem" },
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      textTransform: "uppercase",
                    },
                    children: "ORA Points Program Season 1 ended.",
                  }),
                }),
              })),
          e.pathname.includes("/imo") &&
            !e.pathname.includes("/app/imo") &&
            t.jsx(o, {
              item: !0,
              container: !0,
              justifyContent: "center",
              sx: {
                minHeight: "3.5rem",
                maxHeight: "3.5rem",
                backgroundColor: "#00FBFF",
                zIndex: 3,
                padding: { xs: "1rem", sm: "1.0rem 2.5rem" },
              },
              children: t.jsx(C, {
                component: S,
                to: "/app/swap",
                sx: {
                  color: "#000",
                  justifyContent: "center",
                  display: "flex",
                  width: "100%",
                  textAlign: "center",
                },
                children: t.jsxs(u, {
                  sx: {
                    fontFamily: "Poppins-Bold",
                    fontSize: { xs: "1.3rem", sm: "1.0rem" },
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                  },
                  children: [
                    "Trade IMO Tokens",
                    t.jsx(u, {
                      component: "span",
                      sx: {
                        ml: "5px",
                        fontFamily: "Poppins-Regular",
                        fontSize: { xs: "1.3rem", sm: "1.0rem" },
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "underline",
                      },
                      children: "OXY",
                    }),
                  ],
                }),
              }),
            }),
        ],
      })
    );
  },
  c0 = () => {
    const { SCREEN_SIZE: e } = G(),
      r = te(),
      { status: i, address: s, chain: l, addresses: d } = nt(),
      {
        authUrlGetter: h,
        authLogout: g,
        authStatusGetter: a,
        authUrlFetcher: f,
        setIsUserConnectedWallet: p,
      } = at(),
      [m, w] = n.useState(!1),
      [Q, A] = n.useState([]),
      [L, b] = n.useState(null),
      {
        resetUserStats: Y,
        resetPointHistory: M,
        dashboardStatusGetter: F,
      } = mt(),
      { resetCompletionStatus: T } = xt(),
      {
        resetPoolsWithdrawList: Te,
        resetPoolsStakedList: He,
        stakeStatusGetter: re,
      } = ft(),
      j = B(),
      { disconnect: ie } = lt(),
      [Oe, U] = n.useState(!1),
      [_e, We] = n.useState({ left: 200, top: 0 }),
      [De, Ve] = n.useState(null);
    n.useEffect(() => {
      (i === "disconnected" || s) && !a.isLoggedIn && T();
    }, [i, a, s]),
      n.useEffect(() => {
        (i === "disconnected" || s) && !a.isLoggedIn && Y();
      }, [i, a, s, F.isGettingUserStats]),
      n.useEffect(() => {
        (i === "disconnected" || s) && !a.isLoggedIn && M();
      }, [i, a, s, F.isGettingPointHistory]),
      n.useEffect(() => {
        (i === "disconnected" || s) && !a.isLoggedIn && Te();
      }, [i, a, s, re.gettingPoolsWithdrawList]),
      n.useEffect(() => {
        (i === "disconnected" || s) && !a.isLoggedIn && He();
      }, [i, a, s, re.gettingPoolsStakedList]),
      n.useEffect(() => {
        i === "connected" && !a.isLoggedIn && a.isUserConnectedWallet && p(!1);
      }, [i, j, a]),
      n.useEffect(() => {
        i === "disconnected" && (ie(), g());
      }, [i, s, l]);
    const Ne = () => {
      ie(), g();
    };
    n.useEffect(() => {
      i === "connected" &&
        ((d && d.length > 1) || ((!d || d.length === 0) && Ne()));
    }, [d]),
      n.useEffect(() => {
        const c = ct("OraAuth");
        c &&
          c.user.walletAddress &&
          c.user.walletAddress.toLowerCase() !==
            (s == null ? void 0 : s.toLowerCase()) &&
          g();
      }, [i, s]),
      n.useEffect(() => {
        h && (window.location.href = h);
      }, [h]);
    const Pe = (c, x) => {
        c.stopPropagation(),
          "children" in x
            ? setTimeout(() => {
                w(!0),
                  k.isValidElement(x.children) &&
                    x.children.props.items &&
                    A(x.children.props.items);
              }, 200)
            : (w(!1), b(null));
      },
      Ge = () => {
        b(null), w(!1);
      },
      se = [
        {
          title: "DASHBOARD",
          desc: "Track your points and staked assets",
          img: qt,
          link: "/app/tasks/dashboard",
          direction: "left",
        },
        {
          title: "STAKING",
          desc: "STAKE TO SECURE THE ORA NETWORK",
          img: Kt,
          link: "/app/stake",
          direction: "right",
        },
        {
          title: "NEWS",
          desc: "LATEST NEWS AND UPDATES FROM ORA",
          img: r0,
          link: "/news",
          direction: "right",
        },
      ],
      oe = [
        {
          title: "AI ORACLE",
          subTitle: "",
          desc: "BRING DECENTRALIZED AND VERIFIABLE AI INFERENCE TO ANY BLOCKCHAIN",
          img: e0,
          link: "/app/opml/",
          direction: "left",
        },
        {
          title: "IMO",
          subTitle: "",
          desc: "INITIAL MODEL OFFERING TOKENIZING AI MODELS",
          img: t0,
          link: "/imo",
          direction: "right",
        },
        {
          title: "Docs",
          desc: "Read our developer documentation",
          img: $t,
          link: "https://ifrices-organization.gitbook.io/oxy-ai//",
          direction: "right",
        },
      ],
      H = [
        {
          title: "products",
          children: t.jsx(je, { items: oe }),
          activeRoute: [...oe.map((c) => c.link)],
        },
        {
          title: "DOCUMENTATION",
          href: "https://ifrices-organization.gitbook.io/oxy-ai/",
          target: "_blank",
        },
      ],
      X = k.useRef(null),
      [Ze, Qe] = n.useState(0),
      ne = (c, x) => {
        if (x) {
          if (c) {
            const E = c.currentTarget.getBoundingClientRect();
            We({ left: E.left, top: E.top + E.height });
          }
          Ve(x), U(!0);
        } else U(!1);
      },
      ae = () => {
        U(!1);
      },
      O = (c, x) => {
        let v = j.pathname === c;
        return (v = x ? x.includes(j.pathname) : v), v;
      },
      Ye = ({ title: c, children: x, to: v, activeRoute: E }) =>
        t.jsx(o, {
          sx: {
            cursor: "default",
            padding: "0.5rem 0.8rem",
            color: O(v, E) ? "#00FBFF" : "#eee",
            ":hover": {
              color: O(v, E) ? "#00FBFF" : "#fff",
              textShadow:
                "0px 0px 10px rgba(0, 251, 255, 1),0px 0px 15px rgba(0, 251, 255, 1)",
            },
          },
          onMouseEnter: (Ue) => {
            ne(Ue, x);
          },
          onMouseLeave: ae,
          onClick: () => {
            (v === "/app/stake" ||
              v === "/app/tasks/dashboard" ||
              v === "/app/tasks") &&
              i === "connected" &&
              !a.isLoggedIn &&
              f();
          },
          children: t.jsx(
            u,
            {
              sx: {
                color: "inherit",
                fontFamily: "Poppins-Medium",
                fontWeight: 700,
                fontSize: { xs: "0.8rem" },
                letterSpacing: "2px",
                lineHeight: "1.2rem",
                whiteSpace: "nowrap",
              },
              children: c,
            },
            c
          ),
        });
    return (
      n.useEffect(() => {
        const c = () => {
          X.current && Qe(X.current.offsetHeight);
        };
        return (
          c(),
          window.addEventListener("resize", c),
          () => {
            window.removeEventListener("resize", c);
          }
        );
      }, []),
      t.jsxs(o, {
        container: !0,
        id: "core-content",
        sx: {
          padding: { xs: 0 },
          width: "100%",
          zIndex: 3,
          height: Ze,
          background: "rgb(0, 0, 0)",
        },
        children: [
          t.jsx(Rt, {}),
          t.jsxs(Et, {
            ref: X,
            component: "nav",
            sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
            children: [
              t.jsx(l0, {}),
              t.jsxs(o, {
                item: !0,
                container: !0,
                alignItems: "center",
                sx: {
                  textTransform: "uppercase",
                  padding: e.EXTRA_SMALL ? "1.0rem 2.5rem" : "0rem 1rem",
                },
                children: [
                  t.jsx(o, {
                    item: !0,
                    xs: 2,
                    sm: 1.2,
                    lg: 1.5,
                    xl: 1.2,
                    children: t.jsx(C, {
                      color: r.palette.primary.main,
                      component: S,
                      to: { pathname: "/" },
                      children: t.jsx("img", {
                        alt: "ora logo",
                        src: "../asset/logo.png",
                        style: {
                          width: e.EXTRA_SMALL ? "7rem" : "6rem",
                          height: e.EXTRA_SMALL ? "7rem" : "6rem",
                          margin: "-0.5rem 0 -1rem 0",
                        },
                      }),
                    }),
                  }),
                  t.jsx(o, {
                    item: !0,
                    container: !0,
                    sx: { display: { xs: "none", sm: "flex" } },
                    justifyContent: "flex-start",
                    wrap: "nowrap",
                    gap: { sm: 0.1, md: 3 },
                    sm: 6,
                    lg: 7,
                    children: H.map((c, x) =>
                      t.jsx(
                        n.Fragment,
                        {
                          children: t.jsx(C, {
                            component: c.link ? S : "a",
                            to: c.link,
                            href: c.href,
                            target: c.target,
                            rel: c.href ? "noopener noreferrer" : void 0,
                            color: "inherit",
                            underline: "none",
                            children: t.jsx(
                              Ye,
                              {
                                children: c.children,
                                title: c.title,
                                to: c.link,
                                activeRoute: c.activeRoute,
                              },
                              c.title
                            ),
                          }),
                        },
                        x
                      )
                    ),
                  }),
                  t.jsx(o, {
                    item: !0,
                    container: !0,
                    xs: 9,
                    sm: 4.8,
                    lg: 3.5,
                    xl: 3.8,
                    justifyContent: "flex-end",
                    children:
                      j.pathname === "/" ||
                      j.pathname === "/home" ||
                      j.pathname === "/imo"
                        ? !e.EXTRA_SMALL &&
                          t.jsx(yt, {
                            sx: {
                              width: "11.1rem",
                              height: "2.8rem",
                              color: "black",
                              padding: "0.5rem 1.3rem",
                              borderRadius: "1rem 0rem",
                              background: "#00FBFF",
                              ":hover": { backgroundColor: "#00FBFFee" },
                            },
                            children: t.jsx(C, {
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000(buy)",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              underline: "none",
                              children: t.jsx(u, {
                                style: {
                                  fontFamily: "Poppins-Bold",
                                  fontSize: "0.8rem",
                                  color: "black",
                                  letterSpacing: "0.0175rem",
                                  whiteSpace: "nowrap",
                                  lineHeight: "2rem",
                                },
                                children: "BUY $OXY",
                              }),
                            }),
                          })
                        : t.jsx(ut, {}),
                  }),
                  t.jsx(o, {
                    item: !0,
                    xs: 1,
                    sx: { display: { xs: "flex", sm: "none" } },
                    children: t.jsx(bt, {
                      "aria-label": "open drawer",
                      edge: "end",
                      onClick: (c) => {
                        A(H), b(c.currentTarget);
                      },
                      sx: { mr: 0, color: "#00FBFF", display: { sm: "none" } },
                      children: t.jsx(i0, { sx: { fontSize: "3rem" } }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          t.jsx(o0, {
            show: Oe,
            onMouseEnter: ne,
            onMouseLeave: ae,
            children: De,
            data: _e,
          }),
          t.jsxs(St, {
            anchorEl: L,
            open: !!L,
            onClose: Ge,
            sx: {
              display: { xs: "block", sm: "none" },
              "& .MuiPaper-root": {
                width: "90%",
                maxWidth: "90%",
                border: "2px solid #00FBFF",
                borderRadius: "0rem 3rem 0rem 3rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                backdropFilter: "blur(5px)",
              },
              "& .MuiList-root": { padding: "0" },
            },
            children: [
              m &&
                t.jsxs(o, {
                  container: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  onClick: () => {
                    w(!1), A(H);
                  },
                  sx: {
                    color: "black",
                    background: "#00fbff",
                    width: "10rem",
                    margin: "0rem 2rem -1rem 0rem",
                    borderRadius: "0 0 2rem 0rem",
                    cursor: "pointer",
                    ":hover": { background: "#00F6FFAA", color: "white" },
                  },
                  children: [
                    t.jsx(n0, {}),
                    t.jsx(u, {
                      style: {
                        fontSize: "1.25rem",
                        padding: "0.5rem",
                        fontFamily: "Poppins-Bold",
                        fontWeight: 700,
                        lineHeight: "2rem",
                      },
                      children: "BACK",
                    }),
                  ],
                }),
              Q.map((c, x) => [
                t.jsx(
                  Ot,
                  {
                    onClick: (v) => Pe(v, c),
                    sx: {
                      display: "flex",
                      padding: "0",
                      justifyContent: "center",
                      background: O(c.link, c.activeRoute)
                        ? "rgba(0, 251, 255, 0.50)"
                        : "none",
                      ":hover": {
                        background: O(c.link, c.activeRoute)
                          ? "rgba(0, 251, 255, 0.50)"
                          : "none",
                      },
                    },
                    children: t.jsxs(C, {
                      component: c.link ? S : "a",
                      to: c.link,
                      href: c.href,
                      target: c.target,
                      rel: c.href ? "noopener noreferrer" : void 0,
                      color: "inherit",
                      underline: "none",
                      style: { width: "100%", textAlign: "center" },
                      children: [
                        t.jsx(u, {
                          sx: {
                            textTransform: "uppercase",
                            fontSize: "1.4rem",
                            lineHeight: "6rem",
                          },
                          children: c.title,
                        }),
                        c.children &&
                          t.jsx(a0, {
                            style: {
                              position: "absolute",
                              width: "2.2rem",
                              height: "2.2rem",
                              right: "3rem",
                              top: "2rem",
                            },
                          }),
                      ],
                    }),
                  },
                  x
                ),
                t.jsx(o, {
                  style: {
                    width: "90%",
                    margin: "auto",
                    borderBottom:
                      x != H.length - 1 ? "1px solid #00FBFF" : "none",
                  },
                }),
              ]),
            ],
          }),
        ],
      })
    );
  },
  d0 = k.memo(c0),
  Ee = K(o),
  k0 = () => {
    const e = B(),
      [r, i] = k.useState("/"),
      [s, l] = n.useState(!["/", "/home"].includes(e.pathname));
    return (
      te(),
      n.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []),
      n.useEffect(() => {
        i(e.pathname), l(!["/", "/home"].includes(e.pathname));
      }, [e.pathname]),
      t.jsxs(o, {
        container: !0,
        direction: "column",
        sx: {
          height: "auto",
          width: "100vw",
          minHeight: "100vh",
          minWidth: "100vw",
        },
        children: [
          t.jsx(d0, {}),
          t.jsx(o, {
            container: !0,
            sx: {
              zIndex: 1,
              flex: 1,
              backgroundColor: "black",
              height: "100%",
              borderRadius: "0 0 1.5625rem 1.5625rem",
            },
            children: t.jsx(ce, {
              children: t.jsx(Ee, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 1 },
                direction: "column",
                container: !0,
                item: !0,
                alignItems: "center",
                flexWrap: "nowrap",
                children: t.jsx(o, {
                  item: !0,
                  container: !0,
                  alignContent: "center",
                  xs: 12,
                  md: 10,
                  lg: 10,
                  style: {
                    zIndex: 0,
                    height: "auto",
                    flex: 1,
                    maxWidth:
                      e.pathname === "/" ||
                      e.pathname.includes("/imo") ||
                      e.pathname.includes("/app/tasks/dashboard")
                        ? "unset"
                        : "var(--app-maxWidth)",
                  },
                  children: t.jsx(dt, {}),
                }),
              }),
            }),
          }),
          !e.pathname.includes("/app/swap") &&
            t.jsx(ce, {
              children: t.jsx(Ee, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 2 },
                style: { zIndex: 1 },
                children: t.jsx(gt, { children: t.jsx(Jt, {}) }),
              }),
            }),
        ],
      })
    );
  };
export { k0 as default };
