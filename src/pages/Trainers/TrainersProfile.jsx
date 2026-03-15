import React from "react";
import "./TrainersProfile.css";

function TrainersProfile() {
  return (
    <section className="trainer-profile-section">

      <h1 className="trainer-profile-title">Trainer Profiles</h1>

      <div className="trainer-profile-cards">

        <div className="trainer-profile-card">
          <h3>John Smith</h3>
          <p>
            John Smith is a senior software developer with over 10 years
            of experience in full-stack development. He specializes in
            JavaScript, React, and Node.js and has mentored hundreds of
            students in building real-time web applications.
          </p>
        </div>

        <div className="trainer-profile-card">
          <h3>Priya Sharma</h3>
          <p>
            Priya Sharma is an expert in data analytics and Python
            programming. She focuses on teaching practical concepts,
            helping students understand data analysis, machine learning,
            and real-world applications.
          </p>
        </div>

        <div className="trainer-profile-card">
          <h3>Rahul Kumar</h3>
          <p>
            Rahul Kumar is a cloud computing specialist with extensive
            experience in AWS and DevOps tools. He guides students in
            deploying scalable applications and understanding modern
            cloud infrastructure.
          </p>
        </div>

      </div>

    </section>
  );
}

export default TrainersProfile;