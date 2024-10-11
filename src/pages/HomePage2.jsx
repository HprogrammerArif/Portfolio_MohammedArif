
import img from "../assets/images/1.jpg";

const HomePage2 = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-2 text-2xl text-[#0ea5e9] font-bold md:mb-3 md:text-3xl lg:text-5xl">
            Mohammed Arif
            <br />I build website for client.
            </h1>
            <p className="md:text-md text-[#0ea5e9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <button
                className="focus-visible:ring-border-primary text-[#0ea5e9] inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3"
                title="Button"
              >
                Button
              </button>
              <button
                className="focus-visible:ring-border-primary text-[#0ea5e9] inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                title="Button"
              >
                Button
              </button>
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 right-auto top-auto w-[45%]">
              <img
                src={img}
                className="aspect-[3/2] size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="mx-[15%] w-full">
              <img
                src={img}
                className="aspect-[2/3] size-full object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-[10%] w-[40%]">
              <img
                src={img}
                className="aspect-square size-full object-cover"
                alt="Relume placeholder image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage2;
