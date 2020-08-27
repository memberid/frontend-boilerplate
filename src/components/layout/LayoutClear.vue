<template>
  <v-app class="viewport" id="app">
    <!-- Sizes your content based upon application components -->
    <v-main class="main">
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <div class="main__wrapper">
        <div class="main__body">
          <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
            mode="out-in"
          >
            <router-view style="animation-duration: .5s" />
          </transition>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script></script>
