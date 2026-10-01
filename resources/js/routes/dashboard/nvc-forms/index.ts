import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\NvcFormController::excel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
export const excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

excel.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::excel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
excel.url = (options?: RouteQueryOptions) => {
    return excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::excel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::excel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: excel.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::excel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
const excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::excel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
*/
excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excel.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::excel
* @see app/Http/Controllers/Admin/NvcFormController.php:74
* @route '/dashboard/nvc-forms/export/excel'
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
* @see \App\Http\Controllers\Admin\NvcFormController::csv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
export const csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

csv.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::csv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
csv.url = (options?: RouteQueryOptions) => {
    return csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::csv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::csv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: csv.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::csv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
const csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::csv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
*/
csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: csv.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::csv
* @see app/Http/Controllers/Admin/NvcFormController.php:82
* @route '/dashboard/nvc-forms/export/csv'
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
* @see \App\Http\Controllers\Admin\NvcFormController::pdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
export const pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/dashboard/nvc-forms/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NvcFormController::pdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
pdf.url = (options?: RouteQueryOptions) => {
    return pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NvcFormController::pdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::pdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::pdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
const pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::pdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
*/
pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NvcFormController::pdf
* @see app/Http/Controllers/Admin/NvcFormController.php:91
* @route '/dashboard/nvc-forms/export/pdf'
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

const nvcForms = {
    excel: Object.assign(excel, excel),
    csv: Object.assign(csv, csv),
    pdf: Object.assign(pdf, pdf),
    print: Object.assign(print, print),
}

export default nvcForms