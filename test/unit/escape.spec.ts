import { escape } from "../../src/main.js";
import { hasType } from "../helpers.js";

describe("escape()", () => {
  it("should escape strings for use within regular expressions", () => {
    const string = "a|-\\{}()[]^$+*?.b";

    expect(new RegExp(`^${escape(string)}$`).test(string)).toBe(true);
    expect(new RegExp(`^${escape(string)}$`, "u").test(string)).toBe(true);
  });

  it("should have a string return type", () => {
    expect(hasType<string>(escape(""))).toBeNull();
  });

  it("should only accept string arguments", () => {
    expect(hasType<Parameters<typeof escape>[0]>("x")).toBeNull();
    // @ts-expect-error numbers should not be accepted
    expect(hasType<Parameters<typeof escape>[0]>(1)).toBeNull();
  });
});
