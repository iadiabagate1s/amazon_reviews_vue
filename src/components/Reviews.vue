<template>
<div>
    
<h3>Recent Reviews</h3>


<div class="revcont">

    <b-card 
    v-for='rev in res' :key='rev.id'
      :header= "`Device Variation : ${rev.data().variation}`"
      header-tag="header"
     
    >
    <b-card-title class="cardtitle">
       
        <span v-for=' n in Array.from({length:parseInt(rev.data().rating)})' :key="n">
         <b-icon icon='star-fill' variant='success'></b-icon>
        </span>
        </b-card-title>

      <b-card-text class="card-text"> <b>Review : </b>{{rev.data().review}}</b-card-text>
    <b-card-footer class="card-footer"><h6 class="cardf">Date: {{rev.data().timestamp | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</h6></b-card-footer>
    </b-card>

</div>



</div>
    
</template>

<script>

//recieves data array in prop from parent
export default {
    name : 'reviews',
    props:{
        res: Array,
        comp:Boolean
    },
   
        
     
}
    


</script>



<style scoped>
.revcont{
    display: flex;
    flex-direction: column;
    margin: 5px auto;
    justify-content: center;
    align-content: center;
    align-items: center;
    
  
}
.card{
    
    width:50vw;
    border: 1px solid black;
    margin: 10px 3px;
    text-align: center;
    
}
.header{
    background-color: beige;
    height: 5vh;
}
.card-text{
    
    margin-top: 4px;

}
.card-footer{
    text-align: center;
    margin: 0 auto;
    
}


</style>