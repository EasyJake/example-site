import { Button, Tooltip } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import UnreadIcon from '@material-ui/icons/Mail'
import ReadIcon from '@material-ui/icons/Drafts'
import EditIcon from '@material-ui/icons/Edit'

import { useDispatch, useSelector } from "react-redux";

export function MessageActionBar() {
    const selectedMessageIds = useSelector(state => state.selectedMessageIds)
    const dispatch = useDispatch()
    const noMessagesSelected = selectedMessageIds.length === 0

    async function deleteMessages() {
        dispatch({ type: 'DELETE_SELECTED_MESSAGES' })
    }

    async function markRead() {
        dispatch({ type: 'MARK_SELECTED_MESSAGES_READ' })
    }

    async function markUnread() {
        dispatch({ type: 'MARK_SELECTED_MESSAGES_UNREAD' })
    }

    return (
        <div className="action-bar">
            <Tooltip title="Delete">
                <Button className="action-icon" disabled={noMessagesSelected} onClick={deleteMessages}>
                    <DeleteIcon />
                </Button>
            </Tooltip>
            <Tooltip title="Mark Unread">
                <Button className="action-icon" disabled={noMessagesSelected} onClick={markUnread}>
                    <UnreadIcon />
                </Button>
            </Tooltip>
            <Tooltip title="Mark Read">
                <Button className="action-icon" disabled={noMessagesSelected} onClick={markRead}>
                    <ReadIcon />
                </Button>
            </Tooltip>
            <Button id="compose" color="primary" onClick={() => dispatch({ type: 'OPEN_COMPOSE_MODAL' })}>
                <EditIcon style={{ marginRight: '0.2em' }} /> COMPOSE
            </Button>
        </div>
    )
}