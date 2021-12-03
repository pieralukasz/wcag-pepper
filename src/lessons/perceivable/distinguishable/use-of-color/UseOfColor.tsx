import React from "react";

import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import { Button, Box, TextField } from "@mui/material";

export const UseOfColor: React.VFC = () => {
  return (
    <>
      <CenterExample title="Use of Color">
        <Box component="form" onSubmit={() => false}>
          <TextField
            error
            required
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
            type="button"
            onClick={() => console.log("Saving values..")}
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
        </Box>
      </CenterExample>
    </>
  );
};
