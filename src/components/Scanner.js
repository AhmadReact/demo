import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = () => {
  const [data, setData] = useState("No result");

  const handleScan = (result, error) => {
    if (!!result) {
      setData(result?.text);
    }
    if (!!error) {
      // Optional: log error or ignore
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Scan a QR Code</h2>
      <QrReader
        constraints={{ facingMode: { exact: "environment" } }} // 🚀 This tells the browser to use the back camera
        onResult={handleScan}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QRScanner;
