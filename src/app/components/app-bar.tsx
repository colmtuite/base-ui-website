import * as React from "react";
import Link from "next/link";

export default function AppBar() {
  return (
    <header className="AppBar">
      <div className="d-f ai-center jc-sb">
        <div className="d-f ai-center g-3">
          <Link href="/" className="IconButton size-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="Icon"
            >
              <path
                d="M12 5.25V4.6875H11.4375V5.25H12ZM12 13.5V14.0625H12.5625V13.5H12ZM3.75 13.5V12.9375H3.1875V13.5H3.75ZM19.6875 13.5C19.6875 17.7457 16.2457 21.1875 12 21.1875V22.3125C16.867 22.3125 20.8125 18.367 20.8125 13.5H19.6875ZM12 5.8125C16.2457 5.8125 19.6875 9.25431 19.6875 13.5H20.8125C20.8125 8.63299 16.867 4.6875 12 4.6875V5.8125ZM11.4375 5.25V13.5H12.5625V5.25H11.4375ZM12 12.9375H3.75V14.0625H12V12.9375ZM12 21.1875C7.75431 21.1875 4.3125 17.7457 4.3125 13.5H3.1875C3.1875 18.367 7.13299 22.3125 12 22.3125V21.1875Z"
                fill="#151515"
              />
              <path
                d="M12 13.5V14.0625H12.5625V13.5H12ZM3.75 13.5H3.1875V14.0625H3.75V13.5ZM3.75 3.24164L3.86998 2.69208L3.1875 2.54308V3.24164H3.75ZM12 12.9375H3.75V14.0625H12V12.9375ZM3.63002 3.79119C8.09491 4.76599 11.4375 8.7433 11.4375 13.5H12.5625C12.5625 8.20335 8.84063 3.7773 3.86998 2.69208L3.63002 3.79119ZM3.1875 3.24164V13.5H4.3125V3.24164H3.1875Z"
                fill="#151515"
              />
              <path
                d="M9.375 13.5H20.25"
                stroke="#151515"
                stroke-width="1.125"
              />
            </svg>
          </Link>
          <select className="SelectTrigger size-1">
            <option>v0.1.1-alpha</option>
          </select>
        </div>
        <div className="d-f ai-center">
          <button className="SearchButton">
            <div className="d-f ai-center g-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Search</span>
            </div>
            <kbd className="Kbd">⌘K</kbd>
          </button>
          <span role="separator" className="Separator" />
          <a
            href="https://github.com/mui/base-ui"
            className="IconButton size-3"
            target="_blank"
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
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <button className="IconButton size-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="Icon"
            >
              <path
                d="M5 1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5L4 7C4 7.01671 4.00082 7.03323 4.00242 7.04952C2.86009 7.28022 2 8.28967 2 9.5C2 10.7103 2.86009 11.7198 4.00242 11.9505C4.00082 11.9668 4 11.9833 4 12V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V12C5 11.9833 4.99918 11.9668 4.99758 11.9505C6.1399 11.7198 7 10.7103 7 9.5C7 8.28967 6.1399 7.28022 4.99758 7.04952C4.99918 7.03323 5 7.01671 5 7L5 1.5ZM11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V3C10 3.01671 10.0008 3.03323 10.0024 3.04952C8.8601 3.28022 8 4.28967 8 5.5C8 6.71033 8.8601 7.71978 10.0024 7.95048C10.0008 7.96677 10 7.98329 10 8V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V8C11 7.98329 10.9992 7.96677 10.9976 7.95048C12.1399 7.71978 13 6.71033 13 5.5C13 4.28967 12.1399 3.28022 10.9976 3.04952C10.9992 3.03323 11 3.01671 11 3V1.5ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
