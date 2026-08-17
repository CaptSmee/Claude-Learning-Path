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
  const message = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "Explain what an AI agent is in 3 sentences." },
    ],
  });

  for (const block of message.content) {
    if (block.type === "text") console.log(block.text);
  }

  console.log("\n--- now the same idea, streamed token-by-token ---\n");

  // 2) Streaming: tokens arrive as they are generated.
  const stream = client.messages
    .stream({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      messages: [{ role: "user", content: "Say hello, one word at a time." }],
    })
    .on("text", (text) => process.stdout.write(text));

  await stream.finalMessage();
  console.log(); // trailing newline
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
