# Prosta gra zgadywanka do nauki React JS

## Dzień 2 - Zadania
 1. Zainicjować stan komponentu następującymi wartościami:
 - ilePol: 3,
 - ileRund: 3,
 - gdzieSchowane: null,
 - kliknietePole: null,
 - blokada: false, 
 - runda: 1,
 - czyKoniec: false,
 - punkty: 0,
 - seriaTrafien: 0
 
 2. Przy kliknieciu na Pole ma zostać wywołana odpowiednia metoda `this.graj`.
    
 3. Dopisać instrukcje wrunkową `if` która uniemożliwi wykonanie kodu metody this.graj jeżeli w stanie komponentu zmienna `czyKoniec` jest równa true.

 4. Przy trafieniu za kazdym razem ma się wyświetlać inny animowany gif. Wybierz z internetu 3-5 różnych gifów, zapisz je do katalogu public \
    i zmodyfikuj komponent `Pole` dodając kod wyświetlający losowo gify.
 
 5. Wybieranie liczby pól. Dodaj kod html wyświetlający element `select` z opcjami od 3 do 5 pól.
    
 6. Uzupełnij metodę `this.ustawLiczbePol` o kod który zapiszę wybraną przez użytkownika liczbę kafli w zmiennej `ilePol`

 7. Wybieranie liczby rund. Dodaj kod html wyświetlający element `input [type=number]` który pozwoli użytkownikowi wybrac ile rund ma trwać rozgrywka.

 8. Uzupełnij metodę `this.ustawLiczbeRund` o kod który zapiszę wybraną przez użytkownika liczbę rund w zmiennej `ileRund`
