# error-types

Brief examples of types of errors in JavaScript.

## SyntaxError

This error happens at the **compile phase**, so it prevents
any part of the program from running.

The only way that a SyntaxError can occur in an already-running program is
if it uses a form of eval, like `eval()` or `new Function()`, or uses
`RegExp` and gives it an invalid regular expression.

## ReferenceError

An invalid reference to a variable that doesn't exist. This can sneak in
due to confusion about scope in JavaScript.

## TypeError

This often occurs when a user tries to call functions on
an object that don't exist on that object.

You can also get a TypeError if you try to assign properties to an object
frozen with `Object.freeze`. TypeErrors are the most common error to get by
misusing an API, like calling `fs.readFileSync()` in node.js.
