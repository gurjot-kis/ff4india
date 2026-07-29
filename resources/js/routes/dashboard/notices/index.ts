import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\NoticeController::index
* @see app/Http/Controllers/Admin/NoticeController.php:17
* @route '/dashboard/notices'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/notices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NoticeController::index
* @see app/Http/Controllers/Admin/NoticeController.php:17
* @route '/dashboard/notices'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NoticeController::index
* @see app/Http/Controllers/Admin/NoticeController.php:17
* @route '/dashboard/notices'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::index
* @see app/Http/Controllers/Admin/NoticeController.php:17
* @route '/dashboard/notices'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::index
* @see app/Http/Controllers/Admin/NoticeController.php:17
* @route '/dashboard/notices'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::index
* @see app/Http/Controllers/Admin/NoticeController.php:17
* @route '/dashboard/notices'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::index
* @see app/Http/Controllers/Admin/NoticeController.php:17
* @route '/dashboard/notices'
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
* @see \App\Http\Controllers\Admin\NoticeController::create
* @see app/Http/Controllers/Admin/NoticeController.php:40
* @route '/dashboard/notices/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/notices/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NoticeController::create
* @see app/Http/Controllers/Admin/NoticeController.php:40
* @route '/dashboard/notices/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NoticeController::create
* @see app/Http/Controllers/Admin/NoticeController.php:40
* @route '/dashboard/notices/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::create
* @see app/Http/Controllers/Admin/NoticeController.php:40
* @route '/dashboard/notices/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::create
* @see app/Http/Controllers/Admin/NoticeController.php:40
* @route '/dashboard/notices/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::create
* @see app/Http/Controllers/Admin/NoticeController.php:40
* @route '/dashboard/notices/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::create
* @see app/Http/Controllers/Admin/NoticeController.php:40
* @route '/dashboard/notices/create'
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
* @see \App\Http\Controllers\Admin\NoticeController::store
* @see app/Http/Controllers/Admin/NoticeController.php:48
* @route '/dashboard/notices'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/notices',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\NoticeController::store
* @see app/Http/Controllers/Admin/NoticeController.php:48
* @route '/dashboard/notices'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NoticeController::store
* @see app/Http/Controllers/Admin/NoticeController.php:48
* @route '/dashboard/notices'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::store
* @see app/Http/Controllers/Admin/NoticeController.php:48
* @route '/dashboard/notices'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::store
* @see app/Http/Controllers/Admin/NoticeController.php:48
* @route '/dashboard/notices'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\NoticeController::edit
* @see app/Http/Controllers/Admin/NoticeController.php:72
* @route '/dashboard/notices/{notice}/edit'
*/
export const edit = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/notices/{notice}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NoticeController::edit
* @see app/Http/Controllers/Admin/NoticeController.php:72
* @route '/dashboard/notices/{notice}/edit'
*/
edit.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notice: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notice: typeof args.notice === 'object'
        ? args.notice.id
        : args.notice,
    }

    return edit.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NoticeController::edit
* @see app/Http/Controllers/Admin/NoticeController.php:72
* @route '/dashboard/notices/{notice}/edit'
*/
edit.get = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::edit
* @see app/Http/Controllers/Admin/NoticeController.php:72
* @route '/dashboard/notices/{notice}/edit'
*/
edit.head = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::edit
* @see app/Http/Controllers/Admin/NoticeController.php:72
* @route '/dashboard/notices/{notice}/edit'
*/
const editForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::edit
* @see app/Http/Controllers/Admin/NoticeController.php:72
* @route '/dashboard/notices/{notice}/edit'
*/
editForm.get = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::edit
* @see app/Http/Controllers/Admin/NoticeController.php:72
* @route '/dashboard/notices/{notice}/edit'
*/
editForm.head = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\NoticeController::update
* @see app/Http/Controllers/Admin/NoticeController.php:82
* @route '/dashboard/notices/{notice}'
*/
export const update = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/notices/{notice}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\NoticeController::update
* @see app/Http/Controllers/Admin/NoticeController.php:82
* @route '/dashboard/notices/{notice}'
*/
update.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notice: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notice: typeof args.notice === 'object'
        ? args.notice.id
        : args.notice,
    }

    return update.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NoticeController::update
* @see app/Http/Controllers/Admin/NoticeController.php:82
* @route '/dashboard/notices/{notice}'
*/
update.put = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::update
* @see app/Http/Controllers/Admin/NoticeController.php:82
* @route '/dashboard/notices/{notice}'
*/
update.patch = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::update
* @see app/Http/Controllers/Admin/NoticeController.php:82
* @route '/dashboard/notices/{notice}'
*/
const updateForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::update
* @see app/Http/Controllers/Admin/NoticeController.php:82
* @route '/dashboard/notices/{notice}'
*/
updateForm.put = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::update
* @see app/Http/Controllers/Admin/NoticeController.php:82
* @route '/dashboard/notices/{notice}'
*/
updateForm.patch = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\NoticeController::destroy
* @see app/Http/Controllers/Admin/NoticeController.php:106
* @route '/dashboard/notices/{notice}'
*/
export const destroy = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/notices/{notice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\NoticeController::destroy
* @see app/Http/Controllers/Admin/NoticeController.php:106
* @route '/dashboard/notices/{notice}'
*/
destroy.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notice: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notice: typeof args.notice === 'object'
        ? args.notice.id
        : args.notice,
    }

    return destroy.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NoticeController::destroy
* @see app/Http/Controllers/Admin/NoticeController.php:106
* @route '/dashboard/notices/{notice}'
*/
destroy.delete = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::destroy
* @see app/Http/Controllers/Admin/NoticeController.php:106
* @route '/dashboard/notices/{notice}'
*/
const destroyForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\NoticeController::destroy
* @see app/Http/Controllers/Admin/NoticeController.php:106
* @route '/dashboard/notices/{notice}'
*/
destroyForm.delete = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const notices = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default notices