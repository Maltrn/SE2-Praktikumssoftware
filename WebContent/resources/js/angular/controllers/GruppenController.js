/**
 * Managed die Veranstaltungen
 */
(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object, $http: holt JSON Object vom SpringMVC Backend -> folgt später
  var GruppenController = function($scope, autoscroller, vgservice, tmGruppenService, DBGruppService /*, $http*/ ) {


    // Locals
    // ############################################################################################################
    var indexGrLoeschen;
    var indexGrEdit;
    // ############################################################################################################


    $scope.termine = DBGruppService.term;
    $scope.grNummern = DBGruppService.grNummern;
    $scope.anzTmTeam = DBGruppService.anzTmTeam;
    $scope.startZeiten = [DBGruppService.timesStart[0], DBGruppService.timesStart[1], DBGruppService.timesStart[2]];
    $scope.endZeiten = [DBGruppService.timesEnd[0], DBGruppService.timesEnd[1], DBGruppService.timesEnd[2]];
    $scope.gruppen = DBGruppService.hcGruppenDaten;
    $scope.raeume = DBGruppService.raeume;



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
    $scope.gr.grpNr = DBGruppService.grNummern[0];
    $scope.gr.termine = $scope.termine;
    $scope.gr.dozent = DBGruppService.dozenten[0];
    $scope.gr.assistent = DBGruppService.assistenten[0];
    $scope.gr.raum = DBGruppService.raeume[0];
    $scope.gr.minGr = 0;
    $scope.gr.maxGr = 10;
    $scope.gr.anzTm = DBGruppService.anzTmTeam[2];

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
        for (i = 0; i < DBGruppService.hcGruppenDaten.length; i++) {
          if ($scope.gr.grpNr == DBGruppService.hcGruppenDaten[i].grpNr
              && $scope.gr.fach == DBGruppService.hcGruppenDaten[i].fach) {
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
          return $scope.gr.termine[index].date.getDate() < $scope.gr.termine[index + 1].date.getDate()
                  && $scope.gr.termine[index].date.getTime() < $scope.gr.termine[index + 1].date.getTime();
        }
        return $scope.gr.termine[index].date.getTime() < $scope.gr.termine[index + 1].date.getTime();
      }

      return true;
    }

    $scope.isValidAnzTeilnehmer = function(anzTeiln) {
      return anzTeiln > 1 && anzTeiln < 11;
    }

    $scope.isValidStartTime = function(ngIndex) {

      var start = $scope.gr.termine[ngIndex].timeStart;
      var end = $scope.gr.termine[ngIndex].timeEnd;

      return start.getHour() < end.getHour();

    }

    $scope.isValidStartTimeComplete = function(index) {
      for (i = 0; i < $scope.gr.termine.length; i++) {
        if (!$scope.isValidStartTime(i)) {
          return false;
        }
      }
      return true;
    }

    $scope.isValidDateComplete = function() {

      for (i = 0; i < $scope.gr.termine.length; i++) {
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
        return $scope.isValidDateComplete() && $scope.isValidStartTimeComplete();
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
        var ndTemp = DBGruppService.getDate(lastAppDate);
        ndTemp.setDate(lastAppDate.getDate() + 1);
        var newAppDate = DBGruppService.getDate(ndTemp);
        var start = $scope.gr.termine[$scope.termine.length - 1].timeStart;
        var end = $scope.gr.termine[$scope.termine.length - 1].timeEnd;
        var app = DBGruppService.getAppointment(newAppDate, start, end);
        $scope.gr.termine.push(app);
      }

      // Fügt eine neue Gruppe in die Tabelle ein
    $scope.addGruppe = function() {

      // Zufällige Dozenten erzeugen -> Nur vorläufig
      $scope.gr.dozent = DBGruppService.dozenten[DBGruppService.genRdIndex(DBGruppService.dozenten)];
      $scope.gr.assistent = DBGruppService.assistenten[DBGruppService.genRdIndex(DBGruppService.assistenten)];

      // Abgabetermine erzeugen
      var term = DBGruppService.getAppointments($scope.gr.termine);

      var gr = {};
      gr.fach = $scope.gr.fach;
      gr.grpNr = $scope.gr.grpNr;
      gr.termine = term;
      gr.kw = DBGruppService.toStr(term);
      gr.dozent = $scope.gr.dozent;
      gr.assistent = $scope.gr.assistent;
      gr.raum = $scope.gr.raum;
      gr.minGr = $scope.gr.minGr;
      gr.maxGr = $scope.gr.maxGr;

      if (!DBGruppService.addGruppe(gr)) {
        // Fehlermeldung -> TODO: implement
      }

      autoscroller.erstellen = null;

      // Termine zurücksetzen
      $scope.gr.termine = DBGruppService.resetAppValues();
    }


    // initialisiert das Popup mit den vorhandenen Werten
    $scope.initGruppeEdit = function(ngIndex) {
      indexGrEdit = ngIndex;
      $scope.gr.maxGr = DBGruppService.hcGruppenDaten[ngIndex].maxGr;
      $scope.gr.termine = DBGruppService.hcGruppenDaten[ngIndex].termine;
      $scope.gr.tag = DBGruppService.hcGruppenDaten[ngIndex].tag;
      $scope.gr.startUhrzeit = DBGruppService.hcGruppenDaten[ngIndex].startUhrzeit;
      $scope.gr.endUhrzeit = DBGruppService.hcGruppenDaten[ngIndex].endUhrzeit;
      $scope.gr.raum = DBGruppService.hcGruppenDaten[ngIndex].raum;

    }

    // Initialisert das popup mit den Gruppendetails mit den vorhandenen Werten
    $scope.initGruppeDetails = function(ngIndex) {
      $scope.gr.grpNr = DBGruppService.hcGruppenDaten[ngIndex].grpNr;
      $scope.gr.termine = DBGruppService.hcGruppenDaten[ngIndex].termine;
      $scope.gr.dozent = DBGruppService.hcGruppenDaten[ngIndex].dozent;
      $scope.gr.assistent = DBGruppService.hcGruppenDaten[ngIndex].assistent;
      $scope.gr.tag = DBGruppService.hcGruppenDaten[ngIndex].tag;
      $scope.gr.raum = DBGruppService.hcGruppenDaten[ngIndex].raum;
    }


    // Ändert den Tabelleneintrag für eine Gruppe anhand der Benutzereingaben
    $scope.editGruppe = function() {
      var term = DBGruppService.getAppointments($scope.gr.termine);

      var gr = {};
      gr.anzTm = $scope.gr.anzTm;
      gr.termine = $scope.gr.termine;
      gr.kw = DBGruppService.toStr(gr.termine);
      gr.raum = $scope.gr.raum;

      if(!DBGruppService.editGruppe(indexGrEdit, gr)){

        // Fehlermeldung -> TODO: implement
      }

      // Termine zurücksetzen
      $scope.gr.termine = DBGruppService.resetAppValues();
    }

    // Speichert den Index des zu loeschenden Gruppeneintrags
    $scope.initGruppeLoeschen = function(ngIndex) {
      indexGrLoeschen = ngIndex;
    }


    // Löscht den Gruppeneintrag in der Tabelle
    $scope.gruppeLoeschen = function() {

      if(!DBGruppService.gruppeLoeschen(indexGrLoeschen)){
        // TODO: Fehlermeldung
      }
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
      tmGruppenService.setGruppe(DBGruppService.hcGruppenDaten[ngIndex].grpNr);
    }
    // ############################################################################################################
  };

  // Controller bei der App "anmelden"
  app.controller("GruppenController", GruppenController);

  // Code sofort ausführen
}());
