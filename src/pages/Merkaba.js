import React from 'react';

function MerkabaSpinner() {
  const description = `
Merkaba Geometry Formula
A regular tetrahedron of side length s, centered at the origin, can be expressed with 4 vertices (one pointing upward, 3 forming a base). To form the Merkaba, we need two tetrahedrons:

Upward-Pointing Tetrahedron (T1)
V0 = (0, 0, s*sqrt(6)/4) (Apex)
V1 = (0, s*sqrt(2)/2, -s*sqrt(6)/12)
V2 = (-s*sqrt(3)/2, s*sqrt(2)/2, -s*sqrt(6)/12)  (Corrected y-coordinate sign)
V3 = (s*sqrt(3)/2, -s*sqrt(2)/2, -s*sqrt(6)/12)

Downward-Pointing Tetrahedron (T2)
This is simply the inversion of T1 across the origin (multiply z-coordinates by -1):
U0 = (0, 0, -s*sqrt(6)/4) (Inverted Apex)
U1 = (0, s*sqrt(2)/2, s*sqrt(6)/12)
U2 = (-s*sqrt(3)/2, s*sqrt(2)/2, s*sqrt(6)/12)  (Corrected y-coordinate sign)
U3 = (s*sqrt(3)/2, -s*sqrt(2)/2, s*sqrt(6)/12)

Union of Sets
The Merkaba point set is: M = { V0, V1, V2, V3 } U { U0, U1, U2, U3 }
This creates an 8-vertex polyhedron, which is a stellated octahedron (Star Tetrahedron).

Dynamic Merkaba (Sacred Geometry Practice)
In visualization/meditation traditions, the Merkaba is often described as:
- Upward tetrahedron rotates clockwise
- Downward tetrahedron rotates counterclockwise
- Both rotations occur about a central axis (commonly the Y-axis or the vertical Z-axis in 3D space)

That can be expressed with time-varying rotation matrices:
For upward tetrahedron: V(i)(t) = R(y)(+wt) * V(i)
For downward tetrahedron: U(i)(t) = R(y)(-wt) * U(i)
Where:
- R(y)(theta) is the standard 3D rotation matrix about the Y-axis
- w is angular velocity (rotation speed)
- t is time

Summary
- The Merkaba is two opposite tetrahedrons sharing the same centroid.
- Defined by 8 vertices, with formulas based on side length s.
- In sacred visualization, the two tetrahedrons spin in opposite directions, producing a dynamic energetic field.
`;

  return (
    <div style={{ textAlign: "center", padding: "20px", margin: "0 auto", maxWidth: "800px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <img src="/images/spinningmerkababw.png" alt="Spinning Merkaba" style={{ maxWidth: "100%", height: "auto", marginTop: "60px", marginBottom: "20px" }} />
      <pre style={{ textAlign: "left", margin: "0 auto", padding: "15px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "4px", whiteSpace: "pre-wrap", fontSize: "16px", color: "#333" }}>
        {description}
      </pre>
    </div>
  );
}

export default MerkabaSpinner;