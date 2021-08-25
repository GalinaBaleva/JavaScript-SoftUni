function gifts (input){
               let n = Number(input[0])
               let m = Number(input[1])
               let s = Number(input[2])

               let magicNum = "";
               let isTrue = false

               for(let i = m; i >= n; i--){


                              if(i % 2 === 0 && i % 3 === 0){

                                             magicNum-=5;
                                             if(i === s){
                                                           isTrue = true
                                                           

                                             }
                                             

                              }
                              if(isTrue){
                                             break
                              }


               }
               console.log(magicNum)

}
//gifts(["1", "30", "15"]) 
gifts(["1", "36", "12"])
gifts(["20", "1000", "36"])
