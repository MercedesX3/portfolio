"use client";
import * as React from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, wrap } from "framer-motion"

const ScrollVelocity = React.forwardRef(
  ({ children, velocity = 5, movable = true, clamp = false, className, ...props }, ref) => {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 100,
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
      clamp,
    })

    const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`)

    const directionFactor = React.useRef(1)
    const scrollThreshold = React.useRef(5)

    useAnimationFrame((t, delta) => {
      if (movable) {
        move(delta)
      } else {
        if (Math.abs(scrollVelocity.get()) >= scrollThreshold.current) {
          move(delta)
        }
      }
    })

    function move(delta) {
      let moveBy = directionFactor.current * velocity * (delta / 1000)
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get()
      baseX.set(baseX.get() + moveBy)
    }

    return (
      <div
        ref={ref}
        className={(
          "absolute m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]",
          className
        )}
        {...props}>
        <motion.div
          className="flex flex-row flex-nowrap whitespace-nowrap font-medium text-xl bg-gradient-to-r from-purple-400 via-purple-500 to-gray-300 text-transparent bg-clip-text"
          // className="flex flex-row items-center justify-evenly text-center bg-gradient-to-r from-purple-400 via-purple-500 to-gray-300 text-transparent bg-clip-text">
          style={{ x }}>
          {typeof children === "string" ? (
            <>
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx}>{children}</span>
              ))}
            </>
          ) : (
            children
          )}
        </motion.div>
      </div>
    );
  }
)
ScrollVelocity.displayName = "ScrollVelocity"

export { ScrollVelocity };