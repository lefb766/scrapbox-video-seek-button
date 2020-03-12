# Video Seek Button for Scrapbox

`[> 1:07:10]` のように記述すると、ページに埋め込まれた YouTube 動画のシークボタンとして機能するようになります。
ボタンをクリックすると、指定された時間にシークします。

## ビルド方法

```sh
$ npm install
$ npm run build
```

ビルドが成功すると、`dist/index.js`にUserScriptが配置されます。

## インストール方法

1. UserScript を有効にします
	- 参照: [UserScript - Scrapbox ヘルプ](https://scrapbox.io/help-jp/UserScript)
1. 自分のページに UserScript を配置します
	- `code:script.js` に続けて `dist/index.js`の内容を貼り付けてください
1. リロードして、新しいスクリプトを有効化します
	- ⚠ 注意⚠ : 読み込まれるスクリプトが自分で編集したものかどうか十分確認してください。
1. `settings` ページ、もしくは 自分のページに次のスタイルを追加します
	- 参照: [UserCSS - Scrapbox ヘルプ](https://scrapbox.io/help-jp/UserCSS)
	- `::before`疑似要素で記号を追加しているのは、クリック判定されやすくするためです
	```css
	code:style.css
	 .deco-\> { color: cornflowerblue; text-decoration: underline; cursor: pointer; }
	 .deco-\>::before { content: "▶️️"; text-decoration: none; }
	```

## 使い方

1. Youtube 動画を埋め込み表示します: `[https://www.youtube.com/watch?v=rdwz7QiG0lk]`
1. 時間を次のように記述します: `[> 1:35]`
1. 次のいずれかの方法で指定時間にジャンプできます
	- `▶️️` をクリックする
	- 時間を選択し、ポップアップメニューの `Jump to 1:35` をクリックする

## ライセンス

[MIT LICENSE](./LICENSE)を適用します。
