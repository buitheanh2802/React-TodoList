import { createTheme,makeStyles,useTheme } from '@material-ui/core/styles';
import useMediaQuery  from '@material-ui/core/useMediaQuery';

export const theme = createTheme({
    breakpoints : {
        values : {
            xs : 0,
            sm : 640,
            md : 768,
            lg : 1024,
            xl : 1280
        }
    }
});

export const useStyles = (styles) => {
    return makeStyles(styles);
}

export const useBreakpoints = (breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint))
}


