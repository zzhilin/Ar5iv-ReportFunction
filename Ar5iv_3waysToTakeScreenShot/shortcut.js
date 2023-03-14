document.addEventListener("keydown", function(event) {
    console.log(event)
    if (event.key === "s") {
        //event.ctrlKey && 
        console.log("ENter")      
        //Remove any previous screenshot buttons
        const previousButtons = document.querySelectorAll("button[id='screenshot-button']");
        for (const button of previousButtons) {
          button.remove();
        }
  
        // Show the screenshot button
        const screenshotButton = document.createElement("button");
        screenshotButton.id = "screenshot-button";
        screenshotButton.innerHTML = "ScreenShot";
        screenshotButton.style.position = "fixed";
        screenshotButton.style.left = "50%";
        screenshotButton.style.top = "25%";
        screenshotButton.style.transform = "translate(-50%, -50%)";
        screenshotButton.style.backgroundColor = "blue";
        screenshotButton.style.color = "white";
        screenshotButton.style.border = "none";
        screenshotButton.style.padding = "15px";
        document.body.appendChild(screenshotButton);
        console.log("Button")
  
        // Handle the screenshot button click event
        screenshotButton.addEventListener("click", function() {
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
    if (event.key === "d") {
        const previousButtons = document.querySelectorAll("button[id='screenshot-button']");
        for (const button of previousButtons) {
          button.remove();
        }
    }
  });
  