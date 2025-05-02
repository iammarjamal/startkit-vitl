import { unref, mergeProps, withCtx, renderSlot, useSSRContext, computed, ref, reactive, watch, onMounted, onUnmounted, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createVNode, defineComponent, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { Link, Head } from "@inertiajs/vue3";
import { Icon } from "@iconify/vue";
import { useCurrentElement, createReusableTemplate, useMediaQuery, useColorMode } from "@vueuse/core";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Primitive, useForwardPropsEmits, useFilter, ListboxRoot, useId, ListboxGroup, ListboxGroupLabel, useForwardProps, ListboxFilter, ListboxItem, ListboxContent, createContext, PopoverRoot, PopoverPortal, PopoverContent, PopoverTrigger } from "reka-ui";
import { Search } from "lucide-vue-next";
import { DrawerRoot, DrawerClose, DrawerOverlay, DrawerPortal, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "vaul-vue";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
const _sfc_main$n = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps(_ctx.$attrs, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/elements/link/Index.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$m = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false, default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "button",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/button/Button.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$l = {
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: null, required: false, default: "" },
    defaultValue: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    orientation: { type: String, required: false },
    dir: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    selectionBehavior: { type: String, required: false },
    highlightOnHover: { type: Boolean, required: false },
    by: { type: [String, Function], required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    const allItems = ref(/* @__PURE__ */ new Map());
    const allGroups = ref(/* @__PURE__ */ new Map());
    const { contains } = useFilter({ sensitivity: "base" });
    const filterState = reactive({
      search: "",
      filtered: {
        /** The count of all visible items. */
        count: 0,
        /** Map from visible item id to its search score. */
        items: /* @__PURE__ */ new Map(),
        /** Set of groups with at least one visible item. */
        groups: /* @__PURE__ */ new Set()
      }
    });
    function filterItems() {
      if (!filterState.search) {
        filterState.filtered.count = allItems.value.size;
        return;
      }
      filterState.filtered.groups = /* @__PURE__ */ new Set();
      let itemCount = 0;
      for (const [id, value] of allItems.value) {
        const score = contains(value, filterState.search);
        filterState.filtered.items.set(id, score ? 1 : 0);
        if (score) itemCount++;
      }
      for (const [groupId, group] of allGroups.value) {
        for (const itemId of group) {
          if (filterState.filtered.items.get(itemId) > 0) {
            filterState.filtered.groups.add(groupId);
            break;
          }
        }
      }
      filterState.filtered.count = itemCount;
    }
    watch(
      () => filterState.search,
      () => {
        filterItems();
      }
    );
    provideCommandContext({
      allItems,
      allGroups,
      filterState
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxRoot), mergeProps({ "data-slot": "command" }, unref(forwarded), {
        class: unref(cn)(
          "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/command/Command.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "CommandEmpty",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const { filterState } = useCommand();
    const isRender = computed(
      () => !!filterState.search && filterState.filtered.count === 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (isRender.value) {
        _push(ssrRenderComponent(unref(Primitive), mergeProps({ "data-slot": "command-empty" }, delegatedProps.value, {
          class: unref(cn)("py-6 text-center text-sm", props.class)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/command/CommandEmpty.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "CommandGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    heading: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const { allGroups, filterState } = useCommand();
    const id = useId();
    const isRender = computed(
      () => !filterState.search ? true : filterState.filtered.groups.has(id)
    );
    provideCommandGroupContext({ id });
    onMounted(() => {
      if (!allGroups.value.has(id)) allGroups.value.set(id, /* @__PURE__ */ new Set());
    });
    onUnmounted(() => {
      allGroups.value.delete(id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxGroup), mergeProps(delegatedProps.value, {
        id: unref(id),
        "data-slot": "command-group",
        class: unref(cn)("text-foreground overflow-hidden p-1", props.class),
        hidden: isRender.value ? void 0 : true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.heading) {
              _push2(ssrRenderComponent(unref(ListboxGroupLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.heading ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/command/CommandGroup.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: String, required: false },
    autoFocus: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    const { filterState } = useCommand();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "command-input-wrapper",
        class: "flex h-12 items-center gap-2 border-b px-3"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Search), { class: "size-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ListboxFilter), mergeProps({ ...unref(forwardedProps), ..._ctx.$attrs }, {
        modelValue: unref(filterState).search,
        "onUpdate:modelValue": ($event) => unref(filterState).search = $event,
        "data-slot": "command-input",
        "auto-focus": "",
        class: unref(cn)(
          "placeholder:text-muted-foreground flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/command/CommandInput.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    value: { type: null, required: true },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    const id = useId();
    const { filterState, allItems, allGroups } = useCommand();
    const groupContext = useCommandGroup();
    const isRender = computed(() => {
      if (!filterState.search) {
        return true;
      } else {
        const filteredCurrentItem = filterState.filtered.items.get(id);
        if (filteredCurrentItem === void 0) {
          return true;
        }
        return filteredCurrentItem > 0;
      }
    });
    const itemRef = ref();
    const currentElement = useCurrentElement(itemRef);
    onMounted(() => {
      var _a;
      if (!(currentElement.value instanceof HTMLElement)) return;
      allItems.value.set(
        id,
        currentElement.value.textContent ?? props.value.toString()
      );
      const groupId = groupContext == null ? void 0 : groupContext.id;
      if (groupId) {
        if (!allGroups.value.has(groupId)) {
          allGroups.value.set(groupId, /* @__PURE__ */ new Set([id]));
        } else {
          (_a = allGroups.value.get(groupId)) == null ? void 0 : _a.add(id);
        }
      }
    });
    onUnmounted(() => {
      allItems.value.delete(id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isRender.value) {
        _push(ssrRenderComponent(unref(ListboxItem), mergeProps(unref(forwarded), {
          id: unref(id),
          ref_key: "itemRef",
          ref: itemRef,
          "data-slot": "command-item",
          class: unref(cn)(
            `data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-3 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
            props.class
          ),
          onSelect: () => {
            unref(filterState).search = "";
          }
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/command/CommandItem.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "CommandList",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxContent), mergeProps({ "data-slot": "command-list" }, unref(forwarded), {
        class: unref(cn)(
          "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="presentation"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { role: "presentation" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/command/CommandList.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const [useCommand, provideCommandContext] = createContext("Command");
const [useCommandGroup, provideCommandGroupContext] = createContext("CommandGroup");
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    activeSnapPoint: {},
    closeThreshold: {},
    shouldScaleBackground: { type: Boolean, default: true },
    setBackgroundColorOnScale: { type: Boolean },
    scrollLockTimeout: {},
    fixed: { type: Boolean },
    dismissible: { type: Boolean },
    modal: { type: Boolean },
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    nested: { type: Boolean },
    direction: {},
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean },
    preventScrollRestoration: { type: Boolean },
    snapPoints: {},
    fadeFromIndex: {}
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerRoot), mergeProps({ "data-slot": "drawer" }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/Drawer.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DrawerClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerClose), mergeProps({ "data-slot": "drawer-close" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerClose.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DrawerOverlay",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerOverlay), mergeProps({ "data-slot": "drawer-overlay" }, delegatedProps.value, {
        class: unref(cn)(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerOverlay.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DrawerContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$d, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DrawerContent), mergeProps({ "data-slot": "drawer-content" }, unref(forwarded), {
              class: unref(cn)(
                `group/drawer-content bg-background fixed z-50 flex h-auto flex-col`,
                `data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg`,
                `data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg`,
                `data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm`,
                `data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm`,
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"${_scopeId2}></div>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$d),
              createVNode(unref(DrawerContent), mergeProps({ "data-slot": "drawer-content" }, unref(forwarded), {
                class: unref(cn)(
                  `group/drawer-content bg-background fixed z-50 flex h-auto flex-col`,
                  `data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg`,
                  `data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg`,
                  `data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm`,
                  `data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm`,
                  props.class
                )
              }), {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerContent.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DrawerDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerDescription), mergeProps({ "data-slot": "drawer-description" }, delegatedProps.value, {
        class: unref(cn)("text-muted-foreground text-sm", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerDescription.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DrawerFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "drawer-footer",
        class: unref(cn)("mt-auto flex flex-col gap-2 p-4", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerFooter.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DrawerHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "drawer-header",
        class: unref(cn)("flex flex-col gap-1.5 p-4", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DrawerTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerTitle), mergeProps({ "data-slot": "drawer-title" }, delegatedProps.value, {
        class: unref(cn)("text-foreground font-semibold", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerTitle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DrawerTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerTrigger), mergeProps({ "data-slot": "drawer-trigger" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/drawer/DrawerTrigger.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverRoot), mergeProps({ "data-slot": "popover" }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/popover/Popover.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "PopoverContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false, default: 4 },
    align: { type: null, required: false, default: "center" },
    alignOffset: { type: Number, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    positionStrategy: { type: String, required: false },
    updatePositionStrategy: { type: String, required: false },
    disableUpdateOnLayoutShift: { type: Boolean, required: false },
    prioritizePosition: { type: Boolean, required: false },
    reference: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    disableOutsidePointerEvents: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverContent), mergeProps({ "data-slot": "popover-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PopoverContent), mergeProps({ "data-slot": "popover-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/popover/PopoverContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "PopoverTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverTrigger), mergeProps({ "data-slot": "popover-trigger" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shadcn/popover/PopoverTrigger.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function block0$2(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "ar": {
        "body": {
          "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "البحث" } },
          "noResultsFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "لا توجد نتائج" } }
        }
      },
      "en": {
        "body": {
          "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search" } },
          "noResultsFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No results found" } }
        }
      }
    }
  });
}
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number, Object],
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const [UseTemplate, optionList] = createReusableTemplate();
    const isDesktop = useMediaQuery("(min-width: 1366px)");
    const isOpen = ref(false);
    const selectedOption = ref(null);
    const emits = __emit;
    onMounted(() => {
      const defaultOption = props.options.find((option) => option.selected === true);
      if (defaultOption) {
        selectedOption.value = defaultOption;
        emits("update:modelValue", defaultOption.value);
      }
    });
    function onOptionSelect(option) {
      selectedOption.value = option;
      emits("update:modelValue", option.value);
      isOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(UseTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$l), { class: "animate__animated animate__fadeIn animate__faster" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$i), {
                    placeholder: _ctx.t("body.search"),
                    class: "xs:text-lg lg:text-sm"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$g), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$k), { class: "text-dark dark:text-light" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.t("body.noResultsFound"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.t("body.noResultsFound")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(props.options, (option, index) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$h), {
                                  key: option.label,
                                  value: option.label,
                                  onSelect: ($event) => onOptionSelect(option),
                                  class: ["mb-0 xs:text-lg lg:text-sm text-dark dark:text-light", { "border-b xs:py-3 lg:py-1.5 lg:pb-1.5 border-secondary-light dark:border-secondary-dark": index !== props.options.length - 1 }]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(_ctx.t(option.label))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.t(option.label)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.options, (option, index) => {
                                  return openBlock(), createBlock(unref(_sfc_main$h), {
                                    key: option.label,
                                    value: option.label,
                                    onSelect: ($event) => onOptionSelect(option),
                                    class: ["mb-0 xs:text-lg lg:text-sm text-dark dark:text-light", { "border-b xs:py-3 lg:py-1.5 lg:pb-1.5 border-secondary-light dark:border-secondary-dark": index !== props.options.length - 1 }]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.t(option.label)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect", "class"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$k), { class: "text-dark dark:text-light" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.t("body.noResultsFound")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.options, (option, index) => {
                                return openBlock(), createBlock(unref(_sfc_main$h), {
                                  key: option.label,
                                  value: option.label,
                                  onSelect: ($event) => onOptionSelect(option),
                                  class: ["mb-0 xs:text-lg lg:text-sm text-dark dark:text-light", { "border-b xs:py-3 lg:py-1.5 lg:pb-1.5 border-secondary-light dark:border-secondary-dark": index !== props.options.length - 1 }]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.t(option.label)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect", "class"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$i), {
                      placeholder: _ctx.t("body.search"),
                      class: "xs:text-lg lg:text-sm"
                    }, null, 8, ["placeholder"]),
                    createVNode(unref(_sfc_main$g), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$k), { class: "text-dark dark:text-light" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.t("body.noResultsFound")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.options, (option, index) => {
                              return openBlock(), createBlock(unref(_sfc_main$h), {
                                key: option.label,
                                value: option.label,
                                onSelect: ($event) => onOptionSelect(option),
                                class: ["mb-0 xs:text-lg lg:text-sm text-dark dark:text-light", { "border-b xs:py-3 lg:py-1.5 lg:pb-1.5 border-secondary-light dark:border-secondary-dark": index !== props.options.length - 1 }]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.t(option.label)), 1)
                                ]),
                                _: 2
                              }, 1032, ["value", "onSelect", "class"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$l), { class: "animate__animated animate__fadeIn animate__faster" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$i), {
                    placeholder: _ctx.t("body.search"),
                    class: "xs:text-lg lg:text-sm"
                  }, null, 8, ["placeholder"]),
                  createVNode(unref(_sfc_main$g), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$k), { class: "text-dark dark:text-light" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.t("body.noResultsFound")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$j), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.options, (option, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$h), {
                              key: option.label,
                              value: option.label,
                              onSelect: ($event) => onOptionSelect(option),
                              class: ["mb-0 xs:text-lg lg:text-sm text-dark dark:text-light", { "border-b xs:py-3 lg:py-1.5 lg:pb-1.5 border-secondary-light dark:border-secondary-dark": index !== props.options.length - 1 }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.t(option.label)), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "onSelect", "class"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isDesktop)) {
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          open: isOpen.value,
          "onUpdate:open": ($event) => isOpen.value = $event,
          class: "animate__animated animate__zoomIn animate__fast"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$4), { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$m), {
                      variant: "outline",
                      class: "justify-start w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(selectedOption.value ? selectedOption.value.label : props.placeholder)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(selectedOption.value ? selectedOption.value.label : props.placeholder), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$m), {
                        variant: "outline",
                        class: "justify-start w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(selectedOption.value ? selectedOption.value.label : props.placeholder), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$5), {
                class: "w-[200px] bg-light dark:bg-dark p-0",
                align: "start"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(optionList), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(optionList))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$4), { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$m), {
                      variant: "outline",
                      class: "justify-start w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(selectedOption.value ? selectedOption.value.label : props.placeholder), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$5), {
                  class: "w-[200px] bg-light dark:bg-dark p-0",
                  align: "start"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(optionList))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isDesktop)) {
        _push(ssrRenderComponent(unref(_sfc_main$f), {
          open: isOpen.value,
          "onUpdate:open": (newOpenValue) => isOpen.value = newOpenValue,
          class: "animate__animated animate__slideInUp animate__fast"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$7), { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$m), {
                      variant: "outline",
                      class: "w-full !text-dark dark:!text-light justify-start"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(selectedOption.value ? selectedOption.value.label : props.placeholder)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(selectedOption.value ? selectedOption.value.label : props.placeholder), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$m), {
                        variant: "outline",
                        class: "w-full !text-dark dark:!text-light justify-start"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(selectedOption.value ? selectedOption.value.label : props.placeholder), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$c), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mt-4 mb-2.5 border-t"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(optionList), null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "mt-4 mb-2.5 border-t" }, [
                        createVNode(unref(optionList))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$7), { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$m), {
                      variant: "outline",
                      class: "w-full !text-dark dark:!text-light justify-start"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(selectedOption.value ? selectedOption.value.label : props.placeholder), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$c), null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mt-4 mb-2.5 border-t" }, [
                      createVNode(unref(optionList))
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
if (typeof block0$2 === "function") block0$2(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/elements/select/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "ar": {
        "body": {
          "theme": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "نمط العرض" } },
          "selectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "اختر نمط العرض" } },
          "lightMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "النمط المضيء" } },
          "autoMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "النمط الافتراضي" } },
          "darkMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "النمط الداكن" } }
        }
      },
      "en": {
        "body": {
          "theme": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Theme" } },
          "selectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select Theme" } },
          "lightMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Light Mode" } },
          "autoMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto Mode" } },
          "darkMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dark Mode" } }
        }
      }
    }
  });
}
const _sfc_main$2 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: Boolean,
      default: true
    },
    iconClass: {
      type: String,
      default: ""
    },
    inline: {
      type: Boolean,
      default: false
    },
    inlineClass: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const mode = useColorMode({
      storageKey: "useTheme"
    });
    const internalIcon = ref(props.icon);
    const options = ref([
      { value: "light", label: t("body.lightMode"), selected: mode.value === "light" },
      { value: "auto", label: t("body.autoMode"), selected: mode.value === "auto" },
      { value: "dark", label: t("body.darkMode"), selected: mode.value === "dark" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(internalIcon)) {
        _push(`<div class="select-none"><a href="#" class="cursor-pointer">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: {
            light: "mynaui:sun",
            auto: "radix-icons:half-2",
            dark: "mynaui:moon"
          }[_ctx.StorageTheme],
          class: ["text-dark dark:text-light size-6 cursor-pointer", __props.iconClass]
        }, null, _parent));
        _push(`</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.inline) {
        _push(`<div class="flex items-center justify-between"><h1 class="text-xl font-bold">${ssrInterpolate(unref(t)("body.theme"))}</h1>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          placeholder: unref(t)("body.selectPlaceholder"),
          options: unref(options),
          modelValue: _ctx.selectOption,
          "onUpdate:modelValue": ($event) => _ctx.selectOption = $event
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/widgets/theme/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
            _push2(`<title inertia data-v-47500328${_scopeId}>${ssrInterpolate(unref(title))}</title><meta name="description"${ssrRenderAttr("content", unref(desc))} data-v-47500328${_scopeId}><meta property="og:site_name"${ssrRenderAttr("content", unref(title))} data-v-47500328${_scopeId}><meta property="og:title"${ssrRenderAttr("content", unref(title))} data-v-47500328${_scopeId}><meta property="og:description"${ssrRenderAttr("content", unref(desc))} data-v-47500328${_scopeId}><meta property="twitter:title"${ssrRenderAttr("content", unref(title))} data-v-47500328${_scopeId}><meta property="twitter:description"${ssrRenderAttr("content", unref(desc))} data-v-47500328${_scopeId}>`);
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
      if (unref(isDesktop)) {
        _push(`<div class="flex h-full flex-col" data-v-47500328>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<div class="${ssrRenderClass([{ phone: _ctx.EnvDev }, "scrollbar-hide h-full select-none"])}" data-v-47500328><div class="p-2" data-v-47500328></div>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-47500328"]]);
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
      const _component_WidgetsTheme = _sfc_main$2;
      const _component_ElementsLink = _sfc_main$n;
      _push(ssrRenderComponent(App, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center h-full min-h-screen w-full min-w-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsTheme, { icon: "" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElementsLink, {
              href: _ctx.route("home.index")
            }, {
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
            _push2(`<div class="flex flex-col gap-2.5"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center h-full min-h-screen w-full min-w-screen" }, [
                createVNode(_component_WidgetsTheme, { icon: "" }),
                createVNode(_component_ElementsLink, {
                  href: _ctx.route("home.index")
                }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "text-dark dark:text-light text-9xl" }, toDisplayString(unref(t)("hello")) + " " + toDisplayString(unref(checkboxOne)), 1)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode("div", { class: "flex flex-col gap-2.5" })
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
