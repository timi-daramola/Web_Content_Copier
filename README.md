Web Content Copier

Overview

Web Content Copier is a simple Chrome extension that allows users to quickly highlight and copy all the content from a webpage. The copied content can then be pasted into word processors like Microsoft Word, Notepad, or other text editors.

Features

Automatically highlights all the content on a webpage.

Copies the highlighted content to the clipboard with a single click.

Allows pasting the copied content into any text editor or word processor.

Works on all websites.

Installation

Manual Installation (Developer Mode)

Download or clone this repository.

Open Google Chrome and navigate to chrome://extensions/.

Enable Developer mode (toggle switch at the top-right corner).

Click Load unpacked and select the folder containing the extension files.

The extension will now be installed and ready to use.

Usage

Click the Web Content Copier extension icon in the toolbar.

In the popup window, click the "Extract & Copy" button.

The entire webpage content will be copied to the clipboard.

Open a word processor or text editor and paste (Ctrl + V or right-click > Paste).

Permissions

activeTab: Allows the extension to interact with the currently open webpage.

clipboardWrite: Enables copying content to the clipboard.

scripting: Allows executing scripts on webpages.

host_permissions: Grants access to all URLs (<all_urls>) to ensure compatibility across various websites.

Files Included

manifest.json – Defines the extension's properties and permissions.

popup.html – The user interface of the extension.

popup.js – Handles button clicks and content copying logic.

background.js – Background script (if needed for future updates).

icon.png – The extension's icon.

Future Enhancements

Add an option to selectively copy specific sections of a webpage.

Provide a preview of the copied content before pasting.

Implement cloud storage support to save copied content.

License

This extension is open-source and available for modification and distribution under the MIT License.

Contact

For support or contributions, feel free to create an issue in the repository or reach out to the developer.