![Readme-banner](./static/img/docs-banner-tw.png)
<h1>Official Komiser Documentation</h1>
<p>
Repository for the Tailwarden Organization Public Documentation. It is the official Tailwarden site for publishing latest news, blog posts, and documentation from our open source community.
</p>

</div>

## How To Run Tests

In order to make sure your changes have not broken anything, you can run the following commands before pushing your changes to gitHub.

```sh
npm install
npm test
```

### How to Run Locally

1. Clone this repository: `git clone "https://github.com/tailwarden/docs.git"`
2. Run the commands :
    1. `npm install`
    2. `npm run docusaurus:build`
    3. `npm run docusaurus:serve`
3. The site will be running locally on `http://localhost:3000`

### How To Contribute To the Documentation

1. Fork this repository
2. Create your documentation branch: `git checkout -b branch-name`
3. Make changes to the documentation in markdown
4. Add changes to the staging area `git add .`
5. Commit your changes using the command `git commit -m 'commit message'`
6. Push your changes to gitHub `git push origin branch-name`
7. Create new Pull Request


## History

### v1.0.0 (Aug, 2022)