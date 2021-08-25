function solve(input) {
               //1.	Брой танцьори – цяло число в интервала [1 … 10]
               //2.	Брой точки – реално число в интервала [1.00 … 10000.00]
               //3.	Сезон –  текст със следните възможности - "summer" или "winter"
               //4.	Място – текст със следните възможности - "Bulgaria" или "Abroad"
               let broitanciori = Number(input[0]);
               let broitochki = Number(input[1]);
               let sezon = input[2];
               let mqsto = input[3];
               let pari4kii = 0;
               let para = 0;

               if (mqsto == `Bulgaria`) {
                              pari4kii = broitochki * broitanciori;
               } else if (mqsto == `Abroad`) {
                              pari4kii = broitochki * broitanciori;
                              para = pari4kii + pari4kii * 0.5;
               }



               if (mqsto == `Bulgaria` && sezon == `summer`) {
                              pari4kii = pari4kii - pari4kii * 0.05;
               } else if (mqsto == `Bulgaria` && sezon == `winter`) {
                              pari4kii = pari4kii - pari4kii * 0.08;
               } else if (mqsto == `Abroad` && sezon == `summer`) {
                              pari4kii = para - para * 0.1;
               } else if (mqsto == `Abroad` && sezon == `winter`) {
                              pari4kii = para - para * 0.15;
               }

               let pari4kiizablagotv = pari4kii * 0.75;
               let ostanalipari4kii = pari4kii - pari4kiizablagotv;
               console.log(`Charity - ${pari4kiizablagotv.toFixed(2)}`);
               console.log(`Money per dancer - ${(ostanalipari4kii / broitanciori).toFixed(2)}`);
}

solve(["1", "89.5", "summer", "Abroad"]);
