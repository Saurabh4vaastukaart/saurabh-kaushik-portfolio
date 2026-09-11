import { ImageResponse } from "next/og";

export const alt = "Saurabh Kaushik, Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "66px 72px",
        color: "#f5f7ff",
        background: "#060914",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -210,
          right: -120,
          display: "flex",
          width: 610,
          height: 610,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(128, 99, 255, 0.62), rgba(6, 9, 20, 0) 68%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -270,
          left: -140,
          display: "flex",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(44, 204, 235, 0.32), rgba(6, 9, 20, 0) 69%)",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            width: 54,
            height: 54,
            alignItems: "center",
            justifyContent: "center",
            color: "#061019",
            borderRadius: 15,
            background: "linear-gradient(135deg, #65e7ff, #9b8cff, #ff77bd)",
            fontSize: 17,
            fontWeight: 800,
          }}
        >
          SK
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 23, fontWeight: 700 }}>Saurabh Kaushik</span>
          <span style={{ color: "#a7aec4", fontSize: 15, letterSpacing: 2.2 }}>PRODUCT MANAGER</span>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: 950, flexDirection: "column" }}>
        <span style={{ marginBottom: 18, color: "#83e8ff", fontSize: 19, fontWeight: 700 }}>
          AI&nbsp; | &nbsp;SaaS&nbsp; | &nbsp;Growth
        </span>
        <span style={{ fontSize: 68, fontWeight: 760, letterSpacing: -3.3, lineHeight: 1.04 }}>
          From ambiguous problems to measurable products.
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["$1.2M+ revenue impact", "700K+ users", "6 years"].map((item) => (
          <span
            key={item}
            style={{
              display: "flex",
              padding: "10px 15px",
              color: "#cbd2e7",
              border: "1px solid rgba(190, 204, 255, 0.2)",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              fontSize: 14,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>,
    size,
  );
}
