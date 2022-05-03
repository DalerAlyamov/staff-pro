import React from "react";
import classNames from "classnames";
import styles from "@styles/modules";
import Icon from "@icons";
import { RippleEffect } from "daler-react-ripple-effect";
import Component from "@components";
import UI from "@ui";

interface IProps {
  id: number;
  legend: string;
  list: string[];
  value: string;
  onChange: (value: string) => void;
  searchPlaceholder?: string;
}

const Select: React.FC<IProps> = (props): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [list, setList] = React.useState<string[]>(props.list);
  const [searchValue, setSearchValue] = React.useState<string>("");

  const className = classNames(
    styles.select.root,
    open && styles.select.__open
  );

  const handleItemClick = React.useCallback((newValue: string) => {
    props.onChange(newValue);
  }, [props]);

  const handleWindowMouseDown = React.useCallback((e: any) => {
    if (!e.target.closest('#select-' + props.id))
      setOpen(false);
  }, [props.id]); 

  React.useEffect(() => {
    setList(
      props.list.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, props.list]);

  React.useEffect(() => {
    window.addEventListener('mousedown', handleWindowMouseDown);
    return () => window.removeEventListener('mousedown', handleWindowMouseDown);
  }, [handleWindowMouseDown])

  return (
    <div className={className} id={"select-" + props.id}>
      <button
        className={styles.select.labelWrap}
        onClick={() => setOpen((prev) => !prev)}
      >
        <RippleEffect color="#D2E0FB" className={styles.select.label}>
          <div className={styles.select.title}>
            <div className={styles.select.legend}>{props.legend}</div>
            <div className={styles.select.value}>{props.value}</div>
          </div>
          <div className={styles.select.arrow}>
            <Icon.KeyboardArrowDown size={24} />
          </div>
        </RippleEffect>
      </button>
      <Component.If condition={open}>
        <div className={styles.select.menu}>
          <div className={styles.select.searchWrap}>
            <div className={styles.select.searchIcon}>
              <Icon.Search size={24} />
            </div>
            <input
              className={styles.select.searchInput}
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              placeholder={props.searchPlaceholder}
            />
          </div>
          <div className={styles.select.list}>
            {list.map((item) => (
              <button
                key={item}
                className={classNames(
                  styles.select.item,
                  props.value.includes(item) && styles.select.__active
                )}
                onClick={() => handleItemClick(item)}
              >
                <UI.Radio checked={props.value.includes(item)} />
                {item}
              </button>
            ))}
          </div>
        </div>
      </Component.If>
    </div>
  );
};

export default Select;
