/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotificationInputValues = {
    title?: string;
    description?: string;
    timestamp?: string;
    type?: string;
    price?: number;
    time12h?: string;
    date?: string;
    position?: string;
    isManual?: boolean;
    pair?: string;
};
export declare type NotificationValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    time12h?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    isManual?: ValidationFunction<boolean>;
    pair?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationOverridesProps = {
    NotificationGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    timestamp?: FormProps<TextFieldProps>;
    type?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    time12h?: FormProps<TextFieldProps>;
    date?: FormProps<TextFieldProps>;
    position?: FormProps<TextFieldProps>;
    isManual?: FormProps<SwitchFieldProps>;
    pair?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationProps = React.PropsWithChildren<{
    overrides?: NotificationOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationInputValues) => NotificationInputValues;
    onSuccess?: (fields: NotificationInputValues) => void;
    onError?: (fields: NotificationInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NotificationInputValues) => NotificationInputValues;
    onValidate?: NotificationValidationValues;
} & React.CSSProperties>;
export default function Notification(props: NotificationProps): React.ReactElement;
