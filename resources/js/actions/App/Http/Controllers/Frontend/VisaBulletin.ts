import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:195
* @route '/visa-bulletin'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/visa-bulletin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:195
* @route '/visa-bulletin'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:195
* @route '/visa-bulletin'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:195
* @route '/visa-bulletin'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:195
* @route '/visa-bulletin'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:195
* @route '/visa-bulletin'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::index
* @see app/Http/Controllers/Frontend/VisaBulletin.php:195
* @route '/visa-bulletin'
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
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:212
* @route '/visa-bulletin-detail/{session}'
*/
export const VisaBulletinDetail = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'get',
})

VisaBulletinDetail.definition = {
    methods: ["get","head"],
    url: '/visa-bulletin-detail/{session}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:212
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.url = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { session: args }
    }

    if (Array.isArray(args)) {
        args = {
            session: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        session: args.session,
    }

    return VisaBulletinDetail.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:212
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:212
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.head = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:212
* @route '/visa-bulletin-detail/{session}'
*/
const VisaBulletinDetailForm = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:212
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetailForm.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:212
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetailForm.head = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

VisaBulletinDetail.form = VisaBulletinDetailForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:237
* @route '/recent-approval'
*/
export const RecentApprovals = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RecentApprovals.url(options),
    method: 'get',
})

RecentApprovals.definition = {
    methods: ["get","head"],
    url: '/recent-approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:237
* @route '/recent-approval'
*/
RecentApprovals.url = (options?: RouteQueryOptions) => {
    return RecentApprovals.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:237
* @route '/recent-approval'
*/
RecentApprovals.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:237
* @route '/recent-approval'
*/
RecentApprovals.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RecentApprovals.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:237
* @route '/recent-approval'
*/
const RecentApprovalsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:237
* @route '/recent-approval'
*/
RecentApprovalsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:237
* @route '/recent-approval'
*/
RecentApprovalsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RecentApprovals.form = RecentApprovalsForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:261
* @route '/contact'
*/
export const contactus = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactus.url(options),
    method: 'get',
})

contactus.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:261
* @route '/contact'
*/
contactus.url = (options?: RouteQueryOptions) => {
    return contactus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:261
* @route '/contact'
*/
contactus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:261
* @route '/contact'
*/
contactus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactus.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:261
* @route '/contact'
*/
const contactusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contactus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:261
* @route '/contact'
*/
contactusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contactus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:261
* @route '/contact'
*/
contactusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contactus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

contactus.form = contactusForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:269
* @route '/contact-us'
*/
export const contactStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStore.url(options),
    method: 'post',
})

contactStore.definition = {
    methods: ["post"],
    url: '/contact-us',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:269
* @route '/contact-us'
*/
contactStore.url = (options?: RouteQueryOptions) => {
    return contactStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:269
* @route '/contact-us'
*/
contactStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:269
* @route '/contact-us'
*/
const contactStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: contactStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:269
* @route '/contact-us'
*/
contactStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: contactStore.url(options),
    method: 'post',
})

contactStore.form = contactStoreForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/contact-us/send-otp'
*/
export const sendOtp = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtp.url(options),
    method: 'post',
})

sendOtp.definition = {
    methods: ["post"],
    url: '/contact-us/send-otp',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/contact-us/send-otp'
*/
sendOtp.url = (options?: RouteQueryOptions) => {
    return sendOtp.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/contact-us/send-otp'
*/
sendOtp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/contact-us/send-otp'
*/
const sendOtpForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/contact-us/send-otp'
*/
sendOtpForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtp.url(options),
    method: 'post',
})

sendOtp.form = sendOtpForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:71
* @route '/contact-us/verify-otp'
*/
export const verifyOtp = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtp.url(options),
    method: 'post',
})

verifyOtp.definition = {
    methods: ["post"],
    url: '/contact-us/verify-otp',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:71
* @route '/contact-us/verify-otp'
*/
verifyOtp.url = (options?: RouteQueryOptions) => {
    return verifyOtp.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:71
* @route '/contact-us/verify-otp'
*/
verifyOtp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:71
* @route '/contact-us/verify-otp'
*/
const verifyOtpForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:71
* @route '/contact-us/verify-otp'
*/
verifyOtpForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtp.url(options),
    method: 'post',
})

verifyOtp.form = verifyOtpForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:117
* @route '/contact-us/send-otp-slider'
*/
export const sendOtpSlider = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtpSlider.url(options),
    method: 'post',
})

sendOtpSlider.definition = {
    methods: ["post"],
    url: '/contact-us/send-otp-slider',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:117
* @route '/contact-us/send-otp-slider'
*/
sendOtpSlider.url = (options?: RouteQueryOptions) => {
    return sendOtpSlider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:117
* @route '/contact-us/send-otp-slider'
*/
sendOtpSlider.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:117
* @route '/contact-us/send-otp-slider'
*/
const sendOtpSliderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:117
* @route '/contact-us/send-otp-slider'
*/
sendOtpSliderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtpSlider.url(options),
    method: 'post',
})

sendOtpSlider.form = sendOtpSliderForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:150
* @route '/contact-us/verify-otp-slider'
*/
export const verifyOtpSlider = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtpSlider.url(options),
    method: 'post',
})

verifyOtpSlider.definition = {
    methods: ["post"],
    url: '/contact-us/verify-otp-slider',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:150
* @route '/contact-us/verify-otp-slider'
*/
verifyOtpSlider.url = (options?: RouteQueryOptions) => {
    return verifyOtpSlider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:150
* @route '/contact-us/verify-otp-slider'
*/
verifyOtpSlider.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:150
* @route '/contact-us/verify-otp-slider'
*/
const verifyOtpSliderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:150
* @route '/contact-us/verify-otp-slider'
*/
verifyOtpSliderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtpSlider.url(options),
    method: 'post',
})

verifyOtpSlider.form = verifyOtpSliderForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/cspa-age-calculator'
*/
export const cspaAgeCalculator = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cspaAgeCalculator.url(options),
    method: 'get',
})

cspaAgeCalculator.definition = {
    methods: ["get","head"],
    url: '/cspa-age-calculator',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/cspa-age-calculator'
*/
cspaAgeCalculator.url = (options?: RouteQueryOptions) => {
    return cspaAgeCalculator.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/cspa-age-calculator'
*/
cspaAgeCalculator.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cspaAgeCalculator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/cspa-age-calculator'
*/
cspaAgeCalculator.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cspaAgeCalculator.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/cspa-age-calculator'
*/
const cspaAgeCalculatorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspaAgeCalculator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/cspa-age-calculator'
*/
cspaAgeCalculatorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspaAgeCalculator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/cspa-age-calculator'
*/
cspaAgeCalculatorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspaAgeCalculator.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cspaAgeCalculator.form = cspaAgeCalculatorForm

const VisaBulletin = { index, VisaBulletinDetail, RecentApprovals, contactus, contactStore, sendOtp, verifyOtp, sendOtpSlider, verifyOtpSlider, cspaAgeCalculator }

export default VisaBulletin