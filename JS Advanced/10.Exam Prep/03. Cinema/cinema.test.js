const { expect } = require("chai")
const { cinema } = require("./cinema")

describe("Cinema object testing", () => {
    it("Has all the required methods", () => {
        expect(cinema).to.has.ownProperty("showMovies");
        expect(typeof (cinema.showMovies)).to.equal("function");
        expect(cinema).to.has.ownProperty("ticketPrice");
        expect(typeof (cinema.ticketPrice)).to.equal("function");
        expect(cinema).to.has.ownProperty("swapSeatsInHall");
        expect(typeof (cinema.swapSeatsInHall)).to.equal("function");
        expect(Object.entries(cinema).length).to.equal(3);
    })
    it("The method showMovies works fine", () => {
        expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.equal('King Kong, The Tomorrow War');
        expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        expect(cinema.showMovies([1, 2, 3, 4, 5])).to.equal('1, 2, 3, 4, 5');
        expect(() => { cinema.showMovies('King Kong') }).to.throw();
    })
    it(`Has a working ticketPrice method`, () => {

        expect(cinema.ticketPrice("Premiere")).to.equal(12);
        expect(cinema.ticketPrice("Normal")).to.equal(7.5);
        expect(cinema.ticketPrice("Discount")).to.equal(5.5);
        expect(() => { cinema.ticketPrice("___") }).to.throw("Invalid projection type.");
        expect(() => { cinema.ticketPrice("") }).to.throw("Invalid projection type.");
        expect(() => { cinema.ticketPrice(7.5) }).to.throw("Invalid projection type.");

    })
    it('Has a working swapSeatsInHall method', () => {
        expect(cinema.swapSeatsInHall(1, 2)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(20, 2)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 2, 3)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(-1, 2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, -2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(-1, -2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0, 2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(21, 2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 21)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(22, 21)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 1)).to.equal("Unsuccessful change of seats in the hall.");
    })
    it("Does not work with floating numbers", () => {
        expect(cinema.swapSeatsInHall(1.12, 2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 2.12)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0.22, 2.11)).to.equal("Unsuccessful change of seats in the hall.");
    })
    it("Does not work with just one number", () => {
        expect(cinema.swapSeatsInHall(2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(undefined,2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(2,undefined)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall("2")).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall()).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall("")).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall([])).to.equal("Unsuccessful change of seats in the hall.");
    })
    it("Takes only valid input", () => {
        expect(cinema.swapSeatsInHall("2", "1")).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall("asd", 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall("", 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, "")).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall([], 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, [])).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(2, "das")).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall("asd", "das")).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(2, "1")).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall("2", 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall([2], 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(2, { a: 1 })).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall({ a: 1 }, 2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(2, [1])).to.equal("Unsuccessful change of seats in the hall.");
    })
})