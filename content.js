(async () => {
  let pageContent = document.body.innerText;
  let pageUrl = window.location.href;
  let fullContent = `URL: ${pageUrl}\n\nContent:\n${pageContent}`;

  try {
    await navigator.clipboard.writeText(fullContent);
    console.log("Copied to clipboard");
    chrome.storage.local.set({ savedContent: fullContent });
  } catch (err) {
    console.error("Clipboard write failed: ", err);
  }
})();