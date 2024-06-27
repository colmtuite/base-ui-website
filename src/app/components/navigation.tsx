import * as React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
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
          <span className="Badge ml-1">Beta</span>
        </Link>
        <Link href="/" className="LinkBlock">
          HoverCard
        </Link>
        <Link href="/" className="LinkBlock">
          Menu
        </Link>
        <Link href="/" className="LinkBlock">
          NumberField
          <span className="Badge ml-1">Beta</span>
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
          <span className="Badge ml-2">Beta</span>
        </Link>
        <Link href="/" className="LinkBlock">
          Tooltip
        </Link>
      </div>
    </div>
  );
}
