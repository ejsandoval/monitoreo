import json
import csv
import os

with open('regiones.csv', newline='', encoding="utf-8") as csvfile:
	reader = csv.reader(csvfile)
	regiones = {}
	datum_obj = {}
	rownum = 0
	ID = ''
	for row in reader:
		if rownum == 0:
			head = row
		else:
			datum = {}
			colnum = 0
			for col in row:
				if head[colnum] in ['ID']:
					ID = col
				else:
					datum[head[colnum]] = col
				colnum += 1
			datum_obj[ID] = datum
		rownum += 1
	regiones['regions'] = datum_obj
	with open('regiones.json', 'w', encoding="utf-8") as f:
		json.dump(regiones, f, ensure_ascii=False)

with open('instituciones.csv', newline='', encoding="utf-8") as csvfile:
	reader = csv.reader(csvfile)
	institutions = {}
	datum_obj = {}
	rownum = 0
	ID = ''
	for row in reader:
		if rownum == 0:
			head = row
		else:
			datum = {}
			colnum = 0
			for col in row:
				if head[colnum] in ['id_institucion']:
					ID = col
				else:
					datum['name'] = col
				colnum += 1
			datum_obj[ID] = datum
		rownum += 1
	institutions['institutions'] = datum_obj
	with open('instituciones.json', 'w', encoding="utf-8") as f:
		json.dump(institutions, f, ensure_ascii=False)