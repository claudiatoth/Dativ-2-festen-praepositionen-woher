// ============================================
// FLASHCARDS - Atelier de Aprofundare Dativ — Lecția 2:
// Die 7 festen Präpositionen Dativ + Woher?
// Claudia Toth · 48 carduri (pattern dens — Atelier de Aprofundare)
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 7 prepoziții cu sens + exemplu ===
    { de: "mit + Dativ", ro: "cu (împreună / mijloc) · ex: mit dem Auto", audio: "audio/letters/mit.wav" },
    { de: "zu + Dativ", ro: "la (persoană/loc, mișcare) · ex: zur Arbeit", audio: "audio/letters/zu.wav" },
    { de: "bei + Dativ", ro: "la cineva (acasă/firmă) · ex: bei der Familie", audio: "audio/letters/bei.wav" },
    { de: "von + Dativ", ro: "de la / al cuiva · ex: von der Schule", audio: "audio/letters/von.wav" },
    { de: "aus + Dativ", ro: "din (țară/material/interior) · ex: aus Rumänien", audio: "audio/letters/aus.wav" },
    { de: "nach + Dativ", ro: "spre (oraș/țară/Hause) · ex: nach Berlin", audio: "audio/letters/nach.wav" },
    { de: "seit + Dativ", ro: "de când / începând cu · ex: seit einem Jahr", audio: "audio/letters/seit.wav" },

    // === 4 forme contrase ===
    { de: "zum", ro: "zu + dem (masc/neutru) · ex: zum Arzt = la doctor", audio: "audio/letters/zum.wav" },
    { de: "zur", ro: "zu + der (feminin) · ex: zur Arbeit = la lucru", audio: "audio/letters/zur.wav" },
    { de: "beim", ro: "bei + dem (masc/neutru) · ex: beim Bäcker = la brutar", audio: "audio/letters/beim.wav" },
    { de: "vom", ro: "von + dem (masc/neutru) · ex: vom Markt = de la piață", audio: "audio/letters/vom.wav" },

    // === 3 întrebări (trio direcțional) ===
    { de: "Wo? = Dativ", ro: "Unde? · POZIȚIE statică · Wechselpräp + bei/zu", audio: "audio/letters/wo.wav" },
    { de: "Wohin? = Akk", ro: "Încotro? · MIȘCARE spre · Wechselpräp + nach/zu (Dativ)", audio: "audio/letters/wohin.wav" },
    { de: "Woher? = Dativ", ro: "🆕 De unde? · MIȘCARE dinspre · aus / von", audio: "audio/letters/woher.wav" },

    // === 10 expresii fixe esențiale ===
    { de: "nach Hause", ro: "acasă (MIȘCARE) · expresie fixă FĂRĂ articol · Ich gehe nach Hause", audio: "audio/letters/nach-hause.wav" },
    { de: "zu Hause", ro: "acasă (POZIȚIE) · expresie fixă FĂRĂ articol · Ich bin zu Hause", audio: "audio/letters/zu-hause.wav" },
    { de: "bei der Arbeit", ro: "la lucru (POZIȚIE) · NU se contractă: bei der", audio: "audio/letters/bei-arbeit.wav" },
    { de: "von der Schule", ro: "de la școală (mișcare punctuală) · NU se contractă", audio: "audio/letters/von-schule.wav" },
    { de: "aus Rumänien", ro: "din România (origine, țară fără articol)", audio: "audio/letters/aus-rumaenien.wav" },
    { de: "seit drei Jahren", ro: "de trei ani · seit + durată continuă", audio: "audio/letters/seit-3-jahren.wav" },
    { de: "mit dem Auto", ro: "cu mașina · mit + transport CU articol", audio: "audio/letters/mit-auto.wav" },
    { de: "zum Arzt", ro: "la doctor · formă contrasă zu+dem", audio: "audio/letters/zum-arzt.wav" },
    { de: "vom Markt", ro: "de la piață · formă contrasă von+dem", audio: "audio/letters/vom-markt.wav" },
    { de: "beim Friseur", ro: "la coafor · formă contrasă bei+dem", audio: "audio/letters/beim-friseur.wav" },

    // === 8 capcane ===
    { de: "nach Hause vs zu Hause", ro: "🚨 NACH = mișcare (mergi acasă) · ZU = poziție (ești acasă)", audio: "audio/letters/nach-vs-zu-hause.wav" },
    { de: "bei + persoană (Wo?)", ro: "la cineva, ești acolo · Ich bin bei meiner Mutter", audio: "audio/letters/bei-persoana.wav" },
    { de: "zu + persoană (Wohin?)", ro: "mișcare la cineva · Ich gehe zu meiner Mutter", audio: "audio/letters/zu-persoana.wav" },
    { de: "aus + țară FĂRĂ articol", ro: "🚨 aus Rumänien, aus Deutschland · NU aus der/dem", audio: "audio/letters/aus-tara-fara.wav" },
    { de: "aus + țară CU articol", ro: "🚨 die Türkei, die Schweiz, die USA → aus der/den", audio: "audio/letters/aus-tara-cu.wav" },
    { de: "aus + material", ro: "🚨 aus Gold, aus Holz, aus Plastik · FĂRĂ articol", audio: "audio/letters/aus-material.wav" },
    { de: "zu Fuß", ro: "🚨 pe jos · expresie fixă, NU cu mit · Ich gehe zu Fuß", audio: "audio/letters/zu-fuss.wav" },
    { de: "seit + durată (NU vârstă!)", ro: "🚨 seit 3 Jahren = de 3 ani (continuu) · pentru vârstă: 5 Jahre alt", audio: "audio/letters/seit-durata.wav" },

    // === 8 Woher? specifice (aus vs von) ===
    { de: "aus + țară (origine)", ro: "permanent · Andreea kommt aus Rumänien", audio: "audio/letters/aus-origine.wav" },
    { de: "aus + oraș (origine)", ro: "permanent · Florian kommt aus Berlin", audio: "audio/letters/aus-oras.wav" },
    { de: "aus + interior", ro: "obiect cu articol · aus dem Ofen, aus der Tasche", audio: "audio/letters/aus-interior.wav" },
    { de: "aus + material", ro: "fără articol · Der Ring ist aus Gold", audio: "audio/letters/aus-material-2.wav" },
    { de: "von + persoană (nume propriu)", ro: "FĂRĂ articol · Das ist von Mihai", audio: "audio/letters/von-nume.wav" },
    { de: "von + persoană (rol)", ro: "CU articol · Das ist von der Lehrerin", audio: "audio/letters/von-rol.wav" },
    { de: "von + loc (întoarcere)", ro: "mișcare punctuală · Ich komme von der Arbeit", audio: "audio/letters/von-loc.wav" },
    { de: "von + posesie", ro: "al cuiva · Das Auto von Acar = mașina lui Acar", audio: "audio/letters/von-posesie.wav" },

    // === 8 propoziții emblemă cu cele 6 personaje ===
    { de: "Mihai arbeitet seit 3 Jahren im Restaurant.", ro: "Mihai lucrează de 3 ani la restaurant. (seit + Dativ)", audio: "audio/letters/mihai-seit.wav" },
    { de: "Andreea fährt mit dem Zug nach Berlin.", ro: "Andreea merge cu trenul la Berlin. (mit + nach)", audio: "audio/letters/andreea-mit-nach.wav" },
    { de: "Florian kommt von der Arbeit.", ro: "Florian vine de la lucru. (von + Dativ)", audio: "audio/letters/florian-von.wav" },
    { de: "Carolina kommt aus Spanien.", ro: "Carolina vine din Spania. (aus + țară)", audio: "audio/letters/carolina-aus.wav" },
    { de: "Acar wohnt bei seinen Eltern.", ro: "Acar locuiește la părinții lui. (bei + Dativ plural)", audio: "audio/letters/acar-bei.wav" },
    { de: "Annette spricht mit den Studenten.", ro: "Annette vorbește cu studenții. (mit + Dativ plural+-n)", audio: "audio/letters/annette-mit.wav" },
    { de: "Mihai fährt nach Hause.", ro: "Mihai merge acasă. (nach Hause — mișcare)", audio: "audio/letters/mihai-nach-hause.wav" },
    { de: "Andreea ist zu Hause.", ro: "Andreea e acasă. (zu Hause — poziție)", audio: "audio/letters/andreea-zu-hause.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (7 prepoziții · 4 forme contrase · 3 întrebări trio · 10 expresii fixe · 8 capcane · 8 Woher? aus/von · 8 propoziții emblemă).<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => { console.log('Audio nu poate fi redat:', err); });
}

buildFlashcards();
