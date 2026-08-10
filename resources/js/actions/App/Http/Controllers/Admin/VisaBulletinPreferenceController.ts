import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportExcel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
export const exportExcel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(options),
    method: 'get',
})

exportExcel.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportExcel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
exportExcel.url = (options?: RouteQueryOptions) => {
    return exportExcel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportExcel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
exportExcel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportExcel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
exportExcel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportExcel.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportExcel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
const exportExcelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportExcel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportExcel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
exportExcelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportExcel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportExcel
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:188
* @route '/dashboard/visa-preferences/export/excel'
*/
exportExcelForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportExcel.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportExcel.form = exportExcelForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportCsv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
export const exportCsv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCsv.url(options),
    method: 'get',
})

exportCsv.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportCsv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
exportCsv.url = (options?: RouteQueryOptions) => {
    return exportCsv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportCsv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
exportCsv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCsv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportCsv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
exportCsv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportCsv.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportCsv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
const exportCsvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCsv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportCsv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
exportCsvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCsv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportCsv
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:196
* @route '/dashboard/visa-preferences/export/csv'
*/
exportCsvForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCsv.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportCsv.form = exportCsvForm

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportPdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
export const exportPdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(options),
    method: 'get',
})

exportPdf.definition = {
    methods: ["get","head"],
    url: '/dashboard/visa-preferences/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportPdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
exportPdf.url = (options?: RouteQueryOptions) => {
    return exportPdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportPdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
exportPdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportPdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
exportPdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportPdf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportPdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
const exportPdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportPdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
exportPdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\VisaBulletinPreferenceController::exportPdf
* @see app/Http/Controllers/Admin/VisaBulletinPreferenceController.php:205
* @route '/dashboard/visa-preferences/export/pdf'
*/
exportPdfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPdf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportPdf.form = exportPdfForm

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

const VisaBulletinPreferenceController = { index, create, store, edit, update, destroy, exportExcel, exportCsv, exportPdf, print }

export default VisaBulletinPreferenceController