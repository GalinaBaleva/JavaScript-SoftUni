function movies(array) {
               let storeMovie = {};
               for (let data of array) {
                              if (data.includes('addMovie')) {
                                             let name = data.replace('addMovie ', '');
                                             // let name = data; //
                                             if (!storeMovie.hasOwnProperty(name)) {
                                                            storeMovie[name] = ({ name: name });
                                             }
                              } else if(data.includes('onDate')){
                                             let [name, onDate] = data.split( /\s*onDate\s*/);
                                             if(storeMovie.hasOwnProperty(name)){
                                                            storeMovie[name]['date'] = onDate;
                                             }
                              } else if (data.includes('directedBy')) {
                                             let [name, director] = data.split( /\s*directedBy\s*/);
                                             if (storeMovie.hasOwnProperty(name))
                                                            storeMovie[name]['director'] = director;
                              }
               }
             for (let movies in storeMovie){
                            let movie = storeMovie[movies];

                            if(movie.name && movie.director && movie.date){
                                           console.log(JSON.stringify(movie));
                            }
             }
}

movies([
               'addMovie Fast and Furious',
               'addMovie Godfather',
               'Inception directedBy Christopher Nolan',
               'Godfather directedBy Francis Ford Coppola',
               'Godfather onDate 29.07.2018',
               'Fast and Furious onDate 30.07.2018',
               'Batman onDate 01.08.2018',
               'Fast and Furious directedBy Rob Cohen'])