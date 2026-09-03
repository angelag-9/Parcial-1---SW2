export function getGreeting() {
  return 'Parcial 1 - SW2 initialized successfully.';
}

const isExecutedDirectly =
  process.argv[1] && process.argv[1].includes('/src/index.js');

if (isExecutedDirectly) {
  console.log(getGreeting());
}
