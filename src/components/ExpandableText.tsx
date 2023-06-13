import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <div>{children}</div>;
  } else {
    const text = isExpanded ? children : children.substring(0, maxChars);
    return (
      <div>
        {text}
        <span>...</span>
        <Button
          size="small"
          variant="text"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "less" : "more "}
        </Button>
      </div>
    );
  }
};

export default ExpandableText;
