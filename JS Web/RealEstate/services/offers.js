const Offer = require('../models/Offer');

async function createOffer(data, userId) {

    const offer = new Offer({
        name: data.name,
        type: data.type,
        year: data.year,
        city: data.city,
        image: data.image,
        description: data.description,
        available: data.available,
        owner: userId
    })

    await offer.save();
}

async function loadOffers(){
    return await Offer.find({}).lean();
}

async function loadOfferById(id){
    return await Offer.findById(id).populate('renters').lean();
}

async function editOffer(offerId, data) {
    const offer = await Offer.findById(offerId);
    offer.name= data.name;
    offer.type= data.type;
    offer.year= data.year;
    offer.city= data.city;
    offer.image= data.image;
    offer.description= data.description;
    offer.available= data.available;

    await offer.save();
}

async function deleteOffer(offerId){
    const offer = await Offer.findById(offerId);
    await offer.delete();
}

module.exports = {
    createOffer,
    loadOffers,
    loadOfferById,
    editOffer,
    deleteOffer
}