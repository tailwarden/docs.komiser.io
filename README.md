![Readme-banner](./static/img/docs-banner-tw.png#gh-dark-mode-only)
![Readme-banner](./static/img/docs-banner-tw-light.png#gh-light-mode-only)

<h1>Official Komiser Documentation</h1>
<p>
This is the repository for the Tailwarden Organization Public Documentation. It is the official Tailwarden site for publishing latest news, blog posts, and documentation from our open source community.
</p>

</div>

### How to Run Locally

1. Clone this repository: `git clone "https://github.com/tailwarden/docs.komiser.io.git"`
2. Run the commands :
   1. `npm install`
   2. `npm run build`
   3. `npm run start`
3. The site will be running locally on `http://localhost:3000`

### How To Contribute To the Documentation

1. Fork this repository
2. Create your documentation branch: `git checkout -b branch-name`
3. Check the version you want to contribute to in the version_docs folder.
4. Make changes to the particular version documentation in markdown
5. Add changes to the staging area `git add .`
6. Commit your changes using the command `git commit -m 'commit message'`
7. Push your changes to gitHub `git push origin branch-name`
8. Create new Pull Request

### How to Publish a new version For Maintainers

1. Add your changes to the docs folder.
1. Run the commands :
   1. `npm run publish-version`
1. Commit your changes and push to github.

## History

### v1.0.0 (Aug, 2023)
