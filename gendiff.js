import { program } from 'commander';



program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('1.0.0');

program.command('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'display help for command')
  .option('-f, --format [type]', 'outpur usage information')
    // END

program.parse();