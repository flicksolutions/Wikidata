Hier meine kurzen Notizen zum Kurs:

Im Code befindet sich ein kleines Beispiel zu LOD

# Arbeiten mit Omeka
Anlegen von Karten, Anpassung der Darstellung und Navigation.

## Items
### Items händisch anlegen

#### Item-Set anlegen
Seite: http://130.92.252.28/admin/item-set/add

Mittels eines Item-Set können Items auf einer hohen Ebene unterteilt werden. Z.B. ein Item-Set pro Seite, pro Projekt, etc.

Beliebige Eigenschaften können für ein Item-Set gesetzt werden.

![35ab2a94378043dc6e8b1882b22eac2d.png](35ab2a94378043dc6e8b1882b22eac2d.png)

Sichtbarkeit und Zugriffe können geregelt werden.

#### Resource templates

Schema oder Vorlage für einzelne Items. Ist da um Items zu vereinheitlichen.

#### Items anlegen

Seite: http://130.92.252.28/admin/item/add

Items sind die atomare Einheit in Omeka. Es ist der Datenbestand um die sich das Projekt dreht.

##### Values / Werte
Werte für Felder können gesetzt werden. Eine spezielle Rolle kommt _Title_ und _Description_ zu, welche die Standardfelder in Omeka sind und so immer vorhanden sind.

##### Media
Medien können mit dem Item verlinkt werden, die Beinhaltet nicht nur Bilder sondern alle Arten von Medien.

##### Mapping

Im Mapping-Reiter können Marker für ein Item gesetzt werden. Traditionell ist dies ein Marker pro Item.

### CSV Import
Der CSV-Import ermöglicht durch das importieren von CSV-Dateien das anlegen von vielen Items gleichzeitig. Dabei werden die Werte in den Zeilen zu Werten gemappt.
## Seite
_/item_, _/item-set_, _/map-browse_ und die Suchseite sind immer Teil einer Seite und müssen nicht erstellt werden. Die Seiten der angelegten Items ebenso. Unter _Pages_ erstellt man also nur Seiten, welche Zusatz- oder Meta-Informationen bieten. Eine *Startseite*, *Über uns* oder ähnliches.

### Pages

Seiten werden erstellt indem man Content-Blöcke hinzufügt. Auf die einzelnen Blöcke wird nicht eingegangen.

### Navigation

In der Navigation wird festgelegt, welche Seite in der Navigation erscheinen und in welcher Reihenfolge

### Resources

Ressources bestimmt, welche Items, bzw. Item-Sets der Seite zugänglich sind! Die geschieht mittels einer Search-query. (Anfrage an die Datenbank welche Items zurückgibt)

### Theme

Wie die Website tatsächliche aussieht und was genau angezeigt wird, wird vom Theme bestimmt.

### Settings

Einstellungen für Module und Allgemeines werden in den _Settings_ getroffen. 



# Arbeit mit Linked Open Data am Beispiel von Wikidata
"**Wikidata** is a free, collaborative, multilingual, secondary database, collecting structured data to provide support for Wikipedia, Wikimedia Commons, the other wikis of the [Wikimedia movement](https://www.wikidata.org/wiki/Help:Wikimedia "Help:Wikimedia"), and to anyone in the world." -- wikidata.org

Die Datenbank von Wikidata hat eine Schnittstelle an die man sich mit SPARQL-Anfragen wenden kann und Daten im JSON-Format zurückgeliefert werden. Diese können dann weiterverarbeitet werden. Ein Beispiel findet Ihr in diesem Repo (oder auf [repl.it](https://repl.it/join/vhrspsco-flicks) von der Abfrage: https://w.wiki/7E7
