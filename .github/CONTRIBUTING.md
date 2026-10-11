# Contributing

## Commit and PR titles

Every commit and every PR title follows Conventional Commits:

`<type>(<scope>): <subject>`

Types: `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `ci`,
`chore`, `revert`. Subject is lowercase, imperative, no trailing period.

A breaking change is `feat(api)!: drop v1 routes` or a `BREAKING CHANGE:`
footer. Breaking changes drive the major version.

## Local hooks

    pnpm install

Hooks run the linter on commit and commitlint on the commit message. Bypass
with `--no-verify` only for a work-in-progress commit you will amend.

## Pull requests

Keep the PR title Conventional — squash merge uses it as the commit message.

## Extension package

`pnpm build` writes `dist/unlost.zip` with `manifest.json` at the archive
root. Load `chrome/` unpacked while developing. A release attaches that zip
to the GitHub Release and uploads it to the Chrome Web Store as a draft.
