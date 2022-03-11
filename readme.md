# readme

Project-level, environment-specific secrets in Amplify using SSM

- [pre-push & post-push hooks to create/update and write env vars](./amplify/hooks)
- [custom `secrets` category for creating "\_snapshot" env var](./amplify/backend/custom/secrets/cdk-stack.ts)
  - pre-push hook updates snapshot file has based on contents of env dotfiles, writes directly to cdk-stack
