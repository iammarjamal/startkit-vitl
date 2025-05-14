import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    status: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const titleMap = {
      503: "503",
      500: "500",
      404: "404",
      403: "403"
    };
    const title = computed(() => titleMap[props.status] || `${props.status}: Unknown Error`);
    computed(() => descriptionMap[props.status] || "An unexpected error occurred.");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center h-full min-h-screen px-4 place-content-center" }, _attrs))}><div class="h-full"><h1 class="text-dark/60 dark:text-light/60 text-9xl">${ssrInterpolate(unref(title))}</h1></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/error/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
