/**
 * this function retrieves data from the `<input>` tags on the page,
 * transforms the values into a `<tr>` element and appends the `<tr>` to
 * the `<tbody>` element of the `<table>`
 */
function add_record() {

    /**
     * this is most likely what the students will have in their function,
     * I would be impressed if they use functional programming and array destructuring
     * for this question.
     */
    const name = document.getElementById("name");
    const id = document.getElementById("id");
    const gpa = document.getElementById("gpa");

    /**
     * the function shouldn't add records if one of the values are `""`
     */
    if (name.value === "" || id.value === "" || gpa.value === "") {
        return;
    }

    /**
     * the `wrap()` function is optional and most students aren't going to have it
     */
    const tdname = wrap("td", name.value);
    const tdid = wrap("td", id.value);
    const tdgpa = wrap("td", gpa.value);

    const row = wrap("tr", tdname + tdid + tdgpa);

    /**
     * the students need to append the new row to the tbody element,
     * not the table element
     */
    document.getElementById("chart")
        .getElementsByTagName("tbody")[0]
        .innerHTML += row;

    /**
     * this is the bonus section of the code
     */
    name.value = "";
    id.value = "";
    gpa.value = "";
}

/**
 * an optional function which aids in HTML tag wrapping
 * @param tag the HTML tag
 * @param data something to wrap
 * @returns {string} `<tag>data</tag>`
 */
function wrap(tag, data) {
    return `<${tag}>${data}</${tag}>`;
}
