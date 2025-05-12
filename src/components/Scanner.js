import React from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = () => {
  const handleScan = (data) => {
    if (data) {
      console.log("Scanned QR:", data);
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error:", err);
  };

  return (
    <div>
      <h2>Scan a QR Code</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default QRScanner;
