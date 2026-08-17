import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::index
* @see app/Http/Controllers/Admin/RecentApprovalController.php:17
* @route '/dashboard/recent-approvals'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/recent-approvals',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::index
* @see app/Http/Controllers/Admin/RecentApprovalController.php:17
* @route '/dashboard/recent-approvals'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::index
* @see app/Http/Controllers/Admin/RecentApprovalController.php:17
* @route '/dashboard/recent-approvals'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::index
* @see app/Http/Controllers/Admin/RecentApprovalController.php:17
* @route '/dashboard/recent-approvals'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::index
* @see app/Http/Controllers/Admin/RecentApprovalController.php:17
* @route '/dashboard/recent-approvals'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::index
* @see app/Http/Controllers/Admin/RecentApprovalController.php:17
* @route '/dashboard/recent-approvals'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::index
* @see app/Http/Controllers/Admin/RecentApprovalController.php:17
* @route '/dashboard/recent-approvals'
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::create
* @see app/Http/Controllers/Admin/RecentApprovalController.php:41
* @route '/dashboard/recent-approvals/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/recent-approvals/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::create
* @see app/Http/Controllers/Admin/RecentApprovalController.php:41
* @route '/dashboard/recent-approvals/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::create
* @see app/Http/Controllers/Admin/RecentApprovalController.php:41
* @route '/dashboard/recent-approvals/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::create
* @see app/Http/Controllers/Admin/RecentApprovalController.php:41
* @route '/dashboard/recent-approvals/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::create
* @see app/Http/Controllers/Admin/RecentApprovalController.php:41
* @route '/dashboard/recent-approvals/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::create
* @see app/Http/Controllers/Admin/RecentApprovalController.php:41
* @route '/dashboard/recent-approvals/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::create
* @see app/Http/Controllers/Admin/RecentApprovalController.php:41
* @route '/dashboard/recent-approvals/create'
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::store
* @see app/Http/Controllers/Admin/RecentApprovalController.php:46
* @route '/dashboard/recent-approvals'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/recent-approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::store
* @see app/Http/Controllers/Admin/RecentApprovalController.php:46
* @route '/dashboard/recent-approvals'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::store
* @see app/Http/Controllers/Admin/RecentApprovalController.php:46
* @route '/dashboard/recent-approvals'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::store
* @see app/Http/Controllers/Admin/RecentApprovalController.php:46
* @route '/dashboard/recent-approvals'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::store
* @see app/Http/Controllers/Admin/RecentApprovalController.php:46
* @route '/dashboard/recent-approvals'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::edit
* @see app/Http/Controllers/Admin/RecentApprovalController.php:70
* @route '/dashboard/recent-approvals/{recent_approval}/edit'
*/
export const edit = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/recent-approvals/{recent_approval}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::edit
* @see app/Http/Controllers/Admin/RecentApprovalController.php:70
* @route '/dashboard/recent-approvals/{recent_approval}/edit'
*/
edit.url = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recent_approval: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { recent_approval: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            recent_approval: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        recent_approval: typeof args.recent_approval === 'object'
        ? args.recent_approval.id
        : args.recent_approval,
    }

    return edit.definition.url
            .replace('{recent_approval}', parsedArgs.recent_approval.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::edit
* @see app/Http/Controllers/Admin/RecentApprovalController.php:70
* @route '/dashboard/recent-approvals/{recent_approval}/edit'
*/
edit.get = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::edit
* @see app/Http/Controllers/Admin/RecentApprovalController.php:70
* @route '/dashboard/recent-approvals/{recent_approval}/edit'
*/
edit.head = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::edit
* @see app/Http/Controllers/Admin/RecentApprovalController.php:70
* @route '/dashboard/recent-approvals/{recent_approval}/edit'
*/
const editForm = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::edit
* @see app/Http/Controllers/Admin/RecentApprovalController.php:70
* @route '/dashboard/recent-approvals/{recent_approval}/edit'
*/
editForm.get = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::edit
* @see app/Http/Controllers/Admin/RecentApprovalController.php:70
* @route '/dashboard/recent-approvals/{recent_approval}/edit'
*/
editForm.head = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::update
* @see app/Http/Controllers/Admin/RecentApprovalController.php:80
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
export const update = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/recent-approvals/{recent_approval}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::update
* @see app/Http/Controllers/Admin/RecentApprovalController.php:80
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
update.url = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recent_approval: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { recent_approval: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            recent_approval: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        recent_approval: typeof args.recent_approval === 'object'
        ? args.recent_approval.id
        : args.recent_approval,
    }

    return update.definition.url
            .replace('{recent_approval}', parsedArgs.recent_approval.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::update
* @see app/Http/Controllers/Admin/RecentApprovalController.php:80
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
update.put = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::update
* @see app/Http/Controllers/Admin/RecentApprovalController.php:80
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
update.patch = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::update
* @see app/Http/Controllers/Admin/RecentApprovalController.php:80
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
const updateForm = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::update
* @see app/Http/Controllers/Admin/RecentApprovalController.php:80
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
updateForm.put = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::update
* @see app/Http/Controllers/Admin/RecentApprovalController.php:80
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
updateForm.patch = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::destroy
* @see app/Http/Controllers/Admin/RecentApprovalController.php:111
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
export const destroy = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/recent-approvals/{recent_approval}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::destroy
* @see app/Http/Controllers/Admin/RecentApprovalController.php:111
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
destroy.url = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recent_approval: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { recent_approval: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            recent_approval: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        recent_approval: typeof args.recent_approval === 'object'
        ? args.recent_approval.id
        : args.recent_approval,
    }

    return destroy.definition.url
            .replace('{recent_approval}', parsedArgs.recent_approval.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::destroy
* @see app/Http/Controllers/Admin/RecentApprovalController.php:111
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
destroy.delete = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::destroy
* @see app/Http/Controllers/Admin/RecentApprovalController.php:111
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
const destroyForm = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::destroy
* @see app/Http/Controllers/Admin/RecentApprovalController.php:111
* @route '/dashboard/recent-approvals/{recent_approval}'
*/
destroyForm.delete = (args: { recent_approval: number | { id: number } } | [recent_approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::excel
* @see app/Http/Controllers/Admin/RecentApprovalController.php:127
* @route '/dashboard/recent-approvals/export/excel'
*/
export const excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

excel.definition = {
    methods: ["get","head"],
    url: '/dashboard/recent-approvals/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::excel
* @see app/Http/Controllers/Admin/RecentApprovalController.php:127
* @route '/dashboard/recent-approvals/export/excel'
*/
excel.url = (options?: RouteQueryOptions) => {
    return excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::excel
* @see app/Http/Controllers/Admin/RecentApprovalController.php:127
* @route '/dashboard/recent-approvals/export/excel'
*/
excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::excel
* @see app/Http/Controllers/Admin/RecentApprovalController.php:127
* @route '/dashboard/recent-approvals/export/excel'
*/
excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: excel.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::excel
* @see app/Http/Controllers/Admin/RecentApprovalController.php:127
* @route '/dashboard/recent-approvals/export/excel'
*/
const excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::excel
* @see app/Http/Controllers/Admin/RecentApprovalController.php:127
* @route '/dashboard/recent-approvals/export/excel'
*/
excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::excel
* @see app/Http/Controllers/Admin/RecentApprovalController.php:127
* @route '/dashboard/recent-approvals/export/excel'
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::csv
* @see app/Http/Controllers/Admin/RecentApprovalController.php:135
* @route '/dashboard/recent-approvals/export/csv'
*/
export const csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

csv.definition = {
    methods: ["get","head"],
    url: '/dashboard/recent-approvals/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::csv
* @see app/Http/Controllers/Admin/RecentApprovalController.php:135
* @route '/dashboard/recent-approvals/export/csv'
*/
csv.url = (options?: RouteQueryOptions) => {
    return csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::csv
* @see app/Http/Controllers/Admin/RecentApprovalController.php:135
* @route '/dashboard/recent-approvals/export/csv'
*/
csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::csv
* @see app/Http/Controllers/Admin/RecentApprovalController.php:135
* @route '/dashboard/recent-approvals/export/csv'
*/
csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: csv.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::csv
* @see app/Http/Controllers/Admin/RecentApprovalController.php:135
* @route '/dashboard/recent-approvals/export/csv'
*/
const csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::csv
* @see app/Http/Controllers/Admin/RecentApprovalController.php:135
* @route '/dashboard/recent-approvals/export/csv'
*/
csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::csv
* @see app/Http/Controllers/Admin/RecentApprovalController.php:135
* @route '/dashboard/recent-approvals/export/csv'
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::pdf
* @see app/Http/Controllers/Admin/RecentApprovalController.php:144
* @route '/dashboard/recent-approvals/export/pdf'
*/
export const pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/dashboard/recent-approvals/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::pdf
* @see app/Http/Controllers/Admin/RecentApprovalController.php:144
* @route '/dashboard/recent-approvals/export/pdf'
*/
pdf.url = (options?: RouteQueryOptions) => {
    return pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::pdf
* @see app/Http/Controllers/Admin/RecentApprovalController.php:144
* @route '/dashboard/recent-approvals/export/pdf'
*/
pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::pdf
* @see app/Http/Controllers/Admin/RecentApprovalController.php:144
* @route '/dashboard/recent-approvals/export/pdf'
*/
pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::pdf
* @see app/Http/Controllers/Admin/RecentApprovalController.php:144
* @route '/dashboard/recent-approvals/export/pdf'
*/
const pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::pdf
* @see app/Http/Controllers/Admin/RecentApprovalController.php:144
* @route '/dashboard/recent-approvals/export/pdf'
*/
pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::pdf
* @see app/Http/Controllers/Admin/RecentApprovalController.php:144
* @route '/dashboard/recent-approvals/export/pdf'
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
* @see \App\Http\Controllers\Admin\RecentApprovalController::print
* @see app/Http/Controllers/Admin/RecentApprovalController.php:156
* @route '/dashboard/recent-approvals/print'
*/
export const print = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

print.definition = {
    methods: ["get","head"],
    url: '/dashboard/recent-approvals/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::print
* @see app/Http/Controllers/Admin/RecentApprovalController.php:156
* @route '/dashboard/recent-approvals/print'
*/
print.url = (options?: RouteQueryOptions) => {
    return print.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::print
* @see app/Http/Controllers/Admin/RecentApprovalController.php:156
* @route '/dashboard/recent-approvals/print'
*/
print.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::print
* @see app/Http/Controllers/Admin/RecentApprovalController.php:156
* @route '/dashboard/recent-approvals/print'
*/
print.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: print.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::print
* @see app/Http/Controllers/Admin/RecentApprovalController.php:156
* @route '/dashboard/recent-approvals/print'
*/
const printForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::print
* @see app/Http/Controllers/Admin/RecentApprovalController.php:156
* @route '/dashboard/recent-approvals/print'
*/
printForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\RecentApprovalController::print
* @see app/Http/Controllers/Admin/RecentApprovalController.php:156
* @route '/dashboard/recent-approvals/print'
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

const recentApprovals = {
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

export default recentApprovals