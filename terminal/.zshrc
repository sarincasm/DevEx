export DEVEX_DIR="$HOME/Documents/N/Eels/repos/DevEx"
skills-sync() { bash "$DEVEX_DIR/scripts/skills-sync.sh"; }

#cd aliases
alias cdeels="cd ~/Documents/N/Eels/"
alias cdworkrepo="cd ~/Documents/CapJ/CapJRepos"
alias home="cd ~"

# prompt
PROMPT='😈😇%2~%#'

# homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

# pyenv
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export PATH="$HOME/.local/bin:$PATH"

# Entire CLI shell completion
autoload -Uz compinit && compinit && source <(entire completion zsh)

# Added by Antigravity IDE
export PATH="/Users/gauraang/.antigravity-ide/antigravity-ide/bin:$PATH"

# pnpm
export PNPM_HOME="/Users/gauraang/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
