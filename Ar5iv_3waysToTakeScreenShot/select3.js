document.onselectionchange = function() {
  const selectedText = window.getSelection();
  if (selectedText.toString()) {
    // Remove any previous screenshot buttons
    const previousButtons = document.querySelectorAll("button[id='screenshot-button2']");
    for (const button of previousButtons) {
      button.remove();
    }

    // Determine the position of the selected text
    const range = selectedText.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Show the screenshot button
    const screenshotButton = document.createElement("button");
    screenshotButton.id = "screenshot-button2";
    screenshotButton.innerHTML = "ScreenShot";
    screenshotButton.style.position = "fixed";
    screenshotButton.style.left = `${rect.left}px`;
    screenshotButton.style.top = `${rect.top - 40}px`;
    document.body.appendChild(screenshotButton);

    // Handle the screenshot button click event
    screenshotButton.addEventListener("click", function() {
      //removePreviousScreenshot();

      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      html2canvas(document.body, {
        width: viewportWidth,
        height: viewportHeight,
        scrollX: -scrollX,
        scrollY: -scrollY,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      }).then(canvas => {
        const img = document.createElement("img");
        img.id = "screenshot";
        img.src = canvas.toDataURL();
        document.body.appendChild(img);

        const a = document.createElement("a");
        a.href = img.src;
        a.download = "screenshot.png";
        a.click();
      });
    });
  }
  else {
      // Remove the screenshot button
      const screenshotButton = document.querySelector("button[id='screenshot-button2']");
      if (screenshotButton) {
        screenshotButton.remove();
      }
    }
};
