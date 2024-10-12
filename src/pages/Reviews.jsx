import { Button } from "../components/ui/moving-border";
import img from "../assets/images/1.jpg";

const Reviews = () => {
  return (
    <div>
      <div className=" mt-32  flex items-center gap-2 text-3xl  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 border-[#0ea5e9]">
        client reviews
        <div>
          <Button
            borderRadius="1.75rem"
            className=" border p-0 m-0 text-[#0ea5e9] border-[#0ea5e9]"
          >
            mind say?
          </Button>
        </div>
      </div>

      <div className="flex gap-6 overflow-hidden relative">
        <div className="flex space-x-6 animate-scroll-left">
          {/* Your card components */}
          <div className="container flex flex-col w-full max-w-lg  mx-auto rounded-md bg-gray-900 text-gray-100 shadow-lg border border-gray-700">
            <div className="container flex flex-col w-full mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Leroy Jenkins</h4>
                    <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-400">
                <p>
                  Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                  dictum lectus consequat vitae. Etiam ut dolor id justo
                  fringilla finibus.
                </p>
                <p>
                  Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                  eu mauris cursus venenatis. Maecenas gravida urna vitae
                  accumsan feugiat. Vestibulum commodo, ante sit urna purus
                  rutrum sem.
                </p>
              </div>
            </div>
          </div>

          <div className="container flex flex-col w-full max-w-lg  mx-auto rounded-md bg-gray-900 text-gray-100 shadow-lg border border-gray-700">
            <div className="container flex flex-col w-full mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Leroy Jenkins</h4>
                    <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-400">
                <p>
                  Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                  dictum lectus consequat vitae. Etiam ut dolor id justo
                  fringilla finibus.
                </p>
                <p>
                  Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                  eu mauris cursus venenatis. Maecenas gravida urna vitae
                  accumsan feugiat. Vestibulum commodo, ante sit urna purus
                  rutrum sem.
                </p>
              </div>
            </div>
          </div>

          <div className="container flex flex-col w-full max-w-lg  mx-auto rounded-md bg-gray-900 text-gray-100 shadow-lg border border-gray-700">
            <div className="container flex flex-col w-full mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Leroy Jenkins</h4>
                    <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-400">
                <p>
                  Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                  dictum lectus consequat vitae. Etiam ut dolor id justo
                  fringilla finibus.
                </p>
                <p>
                  Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                  eu mauris cursus venenatis. Maecenas gravida urna vitae
                  accumsan feugiat. Vestibulum commodo, ante sit urna purus
                  rutrum sem.
                </p>
              </div>
            </div>
          </div>

          {/* Add as many cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
