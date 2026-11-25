# CLAUDE.md

Det här repot är en exempelsajt för CompliantHQ: en webbplats för ett påhittat företag, publicerad på https://demo.complianthq.ai. Den används för att visa vad CompliantHQ hittar när en webbplats skannas.

## Viktigast: bristerna är avsiktliga

Sajten ska ha brister i cookies, tillgänglighet och integritetspolicy. Exempel är spårning som laddas utan samtycke, bilder utan alt-text, formulärfält utan etiketter, text med svag kontrast och en tunn integritetspolicy.

- Rätta aldrig en sådan brist på eget initiativ.
- Föreslå inte rättningar när du ändå arbetar i filen.
- Ändra en brist bara när den du arbetar med uttryckligen ber om det.
- Är du osäker på om något är en avsiktlig brist eller ett misstag frågar du.

## Regler

- Ren HTML och CSS. Inget byggverktyg, inget ramverk och inget CMS.
- Företaget är påhittat. Inga riktiga namn, adresser, telefonnummer eller organisationsnummer.
- Varje sida har `<meta name="robots" content="noindex">`.
- Filerna `CNAME` och `.nojekyll` ska ligga kvar orörda.
- Repot är publikt. Lägg aldrig lösenord, nycklar eller kunduppgifter här.
- Allt som pushas till `main` publiceras direkt. Pusha bara när den du arbetar med har bett om det.

## Sammanhang

Uppdraget som sajten hör till står i CompliantHQ-repot, i `docs/introfilm/uppdrag.md`. Läs det innan du börjar arbeta med sajten.

- Det här repot ligger i `~/dev/node/complianthq-demo`, och CompliantHQ-repot bredvid det, i `~/dev/node/complianthq`. Uppdraget finns alltså i `~/dev/node/complianthq/docs/introfilm/uppdrag.md`.
- Manus och anteckningar om filmen skrivs i `docs/introfilm/` i CompliantHQ-repot, aldrig här. Allt i det här repot publiceras på demo.complianthq.ai, också filer som inte är sidor.
