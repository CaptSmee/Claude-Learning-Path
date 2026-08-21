// Week 1 · Multi-turn conversation, with streaming
// Run me:  npm run convo         (needs ANTHROPIC_API_KEY set)
//    or:   npm run convo:env     (loads the key from a local .env file)
//
// Shows two checklist items at once:
//   1. streaming a response token-by-token
//   2. holding a multi-turn conversation by appending assistant + user messages

import Anthropic from "@anthropic-ai/sdk";

if (!process.env.ANTHROPIC_API_KEY) {
  console.error(
    "Missing ANTHROPIC_API_KEY.\n" +
      "Set it in your shell, or copy .env.example to .env and run `npm run convo:env`."
  );
  process.exit(1);
}

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from the environment

// The conversation lives here. The API is stateless, so THIS array is the memory.
// (Anthropic.MessageParam is the type for an entry you send.)
const messages: Anthropic.MessageParam[] = [];

/**
 * Stream one turn to the terminal, then return the fully-assembled assistant
 * message. Stream for the human watching; use the returned message for the
 * model's memory (push its `.content` back into the array).
 */
async function streamTurn(label: string): Promise<Anthropic.Message> {
  process.stdout.write(`\n${label} (assistant): `);

  const stream = client.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    messages,
  });

  // Fires for each text delta as tokens arrive — this is the live output.
  stream.on("text", (delta) => process.stdout.write(delta));

  // Reassembles every delta back into a single Message object,
  // identical in shape to a non-streaming messages.create() response.
  const final = await stream.finalMessage();
  process.stdout.write("\n");
  return final;
}

/** Add a user turn to the conversation. */
function addUser(text: string) {
  console.log(`\nYou (user): ${text}`);
  messages.push({ role: "user", content: text });
}

async function main() {
  // --- Turn 1 ---
  addUser("What's the core idea of an AI agent, in one sentence?");
  const res1 = await streamTurn("Turn 1");
  // Push the WHOLE content array, not just the text — this is what keeps the
  // shape correct and is exactly what Week 2 needs when a block is a tool_use.
  messages.push({ role: "assistant", content: res1.content });

  // --- Turn 2 (the model now has Turn 1 as context) ---
  addUser("Nice. Now give me a concrete everyday example.");
  const res2 = await streamTurn("Turn 2");
  messages.push({ role: "assistant", content: res2.content });

  // --- Turn 3 (a follow-up that only makes sense WITH memory) ---
  addUser("In that example, what makes it an 'agent' and not a single answer?");
  const res3 = await streamTurn("Turn 3");
  messages.push({ role: "assistant", content: res3.content });

  // Inspect the growing array. Note user content is a plain string,
  // while assistant content is always an array of blocks.
  console.log("\n\n===== full messages array (the conversation memory) =====");
  console.log(JSON.stringify(messages, null, 2));
  console.log(`\n(${messages.length} entries — 3 user + 3 assistant)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
