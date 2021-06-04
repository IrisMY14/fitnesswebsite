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
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name"
          v-model="name"
        />
      </div>
    </div>

       <div class="field">
        <label class="label">E-Mail</label>
        <div class="control">
        <input
            class="input"
            type="email"
            placeholder="E-Mail Adresse"
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
            placeholder="Phone Number"
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
      <button class="buttonsave" @click="saveGuest">Sign Up</button>
    </div>
  </div>

</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddGuest",
  data() {
    return {
      vorname: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    // Create New Guest
    async saveGuest() {
      try {
        await axios.post("http://localhost:5000/guest", {
          vorname: this.vorname,
          nachname: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        });
        this.vorname = "";
        this.name = "";
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
.buttonsave {
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
 
