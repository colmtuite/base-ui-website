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
          // borderRight: "1px solid var(--gray-outline-1)",
          padding: 12,
          overflowY: "auto",
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
            <h4 className="Text size-3 weight-2 c-default">Guides</h4>
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
        <div>
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
            <div className="py-9">
              <h1 className="Text size-8 mb-2">Tooltip</h1>
              <p className="Text size-5 color-gray weight-1">
                Tooltips are visual-only floating elements that display
                information about a trigger element when a user hovers or
                focuses it.
              </p>
            </div>
            <CodeBlock />
            <h2 className="Text size-6 mt-6 mb-3" id="installation">
              <a href="#installation" className="Link">
                Features
              </a>
            </h2>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <li>
                <div className="d-f ai-center g-3">
                  <div
                    style={{
                      backgroundColor: "orchid",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="Text size-3">Keyboard navigation</p>
                </div>
              </li>
              <li>
                <div className="d-f ai-center g-3">
                  <div
                    style={{
                      backgroundColor: "orchid",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="Text size-3">Orientation</p>
                </div>
              </li>
              <li>
                <div className="d-f ai-center g-3">
                  <div
                    style={{
                      backgroundColor: "orchid",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="Text size-3">Reading direction</p>
                </div>
              </li>
              <li>
                <div className="d-f ai-center g-3">
                  <div
                    style={{
                      backgroundColor: "orchid",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="Text size-3">Screenreader announcements</p>
                </div>
              </li>
              <li>
                <div className="d-f ai-center g-3">
                  <div
                    style={{
                      backgroundColor: "orchid",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="Text size-3">Indeterminate state</p>
                </div>
              </li>
              <li>
                <div className="d-f ai-center g-3">
                  <div
                    style={{
                      backgroundColor: "orchid",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="Text size-3">Typeahead</p>
                </div>
              </li>
            </ul>
            <h2 className="Text size-6 mt-6 mb-3" id="installation">
              <a href="#installation" className="Link">
                Installation
              </a>
            </h2>
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
            <ul className="List mb-3">
              <li className="ListItem">
                <p className="Text size-4">
                  We drilled down onto this problem and found out that it
                  touches all products and not just Material UI. We cannot solve
                  this problem in the Core realm.
                </p>
              </li>
              <li className="ListItem">
                <p className="Text size-4">
                  We drilled down onto this problem and found out that it
                  touches all products and not just Material UI. We cannot solve
                  this problem in the Core realm.
                </p>
              </li>
              <ul className="List">
                <li className="ListItem">
                  <p className="Text size-4">
                    We drilled down onto this problem and found out that it
                    touches all products and not just Material UI. We cannot
                    solve this problem in the Core realm.
                  </p>
                </li>
                <li className="ListItem">
                  <p className="Text size-4">
                    We drilled down onto this problem and found out that it
                    touches all products and not just Material UI. We cannot
                    solve this problem in the Core realm.
                  </p>
                </li>
                <ul className="List">
                  <li className="ListItem">
                    <p className="Text size-4">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI. We cannot
                      solve this problem in the Core realm.
                    </p>
                  </li>
                  <li className="ListItem">
                    <p className="Text size-4">
                      We drilled down onto this problem and found out that it
                      touches all products and not just Material UI. We cannot
                      solve this problem in the Core realm.
                    </p>
                  </li>
                </ul>
                <li className="ListItem">
                  <p className="Text size-4">
                    We drilled down onto this problem and found out that it
                    touches all products and not just Material UI. We cannot
                    solve this problem in the Core realm.
                  </p>
                </li>
              </ul>
              <li className="ListItem">
                <p className="Text size-4">
                  We drilled down onto this problem and found out that it
                  touches all products and not just Material UI. We cannot solve
                  this problem in the Core realm.
                </p>
              </li>
            </ul>
            <p className="Text size-4 mb-3">
              If a prototype would help the decision, I would be more than happy
              to do it. I’m sooo eager to stop discussing and start building at
              this point. But even before prototyping, it would be good to have
              directions from the people who will{" "}
              <Link href="/" className="Link">
                make the decision
              </Link>{" "}
              like what information would they need? what should we prototype
              exactly?
            </p>
            <h2 className="Text size-6 mt-6 mb-3" id="overview">
              <a href="#overview" className="Link">
                Overview
              </a>
            </h2>
            <p className="Text size-4 mb-3">
              If a prototype would help the decision, I would be more than happy
              to do it. I’m sooo eager to stop discussing and start building at
              this point. But even before prototyping, it would be good to have
              directions from the people who will{" "}
              <Link href="/" className="Link">
                make the decision
              </Link>{" "}
              like what information would they need? what should we prototype
              exactly?
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
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="Text size-3 color-gray">
                Material UI v5 supports Material Design 2. Adoption of Material
                Design 3 is tentatively planned for Material UI v7. See our
                amazing new{" "}
                <Link href="/" className="Link">
                  announcement blog post
                </Link>{" "}
                for more details. You can follow this{" "}
                <Link href="/" className="Link">
                  GitHub issue
                </Link>{" "}
                for future updates.
              </p>
            </div>

            <h2 className="Text size-6 mt-6 mb-3" id="api">
              <a href="#api" className="Link">
                API Reference
              </a>
            </h2>
            <h3 className="Text size-5 mt-6 mb-3" id="provider">
              <a href="#provider" className="Link">
                Provider
              </a>
            </h3>
            <p className="Text size-4 mb-3">
              Wraps around <code className="Code">&lt;App /&gt;</code> or a
              group of <code className="Code">&lt;Tooltip.Root&gt;</code>{" "}
              components.
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

            <h3 className="Text size-5 mt-6 mb-3" id="root">
              <a href="#root" className="Link">
                Root
              </a>
            </h3>
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
            <div className="d-f ai-center jc-sb g-3 py-9">
              <span className="Text size-3">
                <a href="/" className="Link">
                  Edit this page on Github
                </a>
              </span>
              <div className="d-f ai-center g-2">
                <span className="Text size-3 color-gray">
                  Was this page helpful?
                </span>
                <div className="d-f g-1">
                  <button className="IconButton size-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Icon"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button className="IconButton size-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Icon"
                    >
                      <path
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="d-f ai-center jc-center g-3 pb-9">
              <a
                href="/"
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
                href="/"
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
            {/* <div className="DialogBackdrop"></div>
            <div className="DialogPopup">
              <div className="d-f fd-column g-1">
                <h2 className="Text size-5">Provide Feedback</h2>
                <p className="Text size-3 color-gray">
                  How can we improve the "Material UI vs. Base UI" section?
                </p>
              </div>
              <div className="Callout" style={{ margin: "16px 0 20px 0" }}>
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
                <p
                  className="Text size-3"
                  style={{ color: "hsl(208 100% 45%)" }}
                >
                  If you have encountered a bug or an issue with a component,
                  please{" "}
                  <Link
                    href="#"
                    style={{
                      color: "hsl(208 100% 45%)",
                      textUnderlineOffset: "4px",
                      textDecorationThickness: "1px",
                      textDecorationColor: "hsl(208 100% 45% / 15%)",
                    }}
                  >
                    open an issue
                  </Link>{" "}
                  instead.
                </p>
              </div>
              <textarea
                className="Textarea"
                placeholder="e.g. omg why you don't put more explainings here idioit"
              ></textarea>
              <div className="d-f ai-center jc-end g-4 mt-6">
                <button className="Button">Cancel</button>
                <button className="Button">Submit</button>
              </div>
            </div> */}
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
          // borderLeft: "1px solid var(--gray-outline-1)",
          padding: "12px 24px",
          overflowY: "auto",
        }}
      >
        <div className="d-f ai-center h-7 mb-2">
          <h4 className="Text size-3 weight-2">Contents</h4>
        </div>
        <nav>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Introduction
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Installation
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Anatomy
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Provider
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Accessibility
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Placement
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Offset
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Delay
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Controlled
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Arrow
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Cursor Following
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Anchoring
            </a>
          </div>
          <div className="mb-3">
            <a href="#api" className="Text size-3 Link color-gray">
              Styling
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
