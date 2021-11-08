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
    tog_btn(){
        this.toggle_btn = !this.toggle_btn
  
        if(this.toggle_btn === true){
          this.toggler = 'Show List'
        }else{
          this.toggler = 'Hide List'
        }
      }
}
});
  
app.mount('#user-goals');