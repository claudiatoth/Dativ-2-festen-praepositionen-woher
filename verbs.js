// ============================================
// VERB-KONJUGATION - Atelier de Aprofundare Dativ — Lecția 2
// Claudia Toth · 6 verbe asociate cu prepoziții fixe Dativ
// fahren+mit/nach · wohnen+bei/seit · kommen+aus/von · gehen+zu · arbeiten+bei/mit · bekommen+von
// Toate verificate PONS · Präteritum → RO imperfect
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'fahren', ro: 'a merge (cu un vehicul) · MIT/NACH + Dativ', typ: 'tare / neregulat (verb de mișcare)', aux: 'sein', part: 'gefahren',
        praes: [['ich','fahre','merg'],['du','fährst','mergi'],['er/sie/es','fährt','merge'],['wir','fahren','mergem'],['ihr','fahrt','mergeți'],['sie/Sie','fahren','merg']],
        praet: [['ich','fuhr','mergeam'],['du','fuhrst','mergeai'],['er/sie/es','fuhr','mergea'],['wir','fuhren','mergeam'],['ihr','fuhrt','mergeați'],['sie/Sie','fuhren','mergeau']],
        perf: [['ich','bin gefahren','am mers'],['du','bist gefahren','ai mers'],['er/sie/es','ist gefahren','a mers'],['wir','sind gefahren','am mers'],['ihr','seid gefahren','ați mers'],['sie/Sie','sind gefahren','au mers']],
        note: 'TARE: a → ä (Präsens: du fährst, er fährt) · Präteritum fuhr · Partizip gefahren. 🚨 Perfekt cu SEIN (verb de mișcare): „Andreea IST gefahren". Folosire-cheie: fahren MIT + Dativ (mit dem Zug) + fahren NACH + Dativ (nach Berlin). Verificat PONS.'
    },
    {
        inf: 'wohnen', ro: 'a locui · BEI/SEIT + Dativ', typ: 'slab / regulat', aux: 'haben', part: 'gewohnt',
        praes: [['ich','wohne','locuiesc'],['du','wohnst','locuiești'],['er/sie/es','wohnt','locuiește'],['wir','wohnen','locuim'],['ihr','wohnt','locuiți'],['sie/Sie','wohnen','locuiesc']],
        praet: [['ich','wohnte','locuiam'],['du','wohntest','locuiai'],['er/sie/es','wohnte','locuia'],['wir','wohnten','locuiam'],['ihr','wohntet','locuiați'],['sie/Sie','wohnten','locuiau']],
        perf: [['ich','habe gewohnt','am locuit'],['du','hast gewohnt','ai locuit'],['er/sie/es','hat gewohnt','a locuit'],['wir','haben gewohnt','am locuit'],['ihr','habt gewohnt','ați locuit'],['sie/Sie','haben gewohnt','au locuit']],
        note: 'Slab/regulat (deja conjugat la Lecția 1 A1). Folosire-cheie pentru Atelier: wohnen BEI + Dativ (Acar wohnt bei seinen Eltern) + wohnen SEIT + Dativ (Ich wohne seit drei Jahren in Berlin). Verificat PONS.'
    },
    {
        inf: 'kommen', ro: 'a veni · AUS/VON + Dativ (Woher?)', typ: 'tare / neregulat (verb de mișcare)', aux: 'sein', part: 'gekommen',
        praes: [['ich','komme','vin'],['du','kommst','vii'],['er/sie/es','kommt','vine'],['wir','kommen','venim'],['ihr','kommt','veniți'],['sie/Sie','kommen','vin']],
        praet: [['ich','kam','veneam'],['du','kamst','veneai'],['er/sie/es','kam','venea'],['wir','kamen','veneam'],['ihr','kamt','veneați'],['sie/Sie','kamen','veneau']],
        perf: [['ich','bin gekommen','am venit'],['du','bist gekommen','ai venit'],['er/sie/es','ist gekommen','a venit'],['wir','sind gekommen','am venit'],['ihr','seid gekommen','ați venit'],['sie/Sie','sind gekommen','au venit']],
        note: 'TARE: Präteritum kam (NU kommte!) · Partizip gekommen. 🚨 Perfekt cu SEIN (verb de mișcare). Folosire-cheie: kommen AUS + Dativ (origine — aus Rumänien) + kommen VON + Dativ (de la persoană/loc — von der Arbeit). Verificat PONS.'
    },
    {
        inf: 'gehen', ro: 'a merge (pe jos) · ZU + Dativ', typ: 'tare / neregulat (verb de mișcare)', aux: 'sein', part: 'gegangen',
        praes: [['ich','gehe','merg'],['du','gehst','mergi'],['er/sie/es','geht','merge'],['wir','gehen','mergem'],['ihr','geht','mergeți'],['sie/Sie','gehen','merg']],
        praet: [['ich','ging','mergeam'],['du','gingst','mergeai'],['er/sie/es','ging','mergea'],['wir','gingen','mergeam'],['ihr','gingt','mergeați'],['sie/Sie','gingen','mergeau']],
        perf: [['ich','bin gegangen','am mers'],['du','bist gegangen','ai mers'],['er/sie/es','ist gegangen','a mers'],['wir','sind gegangen','am mers'],['ihr','seid gegangen','ați mers'],['sie/Sie','sind gegangen','au mers']],
        note: 'TARE: Präteritum ging (NU gehte!) · Partizip gegangen. 🚨 Perfekt cu SEIN (verb de mișcare). Folosire-cheie: gehen ZU + Dativ (zur Arbeit, zum Arzt, zu meinem Vater). NU confunda cu fahren — gehen e PE JOS, fahren e cu vehicul. Verificat PONS.'
    },
    {
        inf: 'arbeiten', ro: 'a lucra · BEI + Dativ (firmă) · MIT + Dativ (cineva)', typ: 'slab / regulat (-t Stamm)', aux: 'haben', part: 'gearbeitet',
        praes: [['ich','arbeite','lucrez'],['du','arbeitest','lucrezi'],['er/sie/es','arbeitet','lucrează'],['wir','arbeiten','lucrăm'],['ihr','arbeitet','lucrați'],['sie/Sie','arbeiten','lucrează']],
        praet: [['ich','arbeitete','lucram'],['du','arbeitetest','lucrai'],['er/sie/es','arbeitete','lucra'],['wir','arbeiteten','lucram'],['ihr','arbeitetet','lucrați'],['sie/Sie','arbeiteten','lucrau']],
        perf: [['ich','habe gearbeitet','am lucrat'],['du','hast gearbeitet','ai lucrat'],['er/sie/es','hat gearbeitet','a lucrat'],['wir','haben gearbeitet','am lucrat'],['ihr','habt gearbeitet','ați lucrat'],['sie/Sie','haben gearbeitet','au lucrat']],
        note: 'Slab/regulat (-t Stamm → -e adițional la du/er/ihr: arbeitest, arbeitet). Conjugat la Lecția 3 A1. Folosire-cheie pentru Atelier: arbeiten BEI + Dativ (Acar arbeitet bei VW) + arbeiten MIT + Dativ (mit meinen Kollegen). Verificat PONS.'
    },
    {
        inf: 'bekommen', ro: '🚨 a PRIMI (NU „a deveni"!) · VON + Dativ', typ: 'tare / neregulat (prefix be-)', aux: 'haben', part: 'bekommen',
        praes: [['ich','bekomme','primesc'],['du','bekommst','primești'],['er/sie/es','bekommt','primește'],['wir','bekommen','primim'],['ihr','bekommt','primiți'],['sie/Sie','bekommen','primesc']],
        praet: [['ich','bekam','primeam'],['du','bekamst','primeai'],['er/sie/es','bekam','primea'],['wir','bekamen','primeam'],['ihr','bekamt','primeați'],['sie/Sie','bekamen','primeau']],
        perf: [['ich','habe bekommen','am primit'],['du','hast bekommen','ai primit'],['er/sie/es','hat bekommen','a primit'],['wir','haben bekommen','am primit'],['ihr','habt bekommen','ați primit'],['sie/Sie','haben bekommen','au primit']],
        note: '🚨 FALSE FRIEND englez! „bekommen" = a PRIMI (NU „to become" = a deveni — acela e „werden"!). TARE: bekam · Partizip bekommen (FĂRĂ ge- pentru că prefix be-). 🚨 Perfekt cu HABEN (NU sein, deși are prefix). Folosire-cheie: bekommen + Akk + VON + Dativ → Mihai bekommt das Geschenk VON Andreea. Verificat PONS.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe asociate cu prepoziții fixe Dativ.</strong> Toate verificate PONS.<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong>.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Aceste 6 verbe sunt OBSESIA prepozițiilor Dativ. fahren MIT/NACH, wohnen BEI/SEIT, kommen AUS/VON, gehen ZU, arbeiten BEI/MIT, bekommen VON. 🚨 Atenție: 3 sunt TARI cu Perfekt SEIN (fahren, kommen, gehen — verbe de mișcare) · 1 e TARE cu Perfekt HABEN și FALSE FRIEND (bekommen = a PRIMI, NU a deveni!). 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
