import {
  X as E,
  Y as X,
  M as d,
  Z as F,
  _ as O,
  $ as L,
  j as e,
  G as t,
  T as a,
  a0 as k,
  e as C,
} from "./index-Dg322SbI.js";
import { u as T } from "./useOpml-CV_sWth4.js";
import { O as B } from "./index-B90Cq4OI.js";
import { T as z, s as v } from "./flow-IfT3aGcJ.js";
import { G as N } from "./index-BBZuYqjW.js";
import { F as H, B as w } from "./Button-BKXOMoUW.js";
import "./TitleBanner-Bz2_LQgG.js";
(function () {
  try {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      l = new s.Error().stack;
    l &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[l] = "abf34c9f-161b-4ac8-9e6a-b38641ffa72c"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-abf34c9f-161b-4ac8-9e6a-b38641ffa72c"));
  } catch {}
})();
const D = ({
    disabled: s,
    name: l,
    description: y,
    icon: b,
    modelFee: j,
    unit: p,
    link: u,
    imoLink: f,
    boostedPoints: R,
    supportChains: A,
  }) => {
    const { SCREEN_SIZE: r } = E();
    return e.jsxs(t, {
      item: !0,
      container: !0,
      alignContent: "space-between",
      style: { position: "relative", minHeight: "10rem", height: "100%" },
      children: [
        e.jsxs(t, {
          container: !0,
          item: !0,
          direction: "column",
          alignItems: "flex-start",
          style: {
            filter: s ? "brightness(60%)" : "none",
            height: r.EXTRA_SMALL ? "auto" : "85%",
            position: "relative",
            width: "100%",
            border: "1px solid #00f6ff",
            borderRadius: "1rem",
          },
          sx: { padding: { xs: "2.5rem", sm: "1rem" } },
          children: [
            f
              ? e.jsx(t, {
                  container: !0,
                  item: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  style: {
                    position: "absolute",
                    padding: "0.5rem",
                    width: r.EXTRA_SMALL ? "15rem" : "8rem",
                    top: "0rem",
                    right: "0rem",
                    backgroundColor: "#00f6ff",
                    borderTopRightRadius: "1rem",
                    borderBottomLeftRadius: "1rem",
                  },
                  children: e.jsx(a, {
                    fontFamily: "SpaceMono-Bold",
                    color: "black",
                    style: {
                      textAlign: "left",
                      fontSize: r.EXTRA_SMALL ? "2rem" : "1rem",
                    },
                    children: "IMO",
                  }),
                })
              : "",
            e.jsxs(t, {
              container: !0,
              item: !0,
              direction: "column",
              alignItems: "flex-start",
              children: [
                e.jsxs(t, {
                  item: !0,
                  container: !0,
                  alignContent: "center",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: "nowrap",
                  direction: "row",
                  style: {
                    padding: "1rem 1rem 1rem 0rem",
                    borderBottom: "1px solid #00f6ff",
                    width: "100%",
                  },
                  children: [
                    e.jsx(t, {
                      item: !0,
                      container: !0,
                      alignItems: "center",
                      sx: {
                        height: { xs: "6rem", sm: "4rem" },
                        marginRight: "1rem",
                      },
                      xs: 2,
                      sm: 2,
                      children: e.jsx("img", {
                        src: b,
                        alt: "model",
                        style: {
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        },
                      }),
                    }),
                    e.jsx(t, {
                      item: !0,
                      xs: 8,
                      children: e.jsx(a, {
                        fontFamily: "SpaceMono-Bold",
                        style: {
                          textAlign: "left",
                          fontSize: r.EXTRA_SMALL ? "3.0rem" : "1.25rem",
                          lineHeight: r.EXTRA_SMALL ? "3rem" : "1.5rem",
                          color: "white",
                        },
                        children: l,
                      }),
                    }),
                  ],
                }),
                e.jsx(t, {
                  item: !0,
                  style: { width: "100%", overflow: "auto" },
                  sx: {
                    padding: {
                      xs: "1.5rem 0rem 1.5rem 0rem",
                      sm: "1.0rem 0rem 0.5rem 0rem",
                    },
                    fontSize: { xs: "1.5rem", sm: "1.0rem" },
                  },
                  children: e.jsx(a, {
                    fontFamily: "SpaceMono-Regular",
                    style: {
                      textAlign: "left",
                      fontSize: r.EXTRA_SMALL ? "1.75rem" : "0.9rem",
                      lineHeight: r.EXTRA_SMALL ? "2.5rem" : "1.25rem",
                      height: r.EXTRA_SMALL ? "8.5rem" : "5rem",
                      color: "white",
                      textTransform: "uppercase",
                    },
                    children: y,
                  }),
                }),
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  direction: "column",
                  style: { padding: "1rem 0rem" },
                  gap: 2,
                  children: e.jsxs(t, {
                    item: !0,
                    container: !0,
                    direction: "row",
                    style: { width: "100%" },
                    children: [
                      e.jsxs(t, {
                        item: !0,
                        container: !0,
                        xs: 8,
                        direction: "column",
                        children: [
                          e.jsx(t, {
                            item: !0,
                            style: { marginBottom: "0.75rem" },
                            children: e.jsx(a, {
                              fontFamily: "SpaceMono-Regular",
                              style: {
                                textAlign: "left",
                                fontSize: r.EXTRA_SMALL ? "1.75rem" : "0.9rem",
                                lineHeight: r.EXTRA_SMALL ? "2.5rem" : "0.9rem",
                                color: "white",
                              },
                              children: "MODEL FEE",
                            }),
                          }),
                          e.jsx(t, {
                            item: !0,
                            children: e.jsxs(a, {
                              fontFamily: "SpaceMono-Bold",
                              style: {
                                textAlign: "left",
                                fontSize: r.EXTRA_SMALL ? "3.0rem" : "1.2rem",
                                lineHeight: r.EXTRA_SMALL ? "3.0rem" : "1.2rem",
                                color: "white",
                              },
                              children: [j, p],
                            }),
                          }),
                        ],
                      }),
                      e.jsxs(t, {
                        item: !0,
                        container: !0,
                        xs: 4,
                        direction: "column",
                        children: [
                          e.jsx(t, {
                            item: !0,
                            style: { marginBottom: "0.75rem" },
                            children: e.jsx(a, {
                              fontFamily: "SpaceMono-Regular",
                              style: {
                                textAlign: "left",
                                fontSize: r.EXTRA_SMALL ? "1.75rem" : "0.9rem",
                                lineHeight: r.EXTRA_SMALL ? "2.5rem" : "0.9rem",
                                color: "white",
                              },
                            }),
                          }),
                          e.jsx(t, {
                            item: !0,
                            children: e.jsx(a, {
                              fontFamily: "SpaceMono-Bold",
                              style: {
                                textAlign: "left",
                                fontSize: r.EXTRA_SMALL ? "3.0rem" : "1.2rem",
                                lineHeight: r.EXTRA_SMALL ? "3.0rem" : "1.2rem",
                                color: "white",
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  direction: "column",
                  children: e.jsx(a, {
                    fontFamily: "SpaceMono-Regular",
                    style: {
                      textAlign: "left",
                      fontSize: r.EXTRA_SMALL ? "1.75rem" : "0.9rem",
                      lineHeight: r.EXTRA_SMALL ? "2.5rem" : "0.9rem",
                      color: "white",
                    },
                    children: "SUPPORTED NETWORKS",
                  }),
                }),
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  direction: "row",
                  gap: 1,
                  style: {
                    margin: r.EXTRA_SMALL ? "1rem 0 1rem 0" : "0rem 0 1rem 0",
                  },
                  children:
                    A &&
                    [...new Set(A.map((x) => L[x].icons))].map((x, S) =>
                      e.jsx(
                        t,
                        {
                          item: !0,
                          container: !0,
                          alignItems: "center",
                          sx: {
                            height: { xs: "3rem" },
                            width: { xs: "3rem" },
                            marginRight: "0rem",
                          },
                          xs: 1,
                          children: e.jsx("img", {
                            src: x,
                            style: {
                              filter: "invert(1)",
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                            },
                          }),
                        },
                        S
                      )
                    ),
                }),
              ],
            }),
          ],
        }),
        e.jsx(t, {
          container: !0,
          item: !0,
          direction: "row",
          gap: 0,
          xs: 12,
          justifyContent: "center",
          alignItems: "center",
          style: {
            height: r.EXTRA_SMALL ? "auto" : "15%",
            left: "0rem",
            borderRadius: "1rem",
          },
          children: e.jsxs(t, {
            container: !0,
            item: !0,
            sx: { height: "100%" },
            flexWrap: r.EXTRA_SMALL ? "wrap" : "nowrap",
            children: [
              e.jsx(t, {
                item: !0,
                xs: 12,
                sm: f ? 8 : 12,
                children: e.jsx(w, {
                  style: { width: "100%", padding: "0.5rem" },
                  component: C,
                  sx: {
                    filter: s ? "brightness(60%)" : "none",
                    backgroundColor: "rgba(0,0,0,0)",
                    border: "1px solid #00f6ff",
                    borderRadius: "1rem 0rem",
                    color: "#00f6ff",
                    "&:hover": {
                      backgroundColor: "rgba(0,246,255,0.5)",
                      color: "white",
                    },
                  },
                  to: { pathname: u },
                  children: e.jsx(a, {
                    fontFamily: "SpaceMono-Bold",
                    style: {
                      textAlign: "left",
                      fontSize: r.EXTRA_SMALL ? "1.75rem" : "1rem",
                    },
                    children: "USE MODEL",
                  }),
                }),
              }),
              f &&
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  sm: f ? 8 : 12,
                  component: C,
                  to: { pathname: f },
                  children: e.jsx(w, {
                    style: { width: "100%", padding: "0.5rem" },
                    sx: {
                      color: "#00f6ff",
                      backgroundColor: "rgba(0,0,0,0)",
                      border: "1px solid #00f6ff",
                      borderRadius: "1rem 0rem",
                      "&:hover": {
                        backgroundColor: "rgba(0,246,255,0.5)",
                        color: "white",
                      },
                    },
                    children: e.jsx(a, {
                      fontFamily: "SpaceMono-Bold",
                      style: {
                        pointerEvents: "all",
                        textAlign: "left",
                        fontSize: r.EXTRA_SMALL ? "1.75rem" : "1rem",
                      },
                      children: "LEARN MORE",
                    }),
                  }),
                }),
            ],
          }),
        }),
      ],
    });
  },
  P = () => {
    const { SCREEN_SIZE: s } = E(),
      {
        opmlGetter: l,
        changeChainId: y,
        initContractAddress: b,
        updateModelsFee: j,
      } = T(),
      p = X(),
      [u, f] = d.useState("All"),
      [R, A] = d.useState(l.models),
      { status: r } = F(),
      { openConnectModal: x } = O();
    d.useEffect(() => {
      const n = S().filter((o) => o.categories.includes(u));
      if (
        (n.forEach((o) => {
          (o.disabled = !0), (o.fee = 0);
        }),
        r !== "connected")
      )
        A([...n]);
      else {
        const o = l.models.filter((i) => i.categories.includes(u));
        o.forEach((i) => {
          (i.disabled = !1),
            (i.supportChains = n.find((h) => h.id === i.id).supportChains);
        });
        const c = o
            .filter((i) => i.isIMO)
            .sort((i, h) => i.name.localeCompare(h.name)),
          m = o
            .filter((i) => !i.isIMO)
            .sort((i, h) => i.name.localeCompare(h.name)),
          g = new Set(o.map((i) => i.id)),
          M = n.filter((i) => !g.has(i.id));
        A([...c, ...m, ...M]);
      }
    }, [l.models, u, p, r]),
      d.useEffect(() => {
        (async () => {
          await y(p), await b();
        })().then(() => {
          l.contractAddress.aiOracle && j();
        });
      }, [p]),
      d.useEffect(() => {
        l.contractAddress.aiOracle && j();
      }, [l.contractAddress.aiOracle]);
    const S = () => {
        const n = Object.values(L).reduce((m, g) => m.concat(g.models), []);
        let c = Array.from(new Set(n.map((m) => m.id))).map((m) =>
          n.find((g) => g.id === m)
        );
        return (
          (c = c.map((m) => {
            const M = Object.keys(L).filter((i) => {
              const { models: h } = L[i];
              return h.some((I) => I.id === m.id);
            });
            return { ...m, supportChains: M };
          })),
          c
        );
      },
      _ = d.useMemo(() => {
        const n = new Set();
        return (
          S().forEach((o) => {
            o.categories.forEach((c) => {
              n.add(c);
            });
          }),
          Array.from(n)
        );
      }, []);
    return (
      d.useEffect(() => {}, []),
      e.jsxs(t, {
        item: !0,
        container: !0,
        direction: "column",
        gap: s.EXTRA_SMALL ? 2 : 6,
        style: { height: "auto", width: "100%" },
        children: [
          e.jsxs(t, {
            item: !0,
            container: !0,
            justifyContent: "space-between",
            flexWrap: "nowrap",
            children: [
              e.jsxs(t, {
                item: !0,
                container: !0,
                direction: "column",
                gap: 2,
                xs: 8,
                children: [
                  e.jsx(t, {
                    item: !0,
                    style: {
                      padding: "0.5rem 2rem",
                      width: s.EXTRA_SMALL ? "20rem" : "14rem",
                      backgroundColor: "#00f6ff",
                      borderTopLeftRadius: "0.625rem",
                      borderBottomRightRadius: "0.625rem",
                    },
                    children: e.jsx(a, {
                      fontFamily: "SpaceMono-Bold",
                      style: {
                        textAlign: "center",
                        fontSize: s.EXTRA_SMALL ? "1.75rem" : "1.00rem",
                        color: "#000",
                      },
                      children: "AI ORACLES",
                    }),
                  }),
                  e.jsx(t, {
                    item: !0,
                    container: !0,
                    direction: "row",
                    gap: 1,
                    style: { cursor: "pointer" },
                    children: _.map((n, o) =>
                      e.jsx(
                        t,
                        {
                          item: !0,
                          container: !0,
                          justifyContent: "center",
                          alignContent: "center",
                          style: {
                            height: "3rem",
                            width: s.EXTRA_SMALL ? "20rem" : "11.25rem",
                            border: "1px solid #00f6ff",
                            padding: "0.5rem 2.5rem",
                            borderTopLeftRadius: "0.625rem",
                            borderBottomRightRadius: "0.625rem",
                            backgroundColor:
                              u === n ? "rgba(0,250,255,0.50)" : "transparent",
                          },
                          onClick: () => f(n),
                          children: e.jsx(a, {
                            fontFamily: "SpaceMono-Bold",
                            style: {
                              textAlign: "center",
                              fontSize: s.EXTRA_SMALL ? "1.75rem" : "1.00rem",
                              color: u === n ? "" : "#00f6ff",
                            },
                            children: n,
                          }),
                        },
                        o
                      )
                    ),
                  }),
                ],
              }),
              r !== "connected" &&
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  xs: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  onClick: () => {
                    x && x();
                  },
                  sx: {
                    color: "black",
                    cursor: "pointer",
                    ".icon": { backgroundColor: "#00fbff", color: "black" },
                    "&:hover .icon": {
                      backgroundColor: "#0070AF",
                      color: "#eee",
                    },
                    "&:hover .text": { textDecoration: "underline" },
                  },
                  children: e.jsxs(a, {
                    className: "text",
                    sx: {
                      fontSize: { xs: "1rem", sm: "1rem" },
                      fontFamily: "SpaceMono-Regular",
                      color: "#eee",
                      fontWeight: 700,
                      lineHeight: { xs: "2rem", sm: "1.5rem" },
                    },
                    children: [
                      "CONNECT A WALLET TO INTERACT WITH OXY'S AI ORACLE",
                      e.jsx(t, {
                        className: "icon",
                        sx: {
                          position: "relative",
                          display: "inline-block",
                          height: { xs: "1.6rem", sm: "1.2rem" },
                          backgroundColor: "#00FBFF",
                          marginLeft: ".5rem",
                          borderRadius: "0rem",
                          top: "0.2rem",
                        },
                        children: e.jsx(N, {
                          color: "inherit",
                          fontSize: "1.2rem",
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          }),
          e.jsx(t, {
            item: !0,
            container: !0,
            direction: "row",
            justifyContent: "flex-start",
            sx: { flexWrap: { xs: "wrap", sm: "wrap" } },
            children: R.map((n, o) => {
              const c = n.disabled;
              return e.jsx(
                H,
                {
                  timeout: o * 300,
                  in: !0,
                  children: e.jsx(
                    t,
                    {
                      item: !0,
                      container: !0,
                      sx: { width: { xs: "100%", sm: "23rem" } },
                      justifyContent: "space-between",
                      alignContent: "stretch",
                      style: {
                        padding: "0rem 1rem 1rem 0rem",
                        pointerEvents: c ? "none" : "auto",
                      },
                      children: e.jsx(D, {
                        disabled: c,
                        name: n.name,
                        description: n.desc,
                        icon: n.icon,
                        modelFee: c ? "*****" : k(BigInt(String(n.fee || 0))),
                        unit: c ? "*" : l.network.unit,
                        link: n.pathname,
                        imoLink: n.imoPathname,
                        boostedPoints: n.boostedPoints,
                        supportChains: n.supportChains,
                      }),
                    },
                    o
                  ),
                },
                o
              );
            }),
          }),
        ],
      })
    );
  },
  q = () => {
    const { resetOpmlState: s } = T();
    return (
      E(),
      d.useEffect(
        () => () => {
          s();
        },
        []
      ),
      e.jsxs(t, {
        container: !0,
        justifyContent: "center",
        style: { height: "auto", padding: "0 1rem" },
        sx: { marginTop: { xs: "10rem", md: "0rem" } },
        children: [
          e.jsx(B, {
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
              e.jsx(z, {}),
              e.jsx(t, {
                item: !0,
                container: !0,
                justifyContent: "center",
                sx: { width: "100%", margin: { xs: "0" } },
                children: e.jsx("img", {
                  style: { width: "100%", imageRendering: "pixelated" },
                  src: v,
                  alt: "",
                }),
              }),
              e.jsx(t, {
                container: !0,
                xs: 12,
                item: !0,
                style: { padding: "4rem 0rem", zIndex: 99 },
                children: e.jsx(P, {}),
              }),
            ],
          }),
        ],
      })
    );
  };
export { q as default };
