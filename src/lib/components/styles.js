import {createTheme, styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled('div')(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary
}));

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#005825",
        },
    },
});

const PortalLayout = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    flexGrow: 1
}));


const dropzoneBaseStyle = {
    textAlign: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const dropzoneActiveStyle = {
    borderColor: '#005825',
    color: '#005825'
};

const dropzoneAcceptStyle = {
    borderColor: '#005825',
    color: '#005825'
};

const dropzoneRejectStyle = {
    borderColor: '#ff1744',
    color: '#ff1744'
};


export {Item, PortalLayout, mainTheme, dropzoneBaseStyle, dropzoneActiveStyle, dropzoneAcceptStyle, dropzoneRejectStyle}
