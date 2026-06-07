---
name: obsidian
description: Read and write Obsidian vault notes, manage tasks, search content, and fetch context. Use whenever the user wants to capture notes, check tasks, look up information from their vault, or store something for later.
---

# Obsidian Skill

Interact with the user's Obsidian vault via the `obsidian` CLI.

## Setup

Always start by discovering the vault name:

```bash
obsidian vaults
```

Use `vault=<name>` in every subsequent command.

**Key distinction:**

- `file=<name>` resolves by name (like wikilinks — no path needed)
- `path=<path>` is an exact relative path (e.g., `Daily/2026-06-07.md`)

Read the root note `KB/Knowledge Base File Structure` to understand how the vault is organized and where to find key information.

---

## Task Management

Before working with tasks, fetch the vault's conventions and planning workflow:

```bash
obsidian read path="KB/Tasks.md" vault=<vault>
```

**Important:** The CLI's `obsidian tasks` command finds raw markdown checkboxes — it cannot run Tasks plugin queries and is unaware of the global filter tag. Always post-filter output in a script. See KB/Tasks.md for the full workflow.

---

## Reading

```bash
# Read a file
obsidian read path="Folder/Note.md" vault=<vault>

# Read today's daily note
obsidian daily:read vault=<vault>

# List files in a folder
obsidian files folder=<folder> vault=<vault>

# Get frontmatter properties
obsidian properties path="Note.md" vault=<vault>
obsidian property:read name="status" path="Note.md" vault=<vault>
```

## Writing

```bash
# Create a new note
obsidian create name="Note Title" path="Folder/Note Title.md" content="<text>" vault=<vault>

# Append / prepend to a note
obsidian append path="Folder/Note.md" content="<text>" vault=<vault>
obsidian prepend path="Folder/Note.md" content="<text>" vault=<vault>

# Append to today's daily note
obsidian daily:append content="<text>" vault=<vault>

# Set a frontmatter property
obsidian property:set name="status" value="done" path="Note.md" vault=<vault>
```

Use `\n` for newlines and `\t` for tabs in content values.

## Search

```bash
# Search by text
obsidian search query="<text>" vault=<vault>

# Search with surrounding line context
obsidian search:context query="<text>" vault=<vault>

# Limit results
obsidian search query="<text>" limit=10 vault=<vault>
```

## Common Patterns

**Quick note to today's log:**

```bash
obsidian daily:append content="\n- <note text>" vault=<vault>
```

**Look up KB context:**

```bash
obsidian files folder=KB vault=<vault>                   # see what's available
obsidian read path="KB/<file>.md" vault=<vault>          # read specific doc
```

**Find notes about a topic:**

```bash
obsidian search:context query="<topic>" vault=<vault>
```
