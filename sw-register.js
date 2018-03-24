if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/service-worker.js').then(function(registation){
    console.log("ServiceWorker Registered.");
  });
}
