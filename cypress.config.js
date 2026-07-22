import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
     baseUrl: 'https://demowebshop.tricentis.com', // ou 5173, 4200, etc
  

    //const { defineConfig } = require("cypress")

        
      
   
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    retries:{
      runMode: 1,
      openMode: 0, 
    },
    env: {
      userEmail: process.env.CYPRESS_USER_EMAIL,
      userPassword: process.env.CYPRESS_USER_PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
