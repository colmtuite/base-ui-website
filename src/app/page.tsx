import Link from "next/link";
import AppBar from "./components/app-bar";
import CodeBlock from "./components/code-block";

export default function Home() {
  return (
    <div>
      <AppBar />
      <div
        style={{
          boxSizing: "border-box",
          position: "fixed",
          top: 49,
          width: 240,
          height: "calc(100% - 49px)",
          borderRight: "1px solid gainsboro",
          padding: 12,
        }}
      >
        <div className="pb-4">
          <div className="d-f ai-center h-7 pl-3">
            <h4 className="Text size-3 weight-2 c-default">Getting Started</h4>
          </div>
          <Link href="/" className="LinkBlock">
            Overview
          </Link>
          <Link href="/" className="LinkBlock">
            Quick Start
          </Link>
          <Link href="/" className="LinkBlock">
            Usage
          </Link>
          <Link href="/" className="LinkBlock">
            Accessibility
          </Link>
          <Link href="/" className="LinkBlock">
            Releases
          </Link>
          <Link href="/" className="LinkBlock">
            Support
          </Link>
        </div>
        <div className="pb-4">
          <div className="d-f ai-center h-7 pl-3">
            <h4 className="Text size-3 weight-2 c-default">Animation</h4>
          </div>
          <Link href="/" className="LinkBlock active">
            Styling
          </Link>
          <Link href="/" className="LinkBlock">
            Animation
          </Link>
          <Link href="/" className="LinkBlock">
            Composition
          </Link>
          <Link href="/" className="LinkBlock">
            Server-side Rendering
          </Link>
        </div>
        <div className="pb-4">
          <div className="d-f ai-center h-7 pl-3">
            <h4 className="Text size-3 weight-2 c-default">Components</h4>
          </div>
          <Link href="/" className="LinkBlock">
            Checkbox
          </Link>
          <Link href="/" className="LinkBlock">
            Dialog
          </Link>
          <Link href="/" className="LinkBlock">
            HoverCard
          </Link>
          <Link href="/" className="LinkBlock">
            Menu
          </Link>
          <Link href="/" className="LinkBlock">
            NumberField
          </Link>
          <Link href="/" className="LinkBlock">
            Popover
          </Link>
          <Link href="/" className="LinkBlock">
            Separator
          </Link>
          <Link href="/" className="LinkBlock">
            Slider
          </Link>
          <Link href="/" className="LinkBlock">
            Switch
          </Link>
          <Link href="/" className="LinkBlock">
            Tabs
          </Link>
          <Link href="/" className="LinkBlock">
            Tooltip
          </Link>
        </div>
      </div>
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
            <h1 className="Text size-8 mb-2">Tooltip</h1>
            <p className="Text size-5 color-gray weight-1">
              A valid outcome of this proposal is just saying that after going
              back and forth many times, we think this decision is higher-level,
              presenting the information that has been shared here.
            </p>
            <CodeBlock />
            <h2 className="Text size-6 mt-6 mb-3">Installation</h2>
            <p className="Text size-4 mb-3">
              A valid outcome of this{" "}
              <code className="Code">Component.Proposal</code> is just saying
              that after going back and forth many times, we think this decision
              is higher-level, presenting the information that has been shared
              here.
            </p>
            <p className="Text size-4 mb-3">
              We drilled down onto this problem and found out that it touches
              all products and not just Material UI. We cannot solve this
              problem in the Core realm.
            </p>
            <h2 className="Text size-6 mt-6 mb-3">Overview</h2>
            <p className="Text size-4 mb-3">
              If a prototype would help the decision, I would be more than happy
              to do it. I’m sooo eager to stop discussing and start building at
              this point 😅 But even before prototyping, it would be good to
              have directions from the people who will make the decision: what
              information would they need? what should we prototype exactly?
            </p>
            <p className="Text size-4 mb-3">
              So, if we agree on this, how should we present the information to
              the higher level? is it worth it even proposing something? how do
              we drive this need for direction forward?
            </p>
          </div>
        </div>
      </main>
      <div
        style={{
          boxSizing: "border-box",
          position: "fixed",
          top: 49,
          right: 0,
          width: 240,
          height: "calc(100% - 49px)",
          borderLeft: "1px solid gainsboro",
          padding: 12,
        }}
      >
        <h4 className="Text size-3 weight-2">Contents</h4>
      </div>
    </div>
  );
}
