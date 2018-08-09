## Description

This repo contains a series of starters for [GatsbyJS](https://gatsbyjs.org) v2.

The starters are progressively enhanced from the simplest one to the most advanced one.

You can choose between:

- minimal
- equipped
- themed
- website
- blog

## Usage

### Default usage

Use `gatsby new` command.

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-base.git

cd [NEW_DIRECTORY_FOR_YOUR_SITE]

gatsby develop
```

The first command from the code above is equivalent to the command below. It installs the most advanced version of the starter - **blog**.

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-base.git#blog-with-content
```

Notice the `#blog-with-content` flag at the end.

If you want to install other versions, use an appropriate flag at the end of the repo's url.

#### minimal

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-base.git#minimal-with-content
```

#### equipped

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-base.git#equipped-with-content
```

#### themed

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-base.git#themed-with-content
```

#### website

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-base.git#website-with-content
```

### Advanced usage

Fork the [repo](https://github.com/greglobinski/gatsby-starter-kit) and clone it to your localhost.

```
git clone [URL_OF_YOUR_FORKED_REPOSITORY] [NEW_DIRECTORY_FOR_YOUR_SITE]

cd [NEW_DIRECTORY_FOR_YOUR_SITE]
```

Now list branches of the repo.

```
git branch -a
```

You will see a list of branches but only one is tracked locally - `master`.
Let's assume that you want to install the `website` version with starting content. You have to tell git to track the proper branch.

```
git checkout --track origin/website-with-content
```

You should see

```
>>> Switched to a new branch 'website-with-content'
>>> Branch 'website-with-content' set up to track remote branch 'website-with-content' from 'origin'.
```

List the branches again.

```
git branch -a
```

Both branches `master` and `website-with-content` are tracked locally now and `website-with-content` is the current branch.

You are ready to install dependencies and launch the web server.

```
yarn install

gatsby develop
```

If you prefer, use `npm` instead of `yarn`.

You can repeat the procedure with any of the branches.

## Instructions

More instructions soon. To be in touch follow [@greglobinski](https://twitter.com/greglobinski).

## License

MIT License

Copyright (c) 2018 greg lobinski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
