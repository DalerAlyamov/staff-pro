import React from "react";
import classNames from "classnames";
import styles from "@styles/modules";
import Icon from "@icons";
import { RippleEffect } from "daler-react-ripple-effect";
import Component from "@components";
import UI from "@ui";

interface IProps {
  id: number;
  value: string;
  number: number;
  onChangeNumber: (value: number) => void;
  onChangeCurrency: (value: "TJS" | "RUB" | "USD" | "EUR") => void;
}

const SelectCurrency: React.FC<IProps> = (props): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");

  const className = classNames(
    styles.selectCurrency.root,
    open && styles.selectCurrency.__open
  );

  const handleCurrencyClick = React.useCallback(
    (newValue: "TJS" | "RUB" | "USD" | "EUR") => {
      props.onChangeCurrency(newValue);
    },
    [props]
  );

  const handleWindowMouseDown = React.useCallback(
    (e: any) => {
      if (!e.target.closest("#select-" + props.id)) setOpen(false);
    },
    [props.id]
  );

  React.useEffect(() => {
    window.addEventListener("mousedown", handleWindowMouseDown);
    return () => window.removeEventListener("mousedown", handleWindowMouseDown);
  }, [handleWindowMouseDown]);

  return (
    <div className={className} id={"select-" + props.id}>
      <div className={styles.selectCurrency.label}>
        <input
          type="text"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (isNaN(Number(e.target.value.replace(",", "")))) return;
            if (e.target.value.replace(".", "")[0] === ",") return;
            setSearchValue(e.target.value.replace(".", ""));
          }}
          className={styles.selectCurrency.input}
          onFocus={() => setOpen(false)}
        />
        <button onClick={() => setOpen((prev) => !prev)}>
          <RippleEffect
            color="#D2E0FB"
            className={styles.selectCurrency.openButton}
          >
            <div className={styles.selectCurrency.currency}>{props.value}</div>
            <div className={styles.selectCurrency.arrow}>
              <Icon.KeyboardArrowDown size={24} />
            </div>
          </RippleEffect>
        </button>
      </div>
      <Component.If condition={open}>
        <div className={styles.selectCurrency.menu}>
          <div className={styles.selectCurrency.list}>
            <button
              className={classNames(
                styles.selectCurrency.item,
                props.value.includes("EUR") && styles.selectCurrency.__active
              )}
              onClick={() => handleCurrencyClick("EUR")}
            >
              <div className={styles.selectCurrency.itemName}>
                <div className={styles.selectCurrency.itemTitle}>
                  Евро
                </div>
                <div className={styles.selectCurrency.itemSubTitle}>
                  EUR
                </div>
              </div>
              <UI.Radio checked={props.value.includes("EUR")} />
            </button>
            <button
              className={classNames(
                styles.selectCurrency.item,
                props.value.includes("RUB") && styles.selectCurrency.__active
              )}
              onClick={() => handleCurrencyClick("RUB")}
            >
              <div className={styles.selectCurrency.itemName}>
                <div className={styles.selectCurrency.itemTitle}>
                  Рубль
                </div>
                <div className={styles.selectCurrency.itemSubTitle}>
                  RUB
                </div>
              </div>
              <UI.Radio checked={props.value.includes("RUB")} />
            </button>
            <button
              className={classNames(
                styles.selectCurrency.item,
                props.value.includes("TJS") && styles.selectCurrency.__active
              )}
              onClick={() => handleCurrencyClick("TJS")}
            >
              <div className={styles.selectCurrency.itemName}>
                <div className={styles.selectCurrency.itemTitle}>
                  Сомони
                </div>
                <div className={styles.selectCurrency.itemSubTitle}>
                  TJS
                </div>
              </div>
              <UI.Radio checked={props.value.includes("TJS")} />
            </button>
            <button
              className={classNames(
                styles.selectCurrency.item,
                props.value.includes("USD") && styles.selectCurrency.__active
              )}
              onClick={() => handleCurrencyClick("USD")}
            >
              <div className={styles.selectCurrency.itemName}>
                <div className={styles.selectCurrency.itemTitle}>
                  Доллар США
                </div>
                <div className={styles.selectCurrency.itemSubTitle}>
                  USD
                </div>
              </div>
              <UI.Radio checked={props.value.includes("USD")} />
            </button>
          </div>
        </div>
      </Component.If>
    </div>
  );
};

export default SelectCurrency;
