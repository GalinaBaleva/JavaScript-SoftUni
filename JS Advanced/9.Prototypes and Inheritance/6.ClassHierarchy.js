function classesHierarchy() {
               class Figure {
                              constructor() {
                                             this.m = 0.01
                                             this.cm = 1;
                                             this.mm = 10
                                             this.unit = 'cm'
                                             this._area = ''
                              }
                              get area() {
                                             return this._area;
                              }
                              calculator(param) {
                                             if (this.unit == 'm') {
                                                            return param * this.m;
                                             } else if (this.unit == 'cm') {
                                                            return param;
                                             } else if (this.unit == 'mm') {
                                                            return param * this.mm;
                                             }
                              }
                              changeUnits(unit) {
                                             this.unit = unit;
                              }
                              toString() {
                                             return `Figures units: ${this.unit}`
                              }
               }
               class Circle extends Figure {
                              constructor(radius) {
                                             super()
                                             this.radius = radius;
                              }
                              get area() {
                                             return Math.PI * this.calculator(this.radius) * this.calculator(this.radius);
                              }

                              toString() {
                                             return `Figures units: ${this.unit} Area: ${this.area} - radius: ${this.calculator(this.radius)}`;
                              }
               }
               class Rectangle extends Figure {
                              constructor(width, height, unit) {
                                             super(unit)
                                             this.unit = unit
                                             this.width = width
                                             this.height = height
                              }
                              get area() {
                                             return this.calculator(this.width) * this.calculator(this.height);
                              }
                              toString() {
                                             return `Figures units: ${this.unit} Area: ${this.area} - width: ${this.calculator(this.width)}, height: ${this.calculator(this.height)}`;
                              }
               }
               return {
                              Figure,
                              Circle,
                              Rectangle
               }
}

let c = new Circle(5);
console.log(c.area);//78.53981633974483
console.log(c.toString());//Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area);//1200
console.log(r.toString());//Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
