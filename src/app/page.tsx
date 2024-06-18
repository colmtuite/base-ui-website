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
            <div className="Callout" style={{ margin: "24px 0 32px 0" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Icon"
              >
                <path
                  d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                  fill="hsl(208 100% 45%)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="Text size-3" style={{ color: "hsl(208 100% 45%)" }}>
                Material UI v5 supports Material Design 2. Adoption of Material
                Design 3 is tentatively planned for Material UI v7. See our
                amazing new{" "}
                <Link
                  href="#"
                  style={{
                    color: "hsl(208 100% 45%)",
                    textUnderlineOffset: "4px",
                    textDecorationThickness: "1px",
                    textDecorationColor: "hsl(208 100% 45% / 15%)",
                  }}
                >
                  announcement blog post
                </Link>{" "}
                for more details. You can follow this{" "}
                <Link
                  href="#"
                  style={{
                    color: "hsl(208 100% 45%)",
                    textUnderlineOffset: "4px",
                    textDecorationThickness: "1px",
                    textDecorationColor: "hsl(208 100% 45% / 15%)",
                  }}
                >
                  GitHub issue
                </Link>{" "}
                for future updates.
              </p>
            </div>
            <h2 className="Text size-6 mt-6 mb-3">API Reference</h2>
            <h3 className="Text size-5 mt-6 mb-3">Provider</h3>
            <p className="Text size-4 mb-3">
              Wraps around <code className="Code">&lt;App /&gt;</code> or a
              group of
              <code className="Code">&lt;Tooltip.Root&gt;</code> components.
            </p>
            <div className="TableRoot">
              <table className="TableTable">
                <thead>
                  <tr className="TableRow">
                    <th
                      className="TableColumnHeader"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      Prop
                    </th>
                    <th
                      className="TableColumnHeader"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      Description
                    </th>
                    <th
                      className="TableColumnHeader"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      Type
                    </th>
                    <th
                      className="TableColumnHeader"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      Default
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      <code className="Code">longAssPropName</code>
                    </th>
                    <td className="TableCell">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI.
                    </td>
                    <td className="TableCell">
                      <code className="Code">function</code>
                    </td>
                    <td className="TableCell">
                      <code className="Code">defaultValue</code>
                    </td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      <code className="Code">longAssPropName</code>
                    </th>
                    <td className="TableCell">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI.
                    </td>
                    <td className="TableCell">
                      <code className="Code">function</code>
                    </td>
                    <td className="TableCell">
                      <code className="Code">defaultValue</code>
                    </td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      <code className="Code">longAssPropName</code>
                    </th>
                    <td className="TableCell">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI.
                    </td>
                    <td className="TableCell">
                      <code className="Code">function</code>
                    </td>
                    <td className="TableCell">
                      <code className="Code">defaultValue</code>
                    </td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      <code className="Code">longAssPropName</code>
                    </th>
                    <td className="TableCell">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI.
                    </td>
                    <td className="TableCell">
                      <code className="Code">function</code>
                    </td>
                    <td className="TableCell">
                      <code className="Code">defaultValue</code>
                    </td>
                  </tr>
                  <tr className="TableRow">
                    <th className="TableRowHeader" scope="row">
                      <code className="Code">longAssPropName</code>
                    </th>
                    <td className="TableCell">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI.
                    </td>
                    <td className="TableCell">
                      <code className="Code">function</code>
                    </td>
                    <td className="TableCell">
                      <code className="Code">defaultValue</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="Text size-5 mt-6 mb-3">Root</h3>
            <p className="Text size-4 mb-3">
              A top-level component that wraps the other components.
            </p>
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
