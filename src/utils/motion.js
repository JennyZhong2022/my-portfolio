// Function to create a text animation variant
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,        // Initial position above the element
      opacity: 0,    // Initial opacity set to 0
    },
    show: {
      y: 0,          // Final position at y = 0
      opacity: 1,    // Full opacity
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay, // Animation delay specified by the caller
      },
    },
  };
};

// Function to create a fade-in animation
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Initial x position based on direction
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,   // Initial y position based on direction
      opacity: 0,                                                      // Initial opacity set to 0
    },
    show: {
      x: 0,                             // Final x position at 0
      y: 0,                             // Final y position at 0
      opacity: 1,                       // Full opacity
      transition: {
        type: type,                     // Animation type (e.g., "spring", "tween")
        delay: delay,                   // Animation delay specified by the caller
        duration: duration,             // Animation duration specified by the caller
        ease: "easeOut",                // Easing function for smooth animation
      },
    },
  };
};

// Function to create a zoom-in animation
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,      // Initial scale set to 0
      opacity: 0,    // Initial opacity set to 0
    },
    show: {
      scale: 1,      // Final scale at 1 (no zoom)
      opacity: 1,    // Full opacity
      transition: {
        type: "tween",  // Animation type set to "tween"
        delay: delay,   // Animation delay specified by the caller
        duration: duration, // Animation duration specified by the caller
        ease: "easeOut",    // Easing function for smooth animation
      },
    },
  };
};

// Function to create a slide-in animation
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Initial x position based on direction
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,     // Initial y position based on direction
    },
    show: {
      x: 0,                         // Final x position at 0
      y: 0,                         // Final y position at 0
      transition: {
        type: type,                 // Animation type (e.g., "spring", "tween")
        delay: delay,               // Animation delay specified by the caller
        duration: duration,         // Animation duration specified by the caller
        ease: "easeOut",            // Easing function for smooth animation
      },
    },
  };
};

// Function to create a container animation with staggered children
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren, // Staggered animation for child elements
        delayChildren: delayChildren || 0, // Delay for child animations (optional)
      },
    },
  };
};
