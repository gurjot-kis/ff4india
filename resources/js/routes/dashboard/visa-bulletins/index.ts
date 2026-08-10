import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::index
* @see app/Http/Controllers/Admin/VisaBulletinController.php:13
* @route '/dashboard/visa-bulletins'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-bulletins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::index
* @see app/Http/Controllers/Admin/VisaBulletinController.php:13
* @route '/dashboard/visa-bulletins'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::index
* @see app/Http/Controllers/Admin/VisaBulletinController.php:13
* @route '/dashboard/visa-bulletins'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::index
* @see app/Http/Controllers/Admin/VisaBulletinController.php:13
* @route '/dashboard/visa-bulletins'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::index
* @see app/Http/Controllers/Admin/VisaBulletinController.php:13
* @route '/dashboard/visa-bulletins'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::index
* @see app/Http/Controllers/Admin/VisaBulletinController.php:13
* @route '/dashboard/visa-bulletins'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::index
* @see app/Http/Controllers/Admin/VisaBulletinController.php:13
* @route '/dashboard/visa-bulletins'
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
* @see \App\Http\Controllers\Admin\VisaBulletinController::create
* @see app/Http/Controllers/Admin/VisaBulletinController.php:33
* @route '/dashboard/visa-bulletins/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-bulletins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::create
* @see app/Http/Controllers/Admin/VisaBulletinController.php:33
* @route '/dashboard/visa-bulletins/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::create
* @see app/Http/Controllers/Admin/VisaBulletinController.php:33
* @route '/dashboard/visa-bulletins/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::create
* @see app/Http/Controllers/Admin/VisaBulletinController.php:33
* @route '/dashboard/visa-bulletins/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::create
* @see app/Http/Controllers/Admin/VisaBulletinController.php:33
* @route '/dashboard/visa-bulletins/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::create
* @see app/Http/Controllers/Admin/VisaBulletinController.php:33
* @route '/dashboard/visa-bulletins/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::create
* @see app/Http/Controllers/Admin/VisaBulletinController.php:33
* @route '/dashboard/visa-bulletins/create'
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
* @see \App\Http\Controllers\Admin\VisaBulletinController::store
* @see app/Http/Controllers/Admin/VisaBulletinController.php:38
* @route '/dashboard/visa-bulletins'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/visa-bulletins',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::store
* @see app/Http/Controllers/Admin/VisaBulletinController.php:38
* @route '/dashboard/visa-bulletins'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::store
* @see app/Http/Controllers/Admin/VisaBulletinController.php:38
* @route '/dashboard/visa-bulletins'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::store
* @see app/Http/Controllers/Admin/VisaBulletinController.php:38
* @route '/dashboard/visa-bulletins'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::store
* @see app/Http/Controllers/Admin/VisaBulletinController.php:38
* @route '/dashboard/visa-bulletins'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::edit
* @see app/Http/Controllers/Admin/VisaBulletinController.php:65
* @route '/dashboard/visa-bulletins/{visa_bulletin}/edit'
*/
export const edit = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-bulletins/{visa_bulletin}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::edit
* @see app/Http/Controllers/Admin/VisaBulletinController.php:65
* @route '/dashboard/visa-bulletins/{visa_bulletin}/edit'
*/
edit.url = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_bulletin: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_bulletin: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_bulletin: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_bulletin: typeof args.visa_bulletin === 'object'
        ? args.visa_bulletin.id
        : args.visa_bulletin,
    }

    return edit.definition.url
            .replace('{visa_bulletin}', parsedArgs.visa_bulletin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::edit
* @see app/Http/Controllers/Admin/VisaBulletinController.php:65
* @route '/dashboard/visa-bulletins/{visa_bulletin}/edit'
*/
edit.get = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::edit
* @see app/Http/Controllers/Admin/VisaBulletinController.php:65
* @route '/dashboard/visa-bulletins/{visa_bulletin}/edit'
*/
edit.head = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::edit
* @see app/Http/Controllers/Admin/VisaBulletinController.php:65
* @route '/dashboard/visa-bulletins/{visa_bulletin}/edit'
*/
const editForm = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::edit
* @see app/Http/Controllers/Admin/VisaBulletinController.php:65
* @route '/dashboard/visa-bulletins/{visa_bulletin}/edit'
*/
editForm.get = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::edit
* @see app/Http/Controllers/Admin/VisaBulletinController.php:65
* @route '/dashboard/visa-bulletins/{visa_bulletin}/edit'
*/
editForm.head = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\VisaBulletinController::update
* @see app/Http/Controllers/Admin/VisaBulletinController.php:72
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
export const update = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/visa-bulletins/{visa_bulletin}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::update
* @see app/Http/Controllers/Admin/VisaBulletinController.php:72
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
update.url = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_bulletin: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_bulletin: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_bulletin: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_bulletin: typeof args.visa_bulletin === 'object'
        ? args.visa_bulletin.id
        : args.visa_bulletin,
    }

    return update.definition.url
            .replace('{visa_bulletin}', parsedArgs.visa_bulletin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::update
* @see app/Http/Controllers/Admin/VisaBulletinController.php:72
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
update.put = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::update
* @see app/Http/Controllers/Admin/VisaBulletinController.php:72
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
update.patch = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::update
* @see app/Http/Controllers/Admin/VisaBulletinController.php:72
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
const updateForm = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::update
* @see app/Http/Controllers/Admin/VisaBulletinController.php:72
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
updateForm.put = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::update
* @see app/Http/Controllers/Admin/VisaBulletinController.php:72
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
updateForm.patch = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\VisaBulletinController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinController.php:99
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
export const destroy = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/visa-bulletins/{visa_bulletin}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinController.php:99
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
destroy.url = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_bulletin: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_bulletin: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_bulletin: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_bulletin: typeof args.visa_bulletin === 'object'
        ? args.visa_bulletin.id
        : args.visa_bulletin,
    }

    return destroy.definition.url
            .replace('{visa_bulletin}', parsedArgs.visa_bulletin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinController.php:99
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
destroy.delete = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinController.php:99
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
const destroyForm = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinController.php:99
* @route '/dashboard/visa-bulletins/{visa_bulletin}'
*/
destroyForm.delete = (args: { visa_bulletin: number | { id: number } } | [visa_bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const visaBulletins = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default visaBulletins