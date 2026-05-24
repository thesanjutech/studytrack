function showRoadmap(){

  const selectedCourse =
  document.getElementById("courseSelect").value;

  const container =
  document.getElementById("roadmapContainer");

  container.innerHTML = "";

  if(selectedCourse === ""){

    container.innerHTML =
    "<h2>Please Select A Course</h2>";

    return;
  }

  const course =
  roadmapData[selectedCourse];

  if(!course){

    container.innerHTML =
    "<h2>Roadmap Coming Soon...</h2>";

    return;
  }

  let html = `

    <div class="card">

      <h2>${course.title}</h2>

      <p>
        <strong>Duration:</strong>
        ${course.duration}
      </p>

      <p class="description">
        ${course.description}
      </p>
  `;

  course.years.forEach(year => {

    html += `

      <div class="stepBox">

        <h3>${year.year}</h3>

        <p>
          <strong>Subjects:</strong>
          ${year.subjects.join(", ")}
        </p>

        <p>
          <strong>Focus:</strong>
          ${year.focus}
        </p>

        <p>
          <strong>Do:</strong>
          ${year.do}
        </p>

        <p>
          <strong>Do Not:</strong>
          ${year.avoid}
        </p>

        <a href="${year.resource}"
           target="_blank">

           Watch Tutorial

        </a>

      </div>
    `;
  });

  html += `</div>`;

  container.innerHTML = html;
}

function searchCourse(){

  const input =
  document.getElementById("searchInput")
  .value
  .toLowerCase();

  const select =
  document.getElementById("courseSelect");

  for(let option of select.options){

    if(
      option.text.toLowerCase()
      .includes(input)
    ){

      select.value = option.value;

      break;
    }
  }
}