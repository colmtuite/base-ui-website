import * as React from "react";

export default function CopyCode() {
  return (
    <div className="p-a" style={{ top: 8, right: 8 }}>
      <button
        style={{
          userSelect: "none",
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          backgroundClip: "padding-box",
          border: "1px solid rgba(0,0,0,.1)",
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-1)",
          boxSizing: "border-box",
          backgroundColor: "transparent",
          verticalAlign: "middle",
          height: 24,
          fontWeight: 500,
          borderRadius: 4,
        }}
      >
        Copy
      </button>
    </div>
  );
}
