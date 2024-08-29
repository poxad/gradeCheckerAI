# [gradeCheckerAI]) - Automated Homework Grading with AI

This is an open-source version of gradeChecker AI, a SaaS product that automates the grading of students' homework using advanced AI technologies. This project is a simplified version designed to demonstrate the core functionality without additional features like user authentication or payment systems.

[![Room GPT](./public/og-image.png)](https://proheadshot.pics)

## How it works

gradeChecker AI utilizes Google's LLM Gemini AI to automate the grading of homework assignments. Users can upload a student's homework along with the teacher's solution, and the system uses AI to compare and grade the assignments. The ML model is hosted on Replicate and image storage is managed through Bytescale.

## Running Locally

### Cloning the repository the local machine.

```bash
git clone https://github.com/poxad/gradeCheckerAI
```

### Storing the API keys in .env

Create a file in root directory of project with env. And store your API key in it, as shown in the .example.env file.

If you'd also like to do rate limiting, create an account on UpStash, create a Redis database, and populate the two environment variables in `.env` as well. If you don't want to do rate limiting, you don't need to make any changes.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## License

This repo is MIT licensed.
