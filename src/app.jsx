import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const App = () => {
    return (
        <div>
            <Button 
                style={{textTransform : 'none'}}
                variant="outlined" 
                size="small" 
                startIcon={<SaveIcon />}
                color="primary" 
                disableElevation>
                Submit
            </Button>
        </div>
    );
};

export default App;