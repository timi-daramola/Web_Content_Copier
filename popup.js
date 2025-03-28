document.addEventListener('DOMContentLoaded', function () {
  const copierButton = document.getElementById('copier');
  if (copierButton) {
    copierButton.addEventListener('click', async () => {
      document.body.focus();

      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: selectAndCopyContent,
      });
    });
  }
});


function selectAndCopyContent() {
  const bodyText = document.body.innerText;
  
  const textArea = document.createElement("textarea");
  textArea.value = bodyText;
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      console.alert("Content copied to clipboard!");
    } else {
      console.error("Failed to copy content.");
    }
    document.body.removeChild(textArea);
  } catch (err) {
    console.alert("Clipboard write failed: ", err);
  }
}