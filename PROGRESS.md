# Progress · Claude Agents Course

Synced from the learning plan page — tick items there and they save here.

## Week 1 · Foundations & your first Claude call
- [x] Installed `@anthropic-ai/sdk` and confirmed the key is set
- [x] Made a first `messages.create` call and printed the text
- [x] Rewrote it to stream with `.stream().on("text", ...)`
- [x] Held a multi-turn conversation by appending assistant + user messages to the array
- [ ] Can explain, in my own words, what a "content block" is

## Week 2 · Tool use — build the agent loop by hand
- [ ] Defined a tool with name, description, and `input_schema`
- [ ] Detected `stop_reason: "tool_use"` and looped
- [ ] Sent a `tool_result` back with the matching `tool_use_id`
- [ ] Added a second tool and let the model choose between them
- [ ] Can explain why the loop needs to run more than once

## Week 3 · The Agent SDK — let the loop run itself
- [ ] Installed `@anthropic-ai/claude-agent-sdk`
- [ ] Ran a first `query()` and iterated its streamed messages
- [ ] Defined a custom tool with `tool()` + a Zod schema
- [ ] Registered it with `createSdkMcpServer()` and `allowedTools`
- [ ] Let the agent use a built-in tool (`Read`/`Write`/`Bash`)
- [ ] Experimented with `systemPrompt` and `permissionMode`

## Week 4 · Tools in depth — the agent's hands
- [ ] Can name the three sources of tools (built-in, custom, external MCP)
- [ ] Ran a query with scoped built-in tools and logged which ones the agent called
- [ ] Wrote a custom tool with Zod validation and a graceful error return
- [ ] Connected an external MCP server (stdio) and allowed it with `mcp__server__*`
- [ ] Understand the `mcp__server__tool` naming and scoped access with `allowedTools`/`disallowedTools`
- [ ] Forced a specific tool with `tool_choice` in the Client SDK
- [ ] Can explain why a tool's `description` quality decides whether it gets used

## Week 5 · Skills — packaged expertise Claude loads on demand
- [ ] Can explain what `SKILL.md` frontmatter does and why `description` matters
- [ ] Wrote my own minimal skill folder
- [ ] Called a prebuilt Anthropic skill (e.g. `xlsx`) with the two beta headers
- [ ] Enabled the `code_execution` tool alongside the skill
- [ ] Uploaded a custom skill with `client.beta.skills.create()`
- [ ] Loaded a skill from `.claude/skills/` in an Agent SDK `query()`

## Week 6 · Subagents — many specialists, one orchestrator
- [ ] Can name the four benefits of subagents (isolation, parallelism, specialization, tool limits)
- [ ] Defined two subagents via the `agents` option and added `"Agent"` to `allowedTools`
- [ ] Gave one subagent a read-only tool set and confirmed it can't edit
- [ ] Forced a specific subagent by naming it in the prompt
- [ ] Set `maxBudgetUsd` and a depth/concurrency cap
- [ ] Detected a delegation by spotting an `"Agent"` tool_use in the stream

## Week 7 · Capstone — put it all together
- [ ] App uses at least one custom tool I wrote
- [ ] Delegates to two or more subagents with scoped tools
- [ ] Applies a skill to shape the final output
- [ ] Writes a real file and verifies it exists and isn't empty
- [ ] Has `maxTurns`, a budget cap, and try/catch error handling
- [ ] Wrote a short README explaining how it works — using my own skill
