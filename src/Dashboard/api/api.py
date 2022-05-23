import os
import Dashboard.globels as globals
from jira.client import JIRA
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def get_api():
    jira = JIRA("https://ticket.li.ipoque.support", options={"verify": False}, max_retries=0,
                basic_auth=globals.auth)

    issues = jira.search_issues('', maxResults=200)
    print(issues)

    with open(os.path.join(globals.storage_path, "info.json"), "w") as file:
        for p in issues:
            p = p.raw
            json.dump(p, file, indent=4)


get_api()


def get_infos():
    with open(os.path.join(globals.storage_path, "info.json"), "r") as file:
        for item in file:
            print(item)


get_infos()
