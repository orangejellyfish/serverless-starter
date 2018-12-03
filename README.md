# serverless-starter

An opinionated starter kit by [orangejellyfish][oj] for
[Serverless framework][sls] apps running in [AWS][aws]. Built to be future-proof.
Inspired by and adapted from the excellent [serverless-babel-starter][sbs]
project by [Postlight][pl].

## Features

- Lambdas run Node 8 by default making your functions faster and giving you the
  ability to use more recent ECMAScript features including async/await.

- Lambda code is bundled with Webpack 4 via the [serverless-webpack][sw] plugin,
  reducing the amount of code deployed to AWS.

- Lambda code is compiled with [Babel 7][b7] and [babel-preset-env][bpe],
  meaning you can use even more cutting-edge ECMAScript features if you need to,
  without unnecessarily compiling code that would be supported by Node 8.

- Lambda config is located alongside the function code and referenced from the
  top-level Serverless configuration file, offering greater separation of
  concerns and keeping the configuration file readable.

- A "run warm" utility  which can be used as a higher order function by any
  Lambda function handler to keep the container alive, avoiding the
  [cold start][cs] performance problem.

- [Jest][jest] support for unit testing, gathering coverage information by
  default.

- ESLint, Husky and lint-staged config for [greater code consistency][cc].

- Local AWS Lambda and API Gateway emulation via the [serverless-offline][so]
  plugin.

## Usage

You can use the Serverless CLI to scaffold a new project from this starter kit:

```sh
serverless create --template-url https://github.com/orangejellyfish/serverless-starter --path your/local/path
```

## Known issues

> WARNING: More than one matching handlers found for 'src/functions/hello/index'.
> Using 'src/functions/hello/index.js'.

This warning is logged by [serverless-webpack][sw] when bundling the Lambda
function code. It happens because the plugin detects another file in the same
directory with a similar name. The other file is the unit test file. The warning
can be safely ignored. See [this issue][swi] for more information.

[oj]: https://www.orangejellyfish.com/
[sls]: https://serverless.com/framework/
[aws]: https://aws.amazon.com/
[sbs]: https://github.com/postlight/serverless-babel-starter
[pl]: https://github.com/postlight
[sw]: https://github.com/serverless-heaven/serverless-webpack
[b7]: https://babeljs.io/docs/en/next/index.html
[bpe]: https://babeljs.io/docs/en/next/babel-preset-env.html
[cs]: https://serverless.com/blog/keep-your-lambdas-warm/
[jest]: https://jestjs.io/
[cc]: https://www.orangejellyfish.com/blog/code-consistency-with-eslint-and-husky/
[so]: https://github.com/dherault/serverless-offline
[swi]: https://github.com/serverless-heaven/serverless-webpack/issues/405
