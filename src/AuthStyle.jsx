
import {
    useTheme,
    Button,
    View,
    Heading,
    Text,
    Image,
    ThemeProvider,
    Theme,
    Authenticator, useAuthenticator
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


export function AuthStyle() {
    const { tokens } = useTheme();

    const components = {
        Header() {
            const { tokens } = useTheme();

            return (
                <View textAlign="center" padding={tokens.space.large}>
                    <Image
                        alt="BMaker logo"
                        src={require('./assets/Colorlogonobackground.png')}
                        style={{ width: '16rem', height: 'auto' }}
                    />
                </View>
            );
        },

        Footer() {
            const { tokens } = useTheme();

            return (
                <View textAlign="center" padding={tokens.space.large}>
                    <Text color={tokens.colors.neutral[80]}>
                        &copy; BMaker Pro - All Rights Reserved
                    </Text>
                </View>
            );
        },

        SignIn: {
            Header() {
                const { tokens } = useTheme();

                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Sign in to your account
                    </Heading>
                );
            },
            Footer() {
                const { toResetPassword } = useAuthenticator();

                return (
                    <View textAlign="center">
                        <Button
                            fontWeight="normal"
                            onClick={toResetPassword}
                            size="small"
                            variation="link"
                        >
                            Reset Password
                        </Button>
                    </View>
                );
            },
        },

        SignUp: {
            Header() {
                const { tokens } = useTheme();

                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Create a new account
                    </Heading>
                );
            },
            Footer() {
                const { toSignIn } = useAuthenticator();

                return (
                    <View textAlign="center">
                        <Button
                            fontWeight="normal"
                            onClick={toSignIn}
                            size="small"
                            variation="link"
                        >
                            Back to Sign In
                        </Button>
                    </View>
                );
            },
        },
        ConfirmSignUp: {
            Header() {
                const { tokens } = useTheme();
                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Enter Information:
                    </Heading>
                );
            },
        },
        SetupTOTP: {
            Header() {
                const { tokens } = useTheme();
                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Enter Information:
                    </Heading>
                );
            },
        },
        ConfirmSignIn: {
            Header() {
                const { tokens } = useTheme();
                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Enter Information:
                    </Heading>
                );
            },

        },
        ResetPassword: {
            Header() {
                const { tokens } = useTheme();
                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Enter Information:
                    </Heading>
                );
            },
            Footer() {
                return <Text>No worries, we got you back!</Text>;
            }
        },
        ConfirmResetPassword: {
            Header() {
                const { tokens } = useTheme();
                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Enter Information:
                    </Heading>
                );
            },
        },
    };

    const formFields = {
        signIn: {
            username: {
                placeholder: 'Enter your username',
            },
        },
        signUp: {
            password: {
                label: 'Password:',
                placeholder: 'Enter your Password:',
                isRequired: false,
                order: 2,
            },
            confirm_password: {
                label: 'Confirm Password:',
                order: 1,
            },
        },
        forceNewPassword: {
            password: {
                placeholder: 'Enter your Password:',
            },
        },
        resetPassword: {
            username: {
                placeholder: 'Enter your email:',
            },
        },
        confirmResetPassword: {
            confirmation_code: {
                placeholder: 'Enter your Confirmation Code:',
                label: 'New Label',
                isRequired: false,
            },
            confirm_password: {
                placeholder: 'Enter your Password Please:',
            },
        },
        setupTOTP: {
            QR: {
                totpIssuer: 'test issuer',
                totpUsername: 'amplify_qr_test_user',
            },
            confirmation_code: {
                label: 'New Label',
                placeholder: 'Enter your Confirmation Code:',
                isRequired: false,
            },
        },
        confirmSignIn: {
            confirmation_code: {
                label: 'New Label',
                placeholder: 'Enter your Confirmation Code:',
                isRequired: false,
            },
        },
    };
    const theme = {
        name: 'Auth Example Theme',
        tokens: {
            colors: {
                brand: {
                    primary: {
                        '10': tokens.colors.orange['200'],
                        '80': "#f4733a",
                        '90': tokens.colors.orange['20'],
                        '100': tokens.colors.orange['10'],
                    },
                },
            },
            components: {
                tabs: {
                    item: {
                        _hover: {
                            color: {
                                value: tokens.colors.orange['80'].value,
                            },
                        }
                    },
                },
            },
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Authenticator formFields={formFields} components={components}></Authenticator>
        </ThemeProvider>
    );
}