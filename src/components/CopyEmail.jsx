import { useState } from 'react'

const CopyEmail = () => {

  const [copied, setCopied] = useState(false);
  const email = "hello@nanatan.com";

  function copy() {
    navigator.clipboard.writeText(email);
    setCopied(true);
  }

    return (
      <>
        <button className="cta" onClick={copy}>{copied ? "Copied!" : "Copy Email"}</button>
      </>
    )
}

export default CopyEmail