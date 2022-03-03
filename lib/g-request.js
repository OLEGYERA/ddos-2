const Process = require('process');
const Gateway = require('./gateway.js')

function GRequest(){
  this.stats = {
    success: 0,
    error: 0,
    loop: 0
  }

  this.gateway = Gateway();
}

GRequest.prototype.get = function get(target_url) {

  const _this = this;

  //нужно будет вынести
  // this.gateway.request.head(target_url, {'Connection': 'keep-alive'});

  this.gateway.request.get(target_url, function (error, response) {
    if(error) {
      errorHandler(error);
      return false;
    }

    responseHandler(response)
  });



  function errorHandler(e){
    console.log(e)
  }

  function responseHandler(r){

    const ResponseData = {
      trailers: r.trailers,
      rawTrailers: r.rawTrailers,
      aborted: r.aborted,
      upgrade: r.upgrade,
      url: r.url,
      method: r.method,
      statusCode: r.statusCode,
      statusMessage: r.statusMessage,
    }





    console.log(_this.gateway.proxy.id, ResponseData.statusCode, ResponseData.statusMessage)
  }
}



module.exports = GRequest;

