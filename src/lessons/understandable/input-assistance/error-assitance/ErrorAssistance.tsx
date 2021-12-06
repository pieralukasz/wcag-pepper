import React, { FormEventHandler, useState } from "react";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import { Button, TextField, Typography } from "@mui/material";
import { VisuallyHidden } from "../../../../components/VisuallyHidden/VisuallyHidden";
import { useForm } from "react-hook-form";

export const ErrorAssistance: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    alert("You have submitted the form.");
  };

  return (
    <CenterExample title="Error assistance">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          sx={{ marginTop: 3 }}
          label="First name"
          autoComplete="given-name"
          inputProps={{
            "aria-invalid": errors.firstName ? "true" : "false",
          }}
          {...register("firstName", { required: true })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <Typography
            sx={{ color: "red", width: 10 }}
            component="span"
            id="err_1"
            role="alertdialog"
            aria-label="Incorrect First Menu value. This value is required."
          >
            Error: Incorrect data
            <VisuallyHidden>
              To submit form, you have to fill this field with your first name.
            </VisuallyHidden>
          </Typography>
        )}
        <TextField
          fullWidth
          sx={{ marginTop: 3 }}
          label="Family name"
          name="familyName"
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
      </form>
    </CenterExample>
  );
};
