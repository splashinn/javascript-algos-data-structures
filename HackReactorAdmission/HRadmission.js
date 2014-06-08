var myArray = [];
myArray = ["Kyle Maune", "kmaune71@gmail.com"];

function cutName (name){
  var splitName = [];
  splitName = name.split(" ");
  return splitName;
}

var myData = { };
myData.fullName = cutName(myArray[0]);
myData.skype = myArray[1];
myData.github = "kmaune0";

HackReactor.showApp();
