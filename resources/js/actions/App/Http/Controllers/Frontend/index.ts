import HomeController from './HomeController'
import VisaBulletin from './VisaBulletin'

const Frontend = {
    HomeController: Object.assign(HomeController, HomeController),
    VisaBulletin: Object.assign(VisaBulletin, VisaBulletin),
}

export default Frontend