function gramophone(bandName, albumName, nameOfSong) {
               let fullRotation = 2.5;
               let songInSeconds = albumName.length * bandName.length * nameOfSong.length / 2;
               let rotations = Math.ceil(songInSeconds / fullRotation);

               console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
