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

# launch tmux
if [ -z "$TMUX" ]
then
  tmux attach -t "HOME" || tmux new -s "HOME"  
fi

mamba_init() {
  # >>> conda initialize >>>
  # !! Contents within this block are managed by 'conda init' !!
  __conda_setup="$('/opt/homebrew/Caskroom/miniforge/base/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
  if [ $? -eq 0 ]; then
      eval "$__conda_setup"
  else
      if [ -f "/opt/homebrew/Caskroom/miniforge/base/etc/profile.d/conda.sh" ]; then
          . "/opt/homebrew/Caskroom/miniforge/base/etc/profile.d/conda.sh"
      else
          export PATH="/opt/homebrew/Caskroom/miniforge/base/bin:$PATH"
      fi
  fi
  unset __conda_setup

  if [ -f "/opt/homebrew/Caskroom/miniforge/base/etc/profile.d/mamba.sh" ]; then
      . "/opt/homebrew/Caskroom/miniforge/base/etc/profile.d/mamba.sh"
  fi
  # <<< conda initialize <<<
}
alias mamel="mamba env list"
mamact() {
  mamba activate $1
}
