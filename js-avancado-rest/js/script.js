function greetUser(message, ...names) {
  names.map(name => console.log(`${message} ${name}`))
}
greetUser('Congrats for making it this far,', 'Carol', 'Rodrigo', 'Gisele')