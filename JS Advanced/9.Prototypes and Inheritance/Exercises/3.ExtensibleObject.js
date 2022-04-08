function extensibleObject() {
               return {
                              extend: function (template){
                                             let objProto = Object.getPrototypeOf(this);
                                             let objTemplate = Object.entries(template)
                                             for(let [key, value] of objTemplate){
                                                            if(typeof value == 'function'){
                                                                           objProto[key] = value;
                                                            } else {
                                                                           this[key] = value;
                                                            }
                                             }
                              } 

               }

}
const myObj = extensibleObject();

const template = {
               extensionMethod: function () { },
               extensionProperty: 'someString'
}
myObj.extend(template);