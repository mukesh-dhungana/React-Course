import React from 'react'

function useValue(initialValue) {
    const [value, setValue] = React.useState(initialValue)
    return {
        value,
        onChange: (val) => setValue(val),
        reset: () => setValue('')
    }
}

export default useValue
