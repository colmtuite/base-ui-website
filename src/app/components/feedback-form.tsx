import * as React from "react";
import Link from "next/link";

export default function FeedbackForm() {
  return (
    <div>
      <div className="DialogBackdrop"></div>
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
          <p className="Text size-3" style={{ color: "hsl(208 100% 45%)" }}>
            If you have encountered a bug or an issue with a component, please{" "}
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
      </div>
    </div>
  );
}
