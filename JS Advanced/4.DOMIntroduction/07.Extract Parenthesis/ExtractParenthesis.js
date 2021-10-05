function extract(content) {
               const text = document.getElementById(content).textContent;
               const pattern = /\((.+?)\)/g;

               let result = '';
               let words = pattern.exec(text);
               while (words != null) {
                              result += words[1];
                              result += '; '
                              words = pattern.exec(text);
               }
               return result;
}