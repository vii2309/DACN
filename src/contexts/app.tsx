import React, { useContext, useState } from 'react';

const InitializeProps = {
    isOrder: false,
    handleOrder: undefined,
    verifyLesson: undefined,
    handleVerify: undefined,
    uploadFile: undefined,
    handleUploadFile: undefined,
    department: undefined,
    handleDepartment: undefined,
    submit: undefined,
    toggleOnSubmit: undefined,
    logLesson: undefined,
    handleLogLesson: undefined
}
interface AppContextProps {
    isOrder: boolean,
    handleOrder: any,
    verifyLesson: any,
    handleVerify: any,
    uploadFile: any,
    handleUploadFile: any,
    department: any,
    handleDepartment: any,
    submit: any,
    toggleOnSubmit: any,
    logLesson: any,
    handleLogLesson: any
}

const AppContext = React.createContext<AppContextProps>(InitializeProps)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const handleOrder = (isOrder: boolean) => {
        setState((prevState) => ({ ...prevState, isOrder: isOrder }))
    }
    const handleVerify = (verifyLesson: any) => {
        setState((prevState) => ({ ...prevState, verifyLesson: verifyLesson }))
    }
    const handleUploadFile = (uploadFile: any) => {
        setState((prevState) => ({ ...prevState, uploadFile: uploadFile }))
    }
    const handleDepartment = (department: any) => {
        localStorage.setItem('DEPT', department)
        setState((prevState) => ({ ...prevState, department: department }))
    }
    const toggleOnSubmit = (submit: any) => {
        setState((prevState) => ({ ...prevState, submit: submit }))
    }
    const handleLogLesson = (logLesson: any) => {
        setState((prevState) => ({ ...prevState, logLesson: logLesson }))
    }
    const [state, setState] = useState({
        isOrder: false,
        handleOrder: handleOrder,
        verifyLesson: {
            isActive: false,
            doneVideo: false,
            doneSection: false,
            log_section: null,
            log_video: null
        },
        handleVerify: handleVerify,
        uploadFile: {
            isLoading: false,
            currentPercen: 0
        },
        handleUploadFile: handleUploadFile,
        department: null,
        handleDepartment: handleDepartment,
        submit: {
            isLoading: false,
            indexItem: null
        },
        toggleOnSubmit: toggleOnSubmit,
        logLesson: {
            section: {
                authorId: null,
                isDone: false,
                sectionId: null
            },
            video: {
                author_id: null,
                video_position: null,
                time_end: null
            }
        },
        handleLogLesson: handleLogLesson
    })

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    return useContext(AppContext);
};