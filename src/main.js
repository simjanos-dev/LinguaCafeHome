import './style.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from './primevue/presets/aura';

// create app
import Layout from './components/Layout.vue'
const app = createApp(Layout);
app.use(PrimeVue, {
    unstyled: true,
    pt: Aura,
});

// icons
import GithubIcon from 'vue-material-design-icons/Github.vue';
import AlertIcon from 'vue-material-design-icons/Alert.vue';
import BookOpenVariantIcon from 'vue-material-design-icons/BookOpenVariant.vue';
import ToolsIcon from 'vue-material-design-icons/Tools.vue';
import MovieIcon from 'vue-material-design-icons/Movie.vue';
import HeadphonesIcon from 'vue-material-design-icons/Headphones.vue';
app.component('GithubIcon', GithubIcon);
app.component('AlertIcon', AlertIcon);
app.component('BookOpenVariantIcon', BookOpenVariantIcon);
app.component('ToolsIcon', ToolsIcon);
app.component('MovieIcon', MovieIcon);
app.component('HeadphonesIcon', HeadphonesIcon);


// components
import Overview from './components/Overview.vue';
import Resources from './components/Resources.vue';
import CustomGalleria from './components/CustomGalleria.vue';
app.component('Overview', Overview);
app.component('Resources', Resources);
app.component('CustomGalleria', CustomGalleria);

// primevue components
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';


app.component('Menubar', Menubar);
app.component('Card', Card);
app.component('Galleria', Galleria);
app.component('Image', Image);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);


app.mount('#app');
