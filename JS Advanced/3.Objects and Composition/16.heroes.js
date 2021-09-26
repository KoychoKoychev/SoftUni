function solve() {
    const obj = {
        mage(name) {
            const mageHero = {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
            return mageHero;
        },
        fighter(name) {
            const fighterHero = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at a foe!`);
                }
            }
            return fighterHero;
        },
    }
    return obj;
}
