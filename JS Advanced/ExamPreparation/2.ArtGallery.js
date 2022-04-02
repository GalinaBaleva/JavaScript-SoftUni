class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticlesMosels = { 'picture': 200, 'photo': 50, 'item': 250 };
    this.listOfArticles = [];
    this.guests = [];
  };
  addArticle(artModel, artName, quantity) {
    artModel = artModel.toLowerCase()
    quantity = Number(quantity);

    if (!this.possibleArticlesMosels.hasOwnProperty(artModel)) {
      throw new Error(`This article model is not included in this gallery!`);
    }; //!Error is not OK
    if (!this.listOfArticles.find((el) => el.artName == artName)) {
      this.listOfArticles.push({ artModel, artName, quantity });
    } else {
      let index = this.listOfArticles.findIndex((el) => el.artName == artName && el.artModel == artModel)
      if (index < 0) {
        this.listOfArticles.push({ artModel, artName, quantity });
      } else {
        this.listOfArticles[index].quantity += quantity;
      }
    }
    return `Successfully added article ${artName} with a new quantity- ${quantity}.`
  };
  inviteGuest(guestName, persolality) {
    let personalityPoints = {
      Vip: 500,
      Middle: 250
    }
    let index = this.guests.findIndex(guest => guest.guestName == guestName);
    if (index >= 0) {
      throw new Error(`${guestName} has already been invited.`);
    }
    let points = personalityPoints[persolality] ? personalityPoints[persolality] : 50;
    this.guests.push({ guestName, points, purcheseArticle: 0 })
    return `You have successfully invited ${guestName}!`
  };
  buyArticle(artModel, artName, guestName){
    let indexArt = this.listOfArticles.find(art => art.artName == artName && art.artModel == artModel);
    let indexGuest = this.guests.findIndex(guest => guest.guestName == guestName);
    if(indexArt < 0){
      throw new Error(`This article is not found.`);
    };
    if(this.listOfArticles[indexArt].quantity == 0){
      return `The ${artName} is not available.`
    };
    if(indexGuest < 0){
      return `This guest is not invited.`
    }
    let neededPoints = this.possibleArticlesMosels[artName]
    if(this.guests[indexGuest].points < neededPoints){
      return `You need to more points to purchase the article.`
    };

  }
}
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

/*Successfully added article Mona Liza with a new quantity- 3.
  Successfully added article Ancient vase with a new quantity- 2.
  Successfully added article Mona Liza with a new quantity- 1.*/

// const artGallery2 = new ArtGallery('Curtis Mayfield');
// console.log(artGallery2.inviteGuest('John', 'Vip'));
// console.log(artGallery2.inviteGuest('Peter', 'Middle'));
// console.log(artGallery2.inviteGuest('John', 'Middle'));

/*You have successfully invited John!
 You have successfully invited Peter!
 John has already been invited.*/

const artGallery3 = new ArtGallery('Curtis Mayfield');
artGallery3.addArticle('picture', 'Mona Liza', 3);
artGallery3.addArticle('Item', 'Ancient vase', 2);
artGallery3.addArticle('picture', 'Mona Liza', 1);
artGallery3.inviteGuest('John', 'Vip');
artGallery3.inviteGuest('Peter', 'Middle');
console.log(artGallery3.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery3.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery3.buyArticle('item', 'Mona Liza', 'John'));

/*John successfully purchased the article worth 200 points.
 Peter successfully purchased the article worth 250 points. 
 This article is not found.*/

const artGallery4 = new ArtGallery('Curtis Mayfield');
artGallery4.addArticle('picture', 'Mona Liza', 3);
artGallery4.addArticle('Item', 'Ancient vase', 2);
artGallery4.addArticle('picture', 'Mona Liza', 1);
artGallery4.inviteGuest('John', 'Vip');
artGallery4.inviteGuest('Peter', 'Middle');
artGallery4.buyArticle('picture', 'Mona Liza', 'John');
artGallery4.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery4.showGalleryInfo('article'));
console.log(artGallery4.showGalleryInfo('guest'));

/* Articles information:
 picture - Mona Liza - 3
 item - Ancient vase - 1
 Guests information:
 John - 1
 Peter - 1
*/