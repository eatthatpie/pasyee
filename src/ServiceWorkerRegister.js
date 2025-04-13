const ServiceWorkerRegister = {
  register: () => {
    if ("serviceWorker" in navigator) {
      return new Promise((resolve, reject) => {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("./sw.js")
            .then(resolve)
            .catch(reject);
        });
      });
    } else {
      return Promise.reject(
        "The browser does not support the Service Worker API."
      );
    }
  },
};

export default ServiceWorkerRegister;
