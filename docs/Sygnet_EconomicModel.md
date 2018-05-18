## Problem

Zauważmy że naszym zadaniem jest dostarczenie modelu ekonimicznego który będzie generował motywację do działania dla następujących trzech podmitów:

* Dawca Informacji (służącej do weryfikacji tożsamości osoby K)
* Biorca informacji (który potrzebuje zweryfikowac osobę K)
* Osoba K, której dotyczy informacja i która jest przedmiotem weryfikacji

Oczywisćie dodatkowym warunkiem jest sprawienie żeby token był postrzegany jako warty posiadnia, tj. żeby jego posiadanie rodziło wymierne korzyści i żeby tych korzyści było tym więcej im więcej mamy tego tokenu.

## Geneza

Pomysł na model ekonomiczny tokenu w systemie Sygnet Inspirowany jest mechanizmem ekonomicznym systemu Steem. 

#### Jak działa Steem?

W największym skrócie model Steema polega na tym że blockchain generuje pulę inflacyjną (w rytmie co 24h, w sumie około 9% rocznie), z której przyznawane są nagordy za posty. Dystrybucja nagród następuje w sposób proporcjionaly do uzyskanego poparcia poprzez tzw. upvote, a każdy głos jest ważony wiekością udziałów głosującego w całkowitej populacji tokenów Steem. Czyli jeśli osoba X ma 1% wszystkich tokenów Steem, a osoba Y ma 0.5%, to głos osoby X ma dwa razy większa siłę niż osoby Y i tym samym X ma dwa razy większy wpływ na sposób dytrybucji nagród danego dnia.

Zauważmy, że w powyżsyzm mechanizmi enagordy pochcodza z puli inflacyjnej, a nie z portfela osób które głosują na posty. Jest ot krytcyznie ważna właściwość, która w dużej mierze determinuje popularność systemu i relatywnie dużą aktywność uczystników. Rozdawanie wspólnej puli przychodzi ludziom znacznie łatwiej niż nagradzanie kogoś z własnej kieszeni.

Zauważymy też, że  systemie Steema liczba tokenów do rozdanie każdego dnia jest taka sama, tj. wszytskie tokeny muszą być rozdane. Więc decyzje głosujących wpływają jednynie na do kogo te nowo wygneerowane tokeny trafią, a nie na to ile ich zostanie danego dnia rozdane.

#### Krytyka modelu Steema

Najczęszczym zarzutem jest porównanie Steema do piramidy finansowej. Krytycy zakładają że nagrody pochodzące z inflacji w ich rozumieniu biorą się "z powietrza" i tym samym jest tylko kwestią czasu kiedy cały ten system się zawali.

#### Sens modelu Steema

Działający od prawie 10 lat system Bitcoin (a także wszytkie inne krypotowaluty, w tym Etehreum) udowodnił, że społecznościowo wspierany system ekonomiczny może finansować się z inflacji.

Muszą jednak być spełnione następujące trzy warunki:

1. Poziom inflacji jest na rozsądnym poziomie, co zwykle oznacza przedział 5-10%.
2. Rynek postrzega potencjał ekspansji systemu (w sensie liczby użytkowników) na poziomie istotnie wyższym niż poziom inflacji.
3. Inflacja zmierza w długim okresie do zera  (klika lub kiladziesiąt lat).

Dyskusyjne jest czy warunek (3) jest konieczny - być może nie jest.

## Istota propozycji dla Sygnetu

Dla systemu Sygnet proponujemy rozwiązanie analogiczne do modelu Steema.

Zauważmy że:

* Odpowiednikiem twórcy postów w Steemie jest w Sygnecie dawca informacji (służącej do weryfikacji tożsamości osoby K).
* Odpowiednikiem kuratora postów w Steemie jest w Sygnecie bioraca informacji. Konsumuje on informację za pośrednictwem osoby K, bo to de facto ona dokonuje interakcji z dawcą informacji (i także ona decyduje z usług którego konkretnie dawcy informacji skorzystać).

Wtedy:

* Podobnie jak w Steemie dzienną pulę inflacyjną dystrybujemy wśród dawców informacji (służącej do weryfikacji tożsamości). Każda konsumpcja tej informacji to oddanie głosu na danego dawcę informacji.
* Podobnie jak w Steemie siła glosu jest proporcjonalna do liczby Sygnetowych tokenów będących w posiadaniu biorcy informacji (a dokładniej - do udziału tokenów biorcy informacji w całkowitej populacji Sygnetowych tokenów).
* Podobnie jak w Steemie trzeba mieć jakąś minimalną lliczbę Sygnetowych tokenów żeby móc skorzystać z systemu Sygnet. Posiadanie tej minimalnej liczby tokenów powoduje, że z syetmu możesz korzystać rzadko (np. raz na minutę), a to ogrniaczenie maleje wraz ze wzrostem liczby posiadanych tokenów.
* Podobnie jak w Steemie rozliczenie działa w cyklu dobowym, czy dystrybucja nagród z puli inflacyjnej następuje regularnie raz na dobę.

#### Przykład

Załóżmy, że Sygnet ma kapitalizację 10 mln USD, wyemitowano do tej pory 100 mln tokenów, a inflacja jest na poziomie 4% rocznie, co oznacza że codziennie jest około do rozdania około 10k tokenów z puli inflacyjnej (przy tej kapitalizacji jest to równowartość około 1k USD).

Załózmy że stan posiadania biorcy informacji to 1% więc dysponuje on pulą 100 tokenów (1% z 10k tokenów). Załóżmy dalej, że danym dniu skorzystał on z usługi dwóch dawców informacji, z takim rozkładem:

* 80% zapytań było skierownaych do dawcy A,
* 20% do dawcy B,

Wówczas w rozliczeniu puli inflacyjnej dawca A dostaje z tytuły powyższej sytuacji 80 tokenów, a dawca B dostaje 20 tokenów. Oczywiście to rozliczenie to jest tylko fragment większej całości, bo z tytułu obsługi klientów innych biorców inforacji dawcy A i B dostaną kolejne tokeny w tym cyklu rozliczeniowym.

#### Możliwość nadużycia

Oczywiście jedna osoba może udawać że jest jednocześnie dawcą i biorcą informacji, co jest analogiczne do upvote'u własnego postu na Steemie. Z doświadczenia Steema wynika, że tego rodzaju nadużycia nie są powszechne (bo są łatwo wykrywalne) i tym samym nie są groźne dla poprawengo funkcjonaowania systemu.

#### Co uzyskujemy?

Korzyści są na wielu frontach jednoczesńie:

* Uzyskujemy system który jest **postrzegany** jako darmowy (chociaż w istocie nie jest, bo żywi się własną inflacją). Posiadane przez biorców informacji tokeny nie zużywają się.
* Nie trzeba kupować tokenów żeby móc zacząć go używać, bo minimalną wymaganą dawkę tokenów dostajesz gratis przy założeniu Sygnetowego konta i te tokeny się nie zużywają.
* Im więcej masz tokenów tym cenniejszy jest twój głos w dystrybucji puli inflacyjnej i z tym większą częstotliwością możesz korzystać z systemu jako biorca informacji.

#### Innowacyjność

W zakresie tokenów emitowanych poprzez ICO powszechnie obowiązujące podejście jest następujące: stwarzamy jakąś, wyrażoną za pomocą smart-kontraktu, usługę, a związany z ta usługą token jest po to żeby biorca tej usługi mógł nim zapłacić dawcy.

Podejście to ma jedną istotną wadę: potrzebujemy skłonić potencjalnego biorcę usługi do nabycia tokenu **zanim** ma on szansę z niej skorzystać. Jest to istotna przeszkoda w adopcji.

Natomiast powyższy model ekonomiczny sprawia że usługa w swojej podstawowej wersji jest oferowana **za darmo**, co w oczywisty sposób niweluje barierę wejscia dla nowych użytkowników. Żeby to osiągnąc wykorzystjemy atuty technologii blockchain, ktorych nie można zrealizować w żaden inny sposób: proponowany przez nas model inflacyjny jest realiowalny tylko za pomocą smart-kontraktu - nikt by temu mechanizmowi nie ufał gdyby było inaczej.

Według naszej wiedzy Sygnet ma szansę być pierwszym tokenem emitowanym na blockchainie (tj. nie posiadającym własnego natywnego blockchaina), który stosuje model ekonomiczny typowy dla blockchiana, tj. ekspansja poprzez inflację.

Poniżej porównanie wychwytujące analogie pomiędzy różnymi podjeściami:

* Bitcoin/Ethereum: mining poprzez spalanie prądu
* Maidsafe/Sia: mining poprzez dostarczanie przestrzeni dyskowej
* Golem: minng poprzez dostarczanie mocy obliczeniowej do machine learing / rendering
* Steem: mining poprzez dostarczanie wartości intelektualnej/artystycznej (t.j. contentu internetowego)
* EOS: mining poprzez dostarczanie mocy obliczeniowej do procesowania transakcji
* Sygnet: mining poprzez dostarczanie informacji służącej do weryfikacji tożsamości





> Pomysł super. Widzę tylko trudność w wytłumaczeniu tego innym podmiotom.

To jest podobna trudność jaką ma Steem. Bardzo niewiele osób rzeczywiście rozumie mechanizm ekonomiczny Steema, a mnóstwo osób go używa i wierzy że ma on sens.
Co więcej, ta wiara w sens Steema jest uzasadniona, bo rzeczywiście ma on sens.



Zróbmy małą korektę modelu: te twoje 10 USD z puli inflacyjnej rozkłada się na dawców informacji proporcjonalnie do twojej liczby zapytań do każdego z nich.

Generalnie chodzi o to że płacisz z puli inflacyjnej a nie z własnej kieszeni, a twoja zapłata jest tym większa im większy masz stake. Na tym że de facto polega geniusz Steema - bo wszystko się upraszcza, a każdy ma wrażenie że system jest darmowy.

Koszty działania systemu są przerzucone na inflację - tak de facto działa każde krypto, w tym Bitcoin, Ethereum, Steem i EOS.

Tokeny emitowane na ICO *niepotrzebnie* starają się bilansować przychody z kosztami. To nie jest potrzebne, a jedynie powoduje problem z adopcją.

Jedyne co jest potrzebne, to założenie że tempo wzrostu popularności Sygnetu będzie większe niż poziom jego inflacji. A to da się łatwo spełnić jeśli ta inflacja jest na rozsądnym poziomie 5-10%.

Mamy szansę być pierwszym tokenem, który ma model ekonomiczny wzięty z blockchaina a nie tradycyjny - czyli taki który próbuje bilansować koszty z przychodami.

To jest rewolucyjne, przynajmniej w perspektywie ICO. 

Nabywcy naszego Sygnetowego tokenu sprzedawanego w ICO obstawiają tylko jedną rzecz: że Tokenika jest w stanie wprowadzić w życie system potwierdzania tożsamości, którego popularność wśród użytkowników będzie rosła w tempie większym niż 5-10% rocznie.

Ja bym kupił taki token, jeśli tylko bym uznał że firma która za tym stoi jest w miarę kompetentna i uczciwa.

No tak, to się idealnie składa. Stosujemy model ekonomiczny blockchaina, na którym robimy emisję tokenu.

Bank/allegro jest w podobnej sytuacji jak osoba która umie doskonale pisać (i do tej pory nigdzie nie mogła tego publikować) i której odpowiadasz o takim systemie jak Steem.

Dość trudno jest spieprzyć sales pitch w takiej sytuacji. Jedyny wysiłek do którego musisz przekonać to założenie konta w naszym systemie, plus mniejsza lub większa modyfikacja API. Reszta to same korzyści.



> Musimy założyć, że za rok, dwa banki otworzą się na krypto. Bo na razie to mają chyba taką nieformalną zmowę, żeby nie używać tokenów oficjalnie

Ale one będą tylko dostawać od nas tokeny o niezerowej wartości. Jak nie będą chciały ich używać (tj. później sprzedać je na rynku i dostać za to fiat), to tym lepiej dla nas.



>  Tylko czy to je zachęci do współpracy jakieś tam “żetony”

Zacznijmy od kogoś takiego jak Allegro. Posiadanie konta w systemie Sygnet na które regularnie ktoś wpłaca ci Sygnetowe tokeny o niezerowej wartości nie jest nielegalne.

A zachęcić do współpracy możemy kładąc na stół fiat uzyskany z ICO - przynajmniej na początku.

Banki są cennym partnerem bo tożsamość potwierdzona przez bank jest zapewne bardziej wiarygodna niż tożsamość potwierdzona przez Allegro.

Ale konkluzja z wczorajszej burzy mózgów jest taka że nie jesteśmy uzależnieni tylko od banków. Jeśli jakiś bank w to wejdzie to super, jeśli nie wejdzie to szukamy innych, niebankowych partnerów.

Czyli jesteśmy w dużo lepszej pozycji negocjacyjnej. Myślę że Korus z nami to zrobi, nawet jeśli pierwszym partnerem będzie nie-bank.

Może nawet chętniej to zrobi, bo łatwiej jest pójść z Sygnetem do banku, jeśli ma się wcześniej zaklepany deal z Allegro.
Współpracę z Allegro można łatwiej kupić za fiat. Dla banku fiat jest na drugim planie, bardziej liczy się dla niego bezpieczeństwo. (edited)



> Dla tradycyjnych biznesów może być problem z oszacowaniem przychodów. Bo czy nie jest tak ze wypłata dla kich będzie zależała od ilości zapytań? Tak jak upvote na Steemie?

Rzeczywoście wypłata za dostarczanie informacji będzie zależała od wyceny całości systemu, podobnie jak w Steemie. Więc nie sposób tego dokładnie oszacować.

Mając zapas kapitału w postaci fiat z ICO jesteśmy w dobrej pozycji żeby przez dłuższy czas nakręcać ekspansję systemu.

Ale brak dokładnej wyceny wpływów z tytułu dostarczania informacji, nie stawia nas na straconej pozycji. W tej chwili Allegro/bank ma zero wpływów z tego tytułu. Jeśli dostarczymy cokolwiek istotnie większego niż zero to to się broni.

Trzeba ich przekonać że prawdopodobny przychód jest istotnie większy niż koszt wpięcia się w nasz system.

Ale nawet gdybyśmy to zrobili w sposób tradycyjny (tj. tak jak Civic, czyli jest token którym się płaci za usługi dostarczania informacji) to i tak problem braku dobrego oszacowania przychodów dla dawców informacji pozostaje.

W ogóle ten problem istnieje nawet jeśli by to robić poza blockchainem. To jest główne ryzyko dla Allegro/banku: popełnią wysiłek i nic z tego się nie uda, albo korzyści będą znikome w stosunku do poniesionych nakładów.

Ale chyba jest tak że minimalny przychod dla dawcy informacji to wartość tej informacji w oczach biorcy informacji. Tego celu nie osiągniemy tylko wtedy gdy wycena rynkowa Sygnetu będzie żenująco mała w stosunku do jego postrzeganej użyteczności. Wg mnie to się może zdarzyć tylko w przypadku generalnej depresji na całym rynku krypto.

Mi się wydaje że fakt że Steem przeżył dwa lata, i mimo fatalnego UI ma się dobrze i wciąż rośnie, to jest mega argument dla sceptyków.

Pamiętam że dwa lata temu miałem podobne rozmowy na temat Steema - nikt mi nie wierzył że to ma realną szansę przeżyć. Na pewno będzie opór mentalny, ale to da się pokonać jeśli samemu się to dobrze rozumie.

To co można zrobić (i to ma teraz Steem, ale na początku nie mial) to ustanowić w kodzie Sygnetowego smart-kontraktu górny limit liczby tokenów, który zostanie osiągnięty w jakimś w miarę odległym czasie np. 5-10 lat.

I wtedy Sygnetowa inflacja zmierzałaby asymptotycznie do zera w tej perspektywie czasowej, co oznacza że Sygnet ma tyle czasu żeby  wypracować inny niż inflacyjny mechanizm ekonomiczny, np ekspansja w obszar reputacji. I to ma sens, bo za kilka lat Sygnet będzie albo powszechnie używany albo martwy, raczej nie ma opcji pośredniej.

A cap inflacyjny daje uspokojenie posiadaczom tokenów: psującej wycenę inflacji jest z czasem coraz mniej.

Fakt że to budzi mentalny opór jest naturalny, bo blockchianowa ekonomia wykracza poza schematy które znamy. Mi to zajęło klika lat żeby zacząć klarownie widzieć mechanizm ekonomiczny blockchaina. Nie jest to łatwe, bo blockchain nie ma sensu z punktu widzenia klasycznej analizy ekonomicznej biznesu.

To co cenię w EOSie i Steemie to fakt, że te systemy są w pełnej harmonii z blockchianową ekonomią i niczego nie zmiatają pod dywan - w otwarty i świadomy sposób korzystają z właściwości tego nowego paradygmatu. Natomiast inne systemy blockchainowe dość nieświadomie udają coś innego niż to czym w istocie są, np. ludziom się wydaje że opłaty transakcyjne są istotnym elementem blockchanowej ekonomii,  podczas gdy ich znaczenie jest niemal zerowe, bo przychody z tytułu opłat transakcyjnych są znikome w porównaniu z kosztami operacyjnymi blockchaina.

Innymi słowy, na blockchainie nie ma sensu robić biznesów, które mają tradycyjny model ekonomiczny, który polega na tym że są jakieś koszty i jakieś przychody i one się muszą jakoś bilansować, a wartość firmy wynika z przewidywanego strumienia przyszłych dywidend. Biznes blockchainowy ma własną walutę i ten pozornie drobny fakt zmienia wszystko: biznes blockchainowy żyje z inflacji, a jedyną sensowną miarą jego kondycji finansowej jest to: w jakim stopniu inflacja jest zrównoważona potencjałem ekspansji danego biznesu na nowych użytkowników (bo ci nowi użytkownicy generują popyt na walutę tego biznesu i ten popyt równoważy inflację).

Można też spojrzeć na to w ten sposób: owszem można stosować tradycyjny model biznesowy na blockchainie, ale tego rodzaju podejście nie ma szans w konfrontacji z podejściem inflacyjnym. Biznes który może żyć z inflacji a tego nie robi, przegra z biznesem, który bierze inflację i obraca ją na swoją korzyść.

Dowód na to jest dość prosty: żaden z biznesów blockhainowych nie próbuje nawet żyć bez inflacji (tj. równoważyć koszty z przychodami), a te nieliczne które próbowały to zrobić (np. BitShares) poddały się po kilku miesiącach i przeszły na model inflacyjny. To co jest paradoksalne to fakt, że ludziom się *wydaje* że inflacja jest zła i ekspansja biznesu poprzez inflację to scam, podczas gdy ludzkie działanie pokazuje coś przeciwnego: rynek ładuje kasę w systemy inflacyjne, a unika systemów bezinflacyjnych.

Dla mnie miarą prawdy jest ludzkie działanie a nie wypowiadane poglądy.

> Z resztą inflacja jest prastarym, ukrytym podatkiem którego się używa żeby wywołać ruch w interesie i zapobiec przetrzymywania tokenów bez obrotu nimi.

Tak, inflacja jest podatkiem, który napędza inwestycje (oczywiście gdy jest rozsądnie stosowany) i na który do tej pory miał aparat państwowy. Teraz ten mechanizm jest do dyspozycji podmiotów biznesowych. I to jest ogromna zmiana, której wagi jakoś nie doceniasz. Posiadanie przez biznes tego mechanizmu inflacyjnego jest prawdopodobnie największym atutem jaki daje blockchain.

> wycena opiera się na ludzkiej fantazji głównie
> Ale nam się porobiło. Ja widzę mądrość rynku a Ty uważasz że to zbiorowa fantazja. Dwa lata temu było dokładnie na odwrót. Mądrość nie w sensie że rynek jest nieomylny (jest omylny bo inaczej nie byłoby fluktuacji cen) ale bardziej w sensie że do większej mądrości nie mamy dostępu.

> Ci użytkownicy generują popyt nie tyle na walutę, co na załatwienie konkretnej potrzeby. Takiej którą da się załatwić też inaczej - np autoryzację online. Stąd token w końcu dostanie właściwą wycenę, to jest kwestia czasu tylko. Jedyny parametr który to zaburza teraz to spekulacja że to będzie ogromny rynek itp. W związku z tym ludzie kupują spekulacyjnie, tworząc bańki, albo wyceny bez żadnych fundamentów.

Bo tych fundamentów nie ma i nigdy nie będzie. Token dostanie wycenę ale ona nie ma nic wspólnego z marżą jaką ten biznes generuje. Marża jest zaniedbywalnie mała w porównaniu z potencjałem dalszej ekspansji.

Zróbmy taki eksperyment myślowy: w który token władowałbyś kasę? Ten co ma kapitalizację 10 mln USD, zrównoważone finanse i ma szansę rozwijać się w tempie 10% rocznie? Czy ten który ma kapitalizację 10 mld, niezrównoważone finanse (tj. same koszty, żadnych przychodów) i ma szansę rozwijać się w tempie 100% rocznie. Rynek wybiera ten drugi i ja się w sumie zgadzam z rynkiem. Gdy rozważamy biznesy futurystyczne (bo takimi zajmują się blockchainy) kapitalizacja nie ma znaczenia, bo dywidendy nie mają znaczenia.

Zróbmy taki eksperyment myślowy: w który token władowałbyś kasę? Ten co ma kapitalizację 10 mln USD, zrównoważone finanse i ma szansę rozwijać się w tempie 10% rocznie? Czy ten który ma kapitalizację 10 mld, niezrównoważone finanse (tj. same koszty, żadnych przychodów) i ma szansę rozwijać się w tempie 100% rocznie. Rynek wybiera ten drugi i ja się w sumie zgadzam z rynkiem. Gdy rozważamy biznesy futurystyczne (bo takimi zajmują się blockchainy) kapitalizacja nie ma znaczenia, bo dywidendy nie mają znaczenia.

