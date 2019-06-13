import MainScreen from './MainScreen.vue'
import About from './About.vue'
import Participants from './Participants.vue'
import ActivityPA from './ActivityPA.vue'
import ActivityIT from './ActivityIT.vue'
import Mentoring from './Mentoring.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import MainMenu from './menu'
import mainfooter from './Footer.vue'

// Здесь пишем пути
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainScreen
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/Participants',
            component: Participants
        },
        {
            path: '/ActivityPA',
            component: ActivityPA
        },
        {
            path: '/ActivityIT',
            component: ActivityIT
        },
        {
            path: '/Mentoring',
            component: Mentoring
        },
        {
            path: '/Projects',
            component: Projects
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})

var app = new Vue({
    el: '#app',
    router,
    components: {
        MainMenu,
        Participants,
        ActivityPA,
        ActivityIT,
        Mentoring,
        Projects,
        mainfooter
    }
});