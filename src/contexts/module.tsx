"use client"
import React from 'react';
import useOnBeforeUnload from '../../../cp-campus/campus-client-v3/src/hooks/useBeforeunload';
// import useOnBeforeUnload from '../hooks/useOnBeforeUnload';

const InitializeProps = {
    refetchers: undefined,
    handleAssignRefetcher: undefined,
    handleCallRefetcher: undefined,
    attachment: {
        loading: false,
        number: 0
    },
    uploader: undefined,
    clearuploader: undefined
}
interface ModuleContextProps {
    refetchers?: any,
    handleAssignRefetcher?: any,
    handleCallRefetcher?: any,
    attachment: {
        loading: boolean
        number: number
    }

    uploader?: any
    clearuploader?: any
}
const ModuleContext = React.createContext<ModuleContextProps>(InitializeProps);

export const ModuleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const defaults = {}

    const attachmentDefaults = {
        loading: false,
        number: 0
    }
    useOnBeforeUnload()

    const handleAssignRefetcher = (newRefetcher: any) =>
        setState((prevState: any) => ({
            ...prevState,
            refetchers: Object.assign(prevState.refetchers || {}, newRefetcher)
        }));

    const handleRemoveRefetcher = () => {
        setState((prevState: any) => ({
            ...prevState,
            refetchers: defaults
        }))
    }
    const handleCallRefetcher = (key: string) => {
        try {
            state.refetchers?.[key]()
        } catch (error: any) {
            console.log('error when callback from refetcher of app context', error?.message)
        }
    }

    const handleUploadFile = (attachment: {
        loading: boolean, number: number
    }) => {
        setState((prevState: any) => ({ ...prevState, attachment: attachment }))
    }

    const clearuploader = () => {
        setState((prevState: any) => ({
            ...prevState, attachment: {
                loading: false, number: 0
            }
        }))
    }

    const [state, setState] = React.useState<any>({
        refetchers: defaults,
        handleAssignRefetcher: handleAssignRefetcher,
        handleRemoveRefetcher: handleRemoveRefetcher,
        handleCallRefetcher: handleCallRefetcher,
        attachment: attachmentDefaults,
        uploader: handleUploadFile,
        clearuploader: clearuploader
    });

    return (
        <ModuleContext.Provider value={{ ...state }}>
            {children}
        </ModuleContext.Provider>
    );
};

export const useModuleContext = () => {
    return React.useContext(ModuleContext);
};
