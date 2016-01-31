# [error-types](http://www.macwright.org/2015/02/28/errors.html)

Brief examples of types of errors in JavaScript.

See the [/types](/types) directory for examples of each error type.

## [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)

This error happens at the **compile phase**, so it prevents
any part of the program from running.

The only way that a SyntaxError can occur in an already-running program is
if it uses a form of eval, like `eval()` or `new Function()`, or uses
`RegExp` and gives it an invalid regular expression.

## [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)

An invalid reference to a variable that doesn't exist. This can sneak in
due to confusion about scope in JavaScript.

## [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

This often occurs when a user tries to call functions on
an object that don't exist on that object.

You can also get a TypeError if you try to assign properties to an object
frozen with `Object.freeze`. TypeErrors are the most common error to get by
misusing an API, like calling `fs.readFileSync()` in node.js.

## [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)

Occurs when you create an `Array` with an invalid length, but also occurs
on simple infinitely recursive loops in node.js.

## [URIError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)

Occurs when you try to decode or encode an invalid URI with a built-in function
like decodeURI, encodeURI, decodeURIComponent, or encodeURIComponent.

## [InternalError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)

This is an error triggered by infinite recursion in Firefox only: other browsers don't implement
InternalError and produce a RangeError instead for infinite recursion.

Trigger:

```js
(function a() { return a(); })()
```
