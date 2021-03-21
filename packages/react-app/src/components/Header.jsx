import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="infinifty"
        subTitle="Create for Good"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
