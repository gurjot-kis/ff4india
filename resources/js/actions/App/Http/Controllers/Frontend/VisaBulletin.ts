import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:17
* @route '/visa-bulletin'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/visa-bulletin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:17
* @route '/visa-bulletin'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:17
* @route '/visa-bulletin'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:17
* @route '/visa-bulletin'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:17
* @route '/visa-bulletin'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:17
* @route '/visa-bulletin'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:17
* @route '/visa-bulletin'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:34
* @route '/visa-bulletin-detail/{session}'
*/
export const VisaBulletinDetail = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'get',
})

VisaBulletinDetail.definition = {
    methods: ["get","head"],
    url: '/visa-bulletin-detail/{session}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:34
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.url = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { session: args }
    }

    if (Array.isArray(args)) {
        args = {
            session: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        session: args.session,
    }

    return VisaBulletinDetail.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:34
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:34
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.head = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:34
* @route '/visa-bulletin-detail/{session}'
*/
const VisaBulletinDetailForm = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:34
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetailForm.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:34
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetailForm.head = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

VisaBulletinDetail.form = VisaBulletinDetailForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:59
* @route '/recent-approval'
*/
export const RecentApprovals = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RecentApprovals.url(options),
    method: 'get',
})

RecentApprovals.definition = {
    methods: ["get","head"],
    url: '/recent-approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:59
* @route '/recent-approval'
*/
RecentApprovals.url = (options?: RouteQueryOptions) => {
    return RecentApprovals.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:59
* @route '/recent-approval'
*/
RecentApprovals.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:59
* @route '/recent-approval'
*/
RecentApprovals.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RecentApprovals.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:59
* @route '/recent-approval'
*/
const RecentApprovalsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:59
* @route '/recent-approval'
*/
RecentApprovalsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:59
* @route '/recent-approval'
*/
RecentApprovalsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RecentApprovals.form = RecentApprovalsForm

const VisaBulletin = { index, VisaBulletinDetail, RecentApprovals }

export default VisaBulletin