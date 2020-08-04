import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.purple.base,
                secondary: colors.purple.lighten5,
                button: colors.lightBlue.darken3,
                text: colors.grey.base,
            },
        },
    },
});
