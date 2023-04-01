import { IconButton } from "@mui/material";

/**
 * Iconbutton
 * A reusable component for displaying icons as buttons
 * 
 * Props
 * @param {Object} children - children component
 * @param {string} className - custom classname
 * @param {Function} onClick - callback function called on clicking the icon
 * 
 * Examples
 * <Iconbutton children={<Icon></Icon>} className={"cart-close"} onClick={onClick} />
 */
const Iconbutton = ({ onClick, className, children }) => {
  return (
    <IconButton
      onClick={onClick}
      className={className}
    >
      {children}
    </IconButton>
  );
}

export default Iconbutton;