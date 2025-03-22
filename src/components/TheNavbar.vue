<script setup>
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TheSignIn from "./Auth/TheSignIn.vue";
import TheSignUp from "./Auth/TheSignUp.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import Cancel from "./icons/common/cancel.vue";
import Menu from "./icons/common/menu.vue";
import ArrowDown from "./icons/common/arrowDown.vue";
import Account from "./icons/common/account.vue";
import Logout from "./icons/common/logout.vue";
import router from "@/router";
import { useCountryStore } from "@/stores/countryStore";

let open = ref(false);
const dropdown = ref(false);

const loggedIn = ref(false);

function navMenu() {
  open.value = !open.value;
}
//dropdown
const clickeddropdown = () => {
  dropdown.value = !dropdown.value;
};

const handleClickOutside = (event) => {
  if (!event.target.closest(".dropdown")) {
    dropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const countryStore = useCountryStore();

onMounted(() => {
  countryStore.detectCountry(); // Detect country on page load
});

function logout() {
  loggedIn.value = true;
  router.push("/");
}
</script>
<template>
  <nav class="fixed z-10 top-0 w-full">
    <div class="bg-white w-full h-20 shadow-sm pt-4 font-nunito">
      <div
        class="container mx-auto max-w-[1408px] xl:flex items-center justify-between px-5 2xl:px-0"
      >
        <!--logo-->
        <router-link to="/"
          ><div>
            <img
              class=" h-12"
              src="../assets//logo.png"
              alt="logo"
            /></div
        ></router-link>
        <span
          @click="navMenu()"
          class="absolute xl:hidden right-6 top-1.5 cursor-pointer mt-7 xl:mt-0 text-4xl"
        >
          <div>
            <i v-if="open"><Cancel /></i>
            <i v-else><Menu /></i>
          </div>
        </span>

        <!--auth-->
        <div
          class="xl:flex items-center gap-3 bg-white absolute xl:static xl:w-auto w-full pt-3 pb-2 xl:pt-0 xl:pb-0 pl-5 xl:pl-0"
          :class="[open ? 'left-0' : 'left-[-100%]']"
        >
          <div class="flex items-center gap-3" v-if="loggedIn">
            <!--signIn-->
            <Dialog
              ><div>
                <DialogTrigger
                  ><button
                    class="text-paybill-primary bg-paybill-secondary h-11 w-32 rounded-full font-bold text-base mb-3 xl:mb-0"
                  >
                    Sign In
                  </button></DialogTrigger
                >
              </div>
              <DialogContent>
                <TheSignIn />
              </DialogContent>
            </Dialog>
            <!--signup-->
            <Dialog>
              <div>
                <DialogTrigger>
                  <button
                    class="border-[1.5px] text-paybill-primary border-paybill-primary h-11 w-32 rounded-full font-bold text-base"
                  >
                    Sign Up
                  </button>
                </DialogTrigger>
              </div>
              <DialogContent
                class="h-full 2xl:h-auto overflow-y-auto 2xl:overflow-hidden"
              >
                <TheSignUp />
              </DialogContent>
            </Dialog>
          </div>
          <!--Else for logged in user-->
          <div class="relative dropdown cursor-pointer" v-else>
            <div
              @click="clickeddropdown"
              class="xl:flex items-center justify-center gap-5 hidden"
            >
              <!--profile-->
              <div class="h-10 w-10 rounded-full bg-slate-500"></div>
              <!--username and email-->
              <div>
                <p class="font-bold text-sm">John Doe</p>
                <p class="font-meduim text-xs">johndoe@gmail.com</p>
              </div>
              <!---->
              <ArrowDown />
            </div>
            <!---->
            <div class="xl:hidden block">
              <router-link to="/profile">
                <div class="flex gap-2 items-center">
                  <Account />
                  <p class="text-base">My Account</p>
                </div>
              </router-link>
              <!---->
              <button @click="logout" class="mt-4 flex gap-2 items-center">
                <Logout />
                <p>Logout</p>
              </button>
            </div>
          </div>
          <!--Dropdown-->
          <div
            class="absolute border w-[212px] h-[109px] rounded-xl shadow-md bg-white xl:top-[70px] p-5"
            v-show="dropdown"
          >
            <router-link to="/profile">
              <div class="flex gap-2 items-center">
                <Account />
                <p class="text-base">My Account</p>
              </div>
            </router-link>
            <!---->
            <button @click="logout" class="mt-4 flex gap-2 items-center">
              <Logout />
              <p>Logout</p>
            </button>
          </div>
          <!--country-->
          <div>
            <div class="w-7 h-7 rounded-full hidden xl:block">
              <img
                v-if="countryStore.selectedCountry"
                :src="countryStore.selectedCountry.image"
                alt="Country Flag"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
