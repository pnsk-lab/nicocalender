import json

import datetime
f = open('public/videos.json', 'r')


json_dict = json.load(f)
f.close()
jso = []

for i in json_dict:
    print(json_dict[i]['title'])
    print(json_dict[i]['registeredAt'])
    print(i)
    jso.append({
        'title': json_dict[i]['title'],
        'start': json_dict[i]['registeredAt'],
        'end': (datetime.datetime.strptime(json_dict[i]['registeredAt'], '%Y-%m-%dT%H:%M:%S+09:00') + datetime.timedelta(minutes=5)).strftime('%Y-%m-%dT%H:%M:%S+09:00'),
        
        'id': i
    })

d = open('public/output.json', 'w')
d.write(json.dumps(jso))