import "styled-components";

import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            red: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
            orange: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
            primary: string;
            secondary: string;
            background: string;
            text: string;
            error: string;
            success: string;
        };
    }
}
