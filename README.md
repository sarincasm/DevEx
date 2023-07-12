# Dev Ex

XXXXXXXXXX

# Quick Start

## Install Homebrew

https://brew.sh

## Install Software and Tools

```
brew bundle
```

Uses `Brewfile` to install all software and tools.
[Read more about Brew Bundle](https://github.com/homebrew/homebrew-bundle)

## Symlink dot Files

```
ln -s $PWD/.finicky.js $HOME/.finicky.js &&
ln -s $PWD/.gitconfig $HOME/.gitconfig && \
ln -s $PWD/.gitconfig-capj $HOME/.gitconfig-capj && \
ln -s $PWD/.gitconfig-eels $HOME/.gitconfig-eels && \
ln -s $PWD/terminal/.tmux.conf $HOME/.tmux.conf && \
ln -s $PWD/terminal/.zshrc $HOME/.zshrc && \
ln -s $PWD/.npmrc $HOME/.npmrc && \
ln -s $PWD/.prettierrc $HOME/Documents/N/Eels/.prettierrc && \
ln -s $PWD/.prettierignore $HOME/Documents/N/Eels/.prettierignore && \
ln -s $PWD/.npmrc /opt/homebrew/etc/npmrc
```

## Brew Caveats

```
/opt/homebrew/opt/fzf/install
```
