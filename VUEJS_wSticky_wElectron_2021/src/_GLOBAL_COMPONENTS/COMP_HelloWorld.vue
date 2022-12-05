<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =      1.   *** Javascript and Behavior stuff DEFINED HERE ***      = = = =
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
-->
<script>

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
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
    color: #ff5eff
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
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

    <h2 class="terryText">MSG Received: </h2>
    <h1 class="terryText">{{ msg }}</h1>


<!--
  = = = = = = = = = = = = = = = = = = = = = = = = 
  = = = = = = = = = =    END OF HTML and END OF Vue Page
  = = = = = = = = = = = = = = = = = = = = = = = = 
-->
</div></template>







