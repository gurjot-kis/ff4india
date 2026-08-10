import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::index
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:13
* @route '/dashboard/emergency-broadcasts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/emergency-broadcasts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::index
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:13
* @route '/dashboard/emergency-broadcasts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::index
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:13
* @route '/dashboard/emergency-broadcasts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::index
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:13
* @route '/dashboard/emergency-broadcasts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::index
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:13
* @route '/dashboard/emergency-broadcasts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::index
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:13
* @route '/dashboard/emergency-broadcasts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::index
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:13
* @route '/dashboard/emergency-broadcasts'
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
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::create
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:33
* @route '/dashboard/emergency-broadcasts/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/emergency-broadcasts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::create
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:33
* @route '/dashboard/emergency-broadcasts/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::create
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:33
* @route '/dashboard/emergency-broadcasts/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::create
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:33
* @route '/dashboard/emergency-broadcasts/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::create
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:33
* @route '/dashboard/emergency-broadcasts/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::create
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:33
* @route '/dashboard/emergency-broadcasts/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::create
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:33
* @route '/dashboard/emergency-broadcasts/create'
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
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::store
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:38
* @route '/dashboard/emergency-broadcasts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/emergency-broadcasts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::store
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:38
* @route '/dashboard/emergency-broadcasts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::store
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:38
* @route '/dashboard/emergency-broadcasts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::store
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:38
* @route '/dashboard/emergency-broadcasts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::store
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:38
* @route '/dashboard/emergency-broadcasts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::edit
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:52
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit'
*/
export const edit = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::edit
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:52
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit'
*/
edit.url = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergency_broadcast: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { emergency_broadcast: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            emergency_broadcast: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        emergency_broadcast: typeof args.emergency_broadcast === 'object'
        ? args.emergency_broadcast.id
        : args.emergency_broadcast,
    }

    return edit.definition.url
            .replace('{emergency_broadcast}', parsedArgs.emergency_broadcast.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::edit
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:52
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit'
*/
edit.get = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::edit
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:52
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit'
*/
edit.head = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::edit
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:52
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit'
*/
const editForm = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::edit
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:52
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit'
*/
editForm.get = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::edit
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:52
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}/edit'
*/
editForm.head = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::update
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:59
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
export const update = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/emergency-broadcasts/{emergency_broadcast}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::update
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:59
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
update.url = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergency_broadcast: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { emergency_broadcast: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            emergency_broadcast: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        emergency_broadcast: typeof args.emergency_broadcast === 'object'
        ? args.emergency_broadcast.id
        : args.emergency_broadcast,
    }

    return update.definition.url
            .replace('{emergency_broadcast}', parsedArgs.emergency_broadcast.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::update
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:59
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
update.put = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::update
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:59
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
update.patch = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::update
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:59
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
const updateForm = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::update
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:59
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
updateForm.put = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::update
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:59
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
updateForm.patch = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::destroy
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:73
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
export const destroy = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/emergency-broadcasts/{emergency_broadcast}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::destroy
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:73
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
destroy.url = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergency_broadcast: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { emergency_broadcast: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            emergency_broadcast: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        emergency_broadcast: typeof args.emergency_broadcast === 'object'
        ? args.emergency_broadcast.id
        : args.emergency_broadcast,
    }

    return destroy.definition.url
            .replace('{emergency_broadcast}', parsedArgs.emergency_broadcast.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::destroy
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:73
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
destroy.delete = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::destroy
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:73
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
const destroyForm = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\EmergencyBroadcastController::destroy
* @see app/Http/Controllers/Admin/EmergencyBroadcastController.php:73
* @route '/dashboard/emergency-broadcasts/{emergency_broadcast}'
*/
destroyForm.delete = (args: { emergency_broadcast: number | { id: number } } | [emergency_broadcast: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const emergencyBroadcasts = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default emergencyBroadcasts