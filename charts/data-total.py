import json
import csv
import os

def readData(path):
    with open(path, encoding="utf-8") as file:
        return json.loads(file.read())

def variableObject(path, filename, data):
    context = path.split('\\')[-1]
    name = filename.split('-')[-1].replace('.json', '')
    return {
        'context': context,
        'name': name,
        'data': {
            'metadata': '',
            'data': data
        }
    }


jsonArray = []
rootDir = '.\\data'

for dirName, subdirList, fileList in os.walk(rootDir):
    for fname in fileList:
        if fname.endswith('.json'):
            print(dirName + ' -> ' + fname)
            whole_path = dirName + '\\' + fname
            data = readData(whole_path)
            jsonArray.append(variableObject(dirName, fname, data))

with open('datos_agregados.json', 'w', encoding="utf-8") as f:
            json.dump(jsonArray, f, ensure_ascii=False)
