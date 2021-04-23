Paxmatic-Process-View

## Einleitung
Dieses Projekt ist eine App mit welcher Geschäftsprozesse modelliert und dokumentiert werden können. Zusätzlich ermöglicht es Betriebsdokumente zu vewalten resp. zu verlinken.

Eine kurze Video-Instruktion dieser App ist unter diesem Link verfügbar: https://www.mycloud.ch/s/S00566BF462735363BF8FAFD466B60FDA8B84D61173

## Vorbereitung und Applikationsstart
GIT Repository clonen oder ZIP download

### Projekt installieren
Im Hauptverezeichnis *Diplomarbeit* in der CLI den Befehl `npm run install-both` ausführen.   
Damit werden die benötigten Pakete für den Express-Server- wie auch das Angular Frontend-Projekt installiert.

### MySQL-Datenbank starten für Start der App
1. Lokalen MySQL-Server starten und als root-user einloggen. 
2. anschliessend DB-Statement im File: "create-prod-db.sql" ausführen. Pfad: "Paxmatic-Process-View/src/mysql-scripts/create-prod-db.sql"

### Applikation starten
Mit dem Befehl `npm run start` in der CLI im *Hauptverzeichnis* wird der Server und das Frontend gestartet.   
Das Frontend kann nun im Browser unter http://localhost:4200/ aufgerufen werden

### Admin-User
Um in den Editor-Modus zu gelangen muss vorgängig das Passwort "salens" in der Angular-App eingegeben werden.

## TESTS
### Unit-Tests
Um die Unit-Tests im CLI zu starten, kann im Verzeichnis *Paxmatic-Process-View* der Befehl `npm run test` ausgeführt werden.   

### End2End-Tests
1. Falls Express-Server noch läuft, diesen beenden um den Port:8080 freizugeben.
2. Lokalen MySQL-Server als root-user starten.
3. Folgendes DB-Statement im File: "create-test-db.sql" ausführen. Pfad: Paxmatic-Process-View/src/mysql-scripts/create-test-db.sql
4. Um die End2End-Tests im CLI zu starten, kann im *Hauptverzeichnis* der Befehl `npm run e2e` ausgeführt werden.   

### Systemvoraussetzungen
- Node.js (Version 12 oder 14) inkl. npm
- Angular cli
- Chrome (für Tests benötigt)
- Mac OS X oder Linux   

### Troubleshooting
- Je nach installierter Version von mySQL ist eine andere Authentifizierungs-Methode erforderlich. Erscheint beim Starten des Servers ein Fehler bezüglich "Auth-Mode", dann muss im den beiden oben erwähnten SQL-Scripts der Abschnitt "with mysql_native_password" gelöscht werden.
- Für das Ausführen der End2End-Tests muss das npm-package "run-my-sql-file" Paket global oder lokal installiert sein. 
