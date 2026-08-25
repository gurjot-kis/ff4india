import Frontend from './Frontend'
import Admin from './Admin'
import Settings from './Settings'

const Controllers = {
    Frontend: Object.assign(Frontend, Frontend),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers