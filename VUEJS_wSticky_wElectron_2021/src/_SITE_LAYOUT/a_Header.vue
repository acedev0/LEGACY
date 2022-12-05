<template><div class="debug_border">
<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =     1.   *** CONTENT defined here 
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
-->

      <div id="nav">
          
          <router-link to="/" >Home</router-link> <span style="color:#ffffff; font-weight:bold; font-size:23px;">&nbsp;|&nbsp;</span>
          <router-link to="/about">About Page</router-link> <span style="color:#ffffff; font-weight:bold; font-size:23px;">&nbsp;|&nbsp;</span>

          <router-link to="/report">MaxMet TaBLE</router-link> <span style="color:#ffffff; font-weight:bold; font-size:23px;">&nbsp;|&nbsp;</span>

          <router-link to="/test">Test UI Components!</router-link> <span style="color:#ffffff; font-weight:bold; font-size:23px;">&nbsp;|&nbsp;</span>
          
          <router-link to="/prime">PrimeFLEX/PrimeVUE Layout Test</router-link> <span style="color:#ffffff; font-weight:bold; font-size:23px;">&nbsp;|&nbsp;</span>
          <router-link to="/flex">NATIVE BRowser Flexbox Test</router-link> <span style="color:#ffffff; font-weight:bold; font-size:23px;">&nbsp;|&nbsp;</span>
          <router-link to="/sep">Seperate FILES testing</router-link> <span style="color:#ffffff; font-weight:bold; font-size:23px;">&nbsp;|&nbsp;</span>

         
      </div>


      <h2 style="color:#ffffff"> This is the MASTER HEADER </h2>

  
<!--
  = = = = = = = = = = = = = = = = = = = = = = = = 
  = = = = = = = = = =    END OF HTML Content
  = = = = = = = = = = = = = = = = = = = = = = = = 
-->
</div></template>



<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =       2. Css and Javascript imports here
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

   NOTE: Always use 'scoped' to restrict the styles to JUST THIS vue page/component

   NOTE: You might need ot use "defer src" in some cases.. This makes the javascript
   load AFTER the page is ready (as opposed to parallel)
   <script type="application/javascript" defer src="./c_Header.js"></script>

-->
<style scoped src="./b_Header.css" type="text/css"></style>
<script type="application/javascript" src="./c_Header.js"></script>
