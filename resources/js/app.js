import { createInertiaApp, router, usePage } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h } from "vue";
import { ZiggyVue } from "ziggy-js";
import { createI18n } from "vue-i18n";

// Dayjs Locale
import "dayjs/locale/en";
import "dayjs/locale/ar";

// Vite environment variables
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    // Set the document title
    title: (title) => `${title} - ${appName}`,
    // Resolve the page component dynamically
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob("./pages/**/*.vue")
        ),
    // Setup the Vue app
    setup({ el, App, props, plugin }) {
        const locale = props.initialPage.props.app.locale || "ar";

        const i18n = createI18n({
            ssr: true,
            locale: locale,
            fallbackLocale: "ar",
        });

        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(i18n)
            .mount(el);
    },
});
