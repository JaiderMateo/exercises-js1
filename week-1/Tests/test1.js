function boolChecker(bool) {
    if (typeof bool === 'boolean') {
      return "You've given me a bool, thanks!";
    }
  
    return "No bool, not cool.";
  }
  
  boolChecker(true);
  process.stdout.write("hello: ");
  process.stdout.write("hello: ");