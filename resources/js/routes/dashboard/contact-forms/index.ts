import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:22
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
* @see app/Http/Controllers/Admin/ContactFormController.php:22
* @route '/dashboard/contact-forms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:22
* @route '/dashboard/contact-forms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:22
* @route '/dashboard/contact-forms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:22
* @route '/dashboard/contact-forms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:22
* @route '/dashboard/contact-forms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::index
* @see app/Http/Controllers/Admin/ContactFormController.php:22
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
* @see app/Http/Controllers/Admin/ContactFormController.php:99
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
* @see app/Http/Controllers/Admin/ContactFormController.php:99
* @route '/dashboard/contact-forms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:99
* @route '/dashboard/contact-forms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:99
* @route '/dashboard/contact-forms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:99
* @route '/dashboard/contact-forms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:99
* @route '/dashboard/contact-forms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::create
* @see app/Http/Controllers/Admin/ContactFormController.php:99
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
* @see app/Http/Controllers/Admin/ContactFormController.php:107
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
* @see app/Http/Controllers/Admin/ContactFormController.php:107
* @route '/dashboard/contact-forms'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:107
* @route '/dashboard/contact-forms'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:107
* @route '/dashboard/contact-forms'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::store
* @see app/Http/Controllers/Admin/ContactFormController.php:107
* @route '/dashboard/contact-forms'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:123
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
* @see app/Http/Controllers/Admin/ContactFormController.php:123
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
* @see app/Http/Controllers/Admin/ContactFormController.php:123
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
edit.get = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:123
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
edit.head = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:123
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
const editForm = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:123
* @route '/dashboard/contact-forms/{contact_form}/edit'
*/
editForm.get = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::edit
* @see app/Http/Controllers/Admin/ContactFormController.php:123
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
* @see app/Http/Controllers/Admin/ContactFormController.php:131
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
* @see app/Http/Controllers/Admin/ContactFormController.php:131
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
* @see app/Http/Controllers/Admin/ContactFormController.php:131
* @route '/dashboard/contact-forms/{contact_form}'
*/
update.put = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:131
* @route '/dashboard/contact-forms/{contact_form}'
*/
update.patch = (args: { contact_form: string | number } | [contact_form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::update
* @see app/Http/Controllers/Admin/ContactFormController.php:131
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
* @see app/Http/Controllers/Admin/ContactFormController.php:131
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
* @see app/Http/Controllers/Admin/ContactFormController.php:131
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
* @see app/Http/Controllers/Admin/ContactFormController.php:46
* @route '/dashboard/contact-forms/{contact_form}'
*/
export const destroy = (args: { contact_form: number | { id: number } } | [contact_form: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/contact-forms/{contact_form}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:46
* @route '/dashboard/contact-forms/{contact_form}'
*/
destroy.url = (args: { contact_form: number | { id: number } } | [contact_form: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact_form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { contact_form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            contact_form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contact_form: typeof args.contact_form === 'object'
        ? args.contact_form.id
        : args.contact_form,
    }

    return destroy.definition.url
            .replace('{contact_form}', parsedArgs.contact_form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:46
* @route '/dashboard/contact-forms/{contact_form}'
*/
destroy.delete = (args: { contact_form: number | { id: number } } | [contact_form: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::destroy
* @see app/Http/Controllers/Admin/ContactFormController.php:46
* @route '/dashboard/contact-forms/{contact_form}'
*/
const destroyForm = (args: { contact_form: number | { id: number } } | [contact_form: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/Admin/ContactFormController.php:46
* @route '/dashboard/contact-forms/{contact_form}'
*/
destroyForm.delete = (args: { contact_form: number | { id: number } } | [contact_form: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ContactFormController::excel
* @see app/Http/Controllers/Admin/ContactFormController.php:56
* @route '/dashboard/contact-forms/export/excel'
*/
export const excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

excel.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact-forms/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::excel
* @see app/Http/Controllers/Admin/ContactFormController.php:56
* @route '/dashboard/contact-forms/export/excel'
*/
excel.url = (options?: RouteQueryOptions) => {
    return excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::excel
* @see app/Http/Controllers/Admin/ContactFormController.php:56
* @route '/dashboard/contact-forms/export/excel'
*/
excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::excel
* @see app/Http/Controllers/Admin/ContactFormController.php:56
* @route '/dashboard/contact-forms/export/excel'
*/
excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: excel.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::excel
* @see app/Http/Controllers/Admin/ContactFormController.php:56
* @route '/dashboard/contact-forms/export/excel'
*/
const excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::excel
* @see app/Http/Controllers/Admin/ContactFormController.php:56
* @route '/dashboard/contact-forms/export/excel'
*/
excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::excel
* @see app/Http/Controllers/Admin/ContactFormController.php:56
* @route '/dashboard/contact-forms/export/excel'
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
* @see \App\Http\Controllers\Admin\ContactFormController::csv
* @see app/Http/Controllers/Admin/ContactFormController.php:64
* @route '/dashboard/contact-forms/export/csv'
*/
export const csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

csv.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact-forms/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::csv
* @see app/Http/Controllers/Admin/ContactFormController.php:64
* @route '/dashboard/contact-forms/export/csv'
*/
csv.url = (options?: RouteQueryOptions) => {
    return csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::csv
* @see app/Http/Controllers/Admin/ContactFormController.php:64
* @route '/dashboard/contact-forms/export/csv'
*/
csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::csv
* @see app/Http/Controllers/Admin/ContactFormController.php:64
* @route '/dashboard/contact-forms/export/csv'
*/
csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: csv.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::csv
* @see app/Http/Controllers/Admin/ContactFormController.php:64
* @route '/dashboard/contact-forms/export/csv'
*/
const csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::csv
* @see app/Http/Controllers/Admin/ContactFormController.php:64
* @route '/dashboard/contact-forms/export/csv'
*/
csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::csv
* @see app/Http/Controllers/Admin/ContactFormController.php:64
* @route '/dashboard/contact-forms/export/csv'
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
* @see \App\Http\Controllers\Admin\ContactFormController::pdf
* @see app/Http/Controllers/Admin/ContactFormController.php:73
* @route '/dashboard/contact-forms/export/pdf'
*/
export const pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact-forms/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::pdf
* @see app/Http/Controllers/Admin/ContactFormController.php:73
* @route '/dashboard/contact-forms/export/pdf'
*/
pdf.url = (options?: RouteQueryOptions) => {
    return pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::pdf
* @see app/Http/Controllers/Admin/ContactFormController.php:73
* @route '/dashboard/contact-forms/export/pdf'
*/
pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::pdf
* @see app/Http/Controllers/Admin/ContactFormController.php:73
* @route '/dashboard/contact-forms/export/pdf'
*/
pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::pdf
* @see app/Http/Controllers/Admin/ContactFormController.php:73
* @route '/dashboard/contact-forms/export/pdf'
*/
const pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::pdf
* @see app/Http/Controllers/Admin/ContactFormController.php:73
* @route '/dashboard/contact-forms/export/pdf'
*/
pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::pdf
* @see app/Http/Controllers/Admin/ContactFormController.php:73
* @route '/dashboard/contact-forms/export/pdf'
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
* @see \App\Http\Controllers\Admin\ContactFormController::print
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/print'
*/
export const print = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

print.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact-forms/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactFormController::print
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/print'
*/
print.url = (options?: RouteQueryOptions) => {
    return print.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactFormController::print
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/print'
*/
print.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::print
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/print'
*/
print.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: print.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::print
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/print'
*/
const printForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::print
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/print'
*/
printForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactFormController::print
* @see app/Http/Controllers/Admin/ContactFormController.php:85
* @route '/dashboard/contact-forms/print'
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

const contactForms = {
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

export default contactForms