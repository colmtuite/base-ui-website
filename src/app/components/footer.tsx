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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9.25"
                  fill="#F5F5F5"
                  stroke="var(--gray-text-2)"
                  stroke-width="1.5"
                />
                <path
                  d="M13.5 9C14.5 7.5 16.5 7.5 17.5 9"
                  stroke="#11924C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M6.5 9.00001C7.5 7.50001 9.5 7.44173 10.5 9.00003"
                  stroke="#11924C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7.5 13.5C10 17 14 17 16.5 13.5"
                  stroke="#11924C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button className="IconButton size-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9.25"
                  fill="#F5F5F5"
                  stroke="var(--gray-text-2)"
                  stroke-width="1.5"
                />
                <path
                  d="M13.5 9.00001C14.625 9.00001 15.75 9 16.5 9"
                  stroke="#F5455A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7 9.00003C8.5 9.00005 9 9 10 9.00002"
                  stroke="#F5455A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9 16C11 13.5 13 13.5 15 16"
                  stroke="#F5455A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
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
