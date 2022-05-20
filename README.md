# 0xVentures

This is the main project repository for 0xVentures website.

Do not update gh-pages directly. Use methods below.

## Install

After cloning run

```bash
npm install
```

If you do not have `Dart` installed, start here: [Get the Dart SDK](https://dart.dev/get-dart).

Then

```bash
dart pub get
```

When you update `js` or `scss` files:

```bash
npm run build
```

When you finish updates, push code to `main` and run

```bash
npm run deploy
```

If you want to update profile pictures, check members.txt. Add any missing members [twitterHandle, displayName] and run:

```bash
dart get-twitter-pfp.dart
npm run deploy
```

## TODO

- html compression/build on `run build`
- in the later stage, integration with webapp to fetch members list
