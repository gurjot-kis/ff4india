import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::index
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:18
* @route '/dashboard/visa-preferences'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::index
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:18
* @route '/dashboard/visa-preferences'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::index
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:18
* @route '/dashboard/visa-preferences'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::index
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:18
* @route '/dashboard/visa-preferences'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::index
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:18
* @route '/dashboard/visa-preferences'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::index
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:18
* @route '/dashboard/visa-preferences'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::index
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:18
* @route '/dashboard/visa-preferences'
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
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::create
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:38
* @route '/dashboard/visa-preferences/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::create
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:38
* @route '/dashboard/visa-preferences/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::create
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:38
* @route '/dashboard/visa-preferences/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::create
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:38
* @route '/dashboard/visa-preferences/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::create
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:38
* @route '/dashboard/visa-preferences/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::create
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:38
* @route '/dashboard/visa-preferences/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::create
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:38
* @route '/dashboard/visa-preferences/create'
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
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::store
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:43
* @route '/dashboard/visa-preferences'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/visa-preferences',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::store
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:43
* @route '/dashboard/visa-preferences'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::store
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:43
* @route '/dashboard/visa-preferences'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::store
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:43
* @route '/dashboard/visa-preferences'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::store
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:43
* @route '/dashboard/visa-preferences'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::edit
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:88
* @route '/dashboard/visa-preferences/{visa_preference}/edit'
*/
export const edit = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/{visa_preference}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::edit
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:88
* @route '/dashboard/visa-preferences/{visa_preference}/edit'
*/
edit.url = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_preference: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_preference: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_preference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_preference: typeof args.visa_preference === 'object'
        ? args.visa_preference.id
        : args.visa_preference,
    }

    return edit.definition.url
            .replace('{visa_preference}', parsedArgs.visa_preference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::edit
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:88
* @route '/dashboard/visa-preferences/{visa_preference}/edit'
*/
edit.get = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::edit
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:88
* @route '/dashboard/visa-preferences/{visa_preference}/edit'
*/
edit.head = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::edit
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:88
* @route '/dashboard/visa-preferences/{visa_preference}/edit'
*/
const editForm = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::edit
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:88
* @route '/dashboard/visa-preferences/{visa_preference}/edit'
*/
editForm.get = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::edit
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:88
* @route '/dashboard/visa-preferences/{visa_preference}/edit'
*/
editForm.head = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::update
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:98
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
export const update = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/visa-preferences/{visa_preference}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::update
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:98
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
update.url = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_preference: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_preference: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_preference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_preference: typeof args.visa_preference === 'object'
        ? args.visa_preference.id
        : args.visa_preference,
    }

    return update.definition.url
            .replace('{visa_preference}', parsedArgs.visa_preference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::update
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:98
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
update.put = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::update
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:98
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
update.patch = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::update
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:98
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
const updateForm = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::update
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:98
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
updateForm.put = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::update
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:98
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
updateForm.patch = (args: { visa_preference: number | { id: number } } | [visa_preference: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:143
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
export const destroy = (args: { visa_preference: string | number } | [visa_preference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/visa-preferences/{visa_preference}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:143
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
destroy.url = (args: { visa_preference: string | number } | [visa_preference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_preference: args }
    }

    if (Array.isArray(args)) {
        args = {
            visa_preference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_preference: args.visa_preference,
    }

    return destroy.definition.url
            .replace('{visa_preference}', parsedArgs.visa_preference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:143
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
destroy.delete = (args: { visa_preference: string | number } | [visa_preference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:143
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
const destroyForm = (args: { visa_preference: string | number } | [visa_preference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:143
* @route '/dashboard/visa-preferences/{visa_preference}'
*/
destroyForm.delete = (args: { visa_preference: string | number } | [visa_preference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::excel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
export const excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

excel.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::excel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
excel.url = (options?: RouteQueryOptions) => {
    return excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::excel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::excel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: excel.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::excel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
const excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::excel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::excel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
excelForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

excel.form = excelForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::csv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
export const csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

csv.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::csv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
csv.url = (options?: RouteQueryOptions) => {
    return csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::csv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::csv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: csv.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::csv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
const csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::csv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::csv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
csvForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

csv.form = csvForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
export const pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
pdf.url = (options?: RouteQueryOptions) => {
    return pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
const pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
pdfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pdf.form = pdfForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::print
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:217
* @route '/dashboard/visa-preferences/print'
*/
export const print = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

print.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::print
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:217
* @route '/dashboard/visa-preferences/print'
*/
print.url = (options?: RouteQueryOptions) => {
    return print.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::print
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:217
* @route '/dashboard/visa-preferences/print'
*/
print.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::print
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:217
* @route '/dashboard/visa-preferences/print'
*/
print.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: print.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::print
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:217
* @route '/dashboard/visa-preferences/print'
*/
const printForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::print
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:217
* @route '/dashboard/visa-preferences/print'
*/
printForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::print
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:217
* @route '/dashboard/visa-preferences/print'
*/
printForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

print.form = printForm

const visaPreferences = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    excel: Object.assign(excel, excel),
    csv: Object.assign(csv, csv),
    pdf: Object.assign(pdf, pdf),
    print: Object.assign(print, print),
}

export default visaPreferences