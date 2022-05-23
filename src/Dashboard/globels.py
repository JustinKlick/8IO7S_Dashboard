import os

real_path = os.path.realpath("..")
storage_path = os.path.join(real_path, "_storage")
resource_path = os.path.join(real_path, "_resources")
cert_path = os.path.join(resource_path, "api-cert")
api_url = ""
auth = ("jira_email_bot", "jira_email_bot")

