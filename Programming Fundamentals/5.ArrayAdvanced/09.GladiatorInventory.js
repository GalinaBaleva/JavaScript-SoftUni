function gladiatorInventory(array) {
               let arrayWithEquipment = array.shift().split(' ');

               for (let i = 0; i < array.length; i++) {
                              let currentFromI = array[i].split(' ');
                              let command = currentFromI[0];
                              let equipment = currentFromI[1];
                              if (command === 'Buy') {
                                             if (arrayWithEquipment.indexOf(equipment) < 0) {
                                                            arrayWithEquipment.push(equipment);

                                             }
                              } else if (command === 'Trash') {
                                             let index = arrayWithEquipment.indexOf(equipment);
                                             if (index >= 0) {
                                                            arrayWithEquipment.splice(index, 1);

                                             }
                              } else if (command === 'Repair') {
                                             let index = arrayWithEquipment.indexOf(equipment);
                                             if (index >= 0) {

                                                            arrayWithEquipment.splice(index, 1);
                                                            arrayWithEquipment.push(equipment);
                                             }
                              } else if (command === 'Upgrade') {
                                             let separateEquipment = equipment.split('-');
                                             let index = arrayWithEquipment.indexOf(separateEquipment[0]);
                                             if (index >= 0) {
                                                            let result = `${separateEquipment[0]}:${separateEquipment[1]}`;
                                                            arrayWithEquipment.splice(index + 1, 0, result);
                                             }
                              }

               }
               console.log(arrayWithEquipment.join(' '));
}
// gladiatorInventory(['SWORD Shield Spear',
//                'Repair Spear', 'Trash Spear', 'Buy Spear', 'Buy Bag', 'Repair Spear', 'Upgrade Helmet-V']);
gladiatorInventory(['SWORD Shield Spear',
                              'Buy Bag', 
                              'Trash Shield', 
                              'Repair Spear', 
                              'Upgrade SWORD-Steel']);
// gladiatorInventory(['SWORD Shield Spear',
//                               'Trash Bow',
//                               'Repair Shield',
//                               'Upgrade Helmet-V']);