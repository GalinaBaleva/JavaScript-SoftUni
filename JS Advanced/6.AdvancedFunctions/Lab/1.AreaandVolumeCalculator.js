/**
 * 
 * @param {function} area 
 * @param {function} vol 
 * @param {string} input 
 */
function solve(area, vol, input) {
               const cubes = JSON.parse(input);
               let result = [];
               for (let cub of cubes) {
                              let cubsArea = area.apply(cub);
                              let cubsVol = vol.apply(cub);

                              result.push({
                                             area: cubsArea,
                                             volume: cubsVol
                              })
               }
               return result;
}
const input = `[
               {"x":"1","y":"2","z":"10"},
               {"x":"7","y":"7","z":"10"},
               {"x":"5","y":"2","z":"10"}
               ]`;

console.log(solve(area, vol, input));

function area() {
               return Math.abs(this.x * this.y);
};

function vol() {
               return Math.abs(this.x * this.y * this.z);
};


