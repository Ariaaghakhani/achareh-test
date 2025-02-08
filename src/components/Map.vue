<template>
  <div class="map" style="width: 100%;">
    <l-map ref="map" v-model:zoom="zoom" :center="center">
      <l-tile-layer
          layer-type="base"
          name="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      >

      </l-tile-layer>
      <l-marker :lat-lng="center" draggable="true" @moveend="position=$event.target._latlng;updateLatLng()">
      </l-marker>

    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
  props: {
    latLng: {
      type: Array,
      required: true
    }
  },
  components: {
    LMarker,
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 16,
      center: [35.70685438481545, 51.35564776536503],
      marker: null,
      map: null,
      position: [35.70685438481545, 51.3556477653650],
    };
  },
  mounted() {
    const map = LMap
    this.marker = LTileLayer
    this.map = LMap
  },
  methods: {
    updateLatLng() {
      this.$emit('update:latLng', [this.position.lat, this.position.lng]);
    }
  }
}
</script>


<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .map {
    height: 600px;
  }
}
@media screen and (max-width: 767px) {
  .map {
    height: 500px;
  }
}
</style>