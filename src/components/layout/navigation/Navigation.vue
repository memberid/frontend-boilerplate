<template>
  <v-navigation-drawer class="nav" width="auto" app>
    <v-row class="fill-height" no-gutters>
      <v-card class="nav__aside" width="110">
        <v-list dense nav class="nav__aside-list">
          <v-list-item-group
            class="nav__aside-list__group"
            v-model="activeNavigation"
          >
            <div class="nav__aside-list__top">
              <v-list-item
                link
                v-for="(item, index) in navigations"
                :key="index"
                @click="handleSelectedMenu(item.title)"
              >
                <v-list-item-content class="text-center">
                  <v-list-item-title>
                    <v-list-item-action class="d-flex mx-0 justify-center">
                      <font-awesome-icon
                        :icon="['fal', item.icon]"
                        class="nav__icon"
                      />
                    </v-list-item-action>
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-2">
                    <div class="nav__subtitle">
                      {{ item.title }}
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div class="nav__aside-list__bottom">
              <v-list-item link @click="handleSelectedMenu('My Account')">
                <v-list-item-content class="text-center">
                  <v-list-item-title>
                    <v-list-item-action class="d-flex mx-0 justify-center">
                      <v-avatar color="primary" size="28">
                        <span class="white--text">MH</span>
                      </v-avatar>
                    </v-list-item-action>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content class="text-center">
                  <v-list-item-title>
                    <v-list-item-action class="d-flex mx-0 justify-center">
                      <font-awesome-icon
                        :icon="['fal', 'question-circle']"
                        class="nav__icon"
                      />
                    </v-list-item-action>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link @click="handleSelectedMenu('Logout')">
                <v-list-item-content class="text-center">
                  <v-list-item-title>
                    <v-list-item-action class="d-flex mx-0 justify-center">
                      <font-awesome-icon
                        :icon="['fal', 'sign-out']"
                        class="nav__icon"
                      />
                    </v-list-item-action>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-card>

      <v-card class="nav__menu grow" width="240">
        <div class="nav__menu-loading" v-if="loading">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <v-list v-else dense nav>
          <v-list-item-group v-model="activeMenu">
            <v-list-item
              class="nav__menu-item"
              v-for="(itemMenu, index) in listMenu"
              :key="index"
              link
            >
              <v-list-item-title class="text-subtitle-1 font-weight-regular">
                {{ itemMenu.title }}
              </v-list-item-title>
            </v-list-item>
            <v-list-group value="true" append-icon="angle-down">
              <template v-slot:activator>
                <v-list-item-title class="text-subtitle-1 font-weight-regular"
                  >Parent</v-list-item-title
                >
              </template>
              <v-list-item class="nav__menu-item" link>
                <v-list-item-title class="text-subtitle-1 font-weight-regular">
                  Children
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      loading: false,
      activeNavigation: 6,
      activeMenu: 0,
      selectedMenu: "My Account",
      navigations: [
        { title: "Dashboard", icon: "layer-group" },
        { title: "Brand & Outlet", icon: "store" },
        { title: "Loyalty", icon: "hand-heart" },
        { title: "F&B Order", icon: "utensils-alt" },
        { title: "App Content", icon: "mobile" },
        { title: "Report", icon: "chart-pie-alt" },
      ],
      menus: [
        {
          title: "My Account",
          list: [
            {
              subject: "My Profile",
              title: "My Profile",
              to: "/my-profile",
            },
            {
              subject: "Team Members",
              title: "Team Members",
              to: "/team-members",
            },
            {
              subject: "Team Member Role",
              title: "Team Member Role",
              to: "/team-member-role",
            },
          ],
        },
        {
          title: "Dashboard",
          list: [
            {
              subject: "Dashboard",
              title: "Dashboard",
              to: "/dashboard",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  computed: {
    listMenu() {
      return _.filter(this.menus, { title: this.selectedMenu })[0].list;
    },
  },
  methods: {
    handleSelectedMenu(value) {
      this.loading = true;
      this.selectedMenu = value;
      this.activeMenu = 0;
      setTimeout(() => {
        this.loading = false;
      }, 500);

      if (value == "Logout") {
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style></style>
