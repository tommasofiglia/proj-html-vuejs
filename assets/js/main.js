let app = new Vue({
  // options object
  el: "#app",
  data:{
    navLinks:[
      {
        title: "home"
      },
      {
        title: "pages"
      },
      {
        title: "courses"
      },
      {
        title: "features"
      },
      {
        title: "blog"
      },
      {
        title: "shop"
      }
    ],
    courses:[
      {
        price: "20",
        title: "Learning to Write as a Professional Author",
        lessons: "20",
        students: "50",
        img: "course1.jpg"
      },
      {
        price: "0",
        title: "Customer-centric Info-Tech Strategies",
        lessons: "24",
        students: "769",
        img: "course2.jpg"
      },
      {
        price: "19",
        title: "Open Programming Courses for Everyone: Python",
        lessons: "17",
        students: "62",
        img: "course3.jpg"
      },
      {
        price: "26",
        title: "Academic Listening and Note-taking",
        lessons: "14",
        students: "67",
        img: "course4.jpg"
      },
      {
        price: "0",
        title: "Personal Finance: Financial Security Thinking & Principles",
        lessons: "15",
        students: "89",
        img: "course5.jpg"
      },
      {
        price: "20",
        title: "Learning to Write as a Professional Author",
        lessons: "20",
        students: "50",
        img: "course1.jpg"
      },
      {
        price: "0",
        title: "Customer-centric Info-Tech Strategies",
        lessons: "24",
        students: "769",
        img: "course2.jpg"
      }
    ],
    counterDots: "",
    positionDot: 0
  },
  methods:{
    slideTo(index){
      this.positionDot = index;
      console.log(this.positionDot);
      if (this.positionDot == 0) {
        document.getElementById('slider').scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        document.getElementById('slider').scrollTo({
          left: (this.positionDot*380),
          behavior: 'smooth'
        });
      };
    }
  },
  mounted(){
    this.counterDots = this.courses.length - 2;
  }
});
