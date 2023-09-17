# スポンサー情報の取り込み方

- このファイルの「スポンサー情報まとめ」シートをCSVでダウンロードする
 - https://docs.google.com/spreadsheets/d/1cRBt7OdN_zo9TN4It0cAWGS_xRVa2aT21OZZOd__HHU/edit?resourcekey#gid=1828549469
- `sponsor_form.csv` として保存する
- 以下を実行する
  ```bash
  python sponsor_csv2json.py
  ```
- `sponsor.csv` として吐き出されるので `src/data/sponsor.json`` と差し替える

環境に応じて python3 とか実行方法は適宜環境に合わせる