// ============================================
// EXERCIȚII - Atelier de Aprofundare Dativ — Lecția 2:
// Die 7 festen Präpositionen Dativ + Woher?
// Claudia Toth · 7 exerciții × 10 itemi = 70 itemi
// Normalizer pattern v2 (AGENTS-README)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// 🆕 22 mai 2026 — acceptă DOUĂ forme la verificare:
//  1. Fragmentul lipsă: ex. "mit"
//  2. Propoziția întreagă cu răspunsul inclus: ex. "Andreea spricht mit ihrer Mutter."
// Cursantul scrie cum îi vine natural. Hint-urile din paranteze sunt ignorate.
function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    const sentenceClean = (item.sentence || '').replace(/\s*\([^)]*\)\s*/g, ' ');
    return item.accept.some(a => {
        const full = sentenceClean.replace(/____+/g, a);
        return normalizeAnswer(full) === u;
    });
}

// ============================================
// EX 1: Alege prepoziția potrivită (mit/zu/bei/von/aus/nach/seit)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Andreea fährt ____ dem Zug nach Berlin.', translation: 'Andreea merge cu trenul la Berlin.', correct: 'mit', accept: ['mit'] },
    { id: 'b', sentence: 'Florian geht ____ Arzt. (la doctor, formă contrasă)', translation: 'Florian merge la doctor.', correct: 'zum', accept: ['zum'] },
    { id: 'c', sentence: 'Acar wohnt ____ seinen Eltern. (la cineva acasă)', translation: 'Acar locuiește la părinții lui.', correct: 'bei', accept: ['bei'] },
    { id: 'd', sentence: 'Das Geschenk ist ____ Carolina. (de la persoană, fără articol)', translation: 'Cadoul e de la Carolina.', correct: 'von', accept: ['von'] },
    { id: 'e', sentence: 'Annette kommt ____ Deutschland. (origine, țară fără articol)', translation: 'Annette vine din Germania.', correct: 'aus', accept: ['aus'] },
    { id: 'f', sentence: 'Mihai fährt ____ Berlin. (oraș, fără articol)', translation: 'Mihai merge la Berlin.', correct: 'nach', accept: ['nach'] },
    { id: 'g', sentence: 'Carolina arbeitet ____ einem Jahr in Berlin. (durată continuă)', translation: 'Carolina lucrează de un an în Berlin.', correct: 'seit', accept: ['seit'] },
    { id: 'h', sentence: 'Andreea kommt gerade ____ der Universität. (de la loc, mișcare punctuală)', translation: 'Andreea vine chiar acum de la universitate.', correct: 'von', accept: ['von'] },
    { id: 'i', sentence: 'Florian spricht ____ seiner Kollegin. (cu o persoană)', translation: 'Florian vorbește cu colega lui.', correct: 'mit', accept: ['mit'] },
    { id: 'j', sentence: 'Acar fährt ____ Hause. (acasă, mișcare — expresie fixă)', translation: 'Acar merge acasă.', correct: 'nach', accept: ['nach'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🟢 Alege prepoziția potrivită din cele 7 fixe Dativ.</strong><br>Mnemonic: <strong>MIT · NACH · BEI · SEIT · VON · ZU · AUS</strong>.<br><em>💡 Atenție la zu+dem=zum (formă contrasă). Forma este parte din răspuns.</em></div>';
    ex1Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex1-${it.id}" placeholder="prepoziția..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => { const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 2: Articol Dativ după prepoziție
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Mihai fährt mit ____ Auto. (das Auto)', translation: 'Mihai merge cu mașina.', correct: 'dem', accept: ['dem'] },
    { id: 'b', sentence: 'Andreea spricht mit ____ Lehrerin. (die Lehrerin)', translation: 'Andreea vorbește cu profesoara.', correct: 'der', accept: ['der'] },
    { id: 'c', sentence: 'Acar wohnt bei ____ Bruder. (der Bruder)', translation: 'Acar locuiește la fratele lui.', correct: 'dem', accept: ['dem'] },
    { id: 'd', sentence: 'Carolina kommt von ____ Schule. (die Schule)', translation: 'Carolina vine de la școală.', correct: 'der', accept: ['der'] },
    { id: 'e', sentence: 'Florian arbeitet seit ____ Monat in der Klinik. (ein Monat masc)', translation: 'Florian lucrează de o lună în clinică.', correct: 'einem', accept: ['einem'] },
    { id: 'f', sentence: 'Mihai backt das Brot aus ____ Mehl. (das Mehl)', translation: 'Mihai face pâinea din făină.', correct: 'dem', accept: ['dem'] },
    { id: 'g', sentence: 'Andreea fährt mit ____ Eltern in den Urlaub. (plural · die Eltern + -n)', translation: 'Andreea merge în vacanță cu părinții.', correct: 'den', accept: ['den'] },
    { id: 'h', sentence: 'Das Foto ist von ____ Künstler. (der Künstler)', translation: 'Poza e de la artistul respectiv.', correct: 'dem', accept: ['dem'] },
    { id: 'i', sentence: 'Annette spricht mit ____ Studenten. (plural · die Studenten + -n)', translation: 'Annette vorbește cu studenții.', correct: 'den', accept: ['den'] },
    { id: 'j', sentence: 'Florian kommt aus ____ Schweiz. (die Schweiz — țară cu articol!)', translation: 'Florian vine din Elveția.', correct: 'der', accept: ['der'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📋 Completează articolul Dativ după prepoziție.</strong><br>Masc/neutru: dem · Fem: der · Plural: den + <strong>-n</strong> la substantiv!<br><em>💡 Atenție la țări cu articol (die Türkei, die Schweiz, die USA) → aus DER Türkei.</em></div>';
    ex2Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="articolul..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => { const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 3: Forme contrase (zum/zur/beim/vom) — când DA, când NU
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Florian geht ____ Arzt. (der Arzt · merge la = zu)', translation: 'Florian merge la doctor.', correct: 'zum', accept: ['zum'] },
    { id: 'b', sentence: 'Andreea geht ____ Universität. (die Universität · merge la = zu)', translation: 'Andreea merge la universitate.', correct: 'zur', accept: ['zur'] },
    { id: 'c', sentence: 'Mihai war ____ Bäcker. (der Bäcker · la cineva = bei)', translation: 'Mihai a fost la brutar.', correct: 'beim', accept: ['beim'] },
    { id: 'd', sentence: 'Carolina kommt ____ Markt. (der Markt · de la = von)', translation: 'Carolina vine de la piață.', correct: 'vom', accept: ['vom'] },
    { id: 'e', sentence: 'Annette ist ____ Arbeit. (die Arbeit · la = bei · ATENȚIE: feminin NU se contractă!)', translation: 'Annette e la lucru.', correct: 'bei der', accept: ['bei der'] },
    { id: 'f', sentence: 'Acar kommt ____ Schule. (die Schule · de la = von · ATENȚIE: feminin NU se contractă!)', translation: 'Acar vine de la școală.', correct: 'von der', accept: ['von der'] },
    { id: 'g', sentence: 'Florian geht ____ Krankenhaus. (das Krankenhaus · merge la = zu)', translation: 'Florian merge la spital.', correct: 'zum', accept: ['zum'] },
    { id: 'h', sentence: 'Mihai fährt ____ Familie. (die Familie · merge la = zu)', translation: 'Mihai merge la familie.', correct: 'zur', accept: ['zur'] },
    { id: 'i', sentence: 'Das Geschenk ist ____ Annette. (Annette = nume propriu · de la = von · ATENȚIE: nume proprii NU se contractă!)', translation: 'Cadoul e de la Annette.', correct: 'von', accept: ['von'] },
    { id: 'j', sentence: 'Andreea war ____ Friseur. (der Friseur · la cineva = bei)', translation: 'Andreea a fost la coafor.', correct: 'beim', accept: ['beim'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🆕 Forme contrase Dativ — când DA, când NU.</strong><br>DA: zum (zu+dem) · zur (zu+der) · beim (bei+dem) · vom (von+dem).<br>NU se contractă: <strong>bei der · von der</strong> (feminin) + von + nume proprii.<br><em>💡 mit, aus, nach, seit nu se contractă NICIODATĂ.</em></div>';
    ex3Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex3-${it.id}" placeholder="forma corectă..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => { const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 4: Wo? Wohin? Woher? — alege întrebarea
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Andreea kommt aus Rumänien. — Care întrebare? (origine)', translation: 'De unde vine Andreea?', correct: 'Woher', accept: ['woher', 'woher?'] },
    { id: 'b', sentence: 'Florian arbeitet im Krankenhaus. — Care întrebare? (poziție statică)', translation: 'Unde lucrează Florian?', correct: 'Wo', accept: ['wo', 'wo?'] },
    { id: 'c', sentence: 'Mihai fährt nach Berlin. — Care întrebare? (mișcare spre)', translation: 'Încotro merge Mihai?', correct: 'Wohin', accept: ['wohin', 'wohin?'] },
    { id: 'd', sentence: 'Acar kommt von der Arbeit. — Care întrebare? (de la loc, mișcare punctuală)', translation: 'De unde vine Acar?', correct: 'Woher', accept: ['woher', 'woher?'] },
    { id: 'e', sentence: 'Carolina wohnt bei ihrer Mutter. — Care întrebare? (poziție la cineva)', translation: 'Unde locuiește Carolina?', correct: 'Wo', accept: ['wo', 'wo?'] },
    { id: 'f', sentence: 'Annette geht zur Universität. — Care întrebare? (mișcare spre)', translation: 'Încotro merge Annette?', correct: 'Wohin', accept: ['wohin', 'wohin?'] },
    { id: 'g', sentence: 'Andreea kommt von Florian. — Care întrebare? (de la persoană)', translation: 'De unde vine Andreea?', correct: 'Woher', accept: ['woher', 'woher?'] },
    { id: 'h', sentence: 'Mihai ist zu Hause. — Care întrebare? (poziție acasă)', translation: 'Unde e Mihai?', correct: 'Wo', accept: ['wo', 'wo?'] },
    { id: 'i', sentence: 'Acar geht nach Hause. — Care întrebare? (mișcare spre casă)', translation: 'Încotro merge Acar?', correct: 'Wohin', accept: ['wohin', 'wohin?'] },
    { id: 'j', sentence: 'Carolina kommt aus dem Atelier. — Care întrebare? (din interior)', translation: 'De unde vine Carolina?', correct: 'Woher', accept: ['woher', 'woher?'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>❓ Wo? Wohin? Woher? — alege întrebarea.</strong><br><strong>Wo?</strong> = poziție (Dat) · <strong>Wohin?</strong> = mișcare spre (Akk + zu/nach în Dat) · <strong>Woher?</strong> = mișcare dinspre (Dat + aus/von).<br><em>💡 Răspuns: Wo, Wohin sau Woher (cu sau fără semn de întrebare).</em></div>';
    ex4Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="Wo, Wohin sau Woher?"></div><div class="feedback" id="ex4-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => { const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 5: Capcanele (nach Hause vs zu Hause · bei + persoană vs zu + persoană)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Mihai geht ____ Hause. (mișcare spre casă · expresie fixă)', translation: 'Mihai merge acasă.', correct: 'nach', accept: ['nach'] },
    { id: 'b', sentence: 'Andreea ist ____ Hause. (poziție, deja acasă · expresie fixă)', translation: 'Andreea e acasă.', correct: 'zu', accept: ['zu'] },
    { id: 'c', sentence: 'Carolina ist ____ ihrer Mutter. (poziție, la mama)', translation: 'Carolina e la mama.', correct: 'bei', accept: ['bei'] },
    { id: 'd', sentence: 'Florian geht ____ seiner Schwester. (mișcare, la sora)', translation: 'Florian merge la sora.', correct: 'zu', accept: ['zu'] },
    { id: 'e', sentence: 'Acar wohnt ____ seinen Großeltern. (poziție continuă, la bunici)', translation: 'Acar locuiește la bunici.', correct: 'bei', accept: ['bei'] },
    { id: 'f', sentence: 'Annette kommt ____ Rumänien? Nein, ____ Deutschland! (origine — țară fără articol)', translation: 'Annette vine din România? Nu, din Germania!', correct: 'aus / aus', accept: ['aus aus'] },
    { id: 'g', sentence: 'Mihai backt das Brot ____ Mehl und Wasser. (material, fără articol)', translation: 'Mihai face pâinea din făină și apă.', correct: 'aus', accept: ['aus'] },
    { id: 'h', sentence: 'Andreea kommt ____ der Türkei. (țară cu articol — die Türkei!)', translation: 'Andreea vine din Turcia.', correct: 'aus', accept: ['aus'] },
    { id: 'i', sentence: 'Florian fährt ____ Auto, NU ____ Fuß. (transport — articolul DEM pentru auto, FĂRĂ articol pentru pe jos)', translation: 'Florian merge cu mașina, nu pe jos.', correct: 'mit dem / zu', accept: ['mit dem zu'] },
    { id: 'j', sentence: 'Acar studiază hier ____ drei Jahren. (durată continuă)', translation: 'Acar studiază aici de trei ani.', correct: 'seit', accept: ['seit'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🚨 Stolpersteine — capcanele clasice.</strong><br>nach Hause (mișcare) vs zu Hause (poziție) · bei + persoană (poziție) vs zu + persoană (mișcare) · aus + țară fără articol · seit + durată.<br><em>💡 Pentru itemii cu 2 răspunsuri, sistemul acceptă cu spațiu, slash sau virgulă.</em></div>';
    ex5Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="prepoziția..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => { const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 6: Woher? — aus vs von (când fiecare)
// ============================================
const ex6Data = [
    { id: 'a', sentence: 'Andreea kommt ____ Rumänien. (origine permanentă — țară)', translation: 'Andreea vine din România.', correct: 'aus', accept: ['aus'] },
    { id: 'b', sentence: 'Florian kommt gerade ____ der Arbeit. (mișcare punctuală — de la loc)', translation: 'Florian vine chiar acum de la lucru.', correct: 'von', accept: ['von'] },
    { id: 'c', sentence: 'Carolina nimmt das Foto ____ der Schublade. (din interior — obiect cu articol)', translation: 'Carolina scoate poza din sertar.', correct: 'aus', accept: ['aus'] },
    { id: 'd', sentence: 'Das Geschenk ist ____ Mihai. (de la persoană — nume propriu, fără articol)', translation: 'Cadoul e de la Mihai.', correct: 'von', accept: ['von'] },
    { id: 'e', sentence: 'Acar kommt ____ Berlin (zurück). (de la loc, întoarcere)', translation: 'Acar se întoarce de la Berlin.', correct: 'aus', accept: ['aus', 'von'] },
    { id: 'f', sentence: 'Annette spricht mit der Mutter ____ Florian. (posesie, al cui)', translation: 'Annette vorbește cu mama lui Florian.', correct: 'von', accept: ['von'] },
    { id: 'g', sentence: 'Der Ring ist ____ Gold. (material, fără articol)', translation: 'Inelul e din aur.', correct: 'aus', accept: ['aus'] },
    { id: 'h', sentence: 'Andreea kommt ____ ihrer Schwester. (de la o persoană feminină, cu articol)', translation: 'Andreea vine de la sora ei.', correct: 'von', accept: ['von'] },
    { id: 'i', sentence: 'Mihai kommt ____ der Schweiz. (țară cu articol — die Schweiz)', translation: 'Mihai vine din Elveția.', correct: 'aus', accept: ['aus'] },
    { id: 'j', sentence: 'Das Foto ist ____ einem berühmten Fotografen. (de la persoană, cu articol nedef.)', translation: 'Poza e de la un fotograf celebru.', correct: 'von', accept: ['von'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>❓ Woher? — aus vs von (când fiecare).</strong><br><strong>aus</strong> = origine permanentă (țară, oraș) · din interior (obiect) · material.<br><strong>von</strong> = de la persoană · de la loc (mișcare punctuală, întoarcere) · posesie.<br><em>💡 Câteva contexte acceptă AMBELE (vezi exemplul cu „Berlin"). Sistem flexibil.</em></div>';
    ex6Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex6-${it.id}" placeholder="aus sau von?"></div><div class="feedback" id="ex6-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => { const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 7: Dialog 6 personaje — sinteză
// ============================================
const ex7Data = [
    { id: 'a', sentence: 'Mihai: Ich arbeite ____ drei Jahren in meinem Restaurant. (durată)', translation: 'Lucrez de trei ani la restaurantul meu.', correct: 'seit', accept: ['seit'] },
    { id: 'b', sentence: 'Andreea: Ich fahre ____ Zug nach Berlin. (mit + transport)', translation: 'Merg cu trenul la Berlin.', correct: 'mit dem', accept: ['mit dem'] },
    { id: 'c', sentence: 'Andreea: Dann gehe ich ____ meinem Onkel. (la persoană, mișcare)', translation: 'Apoi merg la unchiul meu.', correct: 'zu', accept: ['zu'] },
    { id: 'd', sentence: 'Florian: Ich komme gerade ____ Arbeit. (de la loc, formă contrasă)', translation: 'Vin chiar acum de la lucru.', correct: 'von der', accept: ['von der'] },
    { id: 'e', sentence: 'Carolina: Das Geschenk ist ____ Mihai. (de la persoană, nume propriu)', translation: 'Cadoul e de la Mihai.', correct: 'von', accept: ['von'] },
    { id: 'f', sentence: 'Acar: Ich komme ____ Türkei. (țară cu articol)', translation: 'Vin din Turcia.', correct: 'aus der', accept: ['aus der'] },
    { id: 'g', sentence: 'Acar: Ich wohne ____ Familie. (la cineva, posesiv)', translation: 'Locuiesc cu familia mea.', correct: 'bei meiner', accept: ['bei meiner'] },
    { id: 'h', sentence: 'Annette: Andreea kommt ____ Rumänien. (origine, țară fără articol)', translation: 'Andreea vine din România.', correct: 'aus', accept: ['aus'] },
    { id: 'i', sentence: 'Annette: Și acum (sie) ist gerade ____ Hause. (acasă, poziție)', translation: 'Și acum (ea) e chiar acum acasă.', correct: 'zu', accept: ['zu'] },
    { id: 'j', sentence: 'Annette: Mihai, ist das Auto da ____ dir? (la cineva, posesie/aproximare)', translation: 'Mihai, mașina aia e la tine? (la tine acasă)', correct: 'bei', accept: ['bei'] }
];

function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎬 Dialog 6 personaje — sinteză masivă.</strong><br>Fiecare propoziție testează ÎMPREUNĂ: prepoziția potrivită + articol corect + capcane (zu/bei, aus/von, formă contrasă).<br><em>💡 Pentru cei cu 2 cuvinte, scrie cu spațiu (sistemul acceptă și slash/virgulă).</em></div>';
    ex7Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex7-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex7-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx7() {
    let correct = 0; const total = ex7Data.length;
    ex7Data.forEach(it => { const inp = document.getElementById(`ex7-${it.id}`); const fb = document.getElementById(`ex7-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
