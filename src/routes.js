import Roadmap from './components/Views/Roadmap/Roadmap.vue';
import Backlog from './components/Views/Backlog/Backlog.vue';

export const routes = [
	{ path: '', component: Roadmap },
	{ path: '/roadmap', component: Roadmap, props: true },
	{ path: '/Backlog', component: Backlog }
];