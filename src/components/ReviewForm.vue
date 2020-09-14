<template>
<div> 
    <h2 class="titleall">Give Feedback</h2>

<p  v-if="errors.length">
    <span class="err"><b>Please correct the following error(s):</b></span>
    <ul>
      <li v-for="error in errors" :key='error'>{{ error }}</li>
    </ul>
  </p>
  <p  v-if="comp">
    <span class="comp"><b>Thank you, form submitted</b></span>
    
  </p>
  
  
    <div class="formCont">
        <form @submit.prevent='reloadPage'>
            <b-field label="Rating">
            <b-slider :max='5' type="is-success" v-model='review.rating' ></b-slider>
            </b-field>

            <b-field class="selectF" label='Device Variation'>
              <b-select v-model='review.variation' placeholder="Select a Device" >
                <option value="Charcoal Fabric">Charcoal Fabric</option>
                <option value="Sandstone Fabric">Sandstone Fabric</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Walnut Finish">Walnut Finish</option>
                <option value="Heather Gray Fabric">Heather Gray Fabric</option>
                <option value="Oak Finish">Oak Finish</option>
            </b-select>
            </b-field>

             <b-field label="Review" >
            <b-input v-model='review.review' maxlength="500" type="textarea" required></b-input>
            </b-field>


            <b-button @click='checkForm' type='is-submit is-success'  outlined expanded>Submit</b-button>

        </form>
        
    </div>


    </div>
 
</template>

<script>

export default {
    name:'ReviewForm',
  

    data(){
        return{
            errors:[],
            comp : false,
            review:{
                rating:null,
                variation: null,
                review :null,
                timestamp: +new Date(),
            },
        }
    },
    methods:{
//form validation
    checkForm: function () {
        this.errors = []
        this.comp=false
    // if all parts of form entered 
      if (this.review.rating && this.review.variation && this.review.review) {
        this.comp = true
        this.$emit('add:review', this.review)
        //emit data to parent component and reset values 
        this.review.rating = null
        this.review.variation = null
        this.review.review = null
        this.reloadPage()
        return 
        
      }
   
    // if not add error message to error array
    
      if (!this.review.rating) {
        this.errors.push('Rating required.');
      }
      if (!this.review.variation) {
        this.errors.push('Device Variation required.');
      }
       if (!this.review.review) {
        this.errors.push('review required.');
      }
        
    },
    
  reloadPage(){
    setTimeout(function(){
      window.location.reload()
    }, 1000)
    
  }
,

      
    }
    
}


</script>


<style scoped>
.formCont{
    margin: 10px auto;
    width: 40vw;
}
.selectF{
    width: 100%;
}
.err{
    background-color: rgba(221, 73, 73, 0.479);
}
.comp{
    background-color: rgba(79, 199, 79, 0.589);
}
</style>