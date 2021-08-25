function extractFile(folders){
               folders = folders.split('\\').pop().split('.');
               
               let extension = folders.pop();
               let name = folders.join('.');

               console.log(`File name: ${name}`);
               console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx');