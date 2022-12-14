export class ParenthesesMatcher {
  private text: string;
  private stack: string[] = [];
  constructor(text: string) {
    this.text = text;
  }
  public doParenthesesMatch = (): "yes" | "no" => {
    const textArr = this.text.split("");
    for (let i = 0; i < textArr.length; i++) {
      const char = textArr[i];
      if (this.charIsOpenBracketOrParenthesis(char)) {
        this.stack.push(char);
        continue;
      }
      if (this.charIsCloseBracketOrParenthesis(char)) {
        const charFromStack = this.stack[this.stack.length - 1];
        if (this.isMatch(charFromStack, char)) {
          this.stack.pop();
          continue;
        }
        return "no";
      }
    }
    if (this.stackIsEmpty(this.stack)) return "yes";
    return "no";
  };

  stackIsEmpty = (stack: string[]): boolean => {
    return stack.length === 0;
  };

  charIsOpenBracketOrParenthesis = (char: string): boolean => {
    return char === "(" || char === "[" || char === "{";
  };

  charIsCloseBracketOrParenthesis = (char: string): boolean => {
    return char === ")" || char === "]" || char === "}";
  };

  isMatch = (charFromStack: string, char: string): boolean => {
    return (
      (charFromStack === "(" && char === ")") ||
      (charFromStack === "{" && char === "}") ||
      (charFromStack === "[" && char === "]")
    );
  };
}
