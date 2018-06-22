"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require("path");
//This class is created to replace runtime environment properties and to keep file changes to minimum
var EnvironmentConfig = /** @class */ (function () {
    function EnvironmentConfig() {
    }
    EnvironmentConfig.getEnvConfig = function () {
        var configBuffer = null;
        if (EnvironmentConfig.ENVIRONMENT != undefined) {
            return EnvironmentConfig.ENVIRONMENT;
        }
        else {
            switch (this.NODE_ENV) {
                case 'LOCAL':
                    configBuffer = fs.readFileSync(path.resolve(process.cwd() + '/environment/local/local.json'), 'utf-8');
                    break;
                case 'DEV':
                    configBuffer = fs.readFileSync(path.resolve(process.cwd() + '/environment/dev/dev.json'), 'utf-8');
                    break;
                case 'PROD':
                    configBuffer = fs.readFileSync(path.resolve(process.cwd() + '/environment/prod/prod.json'), 'utf-8');
                    break;
                case 'STG':
                    configBuffer = fs.readFileSync(path.resolve(process.cwd() + '/environment/stg/stg.json'), 'utf-8');
                    break;
                default:
                    configBuffer = fs.readFileSync(path.resolve(process.cwd() + '/environment/local/local.json'), 'utf-8');
            }
            EnvironmentConfig.ENVIRONMENT = JSON.parse(configBuffer);
            return JSON.parse(configBuffer);
        }
    };
    EnvironmentConfig.getEnvironment = function () {
        var envVar = "local";
        try {
            var argsArray = process.argv.slice(2);
            if (argsArray.length > 0) {
                envVar = argsArray[0];
            }
        }
        catch (err) {
            console.log("ERROR READING ENVIRONMENT::::::" + err.message);
        }
        console.log("READING AND BUILDING FOR THE ENVIRONMENT::::::" + envVar);
        return envVar.toUpperCase();
    };
    EnvironmentConfig.NODE_ENV = EnvironmentConfig.getEnvironment();
    EnvironmentConfig.ENVIRONMENT = undefined;
    return EnvironmentConfig;
}());
exports.EnvironmentConfig = EnvironmentConfig;
