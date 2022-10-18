
// Konfiguriere die Root-Component
const app = Vue.createApp({
  // anschließend werden die Optionen festgelegt - option api
  // DATA erwartet eine funktion
  data: function () {
    // muss objekt zurückliefern - bleibt reactiv
    return {
      // Objekte in Javascript haben immer einen schlüssel und einen wert
      submissions: submissions, // seed.js
    };
  },
});

// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
