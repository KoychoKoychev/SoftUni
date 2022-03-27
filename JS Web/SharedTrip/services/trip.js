const Trip = require("../models/Trip");
const User = require("../models/User");

async function createTrip(data,userId) {
    const trip = new Trip({
        startPoint: data.startPoint,
        endPoint: data.endPoint,
        date: data.date,
        time: data.time,
        carImg: data.carImg,
        carBrand: data.carBrand,
        seats: data.seats,
        price: data.price,
        description: data.description,
        creator: data.creator
    })
    const newTrip = await trip.save();
    const user = await User.findById(userId);
    user.tripsHistory.push(newTrip._id);
    await user.save();
}


async function editTrip(id, data) {
    const trip = await getTripById(id);

    trip.startPoint = data.startPoint;
    trip.endPoint = data.endPoint;
    trip.date = data.date;
    trip.time = data.time;
    trip.carImg = data.carImg;
    trip.carBrand = data.carBrand;
    trip.seats = data.seats;
    trip.price = data.price;
    trip.description = data.description;
    trip.creator = data.creator;

    await trip.save();
}

async function deleteTrip(id) {
    const trip = await getTripById(id);
    await trip.delete();
}

async function getAllTrips() {
    return await Trip.find({});
}

async function getTripById(id) {
    return await Trip.findById(id).populate("creator", "_id email").populate("buddies", "_id email");
}

async function joinTrip(id,userId){
    const trip = await Trip.findById(id);
    trip.seats-=1;
    trip.buddies.push(userId);

    await trip.save();
}

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    editTrip,
    deleteTrip,
    joinTrip
}