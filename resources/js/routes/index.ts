import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\Frontend\HomeController::home
* @see app/Http/Controllers/Frontend/HomeController.php:20
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\HomeController::home
* @see app/Http/Controllers/Frontend/HomeController.php:20
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\HomeController::home
* @see app/Http/Controllers/Frontend/HomeController.php:20
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\HomeController::home
* @see app/Http/Controllers/Frontend/HomeController.php:20
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\HomeController::home
* @see app/Http/Controllers/Frontend/HomeController.php:20
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\HomeController::home
* @see app/Http/Controllers/Frontend/HomeController.php:20
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\HomeController::home
* @see app/Http/Controllers/Frontend/HomeController.php:20
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletin
* @see app/Http/Controllers/Frontend/VisaBulletin.php:245
* @route '/visa-bulletin'
*/
export const VisaBulletin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisaBulletin.url(options),
    method: 'get',
})

VisaBulletin.definition = {
    methods: ["get","head"],
    url: '/visa-bulletin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletin
* @see app/Http/Controllers/Frontend/VisaBulletin.php:245
* @route '/visa-bulletin'
*/
VisaBulletin.url = (options?: RouteQueryOptions) => {
    return VisaBulletin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletin
* @see app/Http/Controllers/Frontend/VisaBulletin.php:245
* @route '/visa-bulletin'
*/
VisaBulletin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisaBulletin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletin
* @see app/Http/Controllers/Frontend/VisaBulletin.php:245
* @route '/visa-bulletin'
*/
VisaBulletin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: VisaBulletin.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletin
* @see app/Http/Controllers/Frontend/VisaBulletin.php:245
* @route '/visa-bulletin'
*/
const VisaBulletinForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletin
* @see app/Http/Controllers/Frontend/VisaBulletin.php:245
* @route '/visa-bulletin'
*/
VisaBulletinForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletin
* @see app/Http/Controllers/Frontend/VisaBulletin.php:245
* @route '/visa-bulletin'
*/
VisaBulletinForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletin.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

VisaBulletin.form = VisaBulletinForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:262
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:262
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:262
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:262
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetail.head = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: VisaBulletinDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:262
* @route '/visa-bulletin-detail/{session}'
*/
const VisaBulletinDetailForm = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:262
* @route '/visa-bulletin-detail/{session}'
*/
VisaBulletinDetailForm.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VisaBulletinDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::VisaBulletinDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:262
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:287
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:287
* @route '/recent-approval'
*/
RecentApprovals.url = (options?: RouteQueryOptions) => {
    return RecentApprovals.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:287
* @route '/recent-approval'
*/
RecentApprovals.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:287
* @route '/recent-approval'
*/
RecentApprovals.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RecentApprovals.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:287
* @route '/recent-approval'
*/
const RecentApprovalsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:287
* @route '/recent-approval'
*/
RecentApprovalsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecentApprovals.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::RecentApprovals
* @see app/Http/Controllers/Frontend/VisaBulletin.php:287
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:311
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:311
* @route '/contact'
*/
contactus.url = (options?: RouteQueryOptions) => {
    return contactus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:311
* @route '/contact'
*/
contactus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:311
* @route '/contact'
*/
contactus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactus.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:311
* @route '/contact'
*/
const contactusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contactus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:311
* @route '/contact'
*/
contactusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contactus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactus
* @see app/Http/Controllers/Frontend/VisaBulletin.php:311
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:319
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:319
* @route '/contact-us'
*/
contactStore.url = (options?: RouteQueryOptions) => {
    return contactStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:319
* @route '/contact-us'
*/
contactStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:319
* @route '/contact-us'
*/
const contactStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: contactStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::contactStore
* @see app/Http/Controllers/Frontend/VisaBulletin.php:319
* @route '/contact-us'
*/
contactStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: contactStore.url(options),
    method: 'post',
})

contactStore.form = contactStoreForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:86
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:86
* @route '/contact-us/send-otp'
*/
sendOtp.url = (options?: RouteQueryOptions) => {
    return sendOtp.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:86
* @route '/contact-us/send-otp'
*/
sendOtp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:86
* @route '/contact-us/send-otp'
*/
const sendOtpForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:86
* @route '/contact-us/send-otp'
*/
sendOtpForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtp.url(options),
    method: 'post',
})

sendOtp.form = sendOtpForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:121
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:121
* @route '/contact-us/verify-otp'
*/
verifyOtp.url = (options?: RouteQueryOptions) => {
    return verifyOtp.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:121
* @route '/contact-us/verify-otp'
*/
verifyOtp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:121
* @route '/contact-us/verify-otp'
*/
const verifyOtpForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtp.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtp
* @see app/Http/Controllers/Frontend/VisaBulletin.php:121
* @route '/contact-us/verify-otp'
*/
verifyOtpForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtp.url(options),
    method: 'post',
})

verifyOtp.form = verifyOtpForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:167
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:167
* @route '/contact-us/send-otp-slider'
*/
sendOtpSlider.url = (options?: RouteQueryOptions) => {
    return sendOtpSlider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:167
* @route '/contact-us/send-otp-slider'
*/
sendOtpSlider.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:167
* @route '/contact-us/send-otp-slider'
*/
const sendOtpSliderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::sendOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:167
* @route '/contact-us/send-otp-slider'
*/
sendOtpSliderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtpSlider.url(options),
    method: 'post',
})

sendOtpSlider.form = sendOtpSliderForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:200
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:200
* @route '/contact-us/verify-otp-slider'
*/
verifyOtpSlider.url = (options?: RouteQueryOptions) => {
    return verifyOtpSlider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:200
* @route '/contact-us/verify-otp-slider'
*/
verifyOtpSlider.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:200
* @route '/contact-us/verify-otp-slider'
*/
const verifyOtpSliderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtpSlider.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::verifyOtpSlider
* @see app/Http/Controllers/Frontend/VisaBulletin.php:200
* @route '/contact-us/verify-otp-slider'
*/
verifyOtpSliderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtpSlider.url(options),
    method: 'post',
})

verifyOtpSlider.form = verifyOtpSliderForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:77
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
* @see app/Http/Controllers/Frontend/VisaBulletin.php:77
* @route '/cspa-age-calculator'
*/
cspaAgeCalculator.url = (options?: RouteQueryOptions) => {
    return cspaAgeCalculator.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:77
* @route '/cspa-age-calculator'
*/
cspaAgeCalculator.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cspaAgeCalculator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:77
* @route '/cspa-age-calculator'
*/
cspaAgeCalculator.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cspaAgeCalculator.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:77
* @route '/cspa-age-calculator'
*/
const cspaAgeCalculatorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspaAgeCalculator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:77
* @route '/cspa-age-calculator'
*/
cspaAgeCalculatorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspaAgeCalculator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::cspaAgeCalculator
* @see app/Http/Controllers/Frontend/VisaBulletin.php:77
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

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::about
* @see app/Http/Controllers/Frontend/VisaBulletin.php:69
* @route '/about'
*/
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::about
* @see app/Http/Controllers/Frontend/VisaBulletin.php:69
* @route '/about'
*/
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::about
* @see app/Http/Controllers/Frontend/VisaBulletin.php:69
* @route '/about'
*/
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::about
* @see app/Http/Controllers/Frontend/VisaBulletin.php:69
* @route '/about'
*/
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::about
* @see app/Http/Controllers/Frontend/VisaBulletin.php:69
* @route '/about'
*/
const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::about
* @see app/Http/Controllers/Frontend/VisaBulletin.php:69
* @route '/about'
*/
aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::about
* @see app/Http/Controllers/Frontend/VisaBulletin.php:69
* @route '/about'
*/
aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

about.form = aboutForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blog
* @see app/Http/Controllers/Frontend/VisaBulletin.php:55
* @route '/blog'
*/
export const blog = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog.url(options),
    method: 'get',
})

blog.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blog
* @see app/Http/Controllers/Frontend/VisaBulletin.php:55
* @route '/blog'
*/
blog.url = (options?: RouteQueryOptions) => {
    return blog.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blog
* @see app/Http/Controllers/Frontend/VisaBulletin.php:55
* @route '/blog'
*/
blog.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blog
* @see app/Http/Controllers/Frontend/VisaBulletin.php:55
* @route '/blog'
*/
blog.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blog.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blog
* @see app/Http/Controllers/Frontend/VisaBulletin.php:55
* @route '/blog'
*/
const blogForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blog.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blog
* @see app/Http/Controllers/Frontend/VisaBulletin.php:55
* @route '/blog'
*/
blogForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blog.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blog
* @see app/Http/Controllers/Frontend/VisaBulletin.php:55
* @route '/blog'
*/
blogForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blog.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

blog.form = blogForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blogDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/blog/{session}'
*/
export const blogDetail = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogDetail.url(args, options),
    method: 'get',
})

blogDetail.definition = {
    methods: ["get","head"],
    url: '/blog/{session}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blogDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/blog/{session}'
*/
blogDetail.url = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return blogDetail.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blogDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/blog/{session}'
*/
blogDetail.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blogDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/blog/{session}'
*/
blogDetail.head = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blogDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blogDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/blog/{session}'
*/
const blogDetailForm = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blogDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blogDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/blog/{session}'
*/
blogDetailForm.get = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blogDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::blogDetail
* @see app/Http/Controllers/Frontend/VisaBulletin.php:36
* @route '/blog/{session}'
*/
blogDetailForm.head = (args: { session: string | number } | [session: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blogDetail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

blogDetail.form = blogDetailForm

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::services
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/services'
*/
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::services
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/services'
*/
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::services
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/services'
*/
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::services
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/services'
*/
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::services
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/services'
*/
const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::services
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/services'
*/
servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\VisaBulletin::services
* @see app/Http/Controllers/Frontend/VisaBulletin.php:27
* @route '/services'
*/
servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

services.form = servicesForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
export const check_youtube_video = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_youtube_video.url(options),
    method: 'get',
})

check_youtube_video.definition = {
    methods: ["get","head"],
    url: '/social/check_youtube_video',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_video.url = (options?: RouteQueryOptions) => {
    return check_youtube_video.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_video.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_youtube_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_video.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_youtube_video.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
const check_youtube_videoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_youtube_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_videoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_youtube_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_youtube_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:165
* @route '/social/check_youtube_video'
*/
check_youtube_videoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_youtube_video.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check_youtube_video.form = check_youtube_videoForm

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
export const check_facebook_video = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_facebook_video.url(options),
    method: 'get',
})

check_facebook_video.definition = {
    methods: ["get","head"],
    url: '/social/check_facebook_video',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_video.url = (options?: RouteQueryOptions) => {
    return check_facebook_video.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_video.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_facebook_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_video.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_facebook_video.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
const check_facebook_videoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_facebook_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_videoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_facebook_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_facebook_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:172
* @route '/social/check_facebook_video'
*/
check_facebook_videoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_facebook_video.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check_facebook_video.form = check_facebook_videoForm

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
export const check_instagram_video = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_instagram_video.url(options),
    method: 'get',
})

check_instagram_video.definition = {
    methods: ["get","head"],
    url: '/social/check_instagram_video',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_video.url = (options?: RouteQueryOptions) => {
    return check_instagram_video.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_video.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_instagram_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_video.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_instagram_video.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
const check_instagram_videoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_instagram_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_videoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_instagram_video.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiSocialController::check_instagram_video
* @see app/Http/Controllers/Admin/ApiSocialController.php:191
* @route '/social/check_instagram_video'
*/
check_instagram_videoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check_instagram_video.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check_instagram_video.form = check_instagram_videoForm
