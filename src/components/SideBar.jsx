import wikipedia from "../assets/wikipedia.png";
import icj from "../assets/icj.svg";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div
      class="side-bar"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 0",
      }}
    >
      <Link to="/">
        <div style={{ width: "50px", cursor: "pointer" }}>
          <hr
            style={{
              backgroundColor: "black",
              height: "5px",
              border: "0",
              opacity: "100",
            }}
          />
          <hr
            style={{
              backgroundColor: "red",
              height: "5px",
              border: "0",
              opacity: "100",
              width: "70%",
            }}
          />
          <hr
            style={{
              backgroundColor: "green",
              height: "5px",
              border: "0",
              opacity: "100",
              width: "85%",
            }}
          />
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a
          href="https://en.wikipedia.org/wiki/South_Africa_v._Israel_(Genocide_Convention)"
          target="_blank"
        >
          <img src={wikipedia} width="100%" />
        </a>
        <a href="https://www.icj-cij.org/node/203454" target="_blank">
          <img src={icj} width="100%" />
        </a>
      </div>
    </div>
  );
}
