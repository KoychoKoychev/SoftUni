function  requestValidator(obj) {
    //check all keys
    const keys = ["method","uri","version","message"];
    for (let key of keys){
        if (!obj.hasOwnProperty(key)){
            //Method/URI/Version/Message
            if(key == "method"){
                throw new Error("Invalid request header: Invalid Method")
            }else if (key=="uri"){
                throw new Error("Invalid request header: Invalid URI")
            }else if (key =="version"){
                throw new Error("Invalid request header: Invalid Version")
            }else if (key == "message"){
                throw new Error("Invalid request header: Invalid Message");
            }
        }
    }
    //check all methods
    const methods = ["GET","POST","DELETE","CONNECT"];
    if (!methods.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method")
    }
    //check URI
    const uriPattern = /^(\.*[A-Za-z0-9]+)*$/;
    if ((!uriPattern.test(obj.uri) && obj.uri != "*") || obj.uri == ""){
        throw new Error("Invalid request header: Invalid URI")
    }
    //check version
    const versions = ["HTTP/0.9","HTTP/1.0","HTTP/1.1","HTTP/2.0"];
    if (!versions.includes(obj.version)){
        throw new Error("Invalid request header: Invalid Version")
    }
    //check message;
    const messagePattern = /^[^<>\\&'"]*$/;
    if (!messagePattern.test(obj.message)){
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}
