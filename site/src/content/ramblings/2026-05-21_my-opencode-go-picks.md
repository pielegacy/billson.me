---
title: "My OpenCode Go Picks"
description: "A semi-frequently updated post of my fave open weight models for coding"
publishedDate: 2026-06-27
tags:
  - tech
---

_Last Updated 2026-06-21 - Included GLM 5.2 and Kimi Code 2.7 initial thoughts_

[OpenCode Go](https://opencode.ai/go) is really solid.

Historically I've paid for models through Zen when working on side projects but I've found since signing up for Go it's an incredibly convenient way to pay a flat rate for all this stuff.

I'm super hesitant to recommend flat fee AI solutions as the model seemingly just doesn't work without the inevitable rugpulls and cost increases [but there seems to be evidence that Anomaly are making it work.](https://www.reddit.com/r/opencodeCLI/comments/1t1v4xs/is_opencode_go_sustainable/)

The nice part about this being bundled with a product like OpenCode is you're learning how to use harness which works with a variety of providers so whilst Go is convenient to setup you can easily switch to any other provider with minimal change to your workflow. I will continue to shill this product and its services, I find it so much more interesting than what any of the competition is doing.

I'm going to use this document as a quick reference for anyone getting started with Go, I'll update it if my opinions change but consider all this anecdotal and a small journal of what works for me with this plan.

[Artificial Analysis](https://artificialanalysis.ai/) is also a less biased/anecdotal resource to compare these open weight models; it's ultimately what got me to these conclusions in the first place.

If I haven't mentioned a model here; I've not bothered with it. Doesn't mean I think it's bad, ultimately would rather build things than run my own crappy model benchmarks.

---

## GLM 5.2

I do see the hype, I wonder if my current experience with it is potentially impacted by however z.ai is providing inference to OpenCode Go/Zen.
It's a hefty model, the results it produces definitely are on rivalling what I've seen from Opus (I didn't get a chance to try out Fable and for the cost I refuse to believe any work
I'm doing with LLMs is worth it).

The quality of the code produced is strong, I've loved using it for plan mode activities, it is like GLM 5.1 though where I wouldn't recommend using this for small edits and refactors
if you are like me and hate waiting for these things.

It's definitely worth trying, I've found similarly to 5.1 the rate limiting means it's best used for complex plans or even with something like Hermes/OpenClaw where you can fire off
some prompts and let it run in the background.

## Kimi Code 2.7

Kimi is so back. After Kimi K2.6 left me a little disappointed compared 2.5 with regards to the overthinking that I experienced the newer version, I'm loving Code 2.7.

The combo of GLM 5.2 for planning into Kimi Code 2.7 for the build has felt great.

Could be my new top pick for coding it's just a perfect balance of smarts and speed.

## MiniMax M3

Not the smartest but smart enough to execute a build plan. Reasonable pricing, doesn't get caught in thinking loops often (at least from my experience).

Fits the same mould that Kimi K2.5 did but as is often the case with these coding models there is an edge to them being newer.

## MiMo 2.5

Have been using this more, seems pretty good and Reddit local LLM communities seem to speak highly of the Pro version.

## Qwen

They're all bangers. Writing this as 3.7 Max has just released and so far it's a really good balance of being quick but not taking eons to respond.

What's even crazier is how specifically the Qwen line is so often
the posterchild for local inference. There was [the recent viral post](https://www.reddit.com/r/ClaudeAI/comments/1t8v7z0/hugging_face_cofounder_says_qwen_36_27b_running/) from the Hugging Face co-founder talking about his experience running Qwen whilst on a plane, but seemingly the vibe with Qwen has been it's the one people use locally.

## DeepSeek V4 (Pro and Flash)

I'm using more DeepSeek these days and it's pretty good! I really love the pattern of planning with Pro and building with Flash, I would hope other models also embrace releasing variants like this.

I do think there is merit in knowing how to switch between different levels of model depending on the task, anything that helps drill this way of thinking into developers is a good way to stop an over reliance on expensive models you'll never be able to run yourself.

## Kimi 2.6

Kimi 2.6 is fine but I find like so many newer models it thinks too much. This may be a _me_ thing rather than an actual issue with 2.6 but I don't find the juice worth the squeeze compared to 2.5. Maybe the lengthier responses and thought is better in the context of a Plan mode invocation _but_ what I loved about 2.5 was how it just got shit done and it was done for cheap.

2.6 for planning -> 2.5 for building is a good flow but if you're paying for OpenCode Go chances are you can just keep 2.6 for both and not notice the usage impact.

It is a good model but it's not doing what I loved about 2.5 as well so whilst I do use it I kind of hope we continue to get snappier, lighter, models like 2.5 from Moonshot.

## Kimi K2.5

Incredibly cost efficient, while still delivering really solid results. For less complex tasks it can be used effectively for the Plan agent but it thrives in a Build context.

My only negative for it is I've found it to be a bit flakier from a provider sense, I believe under the hood Moonshot themselves serve this model and at times it can grind to a halt but this is more with 2.6 compared to 2.5.

Cursor's Composer 2 is based off it so whilst it is still an open-weight model that isn't being used as much as the more dominant Frontier models, it is definitely robust enough that large AI companies can bank on it.

Kimi is still the 🐐 for me, however I'd like to find something better as I'm not over the moon about its sequel model.

## GLM 5.1

Allegedly a very good model but it's not stuck with me. Looking at benchmarks it sits in the same area as K2.6 and DeepSeek V4 Pro but similar to those models I find it does take its time like no matter how complex the task is.

Still worth changing it up from time to time and giving it a try, I'm not overly passionate about it.
