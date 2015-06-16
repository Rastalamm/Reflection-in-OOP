function User (){

}

User.prototype.logInMessage = function(name) {
  this.name = name;
  console.log(name + ', you are now logged in!');
};


function GroupUser (){

}

GroupUser.prototype = Object.create(User.prototype, {
  constructor: {
    value : GroupUser
  }
})


GroupUser.prototype.groupNums = function (numUser) {
  this.numUser = numUser;
  console.log('You have ' + numUser + ' users in your group.' );
};




function SuperUser(){

}

SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor: {
    value : SuperUser
  }
})


SuperUser.prototype.flying = function() {
  console.log('You can fly!');
};


var judah = new User('Judah', 'judah.lamm@gmail.com');
var groupJudah = new GroupUser(55);
var superJudah = new SuperUser();



var reflector = function (x){

var protoX = Object.getPrototypeOf(x)

  if(protoX && protoX.constructor.name !== 'Object'){
    console.log('Class name: ' + protoX.constructor.name);
    for(key in protoX){
      if(protoX.hasOwnProperty(key)){
        console.log('Method: ' + key);
      }
    }
    reflector(protoX);
  }


}