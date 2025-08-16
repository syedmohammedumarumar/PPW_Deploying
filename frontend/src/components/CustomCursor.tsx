import { useEffect, useState, useRef } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const animationFrameRef = useRef<number>()
  const positionRef = useRef({ x: 0, y: 0 })
  const trailingPositionRef = useRef({ x: 0, y: 0 })

  // Setup styles only once
  useEffect(() => {
    const styleId = 'custom-cursor-styles'
    
    // Remove existing styles if they exist
    const existingStyle = document.getElementById(styleId)
    if (existingStyle) {
      existingStyle.remove()
    }
    
    // Create new style element
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      /* Hide default cursor on desktop */
      @media (hover: hover) and (pointer: fine) {
        * {
          cursor: none !important;
        }
      }

      .cursor-main {
        position: fixed;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background: #3b82f6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease-out;
        box-shadow: 0 0 20px rgba(94, 130, 246, 0.3);
      }

      .cursor-main.hover {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%));
        box-shadow: 0 0 30px rgba(94, 130, 246, 0.5);
      }

      .cursor-trailing {
        position: fixed;
        top: 0;
        left: 0;
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease-out;
        box-shadow: 0 0 10px rgba(94, 130, 246, 0.4);
      }

      .cursor-trailing.hover {
        width: 16px;
        height: 16px;
        background: linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%));
        box-shadow: 0 0 15px rgba(94, 130, 246, 0.6);
      }

      /* Add hover effect to change text color of the actual hovered element */
      a:hover, button:hover, [role="button"]:hover, 
      input:hover, textarea:hover, select:hover, .cursor-pointer:hover {
        color: #000000 !important;
      }

      /* Dark theme support */
      @media (prefers-color-scheme: dark) {
        .cursor-main {
          background: linear-gradient(135deg, hsl(217 91% 60%), hsl(236, 58%, 49%));
          box-shadow: 0 0 20px rgba(94, 130, 246, 0.4);
        }

        .cursor-main.hover {
          background: linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%));
          box-shadow: 0 0 30px rgba(94, 130, 246, 0.6);
        }

        .cursor-trailing {
          background: linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%));
          box-shadow: 0 0 10px rgba(94, 130, 246, 0.5);
        }

        .cursor-trailing.hover {
          background: linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%));
          box-shadow: 0 0 15px rgba(94, 130, 246, 0.7);
        }

        a:hover, button:hover, [role="button"]:hover, 
        input:hover, textarea:hover, select:hover, .cursor-pointer:hover {
          color: #ffffff !important;
        }
      }
    `
    
    document.head.appendChild(style)
    
    return () => {
      const styleToRemove = document.getElementById(styleId)
      if (styleToRemove) {
        styleToRemove.remove()
      }
    }
  }, [])

  // Setup event listeners and animation only once
  useEffect(() => {
    const updateTrailingPosition = () => {
      const current = positionRef.current
      const trailing = trailingPositionRef.current
      
      const dx = current.x - trailing.x
      const dy = current.y - trailing.y
      
      // Smooth trailing effect with lerp (linear interpolation)
      const lerpFactor = 0.15
      const newTrailingPos = {
        x: trailing.x + dx * lerpFactor,
        y: trailing.y + dy * lerpFactor
      }
      
      trailingPositionRef.current = newTrailingPos
      setTrailingPosition(newTrailingPos)
      
      animationFrameRef.current = requestAnimationFrame(updateTrailingPosition)
    }

    const updatePosition = (e) => {
      const newPos = { x: e.clientX, y: e.clientY }
      positionRef.current = newPos
      setPosition(newPos)
      setIsVisible(true)
    }

    const handleElementMouseEnter = () => setIsHovering(true)
    const handleElementMouseLeave = () => setIsHovering(false)
    
    // Only hide cursor when mouse actually leaves the window/document
    const handleDocumentMouseLeave = () => setIsVisible(false)

    // Add event listeners
    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", handleDocumentMouseLeave) // Changed from mouseout to mouseleave
    document.addEventListener("mouseenter", () => setIsVisible(true)) // Show cursor when entering document

    // Start the trailing animation
    updateTrailingPosition()

    // Function to add hover listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer',
      )
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleElementMouseEnter)
        el.addEventListener("mouseleave", handleElementMouseLeave)
      })
    }

    // Initial setup
    addHoverListeners()

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleDocumentMouseLeave)
      document.removeEventListener("mouseenter", () => setIsVisible(true))
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      observer.disconnect()

      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer',
      )
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementMouseEnter)
        el.removeEventListener("mouseleave", handleElementMouseLeave)
      })
    }
  }, []) // Empty dependency array - run only once

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor ball */}
      <div
        className={`cursor-main ${isHovering ? "hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Trailing cursor ball */}
      <div
        className={`cursor-trailing ${isHovering ? "hover" : ""}`}
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
        }}
      />
    </>
  )
}