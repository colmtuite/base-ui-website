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
            AlertDialog
          </Link>
          <Link href="/" className="LinkBlock">
            Checkbox
          </Link>
          <Link href="/" className="LinkBlock">
            CheckboxGroup
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
            RadioGroup
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
              this point. But even before prototyping, it would be good to have
              directions from the people who will make the decision: what
              information would they need? what should we prototype exactly?
            </p>
            <p className="Text size-4 mb-3">
              So, if we agree on this, how should we present the information to
              the higher level? is it worth it even proposing something? how do
              we drive this need for direction forward?
            </p>
            <h2 className="Text size-6 mt-6 mb-3">API Reference</h2>
            <div className="TableRoot">
              <table className="TableTable">
                <thead>
                  <tr className="TableRow">
                    <th className="TableColumnHeader" scope="col">
                      Prop
                    </th>
                    <th className="TableColumnHeader" scope="col">
                      Type
                    </th>
                    <th className="TableColumnHeader" scope="col">
                      Default
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      Prop
                    </th>
                    <td className="TableCell">Type</td>
                    <td className="TableCell">Default</td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      Prop
                    </th>
                    <td className="TableCell">Type</td>
                    <td className="TableCell">Default</td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      Prop
                    </th>
                    <td className="TableCell">Type</td>
                    <td className="TableCell">Default</td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      Prop
                    </th>
                    <td className="TableCell">Type</td>
                    <td className="TableCell">Default</td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      Prop
                    </th>
                    <td className="TableCell">Type</td>
                    <td className="TableCell">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI. We cannot
                      solve this problem in the Core realm.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="d-f ai-center jc-center g-3 py-9">
              <a
                href="#"
                className="LinkBlock jc-end"
                style={{ minWidth: 200, height: "auto" }}
              >
                <div className="d-f fd-column g-2 ai-end">
                  <span className="Text size-3 color-gray">Previous</span>
                  <div className="d-f ai-center g-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="GrowingChevron direction-left"
                      >
                        <path
                          d="M2.5 8H13.5"
                          stroke="currentColor"
                          stroke-linecap="round"
                          className="GrowingChevronLine"
                        />
                        <path
                          d="M9 3.5L13.5 8L9 12.5"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="GrowingChevronTip"
                        />
                      </svg>
                    </div>
                    <span className="Text size-4">Dialog</span>
                  </div>
                </div>
              </a>
              <span role="separator" className="Separator" />
              <a
                href="#"
                className="LinkBlock"
                style={{ minWidth: 200, height: "auto" }}
              >
                <div className="d-f fd-column g-2">
                  <span className="Text size-3 color-gray">Next</span>
                  <div className="d-f fd-rr ai-center g-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="GrowingChevron direction-right"
                    >
                      <path
                        d="M2.5 8H13.5"
                        stroke="currentColor"
                        stroke-linecap="round"
                        className="GrowingChevronLine"
                      />
                      <path
                        d="M9 3.5L13.5 8L9 12.5"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="GrowingChevronTip"
                      />
                    </svg>
                    <span className="Text size-4">HoverCard</span>
                  </div>
                </div>
              </a>
            </div>
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
