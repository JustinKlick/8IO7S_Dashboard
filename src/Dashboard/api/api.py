import os
import json
import Dashboard.globels as globals
from jira.client import JIRA
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def get_api():
    jira = JIRA("https://ticket.li.ipoque.support", options={"verify": False}, max_retries=0,
                basic_auth=globals.auth)

    issues = jira.search_issues('ORDER BY created DESC', maxResults=500, json_result=True)
    print(issues)


    with open(os.path.join(globals.storage_path, "info.json"), "w") as file:
        json.dump(issues, file, indent=4)




def get_infos():
    with open(os.path.join(globals.storage_path, "info.json"), "r") as file:
        for item in file:
            print(item)


#get_infos()
