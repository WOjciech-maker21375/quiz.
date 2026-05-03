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
"elektronika":["elektronika","el","elektronika","elektronik","uklady","układy","el","elektrony"],
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
function matchCategory(input, category){
input = normalize(input);
category = normalize(category);

let aliases = categoryMap[category] || [category];

return aliases.some(a=>{
a = normalize(a);
return input === a || a.includes(input) || input.includes(a);
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

  let filtered = database.filter(q => matchCategory(cat, q.category));

  if(filtered.length === 0){
    alert("Brak pytań");
    return;
  }

      // --- START PODMIANY Z SUWAKIEM ---
let imgRatio = parseInt(document.getElementById("ratioInput").value) / 100;

  
  let poolText = filtered.filter(q => !q.image); 
  let poolImg = filtered.filter(q => q.image);

  // Obliczamy ile chcemy obrazków na podstawie suwaka
  let imgCountGoal = Math.floor(count * imgRatio); 

  // Wybieramy zdjęcia (tyle ile chcemy, ale nie więcej niż mamy w bazie)
  let partImg = shuffle(poolImg).slice(0, imgCountGoal);

  // Dobieramy tekst tak, aby suma pytań zawsze wynosiła dokładnie "count"
  let actualImgCount = partImg.length;
  let actualTextGoal = count - actualImgCount; 
  
  // Zabezpieczenie: jeśli w bazie jest za mało tekstu, dobieramy więcej zdjęć (i na odwrót)
  let partText = shuffle(poolText).slice(0, actualTextGoal);
  
  // Jeśli po dobraniu tekstu wciąż brakuje pytań do limitu "count"
  if ((partImg.length + partText.length) < count) {
      let remaining = count - (partImg.length + partText.length);
      // Próbujemy dobrać brakujące z dowolnej puli, której jeszcze nie zużyliśmy w całości
      let extra = shuffle(filtered.filter(q => ![...partImg, ...partText].includes(q))).slice(0, remaining);
      questions = shuffle([...partImg, ...partText, ...extra]);
  } else {
      questions = shuffle([...partImg, ...partText]);
  }
  // --- KONIEC PODMIANY ---
  i = 0;
  score = 0;

  load();
  document.getElementById("audienceBox").style.display = "none";
document.getElementById("audienceBox").innerHTML = "";
}
/////////////////////// LOAD ///////////////////////
document.getElementById("reportBtn").style.display = "block";
function load(){
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

setTimeout(next,800);
}

/////////////////////// NEXT ///////////////////////
function next(){
i++;
if(i<questions.length) load();
else end();
}

/////////////////////// END ///////////////////////
function end(){
let p=score/questions.length;

save(score);

alert(exam
? (p>=0.6 ? "ZDANE 🎓 : " : "NIEZDANE ❌ : ") + Math.round(p*100)+"%"
: "Wynik: "+score);
}

/////////////////////// RANKING nie działa dałem dla zasady///////////////////////
function save(s){
let r=JSON.parse(localStorage.getItem("rank"))||[];
r.push(s);
r.sort((a,b)=>b-a);
localStorage.setItem("rank",JSON.stringify(r.slice(0,10)));
}

function showRank(){
let r=JSON.parse(localStorage.getItem("rank"))||[];
alert("TOP 10:\n"+r.join("\n"));
}

/////////////////////// THEME ///////////////////////
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
});
function toggleCategoryList() {
  const panel = document.getElementById("categoryPanel");
  const container = document.getElementById("categoryListContainer");
  const isOpen = panel.style.display === "block";

  if (!isOpen) {
    container.innerHTML = "";
    
    // 1. Liczenie pytań w kategoriach
    const counts = {};
    database.forEach(q => {
      counts[q.category] = (counts[q.category] || 0) + 1;
    });

    // 2. Pobranie nazw kategorii i posortowanie ich alfabetycznie
    // Używamy localeCompare, aby poprawnie sortować polskie znaki (Ą, Ć, Ę itp.)
    const sortedCategories = Object.keys(counts).sort((a, b) => a.localeCompare(b));

    // 3. Budowanie listy w nowej kolejności
    sortedCategories.forEach(cat => {
      const item = document.createElement("div");
      item.className = "category-item";
      item.innerHTML = `<span>${cat}</span> <span class="q-badge">${counts[cat]} pytań</span>`;
      
      item.onclick = () => {
        document.getElementById("category").value = cat;
        document.getElementById("count").value = counts[cat];
        panel.style.display = "none";
        document.body.classList.remove("settings-open-bg");
      };
      container.appendChild(item);
    });

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

    if (numGroups > 17) numGroups = 17;

    // 2. Filtrowanie bazy na typy (zamknięte vs otwarte)
    let catFiltered = database.filter(q => q.category.toLowerCase().includes(cat.toLowerCase()));
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
        .q-img { display: block; max-width: 222px; max-height: 180px; margin: 10px 0; border: 1px solid #ccc; }
        /* PRZERYWANA LINIA MIĘDZY PYTANIAMI */
        .question { 
            margin-bottom: 20px; 
            page-break-inside: avoid; 
            border-top: 2px dashed #0f186094 !important;  //<----------zmiana koloru linni przerywanej //////////
            padding-top: 15px; 
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
        
        // Funkcja wyboru pytań z uwzględnieniem proporcji obrazków
        const pickQuestions = (pool, target) => {
            let withImg = pool.filter(q => q.image && q.image !== "");
            let noImg = pool.filter(q => !q.image || q.image === "");
            
            let targetImgCount = Math.round(target * (imgRatio / 100));
            let selectedWithImg = shuffle([...withImg]).slice(0, targetImgCount);
            let neededMore = target - selectedWithImg.length;
            let selectedNoImg = shuffle([...noImg]).slice(0, neededMore);
            
            let result = [...selectedWithImg, ...selectedNoImg];
            if (result.length < target) {
                let remaining = pool.filter(q => !result.includes(q));
                result = [...result, ...shuffle(remaining).slice(0, target - result.length)];
            }
            return result;
        };

        let selOpen = pickQuestions(openPool, openTarget);
        let selClosed = pickQuestions(closedPool, closedTarget);
        let questions = shuffle([...selOpen, ...selClosed]);
        let groupID = String.fromCharCode(64 + set);

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

        // --- STRONA UCZNIA ---
        html += `<div class="page">
            <div class="header-content">
                <div class="user-data">
                    <h1 style="margin:0; font-size:22px;">Sprawdzian: ${cat}</h1>
                    <p><strong>GRUPA ${groupID}</strong> | Uczeń: ________________________________ Klasa: _______NR:____</p>
                </div>
                ${createTable(questions, false)}
            </div>
            <hr style="border: 1px solid black; margin: 15px 0;">
            ${questions.map((q, idx) => {
                let res = `<div class="question"><strong>${idx + 1}. ${q.question}</strong>`;
                if (q.image) res += `<img src="${q.image}" class="q-img">`;
                
                if (q.answers && q.answers.length > 0) {
                    let ans = shuffle([...q.answers]);
                    q.savedOrder = ans;
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
        html += `<div class="page" style="background:#fcfcfc;">
            <div class="header-content">
                <h2>KLUCZ ODPOWIEDZI - GRUPA ${groupID}</h2>
                ${createTable(questions, true)}
            </div>
            <hr style="border: 1px solid black; margin: 15px 0;">
            <div style="font-size: 11px;">
                ${questions.map((q, idx) => `<p style="margin:3px 0;"><strong>${idx+1}:</strong> ${q.correct}</p>`).join('')}
            </div>
        </div>`;
    }

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
