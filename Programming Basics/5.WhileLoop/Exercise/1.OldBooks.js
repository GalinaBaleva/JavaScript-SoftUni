function oldBook(input) {
               let searchingBook = input[0];
               let index = 1;
               let command = input[index];
               let totalSearchedBooks = 0;

               while (command !== "No More Books") {
                              if (command === searchingBook) {
                                             console.log(`You checked ${totalSearchedBooks} books and found it.`);
                                             break;
                              }
                              totalSearchedBooks++;

                              index++;
                              command = input[index];

               }
               if (command === "No More Books") {
                              console.log(`The book you search is not here!`);
                              console.log(`You checked ${totalSearchedBooks} books.`)
               }
}
oldBook(["Troy", "Stronger", "Life Style", "Troy"])
oldBook(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])
oldBook(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])