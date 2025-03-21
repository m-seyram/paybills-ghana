<script setup>
import { ref, computed } from "vue";
import TheTransactionDetails from "./TheTransactionDetails.vue";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Check, DownloadIcon, Loader, Share2, X } from "lucide-vue-next";
import ArrowDown from "../icons/common/arrowDown.vue";
import Eye from "../icons/common/eye.vue";

// Sample invoices data
const invoices = ref([
  {
    invoice: "INV001",
    paymentStatus: "Success",
    totalAmount: "GHS 250.00",
    billerName: "Electricity Company of Ghana",
    category: "Utility",
    paymentMethod: "Credit Card",
  },

  {
    invoice: "INV002",
    paymentStatus: "pending",
    totalAmount: "GHS 250.00",
    billerName: "Electricity Company of Ghana",
    category: "Utility",
    paymentMethod: "Apple Pay",
  },

  {
    invoice: "INV003",
    paymentStatus: "Pending",
    totalAmount: "GHS 250.00",
    billerName: "Ghana Water Company limited",
    category: "Utility",
    paymentMethod: "Apple Pay",
  },
  {
    invoice: "INV004",
    paymentStatus: "Failed",
    totalAmount: "GHS 500",
    billerName: "Passport Services",
    category: "Government",
    paymentMethod: "Apple Pay",
  },
  {
    invoice: "INV005",
    paymentStatus: "Success",
    totalAmount: "GHS 500",
    billerName: "Passport Services",
    category: "Government",
    paymentMethod: "Credit Card",
  },
]);

// State for search, filter, and pagination
const searchQuery = ref("");
const selectedStatus = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;
const selectedTransaction = ref(null);

// Computed property for filtered invoices
const filteredInvoices = computed(() => {
  return invoices.value.filter((invoice) => {
    const matchesSearch = invoice.invoice
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesStatus = selectedStatus.value
      ? invoice.paymentStatus === selectedStatus.value
      : true;
    return matchesSearch && matchesStatus;
  });
});

// Paginated invoices
const paginatedInvoices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredInvoices.value.slice(start, start + itemsPerPage);
});

// Total pages
const totalPages = computed(() =>
  Math.ceil(filteredInvoices.value.length / itemsPerPage)
);

// Pagination functions
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>

<template>
  <Sheet>
    <div class="p-3 2xl:px-10 px-5 mt-5 font-nunito">
      <div class="xl:flex items-center justify-between">
        <!----->
        <h2 class="font-bold text-lg">Transaction History</h2>
        <!-- Search & Filter -->
        <div class="xl:flex items-center gap-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by Invoice ID..."
            class="p-2 border rounded-md"
          />

          <select v-model="selectedStatus" class="p-2 border rounded-md">
            <option value="">Filter</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      <!-- Table -->
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>BILLER NAME</TableHead>
            <TableHead>AMOUNT</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>DATE & TIME</TableHead>
            <TableHead>PAYMENT METHODS</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in paginatedInvoices" :key="invoice.invoice">
            <TableCell>{{ invoice.invoice }}</TableCell>
            <TableCell>{{ invoice.category }}</TableCell>
            <TableCell
              ><p>{{ invoice.billerName }}</p></TableCell
            >
            <TableCell
              ><p class="text-nowrap">{{ invoice.totalAmount }}</p></TableCell
            >
            <TableCell
              ><div
                v-if="invoice.paymentStatus === 'Success'"
                class="px-2 rounded-full bg-green-300 flex items-center justify-center h-8 gap-1"
              >
                <Check />
                {{ invoice.paymentStatus }}
              </div>
              <div
                v-else-if="invoice.paymentStatus === 'Failed'"
                class="px-2 rounded-full bg-red-300 flex items-center justify-center h-8 gap-2"
              >
                <X />
                {{ invoice.paymentStatus }}
              </div>
              <div
                v-else
                class="px-2 rounded-full bg-orange-200 h-8 flex items-center justify-center gap-2"
              >
                <Loader />
                {{ invoice.paymentStatus }}
              </div></TableCell
            >
            <TableCell
              ><div>
                <p class="text-base text-nowrap font-medium">24 Jan,2025</p>
                <p class="text-sm">10:00am</p>
              </div></TableCell
            >
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell
              ><DropdownMenu>
                <DropdownMenuTrigger>
                  <div class="flex items-center gap-2">
                    Options <ArrowDown />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem @click="selectedTransaction = invoice">
                    <SheetTrigger>
                      <div class="flex items-center gap-2">
                        <Eye /> View Transaction
                      </div>
                    </SheetTrigger>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div class="flex items-center gap-2">
                      <DownloadIcon /> Download
                    </div></DropdownMenuItem
                  >
                  <DropdownMenuItem
                    ><div class="flex items-center gap-2">
                      <Share2 />
                      Share
                    </div></DropdownMenuItem
                  >
                </DropdownMenuContent>
              </DropdownMenu></TableCell
            >
          </TableRow>
        </TableBody>
      </Table>

      <!-- Pagination Controls -->
      <div class="flex justify-between items-center mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="p-2 border rounded-md"
        >
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="p-2 border rounded-md"
        >
          Next
        </button>
      </div>
    </div>
    <!--Detailed transaction view sheet-->
    <SheetContent
      class="overflow-y-auto xl:overflow-hidden"
      v-if="selectedTransaction"
    >
      <SheetTitle>
        <p class="text-lg font-bold font-nunito">
          Transaction Details
        </p></SheetTitle
      >
      <SheetDescription>
        <TheTransactionDetails :transaction="selectedTransaction" />
      </SheetDescription>
    </SheetContent>
  </Sheet>
</template>
