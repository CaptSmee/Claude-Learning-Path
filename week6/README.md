# Week 6 · Subagents — many specialists, one orchestrator

Goal: delegate focused subtasks to isolated agents.

Builds:
- Define two subagents via the `agents` option (each with `description`, `prompt`,
  and a scoped `tools` list). Add `"Agent"` to `allowedTools`.
- Give one subagent read-only tools and confirm it cannot edit.
- Force a specific subagent by naming it in the prompt.
- Set `maxBudgetUsd` and the depth/concurrency caps
  (`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`, `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`).
