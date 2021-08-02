# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description

Given some starter code, we build out a backend for an e-commerce database while implementing Sequelize.  In addition, which was just as important, we had to set up the various end points while demonstrating that we could GET, POST, PUT and DELETE from each of the tables. To verify that all of this functionality worked, I used Postman instead of Insomnia Core.

## Demo Video

Should you want to view the demo video that I built to demonstrate the functionality, please visit here:
 https://macktrain.github.io/sandlot-week13/demonstration.mp4


##  Acceptance Criteria Met

1.  (Technical) Connects to a MySQL database using the MySQL2 and Sequelize packages.
2.  (Technical) Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the dotenv package.
3.  (Technical) Syncs Sequelize models to a MySQL database on the server start.
4.  (Technical) Includes column definitions for all four models outlined in the homework instructions.
5.  (Technical) Includes model associations outlined in the homework instructions.
6.  The walkthrough video must demonstrate how to create the schema from the MySQL shell.
    ```md
    c:\yourDirectory: mysql -u root -p
    enter password: <enter your password>
    mysql>  source ./db/schema.sql
    ```
7.  The walkthrough video must demonstrate how to seed the database from the command line.
    ```md
    c:\yourDirectory: node ./seeds/index.js
    ```
8.  The walkthrough video must demonstrate how to start the application’s server.
    ```md
    c:\yourDirectory: nodemon
    ```
9.  The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Postman.
10. The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Postman.
11. The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Postman.

## Getting Started

If you would like to get this codebase running you would need to do the following:
1.  Create the schema (Step #6 above)
2.  Seed the database (Step #7 above)
3.  Start the server  (Step #8 above)
4.  Create an account, if necessary with Postman and then open it.
5.  Begin testing the capabilities!

## Technologies and Packages
Javascript, MySQL, Node.js, MySQL Workbench (primarily testing)
Packages:  Sequelize, MySQL2, dotenv, Express, nodemon, lodash

## Credits

Created by Lee Macklin