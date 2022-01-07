function printDeckOfCards(cards) {
               function createCard(face, suit) {
                              const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
                              const suits = {
                                             'S': '\u2660',
                                             'H': '\u2665',
                                             'D': '\u2666',
                                             'C': '\u2663',
                              };
                              if (face !== face.toString()) {
                                             throw new Error(`Error`);
                              };
                              if (face !== face.toUpperCase() || suit !== suit.toUpperCase()) {
                                             throw new Error(`Error`);
                              };
                              if (validFaces.indexOf(face) == -1 || suits[suit] === undefined) {
                                             throw new Error(`Error`);
                              };
                              return {
                                             face,
                                             suit: suits[suit],
                                             toString() {
                                                            return this.face + this.suit;
                                             },
                              };
               };

               let result = [];

               for (let card of cards) {
                              let suit = card.slice(-1);
                              let face = card.slice(0, -1);
                              try {
                                             result.push(createCard(face, suit).toString());
                              } catch (err) {
                                             console.log(`Invalid card: ${card}`);
                                             return;
                              }
               };
               console.log(result.join(', '));
};