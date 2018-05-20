# Sygnet - propozycja modelu ekonomicznego

Wersja 1.2 (20/05/2018)

*W zakresie tokenów emitowanych poprzez ICO powszechnie obowiązujące podejście jest następujące: token przepływa z portfela beneficjenta usługi do portfela dawcy usługi. To podejście ma fundamentalną wadę, która radykalnie utrudnia adopcję: potrzebujemy skłonić potencjalnego biorcę usługi do nabycia tokenu zanim ma on szansę z niej skorzystać. Proponowany przez nas model ekonomiczny jest zupełnie inny: token przepływa do portfela dawcy z puli inflacyjnej, a portfel biorcy pozostaje nienaruszony. Oznacza to, że usługa w swojej podstawowej wersji jest oferowana za darmo, co w oczywisty sposób niweluje barierę wejścia dla nowych użytkowników.*

## 1. Kto jest uczestnikiem modelu?

W systemie Sygnet mamy trzy rodzaje uczestników:

- Dawca informacji (służącej do weryfikacji tożsamości osoby K),
- Biorca informacji (który potrzebuje zweryfikować osobę K),
- Osoba K, której dotyczy informacja i która jest przedmiotem weryfikacji.

Zakładamy, że model ekonomiczny powinien dotyczyć tylko pierwszych dwóch typów uczestników, tj. dawcy i biorcy informacji, natomiast trzeci uczestnik, tj. osoba K, nie powinna brać udziału w tym modelu, ponieważ jest ona tylko przedmiotem transakcji (a nie podmiotem), a jej główną motywacją jest tylko to, żeby proces weryfikacji jej tożsamości był szybki i wygodny.

## 2. Cel modelu

Jest oczywiste, że skoro kierunek przepływu korzyści w systemie Sygnet jest od dawcy informacji do biorcy informacji, to głównym celem funkcjonowania tokenu jest motywowanie dawców informacji do aktywnej partycypacji w systemie.

Z punktu widzenia biznesowego chcemy spełnić następujące kryteria:

1. Token musi być postrzegany jako warty posiadania, tj. jego posiadanie powinno rodzić wymierne korzyści i tych korzyści powinno być tym więcej, im więcej mamy tego tokenu.
2. Sposób działania tokenu powinien wspierać masową adopcję systemu. Idealnie by było żeby użytkownik mógł zacząć używać systemu bez konieczności wcześniejszego zakupu tokenu.
3. Używanie tokenu powinno być uwolnione od ryzyka cenowego. Większość użytkowników chce używać tokenu w celu uzyskania usługi, a nie spekulować na jego wartości.
4. Token powinien w większym stopniu nagradzać tych dawców informacji, którzy mają większą wiarygodność i tym samym informacja dostarczona przez nich jest cenniejsza niż informacja z innych źródeł.

## 3. Alternatywne podejścia do konstrukcji tokenu

W zakresie wyboru modelu ekonomicznego dla systemu Sygnet widzimy trzy możliwe podejścia.

#### 3.1 Token dywidendowy 

Najbardziej oczywistą metodą jest uzyskiwanie prowizji w tradycyjny sposób, tj. poprzez pobieranie od biorców informacji przedpłaty (w walucie fiat) na określoną liczbę weryfikacji tożsamości, a następnie rozliczanie przychodów otrzymanych w ten sposób z dawcami informacji.

Wówczas uzyskujemy model, w którym wszystkie rozliczenia są w fiat, a tokeny służą jedynie jako system ewidencyjny do dystrybucji korzyści z ich posiadania (np. rabaty albo dywidendy z naszych zysków).

#### 3.2 Token płatniczy

Drugą opcją jest zastosowanie modelu, który jest obecnie dominującym rozwiązaniem w ICO. Na blockchainie tworzymy smart-kontrakt, który organizuje proces transferu informacji między jej dawcą i biorcą, a związany z tą usługą token istnieje po to, żeby biorca tej usługi mógł nim zapłacić dawcy. Czyli token przepływa z portfela biorcy do portfela dawcy.

#### 3.3 Token inflacyjny 

Trzecia opcja jest podobna do drugiej, z tym że ma jedną istotną różnicę: token przepływa do portfela dawcy nie z portfela biorcy lecz z puli inflacyjnej tokenu. Tak więc portfel biorcy pozostaje nienaruszony, jego token się nie zużywa. Tym samym koszty operacyjne funkcjonowania systemu są finansowane bezpośrednio z funduszu inflacyjnego tokenu.

To trzecie podejście jest naszym zdaniem najbardziej adekwatne do wymogów sytuacji i ono właśnie jest przedmiotem dalszego opisu.

## 4. Inspiracja

Pomysł na model ekonomiczny Sygnetowego tokenu inspirowany jest modelem systemu [Steem](https://steem.io/).

#### 4.1 Jak działa Steem?

W największym skrócie model Steema polega na tym, że blockchain generuje pulę inflacyjną (w rytmie co 24h, w sumie około 9% rocznie), z której przyznawane są nagrody za posty. Dystrybucja nagród następuje w sposób proporcjonalny do uzyskanego poparcia poprzez tzw. *upvote*, a każdy głos jest ważony wielkością udziałów danej osoby w całkowitej populacji tokenów Steem. Czyli jeśli osoba X ma 1% wszystkich tokenów Steem, a osoba Y ma 0.5%, to głos osoby X ma dwa razy większą moc niż osoby Y i tym samym X ma dwa razy większy wpływ na sposób dystrybucji nagród danego dnia.

Zauważmy, że w powyższym układzie nagrody pochodzą z puli inflacyjnej, a nie z portfela osób, które głosują na posty. Jest to krytycznie ważna właściwość, która w dużej mierze determinuje popularność systemu i powoduje relatywnie dużą aktywność uczestników. Rozdawanie środków ze wspólnej puli przychodzi ludziom znacznie łatwiej niż nagradzanie kogoś z własnej kieszeni.

Zauważymy też, że w systemie Steem liczba tokenów do rozdania każdego dnia jest taka sama, tj. wszystkie tokeny muszą być rozdane. Więc decyzje głosujących wpływają jedynie na to, do kogo te nowo wygenerowane tokeny trafią, a nie na to, ile ich zostanie danego dnia rozdane.

#### 4.2 Krytyka modelu Steema

Najczęstszym zarzutem jest porównanie Steema do piramidy finansowej. Krytycy twierdzą, że nagrody pochodzące z inflacji biorą się "z powietrza" i tym samym jest tylko kwestią czasu, kiedy cały ten system się zawali.

#### 4.3 Uzasadnienie modelu Steema

Istniejące od kilku lat kryptowaluty (Bitcoin, Ethereum i wiele innych) udowodniły, że społecznościowy system ekonomiczny może finansować się z inflacji.

Muszą jednak być spełnione następujące trzy warunki:

1. Poziom inflacji jest na rozsądnym poziomie, co zwykle oznacza przedział 5-10%. Na samym początku inflacja może być znacznie większa.
2. Rynek postrzega potencjał ekspansji systemu (w sensie liczby użytkowników, którzy generują popyt na token) na poziomie istotnie wyższym niż poziom inflacji.
3. Inflacja zmierza w długim okresie do zera (klika lub kilkanaście lat).

Dyskusyjne jest czy warunek (3) jest konieczny - być może nie jest.

## 5. Istota proponowanego modelu

#### 5.1 Mechanizm działania

Dla systemu Sygnet proponujemy rozwiązanie analogiczne do modelu Steema.

Zauważmy że:

- Odpowiednikiem twórcy postów w Steemie jest w Sygnecie dawca informacji (służącej do weryfikacji tożsamości osoby K).
- Odpowiednikiem kuratora postów w Steemie jest w Sygnecie biorca informacji. Co prawda konsumuje on informację nie bezpośrednio lecz za pośrednictwem osoby K, bo to de facto ona dokonuje interakcji z dawcą informacji (i także ona decyduje z usług którego konkretnie dawcy informacji skorzystać), ale to nie zmienia faktu, że biorca informacji jest beneficjentem analogicznym do kuratora w Steemie.

Wtedy możemy zaproponować następujący schemat działania:

- Podobnie jak w Steemie dzienną pulę inflacyjną dystrybuujemy wśród dawców informacji (służącej do weryfikacji tożsamości). Każda konsumpcja tej informacji to oddanie głosu na danego dawcę informacji.
- Podobnie jak w Steemie siła głosu jest proporcjonalna do liczby Sygnetowych tokenów będących w posiadaniu biorcy informacji (a dokładniej: do wielkości udziału tokenów biorcy informacji w całkowitej populacji Sygnetowych tokenów).
- Podobnie jak w Steemie trzeba mieć jakąś minimalną liczbę Sygnetowych tokenów żeby móc korzystać z systemu. Posiadanie tej minimalnej liczby tokenów powoduje, że z systemu możesz korzystać relatywnie rzadko (np. raz na minutę), a to ograniczenie szybko maleje wraz ze wzrostem liczby posiadanych tokenów.
- Podobnie jak w Steemie każde nowe konto zasilane jest minimalną liczbą Sygnetowych tokenów, tak żeby jego właściciel był w stanie w podstawowym zakresie korzystać z systemu jako biorca informacji. Tego początkowego zasilenia dokonujemy my, tj. beneficjenci ICO, i jest to jeden z naszych kosztów.
- Podobnie jak w Steemie rozliczenie puli inflacyjnej działa w cyklu dobowym.

#### 5.2 Przykład

Załóżmy, że w danym momencie Sygnet ma kapitalizację 10 mln USD, wyemitowano do tej pory 100 mln tokenów, a inflacja jest na poziomie 4% rocznie, co oznacza, że codziennie jest do rozdania około 10k tokenów z puli inflacyjnej (przy tej kapitalizacji jest to równowartość około 1k USD).

Załóżmy, że stan posiadania danego biorcy informacji to 1 mln tokenów, czyli ma on 1% udziału w całkowitej populacji 100 mln Sygnetowych tokenów. Oznacza to, że dysponuje on liczbą 100 tokenów z puli inflacyjnej (1% z 10k tokenów które są w puli). Załóżmy dalej, że w danym dniu skorzystał on (a w zasadzie skorzystali jego klienci, będący przedmiotem weryfikacji tożsamości) z usługi dwóch dawców informacji, z następującym rozkładem:

- 80% zapytań było skierowanych do dawcy A,
- 20% do dawcy B.

Wówczas w rozliczeniu puli inflacyjnej (ale tylko w zakresie tej części tej puli, którą dysponuje w/w biorca) dawca A dostaje z tytułu powyższej sytuacji 80 tokenów, a dawca B dostaje 20 tokenów.

Oczywiście powyższe rozliczenie to jest tylko fragment większej całości, bo w tym samym cyklu rozliczeniowym z tytułu obsługi klientów innych biorców informacji dawcy A i B będą nagrodzeni dodatkowymi tokenami w analogiczny sposób.

#### 5.3 Dodatkowe zwiększenie atrakcyjności systemu nagród

Wydaje się możliwe wprowadzenie podziału dawców informacji na klika kategorii, zależnie od ich wiarygodności (np. banki, duże sieci handlowe i pozostali) i wprowadzenie wymogu posiadania na swoim koncie przez biorców informacji większej liczby tokenów w przypadku chęci skorzystania z dawcy z wyższej kategorii. Tym samym dawcy informacji z wyższej kategorii będą nagradzani lepiej (bo większe saldo Sygnetowych tokenów na koncie biorcy oznacza większy głos w podziale puli inflacyjnej).

#### 5.4 Czy jest możliwość nadużywania systemu?

Oczywiście jeden uczestnik systemu Sygnet może "wykradać" tokeny z puli inflacyjnej poprzez udawanie, że jest jednocześnie dawcą i biorcą informacji, co jest analogiczne do upvote'u własnego postu na Steemie.

Jednak z doświadczenia Steema wynika, że tego rodzaju nadużycia nie są powszechne (głównie dlatego że są łatwo wykrywalne) i tym samym nie są groźne dla poprawnego funkcjonowania systemu.

Czynnikiem który demotywuje do tego rodzaju działania, jest fakt istnienia korzystnego dla nas sprzężenia: im większa jest liczba posiadanych przez danego uczestnika tokenów, tym większa rodzi się motywacja po jego stronie do nienadużywania systemu, bo ma to wpływ na cenę tokenu.

#### 5.5 Co uzyskujemy?

Korzyści są na wielu frontach jednocześnie:

- Uzyskujemy system który jest **postrzegany** jako darmowy (chociaż w istocie nie jest, bo żywi się własną inflacją).
- Nie trzeba kupować tokenów żeby móc zacząć używać systemu Sygnet, bo minimalną wymaganą dawkę tokenów dostajesz gratis przy założeniu Sygnetowego konta i te tokeny się nie zużywają.
- Im więcej tokenów ma biorca, tym cenniejszy jest jego głos w dystrybucji puli inflacyjnej (więc dostawcy informacji mają silną motywację żeby spełnić wszystkie jego potrzeby), z tym większą częstotliwością może on korzystać z systemu i tym większy ma dostęp do dawców o wyższej wiarygodności.
- Im większa wiarygodność dawcy, tym wyższe otrzymuje on nagrody.
- Biorca informacji ma dostęp do systemu na poziomie intensywności, który jest niezależny od fluktuacji cenowych tokenu. (Natomiast dochód dawcy, wyrażony w fiat, jest zależny od bieżącej ceny tokenu, ale przyjmujemy, że każda istotnie niezerowa wartość jest dla niego satysfakcjonująca.)

Wygląda to na win-win dla każdego, a jedyną stroną, która ponosi negatywne konsekwencje jest inwestor (bo inflacja, z której to wszystko jest finansowane, stopniowo rozwadnia jego udziały). Jednak to co skłania inwestora do ponoszenia tych konsekwencji, to perspektywa aprecjacji tokenu wynikająca z radykalnego wzrostu jego popularności.

## 6. Uzasadnienie wyboru modelu

#### 6.1 Różnica wobec tokenu płatniczego

W przypadku tokenu płatniczego (tj. takiego ktory przepływa z portfela biorcy do portfela dawcy) mamy jedną istotną wadę: potrzebujemy skłonić potencjalnego biorcę usługi do nabycia tokenu **zanim** ma on szansę z niej skorzystać. Jest to istotna przeszkoda w adopcji.

Natomiast proponowany przez nas token inflacyjny ma zupełnie inną charakterystkę: przepływa on do portfela dawcy z puli inflacyjnej, a portfel biorcy pozostaje nienaruszony. Oznacza to, że usługa w swojej podstawowej wersji jest oferowana **za darmo**, co w oczywisty sposób niweluje barierę wejścia dla nowych użytkowników.

Żeby to osiągnąć w pełni wykorzystujemy atuty technologii blockchain i uzyskujemy właściwości ekonomiczne, których nie można zrealizować w żaden inny sposób: proponowany przez nas model inflacyjny jest realizowalny tylko za pomocą smart-kontraktu, bo w przeciwnym przypadku nikt by temu mechanizmowi nie mógł w pełni zaufać. Tylko niemodyfikowalny smart-kontrakt jest w stanie zagwarantować nienaruszalność inflacji i tym samym niezmienność reguł gry.

#### 6.2 Punkt widzenia inwestora

Nasza hipoteza jest następująca: stosowane do tej pory w ICO modele tokenów płatniczych **niepotrzebnie** próbują obciążyć użytkownika kosztami w postaci opłat za oferowane usługi. Powoduje to istotny problem z adopcją, a niewiele to zmienia z punktu widzenia inwestora.

**W naszym podejściu wychodzimy z założenia, że dla inwestora ważniejsze jest istotne zwiększenie szans na masową adopcję (co z kolei spowoduje istotną aprecjację tokenu) niż kilkuprocentowe rozwodnienie kapitału spowodowane inflacją.**

Łatwo dostrzec racjonalność tego podejścia. Bazuje ono na założeniu, które jak najbardziej ma rację bytu: że roczne tempo wzrostu popularności systemu (manifestujące się poprzez wzrost popytu na token) będzie większe niż 5-10% na rok, czyli poziom jego inflacji.

Warto też zauważyć, że kryptowaluty rządzą się innymi prawami niż akcje przedsiębiorstw. Ostatecznym powodem, dla którego warto posiadać akcje, jest potencjał otrzymywania dywidendy. Natomiast w przypadku kryptowalut ostatecznym powodem jest możliwość korzystania z danej usługi.

Tak więc w przypadku tradycyjnych, nieblockchainowych biznesów próba finansowania się poprzez ciągłą emisję własnych akcji prawdopodobnie skończyłaby się samobójstwem finansowym. Natomiast w przypadku kryptowalut nie jest to takie oczywiste, bo mamy istotną różnicę w aspekcie finansowym:

* Spekulacja inwestorów na rynku akcji jest w następującym zakresie: *jaki będzie popyt na daną akcję ze strony przyszłych **inwestorów**?* Liczy się zdolność do generowania zysków (i tym samym wysokość przewidywanej w przyszłości dywidendy).
* Natomiast w przypadku kryptowalut spekulacja inwestorów jest w innym zakresie: *jaki będzie popyt na dany token ze strony przyszłych **użytkowników**?* Liczy się zdolność do masowej adopcji, niezależnie od istnienia zysków (bo i tak nie ma dywidendy).

#### 6.3 Limit liczby tokenów

To co można dodatkowo zrobić (i to ma teraz Steem, ale na początku nie miał) to ustanowić w kodzie Sygnetowego smart-kontraktu górny limit liczby tokenów, który zostanie osiągnięty w jakimś w miarę odległym czasie np. 5-10 lat.

I wtedy Sygnetowa inflacja zmierzałaby asymptotycznie do zera w wybranej przez nas perspektywie czasowej, co oznacza że Sygnet ma tyle czasu żeby wypracować inny niż inflacyjny mechanizm ekonomiczny, np. monetyzacja reputacji.

Cap inflacyjny niewątpliwie daje uspokojenie posiadaczom tokenów: inflacji postrzeganej jako czynnik psujący wycenę jest z upływem czasu coraz mniej. Doświadczenie z ICO EOSa dowodzi, że inwestor jest w stanie znieść dość dużą inflację (nawet 100% rocznie), o ile ma ona wyraźny cel i limit czasowy.

#### 6.4 Model sprawdzony empirycznie

Według naszej wiedzy Sygnet ma szansę być pierwszym tokenem emitowanym na blockchainie (tj. nie posiadającym własnego natywnego blockchaina), który stosuje model ekonomiczny typowy dla blockchaina, tj. ekspansję poprzez inflację.

Poniżej przedstawione jest porównanie wychwytujące analogie pomiędzy różnymi podejściami w świecie kryptowalut. Widać w nim wyraźnie, że to co proponujemy dla Sygnetu to model ekonomiczny, który jest innowacyjny ale też jednocześnie analogiczny do tych, które sprawdziły się empirycznie:

- Bitcoin/Ethereum: mining poprzez spalanie prądu.
- Maidsafe/Sia: mining poprzez dostarczanie przestrzeni dyskowej.
- Golem: mining poprzez dostarczanie mocy obliczeniowej do machine learing / rendering.
- Steem: mining poprzez dostarczanie wartości intelektualnej i artystycznej (tj. contentu internetowego).
- EOS: mining poprzez dostarczanie mocy obliczeniowej do procesowania transakcji.
- Sygnet: mining poprzez dostarczanie informacji służącej do weryfikacji tożsamości.

#### 6.5 Porównanie z innymi podejściami

Poniżej prezentujemy porównanie wad i zalet trzech alternatywnych metod konstrukcji tokenu: dywidendowy, płatniczy i inflacyjny. Wynika z niego, że proponowany przez nas token inflacyjny (ostatnia kolumna) jest relatywnie najlepszym wyborem, szczególnie w sytuacji, w której głównym czynnikiem decydującym o sukcesie jest uzyskanie efektu sieciowego.

```eval_rst
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Funkcjonalność                               | Token Dywidendowy  | Token Płatniczy      | Token Inflacyjny |
   +==============================================+====================+======================+==================+
   | Brak konieczności zaufania do emitenta       | ---                | Tak                  | Tak              |
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Brak bariery wejścia dla użytkownika         | ---                | ---                  | Tak              |
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Stabilność kosztu dla biorcy informacji      | Tak                | ---                  | Tak              |
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Stabilność przychodu dla dawcy informacji    | Tak                | ---                  | ---              |
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Usługa postrzegana jako darmowa              | ---                | ---                  | Tak              |
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Brak zagrożenia konkurencją cenową           | ---                | ---                  | Tak              |
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Stabilna liczba wyemitowanych tokenów        | Tak                | Tak                  | ---              |
   +----------------------------------------------+--------------------+----------------------+------------------+
   | Potencjał dynamicznej ekspansji systemu      | ---                | ---                  | Tak              |
   +----------------------------------------------+--------------------+----------------------+------------------+
```

## Q&A

###### 1. Prawdopodobnie będzie trudno wytłumaczyć to rozwiązanie innym podmiotom.

To jest podobna trudność jaką ma Steem. Relatywnie niewiele osób rzeczywiście rozumie model ekonomiczny Steema, chociaż mnóstwo osób go używa i tym samym przyjmuje, że ma on sens. Okazuje się, że użytkownicy nie muszą dokładnie rozumieć mechanizmów ekonomicznych żeby móc w nich aktywnie uczestniczyć.

To co jest ważne, to to żeby system był łatwo wytłumaczalny w zakresie sposobu korzystania z niego (w przeciwieństwie do sposobu w jaki jest on skonstruowany).

A w przypadku tokenu inflacyjnego instrukcja użycia jest bardzo prosta:

- Dla biorcy informacji: *Usługa jest za darmo, nic nie musisz płacić. Gdybyś chciał jednak korzystać z systemu z większą częstotliwością albo uzyskać dostęp do informacji o większej wiarygodności, to musisz wejść w posiadanie tokenów (odpowiednik nabycia licencji na wersję pro), ale te tokeny się nie zużywają, więc wysiłek (czasowy i finansowy) popełniasz tylko raz.*
- Dla dawców informacji: *Za oferowanie informacji dostajesz tokeny, które mają wartość finansową wyznaczaną przez rynek. Możesz te tokeny trzymać licząc na aprecjację albo sprzedać i uzyskać fiat.*

###### 2. Musimy założyć, że za rok, dwa banki otworzą się na krypto. Bo na razie to mają chyba taką nieformalną zmowę, żeby nie używać tokenów oficjalnie.

W naszym przypadku używanie kryptowaluty przez banki sprowadza się do przyjęcia płatności w Sygnetowym tokenie. Jeśli dany podmiot nie będzie chciał mieć do czynienia z tym tokenem, to może nam przekazać dostęp do swojego konta w Sygnecie i my wtedy możemy uzyskane przez niego tokeny sprzedawać na rynku i przekazywać mu fiat.

Warto zauważyć, że problem ten istnieje niezależnie od wyboru modelu ekonomicznego. No chyba że zastosujemy model z tokenem dywidendowym. Jednak taka konstrukcja w 100% opiera się na wierze w uczciwość emitenta.

###### 3. Dla tradycyjnych biznesów może być problem z oszacowaniem przychodów. Bo czy nie jest tak ze wypłata dla nich będzie zależała od ilości zapytań? Tak jak upvote na Steemie?

Rzeczywiście wypłata za dostarczanie informacji będzie zależała od wyceny całości systemu (tj. kapitalizacji tokenu), podobnie jak to ma miejsce w Steemie. Tak więc nie sposób tego dokładnie oszacować.

Ale nawet gdybyśmy zastosowali token płatniczy (tak jak to robi np. [Civic](https://www.civic.com/)) to i tak problem pozostaje, bo płatność za oferowaną usługę jest zawsze w tokenach, a nie sposób przewidzieć jego rynkowej wartości.

Jednak brak dokładnej wyceny wpływów dla dawców informacji, nie stawia nas na straconej pozycji. W tej chwili podmioty dysponujące informacją o tożsamości nie mają żadnych wpływów z tego tytułu, więc jeśli dostarczymy cokolwiek istotnie większego niż zero i co dodatkowo ma potencjał dużej skali, to to się broni.

###### 4. Inflacja jest prastarym, ukrytym podatkiem którego się używa żeby wywołać ruch w interesie i zapobiec przetrzymywania tokenów bez obrotu nimi.

Istotnie, inflacja jest ukrytym podatkiem, ale ma ona potencjał napędzania inwestycji, oczywiście gdy jest stosowana z umiarem.

Do tej pory monopol na posługiwanie się inflacją miał emitent waluty narodowej, czyli aparat państwowy. Teraz, dzięki istnieniu wynalazku blockchaina, ten mechanizm jest do dyspozycji podmiotów biznesowych.

Blockchain powoduje, że biznes może mieć własną walutę i ten pozornie drobny fakt ma istotne konsekwencje: biznes blockchainowy ma opcję finansowania się z inflacji. Wówczas sensowną miarą jego kondycji finansowej jest estymacja, w jakim stopniu inflacja jest zrównoważona potencjałem ekspansji danego biznesu na nowych użytkowników (bo ci nowi użytkownicy generują popyt na walutę tego biznesu i ten popyt równoważy inflację).

Można też spojrzeć na to w ten sposób: owszem można stosować tradycyjny (tj. nieinflacyjny) model biznesowy na blockchainie, ale tego rodzaju podejście nie ma szans w konfrontacji z podejściem inflacyjnym. W branżach, w których lojalność użytkownika jest niska (a w takiej branży my działamy) biznes który może żyć z inflacji a tego nie robi, prawdopodobnie przegra z biznesem, który bierze inflację i obraca ją na swoją korzyść.

###### 5. Założenie, że popyt użytkowników na token będzie rósł w tempie większym niż 5-10% na rok, może być bardzo trudne w przyjęciu, bo co jeśli jednak system nie będzie rósł tak szybko, niby nic, ale jak do tak śmiałego założenia podejdą gracze typu Allegro?

Sygnet to start-up, więc jeśli w okresie początkowym nie będzie rósł w tempie większym niż 10% rocznie, to znaczy, że coś jest w nim fundamentalnie źle pomyślane. Allegro ryzykuje "tylko" to, że nie otrzyma zysków w skali, która zrekompensuje mu włożony wysiłek w integrację z naszym systemem. Główne ryzyko ponoszą inwestorzy ICO.

###### 6. Temat zmniejszania inflacji do zera musimy mieć zaadresowany od razu, bo inaczej to brzmi a'la: "na razie żyjemy na kredyt, a potem się zobaczy".

Wszystkie kryptowaluty żyją "na kredyt" - mają malejącą z czasem inflację i brak rozwiązania kwestii finansowania w momencie, gdy inflacja dojdzie do zera. Wygląda na to, że rynkowi to nie przeszkadza. Niemniej możemy to zrobić. Monetyzacja w jakimkolwiek kierunku (np. reputacji) jest dość łatwa, jeśli jest już uzyskana masa krytyczna.

###### 7. W sytuacji współpracy z krypto światem nie ma problemu, natomiast inne podmioty mogą mieć kłopot z dokupowaniem tokenów z jednej strony (biorcy) i spieniężaniem ich z drugiej (dawcy). Powinniśmy pomyśleć o jakimś mechanizmie, który w prosty sposób robiłyby to za nich, tak żeby niespecjalnie musieli słyszeć o tokenach, inaczej sypiemy sobie kolejną górkę w rozmowach sprzedażowych.

To jest problem, który będą miały wszystkie tego typu projekty. W ostateczności sami możemy wejść w rolę market makera.

###### 8. Dystrybucja tokenów. Skrajny przypadek: Jeśli mam w całym systemie 100 mln tokenów, które są w 100% zajęte przed podmioty, które wykorzystują je do KYC i pojawia się 100 nowych podmiotów, to skąd wezmą tokeny, żeby dołączyć do systemu? (zakładam, że inflacja jest mała i nie obsłuży nagłego popytu). I co jeśli mała płynność spowoduje taki ruch cenowy, który spowoduje, że dla nowych graczy wejście do systemu będzie nieopłacalne, bo krańcowa użyteczność z posiadania kolejnego tokenu będzie drastycznie spadać?

Chyba najlepiej będzie skorzystać z doświadczeń Steema albo podpatrzeć jak to się rozwiąże w EOSie. W Steemie głównym fundatorem nowych kont jest największy udziałowiec, tj. Steemit. My, jako beneficjent ICO, moglibyśmy zarezerwować jakąś pulę tokenów (np. 10%) na ten cel - wtedy smart-kontrakt będzie gwarantował, że tokeny z tej puli mogą być użyte tylko do inicjacji nowych kont.

Warto też wiedzieć, że w Steemie (i pewnie też w EOSie) tokeny inicjujące nowe konto nie przyczyniają się do zwiększenia inflacji, bo są one tylko wydelegowane do nowego konta (a nie mu przekazane), więc nie mogą być sprzedane na rynku.