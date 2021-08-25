function cutAndReverse(string) {
               let length = string.length / 2;

               let firstPart = string.substring(0, length).split('').reverse().join('');
               let secondPart = string.substring(length).split('').reverse().join('');

               console.log(firstPart);
               console.log(secondPart);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');