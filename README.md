## Code style guide for this project
It is a set of rules to speed up code the review processes in the project and enforce team members to develop code review skills

- **Variable names**

Variable names should be short yet meaningful. The choice of a variable name should be mnemonic - that is, designed to indicate to the casual 
observer the intent of its use. One-character variable names should be avoided except for temporary "throwaway" variables in `for loops`. Common names for 
temporary variables are i, j, k, m, and n for integers; c, d, and e for characters. Prefer `const` over let

Bad:
```
let d = new Date()
```

Good:
```
const currentDate = new Date()
```

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Working on a feature
- Select appropriate branch purpose from the list: `feature`, `fix`, `test`, or `release`
- Try to give a short but descriptive name for branches
- Everytime you work on a feature, create remote branch that follows the next pattern: `tag/OLDBOY-id_short-description`. For example, `feature/OLDBOY-1_initializing-Nextjs-project`
