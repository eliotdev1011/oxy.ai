import {
  au as k,
  az as o,
  bl as R,
  bm as S,
  bn as T,
  aS as _,
  bo as y,
  bp as j,
  bq as M,
  aQ as I,
  M as x,
  j as e,
  av as F,
  X as C,
  G as t,
  T as r,
  L as g,
  e as b,
  a1 as z,
  br as O,
  bs as E,
  ae as A,
} from "./index-Dg322SbI.js";
import { T as L } from "./TitleBanner-Bz2_LQgG.js";
import { G as p } from "./index-BBZuYqjW.js";
import { u as B, E as v } from "./useImo-BKR7oBnP.js";
(function () {
  try {
    var l =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      i = new l.Error().stack;
    i &&
      ((l._sentryDebugIds = l._sentryDebugIds || {}),
      (l._sentryDebugIds[i] = "1e30b7c8-38cc-4045-a13d-2cb82adb2b07"),
      (l._sentryDebugIdIdentifier =
        "sentry-dbid-1e30b7c8-38cc-4045-a13d-2cb82adb2b07"));
  } catch {}
})();
let w = {
  transparent: !0,
  uniforms: {
    opacity: { value: 1 },
    uCenterColor: { value: [1, 1, 1] },
    uEdgeColor: { value: [1, 1, 1] },
    uTexture: { value: null },
  },
  vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
  fragmentShader: `
        uniform vec3 uCenterColor;
        uniform vec3 uEdgeColor;
        uniform float opacity;
        uniform sampler2D uTexture;
        varying vec2 vUv;
        void main() {
            vec4 videoColor = texture2D(uTexture, vUv);
            // vec2 uv=vec2(vUv.x,vUv.y*0.5);
            
            float distanceToCenter = distance(vUv, vec2(0.5));
            
            float alpha = 1.0-smoothstep(0.0, 1.0, distanceToCenter);
            
            alpha *= videoColor.a;
            
            // 将 alpha 值线性插值到 uCenterColor 和 uEdgeColor 之间
            vec3 radialGradientColor = mix(uEdgeColor, uCenterColor, alpha);
            
            // 结合视频颜色和径向渐变颜色
            vec3 finalColor = mix(videoColor.rgb, radialGradientColor, alpha);
            gl_FragColor = vec4(videoColor.rgb, opacity*alpha);
        }
    `,
};
const N = "/asset/png/btplay-Bh7A8dgk.png",
  W = "/asset/png/tips-ue_Uo4xj.png",
  D = "/asset/svg/oml-DGNQ8QV2.svg",
  U = "/asset/svg/brm-8DupStfU.svg",
  Y = "/asset/svg/kumo-u4HXmUI_.svg";
class G extends k {
  constructor(i, n, s, a) {
    super(i, n, s, a);
  }
  init() {
    super.init(),
      this.addVideoPlane(),
      (this.camera.position.x = 0),
      (this.camera.position.y = 0),
      (this.camera.position.z = 30);
    let i = Math.min(2, window.devicePixelRatio);
    o.TweenMax.to(this, 3, { particleBGSize: 1.5 * i, particleSize: 1 * i }),
      setTimeout(() => {
        this.cameraChange({ x: 0, y: 0, z: 15 }),
          this.videoChange(!1),
          this.onWindowResize();
      }, 200);
  }
  modelIdxChange() {
    super.modelIdxChange(), this.videoChange(!1);
  }
  addVideoPlane() {
    if (this.props.data.videoRef) {
      (this.raycaster = new R()),
        (this.mouse = new S()),
        this.cvs.addEventListener(
          "mousedown",
          (c) => {
            c.preventDefault(), this.handleClick(c.clientX, c.clientY);
          },
          !1
        ),
        this.cvs.addEventListener(
          "touchended",
          (c) => {
            let h = c.touches[0];
            this.handleClick(h.clientX, h.clientY);
          },
          !1
        );
      let i = new T(this.props.data.videoRef.current);
      w.uniforms.uTexture.value = i;
      let n = new _(w),
        s = 1.4,
        a = -7;
      (this.offsetY = a), (this.offsetScroll = 1);
      let u = new y(16 * s, 9 * s);
      (this.video = this.props.data.videoRef.current),
        this.video.addEventListener("ended", this.videoEnded.bind(this)),
        (this.mesh_video = new j(u, n)),
        this.mesh_video.position.set(0, a, 0.5),
        (this.mat_video = n),
        (this.mat_video.opacity = 0),
        (this.mat_video.needsUpdate = !0),
        this.scene.add(this.mesh_video);
      let m = new y(2 * s, 2 * s),
        d = new M({ opacity: 1, transparent: !0, map: new I().load(N) });
      (this.mesh_bt = new j(m, d)),
        this.mesh_bt.position.set(0, a, 0.51),
        (this.mat_bt = d),
        (this.mat_bt.opacity = 1),
        this.scene.add(this.mesh_bt),
        this.onWindowResize();
    }
  }
  videoChange(i) {
    if (this.mesh_video && i) {
      o.TweenMax.killTweensOf(this.mat_video.uniforms.opacity),
        o.TweenMax.killTweensOf(this.mat_bt),
        o.TweenMax.killTweensOf(this.mesh_video.position),
        o.TweenMax.killTweensOf(this.mesh_bt.position),
        o.TweenMax.to(this.mat_video.uniforms.opacity, 0.4, {
          value: 1,
          ease: Cubic.easeInOut,
        }),
        o.TweenMax.to(this.mat_bt, 0.4, { opacity: 1, ease: Cubic.easeInOut });
      let n = window.innerWidth > 600 ? 0 : this.offsetY;
      o.TweenMax.to(this.mesh_video.position, 0.2, {
        y: n,
        ease: Cubic.easeInOut,
      }),
        o.TweenMax.to(this.mesh_bt.position, 0.2, {
          y: n,
          ease: Cubic.easeInOut,
        });
      const s = this.video.play();
      o.TweenMax.killTweensOf(this.video),
        this.video.volume > 0 &&
          ((this.video.volume = 0),
          o.TweenMax.to(this.video, 2, { volume: 0.5 })),
        s !== void 0 && s.then(() => {}).catch((a) => {}),
        this.video.paused
          ? this.scene.add(this.mesh_bt)
          : this.scene.remove(this.mesh_bt);
    } else
      this.mesh_video &&
        !i &&
        (o.TweenMax.killTweensOf(this.mat_video.uniforms.opacity),
        o.TweenMax.killTweensOf(this.mat_bt),
        o.TweenMax.killTweensOf(this.mesh_video.position),
        o.TweenMax.killTweensOf(this.mesh_bt.position),
        o.TweenMax.to(this.mesh_video.position, 0.2, {
          y: this.offsetY,
          ease: Cubic.easeInOut,
        }),
        o.TweenMax.to(this.mesh_bt.position, 0.2, {
          y: this.offsetY,
          ease: Cubic.easeInOut,
        }),
        this.video.pause(),
        this.video.paused
          ? this.scene.add(this.mesh_bt)
          : this.scene.remove(this.mesh_bt));
  }
  cameraMoveByMouse() {
    let i = 0.02;
    this.step == 1 ? (i = 0.01) : (i = 0.02),
      this.camera_tweening
        ? this.controls.setRotateStart(
            window.innerWidth / 2,
            window.innerHeight / 2,
            i
          )
        : this.controls.setRotate(event, i);
  }
  handleClick(i, n) {
    if (this.step != -1) {
      (this.mouse.x = (i / window.innerWidth) * 2 - 1),
        (this.mouse.y = -(n / window.innerHeight) * 2 + 1),
        this.raycaster.setFromCamera(this.mouse, this.camera);
      var s = this.raycaster.intersectObject(this.mesh_video);
      s.length > 0 &&
        (window.scrollTo({ top: 500 * this.offsetScroll, behavior: "smooth" }),
        (this.step = 1),
        this.videoChange(!0));
    }
  }
  videoEnded() {
    this.mesh_bt && this.scene.add(this.mesh_bt);
  }
  scrollHandler() {
    this.bool_scrollChanging &&
      ((this.threshold2 =
        this.props.data.whyRef.current.getBoundingClientRect().top),
      (this.whyRefHeight =
        this.props.data.whyRef.current.getBoundingClientRect().height),
      window.scrollY > 100 * this.offsetScroll &&
      window.scrollY < 1200 * this.offsetScroll
        ? this.step != 1 &&
          (window.innerWidth > 600 &&
            this.cameraChange({ x: 0, y: 0, z: 10 }, () => {}, 0.7),
          this.videoChange(!0),
          (this.step = 1),
          this.controls.setRotateStart(
            window.innerWidth / 2,
            window.innerHeight / 2,
            0.01
          ))
        : this.step != 2 &&
          (this.cameraChange({ x: 0, y: 0, z: 15 }, () => {}, 0.7),
          this.videoChange(!1),
          (this.step = 2)));
  }
  onWindowResize() {
    super.onWindowResize();
    let i = 0.5;
    (this.offsetY = 1),
      (this.offsetScroll = 0.1),
      window.innerWidth >= 1820
        ? ((i = 1), (this.offsetY = -3), (this.offsetScroll = 1))
        : window.innerWidth > 900
        ? ((i = 1), (this.offsetY = -4), (this.offsetScroll = 0.6))
        : window.innerWidth > 600 &&
          ((i = 0.85), (this.offsetY = -2), (this.offsetScroll = 0.2)),
      this.mesh_video &&
        ((this.mesh_video.position.y = this.offsetY),
        this.mesh_video.scale.set(i, i, 1),
        this.mesh_bt &&
          ((this.mesh_bt.position.y = this.offsetY),
          this.mesh_bt.scale.set(i, i, 1)));
  }
  disposeSingle() {
    if (
      ((this.step = -1),
      this.cvs.removeEventListener("mousedown", (i) => {
        this.handleClick(i.clientX, i.clientY);
      }),
      this.cvs.removeEventListener("touchended", (i) => {
        let n = i.touches[0];
        this.handleClick(n.clientX, n.clientY);
      }),
      this.props.data.videoRef)
    ) {
      let i = this.video.parentNode;
      i && i.removeChild(this.video);
    }
  }
}
const H = { data: { skipModel: !0, hoverEffect: !0, stopRotate: !1 } },
  P = (l) => {
    const {
        data: i,
        modelName: n,
        showLoading: s,
        modelIdx: a,
        style: u,
        ...m
      } = { ...H, ...l },
      d = x.useRef(null);
    return e.jsx(F, {
      ref: d,
      data: i,
      modelName: n,
      showLoading: s,
      modelIdx: a,
      style: u,
      MainExtend: G,
      ...m,
    });
  };
function X({
  img_imo: l,
  tokenName: i,
  desc: n,
  status: s,
  link: a,
  tradePath: u,
  path: m,
  lists: d,
}) {
  const { SCREEN_SIZE: c } = C();
  return e.jsxs(e.Fragment, {
    children: [
      !c.EXTRA_SMALL &&
        e.jsxs(t, {
          item: !0,
          container: !0,
          children: [
            e.jsxs(t, {
              item: !0,
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              xs: 12,
              sx: {
                borderRadius: {
                  xs: "3.25rem 0 0 3.25rem ",
                  sm: "0 0 0 3.25rem",
                },
              },
              style: { margin: 0, padding: 0, position: "relative" },
              children: [
                e.jsx(t, {
                  container: !0,
                  item: !0,
                  sx: {
                    flex: 1,
                    borderRadius: "0 0 0rem 0rem",
                    background: "#1b1c1b",
                    height: "100%",
                    display: { md: "block", sm: "block", xs: "none" },
                  },
                }),
                e.jsxs(t, {
                  container: !0,
                  item: !0,
                  xs: 1,
                  sm: 12,
                  sx: {
                    borderRadius: "0 2.26rem 0rem 2.26rem",
                    height: "100%",
                  },
                  style: { padding: 0, maxWidth: "var(--app-maxWidth)" },
                  children: [
                    e.jsx(t, {
                      container: !0,
                      item: !0,
                      xs: 7,
                      children: e.jsx(t, {
                        container: !0,
                        item: !0,
                        style: { padding: "2rem" },
                        sx: {
                          borderRadius: "0 0 2.26rem 0",
                          background: "#1b1c1b",
                        },
                        children: e.jsx(t, {
                          item: !0,
                          xs: 12,
                          sm: 4,
                          children: e.jsx("img", {
                            src: l,
                            style: { width: "92%", display: "block" },
                          }),
                        }),
                      }),
                    }),
                    e.jsx(t, {
                      container: !0,
                      item: !0,
                      xs: 5,
                      children: e.jsxs(t, {
                        container: !0,
                        item: !0,
                        sx: {
                          borderRadius: "0 2.26rem 0rem 2.26rem ",
                          background: "#1b1c1b",
                        },
                        style: { padding: "2rem" },
                        children: [
                          e.jsx(t, { item: !0, xs: 6, sm: 6, md: 6 }),
                          e.jsx(t, {
                            item: !0,
                            xs: 1,
                            sm: 1,
                            md: 6,
                            children: e.jsx(r, {
                              fontFamily: "Syncopate-Bold",
                              color: "white",
                              style: {
                                lineHeight: "2rem",
                                fontSize: "1.25rem",
                                textAlign: "right",
                                textTransform: "uppercase",
                              },
                              children: s,
                            }),
                          }),
                        ],
                      }),
                    }),
                    e.jsx(t, { item: !0, xs: 0, sm: 1, md: 2 }),
                    e.jsx(t, { item: !0, xs: 0, sm: 6, md: 4 }),
                  ],
                }),
                e.jsx(t, {
                  container: !0,
                  item: !0,
                  sx: {
                    flex: 1,
                    borderRadius: "2.26rem 0 0 0rem ",
                    background: "#1b1c1b",
                    height: "100%",
                    display: { md: "block", sm: "block", xs: "none" },
                  },
                }),
              ],
            }),
            e.jsxs(t, {
              item: !0,
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              spacing: 0,
              xs: 12,
              style: { margin: 0, padding: 0, position: "relative" },
              children: [
                e.jsx(t, {
                  container: !0,
                  item: !0,
                  sx: {
                    flex: 1,
                    borderRadius: "0 0 0rem 0rem",
                    background: "#1b1c1b",
                    height: "100%",
                    display: { md: "block", sm: "block", xs: "none" },
                  },
                }),
                e.jsxs(t, {
                  container: !0,
                  item: !0,
                  xs: 12,
                  sx: { height: "100%" },
                  style: { padding: 0, maxWidth: "var(--app-maxWidth)" },
                  children: [
                    e.jsx(t, {
                      container: !0,
                      item: !0,
                      xs: 7,
                      children: e.jsxs(t, {
                        container: !0,
                        item: !0,
                        style: { padding: "2rem" },
                        sx: {
                          borderRadius: "0rem 2.26rem 0rem 0rem ",
                          background: "#1b1c1b",
                        },
                        children: [
                          e.jsx(t, {
                            item: !0,
                            xs: 12,
                            sx: { marginBottom: "3rem" },
                            children: e.jsx(r, {
                              fontFamily: "Poppins-Bold",
                              color: "white",
                              style: {
                                fontSize: "1.5rem",
                                textTransform: "uppercase",
                              },
                              children: n,
                            }),
                          }),
                          e.jsx(t, {
                            item: !0,
                            container: !0,
                            spacing: 3,
                            children: d.map((h, f) =>
                              e.jsxs(
                                t,
                                {
                                  item: !0,
                                  container: !0,
                                  alignItems: "center",
                                  children: [
                                    e.jsx(t, {
                                      item: !0,
                                      xs: 1,
                                      children: e.jsx(r, {
                                        fontFamily: "Syncopate-Regular",
                                        color: "#F5F5F5",
                                        align: "left",
                                        style: {
                                          paddingRight: "1rem",
                                          fontSize: "1rem",
                                          lineHeight: "1.5rem",
                                          textTransform: "uppercase",
                                        },
                                        children: "<>",
                                      }),
                                    }),
                                    e.jsx(t, {
                                      item: !0,
                                      xs: 10,
                                      children: e.jsx(r, {
                                        fontFamily: "SpaceMono-Regular",
                                        color: "#F5F5F5",
                                        sx: {
                                          fontSize: {
                                            xs: "1.5rem",
                                            sm: "1rem",
                                            lg: "0.9rem",
                                            xl: "0.8rem",
                                          },
                                          lineHeight: "1.5rem",
                                          textTransform: "uppercase",
                                        },
                                        children: h,
                                      }),
                                    }),
                                  ],
                                },
                                f
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    e.jsx(t, {
                      container: !0,
                      item: !0,
                      xs: 5,
                      children: e.jsxs(t, {
                        container: !0,
                        justifyContent: "space-between",
                        direction: "column",
                        item: !0,
                        sx: {
                          borderRadius: "2.26rem 0rem 2rem 0 ",
                          background: "white",
                          border: "2px solid black",
                        },
                        children: [
                          e.jsxs(t, {
                            container: !0,
                            item: !0,
                            xs: 2,
                            sx: { padding: "2rem", justifyContent: "flex-end" },
                            children: [
                              a &&
                                e.jsx(g, {
                                  href: a,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  color: "inherit",
                                  underline: "none",
                                  component: "a",
                                  sx: {
                                    ":hover": {
                                      color: "red",
                                      ".go-icon": { color: "black" },
                                      ".go-icon-box": {
                                        backgroundColor: "#00FAFF !important",
                                      },
                                    },
                                  },
                                  children: e.jsx(t, {
                                    item: !0,
                                    container: !0,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    className: "go-icon-box",
                                    style: {
                                      backgroundColor: "black",
                                      height: "4rem",
                                      width: "4rem",
                                      marginLeft: "2rem",
                                      borderRadius: "0.625rem 0rem",
                                    },
                                    children: e.jsx(p, {
                                      color: "white",
                                      fontSize: "3.5rem",
                                      className: "go-icon",
                                    }),
                                  }),
                                }),
                              m &&
                                e.jsx(g, {
                                  component: b,
                                  to: m,
                                  underline: "none",
                                  sx: {
                                    ":hover": {
                                      color: "red",
                                      ".go-icon": { color: "black" },
                                      ".go-icon-box": {
                                        backgroundColor: "#00FAFF !important",
                                      },
                                    },
                                  },
                                  children: e.jsx(t, {
                                    item: !0,
                                    container: !0,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    className: "go-icon-box",
                                    style: {
                                      backgroundColor: "black",
                                      height: "4rem",
                                      width: "4rem",
                                      marginLeft: "2rem",
                                      borderRadius: "0.625rem 0rem",
                                    },
                                    children: e.jsx(p, {
                                      color: "white",
                                      fontSize: "3.5rem",
                                      className: "go-icon",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          e.jsxs(t, {
                            item: !0,
                            container: !0,
                            alignContent: "flex-end",
                            xs: 6,
                            style: { padding: "2rem" },
                            children: [
                              e.jsx(t, {
                                item: !0,
                                xs: 12,
                                children: e.jsx(r, {
                                  fontFamily: "SpaceMono-Regular",
                                  color: "#1b1c1b",
                                  variant: "h1",
                                  style: {
                                    fontSize: "1.2rem",
                                    lineHeight: "2.5rem",
                                    textAlign: "left",
                                    textTransform: "uppercase",
                                  },
                                  children: "MORE ON",
                                }),
                              }),
                              e.jsxs(t, {
                                item: !0,
                                container: !0,
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [
                                  e.jsx(r, {
                                    fontFamily: "Syncopate-Bold",
                                    color: "#1b1c1b",
                                    variant: "h1",
                                    style: {
                                      fontSize: "2.7rem",
                                      textAlign: "left",
                                      textTransform: "uppercase",
                                    },
                                    children: i,
                                  }),
                                  u &&
                                    e.jsx(g, {
                                      component: b,
                                      to: u,
                                      underline: "none",
                                      children: e.jsx(t, {
                                        item: !0,
                                        container: !0,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        sx: {
                                          color: "black",
                                          borderBottom: "2px solid black",
                                          borderColor: "black",
                                          padding: "0.0rem 0.5rem",
                                          width: "auto",
                                          ":hover": { borderColor: "black" },
                                        },
                                        children: "TRADE",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsx(t, { item: !0, xs: 0, sm: 1, md: 2 }),
                    e.jsx(t, { item: !0, xs: 0, sm: 6, md: 4 }),
                  ],
                }),
                e.jsx(t, {
                  container: !0,
                  item: !0,
                  sx: {
                    flex: 1,
                    borderRadius: "0rem 0 0 2rem ",
                    background: "#1b1c1b",
                    height: "100%",
                    display: { md: "block", sm: "block", xs: "none" },
                  },
                }),
              ],
            }),
          ],
        }),
      c.EXTRA_SMALL &&
        e.jsxs(t, {
          container: !0,
          item: !0,
          children: [
            e.jsx(t, {
              item: !0,
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              spacing: 3,
              xs: 12,
              sx: {
                borderRadius: {
                  xs: "3.25rem 0 0 3.25rem ",
                  sm: "0 0 0 3.25rem",
                },
              },
              style: { margin: 0, padding: 0, position: "relative" },
              children: e.jsxs(t, {
                container: !0,
                item: !0,
                sm: 12,
                md: 10,
                xl: 8,
                sx: { height: "100%" },
                style: { padding: 0 },
                children: [
                  e.jsx(t, {
                    container: !0,
                    item: !0,
                    xs: 7,
                    children: e.jsx(t, {
                      container: !0,
                      item: !0,
                      style: { padding: "2rem" },
                      sx: {
                        borderRadius: "2.26rem 0 0 0",
                        background: "#1b1c1b",
                      },
                      children: e.jsx(t, {
                        item: !0,
                        xs: 8,
                        sm: 5,
                        children: e.jsx("img", {
                          src: l,
                          style: { width: "100%", display: "block" },
                        }),
                      }),
                    }),
                  }),
                  e.jsx(t, {
                    container: !0,
                    item: !0,
                    xs: 5,
                    children: e.jsxs(t, {
                      container: !0,
                      item: !0,
                      sx: {
                        borderRadius: "0 0rem 0rem 0rem ",
                        background: "#1b1c1b",
                      },
                      style: { padding: "2rem" },
                      children: [
                        e.jsx(t, { item: !0, xs: 6, sm: 6, md: 6 }),
                        e.jsx(t, {
                          item: !0,
                          xs: 1,
                          sm: 1,
                          md: 2,
                          children: e.jsx(r, {
                            fontFamily: "Syncopate-Bold",
                            color: "white",
                            style: {
                              fontSize: "2.2rem",
                              textAlign: "right",
                              textTransform: "uppercase",
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            e.jsx(t, {
              item: !0,
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              spacing: 3,
              xs: 12,
              style: { margin: 0, padding: 0, position: "relative" },
              children: e.jsxs(t, {
                container: !0,
                item: !0,
                xs: 12,
                sm: 12,
                md: 10,
                xl: 8,
                sx: { height: "100%" },
                style: { padding: 0 },
                children: [
                  e.jsx(t, {
                    container: !0,
                    item: !0,
                    xs: 12,
                    children: e.jsxs(t, {
                      container: !0,
                      item: !0,
                      style: { padding: "2rem" },
                      sx: {
                        borderRadius: "0rem 0rem 0rem 2.26rem ",
                        background: "#1b1c1b",
                      },
                      children: [
                        e.jsx(t, {
                          item: !0,
                          xs: 11,
                          sx: { marginBottom: "3rem" },
                          children: e.jsx(r, {
                            fontFamily: "SpaceMono-Regular",
                            color: "white",
                            style: {
                              fontSize: "1.4rem",
                              textTransform: "uppercase",
                            },
                            children: n,
                          }),
                        }),
                        d.map((h, f) =>
                          e.jsxs(
                            t,
                            {
                              item: !0,
                              container: !0,
                              alignItems: "center",
                              children: [
                                e.jsx(t, {
                                  item: !0,
                                  xs: 2,
                                  children: e.jsx(r, {
                                    fontFamily: "SpaceMono-Regular",
                                    color: "white",
                                    align: "center",
                                    style: {
                                      fontSize: "1.4rem",
                                      textTransform: "uppercase",
                                      marginBottom: "3rem",
                                    },
                                    children: "<>",
                                  }),
                                }),
                                e.jsx(t, {
                                  item: !0,
                                  xs: 10,
                                  children: e.jsx(r, {
                                    fontFamily: "SpaceMono-Regular",
                                    color: "white",
                                    style: {
                                      fontSize: "1.4rem",
                                      textTransform: "uppercase",
                                      marginBottom: "3rem",
                                    },
                                    children: h,
                                  }),
                                }),
                              ],
                            },
                            f
                          )
                        ),
                        e.jsxs(t, {
                          item: !0,
                          container: !0,
                          alignItems: "center",
                          children: [
                            e.jsx(t, {
                              item: !0,
                              xs: 6,
                              children: e.jsx(r, {
                                fontFamily: "SpaceMono-Regular",
                                color: "white",
                                align: "center",
                                style: {
                                  fontSize: "1.4rem",
                                  textTransform: "uppercase",
                                },
                              }),
                            }),
                            e.jsx(t, {
                              item: !0,
                              xs: 6,
                              children: e.jsx(r, {
                                fontFamily: "SpaceMono-Regular",
                                color: "white",
                                style: {
                                  fontSize: "3.4rem",
                                  textAlign: "right",
                                  textTransform: "uppercase",
                                  margin: "1rem 0",
                                },
                                children: s,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx(t, { item: !0, xs: 0, sm: 1, md: 2 }),
                  e.jsx(t, { item: !0, xs: 0, sm: 6, md: 4 }),
                ],
              }),
            }),
            e.jsx(t, {
              item: !0,
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              spacing: 0,
              xs: 12,
              style: { margin: 0, padding: 0, position: "relative" },
              children: e.jsx(t, {
                container: !0,
                item: !0,
                xs: 12,
                children: e.jsxs(t, {
                  container: !0,
                  direction: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  item: !0,
                  sx: {
                    borderRadius: "2.26rem 0rem 0 0 ",
                    background: "white",
                    border: "2px solid black",
                  },
                  children: [
                    e.jsxs(t, {
                      item: !0,
                      container: !0,
                      alignContent: "flex-start",
                      xs: 6,
                      style: { padding: "0rem" },
                      children: [
                        e.jsx(t, {
                          item: !0,
                          xs: 12,
                          children: e.jsx(r, {
                            fontFamily: "SpaceMono-Regular",
                            color: "#1b1c1b",
                            variant: "h1",
                            style: {
                              fontSize: "1rem",
                              textAlign: "left",
                              textTransform: "uppercase",
                              margin: "1rem 0",
                            },
                            children: "MORE ON",
                          }),
                        }),
                        e.jsx(t, {
                          item: !0,
                          children: e.jsx(r, {
                            fontFamily: "Syncopate-Bold",
                            color: "#1b1c1b",
                            variant: "h1",
                            style: {
                              fontSize: "2.1rem",
                              textAlign: "left",
                              textTransform: "uppercase",
                            },
                            children: i,
                          }),
                        }),
                      ],
                    }),
                    e.jsxs(t, {
                      container: !0,
                      item: !0,
                      xs: 5,
                      sx: { padding: "2rem", justifyContent: "flex-end" },
                      children: [
                        a &&
                          e.jsx(g, {
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            color: "inherit",
                            underline: "none",
                            component: "a",
                            sx: {
                              ":hover": {
                                color: "red",
                                ".go-icon": { color: "black" },
                                ".go-icon-box": {
                                  backgroundColor: "#00FAFF !important",
                                },
                              },
                            },
                            children: e.jsx(t, {
                              item: !0,
                              container: !0,
                              justifyContent: "center",
                              alignContent: "center",
                              className: "go-icon-box",
                              style: {
                                backgroundColor: "black",
                                height: "4rem",
                                width: "4rem",
                                marginLeft: "2rem",
                                borderRadius: "0.625rem 0rem",
                              },
                              children: e.jsx(p, {
                                color: "white",
                                fontSize: "3.5rem",
                                className: "go-icon",
                              }),
                            }),
                          }),
                        m &&
                          e.jsx(g, {
                            component: b,
                            to: m,
                            underline: "none",
                            sx: {
                              ":hover": {
                                color: "red",
                                ".go-icon": { color: "black" },
                                ".go-icon-box": {
                                  backgroundColor: "#00FAFF !important",
                                },
                              },
                            },
                            children: e.jsx(t, {
                              item: !0,
                              container: !0,
                              justifyContent: "center",
                              alignContent: "center",
                              className: "go-icon-box",
                              style: {
                                backgroundColor: "black",
                                height: "4rem",
                                width: "4rem",
                                marginLeft: "2rem",
                                borderRadius: "0.625rem 0rem",
                              },
                              children: e.jsx(p, {
                                color: "white",
                                fontSize: "3.5rem",
                                className: "go-icon",
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
    ],
  });
}
const Z = () => {
  const l = z(),
    { SCREEN_SIZE: i } = C(),
    n = x.useRef(null),
    s = x.useRef(null),
    [a, u] = x.useState({
      mounted: !1,
      hoverEffect: !0,
      stopRotate: !1,
      skipModel: !0,
      videoRef: n,
      whyRef: s,
    });
  x.useEffect(() => {
    u((c) => ({ ...c, mounted: !0 }));
  }, []);
  const { imoStatus: m } = B(O.KUMO),
    d = x.useMemo(
      () => [
        {
          img_imo: Y,
          tokenName: "$KUMO",
          status: [v.Init, v.OnSale].includes(m) ? "Launching" : "SOLD OUT",
          path: "/app/opml/",
          desc: "The Open-Source Future of Generative Video",
          lists: [
            "revolutionizing video generation, leveraging the power of Diffusion Transformers (DiT)",
            "empowering creators and developers to unlock new creative possibilities",
          ],
        },
        {
          img_imo: U,
          tokenName: "$brm",
          status: "SOLD OUT",
          path: "/app/opml/",
          desc: "Buddhist Religious Model: AI for spiritual guidance inspired by Buddhist values",
          lists: [
            "Connecting technology with spirituality to provide ethical interactions.",
            "Bringing Buddhist teachings to AI to offer simple, personalized advice and support for everyday life.",
          ],
          tradePath: "/app/swap/?token=brm",
        },
        {
          img_imo: D,
          tokenName: "$OLM",
          status: "SOLD OUT",
          link: "https://openlm.io/",
          desc: "OpenLM: Community-owned, open-source language model on Ethereum",
          lists: [
            "Maximize GPU utilization and training speed with our groundbreaking repository.",
            "Democratizing AI through transparency, collaboration, and decentralization, making knowledge freely available globally.",
            "Accelerate AI research and development with our high-performance, easily modifiable, and tokenized language model, $OLM.",
          ],
          tradePath: "/app/swap/?token=olm",
        },
      ],
      [m]
    );
  return e.jsx(E, {
    theme: l,
    children: e.jsxs(t, {
      item: !0,
      container: !0,
      xs: 12,
      sx: {
        height: "auto",
        padding: { xs: "0", sm: 0 },
        marginTop: { xs: "10rem", md: "0rem" },
      },
      children: [
        e.jsxs(t, {
          item: !0,
          xs: 12,
          container: !0,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          direction: "row",
          style: { height: "50vh", position: "relative" },
          children: [
            a.mounted &&
              e.jsx(P, {
                data: a,
                modelIdx: 0,
                showLoading: !1,
                modelName: "imo.glb",
                style: {
                  position: "fixed",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: 0,
                },
              }),
            e.jsx(t, {
              item: !0,
              container: !0,
              direction: "column",
              style: { position: "absolute" },
              sx: { top: { xs: "0rem" } },
              children: e.jsx(L, {
                title: "IMO",
                children: [
                  e.jsx(
                    r,
                    {
                      className: "primary",
                      children: "INITIAL MODEL OFFERING",
                    },
                    1
                  ),
                  e.jsx(
                    r,
                    {
                      className: "secondary",
                      children: "Anyone can own ai model and get its revenue",
                    },
                    2
                  ),
                  e.jsx(
                    r,
                    {
                      className: "secondary",
                      children:
                        "by holding erc-7641 intrinsic rev-share token.",
                    },
                    3
                  ),
                ],
              }),
            }),
          ],
        }),
        e.jsx(t, {
          item: !0,
          children: e.jsx("video", {
            preload: "preload",
            controls: !0,
            ref: n,
            style: {
              width: "100%",
              height: "100%",
              display: "none",
              opacity: 0,
            },
            crossOrigin: "anonymous",
            src: "https://oramedia.s3.amazonaws.com/videos/ora_compress.mp4",
          }),
        }),
        e.jsx(t, {
          container: !0,
          sx: {
            margin: { xs: "15rem auto 0rem auto", sm: "40rem auto 0rem auto" },
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
            zIndex: 3,
            height: "2rem",
            width: "100%",
          },
        }),
        e.jsxs(t, {
          container: !0,
          sx: { background: "#00f6ff", position: "relative" },
          children: [
            e.jsx(t, {
              ref: s,
              item: !0,
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              xs: 12,
              sx: {
                borderRadius: { xs: "0 0 3.25rem 0rem", sm: "0 0 0 3.25rem" },
              },
              style: {
                margin: "auto",
                padding: 0,
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1) , #1b1c1b)",
                position: "relative",
              },
              children: e.jsxs(t, {
                container: !0,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                item: !0,
                xs: 12,
                style: { padding: "0 2rem", maxWidth: "var(--app-maxWidth)" },
                children: [
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 10,
                    lg: 8,
                    children: e.jsx(r, {
                      fontFamily: "Syncopate-Bold",
                      color: "white",
                      sx: {
                        fontSize: { xs: "2.1rem", lg: "1.8rem", xl: "1.6rem" },
                        textAlign: "center",
                        textTransform: "uppercase",
                        margin: "3rem 0 3rem 0",
                      },
                      children: "IMO tokenizes AI models",
                    }),
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    children: e.jsx(r, {
                      fontFamily: "SpaceMono-Regular",
                      color: "white",
                      sx: {
                        fontSize: {
                          xs: "1.5rem",
                          sm: "1rem",
                          lg: "0.9rem",
                          xl: "0.8rem",
                        },
                        lineHeight: { xs: "2.5rem", sm: "1.5rem" },
                        textAlign: { xs: "center", sm: "justify" },
                      },
                      style: {
                        textTransform: "uppercase",
                        marginBottom: "4rem",
                      },
                      children:
                        "IMO revolutionizes open-source AI models by tokenizing them, enabling sustainable funding and community-driven development. An AI model performs an IMO, releasing an ERC-20 token, allowing anyone to purchase and own shares. As a result, token holders earn revenue generated by the AI model, promoting a safer and more prosperous future for everyone.",
                    }),
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    style: { padding: "0", marginBottom: "4rem" },
                    children: e.jsx("img", {
                      src: W,
                      style: { height: "100%", width: "100%" },
                    }),
                  }),
                ],
              }),
            }),
            e.jsxs(t, {
              item: !0,
              container: !0,
              xs: 12,
              justifyContent: "flex-start",
              alignItems: "center",
              style: {
                position: "relative",
                margin: "2rem auto",
                padding: "0 2rem",
                maxWidth: "var(--app-maxWidth)",
              },
              children: [
                e.jsx(t, {
                  container: !0,
                  item: !0,
                  xs: 1,
                  justifyContent: "right",
                  sx: { paddingRight: { xs: "2rem", sm: "5rem" } },
                  children: e.jsx(A, {
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
                e.jsx(t, {
                  item: !0,
                  children: e.jsx(r, {
                    fontFamily: "Syncopate-Bold",
                    color: "black",
                    variant: "h1",
                    style: {
                      fontSize: "2.1rem",
                      textAlign: "justify",
                      textTransform: "uppercase",
                    },
                    children: "Case",
                  }),
                }),
              ],
            }),
            d.map((c, h) => e.jsx(X, { ...c }, h)),
            !i.EXTRA_SMALL &&
              e.jsx(t, {
                item: !0,
                container: !0,
                children: e.jsxs(t, {
                  item: !0,
                  container: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  spacing: 0,
                  xs: 12,
                  style: { margin: 0, padding: 0, position: "relative" },
                  children: [
                    e.jsx(t, {
                      container: !0,
                      item: !0,
                      sx: {
                        flex: 1,
                        borderRadius: "0 0 2.26rem 0rem",
                        background: "#1b1c1b",
                        height: "100%",
                        display: { md: "block", sm: "block", xs: "none" },
                      },
                    }),
                    e.jsxs(t, {
                      container: !0,
                      item: !0,
                      xs: 12,
                      sx: { height: "100%" },
                      style: { padding: 0, maxWidth: "var(--app-maxWidth)" },
                      children: [
                        e.jsx(t, {
                          container: !0,
                          item: !0,
                          xs: 7,
                          children: e.jsx(t, {
                            container: !0,
                            item: !0,
                            style: { padding: "2rem" },
                            sx: {
                              borderRadius: "0 0 0 2.26rem ",
                              background: "#1b1c1b",
                            },
                            children: e.jsxs(t, {
                              container: !0,
                              item: !0,
                              xs: 12,
                              justifyContent: "flex-start",
                              alignItems: "center",
                              alignContent: "center",
                              style: { padding: 0, margin: 0 },
                              children: [
                                e.jsx(t, {
                                  item: !0,
                                  xs: 3,
                                  children: e.jsx(r, {
                                    fontFamily: "SpaceMono-Regular",
                                    color: "#00FBFF",
                                    style: {
                                      fontSize: "1.0rem",
                                      textTransform: "uppercase",
                                    },
                                    children: "More models",
                                  }),
                                }),
                                e.jsx(t, {
                                  item: !0,
                                  xs: 6,
                                  children: e.jsx(r, {
                                    fontFamily: "Syncopate-Bold",
                                    color: "#00FBFF",
                                    style: {
                                      fontSize: "1.25rem",
                                      lineHeight: "1.5rem",
                                      textTransform: "uppercase",
                                    },
                                    children: "coming soon",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        e.jsx(t, {
                          container: !0,
                          item: !0,
                          xs: 5,
                          children: e.jsx(t, {
                            container: !0,
                            item: !0,
                            sx: {
                              borderRadius: "0 2.26rem 0 0",
                              background: "#1b1c1b",
                            },
                            style: { padding: "2rem" },
                          }),
                        }),
                        e.jsx(t, { item: !0, xs: 0, sm: 1, md: 2 }),
                        e.jsx(t, { item: !0, xs: 0, sm: 6, md: 4 }),
                      ],
                    }),
                    e.jsx(t, {
                      container: !0,
                      item: !0,
                      sx: {
                        flex: 1,
                        borderRadius: "2.26rem 0 0 0 ",
                        background: "#1b1c1b",
                        height: "100%",
                        display: { md: "block", sm: "block", xs: "none" },
                      },
                    }),
                  ],
                }),
              }),
            i.EXTRA_SMALL &&
              e.jsx(t, {
                container: !0,
                item: !0,
                children: e.jsx(t, {
                  item: !0,
                  container: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  spacing: 3,
                  xs: 12,
                  style: { margin: 0, padding: 0, position: "relative" },
                  children: e.jsxs(t, {
                    container: !0,
                    item: !0,
                    sm: 12,
                    md: 10,
                    xl: 8,
                    sx: { height: "100%" },
                    style: { padding: 0 },
                    children: [
                      e.jsx(t, {
                        container: !0,
                        item: !0,
                        xs: 7,
                        children: e.jsx(t, {
                          container: !0,
                          item: !0,
                          style: { padding: "2rem" },
                          sx: {
                            borderRadius: "0 0 0 2.26rem ",
                            background: "#1b1c1b",
                          },
                          children: e.jsxs(t, {
                            container: !0,
                            item: !0,
                            xs: 12,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            alignContent: "center",
                            children: [
                              e.jsx(t, {
                                item: !0,
                                xs: 12,
                                children: e.jsx(r, {
                                  fontFamily: "SpaceMono-Regular",
                                  color: "#00FBFF",
                                  style: {
                                    fontSize: "1.5rem",
                                    textTransform: "uppercase",
                                  },
                                  children: "More models",
                                }),
                              }),
                              e.jsx(t, {
                                item: !0,
                                xs: 12,
                                children: e.jsx(r, {
                                  fontFamily: "SpaceMono-Regular",
                                  color: "#00FBFF",
                                  style: {
                                    fontSize: "3.0rem",
                                    textTransform: "uppercase",
                                  },
                                  children: "coming soon",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      e.jsx(t, {
                        container: !0,
                        item: !0,
                        xs: 5,
                        children: e.jsx(t, {
                          container: !0,
                          item: !0,
                          sx: {
                            borderRadius: "0 2.26rem 0 0",
                            background: "#1b1c1b",
                          },
                          style: { padding: "2rem" },
                        }),
                      }),
                      e.jsx(t, { item: !0, xs: 0, sm: 1, md: 2 }),
                      e.jsx(t, { item: !0, xs: 0, sm: 6, md: 4 }),
                    ],
                  }),
                }),
              }),
          ],
        }),
      ],
    }),
  });
};
export { Z as default };
