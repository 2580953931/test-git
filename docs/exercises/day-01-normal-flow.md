# 第 1 天 - 正常功能分支流程

## 核心概念

今天练的是最常见的团队协作路径：

`main` -> feature branch -> commit -> push -> pull request -> merge.

每次操作前，先确认下面这些状态：

- 当前在哪个分支
- 工作区是否干净
- 暂存区里有没有内容
- 本地是否有还没有推送到远端的提交
- 你准备推送到哪个远端分支

## 场景

你刚加入一个团队，拿到一个很小的需求：

> 修改页面默认文案，让状态文字欢迎一位新队友。

## 本次练习命令

- `git status`
- `git branch`
- `git switch -c`
- `git add`
- `git commit`
- `git log --oneline --decorate --graph`
- `git remote -v`
- `git push -u origin <branch>`

## 任务

1. 确认你当前在 `main` 分支。
2. 创建一个名为 `feature/welcome-copy` 的功能分支。
3. 修改 `src/index.html` 里的默认状态文字。
4. 用英文提交信息创建一个 commit。
5. 查看提交图，确认提交在正确的分支上。
6. 把这个分支推送到 GitHub。
7. 在 GitHub 上打开一个 pull request。
8. 把本次练习记录到 `docs/logs/day-01.md`。

## 停下来解释

推送之前，先回答：

- 我现在在哪个分支？
- 哪个 commit 会被推送？
- 远端会创建哪个分支？
- 这条命令会不会改写本地历史？

## 完成标准

- 本地存在 `feature/welcome-copy` 分支。
- 这个分支已经推送到 GitHub。
- GitHub 上已经创建 pull request。
- `docs/logs/day-01.md` 里记录了本次练习过程。
