# chessClockApp
## 概要
- 対局時計のアプリです。
- 制作にはChatGPTを利用しており互いにコーディングをして機能を実装していきます。
## 要件
- 持ち時間が設定できる。
- スタートボタンを押すと、先手の持ち時間が減る
- 着手ボタンを押すと、先手の持ち時間の減算が止まり、後手の持ち時間の減算が始まる
- 着手するたびに手数カウントも増加する
- 投了ボタンを押すと減算はストップ
- {手数カウント}手にて{先手or後手の}勝ちとなりました。と表示される
- リセットボタンを押すと全ての設定が元に戻る

## これからやるべき機能
- タイマーを二つに
- 片方が動いたらもう片方を止める
- 手数カウントを実装
- 終了メッセージを出力
- キーボードの任意のキーを押すことで着手とする