# Eschomat
**Herzlich willkommen beim Eschomat! 👋**

Wir möchten dir und allen Bürger*innen Eschborns, insbesondere den Jung- und Erstwähler*innen, eine Anlaufstelle für die Kommunalwahl am 14. März 2021 bieten.

Verschaffe dir mit dem Eschomat in wenigen Minuten einen Eindruck, welche Parteien deine Interessen vertreten.

Anschließend empfehlen wir dir einen Blick in die Wahlprogramme 📚 der Parteien zu werfen, weil der Eschomat natürlich nicht allen Ideen der Parteien gerecht werden kann.

Aber nun erstmal viel Spaß mit dem Eschomat! 👍
## Erste Schritte
Hier findest du Informationen wie du die ersten Schritte mit dem Quellcode machen kannst.

**Vorraussetzungen**  
Um mit der Anwendung arbeiten zu können benötigst du eine aktuelle Version von NodeJS.
Nachdem du NodeJS (mit NPM) installiert hast, führe `npm install` im Hauptverzeichnis des Eschomat aus, um die benötigten Abhängigkeiten zu installieren.

**Entwicklungs-Server**  
Führe `ng serve` in einer Kommandozeile im Hauptverzeichnis des Eschomat aus um einen Entwicklungsserver zu starten. Navigiere zu `http://localhost:4200/`. Die Anwendung läd sich selbständig neu wenn du Änderungen am Quellcode vornimmst.

**Build**  
Führe `ng build` in einer Kommandozeile im Hauptverzeichnis aus um das Projekt zu bauen. Die transpilierten Dateien werden im `dist/`-Verzeichnis gespeichert. Nutze den Parameter `--prod` für eine optimierte Ausgabe.

**Statische Pre-Rendered Version**  
Wir nutzen die prerendered Version für den Eschomat, um die bestmögliche Performance zu ermöglichen und die Seite technologisch so einfach wie möglich zu belassen. Um das Ergebnis zu bekommen führe einfach `npm run prerender`aus.