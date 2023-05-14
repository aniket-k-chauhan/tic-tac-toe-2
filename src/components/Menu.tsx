import { useState } from "react";
import classNames from "classnames";
import "./Menu.css";

type Props = {
  onAction(action: "reset" | "new-round"): void;
};

export default function Menu({ onAction }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="menu">
      <button className="menu-btn" onClick={() => setShowMenu((prev) => !prev)}>
        Action
        <i
          className={classNames(
            "fa-solid",
            showMenu ? "fa-chevron-up" : "fa-chevron-down"
          )}
        ></i>
      </button>
      {showMenu && (
        <div className="items border">
          <button onClick={() => onAction("reset")}>Reset</button>
          <button onClick={() => onAction("new-round")}>New Round</button>
        </div>
      )}
    </div>
  );
}
