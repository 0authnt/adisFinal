// Minimal hash-based router with safe initial render and active-tab sync.
(function () {
  const app = document.getElementById("app");
  const nav = document.getElementById("nav");

  const pages = {
    home: () => `
      <div class="stack">
        <h1>“Ted, I'm gonna teach you how to live.”</h1>
        <p class="lead">
          I always wanted someone to teach me how to live. I had parents, I just had a remarkably hard time listening. Maybe it was the rough relationship with my dad or the rough life in general, but I always wanted someone to teach me what to do growing up. The person I am today is from learning that nobody was going to be able to do that for me, but me. My parents certainly molded me into the man I am today; though I was a rough kid, I will be eternally grateful to them for doing so. Still, I like to believe that I had—and likely still have—more lessons to learn in life.
        </p>
        <p>Through learning the hard way, I’ve taken down a few things worth sharing with the world (or whoever has a few minutes to read this).</p>

        <h2 class="muted">Aspire. Develop. Inspire. Sustain.</h2>

        <div class="section">
          <span class="section-title" data-nav="stoicism">1. Stoicism</span>
          <p>It’s not just an ideology. It’s a way of life. We as men must be strong if we are to lead — in our families, our work, and our communities. Strength without ego, leadership with accountability.</p>
        </div>

        <div class="section">
          <span class="section-title" data-nav="health">2. Health is Wealth</span>
          <p>Imagine you could have any car, but it’s the only one you’ll ever drive. You’d maintain it with care. Your body deserves the same respect — train it, feed it, and keep it ready for life’s demands.</p>
        </div>

        <div class="section">
          <span class="section-title" data-nav="faith">3. Faith</span>
          <p>Faith grounds us. I believe in God, and I’ve learned repentance isn’t about words — it’s about change. Separate from what drags you down and walk with intent.</p>
        </div>

        <div class="section">
          <span class="section-title" data-nav="education">4. Education</span>
          <p>Education separates man from animal. It’s our duty to pursue it — to understand politics, economy, and our society. A well-educated people make stronger citizens.</p>
        </div>

        <div class="card">
          <p class="muted">Explore More</p>
          <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:6px;">
            <button data-nav="majors">Majors</button>
            <button data-nav="dress">How to Dress</button>
            <button data-nav="fitness">How to Lift / Eat</button>
            <button data-nav="thanks">Thank You</button>
          </div>
        </div>
      </div>
    `,

    stoicism: () => `
      <h1>Stoicism</h1>
      <p>It's not just a remarkable ideology. It is truly a way of life. We as men must be strong if we are to lead. We lead on all levels every day. We lead our wives when we take them to dinner, we keep them safe when we walk on the street and make sure they're loved and protected. As it is our responsibility. We lead teams of colleagues to accomplish tasks and goals to benefit a greater good. Some of us lead teams to save lives, while having to maintain the safety of the very lives on their team. To be a strong man and know how to lead and make good decisions, I believe stoicism is an important stepping stone on this path.</p>
      ${back()}
    `,

    health: () => `
      <h1>Health is Wealth</h1>
      <p>Imagine someone were to buy you any car you could want, the only condition is that it is the only car you'll ever be allowed to drive again. You'd take care of that car wouldn't you? The same goes for your body, for your mind and for your soul. Workout, train your body so that in any scenario you're prepared to help others. If a tree falls you and 3 men can lift it versus you needing 7.</p>
      ${back()}
    `,

    faith: () => `
      <h1>Faith</h1>
      <p>Faith is important, I as a Christian believe my faith has helped me navigate this world and helps me to understand right from wrong. We're humans. We're not perfect nor will we ever be. We make mistakes and it's important to accept them, and more importantly take accountability for them. Going to church doesn't magically wash off your sin and neither will 10 hail marys. True repentance and working to better yourself and to not make the same mistakes you've made is the key to a better future. Not just for yourself but for those around you. And only when you work hard to separate yourself from those that do not have the same goals as you, those that may be wrapped in sin with no intentions of escaping will you find peace in your heart.</p>
      ${back()}
    `,

    education: () => `
      <h1>Education</h1>
      <p>Education is a priority above all, it separates us from animals. To be a good member of your community, i believe one should be educated. I believe we should all work to strengthen the education of others. I believe topics pertaining to politics, society as a whole & the economy we live in are important to prioritize as conversation amongst each other. This way we as a people are knowledgeable on the affairs of this country and can do our duty as citizens of this country to help our politicians by voting for the right party members. We can do better to make informed decisions about our personal finances to prevent the need for social welfare. I believe that education is the key to raising the bottom line and retaining this countries #1 spot.</p>
      ${back()}
    `,

    majors: () => `
      <h1>Majors</h1>
      <p>Explore how different majors connect with real-world impact and entrepreneurial thinking.</p>
      <ul class="list">
        <li><strong>Finance:</strong> Learn trading, use Bloomberg tools, and join investment communities like GFAM.</li>
        <li><strong>Business:</strong> Start ventures through Shopify or LLC formation; collaborate with fashion and marketing peers.</li>
        <li><strong>Tech:</strong> Expand your knowledge across sectors. Remember — code for people, not just for code’s sake.</li>
        <li><strong>Insurance:</strong> Study coverage fundamentals; understand risk management early.</li>
        <li><strong>Resume Tips:</strong> <a target="_blank" rel="noopener" href="https://capd.mit.edu/resources/resume-samples-and-guidelines/">MIT Resume Guide</a></li>
        <li><strong>Talks:</strong> <a target="_blank" rel="noopener" href="https://www.ted.com/topics/motivation">TED Talks on Motivation</a></li>
      </ul>
      ${back()}
    `,

    dress: () => `
      <h1>How to Dress</h1>
      <ul class="list">
        <li><a target="_blank" rel="noopener" href="https://www.pinterest.com">Fits & Style Boards</a></li>
        <li><a target="_blank" rel="noopener" href="https://www.gq.com/style">GQ Style Guides</a></li>
        <li><a target="_blank" rel="noopener" href="https://www.asos.com">ASOS – Affordable Streetwear</a></li>
      </ul>
      ${back()}
    `,

    fitness: () => `
      <h1>How to Lift / Eat</h1>
      <ul class="list">
        <li><a target="_blank" rel="noopener" href="https://www.stronglifts.com/5x5/">Workout Plan – StrongLifts 5x5</a></li>
        <li><a target="_blank" rel="noopener" href="https://www.bodybuilding.com">Bodybuilding Resources</a></li>
        <li><a target="_blank" rel="noopener" href="https://www.precisionnutrition.com/">How to Build a Diet</a></li>
        <li><a target="_blank" rel="noopener" href="https://examine.com/supplements/whey-protein/">Protein Comparison & Science</a></li>
      </ul>
      ${back()}
    `,

    thanks: () => `
      <h1>Thank You</h1>
      <p>Thank you to Jo for introducing me to stoicism. You were also crucial to my academic and spiritual journey.</p>
      <p>Thank you to my parents, I can't tell you how lucky I am to have you. I hope one day I really make you proud and do something incredible.</p>
      <p>Thank you to Sam, you taught me that being a gym bro didn't mean I had to act like some meathead. You showed me that there is a true art to bodybuilding and for that I will always be grateful.</p>
      <p>Thank you to the love of my life. You know exactly who you are. The thought of you brings me peace, you are a constant reminder that I can and should always work hard to be a better person. I will always love you and I will always have a place for you in my heart. You're an incredible woman and I hope you're doing well.</p>
      ${back()}
    `,
  };

  function back(){ return `<a class="back" href="#home" data-nav="home">← Back</a>`; }

  function getPageKey(){
    const key = (location.hash || "#home").slice(1);
    return Object.prototype.hasOwnProperty.call(pages, key) ? key : "home";
  }

  function render(key){
    app.innerHTML = pages[key]();
    // delegate inside main
    app.querySelectorAll("[data-nav]").forEach(el=>{
      el.addEventListener("click", (e)=>{
        e.preventDefault();
        navigate(el.getAttribute("data-nav"));
      });
    });
    syncActive(key);
    // ensure focus for accessibility
    app.setAttribute("tabindex","-1");
    app.focus({preventScroll:true});
  }

  function navigate(key){
    if (!pages[key]) key = "home";
    if (location.hash.slice(1) !== key) {
      location.hash = key;
    } else {
      render(key);
    }
  }

  function syncActive(key){
    nav.querySelectorAll("button[data-page]").forEach(btn=>{
      btn.classList.toggle("active", btn.getAttribute("data-page") === key);
    });
  }

  // footer nav
  nav.addEventListener("click", (e)=>{
    const btn = e.target.closest("button[data-page]");
    if (!btn) return;
    e.preventDefault();
    navigate(btn.getAttribute("data-page"));
  });

  window.addEventListener("hashchange", ()=> render(getPageKey()));

  // first paint
  render(getPageKey());
})();
