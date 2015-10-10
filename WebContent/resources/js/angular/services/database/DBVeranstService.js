/**
 * Schnittstelle und Service für Datenbankinteraktion mit Spring MVC
 * Vorerst Hardcoded Daten -> später dynamische Ermittlung durch SpringMVC
 **/
(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBVeranstService = function($http) {


    // POJO-Klassen
    // ====================================================================================

    function Fach(fachKuerzel){

      this.fachKuerzel = fachKuerzel;
      this.fachBezeichnung = null;
      this.fachBereich = null;
      this.semester = null;
    }

    function Angestellter(vorname, nachname){

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

    function Veranstaltung(fach, prof, anzTm, maxTm, minTm, anzGr, maxGr){

      this.fach = fach;
      this.professor = prof;
      this.anzTm = anzTm;
      this.maxTm = maxTm;
      this.minTm = minTm;
      this.anzGr = anzGr;
      this.maxGr = maxGr;
    }

    function MAID(id){

      this.id = id;

    }

    function EMail(email){
      this.email = email;
    }

    function PLZ(plz){
      this.plz = plz;
    }

    function Adresse(strasse, hausNr, plz, stadt, land){

      this.strasse = strasse;
      this.hausNr = hausNr;
      this.plz = plz;
      this.stadt = stadt;
      this.land = land;
    }

    // Helper
    // ====================================================================================

      var sucheVA = function(fach){

        for(i = 0; i < hcVeranstaltungsDaten.length; i++){
          if(hcVeranstaltungsDaten[i].fach.fachKuerzel == fach.fachKuerzel){
            return i;
          }
        }
        return -1;
      }

      var getFachbereich = function(){
        return fachbereich;
      }

      var getSemester = function(){
        return sem;
      }

      var getAngesteller = function(vollerName){

        var name = vollerName.split(" ");
        var vorname = name[0];
        var nachname = name[1];
        var prof = new Angestellter(vorname, nachname);
        prof.vollerName = vollerName;

        return prof;

      }


    // Locls
    // ####################################################################################
    var semester = [1, 2, 3, 4, 5, 6];
    var fachbereiche = ["AI", "TI", "WI"];

    var fachbereich = fachbereiche[0];
    var sem = semester[0];

    var url = "http://localhost:8080/SE2-Praktikumssoftware/"; // URL um Backend anzusprechen
    var veranstaltungen = []; // Hier werden die ermittelten Daten temporär gespeichert um schnelles Anzeigen zu gewährleisten
                              // Ersetzt HC-Gruppendaten
    var error = false; // Flag zur Fehlererkennung
    // ####################################################################################


    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ====================================================================================

    var gka = new Fach("GKAP");
    var ad = new Fach("ADP");
    var bs = new Fach("BSP");
    var se = new Fach("SEP1");
    var bw = new Fach("BWP2");

    var id = new MAID(10);
    var plz = new PLZ(11111);
    var email = new EMail("test@test.de");
    var gebDatum = new Date();
    var adresse = new Adresse("Straße", 7, 1111, "Stadt", "Land");
    var padberg = new Angestellter("Julia", "Padberg");
    var kleine = new Angestellter("Martin", "Kleine");
    var huebner = new Angestellter("Martin", "Huebner");
    var zukunft = new Angestellter("Olaf", "Zukunft");
    var gerken = new Angestellter("Wolfgang", "Gerken");

    var gkap = new Veranstaltung(gka, padberg, 60, 80,10, 6, 10);
    var adp = new Veranstaltung(ad, kleine, 50, 60, 10, 6, 10);
    var bsp = new Veranstaltung(bs, huebner, 70, 80, 10, 6, 10);
    var sep = new Veranstaltung(se, zukunft, 0, 80, 10, 6, 10);
    var bwp = new Veranstaltung(bw, gerken, 50, 80, 10, 6, 10);


    // Array aus Veranstaltungsobjekten
    var hcVeranstaltungsDaten = [gkap, adp, bsp, sep, bwp];
    // ====================================================================================


    // SCHNITTSTELLE
    // #########################################################################################################################

    // TODO: Diese Methoden müssen implementiert/ergänzt werden
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Beispiel für eine implementierte Operation der Schnittstelle -> Alle Pflichtpraktika aus der Datenbank ermitteln

    // Alle Pflichtpraktika zu den übergebenen Parametern ermitteln
    // Ruft Backend-Schnittstelle auf und übergibt die Parameter
    // Ermittelte Pfichtpraktika, werden in Array gespeichert
    // Diese werden dann automatisch in der View sichtbar
    var initPraktika = function(sem, fachbereich) {


      // JSOM Data
      var args = [sem, fachbereich];

      $http.post(url+"pflichtpraktika", angular.toJson(args)).
        // Funktion, falls gültige Daten zurückkommen
      then(function(response) {
          // Daten aus dem Response-Object in das Veranstaltungen-Array pushen
          for (i = 0; i < response.data.length; i++) {
            var data = response.data;
            veranstaltungen.push({ /* Veranstaltungsobjekt aus dem Daten-Array */ }); // ergänzen
          }
        },
        // Funktion bei Fehler
        function(response) {
          error = true; // Setze error-flag, dass von der view abgefragt wird
        });
    }


    // Alle WP zu den übergebenen Parametern ermitteln
    // Ruft Backend-Schnittstelle auf und übergibt die Parameter
    // Ermittelte WP, werden in Array gespeichert
    // Diese werden dann automatisch in der View sichtbar TODO: View implementieren
    var initWP = function(sem, fachbereich){

      // TODO: Precondition: mindestens Semster 4

      // url = wp;
      // siehe initPraktika

    }

    // Alle PO zu den übergebenen Parametern ermitteln
    // Ruft Backend-Schnittstelle auf und übergibt die Parameter
    // Ermittelte WP, werden in Array gespeichert
    // Diese werden dann automatisch in der View sichtbar TODO: View implementieren
    var initPO = function(sem, fachbereich){
      // TODO: Precondition: mindestens Semster 5

      // url = po
      // siehe initPraktika

    }

    // Speichert eine Veranstaltung in der Datenbank
    // TODO: implement
    function addVeranstaltungDB(veranstaltung) {

      

      console.log(veranstaltung.professor);
      veranstaltung.professor.type = "Professor";
      var obj = angular.toJson(veranstaltung);
      console.log(obj);
      $http.post(url+"vErstellen", angular.toJson(veranstaltung))
      .then(function(){
        // Prüfe ob Daten eingefügt
        return true;  // Gibt true zurück, wenn Speicherung erfolgreich
      },
      function(){
        return false;
      });

      return true; // Vorerst nur true zurückgeben, darunterliegender Code nicht betrachtet

    }

    // Editiert eine Veranstaltung in der Datenbank
    // Editierte Veranstaltung wird dem Backend übergeben (Json-Format)
    // View wird automatisch aktualisiert
    function editVeranstaltungDB(veranstaltung){

      // url = vBeabeiten
      return true;
    }

    // Loescht eine Veranstaltung aus der Datenbank
    // zu löschende Veranstaltung wird dem Backend übergeben (Json-Format)
    // view wird automatisch aktualisiert
    function loescheVeranstaltungDB(veranstaltung) {

      // url = vLoeschen
      return true;
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    // Speichert eine neue Veranstaltung
    var addVeranstaltung = function(veranstaltungsInfo) {

      var profname = va.dozent;
      var fach = new Fach(veranstaltungsInfo.fach);
      fach.semester = veranstaltungsInfo.semester;
      fach.fachBereich = veranstaltungsInfo.fachbereich

      var prof = getAngesteller(profname);

      var veranstaltung = new Veranstaltung(fach, prof, va.curr, va.max, va.min, 6, 10);

      //  Erst Eintrag in die Datenbank einfügen
      // -> Wenn nicht erfolgreich -> false
      if (!addVeranstaltungDB(veranstaltung)) {
        return false;
      }else{ // Dann Tabelle aktualisieren
        hcVeranstaltungsDaten.push(veranstaltung); // Erst Tabelle aktualisieren
        return true;
      }


    }

    // Editiiert eine vorhndene Veranstaltung
    var editVeranstaltung = function(index, va){

      var profname = va.dozent;
      var prof = getAngesteller(profname);
      var fach = hcVeranstaltungsDaten[index].fach
      var curr = hcVeranstaltungsDaten[index].anzTm;
      var max = va.max;
      var min = va.min;
      var anzGr = hcVeranstaltungsDaten[index].anzGr;
      var maxGr = hcVeranstaltungsDaten[index].maxGr;
      var veranstaltung = new Veranstaltung(fach, prof, curr, max, min, anzGr, maxGr);

      console.log(max);

      if(!editVeranstaltungDB(va)){
        return false;
      }else{
        hcVeranstaltungsDaten[index] = veranstaltung;
        return true;
      }
    }

    // Loescht eine vorhandene Veranstaltung
    var loescheVeranstaltung = function(fach){

      var va = {};                  // Veranstaltung initialisieren
      var index = sucheVA(fach);    // Suche Index der VA

      if(index > -1){
        va = hcVeranstaltungsDaten[index];  // Weise VA zu
      }else{
        return false;
      }

      if(!loescheVeranstaltungDB(va)){
        return false;
      }else{
        hcVeranstaltungsDaten.splice(index, 1);
      }
    }


    // #########################################################################################################################

    // Gebe dieses Object zurück und mache die Schnittstelle zugänglich für Client
    // -----------------------------------------------------------------------------------
    return {
      semester: semester,
      fachbereiche: fachbereiche,
      addVeranstaltung: addVeranstaltung,
      editVeranstaltung: editVeranstaltung,
      hcVeranstaltungsDaten: hcVeranstaltungsDaten,
      loescheVeranstaltung: loescheVeranstaltung,
      sucheVA: sucheVA,
      getFachbereich: getFachbereich,
      getSemester: getSemester,
      initPraktika: initPraktika,
      initWP: initWP,
      initPO: initPO
    };
    // -----------------------------------------------------------------------------------
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBVeranstService", DBVeranstService);

  // Code sofort ausführen
}());
