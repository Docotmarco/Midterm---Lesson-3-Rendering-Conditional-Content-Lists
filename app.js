const app = Vue.createApp({
    data() {
      return { 
          entergoalvalue:'',
          goals: [],
          toggler: 'Hide',
          toggle_btn: false,
         
     };
    },
});
  
app.mount('#user-goals');