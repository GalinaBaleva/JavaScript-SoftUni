function extractEmail(text){
               let pattern = /(?<=\s)([A-Z|a-z|\d+]+[\.|\-|_]?[A-Z|a-z|\d+]?)+([-|.|_][A-Za-z\d])*@([A-Za-z]+[-]?[A-Za-z]+)(-[A-Za-z]+)*?((\.)[A-Za-z]+[-]?[A-Za-z]+(-[A-Za-z]+)*?)+\b/g;

               let result = text.match(pattern);
               for (let email of result){
                              let current = email
                              console.log(current)
               }
}
extractEmail('Please contact us at: support@github.com.');
extractEmail('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmail('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');
