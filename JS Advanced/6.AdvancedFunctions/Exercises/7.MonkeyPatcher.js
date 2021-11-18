function result(argument) {
               if (argument === 'upvote') return this.upvotes++;
               if (argument === 'downvote') return this.downvotes++;

               let upvote = this.upvotes;
               let downvote = this.downvotes;
               let bigest = Math.max(upvote, downvote);
               let totalVotes = upvote + downvote;
               let balance = upvote - downvote;

               
               function ratingCalculator() {
                              if (totalVotes < 10) return 'new';
                              if (upvote > totalVotes * 0.66 && balance != 0) return'hot';
                              if (balance >= 0 && totalVotes > 100) return 'controversial';
                              if(balance < 0) return 'unpopular';
                              return 'new';
                              
               }
               if (totalVotes > 50) {
                              let obfuscatedNum = Math.ceil(bigest * 0.25);
                              return [upvote + obfuscatedNum, downvote + obfuscatedNum, balance, ratingCalculator.call(this)]
               };
               return [upvote, downvote, balance, ratingCalculator.call(this)]            
}

// var forumPost = {
//                id: '3',
//                author: 'emil',
//                content: 'wazaaaaa',
//                upvotes: 100,
//                downvotes: 100
// };

// result.call(forumPost, 'upvote');
// result.call(forumPost, 'downvote');

// var answer = result.call(forumPost, 'score');
//var expected = [127, 127, 0, 'controversial'];
//compareScore(expected, answer);

// 50 Downvotes
// for (let i = 0; i < 50; i++) {
//                result.call(forumPost, 'downvote');
// }
// answer = result.call(forumPost, 'score');
//expected = [139, 189, -50, 'unpopular'];
//expected = [139, 189, -50, 'unpopular'];
// var forumPost = {
//                id: '2',
//                author: 'gosho',
//                content: 'whats up?',
//                upvotes: 120,
//                downvotes: 30
//            };

//            var answer = result.call(forumPost, 'score');
//var expected = [150, 60, 90, 'hot'];
//            var forumPost = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };

// result.call(forumPost, 'upvote');
// result.call(forumPost, 'downvote');

// var answer = result.call(forumPost, 'score');
// var expected = [127, 127, 0, 'controversial'];
var forumPost = {
               id: '1',
               author: 'pesho',
               content: 'hi guys',
               upvotes: 0,
               downvotes: 0
};

result.call(forumPost, 'upvote');

var answer = result.call(forumPost, 'score');
          // var expected = [1, 0, 1, 'new'];