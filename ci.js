const { spawn, exec } = require('child_process');

const runCITests = () => {
  const serve = exec('serve -s ./build && wait-on "http://localhost:5000"');

  serve.stdout.on('data', (chunk) => {
    const [, port] = chunk.trim().match(/localhost:(\d+)$/);

    const test = spawn('yarn', ['test:e2e'], {
      stdio: 'inherit',
      env: {
        REACT_APP_BASE_URL: `http://localhost:${port}`,
        PATH: process.env.PATH,
      },
    });

    test.on('close', (code) => {
      process.exit(code);
    });

    test.on('error', (err) => {
      throw err;
    });
  });
};

runCITests();
