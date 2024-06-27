import * as React from "react";
import Link from "next/link";
import * as Dialog from "@base_ui/react/Dialog";

export default function FeedbackForm() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="IconButton size-2 color-accent">
        <svg
          width="16"
          height="16"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="Icon"
        >
          <path
            d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Dialog.Trigger>
      <Dialog.Backdrop className="DialogBackdrop" />
      <Dialog.Popup className="DialogPopup">
        <div className="d-f fd-column g-6">
          <div className="d-f fd-column g-1">
            <Dialog.Title className="Text size-6">Give Feedback</Dialog.Title>
            <Dialog.Description className="Text size-3 color-gray">
              How can we improve the "Material UI vs. Base UI" section?
            </Dialog.Description>
          </div>
          <div className="Callout" style={{ marginTop: "-4px" }}>
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
                fill="hsl(206 100% 48%)"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p className="Text size-3 color-gray">
              If you have encountered a bug or an issue with a component, please{" "}
              <Link href="#" className="Link">
                open an issue
              </Link>{" "}
              instead.
            </p>
          </div>
          <div className="d-f fd-column g-2">
            <label htmlFor="feedback" className="Text size-3 weight-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              className="Textarea"
              placeholder="e.g. omg why you don't put more explainings here idioit"
            ></textarea>
          </div>
          <div className="d-f jc-end g-4">
            <Dialog.Close className="Button size-2">Cancel</Dialog.Close>
            <button className="Button size-2 color-accent">Submit</button>
          </div>
        </div>
      </Dialog.Popup>
    </Dialog.Root>
  );
}
