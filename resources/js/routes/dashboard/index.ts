import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_uscis_status
* @see app/Http/Controllers/Admin/ApiSocialController.php:19
* @route '/dashboard/social/check_uscis_status'
*/
export const check_uscis_status = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_uscis_status.url(options),
    method: 'get',
})

check_uscis_status.definition = {
    methods: ["get","head"],
    url: '/dashboard/social/check_uscis_status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_uscis_status
* @see app/Http/Controllers/Admin/ApiSocialController.php:19
* @route '/dashboard/social/check_uscis_status'
*/
check_uscis_status.url = (options?: RouteQueryOptions) => {
    return check_uscis_status.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_uscis_status
* @see app/Http/Controllers/Admin/ApiSocialController.php:19
* @route '/dashboard/social/check_uscis_status'
*/
check_uscis_status.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_uscis_status.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_uscis_status
* @see app/Http/Controllers/Admin/ApiSocialController.php:19
* @route '/dashboard/social/check_uscis_status'
*/
check_uscis_status.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_uscis_status.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_uscis_status
* @see app/Http/Controllers/Admin/ApiSocialController.php:19
* @route '/dashboard/social/check_uscis_status'
*/
const check_uscis_statusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_uscis_status.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_uscis_status
* @see app/Http/Controllers/Admin/ApiSocialController.php:19
* @route '/dashboard/social/check_uscis_status'
*/
check_uscis_statusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_uscis_status.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_uscis_status
* @see app/Http/Controllers/Admin/ApiSocialController.php:19
* @route '/dashboard/social/check_uscis_status'
*/
check_uscis_statusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_uscis_status.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check_uscis_status.form = check_uscis_statusForm

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
    check_uscis_status: Object.assign(check_uscis_status, check_uscis_status),
}

export default dashboard