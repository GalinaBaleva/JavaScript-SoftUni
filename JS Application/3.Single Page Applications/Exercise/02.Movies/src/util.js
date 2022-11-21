const allSections = document.getElementById('all-sections');

export function viewSection(section) {
               allSections.replaceChildren(section);
};

export function el(tagName, classNames, attrNames, ...text) {
               let tag = document.createElement(tagName);

               if (classNames.length > 0) {
                              tag.className = classNames;
               };

               if (attrNames.length > 0) {
                              for (let attr of attrNames) {
                                             tag.setAttribute(attr[0], attr[1]);
                              };
               };

               for (let word of text) {
                              if (typeof (word) == 'string' || typeof (word) == 'number') {
                                             word = document.createTextNode(word);
                              };

                              tag.appendChild(word);
               };
               return tag;
};



