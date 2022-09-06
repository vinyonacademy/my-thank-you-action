name: CI
on: pull_request
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          fetch-depth: 1
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 10.15.0
      - name: Installing dependencies
        run: yarn install --frozen-lockfile
      - name: Running tests
        run: yarn test
