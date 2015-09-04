/**
 * Service um zwischen Gruppencontroller und TMUebersichtController zu vermitteln
 *
 * TODO: Wird erst implementiert, wenn wir eine reale Datenbank haben
 *
 */
 (function(){

   // Hauptapp referenzieren damit Service sichtbar wird
   var app = angular.module("SE2-Software");

   // Servicedefinition
   var tmGruppenService = function($document){

   // Service bei der Hauptapp als "Service" über factory-Methode anmelden
   app.factory("tmGruppenService", tmGruppenService);

 // Code sofort ausführen
 }());
