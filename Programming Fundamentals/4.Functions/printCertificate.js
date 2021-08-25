function printCertificate(grade, names) {
               let ptintHeader = () => {
                              console.log('~~~-   {@}   -~~~');
                              console.log('~- Certificate -~');
                              console.log('~~~-  ~---~  -~~~');
               };

               let printName = n => console.log(n[0] + ' ' + n[1]);

               let isPassing = g => g >= 3;

               // let ptintGrade = g => {
               //                let description;
               //                if (g < 3) {
               //                               description = `Fail'; 
               //                } else if (g >= 3 && g < 3.50) {
               //                               description = `Poor';
               //                } else if (g >= 3.50 && g < 4.50) {
               //                               description = `Good';
               //                } else if (g >= 4.50 && g < 5.50) {
               //                               description = `Very good';
               //                } else if (g >= 5.50) {
               //                               description = `Excellent';
               //                }
               //                console.log(`${description} (${g.toFixed(2)})`)
               // };

               if(isPassing(grade)){
                              printHeader();
                              printName(names);
                              ptintGrade(grade);
               } else{
                              console.log(`${names[0]} ${names[1]} does not qualify`);
               }

               let isPassing = g => g >= 3;

}
printCertificate(5.25, ['Peter', 'Carter']);