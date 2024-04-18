# COMPX575 
Due on **Friday the 12th of April at midday**.

# Task Goal
Learn about:
 * HTTP Verbs to make request 
      [C(POST) 
       R(GET) 
       U(PUT) 
       D(DELETE)]
 * HTTP Response codes to indicate status
 * MySQL database
 * Node.js and Express.js back-end



### Application Description
This is a simple Node.js RESTful CRUD API using Express to interact with a MySQL database. This RESTful API should be able to respond to the following requests:
•	Create new Items and save it back to the database. 
•	Get list of all Items available in the database.
•	Get Items by Item ID.
•	Get Items by Item Name.
•	Update Item information by Item ID.
•	Delete Item by Item ID.
•	Delete all Items from the database.


### Implementation
* You have been provided with a skeleton implementation, along with a ItemsDatabase.sql file to create the database table.
* You should extend the skeleton code rather than develop a completely new solution yourself.  
* Clone the new repository to your computer using Git. Store the repository in your COMPX575 directory.
* Remember to commit and push regularly as you work on the project!


What you need to do:
1.	Download the skeleton code. In the terminal, run npm install to install all the required dependencies.
2.	Review server.js to understand how the Express web-server has been setup.
3.	In the config directory, copy db.config.js.in file to db.config.js, and replace the username, password and database entries with your own credentials.
4.	Ingest ItemsDatabase.sql, into your MySQL instance, to create a items table with five rows inserted in the table.
5.	In the models directory, in the items.model.js file, expand upon the minimal constructor for Item that is provided, and use the database connection to write CRUD functions:
You need to support the following functions (user query() method):
    * Create Items 
    * Retrieve All Items 
    * Retrieve Items by ID
    * Retrieve Items by Item Name
    * Update Items by ID
    * Delete Items by ID
    * Delete All Items
6.	In the routes directory, in a items.routes.js file, set all the endpoints.
7.	In controller folder, in items.controller.js file, write the controllers with CRUD functions.
8.	Test API using POSTMAN.

### What to Submit and How
All pertinent material you have developed for this assignment must be submitted electronically using Moodle and your COMPX575 repository.  The submitted files must be sufficient to recreate your app by running npm install followed by npm start. Do not include your node_modules directory, as this is not needed to reconstitute your project using npm install. Moreover, it could contain binaries files specific to the computer platform you developed the assignment on that are incompatible with the computer system used to test your submitted assignment solution. 
You may choose between submitting a ZIP file. Marks will be deducted for submitted assignments that do meet these requirements.


## Grading
This task is worth as much as 5% of your final grade and is marked out of 5.
* API meets functional requirements - 3 marks
* Set up Routes - 1 mark
* API testing using Postman - 1 mark

## Submission
On top of the commits to your Git repository, please upload your source files to moodle.
