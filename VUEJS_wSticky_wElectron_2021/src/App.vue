
<!-- 

  You Should NEVER NEED TO MODIFY ANYTHING HERE.. other than registering STYLES for UI Kits   ... IF NEEDED

// this css STYLe MUST COME FIRST for page to show correctly
-->
<style src="./App.css" type="text/css"></style>
<style src="./_SITE_LAYOUT/b_Header.css" type="text/css"></style>
<style src="./_SITE_LAYOUT/e_Footer.css" type="text/css"></style>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 00px;    
  }

  /* This is by default applied site wide */
  .DEFAULT_BODY_CONTENT_STYLING{
    text-align: center;
    margin-left: 25px;
    color: #1579dd;
    background: #ffffff;
  }

</style>


<template>

    <head>
      <!-- 
          = = = = = =  Register StyleSheets Needed for PrimeVue (uikits) GLOBALLY 
      --> 

      <!-- <link href="https://unpkg.com/primevue/resources/themes/saga-blue/theme.css" rel="stylesheet">
      <link href="https://unpkg.com/primevue/resources/primevue.min.css" rel="stylesheet">
      <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet">
             -->

    </head>
    
    <div class="content" >  
        <header class="header DEFAULT_HEADER_STYLING" >
                                    
            <HEADER></HEADER>

        </header>

        <!--
        ###
        ###     BODY/ CONTENT section on page    ( Made for Sticky Content/Cooter compatibiltiy )
        ###
        -->
        <router-view class="DEFAULT_BODY_CONTENT_STYLING"></router-view> 

    </div> <!-- end of CONTENT DIV -->


    <!--
    ###
    ###    FOOTER (sticky) Section on Page
    ###
    -->
    <footer class="footer DEFAULT_FOOTER_STYLING">  

        <FOOTER></FOOTER>

    </footer>



</template>




<!--
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   = = = = = =       2. Css and Javascript imports here
   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

   NOTE: Always use 'scoped' to restrict the styles to JUST THIS vue page/component

   NOTE: You might need ot use "defer src" in some cases.. This makes the javascript
   load AFTER the page is ready (as opposed to parallel)
   <script type="application/javascript" defer src="./c_Header.js"></script>

-->

<script type="application/javascript" src="./App.js"></script>


