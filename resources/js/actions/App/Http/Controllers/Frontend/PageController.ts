import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\PageController::about
* @see app/Http/Controllers/Frontend/PageController.php:100
* @route '/about'
*/
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\PageController::about
* @see app/Http/Controllers/Frontend/PageController.php:100
* @route '/about'
*/
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\PageController::about
* @see app/Http/Controllers/Frontend/PageController.php:100
* @route '/about'
*/
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::about
* @see app/Http/Controllers/Frontend/PageController.php:100
* @route '/about'
*/
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::about
* @see app/Http/Controllers/Frontend/PageController.php:100
* @route '/about'
*/
const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::about
* @see app/Http/Controllers/Frontend/PageController.php:100
* @route '/about'
*/
aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::about
* @see app/Http/Controllers/Frontend/PageController.php:100
* @route '/about'
*/
aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

about.form = aboutForm

/**
* @see \App\Http\Controllers\Frontend\PageController::search
* @see app/Http/Controllers/Frontend/PageController.php:17
* @route '/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\PageController::search
* @see app/Http/Controllers/Frontend/PageController.php:17
* @route '/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\PageController::search
* @see app/Http/Controllers/Frontend/PageController.php:17
* @route '/search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::search
* @see app/Http/Controllers/Frontend/PageController.php:17
* @route '/search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::search
* @see app/Http/Controllers/Frontend/PageController.php:17
* @route '/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::search
* @see app/Http/Controllers/Frontend/PageController.php:17
* @route '/search'
*/
searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\PageController::search
* @see app/Http/Controllers/Frontend/PageController.php:17
* @route '/search'
*/
searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

const PageController = { about, search }

export default PageController