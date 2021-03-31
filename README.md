Paxmatic-Process-View

## Einleitung
Dieses Projekt ist eine App mit welcher Geschäftsprozesse modelliert und dokumentiert werden können. Zusätzlich ermöglicht es Betriebsdokumente zu vewalten resp. zu verlinken.
  

## Vorbereitung und Applikationsstart
GIT Repository clonen oder ZIP download

### Projekt installieren
Im Hauptverezeichnis *Diplomarbeit* in der CLI den Befehl `npm run install-both` ausführen.   
Damit werden die benötigten Pakete für den Express-Server- wie auch das Angular Frontend-Projekt installiert.

### MySQL-Datenbank starten für Start der App
Lokalen MySQL-Server starten und anschliessend folgendes DB-script im Angular-Projekt ausführen: "create-prod-db.sql"

### Applikation starten
Mit dem Befehl `npm run start` in der CLI im *Hauptverzeichnis* wird der Server und das Frontend gestartet.   
Das Frontend kann nun im Browser unter http://localhost:4200/ aufgerufen werden

### Admin-User
Um in den Editor-Modus zu gelangen muss vorgängig das Passwort "salens" in der Angular-App eingegeben werden.

## TESTS
### Unit-Tests
Um die Unit-Tests im CLI zu starten, kann im Verzeichnis *Paxmatic-Process-View* der Befehl `npm run test` ausgeführt werden.   

### End2End-Tests
Lokalen MySQL-Server starten und anschliessend folgendes DB-script im Angular-Projekt ausführen: "create-test-db.sql"
Um die End2End-Tests im CLI zu starten, kann im *Hauptverzeichnis* der Befehl `npm run e2e` ausgeführt werden.   

### Systemvoraussetzungen
- Node.js (Version 12 oder 14) inkl. npm
- Angular cli
- Chrome (für Tests benötigt)
- Mac OS X oder Linux   

