import React, { useEffect } from 'react'

function useTheme(id) {
    const [theme, changeTheme] = React.useState(false)
    useEffect(() => {
        const doc = document.getElementById(id)
        if (theme) {
            doc.classList.add("dark")
        } else {
            doc.classList.remove("dark")
        }
    }, [theme, id])

    return {
        changeTheme: () => changeTheme(!theme)
    }
}

export default useTheme
