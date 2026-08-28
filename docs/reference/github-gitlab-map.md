# GitHub And GitLab Collaboration Map

| Concept | GitHub | GitLab |
| --- | --- | --- |
| Review request | Pull Request | Merge Request |
| Main protected branch | Branch protection rules | Protected branches |
| Automated checks | GitHub Actions checks | GitLab CI pipelines |
| Required approval | Required reviewers | Approval rules |
| Merge commit option | Create a merge commit | Merge commit |
| Squash option | Squash and merge | Squash commits |
| Rebase option | Rebase and merge | Fast-forward merge or rebase before merge |
| Issue link | Closes #123 | Closes #123 |

## Practical Rule

Most daily Git work is platform independent:

```text
branch -> commit -> push -> PR/MR -> review -> update -> merge
```

The platform mainly changes where review, approval, CI, and merge policy are configured.

