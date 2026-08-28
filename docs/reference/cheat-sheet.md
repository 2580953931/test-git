# Personal Git Collaboration Cheat Sheet

## Read State First

```bash
git status
git branch
git log --oneline --decorate --graph --all -n 12
git remote -v
```

## Normal Feature Work

```bash
git switch main
git pull
git switch -c feature/example
git add .
git commit -m "Describe the focused change"
git push -u origin feature/example
```

## Sync With Main

```bash
git fetch origin
git rebase origin/main
```

Use rebase on your own feature branch before it is shared widely.

## Conflict Loop

```bash
git status
# edit conflicted files
git add <file>
git rebase --continue
```

If the rebase is wrong:

```bash
git rebase --abort
```

## Recovery Starters

```bash
git reflog
git restore <file>
git restore --staged <file>
git commit --amend
git revert <commit>
```

## Dangerous Commands

Pause before:

```bash
git reset --hard
git clean -fd
git push --force-with-lease
git rebase -i
```

Ask:

- What will this change?
- Is the commit already shared?
- Can I recover using `reflog`?
- Is there a safer command?

