# nyu-csci-ua-0480-001-fall-2016-final-project

<h1>Donate and Foster</h1>

<h2>Overview</h2>
    Environmental issues have become a serious topic nowadays. Government devotes more and more energy towards environmental protection, but that is far from enough. People need to have the conciousness of recycling and saving energy in everyday life. 
  
    This is a web app where you can keep track of the water bottles you have donated to our website. In returns, the number of water bottles will transfer into dog food, which will be used to help homeless dogs. You get to pick which dog you want to give food to and you can keep track of how many dogs you have helped. 
  
<h2>Data Model</h2>
    First dradft schema 
    
    var UserList = new mongoose.Schema({
        UserArray: [User]
    })
    
    var User = new mongoose.Schema({
        username: String,
        password: String,
        bottlesDonated: [Bottle]
        dogsFostered: [Dog]
    });
    
    var Dog = new mongoose.Schema({
        name: String,
        age: Number, 
        foodReceived: Number
    });
    
    var Bottle = new mongoose.Schema({
       size = Number, 
       numDonated = Number
    });
  

<h2>WireFrames</h2>

<h2>User Stories</h2>

<h2>Research Topics</h2>

