export default function CampaignWidget() {
    return (
        <div className="hidden right-40 top-14 lg:fixed lg:block">
        <div className="max-w-sm rounded overflow-hidden shadow-lg lg:grid-col-2 m-4 bg-white text-gray-800">
          <img
            className="w-full"
            src="https://donation-hfn.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDgWH3mJ%2FWhats-App-Image-2023-07-27-at-16-07-54.jpg&w=1920&q=75"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="px-4 py-3 text-white font-bold tracking-wider bg-gray-900 rounded w-full">
              Proceed to pay $3.00
            </button>
            <p className="text-sm my-2 text-gray-500">
              All payments go through a secure gateway
            </p>
          </div>
        </div>
        <section className="max-w-sm m-4">
          <p className="text-center mb-4 text-[#111827] italic text-sm">
            an initiative by
          </p>

          <img
            className="object-contain w-1/2 mx-auto"
            src="/meditation-heartfulness-shri-ram-chandra-mission.png"
            alt=""
          />
        </section>
      </div>
    );
}