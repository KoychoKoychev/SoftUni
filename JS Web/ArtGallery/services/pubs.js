const Publication = require('../models/Publication');
const User = require('../models/User');

async function createPub(data, userId) {

    const publication = new Publication({
        title: data.title,
        tech: data.tech,
        certificate: data.certificate,
        picture: data.picture,
        author: userId
    });

    const pubId = publication._id

    const author = await User.findById(userId);
    author.publications.push(pubId)
    await Promise.all([publication.save(), author.save()]);
    return publication;
}

async function getAllPubs() {
    return await Publication.find({}).populate('shares').lean();
}

async function getPubById(id) {
    return await Publication.findById(id).populate('shares').populate('author').lean();
}


async function editPub(id, data) {

    const pub = await Publication.findById(id);

    pub.title = data.title;
    pub.tech = data.tech;
    pub.certificate = data.certificate;
    pub.picture = data.picture;

    await pub.save();
}

async function deletePub(id) {

    const pub = await Publication.findById(id);

    await pub.delete();
};

async function sharePub(id, userId) {

    const [pub, user] = await Promise.all([Publication.findById(id), User.findById(userId)])

    pub.shares.push(userId);
    user.sharedPubs.push(id);

    await Promise.all([pub.save(), user.save()]);
}


module.exports = {
    createPub,
    getAllPubs,
    getPubById,
    editPub,
    deletePub,
    sharePub
}