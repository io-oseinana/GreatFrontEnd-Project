module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000'],  // Replace with the URL your app runs on
        startServerCommand: 'npm start',
        numberOfRuns: 3
      },
      assert: {
        assertions: {
          'categories:performance': ['error', {minScore: 0.9}],
          'categories:accessibility': ['error', {minScore: 0.9}],
          'categories:best-practices': ['error', {minScore: 0.9}],
          'categories:seo': ['error', {minScore: 0.9}]
        }
      },
      upload: {
        target: 'temporary-public-storage'
      }
    }
  };
  