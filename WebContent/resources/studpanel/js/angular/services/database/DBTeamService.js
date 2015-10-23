

(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBTeamService = function($http) {

    // Felder
    var teams = [];
    var teamEintraege = [];
    var studenten = [];
    var aktuelleAuswahl = [];
    var teamEintraegeKonfig = [];




    // Helper
    // #########################################################################

    var faecherToString = function(faecher){

      var faecherString = "";

      for(var i = 0; i < faecher.length; i++){

        faecherString += faecher[i].fachKuerzel;

        if(!(i == faecher.length-1)){

          faecherString += ", ";
        }
      }

      return faecherString;

    }
    var teamToString = function(mitglieder){

      var teamString = "";

      for(var i = 0; i < mitglieder.length; i++){

        teamString += mitglieder[i].vollerName;

        if(!(i == mitglieder.length-1)){

          teamString += ", ";
        }
      }

      return teamString;

    }


    var sucheStudent = function(matrNr){


    }

    // #########################################################################


    // POJO
    // #########################################################################

    function TeamID(id){
      this.id = id;
    }

    function Teameintrag(team, fach){
      this.team = team;
      this.fach = fach;
    }

    function Team(teamId, minTeiln, maxTeiln, mitglieder, grpNr){
      this.teamId = teamId;
      this.minTeiln = minTeiln;
      this.maxTeiln = maxTeiln;
      this.mitglieder = mitglieder;
      this.mgString = teamToString(this.mitglieder);
      this.grpNr = grpNr;
    }

    function MatrikelNr(matrNr){
      this.matrNr = matrNr;
    }

    function Student(type, matrNr, vorname, nachname){

      this.type = type;
      this.matrNr = matrNr;
      this.vorname = vorname;
      this.nachname = nachname;
      this.vollerName = this.vorname +" "+ this.nachname;
      this.benutzername = null;
      this.gebDatum = null;
      this.gebOrt = null;
      this.Adresse = null;
      this.department = null;
      this.fachbereich = null;
      this.email = null;
    }

    function Angestellter(type, vorname, nachname){

      this.type = type;
      this.maID = null;
      this.vorname = vorname;
      this.nachname = nachname;
      this.vollerName = this.vorname + " " + this.nachname;
      this.benutzername = null;
      this.gebDatum = null;
      this. gebOrt = null;
      this.adresse = null;
      this.department = null;
      this.fachbereich = null;
      this.email = null;
    }

    function Fach(fachKuerzel){

      this.fachKuerzel = fachKuerzel;
      this.fachBezeichnung = null;
      this.fachBereich = null;
      this.semester = null;
    }





    // Harccoded datene
    // #########################################################################

    var matr1 = new MatrikelNr(243441);
    var matr2 = new MatrikelNr(243442);
    var matr3 = new MatrikelNr(243443);
    var matr4 = new MatrikelNr(243444);
    var matr5 = new MatrikelNr(243445);
    var matr6 = new MatrikelNr(243446);

    var student1 = new Student("student", matr1, "Max", "Mustermann1");
    var student2 = new Student("student", matr2, "Max", "Mustermann2");
    var student3 = new Student("student", matr3, "Max", "Mustermann3");
    var student4 = new Student("student", matr4, "Max", "Mustermann4");
    var student5 = new Student("student", matr5, "Max", "Mustermann5");
    var student6 = new Student("student", matr6, "Max", "Mustermann6");

    var fach1 = new Fach("GKAP");
    var fach2 = new Fach("ADP");
    var fach3 = new Fach("BSP");
    var fach4 = new Fach("BWP");
    var fach5 = new Fach("MGU");
    var fach6 = new Fach("PRP2");
    var fach7 = new Fach("PRP1");
    var fach8 = new Fach("SEP1");
    var fach9 = new Fach("RNP");

    var teamId1 = new TeamID(111);
    var teamId2 = new TeamID(112);
    var teamId3 = new TeamID(113);
    var teamId4 = new TeamID(114);
    var teamId5 = new TeamID(115);
    var teamId6 = new TeamID(116);

    var teilnehmerTm1 = [student1, student2];
    var teilnehmerTm2 = [student1, student2, student3];
    var teilnehmerTm3 = [student3, student4];
    var teilnehmerTm4 = [student2, student4, student5];
    var teilnehmerTm5 = [student5, student6];
    var teilnehmerTm6 = [student1, student3];

    // teamId, minTeiln, maxTeiln, mitglieder){
    var team1 = new Team(teamId1, 0, 2, teilnehmerTm1, 1);
    var team2 = new Team(teamId2, 0, 3, teilnehmerTm2, 2);
    var team3 = new Team(teamId3, 0, 2, teilnehmerTm3, 4);
    var team4 = new Team(teamId4, 0, 3, teilnehmerTm4, 6);
    var team5 = new Team(teamId5, 0, 2, teilnehmerTm5, 5);
    var team6 = new Team(teamId6, 0, 2, teilnehmerTm6, 8);

    faecher1 = [fach1, fach2, fach3, fach4];
    faecher2 = [fach5, fach6];
    faecher3 = [fach7];
    faecher4 = [fach8];
    faecher5 = [fach9];

    var te1 = new Teameintrag(team1, fach1);
    var te2 = new Teameintrag(team2, fach2);
    var te3 = new Teameintrag(team3, fach3);
    var te4 = new Teameintrag(team4, fach4);
    var te5 = new Teameintrag(team5, fach5);
    var te6 = new Teameintrag(team6, fach6);

    var teams = [te1, te2, te3, te4, te5, te6];

    // #########################################################################

    var istGueltigerStudent = function(fach, grpNr){


    }

    var setzeEinzelAnmeldung = function(fach, grpNr){

    }

    var fuegeAusGewStudentenEin = function(matrNr){



    }

    var entferneStudAuswahl = function(matrNr){


    }

    var uebernehmeAusgewMitglieder = function(){


    }

    var initTeamTabelleMeineTabelle = function(){


    }

    var initTeamTabelleKonfig = function(){

    }

    var uebernehmeAuswahl = function(){


    }

    // Gebe dieses Object zurück und mache die Methoden zugänglich
    // -----------------------------------------------------------------
    return {

      teams: teams

    };
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBTeamService", DBTeamService);

  // Code sofort ausführen
}());
