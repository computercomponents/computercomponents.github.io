import styles from "./commonStyles.less";
let req;
try {
    req = require.context("./fonts", true, /\.(?:eot|svg|ttf|woff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} 

req = require.context("./standardBtns", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./arrowBtns", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./stages", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./switches", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./location", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./calendar", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./news", true, /\.less$/im);
req.keys().forEach((key) => req(key));

req = require.context("./events", true, /\.less$/im);
req.keys().forEach((key) => req(key));


import media from "./projectShare/media.less"; // <---must be imported as last as possible