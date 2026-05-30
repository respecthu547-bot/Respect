import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RevealSection, RevealItem } from '../components/Reveal.jsx'
import './aqua.css'

export default function AquaPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [noteShown, setNoteShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!noteShown) return
    const t = setTimeout(() => setNoteShown(false), 5000)
    return () => clearTimeout(t)
  }, [noteShown])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity()
      return
    }
    setNoteShown(true)
    e.currentTarget.reset()
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="aqua-page">
      {/* HEADER */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">
              <span className="logo-drop">💧</span>
              <span className="logo-text">AquaPure</span>
            </a>
            <ul className={`nav-menu${menuOpen ? ' open' : ''}`} onClick={closeMenu}>
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#products" className="nav-link">Products</a></li>
              <li><a href="#process" className="nav-link">Process</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <a href="#contact" className="btn btn-nav">Order Now</a>
            <button className="nav-toggle" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <RevealSection as="section" className="hero" index={0} amount={0.2}>
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <RevealItem as="span" className="tagline">💎 100% Natural Mineral Water</RevealItem>
              <RevealItem as="h1">Pure Hydration, <span className="accent">Perfected</span> by Nature</RevealItem>
              <RevealItem as="p">Sourced from pristine mountain springs and balanced with essential minerals, AquaPure delivers the crisp, clean refreshment your body deserves — every single sip.</RevealItem>
              <RevealItem className="hero-actions">
                <a href="#products" className="btn btn-primary">Shop the Range</a>
                <a href="#about" className="btn btn-ghost">Our Story</a>
              </RevealItem>
              <RevealItem className="hero-stats">
                <div><strong>2M+</strong><span>Bottles Delivered</span></div>
                <div><strong>120+</strong><span>Cities Served</span></div>
                <div><strong>7.8</strong><span>Balanced pH</span></div>
              </RevealItem>
            </div>
            <RevealItem className="hero-visual">
              <div className="bottle">
                <div className="bottle-cap"></div>
                <div className="bottle-neck"></div>
                <div className="bottle-body">
                  <div className="bottle-label">
                    <span className="bottle-drop">💧</span>
                    <span className="bottle-name">AquaPure</span>
                    <span className="bottle-sub">NATURAL MINERAL WATER</span>
                  </div>
                  <span className="bubble b1"></span>
                  <span className="bubble b2"></span>
                  <span className="bubble b3"></span>
                  <span className="bubble b4"></span>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* FEATURES */}
      <RevealSection as="section" className="features" index={1}>
        <div className="container">
          <div className="features-grid">
            <RevealItem className="feature-card">
              <div className="feature-icon">🏔️</div>
              <h3>Spring Sourced</h3>
              <p>Drawn from protected high-altitude springs, untouched and naturally filtered.</p>
            </RevealItem>
            <RevealItem className="feature-card">
              <div className="feature-icon">⚗️</div>
              <h3>Mineral Balanced</h3>
              <p>A signature blend of calcium, magnesium and potassium for a smooth taste.</p>
            </RevealItem>
            <RevealItem className="feature-card">
              <div className="feature-icon">♻️</div>
              <h3>Eco Packaging</h3>
              <p>Bottled in 100% recyclable materials with a carbon-neutral supply chain.</p>
            </RevealItem>
            <RevealItem className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Doorstep Delivery</h3>
              <p>Fresh cases delivered to your home or office on a schedule that suits you.</p>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* ABOUT */}
      <RevealSection as="section" className="about section" id="about" index={2}>
        <div className="container">
          <div className="about-inner">
            <RevealItem className="about-img">
              <div className="water-circle">💧</div>
              <div className="about-badge">
                <strong>25+ Years</strong>
                <span>of Purity</span>
              </div>
            </RevealItem>
            <RevealItem className="about-text">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">Water the way nature intended it</h2>
              <p>For over two decades, AquaPure has championed water in its <em>purest, most alive</em> form — gently sourced, never over-processed, and always honest about what's in every bottle.</p>
              <p>From the spring to your glass, each step is designed to protect the mineral profile and natural taste that make our water so refreshing.</p>
              <ul className="check-list">
                <li>Zero added chemicals</li>
                <li>Lab-tested daily</li>
                <li>BPA-free bottles</li>
                <li>Carbon-neutral delivery</li>
              </ul>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* PRODUCTS */}
      <RevealSection as="section" className="products section" id="products" index={3}>
        <div className="container">
          <div className="section-head">
            <RevealItem as="span" className="section-eyebrow">The Range</RevealItem>
            <RevealItem as="h2" className="section-title">Find your perfect pour</RevealItem>
            <RevealItem as="p" className="section-desc">From everyday hydration to mindful rituals, there's an AquaPure for every moment.</RevealItem>
          </div>
          <div className="products-grid">
            <RevealItem className="product-card">
              <div className="product-visual visual-spark"><span>✨</span><p>Sparkling</p></div>
              <h3>Sparkling</h3>
              <p className="product-desc">Lightly carbonated for a crisp, celebratory fizz.</p>
              <div className="product-price">$2.50</div>
              <a href="#contact" className="btn btn-outline btn-block">Add to Cart</a>
            </RevealItem>
            <RevealItem className="product-card featured">
              <span className="badge-pop">Popular</span>
              <div className="product-visual visual-alkaline"><span>🌿</span><p>Alkaline</p></div>
              <h3>Alkaline 9.0</h3>
              <p className="product-desc">High-pH water for smooth, balanced hydration.</p>
              <div className="product-price">$3.20</div>
              <a href="#contact" className="btn btn-primary btn-block">Add to Cart</a>
            </RevealItem>
            <RevealItem className="product-card">
              <div className="product-visual visual-copper"><span>🪙</span><p>Copper</p></div>
              <h3>Copper Infused</h3>
              <p className="product-desc">Stored the ancient way for a naturally smooth finish.</p>
              <div className="product-price">$3.60</div>
              <a href="#contact" className="btn btn-outline btn-block">Add to Cart</a>
            </RevealItem>
            <RevealItem className="product-card">
              <span className="badge-pop badge-new">New</span>
              <div className="product-visual visual-kids"><span>🧒</span><p>Kids</p></div>
              <h3>Kids Pure</h3>
              <p className="product-desc">Smaller bottles with a fun grip, made for little hands.</p>
              <div className="product-price">$1.90</div>
              <a href="#contact" className="btn btn-outline btn-block">Add to Cart</a>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* PROCESS */}
      <RevealSection as="section" className="process section" id="process" index={4}>
        <div className="container">
          <div className="section-head">
            <RevealItem as="span" className="section-eyebrow light">From Source to Sip</RevealItem>
            <RevealItem as="h2" className="section-title light">Purity in four steps</RevealItem>
            <RevealItem as="p" className="section-desc light">Every bottle follows the same careful journey, from spring to seal.</RevealItem>
          </div>
          <div className="process-grid">
            <RevealItem className="step">
              <div className="step-num">01</div>
              <h3>Spring Collection</h3>
              <p>Water is gathered from protected high-altitude aquifers.</p>
            </RevealItem>
            <RevealItem className="step">
              <div className="step-num">02</div>
              <h3>Natural Filtration</h3>
              <p>Layers of mineral rock purify the water — no harsh chemicals.</p>
            </RevealItem>
            <RevealItem className="step">
              <div className="step-num">03</div>
              <h3>Mineral Balance</h3>
              <p>A measured blend of minerals is restored for taste and wellbeing.</p>
            </RevealItem>
            <RevealItem className="step">
              <div className="step-num">04</div>
              <h3>Sealed Fresh</h3>
              <p>Bottled and sealed at source to lock in living freshness.</p>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* TESTIMONIALS */}
      <RevealSection as="section" className="testimonials section" index={5}>
        <div className="container">
          <div className="section-head">
            <RevealItem as="span" className="section-eyebrow">Loved by Thousands</RevealItem>
            <RevealItem as="h2" className="section-title">What our customers say</RevealItem>
          </div>
          <div className="testi-grid">
            <RevealItem as="article" className="testi-card">
              <p>The taste is unmatched — crisp, clean and never flat. AquaPure is the only water we keep at home now.</p>
              <footer><strong>Priya Sharma</strong><span>Bengaluru</span></footer>
            </RevealItem>
            <RevealItem as="article" className="testi-card">
              <p>Reliable delivery and beautiful bottles. Our café switched entirely and customers noticed the difference.</p>
              <footer><strong>Daniel Roy</strong><span>Café Owner</span></footer>
            </RevealItem>
            <RevealItem as="article" className="testi-card">
              <p>I love that it's genuinely sustainable. Great water and a brand that actually cares about the planet.</p>
              <footer><strong>Aisha Khan</strong><span>Mumbai</span></footer>
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* CONTACT */}
      <RevealSection as="section" className="contact section" id="contact" index={6}>
        <div className="container">
          <div className="contact-inner">
            <RevealItem className="contact-info">
              <span className="section-eyebrow">Get in Touch</span>
              <h2 className="section-title">Order or ask us anything</h2>
              <p>Set up a delivery plan, request a quote for your office, or just say hello — we usually reply within a day.</p>
              <ul className="contact-list">
                <li><span>📍</span> Bengaluru, India</li>
                <li><span>📞</span> +91 98765 43210</li>
                <li><span>✉️</span> hello@aquapure.water</li>
              </ul>
            </RevealItem>
            <RevealItem as="form" className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="plan">Interested in</label>
                <select id="plan" defaultValue="">
                  <option value="" disabled>Choose an option</option>
                  <option>Home delivery</option>
                  <option>Office / bulk</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Tell us what you need…" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              {noteShown && <p className="form-note">Thanks! We'll be in touch shortly. 💧</p>}
            </RevealItem>
          </div>
        </div>
      </RevealSection>

      {/* FOOTER */}
      <RevealSection as="footer" className="footer" index={7}>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="#" className="logo"><span className="logo-drop">💧</span><span className="logo-text">AquaPure</span></a>
              <p>Pure hydration, perfected by nature. Sourced responsibly and delivered to your door.</p>
              <div className="socials">
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Twitter">X</a>
                <a href="#" aria-label="Facebook">FB</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Delivery</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>© {new Date().getFullYear()} AquaPure · Bengaluru, India</p>
            <p>Privacy · Terms</p>
          </div>
        </div>
      </RevealSection>

      <Link to="/" className="page-switch">View Amruth demo →</Link>
    </div>
  )
}
