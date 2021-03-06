import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorBox(props) {
  const { background, name } = props;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    props.raiseToast(`Copied ${background}`);
  };

  return (
    <div style={{ background }} className="ColorBox">
      <div className="Copy-container">
        <div>
          {/* <Toaster /> */}
          <CopyToClipboard text={background} onCopy={handleCopy}>
            <button className="Copy-button">Copy</button>
          </CopyToClipboard>
        </div>
        <div className="Box-content">
          <p>{name}</p>
          <p>{background}</p>
        </div>
      </div>
    </div>
  );
}

export default ColorBox;
