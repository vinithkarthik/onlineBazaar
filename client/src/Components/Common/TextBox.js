import { Grid, TextField } from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

/**
 * TextBox
 * A reusable component for displaying text field
 * 
 * Props
 * @param {string} id - id for text field
 * @param {string} label - label for text field
 * @param {string} type - type for text field
 * @param {Boolean} required - to mark the field as Mandatory 
 * @param {string} value - value of text field
 * @param {Boolean} error - to mark the field has some error
 * @param {string} helperText - text to display during validation
 * @param {Function} onChange - callback function called on changing the text Value
 * @param {Function} onBlur - callback function called on blur of the text field
 * 
 * Examples
 * <TextBox paginationLength={4} currentPage={1} onChange={onChange} onBlur={onBlur} />
 */
const TextBox = ({ id, label, type = "text", onChange, onBlur, required = false, value, helperText, error = false }) => {
  let errorMsg = ''
  if (helperText) {
    errorMsg = (
      <Grid container>
        <Grid item>
          <WarningAmberIcon fontSize="small"></WarningAmberIcon>
        </Grid>
        <Grid item>
          <span>{" " + helperText}</span>
        </Grid>
      </Grid>
    );
  }
  return (
    <TextField
      id={id}
      label={label}
      variant="standard"
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      sx={{
        width: '100%'
      }}
      color='black'
      required={required}
      value={value}
      helperText={errorMsg}
      error={error}
    />
  );
}

export default TextBox;