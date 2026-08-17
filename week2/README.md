# Week 2 · Tool use — build the agent loop by hand

Goal: write the agent loop yourself with the **Client SDK** (`@anthropic-ai/sdk`).

Build `tool-loop.ts` that:
- defines a tool (name, description, `input_schema`);
- calls `messages.create({ tools, messages })`;
- detects `stop_reason === "tool_use"`, runs the tool, and pushes a `tool_result`
  (matching `tool_use_id`) back into the messages;
- loops until the model stops asking for tools.

Then add a second tool and let the model choose between them.
