let para = document.querySelector(".para");

let twotext = document.querySelector(".twotext");
let next = document.querySelector(".next");
let timebox = document.querySelector(".timebox");
// let overlay = document.querySelector(".overlay");
let onetext=document.querySelector(".onetext");
let threetext=document.querySelector(".threetext");
let fourtext=document.querySelector(".fourtext");
let easy=document.querySelector(".easy");
let intermediate=document.querySelector(".intermediate");
let master=document.querySelector(".master");
let timer;
let  accuracycount = 0;
let currentindex = 0;
   let  time=0;
   let  timestart=false;







let pargraph = ["The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for typing practice. Regular practice helps improve typing speed and accuracy.",
    "Learning to type efficiently is a valuable skill in today's digital world. Consistent practice, proper finger placement, and maintaining accuracy can significantly increase your typing speed.",
    "Technology has transformed the way we communicate, work, and learn. Developing strong typing skills allows people to express their ideas quickly and efficiently."
]
let count;
let span;
easy.addEventListener("click",()=>{
    console.log("hello");
     pargraph = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice typing every day to improve your speed.",
  "A good keyboard can make typing more comfortable.",
  "Learning to type is an important digital skill.",
  "Small improvements lead to big results over time.",
  "Accuracy is more important than speed at first.",
  "Keep your hands relaxed while typing.",
  "Regular practice builds muscle memory.",
  "Focus on each word and avoid rushing.",
  "Typing games can make practice more enjoyable."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);
display();

});
intermediate.addEventListener("click",()=>{
    pargraph  = [
  "Learning to type efficiently requires consistent practice and patience. Many beginners focus entirely on speed, but experienced typists understand that accuracy is equally important. Developing proper finger placement and maintaining good posture can significantly improve both comfort and performance during long typing sessions. Over time, repeated practice builds muscle memory and allows users to type naturally without looking at the keyboard.",

  "Technology has transformed the way people communicate, learn, and conduct business. Computers, smartphones, and internet services have become essential tools in everyday life. As digital communication continues to expand, strong typing skills provide a significant advantage for students, professionals, and anyone who regularly works with technology.",

  "Building strong typing habits requires dedication and a willingness to practice regularly. Many learners become discouraged when they fail to see immediate improvements, but consistent effort often produces remarkable progress over time. Practicing for even twenty minutes each day can substantially increase typing speed and accuracy.",

  "The internet has revolutionized access to information and education. Students can now access online courses, research materials, and educational videos from virtually anywhere in the world. This accessibility has created new opportunities for learning and professional development across multiple disciplines.",

  "Developing keyboard proficiency involves more than memorizing key positions. Successful typists learn to coordinate finger movements efficiently while maintaining concentration and minimizing unnecessary hand movements. This combination of skill and practice allows individuals to achieve impressive typing speeds.",

  "Modern workplaces depend heavily on digital communication and documentation. Employees frequently spend several hours each day writing emails, preparing reports, analyzing data, and collaborating through online platforms. Efficient typing skills can significantly improve workplace productivity.",

  "Maintaining proper posture while typing is essential for preventing discomfort and repetitive strain injuries. Keeping the back straight, shoulders relaxed, and wrists in a neutral position helps reduce physical stress and allows for longer, more comfortable practice sessions.",

  "The development of computer technology has dramatically changed how businesses operate. Organizations now rely on digital systems for communication, accounting, project management, customer service, and data analysis. Employees with strong technical and typing skills often adapt more easily to these environments.",

  "Regular practice sessions are generally more effective than occasional lengthy sessions. Short periods of focused practice help reinforce muscle memory and improve concentration while reducing fatigue and frustration during the learning process.",

  "Students who develop strong typing skills often complete assignments more efficiently and experience greater confidence when working with computers. These skills become increasingly valuable as academic and professional environments continue to adopt digital technologies.",

  "The process of learning touch typing involves training the fingers to locate keys automatically without visual assistance. Although this approach initially feels difficult, consistent practice eventually allows typists to maintain both speed and accuracy simultaneously.",

  "Communication technologies have evolved rapidly over the past several decades. Electronic mail, instant messaging, video conferencing, and social media platforms have fundamentally transformed the way individuals interact and exchange information.",

  "Improving typing speed requires balancing multiple factors, including accuracy, concentration, finger coordination, and familiarity with the keyboard layout. Neglecting any one of these areas can limit overall performance and slow progress.",

  "Software applications continue to play an increasingly important role in education, healthcare, finance, and entertainment. Professionals across these industries rely heavily on computers and benefit greatly from efficient keyboard skills.",

  "Typing exercises that include punctuation, numbers, and special symbols help learners develop a broader range of keyboard skills. These exercises also prepare individuals for real-world typing tasks encountered in academic and professional settings.",

  "The ability to type accurately under time pressure is an important skill for many careers. Journalists, programmers, researchers, and administrative professionals frequently rely on fast and precise typing to complete their responsibilities effectively.",

  "Consistent practice not only improves typing speed but also increases confidence and reduces mental effort. Experienced typists often focus entirely on their thoughts rather than on the physical act of pressing keys.",

  "Digital literacy has become an essential component of modern education. Students are increasingly expected to use computers for research, communication, collaboration, and the completion of academic assignments.",

  "Many successful learners establish structured practice routines that include warm-up exercises, accuracy drills, and timed typing tests. This systematic approach helps track progress and maintain motivation over extended periods.",

  "The continued advancement of technology ensures that keyboard skills will remain valuable for many years. Regardless of future innovations, the ability to communicate efficiently through digital devices is likely to remain an important professional and personal asset."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);

display();
})
master.addEventListener("click",()=>{
    pargraph  = [
  "Artificial intelligence, computational neuroscience, and quantum information theory collectively represent some of the most intellectually demanding disciplines of the twenty-first century. Researchers investigating these fields frequently encounter extraordinarily complex mathematical frameworks, interdisciplinary methodologies, and computational limitations that require exceptional analytical capabilities and persistent experimentation.",

  "The unprecedented acceleration of technological innovation has fundamentally transformed international commerce, telecommunications infrastructure, scientific research methodologies, and organizational management practices. Consequently, professionals operating within technologically intensive environments must continuously acquire specialized knowledge and adapt to increasingly sophisticated operational requirements.",

  "Cybersecurity specialists routinely investigate vulnerabilities associated with cryptographic protocols, distributed computing architectures, authentication mechanisms, and network infrastructure. Successfully mitigating sophisticated cyberattacks requires comprehensive threat analysis, strategic resource allocation, and continuous implementation of advanced defensive technologies.",

  "Astrophysicists examining gravitational interactions, stellar evolution, and cosmological phenomena frequently utilize computational simulations involving extraordinarily large datasets. These investigations contribute significantly to humanity's understanding of planetary formation, galactic dynamics, and the fundamental properties of the observable universe.",

  "Pharmaceutical researchers conducting experimental investigations must evaluate biochemical interactions, physiological responses, molecular structures, and statistical correlations. The development of effective therapeutic treatments often requires extensive laboratory experimentation, rigorous documentation procedures, and international scientific collaboration.",

  "Economic globalization has generated unprecedented opportunities for international investment, technological development, and commercial expansion. Nevertheless, policymakers must simultaneously address socioeconomic inequality, environmental sustainability, regulatory compliance, and geopolitical uncertainty.",

  "Software engineering professionals responsible for developing large-scale distributed applications frequently encounter challenges involving concurrency management, performance optimization, architectural scalability, and cybersecurity implementation. Successfully addressing these challenges requires extensive technical expertise and systematic problem-solving capabilities.",

  "Environmental scientists investigating atmospheric fluctuations, ecological degradation, and climate variability employ sophisticated analytical instruments, computational modeling techniques, and interdisciplinary research methodologies. Their findings significantly influence governmental policies and international environmental agreements.",

  "The philosophical examination of consciousness, epistemology, and metaphysical existence continues to generate substantial intellectual debate among scholars, scientists, and researchers. These discussions frequently involve abstract reasoning, theoretical interpretation, and comprehensive analytical evaluation.",

  "Advancements in aerospace engineering have facilitated remarkable achievements in propulsion systems, orbital mechanics, satellite communications, and extraterrestrial exploration. Such accomplishments require extraordinary precision, extensive scientific knowledge, and continuous technological innovation."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);
    display();

})



function display() {
     count = 0;
    // two.style.display = "none";
    // next.style.display="none";
    // timebox.style.display = "none";
    para.innerHTML = "";
    let currentparaindex = Math.floor(Math.random() * pargraph.length);

    let chars = pargraph[currentparaindex].split("");
    chars.forEach(char => {
        let span = document.createElement("span");
        if (char === " ") {
            count += 1;
            span.style.marginLeft = "15px";
            // span.innerHTML="&nbsp";
            span.style.minWidth = "2px";
            span.style.minHeight = "25px";
        }


        span.innerHTML = char;

        para.append(span);
        

    })
      span = para.querySelectorAll("span");

}

display();
console.log(count);






function typing() {
   

    
    document.addEventListener("keydown", (e) => {

        if (!timestart) {
            timer = setInterval(() => {
                let timebox = document.querySelector(".timebox").innerHTML = time + "sec";

                time++;

            }, 1000);
            timestart = true;
        }

        if (currentindex == span.length-1 ) {
            
            clearInterval(timer);
            let wpm = Math.floor((count / time) * 60);
             onetext.innerHTML = `<h3>WPM<h3><h1>${wpm}</h1>`;
            // timebox.style.display = "flex";

            let per = Math.floor(((span.length - accuracycount) / span.length) * 100);
            twotext.innerHTML = `<h3>Accuracy</h3><h1>${per}%</h1>`
            // two.style.display = "flex";

            // next.style.display = "flex";
            threetext.innerHTML=`<h3>Word</h3><h1>${count}</h1><h3>typed</h3>`
            fourtext.innerHTML=`<h3>Error</h3><h1>${accuracycount}</h1>`;
            return;
        }

        if (e.key.length > 1) {
            return;
        }

        if (span[currentindex]) {

            if (e.key === span[currentindex].textContent) {
                span[currentindex].style.color = "green";

                span[currentindex].classList.remove("active");


                currentindex++;
                if (span[currentindex]) {
                    span[currentindex].classList.add("active");
                }
            }
            else {
                span[currentindex].style.color = "red"
                accuracycount += 1;
            }
        }


    })
}
typing();
next.addEventListener("click", () => {
    console.log("next");
     currentindex = 0;
     time=0;
     let timebox = document.querySelector(".timebox").innerHTML = time + "sec";
    //  timestart=;
    clearInterval(timer);
    timestart=false;

    display();
     
        

})


// let start = document.querySelector(".start");

// start.addEventListener("click", () => {
//     start.blur();
//     let tim = 5;
//     console.log("start");
        




    // next.style.display = "none";
    // overlay.style.display = "flex";
//     let timer2 = setInterval(() => {
//         // overlay.innerHTML = `<h1>${tim}</h1>`;


//         if (tim <= 0) {
//             overlay.innerHTML = `<h1>start !</h1>`;

//             overlay.innerHTML = "";
//             overlay.style.display = "none";
//             clearInterval(timer2);
           
           
//         }
//         tim--;
//     }, 1000);




// })





