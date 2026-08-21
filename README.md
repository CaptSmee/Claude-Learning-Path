# Claude Agents Course (TypeScript)

A hands-on companion repo for the 7-week learning plan: building with **tools, skills,
agents & subagents** on the Claude SDK. Each `weekN/` folder is where that week's code lives.

## 1. Prerequisites

- **Node.js 20 LTS or newer** — check with `node --version`.
- An **API key** from the Claude Console (https://console.anthropic.com/), with a few
  dollars of credit. Every tool call is an API call, so agents cost small amounts of real money.

## 2. Install dependencies

From this folder, install once. (These commands fetch the current versions and write them
into `package.json` for you, so nothing is pinned to a stale release.)

```bash
# runtime libraries
npm install @anthropic-ai/sdk @anthropic-ai/claude-agent-sdk zod

# dev tooling (TypeScript + a zero-config TS runner)
npm install -D typescript tsx @types/node
```

## 3. Set your API key

Either export it in your shell:

```bash
# macOS / Linux
export ANTHROPIC_API_KEY="sk-ant-..."

# Windows PowerShell
$env:ANTHROPIC_API_KEY="sk-ant-..."
```

…or copy `.env.example` to `.env`, paste your key, and use the `:env` scripts (which load it):

```bash
cp .env.example .env      # then edit .env
```

`.env` is gitignored — never commit your real key.

## 4. Run Week 1

```bash
npm run week1        # uses ANTHROPIC_API_KEY from your shell
# or
npm run week1:env    # loads the key from .env
```

You should see a short explanation of agents, then a streamed "hello". That's your
first Claude call — done two ways (buffered and streaming).

## 5. How the weeks work

Each `weekN/` folder has a short `README.md` describing what to build that week. Follow
the interactive plan (the HTML file) alongside this repo: read the concept, then write the
code here. Add new scripts inside the matching folder and wire up an npm script if you like.

| Week | Focus | Folder |
|------|-------|--------|
| 1 | Foundations & first call (Client SDK) | `week1/` (ready to run) |
| 2 | Tool use — the agent loop by hand | `week2/` |
| 3 | The Agent SDK — the loop runs itself | `week3/` |
| 4 | Tools in depth (built-in, custom, MCP) | `week4/` |
| 5 | Skills | `week5/` |
| 6 | Subagents | `week6/` |
| 7 | Capstone — put it all together | `week7/` |

Track your progress in `PROGRESS.md` — but you don't edit it by hand. Open `learning-plan.html` (in the repo root) with Chrome or Edge, click **Link PROGRESS.md**, and pick the file once. Every checkbox you tick on the plan page then saves straight into `PROGRESS.md` and is read back when you reopen the page. Commit `PROGRESS.md` to keep your progress in git.

## 6. Put it on GitHub

This folder is the repo root — run git here, not in the parent folder. It already ships
with a `.gitignore` (excluding `node_modules/`, `dist/`, and `.env`), so your API key never
enters git history.

### Initialize and make the first commit

```bash
git init
git add .
git commit -m "Initial scaffold"
```

Run `git status` afterward to confirm you see the week folders and config files — but
**not** `.env` or `node_modules/`.

### Push it — Option A: GitHub CLI (fewest steps)

The `gh` tool creates the remote repo and pushes in a single command. Install it if needed
(`winget install GitHub.CLI` on Windows, `brew install gh` on macOS), sign in once, then run:

```bash
gh auth login
gh repo create claude-agents-course --private --source=. --remote=origin --push
```

Drop `--private` for a public repo. That command creates the GitHub repo, adds it as
`origin`, and pushes your first commit.

### Push it — Option B: the github.com website

1. Create a new **empty** repository on GitHub — do **not** let it add a README or
   .gitignore (that avoids a merge conflict on your first push).
2. Connect it and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/claude-agents-course.git
git branch -M main
git push -u origin main
```

> The push step needs network access to GitHub, so run it in your own terminal.

## A note on model names

The scripts use `claude-opus-4-8`. Model identifiers change over time — if a call ever
rejects the model name, check the current list at
https://docs.claude.com/en/docs/about-claude/models and update it.
