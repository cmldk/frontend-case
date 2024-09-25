import { Card } from './Card';

export function Best() {
  return (
    <section className="bg-slate-900 text-white">
      <section className="container mx-auto py-20 flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-[32px] items-center justify-between">
          <h2>The best of the best</h2>
          <button className="order-2 box-border border-2 rounded-lg border-white p-3">
            <span className="px-4 text-xl font-bold text-nowrap">
              Sign up now
            </span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-20 relative">
          <span className="absolute w-[271px] h-[271px] -left-[35px] top-[176px] bg-pink-700 opacity-75 rounded-[50px]"></span>
          <span className="absolute w-[161px] h-[161px] left-[422px] -top-[31px] bg-sky-700 opacity-75 rounded-[50px]"></span>
          <span className="absolute w-[202px] h-[202px] left-[982px] top-[294px] bg-fuchsia-700 opacity-75 rounded-[30px]"></span>
          <span className="absolute w-[232px] h-[232px] left-[1091px] top-[33px] bg-green-700 opacity-75 rounded-[50px]"></span>

          <Card src="/images/best/Picture1.jpg" />
          <Card src="/images/best/Picture3.jpg" />
          <Card src="/images/best/Picture2.jpg" />
        </div>
      </section>
    </section>
  );
}
// /* Content Box */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 0px;
// isolation: isolate;

// width: 394.67px;
// height: 472px;

// /* Blue Gray/900 */
// background: #0F172A;
// /* Blue Gray/900 */
// border: 1px solid #0F172A;
// /* Shadow/Light/XXL */
// box-shadow: 0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px rgba(255, 255, 255, 0.07);
// border-radius: 10px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 1;
// z-index: 1;
