
 //1. first import the options from the library
   import Button from 'primevue/button';
   
   //import { IonButton } from '@ionic/vue'; 

   //2. Now, export the imported items so you can use them ON the actual page
   export default {
      components: {
         Button,
//         IonButton,
      },
      methods:{
         setCookie(){
            // it sets the cookie called `username`
            this.$cookies.set("username","gowtham-tarik");
         }
      }

   } //end of export