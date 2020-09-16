<template>
  <div id="app">
    <ReviewForm @add:review="addReview" :comp="comp" />

    <reviews :res="res" :comp="comp" :key="comp" />
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import ReviewForm from "@/components/ReviewForm";
import Reviews from "@/components/Reviews";
import db from "./firebaseinit";
export default {
  name: "App",
  components: {
    ReviewForm,
    Reviews
  },
  data() {
    return {
      res: [],
      comp: false
    };
  },
  //get data from database on mount
  created() {
    // db.collection('reviews').orderBy('timestamp','desc').get().then(
    //   results => {

    //     let newres = results.docs.slice(0,3)
    //    console.log('mount----------- results',newres)
    //     this.res= [...newres]

    //   }

    // ).catch(
    //   err => console.log(err)

    // )

    db.collection("reviews")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        res => {
          let newres = res.docs.slice(0, 3);
          console.log("mount----- Reaload-Update-- results", newres);
          this.res = [...newres];
        },
        error => {
          console.log(error);
        }
      );
  },
  // get data from databse everytime form submitted

  //when form is submitted send review object to databse
  methods: {
    addReview(review) {
      try {
        this.comp = true;
        db.collection("reviews")
          .doc(`${uuid.v1()}`)
          .set({
            ...review
          })
          .then(console.log("sent--"), (this.count += 1))
          .catch(err => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
