import { cloneDeep } from "lodash";
import { useCallback, useMemo, useState } from "react";

const ititStateFilter = {};

export const useFilter = (list, settings) => {
  const [filterState, setFilterState] = useState(ititStateFilter);

  const filteredList = useMemo(
    () =>
      cloneDeep(list).filter((item) =>
        Object.entries(filterState).reduce(
          (res, [prop, { value, type, from, to }]) => {
            switch (type) {
              case "daterange":
                return res && item[prop] >= from && item[prop] <= to;
              case "date":
                return res && item[prop] === value;
              case "checkbox":
                return res && item[prop] === value;
              default:
                return (
                  res &&
                  !!String(item[prop]).match(new RegExp(`^${value}`, "i"))
                );
            }
          },
          true
        )
      ),
    [list, filterState]
  );

  const filterPanel = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(settings).map(([field, { filter = false }]) => [
          field,
          filter,
        ])
      ),
    [settings]
  );

  const isFilter = useMemo(
    () =>
      Boolean(Object.entries(settings).find(([, { filter } = {}]) => filter)),
    [settings]
  );

  const setFilterHandler = useCallback(
    (field, value, additionalProperties) => {
      if (value || value === 0 || value === "0" || value === false) {
        const { detail, type } = filterPanel[field];

        setFilterState((prev) => ({
          ...prev,
          [field]: {
            type,
            ...additionalProperties,
            value,
            detail,
          },
        }));
      } else {
        setFilterState(({ [field]: deleteFilterName, ...prev }) => ({
          ...prev,
        }));
      }
    },
    [filterPanel]
  );

  const clearFilterHandler = useCallback(
    () => setFilterState(ititStateFilter),
    []
  );

  return {
    filteredList,
    filterState,
    filterPanel,
    isFilter,
    setFilterHandler,
    clearFilterHandler,
  };
};
