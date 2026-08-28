# Day 01 - Normal Feature Branch Flow

## Concept

Today is about the normal collaboration path:

`main` -> feature branch -> commit -> push -> pull request -> merge.

Before every operation, identify:

- Current branch
- Working tree state
- Staged changes
- Local commits not on remote
- Remote branch you plan to push to

## Scenario

You joined a team and received a small task:

> Update the app copy so the status text welcomes a new teammate.

## Commands To Practice

- `git status`
- `git branch`
- `git switch -c`
- `git add`
- `git commit`
- `git log --oneline --decorate --graph`
- `git remote -v`
- `git push -u origin <branch>`

## Task

1. Confirm you are on `main`.
2. Create a feature branch named `feature/welcome-copy`.
3. Change the default status text in `src/index.html`.
4. Commit with an English message.
5. Inspect the commit graph.
6. Push the branch to GitHub.
7. Open a pull request.
8. Record the session in `docs/logs/day-01.md`.

## Stop And Explain

Before pushing, explain:

- What branch am I on?
- What commit will be pushed?
- What remote branch will be created?
- Does this command change local history?

## Done When

- The feature branch exists locally.
- The branch is pushed to GitHub.
- A pull request exists.
- The log file records what happened.

