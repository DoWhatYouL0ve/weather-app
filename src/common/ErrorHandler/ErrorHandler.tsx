import {useAppDispatch} from "../../appState/hooks/appHooks";
import { SnackbarArea } from "./styledErrorHandler";
import {useEffect} from "react";
import { VscChromeClose } from 'react-icons/vsc'
import {setAppError} from "../../appState/appReducer";

export const ErrorHandler = () => {
    const dispatch = useAppDispatch()
    const onClickAction = () => {
        dispatch(setAppError({error: ''}))
    }

    useEffect(() => {
        let showError = setTimeout(() => {
            dispatch(setAppError({error: ''}))
        }, 7000)

        return () => clearTimeout(showError)
    }, [])

    return (
        <SnackbarArea>
            <span className={'error'}>{'Ops, something went wrong. Please try one more time'}</span>
            <VscChromeClose className={'cross'} onClick={onClickAction} size={'20px'} />
        </SnackbarArea>
    )
}