import { M as o, N as r } from "./index-Dg322SbI.js";
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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "8f1b3c7e-02c4-484b-b608-8113649d79e4"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8f1b3c7e-02c4-484b-b608-8113649d79e4"));
  } catch {}
})();
const n = (e) =>
    o.createElement(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: 0,
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      o.createElement("path", {
        d: "M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z",
        className: "goIcon",
      })
    ),
  l = r(n)`
  height: ${(e) => e.height};
  width: ${(e) => e.width};
  font-size: ${(e) => e.fontSize};
  font-weight: ${(e) => e.fontWight};
  color: ${(e) => e.color};
  transform: ${(e) => e.transform};

  .goIcon {
    fill: ${(e) => e.fill};

    &:hover {
      fill: ${(e) => e.hover ?? e.fill};
    }
  }
`;
export { l as G };