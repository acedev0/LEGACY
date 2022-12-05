<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =      1.   *** Javascript and Behavior stuff DEFINED HERE ***      = = = =
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
-->
<script>

  export default {
      name: 'XXXXXXX',
      components: {
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

    .terryTextGreen {
        color:#17ce27;
        font-family: 'Roboto', sans-serif;
    }

</style>




<style lang="scss" scoped>
   .shadow-box {
      min-height: 100px;
      min-width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin: 2rem;
      border-radius: 4px;
      background-color: var(--surface-e);
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



   <h1> PrimeFLEX for PrimeVUE Testing!</h1>
   <br>


   <div class="p-grid terryTextGreen">
      <div class="p-col" v-for="index in 10" :key="index">
            <div :class="['shadow-box', 'p-shadow-' + index]">
               Terry p-shadow-{{index}}
            </div>
      </div>
   </div>


<!--
  = = = = = = = = = = = = = = = = = = = = = = = = 
  = = = = = = = = = =    END OF HTML and END OF Vue Page
  = = = = = = = = = = = = = = = = = = = = = = = = 
-->
</div></template>







