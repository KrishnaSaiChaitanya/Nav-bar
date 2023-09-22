<template>
  <!-- Top Nav Bar -->
  <div :class="{ 'fixed top-0 transition-opacity': showNav }" class="card bg-white dark:bg-[#2F3349] "
    style="height: 62px; padding: 12px 26px 12px 26px;width: 100%;">
    <div class="card bg-white dark:bg-[#2F3349]"
      style="align-items: center; display: flex;flex-direction: column:!important; height: 34px; margin-bottom: 6px;">
      <img src="/vuexy-logo.svg" style="height: 24px;width: 34px;margin-right: 10px;" />
      <p class="dark:text-white"
        style="height: 24px; width: 90%;font-weight: 700;display: flex;align-items: center; font-size: 22px;font-family: Public Sans;">
        Vuexy</p>
      <DarkLightModeToggle />
      <img @click="toggleDivVisibility" src="/Notification.png" style="height: 37px;width: 28px;margin-right: 10px;">
      <img src="/avatar.svg" style="height: 38px;width: 38px;margin-right: 10px;" @click="toggleDrawer" />
    </div>
  </div>
  <!-- Notification Model -->
  <div
    class="z-20 z-50 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-[#2F3349] block"
    id="notification-dropdown" style="position: fixed; right: 3%; top: 5%;" v-if="showDiv" data-popper-placement="bottom"
    @mouseleave="toggleDivVisibility">
    <div
      class="flex px-4 py-2 text-base font-medium justify-between text-gray-700 bg-gray-50 dark:bg-[#2F3349] dark:text-gray-400">
      Notifications <img src="/mail-2.svg" class="flex " alt="My SVG Image" />
    </div>

    <div>
      <a href="#" class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
        <div class="flex-shrink-0">
          <img class="rounded-full w-11 h-11" src="/user-1.svg" alt="Jese image">

        </div>
        <div class="w-full pl-3">
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1"
            style="font-weight: 600; font-size: 15px;">Congratulation
            Lettie</div>
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1" style="font-weight: 400;">Won the monthly
            bestseller gold badge</div>
          <div class="text-xs px-1 font-medium text-primary-700 dark:text-[#8692D0]">1h ago</div>
        </div>
      </a>
      <a href="#" class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
        <div class="flex-shrink-0">
          <img class="rounded-full w-11 h-11" src="/user-2.svg" alt="Jese image">

        </div>
        <div class="w-full pl-3">
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1"
            style="font-weight: 600; font-size: 15px;">Charles
            Franklin</div>
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1" style="font-weight: 400;">Accepted your
            connection</div>
          <div class="text-xs px-1 font-medium text-primary-700 dark:text-[#8692D0]">12h ago</div>
        </div>
      </a>
      <a href="#" class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
        <div class="flex-shrink-0">
          <img class="rounded-full w-11 h-11" src="/user-3.svg" alt="Joseph image">

        </div>
        <div class="w-full pl-3">
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1"
            style="font-weight: 600; font-size: 15px;">Bernard Lamb
          </div>
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1" style="font-weight: 400;">You have new
            message from Bernard Lamb</div>
          <div class="text-xs px-1 font-medium text-primary-700 dark:text-[#8692D0]">Feb 18, 8:26 AM</div>
        </div>
      </a>
      <a href="#" class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
        <div class="flex-shrink-0">
          <img class="rounded-full w-11 h-11" src="/user-4.svg" alt="Leslie image">

        </div>
        <div class="w-full pl-3">
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1"
            style="font-weight: 600; font-size: 15px;">Estella
            Christensen</div>
          <div class="font-normal text-sm text-gray-900 dark:text-[#8692D0] p-1" style="font-weight: 400;">July monthly
            financial report is generated</div>
          <div class="text-xs px-1 font-medium text-primary-700 dark:text-[#8692D0]">Apr 24, 10:30 AM</div>
        </div>
      </a>
    </div>
    <div
      class="block py-2 text-base no-underline font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-[#2F3349] dark:text-white">
      <div class="flex flex-wrap items-center justify-center " style="height: 2rem;">
        <p class="dark:text-white no-underline" style="font-weight: 500; color: #F06767;">View all Notifications</p>
      </div>
    </div>
  </div>
  <!-- Separator -->
  <hr class="h-px bg-gray-200 border-0 dark:bg-gray-600">
  <!--Bottom Nav Bar -->
  <nav class="bg-white border-gray-200 dark:bg-[#2F3349] dark:border-gray-700" style="box-shadow:  0px 2px 4px 0px #A5A3AE4D;
;">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul
          class="flex flex-col font-medium p-1 md:p-0 mt-1 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white dark:bg-[#2F3349] md:dark:bg-[#2F3349] dark:border-gray-700">

          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/home.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-3 pr-4 group">Dashboard</a>
          </li>
          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/layout.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-3 pr-4 group">Layout</a>
          </li>
          <li id="dropdown1">
            <button @mouseover="toggleDropdown('dropdownNavbar')"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              id="text" :aria-expanded="isDropdownOpen('dropdownNavbar')">
              <img src="/table.svg" class="mr-1" alt="My SVG Image" />
              Apps
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div :class="{ 'hidden': !isDropdownOpen('dropdownNavbar'), 'md:block': isDropdownOpen('dropdownNavbar') }"
              class="z-10 absolute top-32 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#2F3349] dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarLink">
                <li id="dropdown-element">

                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                    Calender
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                    Invoice
                  </a>
                </li>
                <li id="dropdown-element">
                  <button @mouseover="toggleDropdown('doubleDropdown')" @keydown.stop
                    class="flex items-center justify-between w-full px-4 py-2 hover:bg-[#F0676752] dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mr-1"
                    :aria-expanded="isDropdownOpen('doubleDropdown')">
                    Users
                    <svg class="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <div
                    :class="{ 'hidden': !isDropdownOpen('doubleDropdown'), 'md:block': isDropdownOpen('doubleDropdown') }"
                    class="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#2F3349]"
                    style="left: 100%;top: 50%;" id="subdropdown-right">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                          List
                        </a>
                      </li>
                      <li id="dropdown-element">
                        <button @mouseover="toggleSubDropdown('subdoubleDropdown')" @keydown.stop
                          class="flex items-center justify-between w-full px-4 py-2 hover:bg-[#F0676752] dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mr-1"
                          :aria-expanded="isSubDropdownOpen('subdoubleDropdown')">
                          View
                          <svg class="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 4 4 4-4" />
                          </svg>
                        </button>
                        <div
                          :class="{ 'hidden': !isSubDropdownOpen('subdoubleDropdown'), 'md:block': isSubDropdownOpen('subdoubleDropdown') }"
                          class="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#2F3349]"
                          style="left: 100%;top: 50%;" id="subdropdown-right">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="doubleDropdownButton">
                            <li>
                              <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                                Account
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                                Security
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                                Billing & Plans
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                                Notifications
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                                Connections
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#F0676752] rounded-lg dark:hover:text-white mx-1">
                    Roles & Permissions
                  </a>
                </li>
              </ul>

            </div>
          </li>
          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/page.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-2 pr-2 group">Pages</a>
          </li>
          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/toggle.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-2 pr-2 group">Components</a>
          </li>
          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/table.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-2 pr-4 group">Tables</a>
          </li>
          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/forms.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-1 pr-3 group">Forms</a>
          </li>

          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/chart.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-3 pr-3 group">Charts and Maps</a>
          </li>

          <li id="dropdown1"
            class="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <img src="/misc.svg" alt="My SVG Image" />
            <a href="#" id="text" class="block py-2 pl-2 pr-2 group">Misc</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Side Bar -->
  <div>
    <div :id="drawerId" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform"
      style="width: 260px;" :class="{ 'translate-x-full': !isDrawerOpen, 'bg-white dark:bg-[#2F3349]': true }"
      :tabindex="isDrawerOpen ? '0' : '-1'" :aria-labelledby="drawerLabelId">
      <div style="display: flex; flex-direction: row; padding: 35px, 14px, 35px, 24px;" class="p-3">
        <img src="/vuexy-logo.svg" style="height: 24px;width: 34px;margin-right: 10px;" />
        <p class="dark:text-white"
          style="height: 24px; width: 90%;font-weight: 700;display: flex;align-items: center; font-size: 22px; font-family: 'Public Sans', sans-serif;">
          Vuexy</p>
      </div>

      <button @click="closeDrawer" type="button" :data-drawer-hide="drawerId"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 px-3 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li id="dropdown-element">
            <a href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/home.svg" alt="My SVG Image" />
              <span id="text" class="ml-3">Dashboard</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/layout.svg" alt="My SVG Image" />
              <span id="text" class="ml-3">Layout</span>
            </a>
          </li>

          <li>
            <p class="dark:text-white" style="padding: 19px, 30px, 5px, 30px; font-weight: 400; font-size: 13px;">
              Application</p>
          </li>
          <li>
            <button type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example-ecommerce" data-collapse-toggle="dropdown-example-ecommerce">
              <img src="/users.svg" alt="My SVG Image" />
              <span id="text" class="flex-1 ml-3 text-left whitespace-nowrap">Users</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <ul id="dropdown-example-ecommerce" class="hidden py-2 space-y-2">
              <li id="dropdown1">
                <a href="#" id="text"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
              </li>
              <li id="dropdown1">
                <a href="#" id="text"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
              </li>
              <li id="dropdown1">
                <a href="#" id="text"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" id="text"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/book.svg" alt="My SVG Image" />
              <span class="flex-1 ml-3 whitespace-nowrap">Academy</span>
              <span
                class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-[#2F3349] dark:text-gray-300">Pro</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/truck.svg" alt="My SVG Image" />
              <span id="text" class="ml-3">Logistics</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/cart.svg" alt="My SVG Image" />
              <span id="text" class="ml-3">eCommerce</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#" id="text"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/mail-1.svg" alt="My SVG Image" />
              <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span id="span_count"
                class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#" id="text"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/chat.svg" alt="My SVG Image" />
              <span class="flex-1 ml-3 whitespace-nowrap">Chat</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#" id="text"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/calendar.svg" alt="My SVG Image" />
              <span class="flex-1 ml-3 whitespace-nowrap">Calender</span>
            </a>
          </li>
          <li id="dropdown-element">
            <p class="dark:text-white" style="padding: 19px, 30px, 5px, 30px; font-weight: 400; font-size: 13px;">
              pages</p>
          </li>
          <li id="dropdown-element">
            <a href="#" id="text"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/Page-1.svg" alt="My SVG Image" />
              <span class="flex-1 ml-3 whitespace-nowrap">Pages</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#" id="text"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/lock.svg" alt="My SVG Image" />
              <span class="flex-1 ml-3 whitespace-nowrap">Authentications</span>
            </a>
          </li>
          <li id="dropdown-element">
            <a href="#" id="text"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/wizard.svg" alt="My SVG Image" />
              <span class="flex-1 ml-3 whitespace-nowrap">Wizard Examples</span>
            </a>
          </li>

        </ul>
      </div>

    </div>
  </div>
  <!-- Main Div -->
  <div class="bg-[#F8F7FA] dark:bg-[#25293C]" @click="closeDropdown" style="height: 100vh;"></div>
</template>


<script>
export default {
  data() {
    return {
      isDrawerOpen: false,
      isSubDrawerOpen: false,
      drawerId: 'drawer-navigation',
      drawerLabelId: 'drawer-navigation-label',
      isNavbarOpen: false,
      openDropdowns: [],
      openSubDropdown: [],
      showDiv: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    toggleDivVisibility() {
      this.showDiv = !this.showDiv;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    toggleDropdown(id) {
      if (this.openDropdowns.includes(id)) {
        this.openDropdowns = this.openDropdowns.filter((dropdownId) => dropdownId !== id);
      } else {
        this.openDropdowns.push(id);
      }
    },
    toggleSubDropdown(id) {
      if (this.openSubDropdown.includes(id)) {
        this.openSubDropdown = this.openSubDropdown.filter((dropdownId) => dropdownId !== id);
      } else {
        this.openSubDropdown.push(id);
      }
    },
    closeDropdown() {
      this.openDropdowns = [];
      this.openSubDropdown = [];
    },
    isDropdownOpen(id) {
      return this.openDropdowns.includes(id);
    },
    isSubDropdownOpen(id) {
      return this.openSubDropdown.includes(id);
    },
  },
  computed: {
    navbarId() {
      return this.isNavbarOpen ? "navbar-multi-level" : "";
    },
  },
};
</script>
<script setup>
import Dropdown from './views/Dropdown.vue';
import DarkLightModeToggle from './views/DarkLightModeToggle.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const scrollPosition = ref(0);
const showNav = ref(true); // Initially, set to true if you want the div to be visible

const handleScroll = () => {
  // Get the current scroll position
  scrollPosition.value = window.scrollY;

  // Check if the scroll position is greater than or equal to 30px
  if (scrollPosition.value <= 50) {
    showNav.value = false; // Hide the div
  } else {
    showNav.value = true; // Show the div
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  showNav.value = false;
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  showNav.value = false;
});




</script>


<style scoped>
/* Add this CSS rule within the scoped style section */
#dropdown1:focus-within {
  background: linear-gradient(72.47deg, #F06767 22.16%, rgba(240, 103, 103, 0.7) 76.47%);
  border-radius: 10px;
}

#dropdown1 {
  margin-left: 10px;
}

#dropdown-element:focus-within {
  background-color: #F0676752;
  border-radius: 10px;
}

#text {
  font-weight: 400;
  font-size: 14px;
}

#span_count {
  background: #F06767;

}
</style>
