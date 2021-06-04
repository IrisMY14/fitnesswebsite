<template>
  <div>
    <router-link :to="{ name: 'Index' }" class="button is-success mt-5"
      >Go back to Homepage</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.Guest_id">
          <td>{{ item.vorname }}</td>
          <td>{{ item.nachname }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.message }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="button is-info is-small"
              >Bearbeiten</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteGuest(item.id)"
              >Löschen</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "GuestList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getGuests();
  },
 
  methods: {
    // Get All Guests
    async getGuests() {
      try {
        const response = await axios.get("http://localhost:5000/guest");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Guest
    async deleteGuest(id) {
      try {
        await axios.delete(`http://localhost:5000/guest/${id}`);
        this.getGuests();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
