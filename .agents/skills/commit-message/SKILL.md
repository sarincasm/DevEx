---
name: commit-message
description: Generate and apply a git commit message. Use this skill whenever you are about to make a commit — at the end of a task, after staged changes are ready, or when the user asks to commit.
---

Generate a commit message based on the staged changes.

Use conventional commits and a relevant emoji from `references/emojis.md`.

Make sure the commit explains the "why" behind the change. If it is not clear from the code, ask the user to explain before generating the commit message.
The goal should be that someone trying to understand the reasoning/thiking from a product/business perspective should be able to understand the intent of the change.
The How and What should be clear from the code itself, so the commit message should focus on the Why.

The format should like this:

:emoji:(scope): short title

<The Why>
<Detailed description/paragraph on new lines.>
