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
    reviews:[
      {
        title: "Professional team of specialists and passionate mentors at reach",
        text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
        img: "avatar1.jpg",
        name: "Madley Pondor",
        work: "IT Specialist"
      },
      {
        title: "High level of efficiency and scientific teaching methods",
        text: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
        img: "avatar2.jpg",
        name: "Mina Hollace",
        work: "Freelancer"
      },
      {
        title: "The MaxCoach team works really hard to ensure high level of quality",
        text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to adopt.",
        img: "avatar3.jpg",
        name: "Luvic Dubble",
        work: "Private Tutor"
      }
    ],
    blogsArticles:[
      {
        img: "artist1.jpeg",
        blogTheme: "artist",
        title: "brush strokes energize trees in paintings",
        date: "May 15, 2020",
        views: "688"
      },
      {
        img: "artist2.jpg",
        blogTheme: "artist",
        title: "pocket-sized notebooks hold miniature paintings",
        date: "May 15, 2020",
        views: "603"
      },
      {
        img: "artist3.jpg",
        blogTheme: "artist",
        title: "connection between self-Portraits and identity",
        date: "May 15, 2020",
        views: "397"
      }
    ],
    addressInfos:[
      "Address",
      "382 NE 191st St # 87394 Miami, FL 33179-3899",
      "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
      "support@maxcoach.com"
    ],
    secondRowLinks:[
      "Explore",
      "Start here",
      "Blog",
      "About us"
    ],
    thirdRowLinks:[
      "",
      "Success story",
      "Courses",
      "Contact us"
    ],
    fourthRowLinks:[
      "Information",
      "Membership",
      "Purchase guide",
      "Privacy policy",
      "Terms of service"
    ],
    counterDots: "",
    positionDotHorizontal: 0,
    positionDotVertical: 0
  },
  methods:{
    slideHorizontal(index, id){

      this.positionDotHorizontal = index;

      if (this.positionDotHorizontal == 0) {
        document.getElementById(id).scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        document.getElementById(id).scrollTo({
          left: (this.positionDotHorizontal*380),
          behavior: 'smooth'
        });
      };

    },
    slideVertical(index, id){

      this.positionDotVertical = index;

      if (this.positionDotVertical == 0) {
        document.getElementById(id).scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        document.getElementById(id).scrollTo({
          top: (this.positionDotVertical*380),
          behavior: 'smooth'
        });
      };

    }
  },
  mounted(){
    this.counterDots = this.courses.length - 2;
  }
});
