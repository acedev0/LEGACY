/*
    NOTE: This is updated to work for Vue3

    REMEM BER: Name MUST match the Directory and the VUE file in that directory (they should be the same!!)
*/

const routes = [
  {
    path: '/test',
    name: 'UI_Test',
    meta: {    
      title: "UI Kit TEsting!"
    }        
  },
  {
    path: '/flex',
    alias: [
        '/native',
        '/browser'
    ],
    name: 'NATIVE_FLEXBOX_CSS_Test',
    meta: {    
      title: "Native Browser Flexbox Testing!!"
    }        
  },
  {
    path: '/prime',
    alias: [
        '/primeflex'
    ],    
    name: 'PRIMEFLEX_Test',
    meta: {    
      title: "PrimeFLEX from PRimeview layout testing!"
    }        
  },
  {
    path: '/seperate',
    alias: [
        '/sep'
    ],    
    name: 'SEPERATE_FILES',
    meta: {    
      title: "Testing of SEPERATE Files!"
    }        
  }, 
  {
    path: '/report',
    alias: [
        '/max'
    ],    
    name: 'MAXMET_Report_TABLE',    // This is the folder under _PAGES
    meta: {    
      title: "maxMet Report Table"
    }        
  },  
]

export default routes


