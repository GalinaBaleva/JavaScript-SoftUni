class Contact {
               constructor(name, lastName, phone, email) {
                              this.name = name;
                              this.lastName = lastName;
                              this.phone = phone;
                              this.email = email;
                              this._online = false;
               };
               get online() {
                              return this._online;
               };

               set online(value) {
                              if (this.divTitle) {
                                             if (!value) {
                                                            this.divTitle.classList.remove('online');
                                             } else {
                                                            this.divTitle.classList.add('online');
                                             };
                              };
                              this._online = value;

               };

               render(id) {
                              let article = document.createElement('article');
                              this.divTitle = document.createElement('div');
                              this.divTitle.classList.add('title');
                              this.divTitle.innerHTML = `${this.name} ${this.lastName}`;
                              this.divButton = document.createElement('button');
                              this.divButton.innerHTML = '&#8505;';
                              this.divTitle.appendChild(this.divButton);

                              if (this._online) {
                                             this.divTitle.classList.add('online');
                              }

                              this.infoDiv = document.createElement('div');
                              this.infoDiv.classList = 'info';
                              this.infoDiv.style.display = 'none';
                              this.infoDiv.innerHTML = `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`;


                             
                              this.divButton.addEventListener('click',() => {this.infoDiv.style.display = this.infoDiv.style.display == 'none' ? 'block' : 'none'});
                              article.appendChild(this.divTitle);
                              article.appendChild(this.infoDiv);
                              document.getElementById(id).appendChild(article);
               };
};
let contacts = [
               new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
               new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
               new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
setTimeout(() => contacts[2].online = true, 2000);