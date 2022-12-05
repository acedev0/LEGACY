
/*

  = = = THIS IS WHERE IT ALL STARTS FOR VUE 3
  = = = YOU SHOULD ALMOST NEVER NEED TO MODIFY THIS UNLESS YOU ARE ADDING SOME NEW LIBRARY FOR VUE3 SITEWIDE

  NOTE: as of 6/6/2021      Vue3 doesnt have a vuetify or buefy version.. so getting rid of them for now
  So its ALL ABOUT PRIMEVUE NOW!!!
  
  NOTE:

      - Vue3 uses createApp now

*/

/*
 = = = = = = 
 = = = = = =  CORE Required Vue3JS Stuff   V
 = = = = = = 
*/

import { createApp } from "vue";
import MAIN_APP_ENTRY from './App.vue';
const app = createApp(MAIN_APP_ENTRY)


//2. For ROUTER and COOKIES
import router from '@/_ROUTER/router_MAIN.js'
import VueCookies from 'vue3-cookies'

app.use(router)
app.use(VueCookies)


/*
 = = = = = = 
 = = = = = =  PrimeVUE (UI_KIT ... serenety etc) stuff
 = = = = = = 
*/
import PrimeVue from 'primevue/config';

import AutoComplete from 'primevue/autocomplete';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';

import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';

import StyleClass from 'primevue/styleclass';


import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';

import 'primeflex/primeflex.css' 

import Panel from 'primevue/panel';
import Toast from 'primevue/toast';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';

import OverlayPanel from 'primevue/overlaypanel';
import InputText from 'primevue/inputtext';

// PrimeVuew CSS
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './PRIMEVUE_assets/demo/flags/flags.css';


app.use(PrimeVue, { ripple: true , inputStyle: 'filled' });
app.use(ConfirmationService);
app.use(ToastService);


app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);

app.component('AutoComplete', AutoComplete);

app.component('Badge', Badge);

app.component('Button', Button);

app.component('Card', Card);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);

app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('InputText', InputText);

app.component('Panel', Panel);
app.component('Toast', Toast);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Timeline', Timeline);
app.component('ToggleButton', ToggleButton);
app.component('OverlayPanel', OverlayPanel);


// = = = Finally.. MOUNT AND BEGIN

app.mount("#app")

