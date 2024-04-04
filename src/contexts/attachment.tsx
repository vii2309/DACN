"use client"
import React from 'react';
import useOnBeforeUnload from '../../../cp-campus/campus-client-v3/src/hooks/useBeforeunload';
// import useOnBeforeUnload from '../hooks/useOnBeforeUnload';

const InitializeProps = {
    attachments: [],
    enabled: false,
    uploading: {
        position: -1,
        status: "",
        percent: 0
    },
    clear: undefined,
    onLoading: undefined,
    enabledJobs: undefined,
    pushAttachments: undefined
}
interface AttachmentContextProps {
    attachments: any[]
    enabled: boolean
    uploading?: {
        position: number,
        status: string,
        percent: number
    }
    onLoading?: () => React.Dispatch<React.SetStateAction<any>>
    clear?: any
    enabledJobs?: any
    pushAttachments?: any
}
const AttachmentContext = React.createContext<AttachmentContextProps>(InitializeProps);

export const AttachmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const clear = () => {
        return setState((prevState: AttachmentContextProps) => ({
            ...prevState,
            attachments: [],
            enabled: false,
            uploading: {
                position: -1,
                percent: 0,
                status: ""
            }
        }))
    }
    const onLoading = (percent: number, position: number, status: string) => {
        return setState((prevState: AttachmentContextProps) => ({
            ...prevState,
            uploading: {
                status: status,
                position: position,
                percent: percent
            }
        }))
    }

    const enabledJobs = () => {
        return setState((prevState: AttachmentContextProps) => ({
            ...prevState,
            enabled: true
        }))
    }
    const pushAttachments = (attachments: any[]) => {
        return setState((prevState: AttachmentContextProps) => ({
            ...prevState,
            attachments: attachments
        }))
    }

    const [state, setState] = React.useState<any>({
        enabled: false,
        attachments: [],
        uploading: {
            status: "",
            percent: 0,
            position: -1
        },
        clear: clear,
        onLoading: onLoading,
        enabledJobs: enabledJobs,
        pushAttachments: pushAttachments
    });

    return (
        <AttachmentContext.Provider value={{ ...state }}>
            {children}
        </AttachmentContext.Provider>
    );
};

export const useAttachmentContext = () => {
    return React.useContext(AttachmentContext);
};
