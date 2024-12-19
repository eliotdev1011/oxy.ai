import {
  a1 as se,
  t as ae,
  M as s,
  Z as le,
  _ as ce,
  a2 as de,
  a3 as M,
  a0 as me,
  j as e,
  G as t,
  T as n,
  a4 as he,
  L as x,
  X as ue,
  a5 as pe,
} from "./index-Dg322SbI.js";
import { T as fe, s as ge } from "./flow-IfT3aGcJ.js";
import { u as I } from "./useOpml-CV_sWth4.js";
import { G as R } from "./index-BBZuYqjW.js";
import {
  d as xe,
  R as ye,
  M as je,
  o as we,
  D as Se,
  a as be,
  b as ke,
} from "./index-SzqrnifC.js";
import { u as Ce, V as Ae, O as Me } from "./index-B90Cq4OI.js";
import { B as y } from "./Button-BKXOMoUW.js";
import { I as Re } from "./Input-DcxQMF5N.js";
import { L as Ie } from "./LoadingButton-DRLytlo1.js";
import { C as Te } from "./CircularProgress-C7nG8PiJ.js";
import { D as Fe, a as Oe } from "./DialogContent-BJYmZZ_9.js";
import "./TitleBanner-Bz2_LQgG.js";
import "./Text-2nyYeLKn.js";
import "./State-D_B647eN.js";
import "./MeshGeometry-BWbyOb_7.js";
import "./Modal-ClwAz5WQ.js";
(function () {
  try {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      l = new i.Error().stack;
    l &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[l] = "ab4ec75a-9a6d-47bc-8591-d729b629e306"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-ab4ec75a-9a6d-47bc-8591-d729b629e306"));
  } catch {}
})();
const Be = ({ type: i }) => {
    const l = se();
    ae();
    const {
        opmlGetter: r,
        opmlStatusGetter: a,
        updateOpmlForm: j,
        startChallenge: T,
        randomOpmlPrompt: w,
        randomLLMPrompt: F,
        randomOpenLMPrompt: O,
        resetStatus: B,
        initOpml: z,
        initContractAddress: S,
        initEthers: m,
        generateOpmlText2Image: L,
        generateOpmlText2LLM: E,
        challengerRespond: v,
        submitterRespond: D,
        challengerAssert: P,
        resetOpmlIpfsHash: _,
        setOpmlFormPhotoEmpty: G,
      } = I(),
      { updateGenerateStat: p } = Ce(),
      [H, b] = s.useState(!1),
      [d, N] = s.useState("success"),
      [W, U] = s.useState(""),
      [ze, $] = s.useState("generate"),
      c = le(),
      { openConnectModal: k } = ce(),
      { switchChain: q } = de(),
      Y = s.useMemo(() => {
        if (M.state.status === "disconnected") return "****** + CALLBACK FEE";
        const o = String(r.modelFee || "0");
        return `${me(BigInt(o))} ${r.network.unit} + CALLBACK FEE`;
      }, [r.modelFee, r.network.unit, M.state.status]);
    s.useMemo(() => {
      if (c.status !== "connected") return "You will get: **************";
      const o = Number(r.contractMode),
        u = o === 13 || o === 15 ? "20,000x" : "10,000x";
      return r.network.chainId === 5e3
        ? `You will get: ${u} points per 10,000x MNT spent on model fee (not gas)`
        : `You will get: ${u} points per x ETH spent on model fee (not gas)`;
    }, [r.modelFee, r.network.chainId, c.status]);
    const C = s.useMemo(
      () =>
        r.network.chainId === 1 ||
        r.network.chainId === 10 ||
        r.network.chainId === 42161 ||
        r.network.chainId === 59144 ||
        r.network.chainId === 5e3,
      [r.network.chainId]
    );
    s.useEffect(() => {
      if ((S(i), B(), c.address)) {
        m();
        return;
      }
    }, []),
      s.useEffect(() => {
        r.contractAddress.opml && r.contractAddress.aiOracle && m();
      }, [r.contractAddress.opml, r.contractAddress.aiOracle]),
      s.useEffect(() => {
        c.address && S(i);
      }, [c.chainId, c.address]),
      s.useEffect(() => {
        (!r.contract.opml || !r.contract.aiOracle) && m();
      }, [r.contract.aiOracle, r.contract.opml]);
    const K = s.useMemo(
        () =>
          d === "error"
            ? l.palette.error.main
            : d === "warning"
            ? l.palette.warning.main
            : d === "success"
            ? l.palette.success.main
            : l.palette.primary.main,
        [d]
      ),
      V = () => {
        var o;
        return ((o = r.config) == null ? void 0 : o.contractAddress) !== "";
      },
      Z = s.useMemo(() => i === "sd_v2_1" || i === "sd_v3", [i]),
      f = s.useMemo(
        () =>
          i === "llm" || i === "openlm" || i === "grok" || i === "openlmchat",
        [i]
      ),
      J = s.useMemo(
        () =>
          r.ipfsHash
            ? `https://ora.mypinata.cloud/ipfs/${r.ipfsHash}`
            : r.form.photo || xe,
        [r.ipfsHash, r.form.photo]
      ),
      Q = () =>
        V() ? !0 : (g("error", "Please initiate opML request first!"), !1),
      g = (o, h) => {
        U(h || ""), N(o), b(!0);
      },
      X = s.useCallback(
        (o) => {
          j({ prompt: o.target.value });
        },
        [j]
      ),
      ee = () => {
        i === "sd_v2_1" || i === "sd_v3"
          ? w()
          : i === "llm" || i === "openlmchat"
          ? F()
          : i === "openlm"
          ? O()
          : w(),
          p("prepare");
      },
      te = async () => {
        if (
          (k && c.status !== "connected" && k(),
          c.chainId !== r.network.chainId)
        ) {
          q({ chainId: r.network.chainId }), await m();
          return;
        }
        if (
          ((!r.contract.opml || !r.contract.aiOracle) && (await m()),
          r.form.prompt === "")
        ) {
          g("error", "Please enter the prompt first!");
          return;
        }
        try {
          await _(),
            await G(),
            await z(),
            setTimeout(async () => {
              await re("generate");
            }, 500);
        } catch {}
      },
      A = () => {
        b(!1);
      },
      re = async (o) => {
        $(o);
        try {
          o === "generate" &&
            (i === "sd_v2_1" || i === "sd_v3" ? await L(i) : await E(i));
        } catch {}
      },
      ne = async () => {
        if (Q())
          try {
            await T(), await ie(), await oe();
          } catch {}
      },
      ie = async () => {
        for (let o = 0; o <= 50; o++) {
          const h = await v(),
            u = await D();
          if (h === "END" || u === "END") break;
        }
      },
      oe = async () => {
        try {
          (await P()) === "NO DONE" &&
            g("warning", "WAIT! Bisection is NOT DONE!");
        } catch {}
      };
    return e.jsxs(t, {
      container: !0,
      item: !0,
      style: {
        width: "100%",
        height: "auto",
        margin: "0 0 10rem 0",
        zIndex: 4,
      },
      children: [
        e.jsxs(t, {
          item: !0,
          container: !0,
          direction: "column",
          xs: 4,
          style: { height: "100%", padding: "0 0rem 0 0rem" },
          justifyContent: "space-between",
          children: [
            e.jsx(t, {
              item: !0,
              container: !0,
              direction: "column",
              children: e.jsxs(t, {
                item: !0,
                container: !0,
                direction: "row",
                style: { margin: "0rem 0 1rem 0" },
                children: [
                  e.jsx(t, {
                    item: !0,
                    container: !0,
                    xs: 2,
                    children: e.jsx(t, {
                      item: !0,
                      container: !0,
                      direction: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      style: {
                        padding: "0.5rem",
                        height: "2rem",
                        backgroundColor: "#00f6ff",
                        borderTopLeftRadius: "0.625rem",
                        borderBottomRightRadius: "0.625rem",
                      },
                      children: e.jsx(ye, { style: { fontSize: "1.2rem" } }),
                    }),
                  }),
                  e.jsxs(t, {
                    item: !0,
                    container: !0,
                    xs: 10,
                    style: { padding: "0rem 1rem" },
                    direction: "column",
                    children: [
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Bold",
                          style: {
                            textAlign: "left",
                            fontSize: "1.2rem",
                            color: "white",
                            paddingBottom: "1rem",
                          },
                          children: "HOW IT WORKS",
                        }),
                      }),
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Regular",
                          style: {
                            textAlign: "left",
                            fontSize: "0.6rem",
                            textTransform: "uppercase",
                            color: "white",
                          },
                          children:
                            "OXY's AI oracle is powered by opML (optimistic machine learning) on Ethereum and enables verifiable AI inference onchain. Currently, OXY's AI Oracle supports LlaMA 3 and Stable Diffusion.",
                        }),
                      }),
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Bold",
                          style: {
                            textAlign: "left",
                            fontSize: "0.75rem",
                            color: "white",
                            padding: "0.5rem 0 0.5rem 0",
                          },
                          children: "STEP ONE",
                        }),
                      }),
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Regular",
                          style: {
                            textAlign: "left",
                            fontSize: "0.6rem",
                            color: "white",
                            textTransform: "uppercase",
                          },
                          children:
                            'Enter your prompt, or generate a random prompt by clicking "Surprise me".',
                        }),
                      }),
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Bold",
                          style: {
                            textAlign: "left",
                            fontSize: "0.75rem",
                            color: "white",
                            padding: "0.5rem 0 0.5rem 0",
                          },
                          children: "STEP TWO",
                        }),
                      }),
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Regular",
                          style: {
                            textAlign: "left",
                            fontSize: "0.6rem",
                            color: "white",
                            textTransform: "uppercase",
                          },
                          children:
                            'Click "Generate" to initiate a request to the AI Oracle, then sign the transaction in your wallet. Wait a few moments whilst the model computes your results',
                        }),
                      }),
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Bold",
                          style: {
                            textAlign: "left",
                            fontSize: "0.75rem",
                            color: "white",
                            padding: "0.5rem 0 0.5rem 0",
                          },
                          children: "STEP THREE",
                        }),
                      }),
                      e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          fontFamily: "SpaceMono-Regular",
                          style: {
                            textAlign: "left",
                            fontSize: "0.6rem",
                            color: "white",
                            textTransform: "uppercase",
                          },
                          children:
                            'When your request is complete, scroll down to click the "FINALIZE" button in order to view the fault proof obtained from the challenge process of opML.',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs(t, {
              item: !0,
              container: !0,
              direction: "column",
              children: [
                e.jsx(t, {
                  item: !0,
                  style: { width: "8rem", height: "8rem" },
                  children: e.jsx(t, {
                    item: !0,
                    container: !0,
                    justifyContent: "center",
                    alignItems: "center",
                    style: {
                      width: "8rem",
                      height: "8rem",
                      borderRadius: "50px",
                    },
                    children: e.jsx(t, {
                      item: !0,
                      children: e.jsx(n, {
                        color: "#00f6ff",
                        fontFamily: "Orbitron",
                        style: { textAlign: "center", fontSize: "4rem" },
                        children: "02",
                      }),
                    }),
                  }),
                }),
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  justifyContent: "center",
                  style: {
                    padding: "2rem",
                    border: "1px #00f6ff solid",
                    borderRadius: "15px",
                  },
                  children: e.jsx(t, {
                    item: !0,
                    style: {
                      padding: "0 2rem",
                      backgroundColor: "#00f6ff",
                      borderRadius: "10px 0 10px 0",
                    },
                    children: e.jsx(y, {
                      sx: { margin: 0, padding: 0 },
                      onClick: () => ne(),
                      children: e.jsxs(t, {
                        container: !0,
                        direction: "row",
                        alignContent: "center",
                        gap: 1,
                        children: [
                          e.jsx(t, {
                            item: !0,
                            children: e.jsx(n, {
                              fontFamily: "SpaceMono-Bold",
                              style: {
                                textAlign: "center",
                                fontSize: "1rem",
                                color: "black",
                                textDecoration: "underline",
                              },
                              children: "FINALIZE",
                            }),
                          }),
                          e.jsx(t, {
                            item: !0,
                            children: e.jsx(R, {
                              color: "black",
                              style: { fontSize: "1rem", fontWeight: 700 },
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsxs(t, {
          item: !0,
          xs: 8,
          style: {
            backgroundColor: "transparent",
            height: "100%",
            padding: "0 0rem 0rem 0rem",
          },
          children: [
            e.jsxs(t, {
              item: !0,
              container: !0,
              direction: "column",
              style: {
                width: "100%",
                border: "1px #00f6ff solid",
                height: "auto",
                borderRadius: "1.5625rem",
                padding: "0 0 2rem 0",
              },
              children: [
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  style: {
                    width: "100%",
                    height: "3rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    backgroundColor: "",
                    borderRadius: "1.5625rem 0 1.5625rem 0",
                  },
                  children: e.jsxs(t, {
                    item: !0,
                    container: !0,
                    direction: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    children: [
                      e.jsx(n, {
                        fontFamily: "SpaceMono-Bold",
                        style: {
                          textAlign: "left",
                          fontSize: "1.5rem",
                          color: "white",
                        },
                        children: "PROMPT",
                      }),
                      i === "grok"
                        ? e.jsx(n, {
                            fontFamily: "SpaceMono-Bold",
                            color: "red",
                            style: { textAlign: "left", fontSize: "0.8rem" },
                            children:
                              "Grok is currently in beta and may be unstable or slow. Use at your own risk.",
                          })
                        : "",
                      i !== "grok" && !C
                        ? e.jsx(n, {
                            fontFamily: "SpaceMono-Bold",
                            color: "orange",
                            style: { textAlign: "left", fontSize: "0.8rem" },
                            children:
                              "Note: Testnet activities do not earn points.",
                          })
                        : "",
                    ],
                  }),
                }),
                e.jsx(t, {
                  item: !0,
                  container: !0,
                  justifyContent: "right",
                  style: { paddingRight: "2rem" },
                  children: e.jsx(t, {
                    item: !0,
                    style: { width: "8rem", height: "8rem" },
                    children: e.jsx(t, {
                      item: !0,
                      container: !0,
                      justifyContent: "center",
                      alignItems: "center",
                      style: {
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "50px",
                      },
                      children: e.jsx(t, {
                        item: !0,
                        children: e.jsx(n, {
                          color: "#00f6ff",
                          fontFamily: "Orbitron",
                          style: { textAlign: "center", fontSize: "4rem" },
                          children: "01",
                        }),
                      }),
                    }),
                  }),
                }),
                e.jsx(t, {
                  item: !0,
                  style: { padding: "1rem 2rem 1rem 2rem" },
                  children: e.jsx(Re, {
                    id: "prompt",
                    value: r.form.prompt,
                    "aria-describedby": "prompt-helper-text",
                    style: {
                      color: "#00f6ff",
                      fontSize: "1rem",
                      padding: "0.5rem",
                      width: "100%",
                    },
                    onChange: (o) => X(o),
                    onFocus: () => p("prepare"),
                    onBlur: () => p("none"),
                    endAdornment: e.jsx(y, {
                      variant: "text",
                      size: "small",
                      style: { width: "8rem", color: "#00f6ff" },
                      onClick: () => ee(),
                      children: "Surprise me",
                    }),
                  }),
                }),
                e.jsxs(t, {
                  item: !0,
                  container: !0,
                  direction: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 2rem",
                  children: [
                    e.jsxs(t, {
                      item: !0,
                      container: !0,
                      direction: "column",
                      style: { width: "max-content" },
                      children: [
                        e.jsx(n, {
                          fontFamily: "SpaceMono-Bold",
                          color: "#00f6ff",
                          style: { fontSize: "0.8rem", width: "max-content" },
                          children: Y,
                        }),
                        C &&
                          e.jsx(n, {
                            fontFamily: "SpaceMono-Bold",
                            color: "#00f6ff",
                            style: {
                              fontSize: "0.8rem",
                              width: "max-content",
                              textTransform: "uppercase",
                            },
                          }),
                      ],
                    }),
                    e.jsx(t, {
                      children: e.jsx(Ie, {
                        sx: {
                          padding: "0 2rem",
                          width: "11rem",
                          backgroundColor: "#00f6ff",
                          borderRadius: "0.625rem 0 0.625rem 0",
                          ":hover": { backgroundColor: "#85eff3" },
                          ":disabled": {
                            backgroundColor: "#cccccc",
                            color: "#666666",
                            cursor: "not-allowed",
                          },
                        },
                        loading:
                          a.isRequestingOpml ||
                          a.isGeneratingImg ||
                          a.isFetchingLLMOutput,
                        disabled:
                          (f && a.isFetchingLLMOutput) || !a.isPromptUpdated,
                        onClick: () => te(),
                        children: e.jsxs(t, {
                          container: !0,
                          direction: "row",
                          justifyContent: "center",
                          alignContent: "center",
                          gap: 1,
                          children: [
                            e.jsx(t, {
                              item: !0,
                              children: e.jsx(n, {
                                fontFamily: "SpaceMono-Bold",
                                style: {
                                  textAlign: "left",
                                  fontSize: "1rem",
                                  color: "black",
                                  textDecoration: "underline",
                                },
                                children: "GENERATE",
                              }),
                            }),
                            e.jsx(t, {
                              item: !0,
                              children: e.jsx(R, {
                                color: "black",
                                style: { fontSize: "1rem", fontWeight: 700 },
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(t, {
              item: !0,
              container: !0,
              direction: "row",
              style: { minHeight: "25rem", height: "max-content" },
              children: [
                e.jsxs(t, {
                  item: !0,
                  xs: 7,
                  style: {
                    height: "25rem",
                    minHeight: "100%",
                    border: "1px #00f6ff solid",
                    borderRadius: "15px",
                    overflowY: "scroll",
                  },
                  children: [
                    ((f && a.isFetchingLLMOutput) || !a.isPromptUpdated) &&
                      e.jsx(je, {
                        type: "text",
                        data: {},
                        style: { height: "100%", width: "100%" },
                      }),
                    Z &&
                      e.jsx("img", {
                        alt: "generated_img",
                        src: J,
                        crossOrigin: "anonymous",
                        style: {
                          height: "100%",
                          width: "100%",
                          borderRadius: "15px",
                          opacity:
                            !a.isGeneratingImg || !a.isPromptUpdated ? 1 : 0.4,
                        },
                      }),
                    f &&
                      !a.isFetchingLLMOutput &&
                      r.llm.output.length > 0 &&
                      e.jsx(n, {
                        variant: "body2",
                        color: "white",
                        style: {
                          padding: "1rem",
                          height: "100%",
                          boxSizing: "border-box",
                        },
                        children: r.llm.output,
                      }),
                  ],
                }),
                e.jsxs(t, {
                  item: !0,
                  container: !0,
                  xs: 5,
                  style: { padding: "1rem" },
                  gap: 3,
                  children: [
                    e.jsx(t, {
                      item: !0,
                      style: { height: "3.5rem", width: "3.5rem" },
                      children: e.jsx(he.img, {
                        alt: "avatar",
                        src: we,
                        style: { width: "100%", height: "100%" },
                        animate: { rotate: 360 },
                        transition: {
                          repeat: 1 / 0,
                          duration: 10,
                          ease: "linear",
                        },
                      }),
                    }),
                    e.jsxs(t, {
                      container: !0,
                      item: !0,
                      direction: "column",
                      gap: 0,
                      style: { height: "100%", width: "100%" },
                      children: [
                        e.jsxs(t, {
                          item: !0,
                          container: !0,
                          direction: "column",
                          children: [
                            e.jsx(t, {
                              item: !0,
                              children: e.jsx(n, {
                                fontFamily: "SpaceMono-Bold",
                                style: {
                                  textAlign: "left",
                                  fontSize: "0.75rem",
                                  color: "white",
                                  paddingBottom: "1rem",
                                  textTransform: "uppercase",
                                },
                                children: "AI Oracle Contract Address",
                              }),
                            }),
                            e.jsx(t, {
                              item: !0,
                              style: { width: "100%" },
                              children: e.jsx(x, {
                                href: r.contractAddressLink.aiOracle,
                                target: "_blank",
                                children: e.jsx(n, {
                                  fontFamily: "SpaceMono-Regular",
                                  style: {
                                    textAlign: "left",
                                    fontSize: "0.75rem",
                                    color: "white",
                                    paddingBottom: "1rem",
                                    wordBreak: "break-all",
                                  },
                                  children: r.contractAddress.aiOracle,
                                }),
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(t, {
                          item: !0,
                          container: !0,
                          direction: "column",
                          children: [
                            e.jsx(t, {
                              item: !0,
                              children: e.jsx(n, {
                                fontFamily: "SpaceMono-Bold",
                                style: {
                                  textAlign: "left",
                                  fontSize: "0.75rem",
                                  color: "white",
                                  paddingBottom: "1rem",
                                  textTransform: "uppercase",
                                },
                                children: "Contract Address",
                              }),
                            }),
                            e.jsx(t, {
                              item: !0,
                              style: { width: "100%" },
                              children: e.jsx(x, {
                                href: r.contractAddressLink.opml,
                                target: "_blank",
                                children: e.jsx(n, {
                                  fontFamily: "SpaceMono-Regular",
                                  style: {
                                    textAlign: "left",
                                    fontSize: "0.75rem",
                                    color: "white",
                                    paddingBottom: "1rem",
                                    wordBreak: "break-all",
                                  },
                                  children: r.contractAddress.opml,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (i === "sd_v2_1" || i === "sd_v3") &&
                          (r.ipfsHash || a.isGettingIPFSHash) &&
                          e.jsxs(t, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            children: [
                              e.jsx(t, {
                                item: !0,
                                children: e.jsx(n, {
                                  fontFamily: "SpaceMono-Bold",
                                  style: {
                                    textAlign: "left",
                                    fontSize: "0.75rem",
                                    color: "white",
                                    paddingBottom: "1rem",
                                  },
                                  children: "IPFS CID",
                                }),
                              }),
                              r.ipfsHash
                                ? e.jsx(t, {
                                    item: !0,
                                    style: { width: "100%" },
                                    children: e.jsx(x, {
                                      href:
                                        "https://gateway.pinata.cloud/ipfs/" +
                                        r.ipfsHash,
                                      target: "_blank",
                                      children: e.jsx(n, {
                                        fontFamily: "SpaceMono-Regular",
                                        style: {
                                          textAlign: "left",
                                          fontSize: "0.75rem",
                                          color: "white",
                                          paddingBottom: "1rem",
                                          wordBreak: "break-all",
                                        },
                                        children: r.ipfsHash,
                                      }),
                                    }),
                                  })
                                : e.jsx(Te, {
                                    style: { color: "#00f6ff" },
                                    size: "0.75rem",
                                  }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(t, {
              item: !0,
              container: !0,
              direction: "row",
              style: { height: "20rem" },
              children: [
                e.jsx(t, {
                  item: !0,
                  xs: 7,
                  children: e.jsx(t, {
                    style: {
                      border: "1px #00f6ff solid",
                      height: "100%",
                      borderRadius: "15px",
                      padding: "2rem",
                    },
                    children: e.jsxs(t, {
                      item: !0,
                      container: !0,
                      direction: "column",
                      style: {
                        opacity:
                          a.isSubmitterResponding ||
                          (!a.isChallengerResponding &&
                            !a.isSubmitterResponding)
                            ? 1
                            : 0.4,
                      },
                      children: [
                        e.jsx(t, {
                          item: !0,
                          style: { marginBottom: "1rem", width: "100%" },
                          children: e.jsxs(n, {
                            fontFamily: "SpaceMono-Bold",
                            style: {
                              textAlign: "left",
                              fontSize: "0.75rem",
                              color: "white",
                              textTransform: "uppercase",
                            },
                            children: ["CHALLENGE ID: ", r.op.id.challenger],
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          style: { width: "100%" },
                          children: e.jsx(n, {
                            fontFamily: "SpaceMono-Bold",
                            style: {
                              textAlign: "left",
                              fontSize: "0.75rem",
                              color: "white",
                              textTransform: "uppercase",
                            },
                            children: "Challenger Respond:",
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          style: { width: "100%", marginTop: "0.5rem" },
                          children: e.jsxs(n, {
                            fontFamily: "SpaceMono-Regular",
                            style: {
                              textAlign: "left",
                              fontSize: "0.75rem",
                              color: "white",
                              textTransform: "uppercase",
                            },
                            children: [
                              "Checkpoints [starting point/unanimous agreement, disagreement onset, jointly verified consistency checkpoint]:",
                              r.op.checkpoints.challenger.length
                                ? JSON.stringify(r.op.checkpoints.challenger)
                                : "",
                            ],
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          style: { width: "100%", marginTop: "0.5rem" },
                          children: e.jsxs(n, {
                            fontFamily: "SpaceMono-Regular",
                            style: {
                              textAlign: "left",
                              fontSize: "0.75rem",
                              color: "white",
                              wordBreak: "break-all",
                              textTransform: "uppercase",
                            },
                            children: ["Root: ", r.op.roots.challenger],
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          style: { marginTop: "1rem", width: "100%" },
                          children: e.jsx(n, {
                            fontFamily: "SpaceMono-Bold",
                            style: {
                              textAlign: "left",
                              fontSize: "0.75rem",
                              color: "white",
                              textTransform: "uppercase",
                            },
                            children: "Submitter Respond:",
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          style: { width: "100%" },
                          children: e.jsxs(n, {
                            fontFamily: "SpaceMono-Regular",
                            style: {
                              textAlign: "left",
                              fontSize: "0.75rem",
                              color: "white",
                              textTransform: "uppercase",
                            },
                            children: [
                              "Checkpoints: ",
                              r.op.checkpoints.submitter,
                            ],
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          style: { width: "100%" },
                          children: r.op.checkpoints.submitter.length
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsxs(n, {
                                    variant: "body2",
                                    color: "white",
                                    style: { marginTop: "0.5rem" },
                                    children: [
                                      r.op.checkpoints.submitter[0],
                                      ": Start point, unanimous agreement.",
                                    ],
                                  }),
                                  e.jsxs(n, {
                                    variant: "body2",
                                    color: "white",
                                    style: { marginTop: "0.5rem" },
                                    children: [
                                      r.op.checkpoints.submitter[1],
                                      ": Disagreement onset.",
                                    ],
                                  }),
                                  e.jsxs(n, {
                                    variant: "body2",
                                    color: "white",
                                    style: { marginTop: "0.5rem" },
                                    children: [
                                      r.op.checkpoints.submitter[2],
                                      ": Jointly verified consistency checkpoint.",
                                    ],
                                  }),
                                ],
                              })
                            : "",
                        }),
                        e.jsx(t, {
                          item: !0,
                          style: { width: "100%", marginTop: "0.5rem" },
                          children: e.jsxs(n, {
                            fontFamily: "SpaceMono-Regular",
                            style: {
                              textAlign: "left",
                              fontSize: "0.75rem",
                              color: "white",
                              wordBreak: "break-word",
                              textTransform: "uppercase",
                            },
                            children: ["Root: ", r.op.roots.submitter],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsxs(t, {
                  item: !0,
                  container: !0,
                  xs: 5,
                  direction: "column",
                  gap: 4,
                  style: {
                    border: "1px #00f6ff solid",
                    height: "60%",
                    borderRadius: "15px",
                    padding: "2rem",
                  },
                  children: [
                    e.jsx(t, {
                      item: !0,
                      children: e.jsx(n, {
                        fontFamily: "SpaceMono-Bold",
                        style: {
                          textAlign: "left",
                          fontSize: "1rem",
                          color: "white",
                        },
                        children: "ASSERT RESULT",
                      }),
                    }),
                    e.jsx(t, {
                      item: !0,
                      children: e.jsx(n, {
                        fontFamily: "SpaceMono-Regular",
                        style: {
                          textAlign: "left",
                          fontSize: "0.75rem",
                          color: "white",
                          textTransform: "uppercase",
                        },
                        children:
                          r.op.assertResult.length > 0
                            ? r.op.assertResult
                            : "Let's wait for the result.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs(Fe, {
          open: H,
          keepMounted: !0,
          onClose: A,
          "aria-describedby": "alert-dialog-slide-description",
          children: [
            e.jsx(Se, {
              style: { color: K, fontSize: "1.2rem" },
              children: d.toLocaleUpperCase(),
            }),
            e.jsx(Oe, {
              children: e.jsx(be, {
                style: { color: l.palette.primary.main, fontSize: "1rem" },
                children: W,
              }),
            }),
            e.jsx(ke, { children: e.jsx(y, { onClick: A, children: "Ok" }) }),
          ],
        }),
      ],
    });
  },
  Je = () => {
    const { resetOpmlState: i } = I();
    ue();
    const { type: l } = pe(),
      [r] = s.useState({
        hoverEffect: !1,
        skipModel: !0,
        stopRotate: !0,
        tweenInTime: 0,
        mouseMoveDetal: 0.001,
        waveTime: 5,
        lightness: (window.devicePixelRatio >= 2, 1),
        heightScale: 1.25,
        useProvider: !0,
        opmlBasicType: l,
      });
    return (
      s.useEffect(
        () => () => {
          i();
        },
        []
      ),
      e.jsx(Ae, {
        children: e.jsxs(t, {
          container: !0,
          style: { height: "auto", padding: "0 1rem" },
          sx: { marginTop: { xs: "10rem", md: "0rem" } },
          children: [
            e.jsx(Me, {
              data: r,
              modelIdx: 0,
              showLoading: !1,
              modelName: "imo.glb",
              style: { position: "fixed", left: 0, top: 0, zIndex: -1 },
            }),
            e.jsxs(t, {
              container: !0,
              item: !0,
              style: { position: "relative", height: "100%" },
              children: [
                e.jsx(fe, {}),
                e.jsx(t, {
                  item: !0,
                  style: {
                    margin: "0 0 2rem 0",
                    width: "100%",
                    backdropFilter: "blur(5px)",
                    height: "15rem",
                  },
                  children: e.jsx("img", {
                    src: ge,
                    style: {
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    },
                  }),
                }),
                e.jsx(Be, { type: l || "openlm" }),
              ],
            }),
          ],
        }),
      })
    );
  };
export { Je as default };
