import csv
import json

# キー名変換テーブル
key_mapping = {
    # "﻿タイムスタンプ": "time_stamp",
    "プラン": "category",
    "ブランド名 （日本語）/ Displayed brand name (Japanese)": "name",
    "ブランド名（英語）/ Displayed brand name (English)": "name_en",
    "ウェブページからのリンク先 URL / Linked URL from PyCon APAC 2023 Website": "url",
    "": "logo",
    "PR 文（日本語） / Promotion sentence (Japanese)": "description",
    "PR 文（英語） / Promotion sentence (English)": "description_en",
}


def read_csv_file(input_filename):
    data = []
    with open(input_filename, "r", newline="", encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            transformed_row = {}
            for key, value in row.items():
                if key in key_mapping:
                    transformed_row[key_mapping[key]] = value
            data.append(transformed_row)
    print(f"CSV entry: {len(data)}")
    return data


def merge_json_data(base_filename, csv_data):
    merged_data = []
    try:
        with open(base_filename, "r", encoding="utf-8") as base_json_file:
            base_data = json.load(base_json_file)
    except FileNotFoundError:
        base_data = []

    # for base_entry in base_data:
    for csv_entry in csv_data:
        merged_entry = csv_entry
        for base_entry in base_data:
            if base_entry.get("name") == csv_entry.get("name"):
                merged_entry["logo"] = base_entry.get("logo", "dummy_coming_soon.png")
                break
        else:
            merged_entry["logo"] = "dummy_coming_soon.png"
        merged_data.append(merged_entry)

    print(f"Merged entry: {len(merged_data)}")
    # Remove duplicates based on 'name' field, keeping the later entry
    merged_data_dict = {}
    for entry in merged_data:
        merged_data_dict[entry["name"]] = entry

    print(f"Remove duplicated entry: {len(merged_data)}")
    return list(merged_data_dict.values())


def write_json_file(data, output_filename):
    with open(output_filename, "w", encoding="utf-8") as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)


def main():
    input_filename = "./sponsor_form.csv"
    special_sponsor_filename = "./special.json"
    patron_filename = "./patron.json"
    base_filename = "../src/data/sponsor.json"
    output_filename = "./sponsor.json"

    with open(special_sponsor_filename, "r", encoding="utf-8") as special_json_file:
        special_sponsor_data = json.load(special_json_file)
    with open(patron_filename, "r", encoding="utf-8") as patron_json_file:
        patron_data = json.load(patron_json_file)

    csv_data = read_csv_file(input_filename)
    merged_data = merge_json_data(base_filename, csv_data)

    merged_data.extend(special_sponsor_data)
    print(f"Add Special Sponsor entry: {len(merged_data)}")

    merged_data.extend(patron_data)
    print(f"Add Patron entry: {len(merged_data)}")

    write_json_file(merged_data, output_filename)


if __name__ == "__main__":
    main()
