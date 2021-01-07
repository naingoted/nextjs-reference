import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="wrapper">
            This is menu
            <div className="main">
            {children}
            </div>
        </div>
    )
}

export default Layout
