# Sygnet - Propozycja Modelu Ekonomicznego

## 1. Kto jest uczestnikiem modelu?

W systemie Sygnet mamy trzy rodzaje uczestników:

- Dawca informacji (służącej do weryfikacji tożsamości osoby K)
- Biorca informacji (który potrzebuje zweryfikować osobę K)
- Osoba K, której dotyczy informacja i która jest przedmiotem weryfikacji

Zakładamy, że model ekonomiczny dotyczy tylko pierwszych dwóch typów uczestników, tj. dawcy i biorcy informacji, natomiast trzeci uczestnik, tj. osoba K, nie powinna brać udziału w tym modelu, ponieważ jest ona tylko przedmiotem transakcji (a nie podmiotem), a jej główną motywacją jest tylko, to żeby proces weryfikacji jej tożsamości był szybki i wygodny.

## 2. Cel modelu

Jest oczywiste, że skoro kierunek przepływu korzyści w systemie Sygnet jest od dawcy informacji do biorcy informacji, to głównym celem funkcjonowania tokenu jest motywowanie dawców informacji do aktywnej partycypacji w systemie.

Z punktu widzenia biznesowego chcemy spełnić następujące kryteria:

1. Token musi być postrzegany jako warty posiadania, tj. jego posiadanie powinno rodzić wymierne korzyści i tych korzyści powinno być tym więcej, im więcej mamy tego tokenu.
2. Sposób działania tokenu powinien wspierać masową adopcję systemu. Idealnie by było żeby użytkownik mógł zacząć używać systemu bez konieczności wcześniejszego zakupu tokenu.
3. Używanie tokenu powinno być uwolnione od ryzyka cenowego. Większość użytkowników chce używać tokenu w celu uzyskania usługi, a nie spekulować na jego wartości.
4. Token powinien w większym stopniu nagradzać tych dawców informacji którzy mają większą wiarygodność i tym samym informacja dostarczona przez nich jest cenniejsza niż informacja z innych źródeł.

## 3. Inspiracja

Pomysł na model ekonomiczny tokenu w systemie Sygnet inspirowany jest mechanizmem ekonomicznym systemu [Steem](https://steem.io/).

#### 3.1 Jak działa Steem?

W największym skrócie model Steema polega na tym, że blockchain generuje pulę inflacyjną (w rytmie co 24h, w sumie około 9% rocznie), z której przyznawane są nagrody za posty. Dystrybucja nagród następuje w sposób proporcjonalny do uzyskanego poparcia poprzez tzw. *upvote*, a każdy głos jest ważony wielkością udziałów danej osoby w całkowitej populacji tokenów Steem. Czyli jeśli osoba X ma 1% wszystkich tokenów Steem, a osoba Y ma 0.5%, to głos osoby X ma dwa razy większą moc niż osoby Y i tym samym X ma dwa razy większy wpływ na sposób dystrybucji nagród danego dnia.

Zauważmy, że w powyższym układzie nagrody pochodzą z puli inflacyjnej, a nie z portfela osób, które głosują na posty. Jest to krytycznie ważna właściwość, która w dużej mierze determinuje popularność systemu i powoduje relatywnie dużą aktywność uczestników. Rozdawanie środków ze wspólnej puli przychodzi ludziom znacznie łatwiej niż nagradzanie kogoś z własnej kieszeni.

Zauważymy też, że w systemie Steem liczba tokenów do rozdania każdego dnia jest taka sama, tj. wszystkie tokeny muszą być rozdane. Więc decyzje głosujących wpływają jedynie na do kogo te nowo wygenerowane tokeny trafią, a nie na to, ile ich zostanie danego dnia rozdane.

#### 3.2 Krytyka modelu Steema

Najczęstszym zarzutem jest porównanie Steema do piramidy finansowej. Krytycy twierdzą, że nagrody pochodzące z inflacji biorą się "z powietrza" i tym samym jest tylko kwestią czasu, kiedy cały ten system się zawali.

#### 3.3 Uzasadnienie modelu Steema

Istniejące od kilku lat kryptowaluty (Bitcoin, Ethereum i wiele innych) udowodniły, że społecznościowy system ekonomiczny może finansować się z inflacji.

Muszą jednak być spełnione następujące trzy warunki:

1. Poziom inflacji jest na rozsądnym poziomie, co zwykle oznacza przedział 5-10%. Na samym początku inflacja może być znacznie większa.
2. Rynek postrzega potencjał ekspansji systemu (w sensie liczby użytkowników) na poziomie istotnie wyższym niż poziom inflacji.
3. Inflacja zmierza w długim okresie do zera (klika lub kilkadziesiąt lat).

Dyskusyjne jest czy warunek (3) jest konieczny - być może nie jest.

## 4. Istota proponowanego modelu ekonomicznego

#### 4.1 Mechanizm działania

Dla systemu Sygnet proponujemy rozwiązanie analogiczne do modelu Steema.

Zauważmy że:

- Odpowiednikiem twórcy postów w Steemie jest w Sygnecie dawca informacji (służącej do weryfikacji tożsamości osoby K).
- Odpowiednikiem kuratora postów w Steemie jest w Sygnecie biorca informacji. Co prawda konsumuje on informację nie bezpośrednio lecz za pośrednictwem osoby K, bo to de facto ona dokonuje interakcji z dawcą informacji (i także ona decyduje z usług którego konkretnie dawcy informacji skorzystać), ale to nie zmienia faktu, że biorca informacji jest beneficjentem analogicznym do kuratora w Steemie.

Wtedy możemy zaproponować następujący schemat działania:

- Podobnie jak w Steemie dzienną pulę inflacyjną dystrybuujemy wśród dawców informacji (służącej do weryfikacji tożsamości). Każda konsumpcja tej informacji to oddanie głosu na danego dawcę informacji.
- Podobnie jak w Steemie siła głosu jest proporcjonalna do liczby Sygnetowych tokenów będących w posiadaniu biorcy informacji (a dokładniej: do wielkości udziału tokenów biorcy informacji w całkowitej populacji Sygnetowych tokenów).
- Podobnie jak w Steemie trzeba mieć jakąś minimalną liczbę Sygnetowych tokenów żeby móc skorzystać z systemu Sygnet. Posiadanie tej minimalnej liczby tokenów powoduje, że z systemu możesz korzystać relatywnie rzadko (np. raz na minutę), a to ograniczenie szybko maleje wraz ze wzrostem liczby posiadanych tokenów.
- Podobnie jak w Steemie każde nowe konto zasilane jest minimalną liczbą Sygnetowych tokenów, tak żeby jego właściciel był w stanie w podstawowym zakresie korzystać z systemu jako biorca informacji. Tego początkowego zasilenia dokonujemy my, tj. beneficjenci ICO, i jest to jeden z naszych kosztów.
- Podobnie jak w Steemie rozliczenie puli inflacyjnej działa w cyklu dobowym.

#### 4.2 Przykład

Załóżmy, że w danym momencie Sygnet ma kapitalizację 10 mln USD, wyemitowano do tej pory 100 mln tokenów, a inflacja jest na poziomie 4% rocznie, co oznacza, że codziennie jest do rozdania około 10k tokenów z puli inflacyjnej (przy tej kapitalizacji jest to równowartość około 1k USD).

Załóżmy, że stan posiadania danego biorcy informacji to 1 mln tokenów, czyli ma on 1% udziału w całkowitej populacji 100 mln Sygnetowych tokenów. Oznacza to, że dysponuje on liczbą 100 tokenów z puli inflacyjnej (1% z 10k tokenów które są w puli). Załóżmy dalej, że w danym dniu skorzystał on (a w zasadzie skorzystali jego klienci, będący przedmiotem weryfikacji tożsamości) z usługi dwóch dawców informacji, z następującym rozkładem:

- 80% zapytań było skierowanych do dawcy A,
- 20% do dawcy B.

Wówczas w rozliczeniu puli inflacyjnej (ale tylko w zakresie tej części tej puli, którą dysponuje w/w biorca) dawca A dostaje z tytułu powyższej sytuacji 80 tokenów, a dawca B dostaje 20 tokenów.

Oczywiście powyższe rozliczenie to jest tylko fragment większej całości, bo w tym samym cyklu rozliczeniowym z tytułu obsługi klientów innych biorców informacji dawcy A i B będą nagrodzeni dodatkowymi tokenami w analogiczny sposób.

#### 4.3 Dodatkowe zwiększenie atrakcyjności systemu nagród

Wydaje się możliwe wprowadzenie podziału dawców informacji na klika kategorii (np. trzy) zależnie od ich wiarygodności (banki, duże sieci handlowe i pozostali) i wprowadzenie wymogu posiadania na swoim koncie przez biorców informacji większej liczby tokenów w przypadku chęci skorzystania z dawcy o wyższej kategorii. Tym samym dawcy informacji z wyższej kategorii będą nagradzani lepiej (bo większe saldo Sygnetowych tokenów na koncie biorcy oznacza większy głos w podziale puli inflacyjnej).

#### 4.4 Czy jest możliwość nadużycia?

Oczywiście jeden uczestnik systemu Sygnet może udawać, że jest jednocześnie dawcą i biorcą informacji, co jest analogiczne do upvote'u własnego postu na Steemie.

Jednak z doświadczenia Steema wynika, że tego rodzaju nadużycia nie są powszechne (głównie dlatego że są łatwo wykrywalne) i tym samym nie są groźne dla poprawnego funkcjonowania systemu.

Czynnikiem który demotywuje do tego rodzaju działania, jest fakt istnienia korzystnego dla nas sprzężenia: im większa jest liczba posiadanych przez danego uczestnika tokenów, tym większa rodzi się motywacja po jego stronie do nienadużywania systemu, bo ma to wpływ na cenę tokenu.

#### 4.5 Co uzyskujemy?

Korzyści są na wielu frontach jednocześnie:

- Uzyskujemy system który jest **postrzegany** jako darmowy (chociaż w istocie nie jest, bo żywi się własną inflacją).
- Nie trzeba kupować tokenów żeby móc zacząć używać systemu Sygnet, bo minimalną wymaganą dawkę tokenów dostajesz gratis przy założeniu Sygnetowego konta i te tokeny się nie zużywają.
- Im więcej masz tokenów, tym cenniejszy jest twój głos w dystrybucji puli inflacyjnej (więc dostawcy informacji mają silną motywację żeby spełnić wszystkie twoje potrzeby), z tym większą częstotliwością możesz korzystać z systemu w roli biorcy informacji i tym większy masz dostęp do dawców o wyższej wiarygodności.
- Im większa wiarygodność dawcy, tym wyższe otrzymuje on nagrody.

Wygląda to na win-win dla każdego, a jedyną stroną, która ponosi negatywne konsekwencje jest inwestor (bo inflacja, z której to wszystko jest finansowane, stopniowo rozwadnia jego udziały). Jednak to co skłania inwestora do ponoszenia tych konsekwencji, to perspektywa aprecjacji tokenu wynikająca z radykalnego wzrostu jego popularności.

## 5. Uzsadnienie wartości modelu

#### 5.1 Masowa adopcja jest priorytetem

W zakresie tokenów emitowanych poprzez ICO powszechnie obowiązujące podejście jest następujące: stwarzamy jakąś smart-kontraktową usługę, a związany z tą usługą token istnieje tylko po to żeby biorca tej usługi mógł nim zapłacić dawcy.

Powyższe podejście ma jedną istotną wadę: potrzebujemy skłonić potencjalnego biorcę usługi do nabycia tokenu **zanim** ma on szansę z niej skorzystać. Jest to istotna przeszkoda w adopcji.

Natomiast proponowany przez nas model ekonomiczny sprawia, że usługa w swojej podstawowej wersji jest oferowana **za darmo**, co w oczywisty sposób niweluje barierę wejścia dla nowych użytkowników. Żeby to osiągnąć w pełni wykorzystujemy atuty technologii blockchain i uzyskujemy właściwości ekonomiczne, których nie można zrealizować w żaden inny sposób: proponowany przez nas model inflacyjny jest realizowalny tylko za pomocą smart-kontraktu, bo w przeciwnym przypadku nikt by temu mechanizmowi nie zaufał. Tylko niemodyfikowalny smart-kontrakt jest w stanie zagwarantować nienaruszalność inflacji i tym samym niezmienność reguł gry z punktu widzenia inwestora.

Nasza konkluzja jest następująca: modele ekonomiczne tokenów emitowanych do tej pory na ICO **niepotrzebnie** próbują obciążyć użytkownika kosztami w postaci opłat za oferowane usługi. Powoduje to istotny problem z adopcją, a niewiele to zmienia z punktu widzenia inwestora.

**Wychodzimy z założenia, że dla inwestora ważniejsze jest istotne zwiększenie szans na masową adopcję (co spowoduje istotną aprecjację tokenu) niż kilkuprocentowe rozwodnienie kapitału spowodowane inflacją.**

Łatwo zauważyć racjonalność tego podejścia. Bazuje ono na założeniu, które jak najbardziej ma rację bytu: że roczne tempo wzrostu popularności systemu (manifestujące się poprzez wzrost popytu na token) będzie większe niż 5-10% na rok, czyli poziom jego inflacji.

#### 5.2 Limit liczby tokenów

To co można dodatkowo zrobić (i to ma teraz Steem, ale na początku nie miał) to ustanowić w kodzie Sygnetowego smart-kontraktu górny limit liczby tokenów, który zostanie osiągnięty w jakimś w miarę odległym czasie np. 5-10 lat.

I wtedy Sygnetowa inflacja zmierzałaby asymptotycznie do zera w wybranej przez nas perspektywie czasowej, co oznacza że Sygnet ma tyle czasu żeby wypracować inny niż inflacyjny mechanizm ekonomiczny, np monetyzacja reputacji.

Cap inflacyjny niewątpliwie daje uspokojenie posiadaczom tokenów: inflacji postrzeganej jako czynnik psujący wycenę jest z upływem czasu coraz mniej. Doświadczenie z ICO EOSa dowodzi, że inwestor jest w stanie znieść dość dużą inflację (nawet 100% rocznie), o ile ma ona wyraźny cel i limit czasowy.

#### 5.3 Model sprawdzony empirycznie

Według naszej wiedzy Sygnet ma szansę być pierwszym tokenem emitowanym na blockchainie (tj. nie posiadającym własnego natywnego blockchaina), który stosuje model ekonomiczny typowy dla blockchaina, tj. ekspansję poprzez inflację.

Poniżej przedstawione jest porównanie wychwytujące analogie pomiędzy różnymi podejściami w świecie kryptowalut. Widać w nim wyraźnie, że to co proponujemy dla Sygnetu to model ekonomiczny, który jest innowacyjny ale też jednocześnie analogiczny do tych, które sprawdziły się empirycznie:

- Bitcoin/Ethereum: mining poprzez spalanie prądu
- Maidsafe/Sia: mining poprzez dostarczanie przestrzeni dyskowej
- Golem: mining poprzez dostarczanie mocy obliczeniowej do machine learing / rendering
- Steem: mining poprzez dostarczanie wartości intelektualnej i artystycznej (t.j. contentu internetowego)
- EOS: mining poprzez dostarczanie mocy obliczeniowej do procesowania transakcji
- Sygnet: mining poprzez dostarczanie informacji służącej do weryfikacji tożsamości

## Q&A

> Widzę tylko trudność w wytłumaczeniu tego innym podmiotom.

To jest podobna trudność jaką miał i ma Steem. Relatywnie niewiele osób rzeczywiście rozumie mechanizm ekonomiczny Steema, chociaż mnóstwo osób go używa i tym samym przyjmuje, że ma on sens. Okazuje się, że użytkownicy nie muszą dokładnie rozumieć mechanizmów ekonomicznych żeby móc w nich aktywnie uczestniczyć.

To co jest ważne, to to żeby system był łatwo wytłumaczalny w zakresie sposobu korzystania z niego (w przeciwieństwie do sposobu w jaki jest on skonstruowany).

A instrukcja użycia w zakresie finansowym jest bardzo prosta:

- Dla biorcy informacji: *Usługa jest za darmo, nic nie musisz płacić. Gdybyś chciał jednak korzystać z systemu z większą częstotliwością albo uzyskać dostęp do informacji o większej wiarygodności, to musisz wejść w posiadanie tokenów (odpowiednik nabycia licencji na wersję pro), ale te tokeny się nie zużywają, więc wysiłek (czasowy i finansowy) popełniasz tylko raz.*
- Dla dawców informacji: *Za oferowanie informacji dostajesz tokeny, które mają wartość finansową wyznaczaną przez rynek. Możesz te tokeny trzymać licząc na aprecjację albo sprzedać i uzyskać fiat.*



> Musimy założyć, że za rok, dwa banki otworzą się na krypto. Bo na razie to mają chyba taką nieformalną zmowę, żeby nie używać tokenów oficjalnie.

W naszym przypadku używanie kryptowaluty przez banki sprowadza się do przyjęcia płatności w Sygnetowym tokenie. Jeśli dany podmiot nie będzie chciał mieć do czynienia z tym tokenem, to może nam przekazać dostęp do swojego konta w Sygnecie i my wtedy możemy uzyskane przez niego tokeny sprzedawać na rynku i przekazywać mu fiat.

Warto zauważyć, że problem ten istnieje niezależnie od wyboru modelu ekonomicznego. No chyba że zastosujemy model, w którym wszystkie rozliczenia są w fiat, a tokeny służą jedynie jako system ewidencyjny do dystrybucji korzyści z ich posiadania (np. rabaty albo dywidendy z naszych zysków). Jednak taka konstrukcja ma zerową innowacyjność i w 100% opiera się na wierze w uczciwość emitenta.



> Dla tradycyjnych biznesów może być problem z oszacowaniem przychodów. Bo czy nie jest tak ze wypłata dla nich będzie zależała od ilości zapytań? Tak jak upvote na Steemie?

Rzeczywiście wypłata za dostarczanie informacji będzie zależała od wyceny całości systemu (tj. kapitalizacji tokenu), podobnie jak to ma miejsce w Steemie. Tak więc nie sposób tego dokładnie oszacować.

Ale nawet gdybyśmy zastosowali bardziej "tradycyjny" model ekonomiczny (tj. taki jak np. [Civic](https://www.civic.com/), czyli mamy token, którym się płaci za usługi oferowane przez system) to i tak problem pozostaje, bo nie sposób przewidzieć rynkowej wartości tokenu.

Jednak brak dokładnej wyceny wpływów dla dawców informacji, nie stawia nas na straconej pozycji. W tej chwili podmioty dysponujące informacją o tożsamości nie mają żadnych wpływów z tego tytułu, więc jeśli dostarczymy cokolwiek istotnie większego niż zero i co dodatkowo ma potencjał dużej skali, to to się broni.



> Inflacja jest prastarym, ukrytym podatkiem którego się używa żeby wywołać ruch w interesie i zapobiec przetrzymywania tokenów bez obrotu nimi.

Istotnie, inflacja jest ukrytym podatkiem, ale ma ona potencjał napędzania inwestycji, oczywiście gdy jest stosowana z umiarem.

Do tej pory monopol na posługiwanie się inflacją miał emitent waluty narodowej, czyli aparat państwowy. Teraz, dzięki istnieniu wynalazku blockchaina, ten mechanizm jest do dyspozycji podmiotów biznesowych.

Blockchain powoduje, że biznes może mieć własną walutę i ten pozornie drobny fakt ma istotne konsekwencje: biznes blockchainowy ma opcję finansowania się z inflacji. Wówczas jedyną sensowną miarą jego kondycji finansowej jest to: w jakim stopniu inflacja jest zrównoważona potencjałem ekspansji danego biznesu na nowych użytkowników (bo ci nowi użytkownicy generują popyt na walutę tego biznesu i ten popyt równoważy inflację).

Można też spojrzeć na to w ten sposób: owszem można stosować tradycyjny (tj. nieinflacyjny) model biznesowy na blockchainie, ale tego rodzaju podejście nie ma szans w konfrontacji z podejściem inflacyjnym. W branżach, w których lojalność użytkownika jest niska (a w takiej branży my działamy) biznes który może żyć z inflacji a tego nie robi, zapewne przegra z biznesem, który bierze inflację i obraca ją na swoją korzyść.