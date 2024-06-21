const featuresContainer = document.querySelector(".features");

fetch("/data/featuresData.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((feature) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      const thumbnailIcons = document.createElement("div");
      thumbnailIcons.classList.add("thumbnail-icons");
      thumbnailIcons.innerHTML = feature.icons;

      const textPair = document.createElement("div");
      textPair.classList.add("text-pair");

      const title = document.createElement("h3");
      title.classList.add("feature-title");
      title.textContent = feature.title;

      const description = document.createElement("p");
      description.classList.add("feature-description");
      description.textContent = feature.description;

      textPair.appendChild(title);
      textPair.appendChild(description);

      rowDiv.appendChild(thumbnailIcons);
      rowDiv.appendChild(textPair);

      featuresContainer.appendChild(rowDiv);
    });
  })

  .catch((error) => {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = `Error: ${error.message} An error occurred while fetching data`;
    featuresContainer.appendChild(errorDiv);
  });
