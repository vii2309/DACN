import React from 'react'

const useOnClickOutside = (ref: any, handler: any) => {
    React.useEffect(() => {
        const listener = (event: any) => {
            if (!ref?.current || ref?.current?.contains(event.target)) {
                return; // skip check
            }
            handler(event);
        }
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [ref, handler]);
}


export default useOnClickOutside