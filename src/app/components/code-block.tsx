import * as React from "react";

export default function CodeBlock() {
  return (
    <div
      style={{
        border: "1px solid gainsboro",
        borderRadius: 12,
      }}
    >
      <div
        style={{
          height: 150,
          borderBottom: "1px solid gainsboro",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "black",
            display: "inline-flex",
            alignItems: "center",
            height: "var(--space-7)",
            fontWeight: "var(--fw-2)",
            color: "white",
            fontFamily: "var(--ff-sans)",
            borderRadius: 6,
            fontSize: "var(--fs-3)",
            paddingLeft: "var(--space-3)",
            paddingRight: "var(--space-3)",
            userSelect: "none",
            boxSizing: "border-box",
            lineHeight: "1",
          }}
        >
          Tooltip
        </div>
      </div>
      <div
        style={{
          padding: 4,
          borderBottom: "1px solid gainsboro",
        }}
      >
        <div className="d-f jc-sb">
          <div className="d-f ai-center g-2">
            <select className="SelectTrigger size-2">
              <option>Plain CSS</option>
            </select>
            <span role="separator" className="Separator" />
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
          <div className="d-f ai-center g-1">
            <button className="IconButton size-2" aria-label="copy code">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Icon"
              >
                <path
                  d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              className="IconButton size-2"
              aria-label="edit in codesandbox"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Icon"
              >
                <path
                  d="M7.71144 0.796902C7.57741 0.734357 7.42257 0.734357 7.28855 0.796902L1.28855 3.5969C1.11251 3.67905 0.999993 3.85573 0.999993 4.04999V10.95C0.999993 11.1443 1.11251 11.3209 1.28855 11.4031L7.28855 14.2031C7.42257 14.2656 7.57741 14.2656 7.71144 14.2031L13.7114 11.4031C13.8875 11.3209 14 11.1443 14 10.95V4.04999C14 3.85573 13.8875 3.67905 13.7114 3.5969L7.71144 0.796902ZM7.49999 3.15674L5.98039 2.51091L7.49999 1.80176L9.01959 2.51091L7.49999 3.15674ZM7.69556 4.16018L10.2382 3.07958L12.2719 4.02865L7.49999 6.05671L2.72808 4.02865L4.76181 3.07958L7.30442 4.16018C7.42939 4.2133 7.57059 4.2133 7.69556 4.16018ZM7.99999 6.93078L13 4.80578V7.92966L11.0821 8.8119C10.7273 8.97509 10.5 9.32988 10.5 9.72039V11.7982L7.99999 12.9649V6.93078ZM11.5 11.3316L13 10.6316V9.03039L11.5 9.72039V11.3316ZM6.99999 6.93078V12.9649L4.50231 11.7993V9.72036C4.50231 9.32985 4.27499 8.97506 3.92022 8.81187L1.99999 7.92856V4.80578L6.99999 6.93078ZM1.99999 10.6316L3.50231 11.3326L3.50231 9.72036L1.99999 9.02929V10.6316Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="IconButton size-2" aria-label="reset code">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Icon"
              >
                <path
                  d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="IconButton size-2" aria-label="more options">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Icon"
              >
                <path
                  d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 150,
        }}
      ></div>
    </div>
  );
}
