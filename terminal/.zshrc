#cd aliases
alias cdeels="cd ~/Documents/N/Eels/"
alias cdworkrepo="cd ~/Documents/CapJ/CapJRepos"
alias home="cd ~"

# prompt
PROMPT='😈😇%2~%#'

# homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

#tmux
alias lc="~/Documents/N/Eels/Repos/DevEx/terminal/lc"

# cd using fzf
alias sd="cd \$(find ~/Documents/N ~/Documents/CapJ -not -path '*/.*' -maxdepth 3 -type d | fzf)"

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# fzf
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
bindkey '^[[A' fzf-history-widget

# autosuggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# thefuck
eval $(thefuck --alias)

# direnv
eval "$(direnv hook zsh)"

# launch tmux
if [ -z "$TMUX" ]
then
  tmux attach -t "HOME" || tmux new -s "HOME"  
fi
