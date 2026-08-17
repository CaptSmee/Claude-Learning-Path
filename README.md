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

Track your progress in `PROGRESS.md`.

## A note on model names

The scripts use `claude-opus-4-8`. Model identifiers change over time — if a call ever
rejects the model name, check the current list at
https://docs.claude.com/en/docs/about-claude/models and update it.
