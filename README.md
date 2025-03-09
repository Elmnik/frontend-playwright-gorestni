# frontend-playwright-gorestni
Frontend Project


Playwright CRUD API and UI Automation with TypeScript

Overview

This project demonstrates a QA Automation solution using Playwright and TypeScript, The solution implements CRUD (Create, Read, Update, Delete) operations via both UI and API using a Page Object Model (POM) structure.

The solution interacts with the JSONPlaceholder API (https://jsonplaceholder.typicode.com), a free REST API for testing and prototyping.

The primary focus is on:

	•	Creating a user (via both API and UI)
	•	Reading the user data (via API)
	•	Updating the user data (via both API and UI)
	•	Deleting the user (via both API and UI)

Technologies

	•	Playwright for UI automation.
	•	TypeScript for type safety and structured code.
	•	Node.js for running the tests and scripts.
	•	JSONPlaceholder API for testing user-related CRUD operations (does not require authentication).

Project Structure

- The project is organized using the Page Object Model (POM) structure, which helps in keeping the code modular, clean, and reusable.

Features

	1.	Create User via API:
	•	Create a new user by sending a POST request to https://jsonplaceholder.typicode.com/users.
 
	2.	Get User via API:
	•	Retrieve user details by sending a GET request to https://jsonplaceholder.typicode.com/users/{id}.
 
	3.	Update User via API:
	•	Update an existing user by sending a PUT request to https://jsonplaceholder.typicode.com/users/{id}.
 
	4.	Delete User via API:
	•	Delete a user by sending a DELETE request to https://jsonplaceholder.typicode.com/users/{id}.
 
	5.	Create, Update, Delete User via UI:
	•	Perform the same operations via UI interactions using Playwright.
