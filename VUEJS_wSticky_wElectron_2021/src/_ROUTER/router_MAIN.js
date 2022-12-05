
/*

        YOU SHOULD NEVER HAVE TO MODIFY ANYTHING HERE.. Just modify the Primrary/secondry routes... or add anothe route import here

*/

import { createWebHistory, createRouter } from "vue-router";

//1. First import your route files (add as you need)

import primaryRoutes   from '@/_ROUTER/site_routes_1_Primary.js'
import secondaryRoutes from '@/_ROUTER/site_routes_2_Secondary.js'



// 2. Now add the item you imported to the below routeOptions  (MUST USE THIS NAME)
const routeOptions = [
  ...primaryRoutes,
  ...secondaryRoutes
]


/*  3. This routine will "chunk" each page/route so it is in its own "chunk"
       this is for lazy loading when you npm build the project into prod
*/
const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `@/PAGES/${route.name}/${route.name}.vue`)
  }
})


// This is kept here cause it is the working example when you DONT have things in seperate files
// Needed for occaiosinal troubleshoting
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import(/* webpackChunkName: "Home" */ '@/PAGES/_Home/_Home.vue')
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "About" */ '@/PAGES/About/About.vue')
//   },
//   {
//     path: '/dash',
//     name: 'Dash',
//     component: () => import(/* webpackChunkName: "AceDash" */ '@/PAGES/Ace_DASH/Ace_DASH.vue')
//   },
//   {
//     path: "/:catchAll(.*)",
//     name: 'Error',
//     component: () => import(/* webpackChunkName: "Error" */ '@/PAGES/_ERROR_404/_ERROR_404.vue')
//   } 
//  ]


//4. Finally, this expots the routes into
const router = createRouter({
    history: createWebHistory(),
    routes
})


// = =  = = = = 
// ALL THIS SHIT IS NEEDERD so that you can use the title tag in your pages routes (to get the correct title)
// = =  = = = = 

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
