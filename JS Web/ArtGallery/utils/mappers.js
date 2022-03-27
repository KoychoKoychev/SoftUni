function mapErrors(err){
    if(Array.isArray(err)){
        return err;
    }else if (err.name = "ValidationError" && typeof err.errors == "object") {
        return Object.values(err.errors).map(e=>({msg:e.message}));
    }else if (typeof err.message == "string"){
        return [{msg:err.message}]
    }else{
        return [{msg:"Request error"}]
    }
}

module.exports = mapErrors;