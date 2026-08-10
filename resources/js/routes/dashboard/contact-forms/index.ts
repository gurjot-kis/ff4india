import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:16
* @route '/dashboard/contact-forms'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact-forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:16
* @route '/dashboard/contact-forms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:16
* @route '/dashboard/contact-forms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:16
* @route '/dashboard/contact-forms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:16
* @route '/dashboard/contact-forms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:16
* @route '/dashboard/contact-forms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:16
* @route '/dashboard/contact-forms'
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
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:45
* @route '/dashboard/contact-forms/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact-forms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:45
* @route '/dashboard/contact-forms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:45
* @route '/dashboard/contact-forms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:45
* @route '/dashboard/contact-forms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:45
* @route '/dashboard/contact-forms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:45
* @route '/dashboard/contact-forms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:45
* @route '/dashboard/contact-forms/create'
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
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:53
* @route '/dashboard/contact-forms'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/contact-forms',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:53
* @route '/dashboard/contact-forms'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:53
* @route '/dashboard/contact-forms'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:53
* @route '/dashboard/contact-forms'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:53
* @route '/dashboard/contact-forms'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:69
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
export const edit = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact-forms/{contact_form}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:69
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
edit.url = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact_form: args }
    }

    if (Array.isArray(args)) {
        args = {
            contact_form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contact_form: args.contact_form,
    }

    return edit.definition.url
            .replace('{contact_form}', parsedArgs.contact_form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:69
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
edit.get = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:69
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
edit.head = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:69
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
const editForm = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:69
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
editForm.get = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:69
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
editForm.head = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:77
* @route '/dashboard/contact-forms/{contact_form}'
*/
export const update = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/contact-forms/{contact_form}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:77
* @route '/dashboard/contact-forms/{contact_form}'
*/
update.url = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact_form: args }
    }

    if (Array.isArray(args)) {
        args = {
            contact_form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contact_form: args.contact_form,
    }

    return update.definition.url
            .replace('{contact_form}', parsedArgs.contact_form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:77
* @route '/dashboard/contact-forms/{contact_form}'
*/
update.put = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:77
* @route '/dashboard/contact-forms/{contact_form}'
*/
update.patch = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:77
* @route '/dashboard/contact-forms/{contact_form}'
*/
const updateForm = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:77
* @route '/dashboard/contact-forms/{contact_form}'
*/
updateForm.put = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:77
* @route '/dashboard/contact-forms/{contact_form}'
*/
updateForm.patch = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/{contact_form}'
*/
export const destroy = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/contact-forms/{contact_form}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/{contact_form}'
*/
destroy.url = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact_form: args }
    }

    if (Array.isArray(args)) {
        args = {
            contact_form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contact_form: args.contact_form,
    }

    return destroy.definition.url
            .replace('{contact_form}', parsedArgs.contact_form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/{contact_form}'
*/
destroy.delete = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/{contact_form}'
*/
const destroyForm = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/{contact_form}'
*/
destroyForm.delete = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const contactForms = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default contactForms