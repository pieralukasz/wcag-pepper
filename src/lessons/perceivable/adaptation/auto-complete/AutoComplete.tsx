import React from "react";

import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Link,
  FormHelperText,
  TextField,
} from "@mui/material";
// import { Accessibility } from "@mui/icons-material";

export const AutoComplete: React.VFC = () => {
  return (
    <>
      <Link
        sx={{ marginTop: 4 }}
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
        aria-label="Zobacz dostępne wszystkie atrybuty autocomplete"
      >
        Autocomplete attribute
      </Link>
      <CenterExample title="Auto Complete">
        <form onSubmit={() => false}>
          <TextField
            fullWidth
            sx={{ marginTop: 3 }}
            label="First name"
            autoComplete="given-name"
          />
          <TextField
            fullWidth
            sx={{ marginTop: 3 }}
            label="Family name"
            autoComplete="family-name"
          />
          <Button
            fullWidth
            sx={{ marginTop: 3 }}
            variant="contained"
            type="submit"
          >
            Save
          </Button>
          {/*<FormControl {...other}>*/}
          {/*  {label && <InputLabel {...InputLabelProps}>{label}</InputLabel>}*/}

          {/*  {select ? (*/}
          {/*    <Select {...SelectProps}>{children}</Select>*/}
          {/*  ) : (*/}
          {/*    <Input {...InputProps} />*/}
          {/*  )}*/}

          {/*  {helperText && (*/}
          {/*    <FormHelperText {...FormHelperTextProps}>*/}
          {/*      {helperText}*/}
          {/*    </FormHelperText>*/}
          {/*  )}*/}
          {/*</FormControl>*/}
        </form>
      </CenterExample>
    </>
  );
};
