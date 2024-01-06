import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                background: '#1C1B20',
                foreground: '#28272C',
                primary: '#B59686',
                secondary: '#C5947D',
                text: '#c3c3c3',
                textDark: '#141110',
                newWord: '#ffdd4b',
                highlightedWord: '#61df6b',
            },
        },
    }
});
