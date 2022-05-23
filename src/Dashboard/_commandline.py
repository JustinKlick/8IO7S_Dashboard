import subprocess
import os


def main():
    """
    Used as an entrypoint in setup.py.back and just opens the documentation
    """

    path_to_docu_index = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                      "_resources", "documentation", "index.html")

    # open in standard browser on ubuntu
    try:
        p = subprocess.Popen("x-www-browser " + path_to_docu_index, shell=True)
        if p.returncode == "0":
            return
    except:
        pass

    # open in standard browser on OSX
    try:
        p = subprocess.Popen("open " + path_to_docu_index, shell=True)
        if p.returncode == "0":
            return
    except:
        pass

    # try using the webbrowser module
    try:
        webbrowser.open_new(path_to_docu_index)
    except:
        pass

