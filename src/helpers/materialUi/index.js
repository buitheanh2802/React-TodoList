import { createTheme,makeStyles,useTheme } from '@material-ui/core/styles';
import useMediaQuery  from '@material-ui/core/useMediaQuery';

export const theme = createTheme({
    breakpoints : {
        values : {
            xs : 0,
            sm : 639,
            md : 767,
            lg : 1023,
            xl : 1279
        }
    },
    typography : {
        button : {
            textTransform : 'none'
        }
    }
});

export const useStyles = (styles) => {
    return makeStyles(styles)();
}

export const useBreakpoints = (breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint))
}


