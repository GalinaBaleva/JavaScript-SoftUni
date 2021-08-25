function songs(array) {
               class Song {
                              constructor(typeList, name, time) {
                                             this.typeList = typeList;
                                             this.name = name;
                                             this.time = time;
                              }

               }
               let songsList = [];
               let countSongs = array.shift();
               let typeSong = array.pop();

               for (let i = 0; i < countSongs; i++) {
                              let [typeList, name, time] = array[i].split('_');
                              songsList.push(new Song(typeList, name, time));
               }


               if (typeSong === 'all') {
                              songsList.forEach((i) => console.log(i.name));
               } else {
                             let filter = songsList.filter((i) => i.typeList === typeSong);
                             filter.forEach((i) => console.log(i.name))
               }
}
// songs([3,
//                'favourite_DownTown_3:14',
//                'favourite_Kiss_4:16',
//                'favourite_Smooth Criminal_4:01',
//                'favourite']);
// songs([4,
//                'favourite_DownTown_3:14',
//                'listenLater_Andalouse_3:24',
//                'favourite_In To The Night_3:58',
//                'favourite_Live It Up_3:48',
//                'listenLater']);
songs([2,
               'like_Replay_3:15',
               'ban_Photoshop_3:48',
               'all']);