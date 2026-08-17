# Week 3 · The Agent SDK — let the loop run itself

Goal: switch to `@anthropic-ai/claude-agent-sdk`. The whole loop becomes one `query()`.

Build a script that:
- runs `query({ prompt, options })` and iterates the streamed messages;
- defines a custom tool with `tool()` + a Zod schema;
- registers it with `createSdkMcpServer()` and lists it in `allowedTools`;
- lets the agent also use a built-in tool (`Read` / `Write` / `Bash`).
