// Week 1 · Foundations & your first Claude call
// Run me:  npm run week1        (after `npm install` and setting ANTHROPIC_API_KEY)
//    or:   npm run week1:env    (loads the key from a local .env file)

import Anthropic from "@anthropic-ai/sdk";

if (!process.env.ANTHROPIC_API_KEY) {
  console.error(
    "Missing ANTHROPIC_API_KEY.\n" +
      "Set it in your shell, or copy .env.example to .env and run `npm run week1:env`."
  );
  process.exit(1);
}

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from the environment

async function main() {
  // 1) A single, non-streaming call. The response is a list of content blocks.

  // Use the built-in SDK types to strictly typed the messages array
  const messages: Anthropic.MessageParam[] = [];

  console.log("--- TURN 1 (Non-streaming) ---");

  // push first user message
  messages.push({ role: "user", content: "I'm learning about AI agents. What's the core idea in one sentence?" });

  const res1 = await streamTurn(messages);              // prints Turn 1 live
  messages.push({ role: "assistant", content: res1.content });
  messages.push({ role: "user", content: "Now give me a concrete everyday example." });

  const res2 = await streamTurn(messages);              // prints Turn 2 live, WITH context
  messages.push({ role: "assistant", content: res2.content });

  console.log("\n--- TURN 2 (Streamed token-by-token with history) ---\n");

  //console.log("\n--- now the same idea, streamed token-by-token ---\n");

  // ==========================================
  // TURN 2: Streaming call (Now remembers Turn 1)
  // ==========================================
  
  // 3. Push second user message into the exact same array
  messages.push({ role: "user", content: "Summarize your previous explanation into just three words." });

  let turn2Response = "";

  // 4 stream using the full accumulated messages array.
  const stream = client.messages
    .stream({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      messages: messages,
    })
    .on("text", (text) => {
      process.stdout.write(text);
      turn2Response += text;  
    });

  await stream.finalMessage();
  console.log(); // trailing newline

  // 5 Append second assistant response to history for any future turns
  //messages.push({ role: "assistant", content: turn2Response });

}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function streamTurn(messages: any) {
  const stream = client.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    messages,
  });

  // live output as tokens arrive
  stream.on("text", (delta) => process.stdout.write(delta));

  // the fully-assembled Message once streaming finishes
  const final = await stream.finalMessage();
  process.stdout.write("\n");
  return final;
}
