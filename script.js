function showRoadmap(){

  const selectedCourse =
  document.getElementById("courseSelect").value;

  const container =
  document.getElementById("roadmapContainer");

  container.innerHTML = "";

  if(selectedCourse === ""){

    container.innerHTML =
    "<p>Please Select a Course</p>";

    return;
  }

  const course =
  roadmapData[selectedCourse];

  let html = `

    <div class="card">

      <h2>${course.title}</h2>

      <p class="description">
        ${course.description}
      </p>
  `;

  course.steps.forEach(step => {

    html += `

      <div class="stepBox">

        <h3>
          ${step.title}
        </h3>

        <p>

          <strong>
            What To Do:
          </strong>

          ${step.details}

        </p>

        <p>

          <strong>
            Avoid:
          </strong>

          ${step.avoid}

        </p>

        <a href="${step.source}"
           target="_blank">

           Watch Free Video

        </a>

      </div>
    `;
  });

  html += `
    </div>
  `;

  container.innerHTML = html;
}