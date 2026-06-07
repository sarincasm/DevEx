---
name: macos-calendar
description: Create and manage events in Apple Calendar using AppleScript. Dynamically fetches contact emails, calendar names, and links from your Obsidian "KB" folder using the "obsidian" CLI.
---

# macOS Calendar (Knowledge-Enhanced)

This skill manages macOS calendar events using AppleScript, with dynamic context fetched from your Obsidian vault's `KB` folder.

## Privacy & Dynamic Data
The skill does not store sensitive data. It uses the `obsidian` CLI to retrieve the latest information on-the-fly.

### Obsidian CLI
How to use obsidian CLI
```bash
obsidian help
```

### Knowledge Base (KB)
Always consult the `KB` folder in the vault for these details:
- **Calendars (`KB/Calendars.md`)**:
    - **"Calendar"**: Use for Work/Outlook/Exchange meetings.
    - **"Events"**: Use for Personal/iCloud events.
- **Emails (`KB/Emails.md`)**: Contains contact mappings (e.g., Name <name@domain.com>).
- **Links (`KB/Links.md`)**: Contains common URLs (e.g., Huddle link for the team).

### Fetching Instructions
- Get vault name: `obsidian vaults`
- Read full context: `obsidian files folder=KB vault=<vault name>`
- Read specific file: `obsidian read path="KB/Emails.md" vault=<vault name>`

## Core Principles

- **Automatic Selection**: Determine the correct calendar ("Calendar" vs "Events") based on the task description (Work vs Personal).
- **Rich Metadata**: Always try to populate the `location` and `description` fields using data found in Obsidian (e.g., Huddle links).
- **Single Interface**: Use `tell application "Calendar"` for all account types.
- **Programmatic Dates**: Build date objects programmatically in AppleScript.
- **Two-Step Creation**: Create the event first, then add attendees.
- **Syncing**: Run `reload calendars` after modifications.

## Reliable Event Creation Pattern

```applescript
tell application "Calendar"
    -- 1. Setup the Date (programmatically)
    set theStartDate to (current date) + (1 * days)
    set time of theStartDate to 14 * 3600 -- 2:00 PM
    
    set theEndDate to theStartDate + (1 * hours)
    
    -- 2. Target the specific calendar (Fetched from KB/Calendars.md)
    tell calendar "Calendar" -- OR "Events"
        -- 3. Create the event with Rich Metadata
        set theEvent to make new event with properties {summary:"Meeting Title", start date:theStartDate, end date:theEndDate, location:"https://...", description:"Join: https://..."}
        
        -- 4. Add attendees (Fetch email from KB/Emails.md)
        tell theEvent
            make new attendee at end of attendees with properties {email:"<email@domain.com>"}
        end tell
    end tell
    
    -- 5. Force Sync
    reload calendars
end tell
```

## Troubleshooting
- **Permissions**: Grant "Full Access" in **System Settings > Privacy & Security > Calendars**.
- **Vault Name**: Ensure `vault=<vault name>` is included in all Obsidian CLI commands.
