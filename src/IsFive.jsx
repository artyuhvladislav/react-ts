import React, { useMemo } from 'react'

const IsFive = ({ value }) => {
    const hardCalc = useMemo(() => {
        let i = 0
        while (i < 600000000) i++

        return value === 5 ? 'this is 5' : ' this is not 5'
    }, [value])
    return (
        <div>
            {hardCalc}
        </div>
    )
}

export default IsFive