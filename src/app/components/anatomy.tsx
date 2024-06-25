import * as React from "react";

export default function Anatomy() {
  return (
    <div
      className="MDXCodeBlock"
      style={{
        border: "1px solid var(--gray-outline-2)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div style={{ background: "#FEFCFB" }}>
        <pre className="Pre">
          <div>
            &lt;
            <span style={{ color: "var(--code-1)" }}>Tooltip.Provider</span>
            &gt;
          </div>
          <div>
            {"  "}&lt;
            <span style={{ color: "var(--code-1)" }}>Tooltip.Root</span>&gt;
          </div>
          <div>
            {"    "}&lt;
            <span style={{ color: "var(--code-1)" }}>Tooltip.Trigger </span>
            /&gt;
          </div>
          <div>
            {"    "}&lt;
            <span style={{ color: "var(--code-1)" }}>Tooltip.Positioner</span>
            &gt;
          </div>
          <div>
            {"      "}&lt;
            <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>&gt;
          </div>
          <div>
            {"        "}&lt;
            <span style={{ color: "var(--code-1)" }}>TooltipArrow</span> /&gt;
          </div>
          <div>
            {"      "}&lt;/
            <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>&gt;
          </div>
          <div>
            {"    "}&lt;/
            <span style={{ color: "var(--code-1)" }}>Tooltip.Positioner</span>
            &gt;
          </div>
          <div>
            {"  "}&lt;/
            <span style={{ color: "var(--code-1)" }}>Tooltip.Root</span>&gt;
          </div>
          <div>
            &lt;/
            <span style={{ color: "var(--code-1)" }}>Tooltip.Provider</span>
            &gt;
          </div>
        </pre>
      </div>
    </div>
  );
}
