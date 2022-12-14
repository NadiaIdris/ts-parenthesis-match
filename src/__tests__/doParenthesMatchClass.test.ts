import { ParenthesesMatcher } from "../doParenthesMatchClass";

describe("ParenthesesMatcher", () => {
  test("ParenthesesMatcher works", () => {
    const matcher = new ParenthesesMatcher("({word})");
    expect(matcher.doParenthesesMatch()).toBe("yes");
  });
  test("empty text works", () => {
    const matcher = new ParenthesesMatcher("");
    expect(matcher.doParenthesesMatch()).toBe("yes");
  });

  test("non matching works", () => {
    const matcher = new ParenthesesMatcher("fdd(dsd(dsdss(1))dsds)ddsd]");
    expect(matcher.doParenthesesMatch()).toBe("no");
  });

  test("non matching works", () => {
    const matcher = new ParenthesesMatcher(")([]");
    expect(matcher.doParenthesesMatch()).toBe("no");
  });
});
