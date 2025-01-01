const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'bhop', component: () => import('pages/bhopserives/IndexPage.vue') }
    ]
  },
  {
    path: '/2024',
    component: () => import('pages/newyears/N2024.vue')
  },
  {
    path: '/2025',
    component: () => import('pages/newyears/N2025.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
