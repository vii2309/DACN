import React from 'react'

const useOnBeforeUnload = (handler?: any) => {
    React.useEffect(() => {
        const listener = (event?: any) => {
            event.preventDefault();
            if (!handler) return
            return handler(event);
        }
        window.addEventListener("beforeunload", listener);

        return () => {
            window.removeEventListener("beforeunload", listener)
        }
    }, [handler]);
}


export default useOnBeforeUnload