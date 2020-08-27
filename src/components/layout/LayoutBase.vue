<template>
  <v-app class="viewport" id="app">
    <Navigation />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <main class="main">
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
        </main>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Navigation } from "@/components";
export default {
  components: { Navigation },
};
</script>
