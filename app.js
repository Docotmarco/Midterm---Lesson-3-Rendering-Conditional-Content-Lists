const app = Vue.createApp({
    data() {
      return { 
          entergoalvalue:'',
          goals: [],
          toggler: 'Hide',
          toggle_btn: false,   
     };
    },
methods:{
    add_goal(){
        this.goals.push(this.entergoalvalue)
    },
}
});
  
app.mount('#user-goals');