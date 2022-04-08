function solve() {
               class Balloon{
                              constructor(color, hasWeight){
                                             this.color = color;
                                             this.hasWeight = hasWeight;
                              }
               }
               class PartyBalloon extends Balloon{
                              constructor(color, hasWeight,ribbonColor, ribbonLength){
                                             super(color, hasWeight);
                                             this._ribbon = {
                                                            color: ribbonColor,
                                                            length: ribbonLength
                                             }
                              }
                              get ribbon(){
                                             return this._ribbon;
                              }
               }
               class BirthdayBalloon extends PartyBalloon {
                              constructor(color, hasWeight, ribbonColor, ribbonLength, text){
                                             super(color, hasWeight, ribbonColor, ribbonLength);
                                             this._text = text;
                              }
                              get text(){
                                             return this._text;
                              }
               }
               return {
                              Balloon,
                              PartyBalloon,
                              BirthdayBalloon
               }

};
let classes = solve();
let test = new classes.Balloon("Tumno-bqlo", 20.5);


console.log( test.hasWeight);
console.log(testPartyBalloon);
console.log(ribbon);

/*Balloon {color: 'yellow', hasWeight: 20.5}

PartyBalloon {color: 'yellow', hasWeight: 20.5, _ribbon: {color: 'red', length: 10.25}}

{color: 'red', length: 10.25}*/
