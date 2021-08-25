function pipesInPool(input) {

               let poolVolumInLiters = Number(input[0]); //Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
               let pipe1VolumPerHour = Number(input[1]);//Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
               let pipe2VolumPerHour = Number(input[2]);//Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
               let absentWorkerHours = Number(input[3]);//Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]

               let totalLitersPipe1 = pipe1VolumPerHour * absentWorkerHours;
               let totalLitersPipe2 = pipe2VolumPerHour * absentWorkerHours;
               let totalPipes = totalLitersPipe1 + totalLitersPipe2;


               if (poolVolumInLiters >= totalPipes) {
                              let fullnessOfPoolPercent = totalPipes * 100 / poolVolumInLiters;
                              let totalPipe1Percent = totalLitersPipe1 * 100 / totalPipes;
                              let totalPipe2Percent = totalLitersPipe2 * 100 / totalPipes;
                              console.log(`The pool is ${fullnessOfPoolPercent}% full. Pipe 1: ${totalPipe1Percent}%. Pipe 2: ${totalPipe2Percent}%.`)
               } else {
                              console.log(`For ${absentWorkerHours} hours the pool overflows with ${totalPipes - poolVolumInLiters} liters.`)
               }
}
pipesInPool(["1000", "100", "120", "3"])
pipesInPool(["100", "100", "100", "2.5"])

