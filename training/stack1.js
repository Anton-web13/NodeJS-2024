const start = performance.now();

for (let i = 0; i < 100000; i++) {
    console.log(performance.now() - start);
}