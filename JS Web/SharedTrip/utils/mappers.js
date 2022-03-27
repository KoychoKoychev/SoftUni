function mapErrors(err) {
    if (Array.isArray(err)) {
        return err;
    } else if (err.name = "ValidationError") {
        return Object.values(err.errors).map(e => ({ msg: e.message }));
    } else if (typeof err.message == "string") {
        return [{ msg: err.message }]
    } else {
        return [{ msg: "Request error" }]
    }
}


function mapTrip(data) {
    return ({
        _id: data._id,
        startPoint: data.startPoint,
        endPoint: data.endPoint,
        date: data.date,
        time: data.time,
        carImg: data.carImg,
        carBrand: data.carBrand,
        seats: data.seats,
        price: data.price,
        description: data.description,
        creator: mapCreator(data.creator),
        buddies: data.buddies.map(mapCreator)
    })
}

function mapCreator(data) {
    return ({
        _id: data._id,
        email: data.email,
    })
}

function mapUser(data) {
    return ({
        _id: data._id,
        email: data.email,
        tripsHistory: data.tripsHistory.map(mapMyTrip)
    })
}

function mapMyTrip(data) {
    return ({
        _id: data._id,
        startPoint: data.startPoint,
        endPoint: data.endPoint,
        date: data.date,
        time: data.time,
    })
}



module.exports = {
    mapErrors,
    mapTrip,
    mapUser
};