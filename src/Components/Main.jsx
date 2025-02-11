import PropTypes from "prop-types";

export default function Main({ children }) {
  return <main className="font-karla">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
