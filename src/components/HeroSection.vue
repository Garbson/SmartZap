<template>
  <v-container
    class="bg-creme"
    fluid
  >
    <v-row
      align="center"
      justify="center"
      class="text-center"
    >
      <v-col
        md="12"
      >
        <v-carousel
          cycle
          continuous
          hide-delimiters
          :show-arrows="false"
          direction="vertical"
          height="40"
          interval="1500"
        >
          <v-carousel-item
            v-for="i in 8"
            :key="i"
          >
            <div class="carousel-content">
              <h2 class="display-1">
                {{ $t(`carousel.items[${i - 1}].title`) }}
              </h2>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.carousel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
