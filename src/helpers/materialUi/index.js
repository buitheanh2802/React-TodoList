import { createTheme,makeStyles } from '@material-ui/core/styles';

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


