# TypeScript Crash Example
Sample code to reproduce a crash in TypeScript 2.9.2

# Steps to reproduce
- clone the repository
- install dependencies with `npm install`
- build the repo with `npm run build` and see the stack trace

```
npm run build

typescript-crash-example/node_modules/typescript/lib/tsc.js:63860
                throw e;
                ^

TypeError: Cannot read property 'flags' of undefined
    at getBaseTypes (typescript-crash-example/node_modules/typescript/lib/tsc.js:25683:38)
    at isConstructorAccessible (typescript-crash-example/node_modules/typescript/lib/tsc.js:36070:37)
    at resolveNewExpression (typescript-crash-example/node_modules/typescript/lib/tsc.js:36024:22)
    at resolveSignature (typescript-crash-example/node_modules/typescript/lib/tsc.js:36180:28)
    at getResolvedSignature (typescript-crash-example/node_modules/typescript/lib/tsc.js:36209:26)
    at checkCallExpression (typescript-crash-example/node_modules/typescript/lib/tsc.js:36282:29)
    at checkExpressionWorker (typescript-crash-example/node_modules/typescript/lib/tsc.js:37687:28)
    at checkExpression (typescript-crash-example/node_modules/typescript/lib/tsc.js:37629:42)
    at checkExpressionStatement (typescript-crash-example/node_modules/typescript/lib/tsc.js:39545:13)
    at checkSourceElement (typescript-crash-example/node_modules/typescript/lib/tsc.js:41180:28)
```

# Expected behavior
Instead of crashing with a stack trace, the compiler should emit an error along the lines of:
```
src/CrashTrigger.ts:8:5 - error TS2674: Constructor of class 'Abstract' is protected and only accessible within the class declaration.

8     new Concrete();
      ~~~~~~~~~~~~~~
```