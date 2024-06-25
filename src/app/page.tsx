import Link from "next/link";
import AppBar from "./components/app-bar";
import Navigation from "./components/navigation";
import MiniNav from "./components/mini-nav";
import CodeBlock from "./components/code-block";
import Anatomy from "./components/anatomy";
import APIReference from "./components/api-reference";
import Footer from "./components/footer";
import Features from "./components/features";
import FeedbackForm from "./components/feedback-form";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Navigation />
      <main style={{ paddingLeft: 240, paddingRight: 240 }}>
        <div style={{ background: "white", margin: 4, borderRadius: 16 }}>
          <div
            style={{
              maxWidth: 714,
              paddingLeft: 24,
              paddingRight: 24,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="py-9">
              <h1 className="Text size-8 mb-2">Tooltip</h1>
              <p className="Text size-5 color-gray weight-1">
                Tooltips are visual-only floating elements that display
                information about a trigger element when a user hovers or
                focuses it.
              </p>
            </div>
            <CodeBlock />
            {/* <Features /> */}
            <h2 className="Text size-6" id="installation">
              <a href="#installation" className="Link">
                Installation
              </a>
            </h2>
            <p className="Text size-4">
              Base UI components are all available as a single package.
            </p>
            <div
              className="MDXCodeBlock"
              style={{
                border: "1px solid var(--gray-outline-2)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: 4,
                  borderBottom: "1px solid var(--gray-outline-1)",
                }}
              >
                <div className="d-f ai-center g-2">
                  <div
                    role="group"
                    dir="ltr"
                    aria-label="language selector"
                    tabindex="0"
                    className="ToggleGroup"
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      aria-label="js"
                      tabindex="0"
                      className="Toggle"
                    >
                      npm
                    </button>
                    <button
                      type="button"
                      data-state="active"
                      role="radio"
                      aria-checked="true"
                      aria-label="ts"
                      tabindex="-1"
                      className="Toggle"
                    >
                      yarn
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      aria-label="js"
                      tabindex="0"
                      className="Toggle"
                    >
                      pnpm
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ background: "#FEFCFB" }}>
                <pre className="Pre">
                  <div>
                    <span style={{ color: "var(--code-3)" }}>npm install</span>{" "}
                    @base_ui/react/Tooltip
                  </div>
                </pre>
              </div>
            </div>
            <p className="Text size-4">
              Once you have the package installed, import the component.
            </p>
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
                    <span style={{ color: "var(--code-2)" }}>import</span>{" "}
                    <span style={{ color: "var(--code-3)" }}>*</span>{" "}
                    <span style={{ color: "var(--code-2)" }}>as</span>{" "}
                    <span style={{ color: "var(--code-3)" }}>Tooltip</span>{" "}
                    <span style={{ color: "var(--code-2)" }}>from</span>{" "}
                    <span style={{ color: "var(--code-5)" }}>
                      '@base_ui/react/Tooltip'
                    </span>
                    ;
                  </div>
                </pre>
              </div>
            </div>

            <h2 className="Text size-6" id="installation">
              <a href="#installation" className="Link">
                Anatomy
              </a>
            </h2>
            <Anatomy />

            <h2 className="Text size-6" id="installation">
              <a href="#installation" className="Link">
                Provider
              </a>
            </h2>
            <p className="Text size-4">
              <code className="Code">Tooltip.Provider</code> provides a shared
              delay for tooltips so that once a tooltip is shown, the rest of
              the tooltips in the group don't wait for the delay before showing.
              You can wrap this globally, or around an individual group of
              tooltips anywhere in your React tree (or both).
            </p>
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
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Provider
                    </span>
                    &gt;
                  </div>
                  <div>
                    {"  "}&lt;
                    <span style={{ color: "var(--code-1)" }}>App </span>
                    /&gt;
                  </div>
                  <div>
                    &lt;/
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Provider
                    </span>
                    &gt;
                  </div>
                </pre>
              </div>
            </div>

            <h2 className="Text size-6" id="installation">
              <a href="#installation" className="Link">
                Accessibility
              </a>
            </h2>
            <p className="Text size-4">
              Tooltips are only for sighted users with access to a pointer with
              hover capability or keyboard focus. This means you must supply an
              accessible name via <code className="Code">aria-label</code> to
              trigger elements that don't contain text content, such as an icon
              button.
            </p>
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
                    <span style={{ color: "var(--code-1)" }}>Tooltip.Root</span>
                    &gt;
                  </div>
                  <div>
                    {"  "}&lt;
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Trigger{" "}
                    </span>
                    /&gt;
                  </div>
                  <div>
                    {"  "}&lt;
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Positioner
                    </span>
                    &gt;
                  </div>
                  <div>
                    {"    "}&lt;
                    <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>
                    &gt;
                  </div>
                  <div>
                    {"      "}&lt;
                    <span style={{ color: "var(--code-1)" }}>
                      TooltipArrow
                    </span>{" "}
                    /&gt;
                  </div>
                  <div>
                    {"    "}&lt;/
                    <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>
                    &gt;
                  </div>
                  <div>
                    {"  "}&lt;/
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Positioner
                    </span>
                    &gt;
                  </div>
                  <div>
                    &lt;/
                    <span style={{ color: "var(--code-1)" }}>Tooltip.Root</span>
                    &gt;
                  </div>
                </pre>
              </div>
            </div>
            <p className="Text size-4">
              Your <code className="Code">aria-label</code> and tooltip content
              should closely match or be identical so that screen reader users
              and sighted users receive the same information.
            </p>
            <p className="Text size-4">
              Tooltips should ideally also be secondary in nature, because touch
              users cannot see them. They are most useful as progressive
              enhancement in high-density desktop applications that have many
              icon buttons where visual labels are impractical to use.
            </p>

            <h2 className="Text size-6" id="placement">
              <a href="#placement" className="Link">
                Placement
              </a>
            </h2>
            <p className="Text size-4">
              By default, the tooltip is placed on the top side of its trigger.
              To change this, use the <code className="Code">side</code> prop:
            </p>
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
                    <span style={{ color: "var(--code-1)" }}>Tooltip.Root</span>
                    &gt;
                  </div>
                  <div>
                    {"  "}&lt;
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Trigger{" "}
                    </span>
                    /&gt;
                  </div>
                  <div>
                    {"  "}&lt;
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Positioner{" "}
                    </span>
                    <span style={{ color: "var(--code-5)" }}>side</span>
                    ="
                    <span style={{ color: "var(--code-4)" }}>right</span>
                    "&gt;
                  </div>
                  <div>
                    {"    "}&lt;
                    <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>
                    &gt;
                  </div>
                  <div>{"      "}Tooltip</div>
                  <div>
                    {"    "}&lt;/
                    <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>
                    &gt;
                  </div>
                  <div>
                    {"  "}&lt;/
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Positioner
                    </span>
                    &gt;
                  </div>
                  <div>
                    &lt;/
                    <span style={{ color: "var(--code-1)" }}>Tooltip.Root</span>
                    &gt;
                  </div>
                </pre>
              </div>
            </div>
            <p className="Text size-4">
              You can also change the alignment of the tooltip in relation to
              its anchor. By default, it is centered, but it can be aligned to
              an edge of the anchor using the{" "}
              <code className="Code">alignment</code> prop.
            </p>
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
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Positioner{" "}
                    </span>
                    <span style={{ color: "var(--code-5)" }}>side</span>
                    ="
                    <span style={{ color: "var(--code-4)" }}>right</span>"{" "}
                    <span style={{ color: "var(--code-5)" }}>alignment</span>
                    ="
                    <span style={{ color: "var(--code-4)" }}>start</span>
                    "&gt;
                  </div>
                  <div>
                    {"  "}&lt;
                    <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>
                    &gt;
                  </div>
                  <div>{"    "}Tooltip</div>
                  <div>
                    {"  "}&lt;/
                    <span style={{ color: "var(--code-1)" }}>TooltipPopup</span>
                    &gt;
                  </div>
                  <div>
                    &lt;/
                    <span style={{ color: "var(--code-1)" }}>
                      Tooltip.Positioner
                    </span>
                    &gt;
                  </div>
                </pre>
              </div>
            </div>
            <p className="Text size-4">
              Due to collision detection, the tooltip may change its placement
              to avoid overflow. Therefore, your explicitly specified{" "}
              <code className="Code">side</code> and
              <code className="Code">alignment</code> props act as preferred
              values.
            </p>
            <APIReference />
            <Footer />
            {/* <FeedbackForm /> */}
          </div>
        </div>
      </main>
      <MiniNav />
    </div>
  );
}
