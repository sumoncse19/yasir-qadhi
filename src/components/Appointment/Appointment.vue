<script setup>
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'radix-vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'

import { ref, watch, onMounted } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import backgroundImage from '../../assets/image/shared/shared-cover.jpeg'
import backgroundImage2 from '../../assets/image/shared/shared-cover.jpeg'

const $toast = useToast()

const heroStyle = {
  backgroundImage: `url(${backgroundImage}), url(${backgroundImage2})`,
  backgroundPosition: '70px 0',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const isLoading = ref(false)

const userName = ref('')
const userEmail = ref('')
const userPhone = ref('')
const appointment_reason = ref('')
const my_work_information = ref('')
const appointment_type = ref('Single')
const appointment_reason_details = ref('')
const appointment_date = ref('')
const start_time = ref('09:00')
const end_time = ref('10:00')

// Event data
const event_name = ref('')
const event_details = ref('')
const event_location = ref('')
const event_organizer = ref('')
const event_speakers = ref('')
const event_role = ref('')

const allAppointmentReason = ref()

const getAppointmentReason = async () => {
  await axios.get(BASE_API_URL + '/appointment-reasons').then((response) => {
    allAppointmentReason.value = response.data
  })
}

const handleSubmit = async () => {
  isLoading.value = true

  const appointmentData = {
    name: userName.value,
    email: userEmail.value,
    phone_no: userPhone.value,
    appointment_reason: appointment_reason.value,
    my_work_information: my_work_information.value,
    appointment_type: appointment_type.value.toLowerCase(),
    appointment_reason_details: appointment_reason_details.value,
    appointment_date: appointment_date.value,
    start_time: start_time.value,
    end_time: end_time.value,
    event_name: event_name.value,
    event_details: event_details.value,
    event_location: event_location.value,
    event_organizer: event_organizer.value,
    event_speakers: event_speakers.value,
    event_role: event_role.value
  }
  await axios.post(BASE_API_URL + '/post-appointment-info', appointmentData).then((response) => {
    isLoading.value = false
    $toast.success(response.data.message, { position: 'top-right' })
  })
}

onMounted(() => {
  getAppointmentReason()
})
</script>

<template>
  <DefaultLayout>
    <!-- cover section -->
    <div class="hero min-h-72 bg-slate-900" :style="heroStyle">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="text-left">
          <div class="">
            <h1 class="mb-5 text-5xl font-bold">Appointments</h1>
            <p class="mb-5 w-3/6">
              Yasir Qadhi has studied with many renowned Islamic scholars throughout the world. He
              is a highly respected scholar who is known for his deep knowledge of Islamic law,
              theology, and history.
            </p>
            <!-- <button class="btn bg-[#00838d] text-white">Details</button> -->
          </div>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-7xl mt-20 text-center fullImg">
      <div class="flex justify-center">
        <div class="p-4 w-4/5 bg-gradient-to-b from-slate-300 to-transparent relative">
          <form class="card-body" ref="{form}" @submit.prevent="handleSubmit">
            <p class="font-bold lg:text-xl text-left my-3">Contact Infomation</p>
            <div class="form-control">
              <input
                v-model="userName"
                type="text"
                name="user_name"
                placeholder="Your Name"
                class="input input-bordered"
                required
              />
            </div>

            <div class="lg:flex gap-5 my-5">
              <div class="form-control lg:flex-1">
                <input
                  v-model="userEmail"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  class="input"
                  required
                />
              </div>
              <div class="form-control lg:flex-1">
                <input
                  v-model="userPhone"
                  type="number"
                  placeholder="Phone"
                  class="input"
                  required
                />
              </div>
            </div>

            <select v-model="appointment_reason" class="select select-bordered join-item">
              <template v-for="(appointmentReason, index) in allAppointmentReason" :key="index">
                <option selected>{{ appointmentReason.title }}</option>
              </template>
            </select>

            <p class="font-bold lg:text-xl text-left mt-11 mb-3">Your work Information</p>
            <div class="form-control">
              <input
                v-model="my_work_information"
                type="text"
                name="profession"
                placeholder="I am a Doctor"
                class="input input-bordered"
                required
              />
            </div>

            <p class="font-bold lg:text-xl text-left mt-11 mb-3">
              Please Tell Us how many person need to appointment:
            </p>

            <RadioGroupRoot
              v-model="appointment_type"
              class="flex gap-2.5"
              default-value="Single"
              aria-label="View density"
            >
              <div class="flex items-center">
                <RadioGroupItem
                  id="r1"
                  class="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                  value="Single"
                >
                  <RadioGroupIndicator
                    class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-black"
                  />
                </RadioGroupItem>
                <label class="text-black text-[15px] leading-none pl-[15px]" for="r1">
                  Single
                </label>
              </div>

              <div class="flex items-center">
                <RadioGroupItem
                  id="r2"
                  class="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                  value="Group"
                >
                  <RadioGroupIndicator
                    class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-black"
                  />
                </RadioGroupItem>
                <label class="text-black text-[15px] leading-none pl-[15px]" for="r2">
                  Group
                </label>
              </div>

              <div class="flex items-center">
                <RadioGroupItem
                  id="r3"
                  class="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                  value="Event"
                >
                  <RadioGroupIndicator
                    class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-black"
                  />
                </RadioGroupItem>
                <label class="text-black text-[15px] leading-none pl-[15px]" for="r3">
                  Event
                </label>
              </div>
            </RadioGroupRoot>

            <div v-if="appointment_type === 'Event'" class="w-full flex flex-col gap-5">
              <div class="form-control mt-2">
                <input
                  v-model="event_name"
                  type="text"
                  name="event_name"
                  placeholder="Event Name"
                  class="input input-bordered"
                  required
                />
              </div>

              <div class="lg:flex gap-5">
                <div class="form-control lg:flex-1">
                  <input
                    v-model="event_location"
                    type="text"
                    name="event_location"
                    placeholder="Event Location"
                    class="input"
                    required
                  />
                </div>

                <div class="form-control lg:flex-1">
                  <input
                    v-model="event_organizer"
                    type="text"
                    name="event_organizer"
                    placeholder="Event Organizer"
                    class="input"
                    required
                  />
                </div>
              </div>

              <div class="flex w-full gap-5">
                <select v-model="event_role" class="select select-bordered join-item w-1/2">
                  <option selected>Speaker</option>
                  <option>Attendence</option>
                </select>

                <div class="form-control lg:flex-1 w-1/2">
                  <input
                    v-model="event_speakers"
                    type="text"
                    name="event_speaker"
                    placeholder="Event Speaker *"
                    class="input"
                    required
                  />
                </div>
              </div>

              <div class="form-control">
                <textarea
                  v-model="event_details"
                  name="event_details"
                  placeholder="Event Details"
                  class="textarea textarea-bordered textarea-sm w-full"
                ></textarea>
              </div>
            </div>

            <p class="font-bold lg:text-xl text-left mt-11 mb-4">
              Please Tell Us Your Reason for Scheduling an Appointment
            </p>

            <div class="form-control">
              <textarea
                v-model="appointment_reason_details"
                name="appointment_reason_details"
                placeholder="Appointment Reason Details"
                class="textarea textarea-bordered textarea-sm w-full"
                required
              ></textarea>
            </div>

            <p class="font-bold lg:text-xl text-left mt-11 mb-3">Choose Date and Time</p>
            <div class="lg:flex gap-5 mb-5">
              <div class="form-control flex-1">
                <input
                  v-model="appointment_date"
                  type="date"
                  id="start"
                  class="input"
                  name="date"
                  value="2024-07-02"
                  min="2018-01-01"
                  max="2026-03-30"
                  required
                />
              </div>

              <div class="form-control flex-1">
                <select v-model="start_time" class="select select-bordered join-item">
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>03:00</option>
                </select>
              </div>

              <div class="form-control flex-1">
                <select v-model="end_time" class="select select-bordered join-item">
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>03:00</option>
                  <option>04:00</option>
                </select>
              </div>
            </div>

            <div class="form-control mt-6">
              <button
                class="btn bg-yellow-600 text-white hover:bg-black"
                type="submit"
                value="Send"
              >
                Request Appointment
              </button>
            </div>
          </form>

          <div v-if="isLoading" class="bg-[#000000bb] absolute w-full h-full top-0 left-0">
            <div
              class="text-white text-lg font-bold justify-center items-center flex space-x-3 h-full"
            >
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <div>Please wait ...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.fullImg {
  //background-image:url("../../assets/image/white_linen_texture.jpg");
}
</style>
