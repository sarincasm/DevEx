---
name: encrypt-backup
description: Encrypt folders using GPG for backup. Use when user wants to backup or encrypt sensitive directories.
---

# Encrypt Backup

Encrypts a folder using GPG and removes the unencrypted original.

## Prerequisites

- GPG installed and configured
- GPG key available for recipient `sarincasm`

## Steps

1. Verify the target folder exists
2. Ensure the `encrypted/` directory exists:
   ```bash
   mkdir -p encrypted
   ```
3. Remove existing encrypted file if present:
   ```bash
   rm -f encrypted/<folder>.tar.gz.gpg
   ```
4. Create encrypted archive in `encrypted/`:
   ```bash
   tar czf - <folder> | gpg --batch --trust-model always -e -r "sarincasm" -o encrypted/<folder>.tar.gz.gpg
   ```
   Note: `--batch` is required for non-interactive environments (no TTY).
5. Verify the encrypted file was created successfully
6. Remove the contents but keep the empty folder and `.gitkeep`:
   ```bash
   find <folder> -mindepth 1 ! -name '.gitkeep' -delete
   ```
7. Confirm completion to user

## Decryption (for reference)

```bash
gpg -d encrypted/<folder>.tar.gz.gpg | tar xzf -
```
