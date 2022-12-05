/*
    NOTE: This is updated to work for Vue3

    REMEM BER: Name MUST match the Directory and the VUE file in that directory (they should be the same!!)
*/

const routes = [
  {
    path: '/',
    name: '_Home',
    meta: {
      title: 'Home Page SIMPLE!',
      metaTags: [
        {
          name: 'HomeTag',
          content: 'Test MetaTag For HoME PAGE'
        }
      ]
    }      
  },
  {
    path: '/about',
    name: 'About',
    meta: {    
      title: "About AWESOME"
    }
  },

  // Catch all 404 for anything not defined. This is how it is done in Vue3
  {
    path: "/:catchAll(.*)",
    name: '_ERROR_404',
    meta: {    
      title: "404 You're Lost Mate"
    }    
  }   

]

export default routes


