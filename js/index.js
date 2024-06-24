const statsContainer = document.querySelector('.stats-content');
const loading = document.querySelector('.loading-container');

loading.style.display = 'block';
fetch(
  "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics"
) 
.then((response) => response.json())
.then(data => {
  loading.style.display = 'none';

    data.data.forEach(item => {

      const metricsDiv = document.createElement('div');
      metricsDiv.classList.add('metrics');

      const textPair = document.createElement('div')
      textPair.classList.add('text-pair');
      
      const metricValue = document.createElement('p');
      metricValue.classList.add('metrics-value');
      metricValue.textContent = item.value.toLocaleString();

      const metricName = document.createElement('p');
      metricName.classList.add('metrics-name');
        metricName.textContent = formatMetricName(item.metric);

        textPair.appendChild(metricValue);
        textPair.appendChild(metricName);

        metricsDiv.appendChild(textPair);

        statsContainer.appendChild(metricsDiv)
    })
        
})
.catch(error => {
  console.error('Error fetching data:', error);
  loading.style.display = 'none';
});


function formatMetricName(metric) {
  let formattedMetric = metric
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/downloads/, 'Downloads')
    .replace(/paid users/, 'Paid users')
    .replace(/library images/, 'Images in library');

  // Capitalize only the first letter of the first word
  formattedMetric = formattedMetric.charAt(0).toUpperCase() + formattedMetric.slice(1);

  return formattedMetric;
}

