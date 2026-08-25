import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
export const check_youtube_video = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_youtube_video.url(options),
    method: 'get',
})

check_youtube_video.definition = {
    methods: ["get","head"],
    url: '/social/check_youtube_video',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_video.url = (options?: RouteQueryOptions) => {
    return check_youtube_video.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_video.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_youtube_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_video.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_youtube_video.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
const check_youtube_videoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_youtube_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_videoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_youtube_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_videoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_youtube_video.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check_youtube_video.form = check_youtube_videoForm

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
export const check_facebook_video = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_facebook_video.url(options),
    method: 'get',
})

check_facebook_video.definition = {
    methods: ["get","head"],
    url: '/social/check_facebook_video',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_video.url = (options?: RouteQueryOptions) => {
    return check_facebook_video.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_video.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_facebook_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_video.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_facebook_video.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
const check_facebook_videoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_facebook_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_videoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_facebook_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_videoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_facebook_video.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check_facebook_video.form = check_facebook_videoForm

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
export const check_instagram_video = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_instagram_video.url(options),
    method: 'get',
})

check_instagram_video.definition = {
    methods: ["get","head"],
    url: '/social/check_instagram_video',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_video.url = (options?: RouteQueryOptions) => {
    return check_instagram_video.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_video.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_instagram_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_video.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_instagram_video.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
const check_instagram_videoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_instagram_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_videoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_instagram_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_videoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_instagram_video.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check_instagram_video.form = check_instagram_videoForm

const ApiSocialController = { check_uscis_status, check_youtube_video, check_facebook_video, check_instagram_video }

export default ApiSocialController