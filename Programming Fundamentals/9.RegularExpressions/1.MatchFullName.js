// function matchFullName(string) {
//                let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
//                let result = [];
//                let match = pattern.exec(string);


//                while (match != null) {
//                               result.push(match[0]);

//                               match = pattern.exec(string);
//                }
//                console.log(result.join(' '));
// }

function matchFullName(string) {
               let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
               let result = string.toString().match(pattern);
               console.log(result.join(' '))
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");