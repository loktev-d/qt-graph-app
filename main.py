from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow
from PySide6.QtWebEngineWidgets import QWebEngineView

import sys
import json

def application(config):
    app = QApplication(sys.argv) 

    window = QMainWindow()
    window.setWindowTitle("Qt List")
    window.resize(config["windowSize"]["width"], config["windowSize"]["height"])
    window.move(app.screens()[0].availableGeometry().center() - window.frameGeometry().center())
    
    view = QWebEngineView(window)
    view.setContextMenuPolicy(Qt.NoContextMenu)
    view.load(config["clientUrl"])

    window.setCentralWidget(view)
    window.show()

    sys.exit(app.exec())

if __name__ == "__main__":
    with open("config.json", "r") as config_file:
        config = json.load(config_file)
        application(config)