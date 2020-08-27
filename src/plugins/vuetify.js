import Vue from "vue";
import Vuetify from "vuetify/lib";

import {
    library
} from "@fortawesome/fontawesome-svg-core";
import {
    far
} from "@fortawesome/pro-regular-svg-icons";
import {
    fal
} from "@fortawesome/pro-light-svg-icons";
import {
    fad
} from "@fortawesome/pro-duotone-svg-icons";
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

library.add(far, fal, fad);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#673AB7",
                secondary: "#FFA000",
                anchor: "#8c9eff",
            },
        },
    },
    icons: {
        values: {
            // set menu to light (default is solid)
            eyeOpen: {
                component: FontAwesomeIcon,
                props: {
                    icon: ["fal", "eye"],
                },
            },
            eyeOff: {
                component: FontAwesomeIcon,
                props: {
                    icon: ["fal", "low-vision"],
                },
            },
            // reusable custom icon
            vuejs: {
                component: FontAwesomeIcon,
                props: {
                    icon: ["far", "vuejs"],
                },
            },
        },
    },
});

export default vuetify;