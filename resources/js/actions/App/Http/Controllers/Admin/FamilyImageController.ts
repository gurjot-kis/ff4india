import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\FamilyImageController::index
* @see app/Http/Controllers/Admin/FamilyImageController.php:17
* @route '/dashboard/family-images'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/family-images',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::index
* @see app/Http/Controllers/Admin/FamilyImageController.php:17
* @route '/dashboard/family-images'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::index
* @see app/Http/Controllers/Admin/FamilyImageController.php:17
* @route '/dashboard/family-images'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::index
* @see app/Http/Controllers/Admin/FamilyImageController.php:17
* @route '/dashboard/family-images'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::index
* @see app/Http/Controllers/Admin/FamilyImageController.php:17
* @route '/dashboard/family-images'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::index
* @see app/Http/Controllers/Admin/FamilyImageController.php:17
* @route '/dashboard/family-images'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::index
* @see app/Http/Controllers/Admin/FamilyImageController.php:17
* @route '/dashboard/family-images'
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
* @see \App\Http\Controllers\Admin\FamilyImageController::create
* @see app/Http/Controllers/Admin/FamilyImageController.php:47
* @route '/dashboard/family-images/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/family-images/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::create
* @see app/Http/Controllers/Admin/FamilyImageController.php:47
* @route '/dashboard/family-images/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::create
* @see app/Http/Controllers/Admin/FamilyImageController.php:47
* @route '/dashboard/family-images/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::create
* @see app/Http/Controllers/Admin/FamilyImageController.php:47
* @route '/dashboard/family-images/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::create
* @see app/Http/Controllers/Admin/FamilyImageController.php:47
* @route '/dashboard/family-images/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::create
* @see app/Http/Controllers/Admin/FamilyImageController.php:47
* @route '/dashboard/family-images/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::create
* @see app/Http/Controllers/Admin/FamilyImageController.php:47
* @route '/dashboard/family-images/create'
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
* @see \App\Http\Controllers\Admin\FamilyImageController::store
* @see app/Http/Controllers/Admin/FamilyImageController.php:57
* @route '/dashboard/family-images'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/family-images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::store
* @see app/Http/Controllers/Admin/FamilyImageController.php:57
* @route '/dashboard/family-images'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::store
* @see app/Http/Controllers/Admin/FamilyImageController.php:57
* @route '/dashboard/family-images'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::store
* @see app/Http/Controllers/Admin/FamilyImageController.php:57
* @route '/dashboard/family-images'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::store
* @see app/Http/Controllers/Admin/FamilyImageController.php:57
* @route '/dashboard/family-images'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::edit
* @see app/Http/Controllers/Admin/FamilyImageController.php:108
* @route '/dashboard/family-images/{family_image}/edit'
*/
export const edit = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/family-images/{family_image}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::edit
* @see app/Http/Controllers/Admin/FamilyImageController.php:108
* @route '/dashboard/family-images/{family_image}/edit'
*/
edit.url = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { family_image: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { family_image: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            family_image: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        family_image: typeof args.family_image === 'object'
        ? args.family_image.id
        : args.family_image,
    }

    return edit.definition.url
            .replace('{family_image}', parsedArgs.family_image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::edit
* @see app/Http/Controllers/Admin/FamilyImageController.php:108
* @route '/dashboard/family-images/{family_image}/edit'
*/
edit.get = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::edit
* @see app/Http/Controllers/Admin/FamilyImageController.php:108
* @route '/dashboard/family-images/{family_image}/edit'
*/
edit.head = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::edit
* @see app/Http/Controllers/Admin/FamilyImageController.php:108
* @route '/dashboard/family-images/{family_image}/edit'
*/
const editForm = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::edit
* @see app/Http/Controllers/Admin/FamilyImageController.php:108
* @route '/dashboard/family-images/{family_image}/edit'
*/
editForm.get = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::edit
* @see app/Http/Controllers/Admin/FamilyImageController.php:108
* @route '/dashboard/family-images/{family_image}/edit'
*/
editForm.head = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\FamilyImageController::update
* @see app/Http/Controllers/Admin/FamilyImageController.php:121
* @route '/dashboard/family-images/{family_image}'
*/
export const update = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/family-images/{family_image}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::update
* @see app/Http/Controllers/Admin/FamilyImageController.php:121
* @route '/dashboard/family-images/{family_image}'
*/
update.url = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { family_image: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { family_image: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            family_image: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        family_image: typeof args.family_image === 'object'
        ? args.family_image.id
        : args.family_image,
    }

    return update.definition.url
            .replace('{family_image}', parsedArgs.family_image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::update
* @see app/Http/Controllers/Admin/FamilyImageController.php:121
* @route '/dashboard/family-images/{family_image}'
*/
update.put = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::update
* @see app/Http/Controllers/Admin/FamilyImageController.php:121
* @route '/dashboard/family-images/{family_image}'
*/
update.patch = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::update
* @see app/Http/Controllers/Admin/FamilyImageController.php:121
* @route '/dashboard/family-images/{family_image}'
*/
const updateForm = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::update
* @see app/Http/Controllers/Admin/FamilyImageController.php:121
* @route '/dashboard/family-images/{family_image}'
*/
updateForm.put = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::update
* @see app/Http/Controllers/Admin/FamilyImageController.php:121
* @route '/dashboard/family-images/{family_image}'
*/
updateForm.patch = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\FamilyImageController::destroy
* @see app/Http/Controllers/Admin/FamilyImageController.php:194
* @route '/dashboard/family-images/{family_image}'
*/
export const destroy = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/family-images/{family_image}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::destroy
* @see app/Http/Controllers/Admin/FamilyImageController.php:194
* @route '/dashboard/family-images/{family_image}'
*/
destroy.url = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { family_image: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { family_image: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            family_image: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        family_image: typeof args.family_image === 'object'
        ? args.family_image.id
        : args.family_image,
    }

    return destroy.definition.url
            .replace('{family_image}', parsedArgs.family_image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::destroy
* @see app/Http/Controllers/Admin/FamilyImageController.php:194
* @route '/dashboard/family-images/{family_image}'
*/
destroy.delete = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::destroy
* @see app/Http/Controllers/Admin/FamilyImageController.php:194
* @route '/dashboard/family-images/{family_image}'
*/
const destroyForm = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\FamilyImageController::destroy
* @see app/Http/Controllers/Admin/FamilyImageController.php:194
* @route '/dashboard/family-images/{family_image}'
*/
destroyForm.delete = (args: { family_image: number | { id: number } } | [family_image: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const FamilyImageController = { index, create, store, edit, update, destroy }

export default FamilyImageController