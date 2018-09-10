let req;
try {
    req = require.context("./img", true, /\.(?:png|jpe?g|gif|tiff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} // no img in this module

req = require.context("./", true, /\.less$/im);
req.keys().forEach((key) => req(key));