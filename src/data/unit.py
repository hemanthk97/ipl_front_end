import csv
import json
import time

start = time.time()
timeout_limit = 30

csvfile = open('file.csv', 'r')



def func(i):
    fieldnames = ("match_id","inning","batting_team","bowling_team","over",	"ball",	"batsman",	"non_striker",	"bowler",	"is_super_over",	"wide_runs","bye_runs",	"legbye_runs","noball_runs","penalty_runs",	"batsman_runs",	"extra_runs","total_runs","player_dismissed",	"dismissal_kind","fielder")
    reader = ""
    csvfile = open('file.csv', 'r')
    reader = csv.DictReader( csvfile, fieldnames)
    jsonfile = open(str(i)+'.json', 'w')
    out = json.dumps( [ row for row in reader if row["match_id"]==str(i)] )
    jsonfile.write(out)
for i in range(1,578):
    func(str(i))

