import React, { useCallback, useMemo, useState } from "react";
import cn from "classnames";
import { useTodoContext } from "../../context/todoContext";
/* import styles from "./ItemStatusFilter.module.scss"; */

enum ActiveButtonEnum {
  All = "All",
  Active = "Active",
  Done = "Done",
  Important = "Important",
}

type ActiveButtonType = keyof typeof ActiveButtonEnum;

type ButtonType = {
  activeButtonType: ActiveButtonType;
  title: string;
};

const ItemStatusFilter: React.FC = () => {
  const [activeButtonType, setActiveButtonType] = useState<ActiveButtonType>(
    ActiveButtonEnum.All
  );

  const { setFilterHandler } = useTodoContext();

  const setActiveButtonHandler = useCallback(
    (e: ActiveButtonType) => {
      setActiveButtonType(e);
      switch (e) {
        case ActiveButtonEnum.Done:
          setFilterHandler("done", true);
          break;
        case "Active":
          setFilterHandler("done", false);
          break;
        default:
          setFilterHandler("done", null);
      }

      setFilterHandler("important", e === ActiveButtonEnum.Important || null);
    },
    [setFilterHandler]
  );

  const btns: ButtonType[] = useMemo(
    () => [
      {
        title: ActiveButtonEnum.All,
        activeButtonType: ActiveButtonEnum.All,
      },
      {
        title: ActiveButtonEnum.Active,
        activeButtonType: ActiveButtonEnum.Active,
      },
      {
        title: ActiveButtonEnum.Done,
        activeButtonType: ActiveButtonEnum.Done,
      },
      {
        title: ActiveButtonEnum.Important,
        activeButtonType: ActiveButtonEnum.Important,
      },
    ],
    []
  );

  return (
    <div className="btn-group">
      {btns.map((b) => (
        <button
          key={b.activeButtonType}
          type="button"
          className={cn(
            "btn",
            activeButtonType === b.activeButtonType
              ? "btn-info"
              : "btn-outline-secondary"
          )}
          onClick={() => setActiveButtonHandler(b.activeButtonType)}
        >
          {b.title}
        </button>
      ))}
    </div>
  );
};

export default ItemStatusFilter;
