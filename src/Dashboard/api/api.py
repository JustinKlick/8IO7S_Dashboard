import os
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


    with open(os.path.join(globals.storage_path, "info.json"), "w") as file:
        json.dump(issues, file, indent=4)


while True:
    get_api()
    print("geholt")
    time.sleep(1800)
