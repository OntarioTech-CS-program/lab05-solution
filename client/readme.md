# Client (Lab 4 - Basic HTML Website)

Using built-in methods, your website will communicate with your API to retrieve data.

## Prerequisites

You'll need to copy over the files:

- `index.html`
  - remove the `<tr>` in your `<tbody>`, this is duplicate data since it exists in your `students.json` file
- `css/styles.css`
- `js/main.js`

## Modifications

>It's recommeded to do this after modifying your lab 3 code.

The type of data you'll use for this lab is your JSON data (`students.json`), you'll need to modify your functions accordingly.

On page load, this website should:

1. automatically make an HTTP request your API
2. retrieve the data
3. append it to the table `#chart`

If there is an error requesting to your API then your website should append a `<tr>` to the table that contains a message
about an error occurring e.g., "Oops, there was an error"

>The default endpoint for your API should be:  
>`http://localhost:8080/lab3-1.0/students/json`
