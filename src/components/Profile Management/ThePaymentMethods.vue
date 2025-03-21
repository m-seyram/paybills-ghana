<script setup>
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ref } from "vue";
import {
  HelpCircle,
  LucidePencil,
  PlusIcon,
  Trash2Icon,
} from "lucide-vue-next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ArrowDown from "../icons/common/arrowDown.vue";
import mtnImage from "@/assets/paymentmethods/momo-mtn.png";
import telecelImage from "@/assets/paymentmethods/telecel-cash.png";
import airteltigoImage from "@/assets/paymentmethods/at-money.png";
import zenithImage from "@/assets/paymentmethods/zenith.png";
import fidelityImage from "@/assets/paymentmethods/fidelity.png";
import Cancel2 from "../icons/common/cancel2.vue";
import AddMomo from "./PaymentMethod/AddMomo.vue";
import AddBank from "./PaymentMethod/AddBank.vue";
//Mobile  money
const mobileMoney = ref([
  {
    name: "John Doe",
    network: "MTN Ghana",
    image: mtnImage,
    number: "0241234567",
  },
  {
    name: "John Doe",
    network: "Telecel",
    image: telecelImage,
    number: "0201234567",
  },
  {
    name: "John Doe",
    network: "AirtelTigo Ghana",
    image: airteltigoImage,
    number: "0201234567",
  },
]);
//Bank Cards
const bankCards = ref([
  {
    name: "John Doe",
    bank: "Fidelity Bank Ghana",
    image: fidelityImage,
    accnumber: "0402230034434123",
  },
  {
    name: "John Doe",
    bank: "Zenith Bank Ghana",
    image: zenithImage,
    accnumber: "0402230034434123",
  },
]);
</script>
<template>
  <div class="py-10 container max-w-5xl font-nunito">
    <h2 class="font-bold text-lg mb-5">Payment Methods</h2>
    <Alert class="w-full bg-[#FFFBF3] border-none">
      <HelpCircle />
      <AlertDescription class="text-base xl:w-[923px] ml-2">
        Save your preferred payment methods for faster and more convenient
        transactions. Choose from <span class="font-bold">Mobile Money</span> or
        <span class="font-bold">Bank</span> Transfer options. For security
        reasons,
        <span class="font-bold">we do not store credit/debit card details</span
        >. You can update or remove your saved payment methods at any time.
      </AlertDescription>
    </Alert>
    <!--Mobile Money-->
    <div>
      <div class="md:flex items-center justify-between mt-10">
        <h2 class="font-bold text-base mb-2 xl:mb-0">Mobile Money</h2>
        <!---->
        <Dialog>
          <DialogTrigger class="px-3 bg-paybill-secondary rounded-full h-10">
            <div class="flex items-center gap-2">
              <PlusIcon /> Add Mobile money
            </div></DialogTrigger
          >
          <DialogContent class="top-[400px]">
            <DialogTitle class="font-nunito text-lg font-bold"
              >Add Mobile Money Wallet</DialogTitle
            >
            <AddMomo />
          </DialogContent>
        </Dialog>
      </div>
      <!--Momo Cards-->
      <div class="flex items-center gap-3 mt-10 flex-wrap">
        <div
          v-for="mobile in mobileMoney"
          :key="mobile.number"
          :class="[
            'w-[271px] h-[148px] rounded-md p-5 text-black',
            mobile.network === 'MTN Ghana' ? 'bg-[#FFCB05]' : '',
            mobile.network === 'Telecel' ? 'bg-[#E40000] text-white' : '',
            mobile.network === 'AirtelTigo Ghana'
              ? 'bg-[#1B3F77] text-white'
              : '',
          ]"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="font-bold text-base">{{ mobile.name }}</p>
            </div>
            <div
              :class="[mobile.network === 'MTN Ghana' ? 'border-black' : '']"
              class="border px-3 h-7 rounded-md"
            >
              <DropdownMenu>
                <DropdownMenuTrigger class="flex items-center gap-2">
                  Options <ArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem class="flex items-center gap-2">
                    <Cancel2 /> Deactivate
                  </DropdownMenuItem>
                  <DropdownMenuItem class="flex items-center gap-2">
                    <LucidePencil /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem class="flex items-center gap-2">
                    <Trash2Icon /> Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p class="text-sm mt-2">{{ mobile.number }}</p>
          <div class="flex items-center justify-between mt-5">
            <div class="h-10 w-10 rounded-full bg-white">
              <img
                class="h-10 w-10 rounded-full object-cover"
                :src="mobile.image"
              />
            </div>
            <p class="text-xs">{{ mobile.network }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--Bank-->
    <div>
      <div class="md:flex items-center justify-between mt-10">
        <h2 class="font-bold text-base mb-2 xl:mb-0">Bank Transfer</h2>
        <!---->
        <Dialog>
          <DialogTrigger class="px-3 bg-paybill-secondary rounded-full h-10">
            <div class="flex items-center gap-2">
              <PlusIcon /> Add Bank Account
            </div></DialogTrigger
          >
          <DialogContent class="top-[400px]">
            <DialogTitle class="font-nunito text-lg font-bold"
              >Add Bank Account</DialogTitle
            >
            <AddBank />
          </DialogContent>
        </Dialog>
      </div>
      <!--Bank Cards-->
      <div class="flex flex-wrap items-center gap-3 mt-10">
        <div
          v-for="bankCards in bankCards"
          class="w-[271px] h-[148px] border rounded-md p-5 text-black"
        >
          <div class="flex items-center justify-between">
            <!---->
            <div>
              <p class="font-bold text-base">{{ bankCards.name }}</p>
            </div>
            <!---->
            <div class="border px-3 h-7 rounded-md">
              <DropdownMenu>
                <DropdownMenuTrigger class="flex items-center gap-2"
                  >Options <ArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem class="flex items-center gap-2">
                    <Cancel2 />
                    Deactivate</DropdownMenuItem
                  >
                  <DropdownMenuItem class="flex items-center gap-2">
                    <LucidePencil /> Edit</DropdownMenuItem
                  >
                  <DropdownMenuItem class="flex items-center gap-2">
                    <Trash2Icon /> Remove</DropdownMenuItem
                  >
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <!---->
          <p class="text-sm mt-2">{{ bankCards.accnumber }}</p>
          <!---->
          <div class="flex items-center justify-between mt-5">
            <!---->
            <div class="h-10 w-10 rounded-full border">
              <img
                class="h-10 w-10 rounded-full object-cover"
                :src="bankCards.image"
              />
            </div>
            <!---->
            <p class="text-xs">{{ bankCards.bank }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
