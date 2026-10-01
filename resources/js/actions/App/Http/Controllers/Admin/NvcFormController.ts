import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\NvcFormController::index
* @see app/Http/Controllers/Admin/NvcFormController.php:26
* @route '/dashboard/nvc-forms'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::index
* @see app/Http/Controllers/Admin/NvcFormController.php:26
* @route '/dashboard/nvc-forms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::index
* @see app/Http/Controllers/Admin/NvcFormController.php:26
* @route '/dashboard/nvc-forms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::index
* @see app/Http/Controllers/Admin/NvcFormController.php:26
* @route '/dashboard/nvc-forms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::index
* @see app/Http/Controllers/Admin/NvcFormController.php:26
* @route '/dashboard/nvc-forms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::index
* @see app/Http/Controllers/Admin/NvcFormController.php:26
* @route '/dashboard/nvc-forms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::index
* @see app/Http/Controllers/Admin/NvcFormController.php:26
* @route '/dashboard/nvc-forms'
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
* @see \App\Http\Controllers\Admin\NvcFormController::destroy
* @see app/Http/Controllers/Admin/NvcFormController.php:55
* @route '/dashboard/nvc-forms/{inquiry}'
*/
export const destroy = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/nvc-forms/{inquiry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::destroy
* @see app/Http/Controllers/Admin/NvcFormController.php:55
* @route '/dashboard/nvc-forms/{inquiry}'
*/
destroy.url = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inquiry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { inquiry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            inquiry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inquiry: typeof args.inquiry === 'object'
        ? args.inquiry.id
        : args.inquiry,
    }

    return destroy.definition.url
            .replace('{inquiry}', parsedArgs.inquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::destroy
* @see app/Http/Controllers/Admin/NvcFormController.php:55
* @route '/dashboard/nvc-forms/{inquiry}'
*/
destroy.delete = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::destroy
* @see app/Http/Controllers/Admin/NvcFormController.php:55
* @route '/dashboard/nvc-forms/{inquiry}'
*/
const destroyForm = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::destroy
* @see app/Http/Controllers/Admin/NvcFormController.php:55
* @route '/dashboard/nvc-forms/{inquiry}'
*/
destroyForm.delete = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\NvcFormController::exportExcel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
export const exportExcel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(options),
    method: 'get',
})

exportExcel.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportExcel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
exportExcel.url = (options?: RouteQueryOptions) => {
    return exportExcel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportExcel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
exportExcel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportExcel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
exportExcel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportExcel.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportExcel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
const exportExcelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportExcel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportExcel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
exportExcelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportExcel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportExcel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
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
* @see \App\Http\Controllers\Admin\NvcFormController::exportCsv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
export const exportCsv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCsv.url(options),
    method: 'get',
})

exportCsv.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportCsv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
exportCsv.url = (options?: RouteQueryOptions) => {
    return exportCsv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportCsv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
exportCsv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCsv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportCsv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
exportCsv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportCsv.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportCsv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
const exportCsvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCsv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportCsv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
exportCsvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCsv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportCsv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
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
* @see \App\Http\Controllers\Admin\NvcFormController::exportPdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
export const exportPdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(options),
    method: 'get',
})

exportPdf.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportPdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
exportPdf.url = (options?: RouteQueryOptions) => {
    return exportPdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportPdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
exportPdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportPdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
exportPdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportPdf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportPdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
const exportPdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportPdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
exportPdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::exportPdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
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
* @see \App\Http\Controllers\Admin\NvcFormController::print
* @see app/Http/Controllers/Admin/NvcFormController.php:105
* @route '/dashboard/nvc-forms/print'
*/
export const print = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

print.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::print
* @see app/Http/Controllers/Admin/NvcFormController.php:105
* @route '/dashboard/nvc-forms/print'
*/
print.url = (options?: RouteQueryOptions) => {
    return print.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::print
* @see app/Http/Controllers/Admin/NvcFormController.php:105
* @route '/dashboard/nvc-forms/print'
*/
print.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::print
* @see app/Http/Controllers/Admin/NvcFormController.php:105
* @route '/dashboard/nvc-forms/print'
*/
print.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: print.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::print
* @see app/Http/Controllers/Admin/NvcFormController.php:105
* @route '/dashboard/nvc-forms/print'
*/
const printForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::print
* @see app/Http/Controllers/Admin/NvcFormController.php:105
* @route '/dashboard/nvc-forms/print'
*/
printForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: print.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::print
* @see app/Http/Controllers/Admin/NvcFormController.php:105
* @route '/dashboard/nvc-forms/print'
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

const NvcFormController = { index, destroy, exportExcel, exportCsv, exportPdf, print }

export default NvcFormController