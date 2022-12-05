<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =      1.   *** Javascript and Behavior stuff DEFINED HERE ***      = = = =
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
-->
<script>
   import HelloWorld from '@/_GLOBAL_COMPONENTS/COMP_HelloWorld.vue'
   export default {
      components: {
         HelloWorld
      }
   }

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

      <h1> HOME PAGE!! I am grand admiral THRAWN!!!</h1>

      <HelloWorld msg="Testing use of HelloWorld Component!!"/>
      <img alt="Vue logo" src="@/_GLOBAL_IMAGES/logo.png">


<!--
  = = = = = = = = = = = = = = = = = = = = = = = = 
  = = = = = = = = = =    END OF HTML and END OF Vue Page
  = = = = = = = = = = = = = = = = = = = = = = = = 
-->
</div></template>







