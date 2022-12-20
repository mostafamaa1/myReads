# MyReads Project

This project allows user to change status of books. Each book has a control that lets you select the shelf for that book. 
When you select a different shelf, the book moves there.

The main page also has a link to /search, a search
page that allows you to find books to add to your library.
The search page has a text input that may be used to 
find books, along with a control that lets you add the book
to your library.

## Categories
The Project consists of three categories(shelves) that the user can control within. 
- Currently Reading
- Want to Read
- Read

## Components
1. BookShelf 
2. Book
3. BookList
4. Search

## Getting Started

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Starter Template
This Project Starter Template was provided by [Udacity](https://udacity.com/) as a part of React cross-skilling NanoDegree.

### <>Created By Mostafa Ahmed</>


