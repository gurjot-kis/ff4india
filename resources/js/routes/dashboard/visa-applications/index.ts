import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::index
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:18
* @route '/dashboard/visa-applications'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-applications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::index
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:18
* @route '/dashboard/visa-applications'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::index
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:18
* @route '/dashboard/visa-applications'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::index
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:18
* @route '/dashboard/visa-applications'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::index
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:18
* @route '/dashboard/visa-applications'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::index
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:18
* @route '/dashboard/visa-applications'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::index
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:18
* @route '/dashboard/visa-applications'
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::create
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:37
* @route '/dashboard/visa-applications/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-applications/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::create
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:37
* @route '/dashboard/visa-applications/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::create
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:37
* @route '/dashboard/visa-applications/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::create
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:37
* @route '/dashboard/visa-applications/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::create
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:37
* @route '/dashboard/visa-applications/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::create
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:37
* @route '/dashboard/visa-applications/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::create
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:37
* @route '/dashboard/visa-applications/create'
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::store
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:42
* @route '/dashboard/visa-applications'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/visa-applications',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::store
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:42
* @route '/dashboard/visa-applications'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::store
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:42
* @route '/dashboard/visa-applications'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::store
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:42
* @route '/dashboard/visa-applications'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::store
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:42
* @route '/dashboard/visa-applications'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::edit
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:87
* @route '/dashboard/visa-applications/{visa_application}/edit'
*/
export const edit = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-applications/{visa_application}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::edit
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:87
* @route '/dashboard/visa-applications/{visa_application}/edit'
*/
edit.url = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_application: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_application: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_application: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_application: typeof args.visa_application === 'object'
        ? args.visa_application.id
        : args.visa_application,
    }

    return edit.definition.url
            .replace('{visa_application}', parsedArgs.visa_application.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::edit
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:87
* @route '/dashboard/visa-applications/{visa_application}/edit'
*/
edit.get = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::edit
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:87
* @route '/dashboard/visa-applications/{visa_application}/edit'
*/
edit.head = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::edit
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:87
* @route '/dashboard/visa-applications/{visa_application}/edit'
*/
const editForm = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::edit
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:87
* @route '/dashboard/visa-applications/{visa_application}/edit'
*/
editForm.get = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::edit
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:87
* @route '/dashboard/visa-applications/{visa_application}/edit'
*/
editForm.head = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::update
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:97
* @route '/dashboard/visa-applications/{visa_application}'
*/
export const update = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/visa-applications/{visa_application}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::update
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:97
* @route '/dashboard/visa-applications/{visa_application}'
*/
update.url = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_application: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_application: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_application: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_application: typeof args.visa_application === 'object'
        ? args.visa_application.id
        : args.visa_application,
    }

    return update.definition.url
            .replace('{visa_application}', parsedArgs.visa_application.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::update
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:97
* @route '/dashboard/visa-applications/{visa_application}'
*/
update.put = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::update
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:97
* @route '/dashboard/visa-applications/{visa_application}'
*/
update.patch = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::update
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:97
* @route '/dashboard/visa-applications/{visa_application}'
*/
const updateForm = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::update
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:97
* @route '/dashboard/visa-applications/{visa_application}'
*/
updateForm.put = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::update
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:97
* @route '/dashboard/visa-applications/{visa_application}'
*/
updateForm.patch = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:142
* @route '/dashboard/visa-applications/{visa_application}'
*/
export const destroy = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/visa-applications/{visa_application}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:142
* @route '/dashboard/visa-applications/{visa_application}'
*/
destroy.url = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visa_application: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { visa_application: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            visa_application: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visa_application: typeof args.visa_application === 'object'
        ? args.visa_application.id
        : args.visa_application,
    }

    return destroy.definition.url
            .replace('{visa_application}', parsedArgs.visa_application.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:142
* @route '/dashboard/visa-applications/{visa_application}'
*/
destroy.delete = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:142
* @route '/dashboard/visa-applications/{visa_application}'
*/
const destroyForm = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::destroy
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:142
* @route '/dashboard/visa-applications/{visa_application}'
*/
destroyForm.delete = (args: { visa_application: number | { id: number } } | [visa_application: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::excel
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:187
* @route '/dashboard/visa-applications/export/excel'
*/
export const excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

excel.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-applications/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::excel
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:187
* @route '/dashboard/visa-applications/export/excel'
*/
excel.url = (options?: RouteQueryOptions) => {
    return excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::excel
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:187
* @route '/dashboard/visa-applications/export/excel'
*/
excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::excel
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:187
* @route '/dashboard/visa-applications/export/excel'
*/
excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: excel.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::excel
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:187
* @route '/dashboard/visa-applications/export/excel'
*/
const excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::excel
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:187
* @route '/dashboard/visa-applications/export/excel'
*/
excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::excel
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:187
* @route '/dashboard/visa-applications/export/excel'
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::csv
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:195
* @route '/dashboard/visa-applications/export/csv'
*/
export const csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

csv.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-applications/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::csv
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:195
* @route '/dashboard/visa-applications/export/csv'
*/
csv.url = (options?: RouteQueryOptions) => {
    return csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::csv
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:195
* @route '/dashboard/visa-applications/export/csv'
*/
csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::csv
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:195
* @route '/dashboard/visa-applications/export/csv'
*/
csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: csv.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::csv
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:195
* @route '/dashboard/visa-applications/export/csv'
*/
const csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::csv
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:195
* @route '/dashboard/visa-applications/export/csv'
*/
csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::csv
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:195
* @route '/dashboard/visa-applications/export/csv'
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:204
* @route '/dashboard/visa-applications/export/pdf'
*/
export const pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-applications/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:204
* @route '/dashboard/visa-applications/export/pdf'
*/
pdf.url = (options?: RouteQueryOptions) => {
    return pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:204
* @route '/dashboard/visa-applications/export/pdf'
*/
pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:204
* @route '/dashboard/visa-applications/export/pdf'
*/
pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:204
* @route '/dashboard/visa-applications/export/pdf'
*/
const pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:204
* @route '/dashboard/visa-applications/export/pdf'
*/
pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::pdf
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:204
* @route '/dashboard/visa-applications/export/pdf'
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
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::print
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:216
* @route '/dashboard/visa-applications/print'
*/
export const print = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

print.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-applications/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::print
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:216
* @route '/dashboard/visa-applications/print'
*/
print.url = (options?: RouteQueryOptions) => {
    return print.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::print
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:216
* @route '/dashboard/visa-applications/print'
*/
print.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::print
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:216
* @route '/dashboard/visa-applications/print'
*/
print.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: print.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::print
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:216
* @route '/dashboard/visa-applications/print'
*/
const printForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::print
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:216
* @route '/dashboard/visa-applications/print'
*/
printForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinApplicationController::print
* @see app/Http/Controllers/Admin/VisaBulletinApplicationController.php:216
* @route '/dashboard/visa-applications/print'
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

const visaApplications = {
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

export default visaApplications