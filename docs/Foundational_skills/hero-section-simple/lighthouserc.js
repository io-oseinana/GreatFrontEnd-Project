module.exports = {
  ci: {
    collect: {
      url: ['https://io-oseinana.github.io/hero-section-simple/'],  // Replace with the URL your app runs on
      startServerCommand: 'npm start',
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.8}],
        'categories:accessibility': ['error', {minScore: 0.8}],
        'categories:best-practices': ['error', {minScore: 0.8}],
        'categories:seo': ['error', {minScore: 0.8}]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
  