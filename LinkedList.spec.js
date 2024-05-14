const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
  test("prints empty list", () => {
    expect(new LinkedList().toString()).toEqual("null");
  });

  test("appends a single value", () => {
    expect(new LinkedList().append(0).toString()).toEqual("( 0 ) -> null");
  });

  test("appends multiple values", () => {
    expect(new LinkedList().append(0).append(1).append(2).toString()).toEqual(
      "( 0 ) -> ( 1 ) -> ( 2 ) -> null"
    );
  });

  test("prepends a single value", () => {
    expect(new LinkedList().prepend(5).toString()).toEqual("( 5 ) -> null");
  });

  test("prepends multiple values", () => {
    expect(
      new LinkedList().prepend(5).prepend(4).prepend(3).toString()
    ).toEqual("( 3 ) -> ( 4 ) -> ( 5 ) -> null");
  });

  test("prepends a value", () => {
    expect(new LinkedList().prepend(5).toString()).toEqual("( 5 ) -> null");
  });

  test("calculates size of empty list correctly", () => {
    expect(new LinkedList().size).toEqual(0);
  });

  test("calculates size correctly with single appended value", () => {
    expect(new LinkedList().append(0).size).toEqual(1);
  });

  test("calculates size correctly with multiple append values", () => {
    expect(new LinkedList().append(0).append(1).append(2).append(3).size).toEqual(4);
  });
    
  test("calculates size correctly with a single prepended value", () => {
    expect(new LinkedList().prepend(0).size).toEqual(1);
  });

  test("calculates size correctly with multiple append value", () => {
    expect(new LinkedList().prepend(0).prepend(1).prepend(2).prepend(3).size).toEqual(4);
  });
});
