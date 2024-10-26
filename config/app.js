const isProd = process.argv.includes('--build');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

}
