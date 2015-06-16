function User(name, email){
  this.name = name;
  this.email = email;
}

User.prototype.logInMessage = function() {
  console.log(name + ', you are now logged in!');
};


function GroupUser(numUser){
  User.call(this, name, email);
  this.numUser = numUser;
}

GroupUser.prototype = Object.create(GroupUser.prototype, {
  constructor: {
    value : User
  }
})


GroupUser.prototype.groupNums = function(numUser) {
  console.log('You have ' + x + ' users in your group.' );
};




function SuperUser(){
  GroupUser.call(this, numUser);
}

SuperUser.prototype = Object.create(SuperUser.prototype, {
  constructor: {
    value : GroupUser
  }
})


SuperUser.prototype.flying = function() {
  console.log('You can fly!');
};



