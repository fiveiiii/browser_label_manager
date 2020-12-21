// export default function throttle(fn: Function, delay: number = 1000) {
//   let timer: any = null;
//   return function(): void {
//     if (timer) return;
//     let context: any = this;
//     let arg = arguments;
//     timer = setTimeout(() => {
//       fn.apply(context, arg);
//       timer = null;
//     }, delay);
//   };
// }