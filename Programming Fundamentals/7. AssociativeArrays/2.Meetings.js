function meetings(input) {
               let meetingsList = {};

               for (let info of input) {
                              let [weekday, name] = info.split(' ');
                              if (meetingsList.hasOwnProperty(weekday)) {
                                             console.log(`Conflict on ${weekday}!`);
                              } else {
                                             meetingsList[weekday] = name;
                                             console.log(`Scheduled for ${weekday}`);
                              }
               }
               for (let [key, value] of Object.entries(meetingsList)) {
                              console.log(`${key} -> ${value}`)
               }
}
meetings([
               'Monday Peter',
               'Wednesday Bill',
               'Monday Tim',
               'Friday Tim']);