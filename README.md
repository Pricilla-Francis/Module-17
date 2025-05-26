# Module-17
Social Network API

https://github.com/Pricilla-Francis/Module-17.git

https://app.screencastify.com/v2/watch/RxDS1bDkZbp0sp1q84Kr

# User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

# Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list

# Description
This is a backend API for a social media application built using **Node.js**, **Express.js**, and **MongoDB** (via **Mongoose**). It allows a social media startup to manage users, thoughts, reactions, and friendships using a NoSQL database capable of handling large volumes of unstructured data.

# API Endpoints


# Users
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:userId	Get a single user
POST	/api/users	Create a new user
PUT	/api/users/:userId	Update a user
DELETE	/api/users/:userId	Delete a user
POST	/api/users/:userId/friends/:friendId	Add a friend
DELETE	/api/users/:userId/friends/:friendId	Remove a friend

# Thoughts
Method	Endpoint	Description
GET	/api/thoughts	Get all thoughts
GET	/api/thoughts/:thoughtId	Get a single thought
POST	/api/thoughts	Create a new thought
PUT	/api/thoughts/:thoughtId	Update a thought
DELETE	/api/thoughts/:thoughtId	Delete a thought
POST	/api/thoughts/:thoughtId/reactions	Add a reaction
DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	Remove a reaction

