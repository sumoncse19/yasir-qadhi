import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Appointment from '@/components/Appointment/Appointment.vue'
import Certifications from '@/components/AboutFolder/Certifications.vue'
import AwardNdHonors from '@/components/AboutFolder/AwardNdHonors.vue'
import Biography from '@/components/AboutFolder/Biography.vue'
import Academic from '@/components/AboutFolder/Academic.vue'
import PhotoGallery from '@/components/PhotoGallery/PhotoGallery.vue'
import Blog from '@/views/Blogs/index.vue'
import Book from '@/views/Publication/Book.vue'
import BookDetails from '@/views/Publication/BookDetails.vue'
import Research from '@/views/Publication/Research.vue'
import Article from '@/views/Publication/Article.vue'
import Journal from '@/views/Publication/Journal.vue'
import JournalDetails from '@/views/Publication/JournalDetails.vue'
import LecturesLayout from '@/views/Lectures/[...slug].vue'
import Podcasts from '@/views/Podcasts.vue'
import Livestreaming from '@/views/Events/Livestreaming.vue'
import CurrentEvent from '@/views/Events/CurrentEvent.vue'
import UpcomingEvent from '@/views/Events/UpcomingEvent.vue'
import UpcomingEventDetails from '@/views/Events/UpcomingEventDetails.vue'
import PastEvent from '@/views/Events/PastEvent.vue'
import PastEventDetails from '@/views/Events/PastEventDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_API_URL),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment
    },
    {
      path: '/certification',
      name: 'certification',
      component: Certifications
    },
    {
      path: '/awardandhonors',
      name: 'awardandhonors',
      component: AwardNdHonors
    },
    {
      path: '/biography',
      name: 'biography',
      component: Biography
    },
    {
      path: '/academic',
      name: 'academic',
      component: Academic
    },
    {
      path: '/photogallery',
      name: 'photogallery',
      component: PhotoGallery
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/publication/book',
      name: 'publication/book',
      component: Book
    },
    {
      path: '/publication/bookdetails/:id',
      name: 'publication/bookdetails',
      component: BookDetails
    },
    {
      path: '/publication/research',
      name: 'publication/research',
      component: Research
    },
    {
      path: '/publication/article',
      name: 'publication/article',
      component: Article
    },
    {
      path: '/publication/journal',
      name: 'publication/journal',
      component: Journal
    },
    {
      path: '/publication/journaldetails/:id',
      name: 'publication/journaldetails',
      component: JournalDetails
    },
    {
      path: '/lectures/:slug(.*)',
      name: 'lecture',
      component: LecturesLayout
    },
    {
      path: '/podcasts',
      name: 'podcasts',
      component: Podcasts
    },
    {
      path: '/research',
      name: 'research',
      component: Research
    },
    {
      path: '/event/livestreaming',
      name: 'eventlivestreaming',
      component: Livestreaming
    },
    {
      path: '/event/currentEvent',
      name: 'currentEvent',
      component: CurrentEvent
    },
    {
      path: '/event/upcomingEvent',
      name: 'upcomingEvent',
      component: UpcomingEvent
    },
    {
      path: '/event/upcomingEventDetails/:id',
      name: 'upcomingEventDetails',
      component: UpcomingEventDetails
    },
    {
      path: '/event/pastEvent',
      name: 'pastEvent',
      component: PastEvent
    },
    {
      path: '/event/pastEventDetails/:id',
      name: 'pastEventDetails',
      component: PastEventDetails
    }
  ]
})

export default router
