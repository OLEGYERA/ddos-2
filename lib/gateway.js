const Proxies = require('../proxies.js');
const Request = require('request');


function fetchRandomProxy(){
  return Proxies[Math.floor(Math.random() * Proxies.length)];
}


function prepareProxyURL(Proxy){
  return "http://" + Proxy.login + ":" + Proxy.pass + "@" + Proxy.host + ":" + Proxy.port;
}



function Gateway(){
  const Proxy = fetchRandomProxy();

  return {
    request: Request.defaults({'proxy': prepareProxyURL(Proxy)}),
    proxy: Proxy
  }
}


module.exports = Gateway;




