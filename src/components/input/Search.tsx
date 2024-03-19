import React, {
  ChangeEventHandler,
  forwardRef,
  MouseEventHandler,
  Ref,
} from "react";

import classes from "./Search.module.scss";
import { SearchIcon } from "../../assets/Icons/searchIcon";

export interface Props {
  placeholder: string;
  height: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  errorMessage?: string;
  message?: string;
  color?: string;
  onSearchClick: MouseEventHandler<HTMLDivElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Search = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classes.wrapper}
      style={{ background: props.color ? props.color : "#DE527F" }}
    >
      <div className={classes.outer}>
        {props.prefix}
        <input
          ref={ref}
          className={classes.input}
          data-testid={"search-input"}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <div className={classes.searchBtn} onClick={props.onSearchClick}>
          <SearchIcon />
        </div>
        {props.errorMessage}
      </div>
      <h1>{props.message}</h1>
    </form>
  );
});

Search.displayName = "Search";

export { Search };
