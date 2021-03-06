const appView = (function () {
  const clock = document.querySelector('div.clock-face');
  const hourEl = clock.querySelector('div.hour-hand');
  const minEl = clock.querySelector('div.min-hand');
  const secondEl = clock.querySelector('div.second-hand');

  function setTransform(el, degrees) {
    el.style.transform = `rotate(${degrees + 90}deg)`;
  }

  return {
    render() {
      const now = new Date();
      const hour = now.getHours();
      const min = now.getMinutes();
      const seconds = now.getSeconds();

      setTransform(hourEl, ((hour/12) * 360));
      setTransform(minEl, ((min/60) * 360));
      setTransform(secondEl, ((seconds/60) * 360));
    },
  }
})();

const appController = (function () {
  return {
    init() {
      setInterval(appView.render, 1000);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
