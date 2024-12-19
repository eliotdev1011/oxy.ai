import { M as d, t as c, j as o, T as n } from "./index-Dg322SbI.js";
import { T as i } from "./TitleBanner-Bz2_LQgG.js";
import { u as l } from "./useOpml-CV_sWth4.js";
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
      s = new e.Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = "43854a99-916a-4bb8-9d0e-fa30cc29d3e9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-43854a99-916a-4bb8-9d0e-fa30cc29d3e9"));
  } catch {}
})();
const u = () => {
    const { opmlGetter: e } = l(),
      s = d.useMemo(
        () => e.models.find((r) => r.mode === e.contractMode),
        [e.contractMode, e.models]
      ),
      a = c().pathname.split("/").includes("models")
        ? ""
        : s != null && s.name
        ? `${s.name}`
        : "WORLD'S FIRST AI ORACLE";
    return o.jsx(i, {
      title: "OAO",
      children: [
        o.jsx(n, { className: "primary", children: a }, 0),
        o.jsx(
          n,
          { className: "secondary", children: "OXY's AI ORACLE ENABLES" },
          1
        ),
        o.jsx(
          n,
          {
            className: "secondary",
            children: "VERIFIABLE AI INFERENCE IN ANY SMART CONTRACT",
          },
          2
        ),
      ],
    });
  },
  y = "/asset/svg/flow-CYoFvNnx.svg";
export { u as T, y as s };
