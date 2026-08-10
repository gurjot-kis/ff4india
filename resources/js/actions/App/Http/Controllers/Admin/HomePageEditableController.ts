import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::index
* @see app/Http/Controllers/Admin/HomePageEditableController.php:46
* @route '/dashboard/home-page'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/home-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::index
* @see app/Http/Controllers/Admin/HomePageEditableController.php:46
* @route '/dashboard/home-page'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::index
* @see app/Http/Controllers/Admin/HomePageEditableController.php:46
* @route '/dashboard/home-page'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::index
* @see app/Http/Controllers/Admin/HomePageEditableController.php:46
* @route '/dashboard/home-page'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::index
* @see app/Http/Controllers/Admin/HomePageEditableController.php:46
* @route '/dashboard/home-page'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::index
* @see app/Http/Controllers/Admin/HomePageEditableController.php:46
* @route '/dashboard/home-page'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::index
* @see app/Http/Controllers/Admin/HomePageEditableController.php:46
* @route '/dashboard/home-page'
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
* @see \App\Http\Controllers\Admin\HomePageEditableController::create
* @see app/Http/Controllers/Admin/HomePageEditableController.php:54
* @route '/dashboard/home-page/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/home-page/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::create
* @see app/Http/Controllers/Admin/HomePageEditableController.php:54
* @route '/dashboard/home-page/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::create
* @see app/Http/Controllers/Admin/HomePageEditableController.php:54
* @route '/dashboard/home-page/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::create
* @see app/Http/Controllers/Admin/HomePageEditableController.php:54
* @route '/dashboard/home-page/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::create
* @see app/Http/Controllers/Admin/HomePageEditableController.php:54
* @route '/dashboard/home-page/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::create
* @see app/Http/Controllers/Admin/HomePageEditableController.php:54
* @route '/dashboard/home-page/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::create
* @see app/Http/Controllers/Admin/HomePageEditableController.php:54
* @route '/dashboard/home-page/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::store
* @see app/Http/Controllers/Admin/HomePageEditableController.php:62
* @route '/dashboard/home-page'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/home-page',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::store
* @see app/Http/Controllers/Admin/HomePageEditableController.php:62
* @route '/dashboard/home-page'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::store
* @see app/Http/Controllers/Admin/HomePageEditableController.php:62
* @route '/dashboard/home-page'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::store
* @see app/Http/Controllers/Admin/HomePageEditableController.php:62
* @route '/dashboard/home-page'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::store
* @see app/Http/Controllers/Admin/HomePageEditableController.php:62
* @route '/dashboard/home-page'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::edit
* @see app/Http/Controllers/Admin/HomePageEditableController.php:13
* @route '/dashboard/home-page/{homePageEditable}/edit'
*/
export const edit = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/home-page/{homePageEditable}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::edit
* @see app/Http/Controllers/Admin/HomePageEditableController.php:13
* @route '/dashboard/home-page/{homePageEditable}/edit'
*/
edit.url = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { homePageEditable: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { homePageEditable: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            homePageEditable: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        homePageEditable: typeof args.homePageEditable === 'object'
        ? args.homePageEditable.id
        : args.homePageEditable,
    }

    return edit.definition.url
            .replace('{homePageEditable}', parsedArgs.homePageEditable.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::edit
* @see app/Http/Controllers/Admin/HomePageEditableController.php:13
* @route '/dashboard/home-page/{homePageEditable}/edit'
*/
edit.get = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::edit
* @see app/Http/Controllers/Admin/HomePageEditableController.php:13
* @route '/dashboard/home-page/{homePageEditable}/edit'
*/
edit.head = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::edit
* @see app/Http/Controllers/Admin/HomePageEditableController.php:13
* @route '/dashboard/home-page/{homePageEditable}/edit'
*/
const editForm = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::edit
* @see app/Http/Controllers/Admin/HomePageEditableController.php:13
* @route '/dashboard/home-page/{homePageEditable}/edit'
*/
editForm.get = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::edit
* @see app/Http/Controllers/Admin/HomePageEditableController.php:13
* @route '/dashboard/home-page/{homePageEditable}/edit'
*/
editForm.head = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::update
* @see app/Http/Controllers/Admin/HomePageEditableController.php:26
* @route '/dashboard/home-page/{homePageEditable}'
*/
export const update = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/home-page/{homePageEditable}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::update
* @see app/Http/Controllers/Admin/HomePageEditableController.php:26
* @route '/dashboard/home-page/{homePageEditable}'
*/
update.url = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { homePageEditable: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { homePageEditable: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            homePageEditable: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        homePageEditable: typeof args.homePageEditable === 'object'
        ? args.homePageEditable.id
        : args.homePageEditable,
    }

    return update.definition.url
            .replace('{homePageEditable}', parsedArgs.homePageEditable.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::update
* @see app/Http/Controllers/Admin/HomePageEditableController.php:26
* @route '/dashboard/home-page/{homePageEditable}'
*/
update.put = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::update
* @see app/Http/Controllers/Admin/HomePageEditableController.php:26
* @route '/dashboard/home-page/{homePageEditable}'
*/
update.patch = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::update
* @see app/Http/Controllers/Admin/HomePageEditableController.php:26
* @route '/dashboard/home-page/{homePageEditable}'
*/
const updateForm = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::update
* @see app/Http/Controllers/Admin/HomePageEditableController.php:26
* @route '/dashboard/home-page/{homePageEditable}'
*/
updateForm.put = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::update
* @see app/Http/Controllers/Admin/HomePageEditableController.php:26
* @route '/dashboard/home-page/{homePageEditable}'
*/
updateForm.patch = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::destroy
* @see app/Http/Controllers/Admin/HomePageEditableController.php:70
* @route '/dashboard/home-page/{homePageEditable}'
*/
export const destroy = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/home-page/{homePageEditable}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::destroy
* @see app/Http/Controllers/Admin/HomePageEditableController.php:70
* @route '/dashboard/home-page/{homePageEditable}'
*/
destroy.url = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { homePageEditable: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { homePageEditable: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            homePageEditable: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        homePageEditable: typeof args.homePageEditable === 'object'
        ? args.homePageEditable.id
        : args.homePageEditable,
    }

    return destroy.definition.url
            .replace('{homePageEditable}', parsedArgs.homePageEditable.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::destroy
* @see app/Http/Controllers/Admin/HomePageEditableController.php:70
* @route '/dashboard/home-page/{homePageEditable}'
*/
destroy.delete = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::destroy
* @see app/Http/Controllers/Admin/HomePageEditableController.php:70
* @route '/dashboard/home-page/{homePageEditable}'
*/
const destroyForm = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HomePageEditableController::destroy
* @see app/Http/Controllers/Admin/HomePageEditableController.php:70
* @route '/dashboard/home-page/{homePageEditable}'
*/
destroyForm.delete = (args: { homePageEditable: number | { id: number } } | [homePageEditable: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const HomePageEditableController = { index, create, store, edit, update, destroy }

export default HomePageEditableController