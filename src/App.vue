<template>
  <div class="app bg-teal-100 h-screen">
    <!-- Header START -->
    <div class="flex mb-4">
      <div class="flex-1 bg-gray-500 h-12">
        <nav
          class="flex items-center justify-between flex-wrap bg-teal-500 p-6"
        >
          <div class="flex items-center flex-shrink text-white mr-6">
            <svg
              class="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              />
            </svg>
            <span class="font-semibold text-xl tracking-tight"
              >ActTracker FE</span
            >
          </div>
          <div class="w-auto block flex-grow flex items-center">
            <div class="text-sm flex-grow">
              <router-link to="/">
                <a
                  href="#responsive-header"
                  class="block inline-block text-teal-200 hover:text-white mr-4"
                >
                  Home
                </a>
              </router-link>
              <router-link to="/about">
                <a
                  href="#responsive-header"
                  class="block inline-block  text-teal-200 hover:text-white mr-4"
                >
                  About
                </a>
              </router-link>
            </div>
            <div>
              <router-link to="/login">
                <a
                  href="#"
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-0"
                  >Login</a
                ></router-link
              >
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Header END -->
    <!-- Body START -->
    <div class="pt-10 w-2/3 m-auto ">
      <router-view />
    </div>
    <!-- Body END -->
  </div>
</template>

<script>
module.exports = {
  // ...
  data() {
    return {
      // ...
      user: {
        isSignedIn: false
      }
    };
  }
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
