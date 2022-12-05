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
        color:#e97a31c7;
        font-family: 'Roboto', sans-serif;
    }

   .flex-container {
      /* We first create a flex layout context */
      display: flex;

      /* Then we define the flow direction 
      and if we allow the items to wrap 
      * Remember this is the same as:
      * flex-direction: row;
      * flex-wrap: wrap;
      */
      flex-flow: row wrap;

      /* Then we define how is distributed the remaining space */
      justify-content: space-around;
   }


   .flex-item {
      background: tomato;
      padding: 5px;
      width: 200px;
      height: 150px;
      margin-top: 10px;
      line-height: 150px;
      color: white;
      font-weight: bold;
      font-size: 3em;
      text-align: center;
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


  <span class="terryTextGreen">Test of TerryText CSS</span>


   <h1> Layout Flexbox Grid testing using NATIVE Browser Flex Support! </h1>
   NOTE: Refer to <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"> This Page for Flex CSS primer</a>


   <br>


   <ul class="flex-container">
   <li class="flex-item">1</li>
   <li class="flex-item">2</li>
   <li class="flex-item">3</li>
   <li class="flex-item">4</li>
   <li class="flex-item">5</li>
   <li class="flex-item">6</li>
   </ul>



<!--
  = = = = = = = = = = = = = = = = = = = = = = = = 
  = = = = = = = = = =    END OF HTML and END OF Vue Page
  = = = = = = = = = = = = = = = = = = = = = = = = 
-->
</div></template>







