document.getElementById("imgRatio").addEventListener("input", function() {
    document.getElementById("ratioVal").textContent = this.value + "%";
});

/////////////////////// BAZA ///////////////////////
const database = [
...fizyka,
...elektronika,
...instalacje,
...instalacje_CCTV,
...satelity,
...matematyka
];

/////////////////////// ALIASY ///////////////////////
const categoryMap = {
"instalacje elektryczne":["ie","elektryk","instalacje","elektryczne","instalacje elektryczne","instlaje elektryczne"],
"elektronika":["elektronika","elektronika","elektronik","uklady","układy","elektrony","el","a","e"],
"fizyka":["fiz","fizyka","fizunia"],
"CCTV":["CCTV","instlacje dozorowe","monitoring"],
"SAT": ["sat", "satelita", "tvsat", "anteny", "telewizja satelitarna"],
"Matematyka":["matematyka", "matematusia", "mat", "Mat", "Matma"]
};

/////////////////////// STATE ///////////////////////
let questions=[];
let i=0;
let score=0;
let lock=false;
let exam=false;
let buttons=[];

/////////////////////// NORMALIZACJA ///////////////////////
function normalize(t){
return t.toLowerCase()
.replace(/ą/g,"a")
.replace(/ć/g,"c")
.replace(/ę/g,"e")
.replace(/ł/g,"l")
.replace(/ń/g,"n")
.replace(/ó/g,"o")
.replace(/ś/g,"s")
.replace(/ż/g,"z")
.replace(/ź/g,"z")
.trim();
}

/////////////////////// MATCH ///////////////////////
function matchCategory(input, questionCategory) {
  if (!input || !questionCategory) return false;

  // 1. To co wpisałeś w mikserze (np. "układy, fiz")
  const searchTerms = input.split(",").map(s => normalize(s.trim()).toLowerCase());
  // 2. To co jest w bazie danych (np. "elektronika")
  const qCat = normalize(questionCategory).toLowerCase();

  return searchTerms.some(term => {
    // A. Sprawdzenie bezpośrednie: czy wpisane słowo to kategoria w bazie?
    if (term === qCat) return true;

    // B. Przeszukiwanie całej mapy aliasów:
    // Sprawdzamy każdy klucz w Twoim categoryMap
    for (let mainCat in categoryMap) {
      // Pobieramy listę aliasów dla danego klucza i normalizujemy je
      let aliases = categoryMap[mainCat].map(a => normalize(a).toLowerCase());
      
      // Jeśli wpisane słowo (term) jest na tej liście
      if (aliases.includes(term)) {
        // ...to sprawdź, czy kategoria pytania (qCat) pasuje do głównej kategorii LUB któregokolwiek aliasu
        let mainCatNormalized = normalize(mainCat).toLowerCase();
        if (qCat === mainCatNormalized || aliases.includes(qCat)) {
          return true;
        }
      }
    }
    return false;
  });
}
/////////////////////// START ///////////////////////
function start(){

  // RESET KÓŁ RATUNKOWYCH
  audienceUsed = false;
  fiftyUsed = false;

  const b50 = document.getElementById("fiftyBtn");
  const bAud = document.getElementById("audienceBtn");

  if(b50){
    b50.disabled = false;
    b50.classList.remove("used");
    b50.style = "";
  }

  if(bAud){
    bAud.disabled = false;
    bAud.classList.remove("used");
    bAud.style = "";
  }

  exam = document.getElementById("exam").checked;

  let cat = document.getElementById("category").value;
  let count = parseInt(document.getElementById("count").value);

  // --- START SPRAWIEDLIWEJ PODMIANY Z SUWAKIEM ---
  let imgRatio = parseInt(document.getElementById("ratioInput").value) / 100;
  
  // 1. Rozpoznajemy wybrane kategorie (mikser)
  let selectedCats = cat.split(",").map(s => s.trim()).filter(s => s !== "");
  let finalSelection = [];
  
  // Obliczamy ile łącznie chcemy obrazków i tekstów
  let imgGoalTotal = Math.floor(count * imgRatio);
  let textGoalTotal = count - imgGoalTotal;

  // 2. Dzielimy limity sprawiedliwie na każdą kategorię
  let imgPerCat = Math.floor(imgGoalTotal / selectedCats.length) || 0;
  let textPerCat = Math.floor(textGoalTotal / selectedCats.length) || 0;

  // Koszyki na resztki (do dopełniania)
  let remainingImages = [];
  let remainingTexts = [];

  selectedCats.forEach(catName => {
    // Filtrujemy bazę dla danej kategorii
    let pool = database.filter(q => matchCategory(catName, q.category) && q.answers && q.answers.length > 0);
    
    let catImgs = shuffle(pool.filter(q => q.image));
    let catTexts = shuffle(pool.filter(q => !q.image));

    // Pobieramy sprawiedliwą porcję
    let pickedImgs = catImgs.slice(0, imgPerCat);
    let pickedTexts = catTexts.slice(0, textPerCat);

    finalSelection.push(...pickedImgs, ...pickedTexts);

    // Zapisujemy to, czego nie użyliśmy (do późniejszego dopełnienia)
    remainingImages.push(...catImgs.slice(imgPerCat));
    remainingTexts.push(...catTexts.slice(textPerCat));
  });

  // 3. RATUNEK: Dopełnianie do limitów (jeśli małe kategorie się skończyły)
  
  // Czy brakuje nam jeszcze zdjęć do limitu z suwaka?
  let currentImgCount = finalSelection.filter(q => q.image).length;
  if (currentImgCount < imgGoalTotal) {
    let diff = imgGoalTotal - currentImgCount;
    let extraImgs = shuffle(remainingImages).slice(0, diff);
    finalSelection.push(...extraImgs);
    remainingImages = remainingImages.filter(q => !extraImgs.includes(q));
  }

  // Czy brakuje nam jeszcze pytań do całkowitego limitu (count)?
  if (finalSelection.length < count) {
    let diff = count - finalSelection.length;
    let combinedRest = [...remainingImages, ...remainingTexts];
    finalSelection.push(...shuffle(combinedRest).slice(0, diff));
  }

  // Finalny wynik losowania
  questions = shuffle(finalSelection);

  if(questions.length === 0){
    alert("Brak pytań");
    return;
  }
  // --- KONIEC SPRAWIEDLIWEJ PODMIANY ---

  i = 0;
  score = 0;

  load();
  document.getElementById("audienceBox").style.display = "none";
  document.getElementById("audienceBox").innerHTML = "";
}
/////////////////////// LOAD ///////////////////////
document.getElementById("reportBtn").style.display = "block";
function load(){
  hideNextButton();
  clearZoom(); 
  // reset wykresu publiczności
  let box = document.getElementById("audienceBox");
  if(box){
    box.style.display = "none";
    box.innerHTML = "";
  }

  lock=false;
  buttons = [];

  let q=questions[i];
  document.getElementById("q").textContent=q.question;

    // --- OBSŁUGA ZDJĘCIA ---
  let imgElement = document.getElementById("q-img");
  if (imgElement) {
    if (q.image) {
      imgElement.src = q.image;
      imgElement.style.display = "block"; // Pokaż jeśli jest zdjęcie
    } else {
      imgElement.src = "";
      imgElement.style.display = "none";  // Ukryj jeśli nie ma zdjęcia
    }
  }

  let boxAns=document.getElementById("a");
  boxAns.innerHTML="";

  shuffle(q.answers).forEach(ans=>{
    let b=document.createElement("button");
    b.textContent=ans;
    b.onclick=()=>check(b,ans);

    buttons.push(b);
    boxAns.appendChild(b);
  });

  document.getElementById("info").textContent=
  `Pytanie ${i+1}/${questions.length} | Punkty: ${score}`;
}

/////////////////////// CHECK ///////////////////////
function check(btn, ans){
  if(lock) return;
  lock=true;

  let correct = questions[i].correct;

  buttons.forEach(b=>{
    if(b.textContent === correct){
      b.classList.add("correct");
    }
  });

  if(ans !== correct){
    btn.classList.add("incorrect");
  } else {
    score++;
  }
  showNextButton();
}
/////////////////////// NEXT ///////////////////////
function next(){
i++;
if(i<questions.length) load();
else end();
}
function showNextButton() {
  let nextBtn = document.getElementById("manualNextBtn");
  if (!nextBtn) {
    nextBtn = document.createElement("button");
    nextBtn.id = "manualNextBtn";
    nextBtn.innerHTML = "Dalej ➔";
    
    // Zmieniony styl: usunięto display:block i marginesy auto, dodano margines boczny
    nextBtn.style = "background: #364c63; color: white; padding: 10px 20px; font-size: 16px; border: 2px solid #000; cursor: pointer; font-family: Garamond, serif; margin-left: 10px;";
    
    nextBtn.onclick = next;

    // KLUCZOWA ZMIANA: Dodajemy do kontenera przycisków, a nie do całego .container
    document.getElementById("buttons-container").appendChild(nextBtn);
  }
  nextBtn.style.display = "inline-block"; // inline-block pozwoli mu stać w linii
}

function hideNextButton() {
  let nextBtn = document.getElementById("manualNextBtn");
  if (nextBtn) nextBtn.style.display = "none";
}
/////////////////////// END ///////////////////////
function end(){
let p=score/questions.length;

save(score);

alert(exam
? (p>=0.6 ? "ZDANE 🎓 : " : "NIEZDANE ❌ : ") + Math.round(p*100)+"%"
: "Wynik: "+score);
}

/////////////////////// RANKING ///////////////////////
// --- ZAPISYWANIE WYNIKU ---
function save(s) {
    let r = JSON.parse(localStorage.getItem("rank")) || [];
    let cat = document.getElementById("category").value || "Ogólny";
    
    // Zbieramy informację o użytych kołach
    let usedHelps = [];
    if (typeof audienceUsed !== 'undefined' && audienceUsed) usedHelps.push("Publiczność");
    if (typeof fiftyUsed !== 'undefined' && fiftyUsed) usedHelps.push("50/50");

    let entry = {
        score: s,
        total: questions.length,
        percent: Math.round((s / questions.length) * 100),
        date: new Date().toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
        category: cat,
        helps: usedHelps.length > 0 ? usedHelps.join(", ") : "Brak"
    };

    r.push(entry);
    r.sort((a, b) => b.percent - a.percent); // Sortowanie od najlepszych (%)
    localStorage.setItem("rank", JSON.stringify(r.slice(0, 10))); // Tylko top 10
}

// --- WYŚWIETLANIE RANKINGU ---
function showRank() {
    let r = JSON.parse(localStorage.getItem("rank")) || [];
    const container = document.getElementById("rankListContainer");
    const modal = document.getElementById("rankModal");
    
    container.innerHTML = "";
    
    if (r.length === 0) {
        container.innerHTML = "<p style='color:#7f8c8d; padding:20px;'>Brak zapisanych wyników. Czas na Twój pierwszy test!</p>";
    } else {
        r.forEach((res, index) => {
            let trophy = index === 0 ? "🥇 " : index === 1 ? "🥈 " : index === 2 ? "🥉 " : "🔹 ";
            
            const div = document.createElement("div");
            div.className = "rank-entry";
            div.innerHTML = `
                <span class="rank-date">${res.date}</span>
                <div style="font-weight:bold; font-size:16px;">
                    ${trophy} ${index + 1}. ${res.percent}% <span style="font-weight:normal; color:#7f8c8d; font-size:13px;">(${res.score}/${res.total})</span>
                </div>
                <div style="font-size:12px; margin-top:5px; color:#34495e;">
                    📁 Kat: <strong>${res.category}</strong>
                </div>
                <span class="help-badge">🆘 Koła: ${res.helps}</span>
            `;
            container.appendChild(div);
        });
    }
    
    modal.style.display = "flex";
}

// --- CZYSZCZENIE RANKINGU ---
function clearRank() {
    if (confirm("Czy na pewno chcesz wyczyścić historię wyników?")) {
        localStorage.removeItem("rank");
        showRank(); // Odśwież widok
    }
}
//////////////////// THEME ///////////////////////
function toggleTheme(){
document.body.classList.toggle("dark");
}

/////////////////////// SHUFFLE ///////////////////////
function shuffle(a){
return a.sort(()=>Math.random()-0.5);
}

/////////////////////// PUBLICZNOŚĆ ///////////////////////
function audienceHelp(){

  if(!buttons || buttons.length === 0){
    alert("Najpierw kliknij START!");
    return;
  }

  if(audienceUsed) return;
  audienceUsed = true;

  let btn = document.getElementById("audienceBtn");
  btn.classList.add("used");
  btn.disabled = true;

  let box = document.getElementById("audienceBox");
  box.style.display = "block";
  box.innerHTML = ""; // czyść stare

  let q = questions[i];
  let correct = q.correct;

  let options = buttons.map(b => b.textContent);

  let correctIndex = options.indexOf(correct);

  let result = {};

 let correctPercent = rand(50, 80);
let remaining = 100 - correctPercent;

let wrongIndexes = options
  .map((_, idx)=>idx)
  .filter(idx => idx !== correctIndex);

// losowy podział reszty
let splits = [];
let sum = 0;

for(let i=0; i<wrongIndexes.length; i++){
  let val = (i === wrongIndexes.length - 1)
    ? remaining - sum
    : rand(0, remaining - sum);
  
  splits.push(val);
  sum += val;
}

// przypisanie
options.forEach((opt, idx)=>{
  if(idx === correctIndex){
    result[opt] = correctPercent;
  } else {
    result[opt] = splits.shift();
  }
});

  // 🔥 RYSOWANIE WYKRESU
 Object.entries(result).forEach(([text, val], index)=>{

  let label = document.createElement("div");
  label.textContent = text;

  let bar = document.createElement("div");
  bar.className = "bar";

  let fill = document.createElement("div");
  fill.className = "fill";
  fill.textContent = "0%"; // start

  bar.appendChild(fill);

  box.appendChild(label);
  box.appendChild(bar);

  // 🔥 animacja z opóźnieniem (efekt jak TV)
  setTimeout(()=>{
    fill.style.width = val + "%";
    fill.textContent = val + "%";
  }, 100 + index * 200); // każde trochę później
});
}
/////////////////////// 50/50 ///////////////////////
function fiftyFifty(){
  if(fiftyUsed) return;
  fiftyUsed = true;

  let btn = document.getElementById("fiftyBtn");
  btn.classList.add("used");
  btn.disabled = true;

  let q = questions[i];
  let correct = q.correct;

  let wrong = buttons.filter(b => b.textContent !== correct);

  shuffle(wrong).slice(0,2).forEach(b=>{
    b.style.visibility = "hidden";
    b.disabled = true;
  });
}
function rand(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Funkcja powiększania/pomniejszania
function toggleZoom() {
  let img = document.getElementById("q-img");
  img.classList.toggle("full-screen-img");
}

// Funkcja czyszcząca zoom (ważna przy zmianie pytania)
function clearZoom() {
  let img = document.getElementById("q-img");
  if(img) img.classList.remove("full-screen-img");
}
const slider = document.getElementById("imgRatio");
const numInput = document.getElementById("ratioInput");

// Gdy przesuwasz suwak -> aktualizuj pole liczbowe
slider.addEventListener("input", function() {
    numInput.value = this.value;
});

// Gdy wpisujesz liczbę -> aktualizuj suwak
numInput.addEventListener("input", function() {
    // Zabezpieczenie, żeby nie wpisać więcej niż 100 lub mniej niż 0
    if (this.value > 100) this.value = 100;
    if (this.value < 0) this.value = 0;
    
    slider.value = this.value;
});

function toggleSettings() {
  const panel = document.getElementById("settingsPanel");
  // Sprawdzamy stan wyświetlania (uwzględniamy pusty string na starcie)
  const isOpen = panel.style.display === "block";
  
  panel.style.display = isOpen ? "none" : "block";
  document.body.classList.toggle("settings-open-bg");
}

// Ta część dba o to, by suwak działał zaraz po wczytaniu strony
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("imgRatio");
  const numInput = document.getElementById("ratioInput");

  if (slider && numInput) {
    slider.oninput = () => { 
      numInput.value = slider.value; 
    };
    
    numInput.oninput = () => { 
      if (numInput.value > 100) numInput.value = 100;
      if (numInput.value < 0) numInput.value = 0;
      slider.value = numInput.value; 
    };
  }
})
//////////////////////////////////////category list //////////////////////////////////////////////////////////////////////
function toggleCategoryList() {
  const panel = document.getElementById("categoryPanel");
  const container = document.getElementById("categoryListContainer");
  const isOpen = panel.style.display === "block";

  if (!isOpen) {
    container.innerHTML = "";
    
    // 1. Liczenie i sortowanie kategorii
    const counts = {};
    database.forEach(q => { counts[q.category] = (counts[q.category] || 0) + 1; });
    const sortedCategories = Object.keys(counts).sort((a, b) => a.localeCompare(b));

    // 2. Kontener na listę (z Twoimi stylami)
    const listWrapper = document.createElement("div");
    listWrapper.style = "max-height: 250px; overflow-y: auto; margin-bottom: 15px; scrollbar-width: none;";
    listWrapper.id = "listWrapper";
    container.appendChild(listWrapper);

    // 3. Funkcja renderująca (sprawiedliwy widok)
    const renderList = (filterText = "") => {
      listWrapper.innerHTML = "";
      const search = normalize(filterText).toLowerCase();
      const uiHints = { "ie": ["cctv", "sat", "instalacje elektryczne", "elektryk", "monitoring", "anteny"] };

      sortedCategories.forEach(cat => {
        const catNorm = normalize(cat).toLowerCase();
        const aliases = (categoryMap[cat] || []).map(a => normalize(a).toLowerCase());
        let isMatch = catNorm.includes(search) || aliases.some(a => a.includes(search));
        
        if (!isMatch && search !== "") {
          for (let key in uiHints) {
            if (search === key && uiHints[key].some(h => catNorm.includes(normalize(h)))) isMatch = true;
          }
        }

        if (isMatch || search === "") {
          const item = document.createElement("label");
          item.className = "category-item"; // TWOJA KLASA Z CSS
          item.innerHTML = `
            <input type="checkbox" class="cat-checkbox" value="${cat}" style="margin-right: 12px; width: 18px; height: 18px;">
            <span style="flex-grow: 1;">${cat}</span> 
            <span class="q-badge">${counts[cat]}</span>
          `;
          listWrapper.appendChild(item);
        }
      });
    };

    // 4. Przycisk MIX (Twoje kolory)
    const mixBtn = document.createElement("button");
    mixBtn.innerHTML = "ZASTOSUJ MIX";
    mixBtn.style = "background: #20864b; color: white; width: 100%; border: 2px solid #000; cursor: pointer; padding: 10px; font-weight: bold; margin-bottom: 5px; font-family: Garamond, serif;";
    mixBtn.onclick = () => {
      const selected = Array.from(document.querySelectorAll('.cat-checkbox:checked')).map(cb => cb.value);
      if (selected.length === 0) return alert("Zaznacz kategorie!");
      document.getElementById("category").value = selected.join(", ");
      const total = selected.reduce((sum, cat) => sum + (counts[cat] || 0), 0);
      document.getElementById("count").value = total;
      toggleCategoryList(); 
    };
    container.appendChild(mixBtn);

    // 5. OBSŁUGA LUPY I DŁUGOPISU
    const noteIcon = document.getElementById("noteIcon");
    const noteInput = document.getElementById("pdfNote");
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("catSearch");
    const panelTitle = document.getElementById("panelTitle");

    // Funkcja resetująca pola
    const resetInputs = () => {
      noteInput.style.width = "0px"; noteInput.style.opacity = "0";
      searchInput.style.width = "0px"; searchInput.style.opacity = "0";
      panelTitle.style.opacity = "1";
    };

    noteIcon.onclick = () => {
      const isHidden = !noteInput.style.width || noteInput.style.width === "0px";
      resetInputs();
      if (isHidden) {
        noteInput.style.width = "180px";
        noteInput.style.opacity = "1";
        noteInput.style.padding = "2px 5px";
        panelTitle.style.opacity = "0.3";
        noteInput.focus();
      }
    };

    searchIcon.onclick = () => {
      const isHidden = !searchInput.style.width || searchInput.style.width === "0px";
      resetInputs();
      if (isHidden) {
        searchInput.style.width = "180px";
        searchInput.style.opacity = "1";
        searchInput.style.padding = "2px 5px";
        panelTitle.style.opacity = "0.3";
        searchInput.focus();
      } else {
        renderList(""); // Resetuj widok po zamknięciu
      }
    };

    searchInput.oninput = (e) => renderList(e.target.value);
    renderList(); // Start listy

    panel.style.display = "block";
    document.body.classList.add("settings-open-bg");
  } else {
    panel.style.display = "none";
    document.body.classList.remove("settings-open-bg");
  }
}



function reportQuestion() {
  const currentQ = questions[i].question;
  const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdiFERRik1ruie77zsyXoIP08XVB0T5A__tsY6OHUvVsLZgew/viewform?usp=dialog";
  const finalUrl = `${baseUrl}?usp=pp_url&entry.1378385011=${encodeURIComponent(currentQ)}`;
  
  window.open(finalUrl, "_blank"); // Otwiera w nowej karcie
}


////////////////////////////////////////////// GENEROWANIE PDF ////////////////////////////////////////////////////////

function generatePDFs() {
    // 1. Pobieranie parametrów z interfejsu
    const cat = document.getElementById("category").value;
    const totalTarget = parseInt(document.getElementById("count").value) || 10;
    const openTarget = parseInt(document.getElementById("openCount")?.value) || 0;
    const closedTarget = totalTarget - openTarget;
    const imgRatio = parseInt(document.getElementById("imgRatio").value) || 50;
    let numGroups = parseInt(document.getElementById("pdfGroups")?.value) || 1;
    const instruction = document.getElementById("pdfNote").value;  

    if (numGroups > 17) numGroups = 17;

    // 2. Filtrowanie bazy na typy (zamknięte vs otwarte)
    let catFiltered = database.filter(q => matchCategory(cat, q.category));
    let openPool = catFiltered.filter(q => !q.answers || q.answers.length === 0);
    let closedPool = catFiltered.filter(q => q.answers && q.answers.length > 0);

    if (openPool.length < openTarget || closedPool.length < closedTarget) {
        alert(`Za mało pytań w bazie! Potrzeba ${openTarget} otwartych (masz ${openPool.length}) i ${closedTarget} zamkniętych (masz ${closedPool.length}).`);
        return;
    }

    let printWindow = window.open('', '_blank');
    let html = `<html><head><style>
        @page { margin: 1cm; }
        body { font-family: Arial, sans-serif; padding: 0; margin: 0; color: black; line-height: 1.2; }
        
        .page { 
            page-break-after: always; 
            position: relative; 
            padding: 15px; 
            box-sizing: border-box; 
        }
        .page:last-child { page-break-after: auto !important; }

        .header-content { width: 100%; margin-bottom: 10px; }
        .user-data { font-size: 14px; margin-bottom: 5px; }

        /* TABELA - ROZMIAR KOMÓRKI 27.37px */
        .ans-sheet { border-collapse: collapse !important; margin-top: 10px; table-layout: fixed; background: white !important; }
        .ans-sheet td { 
            border: 2px solid black !important; 
            width: 27.37px !important; 
            height: 27.37px !important; 
            text-align: center; 
            font-size: 11px; 
            padding: 0;
        }
        .label-row { background-color: #dddddd !important; font-weight: bold; -webkit-print-color-adjust: exact; }
        .black-cell { background-color: black !important; color: white !important; -webkit-print-color-adjust: exact; }

        /* ZDJĘCIA (+39%) */
        .q-img { 
    display: block; 
    max-width: 222px; 
    max-height: 180px; 
    margin: 10px 0; 
    border: 1px solid #ccc; 
    /* Twoje nowe dodatki wyostrzające: */
    image-rendering: -webkit-optimize-contrast; 
    filter: contrast(1.1); 
}
        /* PRZERYWANA LINIA MIĘDZY PYTANIAMI */
        .question { 
      margin-bottom: 30px; 
     page-break-inside: avoid; 
     border-top: 2px dashed #0f186094 !important;  /* zmiana koloru linni przerywanej */
      padding-top: 25px; 
      clear: both; 
    }


        .options { width: 100%; margin-top: 5px; }
        .options td { width: 50%; padding: 2px 0; font-size: 12px; vertical-align: top; }
        
        /* LINIE DLA PYTAŃ OTWARTYCH */
        .open-line { margin-top: 8px; border-bottom: 1px solid #777; height: 22px; width: 100%; }

        @media print { .no-print { display: none; } * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
    </style></head><body>

    <div class="no-print" style="background:#ffeb3b; padding:20px; text-align:center; border-bottom:3px solid black; margin-bottom:20px;">
        <button onclick="window.print()" style="padding: 15px 30px; font-size: 20px; font-weight: bold; cursor: pointer; border: 2px solid black; border-radius: 8px; background: white;">
            🖨️ DRUKUJ
        </button>
        <p style="margin: 10px 0 0 0; font-weight: bold;">Panel tylko dla nauczyciela (nie będzie go na sprawdzianie)</p>
    </div>

    `;

    for (let set = 1; set <= numGroups; set++) {
        
               // --- START SPRAWIEDLIWEJ PODMIANY PDF ---
        const catInput = document.getElementById("category").value;
        const selectedCats = catInput.split(",").map(s => s.trim()).filter(s => s !== "");
        
        let finalClosed = [];
        let finalOpen = [];

        // Cele dla tej grupy na podstawie suwaka
        let imgGoalTotal = Math.floor(closedTarget * (imgRatio / 100));
        let textGoalTotal = closedTarget - imgGoalTotal;

        // Porcje na każdą wybraną kategorię
        let imgPerCat = Math.floor(imgGoalTotal / selectedCats.length) || 0;
        let textPerCat = Math.floor(textGoalTotal / selectedCats.length) || 0;
        let openPerCat = Math.floor(openTarget / selectedCats.length) || 0;

        let remImg = [], remTxt = [], remOpen = [];

        // Pobieranie sprawiedliwych porcji
        selectedCats.forEach(catName => {
            let pool = database.filter(q => matchCategory(catName, q.category));
            
            let cImg = shuffle(pool.filter(q => q.answers?.length > 0 && q.image));
            let cTxt = shuffle(pool.filter(q => q.answers?.length > 0 && !q.image));
            let oP   = shuffle(pool.filter(q => !q.answers || q.answers.length === 0));

            finalClosed.push(...cImg.slice(0, imgPerCat), ...cTxt.slice(0, textPerCat));
            finalOpen.push(...oP.slice(0, openPerCat));

            // Resztki do późniejszego dopełnienia braków
            remImg.push(...cImg.slice(imgPerCat));
            remTxt.push(...cTxt.slice(textPerCat));
            remOpen.push(...oP.slice(openPerCat));
        });

        // DOPEŁNIANIE (Ratunek dla małych kategorii i suwaka)
        let currentImgs = finalClosed.filter(q => q.image).length;
        if (currentImgs < imgGoalTotal) {
            let diff = imgGoalTotal - currentImgs;
            let extra = shuffle(remImg).slice(0, diff);
            finalClosed.push(...extra);
            remImg = remImg.filter(q => !extra.includes(q));
        }
        if (finalClosed.length < closedTarget) {
            let diff = closedTarget - finalClosed.length;
            let rest = [...remImg, ...remTxt];
            finalClosed.push(...shuffle(rest).slice(0, diff));
        }
        if (finalOpen.length < openTarget) {
            finalOpen.push(...shuffle(remOpen).slice(0, openTarget - finalOpen.length));
        }

        // Mieszanie całości i blokada kolejności odpowiedzi dla KLUCZA
        let questions = shuffle([...finalOpen, ...finalClosed]);
        questions.forEach(q => {
            if (q.answers && q.answers.length > 0) {
                // To gwarantuje, że tabela ABCD na górze nie będzie kłamać
                q.savedOrder = shuffle([...q.answers]);
            }
        });

        let groupID = String.fromCharCode(64 + set);
        // --- KONIEC SPRAWIEDLIWEJ PODMIANY PDF ---


        // Funkcja generująca tabelę poziomą ABCD
        const createTable = (qs, isKey) => {
            let rowNr = `<tr class="label-row"><td style="width:40px !important;">Nr</td>`;
            let rows = {A: `<tr><td class="label-row">A</td>`, B: `<tr><td class="label-row">B</td>`, C: `<tr><td class="label-row">C</td>`, D: `<tr><td class="label-row">D</td>`};
            
            qs.forEach((q, i) => {
                rowNr += `<td>${i+1}</td>`;
                let isClosed = q.answers && q.answers.length > 0;
                let corrIdx = (isKey && isClosed) ? q.savedOrder.indexOf(q.correct) : -1;
                
                ['A','B','C','D'].forEach((L, idx) => {
                    let fill = isKey && corrIdx === idx;
                    let content = '';
                    if (!isClosed) {
                        content = '-'; 
                    } else if (isKey && fill) {
                        content = L; 
                    }
                    rows[L] += `<td class="${fill ? 'black-cell' : ''}">${content}</td>`;
                });
            });
            return `<table class="ans-sheet">${rowNr}</tr>${rows.A}</tr>${rows.B}</tr>${rows.C}</tr>${rows.D}</tr></table>`;
        };

       // Obliczamy sumę punktów dynamicznie
        const totalPoints = questions.reduce((acc, q) => {
            if (!q.answers || q.answers.length === 0) return acc + 3; // Otwarte: 3 pkt
            return acc + (q.question.length > 100 ? 2 : 1); // Zamknięte: 1 lub 2 pkt
        }, 0);

        // --- STRONA UCZNIA ---
        html += `<div class="page">
            <div class="header-content">
                <div class="user-data">
                    <span style="float:right; border: 2px solid black; padding: 5px 15px; font-weight: bold;">PUNKTY: ........ / ${totalPoints}</span>
                    <h1 style="margin:0; font-size:22px;">Sprawdzian: ${catInput}</h1>
                    <p><strong>GRUPA ${groupID}</strong> | Uczeń: ________________________________ Klasa: _______ NR:____</p>
                </div>
                ${createTable(questions, false)}
            </div>

            <!-- INSTRUKCJA (Pobrana z pola pdfNote / długopisu ✍️) -->
            ${instruction && instruction.trim() !== "" ? `
                <div style="border-left: 5px solid black; background: #f4f4f4; padding: 10px; margin: 10px 0; font-size: 12px; font-style: italic;">
                    <strong>INSTRUKCJA:</strong> ${instruction}
                </div>
            ` : ""}

            <hr style="border: 1px solid black; margin: 15px 0;">
            ${questions.map((q, idx) => {
                const isOpen = !q.answers || q.answers.length === 0;
                const pts = isOpen ? 3 : (q.question.length > 100 ? 2 : 1);
                
                let res = `<div class="question">
                    <div style="float:right; font-size:10px; color:#555;">[ ........ / ${pts} pkt ]</div>
                    <strong>${idx + 1}. ${q.question}</strong>`;
                
                if (q.image) res += `<img src="${q.image}" class="q-img">`;
                
                if (!isOpen) {
                    let ans = q.savedOrder;
                    res += `<table class="options">
                        <tr><td>A) [ ] ${ans[0]}</td><td>B) [ ] ${ans[1]}</td></tr>
                        <tr><td>C) [ ] ${ans[2]}</td><td>D) [ ] ${ans[3] || "---"}</td></tr>
                    </table>`;
                } else {
                    res += `<div class="open-line"></div><div class="open-line"></div><div class="open-line"></div>`;
                }
                return res + `</div>`;
            }).join('')}
        </div>`;

        // --- STRONA KLUCZA ---
        html += `<div class="page" style="background:#f9f9f9;">
            <div class="header-content">
                <h2>KLUCZ ODPOWIEDZI - GRUPA ${groupID}</h2>
                <p>Suma punktów do zdobycia: <b>${totalPoints}</b></p>
                ${createTable(questions, true)}
            </div>
            <hr style="border: 1px solid black; margin: 15px 0;">
            <div style="font-size: 11px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px;">
                ${questions.map((q, idx) => {
                    const pts = (!q.answers || q.answers.length === 0) ? 3 : (q.question.length > 100 ? 2 : 1);
                    return `<div><strong>${idx+1}:</strong> ${q.correct || 'OTWARTE'} (${pts}p)</div>`;
                }).join('')}
            </div>
        </div>`;
    } // koniec pętli for

    html += `</body></html>`;
    printWindow.document.write(html);
    printWindow.document.close();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
window.addEventListener('keydown', (event) => {
    // Sprawdzamy, czy okno ustawień lub kategorii jest zamknięte (żeby nie klikać w tle)
    const settingsOpen = document.body.classList.contains("settings-open-bg");
    if (settingsOpen || lock) return;

    // Mapujemy klawisze 1, 2, 3, 4 na indeksy przycisków 0, 1, 2, 3
    const keyMap = {
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 3
    };

    const index = keyMap[event.key];

    // Jeśli naciśnięto klawisz od 1 do 4 i taki przycisk istnieje
    if (index !== undefined && buttons[index]) {
        buttons[index].click(); // Wywołujemy kliknięcie przycisku
    }

    // Opcjonalnie: Spacja przechodzi do następnego pytania, jeśli wynik jest wyświetlony
    if (event.code === "Space" && document.getElementById("q").textContent.includes("Wynik")) {
        location.reload();
    }
});
