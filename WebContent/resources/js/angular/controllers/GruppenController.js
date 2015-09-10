/**
 * Managed die Veranstaltungen
 */
(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object, $http: holt JSON Object vom SpringMVC Backend -> folgt später
  var GruppenController = function($scope, autoscroller, vgservice, tmGruppenService /*, $http*/ ) {


    // Locals
    // ############################################################################################################
    var indexGrLoeschen;
    var indexGrEdit;
    // ############################################################################################################

    // Helper
    // ###########################################################################################################

    // Setzt die Termine nach Erstellung der neuen Gruppe wieder auf die Standardwerte zurück
    function resetAppValues() {

      var term = [];
      var dateTm1 = new Date();
      var dateTm2 = new Date();
      dateTm2.setDate(dateTm1.getDate() + 7);

      var dateTm3 = new Date();
      dateTm3.setDate(dateTm2.getDate() + 7);

      var dateTm4 = new Date();
      dateTm4.setDate(dateTm3.getDate() + 7);

      var tm1 = new Appointment(dateTm1, timeStart1, timeEnd1);
      var tm2 = new Appointment(dateTm2, timeStart2, timeEnd2);
      var tm3 = new Appointment(dateTm3, timeStart3, timeEnd3);
      var tm4 = new Appointment(dateTm4, timeStart1, timeEnd1);

      term.push(tm1);
      term.push(tm2);
      term.push(tm3);
      term.push(tm4);

      return term;
    }

    // Erzeugt neue Abgabetermine anhand des Models
    function getAppointments(termine) {
      var app = [];
      for (i = 0; i < termine.length; i++) {
        app.push(new Appointment(termine[i].date, termine[i].timeStart, termine[i].timeEnd));
      }
      return app;
    }

    //Abgabetermine zur Stringdarstellung konvertieren
    function toStr(termine) {

      var term = "";
      var i;
      for (i = 0; i < termine.length; i++) {
        term += termine[i].kw;

        if (i < termine.length - 1) {
          term += ", ";
        }
      }
      return term;
    }

    // Generiert einen zufälligen Index für ein Array
    function genRdIndex(arr) {
      var index;
      index = Math.floor(Math.random() * arr.length);
      return index;
    }

    // Kalenderwoche ermitteln -> Quelle: http://weeknumber.net/how-to/javascript
    Date.prototype.getWeek = function() {
      var date = new Date(this.getTime());
      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    Date.prototype.getString = function() {
        var day = this.getDate();
        var month = this.getMonth() + 1;
        var year = this.getFullYear().toString();
        var dateString = "";

        if (day < 10) {
          dateString += "0";
        }
        day = day.toString();
        dateString += day;
        dateString += ".";

        if (month < 10) {
          dateString += "0"
        }
        month = month.toString();
        dateString += month;
        dateString += ".";
        dateString += year;
        return dateString;
      }
      // ###########################################################################################################

    // Benutzerdefinierte Klassen
    // ########################################################################################################

    // Uhrzeiten
    function Time(h, m) {

      this.hours = h;
      this.min = m;

      this.getHour = function() {
        return this.hours;
      }
      this.getMinute = function() {
        return this.min;
      }

      this.setHours = function(hour) {
        this.hours = hour;
      }
      this.setMinutes = function(minutes) {
        this.min = minutes;
      }

      this.getString = function() {

        var time = "";
        if (this.hours < 10) {
          time += "0";
        }
        return time += this.hours + ":" + this.min;
      }
    }

    // Termine
    function Appointment(date, start, end, room) {

      var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

      this.date = date;
      this.dateString = this.date.getString();

      this.timeStart = start;
      this.timeEnd = end;

      this.timeStartString = this.timeStart.getString();

      this.timeEndString = this.timeEnd.getString();

      this.kw = "" + this.date.getWeek();

      this.setDate = function(date) {
        this.date = date;
      }

      this.setTimeStart = function(timeStart) {
        this.timeStart = timeStart;
      }

      this.setTimeEnd = function(timeEnd) {
        this.timeEnd = timeEnd;
      }

      this.formattedDateString = days[this.date.getDay()] + ", " + this.dateString;
    }

    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ====================================================================================

    // Example-Times
    // -------------------------------------------------------------------------

    var timeStart1 = new Time(8, 15);
    var timeEnd1 = new Time(11, 45);

    var timeStart2 = new Time(12, 30);
    var timeEnd2 = new Time(15, 45);

    var timeStart3 = new Time(16, 15);
    var timeEnd3 = new Time(19, 30);

    // -------------------------------------------------------------------------

    // Example-Dates
    // -------------------------------------------------------------------------
    var dateTm1 = new Date();

    var dateTm2 = new Date();
    dateTm2.setDate(dateTm1.getDate() + 7);

    var dateTm3 = new Date();
    dateTm3.setDate(dateTm2.getDate() + 7);

    var dateTm4 = new Date();
    dateTm4.setDate(dateTm3.getDate() + 7);

    var kws = [dateTm1.getWeek(),
      dateTm2.getWeek(),
      dateTm3.getWeek(),
      dateTm4.getWeek()
    ];

    term = [];
    var tm1 = new Appointment(dateTm1, timeStart1, timeEnd1);
    var tm2 = new Appointment(dateTm2, timeStart2, timeEnd2);
    var tm3 = new Appointment(dateTm3, timeStart3, timeEnd3);
    var tm4 = new Appointment(dateTm4, timeStart1, timeEnd1);

    term.push(tm1);
    term.push(tm2);
    term.push(tm3);
    term.push(tm4);

    // -------------------------------------------------------------------------

    $scope.termine = term;
    $scope.grNummern = [1, 2, 3, 4, 5, 6];
    $scope.anzTmTeam = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.startZeiten = [timeStart1, timeStart2, timeStart3];
    $scope.endZeiten = [timeEnd1, timeEnd2, timeEnd3];
    $scope.raeume = ["0660", "1180", "1070", "0770"];
    $scope.dozenten = ["Padberg", "Zukunft", "Kleine", "Gerken", "Huebner"];
    $scope.assistenten = ["Blank", "Oelker", "Schulz"];

    // Vorhandene Hardcoded Daten (in Tabelle gelistet)
    $scope.hcGruppenDaten = [{
      fach: vgservice.getFach(),
      grpNr: 1,
      termine: term,
      kw: toStr(term),
      dozent: "Padberg",
      assistent: "Oelker",
      raum: "0660",
      minGr: 6,
      maxGr: 10
    }, {
      fach: vgservice.getFach(),
      grpNr: 2,
      termine: term,
      kw: toStr(term),
      dozent: "Zukunft",
      assistent: "Blank",
      raum: "0660",
      minGr: 3,
      maxGr: 10
    }, {
      fach: vgservice.getFach(),
      grpNr: 3,
      termine: term,
      kw: toStr(term),
      dozent: "Kleine",
      assistent: "Blank",
      raum: "0660",
      minGr: 3,
      maxGr: 10
    }, {
      fach: vgservice.getFach(),
      grpNr: 4,
      termine: term,
      kw: toStr(term),
      dozent: "Kleine",
      assistent: "Blank",
      raum: "0660",
      minGr: 3,
      maxGr: 10
    }];
    // ====================================================================================


    // SelectBox-Titles
    // ############################################################################################################
    $scope.selBoxAnzTeamTitle = "Anzahl Teammitglieder:";
    $scope.termWaehlenTitle = "Termne wählen (KW) ...";
    $scope.tagWaehlenTitle = "Tag:";
    $scope.uhrzBeginTitle = "Uhrzeit (Beginn):";
    $scope.uhrzEndeTitle = "Uhrzeit (Ende):";
    $scope.raumWaehlenTitle = "Raum:";
    $scope.selBoxFBTitle = "Fachbereich:"

    var terminTitle = ". Termin";
    $scope.tm1Title = "1" + terminTitle;
    $scope.tm2Title = "2" + terminTitle;
    $scope.tm3Title = "3" + terminTitle;
    $scope.tm4Title = "4" + terminTitle;

    // ############################################################################################################



    // Felder initialisiern
    // ############################################################################################################
    $scope.gr = {};
    $scope.gr.sem;
    $scope.gr.fach = vgservice.getFach();
    $scope.gr.grpNr = $scope.grNummern[0];
    $scope.gr.termine = term;
    $scope.gr.dozent = $scope.dozenten[0];
    $scope.gr.assistent = $scope.assistenten[0];
    $scope.gr.raum = $scope.raeume[0];
    $scope.gr.minGr = 0;
    $scope.gr.maxGr = 10;
    $scope.gr.anzTm = $scope.anzTmTeam[2];

    // ############################################################################################################



    //Preconditions
    // ############################################################################################################

    // Prüft die Eingaben auf Korrektheit -> Wird noch um einige Bedingungen erweitert TODO
    $scope.isValidNumber = function(x) {
      return x == "" || (x % 1 === 0 && x > 0);
    }

    $scope.isNotEmpty = function(x) {
      return x != "";
    }


    $scope.isValidGrpNumber = function(x) {
      var valid = false;

      if ($scope.isValidNumber(x)) {
        var i;
        for (i = 0; i < $scope.hcGruppenDaten.length; i++) {
          if ($scope.gr.grpNr == $scope.hcGruppenDaten[i].grpNr
              && $scope.gr.fach == $scope.hcGruppenDaten[i].fach) {
            return false;
          }
        }
        valid = true;
      }
      return valid;
    }


    $scope.isValidDate = function(index) {

      if (index < $scope.gr.termine.length - 1) {
        if ($scope.gr.termine[index].date.getMonth() == $scope.gr.termine[index + 1].date.getMonth()) {
          return $scope.gr.termine[index].date.getDate() < $scope.termine[index + 1].date.getDate()
                  && $scope.gr.termine[index].date.getTime() < $scope.termine[index + 1].date.getTime();
        }
        return $scope.gr.termine[index].date.getTime() < $scope.gr.termine[index + 1].date.getTime();
      }

      return true;
    }

    $scope.isValidAnzTeilnehmer = function(anzTeiln) {
      return anzTeiln > 1 && anzTeiln < 10;
    }

    $scope.isValidStartTime = function(ngIndex) {

      var start = $scope.gr.termine[ngIndex].timeStart;
      var end = $scope.gr.termine[ngIndex].timeEnd;

      return start.getHour() < end.getHour();

    }

    $scope.isValidStartTimeComplete = function(index) {
      for (i = 0; i < $scope.termine.length; i++) {
        if (!$scope.isValidStartTime(i)) {
          return false;
        }
      }
      return true;
    }

    $scope.isValidDateComplete = function() {

      for (i = 0; i < $scope.termine.length; i++) {
        if (!$scope.isValidDate(i)) {
          return false;
        }
      }

      return true;
    }

    // TODO:
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    $scope.isValidRoom = function(room) {
      return true;
    }

    // TODO: Wenn alle Gruppen für dieses Fach bereits vorhanden -> ungültig
    $scope.isValidSubject = function(subject) {
      return true;
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Aktiviert/Deaktiviert den Speichern-Button
    $scope.isFilledCompleteErstellen = function() {
      return $scope.isValidDateComplete() && $scope.isValidStartTimeComplete()
              && $scope.isValidGrpNumber($scope.gr.grpNr);
    }


    $scope.isFilledCompleteBearbeiten = function() {
        return $scope.isFilledCompleteErstellen();
      }
      // ############################################################################################################



    // Button-klick Funktionen
    // ############################################################################################################

    // einen überflüssigen Termin aus der Auswahl löschen
    $scope.terminLoeschen = function(ngIndex) {
        $scope.gr.termine.splice(ngIndex, 1);
      }
      // Fügt einen weiteren Termin hinzu
    $scope.terminHinzufuegen = function() {
        var lastAppDate = $scope.gr.termine[$scope.termine.length - 1].date;
        var ndTemp = new Date(lastAppDate);
        ndTemp.setDate(lastAppDate.getDate() + 1);
        var newAppDate = new Date(ndTemp);
        var start = $scope.gr.termine[$scope.termine.length - 1].timeStart;
        var end = $scope.gr.termine[$scope.termine.length - 1].timeEnd;
        var app = new Appointment(newAppDate, start, end);
        $scope.gr.termine.push(app);
      }
      // Fügt eine neue Gruppe in die Tabelle ein -> TODO: Preconditions
    $scope.addGruppe = function() {

      // Zufällige Dozenten erzeugen -> Nur vorläufig
      $scope.gr.dozent = $scope.dozenten[genRdIndex($scope.dozenten)];
      $scope.gr.assistent = $scope.assistenten[genRdIndex($scope.assistenten)];

      // Abgabetermine erzeugen
      var term = getAppointments($scope.gr.termine);

      $scope.hcGruppenDaten.push({
        fach: $scope.gr.fach,
        grpNr: $scope.gr.grpNr,
        termine: term,
        kw: toStr(term),
        dozent: $scope.gr.dozent,
        assistent: $scope.gr.assistent,
        raum: $scope.gr.raum,
        minGr: $scope.gr.minGr,
        maxGr: $scope.gr.maxGr
      });
      autoscroller.erstellen = null;

      // Termine zurücksetzen
      $scope.gr.termine = resetAppValues();
    }


    // initialisiert das Popup mit den vorhandenen Werten
    $scope.initGruppeEdit = function(ngIndex) {
      indexGrEdit = ngIndex;
      $scope.gr.maxGr = $scope.hcGruppenDaten[ngIndex].maxGr;
      $scope.gr.termine = $scope.hcGruppenDaten[ngIndex].termine;
      $scope.gr.tag = $scope.hcGruppenDaten[ngIndex].tag;
      $scope.gr.startUhrzeit = $scope.hcGruppenDaten[ngIndex].startUhrzeit;
      $scope.gr.endUhrzeit = $scope.hcGruppenDaten[ngIndex].endUhrzeit;
      $scope.gr.raum = $scope.hcGruppenDaten[ngIndex].raum;

    }

    // Initialisert das popup mit den Gruppendetails mit den vorhandenen Werten
    $scope.initGruppeDetails = function(ngIndex) {
      $scope.gr.grpNr = $scope.hcGruppenDaten[ngIndex].grpNr;
      $scope.gr.termine = $scope.hcGruppenDaten[ngIndex].termine;
      $scope.gr.dozent = $scope.hcGruppenDaten[ngIndex].dozent;
      $scope.gr.assistent = $scope.hcGruppenDaten[ngIndex].assistent;
      $scope.gr.tag = $scope.hcGruppenDaten[ngIndex].tag;
      $scope.gr.raum = $scope.hcGruppenDaten[ngIndex].raum;
    }


    // Ändert den Tabelleneintrag für eine Gruppe anhand der Benutzereingaben
    $scope.editGruppe = function() {
      console.log($scope.indexGrEdit);
      var term = getAppointments($scope.gr.termine);
      $scope.hcGruppenDaten[indexGrEdit].anzTm = $scope.gr.anzTm;
      $scope.hcGruppenDaten[indexGrEdit].termine = term;
      $scope.hcGruppenDaten[indexGrEdit].kw = toStr(term);
      $scope.hcGruppenDaten[indexGrEdit].raum = $scope.gr.raum;
      console.log(term);

      // Termine zurücksetzen
      $scope.gr.termine = resetAppValues();
    }

    // Speichert den Index des zu loeschenden Gruppeneintrags
    $scope.initGruppeLoeschen = function(ngIndex) {
      indexGrLoeschen = ngIndex;
    }


    // Löscht den Gruppeneintrag in der Tabelle
    $scope.gruppeLoeschen = function() {
      $scope.hcGruppenDaten.splice($scope.indexGrLoeschen, 1);
      $scope.indexGrLoeschen = 0;

      // Modal schließen forcieren, bug über normalen Weg (data-dismiss-tag) TODO: FIX
      $('#gruppeLoeschen').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }


    // Initialsiert die Teilnehmerübersicht für die gewählte Gruppe
    // TODO: Wird noch um einige Funktionen erweitert
    $scope.initTmUebersicht = function(ngIndex) {
      tmGruppenService.setFach(vgservice.getFach());
      tmGruppenService.setGruppe($scope.hcGruppenDaten[ngIndex].grpNr);
    }


    // ############################################################################################################
  };

  // Controller bei der App "anmelden"
  app.controller("GruppenController", GruppenController);

  // Code sofort ausführen
}());
