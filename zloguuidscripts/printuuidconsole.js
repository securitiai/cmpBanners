(function() {
    var originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
      this.addEventListener('readystatechange', function() {
          if (this.readyState === 4 && this.responseURL.includes('singleupload')) { // Request is done
              var jsonString = this._body;
              var jsonObject = JSON.parse(jsonString);
              var uuid = jsonObject.uuid;
              console.error("uuid=>"+uuid);
              var domain_id = jsonObject.domain_id;
              console.log("domain_id=>"+domain_id);
              var policy_version = jsonObject.policy_version;
              console.log("policy_version=>"+policy_version);
          }
      }, false);
    
      originalOpen.apply(this, arguments);
};
    
    var originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(body) {
      this._body = body;
      originalSend.apply(this, arguments);
    };
    })();