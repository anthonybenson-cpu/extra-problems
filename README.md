# JavaScript Function Test Suite

This project includes a test suite using Node.js and Mocha to validate your implementations of several utility functions. Your task is to implement each function in `main.js` so that all tests pass.

## Setup Instructions

1. Make sure you have **Node.js** installed on your machine.
2. Clone or download this repository.
3. Install dependencies (if `package.json` includes Mocha):
   ```bash
   npm install
   ```
4. Run the tests:
   ```bash
   npm test
   ```

## Functions to Implement

All functions must be implemented in `main.js`.

---

### `isEvenlyDivisible(a, b)`
Returns `true` if `a` is evenly divisible by `b`, otherwise returns `false`.

---

### `halfSquare(num)`
Returns half of the square of the number.  
Formula: `(num ** 2) / 2`

---

### `exclaim(str)`
- If the string **does not** end in an exclamation mark, append one.
- If it ends in **one**, leave it unchanged.
- If it ends in **multiple**, reduce to a single `!`.

---

### `isLong(str)`
Returns `true` if the string length is **15 or more** characters.

---

### `containsDigit(str)`
Returns `true` if the string contains **at least one numeric digit**.

---

### `containsLowerCase(str)`
Returns `true` if the string contains **at least one lowercase letter**.

---

### `containsUpperCase(str)`
Returns `true` if the string contains **at least one uppercase letter**.

---

### `containsNonAlphanumeric(str)`
Returns `true` if the string contains **at least one non-alphanumeric** character  
(e.g. symbols, punctuation, whitespace).

---

### `containsSpace(str)`
Returns `true` if the string contains **a space character**.

---

### `countWords(str)`
Returns the number of **space-separated words** in the string.

---

### `digits(num)`
Returns an array of numeric digits in the number:
- Ignores negative signs
- Ignores decimal points

Examples:
- `digits(123.45)` → `[1, 2, 3, 4, 5]`
- `digits(-20)` → `[2, 0]`

---

### `truncate(str)`
If the string has **15 or more** characters:
- Return the **first 8 characters** followed by `'...'`

Otherwise, return the string unchanged.

---

### `isValidPassword(str)`
A valid password:
- Has **at least one lowercase letter**
- Has **at least one uppercase letter**
- Has **at least one digit**
- Has **at least one non-alphanumeric character**
- **Does not** contain any spaces

---

### `onlyPunchy(titles)`
Given an array of strings (titles):
- Only keep titles **under 15 characters** (after trimming exclamations)
- Add **exactly one** exclamation mark to the end of each title
- Remove any **extra exclamation marks**

---

## Example File Structure

```
/project-root
  ├── main.js         // implement your functions here
  ├── test.js         // do not modify
  └── package.json    // with mocha if needed
```

## Run Tests

Run the full test suite with:

```bash
npm test
```

All tests must pass to confirm correct implementations.

---

Happy hacking!
