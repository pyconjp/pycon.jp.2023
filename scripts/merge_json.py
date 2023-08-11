import pandas as pd
import json

class ExcelMerger:
    def __init__(self, key_column):
        self.key_column = key_column

    def merge_and_save(self, file1_path, file2_path, base_json_path, output_path):
        file1 = pd.read_excel(file1_path)
        file2 = pd.read_excel(file2_path)

        with open(base_json_path, "r", encoding="utf-8") as json_file:
            sponsor = json.load(json_file)

        valid_columns = list(sponsor[0].keys())

        # sponsor.json を基準にマージ処理を行う
        merged_data = sponsor.copy()
        for row in merged_data:
            name = row[self.key_column]

            # file1 から値を取得
            file1_row = file1[file1["name"] == name].iloc[0] if not file1[file1["name"] == name].empty else None
            if file1_row is not None:
                for col in valid_columns:
                    if col in file1_row and pd.notna(file1_row[col]):
                        row[col] = file1_row[col]

            # file2 から値を取得
            file2_row = file2[file2["name"] == name].iloc[0] if not file2[file2["name"] == name].empty else None
            if file2_row is not None:
                for col in valid_columns:
                    if col in file2_row and pd.notna(file2_row[col]):
                        row[col] = file2_row[col]

            # logo カラムの値を sponsor.json の値を優先
            if "logo" in row and pd.isna(row["logo"]):
                row["logo"] = None

        # category 列の値を小文字に変換
        for row in merged_data:
            row["category"] = row["category"].lower()

            # logo カラムの値を継承
            if "logo" in row and pd.isna(row["logo"]):
                row["logo"] = None

            # description.EN カラムの値を NaN の代わりに null にする
            if "description.EN" in row and pd.isna(row["description.EN"]):
                row["description.EN"] = None

        with open(output_path, "w", encoding="utf-8") as json_file:
            json.dump(merged_data, json_file, ensure_ascii=False, indent=2)

def main():
    key_column = "name"
    merger = ExcelMerger(key_column)

    file1_path = "PyCon APAC 2023 スポンサー企業情報フォーム（回答）.xlsx"
    file2_path = "PyCon APAC 2023 スポンサー募集フォーム（回答）.xlsx"
    base_json_path = "sponsor.json"
    output_path = "sponsor_new.json"

    merger.merge_and_save(file1_path, file2_path, base_json_path, output_path)

if __name__ == "__main__":
    main()
