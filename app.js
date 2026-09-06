const SUPABASE_URL = 'https://kymlzjqwxaqyejggkrxa.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2AyZzaxNwShC1Z5uyI9ZxA_GjNa31LY';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const players = ["Christian", "Chuka", "Denis", "Abba4040", "IKay", "Isaac", "NNamdi", "Nonso", "Ugo", "Buchi", "Wolf of Wall Street", "Ola", "Rex", "Joe"];
const rounds = [[["Christian", "Joe"], ["Chuka", "Rex"], ["Denis", "Ola"], ["Abba4040", "Wolf of Wall Street"], ["IKay", "Buchi"], ["Isaac", "Ugo"], ["NNamdi", "Nonso"]], [["Rex", "Christian"], ["Ola", "Joe"], ["Wolf of Wall Street", "Chuka"], ["Buchi", "Denis"], ["Ugo", "Abba4040"], ["Nonso", "IKay"], ["NNamdi", "Isaac"]], [["Christian", "Ola"], ["Rex", "Wolf of Wall Street"], ["Joe", "Buchi"], ["Chuka", "Ugo"], ["Denis", "Nonso"], ["Abba4040", "NNamdi"], ["IKay", "Isaac"]], [["Wolf of Wall Street", "Christian"], ["Buchi", "Ola"], ["Ugo", "Rex"], ["Nonso", "Joe"], ["NNamdi", "Chuka"], ["Isaac", "Denis"], ["IKay", "Abba4040"]], [["Christian", "Buchi"], ["Wolf of Wall Street", "Ugo"], ["Ola", "Nonso"], ["Rex", "NNamdi"], ["Joe", "Isaac"], ["Chuka", "IKay"], ["Denis", "Abba4040"]], [["Ugo", "Christian"], ["Nonso", "Buchi"], ["NNamdi", "Wolf of Wall Street"], ["Isaac", "Ola"], ["IKay", "Rex"], ["Abba4040", "Joe"], ["Denis", "Chuka"]], [["Christian", "Nonso"], ["Ugo", "NNamdi"], ["Buchi", "Isaac"], ["Wolf of Wall Street", "IKay"], ["Ola", "Abba4040"], ["Rex", "Denis"], ["Joe", "Chuka"]], [["NNamdi", "Christian"], ["Isaac", "Nonso"], ["IKay", "Ugo"], ["Abba4040", "Buchi"], ["Denis", "Wolf of Wall Street"], ["Chuka", "Ola"], ["Joe", "Rex"]], [["Christian", "Isaac"], ["NNamdi", "IKay"], ["Nonso", "Abba4040"], ["Ugo", "Denis"], ["Buchi", "Chuka"], ["Wolf of Wall Street", "Joe"], ["Ola", "Rex"]], [["IKay", "Christian"], ["Abba4040", "Isaac"], ["Denis", "NNamdi"], ["Chuka", "Nonso"], ["Joe", "Ugo"], ["Rex", "Buchi"], ["Ola", "Wolf of Wall Street"]], [["Christian", "Abba4040"], ["IKay", "Denis"], ["Isaac", "Chuka"], ["NNamdi", "Joe"], ["Nonso", "Rex"], ["Ugo", "Ola"], ["Buchi", "Wolf of Wall Street"]], [["Denis", "Christian"], ["Chuka", "Abba4040"], ["Joe", "IKay"], ["Rex", "Isaac"], ["Ola", "NNamdi"], ["Wolf of Wall Street", "Nonso"], ["Buchi", "Ugo"]], [["Christian", "Chuka"], ["Denis", "Joe"], ["Abba4040", "Rex"], ["IKay", "Ola"], ["Isaac", "Wolf of Wall Street"], ["NNamdi", "Buchi"], ["Nonso", "Ugo"]], [["Joe", "Christian"], ["Rex", "Chuka"], ["Ola", "Denis"], ["Wolf of Wall Street", "Abba4040"], ["Buchi", "IKay"], ["Ugo", "Isaac"], ["Nonso", "NNamdi"]], [["Christian", "Rex"], ["Joe", "Ola"], ["Chuka", "Wolf of Wall Street"], ["Denis", "Buchi"], ["Abba4040", "Ugo"], ["IKay", "Nonso"], ["Isaac", "NNamdi"]], [["Ola", "Christian"], ["Wolf of Wall Street", "Rex"], ["Buchi", "Joe"], ["Ugo", "Chuka"], ["Nonso", "Denis"], ["NNamdi", "Abba4040"], ["Isaac", "IKay"]], [["Christian", "Wolf of Wall Street"], ["Ola", "Buchi"], ["Rex", "Ugo"], ["Joe", "Nonso"], ["Chuka", "NNamdi"], ["Denis", "Isaac"], ["Abba4040", "IKay"]], [["Buchi", "Christian"], ["Ugo", "Wolf of Wall Street"], ["Nonso", "Ola"], ["NNamdi", "Rex"], ["Isaac", "Joe"], ["IKay", "Chuka"], ["Abba4040", "Denis"]], [["Christian", "Ugo"], ["Buchi", "Nonso"], ["Wolf of Wall Street", "NNamdi"], ["Ola", "Isaac"], ["Rex", "IKay"], ["Joe", "Abba4040"], ["Chuka", "Denis"]], [["Nonso", "Christian"], ["NNamdi", "Ugo"], ["Isaac", "Buchi"], ["IKay", "Wolf of Wall Street"], ["Abba4040", "Ola"], ["Denis", "Rex"], ["Chuka", "Joe"]], [["Christian", "NNamdi"], ["Nonso", "Isaac"], ["Ugo", "IKay"], ["Buchi", "Abba4040"], ["Wolf of Wall Street", "Denis"], ["Ola", "Chuka"], ["Rex", "Joe"]], [["Isaac", "Christian"], ["IKay", "NNamdi"], ["Abba4040", "Nonso"], ["Denis", "Ugo"], ["Chuka", "Buchi"], ["Joe", "Wolf of Wall Street"], ["Rex", "Ola"]], [["Christian", "IKay"], ["Isaac", "Abba4040"], ["NNamdi", "Denis"], ["Nonso", "Chuka"], ["Ugo", "Joe"], ["Buchi", "Rex"], ["Wolf of Wall Street", "Ola"]], [["Abba4040", "Christian"], ["Denis", "IKay"], ["Chuka", "Isaac"], ["Joe", "NNamdi"], ["Rex", "Nonso"], ["Ola", "Ugo"], ["Wolf of Wall Street", "Buchi"]], [["Christian", "Denis"], ["Abba4040", "Chuka"], ["IKay", "Joe"], ["Isaac", "Rex"], ["NNamdi", "Ola"], ["Nonso", "Wolf of Wall Street"], ["Ugo", "Buchi"]], [["Chuka", "Christian"], ["Joe", "Denis"], ["Rex", "Abba4040"], ["Ola", "IKay"], ["Wolf of Wall Street", "Isaac"], ["Buchi", "NNamdi"], ["Ugo", "Nonso"]]];
const weekRanges = {1:'17/08–23/08',2:'24/08–30/08',3:'31/08–06/09',4:'07/09–13/09',5:'14/09–20/09',6:'21/09–27/09'};

let officialScores = [];
let submissions = [];
let streamLinks = [];
let isAdmin = false;

let resultFilterPlayer = '';
let resultFilterRound = '';
let resultFilterSearch = '';

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function fixtureKey(ri, gi) { return `${ri}-${gi}`; }
function weekForRound(roundNo) { return roundNo <= 5 ? 1 : roundNo <= 10 ? 2 : roundNo <= 15 ? 3 : roundNo <= 20 ? 4 : roundNo <= 25 ? 5 : 6; }
function fixtureFromKey(key) {
  const [ri, gi] = key.split('-').map(Number);
  const pair = rounds[ri]?.[gi];
  return pair ? {ri, gi, key, roundNo:ri+1, home:pair[0], away:pair[1]} : null;
}
function allFixtures() {
  const out = [];
  rounds.forEach((r,ri)=>r.forEach((pair,gi)=>out.push({ri,gi,key:fixtureKey(ri,gi),roundNo:ri+1,home:pair[0],away:pair[1]})));
  return out;
}
function scoreMap() { return Object.fromEntries(officialScores.map(s=>[s.fixture_key,s])); }
function latestStreamsByFixture() {
  const byFixture = {};
  [...streamLinks].sort((a,b)=>new Date(b.created_at)-new Date(a.created_at)).forEach(s=>{
    if(!s.is_active) return;
    byFixture[s.fixture_key] ||= [];
    if(!byFixture[s.fixture_key].some(x=>x.submitted_by===s.submitted_by)) byFixture[s.fixture_key].push(s);
  });
  return byFixture;
}
function platformName(url) {
  try {
    const h = new URL(url).hostname.toLowerCase();
    if(h.includes('youtube') || h.includes('youtu.be')) return 'YouTube';
    if(h.includes('twitch')) return 'Twitch';
    if(h.includes('facebook') || h.includes('fb.watch')) return 'Facebook';
    if(h.includes('kick.com')) return 'Kick';
    return 'Live stream';
  } catch { return 'Live stream'; }
}
function setStatus(el, text, ok=true) {
  el.innerHTML = `<div class="status">${ok?'✅':'⚠️'} ${esc(text)}</div>`;
}

function setupTabs() {
  document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    $(btn.dataset.tab).classList.add('active');
  }));
}

function populatePlayerSelect(select) {
  select.innerHTML = '<option value="">Select your name</option>' + players.map(p=>`<option>${esc(p)}</option>`).join('');
  const saved = localStorage.getItem('tassieLeagueMyName');
  if(saved && players.includes(saved)) select.value = saved;
}

function rememberName(name) {
  if(name && players.includes(name)) localStorage.setItem('tassieLeagueMyName', name);
}

function populateScoreFixtures() {
  const name = $('submitter').value;
  rememberName(name);
  const played = new Set(officialScores.map(s=>s.fixture_key));
  const list = allFixtures().filter(f=>!played.has(f.key) && (!name || f.home===name || f.away===name));
  $('fixture').innerHTML = '<option value="">Select fixture</option>' + list.map(f=>`<option value="${f.key}">R${f.roundNo} · ${esc(f.home)} vs ${esc(f.away)}</option>`).join('');
  updateScoreLabels();
}

function populateStreamFixtures() {
  const name = $('streamSubmitter').value;
  rememberName(name);
  const list = allFixtures().filter(f=>name && (f.home===name || f.away===name));
  $('streamFixture').innerHTML = '<option value="">Select your fixture</option>' + list.map(f=>`<option value="${f.key}">R${f.roundNo} · ${esc(f.home)} vs ${esc(f.away)}</option>`).join('');
}

function updateScoreLabels() {
  const f = fixtureFromKey($('fixture').value);
  $('homeLabel').textContent = f ? `${f.home} score` : 'Home score';
  $('awayLabel').textContent = f ? `${f.away} score` : 'Away score';
}

async function loadData() {
  const [scoresRes, subsRes, streamRes] = await Promise.all([
    db.from('official_scores').select('*'),
    db.from('league_submissions').select('*').order('created_at',{ascending:false}),
    db.from('match_stream_links').select('*').order('created_at',{ascending:false})
  ]);
  if(!scoresRes.error) officialScores = scoresRes.data || [];
  if(!subsRes.error) submissions = subsRes.data || [];
  if(!streamRes.error) streamLinks = streamRes.data || [];
  populateScoreFixtures();
  renderAll();
}

function calculateStandings() {
  const stats = Object.fromEntries(players.map(p=>[p,{player:p,p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}]));
  officialScores.forEach(s=>{
    const h=stats[s.home_player], a=stats[s.away_player];
    if(!h || !a) return;
    const hs=Number(s.home_score), as=Number(s.away_score);
    h.p++; a.p++; h.gf+=hs; h.ga+=as; a.gf+=as; a.ga+=hs;
    if(hs>as){h.w++;a.l++;h.pts+=3} else if(hs<as){a.w++;h.l++;a.pts+=3} else {h.d++;a.d++;h.pts++;a.pts++}
  });
  Object.values(stats).forEach(x=>x.gd=x.gf-x.ga);
  return Object.values(stats).sort((a,b)=>b.pts-a.pts || b.gd-a.gd || b.gf-a.gf || a.player.localeCompare(b.player));
}

function renderStandings() {
  const leader = officialScores.length ? calculateStandings()[0] : null;
  if($('heroLeader')) $('heroLeader').textContent = leader ? leader.player : '—';
  $('standings').innerHTML = calculateStandings().map((s,i)=>`<tr class="${i<4?'top4':''}">
    <td>${i+1}</td><td class="player">${esc(s.player)}</td><td>${s.p}</td><td>${s.w}</td><td>${s.d}</td><td>${s.l}</td>
    <td>${s.gf}</td><td>${s.ga}</td><td>${s.gd>0?'+':''}${s.gd}</td><td><b>${s.pts}</b></td>
  </tr>`).join('');
}

function watchButtons(key) {
  const links = latestStreamsByFixture()[key] || [];
  if(!links.length) return '<div class="muted">⚪ No live stream yet</div>';
  return links.map((s,i)=>`<a class="watch-btn" href="${esc(s.stream_url)}" target="_blank" rel="noopener noreferrer">🔵 ▶ WATCH MATCH LIVE${links.length>1?' — '+esc(s.submitted_by):''}</a>`).join('');
}

function renderFixtures() {
  const scores = scoreMap();
  $('fixtures').innerHTML = allFixtures().map(f=>{
    const s=scores[f.key];
    const week=weekForRound(f.roundNo);
    return `<div class="fixture">
      <strong>Round ${f.roundNo} · ${esc(f.home)} vs ${esc(f.away)}</strong>
      <div class="muted">Week ${week} · ${weekRanges[week]}</div>
      <div style="font-size:22px;font-weight:800;margin:8px 0">${s ? `${s.home_score} – ${s.away_score}` : 'Not played'}</div>
      ${watchButtons(f.key)}
    </div>`;
  }).join('');
}

function renderStreams() {
  const byFixture = latestStreamsByFixture();
  const entries = Object.entries(byFixture);
  if(!entries.length) {
    $('liveStreams').innerHTML = '<div class="empty">No match stream has been shared yet.</div>';
  } else {
    $('liveStreams').innerHTML = entries.map(([key,links])=>{
      const f=fixtureFromKey(key);
      if(!f) return '';
      return `<div class="stream-card">
        <span class="badge live-badge">🔵 WATCH AVAILABLE</span>
        <strong style="margin-top:8px">Round ${f.roundNo} · ${esc(f.home)} vs ${esc(f.away)}</strong>
        ${links.map(s=>`<div class="muted">Shared by ${esc(s.submitted_by)} · ${esc(s.platform || platformName(s.stream_url))}</div>
          <a class="watch-btn" href="${esc(s.stream_url)}" target="_blank" rel="noopener noreferrer">🔵 ▶ WATCH MATCH LIVE</a>`).join('')}
      </div>`;
    }).join('');
  }
}

function renderOfficial() {
  if (!officialScores.length) {
    $('official').innerHTML = '<div class="empty">No approved results yet.</div>';
    return;
  }

  // Sort official results by round and fixture
  const sorted = [...officialScores].sort((a, b) => {
    const fa = fixtureFromKey(a.fixture_key);
    const fb = fixtureFromKey(b.fixture_key);

    return (fa?.ri ?? 99) - (fb?.ri ?? 99) ||
           (fa?.gi ?? 99) - (fb?.gi ?? 99);
  });

  // Apply player filter
  const filtered = sorted.filter(s => {
    return !resultFilterPlayer ||
           s.home_player === resultFilterPlayer ||
           s.away_player === resultFilterPlayer;
  });

  // Player filter
  const filterBar = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;align-items:end">
      <label class="muted">
        Player
        <select id="result-player-filter">
          <option value="">All Players</option>
          ${players.map(p => `
            <option value="${esc(p)}" ${resultFilterPlayer === p ? 'selected' : ''}>
              ${esc(p)}
            </option>
          `).join('')}
        </select>
      </label>
    </div>
  `;

  const resultsHtml = filtered.length
    ? filtered.map(s => {
        const f = fixtureFromKey(s.fixture_key);

        const adminEdit = isAdmin ? `
          <div class="actions" style="margin-top:10px;align-items:end">
            <label class="muted">
              ${esc(s.home_player)}
              <input
                class="edit-score-input"
                id="edit-home-${esc(s.fixture_key)}"
                type="number"
                min="0"
                max="99"
                value="${s.home_score}"
                style="width:72px;margin-left:6px"
              >
            </label>

            <label class="muted">
              ${esc(s.away_player)}
              <input
                class="edit-score-input"
                id="edit-away-${esc(s.fixture_key)}"
                type="number"
                min="0"
                max="99"
                value="${s.away_score}"
                style="width:72px;margin-left:6px"
              >
            </label>

          <button
  class="btn edit-official-btn"
  data-key="${esc(s.fixture_key)}"
>
  ✏️ Save Edit
</button>

<button
  class="btn danger return-unplayed-btn"
  data-key="${esc(s.fixture_key)}"
>
  ↩️ Return to Unplayed
</button>
          </div>
        ` : '';

        return `
          <div class="submission">
            <b>
              ${esc(s.home_player)} ${s.home_score}
              –
              ${s.away_score} ${esc(s.away_player)}
            </b>

            <div class="muted">
              ${f ? 'Round ' + f.roundNo : ''}
            </div>

            ${watchButtons(s.fixture_key)}
            ${adminEdit}
          </div>
        `;
      }).join('')
    : '<div class="empty">No approved results found for this player.</div>';

  $('official').innerHTML = filterBar + (isAdmin ? '<p class="muted">These results are already approved. Use Save Edit to correct a score or Return to Unplayed to remove a mistaken result.</p>' : '') + resultsHtml;

  // Player filter event
  $('result-player-filter')?.addEventListener('change', e => {
    resultFilterPlayer = e.target.value;
    renderOfficial();
  });

  // Admin edit buttons
 if (isAdmin) {
  document.querySelectorAll('.edit-official-btn').forEach(btn => {
    btn.onclick = () => editOfficialScore(btn.dataset.key);
  });

   document.querySelectorAll('.return-unplayed-btn').forEach(btn => {
    btn.onclick = () => returnFixtureToUnplayed(btn.dataset.key);
  });
}
}

function pendingGroups() {  const pending=submissions.filter(s=>s.status==='pending' && !officialScores.some(o=>o.fixture_key===s.fixture_key));
  const groups={};
  pending.forEach(s=>(groups[s.fixture_key] ||= []).push(s));
  return groups;
}

function renderPending() {
  const groups=pendingGroups();
  const keys=Object.keys(groups);
  if(!keys.length) { $('pending').innerHTML='<div class="empty">No pending results.</div>'; return; }
  $('pending').innerHTML=keys.map(key=>{
    const items=groups[key], f=fixtureFromKey(key);
    const signatures=new Set(items.map(s=>`${s.home_score}-${s.away_score}`));
    const disputed=signatures.size>1;
    return `<div class="submission">
      <div><span class="badge ${disputed?'disputed':'pending'}">${disputed?'⚠️ DISPUTED':'PENDING'}</span></div>
      <b>${f?esc(f.home)+' vs '+esc(f.away):esc(key)}</b>
      ${items.map(s=>`<div class="muted">${esc(s.submitted_by)} submitted <b>${s.home_score} – ${s.away_score}</b></div>`).join('')}
    </div>`;
  }).join('');
}

function renderAdminQueue() {
  if(!isAdmin) { $('queue').innerHTML=''; return; }
  const pending=submissions.filter(s=>s.status==='pending' && !officialScores.some(o=>o.fixture_key===s.fixture_key));
  if(!pending.length) { $('queue').innerHTML='<div class="empty">No pending submissions.</div>'; return; }
  $('queue').innerHTML=pending.map(s=>{
    const f=fixtureFromKey(s.fixture_key);
    return `<div class="submission">
      <b>${f?esc(f.home)+' vs '+esc(f.away):esc(s.fixture_key)}</b>
      <div style="font-size:22px;font-weight:800">${s.home_score} – ${s.away_score}</div>
      <div class="muted">Submitted by ${esc(s.submitted_by)}${s.note?' · '+esc(s.note):''}</div>
      <div class="actions">
        <button class="btn approve-btn" data-id="${s.id}">✅ Approve</button>
        <button class="btn danger reject-btn" data-id="${s.id}">❌ Reject</button>
      </div>
    </div>`;
  }).join('');
  document.querySelectorAll('.approve-btn').forEach(b=>b.onclick=()=>approveSubmission(Number(b.dataset.id)));
  document.querySelectorAll('.reject-btn').forEach(b=>b.onclick=()=>rejectSubmission(Number(b.dataset.id)));
}

function renderAdminStreams() {
  if(!isAdmin) { $('adminStreams').innerHTML=''; return; }
  const active=streamLinks.filter(s=>s.is_active);
  if(!active.length) { $('adminStreams').innerHTML='<div class="empty">No active stream links.</div>'; return; }
  $('adminStreams').innerHTML=active.map(s=>{
    const f=fixtureFromKey(s.fixture_key);
    return `<div class="submission">
      <b>${f?esc(f.home)+' vs '+esc(f.away):esc(s.fixture_key)}</b>
      <div class="muted">Shared by ${esc(s.submitted_by)} · ${esc(s.platform || platformName(s.stream_url))}</div>
      <a class="watch-btn" href="${esc(s.stream_url)}" target="_blank" rel="noopener noreferrer">🔵 ▶ WATCH MATCH LIVE</a>
      <div class="actions"><button class="btn danger remove-stream" data-id="${s.id}">Remove Link</button></div>
    </div>`;
  }).join('');
  document.querySelectorAll('.remove-stream').forEach(b=>b.onclick=()=>removeStream(Number(b.dataset.id)));
}

function renderAll() {
  renderStandings();
  renderFixtures();
  renderStreams();
  renderOfficial();
  renderPending();
  renderAdminQueue();
  renderAdminStreams();
}

async function submitScore() {
  const name=$('submitter').value;
  const f=fixtureFromKey($('fixture').value);
  const hs=Number($('homeScore').value), as=Number($('awayScore').value);
  if(!name || !f || !Number.isInteger(hs) || !Number.isInteger(as) || hs<0 || as<0 || hs>99 || as>99) {
    return setStatus($('submitStatus'),'Please select your name, fixture and valid scores.',false);
  }
  if(name!==f.home && name!==f.away) return setStatus($('submitStatus'),'You can only submit a result for a fixture you are playing in.',false);
  const payload={fixture_key:f.key,home_player:f.home,away_player:f.away,home_score:hs,away_score:as,submitted_by:name,note:$('note').value.trim() || null};
  const {error}=await db.from('league_submissions').insert(payload);
  if(error) return setStatus($('submitStatus'),error.message,false);
  $('homeScore').value=''; $('awayScore').value=''; $('note').value='';
  setStatus($('submitStatus'),'Result submitted and waiting for admin approval.');
  await loadData();
}

async function submitStream() {
  const name=$('streamSubmitter').value;
  const f=fixtureFromKey($('streamFixture').value);
  const url=$('streamUrl').value.trim();
  if(!name || !f || !url) return setStatus($('streamStatus'),'Choose your name, fixture and paste the livestream link.',false);
  if(name!==f.home && name!==f.away) return setStatus($('streamStatus'),'You can only share a link for a fixture you are playing in.',false);
  let parsed;
  try { parsed=new URL(url); } catch { return setStatus($('streamStatus'),'Please enter a valid web link.',false); }
  if(parsed.protocol!=='https:') return setStatus($('streamStatus'),'For safety, the stream link must start with https://',false);

  const payload={fixture_key:f.key,submitted_by:name,stream_url:url,platform:platformName(url)};
  const {error}=await db.from('match_stream_links').insert(payload);
  if(error) return setStatus($('streamStatus'),error.message,false);
  $('streamUrl').value='';
  setStatus($('streamStatus'),'Your Watch Match Live link is now available to everyone.');
  await loadData();
}

async function approveSubmission(id) {
  const s=submissions.find(x=>x.id===id); if(!s) return;
  const {data:{user}}=await db.auth.getUser();
  const scorePayload={
    fixture_key:s.fixture_key,home_player:s.home_player,away_player:s.away_player,
    home_score:s.home_score,away_score:s.away_score,approved_submission_id:s.id,
    approved_by:user?.id || null,approved_at:new Date().toISOString()
  };
  if(officialScores.some(o=>o.fixture_key===s.fixture_key)) return alert('This fixture already has an official result. Use Save Edit to correct it.');
  const up=await db.from('official_scores').upsert(scorePayload);
  if(up.error) return alert(up.error.message);
  const upd=await db.from('league_submissions').update({status:'approved',reviewed_at:new Date().toISOString(),reviewed_by:user?.id || null}).eq('id',id);
  if(upd.error) { await loadData(); return alert('The official score was saved, but the submission status could not be updated: '+upd.error.message); }
  await loadData();
}

async function rejectSubmission(id) {
  const {data:{user}}=await db.auth.getUser();
  const upd=await db.from('league_submissions').update({status:'rejected',reviewed_at:new Date().toISOString(),reviewed_by:user?.id || null}).eq('id',id);
  if(upd.error) return alert(upd.error.message);
  await loadData();
}

async function removeStream(id) {
  if(!confirm('Remove this stream link from the public page?')) return;
  const {error}=await db.from('match_stream_links').update({is_active:false}).eq('id',id);
  if(error) return alert(error.message);
  await loadData();
}

async function checkAdmin() {
  const {data:{user}}=await db.auth.getUser();
  if(!user) { isAdmin=false; $('adminArea').classList.remove('show'); return; }
  const {data,error}=await db.from('league_admins').select('user_id').eq('user_id',user.id).maybeSingle();
  isAdmin=!error && !!data;
  $('adminArea').classList.toggle('show',isAdmin);
  $('authStatus').innerHTML = `<div class="status">${isAdmin?'✅ Admin access active.':'⚠️ Signed in, but this account is not yet registered as league admin.'}</div>`;
  renderAdminQueue(); renderAdminStreams();
}

async function login() {
  const {error}=await db.auth.signInWithPassword({email:$('email').value.trim(),password:$('password').value});
  if(error) return setStatus($('authStatus'),error.message,false);
  await checkAdmin(); await loadData();
}

async function signup() {
  const {error}=await db.auth.signUp({email:$('email').value.trim(),password:$('password').value});
  if(error) return setStatus($('authStatus'),error.message,false);
  setStatus($('authStatus'),'Account created. If email confirmation is enabled, check your email before signing in.');
}

async function logout() {
  await db.auth.signOut();
  isAdmin=false;
  $('adminArea').classList.remove('show');
  setStatus($('authStatus'),'Logged out.');
}

function setupRealtime() {
  db.channel('league-live')
    .on('postgres_changes',{event:'*',schema:'public',table:'official_scores'},loadData)
    .on('postgres_changes',{event:'*',schema:'public',table:'league_submissions'},loadData)
    .on('postgres_changes',{event:'*',schema:'public',table:'match_stream_links'},loadData)
    .subscribe();
}

async function editOfficialScore(fixtureKeyValue) {
  if(!isAdmin) {
    return alert('Admin access is required to edit an official result.');
  }

  const current = officialScores.find(
    s => s.fixture_key === fixtureKeyValue
  );

  if(!current) {
    return alert('Official result not found.');
  }

  const homeInput = document.getElementById(
    `edit-home-${fixtureKeyValue}`
  );

  const awayInput = document.getElementById(
    `edit-away-${fixtureKeyValue}`
  );

  const hs = Number(homeInput?.value);
  const as = Number(awayInput?.value);

  if(
    !Number.isInteger(hs) ||
    !Number.isInteger(as) ||
    hs < 0 ||
    as < 0 ||
    hs > 99 ||
    as > 99
  ) {
    return alert('Please enter valid scores between 0 and 99.');
  }

  const f = fixtureFromKey(fixtureKeyValue);

  const label = f
    ? `${f.home} vs ${f.away}`
    : fixtureKeyValue;

  const confirmed = confirm(
    `Change the official result for ${label} from ` +
    `${current.home_score}-${current.away_score} to ${hs}-${as}?`
  );

  if(!confirmed) return;

  const { data: { user } } = await db.auth.getUser();

  const { error } = await db
    .from('official_scores')
    .update({
      home_score: hs,
      away_score: as,
      approved_by: user?.id || current.approved_by || null,
      approved_at: new Date().toISOString()
    })
    .eq('fixture_key', fixtureKeyValue);

  if(error) {
    return alert(error.message);
  }

  alert('Official result updated successfully.');

  await loadData();
}
async function returnFixtureToUnplayed(fixtureKeyValue) {
  if (!isAdmin) {
    return alert('Admin access is required.');
  }

  const current = officialScores.find(
    s => s.fixture_key === fixtureKeyValue
  );

  if (!current) {
    return alert('Official result not found.');
  }

  const f = fixtureFromKey(fixtureKeyValue);

  const label = f
    ? `${f.home} vs ${f.away}`
    : fixtureKeyValue;

  const confirmed = confirm(
    `Return ${label} to unplayed?\n\n` +
    `The current result ${current.home_score}-${current.away_score} will be removed ` +
    `from the league table and this fixture will become available again for submission.`
  );

  if (!confirmed) return;

  const { error } = await db
    .from('official_scores')
    .delete()
    .eq('fixture_key', fixtureKeyValue);

  if (error) {
    return alert(error.message);
  }

  alert('Match returned to unplayed successfully.');

  await loadData();
}

function leagueTableCanvas() {
  const rows = calculateStandings();
  const scale = 2, w = 1200, h = 310 + rows.length * 57 + 76;
  const canvas = document.createElement('canvas');
  canvas.width=w*scale; canvas.height=h*scale;
  const c=canvas.getContext('2d'); c.scale(scale,scale);
  const fill=(color,x,y,width,height)=>{c.fillStyle=color;c.fillRect(x,y,width,height);};
  const text=(value,x,y,size=22,color='#0f172a',weight='400',align='left')=>{
    c.fillStyle=color;c.font=`${weight} ${size}px Arial, sans-serif`;c.textAlign=align;
    c.fillText(String(value),x,y);
  };
  fill('#f1f5f9',0,0,w,h);
  fill('#102a43',0,0,w,220);
  fill('#0b6e4f',0,0,12,220);
  text('TASSIE MEN',42,69,43,'#ffffff','800');
  text('EA LEAGUE',42,119,43,'#ffffff','800');
  text('SEASON 1  •  OFFICIAL LEAGUE TABLE',44,163,19,'#a7f3d0','700');
  text('Every match matters.',44,194,17,'#cbd5e1');
  text(`${officialScores.length} / 182 MATCHES`,1158,72,22,'#ffffff','700','right');
  text(`${Math.round(officialScores.length/182*100)}% COMPLETE`,1158,106,18,'#a7f3d0','700','right');
  text('LIVE STANDINGS',42,265,25,'#102a43','800');
  const cols=[['POS',62],['PLAYER',130],['P',540],['W',602],['D',664],['L',726],['GF',798],['GA',870],['GD',956],['PTS',1108]];
  fill('#102a43',30,285,1140,53);
  cols.forEach(([label,x],i)=>text(label,x,319,17,'#ffffff','700',i===1?'left':'center'));
  rows.forEach((s,i)=>{
    const y=338+i*57;
    fill(i<4?'#dcfce7':i%2?'#f1f5f9':'#ffffff',30,y,1140,57);
    if(i<4)fill('#16a36f',30,y,5,57);
    const vals=[i+1,s.player,s.p,s.w,s.d,s.l,s.gf,s.ga,(s.gd>0?'+':'')+s.gd,s.pts];
    vals.forEach((v,j)=>text(v,cols[j][1],y+36,j===1?20:19,j===9?'#0b6e4f':'#0f172a',j===1||j===9?'700':'400',j===1?'left':'center'));
    fill('#e2e8f0',30,y+56,1140,1);
  });
  text('TOP 4 QUALIFY FOR THE PLAYOFFS',42,h-32,16,'#0b6e4f','700');
  text('Tassie Men EA League • Season 1',1158,h-32,15,'#64748b','400','right');
  return canvas;
}
async function exportLeagueTable(mode) {
  const status=$('imageStatus');
  try {
    const canvas=leagueTableCanvas();
    const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('Could not create PNG.')),'image/png'));
    if(mode==='copy') {
      if(!navigator.clipboard?.write || !window.ClipboardItem) throw new Error('Image clipboard is unavailable in this browser. Please use Download PNG instead.');
      await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
      setStatus(status,'Image copied! Open WhatsApp Web and press Ctrl + V.');
    } else {
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');a.href=url;a.download='Tassie-Men-EA-League-Table.png';
      document.body.appendChild(a);a.click();a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),60000);
      setStatus(status,'PNG downloaded. You can share it on WhatsApp.');
    }
  } catch(e) { setStatus(status,e.message,false); }
}

async function init() {
  setupTabs();
  $('copyTableImage').addEventListener('click',()=>exportLeagueTable('copy'));
  $('downloadTableImage').addEventListener('click',()=>exportLeagueTable('download'));
  populatePlayerSelect($('submitter'));
  populatePlayerSelect($('streamSubmitter'));
  populateScoreFixtures();
  populateStreamFixtures();

  $('submitter').addEventListener('change',populateScoreFixtures);
  $('fixture').addEventListener('change',updateScoreLabels);
  $('streamSubmitter').addEventListener('change',populateStreamFixtures);
  $('submitScore').addEventListener('click',submitScore);
  $('submitStream').addEventListener('click',submitStream);
  $('login').addEventListener('click',login);
  $('signup').addEventListener('click',signup);
  $('logout').addEventListener('click',logout);

  await checkAdmin();
  await loadData();
  setupRealtime();
}

init();