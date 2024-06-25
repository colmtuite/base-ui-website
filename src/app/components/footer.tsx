import * as React from "react";

export default function Footer() {
  return (
    <div>
      <div className="d-f ai-center jc-sb g-3 py-9">
        <span className="Text size-3">
          <a href="/" className="Link">
            Edit this page on Github
          </a>
        </span>
        <div className="d-f ai-center g-2">
          <span className="Text size-3 color-gray">Was this page helpful?</span>
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
    </div>
  );
}
