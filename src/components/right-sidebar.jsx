import InputSearch from "./input-search";
import TrendsForYou from "./trends-for-you";
import WhoToFollow from "./who-to-follow";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="input-search-container">
        <InputSearch style={"input-search"} placeholder={"Search Twitter"} />
      </div>
      <div className="trends-content">
        <TrendsForYou />
      </div>
      <div className="trends-content">
        <WhoToFollow />
      </div>
      <div>
        <p className="gray-text copyright-text">
          Terms of Services Privacy Police Cookie Policy <br></br> Imprint Ads info More...
          © 2021 Twitter, Inc.
        </p>
      </div>
    </div>
  );
};