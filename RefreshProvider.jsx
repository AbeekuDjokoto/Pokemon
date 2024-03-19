import PropTypes from "prop-types";

import { useRefreshToken } from "@/features/auth";

function RefreshProvider(props) {
  useRefreshToken();
  return <>{props.children}</>;
}

RefreshProvider.propTypes = {
  children: PropTypes.node,
};

export { RefreshProvider };
