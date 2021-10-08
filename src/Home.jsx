import React from "react";
import "./index.css";
import { Allcomponents } from "./Allcomponents";
import { Services } from "./Allcomponents";
import Features_Home from "./Features_Home";
export default function Home() {
  return (
    <>
      {/* Home Section */}
      <div>
        <Allcomponents
          main_heading="BruceTheGoose"
          main_text="MINTING STARTS SATURDAY 11TH 2PM UTC"
          btn_txt="Mint Now!"
          card_txt="Cover_Areas"
        />
      </div>

      {/* RoadMap Section */}
      <div>
        <Services
          main_heading="ROADMAP"
          main_para="At 25%, we will allocate 10% of the revenue of Bruce The Goose NFT to the community wallet. This will be used for further promotions or new marketing strategies and more."
        />
      </div>

      {/* Features Section */}
      <div>
        <Features_Home />
      </div>
    </>
  );
}
