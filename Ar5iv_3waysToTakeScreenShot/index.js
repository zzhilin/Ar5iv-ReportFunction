//Test
const removePreviousScreenshot = () => {
    const previousScreenshot = document.getElementById('screenshot');
    if (previousScreenshot) {
      previousScreenshot.remove();
    }
  };

  document.getElementById('screenshot-button').addEventListener('click', () => {
    removePreviousScreenshot();

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
      const img = document.createElement('img');
      img.id = 'screenshot';
      img.src = canvas.toDataURL();
      document.body.appendChild(img);

      const a = document.createElement('a');
      a.href = img.src;
      a.download = 'screenshot.png';
      a.click();
    });
  });
