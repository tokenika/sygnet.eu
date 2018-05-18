# Sygnet - Propozycja Modelu Ekonomicznego

## Cel

Naszym celem jest dostarczenie modelu ekonomicznego, który będzie generował motywację do harmonijnej współpracy między następującymi trzema typami podmiotów:

- Dawca informacji (służącej do weryfikacji tożsamości osoby K)
- Biorca informacji (który potrzebuje zweryfikować osobę K)
- Osoba K, której dotyczy informacja i która jest przedmiotem weryfikacji

Z punktu widzenia biznesowego musimy dodatkowo spełnić następujące kryteria:

- Token musi być postrzegany jako warty posiadania, tj. jego posiadanie powinno rodzić wymierne korzyści i tych korzyści powinno być tym więcej, im więcej mamy tego tokenu.
- Sposób działania tokenu powinien wspierać masową adopcję systemu. Idealnie by było żeby użytkownik mógł zacząć używać systemu bez konieczności wcześniejszego zakupu tokenu.
- Używanie tokenu powinno być uwolnione od ryzyka cenowego. Większość użytkowników chce używać tokenu w celu uzyskania usługi, a nie spekulować na jego wartości.

## Inspiracja

Pomysł na model ekonomiczny tokenu w systemie Sygnet inspirowany jest mechanizmem ekonomicznym systemu [Steem](https://steem.io/).

#### Jak działa Steem?

W największym skrócie model Steema polega na tym, że blockchain generuje pulę inflacyjną (w rytmie co 24h, w sumie około 9% rocznie), z której przyznawane są nagrody za posty. Dystrybucja nagród następuje w sposób proporcjonalny do uzyskanego poparcia poprzez tzw. *upvote*, a każdy głos jest ważony wielkością udziałów danej osoby w całkowitej populacji tokenów Steem. Czyli jeśli osoba X ma 1% wszystkich tokenów Steem, a osoba Y ma 0.5%, to głos osoby X ma dwa razy większą moc niż osoby Y i tym samym X ma dwa razy większy wpływ na sposób dystrybucji nagród danego dnia.

Zauważmy, że w powyższym układzie nagrody pochodzą z puli inflacyjnej, a nie z portfela osób, które głosują na posty. Jest to krytycznie ważna właściwość, która w dużej mierze determinuje popularność systemu i powoduje relatywnie dużą aktywność uczestników. Rozdawanie środków ze wspólnej puli przychodzi ludziom znacznie łatwiej niż nagradzanie kogoś z własnej kieszeni.

Zauważymy też, że w systemie Steem liczba tokenów do rozdania każdego dnia jest taka sama, tj. wszystkie tokeny muszą być rozdane. Więc decyzje głosujących wpływają jedynie na do kogo te nowo wygenerowane tokeny trafią, a nie na to, ile ich zostanie danego dnia rozdane.

#### Krytyka modelu Steema

Najczęstszym zarzutem jest porównanie Steema do piramidy finansowej. Krytycy twierdzą, że nagrody pochodzące z inflacji biorą się "z powietrza" i tym samym jest tylko kwestią czasu, kiedy cały ten system się zawali.

#### Sens modelu Steema

Działający od prawie 10 lat system Bitcoin (a także wszystkie inne kryptowaluty, w tym Ethereum) udowodnił, że społecznościowy system ekonomiczny może finansować się z inflacji.

Muszą jednak być spełnione następujące trzy warunki:

1. Poziom inflacji jest na rozsądnym poziomie, co zwykle oznacza przedział 5-10%.
2. Rynek postrzega potencjał ekspansji systemu (w sensie liczby użytkowników) na poziomie istotnie wyższym niż poziom inflacji.
3. Inflacja zmierza w długim okresie do zera (klika lub kilkadziesiąt lat).

Dyskusyjne jest czy warunek (3) jest konieczny - być może nie jest.

## Istota propozycji dla Sygnetu

Dla systemu Sygnet proponujemy rozwiązanie analogiczne do modelu Steema.

Zauważmy że:

- Odpowiednikiem twórcy postów w Steemie jest w Sygnecie dawca informacji (służącej do weryfikacji tożsamości osoby K).
- Odpowiednikiem kuratora postów w Steemie jest w Sygnecie biorca informacji. Konsumuje on informację za pośrednictwem osoby K, bo to de facto ona dokonuje interakcji z dawcą informacji (i także ona decyduje z usług którego konkretnie dawcy informacji skorzystać).

Wtedy:

- Podobnie jak w Steemie dzienną pulę inflacyjną dystrybuujemy wśród dawców informacji (służącej do weryfikacji tożsamości). Każda konsumpcja tej informacji to oddanie głosu na danego dawcę informacji.
- Podobnie jak w Steemie siła głosu jest proporcjonalna do liczby Sygnetowych tokenów będących w posiadaniu biorcy informacji (a dokładniej - do wielkości udziału tokenów biorcy informacji w całkowitej populacji Sygnetowych tokenów).
- Podobnie jak w Steemie trzeba mieć jakąś minimalną liczbę Sygnetowych tokenów żeby móc skorzystać z systemu Sygnet. Posiadanie tej minimalnej liczby tokenów powoduje, że z systemu możesz korzystać rzadko (np. raz na minutę), a to ograniczenie szybko maleje wraz ze wzrostem liczby posiadanych tokenów.
- Podobnie jak w Steemie każde nowe konto zasilane jest minimalną liczbą Sygnetowych tokenów, tak żeby jego właściciel był w stanie korzystać z systemu jako biorca informacji. Zasilenia dokonujemy my, tj. beneficjenci ICO - jest to jeden z naszych kosztów.
- Podobnie jak w Steemie rozliczenie puli inflacyjnej działa w cyklu dobowym, czyli regularnie raz na dobę.

#### Przykład

Załóżmy, że Sygnet ma kapitalizację 10 mln USD, wyemitowano do tej pory 100 mln tokenów, a inflacja jest na poziomie 4% rocznie, co oznacza, że codziennie jest do rozdania około 10k tokenów z puli inflacyjnej (przy tej kapitalizacji jest to równowartość około 1k USD).

Załóżmy, że stan posiadania danego biorcy informacji to 1% Sygnetowych udziałów, więc dysponuje on liczbą 100 tokenów z puli inflacyjnej (100 = 1% z 10k tokenów). Załóżmy dalej, że danym dniu skorzystał on (a w zasadzie jego klienci skorzystali) z usługi dwóch dawców informacji, z takim rozkładem:

- 80% zapytań było skierowanych do dawcy A,
- 20% do dawcy B,

Wówczas w rozliczeniu puli inflacyjnej dawca A dostaje z tytułu powyższej sytuacji 80 tokenów, a dawca B dostaje 20 tokenów. Oczywiście powyższe rozliczenie to jest tylko fragment większej całości, bo z tytułu obsługi klientów innych biorców informacji dawcy A i B dostaną kolejne porcje tokenów w tym cyklu rozliczeniowym.

#### Czy jest możliwość nadużycia?

Oczywiście jedna osoba może udawać, że jest jednocześnie dawcą i biorcą informacji, co jest analogiczne do upvote'u własnego postu na Steemie. Jednak z doświadczenia Steema wynika, że tego rodzaju nadużycia nie są powszechne (głównie dlatego że są łatwo wykrywalne) i tym samym nie są groźne dla poprawnego funkcjonowania systemu.

#### Co uzyskujemy?

Korzyści są na wielu frontach jednocześnie:

- Uzyskujemy system który jest **postrzegany** jako darmowy (chociaż w istocie nie jest, bo żywi się własną inflacją). W konsekwencji posiadane przez biorców informacji tokeny nie zużywają się.
- Nie trzeba kupować tokenów żeby móc zacząć używać systemu Sygnet, bo minimalną wymaganą dawkę tokenów dostajesz gratis przy założeniu Sygnetowego konta i te tokeny się nie zużywają.
- Im więcej masz tokenów, tym cenniejszy jest twój głos w dystrybucji puli inflacyjnej i z tym większą częstotliwością możesz korzystać z systemu w roli biorcy informacji.

#### Innowacyjność

W zakresie tokenów emitowanych poprzez ICO powszechnie obowiązujące podejście jest następujące: stwarzamy jakąś, wyrażoną za pomocą smart-kontraktu, usługę, a związany z tą usługą token istnieje tylko po to żeby biorca tej usługi mógł nim zapłacić dawcy.

Powyższe podejście ma jedną istotną wadę: potrzebujemy skłonić potencjalnego biorcę usługi do nabycia tokenu **zanim** ma on szansę z niej skorzystać. Jest to istotna przeszkoda w adopcji.

Natomiast proponowany przez nas model ekonomiczny sprawia, że usługa w swojej podstawowej wersji jest oferowana **za darmo**, co w oczywisty sposób niweluje barierę wejścia dla nowych użytkowników. Żeby to osiągnąć w pełni wykorzystujemy atuty technologii blockchain i uzyskujemy właściwości ekonomiczne, których nie można zrealizować w żaden inny sposób: proponowany przez nas model inflacyjny jest realizowalny tylko za pomocą smart-kontraktu - nikt by temu mechanizmowi nie zaufał gdyby było inaczej.

Nasza konkluzja jest następująca: modele ekonomiczne tokenów emitowanych do tej pory na ICO **niepotrzebnie** próbują obciążyć użytkownika kosztami w postaci opłat za oferowane usługi. Powoduje to istotny problem z adopcją, a niewiele to zmienia z punktu widzenia inwestora.

**Wychodzimy z założenia że dla inwestora ważniejsze jest istotne zwiększenie szans na masową adopcję (co spowoduje istotną aprecjację tokenu) niż kilkuprocentowe rozwodnienie kapitału spowodowane inflacją.**

Łatwo zauważyć racjonalność tego podejścia - bazuje ono na założeniu, które jak najbardziej ma rację bytu: że tempo wzrostu popularności systemu Sygnet (mierzone liczbą nowych użytkowników na rok) będzie większe niż poziom jego rocznej inflacji. Założenie to da się łatwo spełnić, jeśli inflacja jest na rozsądnym poziomie 5-10%, bo startup tego typu albo szybko rośnie, albo szybko umiera.

#### Model sprawdzony empirycznie

Według naszej wiedzy Sygnet ma szansę być pierwszym tokenem emitowanym na blockchainie (tj. nie posiadającym własnego natywnego blockchaina), który stosuje model ekonomiczny typowy dla blockchaina, tj. ekspansję poprzez inflację.

Poniżej przedstawione jest porównanie wychwytujące analogie pomiędzy różnymi podejściami. Widać w nim wyraźnie, że to co proponujemy dla Sygnetu to model ekonomiczny, który jest innowacyjny ale też analogiczny do tych, które sprawdziły się empirycznie:

- Bitcoin/Ethereum: mining poprzez spalanie prądu
- Maidsafe/Sia: mining poprzez dostarczanie przestrzeni dyskowej
- Golem: minng poprzez dostarczanie mocy obliczeniowej do machine learing / rendering
- Steem: mining poprzez dostarczanie wartości intelektualnej i artystycznej (t.j. contentu internetowego)
- EOS: mining poprzez dostarczanie mocy obliczeniowej do procesowania transakcji
- Sygnet: mining poprzez dostarczanie informacji służącej do weryfikacji tożsamości

#### Limit liczby tokenów

To co można zrobić (i to ma teraz Steem, ale na początku nie miał) to ustanowić w kodzie Sygnetowego smart-kontraktu górny limit liczby tokenów, który zostanie osiągnięty w jakimś w miarę odległym czasie np. 5-10 lat.

I wtedy Sygnetowa inflacja zmierzałaby asymptotycznie do zera w wybranej przez nas perspektywie czasowej, co oznacza że Sygnet ma tyle czasu żeby wypracować inny niż inflacyjny mechanizm ekonomiczny, np monetyzacja reputacji.

Cap inflacyjny niewątpliwie daje uspokojenie posiadaczom tokenów: inflacji postrzeganej jako czynnik psujący wycenę jest z upływem czasu coraz mniej. Doświadczenie z ICO EOSa dowodzi, że inwestor jest w stanie znieść dość dużą inflację (nawet 100% rocznie), o ile ma ona wyraźny cel i limit czasowy.

#### Nie tylko banki

Bank, jako dawca informacji, jest dla nas cennym partnerem, bo tożsamość potwierdzona przez bank jest bardziej wiarygodna niż tożsamość potwierdzona przez inne podmioty.
Jednak nasz mechanizm weryfikacji tożsamości jest na tyle abstrakcyjny, że podmiotem będącym dawcą informacji może być także podmiot niebankowy.

Więc być może optymalną strategią jest zacząć od współpracy z podmiotem niebankowym, np. kimś takim jak Allegro, z dwóch powodów:

- proces współpracy technologicznej będzie tu prawdopodobnie łatwiejszy,
- do takiego podmiotu bardziej przemawiają argumenty finansowe.

Ponadto, jeśli pierwszym partnerem będzie nie-bank, stawia to nas w dużo lepszej pozycji negocjacyjnej podczas rozmowy z bankiem. 

## Q&A

> Widzę tylko trudność w wytłumaczeniu tego innym podmiotom.

To jest podobna trudność jaką miał i ma Steem. Bardzo niewiele osób rzeczywiście rozumie mechanizm ekonomiczny Steema, chociaż mnóstwo osób go używa i tym samym przyjmuje, że ma on sens. Okazuje się, że użytkownicy nie muszą dokładnie rozumieć mechanizmów ekonomicznych żeby móc z nich uczestniczyć.

To co jest ważne to to żeby system był łatwo wytłumaczalny w zakresie sposobu korzystania z niego (w przeciwieństwie do sposobu w jaki jest on skonstruowany).

A instrukcja użycia w zakresie finansowym jest bardzo prosta:

- Dla biorcy informacji: *Usługa jest za darmo, nic nie musisz płacić. Gdybyś chciał jednak korzystać z systemu z większą częstotliwością to musisz wejść w posiadanie tokenów (odpowiednik nabycia licencji na wersję pro), ale te tokeny się nie zużywają, więc wysiłek (czasowy i finansowy) popełniasz tylko raz.*
- Dla dawców informacji: *Za oferowanie informacji dostajesz tokeny, które mają wartość finansową wyznaczaną przez rynek. Możesz te tokeny trzymać licząc na aprecjację albo sprzedać i uzyskać fiat.*



> Musimy założyć, że za rok, dwa banki otworzą się na krypto. Bo na razie to mają chyba taką nieformalną zmowę, żeby nie używać tokenów oficjalnie.

Bank (albo inna firma dysponująca wiarygodną informacją o tożsamości, np. Allegro) ma majątek w postaci informacji o tożsamości, który trudno jest zmonetyzować, bo potrzebna jest do tego duża skala działania. Takim firmom nie opłaca się wchodzić w układy, które mają małą szansę na uzyskanie dużej skali. My dajemy im propozycję, która ma potencjał na masowość z prostego powodu: jest ona za darmo (z punktu widzenia użytkownika), podobnie jak np. płatność kartą.

Ponadto mając zapas kapitału w postaci fiat uzyskanego z ICO jesteśmy w dobrej pozycji żeby przez dłuższy czas nakręcać ekspansję systemu, co dodatkowo zwiększa szansę powodzenia.



> Dla tradycyjnych biznesów może być problem z oszacowaniem przychodów. Bo czy nie jest tak ze wypłata dla nich będzie zależała od ilości zapytań? Tak jak upvote na Steemie?

Rzeczywiście wypłata za dostarczanie informacji będzie zależała od wyceny całości systemu (tj. kapitalizacji tokenu), podobnie jak to ma miejsce w Steemie. Tak więc nie sposób tego dokładnie oszacować.

Ale nawet gdybyśmy zastosowali tradycyjny model ekonomiczny (tj. taki jak np. [Civic](https://www.civic.com/), czyli mamy token, którym się płaci za usługi dostarczania informacji) to i tak problem braku dobrego oszacowania przychodów dla dawców informacji pozostaje.

Jednak brak dokładnej wyceny wpływów dla dawców informacji, nie stawia nas na straconej pozycji. W tej chwili podmioty dysponujące informacją o tożsamości nie mają żadnych wpływów z tego tytułu, więc jeśli dostarczymy cokolwiek istotnie większego niż zero i co dodatkowo ma potencjał dużej skali, to to się broni.



> Inflacja jest prastarym, ukrytym podatkiem którego się używa żeby wywołać ruch w interesie i zapobiec przetrzymywania tokenów bez obrotu nimi.

Istotnie, inflacja jest ukrytym podatkiem, ale ma ona potencjał napędzania inwestycji, oczywiście gdy jest stosowana z umiarem.

Do tej pory monopol na posługiwanie się inflacją miał emitent waluty narodowej, czyli aparat państwowy. Teraz, dzięki istnieniu wynalazku blockchaina, ten mechanizm jest do dyspozycji podmiotów biznesowych. Dostęp do mechanizmu inflacyjnego jest być może największym atutem jaki daje blockchain.

Biznes blockchainowy może mieć własną walutę i ten pozornie drobny fakt zmienia wszystko: biznes blockchainowy żyje z inflacji, a jedyną sensowną miarą jego kondycji finansowej jest to: w jakim stopniu inflacja jest zrównoważona potencjałem ekspansji danego biznesu na nowych użytkowników (bo ci nowi użytkownicy generują popyt na walutę tego biznesu i ten popyt równoważy inflację).

Można też spojrzeć na to w ten sposób: owszem można stosować tradycyjny model biznesowy na blockchainie, ale tego rodzaju podejście nie ma szans w konfrontacji z podejściem inflacyjnym. Biznes który może żyć z inflacji a tego nie robi, przegra z biznesem, który bierze inflację i obraca ją na swoją korzyść.