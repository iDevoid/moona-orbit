import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.purple.base, // #9C27B0
                secondary: colors.purple.lighten5, // #F3E5F5
                button: colors.yellow.darken3, // #4CAF50
                text: colors.grey.base,
            },
        },
    },
});
