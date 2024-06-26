/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Certificate } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function NewForm1(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    documentUnsigned: undefined,
    documentSigned: undefined,
    isSigned: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [documentUnsigned, setDocumentUnsigned] = React.useState(
    initialValues.documentUnsigned,
  );
  const [documentSigned, setDocumentSigned] = React.useState(
    initialValues.documentSigned,
  );
  const [isSigned, setIsSigned] = React.useState(initialValues.isSigned);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDocumentUnsigned(initialValues.documentUnsigned);
    setDocumentSigned(initialValues.documentSigned);
    setIsSigned(initialValues.isSigned);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    documentUnsigned: [{ type: "Required" }],
    documentSigned: [],
    isSigned: [{ type: "Required" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          documentUnsigned,
          documentSigned,
          isSigned,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item),
                ),
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName]),
            );
            return promises;
          }, []),
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Certificate(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "NewForm1")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              documentUnsigned,
              documentSigned,
              isSigned,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Document unsigned"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              documentUnsigned: value,
              documentSigned,
              isSigned,
            };
            const result = onChange(modelFields);
            value = result?.documentUnsigned ?? value;
          }
          if (errors.documentUnsigned?.hasError) {
            runValidationTasks("documentUnsigned", value);
          }
          setDocumentUnsigned(value);
        }}
        onBlur={() => runValidationTasks("documentUnsigned", documentUnsigned)}
        errorMessage={errors.documentUnsigned?.errorMessage}
        hasError={errors.documentUnsigned?.hasError}
        {...getOverrideProps(overrides, "documentUnsigned")}
      ></TextField>
      <TextField
        label="Document signed"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              documentUnsigned,
              documentSigned: value,
              isSigned,
            };
            const result = onChange(modelFields);
            value = result?.documentSigned ?? value;
          }
          if (errors.documentSigned?.hasError) {
            runValidationTasks("documentSigned", value);
          }
          setDocumentSigned(value);
        }}
        onBlur={() => runValidationTasks("documentSigned", documentSigned)}
        errorMessage={errors.documentSigned?.errorMessage}
        hasError={errors.documentSigned?.hasError}
        {...getOverrideProps(overrides, "documentSigned")}
      ></TextField>
      <SwitchField
        label="Is signed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isSigned}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              documentUnsigned,
              documentSigned,
              isSigned: value,
            };
            const result = onChange(modelFields);
            value = result?.isSigned ?? value;
          }
          if (errors.isSigned?.hasError) {
            runValidationTasks("isSigned", value);
          }
          setIsSigned(value);
        }}
        onBlur={() => runValidationTasks("isSigned", isSigned)}
        errorMessage={errors.isSigned?.errorMessage}
        hasError={errors.isSigned?.hasError}
        {...getOverrideProps(overrides, "isSigned")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
