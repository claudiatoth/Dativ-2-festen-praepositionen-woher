// ============================================
// TEORIE - Atelier de Aprofundare Dativ — Lecția 2:
// Die 7 festen Präpositionen Dativ + Woher?
// Claudia Toth · Annettes Deutschkurs
// Sursă: A2 Positionsverben Teil 2 (extindere + Woher complet)
// REGULĂ: NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + Wo/Wohin/Woher trio + notice diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🎯 1. Trio complet — Wo? Wohin? Woher?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-trio-wo-wohin-woher.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ss</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ß</code></li>
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ae/oe/ue</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ä/ö/ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Diacriticele RO le accept și cu, și fără."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🛠️ Atelierul continuă — Lecția 2!</h4>
                <p>La Lecția 1 ai stăpânit Wechselpräpositionen (cele care se schimbă între Dativ și Akkusativ). Aici aprofundăm <strong>cele 7 prepoziții FIXE</strong> — care cer MEREU Dativ, niciodată Akkusativ. Plus completăm <strong>trio-ul direcțional Wo/Wohin/Woher</strong>.</p>
                <p style="margin-top: 8px;">📌 Această Lecție 2 e <strong>cea mai practică din întregul atelier</strong>: prepozițiile fixe Dativ apar în FIECARE conversație zilnică (mit dem Auto, zur Arbeit, bei der Familie, von der Schule, aus Rumänien, nach Berlin, seit drei Jahren).</p>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Trio direcțional — completarea logicii</h4>
                <p>În germană, întreaga logică spațială se rezolvă cu <strong>3 întrebări</strong>:</p>
                <table class="grammar-table">
                    <tr><th>Întrebare</th><th>Sens</th><th>Caz</th><th>Prepoziții tipice</th><th>Traducere RO</th></tr>
                    <tr><td><strong>Wo?</strong></td><td>poziție statică</td><td>Dativ</td><td>9 Wechselpräp (Lecția 1) · bei · zu (la cineva acasă)</td><td><em style="color:#6b7280;">Unde?</em></td></tr>
                    <tr><td><strong>Wohin?</strong></td><td>mișcare SPRE un loc</td><td>Akkusativ</td><td>9 Wechselpräp (Lecția 1) · nach · zu (formal Dativ)</td><td><em style="color:#6b7280;">Încotro? Spre unde?</em></td></tr>
                    <tr><td><strong>Woher?</strong> 🆕</td><td>mișcare DINSPRE un loc</td><td><strong>Dativ</strong></td><td><strong>aus</strong> · <strong>von</strong></td><td><em style="color:#6b7280;">De unde?</em></td></tr>
                </table>
                <p style="margin-top: 8px;">🦋 Trucul: Wo? și Woher? cer AMBELE Dativ — diferă doar prepozițiile (Wo: bei/zu · Woher: aus/von) și direcția implicită (statică vs dinspre).</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea (la o cafenea cu un nou prieten)</div>
                        <div class="dialog-text"><strong>Woher</strong> kommst du?
                            <span class="translation">De unde vii? (Wo + her = de unde? · cere Dativ + aus/von)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Ich komme <strong>aus</strong> Deutschland — <strong>aus</strong> Berlin, genauer gesagt. Und gerade jetzt komme ich <strong>von der</strong> Arbeit.
                            <span class="translation">Vin din Germania — din Berlin, mai precis. Și chiar acum vin de la lucru. (aus = origine fără articol pentru țară · von der = de la persoană/loc cu articol)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 1: Cele 7 prepoziții fixe Dativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🟢 2. Cele 7 prepoziții care cer MEREU Dativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-cele-7-prep.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Mnemonic: MIT · ZU · BEI · VON · AUS · NACH · SEIT</h4>
                <p>Aceste <strong>7 prepoziții</strong> cer MEREU Dativ — nu se schimbă niciodată, indiferent de context. Învață-le ca pe o rugăciune: cuvântul de după ele <strong>obligatoriu</strong> la Dativ.</p>
            </div>

            <table class="grammar-table">
                <tr><th>Prepoziție</th><th>Sens principal</th><th>Exemplu</th><th>Traducere RO</th></tr>
                <tr><td><strong>mit</strong></td><td>cu (împreună, mijloc)</td><td>Andreea fährt <strong>mit dem</strong> Zug nach Berlin.</td><td><em style="color:#6b7280;">Andreea merge cu trenul la Berlin.</em></td></tr>
                <tr><td><strong>zu</strong></td><td>la (persoană/loc, mișcare)</td><td>Florian geht <strong>zur</strong> Arbeit.</td><td><em style="color:#6b7280;">Florian merge la lucru. (zur = zu + der)</em></td></tr>
                <tr><td><strong>bei</strong></td><td>la (cineva acasă / firmă)</td><td>Acar wohnt <strong>bei seinen</strong> Eltern.</td><td><em style="color:#6b7280;">Acar locuiește la părinții lui.</em></td></tr>
                <tr><td><strong>von</strong></td><td>de la / al lui</td><td>Das Geschenk ist <strong>von der</strong> Carolina.</td><td><em style="color:#6b7280;">Cadoul e de la Carolina.</em></td></tr>
                <tr><td><strong>aus</strong></td><td>din (țară/material/interior)</td><td>Annette kommt <strong>aus</strong> Deutschland.</td><td><em style="color:#6b7280;">Annette vine din Germania. (țară fără articol!)</em></td></tr>
                <tr><td><strong>nach</strong></td><td>spre (oraș/țară/Hause)</td><td>Mihai fährt <strong>nach</strong> Berlin.</td><td><em style="color:#6b7280;">Mihai merge la Berlin. (oraș fără articol!)</em></td></tr>
                <tr><td><strong>seit</strong></td><td>de când / începând cu</td><td>Carolina arbeitet <strong>seit einem</strong> Jahr in Berlin.</td><td><em style="color:#6b7280;">Carolina lucrează de un an în Berlin.</em></td></tr>
            </table>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🦋 Trucul de memorie</h4>
                <p>Mnemonic vechi pentru cele 7 (folosit în clasele de germană din toată lumea):</p>
                <p style="font-family: monospace; background: #fff; padding: 8px; border-radius: 6px; text-align: center;">
                    <strong>MIT · NACH · BEI · SEIT · VON · ZU · AUS</strong>
                </p>
                <p style="margin-top: 6px; font-size: 0.95em;">Repetă-l cu voce tare de 5 ori. Apoi la fiecare propoziție pe care o construiești, întreabă-te: „e una din cele 7?". Dacă DA → automat Dativ.</p>
            </div>
        </div>
    </div>

    <!-- 2: Articole Dativ recap + 4 forme contrase -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📋 3. Articole Dativ + 4 forme contrase (zum · zur · beim · vom)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-contrase-dativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Recap rapid — articole Dativ (din Lecția 1)</h4>
                <table class="grammar-table">
                    <tr><th>Gen</th><th>Nominativ</th><th>Dativ</th><th>Exemplu cu MIT</th><th>Traducere RO</th></tr>
                    <tr><td><strong>masculin</strong></td><td>der</td><td><strong>dem</strong></td><td>mit <strong>dem</strong> Bus</td><td><em style="color:#6b7280;">cu autobuzul</em></td></tr>
                    <tr><td><strong>feminin</strong></td><td>die</td><td><strong>der</strong></td><td>mit <strong>der</strong> Bahn</td><td><em style="color:#6b7280;">cu trenul (regional)</em></td></tr>
                    <tr><td><strong>neutru</strong></td><td>das</td><td><strong>dem</strong></td><td>mit <strong>dem</strong> Auto</td><td><em style="color:#6b7280;">cu mașina</em></td></tr>
                    <tr><td><strong>plural</strong></td><td>die</td><td><strong>den</strong> + -n!</td><td>mit <strong>den</strong> Kinder<strong>n</strong></td><td><em style="color:#6b7280;">cu copiii</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🆕 Cele 4 forme contrase Dativ — MEMOREAZĂ-LE!</h4>
                <p>Anumite combinații prepoziție + articol Dativ se contractează în UN singur cuvânt. Sunt forme <strong>obligatorii</strong> în vorbirea naturală (nu opționale ca Wechselpräp aufs):</p>
                <table class="grammar-table">
                    <tr><th>Combinație</th><th>Formă contrasă</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td>zu + dem (masc/neutru)</td><td><strong>zum</strong></td><td>Florian geht <strong>zum</strong> Arzt.</td><td><em style="color:#6b7280;">Florian merge la doctor.</em></td></tr>
                    <tr><td>zu + der (feminin)</td><td><strong>zur</strong></td><td>Andreea geht <strong>zur</strong> Universität.</td><td><em style="color:#6b7280;">Andreea merge la universitate.</em></td></tr>
                    <tr><td>bei + dem (masc/neutru)</td><td><strong>beim</strong></td><td>Mihai war <strong>beim</strong> Bäcker.</td><td><em style="color:#6b7280;">Mihai a fost la brutar.</em></td></tr>
                    <tr><td>von + dem (masc/neutru)</td><td><strong>vom</strong></td><td>Carolina kommt <strong>vom</strong> Markt.</td><td><em style="color:#6b7280;">Carolina vine de la piață.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>⚠️ Ce NU se contractează</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>mit, aus, nach, seit</strong> — NU se contractează niciodată. (NU există „mitm", „ausm" etc.)</li>
                    <li><strong>zu + der</strong> (feminin) → DA se contractează la „zur"</li>
                    <li><strong>bei + der</strong> (feminin) → NU se contractează: „<em>bei der Arbeit</em>" (rămâne separat)</li>
                    <li><strong>von + der</strong> (feminin) → NU se contractează: „<em>von der Schule</em>" (rămâne separat)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 3: 🚨 Capcanele clasice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🚨 4. Stolpersteine — capcanele clasice ale prepozițiilor Dativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-stolpersteine.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana 1: nach Hause vs zu Hause</h4>
                <p>AMBELE înseamnă „acasă" — dar se folosesc DIFERIT după context:</p>
                <table class="grammar-table">
                    <tr><th>Forma</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>nach Hause</strong></td><td>acasă (MIȘCARE)</td><td>Ich gehe <strong>nach Hause</strong>.</td><td><em style="color:#6b7280;">Merg ACASĂ. (mă duc spre casă)</em></td></tr>
                    <tr><td><strong>zu Hause</strong></td><td>acasă (POZIȚIE)</td><td>Ich bin <strong>zu Hause</strong>.</td><td><em style="color:#6b7280;">Sunt ACASĂ. (deja acolo)</em></td></tr>
                </table>
                <p style="margin-top: 8px;">💡 Truc: <em>nach</em> = direcția spre casă · <em>zu</em> = locul (acasă deja). Expresii FIXE — fără articol (NU „zu dem Hause"!).</p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana 2: bei + persoană vs zu + persoană</h4>
                <table class="grammar-table">
                    <tr><th>Forma</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>bei + persoană</strong></td><td>POZIȚIE (la cineva, ești deja acolo)</td><td>Ich bin <strong>bei meiner</strong> Mutter.</td><td><em style="color:#6b7280;">Sunt LA mama. (deja acolo)</em></td></tr>
                    <tr><td><strong>zu + persoană</strong></td><td>MIȘCARE (mergi la cineva)</td><td>Ich gehe <strong>zu meiner</strong> Mutter.</td><td><em style="color:#6b7280;">Merg LA mama. (acțiune)</em></td></tr>
                </table>
                <p style="margin-top: 8px;">💡 Same regulă ca Wo/Wohin — dar ambele cer Dativ aici (cazul nu se schimbă).</p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana 3: aus + țară (fără articol) vs aus + obiect (cu articol)</h4>
                <table class="grammar-table">
                    <tr><th>Folosire</th><th>Articol?</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>aus + țară</strong> (origine)</td><td>FĂRĂ articol</td><td>Andreea kommt <strong>aus</strong> Rumänien.</td><td><em style="color:#6b7280;">Andreea vine din România.</em></td></tr>
                    <tr><td><strong>aus + obiect</strong> (interior)</td><td>CU articol</td><td>Mihai nimmt das Brot <strong>aus dem</strong> Ofen.</td><td><em style="color:#6b7280;">Mihai scoate pâinea din cuptor.</em></td></tr>
                    <tr><td><strong>aus + material</strong> (din ce e făcut)</td><td>FĂRĂ articol</td><td>Der Ring ist <strong>aus</strong> Gold.</td><td><em style="color:#6b7280;">Inelul e din aur.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">⚠️ Excepție: țări cu articol (die Türkei, die Schweiz, die USA) → <em>aus <strong>der</strong> Türkei</em> · <em>aus <strong>den</strong> USA</em>.</p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana 4: mit + mijloc de transport (fără articol uneori)</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>mit + transport general</strong> (cu articol): <em>mit <strong>dem</strong> Auto</em> · <em>mit <strong>der</strong> Bahn</em> · <em>mit <strong>dem</strong> Bus</em></li>
                    <li><strong>mit + pe jos / pe bicicletă</strong>: <em>zu Fuß</em> (NU mit!) · <em>mit <strong>dem</strong> Fahrrad</em></li>
                    <li><strong>mit + persoană</strong>: <em>mit <strong>meiner</strong> Schwester</em> (cu sora mea)</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana 5: seit + durată continuă (NU pentru vârstă!)</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>seit + durată</strong> (continuă până ACUM): <em>seit <strong>einem</strong> Jahr</em> (de un an) · <em>seit <strong>3</strong> Wochen</em> (de 3 săptămâni)</li>
                    <li><strong>seit + dată/eveniment</strong>: <em>seit Montag</em> (de luni) · <em>seit dem Sommer</em> (din vară)</li>
                    <li>⚠️ NU pentru vârstă: NU spui „<em>seit 5 Jahren</em>" pentru a spune că ai 5 ani (folosești „<em>5 Jahre alt</em>")</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 4: Woher? — aus vs von complet -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>❓ 5. Woher? — aus vs von (când folosești fiecare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-woher-aus-von.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Întrebarea Woher? răspunde cu aus SAU von</h4>
                <p>Întrebarea <strong>Woher?</strong> (= De unde?) cere obligatoriu <strong>Dativ</strong> + una din 2 prepoziții: <strong>aus</strong> sau <strong>von</strong>. Distincția e CRITICĂ:</p>
            </div>

            <table class="grammar-table">
                <tr><th>Prepoziție</th><th>Folosire principală</th><th>Exemplu</th><th>Traducere RO</th></tr>
                <tr><td><strong>aus</strong></td><td>origine (țară/oraș/regiune)</td><td>Andreea kommt <strong>aus</strong> Rumänien.</td><td><em style="color:#6b7280;">Andreea vine din România. (origine)</em></td></tr>
                <tr><td><strong>aus</strong></td><td>din interiorul ceva (obiect)</td><td>Carolina nimmt das Foto <strong>aus der</strong> Schublade.</td><td><em style="color:#6b7280;">Carolina scoate poza din sertar.</em></td></tr>
                <tr><td><strong>von</strong></td><td>de la o persoană</td><td>Mihai bekommt das Geschenk <strong>von</strong> Annette.</td><td><em style="color:#6b7280;">Mihai primește cadoul de la Annette.</em></td></tr>
                <tr><td><strong>von</strong></td><td>de la un loc (de unde te întorci)</td><td>Florian kommt <strong>von der</strong> Arbeit.</td><td><em style="color:#6b7280;">Florian vine de la lucru.</em></td></tr>
                <tr><td><strong>von</strong></td><td>posesie / al cuiva</td><td>Das ist das Auto <strong>von</strong> Acar.</td><td><em style="color:#6b7280;">Asta e mașina lui Acar.</em></td></tr>
            </table>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🦋 Truc pentru Woher? — întrebare-test</h4>
                <p>Dacă întrebarea e <strong>„de unde provine X?" (origine permanentă)</strong> → <strong>aus</strong> (aus Berlin, aus Rumänien)</p>
                <p style="margin-top: 6px;">Dacă întrebarea e <strong>„de unde se întoarce X acum?" (mișcare punctuală)</strong> → <strong>von</strong> (von der Arbeit, von der Schule)</p>
                <p style="margin-top: 8px;">Exemple care arată diferența clar:</p>
                <ul style="margin-left: 18px;">
                    <li>Carolina kommt <strong>aus</strong> Spanien. (E spaniolă, origine.)</li>
                    <li>Carolina kommt <strong>von</strong> Spanien. (Tocmai se întoarce dintr-o călătorie în Spania.)</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>⚠️ Capcana von + persoană fără articol</h4>
                <p>Cu nume proprii de persoane, <strong>von</strong> NU primește articol:</p>
                <ul style="margin-left: 18px;">
                    <li>✅ Das Geschenk ist <strong>von</strong> Andreea. (de la Andreea — fără articol)</li>
                    <li>✅ Das Geschenk ist <strong>von der</strong> Lehrerin. (de la profesoară — cu articol pentru rol/profesie)</li>
                    <li>❌ Das Geschenk ist von <strong>der</strong> Andreea. (greșit la oral standard, ok colocvial)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 5: Sinteză + dialog 6 personaje -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🎬 6. Sinteză + dialog 6 personaje</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-sinteza-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🦋 Cele 6 personaje, fiecare cu o prepoziție fixă Dativ</h4>
                <p>Annette le-a cerut elevilor să spună o propoziție despre ziua lor — fiecare a folosit altă prepoziție. Bonus: vezi Woher? în acțiune:</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai (la restaurantul lui)</div>
                        <div class="dialog-text">Ich arbeite <strong>seit</strong> drei Jahren in meinem eigenen Restaurant.
                            <span class="translation">Lucrez de trei ani la propriul meu restaurant. (seit + Dativ)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea (după ore)</div>
                        <div class="dialog-text">Ich fahre <strong>mit dem</strong> Zug <strong>nach</strong> Berlin, dann <strong>zu meinem</strong> Onkel.
                            <span class="translation">Merg cu trenul la Berlin, apoi la unchiul meu. (3 prep fixe!)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian (la spital)</div>
                        <div class="dialog-text">Ich komme gerade <strong>von der</strong> Arbeit — die Patienten <strong>bei mir</strong> waren zahlreich heute.
                            <span class="translation">Vin chiar acum de la lucru — pacienții la mine au fost numeroși azi. (von + bei)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina (cu camera ei)</div>
                        <div class="dialog-text">Heute habe ich Fotos <strong>vom</strong> Markt und <strong>von der</strong> Brücke gemacht. Das Geschenk hier ist <strong>von</strong> Mihai.
                            <span class="translation">Azi am făcut poze de la piață și de la pod. Cadoul aici e de la Mihai.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar (Vorarbeiter)</div>
                        <div class="dialog-text">Ich komme <strong>aus</strong> der Türkei, lebe <strong>bei meiner</strong> Familie und arbeite <strong>mit meinen</strong> Kollegen am Projekt.
                            <span class="translation">Vin din Turcia, locuiesc cu familia mea și lucrez cu colegii la proiect. (aus + bei + mit)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette (profesoara)</div>
                        <div class="dialog-text">Bravo! Acum vedeți puterea: cu cele 7 prepoziții fixe + Woher? puteți spune <strong>orice</strong> despre direcție, origine, durată, însoțire. 🦋
                            <span class="translation">Bravo! Acum vedeți puterea: cu cele 7 prepoziții fixe + Woher? puteți spune ORICE despre direcție, origine, durată, însoțire.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Cele 6 reguli de aur ale lecției</h4>
                <ol style="margin-left: 18px;">
                    <li>Cele <strong>7 prepoziții fixe Dativ</strong>: <strong>mit · zu · bei · von · aus · nach · seit</strong></li>
                    <li>Cele <strong>4 forme contrase</strong>: zum (zu+dem) · zur (zu+der) · beim (bei+dem) · vom (von+dem). NU se contractează: bei der, von der.</li>
                    <li><strong>Woher? = De unde?</strong> → Dativ + aus (origine) sau von (de la persoană/loc punctual)</li>
                    <li>🚨 <strong>nach Hause</strong> (mișcare) vs <strong>zu Hause</strong> (poziție) — ambele FĂRĂ articol</li>
                    <li><strong>aus + țară fără articol</strong> (aus Rumänien) · aus + obiect cu articol (aus dem Ofen) · aus + material fără articol (aus Gold)</li>
                    <li><strong>seit + durată</strong> = continuă până ACUM (NU pentru vârstă)</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Acum stăpânești 16 prepoziții totale cu Dativ (9 Wechsel + 7 fixe)! Urmează Lecția 3 — Stolpersteine aprofundat. 🛠️🦋</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}
