// filename: complexCode.js
// This code demonstrates a complex and sophisticated example of implementing a social media application.

/* 

---------------------------------------
------------ User Class ---------------
---------------------------------------

*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  getPosts() {
    return this.posts;
  }
}

/* 

---------------------------------------
------------ Post Class ---------------
---------------------------------------

*/

class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  getLikes() {
    return this.likes;
  }

  getComments() {
    return this.comments;
  }
}

/* 

------------------------------------------
------------ Main Application -------------
------------------------------------------

*/

const user1 = new User("John", 25);
const user2 = new User("Sarah", 30);

user1.createPost("Hello, friends! How's your day going?");
user1.createPost("Just had an amazing dinner!");

user2.createPost("Excited for my upcoming trip!");
user2.createPost("Finished reading a great book!");

user1.getPosts()[0].addLike();
user1.getPosts()[0].addLike();
user1.getPosts()[0].addLike();
user2.getPosts()[0].addLike();
user2.getPosts()[0].addLike();
user2.getPosts()[0].addLike();

user1.getPosts()[1].addComment("Sounds delicious!");
user1.getPosts()[1].addComment("I want the recipe.");
user2.getPosts()[1].addComment("What's the book title?");
user2.getPosts()[1].addComment("I need a good book recommendation!");

console.log(`User '${user1.name}' has ${user1.getPosts().length} posts.`);
console.log(`User '${user2.name}' has ${user2.getPosts().length} posts.`);

console.log(`Post 1 by '${user1.name}' has ${user1.getPosts()[0].getLikes()} likes.`);
console.log(`Post 2 by '${user2.name}' has ${user2.getPosts()[0].getLikes()} likes.`);

console.log(`Comments on post 2 by '${user1.name}':`);
user1.getPosts()[1].getComments().forEach((comment) => {
  console.log(`- ${comment}`);
});