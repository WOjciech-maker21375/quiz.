const instalacje_CCTV = [

{
category:"CCTV",
question:"Co oznacza skrót CCTV w polskiej terminologii technicznej?",
answers:[
"Telewizja cyfrowa satelitarna.",
"System centralnego zarządzania ruchem.",
"Telewizja dozorowa (telewizja w obwodzie zamkniętym).",
"System alarmowy p-poż."
],
correct:"Telewizja dozorowa (telewizja w obwodzie zamkniętym)."
},

{
  category: "CCTV",
  question: "literą (E) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "obiektywową", "osłonę bi polarną transpordera"],
  correct: "Obiektyw"
},

{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "dystans od obiektywu do obiektu", "dystans od obiektywu do Przetwornika", "Ogniskową"],
  correct: "dystans od obiektywu do obiektu"
},

{
  category: "CCTV",
  question: "literą (B) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Przetwornicę", "Ogniskową"],
  correct: "Przetwornik"
},

{
  category: "CCTV",
  question: "literą (C) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "kąt padania światła"],
  correct: "Kąt widzenia"
},

{
  category: "CCTV",
  question: "literą (D) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "wyświetlacz", "dystans od obiektywu do obiektu."],
  correct: "Obiektyw"
},

{
  category: "CCTV",
  question: "literą (E) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Ogniskową", "Obiektyw", "ognisko", "dystans od obiektywu do obiektu."],
  correct: "Ogniskową"
},

{
  category: "CCTV",
  question: "Jaka jest prawidłowa kolejność czynności wykonywanych podczas wymiany uszkodzonej kamery monitoringu połączonej z rejestratorem wideo?",
  answers: [
    "Odłączenie przewodu sygnałowego od kamery, odłączenie zasilania od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie zasilania do kamery, podłączenie przewodu sygnałowego do kamery. ", 
    "Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery.", 
    "Odłączenie zasilania od kamery, zdemontowanie kamery, odłączenie przewodu sygnałowego od uszkodzonej kamery i podłączenie do nowej, zamontowanie kamery, podłączenie zasilania do kamery.", 
    "Odłączenie zasilania od rejestratora, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do rejestratora.  dodaj mi to pytanie w tym stylu."
  ],
  correct: "Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery."
},

{
category:"CCTV",
question:"Główną różnicą między funkcją WDR a BLC jest to, że WDR umożliwia:",
answers:[
"Rozjaśnienie pierwszego planu kosztem znacznego prześwietlenia tła.",
"Jednoczesne rozjaśnienie ciemnych elementów i przyciemnienie zbyt jasnych.",
"Wydłużenie czasu naświetlania przetwornika ponad czas trwania klatki.",
"Wyłącznie eliminację szumów powstałych przy kompresji JPEG."
],
correct:"Jednoczesne rozjaśnienie ciemnych elementów i przyciemnienie zbyt jasnych."
},

{
category:"CCTV",
question:"Która funkcja pozwala na pracę kamery w ciemniejszych warunkach poprzez zwiększenie czułości, ale jednocześnie powoduje wzrost poziomu szumów?",
answers:[
"AES (Automatyczna migawka).",
"AGC (Automatyczne sterowanie wzmocnieniem).",
"WB (Balans bieli).",
"WDR (Zakres dynamiki obrazu)."
],
correct:"AGC (Automatyczne sterowanie wzmocnieniem)."
},

{
category:"CCTV",
question:"W trybie automatycznym Balansu Bieli (WB), kolor biały jest odwzorowywany względem:",
answers:[
"Najciemniejszego punktu obrazu.",
"Najjaśniejszego punktu obrazu.",
"Predefiniowanego wzorca światła sztucznego.",
"Złącza RS-232."
],
correct:"Najjaśniejszego punktu obrazu."
},

{
category:"CCTV",
question:"Stosowanie automatycznej migawki (AES) w obszarach o niewielkim naświetleniu może skutkować niepożądanym efektem w postaci:",
answers:[
"Zwiększenia ziarnistości obrazu (szumów).",
"Rozmazania ruchomych części obrazu.",
"Przekłamania kolorów względem bieli.",
"Zmniejszenia kąta widzenia obiektywu."
],
correct:"Rozmazania ruchomych części obrazu."
},

{
category:"CCTV",
question:"Zmniejszenie parametru ostrości w ustawieniach kamery stosuje się głównie w celu:",
answers:[
"Wygładzenia szumów powstałych na skutek kompresji JPEG.",
"Zwiększenia szybkości pracy migawki AES.",
"Zredukowania efektu oślepienia słońcem.",
"Poprawy identyfikacji pierwszego planu w funkcji BLC."
],
correct:"Wygładzenia szumów powstałych na skutek kompresji JPEG."
},

{
category:"CCTV",
question:"Funkcja BLC (Kompensacja światła tylnego) poprawia widoczność pierwszego planu, jednak odbywa się to kosztem:",
answers:[
"Całkowitej utraty ostrości obrazu.",
"Wystąpienia efektu smużenia jasnych punktów.",
"Rozjaśnienia tła, które staje się mniej czytelne.",
"Zmniejszenia czułości matrycy."
],
correct:"Rozjaśnienia tła, które staje się mniej czytelne."
},

{
category:"CCTV",
question:"Co jest głównym ograniczeniem przy ustawianiu czasu naświetlania w funkcji AES?",
answers:[
"Czas naświetlania nie może być dłuższy niż czas trwania klatki.",
"Zbyt krótki czas powoduje zawsze przekłamanie balansu bieli.",
"Konieczność stosowania wyłącznie kamer monochromatycznych.",
"Wymóg posiadania zasilacza o napięciu większym niż 12V."
],
correct:"Czas naświetlania nie może być dłuższy niż czas trwania klatki."
},

{
category:"CCTV",
question:"W jakich warunkach, według zasad doboru sprzętu, kamery czarno-białe (monochromatyczne) posiadają niepodważalną przewagę nad kolorowymi?",
answers:[
"Podczas obserwacji obiektów szybko przemieszczających się.",
"W warunkach dziennych przy silnym nasłonecznieniu.",
"W nocy, ze względu na znacznie wyższą czułość.",
"Gdy wymagana jest duża liczba szczegółów obrazu."
],
correct:"W nocy, ze względu na znacznie wyższą czułość."
},

{
category:"CCTV",
question:"Kiedy następuje przekłamanie wszystkich barw w trybie automatycznego balansu bieli?",
answers:[
"Gdy funkcja AGC jest ustawiona na maksimum.",
"Gdy kamera obserwuje obszar pozbawiony koloru białego.",
"Gdy włączona jest jednocześnie funkcja WDR i BLC.",
"Tylko podczas pracy w nocy w trybie monochromatycznym."
],
correct:"Gdy kamera obserwuje obszar pozbawiony koloru białego."
},

{
category:"CCTV",
question:"Efekt dziwnych 'wzorów na obrazie' (bloków) wynikający z kompresji JPEG jest szczególnie widoczny:",
answers:[
"W pełnym słońcu przy niskim AGC.",
"Podczas używania funkcji WDR w dzień.",
"W nocy.",
"Wyłącznie w kamerach o rozdzielczości CIF."
],
correct:"W nocy."
},

{
category:"CCTV",
question:"Metoda 'prób i błędów' jest zalecana w celu optymalnego ustawienia:",
answers:[
"Rozdzielczości D1.",
"Automatycznego sterowania wzmocnieniem (AGC).",
"Mocowania typu C/CS.",
"Długości przewodu koncentrycznego."
],
correct:"Automatycznego sterowania wzmocnieniem (AGC)."
},

{
category:"CCTV",
question:"Która funkcja jest zdefiniowana jako 'odwzorowanie wszystkich kolorów względem koloru odniesienia'?",
answers:[
"WDR.",
"WB.",
"BLC.",
"AES."
],
correct:"WB."
},

{
category:"CCTV",
question:"Wskaż zdanie PRAWDZIWE dotyczące kamer kolorowych:",
answers:[
"Mają wyższą czułość niż kamery czarno-białe.",
"Ułatwiają obserwację dzięki dużej liczbie szczegółów.",
"Nie wymagają ustawiania balansu bieli.",
"Zawsze posiadają funkcję WDR w standardzie."
],
correct:"Ułatwiają obserwację dzięki dużej liczbie szczegółów."
},

{
category:"CCTV",
question:"Zjawisko, w którym obiekt przemieszcza się znacznie w ciągu trwania klatki i jest zapisany na całej swej drodze, wynika z:",
answers:[
"Zbyt krótkiego czasu naświetlania.",
"Wydłużenia czasu otwarcia migawki (AES).",
"Błędnego ustawienia balansu bieli.",
"Zastosowania obiektywu o małej ogniskowej."
],
correct:"Wydłużenia czasu otwarcia migawki (AES)."
},

{
category:"CCTV",
question:"Elementy regulacyjne w kamerach przemysłowych pozwalają na prawidłową reprodukcję obrazu. Występują one najczęściej w:",
answers:[
"Kamerach o małej rozdzielczości (240 TVL).",
"Kamerach przemysłowych wyższej klasy.",
"Wyłącznie w kamerach kopułkowych.",
"Kamerach z matrycą 1/6\"."
],
correct:"Kamerach przemysłowych wyższej klasy."
},

{
category:"CCTV",
question:"Jaką główną funkcję pełni protokół ONVIF w nowoczesnych systemach IP?",
answers:[
"Służy do zasilania kamer przez skrętkę.",
"Zapewnia kompatybilność między urządzeniami różnych producentów.",
"Przyspiesza formatowanie dysków twardych.",
"Szyfruje sygnał Wi-Fi."
],
correct:"Zapewnia kompatybilność między urządzeniami różnych producentów."
},

{
category:"CCTV",
question:"Technologia WDR (Wide Dynamic Range) w kamerze odpowiada za:",
answers:[
"Możliwość nagrywania dźwięku stereo.",
"Poprawne odwzorowanie obrazu w warunkach dużych kontrastów oświetlenia.",
"Zwiększenie kąta widzenia obiektywu.",
"Szybsze przesyłanie danych do chmury."
],
correct:"Poprawne odwzorowanie obrazu w warunkach dużych kontrastów oświetlenia."
},

{
category:"CCTV",
question:"Który element kamery odpowiada bezpośrednio za przetwarzanie światła na sygnał elektryczny?",
answers:[
"Procesor sygnałowy DSP.",
"Obiektyw.",
"Przetwornik obrazu (np. CMOS lub CCD).",
"Oświetlacz podczerwieni."
],
correct:"Przetwornik obrazu (np. CMOS lub CCD)."
},

{
category:"CCTV",
question:"Co oznacza termin 'ogniskowa obiektywu' wyrażona w milimetrach?",
answers:[
"Odległość kamery od rejestratora.",
"Parametr określający kąt widzenia i przybliżenie obrazu.",
"Grubość soczewki.",
"Zasięg diod podczerwieni w nocy."
],
correct:"Parametr określający kąt widzenia i przybliżenie obrazu."
},

{
category:"CCTV",
question:"Kamera z obiektywem 2.8mm w porównaniu do obiektywu 12mm posiada:",
answers:[
"Większe przybliżenie i wąski kąt widzenia.",
"Szeroki kąt widzenia i mniejsze przybliżenie.",
"Lepszą odporność na uderzenia.",
"wbudowany procesor HHTTVD."
],
correct:"Szeroki kąt widzenia i mniejsze przybliżenie."
},

{
category:"CCTV",
question:"Jakie napięcie jest najczęściej stosowane do zasilania pojedynczych kamer CCTV (analogowych i IP bez PoE)?",
answers:[
"12V DC.",
"24V AC.",
"230V AC.",
"5V USB."
],
correct:"12V DC."
},

{
category:"CCTV",
question:"Technologia PoE (Power over Ethernet) pozwala na przesyłanie danych i zasilania za pomocą:",
answers:[
"Kabla koncentrycznego.",
"Skrętki komputerowej (np. UTP kat. 5e/6).",
"Kabla telefonicznego dwużyłowego.",
"Światłowodu."
],
correct:"Skrętki komputerowej (np. UTP kat. 5e/6)."
},

{
category:"CCTV",
question:"Standard PoE 802.3af pozwala na zasilenie urządzenia o mocy maksymalnej około:",
answers:[
"5 W.",
"15.4 W.",
"60 W.",
"100 W."
],
correct:"15.4 W."
},

{
category:"CCTV",
question:"Co oznacza skrót NVR (Network Video Recorder)?",
answers:[
"Rejestrator do kamer analogowych.",
"Rejestrator sieciowy dla systemów IP.",
"Kamera z wbudowanym dyskiem.",
"Zasilacz buforowy."
],
correct:"Rejestrator sieciowy dla systemów IP."
},

{
category:"CCTV",
question:"Rejestrator DVR (Digital Video Recorder) stosuje się zazwyczaj w systemach:",
answers:[
"Wyłącznie światłowodowych.",
"Analogowych (np. AHD, TVI, CVI).",
"Bezprzewodowych Wi-Fi.",
"Satelitarnych."
],
correct:"Analogowych (np. AHD, TVI, CVI)."
},

{
category:"CCTV",
question:"Jak nazywa się funkcja automatycznego ruchu kamery między zaprogramowanymi punktami?",
answers:[
"Zoom optyczny.",
"Patrol (lub Preset).",
"Detekcja twarzy.",
"Maska prywatności."
],
correct:"Patrol (lub Preset)."
},

{
category:"CCTV",
question:"Co to jest filtr mechaniczny IR-cut (ICR)?",
answers:[
"Rodzaj obudowy wandaloodpornej.",
"Element odsuwany w dzień, aby poprawić kolory, i przysuwany w nocy dla podczerwieni.",
"Programowy filtr odszumiający obraz.",
"Zabezpieczenie przed przepięciami."
],
correct:"Element odsuwany w dzień, aby poprawić kolory, i przysuwany w nocy dla podczerwieni."
},

{
category:"CCTV",
question:"Standard kompresji H.265 (HEVC) w porównaniu do H.264 pozwala na:",
answers:[
"Nagrywanie tylko w czerni i bieli.",
"Zmniejszenie zajmowanego miejsca na dysku o ok. 50% przy zachowaniu jakości.",
"Zwiększenie napięcia zasilania kamery.",
"Całkowitą rezygnację z dysku twardego."
],
correct:"Zmniejszenie zajmowanego miejsca na dysku o ok. 50% przy zachowaniu jakości."
},

{
category:"CCTV",
question:"Co oznacza parametr IK10 w specyfikacji kamery?",
answers:[
"Wodoodporność do 10 metrów.",
"Najwyższą odporność na uderzenia mechaniczne (wandaloodporność).",
"Liczbę obsługiwanych użytkowników.",
"Maksymalny zoom cyfrowy."
],
correct:"Najhighestszą odporność na uderzenia mechaniczne (wandaloodporność)."
},

{
category:"CCTV",
question:"Jaką maksymalną odległość transmisji zasilania i danych przyjmuje się dla standardowego łącza PoE na skrętce?",
answers:[
"10 metrów.",
"100 metrów.",
"500 metrów.",
"1 kilometr."
],
correct:"100 metrów."
},

{
category:"CCTV",
question:"Złącze BNC jest charakterystyczne dla systemów:",
answers:[
"CCTV IP.",
"CCTV Analogowych (HD-CVI, AHD, TVI).",
"Internetu światłowodowego.",
"Systemów audio."
],
correct:"CCTV Analogowych (HD-CVI, AHD, TVI)."
},

{
category:"CCTV",
question:"Funkcja 'Maska prywatności' w kamerze służy do:",
answers:[
"Nagrywania w ukryciu.",
"Zasłonięcia wybranych stref obrazu, których nie chcemy monitorować.",
"Nakładania logo firmy na obraz.",
"Szyfrowania nagrań hasłem."
],
correct:"Zasłonięcia wybranych stref obrazu, których nie chcemy monitorować."
},

{
category:"CCTV",
question:"Oświetlacz podczerwieni (IR) pozwala kamerze na:",
answers:[
"Widzenie przez ściany.",
"Rejestrację obrazu w całkowitej ciemności.",
"Pomiar temperatury intruza.",
"Oślepienie złodzieja."
],
correct:"Rejestrację obrazu w całkowitej ciemności."
},

{
category:"CCTV",
question:"Co oznacza skrót PTZ w odniesieniu do kamer obrotowych?",
answers:[
"Power, Tension, Zone.",
"Pan, Tilt, Zoom (Obrót, Pochylenie, Powiększenie).",
"Primary Technical Zone.",
"Passive Thermal Zoom."
],
correct:"Pan, Tilt, Zoom (Obrót, Pochylenie, Powiększenie)."
},

{
category:"CCTV",
question:"Bitrate w systemie CCTV IP określa:",
answers:[
"Ciężar fizyczny kamery.",
"Ilość danych przesyłanych w jednostce czasu (wpływa na jakość i obciążenie sieci).",
"Liczbę diod podświetlenia.",
"Częstotliwość odświeżania monitora."
],
correct:"Ilość danych przesyłanych w jednostce czasu (wpływa na jakość i obciążenie sieci)."
},

{
category:"CCTV",
question:"Gdzie w systemie CCTV najczęściej montuje się dyski twarde klasy 'Surveillance' (np. WD Purple)?",
answers:[
"Wewnątrz kamery.",
"W rejestratorze (DVR/NVR).",
"W monitorze.",
"W switchu PoE."
],
correct:"W rejestratorze (DVR/NVR)."
},

{
category:"CCTV",
question:"Czym różni się obiektyw zmiennoogniskowy (Motozoom) od stałoogniskowego?",
answers:[
"Stałoogniskowy ma lepsze kolory.",
"Motozoom pozwala na zdalną regulację kąta widzenia i ostrości.",
"Stałoogniskowy nie potrzebuje zasilania.",
"Motozoom działa tylko w nocy."
],
correct:"Motozoom pozwala na zdalną regulację kąta widzenia i ostrości."
},

{
category:"CCTV",
question:"Funkcja DNR (Digital Noise Reduction) służy do:",
answers:[
"Zmniejszenia głośności wentylatora w rejestratorze.",
"Cyfrowej redukcji szumów i zakłóceń na obrazie.",
"Oszczędzania prądu.",
"Szybszego wyszukiwania nagrań."
],
correct:"Cyfrowej redukcji szumów i zakłóceń na obrazie."
},

{
category:"CCTV",
question:"W systemach IP, adres IP kamery służy do:",
answers:[
"Włączania podświetlenia IR.",
"Identyfikacji i komunikacji urządzenia w sieci komputerowej.",
"Ustawienia czasu letniego.",
"Zabezpieczenia przed kradzieżą fizyczną."
],
correct:"Identyfikacji i komunikacji urządzenia w sieci komputerowej."
},

{
category:"CCTV",
question:"Co to jest 'VMS' (Video Management System)?",
answers:[
"Rodzaj wtyczki do kamery.",
"Oprogramowanie do zarządzania wieloma rejestratorami i kamerami.",
"System chłodzenia matrycy.",
"Standard montażu na słupie."
],
correct:"Oprogramowanie do zarządzania wieloma rejestratorami i kamerami."
},

{
category:"CCTV",
question:"Kamera typu 'Fish-eye' (Rybie oko) charakteryzuje się kątem widzenia:",
answers:[
"Bardzo wąskim (do 10 stopni).",
"Standardowym (ok. 90 stopni).",
"Bardzo szerokim, dochodzącym do 180 lub 360 stopni.",
"Regulowanym tylko ręcznie."
],
correct:"Bardzo szerokim, dochodzącym do 180 lub 360 stopni."
},

{
category:"CCTV",
question:"Co oznacza funkcja 'Smart IR'?",
answers:[
"Możliwość wyłączenia podczerwieni przez telefon.",
"Automatyczna regulacja natężenia światła podczerwonego, aby zapobiec prześwietleniu obiektów blisko kamery.",
"Podczerwień działająca tylko po wykryciu twarzy.",
"Podświetlenie w kolorze niebieskim."
],
correct:"Automatyczna regulacja natężenia światła podczerwonego, aby zapobiec prześwietleniu obiektów blisko kamery."
},

{
category:"CCTV",
question:"Przewód typu 'skrętka' do CCTV na zewnątrz powinien być oznaczony symbolem:",
answers:[
"PVC.",
"PE (z wypełnieniem żelowym lub suchy).",
"Biały domowy.",
"YDYp."
],
correct:"PE (z wypełnieniem żelowym lub suchy)."
},

{
category:"CCTV",
question:"W systemach analogowych HD, transformatory wideo (Balun) służą do:",
answers:[
"Zmiany napięcia z 230V na 12V.",
"Przesyłania sygnału wideo z kabla koncentrycznego na skrętkę komputerową.",
"Wzmacniania dźwięku.",
"Chłodzenia rejestratora."
],
correct:"Przesyłania sygnału wideo z kabla koncentrycznego na skrętkę komputerową."
},

{
category:"CCTV",
question:"Rozdzielczość 4K w monitoringu to w przybliżeniu:",
answers:[
"2 megapiksele.",
"4 megapiksele.",
"8 megapikseli.",
"12 megapikseli."
],
correct:"8 megapikseli."
},

{
category:"CCTV",
question:"Funkcja 'Detekcja ruchu' w rejestratorach CCTV najczęściej opiera się na:",
answers:[
"Analizie zmian w pikselach obrazu między klatkami.",
"Czujnikach temperatury wbudowanych w obiektyw.",
"Pomiarze ciśnienia powietrza.",
"Sygnałach z satelity."
],
correct:"Analizie zmian w pikselach obrazu między klatkami."
},

{
category:"CCTV",
question:"Pojęcie 'FPS' (Frames Per Second) w ustawieniach nagrywania oznacza:",
answers:[
"Liczbę klatek na sekundę (płynność ruchu).",
"Rozmiar dysku twardego.",
"Siłę sygnału WiFi.",
"Format kompresji audio."
],
correct:"Liczbę klatek na sekundę (płynność ruchu)."
},

{
category:"CCTV",
question:"Technologia 'ColorVu' lub 'FullColor' w kamerach pozwala na:",
answers:[
"Drukowanie zdjęć w kolorze.",
"Uzyskanie kolorowego obrazu nawet w nocy przy bardzo słabym oświetleniu.",
"Automatyczną zmianę koloru obudowy.",
"Nagrywanie tylko koloru czerwonego."
],
correct:"Uzyskanie kolorowego obrazu nawet w nocy przy bardzo słabym oświetleniu."
},

{
category:"CCTV",
question:"Switch PoE 'unmanaged' (niezarządzalny) charakteryzuje się tym, że:",
answers:[
"Wymaga skomplikowanej konfiguracji.",
"Działa od razu po podłączeniu (Plug & Play) bez możliwości zaawansowanych ustawień.",
"Zasila kamery tylko przez 1 godzinę dziennie.",
"Nie posiada gniazd RJ45."
],
correct:"Działa od razu po podłączeniu (Plug & Play) bez możliwości zaawansowanych ustawień."
},

{
category:"CCTV",
question:"Standard szczelności IP67 dla kamery zewnętrznej oznacza:",
answers:[
"Ochronę tylko przed kurzem.",
"Pełną pyłoszczelność i odporność na krótkotrwałe zanurzenie w wodzie.",
"Możliwość pracy tylko pod dachem.",
"Oporność na temperaturę do 100 stopni."
],
correct:"Pełną pyłoszczelność i odporność na krótkotrwałe zanurzenie w wodzie."
},

{
category:"CCTV",
question:"Co oznacza termin 'Cloud P2P' w dostępie do podglądu kamer?",
answers:[
"Konieczność posiadania stałego, publicznego adresu IP.",
"Łatwe połączenie przez serwer producenta bez konieczności przekierowania portów na routerze.",
"Nagrywanie wyłącznie na chmurach deszczowych.",
"System darmowego internetu dla kamer."
],
correct:"Łatwe połączenie przez serwer producenta bez konieczności przekierowania portów na routerze."
},

{
category:"CCTV",
question:"Kamera termowizyjna w systemie dozoru wykrywa:",
answers:[
"Kolor ubrań intruza.",
"Promieniowanie cieplne emitowane przez obiekty.",
"Tablice rejestracyjne.",
"Dźwięki o wysokiej częstotliwości."
],
correct:"Promieniowanie cieplne emitowane przez obiekty."
},

{
category:"CCTV",
question:"Zjawisko 'Ghostingu' na obrazie z kamery to zazwyczaj efekt:",
answers:[
"Zbyt silnego wiatru.",
"Słabej jakości kabla lub problemów z masą w systemach analogowych.",
"Działania duchów.",
"Zbyt jasnego słońca."
],
correct:"Słabej jakości kabla lub problemów z masą w systemach analogowych."
},

{
category:"CCTV",
question:"Dlaczego w systemach CCTV nie zaleca się stosowania dysków komputerowych klasy 'Desktop'?",
answers:[
"Bo są za drogie.",
"Nie są przystosowane do pracy ciągłej 24/7 i dużych obciążeń zapisem.",
"Mają inny kształt.",
"Nie pasują do gniazd SATA."
],
correct:"Nie są przystosowane do pracy ciągłej 24/7 i dużych obciążeń zapisem."
},

{
category:"CCTV",
question:"Co to jest 'Analityka obrazu' (AI) w kamerach?",
answers:[
"Program do edycji zdjęć.",
"Zaawansowane funkcje rozpoznawania np. ludzi, pojazdów, przekroczenia linii czy wtargnięcia.",
"Ręczne liczenie osób przez operatora.",
"System czyszczenia soczewki."
],
correct:"Zaawansowane funkcje rozpoznawania np. ludzi, pojazdów, przekroczenia linii czy wtargnięcia."
},

{
category:"CCTV",
question:"Adresacja statyczna IP kamery polega na:",
answers:[
"Automatycznym pobieraniu adresu z routera.",
"Ręcznym przypisaniu stałego adresu na stałe do urządzenia.",
"Zmienianiu adresu co 24 godziny.",
"Ukryciu adresu przed siecią."
],
correct:"Ręcznym przypisaniu stałego adresu na stałe do urządzenia."
},

{
category:"CCTV",
question:"Kabel 'trytka' (opaska zaciskowa) w montażu CCTV służy do:",
answers:[
"Przesyłania sygnału.",
"Porządkowania wiązek kabli i ich mocowania.",
"Izolowania przewodów.",
"Zasilania rejestratora."
],
correct:"Porządkowania wiązek kabli i ich mocowania."
},

{
category:"CCTV",
question:"Który z wymienionych standardów kompresji jest najstarszy?",
answers:[
"H.265.",
"H.264.",
"MJPEG.",
"MPEG-4."
],
correct:"MJPEG."
},

{
category:"CCTV",
question:"Zasilacz buforowy w systemie CCTV stosuje się, aby:",
answers:[
"Zwiększyć napięcie do 48V.",
"Zapewnić pracę systemu po zaniku napięcia 230V (z akumulatora).",
"Oszczędzać energię w nocy.",
"Łączyć wiele kamer w jedną."
],
correct:"Zapewnić pracę systemu po zaniku napięcia 230V (z akumulatora)."
},

{
category:"CCTV",
question:"Przetwornik CMOS w kamerach CCTV charakteryzuje się:",
answers:[
"Bardzo wysokim poborem prądu.",
"Szybkim działaniem i niskim kosztem produkcji w porównaniu do CCD.",
"Brakiem możliwości pracy w kolorze.",
"Wymogiem chłodzenia ciekłym azotem."
],
correct:"Szybkim działaniem i niskim kosztem produkcji w porównaniu do CCD."
},

{
category:"CCTV",
question:"Kamera typu 'Dome' to inaczej kamera:",
answers:[
"Tubowa.",
"Kopułkowa.",
"Obrotowa wielka.",
"Ukryta w czujce."
],
correct:"Kopułkowa."
},

{
category:"CCTV",
question:"Standardowy port RJ45 służy do podłączenia kamer typu:",
answers:[
"Analogowych HD.",
"Sieciowych IP.",
"Bezprzewodowych radiowych.",
"Wszystkich powyższych."
],
correct:"Sieciowych IP."
},

{
category:"CCTV",
question:"Formatowanie dysku twardego w rejestratorze powoduje:",
answers:[
"Zwiększenie jego pojemności dwukrotnie.",
"Usunięcie wszystkich dotychczasowych nagrań i przygotowanie struktury plików.",
"Zmianę koloru obrazu na zielony.",
"Aktualizację oprogramowania kamer."
],
correct:"Usunięcie wszystkich dotychczasowych nagrań i przygotowanie struktury plików."
},

{
category:"CCTV",
question:"Pojęcie 'Dual Stream' (Podwójny strumień) pozwala na:",
answers:[
"Nagrywanie na dwóch dyskach jednocześnie.",
"Jednoczesne przesyłanie strumienia wysokiej jakości (zapis) i niskiej (podgląd zdalny).",
"Podłączenie dwóch monitorów do jednej kamery.",
"Rozmowę przez kamerę w obie strony."
],
correct:"Jednoczesne przesyłanie strumienia wysokiej jakości (zapis) i niskiej (podgląd zdalny)."
},

{
category:"CCTV",
question:"Z jakich trzech podstawowych elementów składa się kamera przemysłowa?",
answers:[
"Obudowa, kabel, zasilacz.",
"Przetwornik, obiektyw, zestaw układów obróbki sygnału.",
"Monitor, rejestrator, klawiatura.",
"Dysk twardy, matryca, antena."
],
correct:"Przetwornik, obiektyw, zestaw układów obróbki sygnału."
},

{
category:"CCTV",
question:"Jak nazywa się element kamery cyfrowej przetwarzający obraz na sygnał elektryczny?",
answers:[
"Luminofor.",
"Transponder.",
"Przetwornik (matryca).",
"Wzmacniacz końcowy."
],
correct:"Przetwornik (matryca)."
},

{
category:"CCTV",
question:"Rozwinięcie skrótu matrycy typu CCD to:",
answers:[
"Central Control Device.",
"Charge Coupled Device.",
"Color Crystal Diode.",
"Complementary Circuit Digital."
],
correct:"Charge Coupled Device."
},

{
category:"CCTV",
question:"Który rodzaj matrycy działa na zasadzie fotodiody i posiada wzmacniacz sygnału dla każdego elementu światłoczułego?",
answers:[
"CCD.",
"ODS.",
"O-LED.",
"CMOS."
],
correct:"CMOS."
},

{
category:"CCTV",
question:"Który rodzaj matrycy działa na zasadzie fotodiody i posiada wzmacniacz sygnału dla każdego elementu światłoczułego?",
answers:[
"CCD.",
"DSP.",
"CRT.",
"CMOS."
],
correct:"CMOS."
},

{
category:"CCTV",
question:"Czym charakteryzuje się technologia przetworników całkowicie cyfrowych DSP?",
answers:[
"Każdy element światłoczuły posiada własny przetwornik analogowo-cyfrowy.",
"Obraz jest przesyłany wyłącznie kablem HDMI.",
"Matryca jest wykonana z ciekłego kryształu.",
"Nie wymaga stosowania obiektywu."
],
correct:"Każdy element światłoczuły posiada własny przetwornik analogowo-cyfrowy."
},

{
category:"CCTV",
question:"Która technologia matryc pozwala na odczyt piksela tuż przed nasyceniem, co redukuje efekt prześwietlenia?",
answers:[
"Analogowe CCD.",
"Standardowe CMOS.",
"Technologia cyfrowa DSP.",
"Kineskopowa."
],
correct:"Technologia cyfrowa DSP."
},

{
category:"CCTV",
question:"Zastosowanie grzałki i oświetlacza podczerwieni w obudowie jest typowe dla kamer:",
answers:[
"Wewnętrznych kopułkowych.",
"Zewnętrznych.",
"Kompaktowych biurowych.",
"Ukrytych w czujkach ruchu."
],
correct:"Zewnętrznych."
},

{
category:"CCTV",
question:"Jak nazywają się kamery posiadające wbudowaną głowicę umożliwiającą ruch w poziomie i pionie?",
answers:[
"Stacjonarne.",
"Tubowe.",
"Obrotowe.",
"Kompaktowe."
],
correct:"Obrotowe."
},

{
category:"CCTV",
question:"W jakich jednostkach wyraża się fizyczny rozmiar przetwornika kamery (np. 1/3, 1/4)?",
answers:[
"W milimetrach.",
"W calach.",
"W liniach TV.",
"W luksach."
],
correct:"W calach."
},

{
category:"CCTV",
question:"Zasadniczo, jak wpływa rozmiar matrycy na jakość obrazu?",
answers:[
"Im mniejsza matryca, tym lepszy obraz.",
"Im większa matryca, tym lepsza jakość (więcej pikseli).",
"Rozmiar matrycy nie ma znaczenia dla jakości.",
"Większa matryca zawsze wymaga mniejszego napięcia."
],
correct:"Im message matryca, tym lepsza jakość (więcej pikseli)."
},

{
category:"CCTV",
question:"Parametr TVL (linie telewizyjne) określa w kamerze:",
answers:[
"Pobór prądu.",
"Rozdzielczość (zdolność rozróżniania szczegółów).",
"Kąt widzenia.",
"Długość kabla zasilającego."
],
correct:"Rozdzielczość (zdolność rozróżniania szczegółów)."
},

{
category:"CCTV",
question:"Kamery o podwyższonej rozdzielczości posiadają zazwyczaj około:",
answers:[
"240 linii TV.",
"380 linii TV.",
"600 linii TV.",
"2000 linii TV."
],
correct:"600 linii TV."
},

{
category:"CCTV",
question:"Rozdzielczość D1 w systemach dozorowych odpowiada wartości:",
answers:[
"320 x 240.",
"640 x 480.",
"720 x 576.",
"1280 x 1024."
],
correct:"720 x 576."
},

{
category:"CCTV",
question:"Który parametr określa minimalny poziom światła niezbędny do pracy kamery?",
answers:[
"Rozdzielczość.",
"Czułość.",
"Impedancja.",
"Backlight."
],
correct:"Czułość."
},

{
category:"CCTV",
question:"W jakim celu w kamerach zewnętrznych stosuje się grzałki i wentylatory?",
answers:[
"Aby kamera nie rdzewiała.",
"W celu zachowania warunków poprawnej temperatury pracy.",
"Aby odstraszać owady.",
"Do chłodzenia kabla koncentrycznego."
],
correct:"W celu zachowania warunków poprawnej temperatury pracy."
},

{
category:"CCTV",
question:"Standardowe napięcie zasilania większości kamer przemysłowych to:",
answers:[
"5V DC.",
"12V DC.",
"24V AC.",
"230V AC."
],
correct:"12V DC."
},

{
category:"CCTV",
question:"Jaki jest typowy pobór prądu przez standardową kamerę CCTV?",
answers:[
"Od 10mA do 50mA.",
"Od 100mA do 250mA.",
"Powyżej 2A.",
"Dokładnie 1A."
],
correct:"Od 100mA do 250mA."
},

{
category:"CCTV",
question:"Jaka impedancja przewodu jest wymagana przy bezpośrednim połączeniu kamery z monitorem (analogowo)?",
answers:[
"50 Ω.",
"75 Ω.",
"120 Ω.",
"300 Ω."
],
correct:"75 Ω."
},

{
category:"CCTV",
question:"Przy jakiej odległości połączenia kablem koncentrycznym (bez wzmacniacza) sygnał wizyjny może stać się zbyt słaby?",
answers:[
"Powyżej 10 metrów.",
"Powyżej 100 metrów.",
"Powyżej 600 metrów.",
"Dopiero powyżej 2 kilometrów."
],
correct:"Powyżej 600 metrów."
},

{
category:"CCTV",
question:"Pierwszym objawem użycia zbyt długiego przewodu w systemie kolorowym jest:",
answers:[
"Nagły zanik dźwięku.",
"Malejące nasycenie kolorów.",
"Powiększenie obrazu.",
"Przyspieszenie ruchu na obrazie."
],
correct:"Malejące nasycenie kolorów."
},

{
category:"CCTV",
question:"Maksymalna długość skrętki komputerowej w połączeniu kamera-rejestrator nie powinna przekraczać:",
answers:[
"30 metrów.",
"70 metrów.",
"150 metrów.",
"300 metrów."
],
correct:"70 metrów."
},

{
category:"CCTV",
question:"W oznaczeniu szczelności IPxy, pierwsza cyfra 'x' oznacza odporność:",
answers:[
"Na wilgoć.",
"Na temperaturę.",
"Mechaniczną (ciała stałe/dostęp).",
"Na promieniowanie UV."
],
correct:"Mechaniczną (ciała stałe/dostęp)."
},

{
category:"CCTV",
question:"Która norma IP oznacza, że obudowa kamery jest całkowicie odporna na pył i silne strugi wody?",
answers:[
"IP20.",
"IP44.",
"IP66.",
"IP00."
],
correct:"IP66."
},

{
category:"CCTV",
question:"Zastosowanie matrycy o rozmiarze 1/4 cala w porównaniu do 1/3 cala skutkuje zazwyczaj:",
answers:[
"Lepszą jakością obrazu.",
"Gorszą jakością i mniejszą liczbą pikseli.",
"Większym poborem prądu.",
"Brakiem konieczności stosowania obiektywu."
],
correct:"Gorszą jakością i mniejszą liczbą pikseli."
},

{
category:"CCTV",
question:"Czym są mikrosoczewki w matrycach CMOS?",
answers:[
"Częścią obiektywu zewnętrznego.",
"Elementami skupiającymi światło na każdym elemencie światłoczułym matrycy.",
"Rodzajem filtru podczerwieni.",
"Zabezpieczeniem przed porysowaniem matrycy."
],
correct:"Elementami skupiającymi światło na każdym elemencie światłoczułym matrycy."
},

{
category:"CCTV",
question:"Funkcja Backlight (BLC) dostępna w kamerach DSP służy do:",
answers:[
"Wyłączania kamery w nocy.",
"Kompensacji silnego światła tła (np. gdy kamera patrzy na przeszklone drzwi).",
"Wzmocnienia dźwięku z mikrofonu.",
"Ogrzewania matrycy zimą."
],
correct:"Kompensacji silnego światła tła (np. gdy kamera patrzy na przeszklone drzwi)."
},

{
category:"CCTV",
question:"Efekt rozmycia jasnych punktów (smuga) jest skutecznie redukowany w kamerach wyposażonych w:",
answers:[
"Tylko stare matryce CCD.",
"Procesor DSP.",
"Plastikowy obiektyw.",
"Zasilacz 5V."
],
correct:"Procesor DSP."
},

{
category:"CCTV",
question:"Efekt rozmycia jasnych punktów (smuga) jest skutecznie redukowany w kamerach wyposażonych w:",
answers:[
"Procesor ESP.",
"Procesor DSP.",
"Procesor DSB.",
"Zasilacz 12V."
],
correct:"Procesor DSP."
},

{
category:"CCTV",
question:"Skrót TVL odnosi się do angielskiego terminu:",
answers:[
"Television Lines.",
"Total Video Level.",
"Thermal View Lens.",
"Transmission Video Link."
],
correct:"Television Lines."
},

{
category:"CCTV",
question:"Rozdzielczość UXGA to obraz o wymiarach:",
answers:[
"640 x 480.",
"1280 x 1024.",
"1600 x 1200.",
"1920 x 1080."
],
correct:"1600 x 1200."
},

{
category:"CCTV",
question:"W kamerach zewnętrznych oświetlacz podczerwieni służy do:",
answers:[
"Nagrywania w kolorze w pełnym słońcu.",
"Poprawienia jakości obrazu w nocy (w ciemności).",
"Oświetlania terenu światłem widzialnym.",
"Komunikacji z pilotem."
],
correct:"Poprawienia jakości obrazu w nocy (w ciemności)."
},

{
category:"CCTV",
question:"Ile wynosi rozdzielczość VGA?",
answers:[
"320 x 240.",
"640 x 480.",
"720 x 576.",
"1280 x 720."
],
correct:"640 x 480."
},

{
category:"CCTV",
question:"Kamery megapikselowe zaczynają się zazwyczaj od rozdzielczości powyżej:",
answers:[
"200 linii TV.",
"480 linii TV.",
"700 linii TV.",
"100 linii TV."
],
correct:"700 linii TV."
},

{
category:"CCTV",
question:"Stosunek sygnału do szumu jest kluczowy przy określaniu:",
answers:[
"Wagi kamery.",
"Czułości kamery.",
"Długości kabla zasilającego.",
"Rozmiaru obudowy."
],
correct:"Czułości kamery."
},

{
category:"CCTV",
question:"Który parametr szczelności IP oznacza pełną wodoodporność na zanurzenie?",
answers:[
"IP65.",
"IP66.",
"IP68.",
"IP44."
],
correct:"IP68."
},

{
category:"CCTV",
question:"Jaka jest rola obiektywu w kamerze przemysłowej?",
answers:[
"Zasilanie matrycy.",
"Skupienie obrazu obiektu na powierzchni przetwornika.",
"Przetwarzanie prądu na sygnał wizyjny.",
"Nagrywanie obrazu na kartę pamięci."
],
correct:"Skupienie obrazu obiektu na powierzchni przetwornika."
},

{
category:"CCTV",
question:"Matryca CCD rejestruje sygnał elektryczny, który jest:",
answers:[
"Zawsze cyfrowy od samego początku.",
"Proporcjonalny do ilości padającego światła.",
"Stały niezależnie od oświetlenia.",
"Wysyłany bezpośrednio do anteny."
],
correct:"Proporcjonalny do ilości padającego światła."
},

{
category:"CCTV",
question:"Złącze RS-232 w kamerach z DSP może być wykorzystywane do:",
answers:[
"Zasilania kamery.",
"Zdalnego sterowania funkcjami kamery.",
"Podłączenia monitora analogowego.",
"Mocowania kamery do ściany."
],
correct:"Zdalnego sterowania funkcjami kamery."
},

{
category:"CCTV",
question:"Kamery kopułkowe są najczęściej stosowane:",
answers:[
"Na środku autostrad.",
"Wewnątrz budynków.",
"w całkowitym zanurzeniu.",
"Wewnątrz lasów."
],
correct:"Wewnątrz budynków."
},

{
category:"CCTV",
question:"Rozdzielczość CIF wynosi:",
answers:[
"320 x 240.",
"640 x 480.",
"800 x 600.",
"1024 x 768."
],
correct:"320 x 240."
},

{
category:"CCTV",
question:"Kamery tubowe w systemach dozorowych charakteryzują się tym, że:",
answers:[
"nie poruszają się.",
"Mogą poruszać się na wózku w specjalnym tunelu.",
"Nie posiadają osłony obiektywu.",
"śledzą osobę za pomocą wybdowanego systemu OTV."
],
correct:"Mogą poruszać się na wózku w specjalnym tunelu."
},

{
category:"CCTV",
question:"W jakim celu stosuje się menu ekranowe (OSD) w kamerach?",
answers:[
"Do oglądania filmów w przerwie pracy.",
"Do konfiguracji parametrów pracy kamery bezpośrednio na obrazie.",
"tylko do zmiany częstotliwości odbieranego sygnału.",
"do sprawdzania stanu degradacji powłoki anty-refleksyjnej obiektywu kamery."
],
correct:"Do konfiguracji parametrów pracy kamery bezpośrednio na obrazie."
},

{
category:"CCTV",
question:"W jakim celu stosuje się menu ekranowe (OSD) w profesjonalnych kamerach analogowych HD?",
answers:[
"Do lokalnego podglądu nagrań zarchiwizowanej bazy danych.",
"Do bezpośredniej konfiguracji parametrów DSP i funkcji takich jak WDR czy BLC.",
"Do programowania adresacji IP wewnątrz procesora sygnałowego.",
"Do fizycznego kalibrowania ogniskowej obiektywów stałoogniskowych."
],
correct:"Do bezpośredniej konfiguracji parametrów DSP i funkcji takich jak WDR czy BLC."
},

{
category:"CCTV",
question:"Który parametr przysłony automatycznej (Auto-Iris) należy wyregulować, aby zapobiec efektowi 'pompowania' obrazu przy szybkich zmianach oświetlenia?",
answers:[
"ALC (Automatic Light Control).",
"Level (poziom otwarcia).",
"Speed / Reaction time.",
"Back-focus."
],
correct:"Speed / Reaction time."
},

{
category:"CCTV",
question:"Co oznacza parametr 'D-WDR' (Digital Wide Dynamic Range) w tanich kamerach cyfrowych?",
answers:[
"Mechaniczne wydłużenie czasu naświetlania klatki.",
"Programowe rozjaśnianie ciemnych partii obrazu bez zmiany czasu ekspozycji.",
"Sprzętowe przetwarzanie dwóch klatek o różnym czasie naświetlania.",
"Zastosowanie filtra polaryzacyjnego na matrycy."
],
correct:"Programowe rozjaśnianie ciemnych partii obrazu bez zmiany czasu ekspozycji."
},

{
category:"CCTV",
question:"W systemach IP, protokół UDP jest preferowany nad TCP w transmisji 'Live View' głównie ze względu na:",
answers:[
"Wyższe bezpieczeństwo przesyłanych danych.",
"Niższe opóźnienia (latencję) wynikające z braku retransmisji utraconych pakietów.",
"Możliwość zasilania kamery bezpośrednio z pakietu danych.",
"Lepszą współpracę z kompresją H.265."
],
correct:"Niższe opóźnienia (latencję) wynikające z braku retransmisji utraconych pakietów."
},

{
category:"CCTV",
question:"Funkcja 'Lens Distortion Correction' (LDC) służy do:",
answers:[
"Mechanicznej korekty luzów na gwincie obiektywu.",
"Cyfrowego prostowania zniekształceń beczkowatych w obiektywach szerokokątnych.",
"Automatycznego ostrzenia obrazu w nocy.",
"Regulacji back-focusu matrycy."
],
correct:"Cyfrowego prostowania zniekształceń beczkowatych w obiektywach szerokokątnych."
},

{
category:"CCTV",
question:"Zjawisko 'Ghostingu' przy włączonej funkcji DNR (Digital Noise Reduction) w słabym oświetleniu wynika z:",
answers:[
"Uszkodzenia kabla koncentrycznego.",
"Zbyt agresywnego działania filtrów odszumiania czasowego (Temporal Noise Reduction).",
"Zbyt niskiego napięcia PoE.",
"Odbicia promieni podczerwonych od kopułki kamery."
],
correct:"Zbyt agresywnego działania filtrów odszumiania czasowego (Temporal Noise Reduction)."
},

{
category:"CCTV",
question:"Standard PoE 802.3at (Type 2) dostarcza do urządzenia końcowego napięcie z zakresu:",
answers:[
"12V - 24V.",
"37V - 57V.",
"42.5V - 57V.",
"110V - 230V."
],
correct:"42.5V - 57V."
},

{
category:"CCTV",
question:"Który element kamery PTZ odpowiada za przekazywanie sygnałów elektrycznych do ruchomej głowicy bez skręcania przewodów?",
answers:[
"Silnik krokowy.",
"Złącze obrotowe (Slip Ring).",
"Pasek zębaty.",
"Przetwornik piezoelektryczny."
],
correct:"Złącze obrotowe (Slip Ring)."
},

{
category:"CCTV",
question:"Wartość 'F-stop' (liczba F) obiektywu określa stosunek:",
answers:[
"Średnicy soczewki do grubości obudowy.",
"Długości ogniskowej do średnicy źrenicy wejściowej.",
"Natężenia światła do czułości matrycy.",
"Rozdzielczości optycznej do megapikseli matrycy."
],
correct:"Długości ogniskowej do średnicy źrenicy wejściowej."
},

{
category:"CCTV",
question:"Czym różni się oświetlacz 'Array IR' od tradycyjnych diod IR LED?",
answers:[
"Wyłącznie innym kolorem świecenia.",
"Wyższą sprawnością, szerszym kątem świecenia i dłuższą żywotnością.",
"Array IR wymaga zasilania 230V AC.",
"Array IR nie współpracuje z filtrem ICR."
],
correct:"Wyższą sprawnością, szerszym kątem świecenia i dłuższą żywotnością."
},

{
category:"CCTV",
question:"Podczas konfiguracji nagrywania, parametr 'Pre-record' oznacza:",
answers:[
"Formatowanie dysku przed instalacją kamer.",
"Zapis materiału z bufora sprzed momentu wystąpienia detekcji ruchu.",
"Wstępną kompresję obrazu przed wysłaniem do sieci.",
"Nagrywanie tylko klatek kluczowych (I-frames)."
],
correct:"Zapis materiału z materiału z bufora sprzed momentu wystąpienia detekcji ruchu."
},

{
category:"CCTV",
question:"Kamera oznaczona jako 'True Day/Night' posiada:",
answers:[
"Programowy filtr zmieniający kolory na czarno-białe.",
"Mechaniczny filtr wycinający podczerwień (ICR) odsuwany w nocy.",
"Drugi obiektyw dedykowany do pracy w nocy.",
"Wbudowany czujnik zmierzchowy sterujący zasilaczem."
],
correct:"Mechaniczny filtr wycinający podczerwień (ICR) odsuwany w nocy."
},

{
category:"CCTV",
question:"Co określa parametr 'Streaming Profile' w kamerze IP?",
answers:[
"Liczbę użytkowników mogących oglądać obraz jednocześnie.",
"Zbiór ustawień rozdzielczości, bitrate i kodeka dla konkretnego celu (np. Mobile, Record).",
"Kolejność nagrywania kamer na dysku twardym.",
"Standard montażu kamery na słupie."
],
correct:"Zbiór ustawień rozdzielczości, bitrate i kodeka dla konkretnego celu (np. Mobile, Record)."
},

{
category:"CCTV",
question:"W systemach IP, technologia 'Edge Storage' polega na:",
answers:[
"Zapisie danych wyłącznie na serwerach zlokalizowanych w chmurze.",
"Lokalnym zapisie nagrań na karcie pamięci wewnątrz kamery.",
"Gromadzeniu danych na brzegu szafy rackowej.",
"Zastosowaniu dysków twardych o zwiększonej odporności na wstrząsy."
],
correct:"Lokalnym zapisie nagrań na karcie pamięci wewnątrz kamery."
},

{
category:"CCTV",
question:"Który protokół służy do synchronizacji czasu we wszystkich urządzeniach systemu CCTV?",
answers:[
"SNMP.",
"NTP.",
"DHCP.",
"IGMP."
],
correct:"NTP."
},

{
category:"CCTV",
question:"Jaka jest główna przyczyna stosowania skrętki ekranowanej (FTP/STP) w instalacjach zewnętrznych CCTV?",
answers:[
"Zwiększenie zasięgu PoE powyżej 100 metrów.",
"Ochrona przed indukowaniem się przepięć i zakłóceniami EM.",
"Poprawa elastyczności przewodu przy ujemnych temperaturach.",
"Zapewnienie lepszego przepływu prądu stałego."
],
correct:"Ochrona przed indukowaniem się przepięć i zakłóceniami EM."
},

{
category:"CCTV",
question:"Funkcja 'Smart Event' w kamerach IP odnosi się do:",
answers:[
"Automatycznego włączania wycieraczki obiektywu.",
"Zdarzeń analitycznych takich jak wtargnięcie w obszar lub przekroczenie linii.",
"Zaplanowanej przerwy w nagrywaniu.",
"Wysyłania obrazu na portale społecznościowe."
],
correct:"Zdarzeń analitycznych takich jak wtargnięcie w obszar lub przekroczenie linii."
},

{
category:"CCTV",
question:"W obiektywach zmiennoogniskowych (Varifocal), parametr 'Parfocal' oznacza, że:",
answers:[
"Obiektyw posiada dwie oddzielne przysłony.",
"Ostrość zostaje zachowana po zmianie długości ogniskowej.",
"Obiektyw może być sterowany tylko napięciem 24V.",
"Soczewki są wykonane z syntetycznego kryształu."
],
correct:"Ostrość zostaje zachowana po zmianie długości ogniskowej."
},

{
category:"CCTV",
question:"Prąd rozruchowy kamery obrotowej PTZ z włączoną grzałką może być:",
answers:[
"Identyczny jak w stanie czuwania.",
"Nawet 2-3 krotnie wyższy niż nominalny pobór prądu w dzień.",
"Zredukowany przez matrycę CMOS.",
"Zależny tylko od rodzaju obiektywu."
],
correct:"Nawet 2-3 krotnie wyższy niż nominalny pobór prądu w dzień."
},

{
category:"CCTV",
question:"Adresowanie multicastowe w CCTV IP wykorzystuje adresy z zakresu:",
answers:[
"127.0.0.0 - 127.255.255.255.",
"192.168.0.0 - 192.168.255.255.",
"224.0.0.0 - 239.255.255.255.",
"10.0.0.0 - 10.255.255.255."
],
correct:"224.0.0.0 - 239.255.255.255."
},

{
category:"CCTV",
question:"W rejestratorach NVR, funkcja 'RAID 5' wymaga do działania minimum:",
answers:[
"1 dysku twardego.",
"2 dysków twardych.",
"3 dysków twardych.",
"4 dysków twardych."
],
correct:"3 dysków twardych."
},

{
category:"CCTV",
question:"Dlaczego w kamerach IP o wysokiej rozdzielczości (4K) stosuje się strumieniowanie VBR zamiast CBR?",
answers:[
"VBR jest prostsze w konfiguracji.",
"Aby zachować stałą jakość obrazu przy dynamicznych scenach, oszczędzając pasmo w statycznych.",
"Ponieważ CBR nie obsługuje kodeka H.265.",
"CBR wymaga stosowania kabli kategorii 7."
],
correct:"Aby zachować stałą jakość obrazu przy dynamicznych scenach, oszczędzając pasmo w statycznych."
},

{
category:"CCTV",
question:"Złącze alarmowe 'Dry Contact' (styk bezpotencjałowy) w kamerze służy do:",
answers:[
"Zasilania kamery napięciem 12V.",
"Przesyłania analogowego sygnału audio.",
"Integracji z zewnętrznymi systemami (np. SSWiN) poprzez zwarcie/rozwarcie obwodu.",
"Mierzenia wilgotności powietrza wewnątrz obudowy."
],
correct:"Integracji z zewnętrznymi systemami (np. SSWiN) poprzez zwarcie/rozwarcie obwodu."
},

{
category:"CCTV",
question:"Zjawisko 'Lens Flare' powstaje w wyniku:",
answers:[
"Zbyt niskiej temperatury matrycy.",
"Wielokrotnych odbić światła od powierzchni soczewek wewnątrz obiektywu.",
"Błędów kompresji wideo.",
"Zwarcia w przewodzie koncentrycznym."
],
correct:"Wielokrotnych odbić światła od powierzchni soczewek wewnątrz obiektywu."
},

{
category:"CCTV",
question:"W systemach IP, protokół SNMP służy do:",
answers:[
"Transmisji obrazu w 4K.",
"Zarządzania i monitorowania stanu urządzeń sieciowych.",
"Szyfrowania nagrań na dysku.",
"Automatycznego ustawiania ostrości."
],
correct:"Zarządzania i monitorowania stanu urządzeń sieciowych."
},

{
category:"CCTV",
question:"Co oznacza parametr 'Pixel Pitch' w kontekście matrycy kamery?",
answers:[
"Długość gwintu obiektywu.",
"Odległość między środkami sąsiednich pikseli na matrycy.",
"Maksymalną jasność promiennika IR.",
"Częstotliwość taktowania procesora DSP."
],
correct:"Odległość między środkami sąsiednich pikseli na matrycy."
},

{
category:"CCTV",
question:"Zastosowanie obiektywu asferycznego w kamerze ma na celu:",
answers:[
"Zwiększenie zasięgu podczerwieni.",
"Zmniejszenie aberracji sferycznej i poprawę ostrości w narożnikach obrazu.",
"Możliwość zginania obiektywu o 90 stopni.",
"Redukcję poboru prądu przez matrycę."
],
correct:"Zmniejszenie aberracji sferycznej i poprawę ostrości w narożnikach obrazu."
},

{
category:"CCTV",
question:"W technologii HD-CVI (analogowej), maksymalny zasięg transmisji wideo po kablu RG-59 dla rozdzielczości 1080p wynosi ok.:",
answers:[
"100 metrów.",
"300 metrów.",
"500-800 metrów.",
"2 kilometrów."
],
correct:"500-800 metrów."
},

{
category:"CCTV",
question:"Funkcja 'Scene Change Detection' (detekcja zmiany sceny) generuje alarm, gdy:",
answers:[
"Złodziej wejdzie w kadr.",
"Zmieni się oświetlenie z dziennego na nocne.",
"Kamera zostanie zasłonięta, obrócona lub zamalowana.",
"Na dysku twardym zabraknie miejsca."
],
correct:"Kamera zostanie zasłonięta, obrócona lub zamalowana."
},

{
category:"CCTV",
question:"W systemach IP, rozdzielczość 4CIF to inaczej:",
answers:[
"352 x 288.",
"704 x 576.",
"1280 x 720.",
"1920 x 1080."
],
correct:"704 x 576."
},

{
category:"CCTV",
question:"Technologia 'Color-accurate' w balansie bieli wymaga zastosowania:",
answers:[
"Zasilacza impulsowego.",
"Algorytmów ATW (Auto Tracking White Balance).",
"Czarno-białego monitora.",
"Grubszego oplotu w kablu BNC."
],
correct:"Algorytmów ATW (Auto Tracking White Balance)."
},

{
category:"CCTV",
question:"Parametr 'Backlight Compensation' (BLC) działa poprzez:",
answers:[
"Włączenie oświetlacza IR.",
"Zwiększenie wzmocnienia dla całego kadru, aby doświetlić ciemny obiekt na jasnym tle.",
"Mechaniczne zamknięcie przysłony.",
"Zastosowanie cyfrowego zoomu."
],
correct:"Zwiększenie wzmocnienia dla całego kadru, aby doświetlić ciemny obiekt na jasnym tle."
},

{
category:"CCTV",
question:"Sygnał wizyjny w standardzie PAL (analogowy) posiada częstotliwość odświeżania pionowego:",
answers:[
"25 Hz.",
"50 Hz.",
"60 Hz.",
"100 Hz."
],
correct:"50 Hz."
},

{
category:"CCTV",
question:"Który element instalacji monitoringu odpowiada za separację galwaniczną w celu wyeliminowania pasów na obrazie?",
answers:[
"Wzmacniacz wideo.",
"Izolator pętli masy (Ground Loop Isolator).",
"Transformator PoE.",
"Rezystor końcowy 75 Ohm."
],
correct:"Izolator pętli masy (Ground Loop Isolator)."
},

{
category:"CCTV",
question:"Standard kompresji H.265 (HEVC) wykorzystuje technikę CTU (Coding Tree Unit) o rozmiarze do:",
answers:[
"8x8 pikseli.",
"16x16 pikseli.",
"64x64 pikseli.",
"256x256 pikseli."
],
correct:"64x64 pikseli."
},

{
category:"CCTV",
question:"W obiektywach Moto-zoom funkcja 'One-push Focus' polega na:",
answers:[
"Ręcznym kręceniu pierścieniem na kamerze.",
"Jednorazowym, automatycznym ustawieniu ostrości po zmianie zoomu.",
"Ciągłym śledzeniu ostrości ruchomego obiektu.",
"Zablokowaniu ostrości na nieskończoność."
],
correct:"Jednorazowym, automatycznym ustawieniu ostrości po zmianie zoomu."
},

{
category:"CCTV",
question:"Pojęcie 'Dual-light' w nowoczesnych kamerach IP oznacza:",
answers:[
"Dwa wejścia zasilania.",
"Połączenie oświetlacza IR oraz oświetlacza światła białego w jednym urządzeniu.",
"Dwie matryce o różnej czułości.",
"Możliwość pracy w dwóch systemach: PAL i NTSC."
],
correct:"Połączenie oświetlacza IR oraz oświetlacza światła białego w jednym urządzeniu."
},

{
category:"CCTV",
question:"Protokół HTTPS w kamerach IP wykorzystuje standardowo port nr:",
answers:[
"23.",
"80.",
"443.",
"3389."
],
correct:"443."
},

{
category:"CCTV",
question:"Co oznacza parametr 'Saturation' w ustawieniach obrazu kamery?",
answers:[
"Poziom nasycenia kolorów.",
"Jasność matrycy.",
"Kontrast krawędzi.",
"Czas otwarcia migawki."
],
correct:"Poziom nasycenia kolorów."
},

{
category:"CCTV",
question:"Technologia 'PoC' (Power over Coax) umożliwia:",
answers:[
"Zasilanie kamer IP kablem koncentrycznym.",
"Zasilanie kamer analogowych bezpośrednio kablem sygnałowym koncentrycznym.",
"Przesyłanie sygnału audio po skrętce.",
"Ładowanie akumulatora UPS."
],
correct:"Zasilanie kamer analogowych bezpośrednio kablem sygnałowym koncentrycznym."
},

{
category:"CCTV",
question:"Obudowa kamery oznaczona jako IK07 wytrzymuje uderzenie o energii:",
answers:[
"0.5 J.",
"2 J.",
"10 J.",
"20 J."
],
correct:"2 J."
},

{
category:"CCTV",
question:"W systemach IP, 'Jitter' to zjawisko:",
answers:[
"Mechanicznych drgań uchwytu kamery.",
"Niestabilności opóźnień w przesyłaniu pakietów danych, wpływające na płynność obrazu.",
"Uszkodzenia izolacji kabla UTP.",
"Przegrzewania się procesora DSP."
],
correct:"Niestabilności opóźnień w przesyłaniu pakietów danych, wpływające na płynność obrazu."
},

{
category:"CCTV",
question:"Który parametr matrycy CMOS decyduje o występowaniu szumu termicznego?",
answers:[
"Rozmiar fizyczny matrycy.",
"Temperatura pracy struktury półprzewodnikowej.",
"Liczba megapikseli.",
"Ogniskowa obiektywu."
],
correct:"Temperatura pracy struktury półprzewodnikowej."
},

{
category:"CCTV",
question:"Funkcja 'E-PTZ' pozwala na:",
answers:[
"Mechaniczny obrót kamery stacjonarnej.",
"Cyfrowe przybliżanie i poruszanie się po obrazie wysokiej rozdzielczości.",
"Zdalne sterowanie jasnością IR.",
"Automatyczne formatowanie karty SD."
],
correct:"Cyfrowe przybliżanie i poruszanie się po obrazie wysokiej rozdzielczości."
},

{
category:"CCTV",
question:"Standardowa długość ramki Ethernet (bez Jumbo Frames) wynosi:",
answers:[
"64 bajty.",
"512 bajtów.",
"1518 bajtów.",
"9000 bajtów."
],
correct:"1518 bajtów."
},

{
category:"CCTV",
question:"W obiektywach typu 'Pinhole' (otworkowych), źrenica wejściowa ma zazwyczaj średnicę:",
answers:[
"Poniżej 2 mm.",
"Ok. 10 mm.",
"Powoduje winietowanie matrycy 1/2'.",
"Jest regulowana elektronicznie."
],
correct:"Poniżej 2 mm."
},

{
category:"CCTV",
question:"Funkcja 'Digital Image Stabilization' (DIS) służy do:",
answers:[
"Mechanicznego poziomowania kamery na słupie.",
"Elektronicznej redukcji drgań obrazu wywołanych np. przez wiatr.",
"Stabilizacji napięcia 12V DC.",
"Blokowania dostępu do menu OSD."
],
correct:"Elektronicznej redukcji drgań obrazu wywołanych np. przez wiatr."
},

{
category:"CCTV",
question:"W systemach monitoringu IP, port 554 jest domyślnie przypisany do:",
answers:[
"HTTP.",
"HTTPS.",
"RTSP.",
"ONVIF."
],
correct:"RTSP."
},

{
category:"CCTV",
question:"Jaką rolę pełni 'terminator 75 Ohm' w rozbudowanych systemach analogowych?",
answers:[
"Zwiększa napięcie sygnału wizyjnego.",
"Zapobiega odbiciom sygnału na końcu linii przesyłowej.",
"Chroni przed wyładowaniami atmosferycznymi.",
"Służy jako bezpiecznik matrycy."
],
correct:"Zapobiega odbiciom sygnału na końcu linii przesyłowej."
},


{
category:"CCTV",
question:"Który parametr określa minimalne natężenie światła potrzebne do uzyskania obrazu o akceptowalnej jakości?",
answers:[
"Rozdzielczość.",
"Czułość.",
"Ogniskowa.",
"Apertura."
],
correct:"Czułość."
},

{
category:"CCTV",
question:"W jakich jednostkach wyraża się czułość przetwornika kamery?",
answers:[
"W lumenach [lm].",
"W luksach [lx].",
"W kandelach [cd].",
"W watach [W]."
],
correct:"W luksach [lx]."
},

{
category:"CCTV",
question:"Funkcja DNR w kamerach dozorowych odpowiada za:",
answers:[
"Cyfrową redukcję szumów.",
"Szeroki zakres dynamiki.",
"Kompensację światła wstecznego.",
"Automatyczne sterowanie wzmocnieniem."
],
correct:"Cyfrową redukcję szumów."
},

{
category:"CCTV",
question:"Który parametr obiektywu bezpośrednio decyduje o kącie widzenia kamery?",
answers:[
"Liczba F.",
"Ogniskowa.",
"Średnica soczewki.",
"Typ gwintu."
],
correct:"Ogniskowa."
},

{
category:"CCTV",
question:"Technologia WDR jest stosowana w celu:",
answers:[
"Zwiększenia rozdzielczości.",
"Poprawy obrazu w scenach o dużym kontraście oświetlenia.",
"Wydłużenia czasu zapisu na dysku.",
"Redukcji opóźnień w sieci IP."
],
correct:"Poprawy obrazu w scenach o dużym kontraście oświetlenia."
},

{
category:"CCTV",
question:"Standard zasilania PoE 802.3af dostarcza napięcie o wartości znamionowej ok.:",
answers:[
"12 V.",
"24 V.",
"48 V.",
"230 V."
],
correct:"48 V."
},

{
category:"CCTV",
question:"Jak nazywa się procesor odpowiedzialny za obróbkę sygnału wizyjnego wewnątrz kamery?",
answers:[
"CPU.",
"DSP.",
"GPU.",
"NPU."
],
correct:"DSP."
},

{
category:"CCTV",
question:"Przetwornik o rozmiarze 1/2' w porównaniu do 1/4' przy tej samej rozdzielczości oferuje zazwyczaj:",
answers:[
"Mniejszą czułość.",
"Większą czułość i mniejsze szumy.",
"Węższy kąt widzenia.",
"Niższe napięcie pracy."
],
correct:"Większą czułość i mniejsze szumy."
},

{
category:"CCTV",
question:"Funkcja BLC służy do:",
answers:[
"Automatycznego ostrzenia.",
"Kompensacji światła tła.",
"Zdalnego sterowania PTZ.",
"Szyfrowania strumienia."
],
correct:"Kompensacji światła tła."
},

{
category:"CCTV",
question:"Co oznacza parametr TVL (Television Lines)?",
answers:[
"Liczbę klatek na sekundę.",
"Rozdzielczość analogową kamery.",
"Długość kabla transmisyjnego.",
"Napięcie wyjściowe sygnału."
],
correct:"Rozdzielczość analogową kamery."
},

{
category:"CCTV",
question:"Standard kompresji H.265 cechuje się względem H.264:",
answers:[
"Większym zapotrzebowaniem na pasmo.",
"Lepszą efektywnością (oszczędność miejsca o ok. 50%).",
"Brakiem wsparcia dla rozdzielczości 4K.",
"Wyłącznie zapisem bezstratnym."
],
correct:"Lepszą efektywnością (oszczędność miejsca o ok. 50%)."
},

{
category:"CCTV",
question:"Obiektyw typu Moto-zoom umożliwia zdalną regulację:",
answers:[
"Jasności i kontrastu.",
"Ogniskowej i ostrości.",
"Adresu IP kamery.",
"Częstotliwości odświeżania."
],
correct:"Ogniskowa i ostrości."
},

{
category:"CCTV",
question:"Jaką impedancję wyjściową posiada standardowa kamera analogowa BNC?",
answers:[
"50 Ohm.",
"75 Ohm.",
"100 Ohm.",
"300 Ohm."
],
correct:"75 Ohm."
},

{
category:"CCTV",
question:"Funkcja ICR (mechaniczny filtr podczerwieni) poprawia w dzień:",
answers:[
"Ostrość cyfrową.",
"Odwzorowanie kolorów.",
"Zasięg WiFi.",
"Płynność ruchu."
],
correct:"Odwzorowanie kolorów."
},

{
category:"CCTV",
question:"Rozdzielczość 1920x1080 pikseli to inaczej:",
answers:[
"1 Mpx.",
"2 Mpx (Full HD).",
"4 Mpx.",
"8 Mpx (4K)."
],
correct:"2 Mpx (Full HD)."
},

{
category:"CCTV",
question:"Co określa parametr 'bitrate' w kamerach IP?",
answers:[
"Liczbę megapikseli.",
"Ilość danych przesyłanych w ciągu sekundy.",
"Wielkość soczewki.",
"Moc promiennika IR."
],
correct:"Ilość danych przesyłanych w ciągu sekundy."
},

{
category:"CCTV",
question:"Który protokół sieciowy jest najczęściej używany do przesyłania strumienia wideo 'na żywo'?",
answers:[
"FTP.",
"RTSP.",
"SMTP.",
"ICMP."
],
correct:"RTSP."
},

{
category:"CCTV",
question:"Złącze RS-485 w kamerach PTZ służy do:",
answers:[
"Zasilania silników.",
"Sterowania ruchem kamery.",
"Przesyłania obrazu HD.",
"Podłączenia mikrofonu."
],
correct:"Sterowania ruchem kamery."
},

{
category:"CCTV",
question:"Parametr AGC (Automatic Gain Control) odpowiada za:",
answers:[
"Automatyczne sterowanie wzmocnieniem sygnału.",
"Zmianę balansu bieli.",
"Detekcję ruchu.",
"Formatowanie dysku."
],
correct:"Automatyczne sterowanie wzmocnieniem sygnału."
},

{
category:"CCTV",
question:"Standard wandaloodporności IK10 oznacza odporność na uderzenie o energii:",
answers:[
"5 J.",
"10 J.",
"20 J.",
"50 J."
],
correct:"20 J."
},

{
category:"CCTV",
question:"Która z wymienionych rozdzielczości jest najwyższa?",
answers:[
"CIF.",
"D1.",
"VGA.",
"4CIF."
],
correct:"4CIF."
},

{
category:"CCTV",
question:"Ogniskowa 2.8 mm zapewnia w stosunku do 12 mm:",
answers:[
"Szerszy kąt widzenia.",
"Węższy kąt widzenia.",
"Większe przybliżenie.",
"Lepszą widoczność w nocy."
],
correct:"Szerszy kąt widzenia."
},

{
category:"CCTV",
question:"Funkcja 'Privacy Masking' pozwala na:",
answers:[
"Nagrywanie bez wiedzy osób postronnych.",
"Zasłonięcie wybranych fragmentów obrazu.",
"Ukrycie adresu IP kamery.",
"Szyfrowanie nagrań na dysku."
],
correct:"Zasłonięcie wybranych fragmentów obrazu."
},

{
category:"CCTV",
question:"Przetwornik CMOS charakteryzuje się w porównaniu do CCD:",
answers:[
"Większym poborem prądu.",
"Szybszym odczytem i niższą ceną produkcji.",
"Zawsze lepszą czułością w nocy.",
"Wyłącznie czarno-białym obrazem."
],
correct:"Szybszym odczytem i niższą ceną produkcji."
},

{
category:"CCTV",
question:"Który element instalacji zabezpiecza rejestrator przed skutkami zaniku napięcia?",
answers:[
"RCD.",
"UPS.",
"SPD.",
"YDY."
],
correct:"UPS."
},

{
category:"CCTV",
question:"Maksymalna odległość transmisji sygnału PoE na standardowej skrętce to:",
answers:[
"50 m.",
"100 m.",
"250 m.",
"500 m."
],
correct:"100 m."
},

{
category:"CCTV",
question:"Do czego służy protokół ONVIF?",
answers:[
"Do zasilania kamer.",
"Do zapewnienia współpracy urządzeń różnych producentów.",
"Do kompresji wideo.",
"Do wykrywania pożaru."
],
correct:"Do zapewnienia współpracy urządzeń różnych producentów."
},

{
category:"CCTV",
question:"Funkcja 'Starlight' w kamerach oznacza:",
answers:[
"Wbudowany projektor gwiazd.",
"Podwyższoną czułość pozwalającą na kolorowy obraz przy minimalnym świetle.",
"Możliwość nagrywania w kosmosie.",
"Oświetlacz podczerwieni o zasięgu 1 km."
],
correct:"Podwyższoną czułość pozwalającą na kolorowy obraz przy minimalnym świetle."
},

{
category:"CCTV",
question:"Który typ kamery jest najbardziej odporny na warunki atmosferyczne?",
answers:[
"Wewnętrzna kopułkowa.",
"Zewnętrzna w obudowie o IP67.",
"Kompaktowa.",
"Płytkowa."
],
correct:"Zewnętrzna w obudowie o IP67."
},

{
category:"CCTV",
question:"System NVR w odróżnieniu od DVR obsługuje kamery:",
answers:[
"Analogowe.",
"Sieciowe IP.",
"Radiowe AM.",
"Tylko czarno-białe."
],
correct:"Sieciowe IP."
},

{
category:"CCTV",
question:"Przysłona automatyczna (Auto Iris) jest sterowana przez:",
answers:[
"Zasilacz 230V.",
"Elektronikę kamery w zależności od natężenia światła.",
"Ręczny przełącznik u operatora.",
"Czujnik ruchu."
],
correct:"Elektronikę kamery w zależności od natężenia światła."
},

{
category:"CCTV",
question:"Co oznacza skrót P2P w kontekście podglądu z kamer?",
answers:[
"Power to Power.",
"Łączność bezpośrednią przez serwer producenta bez publicznego IP.",
"Rodzaj kabla koncentrycznego.",
"Protokół przesyłania prądu."
],
correct:"Łączność bezpośrednią przez serwer producenta bez publicznego IP."
},

{
category:"CCTV",
question:"Balans bieli (White Balance) służy do:",
answers:[
"Regulacji ostrości.",
"Prawidłowego odwzorowania kolorów.",
"Ustawienia jasności IR.",
"Zmniejszenia szumów."
],
correct:"Prawidłowego odwzorowania kolorów."
},

{
category:"CCTV",
question:"Mocowanie obiektywu typu CS różni się od typu C:",
answers:[
"Średnicą gwintu.",
"Odległością od przetwornika.",
"Materiałem wykonania.",
"Kolorem uszczelki."
],
correct:"Odległością od przetwornika."
},

{
category:"CCTV",
question:"Dla kamery IP, domyślna brama (Gateway) to zazwyczaj adres:",
answers:[
"Samej kamery.",
"Rejestratora.",
"Routera.",
"Serwera DNS."
],
correct:"Routera."
},

{
category:"CCTV",
question:"Funkcja 'Analityka obrazu' (IVA) umożliwia:",
answers:[
"Tylko nagrywanie ciągłe.",
"Automatyczne wykrywanie zdarzeń (np. przekroczenie linii).",
"Zwiększenie pojemności dysku.",
"Zmianę ogniskowej."
],
correct:"Automatyczne wykrywanie zdarzeń (np. przekroczenie linii)."
},

{
category:"CCTV",
question:"Zasięg oświetlacza IR w kamerze podaje się w:",
answers:[
"Luksach.",
"Metrach.",
"Stopniach.",
"Decybelach."
],
correct:"Metrach."
},

{
category:"CCTV",
question:"Format zapisu .h264 to przykład kompresji:",
answers:[
"Bezstratnej.",
"Stratnej.",
"Tekstowej.",
"Tylko dla dźwięku."
],
correct:"Stratnej."
},

{
category:"CCTV",
question:"W systemie IP, DHCP służy do:",
answers:[
"Automatycznego przydzielania adresów IP.",
"Ręcznego ustawiania czasu.",
"Szyfrowania hasła.",
"Chłodzenia procesora."
],
correct:"Automatycznego przydzielania adresów IP."
},

{
category:"CCTV",
question:"Promiennik IR o długości fali 940 nm charakteryzuje się:",
answers:[
"Bardzo jasnym czerwonym światłem.",
"Całkowitą niewidocznością dla ludzkiego oka.",
"Zasięgiem do 10 km.",
"Błękitną barwą świecenia."
],
correct:"Całkowitą niewidocznością dla ludzkiego oka."
},

{
category:"CCTV",
question:"Ile żył w kablu UTP jest wykorzystywanych do transmisji danych 100 Mbps (Fast Ethernet)?",
answers:[
"2.",
"4.",
"6.",
"8."
],
correct:"4."
},

{
category:"CCTV",
question:"Który parametr obiektywu określa jego jasność?",
answers:[
"Ogniskowa.",
"Liczba aperturowa F.",
"Typ mocowania.",
"Zoom cyfrowy."
],
correct:"Liczba aperturowa F."
},

{
category:"CCTV",
question:"Rejestrator hybrydowy umożliwia podłączenie kamer:",
answers:[
"Tylko analogowych.",
"Tylko IP.",
"Zarówno analogowych, jak i IP.",
"Wyłącznie bezprzewodowych."
],
correct:"Zarówno analogowych, jak i IP."
},

{
category:"CCTV",
question:"Sygnał wizyjny w standardzie AHD jest przesyłany:",
answers:[
"Cyfrowo po skrętce.",
"Analogowo po kablu koncentrycznym.",
"Radiowo.",
"Przez światłowód."
],
correct:"Analogowo po kablu koncentrycznym."
},

{
category:"CCTV",
question:"Funkcja HLC (Highlight Compensation) służy do:",
answers:[
"Rozjaśniania cieni.",
"Tłumienia silnych punktowych źródeł światła (np. reflektorów).",
"Ustawiania godziny.",
"Nagrywania dźwięku."
],
correct:"Tłumienia silnych punktowych źródeł światła (np. reflektorów)."
},

{
category:"CCTV",
question:"Co oznacza parametr FPS?",
answers:[
"Siłę sygnału.",
"Liczbę klatek na sekundę.",
"Rozmiar dysku.",
"Jasność obrazu."
],
correct:"Liczbę klatek na sekundę."
},

{
category:"CCTV",
question:"Kamera typu 'Fish-eye' posiada obiektyw:",
answers:[
"Wąskokątny.",
"Panoramoczny (360 stopni).",
"Moto-zoom.",
"Otworkowy."
],
correct:"Panoramoczny (360 stopni)."
},

{
category:"CCTV",
question:"VMS (Video Management System) to:",
answers:[
"Rodzaj kabla.",
"Oprogramowanie do zarządzania monitoringiem.",
"Zasilacz do kamer.",
"Typ matrycy."
],
correct:"Oprogramowanie do zarządzania monitoringiem."
},

{
category:"CCTV",
question:"Dla uzyskania płynnego ruchu obrazu w CCTV przyjmuje się minimum ile klatek na sekundę :",
answers:[
"1 kl/s.",
"12 kl/s.",
"25 kl/s.",
"60 kl/s."
],
correct:"25 kl/s."
},

{
category:"CCTV",
question:"Który parametr kabla koncentrycznego jest kluczowy dla zasięgu transmisji?",
answers:[
"Kolor powłoki.",
"Tłumienność.",
"masa",
"Liczba oplotów."
],
correct:"Tłumienność."
},


{
category:"CCTV",
question:"Przetworniki o rozmiarze 2/3 cala są uznawane za:",
answers:[
"Bardzo małe.",
"Duże (stosowane w kamerach wyższej jakości).",
"Standardowe dla tanich kamer domowych.",
"Przestarzałe i nieużywane."
],
correct:"Duże (stosowane w kamerach wyższej jakości)."
},

{
category:"CCTV",
question:"W systemach CCTV jakość obiektywu ma wpływ na:",
answers:[
"Pobór prądu przez grzałkę.",
"Ostateczną ostrość i jasność obrazu.",
"Pojemność dysku twardego.",
"Częstotliwość napięcia zasilania."
],
correct:"Ostateczną ostrość i jasność obrazu."
},

{
category:"CCTV",
question:"Kamera z generatorem opisu pozwala na:",
answers:[
"Automatyczne pisanie raportów dla policji.",
"Nakładanie na obraz tekstu (np. nazwa kamery, data).",
"Zmianę głosu intruza.",
"Drukowanie etykiet."
],
correct:"Nakładanie na obraz tekstu (np. nazwa kamery, data)."
},

{
category:"CCTV",
question:"Odporność obudowy na wilgoć jest określana przez:",
answers:[
"Pierwszą cyfrę kodu IP.",
"Drugą cyfrę kodu IP.",
"Literę 'y' w modelu kamery.",
"Kolor obudowy."
],
correct:"Drugą cyfrę kodu IP."
},

{
category:"CCTV",
question:"Sygnał wizyjny z kamery analogowej przesyłany jest kablem:",
answers:[
"Dwufazowym.",
"Koncentrycznym.",
"Telefonicznym płaskim.",
"Głośnikowym."
],
correct:"Koncentrycznym."
},

{
category:"CCTV",
question:"Jeżeli chcemy zamontować kamerę w miejscu narażonym na uderzenia, wybieramy obudowę o wysokiej:",
answers:[
"Odporności mechanicznej (pierwsza cyfra IP).",
"Odporności na wilgoć.",
"Czułości matrycy.",
"Impedancji."
],
correct:"Odporności mechanicznej (pierwsza cyfra IP)."
},

{
category:"CCTV",
question:"Kamera cyfrowa może zapisywać sygnał na karcie pamięci. Skrót DVC oznacza:",
answers:[
"Digital Video Camcorder.",
"Direct Video Connection.",
"Digital Voltage Control.",
"Data Video Center."
],
correct:"Digital Video Camcorder."
},

{
category:"CCTV",
question:"W matrycach CMOS wzmacniacz sygnału znajduje się:",
answers:[
"W osobnym urządzeniu podłączonym do kamery.",
"Bezpośrednio w każdym elemencie światłoczułym.",
"Tylko w obiektywie.",
"W zasilaczu kamery."
],
correct:"Bezpośrednio w każdym elemencie światłoczułym."
},

{
category:"CCTV",
question:"Urządzenie przeznaczone do monitoringu ma za zadanie m.in.:",
answers:[
"Uwiecznić wizerunek napastnika.",
"Ogrzewać pomieszczenie w banku.",
"Przyspieszać płatności w sklepie.",
"Zastąpić oświetlenie sufitowe."
],
correct:"Uwiecznić wizerunek napastnika."
},

{
category:"CCTV",
question:"Który parametr obrazu ulega pogorszeniu jako pierwszy przy zbyt słabym kablu koncentrycznym?",
answers:[
"Jasność.",
"Ostrość.",
"Kolor (nasycenie barw).",
"Wielkość klatek."
],
correct:"Kolor (nasycenie barw)."
},

{
category:"CCTV",
question:"Rozdzielczość SXGA wynosi:",
answers:[
"640 x 480.",
"800 x 600.",
"1280 x 1024.",
"1920 x 1080."
],
correct:"1280 x 1024."
},

{
category:"CCTV",
question:"Pojęcie 'automatyka kamery' odnosi się do:",
answers:[
"Możliwości samodzielnej naprawy urządzenia.",
"Systemów korygujących parametry sygnału (np. ekspozycję).",
"Automatycznego zakupu nowych dysków.",
"Samoistnego montażu na ścianie."
],
correct:"Systemów korygujących parametry sygnału (np. ekspozycję)."
},

{
category:"CCTV",
question:"Matryca typu CMOS jest wykonana w technologii:",
answers:[
"Krzemowej.",
"Complementary MOS.",
"Lampowej.",
"Magnetycznej."
],
correct:"Complementary MOS."
},

{
category:"CCTV",
question:"W systemach CCTV termin 'backlight' oznacza:",
answers:[
"Tylne gniazdo zasilania.",
"Światło padające z tyłu obiektu w stronę kamery.",
"Podświetlenie przycisków na rejestratorze.",
"Błysk pioruna."
],
correct:"Światło padające z tyłu obiektu w stronę kamery."
},

{
category:"CCTV",
question:"Elektroniczny zoom w kamerach DSP polega na:",
answers:[
"Fizycznym przesuwaniu soczewek.",
"Cyfrowym powiększeniu fragmentu obrazu przez procesor.",
"Wymianie obiektywu na większy.",
"Zwiększeniu napięcia zasilania."
],
correct:"Cyfrowym powiększeniu fragmentu obrazu przez procesor."
},

{
category:"CCTV",
question:"Oznaczenie IP67 gwarantuje, że kamera jest:",
answers:[
"Odporna na zachlapanie.",
"Całkowicie pyłoszczelna i odporna na krótkotrwałe zanurzenie.",
"Tylko do użytku w biurze.",
"Wandaloodporna."
],
correct:"Całkowicie pyłoszczelna i odporna na krótkotrwałe zanurzenie."
},

{
category:"CCTV",
question:"W systemach dozorowych stacjonarne kamery to takie, które:",
answers:[
"Są zamontowane na stałe i nie poruszają się.",
"Obracają się o 360 stopni.",
"Działają tylko na stacjach benzynowych.",
"Wymagają stałego dopływu wody."
],
correct:"Są zamontowane na stałe i nie poruszają się."
},

{
category:"CCTV",
question:"Przetwornik obrazu o rozmiarze 1/6 cala jest zazwyczaj stosowany w:",
answers:[
"Profesjonalnych systemach bankowych.",
"Tanich lub bardzo małych kamerach.",
"Kamerach megapikselowych.",
"Monitoringach miejskich."
],
correct:"Tanich lub bardzo małych kamerach."
},

{
category:"CCTV",
question:"Funkcja detekcji ruchu w kamerach cyfrowych pozwala na:",
answers:[
"Wykrywanie zmian w obrazie i np. uruchomienie nagrywania.",
"Fizyczne zatrzymanie intruza.",
"Zmianę kąta widzenia obiektywu.",
"Wyłączenie prądu w obiekcie."
],
correct:"Wykrywanie zmian w obrazie i np. uruchomienie nagrywania."
},

{
category:"CCTV",
question:"Obudowa z normą IP65 zapewnia:",
answers:[
"Brak jakiejkolwiek ochrony.",
"Dostateczną ochronę przed wilgocią i zapyleniem.",
"Możliwość pracy 10 metrów pod wodą.",
"Ochronę przed pociskami."
],
correct:"Dostateczną ochronę przed wilgocią i zapyleniem."
},

{
category:"CCTV",
question:"Datownik w kamerze przemysłowej służy do:",
answers:[
"Ustawiania budzika.",
"Nakładania aktualnej daty i godziny na rejestrowany obraz.",
"Liczenia dni do końca gwarancji.",
"Mierzenia temperatury powietrza."
],
correct:"Nakładania aktualnej daty i godziny na rejestrowany obraz."
},

{
category:"CCTV",
question:"Kamera kompaktowa to najczęściej kamera przeznaczona do:",
answers:[
"Pracy w ciężkich warunkach podwodnych.",
"Montażu wewnętrznego (bez specjalnej obudowy zewnętrznej).",
"Montażu na satelitach.",
"Pracy bez prądu."
],
correct:"Montażu wewnętrznego (bez specjalnej obudowy zewnętrznej)."
},

{
category:"CCTV",
question:"Zastosowanie wzmacniacza sygnału wizyjnego jest konieczne przy odległościach powyżej:",
answers:[
"50 metrów.",
"100 metrów.",
"600 metrów.",
"10 kilometrów."
],
correct:"600 metrów."
},

{
category:"CCTV",
question:"Dlaczego jakość wykonania przetwornika jest kluczowa dla systemu monitoringu?",
answers:[
"Ponieważ od niego zależy waga urządzenia.",
"Jest to podstawa do osiągnięcia dobrej jakości obrazu.",
"Wpływa to na kolor kabla zasilającego.",
"Dzięki temu kamera ładniej wygląda na ścianie."
],
correct:"Jest to podstawa do osiągnięcia dobrej jakości obrazu."
},

{
category:"CCTV",
question:"Która funkcja kamery służy do eliminowania efektu ciemnego pierwszego planu, gdy kamera patrzy pod światło?",
answers:[
"AGC.",
"BLC.",
"AES.",
"WB."
],
correct:"BLC."
},

{
category:"CCTV",
question:"Co oznacza skrót BLC w ustawieniach kamery przemysłowej?",
answers:[
"Bright Light Control.",
"Back Light Compensation.",
"Blue Level Correction.",
"Binary Logic Control."
],
correct:"Back Light Compensation."
},

{
category:"CCTV",
question:"Główną wadą prostej funkcji BLC jest to, że rozjaśnienie pierwszego planu odbywa się kosztem:",
answers:[
"Utraty kolorów.",
"Rozjaśnienia (prześwietlenia) tła.",
"Zmniejszenia rozdzielczości.",
"Zwiększenia szumów cyfrowych."
],
correct:"Rozjaśnienia (prześwietlenia) tła."
},

{
category:"CCTV",
question:"Funkcja WDR (Wide Dynamic Range) różni się od BLC tym, że:",
answers:[
"Działa tylko w nocy.",
"Pozwala jednocześnie rozjaśnić ciemne elementy i przyciemnić zbyt jasne.",
"Automatycznie obraca kamerę w stronę światła.",
"Wymaga specjalnego kabla zasilającego."
],
correct:"Pozwala jednocześnie rozjaśnić ciemne elementy i przyciemnić zbyt jasne."
},

{
category:"CCTV",
question:"Na czym polega działanie funkcji WDR?",
answers:[
"Na mechanicznym przesuwaniu soczewek.",
"Na analizie naświetlania pojedynczych punktów obrazu.",
"Na wyłączeniu oświetlacza IR.",
"Na zmianie ogniskowej obiektywu."
],
correct:"Na analizie naświetlania pojedynczych punktów obrazu."
},

{
category:"CCTV",
question:"Odwzorowanie wszystkich kolorów względem wzorcowego punktu odniesienia to zadanie funkcji:",
answers:[
"AGC.",
"AES.",
"WB (Balans bieli).",
"DNR."
],
correct:"WB (Balans bieli)."
},

{
category:"CCTV",
question:"Co dzieje się z kolorami, gdy funkcja automatycznego balansu bieli (AWB) nie znajdzie w kadrze koloru białego?",
answers:[
"Obraz staje się czarno-biały.",
"Może nastąpić przekłamanie wszystkich pozostałych barw.",
"Kamera wyłącza się automatycznie.",
"Rozdzielczość spada do poziomu VGA."
],
correct:"Może nastąpić przekłamanie wszystkich pozostałych barw."
},

{
category:"CCTV",
question:"Funkcja AGC (Automatic Gain Control) odpowiada za:",
answers:[
"Automatyczne sterowanie wzmocnieniem sygnału.",
"Mechaniczne otwieranie migawki.",
"Ustawianie ostrości obiektywu.",
"Zdalne sterowanie rejestratorem."
],
correct:"Automatyczne sterowanie wzmocnieniem sygnału."
},

{
category:"CCTV",
question:"Głównym skutkiem ubocznym nadmiernego zwiększenia parametru AGC jest:",
answers:[
"Nagrzewanie się obudowy.",
"Wzrost szumów na obrazie.",
"Zwężenie kąta widzenia.",
"Zmniejszenie liczby klatek na sekundę."
],
correct:"Wzrost szumów na obrazie."
},

{
category:"CCTV",
question:"Funkcja AES (Auto Electronic Shutter) pozwala na:",
answers:[
"Automatyczną zmianę adresu IP.",
"Wydłużenie lub skrócenie czasu naświetlania przetwornika.",
"Wykrywanie twarzy.",
"Blokowanie dostępu do puszki."
],
correct:"Wydłużenie lub skrócenie czasu naświetlania przetwornika."
},

{
category:"CCTV",
question:"Wydłużenie czasu otwarcia migawki (AES) : ",
answers:[
"Przyciemnieniem obrazu.",
"Rozmazaniem ruchomych części obrazu.",
"Zwiększeniem nasycenia barw.",
"Poprawą geometrii narożników."
],
correct:"Rozmazaniem ruchomych części obrazu."
},

{
category:"CCTV",
question:"Dlaczego czas naświetlania w funkcji AES nie może być dowolnie długi?",
answers:[
"Bo spaliłaby się matryca.",
"Z wiadomych przyczyn nie może być dłuższy niż czas trwania jednej klatki.",
"Bo procesor DSP nie obsługuje liczb powyżej 100.",
"Bo zabrania tego norma IP66."
],
correct:"Z wiadomych przyczyn nie może być dłuższy niż czas trwania jednej klatki."
},

{
category:"CCTV",
question:"W jaki sposób redukcja parametru 'ostrość' może pomóc przy słabej jakości kompresji JPEG/MPEG?",
answers:[
"Zwiększa jasność obiektywu.",
"Pozwala wygładzić szumy i 'wzory' powstałe na skutek kompresji.",
"Zmienia format zapisu na dysku.",
"Przyspiesza działanie dysku twardego."
],
correct:"Pozwala wygładzić szumy i 'wzory' powstałe na skutek kompresji."
},

{
category:"CCTV",
question:"Zbyt mocne obniżenie parametru ostrości w ustawieniach kamery spowoduje, że:",
answers:[
"Obraz będzie zbyt jaskrawy.",
"Obraz będzie rozmazany.",
"Kamera przestanie widzieć w nocy.",
"Zniknie dźwięk."
],
correct:"Obraz będzie rozmazany."
},

{
category:"CCTV",
question:"Jaka jest główna zaleta stosowania kamer czarno-białych w porównaniu do kolorowych?",
answers:[
"Są ładniejsze wizualnie.",
"Posiadają znacznie wyższą czułość na oświetlenie.",
"Mają szerszy kąt widzenia.",
"Nie wymagają obiektywu."
],
correct:"Posiadają znacznie wyższą czułość na oświetlenie."
},

{
category:"CCTV",
question:"W jakich warunkach kamery kolorowe sprawdzają się najlepiej?",
answers:[
"W całkowitej ciemności.",
"W warunkach dziennych (przy dobrym oświetleniu).",
"Podczas gęstej mgły.",
"Tylko wewnątrz kopalni."
],
correct:"W warunkach dziennych (przy dobrym oświetleniu)."
},

{
category:"CCTV",
question:"Która cecha obrazu kolorowego jest kluczowa dla ułatwienia obserwacji?",
answers:[
"Mała liczba klatek.",
"Duża liczba szczegółów i łatwiejsza identyfikacja.",
"Brak szumów w nocy.",
"Możliwość pracy bez matrycy."
],
correct:"Duża liczba szczegółów i łatwiejsza identyfikacja."
},

{
category:"CCTV",
question:"Kamera, która 'rządzi' w nocy ze względu na czułość, to kamera:",
answers:[
"Kolorowa.",
"Czarno-biała (monochromatyczna).",
"Z obiektywem 2.8mm.",
"Z zasilaniem 5V."
],
correct:"Czarno-biała (monochromatyczna)."
},

{
category:"CCTV",
question:"Dobór obiektywu CCTV zależy przede wszystkim od:",
answers:[
"Rodzaju obserwowanych obiektów i miejsca instalacji.",
"Wagi kamery.",
"Liczby diod LED na rejestratorze.",
"Koloru ściany."
],
correct:"Rodzaju obserwowanych obiektów i miejsca instalacji."
},

{
category:"CCTV",
question:"Przy regulacji funkcji AGC należy dążyć do:",
answers:[
"Ustawienia wartości maksymalnej.",
"Całkowitego wyłączenia funkcji.",
"Metodą prób i błędów dojść do optymalnego nastawu.",
"Ustawienia losowego."
],
correct:"Metodą prób i błędów dojść do optymalnego nastawu."
},

{
category:"CCTV",
question:"W jakich kamerach najczęściej występują rozbudowane elementy regulacyjne?",
answers:[
"W najtańszych zabawkach.",
"W kamerach przemysłowych wyższej klasy.",
"W kamerach bez obiektywu.",
"Tylko w kamerach atrapy."
],
correct:"W kamerach przemysłowych wyższej klasy."
},

{
category:"CCTV",
question:"Co pozwala użytkownikowi na optymalne dostosowanie kamery do trudnych warunków środowiskowych?",
answers:[
"Dłuższy kabel.",
"Wbudowane elementy regulacyjne.",
"Większy monitor.",
"Zmiana hasła użytkownika."
],
correct:"Wbudowane elementy regulacyjne."
},

{
category:"CCTV",
question:"Jeśli kamera obserwuje obszar oświetlony sztucznym światłem, balan bieli należy:",
answers:[
"Wyłączyć całkowicie.",
"Dostosować do predefiniowanych ustawień dla światła sztucznego.",
"Zmienić na tryb nocny.",
"Pominąć, bo nie ma wpływu."
],
correct:"Dostosować do predefiniowanych ustawień dla światła sztucznego."
},

{
category:"CCTV",
question:"Funkcja 'uczenia' kamery balansu bieli polega na:",
answers:[
"Podkręceniu odpowiednio potencjometru.",
"Pokazaniu kamerze koloru białego i zapamiętaniu tego ustawienia.",
"Wgraniu nowego systemu operacyjnego.",
"Wymianie matrycy na nową."
],
correct:"Pokazaniu kamerze koloru białego i zapamiętaniu tego ustawienia."
},

{
category:"CCTV",
question:"Efekt 'bloków' (artefaktów) widoczny szczególnie w nocy wynika z:",
answers:[
"Brudnego obiektywu.",
"Wad kompresji bazującej na JPEG.",
"Zbyt silnego uziemienia.",
"Użycia kabla koncentrycznego 75 omów."
],
correct:"Wad kompresji bazującej na JPEG."
},

{
category:"CCTV",
question:"Pojęcie 'reprodukcja obrazu' w monitoringu oznacza:",
answers:[
"Kopiowanie nagrań na płyty.",
"Sposób odwzorowania rzeczywistości przez system wizyjny.",
"Naprawianie uszkodzonych kamer.",
"Drukowanie zdjęć z monitoringu."
],
correct:"Sposób odwzorowania rzeczywistości przez system wizyjny."
},

{
category:"CCTV",
question:"Wybór między kamerą kolorową a monochromatyczną zależy m.in. od:",
answers:[
"Pory roku i preferencji użytkownika.",
"Liczby przycisków na pilocie.",
"Długości anteny WiFi.",
"Marki telewizora."
],
correct:"Pory roku i preferencji użytkownika."
},

{
category:"CCTV",
question:"Dlaczego w nocy obraz z kamery kolorowej jest zazwyczaj gorszej jakości niż z czarno-białej?",
answers:[
"Bo procesor się przegrzewa.",
"Przez znacznie niższą czułość na słabe oświetlenie.",
"Bo kable w nocy mają większy opór.",
"Bo kolory znikają z prędkością światła."
],
correct:"Przez znacznie niższą czułość na słabe oświetlenie."
},

{
category:"CCTV",
question:"Czy można zwiększać wzmocnienie AGC w nieskończoność?",
answers:[
"Tak, poprawi to widoczność w całkowitym mroku.",
"Nie, ponieważ wraz ze wzmocnieniem sygnału rosną szumy.",
"Tak, o ile zasilacz ma 2 ampery.",
"Tylko w kamerach wewnętrznych."
],
correct:"Nie, ponieważ wraz ze wzmocnieniem sygnału rosną szumy."
},

{
category:"CCTV",
question:"W którym trybie WB biały odpowiada najjaśniejszemu punktowi obrazu?",
answers:[
"Ręcznym.",
"Automatycznym.",
"Studyjnym.",
"Wyłączonym."
],
correct:"Automatycznym."
},

{
category:"CCTV",
question:"Ustawienie ostrości (Sharpness) wpływa na:",
answers:[
"Prędkość obrotu kamery.",
"Wyrazistość krawędzi obiektów na obrazie.",
"Głośność nagrywanego dźwięku.",
"Adres MAC urządzenia."
],
correct:"Wyrazistość krawędzi obiektów na obrazie."
},

{
category:"CCTV",
question:"Funkcja AES jest szczególnie przydatna w obszarach:",
answers:[
"O bardzo silnym nasłonecznieniu.",
"O niewielkim naświetleniu (ciemnych).",
"Gdzie często pada deszcz.",
"Wewnątrz lodówek."
],
correct:"O niewielkim naświetleniu (ciemnych)."
},

{
category:"CCTV",
question:"Problem rozmazania ruchomych obiektów w funkcji AES wynika z:",
answers:[
"Słabej jakości matrycy CMOS.",
"Przemieszczania się obiektu w trakcie trwania naświetlania jednej klatki.",
"Braku prądu w kamerze.",
"Zbyt dużej rozdzielczości 4K."
],
correct:"Przemieszczania się obiektu w trakcie trwania naświetlania jednej klatki."
},

{
category:"CCTV",
question:"Dla identyfikacji osób na pierwszym planie przy silnym świetle z tyłu stosujemy:",
answers:[
"BLC.",
"AES.",
"Sharpness.",
"Formatowanie dysku."
],
correct:"BLC."
},

{
category:"CCTV",
question:"Zakres dynamiki obrazu (WDR) jest funkcją rozszerzającą działanie:",
answers:[
"Zoomu optycznego.",
"Balansu bieli.",
"Funkcji BLC.",
"Oświetlacza IR."
],
correct:"Funkcji BLC."
},

{
category:"CCTV",
question:"Który parametr regulacyjny pozwala na pracę w ciemniejszych warunkach poprzez podbicie sygnału?",
answers:[
"WB.",
"AGC.",
"D1.",
"SXGA."
],
correct:"AGC."
},

{
category:"CCTV",
question:"W systemach CCTV jakość odwzorowania rzeczywistości określamy mianem:",
answers:[
"Transferu danych.",
"Reprodukcji obrazu.",
"Kompresji plików.",
"Zasilania buforowego."
],
correct:"Reprodukcji obrazu."
},

{
category:"CCTV",
question:"Predefiniowane ustawienia barw w funkcji WB odpowiadają zazwyczaj:",
answers:[
"Rodzajom pogody (słońce, chmury).",
"Różnym typom oświetlenia (naturalne, sztuczne).",
"Dniom tygodnia.",
"Liczbie osób w kadrze."
],
correct:"Różnym typom oświetlenia (naturalne, sztuczne)."
},

{
category:"CCTV",
question:"Co stanowi wzorzec dla wszystkich kolorów w ustawieniach kamery?",
answers:[
"Kolor czarny.",
"Kolor czerwony.",
"Kolor biały.",
"Kolor zielony."
],
correct:"Kolor biały."
},

{
category:"CCTV",
question:"Jaki wpływ na obraz ma zmniejszenie parametru ostrości?",
answers:[
"Zwiększa liczbę klatek.",
"Wygładza szumy kompresji kosztem precyzji krawędzi.",
"Zmniejsza kąt widzenia.",
"Wyłącza nagrywanie."
],
correct:"Wygładza szumy kompresji kosztem precyzji krawędzi."
},

{
category:"CCTV",
question:"Gdzie najczęściej spotyka się szumy wynikające z działania AGC?",
answers:[
"W pełnym słońcu.",
"W słabo oświetlonych scenach przy wysokim wzmocnieniu.",
"W menu ustawień sieciowych.",
"Wewnątrz obudowy rejestratora."
],
correct:"W słabo oświetlonych scenach przy wysokim wzmocnieniu."
},

{
category:"CCTV",
question:"Technologia WDR jest stosunkowo:",
answers:[
"Stara (z lat 70.).",
"Nowa w porównaniu do klasycznego BLC.",
"Niedostępna w Polsce.",
"Wyłącznie analogowa."
],
correct:"Nowa w porównaniu do klasycznego BLC."
},

{
category:"CCTV",
question:"Co oznacza termin 'światło wsteczne' w monitoringu?",
answers:[
"Światło z latarki strażnika.",
"Silne źródło światła znajdujące się za obserwowanym obiektem.",
"Światło emitowane przez monitor.",
"Odbicie światła od obiektywu."
],
correct:"Silne źródło światła znajdujące się za obserwowanym obiektem."
},

{
category:"CCTV",
question:"Wadą kamer czarno-białych w dzień jest:",
answers:[
"Brak możliwości odróżnienia kolorów obiektów.",
"Bardzo wysoka cena.",
"Mała ostrość obrazu.",
"Konieczność używania okularów przeciwsłonecznych."
],
correct:"Brak możliwości odróżnienia kolorów obiektów."
},

{
category:"CCTV",
question:"Czas otwarcia migawki (Shutter Speed) mierzony jest zazwyczaj w:",
answers:[
"Amperach.",
"Ułamkach sekundy.",
"Metrach na sekundę.",
"Stopniach Celsjusza."
],
correct:"Ułamkach sekundy."
},

{
category:"CCTV",
question:"Czy funkcja WB działa poprawnie, jeśli w kadrze przeważa jeden intensywny kolor (np. zielona trawa)?",
answers:[
"Zawsze tak.",
"Nie, może dojść do błędnego przyjęcia dominującego koloru za biały i przekłamań.",
"Tak, o ile kamera ma IP68.",
"Tylko w kamerach stacjonarnych."
],
correct:"Nie, może dojść do błędnego przyjęcia dominującego koloru za biały i przekłamań."
},

{
category:"CCTV",
question:"Praca pod światło jest najtrudniejsza dla:",
answers:[
"Zasilacza.",
"Matrycy i algorytmów obróbki obrazu.",
"Dysku twardego.",
"Uchwytu ściennego."
],
correct:"Matrycy i algorytmów obróbki obrazu."
},

{
category:"CCTV",
question:"W systemach monitoringu, pod pojęciem 'warunki środowiskowe' rozumiemy:",
answers:[
"Tylko temperaturę.",
"Oświetlenie, wilgotność, temperaturę i przeszkody.",
"Liczbę drzew w okolicy.",
"Kolor nieba."
],
correct:"Oświetlenie, wilgotność, temperaturę i przeszkody."
},

{
category:"CCTV",
question:"Co pozwala na identyfikację twarzy osoby stojącej tyłem do słońca?",
answers:[
"AGC ustawione na minimum.",
"Funkcja BLC lub WDR.",
"Wyłączenie kamery.",
"Wymiana obiektywu na 12mm."
],
correct:"Funkcja BLC lub WDR."
},

{
category:"CCTV",
question:"Stosowanie predefiniowanych ustawień barw zapobiega:",
answers:[
"Kradzieży kamery.",
"Przekłamania kolorów przy nietypowym oświetleniu.",
"Przepięciom w sieci.",
"Zapełnieniu dysku."
],
correct:"Przekłamania kolorów przy nietypowym oświetleniu."
},

{
category:"CCTV",
question:"Problem szumów kompresji jest najbardziej widoczny:",
answers:[
"W dzień przy słońcu.",
"W nocy przy słabym świetle.",
"Na obrazach statycznych.",
"W menu rejestratora."
],
correct:"W nocy przy słabym świetle."
},

{
category:"CCTV",
question:"Co oznacza pojęcie 'optymalizacja ustawień'?",
answers:[
"Wymiana sprzętu na nowy co rok.",
"Dostosowanie parametrów tak, aby uzyskać najlepszy obraz w danych warunkach.",
"Zwiększenie ceny instalacji.",
"Ukrycie kamer przed ludźmi."
],
correct:"Dostosowanie parametrów tak, aby uzyskać najlepszy obraz w danych warunkach."
},

{
category:"CCTV",
question:"Przy doborze kamery do pracy w nocy bez dodatkowego oświetlacza IR, priorytetem jest:",
answers:[
"Rozdzielczość 4K.",
"Wysoka czułość (niska wartość luksów).",
"Mały rozmiar obudowy.",
"Długość kabla HDMI."
],
correct:"Wysoka czułość (niska wartość luksów)."
},

{
category:"CCTV",
question:"Kamera kolorowa jest preferowana, gdy:",
answers:[
"Chcemy widzieć markę i kolor pojazdu intruza.",
"Jest całkowicie ciemno.",
"Nie mamy monitora.",
"Mamy mało miejsca na dysku."
],
correct:"Chcemy widzieć markę i kolor pojazdu intruza."
},

{
category:"CCTV",
question:"Dlaczego obiekt w ruchu może być niewyraźny przy AES?",
answers:[
"Bo procesor nie nadąża z obliczeniami.",
"Bo znajduje się w różnych punktach w czasie naświetlania jednej klatki.",
"Bo migawka jest mechanicznie zablokowana.",
"Bo obiektyw jest zbyt szerokokątny."
],
correct:"Bo znajduje się w różnych punktach w czasie naświetlania jednej klatki."
},

{
category:"CCTV",
question:"Właściwe ustawienie WB wewnątrz pomieszczeń biurowych ze świetlówkami wymaga trybu:",
answers:[
"Dla światła dziennego.",
"Dla światła sztucznego (fluorescencyjnego).",
"Nocnego.",
"Outdoor."
],
correct:"Dla światła sztucznego (fluorescencyjnego)."
},

{
category:"CCTV",
question:"Zaleta WDR nad BLC to:",
answers:[
"Lepsza widoczność tła przy jednoczesnym doświetleniu planu pierwszego.",
"Możliwość nagrywania pod wodą.",
"Mniejszy pobór prądu.",
"Brak konieczności regulacji ostrości."
],
correct:"Lepsza widoczność tła przy jednoczesnym doświetleniu planu pierwszego."
},

{
category:"CCTV",
question:"Parametr AGC wzmacnia:",
answers:[
"Tylko czysty sygnał obrazu.",
"Sygnał wraz z zakłóceniami (szumami).",
"Napięcie zasilacza do 24V.",
"Dźwięk w głośniku telewizora."
],
correct:"Sygnał wraz z zakłóceniami (szumami)."
},

{
category:"CCTV",
question:"Dziwne 'wzory' na obrazie cyfrowym to często skutek:",
answers:[
"Zbyt wysokiej temperatury.",
"Agresywnej kompresji i błędów w blokach obrazu.",
"Uderzenia pioruna.",
"Podłączenia myszki do USB."
],
correct:"Agresywnej kompresji i błędów w blokach obrazu."
},

{
category:"CCTV",
question:"Który element kamery odpowiada za sterowanie czasem naświetlania?",
answers:[
"Migawka (Shutter).",
"Przetwornik analogowo-cyfrowy.",
"Zasilacz impulsowy.",
"Wtyk BNC."
],
correct:"Migawka (Shutter)."
},

{
category:"CCTV",
question:"Zasada 'metody prób i błędów' przy AGC służy do:",
answers:[
"Zepsucia kamery.",
"Znalezienia kompromisu między czułością a poziomem szumów.",
"Sprawdzenia wytrzymałości obudowy.",
"Ustawienia hasła administratora."
],
correct:"Znalezienia kompromisu między czułością a poziomem szumów."
},

{
category:"CCTV",
question:"Gdzie można znaleźć szczegółowe informacje o optymalizacji ustawień kamer CCTV?",
answers:[
"na etykiecie.",
"Na specjalistycznych portalach technicznych, np. Dipol.",
"W książce cameratio",
"Na demotywatory."
],
correct:"Na specjalistycznych portalach technicznych, np. Dipol."
},

{
category:"CCTV",
question:"Czy każda kamera posiada funkcję WDR?",
answers:[
"Tak, to standard od 1990 roku.",
"Nie, występuje ona głównie w kamerach wyższej klasy.",
"Tylko kamery czarno-białe.",
"Tylko atrapy kamer."
],
correct:"Nie, występuje ona głównie w kamerach wyższej klasy."
},

{
category:"CCTV",
question:"Rozjaśnienie ciemnych elementów sceny bez prześwietlania jasnych to:",
answers:[
"BLC.",
"AES.",
"WDR.",
"AGC."
],
correct:"WDR."
},

{
category:"CCTV",
question:"Jak brzmi dosłowne tłumaczenie angielskiego skrótu CCTV?",
answers:[
"Telewizja cyfrowa satelitarna.",
"Telewizja o zamkniętym obwodzie.",
"Centralny system dozoru wizyjnego.",
"Telewizja wysokiej rozdzielczości."
],
correct:"Telewizja o zamkniętym obwodzie."
},

{
category:"CCTV",
question:"Głównym celem stosowania systemów CCTV jest:",
answers:[
"Nagrywanie filmów rozrywkowych.",
"Nadzór oraz zwiększenie bezpieczeństwa.",
"Ograniczenie zużycia energii elektrycznej.",
"Nadawanie sygnału radiowego."
],
correct:"Nadzór oraz zwiększenie bezpieczeństwa."
},

{
category:"CCTV",
question:"Inne powszechnie stosowane określenie na telewizję dozorową to:",
answers:[
"Monitoring video.",
"Telewizja otwarta.",
"Sygnalizacja napadu.",
"Radiolokacja."
],
correct:"Monitoring video."
},

{
category:"CCTV",
question:"Gdzie obraz z kamer CCTV jest standardowo udostępniany?",
answers:[
"W internecie dla każdego użytkownika.",
"Wyłącznie na stanowiskach ochrony.",
"Na billboardach miejskich.",
"W lokalnej stacji telewizyjnej."
],
correct:"Wyłącznie na stanowiskach ochrony."
},

{
category:"CCTV",
question:"Który element NIE wchodzi w skład tradycyjnego systemu telewizji dozorowej?",
answers:[
"Kamery.",
"Urządzenia rejestrujące.",
"Pralki automatyczne.",
"Zasilacze."
],
correct:"Pralki automatyczne."
},

{
category:"CCTV",
question:"Który element NIE wchodzi w skład tradycyjnego systemu telewizji dozorowej?",
answers:[
"Kamery.",
"Urządzenia rejestrujące.",
"untileatory",
"Zasilacze."
],
correct:"Pralki automatyczne."
},

{
category:"CCTV",
question:"Który element NIE wchodzi w skład tradycyjnego systemu telewizji dozorowej?",
answers:[
"Kamery.",
"Urządzenia rejestrujące.",
"Anteny TV SAT.",
"Zasilacze."
],
correct:"Anteny TV SAT."
},

{
category:"CCTV",
question:"Co jest kluczowym kryterium przy wyborze kamer i obiektywów podczas projektowania systemu?",
answers:[
"Kolor obudowy.",
"Rozdzielczość rejestrowanych obrazów.",
"Waga zasilacza.",
"Marka monitora."
],
correct:"Rozdzielczość rejestrowanych obrazów."
},

{
category:"CCTV",
question:"Pojemność urządzeń do gromadzenia danych (dysków) dobiera się na podstawie:",
answers:[
"Liczby pracowników ochrony.",
"Wymaganego czasu archiwizacji nagrań.",
"Wysokości masztu antenowego.",
"Liczby okien w budynku."
],
correct:"Wymaganego czasu archiwizacji nagrań."
},

{
category:"CCTV",
question:"Od którego elementu kamery zależy jej kąt widzenia?",
answers:[
"Od przetwornika.",
"Od obiektywu.",
"Od kabla zasilającego.",
"Od oprogramowania rejestratora."
],
correct:"Od obiektywu."
},

{
category:"CCTV",
question:"Co określa parametr 'czułość' w specyfikacji kamery?",
answers:[
"Jakość pracy przy niewielkim oświetleniu.",
"Odporność na uderzenia mechaniczne.",
"Prędkość obrotu głowicy.",
"Liczbę dostępnych kolorów."
],
correct:"Jakość pracy przy niewielkim oświetleniu."
},

{
category:"CCTV",
question:"W monitoringach miejskich najczęściej stosuje się kamery typu:",
answers:[
"Atrapy.",
"Obrotowe megapikselowe (Dzień/Noc).",
"Ukryte w lustrach.",
"Wyłącznie czarno-białe analogowe."
],
correct:"Obrotowe megapikselowe (Dzień/Noc)."
},

{
category:"CCTV",
question:"Co daje zastosowanie zoomu optycznego w kamerach obrotowych?",
answers:[
"Powiększenie obrazu bez utraty jakości (w przekazie na żywo).",
"Możliwość nagrywania dźwięku.",
"Szybsze połączenie z internetem.",
"Zwiększenie rozdzielczości matrycy."
],
correct:"Powiększenie obrazu bez utraty jakości (w przekazie na żywo)."
},

{
category:"CCTV",
question:"Zoom cyfrowy realizowany jest przez:",
answers:[
"Soczewki obiektywu.",
"Oprogramowanie kamery lub rejestratora.",
"Silnik krokowy głowicy.",
"Zasilacz buforowy."
],
correct:"Oprogramowanie kamery lub rejestratora."
},

{
category:"CCTV",
question:"Jaka jest typowa szybkość klatkowa wystarczająca w większości zastosowań CCTV?",
answers:[
"5 klatek na sekundę.",
"10 klatek na sekundę.",
"25 klatek na sekundę.",
"100 klatek na sekundę."
],
correct:"25 klatek na sekundę."
},

{
category:"CCTV",
question:"System archiwizacji danych musi być zabezpieczony przed:",
answers:[
"Oglądaniem przez kogokolwiek.",
"Ingerencją osób niepowołanych.",
"Kurzem z zewnątrz.",
"Zbyt jasnym światłem w pomieszczeniu."
],
correct:"Ingerencją osób niepowołanych."
},

{
category:"CCTV",
question:"Zabezpieczenia elektroniczne rejestratora to przede wszystkim:",
answers:[
"Kłódki i łańcuchy.",
"Hasła i kody dostępu.",
"Farba antykorozyjna.",
"Folia na ekranie monitora."
],
correct:"Hasła i kody dostępu."
},

{
category:"CCTV",
question:"Dlaczego rejestrator powinien mieć zabezpieczenie na wypadek zaniku napięcia (np. UPS)?",
answers:[
"Aby szybciej odtwarzać nagrania.",
"Aby zapewnić ciągłość pracy systemu i nagrywania.",
"Aby zmienić format plików na .avi.",
"Aby oświetlić stanowisko ochrony."
],
correct:"Aby zapewnić ciągłość pracy systemu i nagrywania."
},

{
category:"CCTV",
question:"Wszystkie próby dostępu do archiwum nagrań powinny być:",
answers:[
"Kasowane co godzinę.",
"Rejestrowane (logowane).",
"Wysyłane do producenta kamer.",
"Głośno sygnalizowane dzwonkiem."
],
correct:"Rejestrowane (logowane)."
},

{
category:"CCTV",
question:"Czym jest 'eksport danych' w systemie monitoringu?",
answers:[
"Wysyłaniem kamer za granicę.",
"Procesem uzyskiwania i kopiowania zapisanych nagrań z systemu.",
"Kasowaniem dysku twardego.",
"Ustawianiem kąta widzenia obiektywu."
],
correct:"Procesem uzyskiwania i kopiowania zapisanych nagrań z systemu."
},

{
category:"CCTV",
question:"Jaką jakość powinny mieć dane wyeksportowane z systemu?",
answers:[
"Gorszą niż oryginał, aby zajmowały mniej miejsca.",
"Taką samą jak oryginalny zapis.",
"Zawsze czarno-białą.",
"Tylko w formie tekstu opisowego."
],
correct:"Taką samą jak oryginalny zapis."
},

{
category:"CCTV",
question:"Monitoring IP to inaczej:",
answers:[
"System analogowy HD.",
"Cyfrowy system wizyjny.",
"Telewizja satelitarna.",
"System alarmowy p-poż."
],
correct:"Cyfrowy system wizyjny."
},

{
category:"CCTV",
question:"Jak zdefiniować parametr ogniskowej obiektywu w odniesieniu do centrum optycznego i obrazowania obiektu?",
answers:[
"Jest to odległość od soczewki do obudowy kamery przy maksymalnym zoomie.",
"Określa odległość, w jakiej w centrum optycznym obiektywu powstaje obraz obiektu położonego w nieskończoności.",
"To fizyczna długość całego obiektywu wyrażona w centymetrach.",
"Parametr ten określa jedynie jasność soczewki przy pełnym otwarciu."
],
correct:"Określa odległość, w jakiej w centrum optycznym obiektywu powstaje obraz obiektu położonego w nieskończoności."
},

{
category:"CCTV",
question:"W jaki sposób zmiana długości ogniskowej wpływa na kąt widzenia kamery przy zachowaniu tego samego rozmiaru przetwornika?",
answers:[
"Im dłuższa ogniskowa, tym kąt widzenia jest większy (np. do hal).",
"Im dłuższa ogniskowa, tym kąt widzenia jest mniejszy (np. do korytarzy).",
"Skracanie ogniskowej powoduje zawężenie pola widzenia kamery.",
"Długość ogniskowej nie ma żadnego wpływu na kąt widzenia."
],
correct:"Im dłuższa ogniskowa, tym kąt widzenia jest mniejszy (np. do korytarzy)."
},

{
category:"CCTV",
question:"Który z wymienionych typów obiektywów będzie najbardziej odpowiedni do monitorowania dużych, otwartych pomieszczeń?",
answers:[
"Obiektyw o długiej ogniskowej (np. 50mm).",
"Obiektyw o małej wartości ogniskowej (szerokokątny).",
"Obiektyw typu wąskokątnego z małą aperturą.",
"Obiektyw o stałej ogniskowej 12mm."
],
correct:"Obiektyw o małej wartości ogniskowej (szerokokątny)."
},

{
category:"CCTV",
question:"Czym charakteryzuje się liczba aperturowa F (jasność obiektywu) w kontekście przepuszczania światła?",
answers:[
"Wraz ze wzrostem liczby F rośnie ilość światła padającego na przetwornik.",
"Wraz ze wzrostem liczby F maleje ilość światła przechodzącego przez obiektyw.",
"Mała wartość F oznacza, że obiektyw jest bardzo ciemny.",
"Liczba F określa jedynie prędkość migawki elektronicznej."
],
correct:"Wraz ze wzrostem liczby F maleje ilość światła przechodzącego przez obiektyw."
},

{
category:"CCTV",
question:"Zgodnie ze skalą F, który z poniższych obiektywów pozwoli na uzyskanie najjaśniejszego obrazu przy słabym oświetleniu?",
answers:[
"Obiektyw z F=1.2.",
"Obiektyw z F=2.0.",
"Obiektyw z F=4.0.",
"Obiektyw z F=8.0."
],
correct:"Obiektyw z F=1.2."
},

{
category:"CCTV",
question:"Czym różni się liczba transmisyjna T od liczby aperturowej F w ocenie jakości obiektywu?",
answers:[
"Liczba T określa tylko kąt widzenia, a F jasność.",
"Liczba T uwzględnia rzeczywistą zdolność do przepuszczania światła, np. straty na materiale soczewek.",
"Liczba F jest dokładniejsza i uwzględnia rodzaj materiału soczewki.",
"Liczba T jest stosowana wyłącznie w kamerach analogowych."
],
correct:"Liczba T uwzględnia rzeczywistą zdolność do przepuszczania światła, np. straty na materiale soczewek."
},

{
category:"CCTV",
question:"Jaką funkcję pełni przysłona (Iris) w konstrukcji obiektywu kamery dozorowej?",
answers:[
"Reguluje ostrość obrazu w rogach ekranu.",
"Jest regulowanym otworem zmieniającym ilość światła padającego na przetwornik.",
"Służy do fizycznego zakrywania obiektywu w nocy.",
"Wzmacnia sygnał elektryczny z matrycy."
],
correct:"Jest regulowanym otworem zmieniającym ilość światła padającego na przetwornik."
},

{
category:"CCTV",
question:"W jakich warunkach najczęściej stosuje się obiektywy z automatyczną przysłoną (Auto-IRIS)?",
answers:[
"W biurach o stałym, sztucznym oświetleniu.",
"Na zewnątrz budynków, gdzie występują duże zmiany oświetlenia słonecznego.",
"W ciemnych piwnicach bez okien.",
"Wyłącznie w kamerach wewnętrznych typu atrapy."
],
correct:"Na zewnątrz budynków, gdzie występują duże zmiany oświetlenia słonecznego."
},

{
category:"CCTV",
question:"Jak definiujemy parametr 'głębia ostrości' w systemie telewizji dozorowej?",
answers:[
"To maksymalna odległość, na jaką kamera widzi w podczerwieni.",
"To zakres odległości, w którym obserwowane obiekty sprawiają wrażenie ostrych.",
"To fizyczna głębokość obudowy kamery.",
"To parametr określający wyłącznie rozdzielczość matrycy."
],
correct:"To zakres odległości, w którym obserwowane obiekty sprawiają wrażenie ostrych."
},

{
category:"CCTV",
question:"W jaki sposób można technicznie zwiększyć głębię ostrości w monitorowanym kadrze?",
answers:[
"Przez maksymalne otwarcie przysłony.",
"Przez przymykanie przysłony oraz skracanie ogniskowej.",
"Przez wydłużenie ogniskowej przy otwartej przysłonie.",
"Głębia ostrości jest stała i nie podlega regulacji."
],
correct:"Przez przymykanie przysłony oraz skracanie ogniskowej."
},

{
category:"CCTV",
question:"Kiedy w monitoringu pożądana jest mała głębia ostrości?",
answers:[
"Podczas obserwacji całego parkingu miejskiego.",
"Gdy chcemy wyodrębnić konkretny, obserwowany obiekt od tła otoczenia.",
"Przy monitorowaniu korytarzy w nocy.",
"Gdy używamy obiektywu szerokokątnego."
],
correct:"Gdy chcemy wyodrębnić konkretny, obserwowany obiekt od tła otoczenia."
},

{
category:"CCTV",
question:"Zgodnie z podziałem ze względu na kąt widzenia, obiektyw wąskokątny charakteryzuje się tym, że:",
answers:[
"Jego ogniskowa jest znacznie mniejsza od przekątnej przetwornika.",
"Jego ogniskowa jest podobna do przekątnej przetwornika.",
"Jego ogniskowa jest większa od przekątnej przetwornika obrazu.",
"Nie posiada soczewek skupiających."
],
correct:"Jego ogniskowa jest większa od przekątnej przetwornika obrazu."
},

{
category:"CCTV",
question:"Kiedy mówimy o obiektywie szerokokątnym w kontekście parametrów fizycznych?",
answers:[
"Gdy ogniskowa jest równa przekątnej przetwornika.",
"Gdy wartość ogniskowej jest znacznie mniejsza od przekątnej przetwornika obrazu.",
"Gdy obiektyw posiada automatyczną przysłonę.",
"Gdy obiektyw można zamontować tylko na zewnątrz."
],
correct:"Gdy wartość ogniskowej jest znacznie mniejsza od przekątnej przetwornika obrazu."
},

{
category:"CCTV",
question:"Do których kamer dedykowane są obiektywy typu 'no-IRIS' (bez przysłony)?",
answers:[
"Do najbardziej zaawansowanych kamer obrotowych.",
"Do prostych kamer pracujących w stałych warunkach oświetleniowych.",
"Do kamer zewnętrznych narażonych na ostre słońce.",
"Do kamer megapikselowych z funkcją WDR."
],
correct:"Do prostych kamer pracujących w stałych warunkach oświetleniowych."
},

{
category:"CCTV",
question:"Obiektywy z przysłoną ręczną (Manual Iris) znajdują zastosowanie głównie w:",
answers:[
"Kamerach montowanych na parkingach.",
"Kamerach wewnętrznych, gdzie oświetlenie nie ulega gwałtownym zmianom.",
"Systemach monitoringu miejskiego z zoomem.",
"Kamerach termowizyjnych."
],
correct:"Kamerach wewnętrznych, gdzie oświetlenie nie ulega gwałtownym zmianom."
},

{
category:"CCTV",
question:"Co oznacza termin 'Varifocal' (zmienna ogniskowa) w specyfikacji obiektywu?",
answers:[
"Możliwość ręcznej zmiany pola widzenia i ogniskowej w określonym zakresie.",
"Automatyczne śledzenie obiektu przez kamerę.",
"Fizyczną zmianę rozdzielczości matrycy.",
"Możliwość zasilania obiektywu z baterii."
],
correct:"Możliwość ręcznej zmiany pola widzenia i ogniskowej w określonym zakresie."
},

{
category:"CCTV",
question:"W jakich sytuacjach stosuje się obiektywy typu moto-zoom?",
answers:[
"W najprostszych instalacjach domowych.",
"W najbardziej wymagających zastosowaniach, gdzie ogniskowa regulowana jest zdalnie.",
"Gdy kamera nie posiada przetwornika obrazu.",
"Tylko w kamerach czarno-białych."
],
correct:"W najbardziej wymagających zastosowaniach, gdzie ogniskowa regulowana jest zdalnie."
},

{
category:"CCTV",
question:"Jaka jest kluczowa różnica techniczna między mocowaniem obiektywu typu C a CS?",
answers:[
"Średnica gwintu jest zupełnie inna.",
"Odległość płaszczyzny obiektywu od powierzchni przetwornika obrazu.",
"Mocowanie C jest wykonane z plastiku, a CS z metalu.",
"Obiektywy C nie posiadają przysłony."
],
correct:"Odległość płaszczyzny obiektywu od powierzchni przetwornika obrazu."
},

{
category:"CCTV",
question:"Jaka jest fizyczna odległość od przetwornika dla mocowania typu CS?",
answers:[
"5 mm.",
"12,5 mm.",
"17,526 mm.",
"25 mm."
],
correct:"12,5 mm."
},

{
category:"CCTV",
question:"Jaka jest fizyczna odległość od przetwornika dla mocowania typu C?",
answers:[
"10 mm.",
"12,5 mm.",
"17,526 mm.",
"30,5 mm."
],
correct:"17,526 mm."
},

{
category:"CCTV",
question:"W jaki sposób można zamontować obiektyw typu C na kamerze z gniazdem CS?",
answers:[
"Jest to fizycznie niemożliwe.",
"Należy spiłować gwint obiektywu.",
"Poprzez zastosowanie dodatkowego pierścienia dystansowego.",
"Wystarczy mocniej dokręcić obiektyw."
],
correct:"Poprzez zastosowanie dodatkowego pierścienia dystansowego."
},

{
category:"CCTV",
question:"Czy możliwe jest poprawne zamontowanie obiektywu typu CS na kamerze z gniazdem typu C?",
answers:[
"Tak, przy użyciu pierścienia.",
"Nie, taka relacja nie zachodzi (brak możliwości uzyskania ostrości).",
"Tak, ale tylko w kamerach analogowych.",
"Tak, ale obraz będzie zawsze czarno-biały."
],
correct:"Nie, taka relacja nie zachodzi (brak możliwości uzyskania ostrości)."
},

{
category:"CCTV",
question:"Które mocowanie obiektywu jest obecnie częściej spotykane ze względu na uniwersalność?",
answers:[
"Mocowanie typu C.",
"Mocowanie typu CS.",
"Mocowanie bagnetowe.",
"Mocowanie magnetyczne."
],
correct:"Mocowanie typu CS."
},

{
category:"CCTV",
question:"Co należy uwzględnić przy doborze obiektywu do obserwacji obiektów poruszających się bardzo szybko?",
answers:[
"Tylko kolor obudowy kamery.",
"Jasność obiektywu oraz odpowiednie pole obserwacji.",
"Wyłącznie wagę soczewek.",
"Długość kabla koncentrycznego."
],
correct:"Jasność obiektywu oraz odpowiednie pole obserwacji."
},

{
category:"CCTV",
question:"Jakie parametry obiektywu są kluczowe przy projektowaniu monitoringu w korytarzach o zmiennym oświetleniu?",
answers:[
"Długa ogniskowa i automatyczna przysłona (Auto-IRIS).",
"Krótka ogniskowa i brak przysłony.",
"Szerokokątny obiektyw stały no-IRIS.",
"Zasilanie 230V bezpośrednio do soczewki."
],
correct:"Długa ogniskowa i automatyczna przysłona (Auto-IRIS)."
},

{
category:"CCTV",
question:"Do czego służą tzw. obiektywy specjalne w systemach CCTV?",
answers:[
"Do robienia zdjęć pamiątkowych.",
"Umożliwiają pracę w ściśle określonych warunkach, gdzie zwykłe obiektywy są bezużyteczne.",
"Zastępują one procesor DSP w kamerze.",
"Są to wyłącznie obiektywy do kamer ukrytych w guzikach."
],
correct:"Umożliwiają pracę w ściśle określonych warunkach, gdzie zwykłe obiektywy są bezużyteczne."
},

{
category:"CCTV",
question:"Jeżeli przysłona obiektywu jest przymknięta, to jak wpłynie to na głębię ostrości?",
answers:[
"Głębia ostrości zmaleje.",
"Głębia ostrości zwiększy się.",
"Głębia ostrości pozostanie bez zmian.",
"Obraz stanie się całkowicie czarny niezależnie od światła."
],
correct:"Głębia ostrości zwiększy się."
},

{
category:"CCTV",
question:"Dlaczego dąży się do tego, aby głębia ostrości w monitoringu sięgała nieskończoności?",
answers:[
"Aby kamera nie pobierała prądu.",
"Aby wszystkie obiekty leżące dalej niż minimalna odległość były widoczne ostro.",
"Aby ograniczyć kąt widzenia kamery.",
"Jest to wymóg techniczny dla transmisji WiFi."
],
correct:"Aby wszystkie obiekty leżące dalej niż minimalna odległość były widoczne ostro."
},

{
category:"CCTV",
question:"Który parametr obiektywu decyduje o możliwości uniknięcia efektu oślepienia przez słońce?",
answers:[
"Ogniskowa.",
"Automatyczna przysłona.",
"Typ mocowania (C/CS).",
"Liczba soczewek wewnątrz."
],
correct:"Automatyczna przysłona."
},

{
category:"CCTV",
question:"Dla obiektywu o zmiennej ogniskowej, typowy zakres spotykany w praktyce to:",
answers:[
"1-2 mm.",
"3,5-8 mm.",
"100-200 mm.",
"Zawsze powyżej 500 mm."
],
correct:"3,5-8 mm."
},

{
category:"CCTV",
question:"Obiektywy standardowe to takie, w których:",
answers:[
"Ogniskowa jest znacznie mniejsza od przetwornika.",
"Ogniskowa jest podobna do przekątnej przetwornika obrazu.",
"Brak jest możliwości regulacji ostrości.",
"Można je stosować tylko w dzień."
],
correct:"Ogniskowa jest podobna do przekątnej przetwornika obrazu."
},

{
category:"CCTV",
question:"Jak zmiana liczby F z 1.4 na 4.0 wpłynie na obraz z kamery?",
answers:[
"Obraz stanie się jaśniejszy.",
"Obraz stanie się ciemniejszy.",
"Obraz zmieni kolory na negatywowe.",
"Zwiększy się kąt widzenia."
],
correct:"Obraz stanie się ciemniejszy."
},

{
category:"CCTV",
question:"Parametr 'skala T' w obiektywach pozwala na:",
answers:[
"Bezwzględną ocenę jasności obiektywu.",
"Ustawienie adresu IP kamery.",
"Mierzenie temperatury obudowy.",
"Wybór między systemem PAL a NTSC."
],
correct:"Bezwzględną ocenę jasności obiektywu."
},

{
category:"CCTV",
question:"Współczynnik transmisji światła w obiektywie uwzględnia między innymi:",
answers:[
"Długość kabla BNC.",
"Materiał, z którego wykonano soczewki.",
"Markę rejestratora.",
"Liczbę klatek na sekundę."
],
correct:"Materiał, z którego wykonano soczewki."
},

{
category:"CCTV",
question:"Gdzie fizycznie znajduje się przysłona w obiektywie?",
answers:[
"Na zewnętrznej obudowie kamery.",
"Na drodze strumienia światła wewnątrz obiektywu.",
"Wewnątrz procesora obrazu.",
"Na wtyczce zasilającej."
],
correct:"Na drodze strumienia światła wewnątrz obiektywu."
},

{
category:"CCTV",
question:"Która cecha obiektywu decyduje o tym, jak dużo szczegółów zobaczymy na korytarzu o długości 30 metrów?",
answers:[
"Szerokokątna ogniskowa.",
"Długa ogniskowa (wąskokątna).",
"Brak przysłony.",
"Mocowanie typu C."
],
correct:"Długa ogniskowa (wąskokątna)."
},

{
category:"CCTV",
question:"Obiektywy o stałej ogniskowej (np. 4mm) charakteryzują się:",
answers:[
"Możliwością zdalnego przybliżania obrazu.",
"Niezmiennym, fabrycznie ustawionym kątem widzenia.",
"Wymogiem stosowania silnika krokowego.",
"Bardzo dużą wagą."
],
correct:"Niezmiennym, fabrycznie ustawionym kątem widzenia."
},

{
category:"CCTV",
question:"W systemach 'Dzień/Noc' najczęściej stosuje się obiektywy z przysłoną:",
answers:[
"Ręczną.",
"Automatyczną (Auto-IRIS).",
"No-IRIS.",
"Zablokowaną na stałe."
],
correct:"Automatyczną (Auto-IRIS)."
},

{
category:"CCTV",
question:"Przy wyborze obiektywu dla kamery megapikselowej, kluczowe jest dopasowanie go do:",
answers:[
"Rozdzielczości matrycy.",
"Koloru elewacji.",
"Wielkości dysku twardego.",
"Liczby diod IR."
],
correct:"Rozdzielczości matrycy."
},

{
category:"CCTV",
question:"Co się dzieje z ilością światła, gdy liczba aperturowa F maleje?",
answers:[
"Ilość światła maleje.",
"Ilość światła rośnie (obiektyw jest jaśniejszy).",
"Światło jest całkowicie blokowane.",
"Zmienia się tylko długość fali światła."
],
correct:"Ilość światła rośnie (obiektyw jest jaśniejszy)."
},

{
category:"CCTV",
question:"Typowy obiektyw o ogniskowej 12.0mm zaliczamy do grupy obiektywów:",
answers:[
"Szerokokątnych.",
"O stałej ogniskowej.",
"Moto-zoom.",
"No-IRIS."
],
correct:"O stałej ogniskowej."
},

{
category:"CCTV",
question:"Który parametr obiektywu określa zdolność do zbierania i przenoszenia obrazu na przetwornik?",
answers:[
"Definicja obiektywu jako elementu zbierającego.",
"Impedancja.",
"Częstotliwość odświeżania.",
"Pojemność elektryczna."
],
correct:"Definicja obiektywu jako elementu zbierającego."
},

{
category:"CCTV",
question:"W specyfikacji obiektywu podaje się dwie wartości liczby F (np. F1.4 - F360), co one oznaczają?",
answers:[
"Minimalną i maksymalną temperaturę pracy.",
"Maksymalne i minimalne otwarcie przysłony.",
"Odległość od nadajnika.",
"Wagę soczewek."
],
correct:"Maksymalne i minimalne otwarcie przysłony."
},

{
category:"CCTV",
question:"Jakie materiały soczewek są uwzględniane przy wyliczaniu liczby transmisyjnej T?",
answers:[
"Wyłącznie plastikowe.",
"Szkło i inne materiały optyczne wysokiej jakości.",
"Metale przewodzące.",
"Materiały izolacyjne puszki."
],
correct:"Szkło i inne materiały optyczne wysokiej jakości."
},

{
category:"CCTV",
question:"Przysłona automatyczna niweluje efekt:",
answers:[
"Zbyt wolnego internetu.",
"Oślepienia przetwornika przez promienie słoneczne.",
"Złej adresacji IP.",
"Wandalizmu."
],
correct:"Oślepienia przetwornika przez promienie słoneczne."
},

{
category:"CCTV",
question:"Skrócenie ogniskowej (np. z 12mm na 2.8mm) przy tej samej przysłonie spowoduje:",
answers:[
"Zmniejszenie głębi ostrości.",
"Zwiększenie głębi ostrości.",
"Całkowity zanik ostrości.",
"Brak wpływu na ten parametr."
],
correct:"Zwiększenie głębi ostrości."
},

{
category:"CCTV",
question:"W monitoringu, obiektyw standardowy to taki, w którym kąt widzenia jest zbliżony do:",
answers:[
"Kąta widzenia ludzkiego oka.",
"Kąta 180 stopni.",
"Kąta 5 stopni.",
"Kąta widzenia satelity."
],
correct:"Kąta widzenia ludzkiego oka."
},

{
category:"CCTV",
question:"Gdzie w specyfikacji obiektywu znajdziemy informację o możliwości regulacji światła przez kamerę?",
answers:[
"W opisie rodzaju przysłony (Auto-IRIS).",
"W opisie typu gwintu.",
"W opisie wagi soczewki.",
"W nazwie producenta."
],
correct:"W opisie rodzaju przysłony (Auto-IRIS)."
},

{
category:"CCTV",
question:"Czy typ mocowania (C lub CS) wpływa na jasność obiektywu?",
answers:[
"Tak, mocowanie C jest zawsze jaśniejsze.",
"Nie, określa ono jedynie sposób i odległość montażu od przetwornika.",
"Tak, mocowanie CS dopuszcza tylko obiektywy F=1.2.",
"Tak, zależy to od koloru pierścienia dystansowego."
],
correct:"Nie, określa ono jedynie sposób i odległość montażu od przetwornika."
},

{
category:"CCTV",
question:"Dopasowanie obiektywu do pola obserwacji wymaga analizy:",
answers:[
"Czy obiekty są nieruchome czy przemieszczają się szybko.",
"Tylko tego, czy kamera ma WiFi.",
"Liczby gniazd BNC w rejestratorze.",
"Wielkości monitora u klienta."
],
correct:"Czy obiekty są nieruchome czy przemieszczają się szybko."
},


{
category:"CCTV",
question:"Jaki standardowy format plików często wykorzystują systemy IP do zapisu materiałów?",
answers:[
"mp3.",
".avi.",
".txt.",
".pdf."
],
correct:".avi."
},

{
category:"CCTV",
question:"Do czego służą popularne kodeki podczas eksportu danych?",
answers:[
"Do chłodzenia dysku twardego.",
"Do umożliwienia odtworzenia nagrań na innych urządzeniach.",
"Do zasilania kamer przez sieć.",
"Do zmiany hasła administratora."
],
correct:"Do umożliwienia odtworzenia nagrań na innych urządzeniach."
},

{
category:"CCTV",
question:"W jakim celu stosuje się monitoring video w prywatnych domach?",
answers:[
"Do podsłuchiwania sąsiadów.",
"W celu zwiększenia bezpieczeństwa mienia i domowników.",
"Do poprawy zasięgu WiFi.",
"Do mierzenia temperatury w pokojach."
],
correct:"W celu zwiększenia bezpieczeństwa mienia i domowników."
},

{
category:"CCTV",
question:"Projektując system CCTV, należy zapewnić współpracę elementów, co nazywamy:",
answers:[
"Archiwizacją danych.",
"Dopasowaniem (kompatybilnością) urządzeń.",
"Eksportem kodeków.",
"Zoomem optycznym."
],
correct:"Dopasowaniem (kompatybilnością) urządzeń."
},

{
category:"CCTV",
question:"Umożliwienie pełnej konfiguracji zapisu dla każdej kamery z osobna to funkcja:",
answers:[
"Tylko kamer analogowych.",
"Współczesnego oprogramowania systemów CCTV.",
"Wyłącznie dysków flash.",
"Zasilaczy impulsowych."
],
correct:"Współczesnego oprogramowania systemów CCTV."
},

{
category:"CCTV",
question:"Co oznacza pojęcie 'telewizja przemysłowa'?",
answers:[
"Telewizja nadająca tylko filmy o fabrykach.",
"Inne określenie na system telewizji dozorowej CCTV.",
"System nadawania sygnału DVB-T2.",
"Telewizja dostępna tylko w biurach projektowych."
],
correct:"Inne określenie na system telewizji dozorowej CCTV."
},

{
category:"CCTV",
question:"Proces uzyskiwania materiałów z archiwum nie powinien:",
answers:[
"Być darmowy.",
"W żaden sposób obciążać pracy bieżącej systemu.",
"Wymagać hasła.",
"Trwać dłużej niż minutę."
],
correct:"W żaden sposób obciążać pracy bieżącej systemu."
},

{
category:"CCTV",
question:"Wybór kamery ze względu na możliwość odczytania tablic rejestracyjnych wiąże się z analizą:",
answers:[
"Koloru obudowy rejestratora.",
"Warunków wizualnych i rozdzielczości.",
"Długości uchwytu kamery.",
"Liczby monitorów na stanowisku."
],
correct:"Warunków wizualnych i rozdzielczości."
},

{
category:"CCTV",
question:"Do jakich nośników systemy CCTV powinny umożliwiać eksport danych?",
answers:[
"Wyłącznie na dyskietki 3,5 cala.",
"Do różnych typów (flash, zewnętrzne dyski twarde, itp.).",
"Tylko na karty perforowane.",
"Wyłącznie do chmury producenta."
],
correct:"Do różnych typów (flash, zewnętrzne dyski twarde, itp.)."
},

{
category:"CCTV",
question:"W systemie CCTV monitory służą do:",
answers:[
"Zasilania kamer.",
"Bieżącego podglądu obrazu z systemu.",
"Nagrywania obrazu na dysk.",
"Mocowania obiektywów."
],
correct:"Bieżącego podglądu obrazu z systemu."
},

{
category:"CCTV",
question:"Czym charakteryzuje się 'zamknięty system' w definicji CCTV?",
answers:[
"Drzwi do serwerowni są zawsze zamknięte.",
"Obraz jest przesyłany w obrębie wydzielonego systemu urządzeń.",
"Kamery działają tylko przy zamkniętych oknach.",
"System nie posiada kabli."
],
correct:"Obraz jest przesyłany w obrębie wydzielonego systemu urządzeń."
},

{
category:"CCTV",
question:"Systemy bezprzewodowe w CCTV są alternatywą dla:",
answers:[
"Przetworników CCD.",
"Przewodów transmisyjnych.",
"Haseł dostępu.",
"Monitorów LCD."
],
correct:"Przewodów transmisyjnych."
},

{
category:"CCTV",
question:"Zabezpieczenie archiwum przed zanikiem napięcia realizuje się za pomocą:",
answers:[
"Wyłącznika różnicowoprądowego.",
"Zasilaczy awaryjnych (UPS).",
"Większej liczby kamer.",
"Kompensacji światła wstecznego."
],
correct:"Zasilaczy awaryjnych (UPS)."
},

{
category:"CCTV",
question:"Kamera obrotowa w porównaniu do analogowej stałej oferuje zazwyczaj:",
answers:[
"Mniejszą wagę.",
"Większą szybkość klatkową i zoom optyczny.",
"Brak obiektywu.",
"Zasilanie wyłącznie z baterii."
],
correct:"Większą szybkość klatkową i zoom optyczny."
},

{
category:"CCTV",
question:"Co pozwala na identyfikację szczegółów w obrazie archiwalnym, jeśli nie użyto zoomu optycznego?",
answers:[
"Zoom cyfrowy (powiększenie programowe).",
"Wymiana kabla na złoty.",
"Wyczyszczenie monitora.",
"Zmiana koloru ściany."
],
correct:"Zoom cyfrowy (powiększenie programowe)."
},

{
category:"CCTV",
question:"W jakich obiektach montuje się systemy telewizji dozorowej?",
answers:[
"Tylko w bazach wojskowych.",
"W centrach handlowych, hipermarketach, domach prywatnych.",
"Wyłącznie w kinach.",
"Tylko w przedszkolach."
],
correct:"W centrach handlowych, hipermarketach, domach prywatnych."
},

{
category:"CCTV",
question:"Parametr 'liczba klatek na sekundę' ma bezpośredni wpływ na:",
answers:[
"Kolorystykę obrazu.",
"Płynność zarejestrowanego ruchu.",
"Wielkość puszki montażowej.",
"Impedancję fali."
],
correct:"Płynność zarejestrowanego ruchu."
},

{
category:"CCTV",
question:"Akcesoria w systemie CCTV to między innymi:",
answers:[
"Łyżki i widelce.",
"Obudowy, uchwyty i złącza.",
"Meble biurowe.",
"Opony samochodowe."
],
correct:"Obudowy, uchwyty i złącza."
},

{
category:"CCTV",
question:"Projektant systemu CCTV musi uwzględnić 'warunki pracy', co oznacza:",
answers:[
"Wynagrodzenie instalatora.",
"Środowisko (temp, wilgotność, oświetlenie), w którym pracują urządzenia.",
"Godziny otwarcia sklepu.",
"Dostęp do kawy w serwerowni."
],
correct:"Środowisko (temp, wilgotność, oświetlenie), w którym pracują urządzenia."
},

{
category:"CCTV",
question:"Sposób archiwizacji materiału musi pozwalać na jego późniejsze:",
answers:[
"Skasowanie bez śladu.",
"Odtwarzanie i analizę.",
"Wydrukowanie na papierze ściernym.",
"Przesłanie gołębiem pocztowym."
],
correct:"Odtwarzanie i analizę."
},

{
category:"CCTV",
question:"Który parametr zależy bezpośrednio od przetwornika kamery?",
answers:[
"Cena obudowy.",
"Czułość urządzenia.",
"Wysokość masztu.",
"Długość kabla HDMI."
],
correct:"Czułość urządzenia."
},

{
category:"CCTV",
question:"Wymagania użytkowe dla systemu CCTV dotyczą między innymi:",
answers:[
"marki opakowań.",
"Jakości materiału i sposobu archiwizacji.",
"widma podczerwonego.",
"Liczby jakości nasad złączy CCRV."
],
correct:"Jakości materiału i sposobu archiwizacji."
},

{
category:"CCTV",
question:"Obraz 'na żywo' w kamerach obrotowych jest szczególnie przydatny do:",
answers:[
"Liczenia dni do urlopu.",
"Wychwycenia bieżących szczegółów przez operatora.",
"Ogrzewania matrycy.",
"Oszczędzania miejsca na dysku."
],
correct:"Wychwycenia bieżących szczegółów przez operatora."
},

{
category:"CCTV",
question:"Eksport fragmentu nagrania w postaci zdjęcia jest przydatny do:",
answers:[
"Ustawienia tapety w komputerze.",
"Przekazania wizerunku sprawcy policji.",
"Zwiększenia ostrości obiektywu.",
"Mierzenia czasu pracy monitora."
],
correct:"Przekazania wizerunku sprawcy policji."
},

{
category:"CCTV",
question:"Co to jest 'stanowisko ochrony' w kontekście CCTV?",
answers:[
"Miejsce, gdzie stoją kamery.",
"Miejsce, gdzie operatorzy obserwują obrazy z monitoringu.",
"Budka dla psa.",
"Gniazdo zasilające 230V."
],
correct:"Miejsce, gdzie operatorzy obserwują obrazy z monitoringu."
},

{
category:"CCTV",
question:"Pojęcie 'monitoring video' jest obecnie stosowane:",
answers:[
"Tylko przez amatorów.",
"Powszechnie w odniesieniu do telewizji dozorowej.",
"Wyłącznie w kinach.",
"Zamiast pojęcia 'internet'."
],
correct:"Powszechnie w odniesieniu do telewizji dozorowej."
},

{
category:"CCTV",
question:"Dlaczego systemy IP stają się coraz popularniejsze?",
answers:[
"Bo kable są zawsze białe.",
"Umożliwiają łatwy zapis i eksport w standardowych formatach cyfrowych.",
"Nie wymagają prądu.",
"Działają tylko z komputerami Amiga."
],
correct:"Umożliwiają łatwy zapis i eksport w standardowych formatach cyfrowych."
},

{
category:"CCTV",
question:"W jakim celu wykonuje się powiększenie programowe (zoom cyfrowy)?",
answers:[
"Aby fizycznie przesunąć soczewkę.",
"Aby uzyskać szczegółowość obrazu z zapisanego materiału.",
"Aby zwiększyć jasność w pokoju.",
"Aby naprawić uszkodzony kabel."
],
correct:"Aby uzyskać szczegółowość obrazu z zapisanego materiału."
},

{
category:"CCTV",
question:"Oprogramowanie CCTV pozwala na konfigurację kamer:",
answers:[
"Tylko wszystkich naraz.",
"Wspólnie dla grup lub dla każdej z osobna.",
"Tylko po odłączeniu zasilania.",
"Przez telefon stacjonarny."
],
correct:"Wspólnie dla grup lub dla każdej z osobna."
},

{
category:"CCTV",
question:"Jaka jest różnica między zoomem optycznym a cyfrowym?",
answers:[
"Brak różnicy.",
"Optyczny wykorzystuje soczewki, cyfrowy to obróbka obrazu przez procesor.",
"Optyczny działa tylko w nocy.",
"Cyfrowy wymaga wymiany matrycy co miesiąc."
],
correct:"Optyczny wykorzystuje soczewki, cyfrowy to obróbka obrazu przez procesor."
},

{
category:"CCTV",
question:"Zapewnienie bezkolizyjności z innymi instalacjami to zadanie:",
answers:[
"Operatora kamer.",
"Projektanta systemu.",
"Sprzedawcy w sklepie.",
"Kuriera."
],
correct:"Projektanta systemu."
},

{
category:"CCTV",
question:"Ustalenie czasu archiwizacji (np. 14 dni) determinuje wybór:",
answers:[
"Długości kabla koncentrycznego.",
"Pojemności nośników pamięci (dysków).",
"Rozmiaru monitora.",
"Modelu zasilacza."
],
correct:"Pojemności nośników pamięci (dysków)."
},

{
category:"CCTV",
question:"Systemy CCTV są stosowane w obiektach użyteczności publicznej w celu:",
answers:[
"Ozdoby budynków.",
"Wykrywania potencjalnych zagrożeń.",
"Darmowego nadawania Wi-Fi.",
"Liczenia ptaków na dachu."
],
correct:"Wykrywania potencjalnych zagrożeń."
},

{
category:"CCTV",
question:"Przewody transmisyjne w CCTV łączą kamery z:",
answers:[
"Gniazdkiem telefonicznym.",
"Urządzeniami rejestrującymi (rejestratorami).",
"Kranem z wodą.",
"Dachem budynku."
],
correct:"Urządzeniami rejestrującymi (rejestratorami)."
},

{
category:"CCTV",
question:"Czym jest 'transmisja bezprzewodowa' w systemach monitoringu?",
answers:[
"Przesyłaniem obrazu bez użycia fizycznych kabli sygnałowych.",
"Systemem, który nie potrzebuje zasilania.",
"Nagrywaniem obrazu na kartkę papieru.",
"Łączeniem kamer za pomocą sznurka."
],
correct:"Przesyłaniem obrazu bez użycia fizycznych kabli sygnałowych."
},

{
category:"CCTV",
question:"Zasady eksportu danych określają m.in.:",
answers:[
"Cenę nagrania za minutę.",
"Czas i jakość, w jakiej można uzyskać fragment zapisu.",
"To, czy nagranie jest śmieszne.",
"Długość kabla USB."
],
correct:"Czas i jakość, w jakiej można uzyskać fragment zapisu."
},

{
category:"CCTV",
question:"Pojęcie 'telewizja użytkowa' odnosi się do:",
answers:[
"Telewizji śniadaniowej.",
"Systemu monitoringu dozorowego.",
"Programów o ogrodnictwie.",
"Systemów płatnej telewizji."
],
correct:"Systemu monitoringu dozorowego."
},

{
category:"CCTV",
question:"Urządzenia zasilające w CCTV muszą zapewniać:",
answers:[
"Napięcie zmienne 400V bezpośrednio do kamery.",
"Odpowiednie i stabilne napięcie dla wszystkich elementów systemu.",
"Ładowanie telefonów pracowników ochrony.",
"Prąd tylko w godzinach pracy sklepu."
],
correct:"Odpowiednie i stabilne napięcie dla wszystkich elementów systemu."
},

{
category:"CCTV",
question:"Obiektyw w systemie CCTV jest elementem:",
answers:[
"Wbudowanym na stałe w monitor.",
"Optycznym, skupiającym światło na przetworniku kamery.",
"Służącym do regulacji głośności.",
"Zastępującym dysk twardy."
],
correct:"Optycznym, skupiającym światło na przetworniku kamery."
},

{
category:"CCTV",
question:"Co oznacza pojęcie 'wykrycie potencjalnych zagrożeń' przez CCTV?",
answers:[
"Przewidywanie pogody.",
"Zauważenie włamania, pożaru lub napadu przez operatora.",
"Mierzenie ciśnienia atmosferycznego.",
"Sprawdzanie stanu konta bankowego."
],
correct:"Zauważenie włamania, pożaru lub napadu przez operatora."
},

{
category:"CCTV",
question:"Format .avi jest popularny, ponieważ:",
answers:[
"Jest koloru niebieskiego.",
"Jest standardowym formatem multimedialnym obsługiwanym przez wiele urządzeń.",
"Zajmuje najwięcej miejsca na dysku.",
"Wymaga posiadania anteny satelitarnej."
],
correct:"Jest standardowym formatem multimedialnym obsługiwanym przez wiele urządzeń."
},

{
category:"CCTV",
question:"Kontrola dostępu do archiwum polega na:",
answers:[
"Zamykaniu oczu podczas przeglądania.",
"Weryfikacji uprawnień osób chcących przeglądać nagrania.",
"Płaceniu za każdy obejrzany fragment.",
"Oglądaniu tylko w czapkach ochronnych."
],
correct:"Weryfikacji uprawnień osób chcących przeglądać nagrania."
},

{
category:"CCTV",
question:"Czy w systemach CCTV można rejestrować dźwięk?",
answers:[
"Nigdy nie jest to możliwe.",
"Tak, choć jest to rzadziej stosowane niż rejestracja obrazu.",
"Tylko jeśli kamera jest wykonana ze złota.",
"Tylko przy użyciu głośników telewizyjnych."
],
correct:"Tak, choć jest to rzadziej stosowane niż rejestracja obrazu."
},

{
category:"CCTV",
question:"Elementy akcesoryjne takie jak uchwyty służą do:",
answers:[
"Picia herbaty.",
"Stabilnego montażu kamer na ścianach lub sufitach.",
"Zamykania rejestratora na klucz.",
"Wzmacniania sygnału WiFi."
],
correct:"Stabilnego montażu kamer na ścianach lub sufitach."
},

{
category:"CCTV",
question:"Głównym zadaniem urządzenia rejestrującego jest:",
answers:[
"Odtwarzanie muzyki w banku.",
"Zapisywanie obrazu z wielu kamer na nośniku pamiątkowym.",
"Mierzenie temperatury otoczenia.",
"Wysyłanie sygnału alarmowego do straży pożarnej."
],
correct:"Zapisywanie obrazu z wielu kamer na nośniku pamiątkowym."
},

{
category:"CCTV",
question:"Zastosowanie pierścienia dystansowego przy montażu obiektywu typu C do kamery CS jest konieczne, ponieważ:",
answers:[
"Obiektyw typu C ma mniejszą średnicę gwintu.",
"Obiektyw typu C wymaga większej odległości od przetwornika o dokładnie 5,026 mm.",
"Obiektyw typu C musi być zasilany dodatkowym napięciem przez pierścień.",
"Mocowanie CS nie posiada własnego gwintu."
],
correct:"Obiektyw typu C wymaga większej odległości od przetwornika o dokładnie 5,026 mm."
},

{
category:"CCTV",
question:"Co się stanie z obrazem, jeśli zamontujemy obiektyw typu CS na kamerze z gniazdem typu C bez żadnych modyfikacji?",
answers:[
"Obraz będzie idealny, bo CS jest nowszym standardem.",
"Obiektyw uderzy w przetwornik lub nie będzie możliwości złapania ostrości.",
"Kamera automatycznie zmieni ogniskową na szerokokątną.",
"Obraz będzie czarno-biały niezależnie od ustawień kamery."
],
correct:"Obiektyw uderzy w przetwornik lub nie będzie możliwości złapania ostrości."
},

{
category:"CCTV",
question:"Dlaczego przy przymkniętej przysłonie głębia ostrości się zwiększa?",
answers:[
"Ponieważ matryca otrzymuje więcej informacji o kolorze.",
"Ponieważ zwężenie wiązki światła redukuje krążki rozproszenia na przetworniku.",
"Ponieważ obiektyw mechanicznie wydłuża swoją ogniskową.",
"Dzieje się tak tylko w kamerach o rozdzielczości poniżej 420 TVL."
],
correct:"Ponieważ zwężenie wiązki światła redukuje krążki rozproszenia na przetworniku."
},

{
category:"CCTV",
question:"Kamera z obiektywem o stałej ogniskowej 4mm obserwuje korytarz. Co należy zrobić, aby zwiększyć zasięg identyfikacji osób na końcu korytarza bez zmiany pozycji kamery?",
answers:[
"Zastosować obiektyw o mniejszej ogniskowej, np. 2.8mm.",
"Zastosować obiektyw o większej ogniskowej, np. 12mm.",
"Mocniej otworzyć przysłonę w obecnym obiektywie.",
"Zmienić mocowanie z CS na C."
],
correct:"Zastosować obiektyw o większej ogniskowej, np. 12mm."
},

{
category:"CCTV",
question:"Który parametr obiektywu ulega zmianie w trakcie fizycznego zoomowania w obiektywie typu Varifocal?",
answers:[
"Tylko liczba aperturowa F.",
"Odległość od centrum optycznego do punktu ogniskowania (ogniskowa).",
"Jedynie rodzaj gwintu mocującego.",
"Stała dielektryczna soczewek."
],
correct:"Odległość od centrum optycznego do punktu ogniskowania (ogniskowa)."
},

{
category:"CCTV",
question:"Jeśli obiektyw posiada liczbę aperturową F=1.0, a inny F=2.0, to ile razy więcej światła przepuszcza pierwszy z nich?",
answers:[
"Tyle samo światła.",
"Dwa razy więcej światła.",
"Cztery razy więcej światła.",
"Dziesięć razy więcej światła."
],
correct:"Cztery razy więcej światła."
},

{
category:"CCTV",
question:"Który rodzaj obiektywu będzie najbardziej problematyczny w nocy dla kamery bez oświetlacza podczerwieni?",
answers:[
"Obiektyw o niskiej liczbie F (np. F1.2).",
"Obiektyw o wysokiej liczbie F (np. F4.0 lub wyżej).",
"Obiektyw szerokokątny 2.8mm.",
"Obiektyw z mocowaniem CS."
],
correct:"Obiektyw o wysokiej liczbie F (np. F4.0 lub wyżej)."
},

{
category:"CCTV",
question:"Pojęcie 'obiektyw standardowy' w systemach CCTV jest relatywne, ponieważ:",
answers:[
"Zależy od nastroju instalatora.",
"Zależy od wielkości (przekątnej) zastosowanego przetwornika obrazu.",
"Współczesne kamery nie używają już standardowych obiektywów.",
"Każdy kraj ma inny standard kąta widzenia."
],
correct:"Zależy od wielkości (przekątnej) zastosowanego przetwornika obrazu."
},

{
category:"CCTV",
question:"W jakiej sytuacji duża głębia ostrości (sięgająca nieskończoności) może być wadą?",
answers:[
"Gdy chcemy obserwować tablice rejestracyjne z dużej odległości.",
"Gdy celowo chcemy rozmyć tło, aby skupić uwagę na obiekcie bliskim kamery.",
"Podczas pracy w całkowitej ciemności z oświetlaczem IR.",
"Gdy używamy kamery typu rybie oko."
],
correct:"Gdy celowo chcemy rozmyć tło, aby skupić uwagę na obiekcie bliskim kamery."
},

{
category:"CCTV",
question:"Co oznacza w praktyce, że obiektyw jest typu 'No-Iris'?",
answers:[
"Nie posiada soczewki skupiającej.",
"Ma otwór przysłony o stałej, niezmiennej wielkości.",
"Kamera nie może nagrywać obrazu w kolorze.",
"Obiektyw nie posiada gwintu montażowego."
],
correct:"Ma otwór przysłony o stałej, niezmiennej wielkości."
},

{
category:"CCTV",
question:"Dlaczego obiektywy z przysłoną ręczną (Manual Iris) nie powinny być stosowane na zewnątrz?",
answers:[
"Ponieważ zamarzają w ujemnych temperaturach.",
"Bo nie potrafią zareagować na nagłe zmiany natężenia światła słonecznego, co grozi oślepieniem kamery.",
"Ponieważ są wykonane z materiałów nieodpornych na deszcz.",
"Bo mają zbyt dużą ogniskową jak na warunki zewnętrzne."
],
correct:"Bo nie potrafią zareagować na nagłe zmiany natężenia światła słonecznego, co grozi oślepieniem kamery."
},

{
category:"CCTV",
question:"Jaka jest główna różnica funkcjonalna między obiektywem Varifocal a Moto-zoom?",
answers:[
"Varifocal jest cyfrowy, a Moto-zoom analogowy.",
"Varifocal wymaga ręcznej regulacji na obiektywie, a Moto-zoom sterowany jest zdalnie przez silniki.",
"Moto-zoom ma zawsze stałą przysłonę.",
"Varifocal można zamontować tylko w kamerach kopułkowych."
],
correct:"Varifocal wymaga ręcznej regulacji na obiektywie, a Moto-zoom sterowany jest zdalnie przez silniki."
},

{
category:"CCTV",
question:"Liczba transmisyjna T jest parametrem 'uczciwszym' niż liczba F, ponieważ uwzględnia:",
answers:[
"Cenę rynkową obiektywu.",
"Rzeczywiste straty światła wynikające z odbić i absorpcji przez szkło soczewek.",
"Liczbę megapikseli matrycy.",
"Rodzaj kompresji wideo."
],
correct:"Rzeczywiste straty światła wynikające z odbić i absorpcji przez szkło soczewek."
},

{
category:"CCTV",
question:"Jeżeli na obiektywie widnieje napis '1/3 inch', oznacza to, że:",
answers:[
"Obiektyw waży 1/3 funta.",
"Został zaprojektowany do współpracy z przetwornikami o przekątnej do 1/3 cala włącznie.",
"Można go używać tylko przez 1/3 doby.",
"Posiada 3 warstwy powłok antyrefleksyjnych."
],
correct:"Został zaprojektowany do współpracy z przetwornikami o przekątnej do 1/3 cala włącznie."
},

{
category:"CCTV",
question:"Czy obiektyw przeznaczony do przetwornika 1/4 cala będzie poprawnie działał z kamerą o przetworniku 1/2 cala?",
answers:[
"Tak, obraz będzie bardzo jasny.",
"Nie, wystąpi silna winieta (czarne rogi lub koło na środku ekranu).",
"Tak, ale tylko przy ustawieniu maksymalnej ogniskowej.",
"Tak, o ile zastosujemy pierścień dystansowy C/CS."
],
correct:"Nie, wystąpi silna winieta (czarne rogi lub koło na środku ekranu)."
},

{
category:"CCTV",
question:"W obiektywach z automatyczną przysłoną (Auto-Iris), sygnał sterujący otwarciem otworu pochodzi zazwyczaj z:",
answers:[
"Zasilacza buforowego.",
"Układów elektronicznych kamery analizujących poziom oświetlenia.",
"Ręcznego przełącznika na obudowie.",
"Czujnika dymu połączonego z systemem."
],
correct:"Układów elektronicznych kamery analizujących poziom oświetlenia."
},

{
category:"CCTV",
question:"Który z parametrów obiektywu bezpośrednio determinuje 'perspektywę' i stopień powiększenia obrazu?",
answers:[
"Liczba T.",
"Typ mocowania CS.",
"Ogniskowa.",
"Rodzaj gwintu filtra."
],
correct:"Ogniskowa."
},

{
category:"CCTV",
question:"Przy identycznej ogniskowej (np. 4mm), który obiektyw będzie jaśniejszy?",
answers:[
"Ten o większej średnicy soczewek (mniejsza liczba F).",
"Ten o mniejszej średnicy soczewek (większa liczba F).",
"Jasność zależy tylko od typu kabla zasilającego.",
"Jasność jest stała dla danej ogniskowej."
],
correct:"Ten o większej średnicy soczewek (mniejsza liczba F)."
},

{
category:"CCTV",
question:"Czym grozi zbyt mocne przymknięcie przysłony w słoneczny dzień w tanich obiektywach?",
answers:[
"Nagłym wzrostem temperatury matrycy.",
"Pogorszeniem ostrości ze względu na zjawisko dyfrakcji światła.",
"Mechanicznym zablokowaniem silnika zoomu.",
"Kamera zacznie nagrywać dźwięk z zakłóceniami."
],
correct:"Pogorszeniem ostrości ze względu na zjawisko dyfrakcji światła."
},

{
category:"CCTV",
question:"Obiektyw szerokokątny charakteryzuje się dużą głębią ostrości. Oznacza to, że:",
answers:[
"Łatwo jest ustawić ostrość na wiele planów jednocześnie.",
"Obraz jest ostry tylko w jednym, wybranym punkcie.",
"Kamera widzi tylko obiekty znajdujące się bardzo blisko.",
"Obiektyw nie posiada soczewki ostrości."
],
correct:"Łatwo jest ustawić ostrość na wiele planów jednocześnie."
},

{
category:"CCTV",
question:"Sposób mocowania CS stał się standardem w CCTV, ponieważ:",
answers:[
"Pozwala na stosowanie obiektywów mniejszych i tańszych niż standard C.",
"Umożliwia przesyłanie sygnału audio przez obiektyw.",
"Jest jedynym mocowaniem odpornym na wandalizm.",
"Wymaga użycia klucza dynamometrycznego do montażu."
],
correct:"Pozwala na stosowanie obiektywów mniejszych i tańszych niż standard C."
},

{
category:"CCTV",
question:"Jakie zjawisko wykorzystują obiektywy specjalne 'Day/Night' (korygowane w podczerwieni)?",
answers:[
"Zmianę koloru obudowy w zależności od temperatury.",
"Kompensację przesunięcia punktu skupienia światła widzialnego i podczerwonego na matrycy.",
"Automatyczne czyszczenie soczewki z pary wodnej.",
"Wzmacnianie sygnału WiFi w nocy."
],
correct:"Kompensację przesunięcia punktu skupienia światła widzialnego i podczerwonego na matrycy."
},

{
category:"CCTV",
question:"Podczas doboru obiektywu do obserwacji twarzy w wąskim przejściu (np. bramka), priorytetem będzie:",
answers:[
"Maksymalnie szeroki kąt widzenia.",
"Odpowiednio długa ogniskowa, aby twarz zajmowała dużą część kadru.",
"Zastosowanie obiektywu No-Iris.",
"Mocowanie typu C zamiast CS."
],
correct:"Odpowiednio długa ogniskowa, aby twarz zajmowała dużą część kadru."
},

{
category:"CCTV",
question:"Co oznacza parametr 'minimum object distance' (MOD) w specyfikacji obiektywu?",
answers:[
"Minimalną wagę przedmiotu, który wykryje kamera.",
"Najmniejszą odległość od obiektywu, przy której można uzyskać ostry obraz.",
"Maksymalny zasięg oświetlacza IR.",
"Prędkość poruszającego się obiektu."
],
correct:"Najmniejszą odległość od obiektywu, przy której można uzyskać ostry obraz."
},

{
category:"CCTV",
question:"Obiektyw o ogniskowej 5-50mm posiada 10-krotny zoom. Jest to zoom:",
answers:[
"Cyfrowy.",
"Optyczny.",
"Hybrydowy.",
"Wirtualny."
],
correct:"Optyczny."
},

{
category:"CCTV",
question:"Dlaczego w kamerach megapikselowych wymagane są dedykowane obiektywy o wysokiej rozdzielczości?",
answers:[
"Zwykłe obiektywy są zbyt ciemne.",
"Zwykłe obiektywy nie są w stanie rzucić na matrycę obrazu o wystarczającej gęstości szczegółów (brak rozdzielczości optycznej).",
"Obiektywy megapikselowe mają inny gwint CS.",
"Tylko takie obiektywy współpracują z kompresją H.265."
],
correct:"Zwykłe obiektywy nie są w stanie rzucić na matrycę obrazu o wystarczającej gęstości szczegółów (brak rozdzielczości optycznej)."
},

{
category:"CCTV",
question:"Przesuwanie soczewki względem matrycy (regulacja back-focus) w kamerach stacjonarnych służy do:",
answers:[
"Zmiany koloru obrazu.",
"Precyzyjnego ustawienia płaszczyzny ostrości dla konkretnego obiektywu.",
"Zasilania oświetlacza podczerwieni.",
"Resetowania adresu IP kamery."
],
correct:"Precyzyjnego ustawienia płaszczyzny ostrości dla konkretnego obiektywu."
},

{
category:"CCTV",
question:"W obiektywach Auto-Iris typu DC, układ sterujący przysłoną znajduje się:",
answers:[
"Wewnątrz obiektywu.",
"Wewnątrz kamery (obiektyw posiada tylko cewkę napędową).",
"W rejestratorze NVR.",
"W chmurze producenta."
],
correct:"Wewnątrz kamery (obiektyw posiada tylko cewkę napędową)."
},

{
category:"CCTV",
question:"Czym grozi niedokładne oczyszczenie soczewki obiektywu przed montażem?",
answers:[
"Spaleniem bezpiecznika w kamerze.",
"Powstaniem refleksów i znacznym spadkiem kontrastu obrazu, zwłaszcza pod światło.",
"Całkowitym brakiem sygnału wideo.",
"Automatycznym przełączeniem kamery w tryb czarno-biały."
],
correct:"Powstaniem refleksów i znacznym spadkiem kontrastu obrazu, zwłaszcza pod światło."
},

{
category:"CCTV",
question:"Obiektyw standardowy dla przetwornika 1/3 cala ma ogniskową około:",
answers:[
"2.8 mm.",
"6.0 mm.",
"12.0 mm.",
"50.0 mm."
],
correct:"6.0 mm."
},

{
category:"CCTV",
question:"Czy liczba aperturowa F wpływa na głębię ostrości?",
answers:[
"Nie, wpływa tylko na jasność.",
"Tak, mniejsza liczba F (większy otwór) oznacza mniejszą głębię ostrości.",
"Tak, mniejsza liczba F oznacza większą głębię ostrości.",
"Wpływa tylko w obiektywach stałoogniskowych."
],
correct:"Tak, mniejsza liczba F (większy otwór) oznacza mniejszą głębię ostrości."
},

{
category:"CCTV",
question:"Złącze obiektywu Auto-Iris zazwyczaj posiada:",
answers:[
"2 piny.",
"4 piny.",
"21 pinów.",
"Wtyczkę USB-C."
],
correct:"4 piny."
},

{
category:"CCTV",
question:"W obiektywach typu Varifocal, po każdej zmianie ogniskowej (zoomu) należy:",
answers:[
"Wymienić zasilacz kamery.",
"Ponownie ustawić ostrość (Focus).",
"Zmienić adres MAC.",
"Poczekać 24 godziny na adaptację soczewek."
],
correct:"Ponownie ustawić ostrość (Focus)."
},

{
category:"CCTV",
question:"Co oznacza termin 'pływanie ostrości' w nocy w kamerach bez obiektywów IR-corrected?",
answers:[
"Kamera fizycznie porusza się na uchwycie.",
"Zmiana długości fali światła na podczerwień powoduje przesunięcie punktu skupienia i obraz staje się nieostry.",
"Ryby w obiektywie zakłócają obraz.",
"Ostrość zależy od wilgotności powietrza."
],
correct:"Zmiana długości fali światła na podczerwień powoduje przesunięcie punktu skupienia i obraz staje się nieostry."
},

{
category:"CCTV",
question:"Obiektyw o ogniskowej 2.8mm na przetworniku 1/3 cala daje kąt widzenia około:",
answers:[
"30 stopni.",
"90-100 stopni.",
"180 stopni.",
"5 stopni."
],
correct:"90-100 stopni."
},

{
category:"CCTV",
question:"Dlaczego do obserwacji pieniędzy w kasie bankowej wybierzemy obiektyw wąskokątny?",
answers:[
"Bo jest tańszy w eksploatacji.",
"Aby uzyskać dużą skalę odwzorowania detali przy zachowaniu bezpiecznej odległości kamery.",
"Ponieważ złodzieje nie widzą obiektywów wąskokątnych.",
"Aby kamera nie nagrywała klientów stojących obok."
],
correct:"Aby uzyskać dużą skalę odwzorowania detali przy zachowaniu bezpiecznej odległości kamery."
},

{
category:"CCTV",
question:"Średnica gwintu w mocowaniach C oraz CS wynosi:",
answers:[
"1 cal.",
"1/2 cala.",
"10 mm.",
"Jest różna dla obu typów."
],
correct:"1 cal."
},

{
category:"CCTV",
question:"Funkcja 'P-Iris' (Precise Iris) w nowoczesnych obiektywach pozwala na:",
answers:[
"Nagrywanie w pełnym słońcu bez matrycy.",
"Bardzo precyzyjne sterowanie otwarciem przysłony przez silnik krokowy dla optymalnej ostrości.",
"Manualne ustawianie koloru tła.",
"Zwiększenie rozdzielczości z VGA do 4K."
],
correct:"Bardzo precyzyjne sterowanie otwarciem przysłony przez silnik krokowy dla optymalnej ostrości."
},

{
category:"CCTV",
question:"Co się stanie z głębią ostrości, gdy zmienimy kamerę na taką z większym przetwornikiem, zachowując ten sam kąt widzenia (skracając ogniskową)?",
answers:[
"Głębia ostrości zmaleje.",
"Głębia ostrości zwiększy się.",
"Głębia ostrości pozostanie identyczna.",
"Kamera przestanie działać."
],
correct:"Głębia ostrości zwiększy się."
},

{
category:"CCTV",
question:"Materiał soczewek ED (Extra-low Dispersion) w obiektywach wysokiej klasy służy do:",
answers:[
"Zmniejszenia wagi obiektywu.",
"Redukcji aberracji chromatycznej (tęczowych obwódek wokół jasnych obiektów).",
"Zwiększenia odporności na stłuczenie.",
"Odprowadzania ciepła z procesora."
],
correct:"Redukcji aberracji chromatycznej (tęczowych obwódek wokół jasnych obiektów)."
},

{
category:"CCTV",
question:"Podstawowa wada obiektywów typu 'Rybie oko' (Fisheye) to:",
answers:[
"Bardzo mała jasność.",
"Silne zniekształcenia geometryczne (beczkowate).",
"Brak możliwości pracy w dzień.",
"Konieczność stosowania dwóch matryc."
],
correct:"Silne zniekształcenia geometryczne (beczkowate)."
},

{
category:"CCTV",
question:"W obiektywach Auto-Iris typu Video, układ sterujący przysłoną znajduje się:",
answers:[
"Wewnątrz kamery.",
"Wewnątrz obiektywu.",
"Wewnątrz monitora.",
"Nie istnieje taki typ obiektywu."
],
correct:"Wewnątrz obiektywu."
},

{
category:"CCTV",
question:"Jeżeli obraz w nocy przy użyciu oświetlacza IR jest białą plamą na środku, przyczyną może być:",
answers:[
"Zbyt wysokie napięcie 230V.",
"Brak korekcji IR w obiektywie.",
"Efekt odbicia światła IR od bliskich przeszkód (np. daszka kamery) bezpośrednio do obiektywu.",
"Zbyt mały dysk twardy."
],
correct:"Efekt odbicia światła IR od bliskich przeszkód (np. daszka kamery) bezpośrednio do obiektywu."
},

{
category:"CCTV",
question:"Kąt widzenia kamery zmienia się w sposób nieliniowy względem ogniskowej. Oznacza to, że:",
answers:[
"Każdy milimetr ogniskowej zmienia kąt tak samo.",
"Zmiana z 2.8 na 4mm daje większą różnicę w kącie niż zmiana z 50 na 51.2mm.",
"Tylko obiektywy szklane mają kąt widzenia.",
"Kąt widzenia zależy od ceny obiektywu."
],
correct:"Zmiana z 2.8 na 4mm daje większą różnicę w kącie niż zmiana z 50 na 51.2mm."
},

{
category:"CCTV",
question:"Dlaczego w systemach CCTV unika się obiektywów z tworzyw sztucznych w profesjonalnych zastosowaniach?",
answers:[
"Bo są zbyt ciężkie.",
"Ze względu na gorszą transmisję światła i niską stabilność termiczną (zmiana ostrości pod wpływem temperatury).",
"Ponieważ plastik przewodzi prąd.",
"Bo nie można ich pomalować na biało."
],
correct:"Ze względu na gorszą transmisję światła i niską stabilność termiczną (zmiana ostrości pod wpływem temperatury)."
},

{
category:"CCTV",
question:"Obiektyw 'tele' to potoczna nazwa obiektywu:",
answers:[
"Szerokokątnego.",
"Wąskokątnego o długiej ogniskowej.",
"Z wbudowanym głośnikiem.",
"Podłączanego bezpośrednio do linii telefonicznej."
],
correct:"Wąskokątnego o długiej ogniskowej."
},

{
category:"CCTV",
question:"Jaką rolę pełni powłoka antyrefleksyjna na soczewkach obiektywu?",
answers:[
"Zwiększa odporność na zarysowania diamentem.",
"Zwiększa ilość światła przechodzącego przez soczewkę i eliminuje duszki (bliki) na obrazie.",
"Służy jako izolacja elektryczna soczewek.",
"Zmienia światło podczerwone na fioletowe."
],
correct:"Zwiększa ilość światła przechodzącego przez soczewkę i eliminuje duszki (bliki) na obrazie."
},

{
category:"CCTV",
question:"Czy obiektyw o stałej ogniskowej może mieć automatyczną przysłonę?",
answers:[
"Nie, przysłona automatyczna wymaga zoomu.",
"Tak, przysłona i ogniskowa to dwa niezależne parametry.",
"Tylko jeśli jest to obiektyw typu C.",
"Tak, ale tylko w kamerach 4K."
],
correct:"Tak, przysłona i ogniskowa to dwa niezależne parametry."
},

{
category:"CCTV",
question:"Podstawowy parametr określający przydatność obiektywu do pracy w całkowitej ciemności z matrycą o niskiej czułości to:",
answers:[
"Długość obudowy.",
"Liczba aperturowa F (im niższa, tym lepiej).",
"Rodzaj gwintu montażowego.",
"Kraj produkcji."
],
correct:"Liczba aperturowa F (im niższa, tym lepiej)."
},

{
category:"CCTV",
question:"Ustawienie ostrości 'na nieskończoność' w praktyce monitoringu oznacza ostrość na obiekty oddalone o więcej niż:",
answers:[
"1 metr.",
"Kilka-kilkanaście metrów (zależnie od obiektywu).",
"Dokładnie 1 kilometr.",
"Dystans do najbliższej gwiazdy."
],
correct:"Kilka-kilkanaście metrów (zależnie od obiektywu)."
},

{
category:"CCTV",
question:"Ustawienie ostrości 'na nieskończoność' w praktyce monitoringu oznacza ostrość na obiekty oddalone o więcej niż:",
answers:[
"20 metrów.",
"Kilka-kilkanaście metrów (zależnie od obiektywu).",
"Dokładnie 0,5 kilometra.",
"Dystans do najbliższej białej plamy ."
],
correct:"Kilka-kilkanaście metrów (zależnie od obiektywu)."
},


{
category:"CCTV",
question:"Jaka jest teoretyczna rozdzielczość pozioma obiektywu megapikselowego dla matrycy Full HD (1920x1080), wyrażona w liniach telewizyjnych (TVL), przyjmując współczynnik Kell'a 0.7? (Wzór: TVL = Rozdzielczość pionowa * 0.7).",
answers:[
"700 TVL.",
"756 TVL.",
"1080 TVL.",
"1344 TVL."
],
correct:"756 TVL."
},

{
category:"CCTV",
question:"Ile kamer IP o strumieniu 6 Mbps każda można bezpiecznie podłączyć do switcha z portem uplink 100 Mbps, zakładając 20% marginesu bezpieczeństwa?",
answers:[
"10 kamer.",
"13 kamer.",
"16 kamer.",
"20 kamer."
],
correct:"13 kamer."
},

{
category:"CCTV",
question:"Jaki będzie spadek napięcia na 50-metrowym kablu UTP (rezystancja 0.18 Ohm/m) przy zasilaniu kamery 12V pobierającej 0.5A? (Wzór: U = I * R * 2, bo dwie żyły).",
answers:[
"1.8 V.",
"4.5 V.",
"9 V.",
"18 V."
],
correct:"9 V."
},

{
category:"CCTV",
question:"W systemie PoE 802.3at (PoE+), jaką maksymalną moc może pobrać kamera, uwzględniając straty na 100m kabla?",
answers:[
"12.95 W.",
"25.5 W.",
"30 W.",
"60 W."
],
correct:"25.5 W."
},

{
category:"CCTV",
question:"Który parametr protokołu TCP/IP odpowiada za to, że pakiety wideo z kamer nie 'mieszają się' z pakietami z innego rejestratora w tej samej sieci?",
answers:[
"Brama domyślna.",
"Maska podsieci.",
"Adres MAC.",
"Numer portu (np. 8000 lub 554)."
],
correct:"Numer portu (np. 8000 lub 554)."
},

{
category:"CCTV",
question:"Oblicz jasność obiektywu (liczbę F), jeśli średnica soczewki wynosi 25mm, a ogniskowa 50mm. (Wzór: F = f / D).",
answers:[
"F=0.5.",
"F=1.4.",
"F=2.0.",
"F=4.0."
],
correct:"F=2.0."
},

{
category:"CCTV",
question:"Jeżeli kamera posiada matrycę o czułości 0.01 lux przy F1.2, to jaka będzie jej przybliżona czułość po zmianie obiektywu na F2.4? (Uwaga: dwukrotny wzrost liczby F to czterokrotny spadek światła).",
answers:[
"0.005 lux.",
"0.02 lux.",
"0.04 lux.",
"0.08 lux."
],
correct:"0.04 lux."
},

{
category:"CCTV",
question:"Który typ kompresji wideo wykorzystuje technikę 'klatek kluczowych' (I-frame) oraz 'klatek różnicowych' (P-frame)?",
answers:[
"MJPEG.",
"Wavelet.",
"H.264 / H.265.",
"RAW."
],
correct:"H.264 / H.265."
},

{
category:"CCTV",
question:"Oblicz wymaganą szerokość pasma dla 8 kamer 4K, gdzie każda generuje 12 Mbps, zakładając, że protokół sieciowy narzuca 10% narzutu (overhead).",
answers:[
"96 Mbps.",
"105.6 Mbps.",
"112 Mbps.",
"128 Mbps."
],
correct:"105.6 Mbps."
},

{
category:"CCTV",
question:"W systemie analogowym HD-CVI, sygnał sterujący PTZ (tzw. Control over Coax) przesyłany jest:",
answers:[
"Osobną parą przewodów RS-485.",
"W paśmie częstotliwości radiowych FM.",
"Wewnątrz sygnału wizyjnego w czasie wygaszania pionowego.",
"Przez sieć Wi-Fi."
],
correct:"Wewnątrz sygnału wizyjnego w czasie wygaszania pionowego."
},

{
category:"CCTV",
question:"Co oznacza parametr S/N (Signal to Noise Ratio) o wartości 50 dB w kamerze?",
answers:[
"Że kamera jest bardzo głośna podczas obrotu.",
"Że sygnał obrazu jest 100 000 razy silniejszy od szumu.",
"Że kamera może pracować w temperaturze 50 stopni.",
"Że obraz jest czysty i wolny od 'śnieżenia'."
],
correct:"Że obraz jest czysty i wolny od 'śnieżenia'."
},

{
category:"CCTV",
question:"Ile adresów IP jest dostępnych w sieci o masce 255.255.255.240 dla kamer i rejestratora?",
answers:[
"14.",
"16.",
"30.",
"254."
],
correct:"14."
},

{
category:"CCTV",
question:"Standard ONVIF Profil S jest dedykowany dla:",
answers:[
"Przesyłu strumieniowego wideo i konfiguracji IP.",
"Sterowania drzwiami w systemach KD.",
"Nagrywania na kasetach VHS.",
"Wyłącznie kamer termowizyjnych."
],
correct:"Przesyłu strumieniowego wideo i konfiguracji IP."
},

{
category:"CCTV",
question:"Która technologia matryc posiada mniejszy 'rolling shutter effect' (zniekształcenie przy szybkim ruchu)?",
answers:[
"CMOS z Global Shutter.",
"Standardowy CMOS.",
"CCD z przeplotem.",
"Tylko kamery analogowe."
],
correct:"CMOS z Global Shutter."
},

{
category:"CCTV",
question:"Jeżeli rejestrator posiada przepustowość przychodzącą (Incoming Bandwidth) 80 Mbps, to czy obsłuży 10 kamer 5 Mpx o bitrate 10 Mbps każda?",
answers:[
"Tak, bez problemu.",
"Nie, zabraknie 20 Mbps pasma.",
"Tak, ale tylko w czerni i bieli.",
"Tak, jeśli zmienimy kable na kat. 6."
],
correct:"Nie, zabraknie 20 Mbps pasma."
},

{
category:"CCTV",
question:"Parametr 'Gamma' w ustawieniach kamery odpowiada za:",
answers:[
"Zasięg podczerwieni.",
"Nieliniową korekcję jasności obrazu dla lepszego odwzorowania szarości.",
"Prędkość zapisu na dysku.",
"Szyfrowanie połączenia."
],
correct:"Nieliniową korekcję jasności obrazu dla lepszego odwzorowania szarości."
},

{
category:"CCTV",
question:"W systemie PoE, napięcie podawane przez switch (PSE) wynosi zazwyczaj:",
answers:[
"12 V.",
"24 V.",
"48-54 V.",
"230 V."
],
correct:"48-54 V."
},

{
category:"CCTV",
question:"Ile klatek na sekundę (fps) musi rejestrować kamera, aby płynnie odtworzyć ruch pojazdu jadącego 100 km/h, jeśli dopuszczamy przesunięcie o 10cm na klatkę?",
answers:[
"25 fps.",
"50 fps.",
"278 fps.",
"100 fps."
],
correct:"278 fps."
},

{
category:"CCTV",
question:"Funkcja HLC (High Light Compensation) w kamerach służy do:",
answers:[
"Wzmacniania światła gwiazd.",
"Maskowania silnych źródeł światła (np. reflektorów aut), by odczytać tablice.",
"Zwiększenia kontrastu w mgliste dni.",
"Zasilania grzałki w obudowie."
],
correct:"Maskowania silnych źródeł światła (np. reflektorów aut), by odczytać tablice."
},

{
category:"CCTV",
question:"Co oznacza termin 'Multicast' w sieciach CCTV IP?",
answers:[
"Zasilanie wielu kamer jednym kablem.",
"Wysyłanie jednego strumienia wideo do wielu odbiorców jednocześnie bez powielania ruchu.",
"Nagrywanie na wielu dyskach jednocześnie.",
"Rodzaj wtyku BNC."
],
correct:"Wysyłanie jednego strumienia wideo do wielu odbiorców jednocześnie bez powielania ruchu."
},

{
category:"CCTV",
question:"Jaka jest rezystancja falowa typowego kabla koncentrycznego RG-59 stosowanego w analogowym CCTV?",
answers:[
"50 Ohm.",
"75 Ohm.",
"100 Ohm.",
"120 Ohm."
],
correct:"75 Ohm."
},

{
category:"CCTV",
question:"Oblicz głębię ostrości (uproszczoną), jeśli odległość hiperfokalna wynosi 10m. Gdzie zaczyna się obszar ostry przy ustawieniu na nieskończoność?",
answers:[
"Od 0 m.",
"Od 5 m.",
"Od 10 m.",
"Od 20 m."
],
correct:"Od 5 m."
},

{
category:"CCTV",
question:"Standard kompresji H.265+ (Smart Codec) oszczędza pasmo głównie poprzez:",
answers:[
"Wyłączenie kolorów.",
"Ekstremalne ograniczanie bitrate w obszarach statycznych obrazu.",
"Nagrywanie tylko co drugiej klatki.",
"Zmniejszenie rozdzielczości do VGA."
],
correct:"Ekstremalne ograniczanie bitrate w obszarach statycznych obrazu."
},

{
category:"CCTV",
question:"Przewód UTP kat. 5e posiada cztery pary żył. W standardzie PoE Mode B (Passive), zasilanie przesyłane jest parami:",
answers:[
"1-2 i 3-6.",
"4-5 i 7-8.",
"Wszystkimi jednocześnie.",
"Tylko parą 1-2."
],
correct:"4-5 i 7-8."
},

{
category:"CCTV",
question:"Co to jest 'GOP' (Group of Pictures) w ustawieniach strumienia kamery?",
answers:[
"Grupa osób na monitoringu.",
"Odległość między klatkami typu I (kluczowymi).",
"Marka dysku twardego.",
"Model kamery obrotowej."
],
correct:"Odległość między klatkami typu I (kluczowymi)."
},

{
category:"CCTV",
question:"Jeśli kamera 2 Mpx ma proporcje 16:9, to jej rozdzielczość w pikselach wynosi:",
answers:[
"1280 x 720.",
"1600 x 1200.",
"1920 x 1080.",
"2048 x 1536."
],
correct:"1920 x 1080."
},

{
category:"CCTV",
question:"Który protokół transportowy jest lepszy dla podglądu 'na żywo' (mniejsze opóźnienie), ale dopuszcza zgubienie klatek?",
answers:[
"TCP.",
"UDP.",
"HTTP.",
"FTP."
],
correct:"UDP."
},

{
category:"CCTV",
question:"Zjawisko aberracji chromatycznej w obiektywie objawia się:",
answers:[
"Zamazaniem obrazu w nocy.",
"Kolorowymi obwódkami wokół kontrastowych krawędzi.",
"Brakem możliwości ustawienia ostrości.",
"Ciemnymi rogami obrazu."
],
correct:"Kolorowymi obwódkami wokół kontrastowych krawędzi."
},

{
category:"CCTV",
question:"Do czego służy funkcja 'Defog' w kamerach?",
answers:[
"Do rozmrażania obiektywu.",
"Do cyfrowej poprawy kontrastu w warunkach mgły lub dymu.",
"Do automatycznego wycierania szybki.",
"Do chłodzenia elektroniki."
],
correct:"Do cyfrowej poprawy kontrastu w warunkach mgły lub dymu."
},

{
category:"CCTV",
question:"Przy zasilaniu PoE na odległość 200m (tryb Extended), prędkość transmisji zazwyczaj spada do:",
answers:[
"1 Gbps.",
"100 Mbps.",
"10 Mbps.",
"1 Mbps."
],
correct:"10 Mbps."
},

{
category:"CCTV",
question:"W systemach IP, protokół RTSP służy do:",
answers:[
"Zasilania kamer.",
"Nawiązywania i sterowania strumieniem multimedialnym.",
"Szyfrowania dysków twardych.",
"Formatowania kart SD."
],
correct:"Nawiązywania i sterowania strumieniem multimedialnym."
},

{
category:"CCTV",
question:"Ogniskowa 50mm na matrycy 1/3' odpowiada kątowi widzenia rzędu:",
answers:[
"5 stopni (Wąski kąt - Tele).",
"45 stopni.",
"90 stopni.",
"180 stopni."
],
correct:"5 stopni (Wąski kąt - Tele)."
},

{
category:"CCTV",
question:"Ile bitów ma adres fizyczny MAC karty sieciowej w kamerze IP?",
answers:[
"24 bity.",
"32 bity.",
"48 bitów.",
"128 bitów."
],
correct:"48 bitów."
},

{
category:"CCTV",
question:"Standard kompresji H.264 High Profile w porównaniu do Baseline Profile oferuje:",
answers:[
"Mniejszą kompresję.",
"Lepszą jakość obrazu przy tym samym bitrate dzięki zaawansowanym algorytmom.",
"Wsparcie dla dźwięku analogowego.",
"Działanie bez procesora DSP."
],
correct:"Lepszą jakość obrazu przy tym samym bitrate dzięki zaawansowanym algorytmom."
},

{
category:"CCTV",
question:"Który element obiektywu odpowiada za niwelowanie różnicy ogniskowania światła widzialnego i podczerwonego?",
answers:[
"Soczewki asferyczne.",
"Powłoki IR-Corrected.",
"Silnik moto-zoom.",
"Mechaniczna przysłona."
],
correct:"Powłoki IR-Corrected."
},

{
category:"CCTV",
question:"Jaka jest maksymalna liczba ramek Ethernet na sekundę przy pełnym obciążeniu portu 100 Mbps (ramka 1518 bajtów)?",
answers:[
"Około 1000.",
"Około 8127.",
"Około 15000.",
"Około 100000."
],
correct:"Około 8127."
},

{
category:"CCTV",
question:"Funkcja 'True WDR' (sprzętowy) realizowana jest poprzez:",
answers:[
"Cyfrowe rozjaśnianie cieni.",
"Wielokrotną ekspozycję tej samej klatki z różnymi czasami migawki.",
"Zastosowanie mocniejszych diod IR.",
"Zmianę obiektywu na jaśniejszy."
],
correct:"Wielokrotną ekspozycję tej samej klatki z różnymi czasami migawki."
},

{
category:"CCTV",
question:"Oblicz zapotrzebowanie na prąd dla 16 kamer PoE (każda 12W) i rejestratora (50W), aby dobrać UPS.",
answers:[
"192 W.",
"242 W.",
"350 W.",
"500 W."
],
correct:"242 W."
},

{
category:"CCTV",
question:"Protokół HTTPS w kamerach IP zapewnia:",
answers:[
"Szybszy podgląd obrazu.",
"Szyfrowanie transmisji danych (logowanie, obraz).",
"Automatyczne ustawianie daty.",
"Możliwość nagrywania dźwięku."
],
correct:"Szyfrowanie transmisji danych (logowanie, obraz)."
},

{
category:"CCTV",
question:"Który z parametrów matrycy bezpośrednio wpływa na poziom szumów w nocy?",
answers:[
"Wielkość pojedynczego piksela (µm).",
"Całkowita liczba megapikseli.",
"Kolor obudowy matrycy.",
"Rodzaj złącza matrycy."
],
correct:"Wielkość pojedynczego piksela (µm)."
},

{
category:"CCTV",
question:"W systemie IP, adres '127.0.0.1' to:",
answers:[
"Adres pierwszej kamery.",
"Adres bramy domyślnej.",
"Adres pętli zwrotnej (localhost) urządzenia.",
"Adres serwera DNS."
],
correct:"Adres pętli zwrotnej (localhost) urządzenia."
},

{
category:"CCTV",
question:"Zjawisko 'Diffraction Limit' w kamerach wysokiej rozdzielczości powoduje, że:",
answers:[
"Przy bardzo małym otworze przysłony obraz traci ostrość mimo idealnego focusu.",
"Kamera widzi przez ściany.",
"Obraz staje się zbyt jasny.",
"Dysk twardy szybciej się zapełnia."
],
correct:"Przy bardzo małym otworze przysłony obraz traci ostrość mimo idealnego focusu."
},

{
category:"CCTV",
question:"Jakie jest główne ograniczenie standardu AHD przy przesyłaniu sygnału na 500m kablem RG-59?",
answers:[
"Całkowity brak obrazu.",
"Znaczna utrata wysokich częstotliwości (spadek rozdzielczości i kolorów).",
"Zmiana adresu IP kamery.",
"Konieczność stosowania switchy PoE."
],
correct:"Znaczna utrata wysokich częstotliwości (spadek rozdzielczości i kolorów)."
},

{
category:"CCTV",
question:"Co oznacza funkcja ROI (Region of Interest)?",
answers:[
"Nagrywanie tylko twarzy.",
"Ustawienie wyższej jakości kompresji tylko w wybranym, ważnym obszarze kadru.",
"Automatyczne powiadamianie policji.",
"Rodzaj uchwytu sufitowego."
],
correct:"Ustawienie wyższej jakości kompresji tylko w wybranym, ważnym obszarze kadru."
},

{
category:"CCTV",
question:"Standard PoE 802.3bt (Hi-PoE) pozwala na zasilanie urządzeń o mocy do:",
answers:[
"15 W.",
"30 W.",
"90 W.",
"230 W."
],
correct:"90 W."
},

{
category:"CCTV",
question:"Pojęcie 'MTU' (Maximum Transmission Unit) w sieci CCTV IP określa:",
answers:[
"Maksymalną wagę kamery.",
"Maksymalną wielkość pakietu danych przesyłanego w sieci (standardowo 1500 bajtów).",
"Liczbę kamer na jeden rejestrator.",
"Czas życia dysku twardego."
],
correct:"Maksymalną wielkość pakietu danych przesyłanego w sieci (standardowo 1500 bajtów)."
},

{
category:"CCTV",
question:"W systemach termowizyjnych parametr NETD określa:",
answers:[
"Szybkość obrotu głowicy.",
"Czułość termiczną (różnicę temperatur, jaką wykryje kamera).",
"Rozdzielczość w megapikselach.",
"Zasięg w kilometrach."
],
correct:"Czułość termiczną (różnicę temperatur, jaką wykryje kamera)."
},

{
category:"CCTV",
question:"Co się stanie w sieci IP, jeśli dwie kamery będą miały ten sam adres IP (konflikt)?",
answers:[
"Obie będą działać poprawnie.",
"Obraz z obu kamer będzie migał naprzemiennie lub połączenie zostanie zerwane.",
"Spali się switch PoE.",
"Rejestrator automatycznie zmieni im adresy."
],
correct:"Obraz z obu kamer będzie migał naprzemiennie lub połączenie zostanie zerwane."
},

{
category:"CCTV",
question:"Parametr 'Flickerless' w kamerze służy do:",
answers:[
"Przyspieszenia nagrywania.",
"Eliminacji migotania obrazu przy sztucznym oświetleniu 50/60 Hz.",
"Zmniejszenia szumów w nocy.",
"Szyfrowania strumienia wideo."
],
correct:"Eliminacji migotania obrazu przy sztucznym oświetleniu 50/60 Hz."
},

{
category:"CCTV",
question:"Technologia LPR/ANPR w kamerach specjalistycznych służy do:",
answers:[
"Nagrywania dźwięku.",
"Automatycznego rozpoznawania tablic rejestracyjnych.",
"Wykrywania dymu i ognia.",
"Liczenia pieniędzy w kasach."
],
correct:"Automatycznego rozpoznawania tablic rejestracyjnych."
},

{
category:"CCTV",
question:"Który standard bezprzewodowy 802.11 jest najbardziej stabilny dla transmisji wideo 4K na dystansie 500m?",
answers:[
"802.11b.",
"802.11g.",
"802.11ac (5 GHz) z antenami kierunkowymi.",
"Bluetooth 5.0."
],
correct:"802.11ac (5 GHz) z antenami kierunkowymi."
},

{
category:"CCTV",
question:"Co to jest 'VBR' (Variable Bit Rate)?",
answers:[
"Stała prędkość przesyłu danych.",
"Zmienna prędkość przesyłu danych zależna od dynamiki sceny.",
"Rodzaj kabla koncentrycznego.",
"Przycisk resetowania kamery."
],
correct:"Zmienna prędkość przesyłu danych zależna od dynamiki sceny."
},

{
category:"CCTV",
question:"Maksymalna szerokość pasma (Throughput) switcha 24-portowego 10/100 Mbps z 2 portami Gigabit wynosi w teorii:",
answers:[
"100 Mbps.",
"1000 Mbps.",
"4.4 Gbps (Full Duplex).",
"24 Gbps."
],
correct:"4.4 Gbps (Full Duplex)."
},

{
category:"CCTV",
question:"Funkcja 'Auto-Focus' w kamerach PTZ działa poprzez:",
answers:[
"Analizę kontrastu krawędzi na obrazie przez procesor DSP.",
"Pomiar odległości radarem laserowym.",
"Ręczne ustawianie przez operatora.",
"Ciągłe przesuwanie soczewek w przód i w tył."
],
correct:"Analizę kontrastu krawędzi na obrazie przez procesor DSP."
},

{
category:"CCTV",
question:"Adres IPv6 składa się z:",
answers:[
"32 bitów.",
"48 bitów.",
"64 bitów.",
"128 bitów."
],
correct:"128 bitów."
},

{
category:"CCTV",
question:"Zastosowanie promiennika podczerwieni o długości fali 940nm zamiast 850nm powoduje, że:",
answers:[
"Kamera widzi dalej.",
"Diody są całkowicie niewidoczne dla ludzkiego oka (brak czerwonej poświaty).",
"Obraz jest jaśniejszy.",
"Kamera pobiera więcej prądu."
],
correct:"Diody są całkowicie niewidoczne dla ludzkiego oka (brak czerwonej poświaty)."
},

{
category:"CCTV",
question:"W systemie IP, protokół IGMP jest niezbędny do sprawnego działania transmisji typu:",
answers:[
"Unicast.",
"Broadcast.",
"Multicast.",
"Anycast."
],
correct:"Multicast."
},

{
category:"CCTV",
question:"Co oznacza parametr 'Dual-VCA' w kamerach inteligentnych?",
answers:[
"Dwa wyjścia wideo.",
"Dwa mikrofony.",
"Przesyłanie danych analitycznych (metadanych) wraz ze strumieniem wideo.",
"Podwójne zasilanie."
],
correct:"Przesyłanie danych analitycznych (metadanych) wraz ze strumieniem wideo."
},

{
category:"CCTV",
question:"Jeżeli kamera 4K nagrywa w 12.5 kl/s, to ile czasu (s) trwa naświetlanie jednej klatki przy AES ustawionym na 1/50?",
answers:[
"0.02 s.",
"0.08 s.",
"0.5 s.",
"1.0 s."
],
correct:"0.02 s."
},

{
category:"CCTV",
question:"Standard RAID 1 w rejestratorze (2 dyski) zapewnia:",
answers:[
"Sumowanie pojemności dysków.",
"Lustrzaną kopię danych (bezpieczeństwo przy awarii jednego dysku).",
"Szybsze odtwarzanie nagrań.",
"Zmniejszenie bitrate kamer."
],
correct:"Lustrzaną kopię danych (bezpieczeństwo przy awarii jednego dysku)."
},

{
category:"CCTV",
question:"Funkcja 'Pre-alarm' w rejestratorze pozwala na:",
answers:[
"Włączenie syreny przed włamańem.",
"Zapisanie obrazu z kilku sekund PRZED wystąpieniem detekcji ruchu (z bufora).",
"Formatowanie dysku przed alarmem.",
"Wysłanie e-maila do właściciela."
],
correct:"Zapisanie obrazu z kilku sekund PRZED wystąpieniem detekcji ruchu (z bufora)."
},

{
category:"CCTV",
question:"Oblicz kąt widzenia obiektywu 'Rybie oko' o ogniskowej 1.2mm na matrycy 1/2.3' (średnica 7.7mm).",
answers:[
"90 stopni.",
"120 stopni.",
"180 stopni.",
"360 stopni."
],
correct:"180 stopni."
},

{
category:"CCTV",
question:"Protokół ICMP (komenda PING) w diagnostyce CCTV służy do:",
answers:[
"Podglądu obrazu.",
"Sprawdzenia dostępności kamery w sieci i opóźnień.",
"Zmiany hasła.",
"Restartu urządzenia."
],
correct:"Sprawdzenia dostępności kamery w sieci i opóźnień."
},

{
category:"CCTV",
question:"Co oznacza pojęcie 'Bit Depth' (np. 10-bit) w profesjonalnych kamerach?",
answers:[
"Głębokość obudowy.",
"Liczba poziomów jasności/koloru na kanał (płynniejsze przejścia tonalne).",
"Liczba dysków w rejestratorze.",
"Szybkość procesora."
],
correct:"Liczba poziomów jasności/koloru na kanał (płynniejsze przejścia tonalne)."
},

{
category:"CCTV",
question:"Standard kompresji H.264 wykorzystuje technikę 'Motion Estimation'. Polega ona na:",
answers:[
"Zgadywaniu, gdzie pójdzie złodziej.",
"Wyszukiwaniu przesunięć bloków obrazu między klatkami zamiast zapisywania ich od nowa.",
"Automatycznym zoomowaniu na ruch.",
"Zliczaniu osób w kadrze."
],
correct:"Wyszukiwaniu przesunięć bloków obrazu między klatkami zamiast zapisywania ich od nowa."
},

{
category:"CCTV",
question:"Wtyk DC 2.1/5.5 w kamerach służy do:",
answers:[
"Przesyłu obrazu cyfrowego.",
"Zasilania 12V DC.",
"Łączenia kaskadowego kamer.",
"Podłączenia anteny Wi-Fi."
],
correct:"Zasilania 12V DC."
},

{
category:"CCTV",
question:"Który element kamery PTZ odpowiada za przekazywanie sygnałów elektrycznych do ruchomej głowicy bez skręcania przewodów?",
answers:[
"Silnik krokowy.",
"Złącze obrotowe (Slip Ring).",
"Pasek zębaty.",
"Przetwornik piezoelektryczny."
],
correct:"Złącze obrotowe (Slip Ring)."
},

{
category:"CCTV",
question:"Jaka jest prawidłowa kolejność czynności wykonywanych podczas wymiany uszkodzonej kamery monitoringu połączonej z rejestratorem wideo?",
answers:[
"Odłączenie przewodu sygnałowego od kamery, odłączenie zasilania od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie zasilania do kamery, podłączenie przewodu sygnałowego do kamery.",
"Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery.",
"Odłączenie zasilania od kamery, zdemontowanie kamery, odłączenie przewodu sygnałowego od uszkodzonej kamery i podłączenie do nowej, zamontowanie kamery, podłączenie zasilania do kamery.",
"Odłączenie zasilania od rejestratora, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do rejestratora."
],
correct:"Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery."
},

{
category:"CCTV",
question:"Który parametr kamery określa jej zdolność widzenia przy słabym oświetleniu?",
answers:[
"Rozdzielczość.",
"Kąt widzenia kamery.",
"Typ mocowania obiektywu.",
"Czułość."
],
correct:"Czułość."
},

{
category:"CCTV",
question:"Wskaż zdanie FAŁSZYWE dotyczące parametrów kamer:",
answers:[
"Rozdzielczość kamery określa zdolność kamery do rozróżniania drobnych szczegółów wytwarzanego obrazu i wyraża się ją w calach.",
"Pobór prądu w przypadku typowych kamer przemysłowych waha się od 100mA do 250mA.",
"Kamery megapikselowe posiadają ponad 700 linii telewizyjnych.",
"Czułość kamery określa poziom światła padającego na przetwornik, który jest niezbędny do wytworzenia określonego wartości sygnału wizyjnego."
],
correct:"Rozdzielczość kamery określa zdolność kamery do rozróżniania drobnych szczegółów wytwarzanego obrazu i wyraża się ją w calach."
},

{
category:"CCTV",
question:"Ten rodzaj matrycy to układ wielu elementów światłoczułych, z których każdy rejestruje, a następnie pozwala odczytać sygnał elektryczny proporcjonalny do ilości padającego światła. Mowa o:",
answers:[
"Matrycy CCD.",
"Matrycy CMOS.",
"Przetworniku DSP.",
"Karcie xD."
],
correct:"Matrycy CCD."
},

{
category:"CCTV",
question:"Który element kamery PTZ odpowiada za przekazywanie sygnałów elektrycznych do ruchomej głowicy bez skręcania przewodów?",
answers:[
"Silnik krokowy.",
"Złącze obrotowe (Slip Ring).",
"Pasek zębaty.",
"Przetwornik piezoelektryczny."
],
correct:"Złącze obrotowe (Slip Ring)."
},

{
category:"CCTV",
question:"Jaka jest prawidłowa kolejność czynności wykonywanych podczas wymiany uszkodzonej kamery monitoringu połączonej z rejestratorem wideo?",
answers:[
"Odłączenie przewodu sygnałowego od kamery, odłączenie zasilania od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie zasilania do kamery, podłączenie przewodu sygnałowego do kamery.",
"Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery.",
"Odłączenie zasilania od kamery, zdemontowanie kamery, odłączenie przewodu sygnałowego od uszkodzonej kamery i podłączenie do nowej, zamontowanie kamery, podłączenie zasilania do kamery.",
"Odłączenie zasilania od rejestratora, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do rejestratora."
],
correct:"Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery."
},

{
category:"CCTV",
question:"Który parametr kamery określa jej zdolność widzenia przy słabym oświetleniu?",
answers:[
"Rozdzielczość.",
"Kąt widzenia kamery.",
"Typ mocowania obiektywu.",
"Czułość."
],
correct:"Czułość."
},

{
category:"CCTV",
question:"Wskaż zdanie FAŁSZYWE dotyczące parametrów kamer:",
answers:[
"Rozdzielczość kamery określa zdolność kamery do rozróżniania drobnych szczegółów wytwarzanego obrazu i wyraża się ją w calach.",
"Pobór prądu w przypadku typowych kamer przemysłowych waha się od 100mA do 250mA.",
"Kamery megapikselowe posiadają ponad 700 linii telewizyjnych.",
"Czułość kamery określa poziom światła padającego na przetwornik, który jest niezbędny do wytworzenia określonego wartości sygnału wizyjnego."
],
correct:"Rozdzielczość kamery określa zdolność kamery do rozróżniania drobnych szczegółów wytwarzanego obrazu i wyraża się ją w calach."
},

{
category:"CCTV",
question:"Ten rodzaj matrycy to układ wielu elementów światłoczułych, z których każdy rejestruje, a następnie pozwala odczytać sygnał elektryczny proporcjonalny do ilości padającego światła. Mowa o:",
answers:[
"Matrycy CCD.",
"Matrycy CMOS.",
"Przetworniku DSP.",
"Karcie xD."
],
correct:"Matrycy CCD."
},

{
category:"CCTV",
question:"Który z wymienionych parametrów jest kluczowy dla jakości obrazu w nocy lub przy ograniczonym świetle?",
answers:[
"Czułość.",
"Szybkość migawki.",
"Rodzaj obiektywu.",
"Rozdzielczość matrycy."
],
correct:"Czułość."
},

{
category:"CCTV",
question:"Głównym zadaniem złącza obrotowego (Slip Ring) w kamerach szybkoobrotowych PTZ jest:",
answers:[
"Zwiększenie prędkości obrotu głowicy.",
"Zapewnienie ciągłości sygnałów elektrycznych bez skręcania kabli podczas obrotu 360°.",
"Stabilizacja obrazu podczas ruchu kamery.",
"Mechaniczne blokowanie kamery w określonej pozycji."
],
correct:"Zapewnienie ciągłości sygnałów elektrycznych bez skręcania kabli podczas obrotu 360°."
},

{
category:"CCTV",
question:"W jakiej jednostce NIE wyraża się rozdzielczości kamery monitoringu?",
answers:[
"Piksele.",
"Linie telewizyjne (TVL).",
"Cale.",
"Megapiksele (Mpx)."
],
correct:"Cale."
},

{
category:"CCTV",
question:"Instalator wymienia uszkodzoną kamerę. Co powinien zrobić w pierwszej kolejności przed odłączeniem kabla sygnałowego?",
answers:[
"Zdemontować uchwyt kamery.",
"Odłączyć zasilanie kamery.",
"Zmienić ustawienia w rejestratorze.",
"Przeczyścić wtyk BNC."
],
correct:"Odłączyć zasilanie kamery."
},

{
category:"CCTV",
question:"Wskaż poprawną definicję matrycy CCD stosowanej w systemach wizyjnych:",
answers:[
"Procesor sygnałowy odpowiedzialny za redukcję szumów.",
"Układ elementów światłoczułych, w którym sygnał elektryczny jest odczytywany proporcjonalnie do ilości padającego światła.",
"Moduł odpowiedzialny za zapis obrazu na karcie SD.",
"Obiektyw o zmiennej ogniskowej sterowany elektronicznie."
],
correct:"Układ elementów światłoczułych, w którym sygnał elektryczny jest odczytywany proporcjonalnie do ilości padającego światła."
},

{
category:"CCTV",
question:"Podczas instalacji nowej kamery w systemie analogowym, ostatnią czynnością w procesie montażu powinno być:",
answers:[
"Podłączenie przewodu sygnałowego.",
"Podłączenie zasilania.",
"Zamontowanie obudowy kamery.",
"Ustawienie ostrości obiektywu."
],
correct:"Podłączenie zasilania."
},

{
category:"CCTV",
question:"Typowy pobór prądu przez standardową kamerę przemysłową (bez włączonego oświetlacza IR) mieści się zazwyczaj w przedziale:",
answers:[
"10mA - 50mA.",
"100mA - 250mA.",
"500mA - 1A.",
"Powyżej 1,5A."
],
correct:"100mA - 250mA."
},

{
category:"CCTV",
question:"Które stwierdzenie dotyczące kamer megapikselowych jest prawdziwe?",
answers:[
"Mogą generować obraz o rozdzielczości powyżej 700 linii telewizyjnych.",
"Zawsze wymagają zasilania 230V bezpośrednio do kamery.",
"Nie mogą pracować w nocy bez zewnętrznego halogenu.",
"Ich rozdzielczość podaje się w calach."
],
correct:"Mogą generować obraz o rozdzielczości powyżej 700 linii telewizyjnych."
},

{
category:"CCTV",
question:"Które z poniższych parametrów mają bezpośredni wpływ na jakość obrazu generowanego przez kamerę w trudnych warunkach oświetleniowych?",
answers:[
"Czułość przetwornika wyrażona w luksach (lx).",
"Rozmiar fizyczny matrycy (np. 1/2.8\").",
"Obecność i sprawność oświetlacza podczerwieni (IR).",
"Wszystkie powyższe."
],
correct:"Wszystkie powyższe."
},

{
category:"CCTV",
question:"W jakich jednostkach poprawnie określa się rozdzielczość współczesnych kamer cyfrowych lub analogowych wysokiej rozdzielczości?",
answers:[
"W calach (matryca).",
"W watach (pobór mocy).",
"W luksach (natężenie światła).",
"Żadna z powyższych."
],
correct:"Żadna z powyższych."
},

{
category:"CCTV",
question:"Złącze obrotowe (Slip Ring) w kamerach typu Speed Dome (PTZ) umożliwia:",
answers:[
"Obrót kamery o 360° bez ryzyka zerwania kabli.",
"Przesyłanie sygnałów wizyjnych i zasilania do ruchomej części kamery.",
"Ciągłe śledzenie obiektu bez konieczności powrotu głowicy do punktu zero.",
"Wszystkie powyższe."
],
correct:"Wszystkie powyższe."
},

{
category:"CCTV",
question:"Prawidłowa procedura wymiany kamery w działającym systemie monitoringu nakazuje w pierwszej kolejności:",
answers:[
"Odłączenie kabla sygnałowego BNC.",
"Zresetowanie rejestratora wideo.",
"Odkręcenie obiektywu.",
"Żadna z powyższych."
],
correct:"Żadna z powyższych."
},

{
category:"CCTV",
question:"Matryca typu CCD w porównaniu do innych przetworników światłoczułych charakteryzuje się:",
answers:[
"Przesuwaniem ładunku elektrycznego do wspólnego wzmacniacza wyjściowego.",
"Wysoką czułością i niskim poziomem szumów.",
"Rejestrowaniem sygnału proporcjonalnego do ilości padającego światła.",
"Wszystkie powyższe."
],
correct:"Wszystkie powyższe."
},

{
category:"CCTV",
question:"Który z poniższych elementów jest odpowiedzialny za mechaniczne połączenie obiektywu z korpusem kamery stacjonarnej?",
answers:[
"Typ mocowania (np. C/CS).",
"Standard DOCSIS.",
"Złącze Slip Ring.",
"Żadna z powyższych."
],
correct:"Typ mocowania (np. C/CS)."
},

{
category:"CCTV",
question:"Przyczyną braku obrazu z nowo zamontowanej kamery megapikselowej w starym systemie analogowym może być:",
answers:[
"Zbyt niska rozdzielczość monitora.",
"Błędny typ mocowania obiektywu.",
"Zastosowanie przewodu TRISET-113 zamiast żelowanego.",
"Żadna z powyższych."
],
correct:"Żadna z powyższych."
},

{
category:"CCTV",
question:"W jaki sposób zmiana ogniskowej obiektywu wpływa na głębię ostrości obrazu?",
answers:[
"Skracanie ogniskowej powoduje zmniejszenie głębi ostrości.",
"Skracanie ogniskowej powoduje zwiększenie wartości parametru głębi ostrości.",
"Wydłużanie ogniskowej sprawia, że głębia ostrości sięga nieskończoności.",
"Zmiana ogniskowej nie ma wpływu na głębię ostrości, zależy ona tylko od przysłony."
],
correct:"Skracanie ogniskowej powoduje zwiększenie wartości parametru głębi ostrości."
},

{
category:"CCTV",
question:"Instalator posiada kamerę z mocowaniem typu C oraz obiektyw z mocowaniem typu CS. Jakie działanie pozwoli na poprawne połączenie tych elementów?",
answers:[
"Należy zastosować dodatkowy pierścień adaptacyjny.",
"Należy ustawić ogniskową na wartość 12,5mm.",
"Połączenie to jest niemożliwe do zrealizowania.",
"Wszystkie powyższe są fałszywe."
],
correct:"Połączenie to jest niemożliwe do zrealizowania."
},

{
category:"CCTV",
question:"Który parametr obiektywu pozwala na najbardziej bezwzględną i rzeczywistą ocenę jego jasności, uwzględniając np. materiał soczewek?",
answers:[
"Liczba aperturowa F.",
"Ogniskowa wyrażona w milimetrach.",
"Liczba transmisyjna T.",
"Wszystkie powyższe."
],
correct:"Liczba transmisyjna T."
},

{
category:"CCTV",
question:"Zgodnie z notatką, obiektyw standardowy to taki, w którym:",
answers:[
"Wartość ogniskowej jest znacznie mniejsza od przekątnej przetwornika.",
"Wartość ogniskowej jest większa od przekątnej przetwornika.",
"Ogniskowa ma stałą wartość wynoszącą 3,6mm lub 4,0mm.",
"Żadna z powyższych."
],
correct:"Żadna z powyższych."
},

{
category:"CCTV",
question:"Wskaż zdanie PRAWDZIWE dotyczące liczby aperturowej F:",
answers:[
"Wraz ze wzrostem liczby F rośnie ilość światła padającego na przetwornik.",
"Mała wartość F oznacza, że obiektyw jest ciemniejszy.",
"Wraz ze wzrostem liczby F maleje ilość światła przechodzącego przez obiektyw.",
"Wszystkie powyższe są prawdziwe."
],
correct:"Wraz ze wzrostem liczby F maleje ilość światła przechodzącego przez obiektyw."
},

{
category:"CCTV",
question:"Jaka jest dokładna odległość obiektywu od powierzchni przetwornika dla mocowania typu C?",
answers:[
"12,5 mm.",
"17,526 mm.",
"3,6 mm lub 4,0 mm.",
"Zależy od ustawienia ogniskowej Varifocal."
],
correct:"17,526 mm."
},

{
category:"CCTV",
question:"Który rodzaj obiektywu jest dedykowany specjalnie do pracy w kamerach typu dzień/noc?",
answers:[
"Obiektyw z przysłoną ręczną.",
"Obiektyw bez przysłony (no-IRIS).",
"Obiektyw z automatyczną przysłoną Auto-IRIS.",
"Wszystkie powyższe."
],
correct:"Obiektyw z automatyczną przysłoną Auto-IRIS."
},

{
category:"CCTV",
question:"Głęboka analiza parametrów: Jeśli chcemy uzyskać duży kąt widzenia (np. do obserwacji dużych pomieszczeń), należy wybrać obiektyw o:",
answers:[
"Małej wartości ogniskowej.",
"Dużej liczbie aperturowej F.",
"Dużej wartości ogniskowej.",
"Mocowaniu typu C zamiast CS."
],
correct:"Małej wartości ogniskowej."
},

{
category:"CCTV",
question:"Gdzie w obiektywie powstaje obraz obiektu położonego w nieskończoności, określający jego ogniskową?",
answers:[
"Na powierzchni soczewki zewnętrznej.",
"W centrum optycznym obiektywu.",
"W określonej odległości od centrum optycznego obiektywu.",
"Bezpośrednio na przetworniku obrazu o rozmiarze 1/3\"."
],
correct:"W określonej odległości od centrum optycznego obiektywu."
},

{
category:"CCTV",
question:"W specyfikacji obiektywu podano dwie wartości liczby F. Co one określają?",
answers:[
"Minimalną i maksymalną długość ogniskowej (zoom).",
"Maksymalne oraz minimalne otwarcie przysłony.",
"Rozdzielczość środka i krawędzi obrazu.",
"Odległość dla mocowania C oraz CS."
],
correct:"Maksymalne oraz minimalne otwarcie przysłony."
},

{
category:"CCTV",
question:"Który zestaw wartości ogniskowych jest charakterystyczny wyłącznie dla obiektywów o stałej ogniskowej  ?",
answers:[
"3,5-8mm.",
"3,6mm, 4,0mm, 6,0mm, 12,0mm.",
"12,5mm oraz 17,526mm.",
"Wszystkie powyższe."
],
correct:"3,6mm, 4,0mm, 6,0mm, 12,0mm."
},

{
category:"CCTV",
question:"Jaką funkcję pełni automatyczna przysłona (Auto-IRIS) w kamerach montowanych na zewnątrz obiektów?",
answers:[
"Zwiększa głębię ostrości w nocy.",
"Niweluje efekt oślepienia promieniami słonecznymi.",
"Reguluje kąt widzenia w zależności od ruchu obiektu.",
"Wszystkie powyższe."
],
correct:"Niweluje efekt oślepienia promieniami słonecznymi."
},

{
category:"CCTV",
question:"W jakiej sytuacji pożądane jest uzyskanie MAŁEJ głębi ostrości?",
answers:[
"Podczas obserwacji długich korytarzy.",
"Gdy chcemy, aby obiekty leżące w nieskończoności były ostre.",
"Gdy chcemy wyodrębnić obserwowany obiekt od tła otoczenia.",
"Przy stosowaniu obiektywów typu moto-zoom na zewnątrz."
],
correct:"Gdy chcemy wyodrębnić obserwowany obiekt od tła otoczenia."
},

{
category:"CCTV",
question:"Obiektyw typu 'wąskokątny' definiujemy jako taki, w którym:",
answers:[
"Ogniskowa jest mniejsza od przekątnej przetwornika obrazu.",
"Ogniskowa jest większa od przekątnej przetwornika obrazu.",
"Zastosowano mocowanie typu C zamiast CS.",
"Jasność obiektywu (liczba F) jest mniejsza od 1.0."
],
correct:"Ogniskowa jest większa od przekątnej przetwornika obrazu."
},

{
category:"CCTV",
question:"Który parametr pozwala wyliczyć kąt widzenia kamery, jeśli znamy rozmiar przetwornika?",
answers:[
"Liczba transmisyjna T.",
"Rodzaj mocowania (C/CS).",
"Wartość ogniskowej.",
"Głębia ostrości."
],
correct:"Wartość ogniskowej."
},

{
category:"CCTV",
question:"Dla jakich obiektywów najczęściej spotykany zakres regulacji to 3,5-8mm?",
answers:[
"Obiektywów typu moto-zoom.",
"Obiektywów o stałej ogniskowej.",
"Obiektywów o zmiennej ogniskowej (Varifocal, Zoom).",
"Żadna z powyższych."
],
correct:"Obiektywów o zmiennej ogniskowej (Varifocal, Zoom)."
},

{
category:"CCTV",
question:"W którym przypadku głębia ostrości obrazu ulegnie zwiększeniu?",
answers:[
"Podczas otwierania przysłony.",
"Podczas przymykania przysłony.",
"Wraz z wydłużaniem ogniskowej obiektywu.",
"Gdy chcemy wyodrębnić obiekt z tła."
],
correct:"Podczas przymykania przysłony."
},

{
category:"CCTV",
question:"Który parametr określa element zbierający i przenoszący obraz przedmiotu na przetwornik obrazu?",
answers:[
"Ogniskowa.",
"Przysłona.",
"Obiektyw.",
"Liczba aperturowa."
],
correct:"Obiektyw."
},

{
category:"CCTV",
question:"Zastosowanie dodatkowego pierścienia dystansowego pozwala na:",
answers:[
"Montaż obiektywu typu C do kamery z mocowaniem CS.",
"Montaż obiektywu typu CS do kamery z mocowaniem C.",
"Zmianę obiektywu stałoogniskowego na Varifocal.",
"Zwiększenie jasności obiektywu o niskiej liczbie T."
],
correct:"Montaż obiektywu typu C do kamery z mocowaniem CS."
},

{
category:"CCTV",
question:"Obiektyw szerokokątny to taki, w którym wartość ogniskowej jest:",
answers:[
"Znacznie mniejsza od przekątnej przetwornika obrazu.",
"Równa odległości 17,526 mm.",
"Znacznie większa od przekątnej przetwornika obrazu.",
"Podobna do przekątnej przetwornika obrazu."
],
correct:"Znacznie mniejsza od przekątnej przetwornika obrazu."
},

{
category:"CCTV",
question:"Jak zmienia się ilość światła padającego na przetwornik wraz ze wzrostem liczby aperturowej F?",
answers:[
"Ilość światła rośnie.",
"Ilość światła maleje.",
"Ilość światła pozostaje bez zmian, zmienia się tylko ostrość.",
"Wszystkie powyższe są fałszywe."
],
correct:"Ilość światła maleje."
},

{
category:"CCTV",
question:"Który typ obiektywu umożliwia zdalną regulację ogniskowej w najbardziej wymagających instalacjach?",
answers:[
"Obiektyw Varifocal.",
"Obiektyw Zoom.",
"Obiektyw typu moto-zoom.",
"Obiektyw stałoogniskowy 12,0mm."
],
correct:"Obiektyw typu moto-zoom."
},

{
category:"CCTV",
question:"W jakich jednostkach wyrażana jest odległość, w której powstaje obraz obiektu położonego w nieskończoności?",
answers:[
"W luksach (lx).",
"W milimetrach (mm).",
"W skali T.",
"W calach (\")."
],
correct:"W milimetrach (mm)."
},

{
category:"CCTV",
question:"Obiektywy dedykowane do najprostszych konstrukcji kamer, pozbawione mechanizmu regulacji strumienia światła, to:",
answers:[
"Obiektywy Auto-IRIS.",
"Obiektywy z przysłoną ręczną.",
"Obiektywy no-IRIS.",
"Obiektywy stałoogniskowe 3,5-8mm."
],
correct:"Obiektywy no-IRIS."
},

{
category:"CCTV",
question:"W którym typie przetwornika sygnał zostaje przetworzony na postać cyfrową już na poziomie poszczególnych elementów światłoczułych?",
answers:[
"W matrycy CCD.",
"W matrycy CMOS.",
"W przetworniku DSP.",
"W każdej matrycy cyfrowej."
],
correct:"W przetworniku DSP."
},

{
category:"CCTV",
question:"Jaka jest maksymalna zalecana długość połączenia kamery z rejestratorem przy użyciu skrętki komputerowej?",
answers:[
"70 metrów.",
"100 metrów.",
"600 metrów.",
"Zależy to wyłącznie od impedancji 75 Ω."
],
correct:"70 metrów."
},

{
category:"CCTV",
question:"Który z parametrów normy szczelności IPxy odpowiada bezpośrednio za odporność mechaniczną obudowy kamery?",
answers:[
"Liczba y.",
"Liczba x.",
"Suma liczb x i y.",
"Żadna z powyższych."
],
correct:"Liczba x."
},

{
category:"CCTV",
question:"Kamery megapikselowe to urządzenia, których rozdzielczość wynosi:",
answers:[
"Dokładnie 600 linii TV.",
"Pomiędzy 420 a 480 linii TV.",
"Ponad 700 linii telewizyjnych.",
"Minimum 1024 x 768 pikseli."
],
correct:"Ponad 700 linii telewizyjnych."
},

{
category:"CCTV",
question:"Efekt rozmycia jasnych punktów (widzianych jako smuga) jest skutecznie redukowany w kamerach wyposażonych w:",
answers:[
"Matrycę CCD.",
"Przetwornik DSP.",
"Obudowę z grzałką i wentylatorem.",
"Przewód o impedancji 75 Ω."
],
correct:"Przetwornik DSP."
},

{
category:"CCTV",
question:"Jaki jest pierwszy objaw użycia zbyt długiego przewodu w przypadku kamer generujących obraz kolorowy?",
answers:[
"Całkowity brak obrazu.",
"Pojawienie się dużych szumów (śnieżenie).",
"Malejące nasycenie kolorów.",
"Zniekształcenie geometrii obrazu."
],
correct:"Malejące nasycenie kolorów."
},

{
category:"CCTV",
question:"Zgodnie z definicją rozmiaru przetwornika, która z poniższych matryc teoretycznie pozwala na uzyskanie najlepszej jakości obrazu?",
answers:[
"1/2\"",
"1/3\"",
"1/4\"",
"1/6\""
],
correct:"1/2\""
},

{
category:"CCTV",
question:"Technologia, w której każdy piksel może być odczytywany tuż przed osiągnięciem stanu nasycenia, co zapobiega prześwietleniom, to:",
answers:[
"CMOS.",
"CCD.",
"DSP.",
"DVC."
],
correct:"DSP."
},

{
category:"CCTV",
question:"Kamery tubowe to specyficzny rodzaj urządzeń, które charakteryzują się:",
answers:[
"Obudową w kształcie szklanej kopułki.",
"Ruchem na wózku w specjalnie przygotowanym tunelu.",
"Wbudowaną głowicą do ruchu w pionie i poziomie.",
"Wyłącznie pracą wewnątrz budynków."
],
correct:"Ruchem na wózku w specjalnie przygotowanym tunelu."
},

{
category:"CCTV",
question:"Który element kamery przemysłowej odpowiada za przetworzenie obrazu obiektu na sygnał elektryczny?",
answers:[
"Obiektyw.",
"Zestaw urządzeń elektronicznych do obróbki.",
"Przetwornik.",
"Generator opisu."
],
correct:"Przetwornik."
},

{
category:"CCTV",
question:"W systemach monitoringu, pod pojęciem kamery cyfrowej (DVC) rozumie się urządzenie zapisujące sygnał audiowizualny najczęściej na:",
answers:[
"Taśmie Digital Video w kasetach DV lub MiniDV.",
"Wyłącznie na dyskach twardych rejestratorów DVR.",
"Taśmach analogowych typu VHS.",
"Żadna z powyższych."
],
correct:"Taśmie Digital Video w kasetach DV lub MiniDV."
},

{
category:"CCTV",
question:"Który z wymienionych elementów jest traktowany jedynie jako pożyteczne uzupełnienie, a nie podstawa do osiągnięcia dobrej jakości obrazu?",
answers:[
"Dokładność wykonania przetwornika.",
"Jakość i prawidłowy dobór obiektywu.",
"Automatyka kamery.",
"Prawidłowe zasilanie 12V."
],
correct:"Automatyka kamery."
},

{
category:"CCTV",
question:"Zależność między zdolnością rozdzielczą kamery a ilością pikseli jej przetwornika jest określana jako:",
answers:[
"Jednoznaczna i bezpośrednia.",
"Nieuzależniona od typu matrycy.",
"Zależność nie jest jednoznaczna.",
"Wszystkie powyższe są fałszywe."
],
correct:"Zależność nie jest jednoznaczna."
},

{
category:"CCTV",
question:"Mikrosoczewki skupiające światło na elemencie światłoczułym są charakterystycznym elementem budowy:",
answers:[
"Matrycy CMOS.",
"Matrycy CCD.",
"Przetwornika DSP.",
"Obiektywu typu kopułkowego."
],
correct:"Matrycy CMOS."
},

{
category:"CCTV",
question:"Który z rozmiarów przetworników wymienionych w notatce występuje najczęściej w praktyce przemysłowej?",
answers:[
"1\" oraz 2/3\".",
"1/3\" oraz 1/4\".",
"1/2\" oraz 1/4\".",
"1/6\" oraz 1/2\"."
],
correct:"1/3\" oraz 1/4\"."
},

{
category:"CCTV",
question:"W jakich jednostkach określa się rozdzielczość kamery zarówno dla pionu, jak i dla poziomu?",
answers:[
"W pikselach (np. 640x480).",
"W liniach telewizyjnych (TVL).",
"W calach (\").",
"W luksach (lx)."
],
correct:"W liniach telewizyjnych (TVL)."
},

{
category:"CCTV",
question:"Zdalne sterowanie przez złącze RS-232, datownik oraz generator opisu to funkcje pojawiające się przy zastosowaniu:",
answers:[
"Tradycyjnych matryc CCD.",
"Przetworników DSP.",
"Kamer stacjonarnych z grzałką.",
"Obiektywów o stałej ogniskowej."
],
correct:"Przetworników DSP."
},

{
category:"CCTV",
question:"Kamera o rozdzielczości równej 300 linii TV zostanie zakwalifikowana do grupy kamer:",
answers:[
"O małej rozdzielczości.",
"O standardowej rozdzielczości.",
"O podwyższonej rozdzielczości.",
"Megapikselowych."
],
correct:"O małej rozdzielczości."
},

{
category:"CCTV",
question:"W jakim przypadku należy obowiązkowo zastosować specjalne wzmacniacze sygnałów wizyjnych?",
answers:[
"Przy połączeniu skrętka-rejestrator powyżej 70 metrów.",
"Przy połączeniu przewodem 75 Ω na odległość 400 metrów.",
"Przy odległościach przekraczających 600 metrów na przewodzie koncentrycznym.",
"Zawsze, gdy kamera generuje obraz kolorowy."
],
correct:"Przy odległościach przekraczających 600 metrów na przewodzie koncentrycznym."
},

{
category:"CCTV",
question:"Który parametr obudowy kamery oznacza jej całkowitą odporność zarówno na czynniki mechaniczne (zapylenie), jak i na wilgoć?",
answers:[
"IP65.",
"IP66.",
"IP67 lub IP68.",
"Wszystkie powyższe."
],
correct:"IP67 lub IP68."
},

{
category:"CCTV",
question:"Kamera generująca obraz o rozdzielczości 400 linii TV, według klasyfikacji, zalicza się do:",
answers:["Kamery o małej rozdzielczości.","Kamery o standardowej rozdzielczości.","Kamery o podwyższonej rozdzielczości.","Żadna z powyższych."],
correct:"Żadna z powyższych."
},

{
category:"CCTV",
question:"Który ze standardów rozdzielczości odpowiada dokładnie wartości 1280 x 1024 piksele?",
answers:["D1.","SXGA.","UXGA.","VGA."],
correct:"SXGA."
},

{
category:"CCTV",
question:"Dolna granica rozdzielczości dla kamer określanych jako 'megapikselowe' to:",
answers:["600 linii TV.","700 linii TV.","Ponad 700 linii TV.","1280 linii TV."],
correct:"Ponad 700 linii TV."
},

{
category:"CCTV",
question:"Rozdzielczość VGA definiowana jest jako:",
answers:["320 x 240.","640 x 480.","720 x 576.","1600 x 1200."],
correct:"640 x 480."
},

{
category:"CCTV",
question:"Kamera o rozdzielczości 600 linii TV jest klasyfikowana jako:",
answers:["Kamera standardowa.","Kamera megapikselowa.","Kamera o podwyższonej rozdzielczości.","Kamera o małej rozdzielczości."],
correct:"Kamera o podwyższonej rozdzielczości."
},

{
category:"CCTV",
question:"Standard rozdzielczości D1 to w przeliczeniu na piksele:",
answers:["320 x 240.","640 x 480.","720 x 576.","1280 x 1024."],
correct:"720 x 576."
},

{
category:"CCTV",
question:"Do kamer o małej rozdzielczości zaliczamy te, które generują obraz w przedziale:",
answers:["100-200 linii TV.","240-380 linii TV.","380-420 linii TV.","Poniżej 600 linii TV."],
correct:"240-380 linii TV."
},

{
category:"CCTV",
question:"Rozdzielczość UXGA charakteryzuje się parametrami:",
answers:["1280 x 1024.","1600 x 1200.","720 x 576.","640 x 480."],
correct:"1600 x 1200."
},

{
category:"CCTV",
question:"Ile linii telewizyjnych posiada kamera o standardowej rozdzielczości?",
answers:["240-380.","420-480.","600.","Ponad 700."],
correct:"420-480."
},

{
category:"CCTV",
question:"Standard CIF to najniższa z wymienionych rozdzielczości, wynosząca:",
answers:["320 x 240.","640 x 480.","720 x 576.","800 x 600."],
correct:"320 x 240."
},

{
category:"CCTV",
question:"Wskaż zdanie FAŁSZYWE dotyczące kamer o rozdzielczości około 600 linii TV:",
answers:["Są to kamery megapikselowe.","Są to kamery o podwyższonej rozdzielczości.","Mają wyższą rozdzielczość niż kamery standardowe.","Wszystkie powyższe są prawdziwe."],
correct:"Są to kamery megapikselowe."
},

{
category:"CCTV",
question:"Kamera megapikselowa w systemach CCTV to taka, która posiada:",
answers:["Dokładnie 700 linii TV.","Mniej niż 600 linii TV.","Ponad 700 linii telewizyjnych.","Tylko rozdzielczość UXGA."],
correct:"Ponad 700 linii telewizyjnych."
},

{
category:"CCTV",
question:"Wartość 380 linii TV to górna granica dla kamer:",
answers:["O małej rozdzielczości.","O standardowej rozdzielczości.","O podwyższonej rozdzielczości.","Żadna z powyższych."],
correct:"O małej rozdzielczości."
},

{
category:"CCTV",
question:"Która rozdzielczość jest wyższa od standardu D1?",
answers:["CIF.","VGA.","SXGA.","Wszystkie powyższe są niższe."],
correct:"SXGA."
},

{
category:"CCTV",
question:"Przedział 420-480 linii TV jest zarezerwowany dla kamer:",
answers:["Małej rozdzielczości.","Standardowej rozdzielczości.","Podwyższonej rozdzielczości.","Megapikselowych."],
correct:"Standardowej rozdzielczości."
},

{
category:"CCTV",
question:"Rozdzielczość 720 x 576 pikseli to standard:",
answers:["VGA.","SXGA.","D1.","CIF."],
correct:"D1."
},

{
category:"CCTV",
question:"Jeśli kamera ma 500 linii TV, to według podanej klasyfikacji:",
answers:["Jest standardowa.","Jest o podwyższonej rozdzielczości.","Nie mieści się w żadnym z wymienionych przedziałów.","Jest megapikselowa."],
correct:"Nie mieści się w żadnym z wymienionych przedziałów."
},

{
category:"CCTV",
question:"Najwyższa wymieniona w notatce rozdzielczość w pikselach to:",
answers:["D1.","SXGA.","UXGA.","VGA."],
correct:"UXGA."
},

{
category:"CCTV",
question:"Kamera o podwyższonej rozdzielczości ma około:",
answers:["380 linii TV.","480 linii TV.","600 linii TV.","700 linii TV."],
correct:"600 linii TV."
},

{
category:"CCTV",
question:"Wartość 240 linii TV to dolna granica dla kamer:",
answers:["O małej rozdzielczości.","O standardowej rozdzielczości.","Bez rozdzielczości.","Żadna z powyższych."],
correct:"O małej rozdzielczości."
},

{
category:"CCTV",
question:"Wskaż poprawną parę: Standard - Rozdzielczość:",
answers:["CIF - 640x480.","VGA - 320x240.","SXGA - 1280x1024.","D1 - 1600x1200."],
correct:"SXGA - 1280x1024."
},

{
category:"CCTV",
question:"Który przedział linii TV określa kamery o standardowej rozdzielczości?",
answers:["240-380.","420-480.","500-600.","700-800."],
correct:"420-480."
},

{
category:"CCTV",
question:"Czy kamera o rozdzielczości 700 linii TV jest kamerą megapikselową?",
answers:["Tak.","Nie, musi mieć ponad 700 linii.","Tak, jeśli ma standard UXGA.","Nie, to kamera standardowa."],
correct:"Nie, musi mieć ponad 700 linii."
},

{
category:"CCTV",
question:"Ile pikseli w poziomie posiada standard UXGA?",
answers:["720.","1280.","1600.","640."],
correct:"1600."
},

{
category:"CCTV",
question:"Przedział 240-380 linii TV to:",
answers:["Kamery standardowe.","Kamery małej rozdzielczości.","Kamery megapikselowe.","Żadna z powyższych."],
correct:"Kamery małej rozdzielczości."
},

{
category:"CCTV",
question:"Standard VGA (640 x 480) plasuje się pod względem liczby pikseli:",
answers:["Powyżej D1.","Poniżej D1.","Powyżej SXGA.","Pomiżej CIF."],
correct:"Poniżej D1."
},

{
category:"CCTV",
question:"Kamera posiadająca 650 linii TV zostanie zakwalifikowana jako:",
answers:["Kamera o podwyższonej rozdzielczości.","Kamera megapikselowa.","Kamera standardowa.","Żadna z powyższych."],
correct:"Żadna z powyższych."
},

{
category:"CCTV",
question:"Wskaż rozdzielczość standardu CIF:",
answers:["640 x 480.","1280 x 1024.","320 x 240.","720 x 576."],
correct:"320 x 240."
},

{
category:"CCTV",
question:"Która grupa kamer kończy się na 480 liniach TV?",
answers:["Mała rozdzielczość.","Standardowa rozdzielczość.","Podwyższona rozdzielczość.","Megapikselowa."],
correct:"Standardowa rozdzielczość."
},

{
category:"CCTV",
question:"Rozdzielczość 1280 x 1024 to inaczej standard:",
answers:["UXGA.","SXGA.","VGA.","D1."],
correct:"SXGA."
},

{
category:"CCTV",
question:"Kamera małej rozdzielczości może posiadać maksymalnie:",
answers:["240 linii TV.","380 linii TV.","420 linii TV.","480 linii TV."],
correct:"380 linii TV."
},

{
category:"CCTV",
question:"Wskaż standard o rozdzielczości 1600 x 1200:",
answers:["SXGA.","UXGA.","D1.","VGA."],
correct:"UXGA."
},

{
category:"CCTV",
question:"Kamery o podwyższonej rozdzielczości to te mające około:",
answers:["420 linii TV.","480 linii TV.","600 linii TV.","700 linii TV."],
correct:"600 linii TV."
},

{
category:"CCTV",
question:"Prawidłowa kolejność standardów od najniższej rozdzielczości to:",
answers:["CIF, VGA, D1, SXGA, UXGA.","VGA, CIF, D1, UXGA, SXGA.","D1, VGA, CIF, SXGA, UXGA.","CIF, D1, VGA, UXGA, SXGA."],
correct:"CIF, VGA, D1, SXGA, UXGA."
},

{
category:"CCTV",
question:"Czy 410 linii TV pozwala zakwalifikować kamerę do standardowej rozdzielczości?",
answers:["Tak.","Nie, brakuje 10 linii do dolnej granicy.","Tak, jeśli to standard VGA.","Nie, to kamera o małej rozdzielczości."],
correct:"Nie, brakuje 10 linii do dolnej granicy."
},

{
category:"CCTV",
question:"Który standard ma 576 pikseli w pionie?",
answers:["VGA.","D1.","CIF.","SXGA."],
correct:"D1."
},

{
category:"CCTV",
question:"Kamera o rozdzielczości 800 linii TV jest kamerą:",
answers:["O podwyższonej rozdzielczości.","Megapikselową.","Standardową.","Żadna z powyższych."],
correct:"Megapikselową."
},

{
category:"CCTV",
question:"Jaka jest różnica między UXGA a SXGA pod względem pikseli w pionie?",
answers:["176 pikseli.","1024 piksele.","1200 pikseli.","Żadna z powyższych."],
correct:"176 pikseli."
},

{
category:"CCTV",
question:"Wartość 420 linii TV to granica dolna dla kamer:",
answers:["Małej rozdzielczości.","Standardowej rozdzielczości.","Podwyższonej rozdzielczości.","Megapikselowych."],
correct:"Standardowej rozdzielczości."
},

{
category:"CCTV",
question:"Ostatnim wymienionym progiem rozdzielczości w liniach TV jest:",
answers:["Dokładnie 700.","Około 600.","Ponad 700.","1600."],
correct:"Ponad 700."
},

{
category:"CCTV",
question:"Oblicz maksymalną odległość od obiektywu, przy której piksel na twarzy będzie miał 1mm, korzystając z matrycy 2 Mpx (szer. 1920 px, przetwornik 4.8mm) i obiektywu 6mm.",
answers:[
"2.4 m.",
"6.0 m.",
"12.0 m.",
"24.0 m."
],
correct:"2.4 m."
},

{
category:"CCTV",
question:"Główną różnicą między funkcją WDR a BLC jest to, że WDR umożliwia:",
answers:[
"Rozjaśnienie pierwszego planu kosztem znacznego prześwietlenia tła.",
"Jednoczesne rozjaśnienie ciemnych elementów i przyciemnienie zbyt jasnych.",
"Wydłużenie czasu naświetlania przetwornika ponad czas trwania klatki.",
"Wyłącznie eliminację szumów powstałych przy kompresji JPEG."
],
correct:"Jednoczesne rozjaśnienie ciemnych elementów i przyciemnienie zbyt jasnych."
},

{
category:"CCTV",
question:"Która funkcja pozwala na pracę kamery w ciemniejszych warunkach poprzez zwiększenie czułości, ale jednocześnie powoduje wzrost poziomu szumów?",
answers:[
"AES (Automatyczna migawka).",
"AGC (Automatyczne sterowanie wzmocnieniem).",
"WB (Balans bieli).",
"WDR (Zakres dynamiki obrazu)."
],
correct:"AGC (Automatyczne sterowanie wzmocnieniem)."
},

{
category:"CCTV",
question:"W trybie automatycznym Balansu Bieli (WB), kolor biały jest odwzorowywany względem:",
answers:[
"Najciemniejszego punktu obrazu.",
"Najjaśniejszego punktu obrazu.",
"Predefiniowanego wzorca światła sztucznego.",
"Złącza RS-232."
],
correct:"Najjaśniejszego punktu obrazu."
},

{
category:"CCTV",
question:"Stosowanie automatycznej migawki (AES) w obszarach o niewielkim naświetleniu może skutkować niepożądanym efektem w postaci:",
answers:[
"Zwiększenia ziarnistości obrazu (szumów).",
"Rozmazania ruchomych części obrazu.",
"Przekłamania kolorów względem bieli.",
"Zmniejszenia kąta widzenia obiektywu."
],
correct:"Rozmazania ruchomych części obrazu."
},

{
category:"CCTV",
question:"Zmniejszenie parametru ostrości w ustawieniach kamery stosuje się głównie w celu:",
answers:[
"Wygładzenia szumów powstałych na skutek kompresji JPEG.",
"Zwiększenia szybkości pracy migawki AES.",
"Zredukowania efektu oślepienia słońcem.",
"Poprawy identyfikacji pierwszego planu w funkcji BLC."
],
correct:"Wygładzenia szumów powstałych na skutek kompresji JPEG."
},

{
category:"CCTV",
question:"Funkcja BLC (Kompensacja światła tylnego) poprawia widoczność pierwszego planu, jednak odbywa się to kosztem:",
answers:[
"Całkowitej utraty ostrości obrazu.",
"Wystąpienia efektu smużenia jasnych punktów.",
"Rozjaśnienia tła, które staje się mniej czytelne.",
"Zmniejszenia czułości matrycy."
],
correct:"Rozjaśnienia tła, które staje się mniej czytelne."
},

{
category:"CCTV",
question:"Co jest głównym ograniczeniem przy ustawianiu czasu naświetlania w funkcji AES?",
answers:[
"Czas naświetlania nie może być dłuższy niż czas trwania klatki.",
"Zbyt krótki czas powoduje zawsze przekłamanie balansu bieli.",
"Konieczność stosowania wyłącznie kamer monochromatycznych.",
"Wymóg posiadania zasilacza o napięciu większym niż 12V."
],
correct:"Czas naświetlania nie może być dłuższy niż czas trwania klatki."
},

{
category:"CCTV",
question:"W jakich warunkach, według zasad doboru sprzętu, kamery czarno-białe (monochromatyczne) posiadają niepodważalną przewagę nad kolorowymi?",
answers:[
"Podczas obserwacji obiektów szybko przemieszczających się.",
"W warunkach dziennych przy silnym nasłonecznieniu.",
"W nocy, ze względu na znacznie wyższą czułość.",
"Gdy wymagana jest duża liczba szczegółów obrazu."
],
correct:"W nocy, ze względu na znacznie wyższą czułość."
},

{
category:"CCTV",
question:"Kiedy następuje przekłamanie wszystkich barw w trybie automatycznego balansu bieli?",
answers:[
"Gdy funkcja AGC jest ustawiona na maksimum.",
"Gdy kamera obserwuje obszar pozbawiony koloru białego.",
"Gdy włączona jest jednocześnie funkcja WDR i BLC.",
"Tylko podczas pracy w nocy w trybie monochromatycznym."
],
correct:"Gdy kamera obserwuje obszar pozbawiony koloru białego."
},

{
category:"CCTV",
question:"Efekt dziwnych 'wzorów na obrazie' (bloków) wynikający z kompresji JPEG jest szczególnie widoczny:",
answers:[
"W pełnym słońcu przy niskim AGC.",
"Podczas używania funkcji WDR w dzień.",
"W nocy.",
"Wyłącznie w kamerach o rozdzielczości CIF."
],
correct:"W nocy."
},

{
category:"CCTV",
question:"Metoda 'prób i błędów' jest zalecana w celu optymalnego ustawienia:",
answers:[
"Rozdzielczości D1.",
"Automatycznego sterowania wzmocnieniem (AGC).",
"Mocowania typu C/CS.",
"Długości przewodu koncentrycznego."
],
correct:"Automatycznego sterowania wzmocnieniem (AGC)."
},

{
category:"CCTV",
question:"Która funkcja jest zdefiniowana jako 'odwzorowanie wszystkich kolorów względem koloru odniesienia'?",
answers:[
"WDR.",
"WB.",
"BLC.",
"AES."
],
correct:"WB."
},

{
category:"CCTV",
question:"Wskaż zdanie PRAWDZIWE dotyczące kamer kolorowych:",
answers:[
"Mają wyższą czułość niż kamery czarno-białe.",
"Ułatwiają obserwację dzięki dużej liczbie szczegółów.",
"Nie wymagają ustawiania balansu bieli.",
"Zawsze posiadają funkcję WDR w standardzie."
],
correct:"Ułatwiają obserwację dzięki dużej liczbie szczegółów."
},
{
category:"CCTV",
question:"Zjawisko, w którym obiekt przemieszcza się znacznie w ciągu trwania klatki i jest zapisany na całej swej drodze, wynika z:",
answers:[
"Zbyt krótkiego czasu naświetlania.",
"Wydłużenia czasu otwarcia migawki (AES).",
"Błędnego ustawienia balansu bieli.",
"Zastosowania obiektywu o małej ogniskowej."
],
correct:"Wydłużenia czasu otwarcia migawki (AES)."
},

{
category:"CCTV",
question:"Elementy regulacyjne w kamerach przemysłowych pozwalają na prawidłową reprodukcję obrazu. Występują one najczęściej w:",
answers:[
"Kamerach o małej rozdzielczości (240 TVL).",
"Kamerach przemysłowych wyższej klasy.",
"Wyłącznie w kamerach kopułkowych.",
"Kamerach z matrycą 1/6\"."
],
correct:"Kamerach przemysłowych wyższej klasy."
},

{
category:"CCTV",
question:"Zgodnie z definicją, system CCTV służy do przekazywania obrazu z określonego terenu, a dźwięk jest w nim przesyłany:",
answers:[
"Zawsze, jako integralna część sygnału wizyjnego.",
"Nigdy, ponieważ systemy CCTV służą wyłącznie do dozoru wizyjnego.",
"Rzadziej niż sam obraz.",
"Tylko w systemach wykorzystujących zoom cyfrowy."
],
correct:"Rzadziej niż sam obraz."
},

{
category:"CCTV",
question:"Który rodzaj powiększenia (zoom) pozwala na wychwycenie szczegółów obrazu WYŁĄCZNIE w przekazie na żywo?",
answers:[
"Zoom cyfrowy.",
"Zoom optyczny.",
"Zoom programowy.",
"Wszystkie powyższe."
],
correct:"Zoom optyczny."
},

{
category:"CCTV",
question:"W typowych zastosowaniach systemów monitoringu przyjmuje się, że nie ma potrzeby rejestrowania więcej niż:",
answers:[
"12 klatek na sekundę.",
"25 klatek na sekundę.",
"50 klatek na sekundę.",
"100 klatek na sekundę."
],
correct:"25 klatek na sekundę."
},

{
category:"CCTV",
question:"Główną cechą powiększenia (zoomu) cyfrowego, odróżniającą go od optycznego, jest to, że:",
answers:[
"Działa tylko w kamerach analogowych.",
"Jest wykonywane przez oprogramowanie i pozwala na uzyskanie szczegółowości zarówno na żywo, jak i w archiwum.",
"Wymaga każdorazowo użycia formatu .avi.",
"Nie powoduje utraty jakości przy powiększaniu fragmentu zdjęcia."
],
correct:"Jest wykonywane przez oprogramowanie i pozwala na uzyskanie szczegółowości zarówno na żywo, jak i w archiwum."
},

{
category:"CCTV",
question:"Proces eksportu danych (uzyskiwania zapisanych materiałów) z systemu archiwizacji:",
answers:[
"Powinien być wykonywany tylko przy wyłączonych kamerach.",
"Nie powinien w żaden sposób obciążać systemu CCTV.",
"Zawsze powoduje obniżenie jakości materiału względem oryginału.",
"Wymaga automatycznego usunięcia danych z dysku twardego."
],
correct:"Nie powinien w żaden sposób obciążać systemu CCTV."
},

{
category:"CCTV",
question:"W systemach monitoringu miejskiego, w miejscach użyteczności publicznej, najczęściej wykorzystuje się kamery:",
answers:[
"Wyłącznie monochromatyczne stacjonarne.",
"Dzień i noc megapikselowe, obrotowe.",
"Tubowe poruszające się w tunelu.",
"Pozbawione funkcji zoomu optycznego."
],
correct:"Dzień i noc megapikselowe, obrotowe."
},

{
category:"CCTV",
question:"Jaka powinna być jakość danych wyeksportowanych z systemu CCTV względem zapisu oryginalnego?",
answers:[
"Wyższa, dzięki zastosowaniu kodeków przy eksporcie.",
"Taka sama jak oryginalny zapis.",
"Niższa o co najmniej 20%, aby umożliwić zapis na pamięciach flash.",
"Zależna wyłącznie od pojemności zewnętrznego dysku twardego."
],
correct:"Taka sama jak oryginalny zapis."
},

{
category:"CCTV",
question:"Który parametr kamery zależy bezpośrednio od zastosowanego obiektywu?",
answers:[
"Czułość.",
"Liczba klatek przesyłanych na sekundę.",
"Kąt widzenia.",
"Jakość pracy przy niewielkim oświetleniu."
],
correct:"Kąt widzenia."
},

{
category:"CCTV",
question:"Systemy monitoringu IP (cyfrowe) umożliwiają zapisanie wszystkich materiałów w formacie standardowym:",
answers:[
"Digital Video (DV).",
".mp3.",
".avi.",
".jpg."
],
correct:".avi."
},

{
category:"CCTV",
question:"Kamera obrotowa w porównaniu do kamer analogowych charakteryzuje się:",
answers:[
"Większą liczbą klatek na sekundę.",
"Mniejszą ilością klatek na sekundę.",
"Brakiem możliwości konfiguracji zapisu.",
"Koniecznością stosowania wyłącznie przewodów 75 Ohm."
],
correct:"Mniejszą ilością klatek na sekundę."
},

{
category:"CCTV",
question:"Pojęcie 'monitoring video' jest obecnie powszechnie stosowane jako zamiennik określenia:",
answers:[
"Telewizja dozorowa.",
"Zoom cyfrowy.",
"Systemy bezprzewodowe.",
"Archiwizacja danych."
],
correct:"Telewizja dozorowa."
},

{
category:"CCTV",
question:"Co musi rejestrować system archiwizacji w celu zapewnienia pełnego bezpieczeństwa danych?",
answers:[
"Tylko momenty zaniku napięcia.",
"Wszystkie próby dostępu do archiwum.",
"Wyłącznie obraz z kamer megapikselowych.",
"Każdą zmianę kąta widzenia obiektywu."
],
correct:"Wszystkie próby dostępu do archiwum."
},

{
category:"CCTV",
question:"Eksportowanie danych z systemu odbywa się za pomocą popularnych programów, co jest możliwe dzięki użyciu:",
answers:[
"Zoomu optycznego.",
"Kodeków.",
"Przewodów transmisyjnych.",
"Uchwytów i obudów."
],
correct:"Kodeków."
},

{
category:"CCTV",
question:"Który z wymienionych elementów NIE wchodzi w skład tradycyjnego systemu telewizji dozorowej (CCTV) ?",
answers:[
"Urządzenia rejestrujące obraz.",
"Urządzenia zasilające.",
"Systemy nagłaśniające (PA).",
"Obudowy i uchwyty."
],
correct:"Systemy nagłaśniające (PA)."
},

{
category:"CCTV",
question:"Prawidłowe zaprojektowanie systemu CCTV wymaga zapewnienia 'dopasowania urządzeń', co określa się jako:",
answers:[
"Eksport danych.",
"Współpracę elementów systemu.",
"Archiwizację danych.",
"Monitoring video."
],
correct:"Współpracę elementów systemu."
},


{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/OGNISKOWA_SCHEMAT.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "Ogniskową"],
  correct: "Obiektyw"
},

{
  category: "CCTV",
  question: "literą (B) zaznaczono ",
  image: "img/CCTV/OGNISKOWA_SCHEMAT.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "Ogniskową"],
  correct: "Przetwornik"
},

{
  category: "CCTV",
  question: "literą (C) zaznaczono ",
  image: "img/CCTV/OGNISKOWA_SCHEMAT.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "Ogniskową"],
  correct: "Ogniskową"
},

{
  category: "CCTV",
  question: "literą (D) zaznaczono ",
  image: "img/CCTV/OGNISKOWA_SCHEMAT.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "dystans od obiektywu do obiektu."],
  correct: "dystans od obiektywu do obiektu."
},

{
  category: "CCTV",
  question: "literą (E) zaznaczono ",
  image: "img/CCTV/OGNISKOWA_SCHEMAT.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "dystans od obiektywu do obiektu."],
  correct: "Kąt widzenia"
},

{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "Ogniskową"],
  correct: "Kąt widzenia"
},

{
  category: "CCTV",
  question: "literą (B) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "dystans od obiektywu do obiektu", "Kąt widzenia", "Ogniskową"],
  correct: "dystans od obiektywu do obiektu"
},

{
  category: "CCTV",
  question: "literą (C) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "Ogniskową"],
  correct: "Ogniskową"
},

{
  category: "CCTV",
  question: "literą (D) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "przetwornicę"],
  correct: "Przetwornik"
},

{
  category: "CCTV",
  question: "literą (E) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "dystans od obiektywu do obiektu."],
  correct: "Obiektyw"
},

{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "dystans od obiektywu do obiektu", "Kąt widzenia", "Ogniskową"],
  correct: "dystans od obiektywu do obiektu"
},

{
  category: "CCTV",
  question: "literą (B) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "Ogniskową"],
  correct: "Przetwornik"
},

{
  category: "CCTV",
  question: "literą (C) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "Ogniskową"],
  correct: "Kąt widzenia"
},

{
  category: "CCTV",
  question: "literą (D) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Przetwornik", "Obiektyw", "Kąt widzenia", "dystans od obiektywu do obiektu."],
  correct: "Obiektyw"
},

{
  category: "CCTV",
  question: "literą (E) zaznaczono ",
  image: "img/CCTV/ogniskowa_schemat3.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["Ogniskową", "Obiektyw", "Kąt widzenia", "dystans od obiektywu do obiektu."],
  correct: "Ogniskową"
},

{
  category: "CCTV",
  question: "Jaka jest prawidłowa kolejność czynności wykonywanych podczas wymiany uszkodzonej kamery monitoringu połączonej z rejestratorem wideo?",
  answers: [
    "Odłączenie przewodu sygnałowego od kamery, odłączenie zasilania od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie zasilania do kamery, podłączenie przewodu sygnałowego do kamery. ", 
    "Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery.", 
    "Odłączenie zasilania od kamery, zdemontowanie kamery, odłączenie przewodu sygnałowego od uszkodzonej kamery i podłączenie do nowej, zamontowanie kamery, podłączenie zasilania do kamery.", 
    "Odłączenie zasilania od rejestratora, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do rejestratora.  dodaj mi to pytanie w tym stylu."
  ],
  correct: "Odłączenie zasilania od kamery, odłączenie przewodu sygnałowego od kamery, zdemontowanie uszkodzonej kamery i zamontowanie nowej, podłączenie przewodu sygnałowego do kamery, podłączenie zasilania do kamery."
},

{
  category: "CCTV",
  question: "Na rysunku przedstawiono:",
  image: "img/CCTV/obiektyw_o_stalej_ogniskowej.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["obiektyw o regulowanej ogniskowej", "obiektyw o stłej ogniskowej", "obiektyw bez ogniskowej", "regulowany wzmacniacz obrazu"],
  correct: "obiektyw o stłej ogniskowej"
},

{
  category: "CCTV",
  question: "Na rysunku przedstawiono:",
  image: "img/CCTV/obiektyw_o_stalej_ogniskowej.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["obiektyw o regulowanej ogniskowej", "obiektyw o stłej ogniskowej", "obiektyw bez ogniskowej", "regulowany wzmacniacz obrazu"],
  correct: "obiektyw o stłej ogniskowej"
},

// SEKCJA: PRZYSLONA (PODSTAWY)

{
  category: "CCTV",
  question: "W jakiej postaci występuje przysłona w obiektywie kamery?",
  answers: ["Elektronicznego układu scalonego", "Stałego filtra szklanego", "Regulowanego otworu na drodze światła", "Warstwy napylonej na soczewkę"],
  correct: "Regulowanego otworu na drodze światła"
},

{
  category: "CCTV",
  question: "Za co odpowiada przysłona w systemach telewizji dozorowej?",
  answers: ["Za regulację ogniskowej", "Za zmianę ilości światła padającego na przetwornik", "Za cyfrowe odszumianie obrazu", "Za prędkość zapisu na dysku"],
  correct: "Za zmianę ilości światła padającego na przetwornik"
},

{
  category: "CCTV",
  question: "Gdzie w strukturze kamery pada światło bezpośrednio po przejściu przez obiektyw z przysłoną?",
  answers: ["Na powierzchnię światłoczułą przetwornika", "Na procesor sygnałowy DSP", "Na moduł komunikacji sieciowej", "Na diody doświetlacza IR"],
  correct: "Na powierzchnię światłoczułą przetwornika"
},

{
  category: "CCTV",
  question: "Jakie są dwa podstawowe rodzaje regulacji przysłony w obiektywach?",
  answers: ["Cienka i gruba", "Automatyczna i ręczna", "Cyfrowa i mechaniczna", "Stała i zmiennoogniskowa"],
  correct: "Automatyczna i ręczna"
},

{
  category: "CCTV",
  question: "Dlaczego w kamerach zewnętrznych zaleca się stosowanie przysłony automatycznej?",
  answers: ["Zapewnia lepszą szczelność obudowy", "Niweluje skutki oślepienia kamery przez słońce", "Zwiększa zasięg zoomu optycznego", "Przyspiesza przesyłanie obrazu do sieci"],
  correct: "Niweluje skutki oślepienia kamery przez słońce"
},

// SEKCJA: LICZBA APERTUROWA F
{
  category: "CCTV",
  question: "Jak inaczej określa się jasność obiektywu w specyfikacji technicznej?",
  answers: ["Liczba transmisyjna", "Liczba aperturowa F", "Czułość ISO", "Wartość luksów"],
  correct: "Liczba aperturowa F"
},

{
  category: "CCTV",
  question: "Która skala służy do określania zdolności obiektywu do przepuszczania światła?",
  answers: ["Skala T", "Skala F", "Skala Lux", "Skala dB"],
  correct: "Skala F"
},

{
  category: "CCTV",
  question: "Jaka zależność zachodzi między wzrostem liczby F a ilością światła?",
  answers: ["Ilość światła rośnie proporcjonalnie", "Ilość światła maleje", "Ilość światła nie ulega zmianie", "Zmienia się tylko barwa światła"],
  correct: "Ilość światła maleje"
},

{
  category: "CCTV",
  question: "Co oznaczają dwie wartości liczby F (np. F1.4 - 360) podawane w specyfikacji obiektywu?",
  answers: ["Jasność dla różnych rozdzielczości", "Maksymalne i minimalne otwarcie przysłony", "Jasność w centrum i na brzegach obrazu", "Wartości dla dnia i nocy"],
  correct: "Maksymalne i minimalne otwarcie przysłony"
},


// SEKCJA: LICZBA TRANSMISYJNA T
{
  category: "CCTV",
  question: "Który wskaźnik określa rzeczywistą (uwzględniającą straty) zdolność obiektywu do przepuszczania światła?",
  answers: ["Liczba aperturowa F", "Liczba transmisyjna T", "Głębia ostrości", "Szybkość migawki"],
  correct: "Liczba transmisyjna T"
},

{
  category: "CCTV",
  question: "Co jest brane pod uwagę przy określaniu jakości obiektywu w skali T?",
  answers: ["Materiał soczewek i rodzaj światła", "Waga obiektywu i jego rozmiar", "Marka kamery i jej oprogramowanie", "Rodzaj zasilania kamery"],
  correct: "Materiał soczewek i rodzaj światła"
},

{
  category: "CCTV",
  question: "Która skala pozwala na najbardziej bezwzględną i precyzyjną ocenę jasności obiektywu?",
  answers: ["Skala F", "Skala T", "Skala Kelvina", "Skala decybeli"],
  correct: "Skala T"
},

// SEKCJA: WARTOSCI TECHNICZNE (TABELA)
{
  category: "CCTV",
  question: "Przy jakiej wartości liczby F obiektyw przepuszcza 100% strumienia światła?",
  answers: ["F = 0,8", "F = 1,0", "F = 1,4", "F = 2,0"],
  correct: "F = 1,0"
},

{
  category: "CCTV",
  question: "Jaką ilość światła przepuszcza obiektyw o jasności F = 2,0?",
  answers: ["50,0%", "25,0%", "12,5%", "6,3%"],
  correct: "25,0%"
},

{
  category: "CCTV",
  question: "Wartość przysłony F = 4,0 oznacza, że do przetwornika dociera:",
  answers: ["12,5% światła", "6,3% światła", "3,1% światła", "1,6% światła"],
  correct: "6,3%"
},

{
  category: "CCTV",
  question: "Przy ustawieniu przysłony na wartość F = 8,0 przepuszczalność światła wynosi:",
  answers: ["3,1%", "1,6%", "0,8%", "5,0%"],
  correct: "1,6%"
},

{
  category: "CCTV",
  question: "Wartość przysłony F = 16 charakteryzuje się przepuszczalnością światła na poziomie:",
  answers: ["1,6%", "0,8%", "0,4%", "2,0%"],
  correct: "0,8%"
},

{
  category: "CCTV",
  question: "O ile spadnie ilość światła przy zmianie wartości przysłony z F = 1,0 na F = 1,4?",
  answers: ["O 10%", "O 25%", "O 50%", "O 75%"],
  correct: "O 50%"
},

{
  category: "CCTV",
  question: "Która z wymienionych wartości F oznacza najjaśniejszy obiektyw?",
  answers: ["F = 1,4", "F = 2,8", "F = 4,0", "F = 8,0"],
  correct: "F = 1,4"
},

{
  category: "CCTV",
  question: "Co charakteryzuje obiektyw o małej wartości liczby F?",
  answers: ["Jest to obiektyw jasny", "Jest to obiektyw ciemny", "Jest to obiektyw o małym kącie widzenia", "Jest to obiektyw wyłącznie ręczny"],
  correct: "Jest to obiektyw jasny"
},
// SEKCJA: głębia ostrości 
{
  category: "CCTV",
  question: "Czym jest głębia ostrości w systemach kamer?",
  answers: [
    "Zakresem odległości, w którym obserwowane obiekty sprawiają wrażenie ostrych",
    "Szybkością z jaką kamera ustawia ostrość na poruszający się obiekt",
    "Maksymalnym dystansem, na jaki kamera może przesłać sygnał",
    "Rozdzielczością cyfrową krawędzi obiektów"
  ],
  correct: "Zakresem odległości, w którym obserwowane obiekty sprawiają wrażenie ostrych"
},

{
  category: "CCTV",
  question: "W jaki sposób przymykanie przysłony wpływa na głębię ostrości?",
  answers: [
    "Zmniejsza głębię ostrości",
    "Zwiększa wartość parametru głębi ostrości",
    "Nie ma wpływu na ostrość obrazu",
    "Powoduje całkowite rozmycie tła"
  ],
  correct: "Zwiększa wartość parametru głębi ostrości"
},

{
  category: "CCTV",
  question: "Jak zmiana ogniskowej wpływa na głębię ostrości?",
  answers: [
    "Skracanie ogniskowej zwiększa głębię ostrości",
    "Wydłużanie ogniskowej zwiększa głębię ostrości",
    "Ogniskowa wpływa tylko na kąt widzenia, nie na głębię",
    "Skracanie ogniskowej powoduje powstanie wąskiej głębi ostrości"
  ],
  correct: "Skracanie ogniskowej zwiększa głębię ostrości"
},

{
  category: "CCTV",
  question: "Co oznacza dążenie głębi ostrości do nieskończoności?",
  answers: [
    "Obraz jest ostry tylko w jednym, bardzo bliskim punkcie",
    "Obiekty leżące dalej niż pewna minimalna odległość są widziane ostro",
    "Kamera nigdy nie może złapać poprawnej ostrości",
    "Przetwornik obrazu uległ uszkodzeniu przez nadmiar światła"
  ],
  correct: "Obiekty leżące dalej niż pewna minimalna odległość są widziane ostro"
},

{
  category: "CCTV",
  question: "Kiedy w monitoringu pożądana jest duża głębia ostrości?",
  answers: [
    "Gdy chcemy widzieć ostro większość elementów na całym obrazie",
    "Gdy chcemy wydzielić jeden konkretny obiekt od tła",
    "Tylko podczas pracy kamery w całkowitej ciemności",
    "Gdy używamy wyłącznie zoomu cyfrowego"
  ],
  correct: "Gdy chcemy widzieć ostro większość elementów na całym obrazie"
},

{
  category: "CCTV",
  question: "W jakiej sytuacji stosuje się małą (wąską) głębię ostrości?",
  answers: [
    "Aby uzyskać ostrość na horyzoncie",
    "Gdy chcemy wyodrębnić obserwowany obiekt od tła otoczenia",
    "Gdy chcemy monitorować szeroki parking jednym obiektywem",
    "Przy stosowaniu obiektywów szerokokątnych typu rybie oko"
  ],
  correct: "Gdy chcemy wyodrębnić obserwowany obiekt od tła otoczenia"
},

{
  category: "CCTV",
  question: "Które połączenie ustawień zapewni najszerszą głębię ostrości?",
  answers: [
    "Otwarta przysłona i długa ogniskowa",
    "Przymknięta przysłona i krótka ogniskowa",
    "Otwarta przysłona i krótka ogniskowa",
    "Przymknięta przysłona i długa ogniskowa"
  ],
  correct: "Przymknięta przysłona i krótka ogniskowa"
},

{
  category: "CCTV",
  question: "Na czym polega różnica między szeroką a wąską głębią ostrości?",
  answers: [
    "Szeroka głębia ostrości to większy obszar pola widzenia, który pozostaje ostry",
    "Wąska głębia ostrości pozwala widzieć wszystko od kamery do horyzontu",
    "Szeroka głębia ostrości dotyczy tylko szerokości geograficznej montażu",
    "Nie ma żadnej różnicy, to dwa określenia tego samego parametru"
  ],
  correct: "Szeroka głębia ostrości to większy obszar pola widzenia, który pozostaje ostry"
},

{
  category: "CCTV",
  question: "Jak parametr 'odległość ostrzenia' wiąże się z głębią ostrości?",
  answers: [
    "Jest to punkt, wokół którego rozciąga się zakres głębi ostrości",
    "Jest to maksymalna długość kabla sygnałowego",
    "To parametr określający jasność obiektywu (liczba F)",
    "Określa ona tylko fizyczną długość obudowy obiektywu"
  ],
  correct: "Jest to punkt, wokół którego rozciąga się zakres głębi ostrości"
},

{
  category: "CCTV",
  question: "Jeżeli chcemy monitorować długi korytarz tak, aby osoby blisko i daleko były ostre, powinniśmy dążyć do:",
  answers: [
    "Jak najmniejszej głębi ostrości",
    "Jak największej głębi ostrości",
    "Całkowitego otwarcia przysłony",
    "Maksymalnego wydłużenia ogniskowej"
  ],
  correct: "Jak największej głębi ostrości"
},

{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/szeroka_glembia_ostrosci.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["odległość ostrzenia", "odległość eliminacji złego oświetlenia", "odległość widzenia", "długość martwego punktu"],
  correct: "odległość ostrzenia"
},

{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/szeroka_glembia_ostrosci.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["odległość ostrzenia", "głębię ostrości", "odległość widzenia", "długość martwego punktu"],
  correct: "odległość ostrzenia"
},

{
  category: "CCTV",
  question: "literą (B) zaznaczono ",
  image: "img/CCTV/szeroka_glembia_ostrosci.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["odległość ostrzenia", "głębię ostrości", "odległość widzenia", "długość martwego punktu"],
  correct: "głębię ostrości"
},

{
  category: "CCTV",
  question: "Jaka została przedstawiona głębia ostrości ? ",
  image: "img/CCTV/szeroka_glembia_ostrosci.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["szeroka", "wąska", "długa", "mieszana"],
  correct: "szeroka"
},

{
  category: "CCTV",
  question: "literą (B) zaznaczono ",
  image: "img/CCTV/szeroka_glembia_ostrosci2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["odległość ostrzenia", "głębię ostrości", "odległość widzenia", "długość martwego punktu"],
  correct: "odległość ostrzenia"
},

{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/szeroka_glembia_ostrosci2.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["odległość ostrzenia", "głębię ostrości", "odległość widzenia", "długość martwego punktu"],
  correct: "głębię ostrości"
},

//podział obiektywów 
{
  category: "CCTV",
  question: "Kiedy obiektyw klasyfikujemy jako szerokokątny?",
  answers: [
    "Gdy jego ogniskowa jest znacznie większa od przekątnej przetwornika",
    "Gdy wartość ogniskowej jest znacznie mniejsza od przekątnej przetwornika",
    "Gdy nie posiada on przysłony (no-IRIS)",
    "Gdy jest wyposażony w funkcję moto-zoom"
  ],
  correct: "Gdy wartość ogniskowej jest znacznie mniejsza od przekątnej przetwornika"
},

{
  category: "CCTV",
  question: "Obiektyw standardowy charakteryzuje się tym, że:",
  answers: [
    "Ma ogniskową podobną do przekątnej przetwornika",
    "Posiada zawsze stałą ogniskową 3,6mm",
    "Jest przeznaczony wyłącznie do kamer dzień/noc",
    "Ma kąt widzenia powyżej 180 stopni"
  ],
  correct: "Ma ogniskową podobną do przekątnej przetwornika"
},

{
  category: "CCTV",
  question: "Obiektyw wąskokątny stosujemy, gdy:",
  answers: [
    "Ogniskowa obiektywu jest mniejsza od przekątnej przetwornika",
    "Ogniskowa obiektywu jest większa od przekątnej przetwornika",
    "Chcemy uzyskać bardzo szeroki plan widzenia",
    "Kamera pracuje w małym pomieszczeniu"
  ],
  correct: "Ogniskowa obiektywu jest większa od przekątnej przetwornika"
},

{
  category: "CCTV",
  question: "Do jakich zastosowań dedykowane są obiektywy bez przysłony (no-IRIS)?",
  answers: [
    "Do najbardziej wymagających systemów bankowych",
    "Do zastosowania w prostych kamerach",
    "Do kamer pracujących w zmiennych warunkach oświetleniowych",
    "Do obiektywów typu moto-zoom"
  ],
  correct: "Do zastosowania w prostych kamerach"
},

{
  category: "CCTV",
  question: "W jakich kamerach najczęściej stosuje się automatyczną przysłonę Auto-IRIS?",
  answers: [
    "W prostych kamerach wewnętrznych",
    "W kamerach typu dzień/noc",
    "Wyłącznie w kamerach z obiektywem stałoogniskowym",
    "W kamerach bez przetwornika obrazu"
  ],
  correct: "W kamerach typu dzień/noc"
},

{
  category: "CCTV",
  question: "Które z wymienionych długości ogniskowych są typowe dla obiektywów stałoogniskowych?",
  answers: [
    "3,5-8mm",
    "3,6mm, 4,0mm, 6,0mm, 12,0mm",
    "2,8-12mm",
    "Dowolna wartość regulowana zdalnie"
  ],
  correct: "3,6mm, 4,0mm, 6,0mm, 12,0mm"
},

{
  category: "CCTV",
  question: "Jak nazywamy obiektywy o zmiennej ogniskowej regulowanej ręcznie?",
  answers: [
    "Moto-zoom",
    "Varifocal (Waryfokalne)",
    "No-IRIS",
    "Stałoogniskowe"
  ],
  correct: "Varifocal (Waryfokalne)"
},

{
  category: "CCTV",
  question: "Jaki jest najczęściej spotykany zakres regulacji dla obiektywów o zmiennej ogniskowej?",
  answers: [
    "1,0-2,0mm",
    "3,5-8,0mm",
    "12,0-36,0mm",
    "50,0-100,0mm"
  ],
  correct: "3,5-8,0mm"
},

{
  category: "CCTV",
  question: "Obiektywy typu moto-zoom charakteryzują się:",
  answers: [
    "Brakiem możliwości zmiany ogniskowej",
    "Zdalną regulacją ogniskowej",
    "Koniecznością ręcznego ustawiania przysłony",
    "Tym, że są przeznaczone tylko do najprostszych kamer"
  ],
  correct: "Zdalną regulacją ogniskowej"
},

{
  category: "CCTV",
  question: "Podział obiektywów ze względu na rodzaj przysłony obejmuje:",
  answers: [
    "No-IRIS, ręczna, Auto-IRIS",
    "Stała, zmienna, zdalna",
    "Wąskokątna, standardowa, szerokokątna",
    "Mała, średnia, duża"
  ],
  correct: "No-IRIS, ręczna, Auto-IRIS"
},

{
  category: "CCTV",
  question: "Który rodzaj obiektywu jest przeznaczony do najbardziej wymagających zastosowań?",
  answers: [
    "Obiektyw ze stałą ogniskową",
    "Obiektyw o ogniskowej regulowanej zdalnie (moto-zoom)",
    "Obiektyw bez przysłony (no-IRIS)",
    "Obiektyw standardowy"
  ],
  correct: "Obiektyw o ogniskowej regulowanej zdalnie (moto-zoom)"
},

{
  category: "CCTV",
  question: "Na jakie trzy główne kryteria dzieli się obiektywy do kamer?",
  answers: [
    "Cena, marka, kolor",
    "Kąt widzenia, rodzaj przysłony, rodzaj ogniskowej",
    "Waga, rozmiar soczewki, typ gwintu",
    "Rozdzielczość, zasięg IR, typ obudowy"
  ],
  correct: "Kąt widzenia, rodzaj przysłony, rodzaj ogniskowej"
},

{
  category: "CCTV",
  question: "Jakie określenie stosuje się dla obiektywów o zmiennej ogniskowej?",
  answers: [
    "Fixed Focal",
    "Varifocal lub Zoom",
    "Auto-focus",
    "Digital Zoom"
  ],
  correct: "Varifocal lub Zoom"
},

{
  category: "CCTV",
  question: "Do czego porównujemy ogniskową obiektywu, aby określić jego kąt widzenia?",
  answers: [
    "Do szerokości obudowy kamery",
    "Do przekątnej przetwornika obrazu",
    "Do rozdzielczości sensora",
    "Do jasności obiektywu (liczby F)"
  ],
  correct: "Do przekątnej przetwornika obrazu"
},

{
  category: "CCTV",
  question: "Który z wymienionych obiektywów stałoogniskowych jest najczęściej spotykany?",
  answers: [
    "1,2mm",
    "3,6mm",
    "24,0mm",
    "50,0mm"
  ],
  correct: "3,6mm"
},

{
  category: "CCTV",
  question: "Ile głównych kryteriów podziału obiektywów wyróżniono na slajdzie?",
  answers: [
    "Dwa",
    "Trzy",
    "Cztery",
    "Pięć"
  ],
  correct: "Trzy"
},

{
  category: "CCTV",
  question: "Jak nazywa się obiektyw, który nie posiada mechanizmu przysłony?",
  answers: [
    "No-Focus",
    "No-IRIS",
    "Manual-IRIS",
    "Zero-IRIS"
  ],
  correct: "No-IRIS"
},

{
  category: "CCTV",
  question: "Obiektyw typu moto-zoom charakteryzuje się tym, że jego ogniskowa jest:",
  answers: [
    "Stała i nieregulowana",
    "Regulowana zdalnie",
    "Regulowana tylko ręcznie przez instalatora",
    "Zależna od warunków oświetleniowych"
  ],
  correct: "Regulowana zdalnie"
},

{
  category: "CCTV",
  question: "W jakich miejscach stosuje się obiektywy o zmiennej ogniskowej (Varifocal)?",
  answers: [
    "Tylko w małych pomieszczeniach",
    "Tam, gdzie liczy się swoboda w wyborze długości ogniskowej",
    "Tylko w kamerach pracujących w nocy",
    "W miejscach, gdzie zabronione jest używanie zoomu"
  ],
  correct: "Tam, gdzie liczy się swoboda w wyborze długości ogniskowej"
},

{
  category: "CCTV",
  question: "Która wartość ogniskowej NIE została wymieniona na slajdzie jako typowa dla obiektywu stałego?",
  answers: [
    "4,0mm",
    "6,0mm",
    "8,0mm",
    "12,0mm"
  ],
  correct: "8,0mm"
},

{
  category: "CCTV",
  question: "Co pozwala na swobodę wyboru pola widzenia bez konieczności wymiany obiektywu?",
  answers: [
    "Przetwornik o większej przekątnej",
    "Obiektyw o zmiennej ogniskowej (Varifocal)",
    "Zastosowanie przysłony Auto-IRIS",
    "Wymiana kamery na model dzień/noc"
  ],
  correct: "Obiektyw o zmiennej ogniskowej (Varifocal)"
},

{
  category: "CCTV",
  question: "Jaki rodzaj przysłony jest przeznaczony do kamer typu dzień/noc?",
  answers: [
    "Ręczna",
    "Automatyczna Auto-IRIS",
    "Brak przysłony (no-IRIS)",
    "Stała mechaniczna"
  ],
  correct: "Automatyczna Auto-IRIS"
},

{
  category: "CCTV",
  question: "Jeśli ogniskowa obiektywu wynosi 12,0mm, a przekątna przetwornika jest znacznie mniejsza, to obiektyw jest:",
  answers: [
    "Szerokokątny",
    "Standardowy",
    "Wąskokątny",
    "Waryfokalny"
  ],
  correct: "Wąskokątny"
},

{
  category: "CCTV",
  question: "Podział ze względu na rodzaj ogniskowej obejmuje obiektywy:",
  answers: [
    "Wąskie, średnie i szerokie",
    "Stałe, zmienne i regulowane zdalnie",
    "Automatyczne i ręczne",
    "Standardowe i profesjonalne"
  ],
  correct: "Stałe, zmienne i regulowane zdalnie"
},

//rejestratory 

{
  category: "CCTV",
  question: "Jakie trzy główne typy urządzeń rejestrujących wyróżnia się w systemach telewizji dozorowej?",
  answers: [
    "Kamery, monitory, zasilacze",
    "Magnetowidy, karty VCR, rejestratory cyfrowe",
    "Dyski HDD, karty SD, chmura obliczeniowa",
    "Multipleksery, switche, routery"
  ],
  correct: "Magnetowidy, karty VCR, rejestratory cyfrowe"
},

{
  category: "CCTV",
  question: "Które z rozwiązań technicznych do rejestracji obrazu jest najstarsze i obecnie już niebudowane?",
  answers: [
    "Rejestratory cyfrowe",
    "Karty VCR",
    "Magnetowidy",
    "Serwery NAS"
  ],
  correct: "Magnetowidy"
},

{
  category: "CCTV",
  question: "Na jakim nośniku zapisywany jest obraz w przypadku magnetowidów?",
  answers: [
    "Na dysku twardym",
    "Na kasecie",
    "Na karcie pamięci",
    "W pamięci RAM"
  ],
  correct: "Na kasecie"
},

{
  category: "CCTV",
  question: "Jaki jest zakres czasu nagrywania oferowany przez magnetowidy?",
  answers: [
    "Od 1 do 12 godzin",
    "Od 24 do 960 godzin",
    "Od 100 do 2000 godzin",
    "Nieograniczony"
  ],
  correct: "Od 24 do 960 godzin"
},

{
  category: "CCTV",
  question: "Gdzie rejestrowany jest obraz przy użyciu karty VCR?",
  answers: [
    "Na wbudowanej pamięci kamery",
    "Na twardym dysku komputera",
    "Na taśmie magnetycznej",
    "Na zewnętrznym serwerze FTP"
  ],
  correct: "Na twardym dysku komputera"
},

{
  category: "CCTV",
  question: "Od czego zależy długość zarejestrowanego materiału przy użyciu karty VCR?",
  answers: [
    "Tylko od pojemności dysku",
    "Od szybkości procesora",
    "Od rodzaju systemu operacyjnego",
    "Od długości kabla kamery"
  ],
  correct: "Tylko od pojemności dysku"
},

{
  category: "CCTV",
  question: "Jakie ryzyko wiąże się ze stosowaniem zwykłej karty VCR w komputerze?",
  answers: [
    "Ryzyko sabotażu (dostęp osób trzecich) lub niestabilność systemu",
    "Zbyt wysoki koszt zakupu komputera",
    "Konieczność częstej wymiany kaset",
    "Brak możliwości podłączenia więcej niż jednej kamery"
  ],
  correct: "Ryzyko sabotażu (dostęp osób trzecich) lub niestabilność systemu"
},

{
  category: "CCTV",
  question: "Czym charakteryzuje się profesjonalna odmiana urządzenia do zapisu cyfrowego?",
  answers: [
    "Jest to magnetowid z cyfrowym licznikiem",
    "Jest to rejestrator cyfrowy",
    "Jest to zwykły komputer z kartą sieciową",
    "Jest to kamera z wbudowanym dyskiem"
  ],
  correct: "Jest to rejestrator cyfrowy"
},

{
  category: "CCTV",
  question: "Z połączenia jakich elementów składa się rejestrator cyfrowy?",
  answers: [
    "Kamery i monitora",
    "Wielokanałowego multipleksera i dysku twardego",
    "Modemu i zasilacza awaryjnego",
    "Karty VCR i magnetowidu"
  ],
  correct: "Wielokanałowego multipleksera i dysku twardego"
},

{
  category: "CCTV",
  question: "Jaka jest główna zaleta rejestratora cyfrowego w porównaniu do kart VCR?",
  answers: [
    "Jest znacznie mniejszy",
    "Mała możliwość dostępu osób niepowołanych",
    "Nie wymaga zasilania elektrycznego",
    "Zapisuje obraz w kolorze"
  ],
  correct: "Mała możliwość dostępu osób niepowołanych"
},

{
  category: "CCTV",
  question: "W jaki sposób rejestratory cyfrowe są zabezpieczane przed nieautoryzowanym dostępem?",
  answers: [
    "Przez kody dostępu i obudowy zabezpieczone mechanicznie",
    "Przez ukrywanie ich w trudno dostępnych miejscach",
    "Przez odłączanie od prądu na noc",
    "Nie posiadają żadnych zabezpieczeń"
  ],
  correct: "Przez kody dostępu i obudowy zabezpieczone mechanicznie"
},

{
  category: "CCTV",
  question: "W jakich systemach stosuje się na ogół rejestratory cyfrowe?",
  answers: [
    "Tylko w domach prywatnych",
    "Tam, gdzie zastosowanie karty VCR byłoby ryzykowne",
    "Tylko w systemach z jedną kamerą",
    "W systemach niekorzystających z dysków twardych"
  ],
  correct: "Tam, gdzie zastosowanie karty VCR byłoby ryzykowne"
},

{
  category: "CCTV",
  question: "Jak określamy dyski w rejestratorach cyfrowych, które można łatwo zastąpić nowymi?",
  answers: [
    "Dyski stałe",
    "Dyski na ogół wymienne",
    "Karty VCR",
    "Kasety magnetyczne"
  ],
  correct: "Dyski na ogół wymienne"
},

{
  category: "CCTV",
  question: "Co może być przyczyną utraty danych w systemach opartych na kartach VCR?",
  answers: [
    "Niestabilne systemy operacyjne",
    "Zbyt duża ilość światła w pomieszczeniu",
    "Brak multipleksera",
    "Użycie dysku o zbyt dużej pojemności"
  ],
  correct: "Niestabilne systemy operacyjne"
},

{
  category: "CCTV",
  question: "Do czego służy rejestrator w systemie telewizji dozorowej?",
  answers: [
    "Do wyświetlania obrazu na żywo",
    "Do zapisu obrazu z kamer na nośniku danych",
    "Do zasilania kamer",
    "Do ustawiania ostrości w obiektywach"
  ],
  correct: "Do zapisu obrazu z kamer na nośniku danych"
},

{
  category: "CCTV",
  question: "Jakie trzy główne typy urządzeń rejestrujących wyróżnia się w systemach telewizji dozorowej?",
  answers: [
    "Kamery, monitory, zasilacze",
    "Magnetowidy, karty VCR, rejestratory cyfrowe",
    "Dyski HDD, karty SD, chmura obliczeniowa",
    "Multipleksery, switche, routery"
  ],
  correct: "Magnetowidy, karty VCR, rejestratory cyfrowe"
},

{
  category: "CCTV",
  question: "Które z rozwiązań technicznych do rejestracji obrazu jest najstarsze i obecnie już niebudowane?",
  answers: [
    "Rejestratory cyfrowe",
    "Karty VCR",
    "Magnetowidy",
    "Serwery NAS"
  ],
  correct: "Magnetowidy"
},

{
  category: "CCTV",
  question: "Na jakim nośniku zapisywany jest obraz w przypadku magnetowidów?",
  answers: [
    "Na dysku twardym",
    "Na kasecie",
    "Na karcie pamięci",
    "W pamięci RAM"
  ],
  correct: "Na kasecie"
},

{
  category: "CCTV",
  question: "Jaki jest zakres czasu nagrywania oferowany przez magnetowidy?",
  answers: [
    "Od 1 do 12 godzin",
    "Od 24 do 960 godzin",
    "Od 100 do 2000 godzin",
    "Nieograniczony"
  ],
  correct: "Od 24 do 960 godzin"
},

{
  category: "CCTV",
  question: "Gdzie rejestrowany jest obraz przy użyciu karty VCR?",
  answers: [
    "Na wbudowanej pamięci kamery",
    "Na twardym dysku komputera",
    "Na taśmie magnetycznej",
    "Na zewnętrznym serwerze FTP"
  ],
  correct: "Na twardym dysku komputera"
},

{
  category: "CCTV",
  question: "Od czego zależy długość zarejestrowanego materiału przy użyciu karty VCR?",
  answers: [
    "Tylko od pojemności dysku",
    "Od szybkości procesora",
    "Od rodzaju systemu operacyjnego",
    "Od długości kabla kamery"
  ],
  correct: "Tylko od pojemności dysku"
},

{
  category: "CCTV",
  question: "Jakie ryzyko wiąże się ze stosowaniem zwykłej karty VCR w komputerze?",
  answers: [
    "Ryzyko sabotażu (dostęp osób trzecich) lub niestabilność systemu",
    "Zbyt wysoki koszt zakupu komputera",
    "Konieczność częstej wymiany kaset",
    "Brak możliwości podłączenia więcej niż jednej kamery"
  ],
  correct: "Ryzyko sabotażu (dostęp osób trzecich) lub niestabilność systemu"
},

{
  category: "CCTV",
  question: "Czym charakteryzuje się profesjonalna odmiana urządzenia do zapisu cyfrowego?",
  answers: [
    "Jest to magnetowid z cyfrowym licznikiem",
    "Jest to rejestrator cyfrowy",
    "Jest to zwykły komputer z kartą sieciową",
    "Jest to kamera z wbudowanym dyskiem"
  ],
  correct: "Jest to rejestrator cyfrowy"
},

{
  category: "CCTV",
  question: "Z połączenia jakich elementów składa się rejestrator cyfrowy?",
  answers: [
    "Kamery i monitora",
    "Wielokanałowego multipleksera i dysku twardego",
    "Modemu i zasilacza awaryjnego",
    "Karty VCR i magnetowidu"
  ],
  correct: "Wielokanałowego multipleksera i dysku twardego"
},

{
  category: "CCTV",
  question: "Jaka jest główna zaleta rejestratora cyfrowego w porównaniu do kart VCR?",
  answers: [
    "Jest znacznie mniejszy",
    "Mała możliwość dostępu osób niepowołanych",
    "Nie wymaga zasilania elektrycznego",
    "Zapisuje obraz w kolorze"
  ],
  correct: "Mała możliwość dostępu osób niepowołanych"
},

{
  category: "CCTV",
  question: "W jaki sposób rejestratory cyfrowe są zabezpieczane przed nieautoryzowanym dostępem?",
  answers: [
    "Przez kody dostępu i obudowy zabezpieczone mechanicznie",
    "Przez ukrywanie ich w trudno dostępnych miejscach",
    "Przez odłączanie od prądu na noc",
    "Nie posiadają żadnych zabezpieczeń"
  ],
  correct: "Przez kody dostępu i obudowy zabezpieczone mechanicznie"
},

{
  category: "CCTV",
  question: "W jakich systemach stosuje się na ogół rejestratory cyfrowe?",
  answers: [
    "Tylko w domach prywatnych",
    "Tam, gdzie zastosowanie karty VCR byłoby ryzykowne",
    "Tylko w systemach z jedną kamerą",
    "W systemach niekorzystających z dysków twardych"
  ],
  correct: "Tam, gdzie zastosowanie karty VCR byłoby ryzykowne"
},

{
  category: "CCTV",
  question: "Jak określamy dyski w rejestratorach cyfrowych, które można łatwo zastąpić nowymi?",
  answers: [
    "Dyski stałe",
    "Dyski na ogół wymienne",
    "Karty VCR",
    "Kasety magnetyczne"
  ],
  correct: "Dyski na ogół wymienne"
},

{
  category: "CCTV",
  question: "Co może być przyczyną utraty danych w systemach opartych na kartach VCR?",
  answers: [
    "Niestabilne systemy operacyjne",
    "Zbyt duża ilość światła w pomieszczeniu",
    "Brak multipleksera",
    "Użycie dysku o zbyt dużej pojemności"
  ],
  correct: "Niestabilne systemy operacyjne"
},

{
  category: "CCTV",
  question: "Do czego służy rejestrator w systemie telewizji dozorowej?",
  answers: [
    "Do wyświetlania obrazu na żywo",
    "Do zapisu obrazu z kamer na nośniku danych",
    "Do zasilania kamer",
    "Do ustawiania ostrości w obiektywach"
  ],
  correct: "Do zapisu obrazu z kamer na nośniku danych"
},

{
  category: "CCTV",
  question: "Co oznacza skrót PoE w kontekście zasilania kamer IP?",
  answers: ["Power over Ethernet", "Point of Entry", "Power on Energy", "Position of Element"],
  correct: "Power over Ethernet"
},

{
  category: "CCTV",
  question: "Od czego zależy wybór typu urządzenia rejestrującego w systemie dozorowym?",
  answers: [
    "Od aktualnej ceny rynkowej",
    "Od indywidualnych potrzeb systemu",
    "Od wielkości monitora",
    "Od koloru obudowy kamer"
  ],
  correct: "Od indywidualnych potrzeb systemu"
},

{
  category: "CCTV",
  question: "Które urządzenie jest określane jako 'najmniej skomplikowane' pod względem technicznym?",
  answers: [
    "Karta VCR",
    "Magnetowid",
    "Rejestrator cyfrowy",
    "Serwer sieciowy"
  ],
  correct: "Magnetowid"
},

{
  category: "CCTV",
  question: "Z jakiego powodu karta VCR jest narażona na sabotaż poprzez internet?",
  answers: [
    "Przez brak wbudowanego antywirusa w kamerze",
    "Przez konieczność dostępu do komputera przez różnych użytkowników lub sieć",
    "Przez zbyt wolne połączenie kablowe",
    "Karty VCR nie łączą się z internetem"
  ],
  correct: "Przez konieczność dostępu do komputera przez różnych użytkowników lub sieć"
},

{
  category: "CCTV",
  question: "Które z wymienionych urządzeń jest nazywane 'profesjonalną odmianą' sprzętu do zapisu?",
  answers: [
    "Magnetowid poklatkowy",
    "Rejestrator cyfrowy",
    "Komputer z systemem Windows",
    "Karta VCR klasy Premium"
  ],
  correct: "Rejestrator cyfrowy"
},

{
  category: "CCTV",
  question: "Jaki element rejestratora cyfrowego odpowiada za obsługę wielu kanałów wideo jednocześnie?",
  answers: [
    "Dysk twardy",
    "Wielokanałowy multiplekser",
    "Obudowa mechaniczna",
    "Karta VCR"
  ],
  correct: "Wielokanałowy multiplekser"
},

{
  category: "CCTV",
  question: "W jakim przypadku karta VCR staje się rozwiązaniem ryzykownym?",
  answers: [
    "Gdy chcemy nagrywać w kolorze",
    "Gdy istnieje ryzyko sabotażu lub niestabilności systemu operacyjnego",
    "Gdy używamy dysku o pojemności mniejszej niż 1TB",
    "Gdy podłączamy tylko jedną kamerę"
  ],
  correct: "Gdy istnieje ryzyko sabotażu lub niestabilności systemu operacyjnego"
},

{
  category: "CCTV",
  question: "Co zapewnia możliwość rejestracji dużej ilości materiału w rejestratorach cyfrowych?",
  answers: [
    "Szybki procesor",
    "Zastosowanie zespołu dysków (często wymiennych)",
    "Użycie kaset o dużej gęstości",
    "Podłączenie do stabilnego internetu"
  ],
  correct: "Zastosowanie zespołu dysków (często wymiennych)"
},

{
  category: "CCTV",
  question: "Zabezpieczenie mechaniczne obudowy to cecha charakterystyczna dla:",
  answers: [
    "Magnetowidów domowych",
    "Rejestratorów cyfrowych",
    "Kart VCR montowanych w PC",
    "Wszystkich typów rejestratorów"
  ],
  correct: "Rejestratorów cyfrowych"
},

{
  category: "CCTV",
  question: "Dlaczego magnetowidy są obecnie uważane za rozwiązanie przestarzałe?",
  answers: [
    "Bo są zbyt drogie w eksploatacji",
    "Są najstarszym rozwiązaniem i nie są już budowane",
    "Zajmują zbyt dużo miejsca na biurku",
    "Nagrywają tylko przez 24 godziny"
  ],
  correct: "Są najstarszym rozwiązaniem i nie są już budowane"
},

{
  category: "CCTV",
  question: "Jaki rodzaj dostępu do danych w rejestratorach cyfrowych jest ograniczany przez kody dostępu?",
  answers: [
    "Dostęp fizyczny do obudowy",
    "Dostęp osób niepowołanych",
    "Dostęp serwisu technicznego",
    "Dostęp kamer do prądu"
  ],
  correct: "Dostęp osób niepowołanych"
},

{
  category: "CCTV",
  question: "Co nośnikiem danych dla karty VCR?",
  answers: [
    "Taśma magnetyczna",
    "Twardy dysk komputera",
    "Pamięć flash",
    "Chmura cyfrowa"
  ],
  correct: "Twardy dysk komputera"
},

{
  category: "CCTV",
  question: "Na jakie cztery główne rodzaje można podzielić rejestratory cyfrowe?",
  answers: [
    "Małe, średnie, duże i profesjonalne",
    "Analogowe, cyfrowe, internetowe i domowe",
    "DVR, hybrydowe, mobilne oraz sieciowe (NVR)",
    "Przewodowe, bezprzewodowe, radiowe i optyczne"
  ],
  correct: "DVR, hybrydowe, mobilne oraz sieciowe (NVR)"
},

{
  category: "CCTV",
  question: "Co oznacza skrót NVR w klasyfikacji rejestratorów?",
  answers: [
    "Cyfrowy rejestrator wideo",
    "Mobilny rejestrator wideo",
    "Hybrydowy rejestrator wideo",
    "Sieciowy rejestrator wideo"
  ],
  correct: "Sieciowy rejestrator wideo"
},

{
  category: "CCTV",
  question: "Od czego zależy podział rejestratorów na 4-, 8- czy 16-kanałowe?",
  answers: [
    "Od pojemności zamontowanego dysku",
    "Od liczby wejść rejestratora",
    "Od rozdzielczości podłączonych kamer",
    "Od długości kabli sygnałowych"
  ],
  correct: "Od liczby wejść rejestratora"
},

{
  category: "CCTV",
  question: "Jakimi cechami charakteryzują się rejestratory cyfrowe DVR?",
  answers: [
    "Są tanie i przeznaczone do prostych instalacji",
    "Są wyjątkowo niezawodne i stabilne",
    "Wymagają stałego połączenia z internetem",
    "Są przeznaczone wyłącznie do użytku domowego"
  ],
  correct: "Są wyjątkowo niezawodne i stabilne"
},

{
  category: "CCTV",
  question: "W jakich systemach wykorzystywane są rejestratory cyfrowe DVR?",
  answers: [
    "W amatorskich systemach alarmowych",
    "W profesjonalnych systemach telewizji przemysłowej",
    "Tylko w monitoringu mobilnym w pojazdach",
    "Wyłącznie w sieciach lokalnych LAN"
  ],
  correct: "W profesjonalnych systemach telewizji przemysłowej"
},

{
  category: "CCTV",
  question: "Co jest podstawową i najważniejszą funkcją rejestratora DVR?",
  answers: [
    "Wysokiej jakości rejestracja obrazów z kamer cyfrowych",
    "Szyfrowanie połączeń sieciowych",
    "Zasilanie kamer bezpośrednio z portów wideo",
    "Tworzenie kopii zapasowych w chmurze"
  ],
  correct: "Wysokiej jakości rejestracja obrazów z kamer cyfrowych"
},

{
  category: "CCTV",
  question: "Za co, oprócz rejestracji, odpowiedzialne są rejestratory cyfrowe?",
  answers: [
    "Za czyszczenie obiektywów kamer",
    "Za wyświetlanie obrazu z kamer na monitorach CCTV",
    "Za regulację ogniskowej w obiektywach",
    "Za wykrywanie pożaru w serwerowni"
  ],
  correct: "Za wyświetlanie obrazu z kamer na monitorach CCTV"
},

{
  category: "CCTV",
  question: "Z jakich kamer rejestruje obraz urządzenie typu DVR według opisu?",
  answers: [
    "Z kamer analogowych",
    "Z kamer cyfrowych",
    "Z kamer termowizyjnych",
    "Z kamer atrapy"
  ],
  correct: "Z kamer cyfrowych"
},

{
  category: "CCTV",
  question: "Skrót DVR odnosi się do rejestratora:",
  answers: [
    "Sieciowego",
    "Hybrydowego",
    "Cyfrowego",
    "Mobilnego"
  ],
  correct: "Cyfrowego"
},

{
  category: "CCTV",
  question: "Która z wymienionych konfiguracji kanałów jest najniższą wymienioną na slajdzie?",
  answers: [
    "1-kanałowe",
    "2-kanałowe",
    "4-kanałowe",
    "6-kanałowe"
  ],
  correct: "4-kanałowe"
},

{
  category: "CCTV",
  question: "Ile różnych typów rejestratorów cyfrowych wymieniono w podziale?",
  answers: [
    "3",
    "4",
    "5",
    "6"
  ],
  correct: "4"
},

{
  category: "CCTV",
  question: "Jakie urządzenia rejestrujące są dedykowane do pracy w ruchu (np. w transporcie)?",
  answers: [
    "Sieciowe rejestratory wideo (NVR)",
    "Mobilne rejestratory wideo",
    "Cyfrowe rejestratory wideo (DVR)",
    "Hybrydowe rejestratory wideo"
  ],
  correct: "Mobilne rejestratory wideo"
},

{
  category: "CCTV",
  question: "Gdzie wyświetlany jest obraz z kamer obsługiwanych przez rejestrator DVR?",
  answers: [
    "Na smartfonach użytkowników",
    "Na monitorach CCTV",
    "Na dyskach twardych",
    "W przeglądarkach internetowych"
  ],
  correct: "Na monitorach CCTV"
},

{
  category: "CCTV",
  question: "Który typ rejestratora łączy w sobie cechy różnych systemów (zgodnie z nazwą)?",
  answers: [
    "Cyfrowy rejestrator wideo",
    "Hybrydowy rejestrator wideo",
    "Sieciowy rejestrator wideo",
    "Mobilny rejestrator wideo"
  ],
  correct: "Hybrydowy rejestrator wideo"
},

{
  category: "CCTV",
  question: "Jak nazywa się typ rejestratora cyfrowego oznaczany skrótem NVR?",
  answers: [
    "Cyfrowy rejestrator wideo",
    "Hybrydowy rejestrator wideo",
    "Mobilny rejestrator wideo",
    "Sieciowy rejestrator wideo"
  ],
  correct: "Sieciowy rejestrator wideo"
},

{
  category: "CCTV",
  question: "Co decyduje o klasyfikacji rejestratora jako urządzenie 4-, 8- lub 16-kanałowe?",
  answers: [
    "Pojemność zainstalowanych dysków twardych",
    "Liczba wejść umożliwiających podłączenie kamer",
    "Maksymalna rozdzielczość obsługiwanych obrazów",
    "Liczba monitorów, które można podłączyć do urządzenia"
  ],
  correct: "Liczba wejść umożliwiających podłączenie kamer"
},

{
  category: "CCTV",
  question: "Który typ rejestratora jest dedykowany do pracy w profesjonalnych systemach telewizji przemysłowej ze względu na wysoką niezawodność?",
  answers: [
    "Komputerowa karta VCR",
    "Cyfrowy rejestrator wideo (DVR)",
    "Magnetowid poklatkowy",
    "Domowy serwer plików"
  ],
  correct: "Cyfrowy rejestrator wideo (DVR)"
},

{
  category: "CCTV",
  question: "Jakie jest główne zadanie rejestratora cyfrowego DVR w systemie monitoringu?",
  answers: [
    "Wyłącznie zasilanie podłączonych kamer",
    "Wysokiej jakości rejestracja obrazów z kamer",
    "Automatyczne czyszczenie obiektywów",
    "Szyfrowanie połączeń internetowych"
  ],
  correct: "Wysokiej jakości rejestracja obrazów z kamer"
},

{
  category: "CCTV",
  question: "Oprócz zapisu obrazu, rejestrator cyfrowy odpowiada w systemie za:",
  answers: [
    "Produkcję energii dla kamer",
    "Wyświetlanie obrazu na monitorach CCTV",
    "Regulację kątów widzenia obiektywów",
    "Wykrywanie pożaru w budynku"
  ],
  correct: "Wyświetlanie obrazu na monitorach CCTV"
},

{
  category: "CCTV",
  question: "Do jakich zastosowań przeznaczone są mobilne rejestratory wideo?",
  answers: [
    "Do dużych centrów handlowych",
    "Do pracy w systemach zamontowanych w ruchu (np. transport)",
    "Do monitoringu stacjonarnych parkingów podziemnych",
    "Wyłącznie do domowych systemów bezprzewodowych"
  ],
  correct: "Do pracy w systemach zamontowanych w ruchu (np. transport)"
},

{
  category: "CCTV",
  question: "Który rodzaj rejestratora pozwala na łączenie różnych technologii zapisu w jednym urządzeniu?",
  answers: [
    "Cyfrowy rejestrator wideo (DVR)",
    "Hybrydowy rejestrator wideo",
    "Sieciowy rejestrator wideo (NVR)",
    "Mobilny rejestrator wideo"
  ],
  correct: "Hybrydowy rejestrator wideo"
},

{
  category: "CCTV",
  question: "Jakie rodzaje kamer może jednocześnie obsługiwać rejestrator hybrydowy?",
  answers: [
    "Wyłącznie stare kamery analogowe",
    "Tylko nowoczesne kamery IP",
    "Zarówno kamery analogowe, jak i kamery IP",
    "Wyłącznie kamery bezprzewodowe Wi-Fi"
  ],
  correct: "Zarówno kamery analogowe, jak i kamery IP"
},

{
  category: "CCTV",
  question: "W jakie wyjścia wideo najczęściej wyposażone są rejestratory hybrydowe?",
  answers: [
    "Tylko wyjścia antenowe RF",
    "Wyjścia VGA oraz HDMI",
    "Wyłącznie porty USB",
    "Tylko wejścia typu Eurozłącze (SCART)"
  ],
  correct: "Wyjścia VGA oraz HDMI"
},

{
  category: "CCTV",
  question: "Użycie którego złącza pozwala na śledzenie pracy kamer na nowoczesnym telewizorze?",
  answers: [
    "Złącza RS-485",
    "Złącza LAN",
    "Złącza HDMI",
    "Złącza Audio In"
  ],
  correct: "Złącza HDMI"
},

{
  category: "CCTV",
  question: "Ile wejść wideo typu BNC (VIDEO IN) posiada rejestrator przedstawiony na zdjęciu?",
   image: "img/CCTV/wideo_rejestrator.png", // Tutaj podajesz link lub nazwę pliku
  answers: [
    "1 wejście",
    "2 wejścia",
    "4 wejścia",
    "8 wejść"
  ],
  correct: "1 wejście"
},

{
  category: "CCTV",
  question: "Do czego służy złącze LAN widoczne na panelu tylnym rejestratora?",
  answers: [
    "Do podłączenia zasilania 12V",
    "Do podłączenia kamer IP lub sieci komputerowej",
    "Do przesyłania dźwięku do głośników",
    "Do podłączenia myszki komputerowej"
  ],
  correct: "Do podłączenia kamer IP lub sieci komputerowej"
},

{
  category: "CCTV",
  question: "Które złącze na panelu służy do sterowania kamerami obrotowymi (PTZ)?",
  answers: [
    "VGA",
    "RS-485",
    "HDMI",
    "AUDIO OUT"
  ],
  correct: "RS-485"
},

{
  category: "CCTV",
  question: "Jakie dwa główne typy mocowań obiektywów spotyka się obecnie w kamerach?",
  answers: [
    "Typ A i Typ B",
    "Typ C i Typ CS",
    "Typ S i Typ L",
    "Typ X i Typ Z"
  ],
  correct: "Typ C i Typ CS"
},


{
  category: "CCTV",
  question: "Jaka jest odległość obiektywu od powierzchni przetwornika w mocowaniu typu CS?",
  answers: [
    "10,0 mm",
    "12,5 mm",
    "15,0 mm",
    "17,526 mm"
  ],
  correct: "12,5 mm"
},

{
  category: "CCTV",
  question: "Odległość obiektywu od przetwornika dla mocowania typu C wynosi:",
  answers: [
    "12,5 mm",
    "17,526 mm",
    "19,0 mm",
    "25,4 mm"
  ],
  correct: "17,526 mm"
},

{
  category: "CCTV",
  question: "Który typ mocowania obiektywu jest obecnie częściej spotykany w monitoringu?",
  answers: [
    "Mocowanie typu C",
    "Mocowanie typu CS",
    "Mocowanie bagnetowe",
    "Mocowanie gwintowe M12"
  ],
  correct: "Mocowanie typu CS"
},

{
  category: "CCTV",
  question: "Z czego wynika większa uniwersalność mocowania typu CS?",
  answers: [
    "Z możliwości montażu większych soczewek",
    "Z możliwości zmiany na mocowanie C poprzez zastosowanie pierścienia",
    "Z mniejszej wagi obiektywów",
    "Z braku konieczności ustawiania ostrości"
  ],
  correct: "Z możliwości zmiany na mocowanie C poprzez zastosowanie pierścienia"
},

{
  category: "CCTV",
  question: "Czym różnią się od siebie standardy mocowań C i CS?",
  answers: [
    "Średnicą gwintu obiektywu",
    "Odległością obiektywu od powierzchni przetwornika obrazu",
    "Rodzajem użytego materiału (metal/plastik)",
    "Sposobem zasilania przysłony"
  ],
  correct: "Odległością obiektywu od powierzchni przetwornika obrazu"
},

{
  category: "CCTV",
  question: "Czy możliwe jest przekształcenie mocowania typu C na mocowanie CS?",
  answers: [
    "Tak, za pomocą pierścienia",
    "Tak, po wymianie przetwornika",
    "Nie, taka relacja nie zachodzi",
    "Tak, ale tylko w kamerach analogowych"
  ],
  correct: "Nie, taka relacja nie zachodzi"
},

{
  category: "CCTV",
  question: "Ile wejść wideo typu BNC (VIDEO IN) posiada rejestrator przedstawiony na zdjęciu ? ",
  image: "img/CCTV/wideo_rejestrator_hybrydowy.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["8", "9", "10", "18"],
  correct: "8"
},

{
  category: "CCTV",
  question: "Złączem oznaczonym numerem 3 na zdjęciu panelu tylnego rejestratora jest:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Złącze VGA", "Złącze HDMI", "Złącze USB", "Złącze BNC"],
  correct: "Złącze HDMI"
},

{
  category: "CCTV",
  question: "Co zostało zaznaczone liczbą 4 na zdjęciu panelu tylnego rejestratora?",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Wyjście wideo VGA", "Port szeregowy RS-232", "Wejście Audio", "Gniazdo zasilania"],
  correct: "Wyjście wideo VGA"
},

{
  category: "CCTV",
  question: "Liczba 7 na zdjęciu wskazuje na:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Złącze USB", "Gniazdo sieciowe LAN (RJ45)", "Wejście mikrofonowe", "Złącze alarmowe"],
  correct: "Gniazdo sieciowe LAN (RJ45)"
},

{
  category: "CCTV",
  question: "Złącza oznaczone numerami 5 i 6 służą do obsługi:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Sygnału wideo", "Zasilania kamer", "Sygnału audio (wejście/wyjście)", "Sterowania kamerami PTZ"],
  correct: "Sygnału audio (wejście/wyjście)"
},

{
  category: "CCTV",
  question: "Zielone złącze zaciskowe oznaczone liczbą 8 na zdjęciu to zazwyczaj:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Złącze RS-485 do sterowania kamerami", "Dodatkowe wyjście HDMI", "Port USB 3.0", "Główne złącze zasilania"],
  correct: "Złącze RS-485 do sterowania kamerami"
},

{
  category: "CCTV",
  question: "Co zostało wskazane numerem 2 na panelu tylnym?",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Port eSATA", "Złącze HDMI", "Port USB", "Wyjście monitorowe BNC"],
  correct: "Port USB"
},

{
  category: "CCTV",
  question: "Długa listwa zaciskowa oznaczona numerem 10 służy do podłączenia:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Wielu monitorów VGA", "Wejść i wyjść alarmowych", "Dodatkowych dysków twardych", "Zasilania dla wszystkich kamer"],
  correct: "Wejść i wyjść alarmowych"
},

{
  category: "CCTV",
  question: "Ile wejść wideo typu BNC posiada ten rejestrator?",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["4 wejścia", "8 wejść", "16 wejść", "32 wejścia"],
  correct: "8 wejść"
},

{
  category: "CCTV",
  question: "Złącze oznaczone numerem 9 na zdjęciu służy do podłączenia:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Zasilania rejestratora", "Klawiatury sterującej", "Myszki komputerowej", "Drugiego monitora"],
  correct: "Zasilania rejestratora"
},

{
  category: "CCTV",
  question: "Którym numerem na zdjęciu oznaczono wyjście wideo HDMI?",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Numerem 2", "Numerem 3", "Numerem 4", "Numerem 7"],
  correct: "Numerem 3"
},

{
  category: "CCTV",
  question: "Złącze oznaczone numerem 5 to :",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Wejście wideo", "Wejście audio", "Złącze zasilania", "wyjście audio"],
  correct: "Wejście audio"
},

{
  category: "CCTV",
  question: "Numer 6 na zdjęciu wskazuje białe gniazdo RCA, które służy jako:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Wyjście wideo", "Wyjście audio", "Port LAN", "Złącze RS-485"],
  correct: "Wyjście audio"
},

{
  category: "CCTV",
  question: "Którym numerem oznaczono port LAN służący do połączenia rejestratora z internetem lub kamerami IP?",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["Numerem 4", "Numerem 7", "Numerem 9", "Numerem 10"],
  correct: "Numerem 7"
},

{
  category: "CCTV",
  question: "Liczba 10 na zdjęciu wskazuje blok wejść/wyjść alarmowych. Służą one do:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: [
    "Zasilania rejestratora w trybie awaryjnym",
    "Podłączenia czujek zewnętrznych lub sygnalizatorów",
    "Przesyłania obrazu na bardzo duże odległości",
    "Podłączenia dodatkowych dysków zewnętrznych"
  ],
  correct: "Podłączenia czujek zewnętrznych lub sygnalizatorów"
},

{
  category: "CCTV",
  question: "Złącze numer 4  służy do podłączenia monitora w standardzie:",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["HDMI", "BNC", "VGA", "LAN"],
  correct: "VGA"
},

{
  category: "CCTV",
  question: "Złącze numer 4  to ",
  image: "img/CCTV/wideo_rejestrator_hybrydowy2.png",
  answers: ["D-Sub", "O-Sub", "T-Sub", "B-Sub"],
  correct: "D-Sub"
},

{
  category: "CCTV",
  question: "Gdzie najczęściej montowane są rejestratory mobilne?",
  answers: [
    "W serwerowniach budynków biurowych",
    "W pojazdach mechanicznych",
    "Wyłącznie w domach jednorodzinnych",
    "W szafach RACK na zewnątrz obiektów"
  ],
  correct: "W pojazdach mechanicznych"
},

{
  category: "CCTV",
  question: "Jaki element rejestratora mobilnego umożliwia uzyskanie wysokiej jakości obrazu przy wąskim strumieniu transmisji?",
  answers: [
    "Duża liczba wejść sygnałowych",
    "Nowoczesny system kompresji plików wideo i audio",
    "Zastosowanie dysków o dużej prędkości obrotowej",
    "Wbudowany wzmacniacz sygnału analogowego"
  ],
  correct: "Nowoczesny system kompresji plików wideo i audio"
},

{
  category: "CCTV",
  question: "Jakie procesy może jednocześnie realizować wielofunkcyjny rejestrator mobilny?",
  answers: [
    "Tylko zapis i podgląd na żywo",
    "Podgląd w czasie rzeczywistym, zapis oraz odtwarzanie",
    "Wyłącznie archiwizację danych na nośnikach zewnętrznych",
    "Transmisję obrazu bez możliwości jego zapisu"
  ],
  correct: "Podgląd w czasie rzeczywistym, zapis oraz odtwarzanie"
},

{
  category: "CCTV",
  question: "Zastosowanie nowoczesnego rejestratora mobilnego w systemie CCTV gwarantuje:",
  answers: [
    "Brak konieczności zasilania kamer",
    "Pełną synchronizację ścieżki audio i wideo",
    "Zastosowanie wyłącznie kamer bezprzewodowych",
    "Ograniczenie zasięgu transmisji danych"
  ],
  correct: "Pełną synchronizację ścieżki audio i wideo"
},

{
  category: "CCTV",
  question: "Która z wymienionych funkcji jest standardem w nowoczesnych rejestratorach mobilnych?",
  answers: [
    "Pełna transmisja danych w sieci",
    "Ręczne ustawianie ostrości w kamerach",
    "Brak kompresji plików wideo",
    "Możliwość zapisu wyłącznie obrazu bez dźwięku"
  ],
  correct: "Pełna transmisja danych w sieci"
},

{
  category: "CCTV",
  question: "jak nazwya sie rejestrator przedstawiony na zdjęciu ?",
  image: "img/CCTV/wideo_rejestrator_mobilny.png",
  answers: ["mobilny", "sieciowy", "hybrydowy", "DVR"],
  correct: "mobilny"
},

{
  category: "CCTV",
  question: "Jak nazywa się niezależne urządzenie służące do zarządzania kamerami IP?",
  answers: [
    "Rejestrator DVR",
    "Rejestrator sieciowy NVR",
    "Magnetowid poklatkowy",
    "Multiplekser analogowy"
  ],
  correct: "Rejestrator sieciowy NVR"
},

{
  category: "CCTV",
  question: "Jaki parametr należy skonfigurować w kamerach IP po ich podłączeniu do sieci?",
  answers: [
    "Numer seryjny obiektywu",
    "Odpowiednie adresy IP",
    "Długość kabla koncentrycznego",
    "Częstotliwość odświeżania monitora"
  ],
  correct: "Odpowiednie adresy IP"
},

{
  category: "CCTV",
  question: "Jaka jest maksymalna rozdzielczość rejestracji dla standardowych systemów DVR?",
  answers: [
    "CIF (352 x 288)",
    "D1 (720 x 576)",
    "Full HD (1920 x 1080)",
    "4K (3840 x 2160)"
  ],
  correct: "D1 (720 x 576)"
},

{
  category: "CCTV",
  question: "Który typ rejestratora umożliwia zapis obrazu z kamer megapikselowych?",
  answers: [
    "Standardowy rejestrator DVR",
    "Rejestrator sieciowy NVR",
    "Magnetowid VCR",
    "Karta VCR montowana w komputerze"
  ],
  correct: "Rejestrator sieciowy NVR"
},

{
  category: "CCTV",
  question: "Główną różnicą w architekturze systemów analogowych i IP jest:",
  answers: [
    "Rodzaj obudowy rejestratora",
    "Elastyczność połączeń między kamerami a rejestratorem",
    "Liczba przycisków na panelu przednim",
    "Kolor diod sygnalizacyjnych"
  ],
  correct: "Elastyczność połączeń między kamerami a rejestratorem"
},

{
  category: "CCTV",
  question: "Jakiego okablowania wymaga każda kamera w tradycyjnym systemie analogowym?",
  answers: [
    "Kabla światłowodowego",
    "Kabla koncentrycznego",
    "Kabla telefonicznego",
    "Wyłącznie zasilania bezprzewodowego"
  ],
  correct: "Kabla koncentrycznego"
},

{
  category: "CCTV",
  question: "Budowanie systemu opartego na urządzeniach w dowolnej odległości jest możliwe w przypadku:",
  answers: [
    "Kamer analogowych",
    "Kamer IP",
    "Magnetowidów poklatkowych",
    "Kart VCR"
  ],
  correct: "Kamer IP"
},

{
  category: "CCTV",
  question: "Rozdzielczość D1 (720 x 576) jest charakterystyczna dla standardu:",
  answers: [
    "NTSC",
    "PAL",
    "IP",
    "Megapikselowego"
  ],
  correct: "PAL"
},

{
  category: "CCTV",
  question: "Dlaczego standardowy rejestrator DVR nie nadaje się do kamer megapikselowych?",
  answers: [
    "Ma zbyt mały dysk twardy",
    "Nie obsługuje wymaganej rozdzielczości rejestracji",
    "Nie posiada wejść BNC",
    "Nagrywa obraz tylko na kasetach"
  ],
  correct: "Nie obsługuje wymaganej rozdzielczości rejestracji"
},

{
  category: "CCTV",
  question: "Zarządzanie kamerami IP odbywa się za pomocą:",
  answers: [
    "Rejestratora NVR",
    "Rejestratora DVR",
    "Zwykłego magnetowidu",
    "Wyłącznie monitora CCTV"
  ],
  correct: "Rejestratora NVR"
},

{
  category: "CCTV",
  question: "Które stwierdzenie dotyczące odległości urządzeń w systemach IP jest prawdziwe?",
  answers: [
    "Kamery muszą być blisko rejestratora",
    "System można budować w oparciu o urządzenia w dowolnej odległości",
    "Odległość zależy tylko od typu obiektywu",
    "Maksymalna odległość to zawsze 10 metrów"
  ],
  correct: "System można budować w oparciu o urządzenia w dowolnej odległości"
},

{
  category: "CCTV",
  question: "Skrót NVR oznacza:",
  answers: [
    "Native Video Recorder",
    "Network Video Recorder",
    "Node Video Register",
    "New Visual Record"
  ],
  correct: "Network Video Recorder"
},

{
  category: "CCTV",
  question: "literą (A) zaznaczono ",
  image: "img/CCTV/waska_glembia_ostrosci.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["odległość ostrzenia", "odległość eliminacji złego oświetlenia", "głębie ostości", "długość martwego punktu"],
  correct: "odległość ostrzenia"
},

{
  category: "CCTV",
  question: "literą (B) zaznaczono ",
  image: "img/CCTV/waska_glembia_ostrosci.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["odległość ostrzenia", "odległość eliminacji złego oświetlenia", "głębie ostrości", "długość martwego punktu"],
  correct: "głębie ostrości"
},

{
  category: "CCTV",
  question: "jaką głębie ostrości przedstawia obraz ? ",
  image: "img/CCTV/waska_glembia_ostrosci.png", // Tutaj podajesz link lub nazwę pliku
  answers: ["wąską", "szeroką", "zmienną", "krótką"],
  correct: "wąską"
},

{
    category: "CCTV",
    question: "Wyjaśnij, czym różni się kamera stałoogniskowa od kamery z obiektywem typu moto-zoom.",
    correct: "Kamera stałoogniskowa ma stały kąt widzenia. Moto-zoom pozwala na zdalną regulację ogniskowej (zoom) i ostrości.",
},

{
    category: "CCTV",
    question: "Podaj trzy najważniejsze różnice między standardem zapisu H.264 a H.265 (HEVC).",
    correct: "1. H.265 oferuje do 50% lepszą kompresję. 2. H.265 wymaga większej mocy obliczeniowej. 3. H.265 lepiej radzi sobie z rozdzielczościami 4K i 8K.",
    image: "" 
},


];
