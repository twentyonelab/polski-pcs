import { motion } from 'motion/react'
import { Plus } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1]

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4'

/* Brand mark: two rounded rectangles rotated -35deg */
function LogoIcon() {
  return (
    <svg
      className="logo__icon"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <g transform="rotate(-35 11 11)" fill="#000">
        <rect x="4" y="2.5" width="5" height="17" rx="2.5" />
        <rect x="13" y="2.5" width="5" height="17" rx="2.5" />
      </g>
    </svg>
  )
}

/* 4-dot grid icon */
function GridIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <circle cx="3" cy="3" r="1.6" />
      <circle cx="9" cy="3" r="1.6" />
      <circle cx="3" cy="9" r="1.6" />
      <circle cx="9" cy="9" r="1.6" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="hero">
      {/* Background video */}
      <motion.div
        className="hero__video-wrap"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <video
          className="hero__video"
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          loop
        />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className="navbar"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="navbar__left">
          <div className="logo">
            <LogoIcon />
            <span className="logo__text">NeuralKinetics</span>
          </div>

          <button className="menu-btn" type="button">
            <span className="menu-btn__circle">
              <Plus size={12} strokeWidth={3} />
            </span>
            <span className="menu-btn__label">Menu</span>
          </button>

          <div className="tags-pill">
            <span className="tags-pill__item">Advanced Bionics</span>
            <span className="tags-pill__item">Cognitive AI</span>
          </div>
        </div>

        <div className="navbar__right">
          <div className="right-pill">
            <button className="right-pill__circle" type="button" aria-label="Adaptive Systems">
              <GridIcon />
            </button>
            <span className="right-pill__label">Adaptive Systems</span>
          </div>
        </div>
      </motion.nav>

      {/* Footer content */}
      <motion.footer
        className="footer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: EASE }}
      >
        <div className="footer__left">
          <motion.div
            className="subtitle"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
          >
            <span className="subtitle__dot" />
            <span className="subtitle__text">Best digital banking card 2026</span>
          </motion.div>

          <motion.h1
            className="heading"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
          >
            One Card, Zero
            <br />
            Limits. Worldwide.
          </motion.h1>

          <motion.div
            className="footer__buttons"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: EASE }}
          >
            <button className="btn btn--primary" type="button">
              See Features
            </button>
            <button className="btn btn--ghost" type="button">
              How It Works
            </button>
          </motion.div>
        </div>

        <div className="footer__tags">
          <span className="footer__tag">Neuromorphic</span>
          <span className="footer__tag">AGI</span>
          <span className="footer__tag">Cybernetics</span>
        </div>
      </motion.footer>
    </div>
  )
}
