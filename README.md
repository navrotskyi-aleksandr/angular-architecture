# Mythical FE

## Install

### nvm

- > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

### nodeJs

- > nvm install

### pnpm

- > npm install -g pnpm

#### POSIX alias

Just put the following line to your .bashrc, .zshrc, or config.fish

- > alias pn=pnpm

#### Setup Home Path

- > pn setup
- Restart terminal

### nx

Install NX Globally

- > pn install nx@latest -g

Install Local Dependencies

- > pn install

Install Nx Console IDE extension

## Storybook

### Generate Stories

Use Nx Console or CLI

- > nx generate @nx/angular:stories --name=app-a-ui
