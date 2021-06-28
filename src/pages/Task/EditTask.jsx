import withRoot from '../../components/withRoot';
import React, { useState } from 'react';
import AppFooter from '../../components/views/AppFooter';
import AppAppBar from '../../components/views/AppAppBar';

const EditTask = () => {


    return (
        <React.Fragment>
            <AppAppBar />
            
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(EditTask);
