import csv
import json


def csv_to_json(csv_file, json_file):
    data = []

    with open(csv_file, "r") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)

    with open(json_file, "w") as jsonfile:
        json.dump(data, jsonfile, indent=4, ensure_ascii=False)


if __name__ == "__main__":
    csv_filename = "../src/data/staff.csv"  # 変換したいCSVファイル名を指定してください
    json_filename = "staff.json"  # JSON出力ファイル名を指定してください
    csv_to_json(csv_filename, json_filename)
