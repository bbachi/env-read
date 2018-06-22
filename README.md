# env-read
Utility module to read environment varibales at runtime.

*This utility module will read environment varibales at runtime. It supports four envionments righ now i.e..LOCAL, DEV, STG, PROD*

## How to use

  1.  install env read as a dependency.
  
  ```
    npm install env-read --save
  ```
  
  2.  create environment folder at project root with four different environments
  
    **environment/dev/dev.json** 
    **environment/local/local.json**  
    **environment/stg/stg.json**  
    **environment/prod/prod.json** 
    
  3.  import and read from json files as below.
  
    ```
        import { EnvironmentConfig } from 'env-read';
        
        EnvironmentConfig.getEnvConfig().fileLocation,
        
    ```
    
    *fileLocation is the property in the json file.*
    
    4) when running or builidng the project, environment should be passed as below. so that environment varibales should be read accordingly.
    
   ```
    npm start --local  // for local environment
    npm start --dev   // for dev environment
   ```
