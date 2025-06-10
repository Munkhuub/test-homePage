// import React, { useState, useEffect, useRef } from "react";

// export const InteractiveCircle = ({
//   gridSize = 20, // Increased for better coverage
//   circleSize = 50, // Slightly smaller for better density
//   className = "",
// }) => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [clickedCircles, setClickedCircles] = useState(new Set());
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const handleCircleClick = (index) => {
//     setClickedCircles((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(index)) {
//         newSet.delete(index);
//       } else {
//         newSet.add(index);
//       }
//       return newSet;
//     });
//   };

//   const getDistanceFromMouse = (circleX, circleY) => {
//     if (!gridRef.current) return 1000;
//     const rect = gridRef.current.getBoundingClientRect();
//     const circleCenterX = rect.left + circleX * circleSize + circleSize / 2;
//     const circleCenterY = rect.top + circleY * circleSize + circleSize / 2;
//     return Math.sqrt(
//       Math.pow(mousePos.x - circleCenterX, 2) +
//         Math.pow(mousePos.y - circleCenterY, 2)
//     );
//   };

//   const getCircleStyle = (index) => {
//     const row = Math.floor(index / gridSize);
//     const col = index % gridSize;
//     const distance = getDistanceFromMouse(col, row);
//     const isClicked = clickedCircles.has(index);

//     const maxDistance = 200;
//     const intensity = Math.max(0, 1 - distance / maxDistance);

//     const baseStyle = {
//       width: "30px",
//       height: "30px",
//       borderRadius: "50%",
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//       cursor: "pointer",
//       filter: "blur(8px)",
//     };

//     if (isClicked) {
//       return {
//         ...baseStyle,
//         width: "45px",
//         height: "45px",
//         backgroundColor: "#60a5fa",
//         boxShadow: `
//           0 0 30px rgba(96, 165, 250, 0.8),
//           0 0 60px rgba(96, 165, 250, 0.6),
//           0 0 90px rgba(96, 165, 250, 0.4)
//         `,
//         filter: "blur(12px)",
//       };
//     }

//     if (intensity > 0.1) {
//       const size = 20 + intensity * 25;
//       const opacity = 0.3 + intensity * 0.7;
//       const blurAmount = 6 + intensity * 8;
//       return {
//         ...baseStyle,
//         width: `${size}px`,
//         height: `${size}px`,
//         backgroundColor: `rgba(147, 197, 253, ${opacity})`,
//         boxShadow: `
//           0 0 ${20 + intensity * 40}px rgba(147, 197, 253, ${intensity * 0.8}),
//           0 0 ${40 + intensity * 60}px rgba(147, 197, 253, ${intensity * 0.5})
//         `,
//         filter: `blur(${blurAmount}px)`,
//       };
//     }

//     return {
//       ...baseStyle,
//       width: "0px",
//       height: "0px",
//       backgroundColor: "transparent",
//       filter: "blur(0px)",
//     };
//   };

//   return (
//     <div
//       ref={gridRef}
//       className={`fixed inset-0 pointer-events-none z-0 ${className}`}
//       style={{
//         display: "grid",
//         gridTemplateColumns: `repeat(${gridSize}, ${circleSize}px)`,
//         gridTemplateRows: `repeat(${gridSize}, ${circleSize}px)`,
//         justifyContent: "center",
//         alignContent: "center",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       {Array.from({ length: gridSize * gridSize }, (_, index) => (
//         <div
//           key={index}
//           className="relative pointer-events-auto"
//           style={{
//             width: `${circleSize}px`,
//             height: `${circleSize}px`,
//           }}
//           onClick={() => handleCircleClick(index)}
//         >
//           <div style={getCircleStyle(index)} />
//         </div>
//       ))}
//     </div>
//   );
// };
