import { doParenthesesMatch } from "../doParenthesMatchFunctional";

test("doParenthesMatch", () => { 
  expect(doParenthesesMatch("({word})")).toBe("yes");
  expect(doParenthesesMatch(")([]")).toBe("no");
  expect(doParenthesesMatch("fdd(dsd(dsdss(1))dsds)ddsd]")).toBe("no")
  expect(doParenthesesMatch("")).toBe("yes")
})