function rectangle(width, height, color) {
               width = Number(width);
               height = Number(height);
               color = color[0].toUpperCase() + color.slice(1);

               let result = {
                              width,
                              height,
                              color,
                              calcArea() {
                                             this.area = this.height * this.width;
                                             return this.area;
                              }
               }
               return result;

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
