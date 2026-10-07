import PageController from './PageController'
import HomeController from './HomeController'
import VisaBulletin from './VisaBulletin'
import InquiryController from './InquiryController'

const Frontend = {
    PageController: Object.assign(PageController, PageController),
    HomeController: Object.assign(HomeController, HomeController),
    VisaBulletin: Object.assign(VisaBulletin, VisaBulletin),
    InquiryController: Object.assign(InquiryController, InquiryController),
}

export default Frontend