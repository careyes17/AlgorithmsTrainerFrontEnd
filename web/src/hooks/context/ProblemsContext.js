import React, { useContext, useState } from 'react'

const ProblemsContext = React.createContext()

export function useProblems() {
    return useContext(ProblemsContext)
}

export function ProblemsProvider({ children }) {
    const [problems, setProblems] = useState(undefined)

    return (
        <ProblemsContext.Provider value={[problems, setProblems]}>
            {children}
        </ProblemsContext.Provider>
    )
}