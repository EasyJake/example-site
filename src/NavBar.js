import { useState } from 'react'
import { Menu, MenuItem, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export function NavBar() {
    const currentUser = { name: 'Guest'}
    const dispatch = useDispatch()
    const [button, setButton] = useState(null)
    return (
        <header>
            <div>
                <img src="assets/mailbox.png"/>
                <h1>HackerMail</h1>
            </div>
        </header>
    )
}