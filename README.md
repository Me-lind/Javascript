
# JavaScript Assignments
This repository contains JavaScript-based solutions for multiple assignments, including palindromes, anagrams, JSON server integration, and various object manipulations.
Below is a summary of each assignment.

## Assignment 1: Palindromes and Anagrams
### Description:
This assignment focuses on solving problems related to string manipulation. The key tasks include:

Checking if a string is a palindrome (case-sensitive and case-insensitive versions).
Finding the longest palindromic substring in a string.
Checking if two strings are anagrams of each other.
Removing duplicates from a string.

### Files:
1. palindromes.js: Contains functions for checking palindromes.  
2. longestPalindromes.js: Finding the longest palindromic substring.  
3. anagrams.js: Contains the function for checking if two strings are anagrams.  
4. caseInsensitivePalindrome.js: Contains the function for checking case-insensitive palindromes.  
5. countPalindromes.js: Contains the function for counting palindromes in a string.  
6. removeDuplicates.js: Contains the function for removing duplicates from a string.  
7. reversestr.js: Contains the function for reversing a string.  
8. longestPrefix.js: Contains the function for finding the longest common prefix.  

## Assignment 2: Data Types and Variables (Discussion)
### Description:
This assignment is a documentation-based discussion on JavaScript data types, variables, and related concepts. The topics covered include:

Explanation of different data types used in JavaScript (String, Number, Boolean, Array, Object, etc.).
Differences between var, let, and const.
Numeric data types (integers, floating-point, Infinity).
Discussion on string representations, booleans, null, and undefined values.
The structure and significance of objects and arrays.

### Files:
javascript.docx: Contains detailed explanations and examples of various JavaScript data types and variable declarations.

## Assignment 3: JSON Server and Frontend Integration
### Description:
This assignment demonstrates how to serve product data using json-server and how to populate the frontend with the fetched data using JavaScript and DOM manipulation. It simulates a basic web application fetching product data from an online server.

### Files:
1. db.json: The JSON file containing product data to be served by the JSON server.  
2. app.js: The frontend JavaScript file that fetches data from the server and dynamically populates the DOM.  
3. index.html: The HTML file displaying the product data in a user-friendly format.  
4. styles.css: Contains the styles for the html elements.  

### Instructions:
npm install -g json-server.  
Run json-server --watch db.json to start the server.  
Open index.html in the browser to see the populated product list.

![app](https://github.com/user-attachments/assets/a6c2947d-42fb-43c7-b9e2-81eb6fe2662b)

## Assignment4: Arrays, map, filter and reduce functions    
### Description:    
Technical Test – Random Operations on Objects
This technical test consists of 14 questions that involve various operations on JavaScript objects, arrays, and functions. Key tasks include:

Sorting arrays of objects.
Retrieving keys, values, and methods from objects.
Manipulating and transforming objects.
Parsing URLs and checking object properties.

### Files:
qn1 -qn14 : Contains solutions to the 14 technical test questions on objects, arrays and other JavaScript operations.


## Assignment 5: Object Operations
### Description:
This assignment covers array manipulation using higher-order functions like map(), filter(), and reduce() to handle complex data.
### Files:
combineArrays.js
extractProperties.js
filterSort.js
mergeObjects.js

## Assignment 6: Event Management Webpage
### Description:
This assignment involves fetching event data, displaying it on a webpage, and allowing users to filter events by location, date, and price. Users can also sort events and select favorites.

### Files:
db.json
promises.js
style.css
package-lock.json
package.json

## Assignment 7: Cart Management System
### Description:
This assignment extends Assignment 6 by adding a cart management system to the event management app. The key tasks include:  

Fetching product/event data from an API using json-server.  
Populating the event data dynamically on the webpage.  
Implementing a cart management system that allows users to add events to a cart, adjust the quantity, and view the total price.  
### Files:  
app.js: Contains the JavaScript for fetching events, displaying them on the DOM, and managing the cart (add, remove, adjust quantity).  
styles.css: Contains the styling for the event management webpage and cart.  
index.html: The main HTML file where event data is displayed and cart features are available.  
db.json: The database for serving event data through json-server.  
package.json and pnpm-lock.yaml: Generated for managing dependencies for json-server.  

### Cart Management Features:  
Add Products: Fetches event data from the API and stores it in a global array.  
Populate Data on the DOM: Dynamically creates and injects HTML elements for each event.  
Add to Cart: Adds an event to the cart and updates the cart preview and total.  
Delete from Cart: Removes an event from the cart.  
Increase/Reduce Quantity: Allows users to adjust the quantity of items in the cart, updating the total price.  
![ass7](https://github.com/user-attachments/assets/42cb1678-e027-4707-8413-64ef6d2b5f5a)
