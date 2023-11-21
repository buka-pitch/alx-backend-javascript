process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable',function (){
    let chunk = process.stdin.read();
    if (chunk !== null ){
        process.stdout.write(chunk);
    }
})