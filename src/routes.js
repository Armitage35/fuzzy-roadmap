import Roadmap from './components/Views/Roadmap/Roadmap.vue';

// Lazy load backlog
const Backlog = resolve =>  {
	require.ensure(['./components/Views/Backlog/Backlog.vue'], () => {
		resolve(require('./components/Views/Backlog/Backlog.vue'));
	});
};

export const routes = [
	{ path: '', component: Roadmap },
	{ path: '/roadmap', component: Roadmap, props: true },
	{ path: '/Backlog', component: Backlog }
];
