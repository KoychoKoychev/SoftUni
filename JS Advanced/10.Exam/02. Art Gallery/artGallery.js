class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!")
        }

        for (let el of this.listOfArticles) {
            if (el.articleModel == articleModel.toLowerCase() && el.articleName == articleName) {
                el.quantity += Number(quantity);
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

            }
        }
        this.listOfArticles.push({
            articleModel: articleModel.toLowerCase(),
            articleName,
            quantity: Number(quantity)
        })
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        for (let el of this.guests) {
            if (el.guestName == guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        let points = 0;
        if (personality == "Vip") {
            points = 500;
        } else if (personality == "Middle") {
            points = 250;
        } else {
            points = 50;
        }
        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0,
        })
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        let nameArchive = this.listOfArticles.map(a => a.articleName);
        if (!nameArchive.includes(articleName) || this.listOfArticles[nameArchive.indexOf(articleName)].articleModel != articleModel) {
            throw new Error("This article is not found.");
        }
        let index = nameArchive.indexOf(articleName);
        if (this.listOfArticles[index].quantity == 0) {
            return `The ${articleName} is not available.`
        }
        let guestArchive = this.guests.map(x => x.guestName);

        if (!guestArchive.includes(guestName)) {
            return "This guest is not invited."
        }

        let guestIndex = guestArchive.indexOf(guestName);

        let currentPoints = this.guests[guestIndex].points;
        let requiredPoints = this.possibleArticles[this.listOfArticles[index].articleModel];
        if (currentPoints < requiredPoints) {
            return "You need to more points to purchase the article."
        } else {
            this.guests[guestIndex].points -= requiredPoints;
            this.listOfArticles[index].quantity --;
            this.guests[guestIndex].purchaseArticle ++;
            return `${guestName} successfully purchased the article worth ${requiredPoints} points.`
        }
    }
    showGalleryInfo (criteria){
        if (criteria == "article"){
            let resultArr = [`Articles information:`];
            for (let el of this.listOfArticles){
                resultArr.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`)
            }
            return resultArr.join("\n")
        }else if (criteria == "guest"){
            let resultArr = ["Guests information:"];
            for (let el of this.guests){
                resultArr.push(`${el.guestName} - ${el.purchaseArticle}`)
            }
            return resultArr.join("\n")
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

'"Guests information:"\nJohn - 1\nPeter - 1' 
 'Guests information:\nJohn - 1\nPeter - 1'
