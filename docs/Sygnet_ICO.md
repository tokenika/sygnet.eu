# Token analogiczny do tokenu EOSa

Załóżmy, że umawiamy się z bankiem, że jest pewna darmowa pula zapytań do jego API, np. 1000 dziennie, a powyżej tego progu zapytania stają się płatne.

I wtedy robimy tak jak EOS to zrobił: jak masz 1% naszych tokenów, to masz dostęp do 1% tej darmowej puli. Tym sposobem nie trzeba przesyłać tych tokenów, wystarczy je mieć. I one się nie zużywają, podobnie jak tokeny EOSa.

Oczywiście wszystko wtedy wisi na tym, że my honorujemy te tokeny. Więc jak my znikniemy, to ich wartość spadnie do zera. Jest to model analogiczny do tego w jakim działa Coinfirm.

Więc naszymi tokenami się nie płaci, tylko się je posiada i trzyma w swoim portfelu. Tym samym odpada cały ten problem ze sprzedawaniem ich firmom i później odkupywaniem ich od banku.

Ale oczywiście te nasze tokeny można transferować po to żeby je komuś sprzedać albo oddać.

# Utility token

W ICO robimy przedsprzedaż usługi dla tych, którzy w przyszłości będą chcieli korzystać z niej za darmo. Jeśli w ten sposób zdefiniujemy tokeny (tj. jako prawo do udziału w darmowej puli) to jest to ewidentnie utility token, a nie equity.

Gdybyśmy się dogadali z bankiem to moglibyśmy z nim ustalić, że w dziennie możemy za darmo zweryfikować poprzez jego API np. 0.5% liczby jego wszystkich klientów.

Mamy wtedy układ win-win:

* Bank jest zadowolony, bo uzyskuje pewność, że nie będziemy nadużywać jego API.
* My jako emitenci tokena też jesteśmy zadowoleni, bo uzyskujemy dobre uzasadnienie dla jego istnienia: daje on dostęp do tej darmowej puli - oczywiście do momentu, kiedy się ona nie wyczerpie na dany dzień*.

*Być może pule powinny być w innych jednostkach czasu, np. godzina.

# Negatywny cashflow jest OK

Prawdopodobnie będziemy mieć negatywny cashflow, tj. pieniądze uzyskane w ICO będą płynąć do banków jako rekompensata za oferowaną Sygnetowi darmową pulę.

No ale to ma sens. Pieniądze w ICO dostajemy w zasadzie za darmo (bo nie oddajemy za nie udziałów w firmie), więc naturalne jest, że nie powinniśmy móc ich sobie w całości wziąć, lecz właśnie zużyć na subsydiowanie usługi dla posiadaczy naszych tokenów.

# Przykład

Wzorujemy się na mechanice rate-limiting EOSa. Jeśli suma puli na dany dzień (we wszystkich bankach z którymi współpracujmy) wynosi 10k weryfikacji, a ty masz 1% naszych tokenów to:

- Jeśli tego dnia jest **duży** popyt na nasze usługi, to masz max 100 weryfikacji za darmo (10k * 1% = 100).
- Jeśli tego dnia jest **mały** popyt na nasze usługi, to masz szansę dostać więcej niż 100 weryfikacji za darmo (w skrajnym przypadku, gdy nikt inny nie korzysta z puli, możesz nawet dostać wszystkie 10k za darmo).

# Wartość tokenu

Inwestor kupując nasz token spekuluje w zakresie dwóch obaszarów:

1. przyszłej popularności naszego serwisu i jego rzeczywistej użyteczności dla KYC,
2. naszego potencjału dogadania się z wieloma bankami.

Odnośnie pkt 2: gdy zwerbujemy jakieś 3 małe banki, to suma puli będzie mała. Ale jeśli dogadamy się z 10 dużymi, to suma puli będzie spora. Oczywiście 1% udziału w dużej puli jest znacznie lepsze niż 1% w małej. Tak więc im większa pula (czyli im więcej banków jest w naszym systemie), tym wyższa powinna być cena naszego tokenu.

# Podsumowanie

Idea sprowadza się do tego:

> Użyć funduszy uzyskanych ze sprzedaży tokenów na to żeby uczynić nasz produkt darmowym dla posiadaczy tych tokenów, tj. przekonać banki do zaoferowania nam darmowej puli.

To wygląda na dobry trop, bo możemy w ten sposób się mówić, że nasza usługa jest gratis - oczywiście do pewnego limitu, a limit zależy od procentowego udziału w naszych tokenach. Czyli dokładnie tak jak "darmowe transakcje" w EOSie.