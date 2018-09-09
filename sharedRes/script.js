import styles from "./commonStyles.less";
let req;
try {
    req = require.context("./fonts", true, /\.(?:eot|svg|ttf|woff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} 

req = require.context("./arrowBtns", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./stages", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./switches", true, /\.less$/im);
req.keys().forEach((key) => req(key));