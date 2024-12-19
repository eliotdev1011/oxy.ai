import {
  u as p,
  b as h,
  a_ as g,
  aK as f,
  j as e,
  G as t,
  T as i,
  a4 as j,
  ae as y,
  L as m,
  a$ as F,
} from "./index-Dg322SbI.js";
import { O as I } from "./index-B90Cq4OI.js";
import { T } from "./TitleBanner-Bz2_LQgG.js";
import { G as E } from "./index-BBZuYqjW.js";
(function () {
  try {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      o = new n.Error().stack;
    o &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[o] = "7f64982c-ff9c-45d4-8289-e1449e177d8f"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-7f64982c-ff9c-45d4-8289-e1449e177d8f"));
  } catch {}
})();
const x =
    "data:image/svg+xml,%3csvg%20width='38'%20height='39'%20viewBox='0%200%2038%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.33325%2030.4133V8.24662C6.33325%207.40677%206.66688%206.60132%207.26075%206.00745C7.85461%205.41359%208.66007%205.07996%209.49992%205.07996H30.7166C30.9685%205.07996%2031.2102%205.18005%2031.3883%205.3582C31.5665%205.53636%2031.6666%205.778%2031.6666%206.02996V26.7938'%20stroke='%2300F6FF'%20stroke-width='2.875'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.6667%205.07996V17.7466L16.6251%2015.2133L20.5834%2017.7466V5.07996'%20stroke='%2300F6FF'%20stroke-width='2.875'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%2027.2466H31.6667'%20stroke='%2300F6FF'%20stroke-width='2.875'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%2033.58H31.6667'%20stroke='%2300F6FF'%20stroke-width='2.875'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.49992%2033.58C8.66007%2033.58%207.85461%2033.2463%207.26075%2032.6525C6.66688%2032.0586%206.33325%2031.2532%206.33325%2030.4133C6.33325%2029.5735%206.66688%2028.768%207.26075%2028.1741C7.85461%2027.5803%208.66007%2027.2466%209.49992%2027.2466'%20stroke='%2300F6FF'%20stroke-width='2.875'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  k = "/asset/svg/tora_img1-Dr1vYVI7.svg",
  C = "/asset/svg/tora_img2-CdQuhh8o.svg",
  R = () => {
    const n = p(),
      o = h(g, n);
    return { latestReleaseFetcher: () => o.latestRelease() };
  },
  b = [
    {
      icon: x,
      title: "Guide for the desktop app",
      link: "https://docs.oxyaiprotocol.org/",
    },
    {
      icon: x,
      title: "Guide for the CLI",
      link: "https://docs.oxyaiprotocol.org/s",
    },
  ],
  c = ({ img: n, title: o, desc: s, link: l }) =>
    e.jsx(m, {
      component: "a",
      href: l,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "#eee",
      underline: "none",
      onClick: () => {
        F.event({ category: "Tora", action: "Tora download", label: o });
      },
      sx: {
        display: "flex",
        width: "100%",
        borderRadius: "1rem",
        padding: "0.0rem",
        textAlign: "left",
        pointerEvents: l ? "auto" : "none",
      },
      children: e.jsxs(t, {
        container: !0,
        flexWrap: "nowrap",
        alignItems: "flex-start",
        gap: 2,
        sx: {
          color: "white",
          padding: "0.25rem 0.5rem",
          borderRadius: "0.5rem",
          ":hover": { background: "#1b1c1b" },
        },
        children: [
          e.jsx(t, {
            item: !0,
            xs: 2,
            sx: { height: { xs: "2.8rem", sm: "1.75rem" } },
            children: e.jsx("img", { src: n, style: { height: "100%" } }),
          }),
          e.jsxs(t, {
            item: !0,
            xs: 8,
            children: [
              e.jsx(i, {
                sx: {
                  fontFamily: "Poppins-Regular",
                  fontSize: { xs: "1.25rem", sm: "0.8rem" },
                  lineHeight: { xs: "1.5rem", sm: "1rem" },
                  textTransform: "uppercase",
                },
                children: o,
              }),
              e.jsx(i, {
                sx: {
                  color: "grey",
                  fontFamily: "Poppins-Regular",
                  fontSize: { xs: "1rem", sm: "0.6rem" },
                  lineHeight: { xs: "1.5rem", sm: "1.2rem" },
                  textTransform: "uppercase",
                },
                children: l ? s : "coming soon",
              }),
            ],
          }),
        ],
      }),
    }),
  w = ({ icon: n, title: o, link: s }) =>
    e.jsx(m, {
      component: "a",
      href: s,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "#eee",
      underline: "none",
      sx: {
        display: "flex",
        width: "100%",
        borderRadius: "1rem",
        padding: "0.5rem",
        pointerEvents: s ? "all" : "none",
        textAlign: "center",
        ":hover": { color: "#00FBFFAA" },
      },
      children: e.jsxs(t, {
        item: !0,
        container: !0,
        justifyContent: "space-between",
        alignItems: "center",
        children: [
          e.jsxs(t, {
            item: !0,
            container: !0,
            justifyContent: "flex-start",
            alignItems: "center",
            xs: 8,
            children: [
              e.jsx("img", {
                style: { width: "1.5rem", marginRight: "0.5rem" },
                src: n,
                alt: "",
              }),
              e.jsx(i, {
                style: {
                  color: "inherit",
                  fontSize: "1.0rem",
                  fontFamily: "Syncopate-Bold",
                  fontWeight: 700,
                  lineHeight: "1rem",
                },
                children: o,
              }),
            ],
          }),
          e.jsx(t, {
            item: !0,
            container: !0,
            justifyContent: "center",
            alignContent: "center",
            sx: {
              backgroundColor: "#00FBFF",
              color: "#000",
              height: "2rem",
              width: "2rem",
              marginLeft: "2rem",
              borderRadius: "0.625rem 0rem",
              ":hover": { backgroundColor: "#00FBFFAA", color: "#eee" },
            },
            children: e.jsx(E, {
              color: "inherit",
              fontSize: "1.5rem",
              className: "go-icon",
            }),
          }),
        ],
      }),
    }),
  v = () => {
    var l, d, u;
    const { latestReleaseFetcher: n } = R(),
      { data: o } = f({
        queryKey: ["redux.module.tora.latestRelease"],
        queryFn: () => n(),
      }),
      s = o;
    return e.jsxs(t, {
      container: !0,
      justifyContent: "center",
      style: { height: "auto", padding: "0 1rem" },
      sx: { marginTop: { xs: "10rem", md: "0rem" } },
      children: [
        e.jsx(I, {
          modelIdx: 0,
          showLoading: !1,
          modelName: "imo.glb",
          style: { position: "fixed", zIndex: 0, left: 0, top: 0 },
        }),
        e.jsxs(t, {
          container: !0,
          item: !0,
          justifyContent: "center",
          style: { position: "relative", height: "100%" },
          children: [
            e.jsx(T, {
              title: "Tora",
              children: [
                e.jsx(
                  i,
                  { className: "primary", children: "TYPESCRIPT ORA CLIENT" },
                  0
                ),
                e.jsx(
                  i,
                  {
                    className: "secondary",
                    children: `A PERMISSIONLESS ORA NODE 
 FOR THE DECENTRALIZED ORA NETWORK`,
                  },
                  1
                ),
              ],
            }),
            e.jsx(j.div, {
              initial: { opacity: 0, transform: "translateY(1rem)" },
              animate: { opacity: 1, transform: "translateY(0rem)" },
              transition: { delay: 0.2, duration: 0.2 },
              children: e.jsxs(t, {
                item: !0,
                container: !0,
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                sx: {
                  position: "relative",
                  backgroundColor: "#00F6FF",
                  padding: { xs: "2rem", sm: "1rem 0rem" },
                  margin: { xs: "1rem 0", sm: "0rem 0 0 0" },
                  maxWidth: { xs: "100%", sm: "unset" },
                },
                children: [
                  e.jsx(y, {
                    sx: {
                      position: "absolute",
                      width: "100vw",
                      height: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: 0,
                      background: "#00F6FF",
                      zIndex: -1,
                    },
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    sm: 8,
                    children: e.jsx(i, {
                      sx: {
                        color: "black",
                        width: { xs: "100%", sm: "70%" },
                        fontFamily: "Syncopate-Bold",
                        fontSize: { xs: "2.5rem", sm: "1.6rem" },
                        letterSpacing: { sm: "0.0rem" },
                        lineHeight: { xs: "3.5rem", sm: "1.8rem" },
                      },
                      children: "DOWNLOAD THE Tora LAUNCHER AND RUN A NODE!",
                    }),
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    sm: 3.5,
                    sx: {
                      background: "black",
                      padding: "0.5rem 1rem",
                      color: "#00F6FF",
                      borderRadius: "1rem 0 1rem 0rem ",
                      cursor: "pointer",
                      ":hover": { background: "#0070AF", color: "white" },
                    },
                    children: e.jsx(m, {
                      component: "a",
                      href: "https://github.com/ora-io/tora-electron-releases/releases",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      color: "#eee",
                      underline: "none",
                      sx: { display: "flex", justifyContent: "center" },
                      children: e.jsx(i, {
                        sx: {
                          textAlign: { xs: "center", sm: "center" },
                          fontSize: { xs: "1.75rem", sm: "1.2rem" },
                          fontFamily: "Syncopate-Bold",
                          color: "inherit",
                          textTransform: "uppercase",
                        },
                        children: "download now",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            e.jsxs(t, {
              item: !0,
              container: !0,
              justifyContent: "space-between",
              sx: { padding: { xs: "1rem", sm: "1rem 1rem" } },
              children: [
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  justifyContent: "center",
                  xs: 12,
                  sm: 6,
                  children: e.jsx("img", {
                    src: k,
                    style: { display: "block", width: "100%", padding: "1rem" },
                  }),
                }),
                e.jsxs(t, {
                  item: !0,
                  container: !0,
                  direction: "column",
                  justifyContent: "space-between",
                  xs: 12,
                  sm: 5,
                  sx: { padding: { xs: "1rem", sm: "2rem 1rem" } },
                  children: [
                    e.jsx(i, {
                      sx: {
                        fontFamily: "Syncopate-Bold",
                        fontSize: { xs: "2rem", sm: "1.6rem" },
                        letterSpacing: { sm: "0.0rem" },
                        lineHeight: { xs: "2.8rem", sm: "1.8rem" },
                        textTransform: "uppercase",
                      },
                      children: "Features",
                    }),
                    e.jsx(i, {
                      sx: {
                        marginTop: "1rem",
                        fontFamily: "SpaceMono-Bold",
                        fontSize: { xs: "1.5rem", sm: "0.8rem" },
                      },
                      children:
                        "Tora IS A PERMISSIONLESS LIGHTWEIGHT ORA CLIENT DESIGNED FOR ANYONE TO RUN, ENABLING SMART CONTRACTS TO BE POWERED BY AI MODELS ON BLOCKCHAINS.",
                    }),
                    e.jsx(i, {
                      sx: {
                        marginTop: "1rem",
                        fontFamily: "SpaceMono-Bold",
                        fontSize: { xs: "1.5rem", sm: "0.8rem" },
                      },
                      children:
                        "AS PART OF THE ORA NETWORK, Tora EMPOWERS NODE OPERATORS TO PARTICIPATE IN A DECENTRALIZED AI ECOSYSTEM WHILST SECURING THE INTEGRITY OF AI INFERENCE RESULTS.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(t, {
              container: !0,
              item: !0,
              direction: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "space-between",
              alignItems: "center",
              sx: { padding: { xs: "1rem", sm: "1rem 1rem" } },
              children: [
                e.jsxs(t, {
                  container: !0,
                  item: !0,
                  gap: 2,
                  direction: "column",
                  alignItems: "flex-start",
                  sm: 5.5,
                  children: [
                    e.jsx(t, {
                      item: !0,
                      children: e.jsx(i, {
                        sx: {
                          fontFamily: "Syncopate-Bold",
                          fontSize: { xs: "2.0rem", sm: "1.4rem" },
                          lineHeight: { xs: "3rem", sm: "2rem" },
                          whiteSpace: "pre-line",
                          textTransform: "uppercase",
                        },
                        children: `available on
these Operating Systems`,
                      }),
                    }),
                    e.jsxs(t, {
                      container: !0,
                      justifyContent: "space-between",
                      children: [
                        e.jsx(t, {
                          item: !0,
                          container: !0,
                          xs: 3.5,
                          justifyContent: "center",
                          children: e.jsx(t, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            alignItems: "flex-start",
                            children:
                              s &&
                              ((l = s.macos) == null
                                ? void 0
                                : l.map((r, a) =>
                                    e.jsx(
                                      c,
                                      {
                                        link: r.link,
                                        img: r.img,
                                        title: r.title,
                                        desc: r.desc,
                                      },
                                      a
                                    )
                                  )),
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          container: !0,
                          xs: 3.5,
                          justifyContent: "center",
                          children: e.jsx(t, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            alignItems: "flex-start",
                            children:
                              s &&
                              ((d = s.linux) == null
                                ? void 0
                                : d.map((r, a) =>
                                    e.jsx(
                                      c,
                                      {
                                        link: r.link,
                                        img: r.img,
                                        title: r.title,
                                        desc: r.desc,
                                      },
                                      a
                                    )
                                  )),
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          container: !0,
                          xs: 3.5,
                          justifyContent: "center",
                          children: e.jsx(t, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            alignItems: "flex-start",
                            children:
                              s &&
                              ((u = s.windows) == null
                                ? void 0
                                : u.map((r, a) =>
                                    e.jsx(
                                      c,
                                      {
                                        link: r.link,
                                        img: r.img,
                                        title: r.title,
                                        desc: r.desc,
                                      },
                                      a
                                    )
                                  )),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(t, {
                  container: !0,
                  item: !0,
                  gap: 2,
                  direction: "column",
                  alignItems: { sm: "flex-start" },
                  justifyContent: "space-between",
                  sm: 5,
                  children: e.jsx(t, {
                    item: !0,
                    container: !0,
                    xs: 6,
                    children: e.jsx("img", {
                      src: C,
                      style: {
                        display: "block",
                        width: "100%",
                        padding: "2rem",
                      },
                    }),
                  }),
                }),
              ],
            }),
            e.jsx(t, {
              container: !0,
              item: !0,
              gap: 1,
              direction: "column",
              alignItems: "center",
              style: {
                color: "white",
                padding: "1rem 0.5rem",
                margin: "1rem 0 2rem 0",
                borderRadius: "1rem 0 1rem 0",
                border: "2px solid #00fbff",
                textTransform: "uppercase",
              },
              children: b.map((r, a) =>
                e.jsx(w, { icon: r.icon, title: r.title, link: r.link }, a)
              ),
            }),
          ],
        }),
      ],
    });
  };
export { v as default };
