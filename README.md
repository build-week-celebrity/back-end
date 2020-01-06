# back-end

# Documentation also published here: https://documenter.getpostman.com/view/9974280/SWLe7TMe?version=latest


# GET all celebrities

https://celeb-doa-api.herokuapp.com/api/celebrities/
You can get an array of all the celebrities at: https://celeb-doa-api.herokuapp.com/api/celebrities/

The seed data makes the following array:

[ { "id": 2, "name": "Paul McCartney", "yearDied": null, "ageDied": null, "isAlive": 1, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_McCartney_in_October_2018.jpg" }, { "id": 3, "name": "Adam West", "yearDied": 2017, "ageDied": 88, "isAlive": 0, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Adam_West_by_Gage_Skidmore_3.jpg" }, { "id": 4, "name": "David Hasselhoff", "yearDied": null, "ageDied": null, "isAlive": 1, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hoff_3.jpg" }, { "id": 5, "name": "Dick Van Dyke", "yearDied": null, "ageDied": null, "isAlive": 1, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/2/20/Mary_Poppins3.jpg" }, { "id": 6, "name": "Roger Moore", "yearDied": 2017, "ageDied": 89, "isAlive": 0, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sir_Roger_Moore_3.jpg" }, { "id": 7, "name": "Charlton Heston", "yearDied": 2008, "ageDied": 84, "isAlive": 0, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/9/90/Charlton_Heston_in_Ben_Hur_trailer.jpg" }, { "id": 8, "name": "Leonard Nimoy", "yearDied": 2015, "ageDied": 83, "isAlive": 0, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Leonard_Nimoy_1975.jpg" }, { "id": 9, "name": "William Shatner", "yearDied": null, "ageDied": null, "isAlive": 1, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/b/b0/William_Shatner_-_1958.jpg" }, { "id": 10, "name": "Mary Tyler Moore", "yearDied": 2017, "ageDied": 80, "isAlive": 0, "imageURL": "https://upload.wikimedia.org/wikipedia/en/d/dc/Mary_Tyler_Moore_-_1978.jpg" }, { "id": 11, "name": "Lucille Ball", "yearDied": 1989, "ageDied": 77, "isAlive": 0, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/3/38/LDBALL1950s.jpg" }, { "id": 12, "name": "Cindy Williams", "yearDied": null, "ageDied": null, "isAlive": 1, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cindy_Williams.JPG" }, { "id": 13, "name": "Penny Marshall", "yearDied": 2018, "ageDied": 75, "isAlive": 0, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/4/43/Penny_Marshall_1976.jpg" }, { "id": 14, "name": "Goldie Hawn", "yearDied": null, "ageDied": null, "isAlive": 1, "imageURL": "https://en.wikipedia.org/wiki/Goldie_Hawn#/media/File:Goldie_Hawn_-_1978.jpg" }, { "id": 15, "name": "Ted Danson", "yearDied": null, "ageDied": null, "isAlive": 1, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Ted_Danson_2008_number_2.jpg" } ]



Example Request
get celebrities
curl --location --request GET 'https://celeb-doa-api.herokuapp.com/api/celebrities/'



# GET get individual celebrity
https://celeb-doa-api.herokuapp.com/api/celebrities/:id
You can get an individual celebrity by passing in the id.

For example: https://celeb-doa-api.herokuapp.com/api/celebrities/1

gets the celebrity with an id of "1"

PATH VARIABLES
id

Example Request
get individual celebrity
curl --location --request GET 'https://celeb-doa-api.herokuapp.com/api/celebrities/'


# DEL delete celebrity
https://celeb-doa-api.herokuapp.com/api/celebrities/:id
You can delete an individual celebrity by passing in the id.

For example: https://celeb-doa-api.herokuapp.com/api/celebrities/1

deletes the celebrity with an id of "1"

PATH VARIABLES
id

Example Request
delete celebrity
curl --location --request DELETE 'https://celeb-doa-api.herokuapp.com/api/celebrities/'


# PUT edit celebrity
https://celeb-doa-api.herokuapp.com/api/celebrities/:id
pass in the id of the celebrity you want to edit and add an object containing the properties you want to change. isAlive must be a boolean value.

PATH VARIABLES
id

Example Request
edit celebrity
curl --location --request PUT 'https://celeb-doa-api.herokuapp.com/api/celebrities/'



# POST add celebrity
https://celeb-doa-api.herokuapp.com/api/celebrities/
you can add a celebrity by posting a celebrity object to here: https://celeb-doa-api.herokuapp.com/api/celebrities/



Example Request
add celebrity
curl --location --request POST 'https://celeb-doa-api.herokuapp.com/api/celebrities/'



# GET get users
https://celeb-doa-api.herokuapp.com/api/users
with authorization you can get a list of users at: https://celeb-doa-api.herokuapp.com/api/users

return object looks like this:

{ "users": [ { "id": 1, "username": "admin" } ], "loggedInUser": "joscelyn" }



Example Request
get users
curl --location --request GET 'https://celeb-doa-api.herokuapp.com/api/users'



# POST register user
https://celeb-doa-api.herokuapp.com/api/auth/register
can register user by posting user object to here:

https://celeb-doa-api.herokuapp.com/api/auth/register

User object should look like:

{ "username": "admin", "password": "admin", "email": "email", "score": 50 }

username and password are mandatory



Example Request
register user
curl --location --request POST 'https://celeb-doa-api.herokuapp.com/api/auth/register'


# POST login
https://celeb-doa-api.herokuapp.com/api/auth/login
user can login by making post request to https://celeb-doa-api.herokuapp.com/api/auth/login

must pass in the username and password. will receive a token object in return



Example Request
login
curl --location --request POST 'https://celeb-doa-api.herokuapp.com/api/auth/login'


# DEL delete user
https://celeb-doa-api.herokuapp.com/api/users/:id
with authorization you can delete a user by making delete request to: https://celeb-doa-api.herokuapp.com/api/users/:id

pass in the id of the user you want to delete

PATH VARIABLES
id

Example Request
delete user
curl --location --request DELETE 'https://celeb-doa-api.herokuapp.com/api/users/'



# PUT edit user
https://celeb-doa-api.herokuapp.com/api/users/:id
With authorization you can edit a user by making a put request to https://celeb-doa-api.herokuapp.com/api/users/:id

pass in the id of the user you want to edit. Also pass in a user object containing the properties you wish to edit

user object looks like: { "id": 3, "username": "admin", "password": "admin4", "email": "email", "score": 70 }

PATH VARIABLES
id
