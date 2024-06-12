import Link from "next/link";
import AppBar from "./components/app-bar";

export default function Home() {
  return (
    <div>
      <AppBar />
      {/* <div style={{ width: 240, borderRight: "1px solid gainsboro" }}>
        fewfew
      </div> */}
      <main>
        <div style={{ background: "white" }}>
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
            <div
              style={{
                border: "1px solid gainsboro",
              }}
            >
              <div
                style={{
                  height: 150,
                  borderBottom: "1px solid gainsboro",
                }}
              ></div>
              <div
                style={{
                  padding: 4,
                  borderBottom: "1px solid gainsboro",
                }}
              >
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
                    js
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
                    ts
                  </button>
                </div>
              </div>
              <div
                style={{
                  height: 150,
                }}
              ></div>
            </div>
            <h2 className="Text size-6 mt-6 mb-3">Installation</h2>
            <p className="Text size-4 mb-3">
              A valid outcome of this proposal is just saying that after going
              back and forth many times, we think this decision is higher-level,
              presenting the information that has been shared here.
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
      {/* <div style={{ width: 240, borderRight: "1px solid gainsboro" }}>
        fewfew
      </div> */}
    </div>
  );
}
