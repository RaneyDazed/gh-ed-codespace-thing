import React from "react"; // Import the React library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"; // Import the faGraduationCap icon

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="education">
          <h2>
            <FontAwesomeIcon icon={faGraduationCap} />
            Education
          </h2>
          <p>
            This is a great area to highlight your educational background. You can include your
            school, area of study, degree obtained, and any honors or awards you may have received.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Education;
