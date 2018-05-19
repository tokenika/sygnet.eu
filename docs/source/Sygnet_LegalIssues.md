# Pytania w zakresie prawa

W pierwszej kolejności potrzebujemy uzyskać perspektywę ograniczoną do polskiego prawa, a dopiero w dalszej kolejności UE - szczególnie jeśli odpowiedzi dotyczące Polski będą podważać nasz model biznesowy.

## 1. Obowiązek udostępniania danych osobowych przez banki

Czy z legislacji PSD2 (albo jakiejkolwiek innej) wynika, że bankowe API ma obowiązek obsługiwać zapytania TPP dotyczące danych osobowych klienta banku? Mamy tu na myśli tylko bardzo podstawowe dane (tj. te które są zawarte w dowodzie osobistym i nie służą niczemu innemu poza ustaleniem tożsamości danej osoby). I oczywiście zakładamy, że klient banku explicite wyraża na to zgodę - generalnie lub każdorazowo. Jeśli po stronie banku takiego obowiązku nie ma - czy jest jakieś prawo, które zabrania bankowi oferowanie tego rodzaju usługi dla TPP (działającym w imieniu klienta)?

*ASPSP ciągle walczą o to, aby przyjęła się wykładnia, że nie mają obowiązku podawać danych innych niż imię nazwisko i numer rachunku posiadacza. TPP próbują wywalczyć dostęp do wszystkich informacji, które są w bankowości elektronicznej. ASPSP powołują się na kluczowy argument, że PSD2 to jest obowiązku dostęp do rachunku płatniczego, a nie do bankowości elektronicznej. TPP powołują się na przepis RTS o ekwiwalentności informacji w interfejsie klienta vs interfejsie PSD2. W mojej ocenie początkowo może zwyciężyć podejście, że udostępnia się jedynie imie nazwisko i numer rachunku. Nie ma przeszkód, aby ASPSP zaoferował tego rodzaju usługę dla TPP – wtedy jedna najpewniej bank zażąda umowy z TPP.* 

## 2. Obowiązek stosowania przez banki kwalifikowanego podpisu elektronicznego

Czy z legislacji PSD2 (albo jakiejkolwiek innej) wynika, że **na życzenia klienta** bank ma obowiązek podpisać dane (dotyczące tego klienta) uzyskane poprzez bankowe API swoim kwalifikowanym podpisem elektronicznym? Zakładamy tu, że celem tego podpisu jest uwiarygodnienie źródła pochodzenia tych danych. Jeśli po stronie banku takiego obowiązku nie ma - czy jest jakieś prawo, które uniemożliwia bankowi oferowanie tego rodzaju usługi dla TPP (działającym w imieniu klienta)?

*ASPSP ma obowiązek ZIDENTYFIKOWAĆ się certyfikatem eIDAS, ale nie ma obowiązku podpisywania konkretnych danych. Zasadniczo nie ma przeszkód, aby ASPSP coś takiego zaoferował.*

## 3. Moc prawna weryfikacji tożsamości na podstawie certyfikatu banku

Wiemy, że drogą specjalnej umowy firma X może powierzyć firmie Y proces ustalenia tożsamości klienta (np. klient okazuje kurierowi dowód osobisty i na oczach kuriera podpisuje się) i to ustalenie tożsamości ma moc prawną. Czy firma X może z podobnym dla siebie skutkiem prawnym powierzyć firmie Y wyżej opisany proces ustalenia tożsamości klienta, jeśli jest on wykonywany w sposób alternatywny, tj. poprzez wykazanie, że **specjalnie w tym jednorazowym celu** klient dokonał autoryzacji wymaganej przez interfejs swojego banku i uzyskał od tego banku (certyfikowany podpisem elektronicznym banku) zestaw danych poświadczających jego (tj. klienta) tożsamość?

*Wymaga analizy.*

## 4. Esemes jak 2FA w świetle PSD2

Czy 2FA wykonywany poprzez mechanizm esemesa spełnia wymogi SCA, o których mowa w PSD2? Czy wątpliwości wyrażone w [tej publikacji](https://blog.vasco.com/application-security/psd2/) są zasadne? W załączeniu znajduje się też plik PDF z analizą w tym zakresie wykonaną przez [paymentscompliance.com](https://paymentscompliance.com/premium-content/insights_analysis/current-authentication-tools-%E2%80%98not-compatible-psd2%E2%80%99). Czy jesteśmy w stanie dostarczyć argumenty prawne przemawiające za słusznością wątpliwości wyrażonych w tym dokumencie?

*Zgodnie z opiniami autorytetów IT SMS w powiązaniu z inicjacją transakcji w przeglądarce w telefonie łącznie nie zapewniają spełnienia warunków, których RTS wymaga wobec urządzeń wielofunkcyjnych.*