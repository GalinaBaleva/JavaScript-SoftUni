function passwordValidator(password) {

               function passwordLength(password) {
                              if (password.length < 6 || password.length > 10) {
                                             return false;
                              } else {
                                             return true;
                              }
               }

               function onlyLattersAndDigits(password) {
                              let isTrue = true;
                              for (let string of password) {
                                             string = string.charCodeAt(0);
                                             if ((string >= 48 && string <= 57) || (string >= 65 && string <= 90) || (string >= 97 && string <= 122)) {
                                                            isTrue = true;
                                             } else {
                                                            return false;
                                             }

                              }
                              return isTrue;
               }
               function containTowDigits(password) {
                              let counter = 0
                              for (let string of password) {
                                             string = string.charCodeAt(0);
                                             if (string >= 48 && string <= 57) {
                                                            counter++;
                                             }
                              }
                              if (counter < 2) {
                                             return false;
                              } else {
                                             return true;
                              }
               }
               let islengthValid = passwordLength(password);
               let isLetterAndDigitsValid = onlyLattersAndDigits(password);
               let isTowDigitsValid = containTowDigits(password);




               if (islengthValid === false) {
                              console.log(`Password must be between 6 and 10 characters`);
               }
               if (isLetterAndDigitsValid === false) {
                              console.log(`Password must consist only of letters and digits`);
               }
               if (isTowDigitsValid === false) {
                              console.log(`Password must have at least 2 digits`);
               }
               if (islengthValid === true && isLetterAndDigitsValid === true && isTowDigitsValid === true) {
                              console.log(`Password is valid`);
               }
}
//passwordValidator('logIn');
//passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
//passwordValidator('Pa1zAZ9');