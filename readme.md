# Lab 5 - HTTP Requests

>Course: CSCI 2020U: Software Systems Development and Integration

[![git](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com)

## Overview

This is meant to get you acquainted with HTTP requests and how to communicate with an API via. a website.

## Lab Work

This lab is a combination of labs 3 & 4, the end goal being communication between your API from lab 3 and website from lab 4.

The folder structure should look like this, you could use shortcuts (or symbolic links if on Unix) so that you don't have to copy files over.

```
lab 5
- lab 3
	- src/
	...
- lab 4
	- src/
	...
```

The page's existing functionality should still remain but whenever the page loads, it should make an HTTP request to your API to populate the table.

### Lab 3 Modifications

You'll need to modify your endpoints from lab 3 and instead of returning a `String` you need to return a `Response` object which should...

1. contain the data from the file
2. have the corresponding `Content-Type` header to the file you're serving
3. have CORS enabled
4. have the status code `200`

This returns a proper HTTP response instead of just a `String` and allows you to set other relevant HTTP headers.

### Lab 4 Modifications

After modifying your lab 3, you'll need to change the javascript of lab 4 to communicate with your API and process the retrieved data. You will only be using the JSON endpoint for simplicity's sake.

>The endpoint for your lab 3 should be:  
>`http://localhost:8080/lab3-1.0/students/json`

You will also need to remove the `<tr>` that is already present in the `<tbody>` element.

On page load, this website should automatically make an HTTP request your API, retrieve the data and append it to the table.
