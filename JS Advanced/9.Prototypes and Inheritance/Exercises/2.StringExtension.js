(function stringExtension() {
               String.prototype.ensureStart = function (str) {
                              if (this.startsWith(str)) {
                                             return this.toString();
                              } else {
                                             return str + (this.toString())
                              }
               }
               String.prototype.ensureEnd = function (str) {
                              if (this.endsWith(str)) {
                                             return this.toString();
                              } else {
                                             return this.toString() + str;
                              }
               };
               String.prototype.isEmpty = function () {
                              return this.lenght === 0 ? true : false;
               }
               String.prototype.truncate = function (n) {
                              const strToString = this.toString();
                              if (this.length <= n) {
                                             return this.toString();
                              }
                              if (this.length < 4) {
                                             let sliced = strToString.substring(0, this.length - n);
                                             sliced = sliced + '.'.repeat(n);
                                             return sliced;
                              }else {
                                           let splitedString = this.split(' ');
                                             if (splitedString.length > 1) {
                                                            let cutedString = (this.slice(0, n - this.length)).split(' ');
                                                            let result = [];
                                                            for (let i = 0; i < cutedString.length; i++) {
                                                                           if (splitedString[i] === cutedString[i]) {
                                                                                          result.push(cutedString[i]);
                                                                           } else {
                                                                                          break;
                                                                           }
                                                            }
                                                            return result.join(' ') + '...';
               
                                             } else {
                                                            let sliced = this.slice(0, n - 3);
                                                            return sliced + '...';
                                             }
                              }    
               }
               String.format = function (string, ...params) {
                              let result = string;
                              for(let i = 0; i < params.length; i++){
                                             result = result.replace(`{${i}}`, params[i]);
                              }
                              return result;
               }
})()
let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.ensureEnd('string'));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
               'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
               'dog'));
               //  const splitted = strToString.split(' ');
               //                              if(splitted.length == 1){
               //                                             return strToString.substr(0, n-3) + '...';
               //                              } else {
               //                                             let result = '';
               //                                             for(let i = 0; i < splitted.length; i++){
               //                                                            if(result.length + splitted[i].length <= n-3){
               //                                                                           result += '' + splitted[i];
               //                                                            } else {
               //                                                                           return result.trim() + '...';
               //                                                            }
               //                                             }
               //                                             return result + '...';
               //                              }