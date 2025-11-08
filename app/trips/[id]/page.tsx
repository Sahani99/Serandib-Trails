import Image from "next/image";
import { getTripById } from "../../../data/trips";
import ReactMarkdown from "react-markdown";

export default async function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // ✅ unwrap the Promise
  const tripId = Number(resolvedParams.id);
  const trip = getTripById(tripId);

  console.log("🧭 Params ID:", resolvedParams.id);
  console.log("🎒 Found Trip:", trip);

  if (!trip) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">404 - Trip Not Found</h1>
        <p className="mt-4 text-gray-600">
          The requested trip itinerary does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="relative h-96 w-full">
          <Image
            src={trip.image}
            alt={trip.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-10">
            <h1 className="text-5xl font-extrabold text-white z-10">
              {trip.name}
            </h1>
          </div>
        </div>

        {/* Details */}
        <div className="p-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Trip Overview
            </h2>
            <div className="prose prose-blue max-w-none mb-8">
              <ReactMarkdown>{trip.description}</ReactMarkdown>
            </div>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2 text-blue-600">
              Photo Gallery
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {trip.gallery.map((imgSrc, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden shadow-md"
                >
                  <Image
                    src={imgSrc}
                    alt={`${trip.name} photo ${index + 1}`}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
            <h3 className="text-2xl font-bold mb-5 text-gray-800 border-b pb-3">
              Key Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-gray-600">Duration:</span>
                <span className="font-bold text-teal-600">
                  {trip.days} Days
                </span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-600 mb-2">
                  Trip Style:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {trip.categories.map((cat, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
