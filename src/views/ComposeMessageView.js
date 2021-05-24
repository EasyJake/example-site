import { TextField, LinearProgress, FormHelperText, Drawer } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export function ComposeMessageView() {

    const history = useHistory()
    const dispatch = useDispatch()

    const composeModalOpen = useSelector(state => state.composeModalOpen)

    const [username, setUsername] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('\n\n\n')
    const [status, setStatus] = useState(null)
    const [error, setError] = useState(null)

    async function createAccount() {
        setUsername('')
        setSubject('')
        setContent('\n\n\n')
        setStatus(null)
        dispatch({ type: 'CLOSE_COMPOSE_MODAL' })
    }

    return (
        <Drawer anchor="right" open={composeModalOpen} onClose={() => dispatch({ type: 'CLOSE_COMPOSE_MODAL' })}>
            {status === 'pending' &&
                <LinearProgress />
            }
            <div className="compose-drawer">
                <h2>Compose Message:</h2>
                <TextField
                    error={error?.username?.message}
                    helperText={error?.username?.message}
                    disabled={status !== null}
                    style={{ marginBottom: '4%' }}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    id="username"
                    label="To"
                    placeholder="Username"
                    variant="filled"
                    fullWidth={true}
                    variant="outlined"
                />
                <TextField
                    error={error?.subject?.message}
                    helperText={error?.subject?.message}
                    disabled={status !== null}
                    style={{ marginBottom: '4%' }}
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    id="subject"
                    label="Subject"
                    variant="filled"
                    fullWidth={true}
                    variant="outlined"
                />
                <TextField
                    error={error?.content?.message}
                    helperText={error?.content?.message}
                    value={content}
                    disabled={status !== null}
                    onChange={e => setContent(e.target.value)}
                    type="content"
                    id="content"
                    label="Content"
                    variant="filled"
                    fullWidth={true}
                    variant="outlined"
                    multiline={true}
                />
                {error?.message &&
                    <FormHelperText error={true}>
                        {error.message}
                    </FormHelperText>
                }
                <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '4%' }}>
                    <button disabled={status !== null} onClick={createAccount}>
                        Send
                    </button>
                </div>
            </div>
        </Drawer>
    )
}