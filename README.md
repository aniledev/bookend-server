# Bookend Server 

Link to front end client: https://bookend.vercel.app/

## About the Bookend Server

This server is built using Node.js/Express with the purpose of powering the API for the Book End Client which allows users to receive book recommendations. 

## Documentation

### Endpoints

#### User Endpoints

- GET PERSONALIZED LIST OF BOOKS
`GET api/user/:userId/books`

- POSTS A NEW BOOK TO THE USERS PERSONALIZED/SAVED LIST
`POST api/user/:userId/books`

- GET ONE INDIVIDUAL BOOK FROM A USERS LISTS
`GET api/user/:userId/books/:bookId`

- DELETE A BOOK FROM PERSONALIZED LIST OF BOOKS
`DELETE api/user/:userId/books/:bookId`

### Status Codes

This API returns the following status codes:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 204         | `NO CONTENT`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |


#### To install locally

- Clone the github repo to your machine.
- Run 'npm install' in git
- Run 'npm start'
