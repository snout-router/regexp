import * as index from "../../src/index.js";
import { escape } from "../../src/main.js";

describe("module index", () => {
  it("should provide access to escape()", () => {
    expect(index.escape).toBe(escape);
  });
});
