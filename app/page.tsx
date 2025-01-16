import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl">HueverseAI</h1>
      <h3>GPT-4o mini: advancing cost-efficient intelligence</h3>
      <p className="w-1/2 text-justify font-normal text-base leading-7">OpenAI is committed to making intelligence as broadly accessible as possible. Today, we're announcing GPT-4o mini, our most cost-efficient small model. We expect GPT-4o mini will significantly expand the range of applications built with AI by making intelligence much more affordable. GPT-4o mini scores 82% on MMLU and currently outperforms GPT-41 on chat preferences in LMSYS leaderboard⁠(opens in a new window). It is priced at 15 cents per million input tokens and 60 cents per million output tokens, an order of magnitude more affordable than previous frontier models and more than 60% cheaper than GPT-3.5 Turbo.</p>
    </div>
  );
}
