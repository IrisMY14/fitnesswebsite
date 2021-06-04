<template>
  <div>
    <div class="field">
      <label class="label">Vorname</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Vorname"
          v-model="vorname"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Nachname</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nachname"
          v-model="nachname"
        />
      </div>
    </div>

        <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Email"
          v-model="email"
        />
      </div>
    </div>

        <div class="field">
      <label class="label">Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Phone"
          v-model="phone"
        />
      </div>
    </div>

        <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Message"
          v-model="message"
        />
      </div>
    </div>
    <div class="control">
      <button class="buttonupdate" @click="updateGuest">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditGuest",
  data() {
    return {
      vorname: "",
      nachname: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  created: function () {
    this.getGuestById();
  },
  methods: {
    // Get Guest By Id
    async getGuestById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/guest/${this.$route.params.id}`
        );
        this.vorname = response.data.vorname;
        this.nachname = response.data.nachname;
        this.email = response.data.email;
        this.phone = response.data.phone;
        this.message = response.data.message;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update Guest
    async updateGuest() {
      try {
        await axios.put(
          `http://localhost:5000/guest/${this.$route.params.id}`,
          {
            vorname: this.vorname,
            nachname: this.nachname,
            email: this.email,
            phone: this.phone,
            message: this.message,
          }
        );
        this.vorname = "";
        this.nachname = "";
        this.email = "";
        this.phone = "";
        this.message = "";
        this.$router.push("/overview");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
.buttonupdate {
  background-color: #28a745;
  font-family: Montserrat;
  border-radius: 5px 5px 5px 5px;
  color: white;
  font-size: 15px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
</style>
