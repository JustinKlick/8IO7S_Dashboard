import os.path
from src.Dashboard import globels as globals
from jira.client import JIRA
import urllib3
import json
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

jira_user = "jira_email_bot"
jira_password = "jira_email_bot"

jira = JIRA("https://ticket.li.ipoque.support", options={"verify": False}, max_retries=0,
            basic_auth=(jira_user, jira_password))


issues = jira.search_issues('', maxResults=200)
print(issues)


with open(os.path.join(globals.storage_path, "info.json"), "w")as file:

    for p in issues:
        p = p.raw
        json.dump(p, file, indent=4)





