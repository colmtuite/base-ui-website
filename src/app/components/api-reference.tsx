import * as React from "react";

export default function APIReference() {
  return (
    <div>
      <h2 className="Text size-6" id="api">
        <a href="#api" className="Link">
          API Reference
        </a>
      </h2>
      <h3 className="Text size-5" id="provider">
        <a href="#provider" className="Link">
          Provider
        </a>
      </h3>
      <p className="Text size-4">
        Wraps your app or a group of Tooltip components to provide shared
        functionality.
      </p>
      <div className="TableRoot">
        <table className="TableTable">
          <thead>
            <tr className="TableRow">
              <th
                className="TableColumnHeader"
                scope="col"
                style={{ width: "50%" }}
              >
                Prop
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
                <code className="Code">closeDelay</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">0</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">delay</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">0</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">timeout</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">400</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="Text size-5" id="root">
        <a href="#root" className="Link">
          Root
        </a>
      </h3>
      <p className="Text size-4">
        A top-level component that wraps the other components.
      </p>
      <div className="TableRoot">
        <table className="TableTable">
          <thead>
            <tr className="TableRow">
              <th
                className="TableColumnHeader"
                scope="col"
                style={{ width: "50%" }}
              >
                Prop
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
                <code className="Code">animated</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">
                <code className="Code">true</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">closeDelay</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">0</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">defaultOpen</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">delay</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">300</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">delayType</code>
              </th>
              <td className="TableCell">
                <code className="Code">string</code>
              </td>
              <td className="TableCell">
                <code className="Code">rest</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">followCursorAxis</code>
              </th>
              <td className="TableCell">
                <code className="Code">string</code>
              </td>
              <td className="TableCell">
                <code className="Code">none</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">hoverable</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">
                <code className="Code">true</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">onOpenChange</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">open</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="Text size-5" id="root">
        <a href="#root" className="Link">
          Trigger
        </a>
      </h3>
      <p className="Text size-4">Renders the trigger element.</p>
      <div className="TableRoot">
        <table className="TableTable">
          <thead>
            <tr className="TableRow">
              <th
                className="TableColumnHeader"
                scope="col"
                style={{ width: "50%" }}
              >
                Prop
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
                <code className="Code">className</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">render</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="Text size-5" id="root">
        <a href="#root" className="Link">
          Positioner
        </a>
      </h3>
      <p className="Text size-4">Renders the positioning element.</p>
      <div className="TableRoot">
        <table className="TableTable">
          <thead>
            <tr className="TableRow">
              <th
                className="TableColumnHeader"
                scope="col"
                style={{ width: "50%" }}
              >
                Prop
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
                <code className="Code">alignment</code>
              </th>
              <td className="TableCell">
                <code className="Code">string</code>
              </td>
              <td className="TableCell">
                <code className="Code">center</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">alignmentOffset</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">0</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">anchor</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">arrowPadding</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">5</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">className</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">collisionBoundary</code>
              </th>
              <td className="TableCell">
                <code className="Code">array</code>
              </td>
              <td className="TableCell">
                <code className="Code">clippingAncestors</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">collisionPadding</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">5</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">container</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">hideWhenDetached</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">
                <code className="Code">false</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">keepMounted</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">
                <code className="Code">false</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">positionStrategy</code>
              </th>
              <td className="TableCell">
                <code className="Code">string</code>
              </td>
              <td className="TableCell">
                <code className="Code">absolute</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">render</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">side</code>
              </th>
              <td className="TableCell">
                <code className="Code">string</code>
              </td>
              <td className="TableCell">
                <code className="Code">top</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">sideOffset</code>
              </th>
              <td className="TableCell">
                <code className="Code">number</code>
              </td>
              <td className="TableCell">
                <code className="Code">0</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">sticky</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">
                <code className="Code">false</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="Text size-5" id="root">
        <a href="#root" className="Link">
          Popup
        </a>
      </h3>
      <p className="Text size-4">Renders the popup element.</p>
      <div className="TableRoot">
        <table className="TableTable">
          <thead>
            <tr className="TableRow">
              <th
                className="TableColumnHeader"
                scope="col"
                style={{ width: "50%" }}
              >
                Prop
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
                <code className="Code">className</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">render</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="Text size-5" id="root">
        <a href="#root" className="Link">
          Arrow
        </a>
      </h3>
      <p className="Text size-4">Renders the arrow element.</p>
      <div className="TableRoot">
        <table className="TableTable">
          <thead>
            <tr className="TableRow">
              <th
                className="TableColumnHeader"
                scope="col"
                style={{ width: "50%" }}
              >
                Prop
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
                <code className="Code">className</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">hideWhenUncentered</code>
              </th>
              <td className="TableCell">
                <code className="Code">boolean</code>
              </td>
              <td className="TableCell">
                <code className="Code">false</code>
              </td>
            </tr>
            <tr className="TableRow">
              <th className="TableRowHeader" scope="row">
                <code className="Code">render</code>
              </th>
              <td className="TableCell">
                <code className="Code">function</code>
              </td>
              <td className="TableCell">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
