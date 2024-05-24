#!/bin/sh
branch="$(git symbolic-ref --short HEAD)"
if ! [[ "$branch" =~ ^(feat|fix|hotfix|doc)/[a-z0-9._-]+$ ]]; then
  echo "Error: Branch name '$branch' does not follow the convention."
  echo "Branch names should start with 'feat/', 'fix/', 'hotfix/', or 'doc/' and contain only lowercase letters, numbers, dots, hyphens, and underscores."
  exit 1
fi
