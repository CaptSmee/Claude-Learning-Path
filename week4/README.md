# Week 4 · Tools in depth — the agent's hands

Goal: master the three sources of tools and how to control them.

Builds:
1. Drive built-in tools with a scoped `allowedTools` (e.g. Glob, Grep, Read, Write)
   and log which tools the agent calls.
2. Write a well-designed custom tool (specific description, Zod validation,
   graceful error return instead of throwing).
3. Connect an external MCP server over stdio
   (`@modelcontextprotocol/server-filesystem`) and allow it with `mcp__filesystem__*`.
4. Force a specific tool with `tool_choice` in the Client SDK.
