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
const card1 = playingCards('A', 'S');
console.log(card1.toString());
const card2 = playingCards('10', 'H');
console.log(card2.toString());
const card3 = playingCards('1', 'C');
console.log(card3.toString());