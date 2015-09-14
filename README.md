# SE2-Praktikumssoftware

Der SE2-Projekt Ordner mit allen nötigen Libaries und der vorgesehenen Ordnerstruktur.
<br/>
<br/>
Frontend only Demo (Angestellten-Panel) -> http://bit.ly/1JwbrTr <- HAW PUB
<br/>
<br/>
Mit A-Kennung anmelden und irgendwas ins Login eintragen.<br/>
Download -> http://bit.ly/1IYzKZD <- HAW PUB


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
3. A-Kennung in der Java-Klasse [DBConnector](/src/se2/praktikum/projekt/controllers/DBConnector.java) eintragen.
4. Projekt ausführen.
6. Rest sollte selbsterkärend sein.

Tutorials
=========
1.  Spring MVC -> https://github.com/jnk111/SpringMVCTutorial
2.  AngularJS -> https://github.com/jnk111/AngularTutorialGithubViewer
