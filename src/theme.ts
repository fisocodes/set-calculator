import { createTheme } from "@mantine/core";

export const theme = createTheme({
    defaultRadius: 'lg',
    primaryColor: 'blue',
    primaryShade: 9,
    components: {
        Button: {
            defaultProps: {
                fullWidth: true,
            }
        },
        TagsInput: {
            defaultProps: {
                variant: 'filled',
            }
        },
        Title: {
            defaultProps: {
                c: 'dark.5',
            }
        }
    }
})