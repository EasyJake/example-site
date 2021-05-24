import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { BACKEND_URL } from './_constants'
import { InboxView } from './views/InboxView'
import { NavBar } from './NavBar'
import { ComposeMessageView } from './views/ComposeMessageView'


export function AppRouter() {
    return (
        <>
            <NavBar />
            <InboxView />
            <ComposeMessageView />
        </>
    )
}