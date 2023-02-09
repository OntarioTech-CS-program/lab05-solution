# API (Lab 3 - REST API Building 2)

This is your API that will serve content to anyone or anything that accesses your API endpoint.

## Prerequisites

You'll need to copy over:

- `StudentResource.java`

The data files are given to you for this lab.

## Modifications

You'll need to modify your endpoints from lab 3.  
Instead of returning a `String`, you need to return a `Response` object which should...

1. contain the data from the file (e.g., `students.json`)
2. contain the headers:
   1. have the corresponding `Content-Type` header to the file you're serving
   2. have CORS enabled `"Access-Control-Allow-Origin"`, you will have to set the proper origin (e.g., `http://localhost:8448/`)
3. have the status code `200`

This returns a proper HTTP response instead of just a `String` and allows you to set other relevant HTTP headers.
