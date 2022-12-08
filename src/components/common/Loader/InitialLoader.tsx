import React from 'react'
import {StyledInitialLoader} from "./styles/styledInitialLoader";

export const Loading = () => {
    return (
        <StyledInitialLoader>
            <div className={'loader'}>
                <div className={'innerOne'}> </div>
                <div className={'innerTwo'}> </div>
                <div className={'innerThree'}> </div>
            </div>
        </StyledInitialLoader>
    )
}