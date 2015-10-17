# SE2-Praktikumssoftware

Der SE2-Projekt Ordner mit allen nötigen Libaries und der vorgesehenen Ordnerstruktur.

Allgemeine Info
===============
<li><strong>Zu Beachten (Für diejenigen die noch keine Remoteverbindung eingerichtet haben):</strong>
 <ul>
  <li>Der Ordner backend_resources muss noch angelegt werden (Pfad: siehe .gitignore)</li>
  <li>Die für den Ordner Datei liegt in der Dropbox im Ordner BackendConfigs</li>
  <li>Nur die beiden Zeilen A-Kennung und Passwort sind zu beachten</li>
  <li>Deine A-Kennung und ein Passwort jeweils dort eintragen (ohne Leerzeichen)
<li>Der Datenbankzugriff wird damit gewährleistet</li>
 </ul>
</li>

Aktuell (17.10.2015) - Letzter Commit
=====================================
<li>Angular-Schnittstellen für erste Komponente (Veranstaltungsservice):
 <ul> 
  <li>[Leistungenservice](/WebContent/resources/js/angular/services/database/DBLeistService.js) - Zeile 201 - 247</li>
  <li>[Loginservice](/WebContent/resources/js/angular/services/database/DBLoginService.js) - Zeile 18 - 49</li>
 </ul>
</li>
<li>Klasse [Note](/src/se2/praktikum/projekt/models/leistungen/Note.java) ergänzt.</li>
<li>[Loginservice](/src/se2/praktikum/projekt/services/loginservice/LoginController.java) korrigiert</li>


Aktuell (14.10.2015) - Letzter Commit 
=====================================
<li>Weitere [POJO-Klassen](/src/se2/praktikum/projekt/models/)  hinzufügt</li>
<li>Spring MVC-Schnittstellen für nächste Komponenten (Loginservice, Leistungenservice):
 <ul>
  <li>[Veranstaltungsservice](/WebContent/resources/js/angular/services/database/DBVeranstService.js) - Zeile 155 - 264</li>
  <li>[Gruppenservice](/WebContent/resources/js/angular/services/database/DBGruppService.js) - Zeile 289 - 365</li>
  <li>[Gruppenteilnehmerservice](/WebContent/resources/js/angular/services/database/DBGruppTmService.js) - Zeile 162 - 194</li>
</li>


Aktuell (13.10.2015)
=====================================

<li>Die Frontend-Backend-Kommunikation für den Veranstaltungsservice sollte jetzt soweit debuggt sein.</li>
<li>Die Klasse AbstrVeranstaltung enthält aus Performancegründen keine Gruppenliste, da dann für jede Veranstaltung in der Übersicht die Gruppenliste geholt werden müsste, obwohl dies evtl garnicht nötig ist (z. B. Man klickt nicht weiter zur Gruppenübersicht). Es reicht diese Information in der Datenbank gespeichert zu haben.
<li>Gleiches bei Klasse Gruppe (keine Liste von Teams)
<li>[POJO-Klassen](/src/se2/praktikum/projekt/models/) korrigiert</li>
<li>Angular-Schnittstellen für erste Komponente (Veranstaltungsservice):
 <ul> 
  <li>[Veranstaltungsservice](/WebContent/resources/js/angular/services/database/DBVeranstService.js) - Zeile 155 - 264</li>
  <li>[Gruppenservice](/WebContent/resources/js/angular/services/database/DBGruppService.js) - Zeile 289 - 365</li>
  <li>[Gruppenteilnehmerservice](/WebContent/resources/js/angular/services/database/DBGruppTmService.js) - Zeile 162 - 194</li>
 </ul>
</li>
<li>Spring MVC-Schnittstellen für erste Komponente (Veranstaltungsservice):
 <ul>
  <li>[Veranstaltungsservice](/src/se2/praktikum/projekt/services/veranstaltungsservice/VeranstaltungsCtrlAdmin.java)</li>
 </ul>
</li>

Aktuell (08.10.2015)
====================

<li>[POJO-Klassen](/src/se2/praktikum/projekt/models/) hinzugefügt</li>
<li><strong>Zu Beachten (Für diejenigen die noch keine Remoteverbindung eingerichtet haben):</strong>
 <ul>
  <li>Der Ordner backend_resources muss noch angelegt werden (Pfad: siehe .gitignore)</li>
  <li>Die für den Ordner Datei liegt in der Dropbox im Ordner BackendConfigs</li>
  <li>Nur die beiden Zeilen A-Kennung und Passwort sind zu beachten</li>
  <li>Deine A-Kennung und ein Passwort jeweils dort eintragen (ohne Leerzeichen)
<li>Der Datenbankzugriff wird damit gewährleistet</li>
 </ul>
</li>

Aktuell (05.10.2015)
====================
<li>Bugs vom heutigen Meeting behoben (z. B. Filter und Index)</li>
<li>Angular-Schnittstellen für erste Komponente (Veranstaltungsservice):
 <ul> 
  <li>[Veranstaltungsservice](/WebContent/resources/js/angular/services/database/DBVeranstService.js) - Zeile 103 - 177</li>
  <li>[Gruppenservice](/WebContent/resources/js/angular/services/database/DBGruppService.js) - Zeile 325 - 369</li>
  <li>[Gruppenteilnehmerservice](/WebContent/resources/js/angular/services/database/DBGruppTmService.js) - Zeile 111 - 131</li>
 </ul>
</li>
<li>Spring MVC-Schnittstellen für erste Komponente (Veranstaltungsservice):
 <ul>
  <li>[Veranstaltungsservice](/src/se2/praktikum/projekt/services/veranstaltungsservice/VeranstaltungsCtrlAdmin.java)</li>
 </ul>
</li>
<li>Weitere Info:
 <ul>
   <li> Vorerst sind nur die Codeteile der Module (eben aufgeführt) mit der Überschrift "SCHNITTSTELLE" wichtig</li>
   <li> Tipp: Im [Veranstaltungsservice (angular)](/WebContent/resources/js/angular/services/database/DBVeranstService.js) ist ein Codebeispiel (siehe Methode "initPraktika(sem, fachbereich)" -> Zeile 106)</li>
 </ul>
<li>


Aktuell (25.09.2015)
====================
<li>[Schnittstellen-Beispiel](/WebContent/resources/js/angular/services/database/DBVeranstService.js) hinzugefügt</li>

Aktuell (10.09.2015)
====================
<li>Datenbank-Beispiel hinzugefügt (Funktioniert nur über Eclipse-Projekt, Anleitung weiter unten)</li>
<li>Layout angepasst, Gruppenkonfigution über Veranstaltungen erreichbar</li>
<li>Leistungen (Note/PVL) eintragen implementiert </li>
<li>weitere Form Validations hinzugefügt</li>

Aktuell (09.09.2015)
====================
<li>Layout und Funktionen Gruppenverwaltung verändert</li>
<li>Datepicker für Terminverwaltung hinzugefügt</li>
<li>Form Validations hinzugefügt</li>
<li>Gruppenteilnehmerübersicht hinzugeügt</li> 
<li>Filtern über Searchbox möglich</li> 

Setup
=====
1.  Eclipse Luna EE (normales Luna reicht nicht) herunterladen und starten.
2.  Clone diese Reposity oder lade die Zip-Datei herunter.
3.  In Eclipse: File -> Import -> Existing Project into Workspace -> 
4.  "Select Root Directory" anwählen
5.  SE2-Praktikumssoftware-Ordner auswÃ¤hlen
6.  Finish klicken

Anleitung für DB-Beispiel
=========================
1. Projekt in Eclipse importieren.
2. Sicherstellen das Apache-Tomcat installiert und in Eclipse konfiguriert ist.
3. A-Kennung in der Java-Klasse [DBConnector](/src/se2/praktikum/projekt/dbms/DBConnector.java) eintragen.
4. Projekt ausführen.
6. Rest sollte selbsterkärend sein.

Tutorials
=========
1.  Spring MVC -> https://github.com/jnk111/SpringMVCTutorial
2.  AngularJS -> https://github.com/jnk111/AngularTutorialGithubViewer

