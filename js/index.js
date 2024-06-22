const statsContainer = document.querySelector('.stats-content');
fetch(
  "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics"
) 
.then((response) => response.json())
.then(data => {
    data.data.forEach(item => {

      const metricsDiv = document.createElement('div');
      metricsDiv.classList.add('metrics');

      const textPair = document.createElement('div')
      textPair.classList.add('text-pair');
      
      const metricValue = document.createElement('p');
      metricValue.classList.add('value');
      metricValue.textContent = item.value.toLocaleString();

      const metricName = document.createElement('p');
      metricName.classList.add('metrics');
        metricName.textContent = capitalizeFirstLetter(item.metric);

        textPair.appendChild(metricValue);
        textPair.appendChild(metricName);

        metricsDiv.appendChild(textPair);

        statsContainer.appendChild(metricsDiv)
    })
        
})
.catch(error => {
  console.error('Error fetching data:', error);
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
