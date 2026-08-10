import notices from './notices'
import visaBulletins from './visa-bulletins'
import emergencyBroadcasts from './emergency-broadcasts'
import visaPreferences from './visa-preferences'
import visaApplications from './visa-applications'
import recentApprovals from './recent-approvals'
import contactForms from './contact-forms'
import categories from './categories'
import blogs from './blogs'
import familyImages from './family-images'
import homePage from './home-page'

const dashboard = {
    notices: Object.assign(notices, notices),
    visaBulletins: Object.assign(visaBulletins, visaBulletins),
    emergencyBroadcasts: Object.assign(emergencyBroadcasts, emergencyBroadcasts),
    visaPreferences: Object.assign(visaPreferences, visaPreferences),
    visaApplications: Object.assign(visaApplications, visaApplications),
    recentApprovals: Object.assign(recentApprovals, recentApprovals),
    contactForms: Object.assign(contactForms, contactForms),
    categories: Object.assign(categories, categories),
    blogs: Object.assign(blogs, blogs),
    familyImages: Object.assign(familyImages, familyImages),
    homePage: Object.assign(homePage, homePage),
}

export default dashboard