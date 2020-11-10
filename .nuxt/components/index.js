export { default as Logo } from '../../components/Logo.vue'
export { default as SlideGameNintento } from '../../components/Slides/SlideGameNintento.vue'
export { default as BanSwitch } from '../../components/banner/BanSwitch.vue'
export { default as NavNitento } from '../../components/nav/navNitento.vue'
export { default as ShapeCir } from '../../components/shape/ShapeCir.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazySlideGameNintento = import('../../components/Slides/SlideGameNintento.vue' /* webpackChunkName: "components/Slides/SlideGameNintento" */).then(c => c.default || c)
export const LazyBanSwitch = import('../../components/banner/BanSwitch.vue' /* webpackChunkName: "components/banner/BanSwitch" */).then(c => c.default || c)
export const LazyNavNitento = import('../../components/nav/navNitento.vue' /* webpackChunkName: "components/nav/navNitento" */).then(c => c.default || c)
export const LazyShapeCir = import('../../components/shape/ShapeCir.vue' /* webpackChunkName: "components/shape/ShapeCir" */).then(c => c.default || c)
