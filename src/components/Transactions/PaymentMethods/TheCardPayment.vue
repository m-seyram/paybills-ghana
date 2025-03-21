<template>
  <form>
    <div class="mb-5 font-nunito">
      <label class="font-meduim block text-base mb-2" for="cardDetails"
        >Card details</label
      >
      <div
        class="2xl:w-w-auto h-[58px] w-full border rounded-t-lg px-5 flex items-center justify-between"
      >
        <!---->
        <input
          class="outline-none w-full bg-transparent"
          placeholder="Card Number"
          type="text"
        />
      </div>
      <div
        class="2xl:w-auto h-[58px] w-full border rounded-b-lg flex items-center"
      >
        <!---->
        <div class="h-[58px] w-full border-[0.5px] px-5 flex items-center">
          <input
            class="outline-none w-full bg-transparent"
            placeholder="expiry date"
            type="text"
          />
        </div>
        <!---->
        <div class="h-[58px] w-full px-5 flex items-center">
          <input
            class="outline-none w-full bg-transparent"
            placeholder="CVV"
            type="text"
          />
        </div>
      </div>
    </div>
    <!---->
    <div class="mb-5">
      <label class="font-meduim block text-base mb-2" for="cardName"
        >Name on card</label
      >
      <div
        class="2xl:w-w-auto h-[58px] w-full border rounded-lg px-5 flex items-center justify-between"
      >
        <!---->
        <input
          class="outline-none w-full bg-transparent"
          placeholder="Name on card"
          type="text"
        />
      </div>
    </div>
    <!---->
    <div class="mb-5">
      <label class="font-meduim block text-base mb-2" for="Email">Email</label>
      <div
        class="2xl:w-w-auto h-[58px] w-full border rounded-lg px-5 flex items-center justify-between"
      >
        <!---->
        <input
          class="outline-none w-full bg-transparent"
          placeholder="Email"
          type="email"
        />
      </div>
    </div>
    <div class="mb-10">
      <label class="font-meduim block text-base mb-2" for="phone">Phone</label>
      <div
        class="2xl:w-w-auto h-[58px] w-full border rounded-lg px-5 flex items-center gap-2"
      >
        <!---->
        <div class="relative">
          <!--country icon and code-->
          <select
            class="bg-white border-none pr-8 appearance-none text-base cursor-pointer"
          >
            <option value="GH" class="flex items-center">🇬🇭 +233</option>
            <option value="NG" class="flex items-center">🇳🇬 +234</option>
            <option value="KE" class="flex items-center">🇰🇪 +254</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none border-gray-400 border-r"
          >
            <ArrowDown />
          </div>
        </div>
        <!---->
        <input
          class="outline-none bg-transparent w-full"
          type="text"
          placeholder="phone"
        />
      </div>
    </div>
  </form>
</template>
