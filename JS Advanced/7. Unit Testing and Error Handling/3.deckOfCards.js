function printDeckOfCards(cards) {
    function playingCards(face, suit) {
        const suits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663",
        }
        const sizes = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if (!sizes.includes(face)) {
            throw new Error("Wrong face - " + face);
        } else if (!suits.hasOwnProperty(suit)) {
            throw new Error("Wrong suit - " + suit)
        }else{
            let result = {
                "face": face,
                "suit":suits[suit],
                toString: () => {
                    return "" + result.face + result.suit;
                }
            };
            
            return result;
        }
    }
    const result = [];
    for (let card of cards){
        let s = card.slice(-1);
        let f = card.slice(0,-1);
        try {
            let c = playingCards(f,s);
            result.push(c);
        }catch (er){
            return console.log(`Invalid card: ${card}`);
        }
    }
    console.log(result.map(x => x.toString()).join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
