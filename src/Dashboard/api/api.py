import os
import subprocess
import time
import json
import Dashboard.globels as globals
from jira.client import JIRA
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)



def get_api():
    jira = JIRA("https://ticket.li.ipoque.support", options={"verify": False}, max_retries=0,
                basic_auth=globals.auth)

    issues = jira.search_issues('ORDER BY created DESC', maxResults=5000, json_result=True)
    i = 0
    for element in issues["issues"]:
        key = issues["issues"][i]["fields"]["project"]["key"]
        if key == "BNETZ":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "MECANTZ")
        elif key == "DTAG":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "DELTON")
        elif key == "IDF":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "FIREBIRD")
        elif key == "LFVB":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "BIRLAS")
        elif key == "LFVDD":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "DEDLAN")
        elif key == "LFVD":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "NOVEL")
        elif key == "LFVEF":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "THERFUR")
        elif key == "LFVHH":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "HANWAJO")
        elif key == "LFVH":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "NILAS")
        elif key == "LFVM":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "MANYLAS")
        elif key == "LFVS":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "STUBOR")
        elif key == "LFVWI":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "WONRA")
        elif key == "LKADD":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "SELMA")
        elif key == "LKAHH":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "HALDUR")
        elif key == "LKAKI":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "KESOLLUGA")
        elif key == "LKAMD":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "LUGA")
        elif key == "LKAMZ":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "LUGA")
        elif key == "LKAM":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "LUNFT")
        elif key == "LKASB":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "SALAPO")
        elif key == "LKAS":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "LuLuHERZOG")
        elif key == "LUX":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "HERZOG")
        elif key == "VODA":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "VINADO")
        elif key == "ZKAK":
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "ZOKILA")
        else:
            issues["issues"][i]["fields"]["project"]["key"] = key.replace(
                key, "anknown key")

        i = i + 1

    with open(os.path.join("/home/qa/git/8IO7S_Dashboard/src/Dashboard/web-server/static", "info.json"), "w") as file:
        json.dump(issues, file, indent=4)

subprocess.call(
        'export FLASK_APP=/src/Dashboard/web-server/app.py && flask run -h0 -p8432',
        shell=True)
#while True:
    #get_api()
    #time.sleep(1800)

