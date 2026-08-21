# Project Context & Runbook — Claude SDK Learning Plan

> Durable handoff doc. Any fresh Claude (Cowork) session can read this and resume the
> project **without** needing to see the original conversation. Keep it in the repo and
> update it when the workflow changes.
>
> _Last updated: 2026-08-21_

## What this project is

A 7-week TypeScript learning plan for building with **tools, skills, agents & subagents
on the Claude SDK**. The deliverable is a single, self-contained interactive HTML page.

- **Canonical file:** `learning-plan.html` (repo root). Fully self-contained — its own
  styles/scripts inline, an embedded base64 zip of the starter repo, and a built-in
  "Link PROGRESS.md" two-way sync feature. This file is the source of truth.
- **Page title:** `Learning Plan · Skills, Agents & Subagents with the Claude SDK (TypeScript)`

## The published artifact (how the plan is shared / kept live)

- **URL (stable — bookmark this):**
  `https://claude.ai/code/artifact/1d9ef475-e061-4ef9-ba8a-caa6914c4ef0`
- Published with the **web Artifact tool** (claude.ai/code/artifacts). It lives on
  Anthropic's servers, is private until shared, and **survives desktop-app updates** —
  an app update can break *tools mid-session*, but it does not delete the artifact,
  this conversation, or your account data.
- **To update it in place (keep the same URL):** republish `learning-plan.html` and
  pass the artifact URL as the `url` parameter to the Artifact tool. Any session can do
  this — it does **not** have to be the session that first published it. Without the
  `url` param, a new/separate artifact is created instead.
- Metadata to reuse on republish: favicon `📘`; description = "7-week TypeScript
  learning plan for building with tools, skills, agents & subagents on the Claude SDK,
  with in-page PROGRESS.md sync."

### Superseded / do not rely on
An earlier **desktop-local** artifact with id `claude-sdk-learning-plan` exists only in
the desktop app's local store. It never synced to the server and is **not reachable**
from cloud sessions (the desktop artifact tools are no longer exposed after the app
update to 1.34493.1). It is superseded by the URL above. Ignore it.

## Working rules (agreed with the owner)

1. **Only `learning-plan.html` gets edited.** It is the one and only file this workflow
   modifies.
2. **The live repo folder is the owner's read-only test workspace.** The real
   `week1/…week7/`, `package.json`, `PROGRESS.md`, `README.md`, etc. are the owner's own
   work for testing the plan. **Never** read from them to sync, and never write to them.
3. **The embedded scaffold zip is refined independently** of the live files (see below).
   Its source of truth is the zip *inside* the HTML, not the repo's real folders.

## The embedded scaffold ("starter repo" download)

Inside `learning-plan.html`, in the **`#setup`** section, there is a single
`<a href="data:application/zip;base64,…">` link — the "skip the typing" starter-repo
download. It is a **separate copy** from the live repo files.

- The zip is ~12 KB, **23 entries**, rooted at `claude-agents-course/`, containing all
  seven week folders + READMEs, `week1/hello.ts`, `week1/solution/conversation.ts`,
  `package.json`, `tsconfig.json`, `.gitignore`, `.env.example`, `PROGRESS.md`.

**Round-trip procedure to edit the embedded zip:**
1. Re-stage `learning-plan.html` from the device.
2. Extract the base64 from the `data:application/zip;base64,…` href.
3. Base64-decode → unzip to a temp dir.
4. Add/edit/remove scaffold files (keep the `claude-agents-course/` root).
5. Re-zip → base64-encode → swap the string back into that one `href`.
6. Commit the HTML back to the repo, then republish the artifact (same `url`).

## Update workflow (repo ↔ artifact in lockstep)

1. Re-stage `learning-plan.html` from the device (gets the latest; guards against
   clobbering owner edits via `expectedMtimeMs`).
2. Copy to a writable temp dir (the staged uploads path is read-only) and edit there.
3. Verify the change (e.g. `grep` for the old/new strings, sanity-check byte delta).
4. `SendUserFile` the edited file → get its `file_uuid`.
5. Republish the artifact with the Artifact tool, passing the same `url`.
6. `device_commit_files` the `file_uuid` back to
   `C:\Development\Claude_Projects\claude-agents-course\learning-plan.html`
   (use `expectedMtimeMs` from the stage step so an owner edit is never overwritten).

## Environment limitations to know

- **Cloud workspace is ephemeral.** Scratch files (e.g. under `/tmp`) do not persist
  between sessions. Anything that must last goes to the repo (device) or the artifact
  (server).
- **No hard-delete over the device bridge.** `rm` is blocked and the commit tool can't
  delete. To "remove" a repo file, move it into `_to_delete/` and tell the owner to
  empty that folder. (`_to_delete/` already exists in the repo for this purpose.)
- **Desktop artifact tools are not exposed** in current sessions (post 1.34493.1). Use
  the web Artifact tool + the artifact URL above.

## Durability checklist (so nothing is lost to another app update)

- [x] Artifact published to the server with a stable URL (recorded above).
- [x] `learning-plan.html` committed & pushed to GitHub
      (`origin` → `CaptSmee/Claude-Learning-Path`, `main`) — owner handles git.
- [x] This runbook committed to the repo.
- Conversation itself is saved server-side (openable from claude.ai in a browser even
  if the desktop app misbehaves).

## Change log

- **2026-08-21** — Renamed the setup heading `Week 0 · One-time setup` → `One-time
  setup`, so week numbering starts at 1 (learning weeks stay Week 1–7; "seven-week"
  branding and the embedded scaffold left unchanged).
- **(prior)** — Checklist progress now saves directly into `PROGRESS.md` via a "Link
  PROGRESS.md" button on the page; the standalone `progress.html` tracker was retired.
