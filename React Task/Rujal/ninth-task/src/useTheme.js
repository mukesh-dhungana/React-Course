import React, { useEffect } from 'react'

function useTheme(id) {
    const [theme, changeTheme] = React.useState("light")
    useEffect(() => {
        const doc = document.getElementById(id)
        if (theme === "dark") {
            doc.classList.add("dark")
            doc.classList.remove("light")
        } else {
            doc.classList.add("light")
            doc.classList.remove("dark")
        }
    }, [theme, id])

    return {
        changeTheme: () => changeTheme(th => th === "light" ? "dark" : "light")
    }
}

export default useTheme
