function passwordGuess(input) {
               let password = input[0];
               let rightPassword = "s3cr3t!P@ssw0rd";
               if (password === rightPassword) {
                              console.log(`Welcome`);
               } else {
                              console.log(`Wrong password!`);
               }

}
passwordGuess(["qwerty"])
passwordGuess(["s3cr3t!P@ssw0rd"])
passwordGuess(["s3cr3t!p@ss"])