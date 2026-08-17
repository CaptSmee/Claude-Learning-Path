# Week 5 · Skills — packaged expertise Claude loads on demand

Goal: understand and build Skills.

Builds:
- Write a minimal skill folder: `.claude/skills/<name>/SKILL.md` with YAML
  frontmatter (`name`, `description`).
- Call a prebuilt Anthropic skill (e.g. `xlsx`) via the Messages API with the
  `code_execution` tool and the beta headers
  `code-execution-2025-08-25` + `skills-2025-10-02`.
- Load a skill from `.claude/skills/` in an Agent SDK `query()`
  (set `skills: "all"` and include `"project"`/`"user"` in `settingSources`).
