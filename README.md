# Parenthesis matching in TypeScript

## Install project dependencies

- In the project root folder run: `npm install` (or `npm i`).

## Run tests

- In the project root folder run: `npx jest --watchAll`

---

## Exercise 1: Parenthesis matching (function)

Write a function called `doParenthesesMatch(stringToCheck): "yes" | "no"` that takes a string of text and returns "yes" if the parentheses are balanced and "no" otherwise.

## Example

```ts
doParenthesesMatch("({word})") // returns "yes"
doParenthesesMatch(")([]") // returns "no"
doParenthesesMatch("fdd(dsd(dsdss(1))dsds)ddsd]") // returns "no"
doParenthesesMatch("") // returns "yes"
```

## Exercise 2: Parenthesis matching (class)

Write a class called `ParenthesesMatcher` that has a method called `doParenthesesMatch(stringToCheck): "yes" | "no"` that takes a string of text and returns "yes" if the parentheses are balanced and "no" otherwise.

## Example 2

```ts
const matcher = new ParenthesesMatcher("({word})")
matcher.doParenthesesMatch() // returns "yes"
```
```ts
const matcher = new ParenthesesMatcher(")([]")
matcher.doParenthesesMatch() // returns "no"
```
```ts
const matcher = new ParenthesesMatcher("fdd(dsd(dsdss(1))dsds)ddsd]")
matcher.doParenthesesMatch() // returns "no"
```
```ts
const matcher = new ParenthesesMatcher("")
matcher.doParenthesesMatch() // returns "yes"
```

