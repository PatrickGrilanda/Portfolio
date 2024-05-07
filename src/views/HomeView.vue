<script setup>
import PresentationComponent from "@/components/layout/Home/PresentationComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const onSwiper = (swiper) => {
  //alert(swiper);
};
const onSlideChange = () => {
  //alert("slide change");
};
const modules = [A11y, Autoplay];
</script>
<template>
  <div class="flex flex-col gap-4">
    <PresentationComponent />
    <div class="max-w-full flex justify-center">
      <div class="w-3/5">
        <h1
          class="text-center text-[2rem] font-bold uppercase mb-7 dark:text-gray-300"
        >
          Projects
        </h1>
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="50"
          autoplay
          :loop="true"
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="incline-flex gap-4"
        >
          <swiper-slide class="bg-slate-200 dark:bg-gray-600 rounded-2xl">
            <div class="flex items-center justify-center w-full min-h-64">
              <h1
                class="text-2xl text-gray-500 font-semibold dark:text-slate-400"
              >
                Coming Soon
              </h1>
            </div>
          </swiper-slide>
          <swiper-slide class="bg-slate-200 dark:bg-gray-600 rounded-2xl">
            <div class="flex items-center justify-center w-full min-h-64">
              <h1
                class="text-2xl text-gray-500 font-semibold dark:text-slate-400"
              >
                Coming Soon
              </h1>
            </div>
          </swiper-slide>
          <swiper-slide class="bg-slate-200 dark:bg-gray-600 rounded-2xl">
            <div class="flex items-center justify-center w-full min-h-64">
              <h1
                class="text-2xl text-gray-500 font-semibold dark:text-slate-400"
              >
                Coming Soon
              </h1>
            </div>
          </swiper-slide>
          <swiper-slide class="bg-slate-200 dark:bg-gray-600 rounded-2xl">
            <div class="flex items-center justify-center w-full min-h-64">
              <h1
                class="text-2xl text-gray-500 font-semibold dark:text-slate-400"
              >
                Coming Soon
              </h1>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
