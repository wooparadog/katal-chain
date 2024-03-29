#!/bin/bash
set -e

PROJECT_ROOT=`git rev-parse --show-toplevel`

cd "$PROJECT_ROOT"

for toml in $(find . -maxdepth 3 -name "Cargo.toml"); do
    cargo update --manifest-path $toml || true
    cargo doc --no-deps --manifest-path $toml "$@"
done

# Remove previous docs
rm -rf ../katal.io/dist/assets/docs && mkdir ../katal.io/dist/assets/docs
# Move to docs folder to deploy
cp -r target/doc/* ../katal.io/dist/assets/docs
