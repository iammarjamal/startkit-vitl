import { ref, unref, withCtx, createVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { useMediaQuery } from "@vueuse/core";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "app",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const title = ref(props.title);
    const desc = ref(props.desc);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title inertia data-v-377d121b${_scopeId}>${ssrInterpolate(unref(title))}</title><meta name="description"${ssrRenderAttr("content", unref(desc))} data-v-377d121b${_scopeId}><meta property="og:site_name"${ssrRenderAttr("content", unref(title))} data-v-377d121b${_scopeId}><meta property="og:title"${ssrRenderAttr("content", unref(title))} data-v-377d121b${_scopeId}><meta property="og:description"${ssrRenderAttr("content", unref(desc))} data-v-377d121b${_scopeId}><meta property="twitter:title"${ssrRenderAttr("content", unref(title))} data-v-377d121b${_scopeId}><meta property="twitter:description"${ssrRenderAttr("content", unref(desc))} data-v-377d121b${_scopeId}>`);
          } else {
            return [
              createVNode("title", { inertia: "" }, toDisplayString(unref(title)), 1),
              createVNode("meta", {
                name: "description",
                content: unref(desc)
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:site_name",
                content: unref(title)
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:title",
                content: unref(title)
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: unref(desc)
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:title",
                content: unref(title)
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:description",
                content: unref(desc)
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main data-v-377d121b>`);
      if (unref(isDesktop)) {
        _push(`<div class="flex h-full flex-col desktop" data-v-377d121b>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<div class="scrollbar-hide h-full select-none phone" data-v-377d121b>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-377d121b"]]);
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "ar": {
        "hello": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "مرحباً" } }
      },
      "en": {
        "hello": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hello world!" } }
      }
    }
  });
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const checkboxOne = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsTheme = resolveComponent("WidgetsTheme");
      const _component_ElementsLink = resolveComponent("ElementsLink");
      _push(ssrRenderComponent(App, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center h-full min-h-screen w-full min-w-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsTheme, { icon: "" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElementsLink, { href: "/fasdfasdfa" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-dark dark:text-light text-9xl"${_scopeId2}>${ssrInterpolate(unref(t)("hello"))} ${ssrInterpolate(unref(checkboxOne))}</h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-dark dark:text-light text-9xl" }, toDisplayString(unref(t)("hello")) + " " + toDisplayString(unref(checkboxOne)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-2.5"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_WidgetsTheme, { inline: "" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center h-full min-h-screen w-full min-w-screen" }, [
                createVNode(_component_WidgetsTheme, { icon: "" }),
                createVNode(_component_ElementsLink, { href: "/fasdfasdfa" }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "text-dark dark:text-light text-9xl" }, toDisplayString(unref(t)("hello")) + " " + toDisplayString(unref(checkboxOne)), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex flex-col gap-2.5" }),
                createVNode(_component_WidgetsTheme, { inline: "" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
if (typeof block0 === "function") block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/home/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
