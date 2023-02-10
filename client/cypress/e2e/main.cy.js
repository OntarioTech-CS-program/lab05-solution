/**
 * this is the testing file for Cypress, DO NOT TOUCH
 */

describe("Testing the student's HTML page", () => {
  /**
   * need to test how the student's website handles API information
   * - stubbing any request to http://localhost with students.json
   *
   * tests
   * - if there's an error with the API there should be at least one <tr> present in the table
   * - if there is no error, then there should be 6 <tr>s in the table
   * - existing functionality should still work too
   *   - adding a <tr> should still work (there will be 7)
   *   - if one of the fields is empty then there should only be 6 (not a 7th)
   */

  context("testing API calls", () => {});

  context("testing website functionality", () => {});
});
