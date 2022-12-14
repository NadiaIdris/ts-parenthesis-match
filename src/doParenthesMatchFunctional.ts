export const doParenthesesMatch = (stringToCheck: string): "yes" | "no" => {
  const stringArr = stringToCheck.split("");
  const stack: string[] = [];
  
  for (let i = 0; i < stringArr.length; i++) {
    const char = stringArr[i];
    if (charIsOpenBracketOrParenthesis(char)) {
      stack.push(char);
      continue;
    }
    if (charIsCloseBracketOrParenthesis(char)) {
      const charFromStack = stack[stack.length - 1];
      if (isMatch(charFromStack, char)) {
        stack.pop();
        continue;
      }
      return "no";
    }
  }
  if (stackIsEmpty(stack)) return "yes";
  return "no";
};

const stackIsEmpty = (stack: string[]): boolean => {
  return stack.length === 0;
};

const charIsOpenBracketOrParenthesis = (char: string): boolean => {
  return char === "(" || char === "[" || char === "{";
};

const charIsCloseBracketOrParenthesis = (char: string): boolean => {
  return char === ")" || char === "]" || char === "}";
};

const isMatch = (charFromStack: string, char: string): boolean => {
  return (
    (charFromStack === "(" && char === ")") ||
    (charFromStack === "{" && char === "}") ||
    (charFromStack === "[" && char === "]")
  );
};

// Convert string to array. Split on each character using empty string or the spread operator or array.from method.
// Create a stack to keep track of the parenthesis/breackets
// Loop over the stringArr and check
//    if the character is one of the opening parenthesis/brackets,
//        push it to the stack
//        CONTINUE the loop
//    if the char is a one of the closing parenthesis/brackets,
//        check the last item in the stack,
//        if it is a match for the item in the stack,
//            remove the last item from the stack
//            CONTINUE the loop
//        RETURN "no"
//
//    continue the loop <- the char is not a parenthesis/bracket

//  Finshed looping over stringArr.
//    if the stack is empty
//         RETURN "yes"
//    RETURN "no"
