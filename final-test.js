// ============================================
// TEST FINAL - Atelier de Aprofundare Dativ — Lecția 2:
// Die 7 festen Präpositionen Dativ + Woher?
// Claudia Toth · 25 întrebări (pattern dens — aprofundare)
// REGULĂ: NU ghilimele interne în stringuri JS!
// ============================================

function normalizeTestAnswer(str) {
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
        .replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // 6× Alege prepoziția
    { type: 'multiple', category: '🟢 Prepoziția potrivită', question: 'Andreea fährt ____ dem Zug. — Care prepoziție?', options: ['mit', 'aus', 'zu', 'von'], correct: 'mit', explanation: 'mit + Dativ = mijloc de transport (cu trenul).' },
    { type: 'luckentext', category: '🟢 Prepoziția potrivită', question: 'Completează (durată continuă):', sentence: 'Florian arbeitet ____ einem Jahr in Berlin.', translation: 'Florian lucrează de un an în Berlin.', accept: ['seit'], correct: 'seit', explanation: 'seit + Dativ = durată continuă până ACUM.' },
    { type: 'multiple', category: '🟢 Prepoziția potrivită', question: 'Acar wohnt ____ seinen Eltern. — POZIȚIE la persoane?', options: ['zu', 'bei', 'mit', 'von'], correct: 'bei', explanation: 'bei + Dativ = poziție LA cineva (locuiesc la părinți).' },
    { type: 'luckentext', category: '🟢 Prepoziția potrivită', question: 'Completează (oraș, mișcare spre, fără articol):', sentence: 'Mihai fährt ____ Berlin.', translation: 'Mihai merge la Berlin.', accept: ['nach'], correct: 'nach', explanation: 'nach + Dativ pentru orașe/țări FĂRĂ articol (nach Berlin, nach Deutschland).' },
    { type: 'multiple', category: '🟢 Prepoziția potrivită', question: 'Carolina kommt ____ Spanien. — origine permanentă?', options: ['von', 'aus', 'nach', 'bei'], correct: 'aus', explanation: 'aus + Dativ pentru origine (de unde provine — țară).' },
    { type: 'luckentext', category: '🟢 Prepoziția potrivită', question: 'Completează (de la persoană):', sentence: 'Das Geschenk ist ____ Annette.', translation: 'Cadoul e de la Annette.', accept: ['von'], correct: 'von', explanation: 'von + nume propriu (fără articol) pentru „de la persoană".' },

    // 5× Articol Dativ
    { type: 'multiple', category: '📋 Articol Dativ', question: 'Care e CORECT? (mit + masculin)', options: ['mit der Bus', 'mit dem Bus', 'mit den Bus', 'mit das Bus'], correct: 'mit dem Bus', explanation: 'Dativ + masc (der → dem): mit DEM Bus.' },
    { type: 'luckentext', category: '📋 Articol Dativ', question: 'Completează (Dativ feminin · die Schule):', sentence: 'Andreea kommt von ____ Schule.', translation: 'Andreea vine de la școală.', accept: ['der'], correct: 'der', explanation: 'Dativ + fem (die → der). NU se contractă cu von.' },
    { type: 'luckentext', category: '📋 Articol Dativ', question: 'Completează (Dativ plural · die Kinder + -n!):', sentence: 'Carolina spricht mit ____ Kindern.', translation: 'Carolina vorbește cu copiii.', accept: ['den'], correct: 'den', explanation: 'Dativ plural: die → den + -n la substantiv (Kinder → Kindern).' },
    { type: 'multiple', category: '📋 Articol Dativ', question: 'Țară cu articol! „Acar kommt aus ____ Türkei."', options: ['die', 'der', 'dem', 'den'], correct: 'der', explanation: 'die Türkei e feminin → Dativ der. Excepție: țări cu articol (die Schweiz, die USA).' },
    { type: 'luckentext', category: '📋 Articol Dativ', question: 'Completează (mein + Dativ masc · der Bruder):', sentence: 'Mihai wohnt bei ____ Bruder.', translation: 'Mihai locuiește la fratele meu.', accept: ['meinem'], correct: 'meinem', explanation: 'mein + Dativ masc → meinem (Bruder).' },

    // 4× Forme contrase
    { type: 'multiple', category: '🆕 Forme contrase', question: 'Care e CORECT? „Florian geht ____ Arzt."', options: ['zu dem', 'zum', 'zur', 'zu den'], correct: 'zum', explanation: 'zu + dem (masc) → contracție obligatorie ZUM. NU se mai scrie „zu dem".' },
    { type: 'multiple', category: '🆕 Forme contrase', question: 'Andreea geht ____ Universität. (die Universität · merge la = zu)', options: ['zum', 'zur', 'zu', 'zu der'], correct: 'zur', explanation: 'zu + der (fem) → contracție zur. „zur Universität".' },
    { type: 'luckentext', category: '🆕 Forme contrase', question: 'Forma contrasă cu bei (la cineva — staționare):', sentence: 'Mihai war ____ Bäcker. (der Bäcker)', translation: 'Mihai a fost la brutar.', accept: ['beim'], correct: 'beim', explanation: 'bei + dem = beim (masc/neutru). Pentru fem rămâne „bei der".' },
    { type: 'multiple', category: '🆕 Forme contrase', question: 'NU se contractează — care e CORECT?', options: ['Annette ist beim Arbeit.', 'Annette ist bei der Arbeit.', 'Annette ist beider Arbeit.', 'Annette ist beirzu Arbeit.'], correct: 'Annette ist bei der Arbeit.', explanation: 'bei + der (fem) NU se contractă — rămâne „bei der Arbeit".' },

    // 4× Wo/Wohin/Woher
    { type: 'multiple', category: '❓ Wo/Wohin/Woher', question: 'Andreea kommt aus Rumänien. — Care întrebare?', options: ['Wo?', 'Wohin?', 'Woher?', 'Wer?'], correct: 'Woher?', explanation: 'aus = origine → întrebarea e Woher? (de unde?). Caz: Dativ.' },
    { type: 'luckentext', category: '❓ Wo/Wohin/Woher', question: 'Completează cu Wo/Wohin/Woher:', sentence: '____ fährt Mihai? — Nach Berlin.', translation: 'Încotro merge Mihai? — La Berlin.', accept: ['wohin'], correct: 'Wohin', explanation: 'nach Berlin = mișcare spre → Wohin?' },
    { type: 'luckentext', category: '❓ Wo/Wohin/Woher', question: 'Completează cu Wo/Wohin/Woher:', sentence: '____ ist Florian? — Bei der Arbeit.', translation: 'Unde e Florian? — La lucru.', accept: ['wo'], correct: 'Wo', explanation: 'bei der Arbeit = POZIȚIE → Wo? (Dativ).' },
    { type: 'multiple', category: '❓ Wo/Wohin/Woher', question: 'Woher? cere ce caz?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], correct: 'Dativ', explanation: 'Woher? = mișcare DINSPRE → Dativ + aus/von. Atenție: Wohin? = Akkusativ + zu/nach (în Dat).' },

    // 3× Capcane
    { type: 'multiple', category: '🚨 Capcane', question: 'Andreea ____ Hause. (acasă, POZIȚIE)', options: ['nach', 'zu', 'bei', 'in'], correct: 'zu', explanation: 'zu Hause = acasă (POZIȚIE, deja acolo). nach Hause = mișcare. Expresie fixă FĂRĂ articol.' },
    { type: 'luckentext', category: '🚨 Capcane', question: 'Material — fără articol. Completează:', sentence: 'Der Ring ist ____ Gold.', translation: 'Inelul e din aur.', accept: ['aus'], correct: 'aus', explanation: 'aus + material = fără articol (aus Gold, aus Holz, aus Plastik).' },
    { type: 'multiple', category: '🚨 Capcane', question: 'Florian merge pe jos. Care e CORECT?', options: ['Florian geht mit Fuß.', 'Florian geht zu Fuß.', 'Florian geht beim Fuß.', 'Florian geht im Fuß.'], correct: 'Florian geht zu Fuß.', explanation: 'zu Fuß = pe jos, expresie FIXĂ fără mit. NU „mit Fuß"!' },

    // 3× aus vs von
    { type: 'multiple', category: '🎯 aus vs von', question: 'Andreea kommt gerade ____ Arbeit. (de la loc, mișcare punctuală)', options: ['aus der', 'von der', 'zu der', 'bei der'], correct: 'von der', explanation: 'von + loc (mișcare punctuală — întoarcere). aus ar fi pentru origine.' },
    { type: 'luckentext', category: '🎯 aus vs von', question: 'Completează (origine — țară fără articol):', sentence: 'Annette kommt ____ Deutschland.', translation: 'Annette vine din Germania.', accept: ['aus'], correct: 'aus', explanation: 'aus + țară fără articol = origine permanentă (Deutschland, Rumänien, Italien).' },
    { type: 'multiple', category: '🎯 aus vs von', question: 'Carolina nimmt das Foto ____ Schublade. (din interior obiect)', options: ['aus der', 'von der', 'zu der', 'in die'], correct: 'aus der', explanation: 'aus + obiect (interior, cu articol). Acțiunea e „a scoate din interior" → aus.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre cele 7 prepoziții fixe Dativ, forme contrase, trio Wo/Wohin/Woher, capcane.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 12-15 minute (Atelier de Aprofundare)</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true; testCompleted = false; currentQuestionIndex = 0; userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback'; feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => { if (r.value === userAnswers[index].answer) r.checked = true; });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index); checkBtn.disabled = true; setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false; setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false; setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        // 🆕 22 mai 2026 — acceptă atât fragmentul cât și propoziția întreagă
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
        if (!isCorrect && q.sentence) {
            const sentenceClean = q.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
            isCorrect = q.accept.some(a => {
                const full = sentenceClean.replace(/____+/g, a);
                return normalizeTestAnswer(full) === norm;
            });
        }
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) { finishTest(); }
    else { currentQuestionIndex++; showQuestion(currentQuestionIndex); scrollToTest(); }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(currentQuestionIndex); scrollToTest(); }
}

function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k]; const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#6b7280;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none'; r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0; userAnswers = {}; testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0); scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) {
        t.classList.add('active');
        if (a) a.classList.add('rotated');
    }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
