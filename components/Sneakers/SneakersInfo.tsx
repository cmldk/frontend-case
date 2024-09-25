import Icon from '../Icon/Icon';

export function SneakersInfo() {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col sm:flex-row md:justify-between gap-20">
        <div className="flex-1 relative overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left p-0 gap-[16px] text-slate-900">
          <Icon
            name="Rectangle25"
            width={60}
            height={60}
            className="absolute top-[0.43px] left-[49%] sm:left-[30px]"
          />
          <Icon
            name="Trophy"
            width={64}
            height={64}
            className="text-amber-900"
            strokeWidth={0.6}
          />
          <h4 className="text-xl font-medium">Nibh viverra</h4>
          <p className="text-lg line-clamp-3">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="flex-1 relative flex flex-col items-center text-center sm:items-start sm:text-left  p-0 gap-[16px] text-slate-900">
          <Icon
            name="Rectangle26"
            width={60}
            height={60}
            className="absolute top-[0.43px] left-[49%] sm:left-[30px]"
          />
          <Icon
            name="Tunnel"
            width={64}
            height={64}
            className="text-amber-900"
            strokeWidth={0.6}
          />
          <h4 className="text-xl font-medium">Cursus amet</h4>
          <p className="text-lg line-clamp-3">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="flex-1 relative flex flex-col items-center text-center sm:items-start sm:text-left  p-0 gap-[16px] text-slate-900">
          <Icon
            name="Rectangle27"
            width={60}
            height={60}
            className="absolute top-[0.43px] left-[53%] sm:left-[40px]"
          />
          <Icon
            name="Tv"
            width={64}
            height={64}
            className="text-amber-900"
            strokeWidth={0.6}
          />
          <h4 className="text-xl font-medium">Ipsum fermentum</h4>
          <p className="text-lg line-clamp-3">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
      </div>
    </section>
  );
}
