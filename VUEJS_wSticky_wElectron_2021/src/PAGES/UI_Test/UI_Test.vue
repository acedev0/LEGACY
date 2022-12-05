<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =      1.   *** Javascript and Behavior stuff DEFINED HERE ***      = = = =
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
-->
<script>

 //1. first import the options from the library
   import Button from 'primevue/button';
   
//   import { IonButton } from '@ionic/vue';

   //2. Now, export the imported items so you can use them ON the actual page
   export default {
      components: {
         Button,
  //       IonButton,
      },
      methods:{
         setCookie(){
            // it sets the cookie called `username`
            this.$cookies.set("username","gowtham-tarik");
         }
      }

   } //end of export
</script>

<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =       2.  *** CSS STYLES DEFINED HERE ***     = = = = = = = = = = = = =
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

   NOTE: Always use 'scoped' to restrict the styles to THIS component/vue/page ..
-->

<style scoped>

    .terryText {
        color:#ff55ff;
        font-family: 'Roboto', sans-serif;
    }

</style>

<!--
  = = = = = = = = = = = = = = = = = = = = = = = = 
  = = = = = = = =  End of STYLE Definitions
  = = = = = = = = = = = = = = = = = = = = = = = = 
-->


<template><div>
<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =     3.    *** HTML Content DEFINED HERE ***     = = = = = = = = = = = = 
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
-->


   <h1>  UI Component KIT.. Test Ground </h1>

   <button @click="setCookie">Test Set Cookie</button>

   <hr>
   <h3> PrimeVue button </h3> <br><br><br>

   <Button label="Primary RAISED Round" class="p-button-raised p-button-rounded" /> <br><br><br>
   <hr>

   <Button label="Just Raised" class="p-button-raised" /> <br><br><br>
   <hr>

   <Button label="PrimeVue Basic" />     <br><br><br>
   <hr>


<!--
   <h2> Here is IONIC view Example </h2>  <br>
   <ion-button color="primary">Ionic Primary</ion-button><br><br><br>
-->
   <hr>




<!--
  = = = = = = = = = = = = = = = = = = = = = = = = 
  = = = = = = = = = =    END OF HTML and END OF Vue Page
  = = = = = = = = = = = = = = = = = = = = = = = = 
-->
</div></template>







