(() => {
  const config = window.BIRTHDAY || {};
  const name = config.name || 'Birthday Girl';
  document.querySelectorAll('[data-name]').forEach(el => { el.textContent = name; });
  document.querySelector('#sender').textContent = config.from || 'Your friend';
  (config.letter || []).forEach(paragraph => {
    const p = document.createElement('p'); p.textContent = paragraph;
    document.querySelector('#letter-body').append(p);
  });
  const stars = document.querySelector('#stars');
  for (let i = 0; i < 65; i++) {
    const star = document.createElement('span'); star.className = 'star';
    star.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*4}s;`;
    stars.append(star);
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let busy = false;
  let transitionTimer;
  function show(id, step) {
    document.querySelectorAll('.scene').forEach(scene => { scene.hidden = scene.id !== id; });
    document.querySelectorAll('.journey span').forEach((item, index) => {
      item.classList.toggle('active', index === step);
      if (index === step) item.setAttribute('aria-current', 'step'); else item.removeAttribute('aria-current');
    });
    document.querySelector(`#${id} h1`).focus({preventScroll:true});
    window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});
  }
  function confetti() {
    if (reduced) return;
    for (let i = 0; i < 65; i++) {
      const bit = document.createElement('i'); bit.className = 'confetti';
      bit.style.cssText = `left:${Math.random()*100}%;background:${['#e9bcb1','#c4a36e','#a7b5cb','#f5eee3'][i%4]};animation-delay:${Math.random()*.7}s;--drift:${Math.random()*200-100}px;border-radius:${i%3===0?'50%':'1px'}`;
      document.body.append(bit); bit.addEventListener('animationend',()=>bit.remove(),{once:true});
    }
  }
  function blow() {
    if (busy) return;
    busy = true;
    document.querySelector('#candle').classList.add('blown');
    document.querySelector('#blow').disabled = true;
    document.querySelector('#status').textContent = 'The candle is out. Your birthday surprise is coming.';
    transitionTimer = setTimeout(() => { show('wish',1); confetti(); }, reduced ? 50 : 1400);
  }
  document.querySelector('#candle').addEventListener('click',blow);
  document.querySelector('#blow').addEventListener('click',blow);
  document.querySelector('#make-wish').addEventListener('click',() => show('envelope-scene',2));
  function openLetter() { show('letter-scene',2); }
  document.querySelector('#envelope').addEventListener('click',openLetter);
  document.querySelector('#open-letter').addEventListener('click',openLetter);
  document.querySelector('#replay').addEventListener('click',() => {
    clearTimeout(transitionTimer); busy = false;
    document.querySelector('#candle').classList.remove('blown');
    document.querySelector('#blow').disabled = false;
    document.querySelectorAll('.confetti').forEach(el=>el.remove());
    document.querySelector('#status').textContent = '';
    show('spark',0);
  });
})();
