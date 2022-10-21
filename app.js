// Konfiguriere die Root-Component
const app = Vue.createApp({
  // anschließend werden die Optionen festgelegt - option api
  // DATA erwartet eine funktion
  data: function () {
    // muss objekt zurückliefern - bleibt reactiv
    return {
      // Objekte in Javascript haben immer einen schlüssel und einen wert
      submissions: submissions, // seed.js
      // totalVotes: 0,
    };
  },
  computed: {
    totalVotes() {
      console.log("computed ausgeführt");
      // console.log(this.totalVotes)
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
    // css als function ausgelagert
    cardHeaderBackgroundColor() {
      //  object variante
      // return {
      //   "bg-primary text-white": this.totalVotes>= 50,
      // }
      // alternativ kann man auch die array schreibweise nutzen
      if (this.totalVotes >= 50) {
        return ["bg-primary", "text-white"];
      }
    },
    cardTitleFontSize() {
      return { fontSize: this.totalVotes + "px" };
    },
  },
  methods: {
    // Keine Arrow-funktionen mit "this verwenden"
    // upvote: ()=>{
    //   console.log(this);
    // }
    //Normale Funktion verwenden
    upvote(submissionId) {
      // console.log(this)
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
      // console.log(event);
    },
    // logConsole(text) {
    //   console.log(text);
    // },
    // totalVotes() {
    //   console.log("computed ausgeführt")
    //   // console.log(this.totalVotes)
    //   return this.submissions.reduce((totalVotes, submission) => {
    //     return totalVotes + submission.votes;
    //   }, 0);
    // }
  },
  watch: {
    // funktioniert nur bei primitiven datentypen und ist eine abkürzung zur unteren schreibweise
    // submissions(newValue, oldValue) {
    //   console.log(newValue);
    //   console.log(oldValue);
    //},
    // Bei dieser schreibweise können wir weitere Optionen hinzufügen
    // submissions: {
    //   // handler ist option 1
    //   handler(newValue, oldValue) {
    //     this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
    //       return totalVotes + submission.votes;
    //     }, 0);
    //     console.log(newValue);
    //     console.log(oldValue);
    //   },
    //   // deep ist option 2
    //   deep: true, // auch daten innerhalb des arrays oder objects sollen beobachtet werden
    //   // immediate 3. Option
    //   immediate: true,// option das watcher sofort ausgeführt wird
    // },
    // totalVotes(newValue, oldValue) {
    //   console.log(newValue);
    //   console.log(oldValue);
    // },
  },
});

// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
