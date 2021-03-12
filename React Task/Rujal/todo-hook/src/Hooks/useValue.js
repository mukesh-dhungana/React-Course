import React from 'react'

function useValue(initialValue) {
    const [value, setValue] = React.useState(initialValue)
    return {
        value,
        onChange: (value) => setValue(value),
        reset: () => setValue('')
    }
}

export default useValue
