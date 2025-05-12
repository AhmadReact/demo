import React from "react";
import ProductDescriptionViewer from "./Productview";

const App = () => {
  const rawContent = {
    blocks: [
      {
        key: "9oeo3",
        text: "The Airpods Pro in India. Zone in, Zone out, with 12.4mm Deep Bass Driver, Dynamic Bass Boost, 50dB Smart Active Noise Cancellation. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [
          { offset: 0, length: 132, style: "bgcolor-rgb(255,255,255)" },
          { offset: 0, length: 24, style: "BOLD" },
          { offset: 0, length: 24, style: "fontsize-18" },
          { offset: 0, length: 24, style: "color-rgb(97,189,109)" },
          { offset: 0, length: 25, style: "fontfamily-Times New Roman" },
          { offset: 24, length: 108, style: "color-rgb(71,71,71)" },
          { offset: 24, length: 108, style: "fontsize-14" },
          { offset: 25, length: 107, style: "fontfamily-Arial, sans-serif" },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  };
  return (
    <div>
      <ProductDescriptionViewer rawContent={rawContent} />
    </div>
  );
};

export default App;
