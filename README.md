![Readme-banner](./static/img/docs-banner-tw.png#gh-dark-mode-only)
![Readme-banner](./static/img/docs-banner-tw-light.png#gh-light-mode-only)

<h1>Official Komiser Documentation</h1>
<p>
This is the repository for the Tailwarden Organization Public Documentation. It is the official Tailwarden site for publishing latest news, blog posts, and documentation from our open source community.
</p>

</div>

## How to Run Locally

Follow these steps to run the project locally on your machine:

1. **Clone this repository**: Open your terminal and use the following command to clone the repository to your local machine:

   ```
   git clone "https://github.com/tailwarden/docs.komiser.io.git"
   ```

2. **Install dependencies and build**: Run the following commands one after another to install the project dependencies and build the application:

   ```
   npm install
   npm run build
   ```

3. **Start the local server**: Finally, start the local development server with the following command:

   ```
   npm run start
   ```

4. **Access the site locally**: Once the server starts, you can access the website locally in your web browser at `http://localhost:3000`.

## How to Contribute to the Documentation

We welcome contributions to improve our documentation. Follow these steps to make a contribution:

1. **Fork this repository**: Click the "Fork" button at the top-right of this page to create a fork of the repository on your GitHub account.

2. **Create a documentation branch**: Switch to a new branch to work on your documentation changes:

   ```
   git checkout -b branch-name
   ```

3. **Choose the version**: Locate the version you want to contribute to in the `version_docs` folder.

4. **Make changes to the documentation**: Edit the documentation in Markdown format for the particular version.

5. **Add changes to the staging area**: Add your changes to the staging area in preparation for commit:

   ```
   git add .
   ```

6. **Commit your changes**: Commit your changes with a meaningful commit message describing the updates made:

   ```
   git commit -m 'Your commit message here'
   ```

7. **Push your changes to GitHub**: Push the changes to your GitHub repository:

   ```
   git push origin branch-name
   ```

8. **Create a new Pull Request**: Go to your GitHub repository, switch to the new branch, and click the "New Pull Request" button. Submit the Pull Request to the main repository for review and merging.

Thank you for contributing to our documentation! Your efforts help make our project better for everyone.
