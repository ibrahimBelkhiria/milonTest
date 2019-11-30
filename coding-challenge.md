# Coding challenge

## General

Your task is to create a simple web-based interface for managing users saved in a relational database. Please use following technologies to create that app:

For front-end:  
* HTML
* CSS, SCSS/SASS or less
* react + redux

For back-end:
* nodejs
* MySQL or PostgreSQL
* Optional: docker(-compose)

Please use a REST-based API to communicate between front- and back-end. An authentication system (login form, logout) is not part of the task. The app should contain several pages, which are described in next sections. You are free to design an appropriate database schema.

After you have completed the task, please send us a zip file with your source code, a SQL dump and a README file with instructions to run the project.  Afterwards you have to give a short presentation (~15 min) about your implementation.

Good luck!

## Pages

### Page: Index – List of users

The index page should contain a list of users with following columns:

* Customer number
* User name
* First name
* Last name
* Last login (date time)
* Option to go to edit form
* Option to delete the user

There should also be a search form fo find users by a certain keyword in fields: customer number, user name, first name, last name and email address.

The columns customer number, user name, first name, last name and last login should be sortable (asc/desc).

Add an option to create a new user.

### Page: Add 

This page should have a form with following elements:

- Customer number (five digest)
- User name (value must be unique in db, 3 - 30 chars, format: A-Za-z0-9)
- First name (2 - 150 chars)
- Last name (2 - 150 chars)
- Email address (valid email address, max. 300 chars)
- Date of birth (format: DD.MM.YYYY)
- Password (8 - 150 chars)
- Repeat Password

After the form has been submitted and is valid, a success message should be displayed.

### Page: Edit

This page should have a form with following elements:

- Customer number (five digest)
- User name (read only)
- First name (2 - 150 chars)
- Last name (2 - 150 chars)
- Email address (valid address)
- Date of birth (format: DD.MM.YYYY)
- Last login (read only, format: DD.MM.YYYY HH:MM:SS)
- Password (8 - 150 chars, field is optional)
- Repeat Password

After the form has been submitted and is valid, a success message should be displayed.

### Page: Delete
After a user has been deleted a success message should be displayed.


