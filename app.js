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
    // upvote(submissionId) {
    //   // console.log(this)
    //   const submission = this.submissions.find(
    //     (submission) => submission.id === submissionId
    //   );
    //   submission.votes++;
    // console.log(event);
    // },
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
    // },
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
  },
});

//Globale Komponente
app.component("SubmissionListItem", {
  // Optionen
  props: ["submission"],
  methods: {
    //Normale Funktion verwenden
    // upvote(submissionId) {
    //   // console.log(this)
    //   const submission = this.submissions.find(
    //     (submission) => submission.id === submissionId
    //   );
    //   submission.votes++;
    // },
    upvote() {
     this.submission.votes++;
    },
  },
  template: `
  <div class="d-flex"> 
    <div class="d-shrink-0">
      <img v-bind:src="submission.img" alt="" />
    </div>
    <div class="flex-grow-1 ms-3">
      <!-- <h5>
        {{submission.title}}
        <span
          class="float-end text-primary"
          v-on:click.right="upvote($event )"
          style="cursor: pointer"
        >
          <i class="fa fa-chevron-up"></i>
          <strong>{{submission.votes}}</strong>
        </span>
      </h5>-->
        <h5>
         <!-- {{index}} -->
          {{submission.title}}
        <span
        class="float-end text-primary"
        v-on:click="upvote()"
        style="cursor: pointer"
      >
        <i class="fa fa-chevron-up"></i>
        <strong>{{submission.votes}}</strong>
      </span>
      </h5>
      <!-- <div>{{submission.desc}}</div> -->
      <div v-html="submission.desc"></div>
      <!-- <div v-pre>{{submission.desc}}</div> -->
      <!-- Durch ein Object iterieren -->
      <!-- <ul>
        <li v-for="(value, key, index) in submission">
         {{key}}: {{value}}, Index: {{index}} 
        </li>
      </ul> -->
      <small class="text-muted">selected by {{submission.author}}</small>
      <!-- <input type="text"> -->
    </div>
  </div>
  `,
});
// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
