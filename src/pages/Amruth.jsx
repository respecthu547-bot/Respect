import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RevealSection, RevealItem } from '../components/Reveal.jsx'
import './amruth.css'

export default function AmruthPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const greet = (e) => {
    e.preventDefault()
    alert('Thank you for joining the Amruth circle 🙏')
  }

  return (
    <div className="amruth-page">
      {/* NAV */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="brand">
          <svg className="mark" viewBox="0 0 40 40" fill="none">
            <path d="M20 3C20 3 33 17 33 26a13 13 0 1 1-26 0C7 17 20 3 20 3Z" stroke="#bf9b30" strokeWidth="1.6" />
            <path d="M20 11C20 11 27 19 27 25a7 7 0 0 1-14 0c0-6 7-14 7-14Z" fill="#3a8a86" opacity=".85" />
          </svg>
          <span><span className="name">AMRUTH</span> <span className="sub">water</span></span>
        </a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
          <a href="#story">Our Story</a>
          <a href="#purity">Purity</a>
          <a href="#products">Collection</a>
          <a href="#contact" className="nav-cta">Order Now</a>
        </div>
        <div className="burger" onClick={() => setMenuOpen((o) => !o)}><span></span><span></span><span></span></div>
      </nav>

      {/* HERO */}
      <RevealSection as="header" className="hero" index={0} amount={0.2}>
        <div className="water-blob"></div>
        <svg className="bottle" viewBox="0 0 120 320" fill="none">
          <rect x="46" y="2" width="28" height="20" rx="3" fill="#bf9b30" />
          <path d="M44 22h32v14c0 8 14 10 14 26v240a14 14 0 0 1-14 14H44a14 14 0 0 1-14-14V62c0-16 14-18 14-26V22Z" fill="#eaf5f3" stroke="#3a8a86" strokeWidth="1.5" />
          <path d="M44 22h32v14c0 8 14 10 14 26v60H30V62c0-16 14-18 14-26V22Z" fill="#3a8a86" opacity=".18" />
          <rect x="34" y="150" width="52" height="120" rx="6" fill="#0d4d4d" opacity=".92" />
          <text x="60" y="200" textAnchor="middle" fill="#bf9b30" fontFamily="Marcellus,serif" fontSize="13" letterSpacing="2">AMRUTH</text>
          <line x1="44" y1="214" x2="76" y2="214" stroke="#d9bd6a" strokeWidth="1" />
          <text x="60" y="234" textAnchor="middle" fill="#f7efdf" fontFamily="Cormorant Garamond,serif" fontStyle="italic" fontSize="11">pure · 750ml</text>
        </svg>
        <div className="hero-inner">
          <RevealItem as="span" className="eyebrow">Sourced from the Himalayas</RevealItem>
          <RevealItem as="h1">
            <span className="devanagari">अमृत</span>
            The Nectar<br />of <em>Purity</em>
          </RevealItem>
          <RevealItem as="p" className="hero-tag">Mineral-rich spring water, mineral-balanced the ancient Indian way — for a sip that feels eternal.</RevealItem>
          <RevealItem className="hero-actions">
            <a href="#products" className="btn-primary"><span>Explore the Collection</span></a>
            <a href="#story" className="btn-ghost">Our Story
              <span className="arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </RevealItem>
        </div>
      </RevealSection>

      {/* STORY */}
      <RevealSection className="story" id="story" index={1}>
        <div className="pad story-grid">
          <div>
            <RevealItem className="sec-label">The Meaning</RevealItem>
            <RevealItem as="h2" className="sec-title">Water named after <em>immortality</em> itself.</RevealItem>
            <RevealItem as="p">In the ancient texts, <strong>Amruth (अमृत)</strong> is the divine nectar of the gods — the elixir of eternal life churned from the cosmic ocean. We carried that spirit into every drop.</RevealItem>
            <RevealItem as="p">Drawn from protected Himalayan springs and balanced with a profile of natural minerals, Amruth Water honours a wisdom thousands of years old: that the purest water is also the most alive.</RevealItem>
            <RevealItem as="blockquote" className="story-quote">"Apo hi shtha mayobhuvah" — Water, you are the source of all wellbeing.</RevealItem>
          </div>
          <RevealItem className="mandala-frame">
            <svg viewBox="0 0 400 400" className="spin">
              <g fill="none" stroke="#bf9b30" strokeWidth="1">
                <circle cx="200" cy="200" r="190" opacity=".5" />
                <circle cx="200" cy="200" r="150" opacity=".7" />
                <circle cx="200" cy="200" r="110" />
              </g>
              <g fill="none" stroke="#3a8a86" strokeWidth="1.2" opacity=".8">
                <g id="petal">
                  <path d="M200 40 C170 110 170 160 200 200 C230 160 230 110 200 40Z" />
                </g>
                <use href="#petal" transform="rotate(30 200 200)" />
                <use href="#petal" transform="rotate(60 200 200)" />
                <use href="#petal" transform="rotate(90 200 200)" />
                <use href="#petal" transform="rotate(120 200 200)" />
                <use href="#petal" transform="rotate(150 200 200)" />
                <use href="#petal" transform="rotate(180 200 200)" />
                <use href="#petal" transform="rotate(210 200 200)" />
                <use href="#petal" transform="rotate(240 200 200)" />
                <use href="#petal" transform="rotate(270 200 200)" />
                <use href="#petal" transform="rotate(300 200 200)" />
                <use href="#petal" transform="rotate(330 200 200)" />
              </g>
            </svg>
            <div className="core"></div>
          </RevealItem>
        </div>
      </RevealSection>

      {/* PURITY / PROCESS */}
      <RevealSection className="purity" id="purity" index={2}>
        <div className="pad">
          <RevealItem className="sec-label">From Source to Sip</RevealItem>
          <RevealItem as="h2" className="sec-title">Purity, perfected in <em>four</em> sacred steps.</RevealItem>
          <div className="steps">
            <RevealItem className="step">
              <span className="num">01</span>
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3C12 3 19 11 19 16a7 7 0 0 1-14 0C5 11 12 3 12 3Z" /></svg>
              <h3>Spring Source</h3>
              <p>Collected from protected high-altitude Himalayan aquifers, untouched for millennia.</p>
            </RevealItem>
            <RevealItem className="step">
              <span className="num">02</span>
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 7h16M6 7l1 13h10l1-13M9 4h6" /></svg>
              <h3>Natural Filtration</h3>
              <p>Slowly purified through layers of mineral rock — no harsh chemicals, ever.</p>
            </RevealItem>
            <RevealItem className="step">
              <span className="num">03</span>
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="8" /><path d="M12 8v8M8 12h8" /></svg>
              <h3>Mineral Balance</h3>
              <p>A signature blend of calcium, magnesium &amp; potassium for a smooth, alive taste.</p>
            </RevealItem>
            <RevealItem className="step">
              <span className="num">04</span>
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 13l4 4L19 7" /><circle cx="12" cy="12" r="10" opacity=".4" /></svg>
              <h3>Sealed Fresh</h3>
              <p>Bottled at source in recyclable glass and sealed to lock in living freshness.</p>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* PRODUCTS */}
      <RevealSection className="products" id="products" index={3}>
        <div className="pad">
          <RevealItem className="sec-label">The Collection</RevealItem>
          <RevealItem as="h2" className="sec-title">Choose your <em>everyday ritual.</em></RevealItem>
          <div className="prod-grid">
            <RevealItem className="card">
              <div className="vis">
                <svg viewBox="0 0 80 180" fill="none"><rect x="30" y="2" width="20" height="12" rx="2" fill="#bf9b30" /><path d="M28 14h24v10c0 6 10 7 10 18v122a10 10 0 0 1-10 10H28a10 10 0 0 1-10-10V42c0-11 10-12 10-18V14Z" fill="#eaf5f3" stroke="#3a8a86" strokeWidth="1.3" /><rect x="22" y="92" width="36" height="62" rx="4" fill="#0d4d4d" /><text x="40" y="126" textAnchor="middle" fill="#bf9b30" fontFamily="Marcellus" fontSize="8" letterSpacing="1">AMRUTH</text></svg>
              </div>
              <h3>Everyday</h3>
              <span className="vol">330 ml · glass</span>
              <p>The perfect personal pour — light, crisp and effortlessly refreshing.</p>
              <div className="price">₹40</div>
            </RevealItem>
            <RevealItem className="card">
              <div className="vis">
                <svg viewBox="0 0 90 200" fill="none"><rect x="33" y="2" width="24" height="14" rx="2" fill="#bf9b30" /><path d="M31 16h28v12c0 7 12 8 12 20v140a11 11 0 0 1-11 11H30a11 11 0 0 1-11-11V48c0-12 12-13 12-20V16Z" fill="#eaf5f3" stroke="#3a8a86" strokeWidth="1.4" /><rect x="22" y="104" width="46" height="70" rx="5" fill="#0d4d4d" /><text x="45" y="142" textAnchor="middle" fill="#bf9b30" fontFamily="Marcellus" fontSize="9" letterSpacing="1.5">AMRUTH</text></svg>
              </div>
              <h3>Signature</h3>
              <span className="vol">750 ml · glass</span>
              <p>Our flagship bottle, balanced for the dinner table and the mindful day alike.</p>
              <div className="price">₹75</div>
            </RevealItem>
            <RevealItem className="card">
              <div className="vis">
                <svg viewBox="0 0 100 200" fill="none"><rect x="36" y="2" width="28" height="14" rx="2" fill="#bf9b30" /><path d="M34 16h32v10c0 8 16 9 16 22v138a12 12 0 0 1-12 12H30a12 12 0 0 1-12-12V48c0-13 16-14 16-22V16Z" fill="#eaf5f3" stroke="#3a8a86" strokeWidth="1.5" /><rect x="22" y="104" width="56" height="72" rx="6" fill="#0d4d4d" /><text x="50" y="144" textAnchor="middle" fill="#bf9b30" fontFamily="Marcellus" fontSize="10" letterSpacing="2">AMRUTH</text></svg>
              </div>
              <h3>Sharing</h3>
              <span className="vol">1.5 L · glass</span>
              <p>Made to be poured and passed around — hospitality, the way India does it best.</p>
              <div className="price">₹120</div>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* VALUES */}
      <RevealSection className="values" index={4}>
        <div className="pad val-grid">
          <RevealItem className="val"><div className="big">100%</div><p>Natural Minerals</p></RevealItem>
          <RevealItem className="val"><div className="big">7.8</div><p>Balanced pH</p></RevealItem>
          <RevealItem className="val"><div className="big">0</div><p>Added Chemicals</p></RevealItem>
          <RevealItem className="val"><div className="big">∞</div><p>Recyclable Glass</p></RevealItem>
        </div>
      </RevealSection>

      {/* CTA / CONTACT */}
      <RevealSection className="cta pad" id="contact" index={5}>
        <RevealItem as="h2">Taste the <em>nectar</em>.</RevealItem>
        <RevealItem as="p" className="serif">Join the Amruth circle for first access to launches, refill plans and rituals of wellbeing.</RevealItem>
        <RevealItem className="subscribe">
          <input type="email" placeholder="Your email address" aria-label="Email" />
          <a href="#" className="btn-primary" onClick={greet}><span>Subscribe</span></a>
        </RevealItem>
      </RevealSection>

      {/* FOOTER */}
      <RevealSection as="footer" index={6}>
        <div className="foot-grid">
          <div>
            <a href="#" className="brand">
              <svg className="mark" viewBox="0 0 40 40" fill="none"><path d="M20 3C20 3 33 17 33 26a13 13 0 1 1-26 0C7 17 20 3 20 3Z" stroke="#bf9b30" strokeWidth="1.6" /><path d="M20 11C20 11 27 19 27 25a7 7 0 0 1-14 0c0-6 7-14 7-14Z" fill="#3a8a86" opacity=".85" /></svg>
              <span><span className="name">AMRUTH</span> <span className="sub">water</span></span>
            </a>
            <p className="tagline">The nectar of purity, drawn from the Himalayas and bottled with reverence.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#story">Our Story</a>
            <a href="#purity">Purity Process</a>
            <a href="#products">The Collection</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">Sustainability</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="#">Instagram</a>
            <a href="#">contact@amruth.water</a>
            <a href="#">+91 98765 43210</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Amruth Water · Bengaluru, India</span>
          <span>Privacy · Terms · Made with reverence</span>
        </div>
      </RevealSection>

      <Link to="/aqua" className="page-switch">View AquaPure demo →</Link>
    </div>
  )
}
