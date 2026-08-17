# Progress tracker

A durable checklist mirroring the 7-week plan. Tick items as you finish them
(this file is yours — edit freely).

## Week 0 · Setup
- [ ] Node 20+ installed
- [ ] Dependencies installed (`npm install ...`)
- [ ] `ANTHROPIC_API_KEY` set (shell or `.env`)
- [ ] `npm run week1` prints a response

## Week 1 · Foundations & first call
- [ ] Made a first `messages.create` call and printed the text
- [ ] Streamed a response with `.stream().on("text", ...)`
- [ ] Held a multi-turn conversation
- [ ] Can explain what a "content block" is

## Week 2 · Tool use — build the loop by hand
- [ ] Defined a tool with `input_schema`
- [ ] Detected `stop_reason: "tool_use"` and looped
- [ ] Sent a `tool_result` with the matching `tool_use_id`
- [ ] Added a second tool and let the model choose

## Week 3 · The Agent SDK
- [ ] Ran a first `query()` and iterated streamed messages
- [ ] Defined a custom tool with `tool()` + Zod
- [ ] Registered it with `createSdkMcpServer()` + `allowedTools`
- [ ] Let the agent use a built-in tool

## Week 4 · Tools in depth
- [ ] Can name the three sources of tools
- [ ] Logged which built-in tools an agent called
- [ ] Wrote a custom tool with validation + graceful errors
- [ ] Connected an external MCP server (stdio) with `mcp__server__*`
- [ ] Forced a tool with `tool_choice`

## Week 5 · Skills
- [ ] Wrote a minimal `SKILL.md`
- [ ] Called a prebuilt Anthropic skill via the API + beta headers
- [ ] Uploaded a custom skill
- [ ] Loaded a skill from `.claude/skills/` in the Agent SDK

## Week 6 · Subagents
- [ ] Defined two subagents via the `agents` option (+ `"Agent"` in `allowedTools`)
- [ ] Gave one subagent read-only tools
- [ ] Forced a specific subagent by name
- [ ] Set `maxBudgetUsd` and a depth/concurrency cap

## Week 7 · Capstone
- [ ] Uses a custom tool I wrote
- [ ] Delegates to two+ subagents with scoped tools
- [ ] Applies a skill to the output
- [ ] Writes and verifies a real file
- [ ] Has `maxTurns`, a budget cap, and error handling
