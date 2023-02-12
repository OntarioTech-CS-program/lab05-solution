# Client (Lab 4 - Basic HTML Website)

Using built-in methods, your website will communicate with your API to retrieve data.

## Prerequisites

You'll need to copy over the files:

- `index.html`
  - remove the `<tr>` in your `<tbody>`, this is duplicate data since it exists in your `students.json` file
- `css/styles.css`
- `js/main.js`

## Modifications

>It's recommended to do this after modifying your lab 3 code.

The type of data you'll use for this lab is your JSON data (`students.json`), you'll need to modify your javascript accordingly.

On page load, this website should:

1. automatically make an HTTP request your API
2. retrieve the data
3. append it to the table `#chart`

>The default endpoint for your API should be:  
>`http://localhost:8080/lab5-1.0/api/students/json`

You can change the function which is bound to your `button#submit`, as long as the original functionality of the website remains.  
The autograding tests to see if the data appears, not the steps it took to appear.

>This is optional, but it is best practice to separate the logic of data retrieval and data rendering from the `add_record()` function into smaller functions.  
>This will make your code scalable and extensible.
