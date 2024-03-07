// when you use typescript in next.js app


declare namespace NodeJS{
      interface processEnv{
            API_ULR : string;
            // Add other variables here .... 
      }
}