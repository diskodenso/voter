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
  methods: {
    // Keine Arrow-funktionen mit "this verwenden"
    // upvote: ()=>{
    //   console.log(this);
    // }
    //Normale Funktion verwenden
    upvote(infoText, event) {
      // console.log(this)
      this.submissions[0].votes++;
      console.log(event);
    },
    // logConsole(text) {
    //   console.log(text);
    // },
    totalVotes() {
      console.log("Methode ausgeführt")
      // console.log(this.totalVotes)
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
  },
});

// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
