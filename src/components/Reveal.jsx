import { motion } from 'framer-motion'

/*
 * Scroll-triggered fade-in primitives built on Framer Motion.
 *
 * RevealSection wraps a whole page section. It fades + lifts into view the
 * first time it scrolls into the viewport (`whileInView` + `once`), and it
 * orchestrates its children with `staggerChildren` so the contents reveal
 * sequentially rather than all at once.
 *
 * RevealItem is the child counterpart — drop it around the blocks inside a
 * section (cards, headings, paragraphs) and they inherit the parent's stagger.
 *
 * NOTE: the decorative keyframe animations on each page (floating bottles,
 * rising bubbles, morphing blobs, spinning mandala) are intentionally left as
 * pure CSS — this layer only adds the scroll-reveal choreography on top.
 */

// Per-section base offset so sections high on the page that are visible at
// load cascade in sequence instead of popping simultaneously.
const SECTION_STEP = 0.12

const containerVariants = (delay, stagger) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
})

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function RevealSection({
  children,
  as = 'section',
  index = 0,
  stagger = 0.14,
  amount = 0.15,
  className,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.section
  return (
    <MotionTag
      className={className}
      variants={containerVariants(index * SECTION_STEP, stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({ children, as = 'div', className, ...rest }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag className={className} variants={itemVariants} {...rest}>
      {children}
    </MotionTag>
  )
}

export default RevealSection
