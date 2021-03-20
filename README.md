# Unrest Form

### Development

To see changes while developing, use the demo. In order to develop you will need to delete the node_modules in the project root (advice on how to fix this would be greatly appreciated).

```
rm -rf node_modules
cd demo
yarn install
yarn serve
```

To update documentation (github pages), build the demo app and commit any changes in /docs.

### Build and Publish

```
yarn install
yarn lint
yarn build
yarn publish
```

