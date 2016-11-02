# nyu-csci-ua-0480-001-fall-2016-final-project

<h1>Donate and Foster</h1>

<h2>Overview</h2>
Environmental issues have become a serious topic nowadays. Government devotes more and more energy towards environmental protection, but that is far from enough. People need to have the conciousness of recycling and saving energy in everyday life.
    
This is a web app where you can keep track of the water bottles you have donated to our website. In returns, the number of water bottles will transfer into dog food, which will be used to help homeless dogs. You get to pick which dog you want to give food to and you can keep track of how many dogs you have helped. 

<h2>Data Model</h2>
    First dradft schema 
    
    var UserList = new mongoose.Schema({
        UserArray: [User]
    });
    
    var User = new mongoose.Schema({
        username: String,
        password: String,
        bottlesDonated: [Bottle],
        dogsFostered: [Dog],
        dogFood: Number
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
1. As a user, I can create an account
2. As a user, I can donate water bottles
3. As a user, I can choose what dogs I want to foster and the amount of food I want to give
4. As a user, I can view the number of bottles donated and the dogs I fostered

<h2>Research Topics</h2>
(6 points)Integrate user authentication

    Check for user username and password when logging in 

(4 ponits) Unit Testing

    making sure that all the functions are working properly and that adding and deleting information is fine
    
(2 points) CSS Framework
    
    adding photos of dogs and other decorating features to the program


