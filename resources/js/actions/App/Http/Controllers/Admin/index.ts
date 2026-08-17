import NoticeController from './NoticeController'
import VisaBulletinController from './VisaBulletinController'
import EmergencyBroadcastController from './EmergencyBroadcastController'
import VisaBulletinPreferenceController from './VisaBulletinPreferenceController'
import VisaBulletinApplicationController from './VisaBulletinApplicationController'
import RecentApprovalController from './RecentApprovalController'
import ContactFormController from './ContactFormController'
import CategoryController from './CategoryController'
import BlogController from './BlogController'
import FamilyImageController from './FamilyImageController'
import HomePageEditableController from './HomePageEditableController'
import ApiSocialController from './ApiSocialController'

const Admin = {
    NoticeController: Object.assign(NoticeController, NoticeController),
    VisaBulletinController: Object.assign(VisaBulletinController, VisaBulletinController),
    EmergencyBroadcastController: Object.assign(EmergencyBroadcastController, EmergencyBroadcastController),
    VisaBulletinPreferenceController: Object.assign(VisaBulletinPreferenceController, VisaBulletinPreferenceController),
    VisaBulletinApplicationController: Object.assign(VisaBulletinApplicationController, VisaBulletinApplicationController),
    RecentApprovalController: Object.assign(RecentApprovalController, RecentApprovalController),
    ContactFormController: Object.assign(ContactFormController, ContactFormController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    BlogController: Object.assign(BlogController, BlogController),
    FamilyImageController: Object.assign(FamilyImageController, FamilyImageController),
    HomePageEditableController: Object.assign(HomePageEditableController, HomePageEditableController),
    ApiSocialController: Object.assign(ApiSocialController, ApiSocialController),
}

export default Admin