/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Notification } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function Notification(props) {
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
    title: undefined,
    description: undefined,
    timestamp: undefined,
    type: undefined,
    price: undefined,
    time12h: undefined,
    date: undefined,
    position: undefined,
    isManual: false,
    pair: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description,
  );
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [type, setType] = React.useState(initialValues.type);
  const [price, setPrice] = React.useState(initialValues.price);
  const [time12h, setTime12h] = React.useState(initialValues.time12h);
  const [date, setDate] = React.useState(initialValues.date);
  const [position, setPosition] = React.useState(initialValues.position);
  const [isManual, setIsManual] = React.useState(initialValues.isManual);
  const [pair, setPair] = React.useState(initialValues.pair);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setTimestamp(initialValues.timestamp);
    setType(initialValues.type);
    setPrice(initialValues.price);
    setTime12h(initialValues.time12h);
    setDate(initialValues.date);
    setPosition(initialValues.position);
    setIsManual(initialValues.isManual);
    setPair(initialValues.pair);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    description: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
    type: [{ type: "Required" }],
    price: [{ type: "Required" }],
    time12h: [{ type: "Required" }],
    date: [{ type: "Required" }],
    position: [{ type: "Required" }],
    isManual: [{ type: "Required" }],
    pair: [{ type: "Required" }],
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
          title,
          description,
          timestamp,
          type,
          price,
          time12h,
          date,
          position,
          isManual,
          pair,
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
          await DataStore.save(new Notification(modelFields));
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
      {...getOverrideProps(overrides, "Notification")}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              timestamp,
              type,
              price,
              time12h,
              date,
              position,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              timestamp,
              type,
              price,
              time12h,
              date,
              position,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp: value,
              type,
              price,
              time12h,
              date,
              position,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp,
              type: value,
              price,
              time12h,
              date,
              position,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp,
              type,
              price: value,
              time12h,
              date,
              position,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Time12h"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp,
              type,
              price,
              time12h: value,
              date,
              position,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.time12h ?? value;
          }
          if (errors.time12h?.hasError) {
            runValidationTasks("time12h", value);
          }
          setTime12h(value);
        }}
        onBlur={() => runValidationTasks("time12h", time12h)}
        errorMessage={errors.time12h?.errorMessage}
        hasError={errors.time12h?.hasError}
        {...getOverrideProps(overrides, "time12h")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp,
              type,
              price,
              time12h,
              date: value,
              position,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Position"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp,
              type,
              price,
              time12h,
              date,
              position: value,
              isManual,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <SwitchField
        label="Is manual"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isManual}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp,
              type,
              price,
              time12h,
              date,
              position,
              isManual: value,
              pair,
            };
            const result = onChange(modelFields);
            value = result?.isManual ?? value;
          }
          if (errors.isManual?.hasError) {
            runValidationTasks("isManual", value);
          }
          setIsManual(value);
        }}
        onBlur={() => runValidationTasks("isManual", isManual)}
        errorMessage={errors.isManual?.errorMessage}
        hasError={errors.isManual?.hasError}
        {...getOverrideProps(overrides, "isManual")}
      ></SwitchField>
      <TextField
        label="Pair"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              timestamp,
              type,
              price,
              time12h,
              date,
              position,
              isManual,
              pair: value,
            };
            const result = onChange(modelFields);
            value = result?.pair ?? value;
          }
          if (errors.pair?.hasError) {
            runValidationTasks("pair", value);
          }
          setPair(value);
        }}
        onBlur={() => runValidationTasks("pair", pair)}
        errorMessage={errors.pair?.errorMessage}
        hasError={errors.pair?.hasError}
        {...getOverrideProps(overrides, "pair")}
      ></TextField>
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
