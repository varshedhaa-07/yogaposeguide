// // // import React from 'react';

// // // function Home() {
// // //   return (
// // //     <div
// // //       className="vh-100 d-flex justify-content-center align-items-center"
// // //       style={{
// // //         backgroundImage: `url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //         paddingTop: '70px',
// // //       }}
// // //     >
// // //       <div className="text-center text-white">
// // //         <h1 className="display-4 fw-bold">Welcome to YogaTrack</h1>
// // //         <p className="lead">Your personal guide to learning and tracking yoga poses.</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;

// // import React from 'react';

// // function HomePage() {
// //   return (
// //     <div>
// //       <section id="home" className="vh-100 d-flex justify-content-center align-items-center text-white" style={{
// //         backgroundImage: `url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=1170')`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         paddingTop: '70px',
// //       }}>
// //         <div className="text-center">
// //           <h1 className="display-4 fw-bold">Welcome to YogaTrack</h1>
// //           <p className="lead">Your personal guide to learning and tracking yoga poses.</p>
// //         </div>
// //       </section>

// //       <section id="about" className="py-5 bg-light text-center">
// //         <div className="container">
// //           <h2 className="mb-4">About YogaTrack</h2>
// //           <p className="lead">
// //             YogaTrack is more than just an app—it's your wellness companion. We help you:
// //           </p>
// //           <ul className="list-unstyled fs-5">
// //             <li>🧘‍♀️ Master yoga poses with video tutorials</li>
// //             <li>📅 Create personalized daily routines</li>
// //             <li>📊 Track progress with analytics</li>
// //             <li>🌙 Get smart reminders based on your lifestyle</li>
// //             <li>🤝 Community feature to share your yoga journey</li>
// //           </ul>
// //         </div>
// //       </section>

// //       <section id="contact" className="py-5 text-center bg-dark text-white">
// //         <div className="container">
// //           <h2 className="mb-4">Contact Us</h2>
// //           <p className="fs-5">We'd love to hear from you! Reach out for support, feedback, or collaboration ideas.</p>
// //           <div className="d-flex flex-column align-items-center">
// //             <p><strong>Email:</strong> support@yogatrack.com</p>
// //             <p><strong>Phone:</strong> +91 98765 43210</p>
// //             <p><strong>Instagram:</strong> @YogaTrack_Official</p>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default HomePage;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const About = () => {
//   return (
//     <div>

//       {/* 🔹 Header Section */}
//       <section className="text-center text-black py-5" style={{ 
//         backgroundImage:`url('https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
//       }}>
//         <div className="container">
//           <h1 className="display-4 fw-bold">About Yoga Pose Guide</h1>
//           <p className="lead mt-3">Helping you learn, grow, and stay mindful—one pose at a time.</p>
//         </div>
//       </section>

//       {/* 🔹 Section 1: Our Mission */}
//       <section className="py-5 bg-light">
//         <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
//           <img 
//             src="https://img.icons8.com/emoji/96/lotus-position.png" 
//             alt="lotus-icon" 
//             className="img-fluid" 
//             style={{ width: "100px" }} 
//           />
//           <div>
//             <h3 className="fw-bold">Our Purpose</h3>
//             <p className="text-muted">
//               We created Yoga Pose Guide to simplify yoga learning and support mindful routines.
//               We believe everyone deserves a space to grow with yoga—at their own pace.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Section 2: What We Offer */}
//       <section className="py-5">
//         <div className="container text-center">
//           <h3 className="fw-bold mb-4">What We Offer</h3>
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <div className="card shadow-sm h-100 border-0">
//                 <div className="card-body">
//                   <img src="https://img.icons8.com/ios-filled/50/book.png" alt="pose-library" />
//                   <h5 className="card-title mt-3">📘 Pose Library</h5>
//                   <p className="card-text text-muted">Step-by-step breakdowns with benefits.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card shadow-sm h-100 border-0">
//                 <div className="card-body">
//                   <img src="https://img.icons8.com/ios-filled/50/yoga.png" alt="routine-builder" />
//                   <h5 className="card-title mt-3">🧘‍♀️ Routine Builder</h5>
//                   <p className="card-text text-muted">Customize and save your own yoga sequences.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card shadow-sm h-100 border-0">
//                 <div className="card-body">
//                   <img src="https://img.icons8.com/ios-filled/50/combo-chart.png" alt="progress-tracker" />
//                   <h5 className="card-title mt-3">📊 Progress Tracker</h5>
//                   <p className="card-text text-muted">Track your practice, streaks, and pose mastery.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Section 3: Our Values */}
//       <section className="bg-light py-5">
//         <div className="container text-center">
//           <h3 className="fw-bold mb-4">Our Values</h3>
//           <div className="row justify-content-center">
//             <div className="col-md-3 mb-4">
//               <div className="p-3 border rounded bg-white shadow-sm">
//                 <h5>🧘‍♂️ Mindfulness</h5>
//                 <p className="text-muted small">We stay present and focused in every practice.</p>
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <div className="p-3 border rounded bg-white shadow-sm">
//                 <h5>✨ Simplicity</h5>
//                 <p className="text-muted small">Yoga made easy and approachable for everyone.</p>
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <div className="p-3 border rounded bg-white shadow-sm">
//                 <h5>🌍 Accessibility</h5>
//                 <p className="text-muted small">Available to all, no matter your background.</p>
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <div className="p-3 border rounded bg-white shadow-sm">
//                 <h5>🔁 Consistency</h5>
//                 <p className="text-muted small">Small efforts daily lead to big transformations.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default About;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const About = () => {
//   return (
//     <div>
//       {/* 🔹 Header Section (Intro Banner) */}
//       <section
//         className="d-flex align-items-center justify-content-center text-center text-white"
//         style={{
//           minHeight: "100vh",
//           backgroundImage: `url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           paddingTop: "70px",
//           flexDirection: "column",
//           padding: "3rem",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
//           About Yoga Pose Guide
//         </h1>
//         <p style={{ fontSize: "1.3rem", marginTop: "1rem", maxWidth: "700px" }}>
//           “Helping you learn, grow, and stay mindful—one pose at a time.”
//         </p>
//       </section>

//       {/* 🔹 Section 1: Our Mission */}
//       <section
//         className="container my-5"
//         style={{
//           background: "#e5a40bff",
//           color: "black",
//           borderRadius: "10px",
//           padding: "30px",
//         }}
//       >
//         <div className="row align-items-center">
//           <div className="col-md-6 text-center">
//             <img
//               src="https://media.istockphoto.com/id/529250801/vector/successful-shoot-darts-target-aim-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=wVawZCswoOyNBmqe0S-ZZu8-7QZsO9usdajQJXlrwzU="
//               alt="Lotus icon"
//               width="150"
//             />
//           </div>
//           <div className="col-md-6">
//             <h2>Our Purpose</h2>
//             <p>
//               We created Yoga Pose Guide to simplify yoga learning and support
//               mindful routines. We believe everyone deserves a space to grow
//               with yoga—at their own pace.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Section 2: What We Offer */}
//       <section style={{ background: '#e5a40bff' }} className="py-5">
//   <div className="container">
//     <h2 className="text-center mb-4">What We Offer</h2>
//     <div className="row">
//       {/* Card 1 */}
//       <div className="col-md-4 text-center mb-4">
//         <div className="p-4 shadow-sm rounded bg-white h-100 offer-card">
//           <span style={{ fontSize: '2rem' }}>📘</span>
//           <h5 className="mt-3">Pose Library</h5>
//           <p>Step-by-step breakdowns with benefits.</p>
//         </div>
//       </div>
//       {/* Card 2 */}
//       <div className="col-md-4 text-center mb-4">
//         <div className="p-4 shadow-sm rounded bg-white h-100 offer-card">
//           <span style={{ fontSize: '2rem' }}>🧘‍♀️</span>
//           <h5 className="mt-3">Routine Builder</h5>
//           <p>Customize and save your own yoga sequences.</p>
//         </div>
//       </div>
//       {/* Card 3 */}
//       <div className="col-md-4 text-center mb-4">
//         <div className="p-4 shadow-sm rounded bg-white h-100 offer-card">
//           <span style={{ fontSize: '2rem' }}>📊</span>
//           <h5 className="mt-3">Progress Tracker</h5>
//           <p>Track your practice, streaks, and pose mastery.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



//       {/* 🔹 Section 3: Our Values */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Our Values</h2>
//         <div className="row">
//           {[
//             {
//               icon: "🧠",
//               title: "Mindfulness",
//               desc: "Stay present and aware.",
//             },
//             {
//               icon: "⚙️",
//               title: "Simplicity",
//               desc: "Clear and user-friendly design.",
//             },
//             {
//               icon: "🌍",
//               title: "Accessibility",
//               desc: "Yoga for everyone, everywhere.",
//             },
//             {
//               icon: "📅",
//               title: "Consistency",
//               desc: "Build and maintain habits.",
//             },
//           ].map((val, index) => (
//             <div key={index} className="col-md-3 text-center mb-4">
//               <div className="p-3 shadow-sm rounded bg-light h-100">
//                 <div style={{ fontSize: "2rem" }}>{val.icon}</div>
//                 <h5 className="mt-2">{val.title}</h5>
//                 <p style={{ fontSize: "0.95rem" }}>{val.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div>
      {/* 🔹 Embedded style for zoom effect */}
      <style>
  {`
    .offer-card {
      background: linear-gradient(145deg, #f5c24aff, #e0ca3aff);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
    }

    .offer-card:hover {
      transform: scale(1.05);
      box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.4), 0 0.5rem 1.2rem rgba(0, 0, 0, 0.2);
    }
  `}
</style>


      {/* 🔹 Header Section (Intro Banner) */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          minHeight: "100vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "70px",
          flexDirection: "column",
          padding: "3rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Welcome to YogaTrack
        </h1>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem", maxWidth: "700px" }}>
          Your personal guide to learning and tracking yoga poses
        </p>
      </section>

      {/* 🔹 Section 1: Our Mission */}
      <section
        className="container my-5"
        style={{
          background: "linear-gradient(145deg, #f5c24aff, #e0ca3aff)",
          color: "black",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="https://media.istockphoto.com/id/529250801/vector/successful-shoot-darts-target-aim-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=wVawZCswoOyNBmqe0S-ZZu8-7QZsO9usdajQJXlrwzU="
              alt="Lotus icon"
              width="150"
            />
          </div>
          <div className="col-md-6">
            <h2>Our Purpose</h2>
            <p>
              We created YogaTrack to simplify yoga learning and support
              mindful routines. We believe everyone deserves a space to grow
              with yoga—at their own pace.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Section 2: What We Offer */}
      <section style={{ background: '#ffffffff' }} className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">What We Offer</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 shadow-sm rounded bg-white h-100 offer-card">
                <span style={{ fontSize: '2rem' }}>📘</span>
                <h5 className="mt-3">Pose Library</h5>
                <p>Step-by-step breakdowns with benefits.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 shadow-sm rounded bg-white h-100 offer-card">
                <span style={{ fontSize: '2rem' }}>🧘‍♀️</span>
                <h5 className="mt-3">Routine Builder</h5>
                <p>Customize and save your own yoga sequences.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 shadow-sm rounded bg-white h-100 offer-card">
                <span style={{ fontSize: '2rem' }}>📊</span>
                <h5 className="mt-3">Progress Tracker</h5>
                <p>Track your practice, streaks, and pose mastery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Section 3: Our Values */}
      <section className="container my-5" style={{ background: '#fff' }}>
  <h2 className="text-center mb-4">Our Values</h2>
  <div className="row">
    {[
      {
        icon: "🧠",
        title: "Mindfulness",
        desc: "Stay present and aware.",
      },
      {
        icon: "⚙️",
        title: "Simplicity",
        desc: "Clear and user-friendly design.",
      },
      {
        icon: "🌍",
        title: "Accessibility",
        desc: "Yoga for everyone, everywhere.",
      },
      {
        icon: "📅",
        title: "Consistency",
        desc: "Build and maintain habits.",
      },
    ].map((val, index) => (
      <div key={index} className="col-md-3 text-center mb-4">
        <div
          className="p-3 shadow-sm rounded h-100"
          style={{
            background: "linear-gradient(145deg, #f5c24aff, #e0ca3aff)",
            color: '#000',
            borderRadius: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ fontSize: "2rem" }}>{val.icon}</div>
          <h5 className="mt-2">{val.title}</h5>
          <p style={{ fontSize: "0.95rem" }}>{val.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default About;
