# Sygnet - propozycja modelu ekonomicznego

Wersja 2.0 (24/05/2018)

*W zakresie tokenów emitowanych poprzez ICO powszechnie obowiązujące podejście jest następujące: token przepływa z portfela beneficjenta usługi do portfela dawcy usługi. To podejście ma fundamentalną wadę, która radykalnie utrudnia adopcję: potrzebujemy skłonić potencjalnego biorcę usługi do nabycia tokenu zanim ma on szansę z niej skorzystać. Proponowany przez nas model ekonomiczny jest zupełnie inny: token przepływa do portfela dawcy z puli inflacyjnej, a portfel biorcy pozostaje nienaruszony. Oznacza to, że usługa w swojej podstawowej wersji jest oferowana za darmo, co w oczywisty sposób niweluje barierę wejścia dla nowych użytkowników.*

## 1. Kto jest uczestnikiem modelu?

W systemie Sygnet mamy trzy rodzaje uczestników:

- Dawca informacji (służącej do weryfikacji tożsamości osoby K),
- Biorca informacji (który potrzebuje zweryfikować osobę K),
- Osoba K, której dotyczy informacja i która jest przedmiotem weryfikacji.

Przyjmujemy, że model ekonomiczny powinien dotyczyć przede wszystkim dwóch pierwszych typów uczestników, tj. dawcy i biorcy informacji, bo to między tymi podmiotami następuje przepływ usługi.

Natomiast rola trzeciego uczestnika, tj. osoby K, jest mniej oczywista. Początkowo przyjęliśmy, że osoba K jest tylko przedmiotem transakcji (a nie podmiotem), a jej główną motywacją jest tylko to, żeby proces weryfikacji jej tożsamości był szybki i wygodny, co wskazywałoby na to, że można wykluczyć osobę K z rozliczeń.

Jednak po przemyśleniu uznaliśmy, że zachęta ekonomiczna dla konsumentów może mieć duże znaczenie dla popularyzacji systemu. Może ona spowodować, że powstaną nowe firmy wyspecjalizowane w weryfikacji tożsamości - ale do tego będą one potrzebowały zachęcić konsumentów do powierzenia im swoich tożsamości. Dlatego też przyjęliśmy, że jeśli jest chęć po stronie dawcy informacji żeby włączyć osobę K do rozliczeń, to powinna ona też być uwzględniona w modelu (zakładając że dysponuje ona kontem w systemie).

## 2. Cel modelu

Z punktu widzenia biznesowego chcemy spełnić następujące kryteria:

1. Token musi być postrzegany jako warty posiadania, tj. jego posiadanie powinno rodzić wymierne korzyści i tych korzyści powinno być tym więcej, im więcej mamy tego tokenu.
2. Sposób działania tokenu powinien wspierać masową adopcję systemu. Idealnie by było żeby użytkownik mógł zacząć używać systemu bez konieczności wcześniejszego zakupu tokenu.
3. Używanie tokenu powinno być uwolnione od ryzyka cenowego. Większość użytkowników chce używać tokenu w celu uzyskania usługi, a nie spekulować na jego wartości.
4. Token powinien w większym stopniu nagradzać tych dawców informacji, którzy mają większą wiarygodność i tym samym informacja dostarczona przez nich jest cenniejsza niż informacja z innych źródeł.
5. Powinna być możliwość automatycznego przekierowania do osoby K części zapłaty uzyskanej przez dawcę  (zakładając że osoba K dysponuje kontem w systemie).

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

Dla systemu Sygnet proponujemy rozwiązanie podobne do modelu Steema.

Zauważmy że:

- Odpowiednikiem twórcy postów w Steemie jest w Sygnecie dawca informacji (służącej do weryfikacji tożsamości osoby K).
- Odpowiednikiem kuratora postów w Steemie jest w Sygnecie biorca informacji. Co prawda konsumuje on informację nie bezpośrednio lecz za pośrednictwem osoby K, bo to de facto ona dokonuje interakcji z dawcą informacji (i także ona decyduje z usług którego konkretnie dawcy informacji skorzystać), ale to nie zmienia faktu, że biorca informacji jest beneficjentem analogicznym do kuratora w Steemie.

Są też jednak istotne różnice:

- Steem jest zdecydowanie systemem B2C (business-to-consumer), podczas gdy Sygnet jest bardziej B2B (business-to-business).
- W Steemie posty są dobrem powszechnego użytku, podczas gdy w Sygnecie beneficjentem usługi jest tylko jeden podmiot.

Biorąc pod uwagę powyższe podobieństwa i różnice, proponujemy następujący schemat działania:

- Każdy dawca informacji sam decyduje na ile ceni swoją wiarygodność poprzez zadeklarowanie ceny za pojedynczą porcję informacji (służącej do weryfikacji jednej osoby). Zmiany w "cenniku" mogą być dokonywane przez dawcę z dowolną częstotliwością.

- Dzienną pulę inflacyjną dystrybuujemy wśród biorców informacji proporcjonalnie do udziału posiadanych przez nich Sygnetowych tokenów w całkowitej populacji tych tokenów. Te przyznane im środki mogą oni wydać danego dnia na konsumpcję informacji dostarczanych przez dawców, z zastrzeżeniem że środki te nie mogą być wydane na nic innego niż zapłata dla dawców.
- Niewydane przez biorców danego dnia środki przepadają (są spalane). Wydatki biorców ponad przyznaną im część puli inflacyjnej tymczasowo idą z portfela biorcy, z tym że może on liczyć na ich częściowy albo całkowity zwrot, jeśli okaże się, że danego dnia inni biorcy informacji nie wykorzystali w pełni swojego przydziału.
- Opcjonalnie część środków otrzymanych przez dawcę może być przekierowana na osobę K, której dotyczy weryfikacja tożsamości. Zakładamy tu, że osoba K ma założone konto w systemie - przekonanie klienta K, że warto to zrobić, pozostawiamy dawcy.
- Podobnie jak w Steemie każde nowe konto zasilane jest minimalną liczbą Sygnetowych tokenów, tak żeby jego właściciel był w stanie w podstawowym zakresie korzystać z systemu jako biorca informacji. Tego początkowego zasilenia dokonujemy my, tj. beneficjenci ICO, i jest to jeden z naszych kosztów.
- Podobnie jak w Steemie rozliczenie puli inflacyjnej działa w cyklu dobowym.
- Wszystkie przepływy finansowe są wyrażone w walucie fiat (np. USD lub EUR). Zakładamy tu, że system będzie zasilany z zewnątrz bieżącą ceną tokenu w stosunku do fiat i będzie automatycznie dokonywał stosownych konwersji.

#### 5.2 Przykład

Załóżmy, że w danym momencie Sygnet ma kapitalizację 10 mln USD, wyemitowano do tej pory 100 mln tokenów, a inflacja jest na poziomie 4% rocznie, co oznacza, że codziennie jest do rozdania około 10k tokenów z puli inflacyjnej (przy tej kapitalizacji jest to równowartość około 1k USD).

Załóżmy, że stan posiadania danego biorcy informacji to 1 mln tokenów, czyli ma on 1% udziału w całkowitej populacji 100 mln Sygnetowych tokenów. Oznacza to, że dysponuje on liczbą 100 tokenów z puli inflacyjnej (1% z 10k tokenów które są w puli), czyli ma do wydania równowartość 10 USD. Załóżmy dalej, że w danym dniu skorzystał on (a w zasadzie skorzystali jego klienci, będący przedmiotem weryfikacji tożsamości) z usługi dwóch dawców informacji, z następującym rozkładem:

- było 18 zapytań do dawcy A, który wycenia się na 0.3 USD za jedno zapytanie
- były 12 zapytań do dawcy B, który wycenia się na 0.5 USD za jedno zapytanie

Wówczas całkowite wydatki biorcy to 11.4 USD (= 18 * 0.3 + 12 * 0.5). Z tego 10 USD pochodzi z puli inflacyjnej a 1.4 USD musiał on dołożyć z własnego portfela.

Załóżmy dodatkowo, że pula inflacyjna tego dnia nie została w pełni wykorzystana i nasz biorca informacji dostał dodatkowe 0.8 USD z tej puli na pokrycie nadwyżki, którą wydał z własnego portfela. Wówczas całkowity jego koszt poniesiony tego dnia redukuje się do 0.6 USD (= 11.4 - 10 - 0.8)

#### 5.3 Czy jest możliwość nadużywania systemu?

Oczywiście jeden uczestnik systemu Sygnet może "wykradać" tokeny z puli inflacyjnej poprzez udawanie, że jest jednocześnie dawcą i biorcą informacji, co jest analogiczne do upvote'u własnego postu na Steemie.

Jednak z doświadczenia Steema wynika, że tego rodzaju nadużycia nie są powszechne (głównie dlatego że są łatwo wykrywalne) i tym samym nie są groźne dla poprawnego funkcjonowania systemu.

Czynnikiem który demotywuje do tego rodzaju działania, jest fakt istnienia korzystnego dla nas sprzężenia: im większa jest liczba posiadanych przez danego uczestnika tokenów, tym większa rodzi się motywacja po jego stronie do nienadużywania systemu, bo ma to wpływ na cenę tokenu.

#### 5.4 Co uzyskujemy?

Korzyści są na wielu frontach jednocześnie:

- Uzyskujemy system który jest **postrzegany** jako darmowy (chociaż w istocie nie jest, bo żywi się własną inflacją).
- Nie trzeba kupować tokenów żeby móc zacząć używać systemu Sygnet, bo minimalną wymaganą dawkę tokenów dostajesz gratis przy założeniu Sygnetowego konta i te tokeny się nie zużywają - oczywiście jeśli korzystasz z systemu zgodnie z przyznanym limitem.
- Im większym udziałowcem jest biorca, tym większy ma on dostęp do środków pochodzących z puli inflacyjnej, i tym samym z tym większą intensywnością może on korzystać z systemu.
- Im większa jest postrzegana wiarygodność dawcy, tym wyższe ceny może on dyktować za swoje usługi i tym samym może on wybrać sobie strategię cenową wedle własnego uznania.
- Zarówno koszty biorcy jak i przychody dawcy są uniezależnione od fluktuacji cenowych tokenu.
- Dawca informacji ma możliwość dzielenia się swoim przychodem z osobą K, której informacje są przedmiotem usługi. Tym samym ma narzędzie finansowe pozwalające zachęcić konsumentów do powierzenia im swoich tożsamości.

Wygląda to na win-win dla każdego, a jedyną stroną, która ponosi negatywne konsekwencje jest inwestor (bo inflacja, z której to wszystko jest finansowane, stopniowo rozwadnia jego udziały). Jednak to co skłania inwestora do ponoszenia tych konsekwencji, to perspektywa aprecjacji tokenu wynikająca z radykalnego wzrostu jego popularności.

## 6. Uzasadnienie wyboru modelu

#### 6.1 Różnica wobec tokenu płatniczego

W przypadku tokenu płatniczego (tj. takiego który przepływa z portfela biorcy do portfela dawcy) mamy jedną istotną wadę: potrzebujemy skłonić potencjalnego biorcę usługi do nabycia tokenu **zanim** ma on szansę z niej skorzystać. Jest to istotna przeszkoda w adopcji.

Natomiast proponowany przez nas token inflacyjny ma zupełnie inną charakterystykę: przepływa on do portfela dawcy z puli inflacyjnej, a portfel biorcy pozostaje w większości przypadków nienaruszony. Oznacza to, że usługa w swojej podstawowej wersji jest oferowana **za darmo**, co w oczywisty sposób niweluje barierę wejścia dla nowych użytkowników.

Żeby to osiągnąć w pełni wykorzystujemy atuty technologii blockchain i uzyskujemy właściwości ekonomiczne, których nie można zrealizować w żaden inny sposób: proponowany przez nas model inflacyjny jest realizowalny tylko za pomocą smart-kontraktu, bo w przeciwnym przypadku nikt by temu mechanizmowi nie mógł w pełni zaufać. Tylko niemodyfikowalny smart-kontrakt jest w stanie zagwarantować nienaruszalność inflacji i tym samym niezmienność reguł gry.

#### 6.2 Punkt widzenia inwestora

Nasza hipoteza jest następująca: stosowane do tej pory w ICO modele tokenów płatniczych **niepotrzebnie** próbują obciążyć użytkownika kosztami w postaci opłat za oferowane usługi. Powoduje to istotny problem z adopcją, a niewiele to zmienia z punktu widzenia inwestora.

**W naszym podejściu wychodzimy z założenia, że dla inwestora ważniejsze jest istotne zwiększenie szans na masową adopcję (co z kolei spowoduje istotną aprecjację tokenu) niż kilkuprocentowe rozwodnienie kapitału spowodowane inflacją.**

Łatwo dostrzec racjonalność tego podejścia. Bazuje ono na dość realnym założeniu, że roczne tempo wzrostu popularności systemu (manifestujące się poprzez wzrost popytu na token) będzie większe niż 5-10% na rok, czyli poziom jego inflacji.

Warto też zauważyć, że kryptowaluty rządzą się innymi prawami niż akcje przedsiębiorstw. Ostatecznym powodem, dla którego warto posiadać akcje, jest potencjał otrzymywania dywidendy. Natomiast w przypadku kryptowalut ostatecznym powodem jest możliwość korzystania z danej usługi.

Tak więc w przypadku tradycyjnych, nieblockchainowych biznesów próba finansowania się poprzez ciągłą emisję własnych akcji prawdopodobnie skończyłaby się samobójstwem finansowym. Natomiast w przypadku kryptowalut nie jest to takie oczywiste, bo mamy istotną różnicę w postrzeganym celu, który jest do osiągnięcia:

* Spekulacja inwestorów na rynku akcji jest w następującym zakresie: *jaki będzie popyt na daną akcję ze strony przyszłych **inwestorów**?* Liczy się zdolność do generowania zysków (i tym samym wysokość przewidywanej w przyszłości dywidendy).
* Natomiast w przypadku kryptowalut spekulacja inwestorów jest w innym zakresie: *jaki będzie popyt na dany token ze strony przyszłych **użytkowników**?* Liczy się zdolność do masowej adopcji, niezależnie od istnienia zysków (bo i tak nie ma dywidendy).

#### 6.3 Limit liczby tokenów

To co można dodatkowo zrobić (i to ma teraz Steem, ale na początku nie miał) to ustanowić w kodzie Sygnetowego smart-kontraktu górny limit liczby tokenów, który zostanie osiągnięty w jakimś w miarę odległym czasie np. 5-10 lat.

I wtedy Sygnetowa inflacja zmierzałaby asymptotycznie do zera w wybranej przez nas perspektywie czasowej, co oznacza że Sygnet ma tyle czasu żeby wypracować inny niż inflacyjny mechanizm ekonomiczny, np. monetyzacja reputacji.

Limit inflacyjny niewątpliwie daje uspokojenie posiadaczom tokenów: inflacji postrzeganej jako czynnik psujący wycenę jest z upływem czasu coraz mniej. Doświadczenie z ICO EOSa dowodzi, że inwestor jest w stanie znieść dość dużą inflację (nawet 100% rocznie), o ile ma ona wyraźny cel i limit czasowy.

#### 6.4 Model sprawdzony empirycznie

Według naszej wiedzy Sygnet ma szansę być pierwszym tokenem emitowanym na blockchainie (tj. nie posiadającym własnego natywnego blockchaina), który stosuje model ekonomiczny typowy dla blockchaina, tj. ekspansję poprzez inflację.

Poniżej przedstawione jest porównanie wychwytujące analogie pomiędzy różnymi podejściami w świecie kryptowalut. Widać w nim wyraźnie, że to co proponujemy dla Sygnetu to model ekonomiczny, który jest innowacyjny ale też jednocześnie analogiczny do tych, które sprawdziły się empirycznie:

- Bitcoin/Ethereum: mining poprzez spalanie prądu.
- Steem: mining poprzez dostarczanie wartości intelektualnej i artystycznej (tj. contentu internetowego).
- EOS: mining poprzez dostarczanie mocy obliczeniowej do procesowania transakcji.
- Sygnet: mining poprzez dostarczanie informacji służącej do weryfikacji tożsamości.

#### 6.5 Porównanie z innymi podejściami

Poniżej prezentujemy porównanie wad i zalet trzech alternatywnych metod konstrukcji tokenu: dywidendowy, płatniczy i inflacyjny. Wynika z niego, że proponowany przez nas token inflacyjny (ostatnia kolumna) jest relatywnie najlepszym wyborem, szczególnie w sytuacji, w której głównym czynnikiem decydującym o sukcesie jest uzyskanie efektu sieciowego.

```eval_rst
+----------------------------------------------+--------------------+----------------------+------------------+
| Funkcjonalność                               | Token Dywidendowy  | Token Płatniczy      | Token Inflacyjny |
+==============================================+====================+======================+==================+
| Brak konieczności zaufania do emitenta tokenu| ---                | Tak                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Brak bariery wejścia dla użytkownika         | ---                | ---                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Stabilność kosztu dla biorcy informacji      | Tak                | ---                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Stabilność przychodu dla dawcy informacji    | Tak                | ---                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Usługa postrzegana jako darmowa              | ---                | ---                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Brak zagrożenia konkurencją cenową           | ---                | ---                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Stabilna liczba wyemitowanych tokenów        | Tak                | Tak                  | ---              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Potencjał dynamicznej ekspansji systemu      | ---                | ---                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
| Innowacyjność rozwiązania                    | ---                | ---                  | Tak              |
+----------------------------------------------+--------------------+----------------------+------------------+
```

